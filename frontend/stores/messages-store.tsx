import type { Message_Output as Message } from '@/client/types.gen'
import { CurrentThreadStatus as ResponseStreamingStatus } from '@/lib/hooks/useStreamMessage'
import { isCurrentThread } from '@/lib/isCurrentThread'
import type { Prettify } from '@/lib/ts/Prettify'
import { produce } from 'immer'
import { isNil, merge } from 'lodash'
import { SetOptional } from 'type-fest'
import { type StateCreator, createStore } from 'zustand'
import { assertExhaustive } from '../lib/ts/assertExhaustive'
import { sameByIdOrLocalId } from './history-thread-store'
export type MessageMetadata = Record<string, any>

export type StoreMessage = SetOptional<Omit<Message, 'id'>, 'metadata'> &
  (
    | {
        localId: string
        id?: string
      }
    | {
        id: string
        localId?: string
      }
  ) & {
    isPending?: boolean
    isContentPending?: boolean
    error?: string
  }

export type ThreadError = {
  message: string
  canRetry: boolean
  retryLabel?: string
  atStatus?: ResponseStreamingStatus
}

export type CurrentThread = {
  messages: StoreMessage[]
  isPending?: boolean
  status?: ResponseStreamingStatus
  error?: ThreadError | undefined
} & (
  | {
      localThreadId: string
      threadId?: string
    }
  | {
      threadId: string
      localThreadId?: string
    }
)

export type MessagesState = {
  currentThread?: CurrentThread | undefined
}

const initialData = {
  currentThread: undefined
} as const satisfies MessagesState

export const getIsPending = (status: ResponseStreamingStatus) => {
  return status === 'threadPending' || status === 'contentPending'
}

export type MessagesActions = {
  /**
   * Fully reset the store state
   * @returns
   */
  resetState: () => void
  setCurrentThread: (currentThread: CurrentThread | undefined) => void
  appendMessage: (options: { threadId: string; message: StoreMessage }) => void
  updateMessageContent: (options: {
    threadId: string
    messageId: string
    newContent: string
  }) => void
  updateMessageMetadata: (options: {
    threadId: string
    localMessageId?: string
    messageId: string
    metadata?: MessageMetadata
  }) => void
  updateMessage: (options: {
    threadId: string
    messageId: string
    data: Partial<Omit<StoreMessage, 'id'>>
  }) => void
  setThreadDone: (options: {
    threadId?: string
    localThreadId?: string
    error?: ThreadError | undefined
  }) => void
  setThreadStatus: (options: {
    threadId?: string
    localThreadId?: string
    status: ResponseStreamingStatus
    error?: ThreadError | undefined
  }) => void
}

export type MessagesSlice = Prettify<MessagesState & MessagesActions>

