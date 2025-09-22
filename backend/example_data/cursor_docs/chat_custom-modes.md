[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Chat

Custom Modes

Custom modes allows you to compose new modes with tools and prompts that fits your workflow. These are in addition to [Agent](https://docs.cursor.com/chat/agent.mdx), [Ask](https://docs.cursor.com/chat/ask.mdx), and [Manual](https://docs.cursor.com/chat/manual.mdx) mode which are built-in.

Custom modes are currently in beta.

You can enable custom modes from `Settings` → `Features` → `Chat` → `Custom modes`

## [​](https://docs.cursor.com/chat/custom-modes\#creating-a-custom-mode)  Creating a Custom Mode

To create a custom mode, you can open the mode menu and click `Add custom mode`. From there, you will have the option to select name, icon, shortcut as well as enabled tools and custom instructions.

![Create custom mode](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/custom-modes.png)

We’re considering adding a `.cursor/modes.json` file to your project to make it easier to create and share custom modes.

## [​](https://docs.cursor.com/chat/custom-modes\#example-modes)  Example Modes

While you can make a mode with any combination of tools and instructions, here are some examples of modes that you might find useful.

## 👨‍🎓 Learn

Encourages detailed explanations and frequent clarifying questions, without automatically applying edits or running tools.

**Tools:**

All `Search`

**Custom Instructions:**

Focus on explaining concepts thoroughly and ask clarifying questions before providing solutions

## 🔄 Refactor

Focuses exclusively on enhancing existing code structure, without introducing new functionality or reading additional files.

**Tools:**

`Edit & Reapply`

**Custom Instructions:**

Focus solely on improving existing code structure without adding new functionality

## 📝 Plan

Generates comprehensive implementation plans without directly modifying code, documenting the approach clearly in a `plan.md` file.

**Tools:**

`Codebase`, `Read file`, `Terminal`

**Custom Instructions:**

Create detailed implementation plans without making direct code changes. Write it to `plan.md`

## 📚 Research

Collects extensive information from various sources, including web searches and codebase exploration, before recommending solutions.

**Tools:**

`Codebase`, `Web`, `Read file`, `Search files`

**Custom Instructions:**

Gather comprehensive information from multiple sources before suggesting solutions

## 💥 Yolo

Aggressively applies all available tools, making bold changes proactively with minimal user confirmation.

**Tools:**

All tools with `Auto-apply edits` and `Auto-run` enabled

**Custom Instructions:**

Take initiative and make bold changes with minimal confirmation

## 🐛 Debug

Conducts an in-depth investigation by gathering extensive context from source files and terminal outputs, then proposes precise, targeted fixes.

**Tools:**

All `Search`, `Terminal`, `Edit & Reapply`

**Custom Instructions:**

Thoroughly investigate issues by gathering extensive context before proposing targeted fixes

## [​](https://docs.cursor.com/chat/custom-modes\#custom-mode-setting)  Custom Mode Setting

Cursor provides a powerful set of tools that you can use to customize your chat experience.

[**Tools** \\
\\
Learn about all the available tools that can be used in Chat.](https://docs.cursor.com/chat/tools)

## [​](https://docs.cursor.com/chat/custom-modes\#resources)  Resources

Alongside the above list, there are also a number of community resources available with ideas and suggestions for custom modes that have proven effective for other users.

[**Playbooks.com** \\
\\
Explore a curated collection of custom modes submitted by the community!](https://playbooks.com/modes)

Was this page helpful?

YesNo

[Manual Mode](https://docs.cursor.com/chat/manual) [Tools](https://docs.cursor.com/chat/tools)

On this page

- [Creating a Custom Mode](https://docs.cursor.com/chat/custom-modes#creating-a-custom-mode)
- [Example Modes](https://docs.cursor.com/chat/custom-modes#example-modes)
- [Custom Mode Setting](https://docs.cursor.com/chat/custom-modes#custom-mode-setting)
- [Resources](https://docs.cursor.com/chat/custom-modes#resources)

![Create custom mode](https://docs.cursor.com/chat/custom-modes)