[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-34.md)

  ↳ **`default`**

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-7.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-8.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-9.md)

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-10.md#constructor)

## Accessors

- [cameraControl](planner_core_src_roomle_planner._internal_.default-10.md#cameracontrol)

## Methods

- [externalApiResetCameraPosition](planner_core_src_roomle_planner._internal_.default-10.md#externalapiresetcameraposition)
- [removeCameraChangeListener](planner_core_src_roomle_planner._internal_.default-10.md#removecamerachangelistener)
- [resetCameraOnEnableWallDrawing](planner_core_src_roomle_planner._internal_.default-10.md#resetcameraonenablewalldrawing)
- [resetCameraOnPlanCompletelyLoaded](planner_core_src_roomle_planner._internal_.default-10.md#resetcameraonplancompletelyloaded)
- [setCameraChangeListener](planner_core_src_roomle_planner._internal_.default-10.md#setcamerachangelistener)
- [updateCameraOnBackToPlanner](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonbacktoplanner)
- [updateCameraOnDrawWalls](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraondrawwalls)
- [updateCameraOnPlanElementDraggedOutsidePlanBounds](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementdraggedoutsideplanbounds)
- [updateCameraOnPlanElementInsertedInsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementinsertedinsidecurrentcameraview)
- [updateCameraOnPlanElementInsertedOutsideCurrentCameraView](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementinsertedoutsidecurrentcameraview)
- [updateCameraOnPlanElementRemoved](planner_core_src_roomle_planner._internal_.default-10.md#updatecameraonplanelementremoved)

# Constructors

## constructor

• **new default**(`cameraControl`, `state`)

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraControl` | [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md) |
| `state` | [`default`](configurator_core_src_roomle_configurator._internal_.default-28.md) |

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-34.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-34.md#constructor)

# Accessors

## cameraControl

• `get` **cameraControl**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-47.md)

### Overrides

CameraBehaviour.cameraControl

# Methods

## externalApiResetCameraPosition

▸ `Abstract` **externalApiResetCameraPosition**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## removeCameraChangeListener

▸ **removeCameraChangeListener**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-34.md).[removeCameraChangeListener](configurator_core_src_roomle_configurator._internal_.default-34.md#removecamerachangelistener)

___

## resetCameraOnEnableWallDrawing

▸ `Abstract` **resetCameraOnEnableWallDrawing**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## resetCameraOnPlanCompletelyLoaded

▸ `Abstract` **resetCameraOnPlanCompletelyLoaded**(`bounds`): `void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-34.md).[setCameraChangeListener](configurator_core_src_roomle_configurator._internal_.default-34.md#setcamerachangelistener)

___

## updateCameraOnBackToPlanner

▸ `Abstract` **updateCameraOnBackToPlanner**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## updateCameraOnDrawWalls

▸ `Abstract` **updateCameraOnDrawWalls**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## updateCameraOnPlanElementDraggedOutsidePlanBounds

▸ `Abstract` **updateCameraOnPlanElementDraggedOutsidePlanBounds**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## updateCameraOnPlanElementInsertedInsideCurrentCameraView

▸ `Abstract` **updateCameraOnPlanElementInsertedInsideCurrentCameraView**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## updateCameraOnPlanElementInsertedOutsideCurrentCameraView

▸ `Abstract` **updateCameraOnPlanElementInsertedOutsideCurrentCameraView**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## updateCameraOnPlanElementRemoved

▸ `Abstract` **updateCameraOnPlanElementRemoved**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`
