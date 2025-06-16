# Implement custom buttons

From time to time it is necessary to implement custom buttons outside of our configurator which are interacting with the Rubens configurator. With our fully API based approach this is perfectly possible.&#x20;

Even tough we show you how to implement a custom Add to Cart button it is possible to create buttons with all of our [API methods](trigger-request-product-button.md#helpful-links). For example you can hide all of our buttons (find documentation [here](../../customisation/enable-disable-buttons.md)) and create your own styled user interface - before you do this we strongly recommend to get in touch with our[ SDK based approach](../../../../rubens-sdk/overview.md).

### Trigger Request Product button example

As an example we want to show it with our call to action button the Add to Cart button, because it is probably the most important button, since it creates a customer lead, therefore it could be useful to implement you fully custom own button and trigger the request product action from outside. Therefore we provide the method `triggerRequestProduct`. When you call this method the same process starts as if the user would have clicked on the checkout-call-to-action button. This means that you only need to subscribe to the `onRequestProduct` callback to handle those situations.

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

If you want to learn how to listen to the `request product event` have a look in this section: [Request Product](../listen-to-events/request-a-product.md).

### Code Sandbox

Dig deeper into the example above and have a look into this [Code Sandbox](https://codesandbox.io/p/sandbox/naughty-sea-9fnkfd).

### Helpful links

Rubens UI API functions: [exposed\_api.ExposedApi.md](../../../rubens-products-reference/classes/exposed\_api.ExposedApi.md "mention")\
Rubens SDK API functions: [configurator\_core\_src\_roomle\_configurator.default.md](../../../../rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md "mention")
