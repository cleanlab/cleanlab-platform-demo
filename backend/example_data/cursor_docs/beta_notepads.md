[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Editor

Notepads (Beta)

Notepads are currently in beta and subject to be deprecated in the future.

# [​](https://docs.cursor.com/beta/notepads\#overview)  Overview

Notepads are powerful context-sharing tools in Cursor that bridge the gap between composers and chat interactions. Think of them as enhanced reference documents that go beyond the capabilities of `.cursorrules`, allowing you to create reusable contexts for your development workflow.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/features/beta/notepads/empty-notepad.png)

Notepads serve as collections of thoughts, rules, and documentation that can be:

- Shared between different parts of your development environment
- Referenced using the `@` syntax
- Enhanced with file attachments
- Used as dynamic templates for various development scenarios

## [​](https://docs.cursor.com/beta/notepads\#getting-started)  Getting started

1. Click the ”+” button in the Notepads section
2. Give your notepad a meaningful name
3. Add your content, context, files and other relevant information the same way you would in composer or chat.
4. Reference it in composers or chat using `@`

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/features/beta/notepads/create-notepad.png)

# [​](https://docs.cursor.com/beta/notepads\#key-features)  Key features

- **Context Sharing**: Seamlessly share context between composers and chat
- **File Attachments**: Attach documentation and reference files (not possible in `.cursorrules`)
- **Dynamic References**: Use `@` mentions to link to other resources
- **Flexible Content**: Write and structure information in a way that suits your needs

# [​](https://docs.cursor.com/beta/notepads\#common-use-cases)  Common use cases

1. **Dynamic Boilerplate Generation**
   - Create templates for common code patterns
   - Store project-specific scaffolding rules
   - Maintain consistent code structure across your team
2. **Architecture Documentation**
   - Frontend specifications
   - Backend design patterns
   - Data model documentation
   - System architecture guidelines
3. **Development Guidelines**
   - Coding standards
   - Project-specific rules
   - Best practices
   - Team conventions

## [​](https://docs.cursor.com/beta/notepads\#faq)  FAQ

### [​](https://docs.cursor.com/beta/notepads\#what-should-i-write-in-notepads%3F)  What should I write in Notepads?

Notepads are ideal for:

- Project architecture decisions
- Development guidelines and standards
- Reusable code templates
- Documentation that needs to be referenced frequently
- Team-specific conventions and rules

### [​](https://docs.cursor.com/beta/notepads\#what-should-not-be-written-in-notepads%3F)  What should not be written in Notepads?

Avoid using Notepads for:

- Temporary notes or scratch work
- Information that belongs in version control (like git)
- Sensitive data or credentials
- Highly volatile information that changes frequently

### [​](https://docs.cursor.com/beta/notepads\#should-i-follow-a-particular-format-or-structure%3F)  Should I follow a particular format or structure?

While Notepads are flexible, we recommend:

- Using clear headings and sections
- Including examples where relevant
- Keeping content focused and organized
- Using markdown formatting for better readability
- Adding relevant file attachments when necessary

### [​](https://docs.cursor.com/beta/notepads\#example-notepad)  Example Notepad

Here’s a typical example of a Notepad for a web application project:

Notepad example

Copy

```md
# API Development Guidelines

## Endpoint Structure
- Use RESTful conventions
- Base URL: `/api/v1`
- Resource naming in plural form

## Authentication
- JWT-based authentication
- Token format: Bearer {token}
- Refresh token mechanism required

## Response Format
{
  "status": "success|error",
  "data": {},
  "message": "Optional message"
}

## Attached References
@api-specs.yaml
@auth-flow.md

```

Was this page helpful?

YesNo

[AI Commit Message](https://docs.cursor.com/more/ai-commit-message) [Keyboard Shortcuts](https://docs.cursor.com/kbd)

On this page

- [Overview](https://docs.cursor.com/beta/notepads#overview)
- [Getting started](https://docs.cursor.com/beta/notepads#getting-started)
- [Key features](https://docs.cursor.com/beta/notepads#key-features)
- [Common use cases](https://docs.cursor.com/beta/notepads#common-use-cases)
- [FAQ](https://docs.cursor.com/beta/notepads#faq)
- [What should I write in Notepads?](https://docs.cursor.com/beta/notepads#what-should-i-write-in-notepads%3F)
- [What should not be written in Notepads?](https://docs.cursor.com/beta/notepads#what-should-not-be-written-in-notepads%3F)
- [Should I follow a particular format or structure?](https://docs.cursor.com/beta/notepads#should-i-follow-a-particular-format-or-structure%3F)
- [Example Notepad](https://docs.cursor.com/beta/notepads#example-notepad)

![](https://docs.cursor.com/beta/notepads)

![](https://docs.cursor.com/beta/notepads)