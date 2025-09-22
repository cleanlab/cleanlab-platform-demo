[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Context

Model Context Protocol

## [​](https://docs.cursor.com/context/model-context-protocol\#what-is-mcp%3F)  What is MCP?

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol that standardizes how applications provide context and tools to LLMs. Think of MCP as a plugin system for Cursor - it allows you to extend the Agent’s capabilities by connecting it to various data sources and tools through standardized interfaces.

[**Learn More About MCP** \\
\\
Visit the official MCP documentation to understand the protocol in depth](https://modelcontextprotocol.io/introduction)

### [​](https://docs.cursor.com/context/model-context-protocol\#uses)  Uses

MCP allows you to connect Cursor to external systems and data sources. This means you can integrate Cursor with your existing tools and infrastructure, instead of having to tell Cursor what the structure of your project is outside of the code itself.

MCP servers can be **written in any language** that can print to `stdout` or serve an HTTP endpoint. This flexibility allows you to implement MCP servers using your preferred programming language and technology stack very quickly.

#### [​](https://docs.cursor.com/context/model-context-protocol\#examples)  Examples

## Databases

Allow Cursor to query your databases directly, instead of manually feeding in schemas, or manipulating the data yourself.

## Notion

Read data out of notion to guide cursor to implement a feature

## GitHub

Let Cursor create PRs, create branches, find code, etc

## Memory

Allow Cursor to remember and recall information while you work

## Stripe

Allow Cursor to create customers, manage subscriptions, etc

### [​](https://docs.cursor.com/context/model-context-protocol\#architecture)  Architecture

MCP servers are lightweight programs that expose specific capabilities through the standardized protocol. They act as intermediaries between Cursor and external tools or data sources.

Cursor supports two transport types for MCP servers:

## 💻 stdio Transport

\- Runs on your **local machine**

\- Managed automatically by Cursor

\- Communicates directly via `stdout`

\- Only accessible by you locally

**Input:** Valid shell command that is ran by Cursor automatically

## 🌐 SSE Transport

\- Can run **locally or remotely**

\- Managed and run by you

\- Communicates **over the network**

\- Can be **shared** across machines

**Input:** URL to the `/sse` endpoint of an MCP server external to Cursor

For stdio servers, the command should be a valid shell command that Cursor can run.

For SSE servers, the URL should be the URL of the SSE endpoint, e.g. `http://example.com:8000/sse`.

Each transport type has different use cases, with stdio being simpler for local development and SSE offering more flexibility for distributed teams.

## [​](https://docs.cursor.com/context/model-context-protocol\#configuring-mcp-servers)  Configuring MCP Servers

The MCP configuration file uses a JSON format with the following structure:

CLI Server - Node.js

CLI Server - Python

SSE Server

Copy

```json
// This example demonstrated an MCP server using the stdio format
// Cursor automatically runs this process for you
// This uses a Node.js server, ran with `npx`
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "mcp-server"],
      "env": {
        "API_KEY": "value"
      }
    }
  }
}

```

The `env` field allows you to specify environment variables that will be available to your MCP server process. This is particularly useful for managing API keys and other sensitive configuration.

### [​](https://docs.cursor.com/context/model-context-protocol\#configuration-locations)  Configuration Locations

You can place this configuration in two locations, depending on your use case:

## Project Configuration

For tools specific to a project, create a `.cursor/mcp.json` file in your project directory. This allows you to define MCP servers that are only available within that specific project.

## Global Configuration

For tools that you want to use across all projects, create a `\~/.cursor/mcp.json` file in your home directory. This makes MCP servers available in all your Cursor workspaces.

## [​](https://docs.cursor.com/context/model-context-protocol\#using-mcp-tools-in-agent)  Using MCP Tools in Agent

The Composer Agent will **automatically** use any MCP tools that are listed under `Available Tools` on the MCP settings page if it determines them to be relevant.
To prompt tool usage intentionally, simply tell the agent to use the tool, referring to it either by name or by description.

### [​](https://docs.cursor.com/context/model-context-protocol\#tool-approval)  Tool Approval

By default, when Agent wants to use an MCP tool, it will display a message asking for your approval. You can use the arrow next to the tool name to expand the message, and see what arguments the Agent is calling the tool with.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/advanced/mcp-mars-request.png)

#### [​](https://docs.cursor.com/context/model-context-protocol\#yolo-mode)  Yolo Mode

You can enable Yolo mode to allow Agent to automatically run MCP tools without requiring approval, similar to how terminal commands are executed. Read more about Yolo mode and how to enable it [here](https://docs.cursor.com/chat/agent#yolo-mode).

### [​](https://docs.cursor.com/context/model-context-protocol\#tool-response)  Tool Response

When a tool is used Cursor will display the response in the chat.
This image shows the response from the sample tool, as well as expanded views of the tool call arguments and the tool call response.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/advanced/mcp-mars-response.png)

## [​](https://docs.cursor.com/context/model-context-protocol\#limitations)  Limitations

MCP is a very new protocol and is still in active development. There are some known caveats to be aware of:

Tool Quantity

Some MCP servers, or user’s with many MCP servers active, may have many tools available for Cursor to use. Currently, Cursor will only send the first 40 tools to the Agent.

Remote Development

Cursor directly communicates with MCP servers from your local machine, either directly through `stdio` or via the network using `sse`. Therefore, MCP servers may not work properly when accessing Cursor over SSH or other development environments. We are hoping to improve this in future releases.

MCP Resources

MCP servers offer two main capabilities: tools and resources. Tools are availabe in Cursor today, and allow Cursor to execute the tools offered by an MCP server, and use the output in it’s further steps. However, resources are not yet supported in Cursor. We are hoping to add resource support in future releases.

Was this page helpful?

YesNo

[Ignore Files](https://docs.cursor.com/context/ignore-files) [Plans & Usage](https://docs.cursor.com/account/plans-and-usage)

On this page

- [What is MCP?](https://docs.cursor.com/context/model-context-protocol#what-is-mcp%3F)
- [Uses](https://docs.cursor.com/context/model-context-protocol#uses)
- [Examples](https://docs.cursor.com/context/model-context-protocol#examples)
- [Architecture](https://docs.cursor.com/context/model-context-protocol#architecture)
- [Configuring MCP Servers](https://docs.cursor.com/context/model-context-protocol#configuring-mcp-servers)
- [Configuration Locations](https://docs.cursor.com/context/model-context-protocol#configuration-locations)
- [Using MCP Tools in Agent](https://docs.cursor.com/context/model-context-protocol#using-mcp-tools-in-agent)
- [Tool Approval](https://docs.cursor.com/context/model-context-protocol#tool-approval)
- [Yolo Mode](https://docs.cursor.com/context/model-context-protocol#yolo-mode)
- [Tool Response](https://docs.cursor.com/context/model-context-protocol#tool-response)
- [Limitations](https://docs.cursor.com/context/model-context-protocol#limitations)

![](https://docs.cursor.com/context/model-context-protocol)

![](https://docs.cursor.com/context/model-context-protocol)