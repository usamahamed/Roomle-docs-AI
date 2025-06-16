[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).SceneRenderer

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#constructor)

## Properties

- [boundingVolume](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#boundingvolume)
- [boundingVolumeSet](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#boundingvolumeset)
- [debugOutput](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#debugoutput)
- [enableObjectSelection](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#enableobjectselection)
- [environmentLights](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#environmentlights)
- [groundGroup](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#groundgroup)
- [groundLevel](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#groundlevel)
- [height](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#height)
- [outlineRenderer](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#outlinerenderer)
- [outputColorSpace](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#outputcolorspace)
- [parameters](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#parameters)
- [renderCacheManager](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#rendercachemanager)
- [renderer](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#renderer)
- [selectedObjects](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#selectedobjects)
- [toneMapping](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#tonemapping)
- [uiInteractionMode](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#uiinteractionmode)
- [width](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#width)

## Accessors

- [bakedGroundContactShadowPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#bakedgroundcontactshadowpass)
- [debugPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#debugpass)
- [gBufferRenderPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#gbufferrenderpass)
- [groundReflectionPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#groundreflectionpass)
- [sceneRenderPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#scenerenderpass)
- [screenSpaceShadowMapPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#screenspaceshadowmappass)
- [shadowAndAoGroundPlane](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#shadowandaogroundplane)
- [shadowAndAoPass](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#shadowandaopass)

## Methods

- [addRectAreaLight](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#addrectarealight)
- [applyCurrentParameters](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#applycurrentparameters)
- [clearCache](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#clearcache)
- [createShadowFromLightSources](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#createshadowfromlightsources)
- [dispose](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#dispose)
- [forceShadowUpdates](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#forceshadowupdates)
- [getQualityLevel](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#getqualitylevel)
- [render](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#render)
- [requestUpdateOfPasses](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#requestupdateofpasses)
- [selectObjects](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#selectobjects)
- [setCustomShadingParameters](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setcustomshadingparameters)
- [setQualityLevel](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setqualitylevel)
- [setQualityMap](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setqualitymap)
- [setQualityMapAndShadingParameters](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setqualitymapandshadingparameters)
- [setShadingType](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setshadingtype)
- [setSize](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#setsize)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#updatebounds)
- [updateNearAndFarPlaneOfPerspectiveCamera](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#updatenearandfarplaneofperspectivecamera)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#updateparameters)
- [updateRectAreaLights](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md#updaterectarealights)

# Constructors

## constructor

• **new SceneRenderer**(`renderer`, `width`, `height`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `width` | `number` |
| `height` | `number` |

# Properties

## boundingVolume

• **boundingVolume**: [`SceneVolume`](configurator_core_src_roomle_configurator._internal_.SceneVolume.md)

___

## boundingVolumeSet

• **boundingVolumeSet**: `boolean` = `false`

___

## debugOutput

• **debugOutput**: `string` = `'off'`

___

## enableObjectSelection

• **enableObjectSelection**: `boolean` = `true`

___

## environmentLights

• **environmentLights**: `boolean` = `false`

___

## groundGroup

• `Readonly` **groundGroup**: `Group`<`Object3DEventMap`\>

___

## groundLevel

• **groundLevel**: `number` = `0`

___

## height

• **height**: `number` = `0`

___

## outlineRenderer

• **outlineRenderer**: [`OutlineRenderer`](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md)

___

## outputColorSpace

• **outputColorSpace**: `string` = `''`

___

## parameters

• **parameters**: [`SceneRendererParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.SceneRendererParameters.md)

___

## renderCacheManager

• **renderCacheManager**: [`RenderCacheManager`](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md)

___

## renderer

• **renderer**: `WebGLRenderer`

___

## selectedObjects

• **selectedObjects**: `Object3D`<`Object3DEventMap`\>[] = `[]`

___

## toneMapping

• **toneMapping**: `string` = `''`

___

## uiInteractionMode

• **uiInteractionMode**: `boolean` = `false`

___

## width

• **width**: `number` = `0`

# Accessors

## bakedGroundContactShadowPass

• `get` **bakedGroundContactShadowPass**(): [`BakedGroundContactShadowPass`](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md)

### Returns

[`BakedGroundContactShadowPass`](configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowPass.md)

___

## debugPass

• `get` **debugPass**(): [`DebugPass`](configurator_core_src_roomle_configurator._internal_.DebugPass.md)

### Returns

[`DebugPass`](configurator_core_src_roomle_configurator._internal_.DebugPass.md)

___

## gBufferRenderPass

• `get` **gBufferRenderPass**(): [`GBufferRenderPass`](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md)

### Returns

[`GBufferRenderPass`](configurator_core_src_roomle_configurator._internal_.GBufferRenderPass.md)

___

## groundReflectionPass

• `get` **groundReflectionPass**(): [`GroundReflectionPass`](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md)

### Returns

[`GroundReflectionPass`](configurator_core_src_roomle_configurator._internal_.GroundReflectionPass.md)

___

## sceneRenderPass

• `get` **sceneRenderPass**(): [`SceneRenderPass`](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md)

### Returns

[`SceneRenderPass`](configurator_core_src_roomle_configurator._internal_.SceneRenderPass.md)

___

## screenSpaceShadowMapPass

• `get` **screenSpaceShadowMapPass**(): [`ScreenSpaceShadowMapPass`](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md)

### Returns

[`ScreenSpaceShadowMapPass`](configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapPass.md)

___

## shadowAndAoGroundPlane

• `get` **shadowAndAoGroundPlane**(): [`ShadowGroundPlane`](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md)

### Returns

[`ShadowGroundPlane`](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md)

___

## shadowAndAoPass

• `get` **shadowAndAoPass**(): [`ShadowAndAoPass`](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md)

### Returns

[`ShadowAndAoPass`](configurator_core_src_roomle_configurator._internal_.ShadowAndAoPass.md)

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

## applyCurrentParameters

▸ **applyCurrentParameters**(): `void`

### Returns

`void`

___

## clearCache

▸ **clearCache**(): `void`

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

___

## forceShadowUpdates

▸ **forceShadowUpdates**(`updateBakedGroundShadow`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `updateBakedGroundShadow` | `boolean` |

### Returns

`void`

___

## getQualityLevel

▸ **getQualityLevel**(): [`QualityLevel`](../modules/configurator_core_src_roomle_configurator._internal_.md#qualitylevel)

### Returns

[`QualityLevel`](../modules/configurator_core_src_roomle_configurator._internal_.md#qualitylevel)

___

## render

▸ **render**(`scene`, `camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `camera` | `Camera` |

### Returns

`void`

___

## requestUpdateOfPasses

▸ **requestUpdateOfPasses**(): `void`

### Returns

`void`

___

## selectObjects

▸ **selectObjects**(`selectedObjects`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `selectedObjects` | `Object3D`<`Object3DEventMap`\>[] |

### Returns

`void`

___

## setCustomShadingParameters

▸ **setCustomShadingParameters**(`customShadingParameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `customShadingParameters` | [`CustomShadingParameters`](../interfaces/configurator_core_src_configurator._internal_.CustomShadingParameters.md) |

### Returns

`void`

___

## setQualityLevel

▸ **setQualityLevel**(`qualityLevel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `qualityLevel` | [`QualityLevel`](../modules/configurator_core_src_roomle_configurator._internal_.md#qualitylevel) |

### Returns

`void`

___

## setQualityMap

▸ **setQualityMap**(`qualityMap`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `qualityMap` | [`QualityMap`](../modules/configurator_core_src_roomle_configurator._internal_.md#qualitymap) |

### Returns

`void`

___

## setQualityMapAndShadingParameters

▸ **setQualityMapAndShadingParameters**(`qualityMap`, `customShadingParameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `qualityMap` | [`QualityMap`](../modules/configurator_core_src_roomle_configurator._internal_.md#qualitymap) |
| `customShadingParameters` | [`CustomShadingParameters`](../interfaces/configurator_core_src_configurator._internal_.CustomShadingParameters.md) |

### Returns

`void`

___

## setShadingType

▸ **setShadingType**(`shadingType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `shadingType` | [`SceneShadingType`](../modules/configurator_core_src_configurator._internal_.md#sceneshadingtype) |

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

▸ **updateBounds**(`bounds`, `scaleShadowAndAo`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |
| `scaleShadowAndAo` | `boolean` |

### Returns

`void`

___

## updateNearAndFarPlaneOfPerspectiveCamera

▸ **updateNearAndFarPlaneOfPerspectiveCamera**(`camera`, `minimumFar?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |
| `minimumFar?` | `number` |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`SceneRendererChangeParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.SceneRendererChangeParameters.md) |

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
