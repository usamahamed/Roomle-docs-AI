[glb-viewer-core/src/roomle-glb-viewer](../modules/glb_viewer_core_src_roomle_glb_viewer.md).[internal](../modules/glb_viewer_core_src_roomle_glb_viewer._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-14.md)

  ↳ **`default`**

# Implements

- [`GLBRenderWorkerListener`](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md)

# Table of contents

## Constructors

- [constructor](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#constructor)

## Properties

- [\_creator\_](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#_creator_)

## Methods

- [addEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#addeventlistener)
- [adjustCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#adjustcamera)
- [cameraBehaviourChanged](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#camerabehaviourchanged)
- [changeEnvironmentMapIntensity](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#changeenvironmentmapintensity)
- [cleanUp](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#cleanup)
- [clearScene](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#clearscene)
- [destroy](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#destroy)
- [enableHD](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#enablehd)
- [exportCanvasScreenshot](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#exportcanvasscreenshot)
- [exportImageFromCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#exportimagefromcamera)
- [getBounds](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#getbounds)
- [getCameraOffset](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#getcameraoffset)
- [getGeometryBounds](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#getgeometrybounds)
- [getOrthographicOffsetCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#getorthographicoffsetcamera)
- [getScene](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#getscene)
- [handleEvent](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#handleevent)
- [loadDynamicLightSetting](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#loaddynamiclightsetting)
- [loadEnvMap](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#loadenvmap)
- [loadGLB](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#loadglb)
- [loadSceneSettings](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#loadscenesettings)
- [loadStaticItem](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#loadstaticitem)
- [lockCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#lockcamera)
- [onElementFinished](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#onelementfinished)
- [onFinished](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#onfinished)
- [onStart](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#onstart)
- [pause](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#pause)
- [preparePerspectiveImage](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#prepareperspectiveimage)
- [removeEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#removeeventlistener)
- [resume](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#resume)
- [sceneChanged](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#scenechanged)
- [setBackgroundColor](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#setbackgroundcolor)
- [setBackgroundImage](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#setbackgroundimage)
- [setCameraOffset](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#setcameraoffset)
- [setEnvironmentMap](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#setenvironmentmap)
- [showGUI](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#showgui)
- [showStats](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#showstats)
- [unlockCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#unlockcamera)
- [updateCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#updatecamera)
- [updateScene](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md#updatescene)

# Constructors

## constructor

• **new default**(`creator`, `offset`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Overrides

SceneManager.constructor

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-14.md#_creator_)

# Methods

## addEventListener

▸ **addEventListener**(`_listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-14.md#addeventlistener)

___

## adjustCamera

▸ **adjustCamera**(`position`, `yaw`, `pitch`, `fov`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |
| `yaw` | `number` |
| `pitch` | `number` |
| `fov` | `number` |

### Returns

`void`

___

## cameraBehaviourChanged

▸ **cameraBehaviourChanged**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[cameraBehaviourChanged](configurator_core_src_roomle_configurator._internal_.default-14.md#camerabehaviourchanged)

___

## changeEnvironmentMapIntensity

▸ **changeEnvironmentMapIntensity**(`intensity`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[changeEnvironmentMapIntensity](configurator_core_src_roomle_configurator._internal_.default-14.md#changeenvironmentmapintensity)

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[cleanUp](configurator_core_src_roomle_configurator._internal_.default-14.md#cleanup)

___

## clearScene

▸ **clearScene**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[clearScene](configurator_core_src_roomle_configurator._internal_.default-14.md#clearscene)

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[destroy](configurator_core_src_roomle_configurator._internal_.default-14.md#destroy)

___

## enableHD

▸ **enableHD**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[enableHD](configurator_core_src_roomle_configurator._internal_.default-14.md#enablehd)

___

## exportCanvasScreenshot

▸ **exportCanvasScreenshot**(`quality?`): `Promise`<`string`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `quality` | `number` | `1` |

### Returns

`Promise`<`string`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[exportCanvasScreenshot](configurator_core_src_roomle_configurator._internal_.default-14.md#exportcanvasscreenshot)

___

## exportImageFromCamera

▸ **exportImageFromCamera**(`filename`, `shouldWaitForAssets?`): `Promise`<`void`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `undefined` |
| `shouldWaitForAssets` | `boolean` | `false` |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[exportImageFromCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#exportimagefromcamera)

___

## getBounds

▸ **getBounds**(): `Box3`

### Returns

`Box3`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[getBounds](configurator_core_src_roomle_configurator._internal_.default-14.md#getbounds)

___

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Returns

[`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[getCameraOffset](configurator_core_src_roomle_configurator._internal_.default-14.md#getcameraoffset)

___

## getGeometryBounds

▸ **getGeometryBounds**(): `Box3`

### Returns

`Box3`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[getGeometryBounds](configurator_core_src_roomle_configurator._internal_.default-14.md#getgeometrybounds)

___

## getOrthographicOffsetCamera

▸ **getOrthographicOffsetCamera**(): [`OrthographicOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

### Returns

[`OrthographicOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[getOrthographicOffsetCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#getorthographicoffsetcamera)

___

## getScene

▸ **getScene**(): `Scene`

### Returns

`Scene`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[getScene](configurator_core_src_roomle_configurator._internal_.default-14.md#getscene)

___

## handleEvent

▸ **handleEvent**(`evt`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `Event` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[handleEvent](configurator_core_src_roomle_configurator._internal_.default-14.md#handleevent)

___

## loadDynamicLightSetting

▸ **loadDynamicLightSetting**(`source`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md) |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[loadDynamicLightSetting](configurator_core_src_roomle_configurator._internal_.default-14.md#loaddynamiclightsetting)

___

## loadEnvMap

▸ **loadEnvMap**(`url`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[loadEnvMap](configurator_core_src_roomle_configurator._internal_.default-14.md#loadenvmap)

___

## loadGLB

▸ **loadGLB**(`url`, `automaticallyAdjustCamera?`, `scaling?`, `callback?`): `Promise`<`void`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `automaticallyAdjustCamera` | `boolean` | `true` |
| `scaling` | `Vector3` | `undefined` |
| `callback?` | (`percent`: `number`) => `void` | `undefined` |

### Returns

`Promise`<`void`\>

___

## loadSceneSettings

▸ **loadSceneSettings**(`sceneSetting`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneSetting` | [`SceneSettings`](../interfaces/common_core_src_scene_settings_loader.SceneSettings.md) |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[loadSceneSettings](configurator_core_src_roomle_configurator._internal_.default-14.md#loadscenesettings)

___

## loadStaticItem

▸ **loadStaticItem**(`id`, `callback?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback?` | (`percent`: `number`) => `void` |

### Returns

`Promise`<`void`\>

___

## lockCamera

▸ **lockCamera**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[lockCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#lockcamera)

___

## onElementFinished

▸ **onElementFinished**(`itemsFinished`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `itemsFinished` | `number` |

### Returns

`void`

### Implementation of

[GLBRenderWorkerListener](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md).[onElementFinished](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md#onelementfinished)

___

## onFinished

▸ **onFinished**(`_zip`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_zip` | `any` |

### Returns

`void`

### Implementation of

[GLBRenderWorkerListener](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md).[onFinished](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md#onfinished)

___

## onStart

▸ **onStart**(`count`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

### Returns

`void`

### Implementation of

[GLBRenderWorkerListener](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md).[onStart](../interfaces/glb_viewer_core_src_roomle_glb_viewer._internal_.GLBRenderWorkerListener.md#onstart)

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[pause](configurator_core_src_roomle_configurator._internal_.default-14.md#pause)

___

## preparePerspectiveImage

▸ **preparePerspectiveImage**(`renderer?`, `width?`, `height?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer?` | `WebGLRenderer` |
| `width?` | `number` |
| `height?` | `number` |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## removeEventListener

▸ **removeEventListener**(`_listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-14.md#removeeventlistener)

___

## resume

▸ **resume**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[resume](configurator_core_src_roomle_configurator._internal_.default-14.md#resume)

___

## sceneChanged

▸ **sceneChanged**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[sceneChanged](configurator_core_src_roomle_configurator._internal_.default-14.md#scenechanged)

___

## setBackgroundColor

▸ **setBackgroundColor**(`hex`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[setBackgroundColor](configurator_core_src_roomle_configurator._internal_.default-14.md#setbackgroundcolor)

___

## setBackgroundImage

▸ **setBackgroundImage**(`url`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[setBackgroundImage](configurator_core_src_roomle_configurator._internal_.default-14.md#setbackgroundimage)

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[setCameraOffset](configurator_core_src_roomle_configurator._internal_.default-14.md#setcameraoffset)

___

## setEnvironmentMap

▸ **setEnvironmentMap**(`url?`, `intensity?`, `rotation?`, `maxLightSources?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |
| `intensity?` | `number` |
| `rotation?` | `number` |
| `maxLightSources?` | `number` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[setEnvironmentMap](configurator_core_src_roomle_configurator._internal_.default-14.md#setenvironmentmap)

___

## showGUI

▸ **showGUI**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[showGUI](configurator_core_src_roomle_configurator._internal_.default-14.md#showgui)

___

## showStats

▸ **showStats**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[showStats](configurator_core_src_roomle_configurator._internal_.default-14.md#showstats)

___

## unlockCamera

▸ **unlockCamera**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[unlockCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#unlockcamera)

___

## updateCamera

▸ **updateCamera**(`_changeCamera?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_changeCamera` | `boolean` | `true` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[updateCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#updatecamera)

___

## updateScene

▸ **updateScene**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-14.md).[updateScene](configurator_core_src_roomle_configurator._internal_.default-14.md#updatescene)
