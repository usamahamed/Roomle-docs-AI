[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- **`default`**

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-10.md)

  ↳ [`default`](glb_viewer_core_src_roomle_glb_viewer._internal_.default.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md)
- `EventListenerObject`

# Table of contents

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-14.md#_creator_)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-14.md#addeventlistener)
- [cameraBehaviourChanged](configurator_core_src_roomle_configurator._internal_.default-14.md#camerabehaviourchanged)
- [changeEnvironmentMapIntensity](configurator_core_src_roomle_configurator._internal_.default-14.md#changeenvironmentmapintensity)
- [cleanUp](configurator_core_src_roomle_configurator._internal_.default-14.md#cleanup)
- [clearScene](configurator_core_src_roomle_configurator._internal_.default-14.md#clearscene)
- [destroy](configurator_core_src_roomle_configurator._internal_.default-14.md#destroy)
- [enableHD](configurator_core_src_roomle_configurator._internal_.default-14.md#enablehd)
- [exportCanvasScreenshot](configurator_core_src_roomle_configurator._internal_.default-14.md#exportcanvasscreenshot)
- [exportImageFromCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#exportimagefromcamera)
- [getBounds](configurator_core_src_roomle_configurator._internal_.default-14.md#getbounds)
- [getCameraOffset](configurator_core_src_roomle_configurator._internal_.default-14.md#getcameraoffset)
- [getGeometryBounds](configurator_core_src_roomle_configurator._internal_.default-14.md#getgeometrybounds)
- [getOrthographicOffsetCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#getorthographicoffsetcamera)
- [getScene](configurator_core_src_roomle_configurator._internal_.default-14.md#getscene)
- [handleEvent](configurator_core_src_roomle_configurator._internal_.default-14.md#handleevent)
- [loadDynamicLightSetting](configurator_core_src_roomle_configurator._internal_.default-14.md#loaddynamiclightsetting)
- [loadEnvMap](configurator_core_src_roomle_configurator._internal_.default-14.md#loadenvmap)
- [loadSceneSettings](configurator_core_src_roomle_configurator._internal_.default-14.md#loadscenesettings)
- [lockCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#lockcamera)
- [pause](configurator_core_src_roomle_configurator._internal_.default-14.md#pause)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-14.md#removeeventlistener)
- [resume](configurator_core_src_roomle_configurator._internal_.default-14.md#resume)
- [sceneChanged](configurator_core_src_roomle_configurator._internal_.default-14.md#scenechanged)
- [setBackgroundColor](configurator_core_src_roomle_configurator._internal_.default-14.md#setbackgroundcolor)
- [setBackgroundImage](configurator_core_src_roomle_configurator._internal_.default-14.md#setbackgroundimage)
- [setCameraOffset](configurator_core_src_roomle_configurator._internal_.default-14.md#setcameraoffset)
- [setEnvironmentMap](configurator_core_src_roomle_configurator._internal_.default-14.md#setenvironmentmap)
- [showGUI](configurator_core_src_roomle_configurator._internal_.default-14.md#showgui)
- [showStats](configurator_core_src_roomle_configurator._internal_.default-14.md#showstats)
- [unlockCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#unlockcamera)
- [updateCamera](configurator_core_src_roomle_configurator._internal_.default-14.md#updatecamera)
- [updateScene](configurator_core_src_roomle_configurator._internal_.default-14.md#updatescene)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## addEventListener

▸ **addEventListener**(`_listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md) |

### Returns

`void`

___

## cameraBehaviourChanged

▸ **cameraBehaviourChanged**(): `void`

### Returns

`void`

___

## changeEnvironmentMapIntensity

▸ **changeEnvironmentMapIntensity**(`intensity`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

### Returns

`void`

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

___

## clearScene

▸ **clearScene**(): `void`

### Returns

`void`

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.destroy

___

## enableHD

▸ **enableHD**(`source?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | [`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md) |

### Returns

`void`

___

## exportCanvasScreenshot

▸ **exportCanvasScreenshot**(`quality?`): `Promise`<`string`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `quality` | `number` | `1` |

### Returns

`Promise`<`string`\>

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

___

## getBounds

▸ `Abstract` **getBounds**(): `Box3`

### Returns

`Box3`

___

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Returns

[`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

___

## getGeometryBounds

▸ `Abstract` **getGeometryBounds**(): `Box3`

### Returns

`Box3`

___

## getOrthographicOffsetCamera

▸ **getOrthographicOffsetCamera**(): [`OrthographicOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

### Returns

[`OrthographicOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

___

## getScene

▸ **getScene**(): `Scene`

### Returns

`Scene`

___

## handleEvent

▸ **handleEvent**(`evt`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `Event` |

### Returns

`void`

### Implementation of

EventListenerObject.handleEvent

___

## loadDynamicLightSetting

▸ **loadDynamicLightSetting**(`source`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md) |

### Returns

`Promise`<`void`\>

___

## loadEnvMap

▸ **loadEnvMap**(`url`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

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

___

## lockCamera

▸ **lockCamera**(): `void`

### Returns

`void`

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.pause

___

## removeEventListener

▸ **removeEventListener**(`_listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md) |

### Returns

`void`

___

## resume

▸ **resume**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.resume

___

## sceneChanged

▸ `Abstract` **sceneChanged**(): `void`

### Returns

`void`

___

## setBackgroundColor

▸ **setBackgroundColor**(`hex`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

### Returns

`void`

___

## setBackgroundImage

▸ **setBackgroundImage**(`url`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

### Returns

`void`

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

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

___

## showGUI

▸ **showGUI**(): `void`

### Returns

`void`

___

## showStats

▸ **showStats**(): `void`

### Returns

`void`

___

## unlockCamera

▸ **unlockCamera**(): `void`

### Returns

`void`

___

## updateCamera

▸ **updateCamera**(`_changeCamera?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_changeCamera` | `boolean` | `true` |

### Returns

`void`

___

## updateScene

▸ **updateScene**(): `void`

### Returns

`void`
