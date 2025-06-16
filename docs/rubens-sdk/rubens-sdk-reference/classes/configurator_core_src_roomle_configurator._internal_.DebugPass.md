[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).DebugPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`DebugPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.DebugPass.md#constructor)

## Properties

- [debugOutput](configurator_core_src_roomle_configurator._internal_.DebugPass.md#debugoutput)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.DebugPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.DebugPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.DebugPass.md#renderpass)

# Constructors

## constructor

• **new DebugPass**(`renderPassManager`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## debugOutput

• **debugOutput**: `string` = `''`

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
