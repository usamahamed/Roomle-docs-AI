# Use the parts list for calculating prices

### **Calculate a price based on the current part list**

There are two options for the prices, either you use the prices you have in your webshops database or all the prices are calculated with the Rubens Price Service. This recipe shows a pseudo-code implementation of how you could calculate prices based on your webshops database. Therefore the variable `priceDataBase` is just a fake implementation of your own database. You can also fetch prices asynchronously with the [fetch-api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch\_API).

To get all the parts of a configuration you need to register to the `onPartListUpdate` event. Then with all the parts, you can do your price calculation. To show the price within the configurator you need to call the method `setPrice`. ( the full example can be found in the file [04\_price.html](https://docs.roomle.com/web/embedding/examples/04\_price.html))

```javascript
// fake implementation of a database
// only for showcase purpose
const priceDataBase = {};
configurator.ui.callbacks.onPartListUpdate = (partList) => {
  const parts = partList.fullList;
  let priceSum = parts.reduce((sum, part) => {
    if (!priceDataBase[part.articleNr]) {
      priceDataBase[part.articleNr] = Math.random() * 10;
    }
    return sum += priceDataBase[part.articleNr];
  }, 0);
  const shippingCosts = 30;
  // Tell the Roomle Configurator to show the current price
  configurator.ui.setPrice('€', priceSum + shippingCosts);
};
```

### **Notes about onPartListUpdate**

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

### **Typical challenges with the part list**

If your webshop and ERP system can already handle all article numbers which could arise during a configuration then everything is fine and things like price calculations are simple arithmetic operations. But especially webshop systems are not always designed to handle highly individually customized configurations of a product. Let's consider the following example with two products (one shelf-frame and a combinded shelf-frame):

<figure><img src="../../../../.gitbook/assets/usm-frame-partslist-challenges (2).png" alt=""><figcaption><p>Example USM Frame</p></figcaption></figure>

You see two different shelfs. A very simple approach for the webshop would be to setup two products in the webshop backend. For a configurable product this is not sufficient because you would need to create a product in the webshop backend for every possible configuration. This is why the Roomle Configurator returns a part list with the smallest combinable and customizable pieces. In the case of this shelf the part list consists on all the construction elements. Let's see why we can not simply add two whole shelf-frames to the part list.

For example: one shelf-frame consists of 8 circle-connectors and 4 feets. If you would simple duplicate it if there is a second shelf-frame attached you would have 16 circle-connectors and 8 feets. But the construction logic for this specific product is different. Because some parts can be shared between the two shelf-frames if they are docked together, only 12 circle-connectors and 6 feets are needed.

The following graphic should give you a better idea:

<figure><img src="../../../../.gitbook/assets/usm-frame-partslist-conbined (2).png" alt=""><figcaption><p>Parts</p></figcaption></figure>

How parts are combined and added is very special for every product and therefore it is important to identify which things are the smallest possible parts. If those questions are addressed during content setup and also during the concept phase on how to connect the Roomle Configurator to existing systems (webshop, ERP etc) it will be easy to do the actual implementation later.

Furthermore it is also sometimes challenging for certain webshop systems to add configured products to the shopping cart. To think how to adjust your webshop system to accept also configured products in the shopping cart is another important part.
