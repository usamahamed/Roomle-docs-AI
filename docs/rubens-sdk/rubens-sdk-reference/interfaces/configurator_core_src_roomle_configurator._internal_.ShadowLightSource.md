[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ShadowLightSource

# Table of contents

## Methods

- [\_updateShadowType](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#_updateshadowtype)
- [addTo](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#addto)
- [dispose](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#dispose)
- [finishRenderShadow](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#finishrendershadow)
- [forceShadowUpdate](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#forceshadowupdate)
- [getOriginalLight](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#getoriginallight)
- [getPosition](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#getposition)
- [getShadowLight](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#getshadowlight)
- [prepareRenderShadow](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#preparerendershadow)
- [removeFrom](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#removefrom)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#updatebounds)
- [updatePositionAndTarget](configurator_core_src_roomle_configurator._internal_.ShadowLightSource.md#updatepositionandtarget)

# Methods

## \_updateShadowType

▸ **_updateShadowType**(`typeParameters`, `shadowScale`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `typeParameters` | [`ShadowTypeParameters`](configurator_core_src_roomle_configurator._internal_.ShadowTypeParameters.md) |
| `shadowScale` | `number` |

### Returns

`void`

___

## addTo

▸ **addTo**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## finishRenderShadow

▸ **finishRenderShadow**(): `void`

### Returns

`void`

___

## forceShadowUpdate

▸ **forceShadowUpdate**(): `void`

### Returns

`void`

___

## getOriginalLight

▸ **getOriginalLight**(): `Light`<`LightShadow`<`Camera`\>\>

### Returns

`Light`<`LightShadow`<`Camera`\>\>

___

## getPosition

▸ **getPosition**(): `Vector3`

### Returns

`Vector3`

___

## getShadowLight

▸ **getShadowLight**(): `Light`<`LightShadow`<`Camera`\>\>

### Returns

`Light`<`LightShadow`<`Camera`\>\>

___

## prepareRenderShadow

▸ **prepareRenderShadow**(): [`ActiveShadowLight`](configurator_core_src_roomle_configurator._internal_.ActiveShadowLight.md)[]

### Returns

[`ActiveShadowLight`](configurator_core_src_roomle_configurator._internal_.ActiveShadowLight.md)[]

___

## removeFrom

▸ **removeFrom**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`sceneBounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneBounds` | [`SceneVolume`](../classes/configurator_core_src_roomle_configurator._internal_.SceneVolume.md) |

### Returns

`void`

___

## updatePositionAndTarget

▸ **updatePositionAndTarget**(): `void`

### Returns

`void`
