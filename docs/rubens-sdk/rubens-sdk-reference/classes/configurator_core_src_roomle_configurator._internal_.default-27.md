[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-27.md#constructor)

## Methods

- [preparePerspectiveImage](configurator_core_src_roomle_configurator._internal_.default-27.md#prepareperspectiveimage)
- [prepareTopImage](configurator_core_src_roomle_configurator._internal_.default-27.md#preparetopimage)
- [renderPerspectiveImage](configurator_core_src_roomle_configurator._internal_.default-27.md#renderperspectiveimage)
- [switchToConfiguratorSettings](configurator_core_src_roomle_configurator._internal_.default-27.md#switchtoconfiguratorsettings)
- [switchToPlannerSettings](configurator_core_src_roomle_configurator._internal_.default-27.md#switchtoplannersettings)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.default-27.md#updatebounds)
- [getCameraTargetForBBox](configurator_core_src_roomle_configurator._internal_.default-27.md#getcameratargetforbbox)
- [placeCameraForPerspectiveImage](configurator_core_src_roomle_configurator._internal_.default-27.md#placecameraforperspectiveimage)

# Constructors

## constructor

• **new default**()

# Methods

## preparePerspectiveImage

▸ **preparePerspectiveImage**(`scene`, `uiScene`, `camera`, `cameraTarget`, `options?`, `objectRotation?`, `onBeforeRender?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scene` | `Scene` | `undefined` |
| `uiScene` | `Scene` | `undefined` |
| `camera` | `PerspectiveCamera` | `undefined` |
| `cameraTarget` | [`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md) | `undefined` |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) | `{}` |
| `objectRotation` | `number` | `0` |
| `onBeforeRender?` | (`camera`: `Camera`) => `void` | `undefined` |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## prepareTopImage

▸ **prepareTopImage**(`scene`, `uiScene`, `cameraTarget`, `options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `uiScene` | `Scene` |
| `cameraTarget` | [`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md) |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## renderPerspectiveImage

▸ **renderPerspectiveImage**(`scene`, `camera`, `cameraTarget`, `size?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `camera` | `PerspectiveCamera` |
| `cameraTarget` | [`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md) |
| `size?` | `number` |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## switchToConfiguratorSettings

▸ **switchToConfiguratorSettings**(): `void`

### Returns

`void`

___

## switchToPlannerSettings

▸ **switchToPlannerSettings**(): `void`

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

___

## getCameraTargetForBBox

▸ `Static` **getCameraTargetForBBox**(`bbox`, `spacing?`): [`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md)

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bbox` | `Box3` | `undefined` |
| `spacing` | `number` | `0` |

### Returns

[`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md)

___

## placeCameraForPerspectiveImage

▸ `Static` **placeCameraForPerspectiveImage**(`camera`, `cameraTarget`, `angleX`, `angleY`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |
| `cameraTarget` | [`CameraTarget`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraTarget.md) |
| `angleX` | `number` |
| `angleY` | `number` |

### Returns

`void`
