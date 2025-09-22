[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Languages & Frameworks

Java

This guide will help you configure Cursor for Java development, including setting up the JDK, installing necessary extensions, debugging, running Java applications, and integrating build tools like Maven and Gradle. It also covers workflow features similar to IntelliJ or VS Code.

Before starting, ensure you have Cursor installed and updated to the latest version.

## [​](https://docs.cursor.com/guides/languages/java\#setting-up-java-for-cursor)  Setting up Java for Cursor

### [​](https://docs.cursor.com/guides/languages/java\#java-installation)  Java Installation

Before setting up Cursor itself, you will need Java installed on your machine.

Cursor does not ship with a Java compiler, so you need to install a JDK if you haven’t already.

## Windows Installation

Download and install a JDK (e.g., OpenJDK, Oracle JDK, Microsoft Build of OpenJDK).

Set JAVA\_HOME and add JAVA\_HOME\\bin to your PATH.

## macOS Installation

Install via Homebrew ( `brew install openjdk`) or download an installer.

Ensure JAVA\_HOME points to the installed JDK.

## Linux Installation

Use your package manager ( `sudo apt install openjdk-17-jdk` or equivalent) or install via SDKMAN.

To check installation, run:

Copy

```bash
java -version
javac -version

```

If Cursor does not detect your JDK, configure it manually in settings.json:

Copy

```json
{
  "java.jdt.ls.java.home": "/path/to/jdk",
  "java.configuration.runtimes": [\
    {\
      "name": "JavaSE-17",\
      "path": "/path/to/jdk-17",\
      "default": true\
    }\
  ]
}

```

Restart Cursor to apply changes.

### [​](https://docs.cursor.com/guides/languages/java\#cursor-setup)  Cursor Setup

Cursor supports VS Code extensions. Install the following manually:

[**Extension Pack for Java** \\
\\
Includes Java language support, debugger, test runner, Maven support, and project manager](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) [**Gradle for Java** \\
\\
Essential for working with Gradle build system](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) [**Spring Boot Extension Pack** \\
\\
Required for Spring Boot development](https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack) [**JavaFX Support** \\
\\
Necessary for JavaFX application development](https://marketplace.visualstudio.com/items?itemName=dlsc-oss.vscode-javafx)

### [​](https://docs.cursor.com/guides/languages/java\#configure-build-tools)  Configure Build Tools

#### [​](https://docs.cursor.com/guides/languages/java\#maven)  Maven

Ensure Maven is installed ( `mvn -version`). Install from [maven.apache.org](https://maven.apache.org/download.cgi) if needed:

1. Download the binary archive
2. Extract to desired location
3. Set MAVEN\_HOME environment variable to the extracted folder
4. Add %MAVEN\_HOME%\\bin (Windows) or $MAVEN\_HOME/bin (Unix) to PATH

#### [​](https://docs.cursor.com/guides/languages/java\#gradle)  Gradle

Ensure Gradle is installed ( `gradle -version`). Install from [gradle.org](https://gradle.org/install/) if needed:

1. Download the binary distribution
2. Extract to desired location
3. Set GRADLE\_HOME environment variable to the extracted folder
4. Add %GRADLE\_HOME%\\bin (Windows) or $GRADLE\_HOME/bin (Unix) to PATH

Alternatively, use the Gradle Wrapper which will automatically download and use the correct Gradle version:

## [​](https://docs.cursor.com/guides/languages/java\#running-and-debugging)  Running and Debugging

Now you are all set up, it’s time to run and debug your Java code.
Depending on your needs, you can use the following methods:

## Run

Click the “Run” link that appears above any main method to quickly execute your program

## Debug

Open the Run and Debug sidebar panel and use the Run button to start your application

## Terminal

Execute from command line using Maven or Gradlecommands

## Spring Boot

Launch Spring Boot applications directly from the Spring Boot Dashboard extension

## [​](https://docs.cursor.com/guides/languages/java\#java-x-cursor-workflow)  Java x Cursor Workflow

Cursor’s AI-powered features can significantly enhance your Java development workflow. Here are some ways to leverage Cursor’s capabilities specifically for Java:

## Tab Completion

Smart completions for methods, signatures, and Java boilerplate like getters/setters.

## Agent Mode

Implement design patterns, refactor code, or generate classes with proper inheritance.

## Cmd-K

Quick inline edits to methods, fix errors, or generate unit tests without breaking flow.

## Chat

Get help with Java concepts, debug exceptions, or understand framework features.

### [​](https://docs.cursor.com/guides/languages/java\#example-workflows)  Example Workflows

1. **Generate Java Boilerplate**


Use [Tab completion](https://docs.cursor.com/tab/overview) to quickly generate constructors, getters/setters, equals/hashCode methods, and other repetitive Java patterns.

2. **Debug Complex Java Exceptions**


When facing a cryptic Java stack trace, highlight it and use [Ask](https://docs.cursor.com/chat/overview) to explain the root cause and suggest potential fixes.

3. **Refactor Legacy Java Code**


Use [Agent mode](https://docs.cursor.com/chat/agent) to modernize older Java code - convert anonymous classes to lambdas, upgrade to newer Java language features, or implement design patterns.

4. **Frameworks Development**


Add your documentation to Cursor’s context with @docs, and generate framework-specific code throughout Cursor.


Was this page helpful?

YesNo

[iOS & macOS (Swift)](https://docs.cursor.com/guides/languages/swift) [Overview](https://docs.cursor.com/tab/overview)

On this page

- [Setting up Java for Cursor](https://docs.cursor.com/guides/languages/java#setting-up-java-for-cursor)
- [Java Installation](https://docs.cursor.com/guides/languages/java#java-installation)
- [Cursor Setup](https://docs.cursor.com/guides/languages/java#cursor-setup)
- [Configure Build Tools](https://docs.cursor.com/guides/languages/java#configure-build-tools)
- [Maven](https://docs.cursor.com/guides/languages/java#maven)
- [Gradle](https://docs.cursor.com/guides/languages/java#gradle)
- [Running and Debugging](https://docs.cursor.com/guides/languages/java#running-and-debugging)
- [Java x Cursor Workflow](https://docs.cursor.com/guides/languages/java#java-x-cursor-workflow)
- [Example Workflows](https://docs.cursor.com/guides/languages/java#example-workflows)