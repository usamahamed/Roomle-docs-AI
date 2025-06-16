# Colors

If you want to adjust the colors of the Room Designer there are two options:

* Primary color: this is the main color which indicates highlightings
* "Call to action" color: this color indicates special areas in the UI, things like active state (e.g.: are measurements visible) or conversion "points" like save draft

The Room Designer will determine which color to apply "on" primary and "call to action" color. For example: if a box has the primary color the "on primary color" will define the color of the text. The same applies for "call to action" color and the "on call to action color".

The Room Designer will decide between "black" or "white" for the "on" colors. If this does not suit your needs you can define your own "on" colors. If you want to rely on the Roomle selection for the "on" colors please only specify valid CSS RGB hex values, e.g.: #fff000 or #f30. Things like rgba(0,0,0,0.7) won't work and you have to specify the "on" colors yourself:

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'),
  {
    ...options,
    skin: {
      'primary-color': '#1d68bd', // optional but please use a CSS RGB hex like #ff00ff if you want to rely on the color detection see explaination above
      'color-on-primary': '#f4e440', // optional, Roomle can decide this for you
      'cta-color': '#980d3f',  // please use a CSS RGB hex like #ff00ff if you want to rely on the color detection see explaination above
      'color-on-cta': '#8e8e8e', // optional, Roomle can decide this for you
    },
  },
);
```
