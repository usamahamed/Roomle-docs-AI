[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).GroundReflectionPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`GroundReflectionPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#constructor)

## Properties

- [parameters](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#parameters)
- [reflectionFadeInScale](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#reflectionfadeinscale)

## Accessors

- [blurRenderTarget](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#blurrendertarget)
- [intensityRenderTarget](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#intensityrendertarget)
- [reflectionRenderTarget](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#reflectionrendertarget)

## Methods

- [blurReflection](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#blurreflection)
- [dispose](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#renderpass)
- [setSize](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#setsize)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md#updateparameters)

# Constructors

## constructor

• **new GroundReflectionPass**(`renderPassManager`, `width`, `height`, `samples`, `parameters`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `width` | `number` |
| `height` | `number` |
| `samples` | `number` |
| `parameters` | [`GroundReflectionConstructorParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GroundReflectionConstructorParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## parameters

• **parameters**: [`GroundReflectionParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GroundReflectionParameters.md)

___

## reflectionFadeInScale

• **reflectionFadeInScale**: `number` = `1`

# Accessors

## blurRenderTarget

• `get` **blurRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## intensityRenderTarget

• `get` **intensityRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

___

## reflectionRenderTarget

• `get` **reflectionRenderTarget**(): `WebGLRenderTarget`<`Texture`\>

### Returns

`WebGLRenderTarget`<`Texture`\>

# Methods

## blurReflection

▸ **blurReflection**(`renderer`, `camera`, `renderTargets`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `camera` | `Camera` |
| `renderTargets` | `WebGLRenderTarget`<`Texture`\>[] |

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

▸ **updateBounds**(`groundLevel`, `groundReflectionScale`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `groundLevel` | `number` |
| `groundReflectionScale` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GroundReflectionParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GroundReflectionParameters.md) |

### Returns

`void`
