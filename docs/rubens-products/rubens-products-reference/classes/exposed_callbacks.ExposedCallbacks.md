[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-callbacks](../modules/exposed_callbacks.md) / ExposedCallbacks

# Class: ExposedCallbacks

[exposed-callbacks](../modules/exposed_callbacks.md).ExposedCallbacks

## Table of contents

### Constructors

- [constructor](exposed_callbacks.ExposedCallbacks.md#constructor)

### Properties

- [onButtonClicked](exposed_callbacks.ExposedCallbacks.md#onbuttonclicked)

### Methods

- [onBackToWebsite](exposed_callbacks.ExposedCallbacks.md#onbacktowebsite)
- [onPartListUpdate](exposed_callbacks.ExposedCallbacks.md#onpartlistupdate)
- [onPlanElementAdded](exposed_callbacks.ExposedCallbacks.md#onplanelementadded)
- [onPlanElementChanged](exposed_callbacks.ExposedCallbacks.md#onplanelementchanged)
- [onPlanElementRemoved](exposed_callbacks.ExposedCallbacks.md#onplanelementremoved)
- [onPlanUpdate](exposed_callbacks.ExposedCallbacks.md#onplanupdate)
- [onRequestPlan](exposed_callbacks.ExposedCallbacks.md#onrequestplan)
- [onRequestProduct](exposed_callbacks.ExposedCallbacks.md#onrequestproduct)
- [onResize](exposed_callbacks.ExposedCallbacks.md#onresize)
- [onSaveDraft](exposed_callbacks.ExposedCallbacks.md#onsavedraft)
- [onTooltipClose](exposed_callbacks.ExposedCallbacks.md#ontooltipclose)
- [onUseFullPage](exposed_callbacks.ExposedCallbacks.md#onusefullpage)

## Constructors

### constructor

• **new ExposedCallbacks**(): [`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md)

#### Returns

[`ExposedCallbacks`](exposed_callbacks.ExposedCallbacks.md)

## Properties

### onButtonClicked

• **onButtonClicked**: \<K\>(`name`: `K`, `args?`: [`ButtonCallbackPayloads`](../modules/types.md#buttoncallbackpayloads)[`K`]) => `boolean` \| `void` \| `Promise`\<`boolean`\>

Gets called when a button in the UI is clicked

#### Type declaration

▸ \<`K`\>(`name`, `args?`): `boolean` \| `void` \| `Promise`\<`boolean`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`UI_BUTTON`](../enums/types.UI_BUTTON.md) |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `K` |  |
| `args?` | [`ButtonCallbackPayloads`](../modules/types.md#buttoncallbackpayloads)[`K`] | Optional arguments specific to the button that was clicked. This parameter is an object where each key is a UI_BUTTON and the value is the corresponding arguments for that button. |

##### Returns

`boolean` \| `void` \| `Promise`\<`boolean`\>

## Methods

### onBackToWebsite

▸ **onBackToWebsite**(): `void`

Gets called when the configuring is paused and the user leaves fullscreen configurator mode

#### Returns

`void`

___

### onPartListUpdate

▸ **onPartListUpdate**(`partList`, `hash`): `void`

fullList fullList (needed for price calculation) of the current configuration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partList` | `KernelPartList` | the part list with all details, grouped, etc |
| `hash` | `string` | - |

#### Returns

`void`

___

### onPlanElementAdded

▸ **onPlanElementAdded**(`addedObject`): `void`

Called when an element is added to the plan, not called when wall or construction element added

#### Parameters

| Name | Type |
| :------ | :------ |
| `addedObject` | `UiPlanObject` |

#### Returns

`void`

___

### onPlanElementChanged

▸ **onPlanElementChanged**(`changedObject`): `void`

Called when an element is changed in the plan, not called when wall or construction element changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `changedObject` | `UiPlanObject` |

#### Returns

`void`

___

### onPlanElementRemoved

▸ **onPlanElementRemoved**(`removedObject`): `void`

Called when an element is removed from the plan, not called when wall or construction element removed

#### Parameters

| Name | Type |
| :------ | :------ |
| `removedObject` | `UiPlanObject` |

#### Returns

`void`

___

### onPlanUpdate

▸ **onPlanUpdate**(`objects`): `void`

Gets called if a plan object gets added, changed or removed and returns all objects of the plan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects` | `UiPlanObject`[] | all objects in the plan |

#### Returns

`void`

___

### onRequestPlan

▸ **onRequestPlan**(`planId`, `image`, `items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planId` | `string` |
| `image` | `Base64Image` |
| `items` | `any`[] |

#### Returns

`void`

___

### onRequestProduct

▸ **onRequestProduct**(`configurationId`, `image`, `partList`, `price`, `labels`, `configuration`): `void`

Returns all necessary params when 'Request Product'/'Checkout' button has pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configurationId` | `string` | id of the current configuration |
| `image` | `Base64Image` | image of the current configuration |
| `partList` | `KernelPartList` | the part list with all details, grouped, etc |
| `price` | [`Price`](../interfaces/exposed_callbacks.Price.md) | price of the current configuration, either set via setPrice or from Roomle price service |
| `labels` | [`Labels`](../interfaces/exposed_callbacks.Labels.md) | the label of the catalog and the furniture system |
| `configuration` | `RapiConfigurationEnhanced` | the data returned from the Roomle backend |

#### Returns

`void`

___

### onResize

▸ **onResize**(`isDesktop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDesktop` | `boolean` |

#### Returns

`void`

___

### onSaveDraft

▸ **onSaveDraft**(`id`, `image`, `url`, `data`): `void`

called when triggerSaveDraft called

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | configuration id or plan id |
| `image` | `string` | image of the current configuration |
| `url` | `string` | generated url from save draft |
| `data` | `SaveDraftPayload` | object contains { type: 'plan' \| 'configuration', payload: configuration object or plan snapshot data} |

#### Returns

`void`

___

### onTooltipClose

▸ **onTooltipClose**(`tooltipName`): `void`

Gets triggered if a tooltip gets closed by controls button

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipName` | `string` |

#### Returns

`void`

___

### onUseFullPage

▸ **onUseFullPage**(): `void`

#### Returns

`void`
