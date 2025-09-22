[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Chat

Agent Mode

Agent is the default and most autonomous mode in Cursor, designed to handle complex coding tasks with minimal guidance. It has all [tools](https://docs.cursor.com/chat/tools) enabled to autonomously explore your codebase, read documentation, browse the web, edit files, and run terminal commands to complete tasks efficiently.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/agent.png)

## [​](https://docs.cursor.com/chat/agent\#agent%E2%80%99s-capabilities)  Agent’s Capabilities

## Autonomous Operation

Independently explores your codebase, identifies relevant files, and makes necessary changes

## Full Tool Access

Uses all available tools to search, edit, create files, and run terminal commands

## Contextual Understanding

Builds a comprehensive understanding of your project structure and dependencies

## Multi-step Planning

Breaks complex tasks into manageable steps and executes them in sequence

Make sure to read [chat overview](https://docs.cursor.com/chat/overview) to learn more about how modes work in Cursor.

## [​](https://docs.cursor.com/chat/agent\#agent%E2%80%99s-workflow)  Agent’s Workflow

Much like a human, Agent mode follows a systematic approach to completing tasks:

1

🧠 Understand Request

Agent mode analyzes your request, and the context of the codebase to fully comprehend the task requirements and goals.

2

🔍 Explore Codebase

The agent may search through your codebase, documentation, and the web to identify relevant files and understand the current implementation.

3

📝 Plan Changes

Based on the analysis, the agent breaks down the task into smaller steps and plans the changes, learning from the available context as it goes.

4

🔧 Execute Changes

The agent makes the necessary code modifications according to the plan across your entire codebase, also potentially suggesting new libraries, terminal commands to run or steps you should make outside of Cursor.

5

🔍 Verify Results

The agent will confirm the changes look correct after being made by [applying them](https://docs.cursor.com/chat/apply). If it notices any issues or linter errors (when supported by the language), it will attempt to fix them.

6

✅ Task Complete

Once the agent is happy, it yields back and summarizes the changes it made.

Agent mode creates checkpoints before making changes, allowing you to revert if needed.

Learn more about [checkpoints](https://docs.cursor.com/chat/overview#checkpoints).

## [​](https://docs.cursor.com/chat/agent\#example-use-cases)  Example Use Cases

For best results, be specific about what you want to accomplish, but you don’t need to specify how the agent should approach the task.

Copy

```md
"Add a dark mode toggle to my React application"

```

Agent mode will:

1. Identify your application’s styling approach
2. Add necessary theme state management
3. Create toggle component
4. Update styling across relevant components
5. Add persistence if appropriate

Copy

```md
"Optimize my API calls to implement caching and reduce redundant requests"

```

Agent mode will:

1. Find all API call locations
2. Implement appropriate caching strategy
3. Add cache invalidation logic
4. Update components to use cached data

## [​](https://docs.cursor.com/chat/agent\#configuration-options)  Configuration Options

- **Select a Model**: Pre-select a model for agent mode
- **Edit Keybindings**: Set keybindings for agent mode
- **Toggle Available Tools**: Toggle available tools
- **Enable Auto-run and Auto-fix Errors**: Enable auto-run and auto-fix errors (read more about [tool settings](https://docs.cursor.com/chat/tools#advanced-options))

When using Agent mode with auto-run enabled, review proposed changes carefully before confirming major modifications.

Was this page helpful?

YesNo

[Overview](https://docs.cursor.com/chat/overview) [Ask mode](https://docs.cursor.com/chat/ask)

On this page

- [Agent’s Capabilities](https://docs.cursor.com/chat/agent#agent%E2%80%99s-capabilities)
- [Agent’s Workflow](https://docs.cursor.com/chat/agent#agent%E2%80%99s-workflow)
- [Example Use Cases](https://docs.cursor.com/chat/agent#example-use-cases)
- [Configuration Options](https://docs.cursor.com/chat/agent#configuration-options)

![](https://docs.cursor.com/chat/agent)