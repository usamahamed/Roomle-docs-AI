# Getting started

To embed Roomle Rubens as an iframe in your website or webshop it is enough to create a link and use this link as a `src` in an iframe. It is important to note that we recommend this typ of integration for static items or very simple use cases. This is due to the fact that this simplistic iframe integration does not communicate anything to your website or webshop. This could become problematic when you want to hand over customized products to the shopping cart. If you need deeper integration you can use our [embedding integration](getting-started.md#embedding-vs-embedding-integration) or even [the Web Sdk](broken-reference) (in case you want to heavily modify our user interface).

## How to get those links

Basically you can copy\&paste the iframe codes from Roomle Rubens Admin platform. But let's have a quick look on how those links are constructed:

```html
<iframe
  src="https://www.roomle.com/t/cp/?configuratorId=demoConfigurator&id=roomle_content_demo:kitchenware003&api=false"
  width="1024"
  height="768"
></iframe>
```

Let's have a look on the certain parts:

* iframe: to embed the Rubens Configurator we use an HTML iframe tag. This is similar to what all the big platforms like YouTube are doing. In the example above we also added some `width` and `height`. You are free to use any width and height which fit your needs. To display the correct content in the iframe we use the property `src` and add the link to roomle.com. More information about iframe you can read [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
* the link itself: before you copy & paste the link into the HTML iframe you can always try if it opens in the browser. If this works you only need to watch out that you added the query params you want (for details about query params please read along [here](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)). It is important that you add the `api=false` query param because otherwise the Rubens Configurator waits for your website or webshop to. Also use the correct configuratorId with the query param `configuratorId=demoConfigurator` and replace demoConfigurator with your configuratorId.
