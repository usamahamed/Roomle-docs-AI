[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).BakedGroundContactShadowPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`BakedGroundContactShadowPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#constructor)

## Properties

- [limitPlaneSize](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#limitplanesize)
- [needsUpdate](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#needsupdate)
- [noNeedOfUpdateCount](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#noneedofupdatecount)
- [parameters](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#parameters)
- [renderTarget](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#rendertarget)
- [shadowMapSize](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#shadowmapsize)
- [addTestMesh](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#addtestmesh)

## Accessors

- [shadowGroundPlane](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#shadowgroundplane)

## Methods

- [applyParameters](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#applyparameters)
- [dispose](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#renderpass)
- [setGroundVisibilityLayers](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#setgroundvisibilitylayers)
- [setScale](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#setscale)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#updateparameters)
- [updatePlaneAndShadowCamera](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md#updateplaneandshadowcamera)

# Constructors

## constructor

• **new BakedGroundContactShadowPass**(`renderPassManager`, `renderer`, `groundGroup`, `parameters`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `renderer` | `WebGLRenderer` |
| `groundGroup` | `Group`<`Object3DEventMap`\> |
| `parameters` | [`BakedGroundContactShadowConstructorParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowConstructorParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## limitPlaneSize

• **limitPlaneSize**: `boolean` = `true`

___

## needsUpdate

• **needsUpdate**: `boolean` = `true`

___

## noNeedOfUpdateCount

• **noNeedOfUpdateCount**: `number` = `0`

___

## parameters

• **parameters**: [`BakedGroundContactShadowParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowParameters.md)

___

## renderTarget

• `Readonly` **renderTarget**: `WebGLRenderTarget`<`Texture`\>

___

## shadowMapSize

• **shadowMapSize**: `number`

___

## addTestMesh

▪ `Static` **addTestMesh**: `boolean` = `false`

# Accessors

## shadowGroundPlane

• `get` **shadowGroundPlane**(): [`ShadowGroundPlane`](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md)

### Returns

[`ShadowGroundPlane`](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md)

# Methods

## applyParameters

▸ **applyParameters**(): `void`

### Returns

`void`

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

### Overrides

RenderPass.dispose

___

## render

▸ **render**(`renderer`, `_writeBuffer`, `_readBuffer`, `_deltaTime`, `_maskActive`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `_writeBuffer` | `WebGLRenderTarget`<`Texture`\> |
| `_readBuffer` | `WebGLRenderTarget`<`Texture`\> |
| `_deltaTime` | `number` |
| `_maskActive` | `boolean` |

### Returns

`void`

### Inherited from

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[render](configurator_core_src_roomle_configurator._internal_.RenderPass.md#render)

___

## renderPass

▸ **renderPass**(`renderer`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |

### Returns

`void`

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[renderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md#renderpass)

___

## setGroundVisibilityLayers

▸ **setGroundVisibilityLayers**(`visible`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

### Returns

`void`

___

## setScale

▸ **setScale**(`groundContactShadowScale`, `_shadowScale?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `groundContactShadowScale` | `number` |
| `_shadowScale?` | `number` |

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`sceneBounds`, `groundLevel?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneBounds` | [`SceneVolume`](configurator_core_src_roomle_configurator._internal_.SceneVolume.md) |
| `groundLevel?` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`BakedGroundContactShadowParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowParameters.md) |

### Returns

`void`

___

## updatePlaneAndShadowCamera

▸ **updatePlaneAndShadowCamera**(): `void`

### Returns

`void`
