[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / default

# Class: default

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).default

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.default.md#constructor)

### Methods

- [emit](exposed_api._internal_.default.md#emit)
- [getEventsDataMap](exposed_api._internal_.default.md#geteventsdatamap)
- [off](exposed_api._internal_.default.md#off)
- [on](exposed_api._internal_.default.md#on)

## Constructors

### constructor

• **new default**(): [`default`](exposed_api._internal_.default.md)

#### Returns

[`default`](exposed_api._internal_.default.md)

## Methods

### emit

▸ **emit**\<`T`\>(`event`, `data?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `data?` | `T` |

#### Returns

`void`

___

### getEventsDataMap

▸ **getEventsDataMap**(): [`EventsDataMap`](../modules/exposed_api._internal_.md#eventsdatamap)\<`any`\>

#### Returns

[`EventsDataMap`](../modules/exposed_api._internal_.md#eventsdatamap)\<`any`\>

___

### off

▸ **off**\<`T`\>(`event`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | [`EventCallback`](../modules/exposed_api._internal_.md#eventcallback)\<`T`\> |

#### Returns

`void`

___

### on

▸ **on**\<`T`\>(`event`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | [`EventCallback`](../modules/exposed_api._internal_.md#eventcallback)\<`T`\> |

#### Returns

`void`
