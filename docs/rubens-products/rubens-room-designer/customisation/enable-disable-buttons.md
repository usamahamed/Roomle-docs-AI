# Enable / Disable buttons

In our user interface it is possible to nearly hide every button which is not dynamically generated. This means you can hide all buttons on the left side and also all buttons in the bottom bar.

<figure><img src="../../../.gitbook/assets/customisation-buttons.svg" alt=""><figcaption></figcaption></figure>

Hiding buttons is possible within the init data or in the tenant settings. You have to override the `buttons` object with the right key of the button. Hiding buttons can be useful when you either want to implement you own button in html or when you just do not want that a user has a certain functionality.

You can look up the complete list of buttons in the UI\_BUTTONS enum which you can [find here](../../rubens-products-reference/enums/types.UI\_BUTTON.md)**.**

Here is a short example where the parts list button on the left is side is hidden.

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  {...options, buttons: {partlist: false}},
);
```