export const createMessagesSlice: StateCreator<MessagesSlice> = (set, get) => ({
  ...initialData,
  resetState: () => set(() => initialData),
  setCurrentThread: currentThread => {
    set({ currentThread })
  },
  appendMessage: ({ threadId, message: newMessage }) => {
    const currentThread = get().currentThread
    if (currentThread?.threadId !== threadId) {
      return
    }
    const nextCurrentThread = produce(currentThread, draft => {
      const existingMessageIndex = draft.messages.findIndex(m => {
        return sameByIdOrLocalId(m, newMessage)
      })
      if (existingMessageIndex !== -1) {
        const existingMessage = draft.messages[existingMessageIndex]
        draft.messages[existingMessageIndex] = {
          ...newMessage,
          ...(newMessage.localId || !existingMessage.localId
            ? {}
            : {
                localId: existingMessage.localId
              })
        }
      } else {
        // Message doesn't already exist, but let's check if there are any optimistic messages we can replace.
        const optimisticMessageIndex = draft.messages.findIndex(m => {
          return !m.id && m.role === newMessage.role
        })
        if (optimisticMessageIndex !== -1) {
          const existingMessage = draft.messages[optimisticMessageIndex]
          draft.messages[optimisticMessageIndex] = {
            ...newMessage,
            ...(newMessage.localId || !existingMessage.localId
              ? {}
              : {
                  localId: existingMessage.localId
                })
          }
        } else {
          draft.messages.push(newMessage)
        }
      }
    })
    set({ currentThread: nextCurrentThread })
  },
  updateMessageContent: ({ threadId, messageId, newContent }) => {
    const currentThread = get().currentThread
    if (currentThread?.threadId !== threadId) return
    let nextCurrentThread = produce(currentThread, draft => {
      const existingMessageIndex = draft.messages.findIndex(
        message => message.id === messageId
      )
      if (existingMessageIndex !== -1) {
        const originalContent = draft.messages[existingMessageIndex].content
        draft.messages[existingMessageIndex].content =
          originalContent + newContent
      }
    })
    set({ currentThread: nextCurrentThread })
  },
  updateMessage: ({ threadId, messageId, data }) => {
    const currentThread = get().currentThread
    if (currentThread?.threadId !== threadId) return
    let nextCurrentThread = produce(currentThread, draft => {
      const existingMessageIndex = draft.messages.findIndex(
        message => message.id === messageId
      )
      if (existingMessageIndex !== -1) {
        const originalMessage = draft.messages[existingMessageIndex]
        merge(originalMessage, data)
      }
    })
    set({ currentThread: nextCurrentThread })
  },
  setThreadStatus: ({ threadId, localThreadId, ...threadProps }) => {
    const currentThread = get().currentThread
    if (!isCurrentThread({ currentThread, localThreadId, threadId })) {
      return
    }
    if (!currentThread) return
    const { status, error } = threadProps

    if (status) {
      set(state => {
        if (!state.currentThread) return {}
        return {
          currentThread: produce(state.currentThread, draft => {
            draft.status = status
            if ('error' in threadProps) {
              draft.error = threadProps.error
            }
          })
        }
      })
    }

    switch (status) {
      case ResponseStreamingStatus.threadPending:
      case ResponseStreamingStatus.responsePending:
      case ResponseStreamingStatus.contentPending:
      case ResponseStreamingStatus.metadataPending:
        set(({ currentThread }) => {
          if (!currentThread) return {}
          return {
            currentThread: produce(currentThread, draft => {
              draft.isPending = true
            })
          }
        })
        break
      case ResponseStreamingStatus.complete:
      case ResponseStreamingStatus.failed:
        get().setThreadDone({
          threadId: currentThread.threadId,
          localThreadId: currentThread.localThreadId
        })
        break
      default:
        assertExhaustive(status)
    }
    if (error) {
      set(state => {
        if (!state.currentThread) return state
        return {
          currentThread: produce(state.currentThread, draft => {
            if (!draft) return draft
            draft.error = error
            return draft
          })
        }
      })
    }
  },
  setThreadDone: ({ threadId, localThreadId, error }) => {
    const currentThread = get().currentThread
    if (!isCurrentThread({ currentThread, localThreadId, threadId })) {
      return
    }
    let nextCurrentThread = produce(currentThread, draft => {
      if (!draft?.messages) return
      draft?.messages.forEach(message => {
        message.isPending = false
        message.isContentPending = false
        if (message.isPending || message.isContentPending) {
          message.error = error?.message
        }
      })
      draft.isPending = false
    })
    set({ currentThread: nextCurrentThread })
  },
  updateMessageMetadata: ({ threadId, messageId, metadata }) => {
    const currentThread = get().currentThread
    if (currentThread?.threadId !== threadId) return
    let nextCurrentThread = produce(currentThread, draft => {
      const existingMessageIndex = draft.messages.findIndex(
        message => message.id === messageId
      )
      if (existingMessageIndex !== -1) {
        if (!draft.messages[existingMessageIndex].metadata) {
          draft.messages[existingMessageIndex].metadata = {}
        }
        if (!metadata) return
        Object.entries(metadata).forEach(([key, value]) => {
          if (isNil(value)) return

          // Typescript can't infer the type of the key here, so we need to ignore the type check
          // @ts-ignore
          draft.messages[existingMessageIndex].metadata[key] = value
        })
      }
    })
    set({ currentThread: nextCurrentThread })
  }
})

export const createMessagesStore = () => {
  return createStore<MessagesSlice>((...args) => ({
    ...createMessagesSlice(...args)
  }))
}
