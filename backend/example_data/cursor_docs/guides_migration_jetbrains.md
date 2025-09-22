[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Editor Migration

Migrate from JetBrains IDEs

Cursor offers a modern, AI-powered coding experience that can replace your JetBrains IDEs. While the transition might feel different at first, Cursor’s VS Code-based foundation provides powerful features and extensive customization options.

## [​](https://docs.cursor.com/guides/migration/jetbrains\#editor-components)  Editor Components

### [​](https://docs.cursor.com/guides/migration/jetbrains\#extensions)  Extensions

JetBrains IDEs are great tools, as they come already pre-configured for the languages and frameworks they are intended for.

Cursor is different - being a blank canvas out of the box, you can customize it to your liking, not being limited by the languages and frameworks the IDE was intended for.

Cursor has access to a vast ecosystem of extensions, and almost all of the functionality (and more!) that JetBrains IDEs offer can be recreated through these extensions.

Take a look at some of these popular extensions below:

[**Remote Development** \\
\\
SSH, WSL, and Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) [**Project Manager** \\
\\
Manage multiple projects](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) [**GitLens** \\
\\
Enhanced Git integration](https://marketplace.cursorapi.com/items?itemName=maattdd.gitless) [**Local History** \\
\\
Track local file changes](https://marketplace.visualstudio.com/items?itemName=xyz.local-history) [**Error Lens** \\
\\
Inline error highlighting](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) [**ESLint** \\
\\
Code linting](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) [**Prettier** \\
\\
Code formatting](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) [**Todo Tree** \\
\\
Track TODOs and FIXMEs](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

### [​](https://docs.cursor.com/guides/migration/jetbrains\#keyboard-shortcuts)  Keyboard Shortcuts

Cursor has a built-in keyboard shortcut manager that allows you to map your favorite keyboard shortcuts to actions.

With this extension, you can bring almost all of the JetBrains IDEs shortcuts directly to Cursor!
Be sure to read the extension’s documentation to learn how to configure it to your liking:

[**IntelliJ IDEA Keybindings** \\
\\
Install this extension to bring JetBrains IDEs keyboard shortcuts to Cursor.](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

Common shortcuts that differ:

- Find Action: ⌘/Ctrl+Shift+P (vs. ⌘/Ctrl+Shift+A)
- Quick Fix: ⌘/Ctrl+. (vs. Alt+Enter)
- Go to File: ⌘/Ctrl+P (vs. ⌘/Ctrl+Shift+N)

### [​](https://docs.cursor.com/guides/migration/jetbrains\#themes)  Themes

Recreate the look and feel of your favorite JetBrains IDEs in Cursor with these community themes.

Choose from the standard Darcula Theme, or pick a theme to match the syntax highlighting of your JetBrains tools.

[**JetBrains - Darcula Theme** \\
\\
Experience the classic JetBrains Darcula dark theme](https://marketplace.visualstudio.com/items?itemName=rokoroku.vscode-theme-darcula)

[**JetBrains PyCharm**](https://marketplace.visualstudio.com/items?itemName=nicohlr.pycharm) [**JetBrains IntelliJ**](https://marketplace.visualstudio.com/items?itemName=AnandaBibekRay.intellij-idea-new-ui-theme) [**JetBrains Fleet**](https://marketplace.visualstudio.com/items?itemName=MichaelZhou.fleet-theme) [**JetBrains Rider**](https://marketplace.visualstudio.com/items?itemName=digimezzo.jetbrains-rider-new-ui-theme)

[**JetBrains Icons** \\
\\
Get the familiar JetBrains file and folder icons](https://marketplace.visualstudio.com/items?itemName=chadalen.vscode-jetbrains-icon-theme)

### [​](https://docs.cursor.com/guides/migration/jetbrains\#font)  Font

To complete your JetBrains-like experience, you can use the official JetBrains Mono font:

1. Download and install JetBrains Mono font onto your system:

[**Download JetBrains Mono**](https://www.jetbrains.com/lp/mono/)

2. Restart Cursor after installing the font
3. Open Settings in Cursor (⌘/Ctrl + ,)
4. Search for “Font Family”
5. Set the font family to `'JetBrains Mono'`

For the best experience, you can also enable font ligatures by setting `"editor.fontLigatures": true` in your settings.

## [​](https://docs.cursor.com/guides/migration/jetbrains\#ide-specific-migration)  IDE-Specific Migration

Many users loved the JetBrains IDEs for their out-the-box support for the languages and frameworks they were intended for. Cursor is different - being a blank canvas out of the box, you can customize it to your liking, not being limited by the languages and frameworks the IDE was intended for.

Cursor already has access to the extension ecosystem of VS Code, and almost all of the functionality (and more!) that JetBrains IDEs offer can be recreated through these extensions.

Take a look at the following suggested extensions for each JetBrains IDE below.

### [​](https://docs.cursor.com/guides/migration/jetbrains\#intellij-idea-java)  IntelliJ IDEA (Java)

[**Language Support for Java** \\
\\
Core Java language features](https://marketplace.visualstudio.com/items?itemName=redhat.java) [**Debugger for Java** \\
\\
Java debugging support](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) [**Test Runner for Java** \\
\\
Run and debug Java tests](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) [**Maven for Java** \\
\\
Maven support](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)

[**Project Manager for Java** \\
\\
Project management tools](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)

Key differences:

- Build/Run configurations are managed through launch.json
- Spring Boot tools available through [“Spring Boot Tools”](https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-spring-boot) extension
- Gradle support via [“Gradle for Java”](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) extension

### [​](https://docs.cursor.com/guides/migration/jetbrains\#pycharm-python)  PyCharm (Python)

[**Python** \\
\\
Core Python support](https://marketplace.visualstudio.com/items?itemName=ms-python.python) [**Pylance** \\
\\
Fast type checking](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) [**Jupyter** \\
\\
Notebook support](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) [**Python Test Explorer** \\
\\
Test management](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)

Key differences:

- Virtual environments managed through command palette
- Debug configurations in launch.json
- Requirements management through requirements.txt or Poetry

### [​](https://docs.cursor.com/guides/migration/jetbrains\#webstorm-javascript%2Ftypescript)  WebStorm (JavaScript/TypeScript)

[**JavaScript and TypeScript Nightly** \\
\\
Latest language features](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) [**ES7+ React/Redux Snippets** \\
\\
React development](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) [**Vue Language Features** \\
\\
Vue.js support](https://marketplace.visualstudio.com/items?itemName=Vue.volar) [**Angular Language Service** \\
\\
Angular development](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

Most WebStorm features are built into Cursor/VS Code, including:

- npm scripts view
- Debugging
- Git integration
- TypeScript support

### [​](https://docs.cursor.com/guides/migration/jetbrains\#phpstorm-php)  PhpStorm (PHP)

[**PHP Intelephense** \\
\\
PHP language server](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) [**PHP Debug** \\
\\
Xdebug integration](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) [**PHP Intellisense** \\
\\
Code intelligence](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense) [**PHP DocBlocker** \\
\\
Documentation tools](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)

Key differences:

- Xdebug configuration through launch.json
- Composer integration via terminal
- Database tools through [“SQLTools”](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) extension

### [​](https://docs.cursor.com/guides/migration/jetbrains\#rider-net)  Rider (.NET)

[**C\#** \\
\\
Core C# support](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) [**C\# Dev Kit** \\
\\
Enhanced .NET tools](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) [**Unity** \\
\\
Unity development](https://marketplace.visualstudio.com/items?itemName=visualstudiotoolsforunity.vstuc) [**.NET Install Tool**\\
\\
.NET SDK management](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime)

Key differences:

- Solution explorer through file explorer
- NuGet package management through CLI or extensions
- Test runner integration through test explorer

### [​](https://docs.cursor.com/guides/migration/jetbrains\#goland-go)  GoLand (Go)

[**Go** \\
\\
Official Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go) [**Go Test Explorer** \\
\\
Test management](https://marketplace.visualstudio.com/items?itemName=premparihar.gotestexplorer)

[**Go Doc** \\
\\
Documentation tools](https://marketplace.visualstudio.com/items?itemName=msyrus.go-doc)

Key differences:

- Go tools installation prompted automatically
- Debugging through launch.json
- Package management integrated with go.mod

## [​](https://docs.cursor.com/guides/migration/jetbrains\#tips-for-a-smooth-transition)  Tips for a Smooth Transition

1

Use Command Palette

Press `⌘`/ `Ctrl` \+ `Shift` \+ `P` to find commands

2

AI Features

Leverage Cursor’s AI features for code completion and refactoring

3

Customize Settings

Fine-tune your settings.json for optimal workflow

4

Terminal Integration

Use the built-in terminal for command-line operations

5

Extensions

Browse the VS Code marketplace for additional tools

Remember that while some workflows might be different, Cursor offers powerful AI-assisted coding features that can enhance your productivity beyond traditional IDE capabilities.

Was this page helpful?

YesNo

[Migrate from VS Code](https://docs.cursor.com/guides/migration/vscode) [Python](https://docs.cursor.com/guides/languages/python)

On this page

- [Editor Components](https://docs.cursor.com/guides/migration/jetbrains#editor-components)
- [Extensions](https://docs.cursor.com/guides/migration/jetbrains#extensions)
- [Keyboard Shortcuts](https://docs.cursor.com/guides/migration/jetbrains#keyboard-shortcuts)
- [Themes](https://docs.cursor.com/guides/migration/jetbrains#themes)
- [Font](https://docs.cursor.com/guides/migration/jetbrains#font)
- [IDE-Specific Migration](https://docs.cursor.com/guides/migration/jetbrains#ide-specific-migration)
- [IntelliJ IDEA (Java)](https://docs.cursor.com/guides/migration/jetbrains#intellij-idea-java)
- [PyCharm (Python)](https://docs.cursor.com/guides/migration/jetbrains#pycharm-python)
- [WebStorm (JavaScript/TypeScript)](https://docs.cursor.com/guides/migration/jetbrains#webstorm-javascript%2Ftypescript)
- [PhpStorm (PHP)](https://docs.cursor.com/guides/migration/jetbrains#phpstorm-php)
- [Rider (.NET)](https://docs.cursor.com/guides/migration/jetbrains#rider-net)
- [GoLand (Go)](https://docs.cursor.com/guides/migration/jetbrains#goland-go)
- [Tips for a Smooth Transition](https://docs.cursor.com/guides/migration/jetbrains#tips-for-a-smooth-transition)