[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](exposed_api.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [BUTTON\_ACTIONS](../enums/exposed_api._internal_.BUTTON_ACTIONS.md)
- [GA\_CATEGORY](../enums/exposed_api._internal_.GA_CATEGORY.md)
- [GA\_CUSTOM](../enums/exposed_api._internal_.GA_CUSTOM.md)
- [SDK\_MODULES](../enums/exposed_api._internal_.SDK_MODULES.md)

### Enumeration Members

- [EXPORT\_3D](exposed_api._internal_.md#export_3d)
- [LOAD\_PRODUCT](exposed_api._internal_.md#load_product)
- [OPEN\_AR](exposed_api._internal_.md#open_ar)
- [SAVE\_DRAFT](exposed_api._internal_.md#save_draft)
- [TUTORIALS](exposed_api._internal_.md#tutorials)

### Classes

- [Connector](../classes/exposed_api._internal_.Connector.md)
- [Libs](../classes/exposed_api._internal_.Libs.md)
- [MessageHandler](../classes/exposed_api._internal_.MessageHandler.md)
- [RoomleSdkWrapper](../classes/exposed_api._internal_.RoomleSdkWrapper.md)
- [SdkConnector](../classes/exposed_api._internal_.SdkConnector.md)
- [SdkConnectorConfigurator](../classes/exposed_api._internal_.SdkConnectorConfigurator.md)
- [SdkConnectorPlanner](../classes/exposed_api._internal_.SdkConnectorPlanner.md)
- [SdkConnectorViewer](../classes/exposed_api._internal_.SdkConnectorViewer.md)
- [UiCallbacks](../classes/exposed_api._internal_.UiCallbacks.md)
- [default](../classes/exposed_api._internal_.default.md)
- [default](../classes/exposed_api._internal_.default-1.md)
- [default](../classes/exposed_api._internal_.default-2.md)

### Interfaces

- [Analytics](../interfaces/exposed_api._internal_.Analytics.md)
- [CollectionViewComponentIcon](../interfaces/exposed_api._internal_.CollectionViewComponentIcon.md)
- [CollectionViewElement](../interfaces/exposed_api._internal_.CollectionViewElement.md)
- [CollectionViewUiState](../interfaces/exposed_api._internal_.CollectionViewUiState.md)
- [CommonUiState](../interfaces/exposed_api._internal_.CommonUiState.md)
- [CoreData](../interfaces/exposed_api._internal_.CoreData.md)
- [CoreState](../interfaces/exposed_api._internal_.CoreState.md)
- [EmbeddingCommand](../interfaces/exposed_api._internal_.EmbeddingCommand.md)
- [EmbeddingResponse](../interfaces/exposed_api._internal_.EmbeddingResponse.md)
- [GridViewElement](../interfaces/exposed_api._internal_.GridViewElement.md)
- [GridViewUiState](../interfaces/exposed_api._internal_.GridViewUiState.md)
- [GridViewVariantElement](../interfaces/exposed_api._internal_.GridViewVariantElement.md)
- [IncomingMessageBus](../interfaces/exposed_api._internal_.IncomingMessageBus.md)
- [KernelBoundsFormatted](../interfaces/exposed_api._internal_.KernelBoundsFormatted.md)
- [OutgoingMessageBus](../interfaces/exposed_api._internal_.OutgoingMessageBus.md)
- [OverlayState](../interfaces/exposed_api._internal_.OverlayState.md)
- [ParameterGroup](../interfaces/exposed_api._internal_.ParameterGroup.md)
- [PartlistResponse](../interfaces/exposed_api._internal_.PartlistResponse.md)
- [PlannerCoreData](../interfaces/exposed_api._internal_.PlannerCoreData.md)
- [PlannerUiState](../interfaces/exposed_api._internal_.PlannerUiState.md)
- [SampleRoom](../interfaces/exposed_api._internal_.SampleRoom.md)
- [SceneSelection](../interfaces/exposed_api._internal_.SceneSelection.md)
- [SharedUiState](../interfaces/exposed_api._internal_.SharedUiState.md)
- [StoreState](../interfaces/exposed_api._internal_.StoreState.md)
- [TabCategory](../interfaces/exposed_api._internal_.TabCategory.md)
- [Translator](../interfaces/exposed_api._internal_.Translator.md)
- [UIColorParameterValue](../interfaces/exposed_api._internal_.UIColorParameterValue.md)
- [UiPossibleChildTagWithKey](../interfaces/exposed_api._internal_.UiPossibleChildTagWithKey.md)
- [UiState](../interfaces/exposed_api._internal_.UiState.md)

### Type Aliases

- [CallbackApi](exposed_api._internal_.md#callbackapi)
- [CollectionViewElementPossibleTypes](exposed_api._internal_.md#collectionviewelementpossibletypes)
- [CollectionViewTypes](exposed_api._internal_.md#collectionviewtypes)
- [CommunicationSide](exposed_api._internal_.md#communicationside)
- [Enumify](exposed_api._internal_.md#enumify)
- [EventCallback](exposed_api._internal_.md#eventcallback)
- [EventMap](exposed_api._internal_.md#eventmap)
- [EventsDataMap](exposed_api._internal_.md#eventsdatamap)
- [ExposedOverlays](exposed_api._internal_.md#exposedoverlays)
- [GoogleAnalyticsCallback](exposed_api._internal_.md#googleanalyticscallback)
- [GridViewElementPossiblePayload](exposed_api._internal_.md#gridviewelementpossiblepayload)
- [LoadResponse](exposed_api._internal_.md#loadresponse)
- [MessageExecution](exposed_api._internal_.md#messageexecution)
- [MessageExecutionResult](exposed_api._internal_.md#messageexecutionresult)
- [Nullable](exposed_api._internal_.md#nullable)
- [OverlaysOpenState](exposed_api._internal_.md#overlaysopenstate)
- [RgbHexValue](exposed_api._internal_.md#rgbhexvalue)
- [RoomType](exposed_api._internal_.md#roomtype)
- [SampleMaterial](exposed_api._internal_.md#samplematerial)
- [SelectionType](exposed_api._internal_.md#selectiontype)
- [ViewTypeState](exposed_api._internal_.md#viewtypestate)
- [WallSide](exposed_api._internal_.md#wallside)

### Variables

- [COLLECTION\_VIEW\_TYPES](exposed_api._internal_.md#collection_view_types)
- [PLAN\_OBJECT\_TYPES](exposed_api._internal_.md#plan_object_types)

## Enumeration Members

### EXPORT\_3D

• **EXPORT\_3D**: ``5``

___

### LOAD\_PRODUCT

• **LOAD\_PRODUCT**: ``12``

___

### OPEN\_AR

• **OPEN\_AR**: ``4``

___

### SAVE\_DRAFT

• **SAVE\_DRAFT**: ``1``

___

### TUTORIALS

• **TUTORIALS**: ``11``

## Type Aliases

### CallbackApi

Ƭ **CallbackApi**: `ConfiguratorUiCallbacks` & `RoomlePlannerUiCallback`

___

### CollectionViewElementPossibleTypes

Ƭ **CollectionViewElementPossibleTypes**: `UiPossibleChildTag` \| `UiKernelParameter` \| `RapiTagForUi`

___

### CollectionViewTypes

Ƭ **CollectionViewTypes**: [`Enumify`](exposed_api._internal_.md#enumify)\<typeof [`COLLECTION_VIEW_TYPES`](exposed_api._internal_.md#collection_view_types)\>

___

### CommunicationSide

Ƭ **CommunicationSide**: ``"iframe"`` \| ``"website"``

___

### Enumify

Ƭ **Enumify**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

___

### EventCallback

Ƭ **EventCallback**\<`T`\>: (`payload`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

▸ (`payload`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `T` |

##### Returns

`void`

___

### EventMap

Ƭ **EventMap**\<`T`\>: `Map`\<`string`, `Set`\<[`EventCallback`](exposed_api._internal_.md#eventcallback)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### EventsDataMap

Ƭ **EventsDataMap**\<`T`\>: `Map`\<`string`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ExposedOverlays

Ƭ **ExposedOverlays**: typeof [`SAVE_DRAFT`](exposed_api._internal_.md#save_draft) \| typeof [`OPEN_AR`](exposed_api._internal_.md#open_ar) \| typeof [`EXPORT_3D`](exposed_api._internal_.md#export_3d) \| typeof [`TUTORIALS`](exposed_api._internal_.md#tutorials) \| typeof [`LOAD_PRODUCT`](exposed_api._internal_.md#load_product)

___

### GoogleAnalyticsCallback

Ƭ **GoogleAnalyticsCallback**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

___

### GridViewElementPossiblePayload

Ƭ **GridViewElementPossiblePayload**: `RapiMaterial` \| `KernelValue` \| `UiPossibleChild` \| `RapiItem` \| [`UIColorParameterValue`](../interfaces/exposed_api._internal_.UIColorParameterValue.md) \| [`SampleRoom`](../interfaces/exposed_api._internal_.SampleRoom.md) \| [`SampleMaterial`](exposed_api._internal_.md#samplematerial) \| `RapiComponent`

___

### LoadResponse

Ƭ **LoadResponse**: [`PartlistResponse`](../interfaces/exposed_api._internal_.PartlistResponse.md) \| `void`

___

### MessageExecution

Ƭ **MessageExecution**: (`message`: [`EmbeddingCommand`](../interfaces/exposed_api._internal_.EmbeddingCommand.md), `event`: `MessageEvent`) => [`MessageExecutionResult`](exposed_api._internal_.md#messageexecutionresult)

#### Type declaration

▸ (`message`, `event`): [`MessageExecutionResult`](exposed_api._internal_.md#messageexecutionresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`EmbeddingCommand`](../interfaces/exposed_api._internal_.EmbeddingCommand.md) |
| `event` | `MessageEvent` |

##### Returns

[`MessageExecutionResult`](exposed_api._internal_.md#messageexecutionresult)

___

### MessageExecutionResult

Ƭ **MessageExecutionResult**: `Promise`\<[`EmbeddingResponse`](../interfaces/exposed_api._internal_.EmbeddingResponse.md) \| `void`\> \| `undefined`

___

### Nullable

Ƭ **Nullable**\<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

___

### OverlaysOpenState

Ƭ **OverlaysOpenState**: `Object`

#### Index signature

▪ [key: `string`]: [`OverlayState`](../interfaces/exposed_api._internal_.OverlayState.md)

___

### RgbHexValue

Ƭ **RgbHexValue**: \`#$\{string}\`

___

### RoomType

Ƭ **RoomType**: ``"empty"`` \| ``"floor"`` \| ``"wall"`` \| ``"corner"`` \| ``"square"`` \| ``"L"``

___

### SampleMaterial

Ƭ **SampleMaterial**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__IS_SAMPLE_COLOR__` | ``1`` |
| `color` | [`RgbHexValue`](exposed_api._internal_.md#rgbhexvalue) |
| `id` | `string` |
| `label` | `string` |

___

### SelectionType

Ƭ **SelectionType**: [`Enumify`](exposed_api._internal_.md#enumify)\<typeof [`PLAN_OBJECT_TYPES`](exposed_api._internal_.md#plan_object_types)\>

___

### ViewTypeState

Ƭ **ViewTypeState**: ``"list"`` \| ``"small"`` \| ``"big"``

___

### WallSide

Ƭ **WallSide**: ``"left"`` \| ``"right"``

## Variables

### COLLECTION\_VIEW\_TYPES

• `Const` **COLLECTION\_VIEW\_TYPES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CONFIGURATOR_SIDE_BAR` | ``"configurator_side_bar"`` |
| `DUMMY` | ``"dummy_side_bar"`` |
| `FLOOR_SIDE_BAR` | ``"floor_side_bar"`` |
| `PLANNER_SIDE_BAR` | ``"planner_side_bar"`` |
| `PRODUCT_SETTINGS` | ``"product_settings"`` |
| `STATIC_COLLECTION_VIEW` | ``"static_collection_view"`` |
| `UNIT_TEST` | ``"test_state"`` |
| `WALL_SIDE_BAR` | ``"wall_side_bar"`` |

___

### PLAN\_OBJECT\_TYPES

• `Const` **PLAN\_OBJECT\_TYPES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CONFIGURATION` | ``"configuration"`` |
| `DOOR` | ``"door"`` |
| `FLOOR` | ``"floor"`` |
| `MEASURE` | ``"measure"`` |
| `STATIC` | ``"static"`` |
| `UNKNOWN` | ``"unknown"`` |
| `WALL` | ``"wall"`` |
| `WINDOW` | ``"window"`` |
