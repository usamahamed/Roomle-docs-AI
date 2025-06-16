[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PoissonDenoiseRenderPass

# Implements

- [`DenoisePass`](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#constructor)

## Properties

- [\_inputTexture](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#_inputtexture)
- [depthTexture](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#depthtexture)
- [needsUpdate](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#needsupdate)
- [normalTexture](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#normaltexture)
- [parameters](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#parameters)

## Accessors

- [inputTexture](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#inputtexture)
- [texture](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#texture)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#render)
- [renderToTarget](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#rendertotarget)
- [setSize](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#setsize)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#updateparameters)
- [updateTextures](configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md#updatetextures)

# Constructors

## constructor

• **new PoissonDenoiseRenderPass**(`width`, `height`, `samples`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `samples` | `number` |
| `parameters?` | [`PoissonDenoiseParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.PoissonDenoiseParameters.md) |

# Properties

## \_inputTexture

• **\_inputTexture**: `Texture` = `null`

___

## depthTexture

• **depthTexture**: `Texture` = `null`

___

## needsUpdate

• **needsUpdate**: `boolean` = `true`

___

## normalTexture

• **normalTexture**: `Texture` = `null`

___

## parameters

• **parameters**: [`PoissonDenoisePassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.PoissonDenoisePassParameters.md)

# Accessors

## inputTexture

• `set` **inputTexture**(`texture`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

### Returns

`void`

### Implementation of

DenoisePass.inputTexture

___

## texture

• `get` **texture**(): `Texture`

### Returns

`Texture`

### Implementation of

DenoisePass.texture

# Methods

## dispose

▸ **dispose**(): `void`

### Returns

`void`

### Implementation of

[DenoisePass](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md).[dispose](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md#dispose)

___

## render

▸ **render**(`renderer`, `camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `camera` | `Camera` |

### Returns

`void`

### Implementation of

[DenoisePass](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md).[render](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md#render)

___

## renderToTarget

▸ **renderToTarget**(`renderer`, `camera`, `renderTarget`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `camera` | `Camera` |
| `renderTarget` | `WebGLRenderTarget`<`Texture`\> |

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

### Implementation of

[DenoisePass](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md).[setSize](../interfaces/configurator_core_src_roomle_configurator._internal_.DenoisePass.md#setsize)

___

## updateBounds

▸ **updateBounds**(`sceneClipBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneClipBox` | `Box3` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`PoissonDenoisePassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.PoissonDenoisePassParameters.md) |

### Returns

`void`

___

## updateTextures

▸ **updateTextures**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`PoissonDenoiseParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.PoissonDenoiseParameters.md) |

### Returns

`void`
