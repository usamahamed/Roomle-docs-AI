# Trigger API funtions

Rubens Configurator is fully API-based which means you can trigger every function which we use in our user interface also from outside. With API function you are capable to implement you own button in html outside of our iFrame or control the 3D scene like rotate the camera.

For example if you want to change a parameter you can do this with the changeParameter method:

```typescript
// change the floor of the Rubens Configurator
RoomleConfigurator.extended.changeFloorMaterialById('roomle_floor:DresdenEiche');
```

&#x20;Another example would be if you want to implement a custom button like your own add to cart button besides our configurator user interface. You can do this like:

```typescript
// when called this function our event "onRequestProduct" is triggered
await RoomleConfigurator.ui.triggerRequestProduct();
```

### `RoomleConfigurator.extended` vs. `RoomleConfigurator.ui`

As you can see in the examples above calling the `changeFloorMaterialById` method you have to use `RoomleConfigurator.extended`, while calling the `triggerRequestProduct` method you have to use `RoomleConfigurator.ui`.

Our Rubens Products all uses our Rubens SDK and we build our UI elements on top of it. It was important for us to give the customer the full potential of all the callbacks and API functions which has the Rubens SDK. Therefore we hand it through our iFrame.&#x20;

Why i am telling you this, is because this is the difference - all the `.extended` methods are methods which come from the SDK. You can find all the [SDK methods here](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default). On the other hand we also have methods which are controlled by the UI like the `triggerRequestProduct`, those methods we expose unter the `.ui` flag. You can find all our [UI methods here.](https://docs.roomle.com/rubens/rubens-products/rubens-products-reference/classes/exposed\_api.exposedapi)

### Code Sandbox

If you are tired of reading and want to play around a little bit with a sample integration of our configurator, please feel free to check out this [Code Sandbox.](https://codesandbox.io/p/sandbox/trigger-request-product-forked-jmj99h)

### Helpful links

Rubens UI API functions: [exposed\_api.ExposedApi.md](../../../rubens-products-reference/classes/exposed\_api.ExposedApi.md "mention")\
Rubens SDK API functions: [configurator\_core\_src\_roomle\_configurator.default.md](../../../../rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md "mention")
