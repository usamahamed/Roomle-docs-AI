[planner-core/src/roomle-planner-ui-callback](../modules/planner_core_src_roomle_planner_ui_callback.md).default

# Hierarchy

- [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner_ui_callback.default.md#constructor)

## Properties

- [\_creator\_](planner_core_src_roomle_planner_ui_callback.default.md#_creator_)

## Methods

- [cameraStartsMoving](planner_core_src_roomle_planner_ui_callback.default.md#camerastartsmoving)
- [disableWallDimensions](planner_core_src_roomle_planner_ui_callback.default.md#disablewalldimensions)
- [get](planner_core_src_roomle_planner_ui_callback.default.md#get)
- [mute](planner_core_src_roomle_planner_ui_callback.default.md#mute)
- [onCameraChanged](planner_core_src_roomle_planner_ui_callback.default.md#oncamerachanged)
- [onCameraIdle](planner_core_src_roomle_planner_ui_callback.default.md#oncameraidle)
- [onClickElement](planner_core_src_roomle_planner_ui_callback.default.md#onclickelement)
- [onCompletelyLoaded](planner_core_src_roomle_planner_ui_callback.default.md#oncompletelyloaded)
- [onConfiguratorKernelIsReady](planner_core_src_roomle_planner_ui_callback.default.md#onconfiguratorkernelisready)
- [onContextChanged](planner_core_src_roomle_planner_ui_callback.default.md#oncontextchanged)
- [onDragElementEnd](planner_core_src_roomle_planner_ui_callback.default.md#ondragelementend)
- [onDragElementStart](planner_core_src_roomle_planner_ui_callback.default.md#ondragelementstart)
- [onDrawCancel](planner_core_src_roomle_planner_ui_callback.default.md#ondrawcancel)
- [onDrawingStateChanged](planner_core_src_roomle_planner_ui_callback.default.md#ondrawingstatechanged)
- [onFloorPlanAreasUpdated](planner_core_src_roomle_planner_ui_callback.default.md#onfloorplanareasupdated)
- [onHandlerSwitchedPlans](planner_core_src_roomle_planner_ui_callback.default.md#onhandlerswitchedplans)
- [onHistoryChange](planner_core_src_roomle_planner_ui_callback.default.md#onhistorychange)
- [onItemsLoaded](planner_core_src_roomle_planner_ui_callback.default.md#onitemsloaded)
- [onMeasurementLineStateChange](planner_core_src_roomle_planner_ui_callback.default.md#onmeasurementlinestatechange)
- [onMultiSelectionChange](planner_core_src_roomle_planner_ui_callback.default.md#onmultiselectionchange)
- [onPlanChanged](planner_core_src_roomle_planner_ui_callback.default.md#onplanchanged)
- [onPlanElementChanged](planner_core_src_roomle_planner_ui_callback.default.md#onplanelementchanged)
- [onPlanInteractionHandlerCreated](planner_core_src_roomle_planner_ui_callback.default.md#onplaninteractionhandlercreated)
- [onPlannerKernelIsReady](planner_core_src_roomle_planner_ui_callback.default.md#onplannerkernelisready)
- [onReadyForRender](planner_core_src_roomle_planner_ui_callback.default.md#onreadyforrender)
- [onRotationCancel](planner_core_src_roomle_planner_ui_callback.default.md#onrotationcancel)
- [onSelectionCancel](planner_core_src_roomle_planner_ui_callback.default.md#onselectioncancel)
- [onSelectionChange](planner_core_src_roomle_planner_ui_callback.default.md#onselectionchange)
- [onSelectionModeChange](planner_core_src_roomle_planner_ui_callback.default.md#onselectionmodechange)
- [onTotalFloorAreaChanged](planner_core_src_roomle_planner_ui_callback.default.md#ontotalfloorareachanged)
- [onUpdateConstructionElementsMeasurements](planner_core_src_roomle_planner_ui_callback.default.md#onupdateconstructionelementsmeasurements)
- [onUpdateMeasurementLineDimensions](planner_core_src_roomle_planner_ui_callback.default.md#onupdatemeasurementlinedimensions)
- [onUpdateObjectMeasurements](planner_core_src_roomle_planner_ui_callback.default.md#onupdateobjectmeasurements)
- [onUpdatePlanObjectPositions](planner_core_src_roomle_planner_ui_callback.default.md#onupdateplanobjectpositions)
- [onUpdateWallDimensions](planner_core_src_roomle_planner_ui_callback.default.md#onupdatewalldimensions)
- [unmute](planner_core_src_roomle_planner_ui_callback.default.md#unmute)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

### Overrides

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[constructor](configurator_core_src_configurator._internal_.UiCallback.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[_creator_](configurator_core_src_configurator._internal_.UiCallback.md#_creator_)

# Methods

## cameraStartsMoving

▸ **cameraStartsMoving**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[cameraStartsMoving](configurator_core_src_configurator._internal_.UiCallback.md#camerastartsmoving)

___

## disableWallDimensions

▸ **disableWallDimensions**(): `void`

This function gets called when the camera is moving and thus the wall dimensions should not be shown

### Returns

`void`

___

## get

▸ **get**(`target`, `prop`): `string` \| (`target`: [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md), `prop`: keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)) => `string` \| (target: UiCallback, prop: keyof UiCallback) =\> string \| ... \| (() =\> void) \| (() =\> void) \| (() =\> void) \| (() =\> void) \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md) |
| `prop` | keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md) |

### Returns

`string` \| (`target`: [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md), `prop`: keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)) => `string` \| (target: UiCallback, prop: keyof UiCallback) =\> string \| ... \| (() =\> void) \| (() =\> void) \| (() =\> void) \| (() =\> void) \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[get](configurator_core_src_configurator._internal_.UiCallback.md#get)

___

## mute

▸ **mute**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[mute](configurator_core_src_configurator._internal_.UiCallback.md#mute)

___

## onCameraChanged

▸ **onCameraChanged**(`type`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Enumify`](../modules/configurator_core_src_configurator._internal_.md#enumify)<{ `CAMERA_2D`: ``"2D"`` = '2D'; `CAMERA_3D`: ``"3D"`` = '3D'; `CAMERA_FP`: ``"FP"`` = 'FP' }\> |

### Returns

`void`

___

## onCameraIdle

▸ **onCameraIdle**(): `void`

### Returns

`void`

___

## onClickElement

▸ **onClickElement**(`planElement`): `void`

This function gets called when a selectable element has been clicked on.
An equivalent function for component clicks is onClickComponent in the configurator-ui-callback.ts

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planElement` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) | PlanElementViewModel instance of the clicked element |

### Returns

`void`

___

## onCompletelyLoaded

▸ **onCompletelyLoaded**(): `void`

When the plan has been completely loaded

### Returns

`void`

___

## onConfiguratorKernelIsReady

▸ **onConfiguratorKernelIsReady**(`kernelContainer`, `kernelInstance`): `void`

is called when the configurator kernel is ready. It returns the container and the instance

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelContainer` | [`PlannerKernelContainer`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.PlannerKernelContainer.md) |
| `kernelInstance` | [`ConfiguratorKernelClass`](../interfaces/typings_kernel.ConfiguratorKernelClass.md) |

### Returns

`void`

___

## onContextChanged

▸ **onContextChanged**(`context`): `void`

This callback is invoked when the context of the planner changes
For example when it switches from planner to configurator, or from planner to viewer

### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`BASE_CONTEXT`](../enums/configurator_core_src_roomle_configurator._internal_.BASE_CONTEXT.md) |

### Returns

`void`

___

## onDragElementEnd

▸ **onDragElementEnd**(): `void`

This function gets called when a movable element was being dragged before and is now released

### Returns

`void`

___

## onDragElementStart

▸ **onDragElementStart**(): `void`

This function gets called when a movable element begins to be dragged

### Returns

`void`

___

## onDrawCancel

▸ **onDrawCancel**(): `void`

### Returns

`void`

___

## onDrawingStateChanged

▸ **onDrawingStateChanged**(`currentlyDrawing`): `void`

This updates if the user started/stopped drawing a wall

### Parameters

| Name | Type |
| :------ | :------ |
| `currentlyDrawing` | `boolean` |

### Returns

`void`

___

## onFloorPlanAreasUpdated

▸ **onFloorPlanAreasUpdated**(`floorAreasData`): `void`

Callback invoked when the dimensions of rooms are updated.
It receives an array containing the computed areas of all rooms and related data, which may be used to display or process the area information of each room.

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `floorAreasData` | [`FloorAreaDataTransferable`](../modules/planner_core_src_roomle_planner_ui_callback._internal_.md#floorareadatatransferable)[] | An array of objects, each representing the area and related data for each room within the floor plan. |

### Returns

`void`

___

## onHandlerSwitchedPlans

▸ **onHandlerSwitchedPlans**(): `void`

### Returns

`void`

___

## onHistoryChange

▸ **onHistoryChange**(`undo`, `redo`): `void`

gets called if history changes

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `undo` | `boolean` | true if undo is possible |
| `redo` | `boolean` | true if redo is possible |

### Returns

`void`

___

## onItemsLoaded

▸ **onItemsLoaded**(): `void`

### Returns

`void`

___

## onMeasurementLineStateChange

▸ **onMeasurementLineStateChange**(`isActive`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `isActive` | `boolean` |

### Returns

`void`

___

## onMultiSelectionChange

▸ **onMultiSelectionChange**(`selectedElements`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `selectedElements` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md)[] |

### Returns

`void`

___

## onPlanChanged

▸ **onPlanChanged**(): `void`

When something in the plan has changed

### Returns

`void`

___

## onPlanElementChanged

▸ **onPlanElementChanged**(`changeType`, `changedObject`): `void`

When an element in the plan has been added, removed or changed
null if changed, added or removed object is not a item or configuration, such as a wall or construction element

### Parameters

| Name | Type |
| :------ | :------ |
| `changeType` | [`Enumify`](../modules/configurator_core_src_configurator._internal_.md#enumify)<{ `ADDED`: ``"added"`` = 'added'; `CHANGED`: ``"changed"`` = 'changed'; `REMOVED`: ``"removed"`` = 'removed' }\> |
| `changedObject` | [`UiPlanObject`](../interfaces/typings_kernel.UiPlanObject.md) |

### Returns

`void`

___

## onPlanInteractionHandlerCreated

▸ **onPlanInteractionHandlerCreated**(`planInteractionHandler`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planInteractionHandler` | [`PlanInteractionHandler`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md) |

### Returns

`void`

___

## onPlannerKernelIsReady

▸ **onPlannerKernelIsReady**(`kernelContainer`): `void`

is called when the planner kernel is ready. It returns the container and the instance

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelContainer` | [`PlannerKernelContainer`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.PlannerKernelContainer.md) |

### Returns

`void`

___

## onReadyForRender

▸ **onReadyForRender**(): `void`

is called the scene is ready for rendering it as an image

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[onReadyForRender](configurator_core_src_configurator._internal_.UiCallback.md#onreadyforrender)

___

## onRotationCancel

▸ **onRotationCancel**(): `void`

When rotation mode has been canceled

### Returns

`void`

___

## onSelectionCancel

▸ **onSelectionCancel**(`reason`): `void`

When an item selection has been canceled

### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | [`CancelSelectionReasons`](../modules/planner_core_src_roomle_planner._internal_.md#cancelselectionreasons) |

### Returns

`void`

___

## onSelectionChange

▸ **onSelectionChange**(`selectionMode`, `objectType`, `payload`, `payloadPromise`, `planElementViewModel`): `void`

When an item has been selected

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionMode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |  |
| `objectType` | [`CallbackObjectType`](../modules/planner_core_src_roomle_planner_ui_callback._internal_.md#callbackobjecttype) | currently only static items and configurations are supported |
| `payload` | [`SelectionPayload`](../interfaces/planner_core_src_roomle_planner_ui_callback.SelectionPayload.md) | returns the data which is available immediately (sync), currently this is catalogItemId and/or configurationRuntimeId |
| `payloadPromise` | `Promise`<[`SelectionPayload`](../interfaces/planner_core_src_roomle_planner_ui_callback.SelectionPayload.md)\> | this promise resolves when the data of an object is fetched |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) | the plan element view model used internally, WARNING: this is a reference, use with caution |

### Returns

`void`

___

## onSelectionModeChange

▸ **onSelectionModeChange**(`mode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |

### Returns

`void`

___

## onTotalFloorAreaChanged

▸ **onTotalFloorAreaChanged**(`totalFloorArea`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `totalFloorArea` | `number` |

### Returns

`void`

___

## onUpdateConstructionElementsMeasurements

▸ **onUpdateConstructionElementsMeasurements**(`constructionMeasurementsMeasurements`): `void`

This function gets called when the camera has stopped moving,
allowing for the calculation of the dimensions of construction elements' positions.
It is also called when an element is selected or dragged on the plan.

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructionMeasurementsMeasurements` | [`ConstructionMeasurementsTransferable`](../interfaces/planner_core_src_roomle_planner_ui_callback._internal_.ConstructionMeasurementsTransferable.md) | The measurements of construction elements. |

### Returns

`void`

___

## onUpdateMeasurementLineDimensions

▸ **onUpdateMeasurementLineDimensions**(`measurementLineDimensions`): `void`

This function gets called when the camera is no longer moving
and the position of the measurement line dimensions can be calculated

### Parameters

| Name | Type |
| :------ | :------ |
| `measurementLineDimensions` | [`MeasurementLineDimensionTransferable`](../modules/planner_core_src_roomle_planner_ui_callback._internal_.md#measurementlinedimensiontransferable)[] |

### Returns

`void`

___

## onUpdateObjectMeasurements

▸ **onUpdateObjectMeasurements**(`objectMeasurements`): `void`

This function gets called when the camera has stopped moving,
allowing for the calculation of the dimensions of plan element position.
It is also called when the element is selected or dragged on the plan.

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectMeasurements` | [`ObjectMeasurementsTransferable`](../interfaces/planner_core_src_roomle_planner_ui_callback._internal_.ObjectMeasurementsTransferable.md) | The measurements of plan element related to the walls plus object dimensions. |

### Returns

`void`

___

## onUpdatePlanObjectPositions

▸ **onUpdatePlanObjectPositions**(`planObjectPositions`): `void`

This function gets called when the camera is no longer moving
it delivers all the positions of items in the plan normalized to the screen coordinates

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectPositions` | [`PlanObjectPosition`](../interfaces/planner_core_src_roomle_planner_ui_callback._internal_.PlanObjectPosition.md)[] |

### Returns

`void`

___

## onUpdateWallDimensions

▸ **onUpdateWallDimensions**(`wallDimensions`): `void`

This function gets called when the camera is no longer moving
and the position of the wall dimensions can be calculated

### Parameters

| Name | Type |
| :------ | :------ |
| `wallDimensions` | [`WallDimensionTransferable`](../modules/planner_core_src_roomle_planner_ui_callback._internal_.md#walldimensiontransferable)[] |

### Returns

`void`

___

## unmute

▸ **unmute**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[unmute](configurator_core_src_configurator._internal_.UiCallback.md#unmute)
