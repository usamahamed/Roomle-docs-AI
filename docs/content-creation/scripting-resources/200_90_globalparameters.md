# Global Parameters and Parameter Context

## Parameter Context

The user interface of the configurator displays parameters in context based on what is selected and if global parameters are present:

* If a component is selected, parameters that have `global` attribute set to `false` and `visible` is evaluated to `true` (= local context).
* If nothing is selected:
  * If there is a component in the configuration, which has a parameter with `global` set to `true` and `visibleAsGlobal` is evaluated to `true` (= global context).
  * Otherwise local context of the root component of the configuration is shown.

## Global Parameters

A parameter is global, if its attribute `global` is set to `true`. Keep in mind, that this attribute is of type `Boolean`, not `Script<Boolean>`, therefore it is constant and you can not change it during runtime.

### Global Parameter

If a global parameter value changes from the global context, it is distributed too all parameters, that have the same key and are also global, ireelevant of componentId (or component definition; different components can have the same global parameter). If a parameter is disabled (= enabled evaluates to false), the value of the parameter for that component does not change. If a parameter is invisible in one or both contexts (visible or visibleAsGlobal evaluate to false), the value is assigned.

### Global and Local Parameter

A parameter can be present in both global and local context if both visible and visibleAsGlobal evaluate to true. Like this, you can achieve the functionality that you can e.g. change the upholstery material of whole sofa system, while still being able to customize individual parts.

**Important**: Such approach is dangerous, though, if you use valueObjects for filtering the material entries, because in the global context, only **INTERSECTION** of valid values is shown. See [demoCatalogId:example\_global](http://rml.co/UTTu) or [200\_90\_globalparameter.json](examples/200\_90\_globalparameter.json). There is a global `material` parameter, that has value objects depending on the value of `material_filter`. If you dock more of the components together and select RGB filter at one of them and CMY on other, you will not be able to change the `material` parameter value, because the intersection is empty. such approach or feature should not be used, because it requires workaround based on the situation, which involves duplicating the parameter, having them separate for global and local context and assign from global to local in `onValueChange` script.

We recommend opening the [demoCatalogId:example\_global](http://rml.co/UTTu) component and playing around to get the feeling how global parameters work.

**Important:** Global parameters are relevant only in configurations that dock. There is no reason for using global parameters if the configurator does not involve docking logic.

## Example: Adjusting global parameters in the parametrized shelf system.

When you open the [current state](examples/200\_80\_50\_shelf\_dockrange.json) and dock several of the frames together, you can set it up like following:

![every shelf has a different color](images/200\_90\_10\_nonglobalmaterials.png)

Which is not really logical, because the walls in between are sometimes of one colour, sometimes of another colour, without the user really having control over it. Based on eventual product definition, such behaviour could be even considered as an error. To prevent this, two solutions are possible:

1. If the colour of the neighbour is different, draw the side wall.
2. Disallow the end customer to set shelf frame material in the local context.

**Option 1** solution would be to, similarily as with height, assign materials at the neighoburs and add `|| (material != leftNeighbourMaterial)` to the `hasLeftWall` computation, accordingly to the right side computation.

**Option 2** involves just adding `"global": true, "visible": "false", "visibleAsGlobal": "true"` to the material parameter, making it appear only in the global context, so that the user does not have a possibility to select a different color in one frame. To match the topic of this chapter, we go for option 2.

Also, we add the material parameter to the addon, so that the users can change the colour of the fillings at once. However, it makes perfect sense to let the user choose the colours of the particular addons one-by-one if they wish to. However, we've got the smae key in the material parameter in the shelf and the addon as well, which is not a good thing. Therefore, we need to refactor the key and change the parameter label. Resulting difference:

1. refactor `material` -> `material_addon`
2. change label to "Infill Colour"
3. add `"global": true`
4. add `"visibleAsGlobal": "in(elementType, 'door', 'crate', 'drawers')"`

Maybe you stop at point 4 thinking something like "If material\_addon is global parameter and elementType is not a global parameter, what happens?". Maybe you're thinking of a global parameter as a static parameter, but that's not the case. Global parameters are not stored in any special way in the configurations, it is just a linked in the user interface. If a parameter is global, it listens to change in the global context and accepts it. Therefore, `visibleAsGlobal` is evaluated from local `elementType` value. If there is at least one addon with `visibleAsGlobal == true`, the Infill Colour parameter will show in the global context.

Resulting component definitions:

* [shelf\_example.json](examples/200\_90\_10\_shelf\_example\_dockrange.json)
* [shelf\_addon.json](examples/200\_90\_10\_shelf\_addon.json)
