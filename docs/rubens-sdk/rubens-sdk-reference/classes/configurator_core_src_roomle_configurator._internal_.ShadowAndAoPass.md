[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ShadowAndAoPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`ShadowAndAoPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#constructor)

## Properties

- [needsUpdate](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#needsupdate)
- [parameters](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#parameters)
- [renderToRenderTarget](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#rendertorendertarget)
- [shadowAndAoPassSettings](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#shadowandaopasssettings)
- [shadowTransform](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#shadowtransform)

## Accessors

- [aoAndSoftShadowRenderTarget](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#aoandsoftshadowrendertarget)
- [aoRenderPass](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#aorenderpass)
- [denoisePass](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#denoisepass)
- [denoiseRenderTargetTexture](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#denoiserendertargettexture)
- [fadeRenderTarget](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#faderendertarget)
- [finalTexture](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#finaltexture)
- [softShadowPass](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#softshadowpass)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#renderpass)
- [renderToTarget](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#rendertotarget)
- [setSize](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#setsize)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md#updateparameters)

# Constructors

## constructor

• **new ShadowAndAoPass**(`renderPassManager`, `width`, `height`, `samples`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `width` | `number` |
| `height` | `number` |
| `samples` | `number` |
| `parameters?` | [`ShadowAndAoPassConstructorParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassConstructorParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## needsUpdate

• **needsUpdate**: `boolean` = `true`

___

## parameters

• **parameters**: [`ShadowAndAoPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassParameters.md)

___

## renderToRenderTarget

• **renderToRenderTarget**: `boolean` = `false`

___

## shadowAndAoPassSettings

• **shadowAndAoPassSettings**: [`ShadowAndAoPassSettings`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassSettings.md)

___

## shadowTransform

▪ `Static` **shadowTransform**: `Matrix4`

# Accessors

## aoAndSoftShadowRenderTarget

• `get` **aoAndSoftShadowRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## aoRenderPass

• `get` **aoRenderPass**(): [`AORenderPass`](configurator_core_src_roomle_configurator._internal_.AORenderPass.md)

### Returns

[`AORenderPass`](configurator_core_src_roomle_configurator._internal_.AORenderPass.md)

___

## denoisePass

• `get` **denoisePass**(): [`DenoisePass`](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md)

### Returns

[`DenoisePass`](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md)

___

## denoiseRenderTargetTexture

• `get` **denoiseRenderTargetTexture**(): `Texture`

### Returns

`Texture`

___

## fadeRenderTarget

• `get` **fadeRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## finalTexture

• `get` **finalTexture**(): `Texture`

### Returns

`Texture`

___

## softShadowPass

• `get` **softShadowPass**(): [`PoissonDenoiseRenderPass`](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md)

### Returns

[`PoissonDenoiseRenderPass`](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md)

# Methods

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

## renderToTarget

▸ **renderToTarget**(`renderer`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |

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

### Overrides

RenderPass.setSize

___

## updateBounds

▸ **updateBounds**(`sceneBounds`, `_shadowAndAoScale`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneBounds` | [`SceneVolume`](configurator_core_src_roomle_configurator._internal_.SceneVolume.md) |
| `_shadowAndAoScale` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ShadowAndAoPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassParameters.md) |

### Returns

`void`
