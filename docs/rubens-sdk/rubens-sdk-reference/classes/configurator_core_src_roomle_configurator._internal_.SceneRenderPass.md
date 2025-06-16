[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).SceneRenderPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`SceneRenderPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#constructor)

## Properties

- [drawGround](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#drawground)
- [drawWithDebugMaterial](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#drawwithdebugmaterial)
- [grayDebugMaterial](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#graydebugmaterial)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md#renderpass)

# Constructors

## constructor

• **new SceneRenderPass**(`renderPassManager`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## drawGround

• **drawGround**: `boolean` = `true`

___

## drawWithDebugMaterial

• **drawWithDebugMaterial**: `boolean` = `false`

___

## grayDebugMaterial

• **grayDebugMaterial**: `MeshStandardMaterial`

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
