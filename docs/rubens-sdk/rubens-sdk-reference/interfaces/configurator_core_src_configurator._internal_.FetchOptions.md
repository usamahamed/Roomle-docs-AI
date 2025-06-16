[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).FetchOptions

# Table of contents

## Properties

- [accept](configurator_core_src_configurator._internal_.FetchOptions.md#accept)
- [additionalHeaders](configurator_core_src_configurator._internal_.FetchOptions.md#additionalheaders)
- [cacheKey](configurator_core_src_configurator._internal_.FetchOptions.md#cachekey)
- [contentType](configurator_core_src_configurator._internal_.FetchOptions.md#contenttype)
- [data](configurator_core_src_configurator._internal_.FetchOptions.md#data)
- [embed](configurator_core_src_configurator._internal_.FetchOptions.md#embed)
- [filterKey](configurator_core_src_configurator._internal_.FetchOptions.md#filterkey)
- [id](configurator_core_src_configurator._internal_.FetchOptions.md#id)
- [method](configurator_core_src_configurator._internal_.FetchOptions.md#method)
- [pathSuffix](configurator_core_src_configurator._internal_.FetchOptions.md#pathsuffix)
- [reject](configurator_core_src_configurator._internal_.FetchOptions.md#reject)
- [resolve](configurator_core_src_configurator._internal_.FetchOptions.md#resolve)

# Properties

## accept

• `Optional` **accept**: `string`

___

## additionalHeaders

• `Optional` **additionalHeaders**: `Object`

### Index signature

▪ [key: `string`]: `string` \| `number`

___

## cacheKey

• `Optional` **cacheKey**: `string`

___

## contentType

• `Optional` **contentType**: `string`

___

## data

• `Optional` **data**: `string` \| [`RapiJson`](typings_rapi_types.RapiJson.md)

___

## embed

• `Optional` **embed**: [`RAPI_PATHS`](../enums/configurator_core_src_configurator._internal_.RAPI_PATHS.md)[]

___

## filterKey

• `Optional` **filterKey**: `string`

___

## id

• `Optional` **id**: `string`

___

## method

• `Optional` **method**: ``"PUT"`` \| ``"GET"`` \| ``"POST"``

___

## pathSuffix

• `Optional` **pathSuffix**: `string`

___

## reject

• `Optional` **reject**: (`error`: [`RoomleError`](../classes/configurator_core_src_configurator._internal_.RoomleError.md)) => `void`

### Type declaration

▸ (`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`RoomleError`](../classes/configurator_core_src_configurator._internal_.RoomleError.md) |

#### Returns

`void`

___

## resolve

• `Optional` **resolve**: (`data`: [`RapiJson`](typings_rapi_types.RapiJson.md)) => `void`

### Type declaration

▸ (`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RapiJson`](typings_rapi_types.RapiJson.md) |

#### Returns

`void`
