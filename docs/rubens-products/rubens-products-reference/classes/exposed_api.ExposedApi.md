[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / ExposedApi

# Class: ExposedApi

[exposed-api](../modules/exposed_api.md).ExposedApi

## Table of contents

### Constructors

- [constructor](exposed_api.ExposedApi.md#constructor)

### Accessors

- [callbacks](exposed_api.ExposedApi.md#callbacks)

### Methods

- [dragInObject](exposed_api.ExposedApi.md#draginobject)
- [dragInObjectEnd](exposed_api.ExposedApi.md#draginobjectend)
- [getPartListPdf](exposed_api.ExposedApi.md#getpartlistpdf)
- [giveGaConsent](exposed_api.ExposedApi.md#givegaconsent)
- [insertObject](exposed_api.ExposedApi.md#insertobject)
- [loadConfigurationString](exposed_api.ExposedApi.md#loadconfigurationstring)
- [loadObject](exposed_api.ExposedApi.md#loadobject)
- [pauseConfiguring](exposed_api.ExposedApi.md#pauseconfiguring)
- [setActiveParameterGroup](exposed_api.ExposedApi.md#setactiveparametergroup)
- [setPrice](exposed_api.ExposedApi.md#setprice)
- [startConfiguring](exposed_api.ExposedApi.md#startconfiguring)
- [triggerRequestPlan](exposed_api.ExposedApi.md#triggerrequestplan)
- [triggerRequestProduct](exposed_api.ExposedApi.md#triggerrequestproduct)
- [triggerSaveDraft](exposed_api.ExposedApi.md#triggersavedraft)
- [triggerShowOverlay](exposed_api.ExposedApi.md#triggershowoverlay)
- [updateDrag](exposed_api.ExposedApi.md#updatedrag)

## Constructors

### constructor

• **new ExposedApi**(`sdkConnector`, `messageHandler`, `sdk`, `exposedCallbacks`, `store`, `analytics`, `globalCallback`, `intl`, `libs`): [`ExposedApi`](exposed_api.ExposedApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdkConnector` | [`SdkConnector`](exposed_api._internal_.SdkConnector.md) |
| `messageHandler` | ``null`` \| [`MessageHandler`](exposed_api._internal_.MessageHandler.md) |
| `sdk` | `default` \| `default` \| `default` |
| `exposedCallbacks` | [`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md) |
| `store` | `Store`\<[`StoreState`](../interfaces/exposed_api._internal_.StoreState.md)\> |
| `analytics` | [`Analytics`](../interfaces/exposed_api._internal_.Analytics.md) |
| `globalCallback` | `GlobalCallback` |
| `intl` | [`Translator`](../interfaces/exposed_api._internal_.Translator.md) |
| `libs` | [`Libs`](exposed_api._internal_.Libs.md) |

#### Returns

[`ExposedApi`](exposed_api.ExposedApi.md)

## Accessors

### callbacks

• `get` **callbacks**(): [`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md)

#### Returns

[`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md)

## Methods

### dragInObject

▸ **dragInObject**(`id`, `x`, `y`, `type?`): `Promise`\<`number`\>

Use this to start a drag in of an object the coordinates x and y are relative
to the iframe. Meaning 0/0 is the top left corner of the iframe

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | Roomle ID of the object that should be inserted and dragged |
| `x` | `number` | `undefined` | coordinate of the drag event |
| `y` | `number` | `undefined` | coordinate of the drag event |
| `type` | `string` | `'rml_id'` | type of the id, default is 'rml_id' for example: usm:frame, 'rml_serialized' for serialized configurations like {"componentId": "usm:frame"} (currently not supported), 'tc_serialized' for serialized TecConfig Object, 'tc_id' for TecConfig ID (currently not supported) |

#### Returns

`Promise`\<`number`\>

number runtimeId of the dragged object

___

### dragInObjectEnd

▸ **dragInObjectEnd**(): `void`

Call this method when the drag ends

#### Returns

`void`

___

### getPartListPdf

▸ **getPartListPdf**(`planObject?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `planObject?` | `KernelPlanObject` |

#### Returns

`Promise`\<`any`\>

___

### giveGaConsent

▸ **giveGaConsent**(): `void`

call this method if consent of Google Analytics is given later and not already in init-data on boot

#### Returns

`void`

___

### insertObject

▸ **insertObject**(`id`, `position?`, `rotation?`): `Promise`\<`void`\>

Insert an object into the current MOC/planner scene
If no position or rotation is set then it will be placed automatically (without overlapping other objects) with rotation 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `position?` | `Position3` | as x (left/right), y (up/down) and z (front/back) |
| `rotation?` | `number` | in radians |

#### Returns

`Promise`\<`void`\>

___

### loadConfigurationString

▸ **loadConfigurationString**(`configurationString`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

call this method to load the configuration string you want into the 3d Scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configurationString` | `string` | string of the configuration, starts with `{` and ends with `}` |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

null if configuration can not be loaded

___

### loadObject

▸ **loadObject**(`id`): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

call this method to load the object you want into the 3d Scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | database ID of the object you want to load |

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`LoadResponse`](../modules/exposed_api._internal_.md#loadresponse)\>\>

___

### pauseConfiguring

▸ **pauseConfiguring**(): `void`

This method can be used to pause configuration
If the configurator was called in view-only mode
this method triggers the onBackToWebsite callback.
To know when the view-only mode is activated see the
description of the startConfiguring method

#### Returns

`void`

___

### setActiveParameterGroup

▸ **setActiveParameterGroup**(`groupKey`): `void`

Changes the currently selected parameter group to a parameter group containing the specified key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupKey` | `string` | parameterGroup key. |

#### Returns

`void`

___

### setPrice

▸ **setPrice**(`currencySymbol`, `price`): `void`

set the price for the UI to show
most likely needed when implementing your own price service

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencySymbol` | `string` |
| `price` | `number` |

#### Returns

`void`

___

### startConfiguring

▸ **startConfiguring**(): `void`

This method can be used to start configuration when
3d scene is only initialized as viewer first, the
configurator is automatically instantiated as viewer
if the container where the configurator is placed is
smaller than 1024px (this breakpoint could change in future)
so do not rely on this exact pixel setting

#### Returns

`void`

___

### triggerRequestPlan

▸ **triggerRequestPlan**(): `Promise`\<`void`\>

call this method to trigger the onRequestPlan event from
outside of the iframe. When this method is called the same
process is kicked off as if the user would have clicked on
request plan. Therefore you can just use the same callback
to react on the response

#### Returns

`Promise`\<`void`\>

___

### triggerRequestProduct

▸ **triggerRequestProduct**(): `Promise`\<`void`\>

call this method to trigger the onRequestProduct event from
outside of the iframe. When this method is called the same
process is kicked off as if the user would have clicked on
request product. Therefore you can just use the same callback
to react on the response

#### Returns

`Promise`\<`void`\>

___

### triggerSaveDraft

▸ **triggerSaveDraft**(`email?`): `Promise`\<`void`\>

call this method to trigger the onSaveDraft event from
outside of the iframe. When this method is called the same
process is kicked off as if the user would have clicked on
save draft in the bottom bar. Therefore you can just use the same callback
to react on the response

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `email` | `string` | `''` |

#### Returns

`Promise`\<`void`\>

___

### triggerShowOverlay

▸ **triggerShowOverlay**(`overlay`): `Promise`\<`void`\>

List of overlays that can be triggered from outside the iframe.
These overlays allow for controlled external triggering, ensuring
that only specific, predefined overlays can be displayed from external sources.

Each overlay in the set is identified by a unique number:

- SAVE_DRAFT: 1
- OPEN_AR: 4
- EXPORT_3D: 5
- TUTORIALS: 11
- LOAD_PRODUCT: 12 (only available in Room Designer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overlay` | [`ExposedOverlays`](../modules/exposed_api._internal_.md#exposedoverlays) |

#### Returns

`Promise`\<`void`\>

___

### updateDrag

▸ **updateDrag**(`x`, `y`): `void`

After you called dragInObject you can call this method to update the drag position
the coordinates x and y are relative to the iframe. Meaning 0/0 is the top left
corner of the iframe

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | coordinate of the drag event |
| `y` | `number` | coordinate of the drag event |

#### Returns

`void`

void
