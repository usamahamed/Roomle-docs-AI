[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<[`SceneEventInfo`](configurator_core_src_roomle_configurator._internal_.SceneEventInfo.md)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-45.md#constructor)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-45.md#addeventlistener)
- [clear](configurator_core_src_roomle_configurator._internal_.default-45.md#clear)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-45.md#disableevents)
- [disableOnWallSnapping](configurator_core_src_roomle_configurator._internal_.default-45.md#disableonwallsnapping)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-45.md#dispatchevent)
- [enableDragIn](configurator_core_src_roomle_configurator._internal_.default-45.md#enabledragin)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-45.md#enableevents)
- [enableOnWallSnapping](configurator_core_src_roomle_configurator._internal_.default-45.md#enableonwallsnapping)
- [getLayers](configurator_core_src_roomle_configurator._internal_.default-45.md#getlayers)
- [intersectMouseOnScene](configurator_core_src_roomle_configurator._internal_.default-45.md#intersectmouseonscene)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-45.md#removeeventlistener)
- [setCamera](configurator_core_src_roomle_configurator._internal_.default-45.md#setcamera)
- [setLayers](configurator_core_src_roomle_configurator._internal_.default-45.md#setlayers)
- [setMode](configurator_core_src_roomle_configurator._internal_.default-45.md#setmode)
- [setObject](configurator_core_src_roomle_configurator._internal_.default-45.md#setobject)
- [setRootComponentId](configurator_core_src_roomle_configurator._internal_.default-45.md#setrootcomponentid)
- [update](configurator_core_src_roomle_configurator._internal_.default-45.md#update)

# Constructors

## constructor

• **new default**(`object`, `camera`, `generalInput`, `mode?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |
| `camera` | `Camera` |
| `generalInput` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |
| `mode?` | [`INTERSECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.INTERSECTION_MODE.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Methods

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#disableevents)

___

## disableOnWallSnapping

▸ **disableOnWallSnapping**(): `void`

### Returns

`void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)

___

## enableDragIn

▸ **enableDragIn**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh) |

### Returns

`void`

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#enableevents)

___

## enableOnWallSnapping

▸ **enableOnWallSnapping**(): `void`

### Returns

`void`

___

## getLayers

▸ **getLayers**(): `Layers`

### Returns

`Layers`

___

## intersectMouseOnScene

▸ **intersectMouseOnScene**(`event`): [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md) |

### Returns

[`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md)

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

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

## setLayers

▸ **setLayers**(`layers`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | `Layers` |

### Returns

`void`

___

## setMode

▸ **setMode**(`mode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`INTERSECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.INTERSECTION_MODE.md) |

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

## setRootComponentId

▸ **setRootComponentId**(`rootComponentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `rootComponentId` | `number` |

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
