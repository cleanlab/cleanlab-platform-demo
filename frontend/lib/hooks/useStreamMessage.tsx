import { getChatPath } from '@/lib/consts'
import { assertExhaustive } from '@/lib/ts/assertExhaustive'
import { nanoid } from '@/lib/utils'
import {
  useBareMessagesStore,
  useMessagesStore
} from '@/providers/messages-store-provider'
import { useRagAppStore } from '@/providers/rag-app-store-provider'
import type { StoreMessage, ThreadError } from '@/stores/messages-store'
import { client as apiClient, chatApiChatPost } from '@/client/services.gen'
import type { Message_Output } from '@/client/types.gen'
import { useMutation } from '@tanstack/react-query'
import ENV_VARS from '@/lib/envVars'
import { useCallback, useMemo } from 'react'
import { useAppSettings } from './use-app-settings'
import { AGILITY_DEFAULT_ASSISTANT_SLUG } from '../consts'
import type { SetOptional } from 'type-fest'

export const CurrentThreadStatus = {
  threadPending: 'threadPending',
  responsePending: 'responsePending',
  contentPending: 'contentPending',
  metadataPending: 'metadataPending',
  complete: 'complete',
  failed: 'failed'
} as const satisfies Record<string, string>

export type CurrentThreadStatus =
  (typeof CurrentThreadStatus)[keyof typeof CurrentThreadStatus]

const RetryLabels = { sendAgain: 'Send message again', retry: 'Retry' } as const

const getErrorFromCurrentStatus = (status: CurrentThreadStatus | undefined) => {
  const error: ThreadError | undefined = (() => {
    switch (status) {
      case undefined:
      case CurrentThreadStatus.threadPending:
        return {
          message: 'Could not create thread',
          canRetry: true
        }
      case CurrentThreadStatus.responsePending:
        return {
          message: 'Unable to send message',
          canRetry: true
        }
      case CurrentThreadStatus.contentPending:
        return {
          message: 'Response did not complete',
          canRetry: true,
          retryLabel: RetryLabels.sendAgain
        }
      case CurrentThreadStatus.metadataPending:
        return {
          message: 'Could not retrieve trustworthiness score',
          canRetry: true,
          retryLabel: RetryLabels.sendAgain
        }
      case CurrentThreadStatus.complete:
      case CurrentThreadStatus.failed:
        return undefined
      default:
        assertExhaustive(status)
    }
  })()
  if (error) {
    error.atStatus = status
  }
  return error
}

const createInitialMessages = ({
  content,
  threadId
}: {
  content: string
  threadId: string
}) => {
  const dateString = new Date().toISOString()

  return [
    {
      localId: nanoid(),
      role: 'user',
      content: content,
      metadata: {},
      isPending: true
    },
    {
      localId: nanoid(),
      role: 'assistant',
      content: '',
      metadata: {},
      isPending: true,
      isContentPending: true
    }
  ] as const satisfies StoreMessage[]
}

