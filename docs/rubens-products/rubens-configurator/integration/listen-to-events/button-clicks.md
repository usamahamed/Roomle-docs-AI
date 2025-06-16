# Button clicks

You can use the onButtonClicked callback to react on button clicks within the configurator UI. The parameter of the callback is the name of the button which has been clicked.

You can use the UI\_BUTTON enum to get all available button names:

```javascript
export enum UI_BUTTON {
  AR = 'ar',
  PARTLIST = 'partlist',
  MULTISELECT = 'multiselect',
  DIMENSIONS = 'dimensions',
  FULLSCREEN = 'fullscreen',
  RESETCAMERA = 'resetcamera',
  RENDERIMAGE = 'renderimage',
  ADDONS = 'addons',
  REQUESTPRODUCT = 'requestproduct',
  REQUESTPLAN = 'requestplan',
  SAVEDRAFT = 'savedraft',
  STARTCONFIGURE = 'startconfigure',
  PAUSECONFIGURE = 'pauseconfigure',
  EXPORT_3D = 'export3d',
  ROTATE = 'rotate',
  UNDO = 'undo',
  REDO = 'redo'
}
```

Example:

```javascript
configurator.ui.callbacks.onButtonClicked = (name) => {
  console.log('Button clicked: ' + name);
};
```

**It is important that the override function returns `true` because if not, nothing gets returned.** For example if we want to override only the default behaviour of the `Save Draft` button we could write something like this:

```javascript
configurator.ui.callbacks.onButtonClicked = (name) => {
  if (name === 'savedraft') {
    alert('Custom save draft!');
    return true;
  }
  return false;
};
```

You can try and play around with it in the following [Code Sandbox](https://codesandbox.io/p/sandbox/override-button-events-2xnmk3).
