# Request a product

To be notified when the user clicks on the checkout-call-to-action button in our iframe you need to define the `onRequestProduct` callback.

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  options,
);
configurator.ui.callbacks.onRequestProduct = (configurationId, image, partlist, price, labels, configuration) => {
  console.log(configurationId, image, partlist, price, labels, configuration);
};
```

Of course there are situations where you want to trigger this action from outside with your own fully custom button. Therefore we provide the method triggerRequestProduct , which we describe in [this section.](../call-3d-scene-functions/trigger-request-product-button.md)

Of course there are situations where you want to trigger this action from outside. Therefore we provide the method `triggerRequestProduct`. When you call this method the same process starts as if the user would have clicked on the checkout-call-to-action button. This means that you only need to subscribe to the `onRequestProduct` callback to handle those situations.

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  options,
);
configurator.ui.callbacks.onRequestProduct = (configurationId, image, partlist, price, labels, configuration) => {
  console.log(configurationId, image, partlist, price, labels, configuration);
};
document.getElementById('trigger-request').addEventListener('click', async () => {
  await configurator.ui.triggerRequestProduct();
  console.log('trigger-request-done');
});
```

When the `onRequestProduct` callback fires it is assured that the configuration is saved to the Roomle backend. The data which you get from the callback are therefore the same as in the Roomle backend. This enables you to do ceratin things like: reloading the configuration later based on the configuration ID. This is especially helpful if the user adds a configuration to the shopping cart and continues later (maybe next day or after a restart of the browser etc.). Furthermore the `onRequestProduct` callback can be used to calculate a conversion rate (e.g.: how many users who configured actually add something to the cart). As you can see this callback is a very important one and we highly recommend not working around this callback.

If you want to know how to the trigger the request product function by your own, have a look in this section: [Trigger request product button](../call-3d-scene-functions/trigger-request-product-button.md)

Find the above example also in [this Code Sandbox](https://codesandbox.io/p/sandbox/react-on-request-product-button-dzytgp).&#x20;
