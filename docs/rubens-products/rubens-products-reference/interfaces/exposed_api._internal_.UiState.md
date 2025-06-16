[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / UiState

# Interface: UiState

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).UiState

## Hierarchy

- [`SharedUiState`](exposed_api._internal_.SharedUiState.md)

  ↳ **`UiState`**

## Table of contents

### Properties

- [activeAddon](exposed_api._internal_.UiState.md#activeaddon)
- [currentInteractionView](exposed_api._internal_.UiState.md#currentinteractionview)
- [currentSelection](exposed_api._internal_.UiState.md#currentselection)
- [currentVariants](exposed_api._internal_.UiState.md#currentvariants)
- [email](exposed_api._internal_.UiState.md#email)
- [firstTimeRoomView](exposed_api._internal_.UiState.md#firsttimeroomview)
- [initData](exposed_api._internal_.UiState.md#initdata)
- [initPlannerWithObjID](exposed_api._internal_.UiState.md#initplannerwithobjid)
- [interactionsExpanded](exposed_api._internal_.UiState.md#interactionsexpanded)
- [isConfigurator](exposed_api._internal_.UiState.md#isconfigurator)
- [isDesktop](exposed_api._internal_.UiState.md#isdesktop)
- [isExpandedForConfigure](exposed_api._internal_.UiState.md#isexpandedforconfigure)
- [isFullscreen](exposed_api._internal_.UiState.md#isfullscreen)
- [isInIframe](exposed_api._internal_.UiState.md#isiniframe)
- [isLandscape](exposed_api._internal_.UiState.md#islandscape)
- [isLoadingInProgress](exposed_api._internal_.UiState.md#isloadinginprogress)
- [isPlanner](exposed_api._internal_.UiState.md#isplanner)
- [isPlannerEditMode](exposed_api._internal_.UiState.md#isplannereditmode)
- [isShareLinkReady](exposed_api._internal_.UiState.md#issharelinkready)
- [isViewer](exposed_api._internal_.UiState.md#isviewer)
- [lastRegularViewMode](exposed_api._internal_.UiState.md#lastregularviewmode)
- [lastSelectedVariant](exposed_api._internal_.UiState.md#lastselectedvariant)
- [materialMultiSelect](exposed_api._internal_.UiState.md#materialmultiselect)
- [objPosOnPlanner](exposed_api._internal_.UiState.md#objposonplanner)
- [onlyShowAddons](exposed_api._internal_.UiState.md#onlyshowaddons)
- [overlays](exposed_api._internal_.UiState.md#overlays)
- [redoEnabled](exposed_api._internal_.UiState.md#redoenabled)
- [redoEnabledPlanner](exposed_api._internal_.UiState.md#redoenabledplanner)
- [selectedGroup](exposed_api._internal_.UiState.md#selectedgroup)
- [showVariants](exposed_api._internal_.UiState.md#showvariants)
- [sidebar](exposed_api._internal_.UiState.md#sidebar)
- [topBarSelectedActions](exposed_api._internal_.UiState.md#topbarselectedactions)
- [undoEnabled](exposed_api._internal_.UiState.md#undoenabled)
- [undoEnabledPlanner](exposed_api._internal_.UiState.md#undoenabledplanner)
- [userInitiatedSearch](exposed_api._internal_.UiState.md#userinitiatedsearch)
- [wallsDimensions](exposed_api._internal_.UiState.md#wallsdimensions)
- [wasDesktopBefore](exposed_api._internal_.UiState.md#wasdesktopbefore)

## Properties

### activeAddon

• **activeAddon**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`UiPossibleChild`\>

___

### currentInteractionView

• **currentInteractionView**: [`Enumify`](../modules/exposed_api._internal_.md#enumify)\<\{ `MATERIAL_INFO`: ``"material_info"`` = 'material\_info'; `PARTLIST`: ``"rubens_partlist"`` = 'rubens\_partlist'; `SIDEBAR`: ``"rubens_sidebar"`` = 'rubens\_sidebar' }\>

___

### currentSelection

• **currentSelection**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`SceneSelection`](exposed_api._internal_.SceneSelection.md)\>

___

### currentVariants

• **currentVariants**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`RapiTagForUi`\>

___

### email

• **email**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`string`\>

___

### firstTimeRoomView

• **firstTimeRoomView**: `boolean`

___

### initData

• **initData**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`UiInitData`](types.UiInitData.md)\>

___

### initPlannerWithObjID

• **initPlannerWithObjID**: `boolean`

___

### interactionsExpanded

• **interactionsExpanded**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[interactionsExpanded](exposed_api._internal_.SharedUiState.md#interactionsexpanded)

___

### isConfigurator

• **isConfigurator**: `boolean`

___

### isDesktop

• **isDesktop**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isDesktop](exposed_api._internal_.SharedUiState.md#isdesktop)

___

### isExpandedForConfigure

• **isExpandedForConfigure**: `boolean`

___

### isFullscreen

• **isFullscreen**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isFullscreen](exposed_api._internal_.SharedUiState.md#isfullscreen)

___

### isInIframe

• **isInIframe**: `boolean`

___

### isLandscape

• **isLandscape**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isLandscape](exposed_api._internal_.SharedUiState.md#islandscape)

___

### isLoadingInProgress

• **isLoadingInProgress**: `boolean`

___

### isPlanner

• **isPlanner**: `boolean`

___

### isPlannerEditMode

• **isPlannerEditMode**: `boolean`

___

### isShareLinkReady

• **isShareLinkReady**: `boolean`

___

### isViewer

• **isViewer**: `boolean`

___

### lastRegularViewMode

• **lastRegularViewMode**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`boolean`\>

#### Overrides

[SharedUiState](exposed_api._internal_.SharedUiState.md).[lastRegularViewMode](exposed_api._internal_.SharedUiState.md#lastregularviewmode)

___

### lastSelectedVariant

• **lastSelectedVariant**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`GridViewVariantElement`](exposed_api._internal_.GridViewVariantElement.md)\>

___

### materialMultiSelect

• **materialMultiSelect**: `boolean`

___

### objPosOnPlanner

• **objPosOnPlanner**: `PlanObjectPosition`[]

___

### onlyShowAddons

• **onlyShowAddons**: `boolean`

___

### overlays

• **overlays**: [`OverlaysOpenState`](../modules/exposed_api._internal_.md#overlaysopenstate)

___

### redoEnabled

• **redoEnabled**: `boolean`

___

### redoEnabledPlanner

• **redoEnabledPlanner**: `boolean`

___

### selectedGroup

• **selectedGroup**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`ParameterGroup`](exposed_api._internal_.ParameterGroup.md)\>

___

### showVariants

• **showVariants**: `boolean`

___

### sidebar

• **sidebar**: [`CollectionViewUiState`](exposed_api._internal_.CollectionViewUiState.md)

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[sidebar](exposed_api._internal_.SharedUiState.md#sidebar)

___

### topBarSelectedActions

• **topBarSelectedActions**: [`BUTTON_ACTIONS`](../enums/exposed_api._internal_.BUTTON_ACTIONS.md)[]

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[topBarSelectedActions](exposed_api._internal_.SharedUiState.md#topbarselectedactions)

___

### undoEnabled

• **undoEnabled**: `boolean`

___

### undoEnabledPlanner

• **undoEnabledPlanner**: `boolean`

___

### userInitiatedSearch

• **userInitiatedSearch**: `boolean`

___

### wallsDimensions

• **wallsDimensions**: `WallDimensionTransferable`[]

___

### wasDesktopBefore

• **wasDesktopBefore**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[wasDesktopBefore](exposed_api._internal_.SharedUiState.md#wasdesktopbefore)
