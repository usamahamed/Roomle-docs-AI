[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).BlurPass

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.BlurPass.md#constructor)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.BlurPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.BlurPass.md#render)

# Constructors

## constructor

• **new BlurPass**(`blurShaderParameters?`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `blurShaderParameters?` | `ShaderMaterialParameters` |
| `parameters?` | `Object` |
| `parameters.passRenderer?` | [`PassRenderer`](configurator_core_src_roomle_configurator._internal_.PassRenderer.md) |

# Methods

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## render

▸ **render**(`renderer`, `renderTargets`, `uvMin`, `uvMax`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `renderTargets` | `WebGLRenderTarget`<`Texture`\>[] |
| `uvMin` | `number`[] |
| `uvMax` | `number`[] |

### Returns

`void`
