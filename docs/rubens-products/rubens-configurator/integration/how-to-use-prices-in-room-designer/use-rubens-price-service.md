# Use Rubens Price Service

If you do not have a webshop or a price database it could make sense to use the Rubens Price Service. The first step to use the Rubens Price Service is to enable the service. Therefore please speak with your customer success manager. If everything is in place you only need to provide the correct init options. Here is an example:

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  {...options, usePriceService: true},
);
```

For more details about the Rubens Price Service you can read the [scripting price docu](../../../../content-creation/scripting-resources/200\_130\_pricing.md).

Please also have a look on the [localization](../../customisation/localization.md) section on how to load different price lists based on the location of your webshop.

If you see the error message `prices are empty` on the Chrome Dev Tools console it is possible that your account setup depends on a deprecated parameter option.
