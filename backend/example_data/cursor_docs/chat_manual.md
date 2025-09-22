[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Chat

Manual Mode

Manual mode is designed for making targeted code modifications when you know exactly what changes are needed and where.

Unlike Agent mode, it does not explore the codebase or run terminal commands; it relies entirely on your specific instructions and the context you provide (e.g., via `@`-mentioning files).

## [​](https://docs.cursor.com/chat/manual\#manual%E2%80%99s-capabilities)  Manual’s Capabilities

## Precise Editing

Applies specific code changes exactly as instructed by the user.

## Direct Instruction

Follows user commands without autonomous exploration or planning.

## Multi-File Edits

Can make coordinated changes across multiple specified files.

## Focused Toolset

Primarily uses file editing capabilities; lacks search and terminal tools.

Make sure to read [chat overview](https://docs.cursor.com/chat/overview) to learn more about how modes work in Cursor.

## [​](https://docs.cursor.com/chat/manual\#using-manual-mode)  Using Manual Mode

Manual mode allows for a more precise and targeted approach to code editing. It is designed for making targeted code modifications when you know exactly what changes are needed and where.

To make use of Manual mode, you need to explicitly mention the files you want to edit using the `@` symbol.

1

🧠 Understand Request

Create your request as you normally would in the chat.

2

🔍 Explore Codebase

Add context to your request by mentioning the files you want to edit using the `@` symbol.

3

📝 Plan Changes

After applying, you can review the changes. Manual mode may flag potential issues if linters are configured.

4

🔧 Execute Changes

Once edits are applied, the task is considered complete.

Manual mode excels when you need control and precision, acting as an AI pair programmer executing your specific plan. Provide clear context and instructions for best results.

## [​](https://docs.cursor.com/chat/manual\#example-use-cases)  Example Use Cases

Provide explicit file paths (using `@`) and clear descriptions of the changes you want.

**Refactoring Specific Functions**

`“In @src/utils/helpers.ts and @src/components/UserProfile.tsx,rename the function getUserData to fetchUserProfile and update all call sites within these files.”`

Manual mode will:

1. Locate `getUserData` function definitions and calls _only within the specified files_.
2. Rename the function and update the call sites as instructed.

**Applying Boilerplate**

`“Add the standard copyright header comment to the top of @src/newModule.js and @src/newService.java”`

Manual mode will:

1. Open the specified files.
2. Insert the provided header comment at the beginning of each file.

## [​](https://docs.cursor.com/chat/manual\#configuration-options)  Configuration Options

- **Select a Model**: Pre-select a model specifically for Manual mode.
- **Edit Keybindings**: Set custom keybindings to quickly activate Manual mode.
- **Available Tools**: Manual mode primarily uses the file editing tool. Search and terminal tools are disabled.

Was this page helpful?

YesNo

[Ask mode](https://docs.cursor.com/chat/ask) [Custom Modes](https://docs.cursor.com/chat/custom-modes)

On this page

- [Manual’s Capabilities](https://docs.cursor.com/chat/manual#manual%E2%80%99s-capabilities)
- [Using Manual Mode](https://docs.cursor.com/chat/manual#using-manual-mode)
- [Example Use Cases](https://docs.cursor.com/chat/manual#example-use-cases)
- [Configuration Options](https://docs.cursor.com/chat/manual#configuration-options)