# Getting started

### Initial commit <a href="#initial-commit" id="initial-commit"></a>

First of all we need to add `@roomle/web-sdk` to our npm dependencies and setup a build process. To finally load something you will need to do the following:

```typescript
    import RoomleSdk from "@roomle/web-sdk";
    // set the URL from where you want to load
    // the data, normally that's api.roomle.com/v2
    RoomleSdk.setGlobalInitData({
        customApiUrl: "https://api.roomle.com/v2",
    });

    const glbViewerawait = RoomleSdk.getGlbViewer();
    glbViewer.boot();
    glbViewerApi = await glbViewer.getApi();
    const scene = document.querySelector(".scene");
    await glbViewerApi.init(scene);
    // Load a static item by the id
    await glbViewerApi.loadStaticItem("roomle_content_demo:kitchenware003");
```

### Loading different items <a href="#loading-different-items" id="loading-different-items"></a>

If you finished step one you where already able to load a static item. You only need to bind the method `loadStaticItem` to a click event. We suggest something like:

```typescript
const loadObject = async (id: string) => {
  await glbViewerApi.loadStaticItem(id);
}
```

### Opening AR <a href="#opening-ar" id="opening-ar"></a>

To open AR you can use the quick-look features of Android and iOS. For Android a [GLB ](https://en.wikipedia.org/wiki/GlTF#GLB)is needed and for iOS a [USDZ ](https://en.wikipedia.org/wiki/Universal\_Scene\_Description)file.

To fetch the URL of the GLB you can use the module Rapi Access. This works as follows:

```typescript
const rapiAccess = await RoomleSdk.getRapiAccess();
const itemData = await rapiAccess.getItem(initialId);
const { assets } = await rapiAccess.getItem(id);
const arUrl = isIOs() ? assets.usdz.url : createAndroidARUrl(assets.glb.url);
```

For platform specific details please visit one of the following links:

* Android: [https://developers.google.com/ar/develop/java/scene-viewer](https://developers.google.com/ar/develop/java/scene-viewer)
* iOS [https://developer.apple.com/augmented-reality/quick-look/](https://developer.apple.com/augmented-reality/quick-look/)

### Code Sandbox <a href="#code-sandbox" id="code-sandbox"></a>

Since we only showed the relevant code in the snippets it's time to have a look on the working example. You can find it [here in our CodeSandbox](https://codesandbox.io/s/roomlewebsdkglbviewer-t3rme) example.
