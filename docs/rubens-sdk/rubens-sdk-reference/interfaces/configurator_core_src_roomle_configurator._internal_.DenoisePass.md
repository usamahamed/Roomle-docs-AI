[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).DenoisePass

# Implemented by

- [`PoissonDenoiseRenderPass`](../classes/configurator_core_src_roomle_configurator._internal_.PoissonDenoiseRenderPass.md)

# Table of contents

## Accessors

- [inputTexture](configurator_core_src_roomle_configurator._internal_.DenoisePass.md#inputtexture)
- [texture](configurator_core_src_roomle_configurator._internal_.DenoisePass.md#texture)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.DenoisePass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.DenoisePass.md#render)
- [setSize](configurator_core_src_roomle_configurator._internal_.DenoisePass.md#setsize)

# Accessors

## inputTexture

• `set` **inputTexture**(`texture`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

### Returns

`void`

___

## texture

• `get` **texture**(): `Texture`

### Returns

`Texture`

# Methods

## dispose

▸ **dispose**(): `void`

### Returns

`void`

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
