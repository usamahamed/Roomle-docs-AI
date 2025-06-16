[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<[`SelectionHandlerEvent`](configurator_core_src_roomle_configurator._internal_.SelectionHandlerEvent.md)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-44.md#constructor)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-44.md#addeventlistener)
- [cancelSelection](configurator_core_src_roomle_configurator._internal_.default-44.md#cancelselection)
- [check](configurator_core_src_roomle_configurator._internal_.default-44.md#check)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-44.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-44.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-44.md#enableevents)
- [getSelectedRuntimeComponentIds](configurator_core_src_roomle_configurator._internal_.default-44.md#getselectedruntimecomponentids)
- [getSelectionMode](configurator_core_src_roomle_configurator._internal_.default-44.md#getselectionmode)
- [hasSelection](configurator_core_src_roomle_configurator._internal_.default-44.md#hasselection)
- [isSelected](configurator_core_src_roomle_configurator._internal_.default-44.md#isselected)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-44.md#removeeventlistener)
- [setSelectionMode](configurator_core_src_roomle_configurator._internal_.default-44.md#setselectionmode)

# Constructors

## constructor

• **new default**()

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SelectionHandlerEvent`](configurator_core_src_roomle_configurator._internal_.SelectionHandlerEvent.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## cancelSelection

▸ **cancelSelection**(): `void`

### Returns

`void`

___

## check

▸ **check**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

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
| `arg?` | [`SelectionHandlerEvent`](configurator_core_src_roomle_configurator._internal_.SelectionHandlerEvent.md) |

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

## isSelected

▸ **isSelected**(`component`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`boolean`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`SelectionHandlerEvent`](configurator_core_src_roomle_configurator._internal_.SelectionHandlerEvent.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

___

## setSelectionMode

▸ **setSelectionMode**(`mode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |

### Returns

`void`
