[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-3.md#constructor)

## Properties

- [\_context\_](planner_core_src_roomle_planner._internal_.default-3.md#_context_)
- [\_creator\_](planner_core_src_roomle_planner._internal_.default-3.md#_creator_)

## Methods

- [addItem](planner_core_src_roomle_planner._internal_.default-3.md#additem)
- [getItem](planner_core_src_roomle_planner._internal_.default-3.md#getitem)
- [getStore](planner_core_src_roomle_planner._internal_.default-3.md#getstore)
- [saveStore](planner_core_src_roomle_planner._internal_.default-3.md#savestore)

# Constructors

## constructor

• **new default**(`_context_`)

### Parameters

| Name | Type |
| :------ | :------ |
| `_context_` | `string` |

# Properties

## \_context\_

• **\_context\_**: `string`

___

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## addItem

▸ **addItem**(`id`, `payload`, `storeId?`, `limit?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `payload` | `any` | `undefined` |
| `storeId` | `string` | `DEFAULT_STORE` |
| `limit` | `number` | `DEFAULT_STORE_SIZE` |

### Returns

`void`

___

## getItem

▸ **getItem**(`id`, `storeId?`): `any`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `storeId` | `string` | `DEFAULT_STORE` |

### Returns

`any`

___

## getStore

▸ **getStore**(`storeId?`): [`Store`](../interfaces/planner_core_src_roomle_planner._internal_.Store.md)

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `storeId` | `string` | `DEFAULT_STORE` |

### Returns

[`Store`](../interfaces/planner_core_src_roomle_planner._internal_.Store.md)

___

## saveStore

▸ **saveStore**(`storeId`, `store`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `storeId` | `string` |
| `store` | [`Store`](../interfaces/planner_core_src_roomle_planner._internal_.Store.md) |

### Returns

`void`
