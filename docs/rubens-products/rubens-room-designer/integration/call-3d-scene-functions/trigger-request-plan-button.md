# Trigger request plan button

The call to action button is probably the most important button, since it creates a customer lead, therefore it could be useful to implement you fully custom own button and trigger the request product action from outside. Therefore we provide the method `triggerRequestProduct`. When you call this method the same process starts as if the user would have clicked on the checkout-call-to-action button. This means that you only need to subscribe to the `onRequestProduct` callback to handle those situations.

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

If you want to learn how to listen to the `request product event` have a look in this section: [Request Product](../../../rubens-configurator/integration/listen-to-events/request-a-product.md).

Dig deeper into the example above and have a look into this Code Sandbox:

\
