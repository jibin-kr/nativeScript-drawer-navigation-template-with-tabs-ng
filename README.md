# NativeScript with Angular Drawer Navigation and Tabs

App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

App template featuring a RadSideDrawer component for navigation. The RadSideDrawer component is part of [Progress NativeScript UI](https://github.com/telerik/nativescript-ui-feedback).

<img src="https://github.com/jibin-kr/NativeScript-drawer-navigation-template-with-tab-view-ng/blob/master/Screen1.png" height="400" /> <img src="https://github.com/jibin-kr/NativeScript-drawer-navigation-template-with-tab-view-ng/blob/master/screen2.png" height="400" />
## Key Features

- Side drawer navigation
- Tab View Navigation
- Eight blank pages hooked to the drawer navigation and Tab view navigation
- Customizable theme
- UX and development best practices
- Easy to understand code

## Walkthrough

### Architecture

The RadSideDrawer component is set up as an application starting point in:

- `/app-component.ts` - sets up the side drawer content and defines a page router outlet for the pages.

RadSideDrawer has the following component structure:

- `RadSideDrawer` - The component to display a drawer on the page.
- `tkDrawerContent` directive - Marks the component that will hold the drawer content.
- `tkMainContent` directive - Marks the component that will hold the app main content.

There are five blank components located in these folders:

- `/browse`
- `/featured`
- `/home`
- `/search`
- `/settings`
- `/cart`
- `/wishlist`
- `/account`

### Styling

This template is set up to use SASS for styling. All classes used are based on the {N} core theme – consult the [documentation](https://docs.nativescript.org/angular/ui/theme.html#theme) to understand how to customize it. Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:

- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `_app-common.scss` - the global common style sheet. These style rules are applied to both Android and iOS.
- `app.android.scss` - the global Android style sheet. These style rules are applied to Android only.
- `app.ios.scss` - the global iOS style sheet. These style rules are applied to iOS only.

## Get Help

The NativeScript framework has a vibrant community that can help when you run into problems.
