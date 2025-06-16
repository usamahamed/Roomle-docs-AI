# Font

You can override the font of the Rubens Configurator with an individual font. All labels in the Rubens Configurator are then displayed with the new font. When using a custom font make sure you understand the legal implications. For example: copyright law, data protection law, etc. are topics which have to be considered before you use an individual font.&#x20;

If you want to use an individual font, you can use the parameters `fonts.source` and `fonts.family` in the embedding options for that.&#x20;

`fonts.source` needs to be a valid url to a font file CSS. Similar to what Google Fonts provides. For an example see: https://fonts.googleapis.com/css?family=Lato:300,400,700\&display=swap\&subset=latin-ext The font should provide the following weights: 300, 400, 700 If you use the URL as a query param make sure to use encodeURIComponent

`fonts.family` needs to be a valid CSS font family name. If you use font family as a query param make sure to use encodeURIComponent\


```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  {
    ...options,
    fonts: {
      source: "https://fonts.googleapis.com/css?family=Playfair Display",
      family: "Playfair Display",
    },
  },
);
```
