[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-38.md)<[`SceneEventInfo`](planner_core_src_roomle_planner._internal_.SceneEventInfo.md)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-4.md#constructor)

## Properties

- [\_creator\_](planner_core_src_roomle_planner._internal_.default-4.md#_creator_)

## Accessors

- [hoveredObjectId](planner_core_src_roomle_planner._internal_.default-4.md#hoveredobjectid)
- [isCurrentlyDrawing](planner_core_src_roomle_planner._internal_.default-4.md#iscurrentlydrawing)
- [planInteractionHandler](planner_core_src_roomle_planner._internal_.default-4.md#planinteractionhandler)

## Methods

- [addComponentDragInHandler](planner_core_src_roomle_planner._internal_.default-4.md#addcomponentdraginhandler)
- [addConstructionPlanObjectHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addconstructionplanobjecthandlers)
- [addEventListener](planner_core_src_roomle_planner._internal_.default-4.md#addeventlistener)
- [addFloorHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addfloorhandlers)
- [addMeasurementLineHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addmeasurementlinehandlers)
- [addNodeHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addnodehandlers)
- [addPlanObjectHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addplanobjecthandlers)
- [addWallHandlers](planner_core_src_roomle_planner._internal_.default-4.md#addwallhandlers)
- [cancelSelection](planner_core_src_roomle_planner._internal_.default-4.md#cancelselection)
- [cancelWallDrawing](planner_core_src_roomle_planner._internal_.default-4.md#cancelwalldrawing)
- [disable](planner_core_src_roomle_planner._internal_.default-4.md#disable)
- [disableAdvancedDocking](planner_core_src_roomle_planner._internal_.default-4.md#disableadvanceddocking)
- [disableEvents](planner_core_src_roomle_planner._internal_.default-4.md#disableevents)
- [disableMeasurementLineDrawing](planner_core_src_roomle_planner._internal_.default-4.md#disablemeasurementlinedrawing)
- [disableShowChildrenOfPlanObject](planner_core_src_roomle_planner._internal_.default-4.md#disableshowchildrenofplanobject)
- [disableSnapping](planner_core_src_roomle_planner._internal_.default-4.md#disablesnapping)
- [dispatchEvent](planner_core_src_roomle_planner._internal_.default-4.md#dispatchevent)
- [enable](planner_core_src_roomle_planner._internal_.default-4.md#enable)
- [enableAdvancedDocking](planner_core_src_roomle_planner._internal_.default-4.md#enableadvanceddocking)
- [enableConstructionEvents](planner_core_src_roomle_planner._internal_.default-4.md#enableconstructionevents)
- [enableEvents](planner_core_src_roomle_planner._internal_.default-4.md#enableevents)
- [enableMeasurementLineDrawing](planner_core_src_roomle_planner._internal_.default-4.md#enablemeasurementlinedrawing)
- [enableObjectEvents](planner_core_src_roomle_planner._internal_.default-4.md#enableobjectevents)
- [enableShowChildrenOfPlanObject](planner_core_src_roomle_planner._internal_.default-4.md#enableshowchildrenofplanobject)
- [enableSnapping](planner_core_src_roomle_planner._internal_.default-4.md#enablesnapping)
- [enableWallDrawing](planner_core_src_roomle_planner._internal_.default-4.md#enablewalldrawing)
- [endWallDrawing](planner_core_src_roomle_planner._internal_.default-4.md#endwalldrawing)
- [getSelectedIds](planner_core_src_roomle_planner._internal_.default-4.md#getselectedids)
- [getSelectionMode](planner_core_src_roomle_planner._internal_.default-4.md#getselectionmode)
- [isDragIn](planner_core_src_roomle_planner._internal_.default-4.md#isdragin)
- [removeEventListener](planner_core_src_roomle_planner._internal_.default-4.md#removeeventlistener)
- [removeSelection](planner_core_src_roomle_planner._internal_.default-4.md#removeselection)
- [resetState](planner_core_src_roomle_planner._internal_.default-4.md#resetstate)
- [selectPlanElement](planner_core_src_roomle_planner._internal_.default-4.md#selectplanelement)
- [setCamera](planner_core_src_roomle_planner._internal_.default-4.md#setcamera)
- [setDragIn](planner_core_src_roomle_planner._internal_.default-4.md#setdragin)
- [setKernelZoomFactor](planner_core_src_roomle_planner._internal_.default-4.md#setkernelzoomfactor)
- [setMeasurementLineLength](planner_core_src_roomle_planner._internal_.default-4.md#setmeasurementlinelength)
- [setObject](planner_core_src_roomle_planner._internal_.default-4.md#setobject)
- [setPlanViewModel](planner_core_src_roomle_planner._internal_.default-4.md#setplanviewmodel)
- [setSelectionMode](planner_core_src_roomle_planner._internal_.default-4.md#setselectionmode)
- [setState](planner_core_src_roomle_planner._internal_.default-4.md#setstate)
- [showsChildrenOfPlanObject](planner_core_src_roomle_planner._internal_.default-4.md#showschildrenofplanobject)
- [startDrawing](planner_core_src_roomle_planner._internal_.default-4.md#startdrawing)
- [stopDrawing](planner_core_src_roomle_planner._internal_.default-4.md#stopdrawing)

# Constructors

## constructor

• **new default**(`creator`, `scene`, `camera`, `inputManager`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-38.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-38.md#_creator_)

# Accessors

## hoveredObjectId

• `get` **hoveredObjectId**(): `number`

### Returns

`number`

___

## isCurrentlyDrawing

• `get` **isCurrentlyDrawing**(): `boolean`

### Returns

`boolean`

___

## planInteractionHandler

• `get` **planInteractionHandler**(): [`PlanInteractionHandler`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)

### Returns

[`PlanInteractionHandler`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)

# Methods

## addComponentDragInHandler

▸ **addComponentDragInHandler**(`planViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## addConstructionPlanObjectHandlers

▸ **addConstructionPlanObjectHandlers**(`planObjectViewModel`, `object?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-49.md) |
| `object?` | [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d) |

### Returns

`void`

___

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SceneEventInfo`](planner_core_src_roomle_planner._internal_.SceneEventInfo.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#addeventlistener)

___

## addFloorHandlers

▸ **addFloorHandlers**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## addMeasurementLineHandlers

▸ **addMeasurementLineHandlers**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](planner_core_src_roomle_planner._internal_.default-17.md) |

### Returns

`void`

___

## addNodeHandlers

▸ **addNodeHandlers**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## addPlanObjectHandlers

▸ **addPlanObjectHandlers**(`planObjectViewModel`, `object?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-49.md) |
| `object?` | [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d) |

### Returns

`void`

___

## addWallHandlers

▸ **addWallHandlers**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## cancelSelection

▸ **cancelSelection**(`reason`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | [`CancelSelectionReasons`](../modules/planner_core_src_roomle_planner._internal_.md#cancelselectionreasons) |

### Returns

`void`

___

## cancelWallDrawing

▸ **cancelWallDrawing**(): `Group`<`Object3DEventMap`\>

### Returns

`Group`<`Object3DEventMap`\>

___

## disable

▸ **disable**(): `void`

### Returns

`void`

___

## disableAdvancedDocking

▸ **disableAdvancedDocking**(): `void`

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-38.md#disableevents)

___

## disableMeasurementLineDrawing

▸ **disableMeasurementLineDrawing**(): `void`

### Returns

`void`

___

## disableShowChildrenOfPlanObject

▸ **disableShowChildrenOfPlanObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

`void`

___

## disableSnapping

▸ **disableSnapping**(): `void`

### Returns

`void`

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | [`SceneEventInfo`](planner_core_src_roomle_planner._internal_.SceneEventInfo.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-38.md#dispatchevent)

___

## enable

▸ **enable**(): `void`

### Returns

`void`

___

## enableAdvancedDocking

▸ **enableAdvancedDocking**(): `void`

### Returns

`void`

___

## enableConstructionEvents

▸ **enableConstructionEvents**(`enable`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

### Returns

`void`

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-38.md#enableevents)

___

## enableMeasurementLineDrawing

▸ **enableMeasurementLineDrawing**(): `void`

### Returns

`void`

___

## enableObjectEvents

▸ **enableObjectEvents**(`enable`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

### Returns

`void`

___

## enableShowChildrenOfPlanObject

▸ **enableShowChildrenOfPlanObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

`void`

___

## enableSnapping

▸ **enableSnapping**(): `void`

### Returns

`void`

___

## enableWallDrawing

▸ **enableWallDrawing**(): `Group`<`Object3DEventMap`\>

### Returns

`Group`<`Object3DEventMap`\>

___

## endWallDrawing

▸ **endWallDrawing**(`event`, `point?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md) |
| `point?` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## getSelectedIds

▸ **getSelectedIds**(): `number`[]

### Returns

`number`[]

___

## getSelectionMode

▸ **getSelectionMode**(): [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

### Returns

[`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

___

## isDragIn

▸ **isDragIn**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[isDragIn](configurator_core_src_roomle_configurator._internal_.default-38.md#isdragin)

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SceneEventInfo`](planner_core_src_roomle_planner._internal_.SceneEventInfo.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#removeeventlistener)

___

## removeSelection

▸ **removeSelection**(): `void`

### Returns

`void`

___

## resetState

▸ **resetState**(): `void`

### Returns

`void`

___

## selectPlanElement

▸ **selectPlanElement**(`planElement`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `planElement` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`Promise`<`void`\>

___

## setCamera

▸ **setCamera**(`camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `Camera` |

### Returns

`void`

___

## setDragIn

▸ **setDragIn**(`dragIn`, `dragEvent?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `dragIn` | `boolean` |
| `dragEvent?` | `DragEvent` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[setDragIn](configurator_core_src_roomle_configurator._internal_.default-38.md#setdragin)

___

## setKernelZoomFactor

▸ **setKernelZoomFactor**(`kernelZoomFactor`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelZoomFactor` | `number` |

### Returns

`void`

___

## setMeasurementLineLength

▸ **setMeasurementLineLength**(`measurementLine`, `targetLengthMM`, `direction`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `measurementLine` | [`default`](planner_core_src_roomle_planner._internal_.default-17.md) |
| `targetLengthMM` | `number` |
| `direction` | `string` |

### Returns

`void`

___

## setObject

▸ **setObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## setPlanViewModel

▸ **setPlanViewModel**(`planViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planViewModel` | [`default`](planner_core_src_roomle_planner._internal_.default-6.md) |

### Returns

`void`

___

## setSelectionMode

▸ **setSelectionMode**(`selectionMode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `selectionMode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |

### Returns

`void`

___

## setState

▸ **setState**(`state`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PLANNER_SCENE_EVENT_STATE`](../enums/planner_core_src_roomle_planner._internal_.PLANNER_SCENE_EVENT_STATE.md) |

### Returns

`void`

___

## showsChildrenOfPlanObject

▸ **showsChildrenOfPlanObject**(`object`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

`boolean`

___

## startDrawing

▸ **startDrawing**(): `void`

### Returns

`void`

___

## stopDrawing

▸ **stopDrawing**(`cancelDrawing?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cancelDrawing` | `boolean` | `true` |

### Returns

`void`