function useStreamMessage() {
  const currentThread = useMessagesStore(state => state.currentThread)
  const setCurrentThread = useMessagesStore(state => state.setCurrentThread)
  const appendMessage = useMessagesStore(state => state.appendMessage)
  const updateMessageContent = useMessagesStore(
    state => state.updateMessageContent
  )
  const updateMessage = useMessagesStore(state => state.updateMessage)
  const updateMessageMetadata = useMessagesStore(
    state => state.updateMessageMetadata
  )
  const messageIsPending = useMessagesStore(
    state => state.currentThread?.isPending
  )
  const setThreadStatus = useMessagesStore(state => state.setThreadStatus)

  const addHistoryThread = useRagAppStore(state => state.addHistoryThread)
  const [appSettings] = useAppSettings()

  const setDone = useCallback(
    (opts: SetOptional<Parameters<typeof setThreadStatus>[0], 'status'>) => {
      setThreadStatus({
        status: opts.error
          ? CurrentThreadStatus.failed
          : CurrentThreadStatus.complete,
        ...opts
      })
    },
    [setThreadStatus]
  )

  const bareStore = useBareMessagesStore()

  const chatMutation = useMutation({
    mutationFn: async (content: string) => {
      // ensure baseURL targets backend, not next server
      const baseURL =
        ENV_VARS.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
      apiClient.setConfig({ baseURL })
      const { data } = await chatApiChatPost({
        body: { role: 'user', content }
      })
      return data
    }
  })

  const postMessage = useCallback(
    async ({
      threadId,
      localThreadId,
      messageContent
    }: {
      threadId: string
      localThreadId?: string
      messageContent?: string
    }) => {
      if (!threadId) return
      setThreadStatus({
        threadId,
        localThreadId,
        status: CurrentThreadStatus.responsePending,
        error: undefined
      })

      try {
        const data = (await chatMutation.mutateAsync(
          messageContent || ''
        )) as Message_Output
        const assistantMessage: StoreMessage = {
          localId: nanoid(),
          role: 'assistant',
          content: data.content,
          metadata: data.metadata
        }
        appendMessage({ threadId, message: assistantMessage })
        // Update snapshot in history for this thread
        addHistoryThread({
          title: messageContent || 'New thread',
          assistantId:
            appSettings.assistantId ?? AGILITY_DEFAULT_ASSISTANT_SLUG,
          thread: { id: threadId } as any,
          snapshot: {
            user: { content: messageContent || '', metadata: {} },
            assistant: { content: data.content || '', metadata: data.metadata }
          }
        })
        setDone({ threadId, localThreadId })
      } catch (e) {
        setDone({
          threadId,
          error: { message: 'Request failed', canRetry: true },
          status: CurrentThreadStatus.failed
        })
      }
    },
    [appendMessage, chatMutation, setDone, setThreadStatus]
  )

  const createThreadPending = false

  const isPending = messageIsPending || createThreadPending
  const createThreadAndPostMessage = useCallback(
    async ({ messageContent }: { messageContent: string }) => {
      const localThreadId = nanoid()
      addHistoryThread({
        title: messageContent || 'New thread',
        assistantId: appSettings.assistantId ?? AGILITY_DEFAULT_ASSISTANT_SLUG,
        thread: { id: localThreadId } as any,
        snapshot: {
          user: { content: messageContent || '', metadata: {} },
          assistant: { content: '', metadata: {} }
        }
      })
      const initialMessages = createInitialMessages({
        threadId: localThreadId,
        content: messageContent
      })
      setCurrentThread({
        localThreadId,
        threadId: localThreadId,
        messages: initialMessages,
        isPending: true,
        status: CurrentThreadStatus.threadPending
      })
      // Immediately post to backend and treat this as a standalone Q+A thread
      window?.history.pushState({}, '', getChatPath(localThreadId))
      postMessage({
        threadId: localThreadId,
        localThreadId,
        messageContent: messageContent
      })
    },
    [addHistoryThread, setCurrentThread, postMessage]
  )

  const sendMessage = useCallback(
    (messageContent: string) => {
      if (isPending) {
        return
      }
      const currentThreadId = currentThread?.threadId

      // Always start a new thread for each new submission
      createThreadAndPostMessage({ messageContent })
    },
    [appendMessage, createThreadAndPostMessage, isPending, postMessage]
  )

  const retrySendMessage = useCallback(() => {
    const lastUserMessage = currentThread?.messages?.find(
      m => m.role === 'user'
    )
    const existingThreadId = currentThread?.threadId
    if (!lastUserMessage?.content || !existingThreadId) return
    // Add optimistic assistant placeholder to show loading state
    appendMessage({
      threadId: existingThreadId,
      message: {
        localId: nanoid(),
        role: 'assistant',
        content: '',
        metadata: {},
        isPending: true,
        isContentPending: true
      }
    })
    postMessage({
      threadId: existingThreadId,
      localThreadId: currentThread?.localThreadId,
      messageContent: lastUserMessage.content
    })
  }, [appendMessage, currentThread, postMessage])

  return useMemo(
    () => ({
      sendMessage,
      retrySendMessage
    }),
    [retrySendMessage, sendMessage]
  )
}

export { useStreamMessage }
