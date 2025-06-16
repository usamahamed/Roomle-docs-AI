[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / SdkConnectorViewer

# Class: SdkConnectorViewer

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).SdkConnectorViewer

## Hierarchy

- [`Connector`](exposed_api._internal_.Connector.md)

  ↳ **`SdkConnectorViewer`**

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.SdkConnectorViewer.md#constructor)

### Accessors

- [api](exposed_api._internal_.SdkConnectorViewer.md#api)

### Methods

- [addCallback](exposed_api._internal_.SdkConnectorViewer.md#addcallback)
- [init](exposed_api._internal_.SdkConnectorViewer.md#init)
- [initViewer](exposed_api._internal_.SdkConnectorViewer.md#initviewer)

## Constructors

### constructor

• **new SdkConnectorViewer**(`store`, `analytics?`): [`SdkConnectorViewer`](exposed_api._internal_.SdkConnectorViewer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `store` | `Store`\<[`StoreState`](../interfaces/exposed_api._internal_.StoreState.md)\> | `undefined` |
| `analytics` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`Analytics`](../interfaces/exposed_api._internal_.Analytics.md)\> | `null` |

#### Returns

[`SdkConnectorViewer`](exposed_api._internal_.SdkConnectorViewer.md)

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

### initViewer

▸ **initViewer**(`viewer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | `default` |

#### Returns

`void`
