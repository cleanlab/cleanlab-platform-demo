[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Troubleshooting

Troubleshooting Guide

Sometimes, Cursor may unexpectantly have some issues. This can be due to a number of reasons, including extensions, app data, or your system. While we work hard to ensure Cursor is as stable out of the box as possible, if these issues happen, you can try the following steps to resolve them.

[**Extension Data**](https://docs.cursor.com/troubleshooting/troubleshooting-guide#1-extension-data) [**Application Data**](https://docs.cursor.com/troubleshooting/troubleshooting-guide#2-clearing-app-data) [**Uninstalling**](https://docs.cursor.com/troubleshooting/troubleshooting-guide#3-uninstalling-cursor)

[**Reporting an Issue** \\
\\
Steps to report an issue to the Cursor team](https://docs.cursor.com/troubleshooting/troubleshooting-guide#reporting-an-issue)

## [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#troubleshooting)  Troubleshooting

### [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#1-extension-data)  1\. Extension Data

If you are experiencing issues with individual extensions, you can try uninstalling and reinstalling them to reset any data they may have stored. Also check your settings to see if you have any configuration for the extensions that would remain after uninstalling and reinstalling them.

### [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#2-clearing-app-data)  2\. Clearing App Data

WARNING:

This will delete your app data, including your extensions, themes, snippets and any other data related to your installation. Consider exporting your profile to ensure this data is not lost.

To allow your installation to be restored between updates, and between reinstallation, Cursor keeps your app data outside of the app itself. This means that if you uninstall Cursor, you can reinstall it and it will restore your app data from the previous installation.

If you would like to clear your app data, you can do so by following these steps:

**Windows:** Run the following commands in Command Prompt:

Copy

```txt
rd /s /q %USERPROFILE%\AppData\Local\Programs\cursor*
rd /s /q %USERPROFILE%\AppData\Local\Cursor*
rd /s /q %USERPROFILE%\AppData\Roaming\Cursor*
rd /s /q %USERPROFILE%\cursor*

```

**MacOS:** Run `sudo rm -rf ~/Library/Application\ Support/Cursor` and `rm -f ~/.cursor.json` in Terminal.

**Linux:** Run `rm -rf ~/.cursor ~/.config/Cursor/` in Terminal.

### [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#3-uninstalling-cursor)  3\. Uninstalling Cursor

While we never want you to have to reinstall Cursor, if you are experiencing issues, this can sometimes help.

To uninstall the Cursor app, you can do the following:

## Windows

Search for `Add or Remove Programs` Start Menu, find “Cursor” list, and click “Uninstall”.

## MacOS

Open the Applications folder, find “Cursor” in the list, and right click and select “Move to Trash”.

## Linux

Find the location of the Cursor.appimage file, and delete it.

### [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#4-reinstalling-cursor)  4\. Reinstalling Cursor

If you have uninstalled Cursor, you can reinstall it by going to the [Downloads page](https://www.cursor.com/download) and downloading the latest version. If you have not cleared your app data, this should restore your app to the state it was in when you uninstalled it. Otherwise, you will have an entirely fresh install of Cursor.

## [​](https://docs.cursor.com/troubleshooting/troubleshooting-guide\#reporting-an-issue)  Reporting an Issue

If the above steps don’t help, please let us know in the [forum](https://forum.cursor.com/) and we’ll be happy to help diagnose the issue.

[**Cursor Forum** \\
\\
Report an bug or issue on the Cursor forum](https://forum.cursor.com/)

For the best chance at a quick resolution, please provide as much of the following information as you can, to help the team resolve the issue for you and othersß∂:

## Screenshot of Issue

Capture a screenshot of the issue, making sure to redact any sensitive information.

## Steps to Reproduce

Document the exact steps needed to reproduce the issue.

## System Information

Retrieve system information from:

`Cursor` \> `Help` \> `About`

[**Request IDs** \\
\\
Click to view our guide on gathering request IDs](https://docs.cursor.com/troubleshooting/request-reporting)

## Console Errors

Check developer tools console errors, by running this in the command palette:

`Developer: Toggle Developer Tools`

## Logs

Access Cursor’s logs by running this in the command palette:

`Developer: Open Logs Folder`

Was this page helpful?

YesNo

[Common Issues](https://docs.cursor.com/troubleshooting/common-issues) [Getting a Request ID](https://docs.cursor.com/troubleshooting/request-reporting)

On this page

- [Troubleshooting](https://docs.cursor.com/troubleshooting/troubleshooting-guide#troubleshooting)
- [1\. Extension Data](https://docs.cursor.com/troubleshooting/troubleshooting-guide#1-extension-data)
- [2\. Clearing App Data](https://docs.cursor.com/troubleshooting/troubleshooting-guide#2-clearing-app-data)
- [3\. Uninstalling Cursor](https://docs.cursor.com/troubleshooting/troubleshooting-guide#3-uninstalling-cursor)
- [4\. Reinstalling Cursor](https://docs.cursor.com/troubleshooting/troubleshooting-guide#4-reinstalling-cursor)
- [Reporting an Issue](https://docs.cursor.com/troubleshooting/troubleshooting-guide#reporting-an-issue)