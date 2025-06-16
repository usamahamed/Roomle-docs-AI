[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PassRenderer

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.PassRenderer.md#constructor)

## Methods

- [clear](configurator_core_src_roomle_configurator._internal_.PassRenderer.md#clear)
- [render](configurator_core_src_roomle_configurator._internal_.PassRenderer.md#render)
- [renderScreenSpace](configurator_core_src_roomle_configurator._internal_.PassRenderer.md#renderscreenspace)
- [renderWithOverrideMaterial](configurator_core_src_roomle_configurator._internal_.PassRenderer.md#renderwithoverridematerial)

# Constructors

## constructor

• **new PassRenderer**()

# Methods

## clear

▸ **clear**(`renderer`, `renderTarget`, `clearColor?`, `clearAlpha?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `renderTarget` | `WebGLRenderTarget`<`Texture`\> |
| `clearColor?` | `ColorRepresentation` |
| `clearAlpha?` | `number` |

### Returns

`void`

___

## render

▸ **render**(`renderer`, `scene`, `camera`, `renderTarget`, `clearColor?`, `clearAlpha?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `renderTarget` | `WebGLRenderTarget`<`Texture`\> |
| `clearColor?` | `ColorRepresentation` |
| `clearAlpha?` | `number` |

### Returns

`void`

___

## renderScreenSpace

▸ **renderScreenSpace**(`renderer`, `passMaterial`, `renderTarget`, `clearColor?`, `clearAlpha?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `passMaterial` | `Material` |
| `renderTarget` | `WebGLRenderTarget`<`Texture`\> |
| `clearColor?` | `ColorRepresentation` |
| `clearAlpha?` | `number` |

### Returns

`void`

___

## renderWithOverrideMaterial

▸ **renderWithOverrideMaterial**(`renderer`, `scene`, `camera`, `overrideMaterial`, `renderTarget`, `clearColor?`, `clearAlpha?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `overrideMaterial` | `Material` |
| `renderTarget` | `WebGLRenderTarget`<`Texture`\> |
| `clearColor?` | `ColorRepresentation` |
| `clearAlpha?` | `number` |

### Returns

`void`
