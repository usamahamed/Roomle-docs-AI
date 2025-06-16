[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).EmsArray

# Type parameters

| Name |
| :------ |
| `T` |

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.EmsArray.md#constructor)

## Methods

- [clone](configurator_core_src_roomle_configurator._internal_.EmsArray.md#clone)
- [delete](configurator_core_src_roomle_configurator._internal_.EmsArray.md#delete)
- [deleteLater](configurator_core_src_roomle_configurator._internal_.EmsArray.md#deletelater)
- [get](configurator_core_src_roomle_configurator._internal_.EmsArray.md#get)
- [isAliasOf](configurator_core_src_roomle_configurator._internal_.EmsArray.md#isaliasof)
- [isDeleted](configurator_core_src_roomle_configurator._internal_.EmsArray.md#isdeleted)
- [push\_back](configurator_core_src_roomle_configurator._internal_.EmsArray.md#push_back)
- [resize](configurator_core_src_roomle_configurator._internal_.EmsArray.md#resize)
- [set](configurator_core_src_roomle_configurator._internal_.EmsArray.md#set)
- [size](configurator_core_src_roomle_configurator._internal_.EmsArray.md#size)

# Constructors

## constructor

• **new EmsArray**<`T`\>()

### Type parameters

| Name |
| :------ |
| `T` |

# Methods

## clone

▸ **clone**(`index`): [`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<`T`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<`T`\>

___

## delete

▸ **delete**(`index`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`void`

___

## deleteLater

▸ **deleteLater**(`index`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`void`

___

## get

▸ **get**(`index`): `T`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`T`

___

## isAliasOf

▸ **isAliasOf**(`index`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`boolean`

___

## isDeleted

▸ **isDeleted**(`index`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`boolean`

___

## push\_back

▸ **push_back**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

### Returns

`void`

___

## resize

▸ **resize**(`from`, `to`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

### Returns

`void`

___

## set

▸ **set**(`index`, `element`): `T`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | `T` |

### Returns

`T`

___

## size

▸ **size**(): `number`

### Returns

`number`
