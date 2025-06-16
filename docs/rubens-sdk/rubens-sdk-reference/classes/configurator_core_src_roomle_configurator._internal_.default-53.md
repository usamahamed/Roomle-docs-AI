[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Type parameters

| Name |
| :------ |
| `T` |

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-53.md#constructor)

## Methods

- [create](configurator_core_src_roomle_configurator._internal_.default-53.md#create)
- [reject](configurator_core_src_roomle_configurator._internal_.default-53.md#reject)
- [resolve](configurator_core_src_roomle_configurator._internal_.default-53.md#resolve)

# Constructors

## constructor

• **new default**<`T`\>()

### Type parameters

| Name |
| :------ |
| `T` |

# Methods

## create

▸ **create**(): `Promise`<`T`\>

### Returns

`Promise`<`T`\>

___

## reject

▸ **reject**(`reason`): `Promise`<`T`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `Error` |

### Returns

`Promise`<`T`\>

___

## resolve

▸ **resolve**(`value`): `Promise`<`T`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` \| `PromiseLike`<`T`\> |

### Returns

`Promise`<`T`\>
