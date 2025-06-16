[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-34.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-32.md#constructor)

## Accessors

- [cameraControl](configurator_core_src_roomle_configurator._internal_.default-32.md#cameracontrol)

## Methods

- [disablePanningOnShiftRelease](configurator_core_src_roomle_configurator._internal_.default-32.md#disablepanningonshiftrelease)
- [enablePanningOnShiftClick](configurator_core_src_roomle_configurator._internal_.default-32.md#enablepanningonshiftclick)
- [externalApiMoveCamera](configurator_core_src_roomle_configurator._internal_.default-32.md#externalapimovecamera)
- [externalApiResetCameraPosition](configurator_core_src_roomle_configurator._internal_.default-32.md#externalapiresetcameraposition)
- [externalApiZoomIn](configurator_core_src_roomle_configurator._internal_.default-32.md#externalapizoomin)
- [externalApiZoomOut](configurator_core_src_roomle_configurator._internal_.default-32.md#externalapizoomout)
- [removeCameraChangeListener](configurator_core_src_roomle_configurator._internal_.default-32.md#removecamerachangelistener)
- [resetCameraOnSceneClear](configurator_core_src_roomle_configurator._internal_.default-32.md#resetcameraonsceneclear)
- [resetCameraOnStartConfiguring](configurator_core_src_roomle_configurator._internal_.default-32.md#resetcameraonstartconfiguring)
- [resetCameraToStartOnConfigurationLoaded](configurator_core_src_roomle_configurator._internal_.default-32.md#resetcameratostartonconfigurationloaded)
- [resetCameraToStateOnCancelSelection](configurator_core_src_roomle_configurator._internal_.default-32.md#resetcameratostateoncancelselection)
- [setCameraChangeListener](configurator_core_src_roomle_configurator._internal_.default-32.md#setcamerachangelistener)
- [updateBoundsOnCancelDockings](configurator_core_src_roomle_configurator._internal_.default-32.md#updateboundsoncanceldockings)
- [updateBoundsOnPlanObjectUpdated](configurator_core_src_roomle_configurator._internal_.default-32.md#updateboundsonplanobjectupdated)
- [zoomToComponentOnConsecutiveClick](configurator_core_src_roomle_configurator._internal_.default-32.md#zoomtocomponentonconsecutiveclick)
- [zoomToFitBoundsAfterUserInitiatedPreviews](configurator_core_src_roomle_configurator._internal_.default-32.md#zoomtofitboundsafteruserinitiatedpreviews)

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

• `get` **cameraControl**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

### Overrides

CameraBehaviour.cameraControl

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

▸ **externalApiResetCameraPosition**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

___

## externalApiZoomIn

▸ **externalApiZoomIn**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

___

## externalApiZoomOut

▸ **externalApiZoomOut**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

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

## resetCameraOnSceneClear

▸ **resetCameraOnSceneClear**(): `void`

### Returns

`void`

___

## resetCameraOnStartConfiguring

▸ **resetCameraOnStartConfiguring**(`boundingBox`, `rotation?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `boundingBox` | `Box3` | `undefined` |
| `rotation` | `number` | `0` |

### Returns

`void`

___

## resetCameraToStartOnConfigurationLoaded

▸ **resetCameraToStartOnConfigurationLoaded**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

___

## resetCameraToStateOnCancelSelection

▸ **resetCameraToStateOnCancelSelection**(): `void`

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

## updateBoundsOnCancelDockings

▸ **updateBoundsOnCancelDockings**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

___

## updateBoundsOnPlanObjectUpdated

▸ **updateBoundsOnPlanObjectUpdated**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

___

## zoomToComponentOnConsecutiveClick

▸ **zoomToComponentOnConsecutiveClick**(`cameraParameters`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameters` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

___

## zoomToFitBoundsAfterUserInitiatedPreviews

▸ **zoomToFitBoundsAfterUserInitiatedPreviews**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`
