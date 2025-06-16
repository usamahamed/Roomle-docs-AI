# Font

You can override the font of the Rubens Room Designer with an individual font. All labels in the Rubens Room Designer are then displayed with the new font. When using a custom font make sure you understand the legal implications. For example: copyright law, data protection law, etc. are topics which have to be considered before you use an individual font.&#x20;

If you want to use an individual font, you can use the parameters `fonts.source` and `fonts.family` in the embedding options for that.&#x20;

`fonts.source` needs to be a valid url to a font file CSS. Similar to what Google Fonts provides. For an example see: https://fonts.googleapis.com/css?family=Lato:300,400,700\&display=swap\&subset=latin-ext The font should provide the following weights: 300, 400, 700 If you use the URL as a query param make sure to use encodeURIComponent

`fonts.family` needs to be a valid CSS font family name. If you use font family as a query param make sure to use encodeURIComponent\


```javascript
import RoomleConfiguratorApi from "@roomle/embedding-lib/roomle-configurator-api.es.min.js";
(async () => {
  // specify link to custom font in the options object
  const options = {
    locale: "en",
    fonts: {
      source: "https://fonts.googleapis.com/css?family=Playfair Display",
      family: "Playfair Display",
    },
    moc: true,
  };
  const configurator = await RoomleConfiguratorApi.create(
    "mocdemo",
    document.getElementById("configurator-container"),
    options
  );
  await configurator.ui.loadObject("usm:frame");
  configurator.ui.callbacks.onRequestPlan = (...args) => console.log(args);
})();
```
