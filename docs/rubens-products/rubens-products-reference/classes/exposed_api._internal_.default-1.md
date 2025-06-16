[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / default

# Class: default\<T\>

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).default

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.default-1.md#constructor)

### Properties

- [info](exposed_api._internal_.default-1.md#info)

### Methods

- [reject](exposed_api._internal_.default-1.md#reject)
- [reset](exposed_api._internal_.default-1.md#reset)
- [resolve](exposed_api._internal_.default-1.md#resolve)
- [wait](exposed_api._internal_.default-1.md#wait)

## Constructors

### constructor

• **new default**\<`T`\>(`info?`): [`default`](exposed_api._internal_.default-1.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `info?` | `any` |

#### Returns

[`default`](exposed_api._internal_.default-1.md)\<`T`\>

## Properties

### info

• **info**: `any`

## Methods

### reject

▸ **reject**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`void`

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

___

### resolve

▸ **resolve**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`void`

___

### wait

▸ **wait**(): `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
