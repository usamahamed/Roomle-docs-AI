[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).default

Shared API between configurator and planner

# Implements

- [`KernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md)
- [`RoomlePlannerCallback`](../interfaces/planner_core_src_roomle_planner.RoomlePlannerCallback.md)
- [`GlobalAPI`](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md)
- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`KernelUtilityForUi`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md)
- [`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<[`default`](planner_core_src_roomle_planner_ui_callback.default.md)\>
- [`RubensAPI`](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md)

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner.default.md#constructor)

## Properties

- [\_creator\_](planner_core_src_roomle_planner.default.md#_creator_)

## Accessors

- [PlannerCoreTypes](planner_core_src_roomle_planner.default.md#plannercoretypes)
- [callbacks](planner_core_src_roomle_planner.default.md#callbacks)

## Methods

- [back](planner_core_src_roomle_planner.default.md#back)
- [backTo](planner_core_src_roomle_planner.default.md#backto)
- [backToPlanner](planner_core_src_roomle_planner.default.md#backtoplanner)
- [calcPartsPriceSum](planner_core_src_roomle_planner.default.md#calcpartspricesum)
- [cancelSelection](planner_core_src_roomle_planner.default.md#cancelselection)
- [changeExteriorWallsMaterial](planner_core_src_roomle_planner.default.md#changeexteriorwallsmaterial)
- [changeFloorsMaterial](planner_core_src_roomle_planner.default.md#changefloorsmaterial)
- [changeInteriorWallsMaterial](planner_core_src_roomle_planner.default.md#changeinteriorwallsmaterial)
- [createNewSerializedConfiguration](planner_core_src_roomle_planner.default.md#createnewserializedconfiguration)
- [deleteSelection](planner_core_src_roomle_planner.default.md#deleteselection)
- [disableAdvancedDocking](planner_core_src_roomle_planner.default.md#disableadvanceddocking)
- [disableMeasurementLineDrawing](planner_core_src_roomle_planner.default.md#disablemeasurementlinedrawing)
- [disableMultiselect](planner_core_src_roomle_planner.default.md#disablemultiselect)
- [disableRotation](planner_core_src_roomle_planner.default.md#disablerotation)
- [disableShowChildrenOfPlanObject](planner_core_src_roomle_planner.default.md#disableshowchildrenofplanobject)
- [disableSnapping](planner_core_src_roomle_planner.default.md#disablesnapping)
- [disableWallDrawing](planner_core_src_roomle_planner.default.md#disablewalldrawing)
- [dragInObject](planner_core_src_roomle_planner.default.md#draginobject)
- [drawWalls](planner_core_src_roomle_planner.default.md#drawwalls)
- [duplicateItems](planner_core_src_roomle_planner.default.md#duplicateitems)
- [enableAdvancedDocking](planner_core_src_roomle_planner.default.md#enableadvanceddocking)
- [enableMeasurementLineDrawing](planner_core_src_roomle_planner.default.md#enablemeasurementlinedrawing)
- [enableMultiselect](planner_core_src_roomle_planner.default.md#enablemultiselect)
- [enableRotation](planner_core_src_roomle_planner.default.md#enablerotation)
- [enableShowChildrenOfPlanObject](planner_core_src_roomle_planner.default.md#enableshowchildrenofplanobject)
- [enableSnapping](planner_core_src_roomle_planner.default.md#enablesnapping)
- [enableWallDrawing](planner_core_src_roomle_planner.default.md#enablewalldrawing)
- [escapeDrawing](planner_core_src_roomle_planner.default.md#escapedrawing)
- [exportCanvasScreenshot](planner_core_src_roomle_planner.default.md#exportcanvasscreenshot)
- [exportGLB](planner_core_src_roomle_planner.default.md#exportglb)
- [exportImageFromCamera](planner_core_src_roomle_planner.default.md#exportimagefromcamera)
- [formatValueToUnitString](planner_core_src_roomle_planner.default.md#formatvaluetounitstring)
- [generateTCExport](planner_core_src_roomle_planner.default.md#generatetcexport)
- [getCameraOffset](planner_core_src_roomle_planner.default.md#getcameraoffset)
- [getConfigurator](planner_core_src_roomle_planner.default.md#getconfigurator)
- [getConfiguratorApi](planner_core_src_roomle_planner.default.md#getconfiguratorapi)
- [getConfiguratorContext](planner_core_src_roomle_planner.default.md#getconfiguratorcontext)
- [getCurrentSkin](planner_core_src_roomle_planner.default.md#getcurrentskin)
- [getObjects](planner_core_src_roomle_planner.default.md#getobjects)
- [getPartlistOf](planner_core_src_roomle_planner.default.md#getpartlistof)
- [getPlanInteractionHandler](planner_core_src_roomle_planner.default.md#getplaninteractionhandler)
- [getPlanModelViewHelper](planner_core_src_roomle_planner.default.md#getplanmodelviewhelper)
- [getPlanOverview](planner_core_src_roomle_planner.default.md#getplanoverview)
- [getPlanXmlFrom](planner_core_src_roomle_planner.default.md#getplanxmlfrom)
- [getRuntimeComponentIdOfRootComponent](planner_core_src_roomle_planner.default.md#getruntimecomponentidofrootcomponent)
- [getScene](planner_core_src_roomle_planner.default.md#getscene)
- [getStorage](planner_core_src_roomle_planner.default.md#getstorage)
- [getUnitFormatter](planner_core_src_roomle_planner.default.md#getunitformatter)
- [getWallAngleDegrees](planner_core_src_roomle_planner.default.md#getwallangledegrees)
- [hasWalls](planner_core_src_roomle_planner.default.md#haswalls)
- [importGLB](planner_core_src_roomle_planner.default.md#importglb)
- [init](planner_core_src_roomle_planner.default.md#init)
- [insertItemList](planner_core_src_roomle_planner.default.md#insertitemlist)
- [insertItems](planner_core_src_roomle_planner.default.md#insertitems)
- [insertObject](planner_core_src_roomle_planner.default.md#insertobject)
- [isCurrentlyDrawing](planner_core_src_roomle_planner.default.md#iscurrentlydrawing)
- [isReady](planner_core_src_roomle_planner.default.md#isready)
- [loadError](planner_core_src_roomle_planner.default.md#loaderror)
- [loadPlan](planner_core_src_roomle_planner.default.md#loadplan)
- [loadPlanXml](planner_core_src_roomle_planner.default.md#loadplanxml)
- [moveCamera](planner_core_src_roomle_planner.default.md#movecamera)
- [moveElementPosition](planner_core_src_roomle_planner.default.md#moveelementposition)
- [moveElementsPosition](planner_core_src_roomle_planner.default.md#moveelementsposition)
- [onCloseHSC](planner_core_src_roomle_planner.default.md#onclosehsc)
- [preparePerspectiveImage](planner_core_src_roomle_planner.default.md#prepareperspectiveimage)
- [preparePerspectiveImageOf](planner_core_src_roomle_planner.default.md#prepareperspectiveimageof)
- [prepareTopImage](planner_core_src_roomle_planner.default.md#preparetopimage)
- [removeElements](planner_core_src_roomle_planner.default.md#removeelements)
- [resetCameraPosition](planner_core_src_roomle_planner.default.md#resetcameraposition)
- [resolveShortUrl](planner_core_src_roomle_planner.default.md#resolveshorturl)
- [rotateSelection](planner_core_src_roomle_planner.default.md#rotateselection)
- [saveCurrentPlanSnapshot](planner_core_src_roomle_planner.default.md#savecurrentplansnapshot)
- [selectPlanObjectById](planner_core_src_roomle_planner.default.md#selectplanobjectbyid)
- [setCameraOffset](planner_core_src_roomle_planner.default.md#setcameraoffset)
- [setEnvironmentMap](planner_core_src_roomle_planner.default.md#setenvironmentmap)
- [setMeasurementLineLength](planner_core_src_roomle_planner.default.md#setmeasurementlinelength)
- [setObjectToWallMeasurementLength](planner_core_src_roomle_planner.default.md#setobjecttowallmeasurementlength)
- [setOverrides](planner_core_src_roomle_planner.default.md#setoverrides)
- [setSceneEvents](planner_core_src_roomle_planner.default.md#setsceneevents)
- [setWallMeasurementLength](planner_core_src_roomle_planner.default.md#setwallmeasurementlength)
- [showBenchmarks](planner_core_src_roomle_planner.default.md#showbenchmarks)
- [showGUI](planner_core_src_roomle_planner.default.md#showgui)
- [showStats](planner_core_src_roomle_planner.default.md#showstats)
- [showsChildrenOfPlanObject](planner_core_src_roomle_planner.default.md#showschildrenofplanobject)
- [startConfiguring](planner_core_src_roomle_planner.default.md#startconfiguring)
- [startViewing](planner_core_src_roomle_planner.default.md#startviewing)
- [swapObject](planner_core_src_roomle_planner.default.md#swapobject)
- [switch2D](planner_core_src_roomle_planner.default.md#switch2d)
- [switch3D](planner_core_src_roomle_planner.default.md#switch3d)
- [switchToConfigurator](planner_core_src_roomle_planner.default.md#switchtoconfigurator)
- [switchToFirstPerson](planner_core_src_roomle_planner.default.md#switchtofirstperson)
- [switchToPlanner](planner_core_src_roomle_planner.default.md#switchtoplanner)
- [switchToViewer](planner_core_src_roomle_planner.default.md#switchtoviewer)
- [syncCatalog](planner_core_src_roomle_planner.default.md#synccatalog)
- [toggleConfigureInRoom](planner_core_src_roomle_planner.default.md#toggleconfigureinroom)
- [update](planner_core_src_roomle_planner.default.md#update)
- [updateScene](planner_core_src_roomle_planner.default.md#updatescene)
- [updateSize](planner_core_src_roomle_planner.default.md#updatesize)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Accessors

## PlannerCoreTypes

• `get` **PlannerCoreTypes**(): [`PlannerKernelContainer`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.PlannerKernelContainer.md)

### Returns

[`PlannerKernelContainer`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.PlannerKernelContainer.md)

an object which has all type constants from Roomle Core (C/C++)

___

## callbacks

• `get` **callbacks**(): [`default`](planner_core_src_roomle_planner_ui_callback.default.md)

### Returns

[`default`](planner_core_src_roomle_planner_ui_callback.default.md)

### Implementation of

[ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md).[callbacks](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md#callbacks)

• `set` **callbacks**(`callback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`default`](planner_core_src_roomle_planner_ui_callback.default.md) |

### Returns

`void`

### Implementation of

[ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md).[callbacks](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md#callbacks)

# Methods

## back

▸ **back**(): `void`

### Returns

`void`

___

## backTo

▸ **backTo**(`_cssClass`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_cssClass` | `string` |

### Returns

`void`

___

## backToPlanner

▸ **backToPlanner**(): `void`

### Returns

`void`

___

## calcPartsPriceSum

▸ **calcPartsPriceSum**(`partList`): `Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `partList` | [`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md) |

### Returns

`Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

___

## cancelSelection

▸ **cancelSelection**(`reason?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reason` | [`CancelSelectionReasons`](../modules/planner_core_src_roomle_planner._internal_.md#cancelselectionreasons) | `'unknown'` |

### Returns

`void`

### Implementation of

RoomlePlannerCallback.cancelSelection

___

## changeExteriorWallsMaterial

▸ **changeExteriorWallsMaterial**(`material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`BatchPaintMaterial`](../interfaces/planner_core_src_roomle_planner.BatchPaintMaterial.md) |

### Returns

`void`

___

## changeFloorsMaterial

▸ **changeFloorsMaterial**(`material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`BatchPaintMaterial`](../interfaces/planner_core_src_roomle_planner.BatchPaintMaterial.md) |

### Returns

`void`

___

## changeInteriorWallsMaterial

▸ **changeInteriorWallsMaterial**(`material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`BatchPaintMaterial`](../interfaces/planner_core_src_roomle_planner.BatchPaintMaterial.md) |

### Returns

`void`

___

## createNewSerializedConfiguration

▸ **createNewSerializedConfiguration**(`configurationRuntimeId`): `Promise`<`string`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `configurationRuntimeId` | `number` |

### Returns

`Promise`<`string`\>

___

## deleteSelection

▸ **deleteSelection**(): `void`

### Returns

`void`

### Implementation of

RoomlePlannerCallback.deleteSelection

___

## disableAdvancedDocking

▸ **disableAdvancedDocking**(): `void`

disable docking of objects that fit together when objects are snapped in the plan

### Returns

`void`

___

## disableMeasurementLineDrawing

▸ **disableMeasurementLineDrawing**(): `void`

### Returns

`void`

___

## disableMultiselect

▸ **disableMultiselect**(): `void`

Disable the selection of multiple elements.

### Returns

`void`

___

## disableRotation

▸ **disableRotation**(): `void`

Disable rotation of selected elements

### Returns

`void`

___

## disableShowChildrenOfPlanObject

▸ **disableShowChildrenOfPlanObject**(`planElementViewModel`): `void`

disable interaction with child components of configurable objects in the plan

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## disableSnapping

▸ **disableSnapping**(): `void`

disable all types of snapping

### Returns

`void`

___

## disableWallDrawing

▸ **disableWallDrawing**(): `void`

### Returns

`void`

___

## dragInObject

▸ **dragInObject**(`id`, `dragEvent`): `Promise`<`number`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `dragEvent` | `DragEvent` |

### Returns

`Promise`<`number`\>

___

## drawWalls

▸ **drawWalls**(`wallDefinitions`, `interactionOptions?`): [`KernelWall`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelWall.md)[]

Draws walls according to the wall definitions
this can be used to create a room on the fly

### Parameters

| Name | Type |
| :------ | :------ |
| `wallDefinitions` | [`WallDefinition`](../interfaces/planner_core_src_roomle_planner.WallDefinition.md)[] |
| `interactionOptions` | [`InteractionOptions`](../interfaces/planner_core_src_roomle_planner.InteractionOptions.md) |

### Returns

[`KernelWall`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelWall.md)[]

___

## duplicateItems

▸ **duplicateItems**(`itemList`): [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

Duplicates all planObjects in the array and inserts them into the current plan

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemList` | [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)[] | Array of PlanObjects |

### Returns

[`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

___

## enableAdvancedDocking

▸ **enableAdvancedDocking**(): `void`

enable docking of objects that fit together when objects are snapped in the plan

### Returns

`void`

___

## enableMeasurementLineDrawing

▸ **enableMeasurementLineDrawing**(): `void`

### Returns

`void`

___

## enableMultiselect

▸ **enableMultiselect**(): `void`

Enable the selection of multiple elements.
Common parameters shared between those elements can then be changed at once

### Returns

`void`

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[enableMultiselect](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#enablemultiselect)

___

## enableRotation

▸ **enableRotation**(): `void`

Enables rotation of selected elements

### Returns

`void`

___

## enableShowChildrenOfPlanObject

▸ **enableShowChildrenOfPlanObject**(`planElementViewModel`): `void`

enable interaction with child components of configurable objects in the plan

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## enableSnapping

▸ **enableSnapping**(): `void`

enable snapping of object to object and object to wall

### Returns

`void`

___

## enableWallDrawing

▸ **enableWallDrawing**(): `void`

### Returns

`void`

___

## escapeDrawing

▸ **escapeDrawing**(`cancelDrawing`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `cancelDrawing` | `boolean` |

### Returns

`void`

___

## exportCanvasScreenshot

▸ **exportCanvasScreenshot**(`quality?`): `Promise`<`string`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `quality?` | `number` |

### Returns

`Promise`<`string`\>

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[exportCanvasScreenshot](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#exportcanvasscreenshot)

___

## exportGLB

▸ **exportGLB**(): `void`

### Returns

`void`

___

## exportImageFromCamera

▸ **exportImageFromCamera**(`filename?`, `shouldWaitForAssets?`): `Promise`<`void`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `'image'` |
| `shouldWaitForAssets` | `boolean` | `false` |

### Returns

`Promise`<`void`\>

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[exportImageFromCamera](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#exportimagefromcamera)

___

## formatValueToUnitString

▸ **formatValueToUnitString**(`value`, `parameter`): `string` \| `number`

Returns the formatted value based on the parameter.unitType

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`string` \| `number`

___

## generateTCExport

▸ **generateTCExport**(`planObjectIds?`): `Promise`<`any`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `planObjectIds` | `string`[] | `[]` |

### Returns

`Promise`<`any`\>

___

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

Gets the available screen space for our item
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Returns

[`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getcameraoffset)

___

## getConfigurator

▸ **getConfigurator**(): [`Configurator`](configurator_core_src_configurator.Configurator.md)

### Returns

[`Configurator`](configurator_core_src_configurator.Configurator.md)

___

## getConfiguratorApi

▸ **getConfiguratorApi**(): [`default`](configurator_core_src_roomle_configurator.default.md)

### Returns

[`default`](configurator_core_src_roomle_configurator.default.md)

___

## getConfiguratorContext

▸ **getConfiguratorContext**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-7.md)

returns class containing configurator specific data properties

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-7.md)

___

## getCurrentSkin

▸ **getCurrentSkin**(): `Promise`<[`RapiSkin`](../interfaces/typings_rapi_types.RapiSkin.md)\>

### Returns

`Promise`<[`RapiSkin`](../interfaces/typings_rapi_types.RapiSkin.md)\>

___

## getObjects

▸ **getObjects**(): `Promise`<[`UiPlanObject`](../interfaces/typings_kernel.UiPlanObject.md)[]\>

returns all objects found in the current plan
this includes info about size, rotation, id and parts

### Returns

`Promise`<[`UiPlanObject`](../interfaces/typings_kernel.UiPlanObject.md)[]\>

___

## getPartlistOf

▸ **getPartlistOf**(`id`): `Promise`<[`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md)\>

get the Partlist of certain runtimeID
can be used if partlist of a selected Item is needed

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | runtimeID of a configurable item |

### Returns

`Promise`<[`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md)\>

kernelPartlist with processed price, currency and RAL colors

___

## getPlanInteractionHandler

▸ **getPlanInteractionHandler**(): `Promise`<[`PlanInteractionHandler`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)\>

### Returns

`Promise`<[`PlanInteractionHandler`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)\>

___

## getPlanModelViewHelper

▸ **getPlanModelViewHelper**(): `Promise`<[`PlanModelViewHelper`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md)\>

### Returns

`Promise`<[`PlanModelViewHelper`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md)\>

___

## getPlanOverview

▸ **getPlanOverview**(): `Promise`<[`PlanOverview`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanOverview.md)\>

get all info available for the current plan, including objects, rooms and walls

### Returns

`Promise`<[`PlanOverview`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanOverview.md)\>

___

## getPlanXmlFrom

▸ **getPlanXmlFrom**(`plan`): `any`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md) \| [`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md) |

### Returns

`any`

___

## getRuntimeComponentIdOfRootComponent

▸ **getRuntimeComponentIdOfRootComponent**(`planObjectId`): `number`

Returns the runtime component id of the plan object with the given id

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planObjectId` | `number` | id of the plan object you want to get the runtime component id of the root component from |

### Returns

`number`

number the number of the runtime id of the root component

### Implementation of

[KernelUtilityForUi](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md).[getRuntimeComponentIdOfRootComponent](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md#getruntimecomponentidofrootcomponent)

___

## getScene

▸ **getScene**(): `Scene`

Returns the three.js scene (https://threejs.org/docs/#api/en/scenes/Scene)
WARNING: This is the actual scene (reference) and not a copy!

### Returns

`Scene`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getscene)

___

## getStorage

▸ **getStorage**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

returns manager class to interface with indexedDB storage

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[getStorage](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#getstorage)

___

## getUnitFormatter

▸ **getUnitFormatter**(): [`default`](configurator_core_src_roomle_configurator._internal_.default.md)

returns unit formatter for formatting input und output values in scene

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getUnitFormatter](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getunitformatter)

___

## getWallAngleDegrees

▸ **getWallAngleDegrees**(`wall`): `number`

Returns the wall angle in degrees relative to the camera

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wall` | [`default`](planner_core_src_roomle_planner._internal_.default-1.md) | a WallPlanElementViewModel instance |

### Returns

`number`

___

## hasWalls

▸ **hasWalls**(): `boolean`

### Returns

`boolean`

___

## importGLB

▸ **importGLB**(`url`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

### Returns

`void`

___

## init

▸ **init**(`element`, `preloadPlanId?`, `options?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `preloadPlanId?` | `string` |
| `options?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md) |

### Returns

`Promise`<`void`\>

___

## insertItemList

▸ **insertItemList**(`ids`): `Promise`<`number`[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<`number`[]\>

___

## insertItems

▸ **insertItems**(`itemList`): `Promise`<`number`[]\>

Inserts all of the items in the array into current plan

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemList` | [`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[] | Array of items received from the Roomle API |

### Returns

`Promise`<`number`[]\>

___

## insertObject

▸ **insertObject**(`id`, `position?`, `rotation?`): `Promise`<`number`\>

Inserts the object into the scene (at a given position and rotation)

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `position?` | [`Position3`](../interfaces/common_core_src_common_interfaces.Position3.md) | x (left/right),y (up, down) and z(front, back) in meters |
| `rotation?` | `number` | in radians |

### Returns

`Promise`<`number`\>

___

## isCurrentlyDrawing

▸ **isCurrentlyDrawing**(): `boolean`

### Returns

`boolean`

___

## isReady

▸ **isReady**(): `void`

### Returns

`void`

### Implementation of

[KernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[isReady](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#isready)

___

## loadError

▸ **loadError**(`error?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

### Returns

`void`

### Implementation of

[KernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[loadError](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#loaderror)

___

## loadPlan

▸ **loadPlan**(`id`, `options?`): `Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md) \| [`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md) |

### Returns

`Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md) \| [`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

___

## loadPlanXml

▸ **loadPlanXml**(`xml`, `options?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `string` |
| `options?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md) |

### Returns

`Promise`<`void`\>

___

## moveCamera

▸ **moveCamera**(`cameraParameter`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameter` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

___

## moveElementPosition

▸ **moveElementPosition**(`selectedElement`, `position`): `void`

Move the current selected element in the 3D space

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectedElement` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) | this is the current selected plan object |
| `position` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) | new KernelVector3 position of the current selected element returns runtime ID of the new object |

### Returns

`void`

___

## moveElementsPosition

▸ **moveElementsPosition**(`selectedElements`, `position`): `void`

Moves the current multi-selected elements in the 3D space

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectedElements` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md)[] | this is the current selected plan object |
| `position` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) | new KernelVector3 position of the current selected element returns runtime ID of the new object |

### Returns

`void`

___

## onCloseHSC

▸ **onCloseHSC**(): `void`

### Returns

`void`

___

## preparePerspectiveImage

▸ **preparePerspectiveImage**(`options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates a perspective image (slightly from the side) and returns it as base64

### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## preparePerspectiveImageOf

▸ **preparePerspectiveImageOf**(`runtimeId`, `options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates a perspective image (slightly from the side) of a plan element by a
given runtime-id and returns it as base64

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runtimeId` | `number` | runtime-id of the plan element, e.g.: a selected element |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) | PrepareImageOptions |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## prepareTopImage

▸ **prepareTopImage**(`options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates a top image (birds eye view) and returns it as base64

### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## removeElements

▸ **removeElements**(`kernelPlanElements`, `interactionOptions?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelPlanElements` | [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md)[] |
| `interactionOptions` | [`InteractionOptions`](../interfaces/planner_core_src_roomle_planner.InteractionOptions.md) |

### Returns

`Promise`<`void`\>

___

## resetCameraPosition

▸ **resetCameraPosition**(): `void`

### Returns

`void`

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[resetCameraPosition](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#resetcameraposition)

___

## resolveShortUrl

▸ **resolveShortUrl**(`shortUrl`): `Promise`<`string`\>

Resolves a shortened URL.

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shortUrl` | `string` | The shortened URL to resolve. |

### Returns

`Promise`<`string`\>

- A promise that resolves to the URL.

___

## rotateSelection

▸ **rotateSelection**(`rotateBy`): `void`

rotates the selected item(s)

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotateBy` | `number` | angle in rad |

### Returns

`void`

### Implementation of

RoomlePlannerCallback.rotateSelection

___

## saveCurrentPlanSnapshot

▸ **saveCurrentPlanSnapshot**(`parentPlanId?`): `Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `parentPlanId?` | `string` |

### Returns

`Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

___

## selectPlanObjectById

▸ **selectPlanObjectById**(`runtimeId`): `Promise`<`void`\>

select an object in the scene based on its runtime id

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeId` | `number` |

### Returns

`Promise`<`void`\>

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

Sets the available screen space for our item
Example 1: right 0.9 means 10% padding on the right side
Example 2: bottom 0.2 means 20% padding on the bottom side
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setcameraoffset)

___

## setEnvironmentMap

▸ **setEnvironmentMap**(`params`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.intensity?` | `number` |
| `params.maxLightSources?` | `number` |
| `params.rotation?` | `number` |
| `params.url?` | `string` |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setEnvironmentMap](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setenvironmentmap)

___

## setMeasurementLineLength

▸ **setMeasurementLineLength**(`measurementId`, `length`, `wallDirection`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `measurementId` | `number` |
| `length` | `number` |
| `wallDirection` | `string` |

### Returns

`void`

___

## setObjectToWallMeasurementLength

▸ **setObjectToWallMeasurementLength**(`planElementId`, `measurementId`, `length`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementId` | `number` |
| `measurementId` | `number` |
| `length` | `number` |

### Returns

`void`

___

## setOverrides

▸ **setOverrides**(`initData`): `void`

Set general configuration parameter

### Parameters

| Name | Type |
| :------ | :------ |
| `initData` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md) |

### Returns

`void`

___

## setSceneEvents

▸ **setSceneEvents**(`sceneEvents`): `void`

set which events are enabled in the scene, for example disable selection of walls and wall nodes

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneEvents` | [`SceneEvents`](../interfaces/planner_core_src_roomle_planner.SceneEvents.md) |

### Returns

`void`

___

## setWallMeasurementLength

▸ **setWallMeasurementLength**(`measurementId`, `length`, `wallDirection`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `measurementId` | `number` |
| `length` | `number` |
| `wallDirection` | [`EMSConstant`](configurator_core_src_roomle_configurator._internal_.EMSConstant.md) |

### Returns

`void`

___

## showBenchmarks

▸ **showBenchmarks**(): `void`

### Returns

`void`

___

## showGUI

▸ **showGUI**(): `void`

### Returns

`void`

___

## showStats

▸ **showStats**(): `void`

### Returns

`void`

___

## showsChildrenOfPlanObject

▸ **showsChildrenOfPlanObject**(`planElementViewModel`): `boolean`

returns true if interaction with the child components of a configuration object is enabled, and flashes otherwise

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`boolean`

___

## startConfiguring

▸ **startConfiguring**(): `void`

### Returns

`void`

___

## startViewing

▸ **startViewing**(): `void`

### Returns

`void`

___

## swapObject

▸ **swapObject**(`old`, `idOfNew`): `Promise`<`number`\>

Swap two plan objects in the scene in the same position for example swap two object variants

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `old` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) | this is the current selected plan object |
| `idOfNew` | `string` | the RAPI id of the new plan object returns runtime ID of the new object |

### Returns

`Promise`<`number`\>

___

## switch2D

▸ **switch2D**(): `void`

### Returns

`void`

___

## switch3D

▸ **switch3D**(): `void`

### Returns

`void`

___

## switchToConfigurator

▸ **switchToConfigurator**(): `Promise`<[`Configurator`](configurator_core_src_configurator.Configurator.md)\>

### Returns

`Promise`<[`Configurator`](configurator_core_src_configurator.Configurator.md)\>

### Implementation of

RoomlePlannerCallback.switchToConfigurator

___

## switchToFirstPerson

▸ **switchToFirstPerson**(): `void`

### Returns

`void`

___

## switchToPlanner

▸ **switchToPlanner**(`id?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

### Returns

`void`

___

## switchToViewer

▸ **switchToViewer**(): `Promise`<[`GlbViewer`](glb_viewer_core_src_glb_viewer.GlbViewer.md)\>

### Returns

`Promise`<[`GlbViewer`](glb_viewer_core_src_glb_viewer.GlbViewer.md)\>

### Implementation of

RoomlePlannerCallback.switchToViewer

___

## syncCatalog

▸ **syncCatalog**(`catalogId`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`Promise`<`void`\>

___

## toggleConfigureInRoom

▸ **toggleConfigureInRoom**(): `void`

### Returns

`void`

___

## update

▸ **update**(): `void`

### Returns

`void`

___

## updateScene

▸ **updateScene**(): `void`

Updates the scene (recalculating bounds) and restart rendering

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatescene)

___

## updateSize

▸ **updateSize**(): `void`

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateSize](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatesize)
