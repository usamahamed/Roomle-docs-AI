[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).AORenderPass

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#constructor)

## Properties

- [depthTexture](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#depthtexture)
- [needsUpdate](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#needsupdate)
- [normalTexture](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#normaltexture)
- [parameters](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#parameters)

## Accessors

- [texture](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#texture)

## Methods

- [clear](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#clear)
- [dispose](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#dispose)
- [render](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#render)
- [setSize](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#setsize)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#updateparameters)
- [updateTextures](configurator_core_src_roomle_configurator._internal_.AORenderPass.md#updatetextures)

# Constructors

## constructor

• **new AORenderPass**(`width`, `height`, `samples`, `gBufferAntiAliasing`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `samples` | `number` |
| `gBufferAntiAliasing` | `boolean` |
| `parameters?` | [`AOPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.AOPassParameters.md) |

# Properties

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

• **parameters**: [`AORenderPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.AORenderPassParameters.md)

# Accessors

## texture

• `get` **texture**(): `Texture`

### Returns

`Texture`

# Methods

## clear

▸ **clear**(`renderer`, `renderTarget?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `renderTarget?` | `WebGLRenderTarget`<`Texture`\> |

### Returns

`void`

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## render

▸ **render**(`renderer`, `camera`, `scene`, `renderTarget?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `camera` | `Camera` |
| `scene` | `Scene` |
| `renderTarget?` | `WebGLRenderTarget`<`Texture`\> |

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

___

## updateBounds

▸ **updateBounds**(`sceneClipBox`, `sceneScale?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneClipBox` | `Box3` |
| `sceneScale?` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`AORenderPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.AORenderPassParameters.md) |

### Returns

`void`

___

## updateTextures

▸ **updateTextures**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`AOPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.AOPassParameters.md) |

### Returns

`void`
