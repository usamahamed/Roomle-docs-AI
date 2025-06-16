[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).OutlinePass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`OutlinePass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#constructor)

## Properties

- [\_visibilityCache](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#_visibilitycache)
- [clearBackground](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#clearbackground)
- [copyUniforms](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#copyuniforms)
- [downSampleRatio](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#downsampleratio)
- [edgeDetectionFxaa](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#edgedetectionfxaa)
- [edgeDetectionMaterial](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#edgedetectionmaterial)
- [edgeGlow](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#edgeglow)
- [edgeStrength](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#edgestrength)
- [edgeThickness](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#edgethickness)
- [fsQuad](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#fsquad)
- [fxaaRenderMaterial](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#fxaarendermaterial)
- [hiddenEdgeColor](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#hiddenedgecolor)
- [materialCopy](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#materialcopy)
- [oldClearAlpha](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#oldclearalpha)
- [oldClearColor](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#oldclearcolor)
- [overlayMaterial](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#overlaymaterial)
- [patternTexture](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#patterntexture)
- [prepareMaskMaterial](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#preparemaskmaterial)
- [pulsePeriod](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#pulseperiod)
- [renderCamera](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendercamera)
- [renderScene](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#renderscene)
- [renderTargetBlurBuffer1](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetblurbuffer1)
- [renderTargetBlurBuffer2](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetblurbuffer2)
- [renderTargetEdgeBuffer1](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetedgebuffer1)
- [renderTargetEdgeBuffer2](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetedgebuffer2)
- [renderTargetFxaaBuffer](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetfxaabuffer)
- [renderTargetMaskBuffer](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetmaskbuffer)
- [renderTargetMaskDownSampleBuffer](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#rendertargetmaskdownsamplebuffer)
- [resolution](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#resolution)
- [selectedObjects](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#selectedobjects)
- [separableBlurMaterial1](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#separableblurmaterial1)
- [separableBlurMaterial2](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#separableblurmaterial2)
- [tempPulseColor1](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#temppulsecolor1)
- [tempPulseColor2](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#temppulsecolor2)
- [textureMatrix](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#texturematrix)
- [usePatternTexture](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#usepatterntexture)
- [visibleEdgeColor](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#visibleedgecolor)
- [BlurDirectionX](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#blurdirectionx)
- [BlurDirectionY](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#blurdirectiony)
- [highlightLines](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#highlightlines)

## Methods

- [dispose](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#renderpass)
- [setSize](configurator_core_src_roomle_configurator._internal_.OutlinePass.md#setsize)

# Constructors

## constructor

• **new OutlinePass**(`renderPassManager`, `resolution`, `scene`, `camera`, `selectedObjects`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `resolution` | `Vector2` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `selectedObjects` | `Object3D`<`Object3DEventMap`\>[] |
| `parameters?` | [`OutlinePassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlinePassParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## \_visibilityCache

• **\_visibilityCache**: `Map`<`Object3D`<`Object3DEventMap`\>, `boolean`\>

___

## clearBackground

• **clearBackground**: `boolean` = `false`

___

## copyUniforms

• **copyUniforms**: `any`

___

## downSampleRatio

• **downSampleRatio**: `number`

___

## edgeDetectionFxaa

• **edgeDetectionFxaa**: `boolean`

___

## edgeDetectionMaterial

• **edgeDetectionMaterial**: `ShaderMaterial`

___

## edgeGlow

• **edgeGlow**: `number`

___

## edgeStrength

• **edgeStrength**: `number`

___

## edgeThickness

• **edgeThickness**: `number`

___

## fsQuad

• **fsQuad**: `FullScreenQuad`

___

## fxaaRenderMaterial

• `Optional` **fxaaRenderMaterial**: `ShaderMaterial`

___

## hiddenEdgeColor

• **hiddenEdgeColor**: `Color`

___

## materialCopy

• **materialCopy**: `ShaderMaterial`

___

## oldClearAlpha

• **oldClearAlpha**: `number`

___

## oldClearColor

• **oldClearColor**: `Color`

___

## overlayMaterial

• **overlayMaterial**: `ShaderMaterial`

___

## patternTexture

• **patternTexture**: `Texture` = `null`

___

## prepareMaskMaterial

• **prepareMaskMaterial**: `ShaderMaterial`

___

## pulsePeriod

• **pulsePeriod**: `number`

___

## renderCamera

• **renderCamera**: `Camera`

___

## renderScene

• **renderScene**: `Scene`

___

## renderTargetBlurBuffer1

• **renderTargetBlurBuffer1**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetBlurBuffer2

• **renderTargetBlurBuffer2**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetEdgeBuffer1

• **renderTargetEdgeBuffer1**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetEdgeBuffer2

• **renderTargetEdgeBuffer2**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetFxaaBuffer

• `Optional` **renderTargetFxaaBuffer**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetMaskBuffer

• **renderTargetMaskBuffer**: `WebGLRenderTarget`<`Texture`\>

___

## renderTargetMaskDownSampleBuffer

• **renderTargetMaskDownSampleBuffer**: `WebGLRenderTarget`<`Texture`\>

___

## resolution

• **resolution**: `Vector2`

___

## selectedObjects

• **selectedObjects**: `Object3D`<`Object3DEventMap`\>[]

___

## separableBlurMaterial1

• **separableBlurMaterial1**: `ShaderMaterial`

___

## separableBlurMaterial2

• **separableBlurMaterial2**: `ShaderMaterial`

___

## tempPulseColor1

• **tempPulseColor1**: `Color`

___

## tempPulseColor2

• **tempPulseColor2**: `Color`

___

## textureMatrix

• **textureMatrix**: `Matrix4`

___

## usePatternTexture

• **usePatternTexture**: `boolean`

___

## visibleEdgeColor

• **visibleEdgeColor**: `Color`

___

## BlurDirectionX

▪ `Static` **BlurDirectionX**: `Vector2`

___

## BlurDirectionY

▪ `Static` **BlurDirectionY**: `Vector2`

___

## highlightLines

▪ `Static` **highlightLines**: `boolean` = `true`

# Methods

## dispose

▸ **dispose**(): `void`

### Returns

`void`

### Overrides

RenderPass.dispose

___

## render

▸ **render**(`renderer`, `_writeBuffer`, `readBuffer`, `_deltaTime`, `maskActive`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `_writeBuffer` | `WebGLRenderTarget`<`Texture`\> |
| `readBuffer` | `WebGLRenderTarget`<`Texture`\> |
| `_deltaTime` | `number` |
| `maskActive` | `boolean` |

### Returns

`void`

### Overrides

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
