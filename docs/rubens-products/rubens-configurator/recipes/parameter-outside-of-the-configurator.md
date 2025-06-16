---
description: Parameter implementation outside of the configurator iFrame
---

# Parameter outside of the configurator

### **Intro** <a href="#intro" id="intro"></a>

The Roomle Embedding API gives you the possibility to get and set parameters inside the Roomle Configurator from outside. This means your webshop is able to change parameters of the configuration based on some logic you can define.

### **Who should use this functionality?** <a href="#who-should-use-this-functionality" id="who-should-use-this-functionality"></a>

This functionality is useful for every webshop which has special logics when and how to set a given parameter. For example you could preset parameters based on the geo-location of the user. This can be helpful for things like power plugs. For US users you can set the parameter to something different than for EU users.

Another use case would be to change the UX slightly. Maybe there is some very important parameter which should be visible all the time no matter what the user is doing inside the configuration. Then you can set up the controls for these parameters outside of the configurator directly within your webshop. Ideally, you set these parameters to "hidden" inside the Roomle Configurator.

### **How can this be implemented with API** <a href="#how-can-this-be-implemented-with-api" id="how-can-this-be-implemented-with-api"></a>

It is important that the parameters you want to change from outside are "well-known". This means that you know the name of the parameters. The name of the parameters can be anything and are defined during scripting. For example, the width parameter can be named something like "shelfWidth". If the parameter name is calculated dynamically that's not possible.

### **Code** <a href="#code" id="code"></a>

The following code snippet should give you an idea of how to implement the above-described behaviour:

```javascript
(async function() {
  const minWidth = '10rem';
  // be aware that you use the "extended" object, this needs to be included in your licence
  // if you are unsure please ask your Roomle Rubens Contact person
  const params = await configurator1.extended.getParametersOfRootComponent();
  const viewParam = params.find(({key}) => key === 'door');
  if (!viewParam) {
    console.warn('Configuration has no door param');
    return;
  }
  const parent = document.querySelector('.configurator-container').parentNode;
  if (!parent) {
    console.warn('No Roomle Configurator found');
    return;
  }
  const wrapper = document.createElement('div');
  viewParam.validValues.forEach(({value, label}) => {
    const button = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = label;

    span.classList.add('btn', 'btn-primary');
    span.style.minWidth = minWidth;
    span.style.marginBottom = '1rem';
    button.appendChild(span);
    // be aware that you use the "extended" object, this needs to be included in your licence
    // if you are unsure please ask your Roomle Rubens Contact person
    button.addEventListener('click', () => configurator1.extended.setParameterOfRootComponent(viewParam, value));
    wrapper.appendChild(button);
  });

  parent.style.display = 'grid';
  parent.style.gridTemplateColumns = '1fr ' + minWidth;
  parent.style.gridGap = '10px';

  parent.appendChild(wrapper);

}());
```

It is also possible to change the value of parameters which are currently not visible if the parameter key is known, for example:

```javascript
RoomleConfigurator.setParameter({ key: 'width' }, '400');
```
