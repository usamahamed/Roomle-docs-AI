# How to use prices in Rubens Configurator?

### Different possibilities to use prices in the Rubens Configurator <a href="#different-possibilities-to-use-prices-in-the-room-designer" id="different-possibilities-to-use-prices-in-the-room-designer"></a>

Generally we can display any price in rubens, which takes place in the bottom left corner instead of the label of the product.

<figure><img src="../../../../.gitbook/assets/rubens-price-service.png" alt=""><figcaption><p>Display any price in the bottom left corner in the Rubens Configurator</p></figcaption></figure>

There are two different ways to display a price in the Rubens configurator:

#### Set the price manually when something is changed <a href="#set-the-price-manually-when-something-is-changed" id="set-the-price-manually-when-something-is-changed"></a>

Since Rubens is fully api based we give every event to the outside, this is helpful when it comes to calculating prices. With onPartlistUpdate we have an callback which is fired on every change in the configurator. How this is helpful for calculating prices you can learn in [this section](use-the-parts-list-for-calculating-prices.md#calculate-a-price-based-on-the-current-part-list).

#### Set the price with the Rubens price engine <a href="#set-the-price-with-the-rubens-price-engine" id="set-the-price-with-the-rubens-price-engine"></a>

In Rubens we also have a small price service which can be used if the price calculation is not too complicated. How to use it you can learn in [this section.](../../../rubens-room-designer/integration/how-to-use-prices-in-room-designer/use-rubens-price-service.md)
