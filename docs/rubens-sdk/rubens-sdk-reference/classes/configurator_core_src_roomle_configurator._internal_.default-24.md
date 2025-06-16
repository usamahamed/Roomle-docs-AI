[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-38.md)<[`SceneEventInfo`](configurator_core_src_roomle_configurator._internal_.SceneEventInfo.md)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-24.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-24.md#_creator_)

## Methods

- [addComponentDragInHandler](configurator_core_src_roomle_configurator._internal_.default-24.md#addcomponentdraginhandler)
- [addComponentHandlers](configurator_core_src_roomle_configurator._internal_.default-24.md#addcomponenthandlers)
- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-24.md#addeventlistener)
- [addPreviewHandlers](configurator_core_src_roomle_configurator._internal_.default-24.md#addpreviewhandlers)
- [addPreviewLineHandlers](configurator_core_src_roomle_configurator._internal_.default-24.md#addpreviewlinehandlers)
- [cancelSelection](configurator_core_src_roomle_configurator._internal_.default-24.md#cancelselection)
- [clickComponent](configurator_core_src_roomle_configurator._internal_.default-24.md#clickcomponent)
- [disable](configurator_core_src_roomle_configurator._internal_.default-24.md#disable)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-24.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-24.md#dispatchevent)
- [enable](configurator_core_src_roomle_configurator._internal_.default-24.md#enable)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-24.md#enableevents)
- [getSelectedRuntimeComponentIds](configurator_core_src_roomle_configurator._internal_.default-24.md#getselectedruntimecomponentids)
- [getSelectionMode](configurator_core_src_roomle_configurator._internal_.default-24.md#getselectionmode)
- [hasSelection](configurator_core_src_roomle_configurator._internal_.default-24.md#hasselection)
- [isDragIn](configurator_core_src_roomle_configurator._internal_.default-24.md#isdragin)
- [isDragging](configurator_core_src_roomle_configurator._internal_.default-24.md#isdragging)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-24.md#removeeventlistener)
- [setCamera](configurator_core_src_roomle_configurator._internal_.default-24.md#setcamera)
- [setCameraMoving](configurator_core_src_roomle_configurator._internal_.default-24.md#setcameramoving)
- [setDragIn](configurator_core_src_roomle_configurator._internal_.default-24.md#setdragin)
- [setObject](configurator_core_src_roomle_configurator._internal_.default-24.md#setobject)
- [setRootComponentId](configurator_core_src_roomle_configurator._internal_.default-24.md#setrootcomponentid)
- [setSelectionMode](configurator_core_src_roomle_configurator._internal_.default-24.md#setselectionmode)
- [update](configurator_core_src_roomle_configurator._internal_.default-24.md#update)

# Constructors

## constructor

• **new default**(`creator`, `scene`, `camera`, `inputManager`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `scene` | `Scene` |
| `camera` | `PerspectiveCamera` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-38.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-38.md#_creator_)

# Methods

## addComponentDragInHandler

▸ **addComponentDragInHandler**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## addComponentHandlers

▸ **addComponentHandlers**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SceneEventInfo`](configurator_core_src_roomle_configurator._internal_.SceneEventInfo.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#addeventlistener)

___

## addPreviewHandlers

▸ **addPreviewHandlers**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`PreviewComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.PreviewComponent.md) |

### Returns

`void`

___

## addPreviewLineHandlers

▸ **addPreviewLineHandlers**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`PreviewLineComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md) |

### Returns

`void`

___

## cancelSelection

▸ **cancelSelection**(): `void`

### Returns

`void`

___

## clickComponent

▸ **clickComponent**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## disable

▸ **disable**(): `void`

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

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | [`SceneEventInfo`](configurator_core_src_roomle_configurator._internal_.SceneEventInfo.md) |

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

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-38.md#enableevents)

___

## getSelectedRuntimeComponentIds

▸ **getSelectedRuntimeComponentIds**(): `number`[]

### Returns

`number`[]

___

## getSelectionMode

▸ **getSelectionMode**(): [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

### Returns

[`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

___

## hasSelection

▸ **hasSelection**(): `boolean`

### Returns

`boolean`

___

## isDragIn

▸ **isDragIn**(): `boolean`

### Returns

`boolean`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[isDragIn](configurator_core_src_roomle_configurator._internal_.default-38.md#isdragin)

___

## isDragging

▸ **isDragging**(): `boolean`

### Returns

`boolean`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SceneEventInfo`](configurator_core_src_roomle_configurator._internal_.SceneEventInfo.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-38.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#removeeventlistener)

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

## setCameraMoving

▸ **setCameraMoving**(`cameraMoving`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraMoving` | `boolean` |

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

## setObject

▸ **setObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## setRootComponentId

▸ **setRootComponentId**(`rootComponentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `rootComponentId` | `number` |

### Returns

`void`

___

## setSelectionMode

▸ **setSelectionMode**(`mode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |

### Returns

`void`

___

## update

▸ **update**(`bounds`, `rootComponentPosition`, `backgroundScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Vector3` |
| `rootComponentPosition` | `Vector3` |
| `backgroundScene` | `Scene` |

### Returns

`void`
