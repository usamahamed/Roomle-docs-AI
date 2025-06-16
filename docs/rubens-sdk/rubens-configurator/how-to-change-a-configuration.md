# How to change a configuration

### How to change a configuration <a href="#how-to-change-a-configuration" id="how-to-change-a-configuration"></a>

When loaded one of the above things (configurable item, configuration, configuration string), you can change the configuration. There are two main primitives to change something

#### Excursion: Components <a href="#excursion-components" id="excursion-components"></a>

Every configuration consists of components. Components can not be loaded standalone, they are always part of the configuration. Imagine a configuration as a [tree-like structure ](https://en.wikipedia.org/wiki/Tree\_\(data\_structure\))of components. The top most component is therefore called root component. To learn more about components visit our [scripting docu](https://github.com/Roomle/scripting-docu).

#### Parameters <a href="#parameters" id="parameters"></a>

Every component can have parameters. The parameters are certain characteristic of the component. They can be changed with the following code: [`roomleConfigurator.getApi().setParameter(parameter, value)`](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md#setparameter). After setting a parameter the component is changed accordingly. All the events related to a parameter change are triggered (for more details about events see [here](listen-to-events.md) and [our reference](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md#setparameter)). Roomle will update the canvas in which Three.Js operates. You only need to care about "your" things, like updating the UI or persisting the configuration to some storage.

You will receive the current possible parameters with the event [`roomleConfigurator.getApi().callbacks.onUpdateParameters`](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md#updateparameters). The event fires when the configuration is loaded initially or a configuration is changed.

To learn about parameters you can read our reference, our type definitions found in the Roomle Web SDK package or the [scripting docu](https://github.com/Roomle/scripting-docu).

#### Possible children aka Addons <a href="#possible-children-aka-addons" id="possible-children-aka-addons"></a>

The big difference between parameters and possible children is the fact that parameters only change the semblance of the configuration whereas adding possible children changes the structure of the configuration (which means altering the tree-structure of the construction, see [here](how-to-change-a-configuration.md#how-to-change-a-configuration)). Children can be added, deleted or moved.

To insert a child you can use "click-to-insert" or drag\&drop. For "click-to-insert" it's enough to call `roomleConfigurator.getApi().previewDockings(possibleChild)`. The possible child has to be a child which you received in the `onUpdatePossibleChildren` event. For drag\&drop you need to addidionally pass the drag event which started the attempt to add a child. Therefore call `roomleConfigurator.getApi().previewDockings(possibleChild, dragEvent, true)`. Drag event can be the native browser event. For more details see [our previewDockings reference](../rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md#previewdockings).

When a component is selected (this can be done by clicking on it) you can delete the component, therefore just call `roomleConfigurator.getApi().requestDeleteComponent()` and the selected component is deleted. It makes sense to intercept the deletion and check if the user tries to delete the root component (then tell the user that it's not possible) or if the user tries to delete a component which has children (then tell the user that this deletion event could delete more components than intended). If nothing of both applies it's save to delete the selected component.

You will receive the current possible children with the event `roomleConfigurator.getApi().callbacks.onUpdatePossibleChildren`. The event fires when the configuration is loaded initially or a configuration is changed.
