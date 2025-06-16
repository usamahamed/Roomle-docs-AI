[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<[`UIIntersections`](../modules/configurator_core_src_roomle_configurator._internal_.md#uiintersections)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-23.md#constructor)

## Properties

- [floorEnvironment](configurator_core_src_roomle_configurator._internal_.default-23.md#floorenvironment)

## Accessors

- [canvasOffset](configurator_core_src_roomle_configurator._internal_.default-23.md#canvasoffset)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-23.md#addeventlistener)
- [calculateUIIntersection](configurator_core_src_roomle_configurator._internal_.default-23.md#calculateuiintersection)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-23.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-23.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-23.md#enableevents)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-23.md#removeeventlistener)
- [updateToBounds](configurator_core_src_roomle_configurator._internal_.default-23.md#updatetobounds)

# Constructors

## constructor

• **new default**(`camera`)

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Properties

## floorEnvironment

• **floorEnvironment**: `boolean` = `false`

# Accessors

## canvasOffset

• `set` **canvasOffset**(`offset`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`UIIntersections`](../modules/configurator_core_src_roomle_configurator._internal_.md#uiintersections)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## calculateUIIntersection

▸ **calculateUIIntersection**(): `void`

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
| `arg?` | [`UIIntersections`](../modules/configurator_core_src_roomle_configurator._internal_.md#uiintersections) |

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

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`UIIntersections`](../modules/configurator_core_src_roomle_configurator._internal_.md#uiintersections)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

___

## updateToBounds

▸ **updateToBounds**(`bounds`, `clientWidth`, `clientHeight`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Vector3` |
| `clientWidth` | `number` |
| `clientHeight` | `number` |

### Returns

`void`
