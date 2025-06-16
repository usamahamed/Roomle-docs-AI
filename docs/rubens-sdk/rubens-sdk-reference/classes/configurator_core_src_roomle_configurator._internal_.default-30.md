[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-30.md#constructor)

## Methods

- [addToScene](configurator_core_src_roomle_configurator._internal_.default-30.md#addtoscene)
- [cleanUp](configurator_core_src_roomle_configurator._internal_.default-30.md#cleanup)
- [needsBounds](configurator_core_src_roomle_configurator._internal_.default-30.md#needsbounds)
- [needsCamera](configurator_core_src_roomle_configurator._internal_.default-30.md#needscamera)
- [reload](configurator_core_src_roomle_configurator._internal_.default-30.md#reload)
- [removeFromScene](configurator_core_src_roomle_configurator._internal_.default-30.md#removefromscene)
- [showGUI](configurator_core_src_roomle_configurator._internal_.default-30.md#showgui)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.default-30.md#updatebounds)
- [updateCamera](configurator_core_src_roomle_configurator._internal_.default-30.md#updatecamera)

# Constructors

## constructor

• **new default**(`scene`, `oldEnvironment?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `oldEnvironment?` | [`default`](configurator_core_src_roomle_configurator._internal_.default-30.md) |

# Methods

## addToScene

▸ `Abstract` **addToScene**(): `void`

### Returns

`void`

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

___

## needsBounds

▸ `Abstract` **needsBounds**(): `boolean`

### Returns

`boolean`

___

## needsCamera

▸ `Abstract` **needsCamera**(): `boolean`

### Returns

`boolean`

___

## reload

▸ **reload**(): `void`

### Returns

`void`

___

## removeFromScene

▸ `Abstract` **removeFromScene**(): `void`

### Returns

`void`

___

## showGUI

▸ `Abstract` **showGUI**(`updateCallback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `updateCallback` | () => `void` |

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`bounds`, `_force?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Vector3` |
| `_force?` | `boolean` |

### Returns

`void`

___

## updateCamera

▸ **updateCamera**(`_camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_camera` | `PerspectiveCamera` |

### Returns

`void`
