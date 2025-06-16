[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / RoomleSdkWrapper

# Class: RoomleSdkWrapper

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).RoomleSdkWrapper

We use this class in a plugin so we
can rely on DI to change it during testing

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.RoomleSdkWrapper.md#constructor)

### Accessors

- [hasPlanner](exposed_api._internal_.RoomleSdkWrapper.md#hasplanner)

### Methods

- [getConfigurator](exposed_api._internal_.RoomleSdkWrapper.md#getconfigurator)
- [getConfiguratorApi](exposed_api._internal_.RoomleSdkWrapper.md#getconfiguratorapi)
- [getGlbViewer](exposed_api._internal_.RoomleSdkWrapper.md#getglbviewer)
- [getGlobalCallback](exposed_api._internal_.RoomleSdkWrapper.md#getglobalcallback)
- [getPlanner](exposed_api._internal_.RoomleSdkWrapper.md#getplanner)
- [getRapiAccess](exposed_api._internal_.RoomleSdkWrapper.md#getrapiaccess)
- [getStorage](exposed_api._internal_.RoomleSdkWrapper.md#getstorage)
- [setGlobalInitData](exposed_api._internal_.RoomleSdkWrapper.md#setglobalinitdata)

## Constructors

### constructor

• **new RoomleSdkWrapper**(): [`RoomleSdkWrapper`](exposed_api._internal_.RoomleSdkWrapper.md)

#### Returns

[`RoomleSdkWrapper`](exposed_api._internal_.RoomleSdkWrapper.md)

## Accessors

### hasPlanner

• `get` **hasPlanner**(): `boolean`

#### Returns

`boolean`

## Methods

### getConfigurator

▸ **getConfigurator**(`element`, `initData?`): `Promise`\<`Configurator`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<`Configurator`\>

___

### getConfiguratorApi

▸ **getConfiguratorApi**(`element`, `initData?`): `Promise`\<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<`default`\>

___

### getGlbViewer

▸ **getGlbViewer**(`element`, `initData?`): `Promise`\<`GlbViewer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<`GlbViewer`\>

___

### getGlobalCallback

▸ **getGlobalCallback**(): `Promise`\<`GlobalCallback`\>

#### Returns

`Promise`\<`GlobalCallback`\>

___

### getPlanner

▸ **getPlanner**(`element`, `initData?`): `Promise`\<`Planner`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<`Planner`\>

___

### getRapiAccess

▸ **getRapiAccess**(): `Promise`\<`default`\>

#### Returns

`Promise`\<`default`\>

___

### getStorage

▸ **getStorage**(): [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`default`\>

#### Returns

[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`default`\>

___

### setGlobalInitData

▸ **setGlobalInitData**(`initData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initData` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`GlobalInitDataDefinition`\> |

#### Returns

`void`
