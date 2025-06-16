[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [roomle-configurator-api](../modules/roomle_configurator_api.md) / default

# Class: default\<SdkType, SdkCallbacks\>

[roomle-configurator-api](../modules/roomle_configurator_api.md).default

## Type parameters

| Name |
| :------ |
| `SdkType` |
| `SdkCallbacks` |

## Implements

- [`RoomleEmbeddingApiKeys`](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md)

## Table of contents

### Properties

- [analytics](roomle_configurator_api.default.md#analytics)
- [extended](roomle_configurator_api.default.md#extended)
- [global](roomle_configurator_api.default.md#global)
- [ui](roomle_configurator_api.default.md#ui)

### Methods

- [teardown](roomle_configurator_api.default.md#teardown)
- [create](roomle_configurator_api.default.md#create)
- [createConfigurator](roomle_configurator_api.default.md#createconfigurator)
- [createPlanner](roomle_configurator_api.default.md#createplanner)
- [createViewer](roomle_configurator_api.default.md#createviewer)

## Properties

### analytics

• **analytics**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callbacks` | [`ExposedAnalyticsCallbacks`](exposed_analytics_callbacks.ExposedAnalyticsCallbacks.md) |

#### Implementation of

[RoomleEmbeddingApiKeys](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md).[analytics](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md#analytics)

___

### extended

• **extended**: `SdkType`

#### Implementation of

[RoomleEmbeddingApiKeys](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md).[extended](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md#extended)

___

### global

• **global**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callbacks` | `GlobalCallback` |

#### Implementation of

[RoomleEmbeddingApiKeys](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md).[global](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md#global)

___

### ui

• **ui**: [`ExposedApi`](exposed_api.ExposedApi.md)

#### Implementation of

[RoomleEmbeddingApiKeys](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md).[ui](../interfaces/roomle_configurator_api.RoomleEmbeddingApiKeys.md#ui)

## Methods

### teardown

▸ **teardown**(): `void`

#### Returns

`void`

___

### create

▸ **create**(`configuratorId`, `container`, `initData`): `Promise`\<[`RoomleConfiguratorApi`](../modules/roomle_configurator_api.md#roomleconfiguratorapi)\>

Method to create a new instance of a Roomle Configurator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuratorId` | `string` | the id which identifies your configurator, you will get this ID from your Roomle Contact Person |
| `container` | `HTMLElement` | DOM container in which the configurator should be placed |
| `initData` | [`UiInitData`](../interfaces/types.UiInitData.md) | settings with which the configurator should be started |

#### Returns

`Promise`\<[`RoomleConfiguratorApi`](../modules/roomle_configurator_api.md#roomleconfiguratorapi)\>

**`Deprecated`**

please use "createConfigurator"

___

### createConfigurator

▸ **createConfigurator**(`configuratorId`, `container`, `initData`): `Promise`\<[`RoomleConfiguratorApi`](../modules/roomle_configurator_api.md#roomleconfiguratorapi)\>

Method to create a new instance of a Roomle Configurator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuratorId` | `string` | the id which identifies your configurator, you will get this ID from your Roomle Contact Person |
| `container` | `HTMLElement` | DOM container in which the configurator should be placed |
| `initData` | [`UiInitData`](../interfaces/types.UiInitData.md) | settings with which the configurator should be started |

#### Returns

`Promise`\<[`RoomleConfiguratorApi`](../modules/roomle_configurator_api.md#roomleconfiguratorapi)\>

___

### createPlanner

▸ **createPlanner**(`configuratorId`, `container`, `initData`): `Promise`\<[`RoomlePlannerApi`](../modules/roomle_configurator_api.md#roomleplannerapi)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuratorId` | `string` |
| `container` | `HTMLElement` |
| `initData` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<[`RoomlePlannerApi`](../modules/roomle_configurator_api.md#roomleplannerapi)\>

___

### createViewer

▸ **createViewer**(`configuratorId`, `container`, `initData`): `Promise`\<[`RoomleViewerApi`](../modules/roomle_configurator_api.md#roomleviewerapi)\>

Method to create a new instance of a Roomle Viewer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuratorId` | `string` | the id which identifies your configurator, you will get this ID from your Roomle Contact Person |
| `container` | `HTMLElement` | DOM container in which the configurator should be placed |
| `initData` | [`UiInitData`](../interfaces/types.UiInitData.md) | settings with which the configurator should be started |

#### Returns

`Promise`\<[`RoomleViewerApi`](../modules/roomle_configurator_api.md#roomleviewerapi)\>
