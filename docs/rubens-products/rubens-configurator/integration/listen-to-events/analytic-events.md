# Analytic events

Currently we pass out certain events to the embedding webshop those events are based on Google Tag Manager. You can find all the information about [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs) on the Google website.

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  "demoConfigurator",
  document.getElementById("configurator-container"),
  options
);
await configurator.ui.loadObject("usm:frame");
configurator.analytics.callbacks.onGATracking = function(type, event, data) {
  if (event.includes("Parameter:ChangeEvent")) {
    const {event_label} = data;
    const parts = event_label.split("#");
    console.log(`user changed parameter ${parts[2]} to ${parts[3]}`);
  }
};
```

You can try and play around with this example [here](https://codesandbox.io/p/sandbox/getting-started-forked-mtprw3).

Overview of the most important events:

| event                 | description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| RequestProduct        | User has clicked the request product button                      |
| Parameter:ChangeEvent | User has changed a parameter, like material or size              |
| ARButtonClicked       | User has clicked the AR Button                                   |
| TypeChangeEvent       | User has switched to another variant                             |
| Dock                  | User has docked/added another part to the existing configuration |
