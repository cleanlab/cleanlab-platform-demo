[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Context

Ignore Files

## [​](https://docs.cursor.com/context/ignore-files\#overview)  Overview

Cursor reads and indexes your project’s codebase to power its features. You can control which directories and files Cursor can access by adding a `.cursorignore` file to your root directory.

Cursor makes its best effort to block access to files listed in `.cursorignore` from:

- Codebase indexing
- Code accessible by [Tab](https://docs.cursor.com/tab/overview), [Chat](https://docs.cursor.com/chat/overview), and [⌘K](https://docs.cursor.com/cmdk/overview)
- Code accessible via [@ symbol references](https://docs.cursor.com/context/@-symbols/overview)

Tool calls initiated by Cursor’s Chat feature to services like Terminal and MCP servers are not currently able to block acccess to code governed by `.cursorignore`

## [​](https://docs.cursor.com/context/ignore-files\#why-ignore-files%3F)  Why Ignore Files?

There are two common reasons to configure Cursor to ignore portions of your codebase:

### [​](https://docs.cursor.com/context/ignore-files\#security)  Security

While your codebase is not permanently stored on Cursor’s servers or the LLMs that power its features, you may still want to restrict access to certain files for security reasons, such as files containing API keys, database credentials, and other secrets.

Cursor makes its best effort to block access to ignored files, but due to unpredictable LLM behavior, we cannot guarantee these files will never be exposed.

### [​](https://docs.cursor.com/context/ignore-files\#performance)  Performance

If you work in a monorepo or very large codebase where significant portions are irrelevant to the code you’re developing, you might consider configuring Cursor to ignore these parts of the application.

By excluding irrelevant parts of the codebase, Cursor will index large codebases faster and find files with more speed and accuracy when searching for context.

Cursor is designed to support large codebases and is skilled at assessing file relevancy, but the ignore feature is helpful when using a codebase that is especially large or includes files immaterial to your development.

## [​](https://docs.cursor.com/context/ignore-files\#configuring-cursorignore)  Configuring `.cursorignore`

To implement Cursor’s ignore feature, add a `.cursorignore` file to the root of your codebase’s directory and list the directories and files to be ignored.

The `.cursorignore` file uses pattern matching syntax identical to that used in `.gitignore` files.

### [​](https://docs.cursor.com/context/ignore-files\#basic-pattern-examples)  Basic Pattern Examples

Copy

```sh
# Ignore specific file `config.json`
config.json

# Ignore `dist` directory and all files inside
dist/

# Ignore all files with a `.log` extension
*.log

```

### [​](https://docs.cursor.com/context/ignore-files\#advanced-pattern-examples)  Advanced Pattern Examples

Copy

```sh
# Ignore entire codebase
*

# Do not ignore `app` directory
!app/

# Ignores logs directories in any directory
**/logs

```

### [​](https://docs.cursor.com/context/ignore-files\#considerations)  Considerations

- Blank lines are ignored

- Lines starting with `#` are considered comments and ignored

- Patterns are matched relative to the location of the `.cursorignore` file

- Patterns will override conflicting patterns listed earlier in the file


## [​](https://docs.cursor.com/context/ignore-files\#limit-indexing-with-cursorindexingignore)  Limit Indexing with `.cursorindexingignore`

To implement Cursor’s ignore feature for indexing only, add a `.cursorindexingignore` file to the root of your codebase’s directory, and list the directories and files to be excluded from the index.

Files listed in `.cursorindexingignore` will not be included in Cursor’s index but can still be accessed by Cursor’s AI-assisted features, including when Cursor searches the codebase and exposes it to LLMs.

## [​](https://docs.cursor.com/context/ignore-files\#files-ignored-by-default)  Files Ignored by Default

Cursor will also ignore all files listed in the `.gitignore` file in your root directory and in the Default Ignore List provided below.

To not ignore a file listed in these files, add it to your `.cursorignore` file with an `!` prefix.

Default Ignore List

For indexing only, in addition to the files designated in your `.gitignore`, `.cursorignore` and `.cursorindexignore` files, the following files are also ignored:

Copy

```sh
package-lock.json
pnpm-lock.yaml
yarn.lock
composer.lock
Gemfile.lock
bun.lockb
.env*
.git/
.svn/
.hg/
*.lock
*.bak
*.tmp
*.bin
*.exe
*.dll
*.so
*.lockb
*.qwoff
*.isl
*.csv
*.pdf
*.doc
*.doc
*.xls
*.xlsx
*.ppt
*.pptx
*.odt
*.ods
*.odp
*.odg
*.odf
*.sxw
*.sxc
*.sxi
*.sxd
*.sdc
*.jpg
*.jpeg
*.png
*.gif
*.bmp
*.tif
*.mp3
*.wav
*.wma
*.ogg
*.flac
*.aac
*.mp4
*.mov
*.wmv
*.flv
*.avi
*.zip
*.tar
*.gz
*.7z
*.rar
*.tgz
*.dmg
*.iso
*.cue
*.mdf
*.mds
*.vcd
*.toast
*.img
*.apk
*.msi
*.cab
*.tar.gz
*.tar.xz
*.tar.bz2
*.tar.lzma
*.tar.Z
*.tar.sz
*.lzma
*.ttf
*.otf
*.pak
*.woff
*.woff2
*.eot
*.webp
*.vsix
*.rmeta
*.rlib
*.parquet
*.svg
.egg-info/
.venv/
node_modules/
__pycache__/
.next/
.nuxt/
.cache/
.sass-cache/
.gradle/
.DS_Store/
.ipynb_checkpoints/
.pytest_cache/
.mypy_cache/
.tox/
.git/
.hg/
.svn/
.bzr/
.lock-wscript/
.Python/
.jupyter/
.history/
.yarn/
.yarn-cache/
.eslintcache/
.parcel-cache/
.cache-loader/
.nyc_output/
.node_repl_history/
.pnp.js/
.pnp/

```

## [​](https://docs.cursor.com/context/ignore-files\#troubleshooting)  Troubleshooting

To troubleshoot issues with your ignore files, try testing patterns using the `git check-ignore -v [file]` command.

Was this page helpful?

YesNo

[/command](https://docs.cursor.com/context/@-symbols/slash-commands) [Model Context Protocol](https://docs.cursor.com/context/model-context-protocol)

On this page

- [Overview](https://docs.cursor.com/context/ignore-files#overview)
- [Why Ignore Files?](https://docs.cursor.com/context/ignore-files#why-ignore-files%3F)
- [Security](https://docs.cursor.com/context/ignore-files#security)
- [Performance](https://docs.cursor.com/context/ignore-files#performance)
- [Configuring .cursorignore](https://docs.cursor.com/context/ignore-files#configuring-cursorignore)
- [Basic Pattern Examples](https://docs.cursor.com/context/ignore-files#basic-pattern-examples)
- [Advanced Pattern Examples](https://docs.cursor.com/context/ignore-files#advanced-pattern-examples)
- [Considerations](https://docs.cursor.com/context/ignore-files#considerations)
- [Limit Indexing with .cursorindexingignore](https://docs.cursor.com/context/ignore-files#limit-indexing-with-cursorindexingignore)
- [Files Ignored by Default](https://docs.cursor.com/context/ignore-files#files-ignored-by-default)
- [Troubleshooting](https://docs.cursor.com/context/ignore-files#troubleshooting)