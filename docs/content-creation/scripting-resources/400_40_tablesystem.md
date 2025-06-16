# Office Table System Example

Live configurator link: [http://rml.co/UjT6](http://rml.co/UjT6)

This table system consists of table (starting configuration: `{"componentId": "soulpepper:cutout_table"}`) with a possibility to select a table top shape. The tabletop geometry is implemented by using rescalable meshes.

* Various accessories can be docked to the table while checking what is already docked and what yet can be added.
* Credenza and Extension are furniture implemented from scripted primitive geometry. Therefore, more sizes can be added without a lot of effort.
* Extension is placed next to the table as an accessory, while Credenza replaces one of the table legs, adding a connector holding the tabletop on top of Credenza instead.
* If the extension is long enough, another cabinet can be added. This is implemented by optional self-duplication of the component's geometry, using the same component as a subcomponent.
* The whole table system can be selected in a way that it has different surface materials on the tabletop, on the fronts of the cabinets, plinths and walls.
* This example uses extensively subcomponent patterns described in the Subcomponents chapter.

[cutout\_table.json](scripting\_examples/cutout/cutout\_table.json)

[cutout\_beam.json](scripting\_examples/cutout/cutout\_beam.json)\
[cutout\_cabinet.json](scripting\_examples/cutout/cutout\_cabinet.json)\
[cutout\_connector.json](scripting\_examples/cutout/cutout\_connector.json)\
[cutout\_credenza.json](scripting\_examples/cutout/cutout\_credenza.json)\
[cutout\_extension.json](scripting\_examples/cutout/cutout\_extension.json)\
[cutout\_frame.json](scripting\_examples/cutout/cutout\_frame.json)\
[cutout\_handle.json](scripting\_examples/cutout/cutout\_handle.json)\
[cutout\_legsingle.json](scripting\_examples/cutout/cutout\_legsingle.json)\
[cutout\_modestypanel\_material.json](scripting\_examples/cutout/cutout\_modestypanel\_material.json)\
[cutout\_modestypanel.json](scripting\_examples/cutout/cutout\_modestypanel.json)\
[cutout\_tabletop.json](scripting\_examples/cutout/cutout\_tabletop.json)\
[cutout\_wireopening.json](scripting\_examples/cutout/cutout\_wireopening.json)
