# Change floor material

This guide provides instructions on how to change the floor material in the Rubens Configurator using the Roomle Configurator API. The API allows you to modify the environment of the 3D configurator, including changing the floor material dynamically.

Firstly you have to embed the Rubens configurator in you environment, how you can do this you can find here: [getting-started.md](../getting-started.md "mention")

## Code Sandbox

If you want to just copy and paste an existing code example or want to have a quick overview you can check this [Code Sandbox.](https://codesandbox.io/p/sandbox/rubens-api-functions-overview-forked-983rgk)

## Change the floor color

For changing the floor color you can use the method `RoomleConfigurator.extended.changeFloorMaterial`, if you want to know more about our api functions you can have a look in our integration guide: [call-3d-scene-functions](../integration/call-3d-scene-functions/ "mention")

&#x20;Here is a small code example how this could look in your code:

```typescript
const configurator = await RoomleConfiguratorApi.create(
    configuratorId,
    domElement,
    {}
  );
  // load an item
  await configurator.ui.loadObject("usm:frame");

  // change material of floor
  configurator.extended.changeFloorMaterialById("roomle_floor:DresdenEiche");
```

In this example we firstly initilise our configurator and load an item, afterwards we change the floor material.

## Floor material id's

There are different floor materials which can be set:

* roomle\_floor:DresdenEiche
* roomle\_floor:Palma
* roomle\_floor:Elba
* roomle\_floor:Manacor
* roomle\_floor:KernEiche
* roomle\_floor:KieferScandic
* roomle\_floor:EicheHabsburg
* roomle\_floor:FuldaKiefer
* roomle\_floor:Ashton
* roomle\_floor:EicheLondon
* roomle\_floor:Ibiza

## Helpful links:

Rubens SDK API functions: [configurator\_core\_src\_roomle\_configurator.default.md](../../../rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md "mention")
