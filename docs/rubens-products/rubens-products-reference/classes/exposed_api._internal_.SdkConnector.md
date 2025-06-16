[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / SdkConnector

# Class: SdkConnector

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).SdkConnector

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.SdkConnector.md#constructor)

### Accessors

- [configuratorApi](exposed_api._internal_.SdkConnector.md#configuratorapi)
- [configuratorConnector](exposed_api._internal_.SdkConnector.md#configuratorconnector)
- [hasPlanner](exposed_api._internal_.SdkConnector.md#hasplanner)
- [isE2E](exposed_api._internal_.SdkConnector.md#ise2e)
- [plannerApi](exposed_api._internal_.SdkConnector.md#plannerapi)
- [plannerConnector](exposed_api._internal_.SdkConnector.md#plannerconnector)
- [viewerApi](exposed_api._internal_.SdkConnector.md#viewerapi)
- [viewerConnector](exposed_api._internal_.SdkConnector.md#viewerconnector)

### Methods

- [addUiCallback](exposed_api._internal_.SdkConnector.md#adduicallback)
- [canvasElementReady](exposed_api._internal_.SdkConnector.md#canvaselementready)
- [createExposedApi](exposed_api._internal_.SdkConnector.md#createexposedapi)
- [getRapiAccess](exposed_api._internal_.SdkConnector.md#getrapiaccess)
- [getStorage](exposed_api._internal_.SdkConnector.md#getstorage)
- [getTenant](exposed_api._internal_.SdkConnector.md#gettenant)
- [giveGaConsent](exposed_api._internal_.SdkConnector.md#givegaconsent)
- [goBack](exposed_api._internal_.SdkConnector.md#goback)
- [hasActivePackage](exposed_api._internal_.SdkConnector.md#hasactivepackage)
- [initCanvasElement](exposed_api._internal_.SdkConnector.md#initcanvaselement)
- [initConfigurator](exposed_api._internal_.SdkConnector.md#initconfigurator)
- [initialized](exposed_api._internal_.SdkConnector.md#initialized)
- [isCorrectConfiguratorDomain](exposed_api._internal_.SdkConnector.md#iscorrectconfiguratordomain)
- [isIdAGlb](exposed_api._internal_.SdkConnector.md#isidaglb)
- [loadComponent](exposed_api._internal_.SdkConnector.md#loadcomponent)
- [loadConfigurableItem](exposed_api._internal_.SdkConnector.md#loadconfigurableitem)
- [loadConfiguration](exposed_api._internal_.SdkConnector.md#loadconfiguration)
- [loadConfigurationString](exposed_api._internal_.SdkConnector.md#loadconfigurationstring)
- [loadObject](exposed_api._internal_.SdkConnector.md#loadobject)
- [loadPlan](exposed_api._internal_.SdkConnector.md#loadplan)
- [loadSelectedPlanObject](exposed_api._internal_.SdkConnector.md#loadselectedplanobject)
- [loadStaticItem](exposed_api._internal_.SdkConnector.md#loadstaticitem)
- [preparePerspectiveImage](exposed_api._internal_.SdkConnector.md#prepareperspectiveimage)
- [removeUiCallback](exposed_api._internal_.SdkConnector.md#removeuicallback)
- [saveConfigToIdb](exposed_api._internal_.SdkConnector.md#saveconfigtoidb)
- [saveCurrentConfiguration](exposed_api._internal_.SdkConnector.md#savecurrentconfiguration)
- [saveCurrentObject](exposed_api._internal_.SdkConnector.md#savecurrentobject)
- [setMessageHandler](exposed_api._internal_.SdkConnector.md#setmessagehandler)
- [setParameter](exposed_api._internal_.SdkConnector.md#setparameter)
- [waitForLoad](exposed_api._internal_.SdkConnector.md#waitforload)

## Constructors

### constructor

• **new SdkConnector**(`sdkWrapper`, `store`, `analytics`, `embeddingCallbacks`, `eventEmitter`, `intl`, `libs`): [`SdkConnector`](exposed_api._internal_.SdkConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdkWrapper` | [`RoomleSdkWrapper`](exposed_api._internal_.RoomleSdkWrapper.md) |
| `store` | `Store`\<[`StoreState`](../interfaces/exposed_api._internal_.StoreState.md)\> |
| `analytics` | [`Analytics`](../interfaces/exposed_api._internal_.Analytics.md) |
| `embeddingCallbacks` | [`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md) |
| `eventEmitter` | [`default`](exposed_api._internal_.default.md) |
| `intl` | [`Translator`](../interfaces/exposed_api._internal_.Translator.md) |
| `libs` | [`Libs`](exposed_api._internal_.Libs.md) |

#### Returns

[`SdkConnector`](exposed_api._internal_.SdkConnector.md)

## Accessors

### configuratorApi

• `get` **configuratorApi**(): `Promise`\<`default`\>

#### Returns

`Promise`\<`default`\>

___

### configuratorConnector

• `get` **configuratorConnector**(): `Promise`\<[`SdkConnectorConfigurator`](exposed_api._internal_.SdkConnectorConfigurator.md)\>

#### Returns

`Promise`\<[`SdkConnectorConfigurator`](exposed_api._internal_.SdkConnectorConfigurator.md)\>

___

### hasPlanner

• `get` **hasPlanner**(): `boolean`

#### Returns

`boolean`

___

### isE2E

• `get` **isE2E**(): `boolean`

#### Returns

`boolean`

___

### plannerApi

• `get` **plannerApi**(): `Promise`\<`default`\>

#### Returns

`Promise`\<`default`\>

___

### plannerConnector

• `get` **plannerConnector**(): `Promise`\<[`SdkConnectorPlanner`](exposed_api._internal_.SdkConnectorPlanner.md)\>

#### Returns

`Promise`\<[`SdkConnectorPlanner`](exposed_api._internal_.SdkConnectorPlanner.md)\>

___

### viewerApi

• `get` **viewerApi**(): `Promise`\<`default`\>

#### Returns

`Promise`\<`default`\>

___

### viewerConnector

• `get` **viewerConnector**(): `Promise`\<[`SdkConnectorViewer`](exposed_api._internal_.SdkConnectorViewer.md)\>

#### Returns

`Promise`\<[`SdkConnectorViewer`](exposed_api._internal_.SdkConnectorViewer.md)\>

## Methods

### addUiCallback

▸ **addUiCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`UiCallbacks`](exposed_api._internal_.UiCallbacks.md) |

#### Returns

`void`

**`Deprecated`**

use .configuratorConnector.then((connector) => connector.addUiCallback(listener))

___

### canvasElementReady

▸ **canvasElementReady**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`void`

___

### createExposedApi

▸ **createExposedApi**(`module`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | [`SDK_MODULES`](../enums/exposed_api._internal_.SDK_MODULES.md) |

#### Returns

`Promise`\<`void`\>

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

### getTenant

▸ **getTenant**(): `Promise`\<`RapiTenant`\>

#### Returns

`Promise`\<`RapiTenant`\>

___

### giveGaConsent

▸ **giveGaConsent**(): `void`

#### Returns

`void`

___

### goBack

▸ **goBack**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### hasActivePackage

▸ **hasActivePackage**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

___

### initCanvasElement

▸ **initCanvasElement**(`module`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | [`SDK_MODULES`](../enums/exposed_api._internal_.SDK_MODULES.md) |

#### Returns

`Promise`\<`void`\>

___

### initConfigurator

▸ **initConfigurator**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### initialized

▸ **initialized**(): `void`

#### Returns

`void`

___

### isCorrectConfiguratorDomain

▸ **isCorrectConfiguratorDomain**(`configuratorId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuratorId` | `string` |

#### Returns

`Promise`\<`boolean`\>

___

### isIdAGlb

▸ **isIdAGlb**(`id`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`boolean`\>

___

### loadComponent

▸ **loadComponent**(`componentId`, `initData?`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `string` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### loadConfigurableItem

▸ **loadConfigurableItem**(`configurableItemId`, `initData?`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurableItemId` | `string` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### loadConfiguration

▸ **loadConfiguration**(`configurationId`, `initData?`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurationId` | `string` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### loadConfigurationString

▸ **loadConfigurationString**(`configurationString`, `initData?`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurationString` | `string` |
| `initData?` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### loadObject

▸ **loadObject**(`id`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

Load a object which can be one of the following:
- Component (use your component id and prefix it with 'component@', e.g. component@demoCatalogId:externalMeshes)
- Plan
- Static item (e.g. GLB)
- Configurable Item
- Configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### loadPlan

▸ **loadPlan**(`id`, `options?`): `Promise`\<\{ `objectRuntimeId`: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`number`\> ; `plan`: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`void`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`string`\> |
| `options` | `Object` |
| `options.doNotFinishLoading?` | `boolean` |
| `options.isObjectId?` | `boolean` |

#### Returns

`Promise`\<\{ `objectRuntimeId`: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`number`\> ; `plan`: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`void`\>  }\>

___

### loadSelectedPlanObject

▸ **loadSelectedPlanObject**(`shouldStartConfigure?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shouldStartConfigure` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

___

### loadStaticItem

▸ **loadStaticItem**(`id`): `Promise`\<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`string`\> |

#### Returns

`Promise`\<``null``\>

___

### preparePerspectiveImage

▸ **preparePerspectiveImage**(): `Promise`\<`Base64Image`\>

#### Returns

`Promise`\<`Base64Image`\>

___

### removeUiCallback

▸ **removeUiCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`UiCallbacks`](exposed_api._internal_.UiCallbacks.md) |

#### Returns

`void`

**`Deprecated`**

use configuratorConnector.then((connector) => connector.removeUiCallback(listener))

___

### saveConfigToIdb

▸ **saveConfigToIdb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### saveCurrentConfiguration

▸ **saveCurrentConfiguration**(): `Promise`\<`RapiConfigurationEnhanced`\>

#### Returns

`Promise`\<`RapiConfigurationEnhanced`\>

___

### saveCurrentObject

▸ **saveCurrentObject**(): `Promise`\<`RapiConfigurationEnhanced` \| `RapiPlanSnapshotGetData` \| `RapiPlan`\>

#### Returns

`Promise`\<`RapiConfigurationEnhanced` \| `RapiPlanSnapshotGetData` \| `RapiPlan`\>

___

### setMessageHandler

▸ **setMessageHandler**(`messageHandler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHandler` | [`MessageHandler`](exposed_api._internal_.MessageHandler.md) |

#### Returns

`void`

___

### setParameter

▸ **setParameter**(`parameter`, `value`, `isRaw?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parameter` | `KernelParameter` | `undefined` |
| `value` | `string` | `undefined` |
| `isRaw` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

___

### waitForLoad

▸ **waitForLoad**(): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>
