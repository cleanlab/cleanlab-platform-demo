[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Settings

Models

## [​](https://docs.cursor.com/settings/models\#available-models)  Available models

To add a model to the Chat and ⌘K selection menu, enable it from Cursor Settings > Models.

| Model | Provider | Premium | Agent | Price6 |
| --- | --- | --- | --- | --- |
| [`claude-3.7-sonnet`](https://www.anthropic.com/claude/sonnet) | Anthropic | ✓ | ✓ | $0.04 |
| [`claude-3.7-sonnet`](https://www.anthropic.com/claude/sonnet) MAX1 | Anthropic | [MAX](https://docs.cursor.com/settings/models#max) | ✓ | $0.05 |
| [`claude-3.5-sonnet`](https://www.anthropic.com/claude/sonnet) | Anthropic | ✓ | ✓ | $0.04 |
| [`claude-3.5-haiku`](https://www.anthropic.com/claude/haiku) 2 | Anthropic | ✓ |  | $0.01 |
| [`claude-3-opus`](https://www.anthropic.com/news/claude-3-family) 3 | Anthropic | ✓ |  | $0.10 |
| `cursor-small` | Cursor |  |  | Free |
| [`deepseek-v3`](https://www.deepseek.com/) | Fireworks |  |  | Free |
| [`deepseek-r1`](https://www.deepseek.com/) | Fireworks | ✓ |  | $0.04 |
| [`gemini-2.5-pro-exp`](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) | Google | ✓ | ✓ | $0.04 |
| [`gemini-2.5-pro-exp`](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) MAX1 | Google | [MAX](https://docs.cursor.com/settings/models#max) | ✓ | $0.05 |
| [`gemini-2.0-pro-exp`](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/) | Google | ✓ |  | $0.04 |
| [`gpt-4o`](https://openai.com/index/hello-gpt-4o/) | OpenAI | ✓ | ✓ | $0.04 |
| [`gpt-4o-mini`](https://openai.com/gpt-4o-mini) 4 | OpenAI | ✓ |  | Free |
| [`gpt-4.5-preview`](https://openai.com/index/introducing-gpt-4-5/) | OpenAI |  |  | $2.00 |
| [`gpt-4.1`](https://openai.com/index/gpt-4-1/) | OpenAI | ✓ | ✓ | Free |
| [`o1`](https://openai.com/index/learning-to-reason-with-llms/) | OpenAI |  |  | $0.40 |
| [`o1-mini`](https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/) 3 | OpenAI |  |  | $0.10 |
| [`o3`](https://openai.com/index/introducing-o3-and-o4-mini/) 5 | OpenAI |  | ✓ | $0.30 |
| [`o3-mini`](https://openai.com/index/openai-o3-mini/) 2, 5 | OpenAI | ✓ | ✓ | $0.01 |
| [`o4-mini`](https://openai.com/index/introducing-o3-and-o4-mini/) 5 | OpenAI |  | ✓ | Free |
| [`grok-2`](https://x.ai/blog/grok-1212) | xAI | ✓ |  | $0.04 |
| [`grok-3-beta`](https://x.ai/news/grok-3) | xAI | ✓ | ✓ | $0.04 |
| [`grok-3-mini-beta`](https://x.ai/news/grok-3) | xAI | ✓ | ✓ | Free |

1 Tool calls charged like requests

2 1/3 request

3 10 requests/day included with paid plan

4 500 requests/day with free plan

5 High reasoning effort

6 Prices are higher for [long context window](https://docs.cursor.com/settings/models#large-context-and-pricing) requests

### [​](https://docs.cursor.com/settings/models\#premium-models)  Premium models

Premium models can be used with the 500 requests included with your monthly Pro or Business subscription.

Once you’ve exhausted your 500 monthly requests, Cursor will continue to serve you premium model requests, but may delay response time and/or limit access to some models when the platform is under high load.

To avoid delays and limited access, you can enable usage-based pricing for Premium models from [Settings](https://cursor.com/settings) and pay per request after exhausting your monthly allotment of 500.

### [​](https://docs.cursor.com/settings/models\#agentic-models)  Agentic models

Agentic models can be used with Chat’s [Agent mode](https://docs.cursor.com/chat/agent). These models are highly capable at making tool calls and perform best with Agent.

Submitting an Agent prompt with up to 25 tool calls consumes one request. If your request extends beyond 25 tool calls, Cursor will ask if you’d like to continue which will consume a second request.

### [​](https://docs.cursor.com/settings/models\#non-premium-models)  Non-premium models

Those models not designated Premium are pay-as-you-go and can be used by enabling usage-based pricing from [Settings](https://cursor.com/settings). The 500 montly requests cannot be used for these models.

### [​](https://docs.cursor.com/settings/models\#max)  MAX

Models offered in MAX mode have enhanced capabilities with [larger context windows](https://docs.cursor.com/settings/models#context-windows) and expanded reasoning.

Currently offered as an option for Claude 3.7 Sonnet and Gemini 2.5 Pro, MAX mode provides a 200 Agent tool call limit, the ability to process up to 750 lines per file read operation.

When operated as an Agent, each tool call in MAX mode is charged as a separate request in addition to the initial prompt request.

## [​](https://docs.cursor.com/settings/models\#selecting-a-model)  Selecting a model

The input interface in Chat and ⌘K includes a model selection menu which lists the models enabled from Settings > Models.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/advanced/model-menu-auto-select.png)

### [​](https://docs.cursor.com/settings/models\#auto-select)  Auto-select

Enabling Auto-select configures Cursor to select the premium model best fit for the immediate task and with the highest reliability based on current demand. This feature can detect degraded output performance and automatically switch models to resolve it.

### [​](https://docs.cursor.com/settings/models\#thinking)  Thinking

Enabling Thinking limits the list of models to reasoning models which think through problems step-by-step and have deeper capacity to examine their own reasoning and correct errors.

These models often perform better on complex reasoning tasks, though they may require more time to generate their responses.

## [​](https://docs.cursor.com/settings/models\#context-windows)  Context windows

A context window is the maximum span of text and code an LLM can consider at once, including both the input prompt and output generated by the model.

Each Chat session in Cursor maintains its own context window. The more prompts, attached files, and responses included in a session, the larger the context window grows.

Cursor actively optimizes the context window as the Chat session progresses, intelligently pruning non-essential content while preserving critical code and conversation elements.

For best results, it’s recommended you take a purpose-based approach to Chat session management, starting a new session for each unique task.

### [​](https://docs.cursor.com/settings/models\#large-context-and-pricing)  Large context and pricing

Large context mode allows Cursor to process more text and code per session, handling larger files and complex tasks while maintaining critical context.

Using **large context doubles the request price** compared to standard context sessions. This pricing reflects the increased computational resources required to process and analyze larger amounts of information.

Large context can be enabled in two ways:

- Manually by checking ‘Large context’ from Settings > Features
- Automatically when a Chat session grows long and/or includes large file attachments; in this case, large context charges will be indicated by a ⚠︎ icon appearing in the input interface

You can monitor per requests costs in real time from the [Settings](https://www.cursor.com/settings) page.

### [​](https://docs.cursor.com/settings/models\#context-window-sizes)  Context window sizes

| Mode | Context Window |
| --- | --- |
| `claude-3.7-sonnet` MAX | 200,000 tokens |
| `gemini-2.5-pro-exp` MAX | 1,000,000 tokens |
| `claude-3.7-sonnet` | 120,000 tokens |
| `gemini-2.5-pro-exp` | 120,000 tokens |
| `gpt-4.1`, `o3`, `o4-mini` | 128,000 tokens |
| All other models | 60,000 tokens |
| ⌘K | 10,000 tokens |

These thresholds are subject to change as Cursor further optimizes its context capabilities.

## [​](https://docs.cursor.com/settings/models\#model-hosting)  Model hosting

Models are hosted on US-based infrastructure by the model’s provider, a trusted partner or Cursor.

When **Privacy Mode** is enabled from Settings, Cursor nor the model providers will store your data with all data deleted after each request is processed. For further details see our [Privacy](https://docs.cursor.com/account/privacy), [Privacy Policy](https://cursor.com/privacy), and [Security](https://cursor.com/security) pages.

Was this page helpful?

YesNo

[Privacy & Security](https://docs.cursor.com/account/privacy) [Custom API Keys](https://docs.cursor.com/settings/api-keys)

On this page

- [Available models](https://docs.cursor.com/settings/models#available-models)
- [Premium models](https://docs.cursor.com/settings/models#premium-models)
- [Agentic models](https://docs.cursor.com/settings/models#agentic-models)
- [Non-premium models](https://docs.cursor.com/settings/models#non-premium-models)
- [MAX](https://docs.cursor.com/settings/models#max)
- [Selecting a model](https://docs.cursor.com/settings/models#selecting-a-model)
- [Auto-select](https://docs.cursor.com/settings/models#auto-select)
- [Thinking](https://docs.cursor.com/settings/models#thinking)
- [Context windows](https://docs.cursor.com/settings/models#context-windows)
- [Large context and pricing](https://docs.cursor.com/settings/models#large-context-and-pricing)
- [Context window sizes](https://docs.cursor.com/settings/models#context-window-sizes)
- [Model hosting](https://docs.cursor.com/settings/models#model-hosting)

![](https://docs.cursor.com/settings/models)