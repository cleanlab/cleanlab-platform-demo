[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Context

Codebase Indexing

### [​](https://docs.cursor.com/context/codebase-indexing\#index-your-codebase)  Index your Codebase

For better and more accurate codebase answers, you can index your codebase. Behind the scenes, Cursor
computes embeddings for each file in your codebase, and will use these to improve the accuracy of your codebase answers.

When a project is opened, each Cursor instance will initialize indexing for that workspace. After the initial indexing setup is complete, Cursor will automatically index any new files added to your workspace to keep your codebase context current.

The status of your codebase indexing is under `Cursor Settings` \> `Features` \> `Codebase Indexing`.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/chat/codebase-indexing.png)

### [​](https://docs.cursor.com/context/codebase-indexing\#advanced-settings)  Advanced Settings

By default, Cursor will index all files in your codebase.

You can also expand the `Show Settings` section to access more advanced options.
Here, you can decide whether you want to enable automatic indexing for new repositories and configure the files
that Cursor will ignore during repository indexing.

Cursor uses the same package as VS Code to handle file ignoring, which means it respects all `.gitignore` files, including those in subdirectories. You can also create a `.cursorignore` file for user-specific ignore patterns, which you may want to add to your global `.gitignore` to avoid committing it to the repository.

If you have any large content files in your project that the AI definitely doesn’t need to read, [ignoring those files](https://docs.cursor.com/context/ignore-files) could improve the accuracy of the answers.

### [​](https://docs.cursor.com/context/codebase-indexing\#working-with-large-monorepos)  Working with large monorepos

When working with large monorepos containing hundreds of thousands of files, it’s important to be strategic about what gets indexed.

- Use `.cursorignore` to let each developer configure which folders and paths they work on in the monorepo
- Add `.cursorignore` to your global `.gitignore`

This allows each developer to optimize indexing for their specific work areas within the monorepo.

## [​](https://docs.cursor.com/context/codebase-indexing\#faq)  FAQ

### [​](https://docs.cursor.com/context/codebase-indexing\#where-can-i-see-all-codebases-i-have-indexed%3F)  Where can I see all codebases I have indexed?

Currently, there is no way to see a list of all codebases you have indexed. You’ll need to manually check each project’s indexing status by opening the project in Cursor and checking the Codebase Indexing settings.

### [​](https://docs.cursor.com/context/codebase-indexing\#how-do-i-delete-all-codebases%3F)  How do I delete all codebases?

You can either delete your Cursor account from Settings to remove all indexed codebases, or manually delete individual codebases from the Codebase Indexing settings in each project. There’s currently no way to delete all codebases at once without deleting your account.

Was this page helpful?

YesNo

[Keyboard Shortcuts](https://docs.cursor.com/kbd) [Rules](https://docs.cursor.com/context/rules)

On this page

- [Index your Codebase](https://docs.cursor.com/context/codebase-indexing#index-your-codebase)
- [Advanced Settings](https://docs.cursor.com/context/codebase-indexing#advanced-settings)
- [Working with large monorepos](https://docs.cursor.com/context/codebase-indexing#working-with-large-monorepos)
- [FAQ](https://docs.cursor.com/context/codebase-indexing#faq)
- [Where can I see all codebases I have indexed?](https://docs.cursor.com/context/codebase-indexing#where-can-i-see-all-codebases-i-have-indexed%3F)
- [How do I delete all codebases?](https://docs.cursor.com/context/codebase-indexing#how-do-i-delete-all-codebases%3F)

![](https://docs.cursor.com/context/codebase-indexing)