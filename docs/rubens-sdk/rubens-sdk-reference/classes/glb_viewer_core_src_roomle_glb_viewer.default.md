[glb-viewer-core/src/roomle-glb-viewer](../modules/glb_viewer_core_src_roomle_glb_viewer.md).default

# Implements

- [`GlobalAPI`](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md)
- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<[`GlbViewerUiCallbacks`](glb_viewer_core_src_roomle_glb_viewer.GlbViewerUiCallbacks.md)\>

# Table of contents

## Constructors

- [constructor](glb_viewer_core_src_roomle_glb_viewer.default.md#constructor)

## Properties

- [\_creator\_](glb_viewer_core_src_roomle_glb_viewer.default.md#_creator_)

## Accessors

- [callbacks](glb_viewer_core_src_roomle_glb_viewer.default.md#callbacks)

## Methods

- [clearScene](glb_viewer_core_src_roomle_glb_viewer.default.md#clearscene)
- [getCameraOffset](glb_viewer_core_src_roomle_glb_viewer.default.md#getcameraoffset)
- [getCurrentId](glb_viewer_core_src_roomle_glb_viewer.default.md#getcurrentid)
- [getScene](glb_viewer_core_src_roomle_glb_viewer.default.md#getscene)
- [getStorage](glb_viewer_core_src_roomle_glb_viewer.default.md#getstorage)
- [getUnitFormatter](glb_viewer_core_src_roomle_glb_viewer.default.md#getunitformatter)
- [init](glb_viewer_core_src_roomle_glb_viewer.default.md#init)
- [loadGLB](glb_viewer_core_src_roomle_glb_viewer.default.md#loadglb)
- [loadSceneSetting](glb_viewer_core_src_roomle_glb_viewer.default.md#loadscenesetting)
- [loadStaticItem](glb_viewer_core_src_roomle_glb_viewer.default.md#loadstaticitem)
- [pauseTest](glb_viewer_core_src_roomle_glb_viewer.default.md#pausetest)
- [preparePerspectiveImage](glb_viewer_core_src_roomle_glb_viewer.default.md#prepareperspectiveimage)
- [processRenderList](glb_viewer_core_src_roomle_glb_viewer.default.md#processrenderlist)
- [resumeTest](glb_viewer_core_src_roomle_glb_viewer.default.md#resumetest)
- [setCameraOffset](glb_viewer_core_src_roomle_glb_viewer.default.md#setcameraoffset)
- [setEnvironmentMap](glb_viewer_core_src_roomle_glb_viewer.default.md#setenvironmentmap)
- [setOverrides](glb_viewer_core_src_roomle_glb_viewer.default.md#setoverrides)
- [showGUI](glb_viewer_core_src_roomle_glb_viewer.default.md#showgui)
- [updateScene](glb_viewer_core_src_roomle_glb_viewer.default.md#updatescene)
- [updateSize](glb_viewer_core_src_roomle_glb_viewer.default.md#updatesize)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Accessors

## callbacks

• `get` **callbacks**(): `Object`

### Returns

`Object`

### Implementation of

[ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md).[callbacks](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md#callbacks)

# Methods

## clearScene

▸ **clearScene**(): `void`

Remove the current glb from the scene if it exists

### Returns

`void`

___

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

Gets the available screen space for our item
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Returns

[`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getcameraoffset)

___

## getCurrentId

▸ **getCurrentId**(): `string`

Returns the current item id or url of the loaded object

### Returns

`string`

___

## getScene

▸ **getScene**(): `Scene`

Returns the three.js scene (https://threejs.org/docs/#api/en/scenes/Scene)
WARNING: This is the actual scene (reference) and not a copy!

### Returns

`Scene`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getscene)

___

## getStorage

▸ **getStorage**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

returns manager class to interface with indexedDB storage

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getStorage](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getstorage)

___

## getUnitFormatter

▸ **getUnitFormatter**(): [`default`](configurator_core_src_roomle_configurator._internal_.default.md)

returns unit formatter for formatting input und output values in scene

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getUnitFormatter](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getunitformatter)

___

## init

▸ **init**(`element`, `initData?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `initData?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) |

### Returns

`Promise`<`void`\>

___

## loadGLB

▸ **loadGLB**(`url`, `scaling?`, `callback?`): `Promise`<`void`\>

Loads the GLB from the given URL Param

### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` |  |
| `scaling` | `number` | `1` | defaults to 1 |
| `callback?` | (`percent`: `number`) => `void` | `undefined` | loading percent between 0 and 1 |

### Returns

`Promise`<`void`\>

___

## loadSceneSetting

▸ **loadSceneSetting**(`sceneSettings`): `Promise`<`void`\>

Loads a SceneSettings object, currently it can can contain a light setting definition
(see [@roomle/web-sdk/configurator-core/src/roomle-configurator#RoomleConfigurator.loadDynamicLightSetting](../modules/glb_viewer_core_src_roomle_glb_viewer.md)) and an environment definition (see [@roomle/web-sdk/configurator-core/src/environment/dynamic-environment-setting-loaderEnvironmentSetting](../modules/glb_viewer_core_src_roomle_glb_viewer.md)).

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneSettings` | [`SceneSettings`](../interfaces/common_core_src_scene_settings_loader.SceneSettings.md) |

### Returns

`Promise`<`void`\>

___

## loadStaticItem

▸ **loadStaticItem**(`staticItemId`, `callback?`): `Promise`<`void`\>

Loads the glb asset from the static item

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `staticItemId` | `string` |  |
| `callback?` | (`percent`: `number`) => `void` | loading percent between 0 and 1 |

### Returns

`Promise`<`void`\>

___

## pauseTest

▸ **pauseTest**(): `void`

### Returns

`void`

___

## preparePerspectiveImage

▸ **preparePerspectiveImage**(): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## processRenderList

▸ **processRenderList**(`jsonString`, `width?`, `height?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `jsonString` | `string` | `undefined` |
| `width` | `number` | `320` |
| `height` | `number` | `320` |

### Returns

`void`

___

## resumeTest

▸ **resumeTest**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

### Returns

`void`

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

Sets the available screen space for our item
Example 1: right 0.9 means 10% padding on the right side
Example 2: bottom 0.2 means 20% padding on the bottom side
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setcameraoffset)

___

## setEnvironmentMap

▸ **setEnvironmentMap**(`params`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.intensity?` | `number` |
| `params.maxLightSources?` | `number` |
| `params.rotation?` | `number` |
| `params.url?` | `string` |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setEnvironmentMap](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setenvironmentmap)

___

## setOverrides

▸ **setOverrides**(`initData`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `initData` | [`default`](configurator_core_src_configurator._internal_.default-9.md) \| `Partial`<[`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md)\> |

### Returns

`void`

___

## showGUI

▸ **showGUI**(): `void`

### Returns

`void`

___

## updateScene

▸ **updateScene**(): `void`

Updates the scene (recalculating bounds) and restart rendering

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatescene)

___

## updateSize

▸ **updateSize**(): `void`

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateSize](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatesize)
