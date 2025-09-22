[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Chat

Tools

The following is a list of all the tools available to the modes within the [Chat](https://docs.cursor.com/chat/overview).

While these are fixes for Cursor’s default modes, you can enable or disable any of these tools when building your own [custom modes](https://docs.cursor.com/chat/custom-modes).

Agents can perform up to 25 tool calls per session. If this limit is reached, you can press “Continue” to allow additional tool calls (each “Continue” counts as one [request](https://docs.cursor.com/account/plans-and-usage)).

## [​](https://docs.cursor.com/chat/tools\#search)  Search

These tools are used to search your codebase and the web to find relevant information.

## Read File

Read the contents of a file within your codebase.

— Up to 750 lines in max mode

— Up to 250 lines in other modes

## List Directory

Read the structure of a directory without reading the contents of the files.

## Codebase

Perform semantic searches within your [indexed codebase](https://docs.cursor.com/context/codebase-indexing).

## Grep

Search for exact keywords or patterns within files.

## Search Files

Quickly find files by name using fuzzy matching.

## Web

Generate search queries and perform web searches.

## Fetch Rules

Retrieve specific [rules](https://docs.cursor.com/context/rules) based on rule type and description.

## [​](https://docs.cursor.com/chat/tools\#edit)  Edit

These tools are used to make specific edits to your files and codebase.

## Edit & Reapply

Suggest edits to files and [applies](https://docs.cursor.com/chat/apply) them automatically.

## Delete File

Delete files autonomously (can be disabled in settings).

## [​](https://docs.cursor.com/chat/tools\#run)  Run

The Chat has the ability to interact with your terminal.

## Terminal

Cursor can execute terminal commands, and montitor the output.

By default, Cursor will use the first terminal profile available within Cursor that it can use.

To set your preferred terminal profile:

1. Open Command Palette ( `Cmd/Ctrl+Shift+P`)
2. Search for “Terminal: Select Default Profile”
3. Choose your desired profile

## [​](https://docs.cursor.com/chat/tools\#mcp-servers)  MCP Servers

Chat can make use of configured MCP servers to be able to interact with external services, such as databases or 3rd party APIs.

## Toggle MCP Servers

Toggle all available MCP servers. This will respect auto-run option.

Learn more about [MCP Servers](https://docs.cursor.com/context/model-context-protocol).

## [​](https://docs.cursor.com/chat/tools\#advanced-options)  Advanced Options

### [​](https://docs.cursor.com/chat/tools\#auto-apply-edits)  `Auto-apply Edits`

Automatically apply edits without manual confirmation.

### [​](https://docs.cursor.com/chat/tools\#auto-run)  `Auto-run`

Automatically execute terminal commands and accept edits. Useful for running test suites and verifying changes.

### [​](https://docs.cursor.com/chat/tools\#guardrails)  Guardrails

Define guardrails and allow/deny lists for specific tools to control automatic execution. Configure these settings as needed.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/agent/yolo-settings.png)

### [​](https://docs.cursor.com/chat/tools\#auto-fix-errors)  `Auto-fix Errors`

Automatically resolve linter errors and warnings.

Was this page helpful?

YesNo

[Custom Modes](https://docs.cursor.com/chat/custom-modes) [Apply](https://docs.cursor.com/chat/apply)

On this page

- [Search](https://docs.cursor.com/chat/tools#search)
- [Edit](https://docs.cursor.com/chat/tools#edit)
- [Run](https://docs.cursor.com/chat/tools#run)
- [MCP Servers](https://docs.cursor.com/chat/tools#mcp-servers)
- [Advanced Options](https://docs.cursor.com/chat/tools#advanced-options)
- [Auto-apply Edits](https://docs.cursor.com/chat/tools#auto-apply-edits)
- [Auto-run](https://docs.cursor.com/chat/tools#auto-run)
- [Guardrails](https://docs.cursor.com/chat/tools#guardrails)
- [Auto-fix Errors](https://docs.cursor.com/chat/tools#auto-fix-errors)

![](https://docs.cursor.com/chat/tools)