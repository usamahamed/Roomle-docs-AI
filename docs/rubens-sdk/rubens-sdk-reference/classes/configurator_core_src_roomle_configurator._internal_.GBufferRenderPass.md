[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).GBufferRenderPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`GBufferRenderPass`**

# Implements

- [`GBufferTextures`](../interfaces/configurator_core_src_roomle_configurator._internal_.GBufferTextures.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#constructor)

## Properties

- [copyToSeparateDepthBuffer](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#copytoseparatedepthbuffer)
- [drawGround](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#drawground)
- [floatRgbNormalAlphaDepth](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#floatrgbnormalalphadepth)
- [linearDepth](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#lineardepth)
- [needsUpdate](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#needsupdate)
- [parameters](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#parameters)

## Accessors

- [depthBufferTexture](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#depthbuffertexture)
- [depthNormalRenderTarget](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#depthnormalrendertarget)
- [gBufferTexture](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#gbuffertexture)
- [groundDepthWrite](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#grounddepthwrite)
- [isFloatGBufferWithRgbNormalAlphaDepth](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#isfloatgbufferwithrgbnormalalphadepth)
- [separateDeptRenderTarget](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#separatedeptrendertarget)
- [textureWithDepthValue](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#texturewithdepthvalue)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#renderpass)
- [setSize](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#setsize)
- [updateGBufferRenderMaterial](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md#updategbufferrendermaterial)

# Constructors

## constructor

• **new GBufferRenderPass**(`renderPassManager`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `parameters?` | [`GBufferRenderTargetsParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GBufferRenderTargetsParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## copyToSeparateDepthBuffer

• **copyToSeparateDepthBuffer**: `boolean` = `false`

___

## drawGround

• **drawGround**: `boolean` = `true`

___

## floatRgbNormalAlphaDepth

• `Readonly` **floatRgbNormalAlphaDepth**: `boolean` = `false`

___

## linearDepth

• `Readonly` **linearDepth**: `boolean` = `false`

___

## needsUpdate

• **needsUpdate**: `boolean` = `true`

___

## parameters

• **parameters**: [`GBufferParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GBufferParameters.md)

# Accessors

## depthBufferTexture

• `get` **depthBufferTexture**(): `Texture`

### Returns

`Texture`

### Implementation of

GBufferTextures.depthBufferTexture

___

## depthNormalRenderTarget

• `get` **depthNormalRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## gBufferTexture

• `get` **gBufferTexture**(): `Texture`

### Returns

`Texture`

### Implementation of

GBufferTextures.gBufferTexture

___

## groundDepthWrite

• `set` **groundDepthWrite**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

### Returns

`void`

___

## isFloatGBufferWithRgbNormalAlphaDepth

• `get` **isFloatGBufferWithRgbNormalAlphaDepth**(): `boolean`

### Returns

`boolean`

### Implementation of

GBufferTextures.isFloatGBufferWithRgbNormalAlphaDepth

___

## separateDeptRenderTarget

• `get` **separateDeptRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## textureWithDepthValue

• `get` **textureWithDepthValue**(): `Texture`

### Returns

`Texture`

### Implementation of

GBufferTextures.textureWithDepthValue

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

## updateGBufferRenderMaterial

▸ **updateGBufferRenderMaterial**(`camera`): `Material`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `Camera` |

### Returns

`Material`
