[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Chat

Overview

## [​](https://docs.cursor.com/chat/overview\#what-is-chat%3F)  What is Chat?

Chat (previously “Composer”) is Cursor’s AI assistant that lives in your sidebar, letting you interact with your codebase through natural language. You can ask questions, request code edits, get terminal command suggestions, and more - all without switching context.

### [​](https://docs.cursor.com/chat/overview\#core-capabilities)  Core Capabilities

## Understand Code

Ask questions about unfamiliar code, get explanations, or explore your codebase

## Edit Code

Make small tweaks or large multi-file changes without manually navigating files

## Run Commands

Get terminal command suggestions for your specific use case

## Complex Operations

Execute advanced tasks through AI agents that can reason about your code

## [​](https://docs.cursor.com/chat/overview\#getting-started)  Getting Started

Access Chat in the sidebar with `⌘+L` (Mac) or `Ctrl+L` (Windows/Linux). Type your request in natural language, and the AI will respond accordingly.

## [​](https://docs.cursor.com/chat/overview\#example-use-cases)  Example Use Cases

### [​](https://docs.cursor.com/chat/overview\#feature-implementation)  Feature Implementation

Chat has the ability to learn your codebase and make changes to it on your behalf. This is a powerful way to implement new features, and is the perfect tool for feature requests.

Simply explain to the chat, using [Agent mode](https://docs.cursor.com/chat/agent), what feature you would like it to implement. Chat will look at your codebase, and any relevant files, and sugget any neccessary changes across these fields.

In addition to code edits, Chat may sugget other changes, like adding new files, or adding packages with a package manager.

### [​](https://docs.cursor.com/chat/overview\#refactoring)  Refactoring

By leaning into it’s understanding of your codebase, and how each component fits together, Chat can help you refactor your codebase.

Explain to the chat the current structure of your codebase, and the changes you’d like to make. The agent can read the releavant code, plan it’s changes, and implement them to make refactors and proeject restructuring a breeze.

### [​](https://docs.cursor.com/chat/overview\#new-project-setup)  New Project Setup

Chat is excellent at helping you get a new project off the ground!

Tell the chat what kind of project you are wanting to build, and explain any specific requirements you have for the desired technical stack, and the Agent will get to work for you, create the project structure, install the dependencies, and even write the initial code to get you started as quickly as possible.

## [​](https://docs.cursor.com/chat/overview\#key-concepts)  Key Concepts

### [​](https://docs.cursor.com/chat/overview\#modes)  Modes

Chat offers different modes optimized for specific tasks:

[**Agent** \\
\\
Allow Cursor to **autonomously learn** your codebase, and make **codebase-wide changes** on your behalf](https://docs.cursor.com/chat/agent) [**Ask** \\
\\
Get explanations and answers about your codebase, and plan out features with the AI](https://docs.cursor.com/chat/ask) [**Manual** \\
\\
Make focused edits, using only the context you provide](https://docs.cursor.com/chat/manual)

[**Custom Modes** \\
\\
Create custom modes to suit your specific workflows](https://docs.cursor.com/chat/custom-modes)

Switch between modes using the mode picker or `⌘.` shortcut to match your current needs.

### [​](https://docs.cursor.com/chat/overview\#context)  Context

Chat understands your codebase by analyzing:

1. **Open files**: What you’re currently viewing
2. **@-symbols**: Use [@-symbols](https://docs.cursor.com/context/@-symbols/overview) to reference specific code elements
3. **Project structure**: The organization of your files and dependencies

The interface suggests relevant context based on your query, ensuring accurate responses.

### [​](https://docs.cursor.com/chat/overview\#code-edits)  Code Edits

When Chat suggests code changes:

1. **Review**: See the proposed changes in a diff view
2. **Apply**: In Ask mode, explicitly apply changes with the “Apply” button
3. **Accept/Reject**: After changes are made, decide whether to keep or discard them

Cursor’s custom model applies suggested edits to files with thousands of lines in seconds.

[**Learn More about Apply** \\
\\
Find out more about Cursor’s custom-trained model for applying changes.](https://docs.cursor.com/chat/apply)

### [​](https://docs.cursor.com/chat/overview\#tabs)  Tabs

When using the Chat, you are able to run multiple conversations at once, and switch between them using Tabs.

To do this, simply hit `⌘+T` (Mac) or `Ctrl+T` (Windows/Linux) to create a new tab. Unlike chat history, tabs can be executed in parallel, and are not dependent on the previous request.

Cursor will intelligently track all simultaneous conversations, and allow you to switch between them at any time, while ensuring multiple tabs don’t attempt to make changes to the same files at once.

### [​](https://docs.cursor.com/chat/overview\#checkpoints)  Checkpoints

Sometimes you may want to revert to a previous state of your codebase. Cursor helps you with this by automatically creating checkpoints of your codebase at each request you make, as well every time the AI makes changes to your codebase.

To revert to a previous state, you can either:

- Click the `Restore Checkpoint` button that appears within the input box of a previous request, as shown below
- Click the + button that shows at the left of a message in the chat history when hovered

![Checkpoints](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/chat-checkpoint.png)

### [​](https://docs.cursor.com/chat/overview\#rules)  Rules

Cursor comes out the box with a carefully designed set of behaviors, but you can customize Cursor to fit your specific workflows, both in it’s interactions with you, and how it makes changes to your code.

[**Learn More about Rules** \\
\\
Learn about Cursor’s “rules” system for customizing AI behavior.](https://docs.cursor.com/context/rules)

### [​](https://docs.cursor.com/chat/overview\#model-selection)  Model Selection

By default, Cursor has an ‘auto-select’ option, which will intelligently select the best premium model for your request. This will always use 1 premium request as is, unless you have certain settings enabled that increase this, like long-context mode.

If you want more granular control over which model is used, you can manually select a model from the model picker.

[**Learn More about Models** \\
\\
Learn about Cursor’s different AI models and how to switch between them.](https://docs.cursor.com/settings/models)

When using custom modes, you can also select a fixed model for each mode, such as selecting `o1` for a `Planning` mode.

### [​](https://docs.cursor.com/chat/overview\#history-and-cost)  History and Cost

Access previous conversations through the history icon. For models with usage-based pricing, view cost breakdowns by clicking the history icon.

![Chat Cost](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/chat-cost.png)

## [​](https://docs.cursor.com/chat/overview\#managing-long-conversations)  Managing Long Conversations

For extended conversations, Cursor summarizes earlier messages using smaller models to maintain speed and relevance without losing context.

When approaching the context window limit, Chat suggests starting a new conversation with reference to the current one.

![New Chat Suggestion](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/new-chat.png)

## [​](https://docs.cursor.com/chat/overview\#questions)  Questions

**What happened to the Composer?**

In past versions of Cursor, we had two seperate concepts: the chat, and the composer. The chat was a read-only interface, like the [Ask mode](https://docs.cursor.com/chat/ask), and the composer was what we now call [Manual mode](https://docs.cursor.com/chat/manual). With the addition of the Agent mode, and the idea that the AI was now capable at learning your codebase on its own, we decided to combine the chat and composer into a single interface, and call it Chat.

**Can I get notifications when Chat finishes processing?**

Yes, enable sound notifications from `Settings` → `Features` → `Chat` → `Play sound on finish` (Beta feature)

**How are long conversations handled?**

For long conversations, Cursor summarizes earlier messages with smaller models to maintain responsiveness while preserving key details.

**Can I access my conversation history on another computer?**

No, conversation history is stored locally and not tied to your Cursor account, so it’s only available on the computer where it was created.

**How do I change the default Chat mode?**

Set your default mode from Settings → Features → Chat → Default chat mode to your preferred mode or the most recently used one.

Was this page helpful?

YesNo

[Advanced Features](https://docs.cursor.com/tab/advanced-features) [Agent Mode](https://docs.cursor.com/chat/agent)

On this page

- [What is Chat?](https://docs.cursor.com/chat/overview#what-is-chat%3F)
- [Core Capabilities](https://docs.cursor.com/chat/overview#core-capabilities)
- [Getting Started](https://docs.cursor.com/chat/overview#getting-started)
- [Example Use Cases](https://docs.cursor.com/chat/overview#example-use-cases)
- [Feature Implementation](https://docs.cursor.com/chat/overview#feature-implementation)
- [Refactoring](https://docs.cursor.com/chat/overview#refactoring)
- [New Project Setup](https://docs.cursor.com/chat/overview#new-project-setup)
- [Key Concepts](https://docs.cursor.com/chat/overview#key-concepts)
- [Modes](https://docs.cursor.com/chat/overview#modes)
- [Context](https://docs.cursor.com/chat/overview#context)
- [Code Edits](https://docs.cursor.com/chat/overview#code-edits)
- [Tabs](https://docs.cursor.com/chat/overview#tabs)
- [Checkpoints](https://docs.cursor.com/chat/overview#checkpoints)
- [Rules](https://docs.cursor.com/chat/overview#rules)
- [Model Selection](https://docs.cursor.com/chat/overview#model-selection)
- [History and Cost](https://docs.cursor.com/chat/overview#history-and-cost)
- [Managing Long Conversations](https://docs.cursor.com/chat/overview#managing-long-conversations)
- [Questions](https://docs.cursor.com/chat/overview#questions)

![Checkpoints](https://docs.cursor.com/chat/overview)

![Chat Cost](https://docs.cursor.com/chat/overview)

![New Chat Suggestion](https://docs.cursor.com/chat/overview)