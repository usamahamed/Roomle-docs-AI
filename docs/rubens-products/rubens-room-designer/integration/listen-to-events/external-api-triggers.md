## Controlling Room Designer Actions via External API

This documentation provides an overview of API methods that enable triggering actions in the Room Designer from external sources, outside of the iframe. These methods offer enhanced flexibility, allowing developers to customize and control behavior within the Roomle interface based on external events or interactions.

### Custom PartList Printing

Below is an example implementation demonstrating how to set up the `onButtonClicked` callback and customize partList printing. This example assumes you have already set up the Room Designer.

```javascript
planner.ui.callbacks.onButtonClicked = async (name, payload = {}) => {
  if (name === 'partlist_print') {
    const { partList, price, label, bounds, catalogLabel } = payload || {};

    const { image } = await planner.extended.preparePerspectiveImage();
    await printPartList({
      partList,
      price,
      label,
      bounds,
      catalogLabel,
      image,
    });

    return true;
  }
  return false;
};
```

You can test and play around in this CodeSandbox:
[![Edit external_partList_printing](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/external-partlist-printing-forked-j9w3dq)

### Externally Triggering Overlays

The triggerShowOverlay method allows external systems or events to trigger certain overlays (like tutorials, drafts, etc.) inside the Room Designer. This ensures that certain overlays can be displayed externally while maintaining control over which ones are allowed.

This example assumes you have already set up the Room Designer.

```javascript

  const button = document.querySelector("#custom-button");

  button.addEventListener("click", () => {

    planner.ui.triggerShowOverlay(11);
  });
```

### Available Overlays:
- **SAVE_DRAFT**: 1
- **OPEN_AR**: 4
- **EXPORT_3D**: 5
- **TUTORIALS**: 11
- **LOAD_PRODUCT**: 12 _(only available if `Room Designer` is enabled)_
