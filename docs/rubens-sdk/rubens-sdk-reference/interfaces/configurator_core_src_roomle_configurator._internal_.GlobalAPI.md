[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).GlobalAPI

# Implemented by

- [`default`](../classes/configurator_core_src_roomle_configurator.default.md)
- [`default`](../classes/glb_viewer_core_src_roomle_glb_viewer.default.md)
- [`default`](../classes/planner_core_src_roomle_planner.default.md)

# Table of contents

## Methods

- [getCameraOffset](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getcameraoffset)
- [getMain](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getmain)
- [getScene](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getscene)
- [getStorage](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getstorage)
- [getUnitFormatter](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getunitformatter)
- [setCameraOffset](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setcameraoffset)
- [setEnvironmentMap](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setenvironmentmap)
- [updateScene](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatescene)
- [updateSize](configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatesize)

# Methods

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md)

Gets the available screen space for our item
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Returns

[`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md)

___

## getMain

▸ **getMain**(): [`default`](../classes/configurator_core_src_configurator._internal_.default.md)

### Returns

[`default`](../classes/configurator_core_src_configurator._internal_.default.md)

___

## getScene

▸ **getScene**(): `Scene`

Returns the three.js scene (https://threejs.org/docs/#api/en/scenes/Scene)
WARNING: This is the actual scene (reference) and not a copy!

### Returns

`Scene`

___

## getStorage

▸ **getStorage**(): [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-1.md)

### Returns

[`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-1.md)

___

## getUnitFormatter

▸ **getUnitFormatter**(): [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default.md)

### Returns

[`default`](../classes/configurator_core_src_roomle_configurator._internal_.default.md)

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

Sets the available screen space for our item
Example 1: right 0.9 means 10% padding on the right side
Example 2: bottom 0.2 means 20% padding on the bottom side
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

___

## setEnvironmentMap

▸ **setEnvironmentMap**(`params`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`EnvMapParams`](configurator_core_src_roomle_configurator._internal_.EnvMapParams.md) |

### Returns

`void`

___

## updateScene

▸ **updateScene**(): `void`

Updates the scene (recalculating bounds) and restart rendering

### Returns

`void`

___

## updateSize

▸ **updateSize**(): `void`

### Returns

`void`
