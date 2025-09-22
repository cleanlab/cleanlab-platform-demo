[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Business

SSO

## [​](https://docs.cursor.com/account/teams/sso\#overview)  Overview

SAML 2.0 Single Sign-On (SSO) is available at no additional cost on the Cursor Business plan. This enables you to use your existing identity provider (IdP) to authenticate your team members, avoiding the need for your team members to have a Cursor account, and remember another password.

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/account/sso-settings.png)

## [​](https://docs.cursor.com/account/teams/sso\#prerequisites)  Prerequisites

- A Cursor Business plan
- Admin access to your identity provider (e.g., Okta)
- Admin access to your Cursor organization

## [​](https://docs.cursor.com/account/teams/sso\#configuration-steps)  Configuration Steps

1

Sign in to your Cursor account

Navigate to [cursor.com/settings](http://cursor.com/settings) and sign in with an admin account.

2

Locate the SSO configuration

Find the “Configure SSO” button in the bottom left of the settings page

3

Begin the setup process

Click the button to start the SSO setup process, and follow the setup wizard to configure your identity provider.

4

Configure your identity provider

In your identity provider (e.g., Okta):

- Create a new SAML application
- Configure the SAML settings using the information provided in Cursor
- Set up Just-in-Time (JIT) provisioning for seamless user access

### [​](https://docs.cursor.com/account/teams/sso\#identity-provider-setup-guides)  Identity Provider Setup Guides

For detailed setup instructions specific to your identity provider, refer to the guides below:

[**Identity Provider Guides** \\
\\
Access comprehensive setup instructions for all major identity providers including Okta, Azure AD, Google Workspace, and more.](https://workos.com/docs/integrations)

SCIM provisioning coming H1 2025

## [​](https://docs.cursor.com/account/teams/sso\#additional-settings)  Additional Settings

- SSO enforcement is managed through the admin dashboard
- New users are automatically enrolled in your organization when they sign in through SSO
- User management can be handled directly through your identity provider

## [​](https://docs.cursor.com/account/teams/sso\#troubleshooting)  Troubleshooting

If you encounter issues during setup:

- Verify your domain has been verified in Cursor
- Ensure all required SAML attributes are properly mapped
- Check that the SSO configuration is enabled in your admin dashboard
- If a user is unable to authenticate, ensure the first and last name set in the identity provider matches their name in Cursor
- Check the guides above for detailed setup instructions specific to your identity provider
- If you continue to experience issues, please reach out to us at [hi@cursor.com](mailto:hi@cursor.com)

Was this page helpful?

YesNo

[Analytics](https://docs.cursor.com/account/teams/analytics) [Dashboard](https://docs.cursor.com/account/dashboard)

On this page

- [Overview](https://docs.cursor.com/account/teams/sso#overview)
- [Prerequisites](https://docs.cursor.com/account/teams/sso#prerequisites)
- [Configuration Steps](https://docs.cursor.com/account/teams/sso#configuration-steps)
- [Identity Provider Setup Guides](https://docs.cursor.com/account/teams/sso#identity-provider-setup-guides)
- [Additional Settings](https://docs.cursor.com/account/teams/sso#additional-settings)
- [Troubleshooting](https://docs.cursor.com/account/teams/sso#troubleshooting)

![](https://docs.cursor.com/account/teams/sso)