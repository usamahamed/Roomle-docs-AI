---
description: >-
  On this page you will learn how to set up a basic version of our Ruben
  Configurator which you can then customise, listen to events or call API
  functions.
---

# Setup the configurator

### Code Sandbox:

If you don't want to read through all the stuff but just want to have a quick look how a sample integration of our Rubens Configurator looks like, please feel free to dive into this[ Code Sandbox.](https://codesandbox.io/p/sandbox/youthful-visvesvaraya-rvrd7f)

### Setup the configurator container in the html

For knowing where our script has to place the iframe we need a container (html `<div>` element) which has an unique id. In our case we call it `configurator-container` and set the width and length in the css style sheet to `100vw` and `80vw`.

```html
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

### Import the RoomleConfigurator instance

We import the RoomleConfiguratorAPI via npm in this example, if you want to import it with a script tag please have a look [here](../getting-started.md#install-the-roomle-embedding-library).

If you have not imported the RoomleConfiguratorAPI yet, please do this as described [here](../getting-started.md#install-with-npm-package-manager).

```javascript
import RoomleConfiguratorApi from "@roomle/embedding-lib/roomle-configurator-api.es.min.js";
(async () => {
  const configuratorId = "demoConfigurator";
  const domElement = document.getElementById("configurator-container");
  const configurator = await RoomleConfiguratorApi.create(
    configuratorId, // your configurator id which you got
    domElement, // the specified domElement id
    {} // custom parameter for UI customisation
  );  
  // load an item
  await configurator.ui.loadObject("usm:frame");
})
```

### Loading the item

We provide now two convenient ways to load a product into the configurator. Either you instantiate the Roomle Configurator without a product and use `loadObject` later or you pass in the `Roomle unique product ID` as init-option. Both ways have their pros and cons. Let's review them quickly.

When you have a detail-page of a product in your webshop or website it makes sense to pass the `Roomle unique product ID` as init-option (because you know which product your customer wants to see). This makes it possible that everything is loaded in parallel, the code of the configurator, and the content of your product. This speeds up the loading process. On the other hand, it makes no sense if you load some product when you do not know which product your customer wants to see in the configurator. This could be the case if the Roomle Configurator is opened on a list-view page where several products are listed. Here it makes sense to only instantiate the configurator. This only loads the code of the configurator. When the user then selects a product you can use the `loadObject` method to load this specific product.

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

### Conclusion

After you did the above mentioned two steps it should be possible to load your first configurator.

In the following guides we will show you how to use our callbacks which are listing to events ins our 3D scene and call api function through our sdk.

Have also a look in this [Code Sandbox](https://codesandbox.io/p/sandbox/youthful-visvesvaraya-rvrd7f) which contains the above showed example code.
