[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Languages & Frameworks

Python

This guide was heavily inspired by [Jack Fields](https://x.com/OrdinaryInds) and his [article](https://medium.com/ordinaryindustries/the-ultimate-vs-code-setup-for-python-538026b34d94) about setting up VS Code for Python development. Please check his article for more details.

## [​](https://docs.cursor.com/guides/languages/python\#prerequisites)  Prerequisites

Before we begin, ensure you have:

- [Python](https://python.org/) installed (3.8 or higher recommended)
- [Git](https://git-scm.com/) for version control
- Cursor installed and updated to the latest version

## [​](https://docs.cursor.com/guides/languages/python\#essential-extensions)  Essential Extensions

### [​](https://docs.cursor.com/guides/languages/python\#core-python-support)  Core Python Support

The following extensions setup Cursor to be fully featured for Python development. These provide you with syntax highlighting, linting, debugging and unit testing.

[**Python** \\
\\
Core language support from Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-python.python) [**Pylance** \\
\\
Fast Python language server](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) [**Python Debugger** \\
\\
Enhanced debugging capabilities](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy) [**Python Test Explorer** \\
\\
Visual testing interface](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)

### [​](https://docs.cursor.com/guides/languages/python\#code-quality-tools)  Code Quality Tools

[**Python Docstring Generator** \\
\\
Automatic documentation generation](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) [**Python Path** \\
\\
Manage Python paths](https://marketplace.visualstudio.com/items?itemName=mgesbert.python-path) [**Python Environment Manager** \\
\\
Virtual environment management](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-python-envs) [**Python Snippets** \\
\\
Code snippets for Python](https://marketplace.visualstudio.com/items?itemName=EricSia.pythonsnippets3)

### [​](https://docs.cursor.com/guides/languages/python\#advanced-python-tooling)  Advanced Python Tooling

While the above extensions have previously been the most popular extensions for Python development in Cursor, we’ve also added some additional extensions that can help you get the most out of your Python development.

#### [​](https://docs.cursor.com/guides/languages/python\#uv-python-environment-manager)  `uv` \- Python Environment Manager

[uv](https://github.com/astral-sh/uv) is a modern Python package manager that can be used to create and manage virtual environments, in addition to replacing pip as the default package manager.

To install uv, run the following command in your terminal:

Copy

```bash
pip install uv

```

#### [​](https://docs.cursor.com/guides/languages/python\#ruff-python-linter-and-formatter)  `ruff` \- Python Linter and Formatter

[Ruff](https://docs.astral.sh/ruff/) is a modern Python linter and formatter that can be used to check for programming errors, helps enforce coding standards, and can suggest refactoring. It can be used alongside Black for code formatting.

To install Ruff, run the following command in your terminal:

Copy

```bash
pip install ruff

```

## [​](https://docs.cursor.com/guides/languages/python\#cursor-configuration)  Cursor Configuration

### [​](https://docs.cursor.com/guides/languages/python\#1-python-interpreter)  1\. Python Interpreter

Configure your Python interpreter in Cursor:

1. Open Command Palette (Cmd/Ctrl + Shift + P)
2. Search for “Python: Select Interpreter”
3. Choose your Python interpreter (or virtual environment if you’re using one)

### [​](https://docs.cursor.com/guides/languages/python\#2-code-formatting)  2\. Code Formatting

Set up automatic code formatting with Black:

Black is a code formatter that automatically formats your code to follow a consistent style. It requires zero configuration and is widely adopted in the Python community.

To install Black, run the following command in your terminal:

Copy

```bash
pip install black

```

Then, configure Cursor to use Black for code formatting, by adding the following to your `settings.json` file:

Copy

```json
{
    "python.formatting.provider": "black",
    "editor.formatOnSave": true,
    "python.formatting.blackArgs": [\
        "--line-length",\
        "88"\
    ]
}

```

### [​](https://docs.cursor.com/guides/languages/python\#3-linting)  3\. Linting

We can use PyLint to check for programming errors, helps enforce coding standards, and can suggest refactoring.

To install PyLint, run the following command in your terminal:

Copy

```bash
pip install pylint

```

Copy

```json
{
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "python.linting.lintOnSave": true
}

```

### [​](https://docs.cursor.com/guides/languages/python\#4-type-checking)  4\. Type Checking

In addition to linting, we can use MyPy to check for type errors.

To install MyPy, run the following command in your terminal:

Copy

```bash
pip install mypy

```

Copy

```json
{
    "python.linting.mypyEnabled": true
}

```

## [​](https://docs.cursor.com/guides/languages/python\#debugging)  Debugging

Cursor provides powerful debugging capabilities for Python:

1. Set breakpoints by clicking the gutter
2. Use the Debug panel (Cmd/Ctrl + Shift + D)
3. Configure `launch.json` for custom debug configurations

## [​](https://docs.cursor.com/guides/languages/python\#recommended-features)  Recommended Features

[**Tab Completion** \\
\\
Intelligent code suggestions that understand your actions](https://docs.cursor.com/tab/overview) [**Chat** \\
\\
Explore and understand code through natural conversations](https://docs.cursor.com/chat/overview) [**Agent** \\
\\
Handle complex development tasks with AI assistance](https://docs.cursor.com/chat/agent) [**Context** \\
\\
Pull in context from 3rd party systems](https://docs.cursor.com/context/model-context-protocol) [**Auto-Imports** \\
\\
Automatically import modules as you code](https://docs.cursor.com/tab/auto-import) [**AI Review** \\
\\
Cursor constantly reviews your code with AI](https://docs.cursor.com/tab/overview#quality)

## [​](https://docs.cursor.com/guides/languages/python\#framework-support)  Framework Support

Cursor works seamlessly with popular Python frameworks:

- **Web Frameworks**: Django, Flask, FastAPI
- **Data Science**: Jupyter, NumPy, Pandas
- **Machine Learning**: TensorFlow, PyTorch, scikit-learn
- **Testing**: pytest, unittest
- **API**: requests, aiohttp
- **Database**: SQLAlchemy, psycopg2

Was this page helpful?

YesNo

[Migrate from JetBrains IDEs](https://docs.cursor.com/guides/migration/jetbrains) [JavaScript & TypeScript](https://docs.cursor.com/guides/languages/javascript)

On this page

- [Prerequisites](https://docs.cursor.com/guides/languages/python#prerequisites)
- [Essential Extensions](https://docs.cursor.com/guides/languages/python#essential-extensions)
- [Core Python Support](https://docs.cursor.com/guides/languages/python#core-python-support)
- [Code Quality Tools](https://docs.cursor.com/guides/languages/python#code-quality-tools)
- [Advanced Python Tooling](https://docs.cursor.com/guides/languages/python#advanced-python-tooling)
- [uv - Python Environment Manager](https://docs.cursor.com/guides/languages/python#uv-python-environment-manager)
- [ruff - Python Linter and Formatter](https://docs.cursor.com/guides/languages/python#ruff-python-linter-and-formatter)
- [Cursor Configuration](https://docs.cursor.com/guides/languages/python#cursor-configuration)
- [1\. Python Interpreter](https://docs.cursor.com/guides/languages/python#1-python-interpreter)
- [2\. Code Formatting](https://docs.cursor.com/guides/languages/python#2-code-formatting)
- [3\. Linting](https://docs.cursor.com/guides/languages/python#3-linting)
- [4\. Type Checking](https://docs.cursor.com/guides/languages/python#4-type-checking)
- [Debugging](https://docs.cursor.com/guides/languages/python#debugging)
- [Recommended Features](https://docs.cursor.com/guides/languages/python#recommended-features)
- [Framework Support](https://docs.cursor.com/guides/languages/python#framework-support)