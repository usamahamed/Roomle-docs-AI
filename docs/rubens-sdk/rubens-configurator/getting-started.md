# Getting Started

### Installing the SDK <a href="#installing-the-sdk" id="installing-the-sdk"></a>

To install the SDK we use npm (but also yarn or another package manager which uses the npm logic is possible).

```
npm i @roomle/web-sdk --save
```

You can pin the dependency to a specific version. We always recommend to use a specific version (for details see: [section about version](https://docs.roomle.com/web/guides/sdk/prerequisites.html)).

### Creating an index.html <a href="#creating-an-index-html" id="creating-an-index-html"></a>

Next we need some `index.html`. Vue CLI will create this one for you. Of course you can use the Roomle Web SDK also on some sub page or inside a [SPA](https://en.wikipedia.org/wiki/Single-page\_application).

It's important to set the Roomle asset path before everything else loads (more see [asset path](https://docs.roomle.com/web/guides/sdk/prerequisites.html#asset-path)). In our example we do this inside `index.html`.

```html
<script>
  window.__RML__ENV__ = {
    assetPath: 'dist/roomle/',
  };
</script>
```

The next thing we need is a place where we want to put the canvas on which Three.js operates. In our case we just add a `div` container with a specific css class. The styling, sizing of the `div` is done by CSS. Since we use in our example vue js, we are using the ref attribute to declare the container `scene` which we can then use directly in javascript. Of course you can also use vanilla javascript and use the id attribute in the `div` and use it with an `query selector` in javascript.

```html
<template>
  <div class="container">
    <div ref="scene" class="scene"></div>
  </div>
</template>
```

### Usage in TypeScript (JavaScript) <a href="#usage-in-typescript-javascript" id="usage-in-typescript-javascript"></a>

Since we author the SDK in TypeScript we also want to use TypeScript in this guide. We hope you can see the benefits quickly. We think that exploring a SDK is much easier with code completion and intellisense. Therefore IDEs like VSCode, Webstorm, Atom etc are a great help. So let's get started. To load a configuration we need to add the following code to the setup method of our Vue component. Most of the code is framework independent. Only the way we hand over the DOM element could be different, as described above if you are using vanilla javascript please just use the id attribute on the div element and get it in javascript with a `query selector`.

**Important!! You have to set the configuratorId for Tracking**

That we can track your data correctly it is important to set the [configuratorId](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_configurator.\_internal\_.default-7#configuratorid) in the globalInitData! The [configuratorId ](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_configurator.\_internal\_.default-7#configuratorid)is normally the name of your tenant.

```typescript
  setup({ objectId }) {
    const scene = ref(null);
    let rubensConfiguratorApi = null;
    let rubensConfigurator = null;
    onMounted(async () => {
      RoomleSdk.setGlobalInitData({
        configuratorId: <your-tenant-name>
        customApiUrl: "https://api.roomle.com/v2",
      });
      rubensConfigurator = await RoomleSdk.getConfigurator();
      rubensConfigurator.boot();
      rubensConfiguratorApi = await rubensConfigurator.getApi();
      await rubensConfiguratorApi.init(scene.value);
      const initialId = objectId || "usm:frame";
      await rubensConfiguratorApi.loadConfigurableItemById(initialId);
    });

    return { scene };
  }
```

To see the full example please visit the Code Sandbox here: [https://codesandbox.io/s/roomlewebsdkconfiguratorstep01-u6sox?file=/src/components/Scene.vue](https://codesandbox.io/s/roomlewebsdkconfiguratorstep01-u6sox?file=/src/components/Scene.vue)

#### Tweaking the default scene <a href="#tweaking-the-default-scene" id="tweaking-the-default-scene"></a>

Since we are loading a shelf we can improve the light situation slightly. To make it easy we provided light settings which fit for special furniture types, for example `sofa` or `shelf` (more details see [lights](https://docs.roomle.com/web/guides/sdk/configurator/scene-settings.html) or our [our reference](../rubens-sdk-reference/)), to use one of these just use the following code (this is a continuation of the previous example. It's enough to pass the correct settings to `setGlobalInitData`, therefore we change the code slightly):

```typescript
RoomleSdk.setGlobalInitData({
  customApiUrl: 'https://api.roomle.com/v2',
  ls: 'shelf',
});
```

There are several more options to tweak but we won't go into detail here. Therefor see [our reference](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md).
