# Parts list changes

One of the most important events is definitely when there is a change in the configurator, therefore we implemented the `onPartListUpdate` .

The `onPartListUpdate` callback always fires when the user of your webshop changes the configuration. It is also called on the initial load so that your implementation always has the most recent information about the current state of the configuration. The callback is executed with two parameters, parts and hash. The parts parameter is an array of parts. Based on this array you can do whatever calculation you need to do. For example calculate a price, shipping costs or packaging information. Sometimes those calculations can be complex and therefore we provide a hash. This has is not an ID it is only a representation of the current state of the configuration. If you see the same hash again you could short cut possible expensive calculations. Use the hash only for "performance optimization" during runtime. The hash is not saved to our database. A possible use-case for the hash could be the following (pseudo-code):

```javascript
const lastHash = null;
configurator.ui.callbacks.onPartListUpdate = (partList, hash) => {
  const parts = partList.fullList;
  if (lastHash === hash) {
    return;
  }
  lastHash = hash;
  const priceSum = veryExpensivePriceCalculation(parts);
  const shippingCosts = 30;
  // Tell the Roomle Configurator to show the current price
  configurator.ui.setPrice('€', priceSum + shippingCosts);
};
```
