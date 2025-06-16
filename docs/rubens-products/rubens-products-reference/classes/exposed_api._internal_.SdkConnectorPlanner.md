[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / SdkConnectorPlanner

# Class: SdkConnectorPlanner

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).SdkConnectorPlanner

## Hierarchy

- [`Connector`](exposed_api._internal_.Connector.md)

  ↳ **`SdkConnectorPlanner`**

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.SdkConnectorPlanner.md#constructor)

### Accessors

- [api](exposed_api._internal_.SdkConnectorPlanner.md#api)

### Methods

- [addCallback](exposed_api._internal_.SdkConnectorPlanner.md#addcallback)
- [cancelSelection](exposed_api._internal_.SdkConnectorPlanner.md#cancelselection)
- [confirmRoom](exposed_api._internal_.SdkConnectorPlanner.md#confirmroom)
- [getObjects](exposed_api._internal_.SdkConnectorPlanner.md#getobjects)
- [init](exposed_api._internal_.SdkConnectorPlanner.md#init)
- [initPlanner](exposed_api._internal_.SdkConnectorPlanner.md#initplanner)
- [loadPlan](exposed_api._internal_.SdkConnectorPlanner.md#loadplan)
- [loadPlanBasedOnObjectId](exposed_api._internal_.SdkConnectorPlanner.md#loadplanbasedonobjectid)
- [onPlanElementChanged](exposed_api._internal_.SdkConnectorPlanner.md#onplanelementchanged)
- [onSelectionCancel](exposed_api._internal_.SdkConnectorPlanner.md#onselectioncancel)
- [onSelectionChange](exposed_api._internal_.SdkConnectorPlanner.md#onselectionchange)
- [preparePartListData](exposed_api._internal_.SdkConnectorPlanner.md#preparepartlistdata)
- [saveCurrentPlan](exposed_api._internal_.SdkConnectorPlanner.md#savecurrentplan)
- [savePlanToIdb](exposed_api._internal_.SdkConnectorPlanner.md#saveplantoidb)
- [switch2D](exposed_api._internal_.SdkConnectorPlanner.md#switch2d)
- [switch3D](exposed_api._internal_.SdkConnectorPlanner.md#switch3d)
- [switchFp](exposed_api._internal_.SdkConnectorPlanner.md#switchfp)
- [updateProductList](exposed_api._internal_.SdkConnectorPlanner.md#updateproductlist)

## Constructors

### constructor

• **new SdkConnectorPlanner**(`store`, `analytics?`, `eventEmitter?`): [`SdkConnectorPlanner`](exposed_api._internal_.SdkConnectorPlanner.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `store` | `Store`\<[`StoreState`](../interfaces/exposed_api._internal_.StoreState.md)\> | `undefined` |
| `analytics` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`Analytics`](../interfaces/exposed_api._internal_.Analytics.md)\> | `null` |
| `eventEmitter` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`default`](exposed_api._internal_.default.md)\> | `null` |

#### Returns

[`SdkConnectorPlanner`](exposed_api._internal_.SdkConnectorPlanner.md)

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

### cancelSelection

▸ **cancelSelection**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### confirmRoom

▸ **confirmRoom**(`switchTo2D`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `switchTo2D` | `boolean` |

#### Returns

`Promise`\<`void`\>

___

### getObjects

▸ **getObjects**(): `Promise`\<`UiPlanObject`[]\>

#### Returns

`Promise`\<`UiPlanObject`[]\>

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

### initPlanner

▸ **initPlanner**(`planner`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | `default` |

#### Returns

`Promise`\<`void`\>

___

### loadPlan

▸ **loadPlan**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

___

### loadPlanBasedOnObjectId

▸ **loadPlanBasedOnObjectId**(`id`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`number`\>

___

### onPlanElementChanged

▸ **onPlanElementChanged**(`changeType`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeType` | [`Enumify`](../modules/exposed_api._internal_.md#enumify)\<{}\> |

#### Returns

`Promise`\<`void`\>

___

### onSelectionCancel

▸ **onSelectionCancel**(`reason`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `CancelSelectionReasons` |

#### Returns

`Promise`\<`void`\>

___

### onSelectionChange

▸ **onSelectionChange**(`_mode`, `objectType`, `payload`, `payloadPromise`, `planElementViewModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mode` | `string` |
| `objectType` | [`Enumify`](../modules/exposed_api._internal_.md#enumify)\<\{ `CONFIGURATION`: ``"configuration"`` = 'configuration'; `DOOR`: ``"door"`` = 'door'; `FLOOR`: ``"floor"`` = 'floor'; `MEASURE`: ``"measure"`` = 'measure'; `STATIC`: ``"static"`` = 'static'; `UNKNOWN`: ``"unknown"`` = 'unknown'; `WALL`: ``"wall"`` = 'wall'; `WINDOW`: ``"window"`` = 'window' }\> |
| `payload` | `SelectionPayload` |
| `payloadPromise` | `Promise`\<`SelectionPayload`\> |
| `planElementViewModel` | `default` |

#### Returns

`void`

___

### preparePartListData

▸ **preparePartListData**(`selectedItemPayload`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectedItemPayload` | `SelectionPayload` |

#### Returns

`Promise`\<`void`\>

___

### saveCurrentPlan

▸ **saveCurrentPlan**(): `Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`RapiPlanSnapshotGetData` \| `RapiPlan`\>\>

#### Returns

`Promise`\<[`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`RapiPlanSnapshotGetData` \| `RapiPlan`\>\>

___

### savePlanToIdb

▸ **savePlanToIdb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### switch2D

▸ **switch2D**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### switch3D

▸ **switch3D**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### switchFp

▸ **switchFp**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### updateProductList

▸ **updateProductList**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>
