[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RenderPass

# Hierarchy

- `Pass`

  ↳ **`RenderPass`**

  ↳↳ [`SceneRenderPass`](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md)

  ↳↳ [`BakedGroundContactShadowPass`](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md)

  ↳↳ [`GBufferRenderPass`](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md)

  ↳↳ [`GroundReflectionPass`](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md)

  ↳↳ [`ScreenSpaceShadowMapPass`](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md)

  ↳↳ [`ShadowAndAoPass`](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md)

  ↳↳ [`DebugPass`](configurator_core_src_roomle_configurator._internal_.DebugPass.md)

  ↳↳ [`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

## Methods

- [render](configurator_core_src_roomle_configurator._internal_.RenderPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md#renderpass)

# Constructors

## constructor

• **new RenderPass**(`renderPassManager`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |

### Overrides

Pass.constructor

# Methods

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

### Overrides

Pass.render

___

## renderPass

▸ `Abstract` **renderPass**(`renderer`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |

### Returns

`void`
