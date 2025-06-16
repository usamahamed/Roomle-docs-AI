[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / SdkConnectorConfigurator

# Class: SdkConnectorConfigurator

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).SdkConnectorConfigurator

## Hierarchy

- [`Connector`](exposed_api._internal_.Connector.md)

  ↳ **`SdkConnectorConfigurator`**

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.SdkConnectorConfigurator.md#constructor)

### Accessors

- [api](exposed_api._internal_.SdkConnectorConfigurator.md#api)

### Methods

- [addCallback](exposed_api._internal_.SdkConnectorConfigurator.md#addcallback)
- [addUiCallback](exposed_api._internal_.SdkConnectorConfigurator.md#adduicallback)
- [init](exposed_api._internal_.SdkConnectorConfigurator.md#init)
- [initConfigurator](exposed_api._internal_.SdkConnectorConfigurator.md#initconfigurator)
- [removeUiCallback](exposed_api._internal_.SdkConnectorConfigurator.md#removeuicallback)
- [saveConfigurationToIdb](exposed_api._internal_.SdkConnectorConfigurator.md#saveconfigurationtoidb)
- [setParameter](exposed_api._internal_.SdkConnectorConfigurator.md#setparameter)
- [setPrice](exposed_api._internal_.SdkConnectorConfigurator.md#setprice)

## Constructors

### constructor

• **new SdkConnectorConfigurator**(`store`, `analytics?`, `eventEmitter?`): [`SdkConnectorConfigurator`](exposed_api._internal_.SdkConnectorConfigurator.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `store` | `Store`\<[`StoreState`](../interfaces/exposed_api._internal_.StoreState.md)\> | `undefined` |
| `analytics` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`Analytics`](../interfaces/exposed_api._internal_.Analytics.md)\> | `null` |
| `eventEmitter` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`default`](exposed_api._internal_.default.md)\> | `null` |

#### Returns

[`SdkConnectorConfigurator`](exposed_api._internal_.SdkConnectorConfigurator.md)

#### Overrides

[Connector](exposed_api._internal_.Connector.md).[constructor](exposed_api._internal_.Connector.md#constructor)

## Accessors

### api

• `get` **api**(): `Promise`\<`default`\>

#### Returns

`Promise`\<`default`\>

#### Overrides

Connector.api

## Methods

### addCallback

▸ **addCallback**\<`K`\>(`key`, `fun`, `allowMultiple?`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"get"`` \| ``"onKernelIsReady"`` \| ``"onComponentPositionsUpdated"`` \| ``"onUpdateParameters"`` \| ``"onUpdatePossibleChildren"`` \| ``"onUpdatePrice"`` \| ``"onSelectionChange"`` \| ``"onSelectionCancel"`` \| ``"onPartListUpdate"`` \| ``"onBoundsUpdate"`` \| ``"onLoadConfiguration"`` \| ``"onConfigurationReady"`` \| ``"onOpenTag"`` \| ``"onOpenAddOns"`` \| ``"onClickOutside"`` \| ``"onNoDockingsAvailable"`` \| ``"onUiIntersectionChange"`` \| ``"onZoomChange"`` \| ``"onZoomToComponent"`` \| ``"onDimensionsVisibilityChange"`` \| ``"onErrorDueToOffline"`` \| ``"onError"`` \| ``"onElementDocked"`` \| ``"onDockingsPreviewRemoved"`` \| ``"onConfigurationHasChildren"`` \| ``"onTrackTiming"`` \| ``"onUserInitiatedDockDone"`` \| ``"onAddonPlusHover"`` \| ``"onAddonPlusHoverOff"`` \| ``"onAddonPlusShown"`` \| ``"onAddonPlusHidden"`` \| ``"onContentProblem"`` \| ``"onSyncStarted"`` \| ``"onSyncDone"`` \| ``"onOpenFloorMaterials"`` \| ``"onOpenPartList"`` \| ``"onComponentLoadError"`` \| ``"onConfigurationLoadError"`` \| ``"onChangeTypeChangeTag"`` \| ``"onRemoveTypeChangeTag"`` \| ``"onConfigurationLabelChange"`` \| ``"onMemoryCorruption"`` \| ``"onConfiguratorKernelIsReady"`` \| ``"onConfigurationSaved"`` \| ``"onCameraPositionChanges"`` \| ``"onHistoryChange"`` \| ``"onClickComponent"`` \| ``"onRequestExternalMesh"`` \| ``"onGeometryReady"`` \| ``"onGeometryNotReady"`` \| ``"_creator_"`` \| ``"mute"`` \| ``"unmute"`` \| ``"cameraStartsMoving"`` \| ``"onReadyForRender"`` \| ``"onItemsLoaded"`` \| ``"onCameraChanged"`` \| ``"onCameraIdle"`` \| ``"onTotalFloorAreaChanged"`` \| ``"onPlanInteractionHandlerCreated"`` \| ``"onPlannerKernelIsReady"`` \| ``"onPlanChanged"`` \| ``"onPlanElementChanged"`` \| ``"onCompletelyLoaded"`` \| ``"onRotationCancel"`` \| ``"onUpdateWallDimensions"`` \| ``"onUpdateMeasurementLineDimensions"`` \| ``"onUpdateConstructionElementsMeasurements"`` \| ``"onUpdateObjectMeasurements"`` \| ``"disableWallDimensions"`` \| ``"onUpdatePlanObjectPositions"`` \| ``"onDrawCancel"`` \| ``"onDrawingStateChanged"`` \| ``"onHandlerSwitchedPlans"`` \| ``"onDragElementStart"`` \| ``"onDragElementEnd"`` \| ``"onClickElement"`` \| ``"onMultiSelectionChange"`` \| ``"onSelectionModeChange"`` \| ``"onMeasurementLineStateChange"`` \| ``"onFloorPlanAreasUpdated"`` \| ``"onContextChanged"`` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `K` | `undefined` |
| `fun` | [`CallbackApi`](../modules/exposed_api._internal_.md#callbackapi)[`K`] | `undefined` |
| `allowMultiple` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Connector](exposed_api._internal_.Connector.md).[addCallback](exposed_api._internal_.Connector.md#addcallback)

___

### addUiCallback

▸ **addUiCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`UiCallbacks`](exposed_api._internal_.UiCallbacks.md) |

#### Returns

`void`

___

### init

▸ **init**(`sdkWrapper`, `element`, `initData`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdkWrapper` | [`RoomleSdkWrapper`](exposed_api._internal_.RoomleSdkWrapper.md) |
| `element` | `HTMLElement` |
| `initData` | [`UiInitData`](../interfaces/types.UiInitData.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[Connector](exposed_api._internal_.Connector.md).[init](exposed_api._internal_.Connector.md#init)

___

### initConfigurator

▸ **initConfigurator**(`configurator`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | `default` |

#### Returns

`Promise`\<`void`\>

___

### removeUiCallback

▸ **removeUiCallback**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`UiCallbacks`](exposed_api._internal_.UiCallbacks.md) |

#### Returns

`void`

___

### saveConfigurationToIdb

▸ **saveConfigurationToIdb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

### setPrice

▸ **setPrice**(`currencySymbol`, `price`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencySymbol` | `string` |
| `price` | `number` |

#### Returns

`void`
