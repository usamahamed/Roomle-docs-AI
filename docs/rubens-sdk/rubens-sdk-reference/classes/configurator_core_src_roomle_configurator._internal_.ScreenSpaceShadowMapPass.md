[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ScreenSpaceShadowMapPass

# Hierarchy

- [`RenderPass`](configurator_core_src_roomle_configurator._internal_.RenderPass.md)

  ↳ **`ScreenSpaceShadowMapPass`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#constructor)

## Properties

- [castShadow](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#castshadow)
- [drawGround](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#drawground)
- [needsUpdate](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#needsupdate)
- [parameters](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#parameters)
- [shadowConfiguration](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#shadowconfiguration)
- [shadowTypeNeedsUpdate](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#shadowtypeneedsupdate)

## Accessors

- [shadowOnGround](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#shadowonground)
- [shadowTexture](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#shadowtexture)

## Methods

- [addRectAreaLight](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#addrectarealight)
- [createShadowFromLightSources](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#createshadowfromlightsources)
- [dispose](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#dispose)
- [findShadowLightSource](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#findshadowlightsource)
- [forceShadowUpdate](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#forceshadowupdate)
- [getShadowLightSources](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#getshadowlightsources)
- [render](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#render)
- [renderPass](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#renderpass)
- [setSize](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#setsize)
- [switchType](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#switchtype)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#updatebounds)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#updateparameters)
- [updatePositionAndTarget](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#updatepositionandtarget)
- [updateRectAreaLights](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md#updaterectarealights)

# Constructors

## constructor

• **new ScreenSpaceShadowMapPass**(`renderPassManager`, `viewportSize`, `parameters`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `viewportSize` | `Vector2` |
| `parameters` | [`ScreenSpaceShadowMapConstructorParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapConstructorParameters.md) |

### Overrides

[RenderPass](configurator_core_src_roomle_configurator._internal_.RenderPass.md).[constructor](configurator_core_src_roomle_configurator._internal_.RenderPass.md#constructor)

# Properties

## castShadow

• **castShadow**: `boolean`

___

## drawGround

• **drawGround**: `boolean` = `true`

___

## needsUpdate

• **needsUpdate**: `boolean` = `false`

___

## parameters

• **parameters**: [`ScreenSpaceShadowMapParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapParameters.md)

___

## shadowConfiguration

• **shadowConfiguration**: [`ShadowTypeConfiguration`](configurator_core_src_roomle_configurator._internal_.ShadowTypeConfiguration.md)

___

## shadowTypeNeedsUpdate

• **shadowTypeNeedsUpdate**: `boolean` = `true`

# Accessors

## shadowOnGround

• `set` **shadowOnGround**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

### Returns

`void`

___

## shadowTexture

• `get` **shadowTexture**(): `Texture`

### Returns

`Texture`

# Methods

## addRectAreaLight

▸ **addRectAreaLight**(`rectAreaLight`, `parent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `rectAreaLight` | `RectAreaLight` |
| `parent` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## createShadowFromLightSources

▸ **createShadowFromLightSources**(`parent`, `lightSources`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Object3D`<`Object3DEventMap`\> |
| `lightSources` | [`LightSource`](configurator_core_src_roomle_configurator._internal_.LightSource.md)[] |

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

## findShadowLightSource

▸ **findShadowLightSource**(`lightSource`): `Light`<`LightShadow`<`Camera`\>\>

### Parameters

| Name | Type |
| :------ | :------ |
| `lightSource` | `Light`<`LightShadow`<`Camera`\>\> |

### Returns

`Light`<`LightShadow`<`Camera`\>\>

___

## forceShadowUpdate

▸ **forceShadowUpdate**(): `void`

### Returns

`void`

___

## getShadowLightSources

▸ **getShadowLightSources**(): `Light`<`LightShadow`<`Camera`\>\>[]

### Returns

`Light`<`LightShadow`<`Camera`\>\>[]

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

## switchType

▸ **switchType**(`type`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

### Returns

`boolean`

___

## updateBounds

▸ **updateBounds**(`sceneBounds`, `scaleShadow`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneBounds` | [`SceneVolume`](configurator_core_src_roomle_configurator._internal_.SceneVolume.md) |
| `scaleShadow` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ScreenSpaceShadowMapParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapParameters.md) |

### Returns

`void`

___

## updatePositionAndTarget

▸ **updatePositionAndTarget**(): `void`

### Returns

`void`

___

## updateRectAreaLights

▸ **updateRectAreaLights**(`rectAreaLights`, `parent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `rectAreaLights` | `RectAreaLight`[] |
| `parent` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`
