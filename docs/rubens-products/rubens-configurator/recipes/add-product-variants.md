# Add product variants

If you have different variants of your product and want to show them to your webshop users it makes sense to activate the variants feature. Variants could be products with different materials but we advise to use the variants feature for structural different product configurations, e.g.: the customer can start with a L-sofa but you have various different types of sofas or you start with a lowboard shelf but the same collection also has a highboard.

In other words, the variants feature should help the user of your webshop to explore the collection of a product. Of course the user could configer from on variation to the next variation but this is time consuming and reduces the chance that the user discovers all meaningful options.

To enable the variation feature some steps are necessary:

The first thing involves data-setup in [Rubens Admin](https://admin.roomle.com/).

* you need to create different variants of your base product
* you need to assign the variants to a tag

After that you can create a "variants map", which is basically a JSON key/value pair. The key is the ID of the root component and the value is the ID of the tag, an example could look like:

Copy

```javascript
const options = {
  variants: {
    'usm:frame': 'tag_id_usm',
    'vitra:chair': 'tag_id_vitra'
  }
};
```

Now everytime a configuration which is based on the root component `usm:frame` the variants from the tag `tag_id_usm` are loaded and displayed in the configurator. If you change to something which is based on `vitra:chair` the variants from `tag_id_vitra` are loaded. If you load something which is not based on one of them no variants are loaded.

This behaviour is needed that the configurator only shows relevant variants which have something in common with the initial loaded configuration.

Copy

```javascript
const configurator = await RoomleConfiguratorApi.createConfigurator(
  'demoConfigurator',
  document.getElementById('configurator-container'), {
    ...options,
    variants: {
      'usm:frame': 'tag_id_usm',
      'vitra:chair': 'tag_id_vitra'
    }
  },
);
```

When changing a variation the global parameters are applied to the newly loaded variaton. You can try this out in the CodeSandbox below. Just set the color of the shelf to yellow and switch the variant. You will see that the loaded variant is also yellow.

You can achieve the same behavior when you add the option `{applyCurrentGlobalParameters: true}` to `extended.loadConfigurableItemById`, `extended.loadConfigurationById` or `extended.loadConfiguration`

You can test and play around with those settings in [this CodeSandbox](https://codesandbox.io/p/sandbox/getting-started-forked-c988pg).
