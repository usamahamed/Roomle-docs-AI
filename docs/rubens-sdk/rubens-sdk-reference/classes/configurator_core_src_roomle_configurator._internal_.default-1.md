[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-1.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-1.md#_creator_)
- [configStore](configurator_core_src_roomle_configurator._internal_.default-1.md#configstore)

## Methods

- [clearStore](configurator_core_src_roomle_configurator._internal_.default-1.md#clearstore)
- [deleteValue](configurator_core_src_roomle_configurator._internal_.default-1.md#deletevalue)
- [getKey](configurator_core_src_roomle_configurator._internal_.default-1.md#getkey)
- [getValue](configurator_core_src_roomle_configurator._internal_.default-1.md#getvalue)
- [pruneOldEntries](configurator_core_src_roomle_configurator._internal_.default-1.md#pruneoldentries)
- [setValue](configurator_core_src_roomle_configurator._internal_.default-1.md#setvalue)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

___

## configStore

• `Readonly` **configStore**: [`UseIdbStore`](../modules/configurator_core_src_roomle_configurator._internal_.md#useidbstore)

# Methods

## clearStore

▸ **clearStore**(`objStore`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `objStore` | [`UseIdbStore`](../modules/configurator_core_src_roomle_configurator._internal_.md#useidbstore) |

### Returns

`Promise`<`void`\>

___

## deleteValue

▸ **deleteValue**(`key`, `objStore`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `IDBValidKey` |
| `objStore` | [`UseIdbStore`](../modules/configurator_core_src_roomle_configurator._internal_.md#useidbstore) |

### Returns

`Promise`<`void`\>

___

## getKey

▸ **getKey**(`...args`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

### Returns

`string`

___

## getValue

▸ **getValue**<`T`\>(`key`, `store`): `Promise`<[`SavedIdbData`](../interfaces/configurator_core_src_roomle_configurator._internal_.SavedIdbData.md)<`T`\>\>

### Type parameters

| Name |
| :------ |
| `T` |

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `IDBValidKey` |
| `store` | [`UseIdbStore`](../modules/configurator_core_src_roomle_configurator._internal_.md#useidbstore) |

### Returns

`Promise`<[`SavedIdbData`](../interfaces/configurator_core_src_roomle_configurator._internal_.SavedIdbData.md)<`T`\>\>

___

## pruneOldEntries

▸ **pruneOldEntries**(): `Promise`<`void`\>

### Returns

`Promise`<`void`\>

___

## setValue

▸ **setValue**<`T`\>(`key`, `value`, `store`): `Promise`<`void`\>

### Type parameters

| Name |
| :------ |
| `T` |

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |
| `store` | [`UseIdbStore`](../modules/configurator_core_src_roomle_configurator._internal_.md#useidbstore) |

### Returns

`Promise`<`void`\>
