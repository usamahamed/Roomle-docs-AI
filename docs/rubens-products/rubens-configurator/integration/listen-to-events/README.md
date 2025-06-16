# Listen to events

Rubens Configurator provides an event-driven system that allows developers to listen for various events occurring within the application. By using callbacks, you can execute custom logic in response to these events. Below is a step-by-step guide on how to set up and use event listeners with callbacks in Rubens Roomle.

For example if you want to listen to the `update parameter` event of the configurator you can do this with the following line of code:

```typescript
roomleConfigurator.extended.callbacks.onUpdateParameters = (parameters) => {
  console.log(parameters)
};
```

Another example would be listen to when the request product button is clicked by the user:

```typescript
configurator.ui.callbacks.onRequestProduct = (configurationId, image, partlist, price, labels, configuration) => {
  console.log(configurationId, image, partlist, price, labels, configuration);
};
```

### `RoomleConfigurator.extended` vs. `RoomleConfigurator.ui`

As you can see in the examples above calling the `onUpdateParameters` callback you have to use `RoomleConfigurator.extended`, while calling the `onRequestProduct` callback you have to use `RoomleConfigurator.ui`.

Our Rubens Products all uses our Rubens SDK and we build our UI elements on top of it. It was important for us to give the customer the full potential of all the callbacks and API function which has the Rubens SDK. Therefore we hand it through our IFrame.&#x20;

Why i am telling you this, is because this is the difference - all the `.extended` callbacks are callbacks which come from the SDK. You can find all [SDK callbacks here](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_services\_configurator\_ui\_callback.default). On the other hand we also have UI elements which trigger callbacks like the request product button, those callbacks we expose unter the `.ui` flag. You can find all our [UI callbacks here.](https://docs.roomle.com/rubens/rubens-products/rubens-products-reference/classes/exposed\_callbacks.exposedcallbacks)

All our events are prefixed with `on`. All the other methods are utility methods.&#x20;

### Why callbacks?

Often we get the question why we not just provide an `addEventListener` and `removeEventListener`. We think the `callbacks` approach has three main advantages:

* discoverability: it's easy to discover all the events. With TypeScript you have code completion and for JavaScript user you have a nice overview during runtime
* type safety: in TypeScript every parameter is typed, therefore it's clear which parameter is passed to which event
* simplicity: why adding an event listener array and run through this array if the SDK user does only need one listener? Why looping through event listener if the event system of the SDK user does it again or more adjusted to the underlying application?

### Code Sandbox

If you want to see reacting on events in Rubens in action you can just open this [Code Sandbox.](https://codesandbox.io/p/sandbox/react-on-request-product-button-forked-vhnyy3)

### Helpful links

Rubens UI Events: [exposed\_callbacks.ExposedCallbacks.md](../../../rubens-products-reference/classes/exposed\_callbacks.ExposedCallbacks.md "mention")\
Rubens SDK Events: [configurator\_core\_src\_services\_configurator\_ui\_callback.default.md](../../../../rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_services\_configurator\_ui\_callback.default.md "mention")
