# Setup Room Designer

## Setup the room designer container in the html <a href="#setup-the-room-designer-container-in-the-html" id="setup-the-room-designer-container-in-the-html"></a>

For knowing where our script has to place the iframe we need a container (html `<div>` element) which has an unique id. In our case we call it `rd-container` and set the width and length in the css style sheet to 100vw and 80vw.

```javascript
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      #configurator-container {
        width: 100vw;
        height: 80vw;
      }
    </style>
  </head>

  <body>
    <!-- setup the configurator container -->
    <div id="configurator-container"></div>
    
    <!-- link to the script file -->
    <script src="./index.js" type="module"></script>
  </body>
</html>
```

## Import the RoomleConfigurator instance <a href="#import-the-roomleconfigurator-instance" id="import-the-roomleconfigurator-instance"></a>

We import the RoomleConfiguratorAPI via npm in this example, if you want to import it with a script tag please have a look [here](../../rubens-configurator/getting-started.md#copy-and-paste-without-package-manager).

If you have not imported the RoomleConfiguratorAPI yet, please do this as described [here](../../rubens-configurator/getting-started.md#install-with-npm-package-manager).

If you are using the embedding library you have to call `createPlanner` instead of `create` or `createConfigurator` to load a Room Designer scene.

```javascript
import RoomleConfiguratorApi from "@roomle/embedding-lib/roomle-configurator-api.es.min.js";
(async () => {
  const configuratorId = "demoConfigurator";
  const domElement = document.getElementById("configurator-container");
  const configurator = await RoomleConfiguratorApi.createPlanner(
    configuratorId, // your configurator id which you got
    domElement, // the specified domElement id
    {} // custom parameter for UI customisation
  );  
  // load an item
  await configurator.ui.loadObject("usm:frame");
})
```

### URL Parameters

To embed or integrate the Room Designer, the following parameters must be included in the URL

* configuratorId: The configurator ID of the tenant where you enabled the Room Designer
* catalogRootTag: The tag of the catalog where you stored the products you want to show in the Room Designer, Alternatively you could also set the root-tag ID as catalogRootTag in your Rubens settings.
* moc: Enable the Room Designer feature in the Rubens settings or via integration.

## Loading the item <a href="#loading-the-item" id="loading-the-item"></a>

We provide now two convenient ways to load a product into the configurator. Either you instantiate the Room Designer without a product and use `loadObject` later or you pass in the `Roomle unique product ID` as init-option. Both ways have their pros and cons. Let's review them quickly.

When you have a detail-page of a product in your webshop or website it makes sense to pass the `Roomle unique product ID` as init-option (because you know which product your customer wants to see). This makes it possible that everything is loaded in parallel, the code of the Room Designer, and the content of your product. This speeds up the loading process. On the other hand, it makes no sense if you load some product when you do not know which product your customer wants to see in the Room Designer. This could be the case if the Room Designer is opened on a list-view page where several products are listed. Here it makes sense to only instantiate the configurator. This only loads the code of the configurator. When the user then selects a product you can use the `loadObject` method to load this specific product.

```javascript
const objectToLoadId = 'usm:frame:BB3BB3E7951BC15109B1FF86D78C95DE3FB46E9F78714C46FFA2DE91866A2C2B';
const configurator1 = await RoomleConfiguratorApi.createConfigurator(configuratorId, domElement1, {id: objectToLoadId, ...overrideServerOptions});
// instantiate the second configurator, because you can now :-) and wait with the load of the object
// until the user clicks on a specific product
const configurator2 = await RoomleConfiguratorApi.createConfigurator(configuratorId, domElement2, overrideServerOptions);
// load the object into the second configurator when the user clicks on a specific button
document.getElementById('button-to-load-product-x').addEventListener('click', () => {
  configurator2.ui.loadObject(objectToLoadId);
});
```

&#x20;

## Start scenarios for embedding the Room Designer into your website <a href="#start-scenarios-for-embedding-the-room-designer-into-your-website" id="start-scenarios-for-embedding-the-room-designer-into-your-website"></a>

Overall there are 2 possibilities to start with:

* An already existing plan -> [Example](https://www.roomle.com/t/cp/?moc=true\&id=f8j4510epe7dx71v07t84992j51l58fn)
* An item (static item or configuration) -> [Example](https://www.roomle.com/t/cp/?moc=true\&id=usm:frame)

You can pass the `item id` or `plan id` using the `id` parameter.

### **Relevant parameters**

**startInDetail** [Types.UiInitData](../../rubens-products-reference/interfaces/types.UiInitData.md#startindetail)

* The `startInDetail` parameter controls in the user will start in configurator or in planner mode for a given item id.
* [Example for ](https://www.roomle.com/t/cp/?moc=true\&id=usm:frame\&startInDetail=true)`startInDetail=true` (opens new window)-> User starts in the configurator
* [Example for ](https://www.roomle.com/t/cp/?moc=true\&id=usm:frame\&startInDetail=false)`startInDetail=false` (opens new window)-> User start in the planner/scene

**state.mode** [Types.UiState](../../rubens-products-reference/interfaces/types.UiState.md#mode)

* The `mode` parameter defines the initial mode of the planner.
* [Example for ](https://www.roomle.com/t/cp/?moc=true\&id=usm:frame\&startInDetail=false\&state.mode=room)`state.mode=room` -> User starts in the room/drawing mode
* [Example for ](https://www.roomle.com/t/cp/?configuratorId=mocdemo\&id=usm:frame\&startInDetail=false\&catalogRootTag=rubens\_room\_demo\_root\&state.mode=catalog)`state.mode=catalog` -> User starts in the catalog mode
  * Important: A `catalogRootTag` ([see above](setup-room-designer.md#url-parameters)) visible to the current `configuratorId` has to be provided

## Conclusion <a href="#conclusion" id="conclusion"></a>

After you did the above mentioned steps it should be possible to load your first Room Designer.

In the following guides we will show you how to use our callbacks which are listening to events in our 3D scene and call api functions through our sdk.

Have also a look in this [Code Sandbox](https://codesandbox.io/p/sandbox/youthful-visvesvaraya-rvrd7f) which contains the above example code.
