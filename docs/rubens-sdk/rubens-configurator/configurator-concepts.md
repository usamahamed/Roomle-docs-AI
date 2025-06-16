# Configurator Concepts

If you have a product that can be customized you can use the Roomle Rubens Configurator. In contrast to non-customizeable products where the GLBViewer is a better fit.

## Basics <a href="#basics" id="basics"></a>

The configurator can load every `configurable-item`, `configuration` and `configuration string`. Let's digg into what these terms mean.

## Configurable item <a href="#configurable-item" id="configurable-item"></a>

A configurable item is a product which is saved to the Roomle Database (or external service). Every configurable item is attached to a catalog and get's a combined ID. The ID of the configurable item looks like: `catalogID:itemID` (for example: `usm:frame`). That there is one `:` inside the ID indicates that it is a configurable item. All configurable items also have a configuration string. This string is a script which is written in the Roomle Scripting Language. You can find details about [scripting here (opens new window)](https://github.com/Roomle/scripting-docu). Since a configurable item is part of a catalog it is possible to add meta data, like dimensions, labels etc to it. To load a configurable item you can use the following code: `roomleConfigurator.getApi().loadConfigurableItemById(id)`. You get the IDs of your product when you add them to the Roomle Rubens Admin platform.

## Configuration <a href="#configuration" id="configuration"></a>

A configuration is a specific configuration string which is saved to the Roomle Database (or external service). The regular way to create a configuration is to load a configurable item and then change it. If you then save the changed configurable item to the Roomle Furniture Platform it becomes a configuration. In contrast to a configurable item the configuration has no meta data like labels etc. But like a configurable item a configuration has an ID. The ID consists of the id of a catalog, and a root component, extended by a [hash (opens new window)](https://en.wikipedia.org/wiki/Hash\_function)which describes the configuration. The ids and the hash are seperated by `:` therefore the ID has two `:` an example configuration ID looks like:

```
usm:frame:0003390D41E3F803F1CFE98B7A13CFD00E51D068D187F7EC840FEDEB774AB13A
```

## Configuration string <a href="#configuration-string" id="configuration-string"></a>

A configuration string is a string which is written in Roomle Scripting Language. This script can be saved to a configurable item or can be the result of a change to a configurable item. If you want to load a configuration string you can use the following code: `roomleConfigurator.getApi().loadConfiguration(configurationString)`. The configuration string can be scripted. For details about scripting [see here (opens new window)](https://github.com/Roomle/scripting-docu). A sample configuration string looks as follows:

```
{ "componentId": "usm:frame" }
```

## How to change a configuration <a href="#how-to-change-a-configuration" id="how-to-change-a-configuration"></a>

When loaded one of the above things (configurable item, configuration, configuration string), you can change the configuration. There are two main primitives to change something

### Excursion: Components <a href="#excursion-components" id="excursion-components"></a>

Every configuration consists of components. Components can not be loaded standalone, they are always part of the configuration. Imagine a configuration as a [tree-like structure (opens new window)](https://en.wikipedia.org/wiki/Tree\_\(data\_structure\))of components. The top most component is therefore called root component. To learn more about components visit our [scripting docu(opens new window)](https://github.com/Roomle/scripting-docu)

### Parameter <a href="#parameters" id="parameters"></a>

Every component can have parameters. The parameters are certain characteristic of the component. They can be changed with the following code: [`roomleConfigurator.getApi().setParameter(parameter, value)`](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default#setparameter). After setting a parameter the component is changed accordingly. All the events related to a parameter change are triggered (for more details about events see [here ](https://docs.roomle.com/rubens/rubens-sdk/rubens-modules#limits-of-the-sdk)and [our reference](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md)). Roomle will update the canvas in which Three.Js operates. You only need to care about "your" things, like updating the UI or persisting the configuration to some storage.

You will receive the current possible parameters with the event [`roomleConfigurator.getApi().callbacks.onUpdateParameters`](https://docs.roomle.com/rubens/rubens-sdk/rubens-sdk-reference/classes/configurator\_core\_src\_services\_configurator\_ui\_callback.default#onupdateparameters). The event fires when the configuration is loaded initially or a configuration is changed.

To learn about parameters you can read [our reference](https://docs-v1.roomle.com/web/api/), our type definitions found in the Roomle Web SDK package or the [scripting docu (opens new window)](https://github.com/Roomle/scripting-docu).

### Possible children aka Addons <a href="#possible-children-aka-addons" id="possible-children-aka-addons"></a>

The big difference between parameters and possible children is the fact that parameters only change the semblance of the configuration whereas adding possible children changes the structure of the configuration (which means altering the tree-structure of the construction, see [here](https://docs-v1.roomle.com/web/guides/sdk/configurator/core-concepts.html#excursion-components)). Children can be added, deleted or moved.

To insert a child you can use "click-to-insert" or drag\&drop. For "click-to-insert" it's enough to call [`roomleConfigurator.getApi().previewDockings(possibleChild)`](https://docs-v1.roomle.com/web/api/classes/configurator\_core\_src\_roomle\_configurator.default.html#previewdockings). The possible child has to be a child which you received in the `onUpdatePossibleChildren` event. For drag\&drop you need to addidionally pass the drag event which started the attempt to add a child. Therefore call [`roomleConfigurator.getApi().previewDockings(possibleChild, dragEvent, true)`](https://docs-v1.roomle.com/web/api/classes/configurator\_core\_src\_roomle\_configurator.default.html#previewdockings). Drag event can be the native browser event. For more details see [our reference](https://docs-v1.roomle.com/web/api/).

When a component is selected (this can be done by clicking on it) you can delete the component, therefore just call [`roomleConfigurator.getApi().requestDeleteComponent()`](https://docs-v1.roomle.com/web/api/classes/configurator\_core\_src\_roomle\_configurator.default.html#requestdeletecomponent) and the selected component is deleted. It makes sense to intercept the deletion and check if the user tries to delete the root component (then tell the user that it's not possible) or if the user tries to delete a component which has children (then tell the user that this deletion event could delete more components than intended). If nothing of both applies it's save to delete the selected component.

You will receive the current possible children with the event [`roomleConfigurator.getApi().callbacks.onUpdatePossibleChildren`](https://docs-v1.roomle.com/web/api/classes/configurator\_core\_src\_services\_configurator\_ui\_callback.default.html#onUpdatePossibleChildren). The event fires when the configuration is loaded initially or a configuration is changed.

To learn more about children you can read [our reference](https://docs-v1.roomle.com/web/api/), our type definitions found in the Roomle Web SDK package or the [scripting docu (opens new window)](https://github.com/Roomle/scripting-docu).
