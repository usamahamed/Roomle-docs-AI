[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / PlannerUiState

# Interface: PlannerUiState

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).PlannerUiState

## Hierarchy

- [`SharedUiState`](exposed_api._internal_.SharedUiState.md)

  ↳ **`PlannerUiState`**

## Table of contents

### Properties

- [actionMenuExpanded](exposed_api._internal_.PlannerUiState.md#actionmenuexpanded)
- [catalogTags](exposed_api._internal_.PlannerUiState.md#catalogtags)
- [currentSelectedMeasurementId](exposed_api._internal_.PlannerUiState.md#currentselectedmeasurementid)
- [drawingEnabled](exposed_api._internal_.PlannerUiState.md#drawingenabled)
- [freeDrawFirstRoom](exposed_api._internal_.PlannerUiState.md#freedrawfirstroom)
- [hasChosenASampleRoom](exposed_api._internal_.PlannerUiState.md#haschosenasampleroom)
- [hasWalls](exposed_api._internal_.PlannerUiState.md#haswalls)
- [interactionsExpanded](exposed_api._internal_.PlannerUiState.md#interactionsexpanded)
- [isCatalogSet](exposed_api._internal_.PlannerUiState.md#iscatalogset)
- [isConfiguringInRoom](exposed_api._internal_.PlannerUiState.md#isconfiguringinroom)
- [isCurrentlyDrawing](exposed_api._internal_.PlannerUiState.md#iscurrentlydrawing)
- [isDefiningRoom](exposed_api._internal_.PlannerUiState.md#isdefiningroom)
- [isDesktop](exposed_api._internal_.PlannerUiState.md#isdesktop)
- [isDrag](exposed_api._internal_.PlannerUiState.md#isdrag)
- [isFullscreen](exposed_api._internal_.PlannerUiState.md#isfullscreen)
- [isLandscape](exposed_api._internal_.PlannerUiState.md#islandscape)
- [lastRegularViewMode](exposed_api._internal_.PlannerUiState.md#lastregularviewmode)
- [lastWalls](exposed_api._internal_.PlannerUiState.md#lastwalls)
- [measurementUnit](exposed_api._internal_.PlannerUiState.md#measurementunit)
- [mobileExpanded](exposed_api._internal_.PlannerUiState.md#mobileexpanded)
- [multiSelectionElements](exposed_api._internal_.PlannerUiState.md#multiselectionelements)
- [selectedActions](exposed_api._internal_.PlannerUiState.md#selectedactions)
- [selectionElement](exposed_api._internal_.PlannerUiState.md#selectionelement)
- [selectionPayload](exposed_api._internal_.PlannerUiState.md#selectionpayload)
- [selectionType](exposed_api._internal_.PlannerUiState.md#selectiontype)
- [showDimensions](exposed_api._internal_.PlannerUiState.md#showdimensions)
- [showRoomConfirmBtn](exposed_api._internal_.PlannerUiState.md#showroomconfirmbtn)
- [showRotateElement](exposed_api._internal_.PlannerUiState.md#showrotateelement)
- [sidebar](exposed_api._internal_.PlannerUiState.md#sidebar)
- [topBarSelectedActions](exposed_api._internal_.PlannerUiState.md#topbarselectedactions)
- [wasDesktopBefore](exposed_api._internal_.PlannerUiState.md#wasdesktopbefore)

## Properties

### actionMenuExpanded

• **actionMenuExpanded**: `boolean`

___

### catalogTags

• **catalogTags**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`RapiTagForUi`[]\>

___

### currentSelectedMeasurementId

• **currentSelectedMeasurementId**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`number`\>

___

### drawingEnabled

• **drawingEnabled**: `boolean`

___

### freeDrawFirstRoom

• **freeDrawFirstRoom**: `boolean`

___

### hasChosenASampleRoom

• **hasChosenASampleRoom**: `boolean`

___

### hasWalls

• **hasWalls**: `boolean`

___

### interactionsExpanded

• **interactionsExpanded**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[interactionsExpanded](exposed_api._internal_.SharedUiState.md#interactionsexpanded)

___

### isCatalogSet

• **isCatalogSet**: `boolean`

___

### isConfiguringInRoom

• **isConfiguringInRoom**: `boolean`

___

### isCurrentlyDrawing

• **isCurrentlyDrawing**: `boolean`

___

### isDefiningRoom

• **isDefiningRoom**: `boolean`

___

### isDesktop

• **isDesktop**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isDesktop](exposed_api._internal_.SharedUiState.md#isdesktop)

___

### isDrag

• **isDrag**: `boolean`

___

### isFullscreen

• **isFullscreen**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isFullscreen](exposed_api._internal_.SharedUiState.md#isfullscreen)

___

### isLandscape

• **isLandscape**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[isLandscape](exposed_api._internal_.SharedUiState.md#islandscape)

___

### lastRegularViewMode

• **lastRegularViewMode**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`boolean`\>

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[lastRegularViewMode](exposed_api._internal_.SharedUiState.md#lastregularviewmode)

___

### lastWalls

• **lastWalls**: `ShallowRef`\<`KernelWall`[]\>

___

### measurementUnit

• **measurementUnit**: [`Enumify`](../modules/exposed_api._internal_.md#enumify)\<\{ `CM`: ``"cm"`` = 'cm'; `FEET`: ``"feet"`` = 'feet'; `INCH`: ``"inch"`` = 'inch'; `INCH_FEET`: ``"inchfeet"`` = 'inchfeet'; `MM`: ``"mm"`` = 'mm' }\>

___

### mobileExpanded

• **mobileExpanded**: `boolean`

___

### multiSelectionElements

• **multiSelectionElements**: `ShallowRef`\<`default`[]\>

___

### selectedActions

• **selectedActions**: [`BUTTON_ACTIONS`](../enums/exposed_api._internal_.BUTTON_ACTIONS.md)[]

___

### selectionElement

• **selectionElement**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`ShallowRef`\<`default`\>\>

___

### selectionPayload

• **selectionPayload**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<`SelectionPayload`\>

___

### selectionType

• **selectionType**: [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`SelectionType`](../modules/exposed_api._internal_.md#selectiontype)\>

___

### showDimensions

• **showDimensions**: `boolean`

___

### showRoomConfirmBtn

• **showRoomConfirmBtn**: `boolean`

___

### showRotateElement

• **showRotateElement**: `boolean`

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

### wasDesktopBefore

• **wasDesktopBefore**: `boolean`

#### Inherited from

[SharedUiState](exposed_api._internal_.SharedUiState.md).[wasDesktopBefore](exposed_api._internal_.SharedUiState.md#wasdesktopbefore)
