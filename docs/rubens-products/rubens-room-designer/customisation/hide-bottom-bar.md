# Hide Bottom Bar

Besides of hiding buttons in the Rubens UI, you can also hide the whole bottom bar which is displayed at the bottom of the configurator.

This is easily possible with just one parameter which you can add in the init data:

```typescript
const configuratorId = "demoConfigurator";
  const domElement = document.getElementById("configurator-container");
  const initData = {
    elements: {
      moc: true,
      bottom_bar: false,
    },
  };
  const configurator = await RoomleConfiguratorApi.create(
    configuratorId,
    domElement,
    initData
  );
```

## Code Sandbox Example:

You can find an example in this [Code Sandbox](https://codesandbox.io/p/sandbox/hide-bottom-bar-forked-jqtsw6).
