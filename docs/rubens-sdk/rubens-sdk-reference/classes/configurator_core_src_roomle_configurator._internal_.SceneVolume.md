[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).SceneVolume

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#constructor)

## Properties

- [bounds](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#bounds)
- [center](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#center)
- [maxSceneDistanceFrom0](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#maxscenedistancefrom0)
- [maxSceneDistanceFromCenter](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#maxscenedistancefromcenter)
- [size](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#size)

## Methods

- [copyFrom](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#copyfrom)
- [getNearAndFarForPerspectiveCamera](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#getnearandfarforperspectivecamera)
- [updateCameraViewVolumeFromBounds](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#updatecameraviewvolumefrombounds)
- [updateFromBox](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#updatefrombox)
- [updateFromObject](configurator_core_src_roomle_configurator._internal_.SceneVolume.md#updatefromobject)

# Constructors

## constructor

• **new SceneVolume**()

# Properties

## bounds

• **bounds**: `Box3`

___

## center

• **center**: `Vector3`

___

## maxSceneDistanceFrom0

• **maxSceneDistanceFrom0**: `number`

___

## maxSceneDistanceFromCenter

• **maxSceneDistanceFromCenter**: `number`

___

## size

• **size**: `Vector3`

# Methods

## copyFrom

▸ **copyFrom**(`other`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SceneVolume`](configurator_core_src_roomle_configurator._internal_.SceneVolume.md) |

### Returns

`void`

___

## getNearAndFarForPerspectiveCamera

▸ **getNearAndFarForPerspectiveCamera**(`cameraPosition`, `backScale?`): `number`[]

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cameraPosition` | `Vector3` | `undefined` |
| `backScale` | `number` | `1` |

### Returns

`number`[]

___

## updateCameraViewVolumeFromBounds

▸ **updateCameraViewVolumeFromBounds**(`camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `Camera` |

### Returns

`void`

___

## updateFromBox

▸ **updateFromBox**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

___

## updateFromObject

▸ **updateFromObject**(`sceneObject`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneObject` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`
