[Cursor home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg)](https://docs.cursor.com/)

Search or ask...

Ctrl K

Search...

Navigation

Editor Migration

Migrate from VS Code

Cursor is based upon the VS Code codebase, allowing us to focus on making the best AI-powered coding experience while maintaining a familiar editing environment. This makes it easy to migrate your existing VS Code settings to Cursor.

## [​](https://docs.cursor.com/guides/migration/vscode\#profile-migration)  Profile Migration

### [​](https://docs.cursor.com/guides/migration/vscode\#one-click-import)  One-click Import

Here’s how to get your entire VS Code setup in one click:

1. Open the Cursor Settings ( `⌘`/ `Ctrl` \+ `Shift` \+ `J`)
2. Navigate to General > Account
3. Under “VS Code Import”, click the Import button

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/get-started/vscode-import.png)

This will transfer your:

- Extensions
- Themes
- Settings
- Keybindings

### [​](https://docs.cursor.com/guides/migration/vscode\#manual-profile-migration)  Manual Profile Migration

If you are moving between machines, or want more control over your settings, you can manually migrate your profile.

#### [​](https://docs.cursor.com/guides/migration/vscode\#exporting-a-profile)  Exporting a Profile

1. On your VS Code instance, open the Command Palette ( `⌘`/ `Ctrl` \+ `Shift` \+ `P`)
2. Search for “Preferences: Open Profiles (UI)”
3. Find the profile you want to export on the left sidebar
4. Click the 3-dot menu and select “Export Profile”
5. Choose to export it either to your local machine or to a GitHub Gist

#### [​](https://docs.cursor.com/guides/migration/vscode\#importing-a-profile)  Importing a Profile

1. On your Cursor instance, open the Command Palette ( `⌘`/ `Ctrl` \+ `Shift` \+ `P`)
2. Search for “Preferences: Open Profiles (UI)”
3. Click the dropdown menu next to ‘New Profile’ and click ‘Import Profile’
4. Either paste in the URL of the GitHub Gist or choose ‘Select File’ to upload a local file
5. Click ‘Import’ at the bottom of the dialog to save the profile
6. Finally, in the sidebar, choose the new profile and click the tick icon to active it

## [​](https://docs.cursor.com/guides/migration/vscode\#settings-and-interface)  Settings and Interface

### [​](https://docs.cursor.com/guides/migration/vscode\#settings-menus)  Settings Menus

## Cursor Settings

Access via Command Palette ( `⌘`/ `Ctrl` \+ `Shift` \+ `P`), then type “Cursor Settings”

## VS Code Settings

Access via Command Palette ( `⌘`/ `Ctrl` \+ `Shift` \+ `P`), then type “Preferences: Open Settings (UI)“

### [​](https://docs.cursor.com/guides/migration/vscode\#version-updates)  Version Updates

## Version Updates

We regularly rebase Cursor onto the latest VS Code version to stay current with features and fixes. To ensure stability, Cursor often uses slightly older VS Code versions.

### [​](https://docs.cursor.com/guides/migration/vscode\#activity-bar-orientation)  Activity Bar Orientation

![](https://mintlify.s3.us-west-1.amazonaws.com/cursor/images/get-started/activity-bar.png)

We made it horizontal to optimize space for the AI chat interface. If you prefer vertical:

1. Open the Command Palette ( `⌘`/ `Ctrl` \+ `Shift` \+ `P`)
2. Search for “Preferences: Open Settings (UI)”
3. Search for `workbench.activityBar.orientation`
4. Set the value to `vertical`
5. Restart Cursor

Was this page helpful?

YesNo

[FAQ](https://docs.cursor.com/faq) [Migrate from JetBrains IDEs](https://docs.cursor.com/guides/migration/jetbrains)

On this page

- [Profile Migration](https://docs.cursor.com/guides/migration/vscode#profile-migration)
- [One-click Import](https://docs.cursor.com/guides/migration/vscode#one-click-import)
- [Manual Profile Migration](https://docs.cursor.com/guides/migration/vscode#manual-profile-migration)
- [Exporting a Profile](https://docs.cursor.com/guides/migration/vscode#exporting-a-profile)
- [Importing a Profile](https://docs.cursor.com/guides/migration/vscode#importing-a-profile)
- [Settings and Interface](https://docs.cursor.com/guides/migration/vscode#settings-and-interface)
- [Settings Menus](https://docs.cursor.com/guides/migration/vscode#settings-menus)
- [Version Updates](https://docs.cursor.com/guides/migration/vscode#version-updates)
- [Activity Bar Orientation](https://docs.cursor.com/guides/migration/vscode#activity-bar-orientation)

![](https://docs.cursor.com/guides/migration/vscode)

![](https://docs.cursor.com/guides/migration/vscode)