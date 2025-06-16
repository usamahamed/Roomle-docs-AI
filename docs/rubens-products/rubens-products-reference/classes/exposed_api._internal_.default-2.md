[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / default

# Class: default

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).default

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.default-2.md#constructor)

### Properties

- [history](exposed_api._internal_.default-2.md#history)

### Methods

- [addCallback](exposed_api._internal_.default-2.md#addcallback)
- [cleanUpHistory](exposed_api._internal_.default-2.md#cleanuphistory)
- [giveConsent](exposed_api._internal_.default-2.md#giveconsent)
- [removeUiCallback](exposed_api._internal_.default-2.md#removeuicallback)
- [setDimension](exposed_api._internal_.default-2.md#setdimension)
- [setDimensions](exposed_api._internal_.default-2.md#setdimensions)
- [trackContentError](exposed_api._internal_.default-2.md#trackcontenterror)
- [trackError](exposed_api._internal_.default-2.md#trackerror)
- [trackEvent](exposed_api._internal_.default-2.md#trackevent)
- [trackNoActivePackage](exposed_api._internal_.default-2.md#tracknoactivepackage)
- [trackTiming](exposed_api._internal_.default-2.md#tracktiming)
- [trackWrongDomain](exposed_api._internal_.default-2.md#trackwrongdomain)

## Constructors

### constructor

• **new default**(`configuratorId`, `useTracking?`): [`default`](exposed_api._internal_.default-2.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuratorId` | `string` | `undefined` |
| `useTracking` | `boolean` | `true` |

#### Returns

[`default`](exposed_api._internal_.default-2.md)

## Properties

### history

• **history**: `IArguments`[] = `[]`

## Methods

### addCallback

▸ **addCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`GoogleAnalyticsCallback`](../modules/exposed_api._internal_.md#googleanalyticscallback) |

#### Returns

`void`

___

### cleanUpHistory

▸ **cleanUpHistory**(): `void`

#### Returns

`void`

___

### giveConsent

▸ **giveConsent**(): `void`

#### Returns

`void`

___

### removeUiCallback

▸ **removeUiCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`GoogleAnalyticsCallback`](../modules/exposed_api._internal_.md#googleanalyticscallback) |

#### Returns

`void`

___

### setDimension

▸ **setDimension**(`dimension`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |
| `value` | `any` |

#### Returns

`void`

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |

#### Returns

`void`

___

### trackContentError

▸ **trackContentError**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

___

### trackError

▸ **trackError**(`message`, `specialErrorName?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `specialErrorName` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`string`\> | `null` |

#### Returns

`void`

___

### trackEvent

▸ **trackEvent**(`action`, `category`, `label`, `value?`, `fieldsObject?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | `string` | `undefined` |
| `category` | [`GA_CATEGORY`](../enums/exposed_api._internal_.GA_CATEGORY.md) | `undefined` |
| `label` | `string` | `undefined` |
| `value` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`number`\> | `null` |
| `fieldsObject` | `object` | `{}` |

#### Returns

`void`

___

### trackNoActivePackage

▸ **trackNoActivePackage**(): `void`

#### Returns

`void`

___

### trackTiming

▸ **trackTiming**(`category`, `label`, `value`, `fieldsObject?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`GA_CATEGORY`](../enums/exposed_api._internal_.GA_CATEGORY.md) |
| `label` | `any` |
| `value` | `number` |
| `fieldsObject` | `object` |

#### Returns

`void`

___

### trackWrongDomain

▸ **trackWrongDomain**(): `void`

#### Returns

`void`
