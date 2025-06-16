# Listen to events

Rubens SDK provides an event-driven system that allows developers to listen for various events occurring within the application. By using callbacks, you can execute custom logic in response to these events. Below is a step-by-step guide on how to set up and use event listeners with callbacks in Rubens Roomle.&#x20;

If you want to listen to the `update parameter` event of the configurator you can do this with the following line of code:

```typescript
roomleConfigurator.getApi().callbacks.onUpdateParameters = (parameters) => {
  // send this event to your own event system, redux, RxJS or home grown
  // this should trigger all the updates you wan to do on a parameter update
};
```

All our events are prefixed with `on`. All the other methods are utility methods. For example `mute` and `unmute`. If you call `roomleConfigurator.getApi().callbacks.mute()` there will be no events sent to you. With `unmute()` the events will be sent again.

Often we get the question why we not just provide an `addEventListener` and `removeEventListener`. We think the `callbacks` approach has three main advantages:

* discoverability: it's easy to discover all the events. With TypeScript you have code completion and for JavaScript user you have a nice overview during runtime
* type safety: in TypeScript every parameter is typed, therefore it's clear which parameter is passed to which event
* simplicity: why adding an event listener array and run through this array if the SDK user does only need one listener? Why looping through event listener if the event system of the SDK user does it again or more adjusted to the underlying application?

You can look up all available callbacks in this reference: [configurator\_core\_src\_services\_configurator\_ui\_callback.default.md](../rubens-sdk-reference/classes/configurator\_core\_src\_services\_configurator\_ui\_callback.default.md "mention").
