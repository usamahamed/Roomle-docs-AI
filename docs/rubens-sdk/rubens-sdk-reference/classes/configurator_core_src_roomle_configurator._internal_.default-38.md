[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Type parameters

| Name |
| :------ |
| `EventType` |

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<`EventType`\>

  ↳ **`default`**

  ↳↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-24.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-4.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-38.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-38.md#_creator_)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#addeventlistener)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-38.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-38.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-38.md#enableevents)
- [isDragIn](configurator_core_src_roomle_configurator._internal_.default-38.md#isdragin)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-38.md#removeeventlistener)
- [setDragIn](configurator_core_src_roomle_configurator._internal_.default-38.md#setdragin)

# Constructors

## constructor

• **new default**<`EventType`\>(`creator`, `scene`, `camera`, `inputManager`)

### Type parameters

| Name |
| :------ |
| `EventType` |

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`EventType`\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#disableevents)

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | `EventType` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#enableevents)

___

## isDragIn

▸ **isDragIn**(): `boolean`

### Returns

`boolean`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`EventType`\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

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
