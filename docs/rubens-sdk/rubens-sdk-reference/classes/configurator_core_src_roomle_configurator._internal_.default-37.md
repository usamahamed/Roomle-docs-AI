[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Type parameters

| Name |
| :------ |
| `T` |

# Hierarchy

- **`default`**

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-23.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-38.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-44.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-45.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md)

  ↳ [`default`](planner_core_src_roomle_planner._internal_.default-11.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#enableevents)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

# Constructors

## constructor

• **new default**<`T`\>()

### Type parameters

| Name |
| :------ |
| `T` |

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`T`\> |
| `scope` | `any` |

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | `T` |

### Returns

`void`

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`T`\> |

### Returns

`void`
