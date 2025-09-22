[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Search...

Navigation

Troubleshooting

Common Issues

While we strive to make Cursor as stable as possible, sometimes issues can arise. Below are some common issues and how to resolve them.

### [​](https://docs.cursor.com/troubleshooting/common-issues\#networking-issues-http%2F2)  Networking Issues (HTTP/2)

Cursor relies on the HTTP/2 protocol for many of it’s AI features, due to it’s ability to handle streamed responses. If HTTP/2 is not supported by your network, this can cause issues such as failure to index your code, and the inability to use Cursor’s AI features.

This can be the case when on corpoorate networks, using VPNs, or using a proxy like Zscaler.

To resolve this, Cursor now comes with a HTTP/1.1 fallback, which is slower, but will allow you to use Cursor’s AI features. You can enable this yourself in the app settings (not the Cursor settings), by pressing `CMD/CTRL + ,` and then searching for `HTTP/2`.

You should then enable the `Disable HTTP/2` option, which will force Cursor to use HTTP/1.1, and should resolve the issue.

We hope to add automatic detection and fallback in the future!

### [​](https://docs.cursor.com/troubleshooting/common-issues\#resource-issues-cpu%2C-ram%2C-etc)  Resource Issues (CPU, RAM, etc.)

Some users see high CPU or RAM usage in Cursor, which can cause their machine to slow down, or to show warnings about high RAM usage.

While Cursor can use a lot of resources when working on large codebases, this is usually not the case for most users, and is more likely to be an issue with Cursor’s extensions or settings.

If you are seeing a low RAM warning on **MacOS**, please note that there is a bug for some users that can show wildly incorrect values. If you are seeing this, please open the Activity Monitor and look at the “Memory” tab to see the correct memory usage.

If you’re experiencing high CPU or RAM usage in Cursor, here are steps to diagnose and resolve the issue:

Check Your Extensions

While many extensions can be useful, some can significantly impact performance!

To test this, you can try to run `cursor --disable-extensions` from the command line to launch Cursor without any extensions enabled. If the performance improves, gradually re-enable extensions one by one to identify the problematic ones.

You can also try to use the Extension Bisect feature, which will help you identify which extension is causing the issue. You can read more about it [here](https://code.visualstudio.com/blogs/2021/02/16/extension-bisect#_welcome-extension-bisect), but note that this may only be useful if the issues are immediate and obvious, and not an issue that worsens over time.

Use the Process Explorer

The **Process Explorer** is a built in tool in Cursor that allows you to see which processes are consuming resources.

To open it, open the Command Palette ( `Cmd/Ctrl + Shift + P`) and run the `Developer: Open Process Explorer` command.

This should open a new window, with a list of all the processes Cursor is running, both as part of it’s own executation, as well as any processes needed to run extensions and any terminals you may have running. This should immediately identify any processes that are consuming a lot of resources.

If the process is listed under the **`extensionHost`** dropdown, this suggests an extension is causing the issue, and you should try to find and disable the problematic extension.

If the process is listended under the **`ptyHost`** dropdown, this suggests a terminal is consuming a lot of resources. The Process Explorer will show you each terminal that is running, and what command is running within it, so that you can try to kill it, or diagnose it’s high resource usage.

If the usage is from another process, please let us know in the [forum](https://forum.cursor.com/) and we’ll be happy to help diagnose the issue.

Monitor System Resources

Depending on your operating system, you can use a number of different tools to monitor your system’s resources.

This will help you identify if the issue is Cursor-specific, or if it’s a system-wide issue.

Testing a Minimal Installation

While the above steps should help the majority of users, if you are still experiencing issues, you can try testing a minimal installation of Cursor to see if the issue persists.

## [​](https://docs.cursor.com/troubleshooting/common-issues\#general-faqs)  General FAQs

I see an update on the changelog but Cursor won't update

If the update is very new, it might not have rolled out to you yet. We do staged rollouts, which means we release new updates to a few randomly selected users first before releasing them to everyone. Expect to get the update in a couple days!

I have issues with my GitHub login in Cursor / How do I log out of GitHub in Cursor?

You can try using the `Sign Out of GitHub` command from the command palette `Ctrl/⌘ + Shift + P`.

I can't use GitHub Codespaces

Unfortunately, we don’t support GitHub Codespaces yet.

I have errors connecting to Remote SSH

Currently, we don’t support SSHing into Mac or Windows machines. If you’re not using a Mac or Windows machine, please report your issue to us in the [forum](https://forum.cursor.com/). It would be helpful to include some logs for better assistance.

SSH Connection Problems on Windows

If you encounter the error “SSH is only supported in Microsoft versions of VS Code”, follow these steps:

1. Uninstall the current Remote-SSH extension:
   - Open the Extensions view ( `Ctrl + Shift + X`)
   - Search for “Remote-SSH”
   - Click on the gear icon and select “Uninstall”
2. Install version 0.113 of Remote-SSH:
   - Go to the Cursor marketplace
   - Search for “Remote-SSH”
   - Find version 0.113 and install it
3. After installation:
   - Close all VS Code instances that have active SSH connections
   - Restart Cursor completely
   - Try connecting via SSH again

If you still experience issues, make sure your SSH configuration is correct and that you have the necessary SSH keys set up properly.

Cursor Tab and Cmd K do not work behind my corporate proxy

Cursor Tab and Cmd K use HTTP/2 by default, which allows us to use less resources with lower latency. Some corporate proxies (e.g. Zscaler in certain configurations) block HTTP/2. To fix this, you can set `"cursor.general.disableHttp2": true` in the settings ( `Cmd/Ctrl + ,` and then search for `http2`).

I just subscribed to Pro but I'm still on the free plan in the app

Try logging out and logging back in from the Cursor Settings

When will my usage reset again?

If you’re subscribed to Pro you can click on `Manage Subscription` from the [Dashboard](https://cursor.com/settings) and your plan renewal date will be displayed at the top.

If you’re a free user you can check when you got the first email from us in your inbox. Your usage will reset every month from that date.

My Chat/Composer history disappeared after an update

If you notice that your Chat or Composer history has been cleared following an update, this is likely due to low disk space on your system. Cursor may need to clear historical data during updates when disk space is limited. To prevent this from happening:

1. Ensure you have sufficient free disk space before updating
2. Regularly clean up unnecessary files on your system
3. Consider backing up important conversations before updating

How do I uninstall Cursor?

You can follow [this guide](https://code.visualstudio.com/docs/setup/uninstall) to uninstall Cursor. Replace every occurrence of “VS Code” or “Code” with “Cursor”, and “.vscode” with “.cursor”.

How do I delete my account?

You can delete your account by clicking on the `Delete Account` button in the [Dashboard](https://cursor.com/settings). Note that this will delete your account and all data associated with it.

How do I open Cursor from the command line?

You can open Cursor from the command line by running `cursor` in your terminal. If you’re missing the `cursor` command, you can

1. Open the command palette `⌘⇧P`
2. Type `install command`
3. Select `Install 'cursor' command` (and optionally the `code` command too which will override VS Code’s `code` command)

Unable to Sign In to Cursor

If you click Sign In on the General tab of Cursor’s Settings tab but are redirected to cursor.com and then return to Cursor still seeing the Sign In button, try disabling your firewall or antivirus software, which may be blocking the sign-in process.

Was this page helpful?

YesNo

[Early Access Program](https://docs.cursor.com/settings/beta) [Troubleshooting Guide](https://docs.cursor.com/troubleshooting/troubleshooting-guide)

On this page

- [Networking Issues (HTTP/2)](https://docs.cursor.com/troubleshooting/common-issues#networking-issues-http%2F2)
- [Resource Issues (CPU, RAM, etc.)](https://docs.cursor.com/troubleshooting/common-issues#resource-issues-cpu%2C-ram%2C-etc)
- [General FAQs](https://docs.cursor.com/troubleshooting/common-issues#general-faqs)