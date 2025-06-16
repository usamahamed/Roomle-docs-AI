# Load different products into the configurator

Since the Roomle Configurator is a single-page-app it is very easy to load different products into the configurator. If you are unsure what a single-page-app (SPA) is then it makes sense to read through the various explanations on the internet for example like [this discussion](https://softwareengineering.stackexchange.com/a/376880). If the concept of a SPA makes sense to you, let's have a look on the code:

```javascript
<div class="product" data-roomle-id="__SOME_ROOMLE_ID_1__">
  <div>Product 1</div>
</div>
<div class="product" data-roomle-id="__SOME_ROOMLE_ID_2__">
  <div>Product 2</div>
</div>
<div class="product" data-roomle-id="__SOME_ROOMLE_ID_3__">
  <div>Product 3</div>
</div>
```

```javascript
const buttons = document.querySelectorAll('.product');
[...buttons].forEach((button) => {
  button.addEventListener('click', (productDomNode) => {
    const target = productDomNode.target;
    let roomleId = target.getAttribute('data-roomle-id') || target.parentElement.getAttribute('data-roomle-id');
    if (!roomleId) {
      return;
    }
    configurator.ui.loadObject(roomleId);
  });
});
```

Full example can be found in [this Code Sandbox](https://codesandbox.io/p/sandbox/add-variants-forked-9cry43).
