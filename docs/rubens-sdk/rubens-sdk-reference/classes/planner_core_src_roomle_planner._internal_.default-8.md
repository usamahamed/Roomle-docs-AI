[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](planner_core_src_roomle_planner._internal_.default-10.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-8.md#constructor)

## Accessors

- [cameraControl](planner_core_src_roomle_planner._internal_.default-8.md#cameracontrol)

## Methods

- [disablePanningOnShiftRelease](planner_core_src_roomle_planner._internal_.default-8.md#disablepanningonshiftrelease)
- [enablePanningOnShiftClick](planner_core_src_roomle_planner._internal_.default-8.md#enablepanningonshiftclick)
- [externalApiMoveCamera](planner_core_src_roomle_planner._internal_.default-8.md#externalapimovecamera)
- [externalApiResetCameraPosition](planner_core_src_roomle_planner._internal_.default-8.md#externalapiresetcameraposition)
- [removeCameraChangeListener](planner_core_src_roomle_planner._internal_.default-8.md#removecamerachangelistener)
- [resetCameraOnEnableWallDrawing](planner_core_src_roomle_planner._internal_.default-8.md#resetcameraonenablewalldrawing)
- [resetCameraOnPlanCompletelyLoaded](planner_core_src_roomle_planner._internal_.default-8.md#resetcameraonplancompletelyloaded)
- [resetCameraOnSwitchTo3d](planner_core_src_roomle_planner._internal_.default-8.md#resetcameraonswitchto3d)
- [setCameraChangeListener](planner_core_src_roomle_planner._internal_.default-8.md#setcamerachangelistener)
- [updateCameraOnBackToPlanner](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraonbacktoplanner)
- [updateCameraOnDrawWalls](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraondrawwalls)
- [updateCameraOnPlanElementDraggedOutsidePlanBounds](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraonplanelementdraggedoutsideplanbounds)
- [updateCameraOnPlanElementInsertedInsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraonplanelementinsertedinsidecurrentcameraview)
- [updateCameraOnPlanElementInsertedOutsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraonplanelementinsertedoutsidecurrentcameraview)
- [updateCameraOnPlanElementRemoved](planner_core_src_roomle_planner._internal_.default-8.md#updatecameraonplanelementremoved)

# Constructors

## constructor

• **new default**(`cameraControl`, `state`)

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraControl` | [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md) |
| `state` | [`default`](configurator_core_src_roomle_configurator._internal_.default-28.md) |

### Inherited from

[default](planner_core_src_roomle_planner._internal_.default-10.md).[constructor](planner_core_src_roomle_planner._internal_.default-10.md#constructor)

# Accessors

## cameraControl

• `get` **cameraControl**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

### Overrides

PlannerCameraBehaviour.cameraControl

# Methods

## disablePanningOnShiftRelease

▸ **disablePanningOnShiftRelease**(): `void`

### Returns

`void`

___

## enablePanningOnShiftClick

▸ **enablePanningOnShiftClick**(): `void`

### Returns

`void`

___

## externalApiMoveCamera

▸ **externalApiMoveCamera**(`cameraParameter`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameter` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

___

## externalApiResetCameraPosition

▸ **externalApiResetCameraPosition**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[externalApiResetCameraPosition](planner_core_src_roomle_planner._internal_.default-10.md#externalapiresetcameraposition)

___

## removeCameraChangeListener

▸ **removeCameraChangeListener**(): `void`

### Returns

`void`

### Inherited from

[default](planner_core_src_roomle_planner._internal_.default-10.md).[removeCameraChangeListener](planner_core_src_roomle_planner._internal_.default-10.md#removecamerachangelistener)

___

## resetCameraOnEnableWallDrawing

▸ **resetCameraOnEnableWallDrawing**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[resetCameraOnEnableWallDrawing](planner_core_src_roomle_planner._internal_.default-10.md#resetcameraonenablewalldrawing)

___

## resetCameraOnPlanCompletelyLoaded

▸ **resetCameraOnPlanCompletelyLoaded**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[resetCameraOnPlanCompletelyLoaded](planner_core_src_roomle_planner._internal_.default-10.md#resetcameraonplancompletelyloaded)

___

## resetCameraOnSwitchTo3d

▸ **resetCameraOnSwitchTo3d**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## setCameraChangeListener

▸ **setCameraChangeListener**(`callback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

### Returns

`void`

### Inherited from

[default](planner_core_src_roomle_planner._internal_.default-10.md).[setCameraChangeListener](planner_core_src_roomle_planner._internal_.default-10.md#setcamerachangelistener)

___

## updateCameraOnBackToPlanner

▸ **updateCameraOnBackToPlanner**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnBackToPlanner](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonbacktoplanner)

___

## updateCameraOnDrawWalls

▸ **updateCameraOnDrawWalls**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnDrawWalls](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraondrawwalls)

___

## updateCameraOnPlanElementDraggedOutsidePlanBounds

▸ **updateCameraOnPlanElementDraggedOutsidePlanBounds**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnPlanElementDraggedOutsidePlanBounds](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementdraggedoutsideplanbounds)

___

## updateCameraOnPlanElementInsertedInsideCurrentCameraView

▸ **updateCameraOnPlanElementInsertedInsideCurrentCameraView**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnPlanElementInsertedInsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementinsertedinsidecurrentcameraview)

___

## updateCameraOnPlanElementInsertedOutsideCurrentCameraView

▸ **updateCameraOnPlanElementInsertedOutsideCurrentCameraView**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnPlanElementInsertedOutsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementinsertedoutsidecurrentcameraview)

___

## updateCameraOnPlanElementRemoved

▸ **updateCameraOnPlanElementRemoved**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnPlanElementRemoved](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementremoved)
