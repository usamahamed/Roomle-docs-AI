# Override labels

It's possible to change certain labels for certain languages in the UI of the Rubens Room Designer.

For example, if you want to change what's written on the `Request Product` button you can use the `translations` options to change it:

```javascript
const options = {
  locale: 'en',
  translations: {
    en: {
      params: {
        'request-product': 'Add to cart',
      },
    },
  },
};
```

You can find all labels that can be overwritten [here](../../rubens-products-reference/translate-labels/).
