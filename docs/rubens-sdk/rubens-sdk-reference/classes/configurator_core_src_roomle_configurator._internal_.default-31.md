[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<[`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md)\>

  ↳ **`default`**

  ↳↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-16.md)

  ↳↳ [`default`](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-2.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- `EventListenerObject`

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-31.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-31.md#_creator_)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-31.md#addeventlistener)
- [addEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#addevents)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-31.md#dispatchevent)
- [enableDragIn](configurator_core_src_roomle_configurator._internal_.default-31.md#enabledragin)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#enableevents)
- [handleEvent](configurator_core_src_roomle_configurator._internal_.default-31.md#handleevent)
- [isMouseUp](configurator_core_src_roomle_configurator._internal_.default-31.md#ismouseup)
- [onElementHit](configurator_core_src_roomle_configurator._internal_.default-31.md#onelementhit)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-31.md#removeeventlistener)
- [removeEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#removeevents)
- [setDragEnabled](configurator_core_src_roomle_configurator._internal_.default-31.md#setdragenabled)
- [updateSize](configurator_core_src_roomle_configurator._internal_.default-31.md#updatesize)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

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
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## addEvents

▸ **addEvents**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

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

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | [`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)

___

## enableDragIn

▸ **enableDragIn**(`dragEvent?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `dragEvent?` | `DragEvent` |

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

## handleEvent

▸ **handleEvent**(`evt`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `Event` |

### Returns

`void`

### Implementation of

EventListenerObject.handleEvent

___

## isMouseUp

▸ **isMouseUp**(): `boolean`

### Returns

`boolean`

___

## onElementHit

▸ **onElementHit**(): `void`

### Returns

`void`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

___

## removeEvents

▸ **removeEvents**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

### Returns

`void`

___

## setDragEnabled

▸ **setDragEnabled**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

___

## updateSize

▸ **updateSize**(): `void`

### Returns

`void`
