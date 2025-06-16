[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / Connector

# Class: Connector

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).Connector

## Hierarchy

- **`Connector`**

  ↳ [`SdkConnectorConfigurator`](exposed_api._internal_.SdkConnectorConfigurator.md)

  ↳ [`SdkConnectorViewer`](exposed_api._internal_.SdkConnectorViewer.md)

  ↳ [`SdkConnectorPlanner`](exposed_api._internal_.SdkConnectorPlanner.md)

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.Connector.md#constructor)

### Properties

- [api](exposed_api._internal_.Connector.md#api)

### Methods

- [addCallback](exposed_api._internal_.Connector.md#addcallback)
- [init](exposed_api._internal_.Connector.md#init)

## Constructors

### constructor

• **new Connector**(): [`Connector`](exposed_api._internal_.Connector.md)

#### Returns

[`Connector`](exposed_api._internal_.Connector.md)

## Properties

### api

• `Readonly` `Abstract` **api**: `Promise`\<`any`\>

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
