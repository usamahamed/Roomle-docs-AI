[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RoomleWebGLRenderer

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#constructor)

## Properties

- [enableRectAreaLightShadow](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#enablerectarealightshadow)

## Accessors

- [bakedGroundContactShadowParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#bakedgroundcontactshadowparameters)
- [groundReflectionParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#groundreflectionparameters)
- [isConfiguring](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#isconfiguring)
- [outlineParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#outlineparameters)
- [renderer](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#renderer)
- [sceneRenderer](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#scenerenderer)
- [screenSpaceShadowParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#screenspaceshadowparameters)
- [shadowAndAoPassParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#shadowandaopassparameters)

## Methods

- [clear](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#clear)
- [clearCache](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#clearcache)
- [disableUiInteractionMode](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#disableuiinteractionmode)
- [dispose](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#dispose)
- [enableUiInteractionMode](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#enableuiinteractionmode)
- [forceShadowUpdates](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#forceshadowupdates)
- [highlightObjects](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#highlightobjects)
- [movingCameraStarts](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#movingcamerastarts)
- [movingCameraStops](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#movingcamerastops)
- [render](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#render)
- [setAutoQuality](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setautoquality)
- [setCameraType](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setcameratype)
- [setCustomShadingParameters](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setcustomshadingparameters)
- [setGroundShadow](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setgroundshadow)
- [setQualityLevel](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setqualitylevel)
- [setQualityMap](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setqualitymap)
- [setShadingType](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setshadingtype)
- [setSize](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#setsize)
- [showGUI](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#showgui)
- [switchToConfigurator](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#switchtoconfigurator)
- [switchToPlanner](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#switchtoplanner)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.RoomleWebGLRenderer.md#updatebounds)

# Constructors

## constructor

• **new RoomleWebGLRenderer**(`renderer`, `width`, `height`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `width` | `number` |
| `height` | `number` |

# Properties

## enableRectAreaLightShadow

▪ `Static` **enableRectAreaLightShadow**: `boolean` = `true`

# Accessors

## bakedGroundContactShadowParameters

• `get` **bakedGroundContactShadowParameters**(): [`BakedGroundContactShadowParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowParameters.md)

### Returns

[`BakedGroundContactShadowParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.BakedGroundContactShadowParameters.md)

___

## groundReflectionParameters

• `get` **groundReflectionParameters**(): [`GroundReflectionParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GroundReflectionParameters.md)

### Returns

[`GroundReflectionParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.GroundReflectionParameters.md)

___

## isConfiguring

• `get` **isConfiguring**(): `boolean`

### Returns

`boolean`

___

## outlineParameters

• `get` **outlineParameters**(): [`OutlineParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlineParameters.md)

### Returns

[`OutlineParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlineParameters.md)

___

## renderer

• `get` **renderer**(): `WebGLRenderer`

### Returns

`WebGLRenderer`

___

## sceneRenderer

• `get` **sceneRenderer**(): [`SceneRenderer`](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md)

### Returns

[`SceneRenderer`](configurator_core_src_roomle_configurator._internal_.SceneRenderer.md)

___

## screenSpaceShadowParameters

• `get` **screenSpaceShadowParameters**(): [`ScreenSpaceShadowMapParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapParameters.md)

### Returns

[`ScreenSpaceShadowMapParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScreenSpaceShadowMapParameters.md)

___

## shadowAndAoPassParameters

• `get` **shadowAndAoPassParameters**(): [`ShadowAndAoPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassParameters.md)

### Returns

[`ShadowAndAoPassParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowAndAoPassParameters.md)

# Methods

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## clearCache

▸ **clearCache**(): `void`

### Returns

`void`

___

## disableUiInteractionMode

▸ **disableUiInteractionMode**(): `void`

### Returns

`void`

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## enableUiInteractionMode

▸ **enableUiInteractionMode**(): `void`

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

## highlightObjects

▸ **highlightObjects**(`selectedMeshes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `selectedMeshes` | `Object3D`<`Object3DEventMap`\>[] |

### Returns

`void`

___

## movingCameraStarts

▸ **movingCameraStarts**(): `void`

### Returns

`void`

___

## movingCameraStops

▸ **movingCameraStops**(): `void`

### Returns

`void`

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

## setAutoQuality

▸ **setAutoQuality**(`autoQuality`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `autoQuality` | `boolean` |

### Returns

`void`

___

## setCameraType

▸ **setCameraType**(`cameraType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraType` | [`Enumify`](../modules/configurator_core_src_configurator._internal_.md#enumify)<{ `CAMERA_2D`: ``"2D"`` = '2D'; `CAMERA_3D`: ``"3D"`` = '3D'; `CAMERA_FP`: ``"FP"`` = 'FP' }\> |

### Returns

`void`

___

## setCustomShadingParameters

▸ **setCustomShadingParameters**(`customShadingParameters?`, `customShadingParametersMoc?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `customShadingParameters?` | [`CustomShadingParameters`](../interfaces/configurator_core_src_configurator._internal_.CustomShadingParameters.md) |
| `customShadingParametersMoc?` | [`CustomShadingParameters`](../interfaces/configurator_core_src_configurator._internal_.CustomShadingParameters.md) |

### Returns

`void`

___

## setGroundShadow

▸ **setGroundShadow**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

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

## showGUI

▸ **showGUI**(`updateCallback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `updateCallback` | () => `void` |

### Returns

`void`

___

## switchToConfigurator

▸ **switchToConfigurator**(): `void`

### Returns

`void`

___

## switchToPlanner

▸ **switchToPlanner**(`renderMode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `renderMode` | [`RenderMode`](../enums/configurator_core_src_roomle_configurator._internal_.RenderMode.md) |

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`geometryBounds?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `geometryBounds?` | `Box3` |

### Returns

`void`
