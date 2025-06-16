[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RenderPassManager

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#constructor)

## Properties

- [aoPassMapTexture](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#aopassmaptexture)
- [materialsNeedUpdate](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#materialsneedupdate)

## Accessors

- [aspect](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#aspect)
- [bakedGroundContactShadowPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#bakedgroundcontactshadowpass)
- [camera](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#camera)
- [cameraChanged](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#camerachanged)
- [debugOutput](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#debugoutput)
- [debugPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#debugpass)
- [gBufferRenderPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#gbufferrenderpass)
- [groundReflectionPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#groundreflectionpass)
- [noOStaticFrames](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#noostaticframes)
- [outlinePass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#outlinepass)
- [outlineRenderer](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#outlinerenderer)
- [passRenderer](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#passrenderer)
- [renderCacheManager](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#rendercachemanager)
- [scene](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#scene)
- [sceneRenderPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#scenerenderpass)
- [screenSpaceShadowMapPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#screenspaceshadowmappass)
- [shadowAndAoPass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#shadowandaopass)

## Methods

- [createOutlinePass](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#createoutlinepass)
- [dispose](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#dispose)
- [renderPasses](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#renderpasses)
- [setGroundVisibility](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#setgroundvisibility)
- [setSize](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#setsize)
- [updatePasses](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md#updatepasses)

# Constructors

## constructor

• **new RenderPassManager**(`sceneRender`)

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneRender` | [`SceneRenderer`](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md) |

# Properties

## aoPassMapTexture

• **aoPassMapTexture**: `Texture` = `null`

___

## materialsNeedUpdate

• **materialsNeedUpdate**: `boolean` = `true`

# Accessors

## aspect

• `get` **aspect**(): `number`

### Returns

`number`

___

## bakedGroundContactShadowPass

• `get` **bakedGroundContactShadowPass**(): [`BakedGroundContactShadowPass`](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md)

### Returns

[`BakedGroundContactShadowPass`](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md)

___

## camera

• `get` **camera**(): `Camera`

### Returns

`Camera`

___

## cameraChanged

• `get` **cameraChanged**(): `boolean`

### Returns

`boolean`

___

## debugOutput

• `get` **debugOutput**(): `string`

### Returns

`string`

___

## debugPass

• `get` **debugPass**(): [`DebugPass`](configurator_core_src_roomle_configurator._internal_.DebugPass.md)

### Returns

[`DebugPass`](configurator_core_src_roomle_configurator._internal_.DebugPass.md)

___

## gBufferRenderPass

• `get` **gBufferRenderPass**(): [`GBufferRenderPass`](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md)

### Returns

[`GBufferRenderPass`](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md)

___

## groundReflectionPass

• `get` **groundReflectionPass**(): [`GroundReflectionPass`](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md)

### Returns

[`GroundReflectionPass`](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md)

___

## noOStaticFrames

• `get` **noOStaticFrames**(): `number`

### Returns

`number`

___

## outlinePass

• `get` **outlinePass**(): [`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

### Returns

[`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

___

## outlineRenderer

• `get` **outlineRenderer**(): [`OutlineRenderer`](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md)

### Returns

[`OutlineRenderer`](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md)

___

## passRenderer

• `get` **passRenderer**(): [`PassRenderer`](configurator_core_src_roomle_configurator._internal_.PassRenderer.md)

### Returns

[`PassRenderer`](configurator_core_src_roomle_configurator._internal_.PassRenderer.md)

___

## renderCacheManager

• `get` **renderCacheManager**(): [`RenderCacheManager`](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md)

### Returns

[`RenderCacheManager`](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md)

___

## scene

• `get` **scene**(): `Scene`

### Returns

`Scene`

___

## sceneRenderPass

• `get` **sceneRenderPass**(): [`SceneRenderPass`](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md)

### Returns

[`SceneRenderPass`](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md)

___

## screenSpaceShadowMapPass

• `get` **screenSpaceShadowMapPass**(): [`ScreenSpaceShadowMapPass`](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md)

### Returns

[`ScreenSpaceShadowMapPass`](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md)

___

## shadowAndAoPass

• `get` **shadowAndAoPass**(): [`ShadowAndAoPass`](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md)

### Returns

[`ShadowAndAoPass`](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md)

# Methods

## createOutlinePass

▸ **createOutlinePass**(): [`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

### Returns

[`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## renderPasses

▸ **renderPasses**(`renderer`, `scene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |

### Returns

`void`

___

## setGroundVisibility

▸ **setGroundVisibility**(`visible`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

### Returns

`void`

___

## setSize

▸ **setSize**(`width`, `height`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

### Returns

`void`

___

## updatePasses

▸ **updatePasses**(`renderer`, `scene`, `camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |

### Returns

`void`
