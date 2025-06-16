# Localization

There are two different parameters to set the localization of the Rubens Configurator. First there is `locale` and then there is `overrideCountry`.&#x20;

If they are not provided, both of them are inferred by the Rubens Configurator based on the browser settings and the location of the user of your webshop. Most of the time this is not 100% accurate. Let's have a look why on the example of `locale`.&#x20;

To set the language for the configurator we use `locale`. If a user visits your German webshop but has the browser settings switched to Spanish the configurator would be in Spanish but your webshop is in German. Since the Rubens Configurator does not know that it is embedded on the German webshop it's the best guess we can make. But if the webshop sets the `locale` we can use the same language as in the webshop.&#x20;

Therefore we highly recommend using this parameter. The same challenge arises for `overrideCountry`. The country parameter is used for the [Rubens Price service](../integration/how-to-use-prices-in-room-designer/use-rubens-price-service.md). Based on the country we decide which price list to load. For example the price list with pounds for the UK webshop and the euro prices for the webshop based in EU.&#x20;

For both parameters we use two digits codes. For locale we use the ISO\_639-1 and for country ISO\_3166-1\_alpha-2, you can find the list for languages for example on [ISO\_639-1. ](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes)The same is true for the country codes [ISO\_3166-1\_alpha-2](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).

Let's have a look on the following code:

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  {...options, locale: 'de', overrideCountry: 'at', usePriceService: true},
);
```

With this snippet the webshop tells the Rubens Configurator that it should use the language `de` and the country `at`. Which basically means: "show the configurator in German and with the prices for the Austrian market". As explained above the `overrideCountry` is only needed if your webshop does not maintain the prices and you rely on the Rubens Price Service.

To check whether your language is supported, take a look at the [currently supported configurator languages](https://www.roomle.com/en/documentation/configurator-languages).
