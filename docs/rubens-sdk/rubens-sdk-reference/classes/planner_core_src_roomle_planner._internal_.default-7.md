[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](planner_core_src_roomle_planner._internal_.default-10.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-7.md#constructor)

## Accessors

- [cameraControl](planner_core_src_roomle_planner._internal_.default-7.md#cameracontrol)

## Methods

- [externalApiResetCameraPosition](planner_core_src_roomle_planner._internal_.default-7.md#externalapiresetcameraposition)
- [removeCameraChangeListener](planner_core_src_roomle_planner._internal_.default-7.md#removecamerachangelistener)
- [resetCameraOnEnableWallDrawing](planner_core_src_roomle_planner._internal_.default-7.md#resetcameraonenablewalldrawing)
- [resetCameraOnPlanCompletelyLoaded](planner_core_src_roomle_planner._internal_.default-7.md#resetcameraonplancompletelyloaded)
- [resetCameraOnSwitchTo2d](planner_core_src_roomle_planner._internal_.default-7.md#resetcameraonswitchto2d)
- [setCameraChangeListener](planner_core_src_roomle_planner._internal_.default-7.md#setcamerachangelistener)
- [updateCameraOnBackToPlanner](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraonbacktoplanner)
- [updateCameraOnDrawWalls](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraondrawwalls)
- [updateCameraOnPlanElementDraggedOutsidePlanBounds](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraonplanelementdraggedoutsideplanbounds)
- [updateCameraOnPlanElementInsertedInsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraonplanelementinsertedinsidecurrentcameraview)
- [updateCameraOnPlanElementInsertedOutsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraonplanelementinsertedoutsidecurrentcameraview)
- [updateCameraOnPlanElementRemoved](planner_core_src_roomle_planner._internal_.default-7.md#updatecameraonplanelementremoved)

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

• `get` **cameraControl**(): [`default`](planner_core_src_roomle_planner._internal_.default-20.md)

### Returns

[`default`](planner_core_src_roomle_planner._internal_.default-20.md)

### Overrides

PlannerCameraBehaviour.cameraControl

# Methods

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

## resetCameraOnSwitchTo2d

▸ **resetCameraOnSwitchTo2d**(`bounds`): `void`

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

▸ **updateCameraOnPlanElementInsertedInsideCurrentCameraView**(`_bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | `Box3` |

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

▸ **updateCameraOnPlanElementRemoved**(`_bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | `Box3` |

### Returns

`void`

### Overrides

[default](planner_core_src_roomle_planner._internal_.default-10.md).[updateCameraOnPlanElementRemoved](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementremoved)
