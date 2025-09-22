[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Settings

Custom API Keys

Cursor lets you input your own API keys for various LLM providers to send as many AI messages as you want at your own cost. When a Customer API key is used, we will use that when calling the LLM providers.

To use your own API key, go to `Cursor Settings` \> `Models` and enter your API keys. Then, click on the “Verify” button. Once your key is validated, your API key will be enabled.

Some Cursor features like Tab Completion
require specialized models and won’t work with custom API keys. Custom API
keys only work for features that use standard models from providers like
OpenAI, Anthropic, and Google.

## [​](https://docs.cursor.com/settings/api-keys\#openai-api-keys)  OpenAI API Keys

You can get your own API key from the [OpenAI platform](https://platform.openai.com/account/api-keys).

OpenAI’s reasoning models (o1, o1-mini, o3-mini) require special configuration and are not currently supported with custom API keys.

## [​](https://docs.cursor.com/settings/api-keys\#anthropic-api-keys)  Anthropic API Keys

Similar to OpenAI, you can also set your own Anthropic API key so that you will be using claude-based models at your own cost.

## [​](https://docs.cursor.com/settings/api-keys\#google-api-keys)  Google API Keys

For Google API keys, you can set your own API key so that you will be using Google models such as `gemini-1.5-flash-500k` at your own cost.

## [​](https://docs.cursor.com/settings/api-keys\#azure-integration)  Azure Integration

Finally, you can also set your own Azure API key so that you will be using Azure OpenAI models at your own cost.

## [​](https://docs.cursor.com/settings/api-keys\#faq)  FAQ

### [​](https://docs.cursor.com/settings/api-keys\#will-my-api-key-be-stored-or-leave-my-device%3F)  Will my API key be stored or leave my device?

Your API key will not be stored, but it will be sent up to our server with every request. All requests are routed through our backend where we do the final prompt building.

### [​](https://docs.cursor.com/settings/api-keys\#what-custom-llm-providers-are-supported%3F)  What custom LLM providers are supported?

Cursor only supports API providers that are compatible with the OpenAI API format (like OpenRouter). We do not provide support for custom local LLM setups or other API formats. If you’re having issues with a custom API setup that isn’t from our supported providers, we unfortunately cannot provide technical support.

Was this page helpful?

YesNo

[Models](https://docs.cursor.com/settings/models) [Early Access Program](https://docs.cursor.com/settings/beta)

On this page

- [OpenAI API Keys](https://docs.cursor.com/settings/api-keys#openai-api-keys)
- [Anthropic API Keys](https://docs.cursor.com/settings/api-keys#anthropic-api-keys)
- [Google API Keys](https://docs.cursor.com/settings/api-keys#google-api-keys)
- [Azure Integration](https://docs.cursor.com/settings/api-keys#azure-integration)
- [FAQ](https://docs.cursor.com/settings/api-keys#faq)
- [Will my API key be stored or leave my device?](https://docs.cursor.com/settings/api-keys#will-my-api-key-be-stored-or-leave-my-device%3F)
- [What custom LLM providers are supported?](https://docs.cursor.com/settings/api-keys#what-custom-llm-providers-are-supported%3F)