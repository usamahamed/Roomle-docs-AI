[glb-viewer-core/src/roomle-glb-viewer](../modules/glb_viewer_core_src_roomle_glb_viewer.md).[internal](../modules/glb_viewer_core_src_roomle_glb_viewer._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#constructor)

## Properties

- [\_creator\_](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#_creator_)
- [maxAzimuthAngle](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#maxazimuthangle)
- [maxDistance](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#maxdistance)
- [maxPolarAngle](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#maxpolarangle)
- [minAzimuthAngle](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#minazimuthangle)
- [minDistance](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#mindistance)
- [minPolarAngle](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#minpolarangle)
- [shouldIgnoreStandardBehavior](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#shouldignorestandardbehavior)

## Accessors

- [domHelper](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#domhelper)

## Methods

- [addEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#addeventlistener)
- [addLightContainer](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#addlightcontainer)
- [adjust](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#adjust)
- [adjustToBoundsWithoutChangingDistance](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#adjusttoboundswithoutchangingdistance)
- [animateCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#animatecamera)
- [checkBoundsAndPlaceCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#checkboundsandplacecamera)
- [checkNearFarDistance](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#checknearfardistance)
- [cleanUp](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#cleanup)
- [clear](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#clear)
- [disableEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#disableevents)
- [disablePanning](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#disablepanning)
- [dispatchEvent](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#dispatchevent)
- [enableEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#enableevents)
- [enablePanning](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#enablepanning)
- [getCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#getcamera)
- [getCurrentCameraParameters](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#getcurrentcameraparameters)
- [getInputPosition](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#getinputposition)
- [getKernelZoomFactor](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#getkernelzoomfactor)
- [getObjectRotation](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#getobjectrotation)
- [getTargetPosition](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#gettargetposition)
- [hasSavedState](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#hassavedstate)
- [isLocked](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#islocked)
- [lock](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#lock)
- [moveCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#movecamera)
- [removeEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#removeeventlistener)
- [reset](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#reset)
- [resetToState](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#resettostate)
- [saveState](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#savestate)
- [setBounds](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#setbounds)
- [setObjectRotation](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#setobjectrotation)
- [setToState](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#settostate)
- [unlock](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#unlock)
- [updateAndReset](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#updateandreset)
- [updateCamera](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#updatecamera)
- [updateToBounds](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#updatetobounds)
- [zoomIn](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#zoomin)
- [zoomOut](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#zoomout)
- [zoomTo](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#zoomto)
- [zoomToFitBounds](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md#zoomtofitbounds)

# Constructors

## constructor

• **new default**(`creator`, `inputManager`, `initialCameraPosition?`, `camera?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |
| `initialCameraPosition?` | `Vector3` |
| `camera?` | [`PerspectiveOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md) |

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-48.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-48.md#_creator_)

___

## maxAzimuthAngle

• **maxAzimuthAngle**: `number` = `Number.POSITIVE_INFINITY`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[maxAzimuthAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#maxazimuthangle)

___

## maxDistance

• **maxDistance**: `number` = `5`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[maxDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#maxdistance)

___

## maxPolarAngle

• **maxPolarAngle**: `number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[maxPolarAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#maxpolarangle)

___

## minAzimuthAngle

• **minAzimuthAngle**: `number` = `Number.NEGATIVE_INFINITY`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[minAzimuthAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#minazimuthangle)

___

## minDistance

• **minDistance**: `number` = `0`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[minDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#mindistance)

___

## minPolarAngle

• **minPolarAngle**: `number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[minPolarAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#minpolarangle)

___

## shouldIgnoreStandardBehavior

• **shouldIgnoreStandardBehavior**: `boolean` = `false`

# Accessors

## domHelper

• `get` **domHelper**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

### Inherited from

CameraControl3D.domHelper

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`any`\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-48.md#addeventlistener)

___

## addLightContainer

▸ **addLightContainer**(`container`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[addLightContainer](configurator_core_src_roomle_configurator._internal_.default-48.md#addlightcontainer)

___

## adjust

▸ **adjust**(`bounds`, `position`, `yaw`, `pitch`, `_fov`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Vector3` |
| `position` | `Vector3` |
| `yaw` | `number` |
| `pitch` | `number` |
| `_fov` | `number` |

### Returns

`void`

___

## adjustToBoundsWithoutChangingDistance

▸ **adjustToBoundsWithoutChangingDistance**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[adjustToBoundsWithoutChangingDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#adjusttoboundswithoutchangingdistance)

___

## animateCamera

▸ **animateCamera**(`delta`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

### Returns

`boolean`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[animateCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#animatecamera)

___

## checkBoundsAndPlaceCamera

▸ **checkBoundsAndPlaceCamera**(`boundingBox`, `reset?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `boundingBox` | `Box3` | `undefined` |
| `reset` | `boolean` | `true` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[checkBoundsAndPlaceCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#checkboundsandplacecamera)

___

## checkNearFarDistance

▸ **checkNearFarDistance**(`point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector3` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[checkNearFarDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#checknearfardistance)

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[cleanUp](configurator_core_src_roomle_configurator._internal_.default-48.md#cleanup)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[clear](configurator_core_src_roomle_configurator._internal_.default-48.md#clear)

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-48.md#disableevents)

___

## disablePanning

▸ **disablePanning**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[disablePanning](configurator_core_src_roomle_configurator._internal_.default-48.md#disablepanning)

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-48.md#dispatchevent)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-48.md#enableevents)

___

## enablePanning

▸ **enablePanning**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[enablePanning](configurator_core_src_roomle_configurator._internal_.default-48.md#enablepanning)

___

## getCamera

▸ **getCamera**(): [`PerspectiveOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

### Returns

[`PerspectiveOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#getcamera)

___

## getCurrentCameraParameters

▸ **getCurrentCameraParameters**(): [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Returns

[`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getCurrentCameraParameters](configurator_core_src_roomle_configurator._internal_.default-48.md#getcurrentcameraparameters)

___

## getInputPosition

▸ **getInputPosition**(`position`): `Vector3`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position2`](../interfaces/common_core_src_common_interfaces.Position2.md) |

### Returns

`Vector3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getInputPosition](configurator_core_src_roomle_configurator._internal_.default-48.md#getinputposition)

___

## getKernelZoomFactor

▸ **getKernelZoomFactor**(): `number`

### Returns

`number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getKernelZoomFactor](configurator_core_src_roomle_configurator._internal_.default-48.md#getkernelzoomfactor)

___

## getObjectRotation

▸ **getObjectRotation**(): `number`

### Returns

`number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getObjectRotation](configurator_core_src_roomle_configurator._internal_.default-48.md#getobjectrotation)

___

## getTargetPosition

▸ **getTargetPosition**(): `Vector3`

### Returns

`Vector3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[getTargetPosition](configurator_core_src_roomle_configurator._internal_.default-48.md#gettargetposition)

___

## hasSavedState

▸ **hasSavedState**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[hasSavedState](configurator_core_src_roomle_configurator._internal_.default-48.md#hassavedstate)

___

## isLocked

▸ **isLocked**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[isLocked](configurator_core_src_roomle_configurator._internal_.default-48.md#islocked)

___

## lock

▸ **lock**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[lock](configurator_core_src_roomle_configurator._internal_.default-48.md#lock)

___

## moveCamera

▸ **moveCamera**(`cameraParameter`): `Promise`<`void`\>

Move camera based on provided camera parameters
- Uses center when target is not set
- Uses ideal distance when no distance is provided
- For other properties it used current camera parameters if not provided

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameter` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[moveCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#movecamera)

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<`any`\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-48.md#removeeventlistener)

___

## reset

▸ **reset**(`bounds`, `target?`, `yaw?`, `pitch?`, `animate?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bounds` | `Box3` | `undefined` |
| `target?` | `Vector3` | `undefined` |
| `yaw?` | `number` | `undefined` |
| `pitch?` | `number` | `undefined` |
| `animate` | `boolean` | `true` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[reset](configurator_core_src_roomle_configurator._internal_.default-48.md#reset)

___

## resetToState

▸ **resetToState**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[resetToState](configurator_core_src_roomle_configurator._internal_.default-48.md#resettostate)

___

## saveState

▸ **saveState**(`override`): [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `override` | `boolean` |

### Returns

[`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[saveState](configurator_core_src_roomle_configurator._internal_.default-48.md#savestate)

___

## setBounds

▸ **setBounds**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[setBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#setbounds)

___

## setObjectRotation

▸ **setObjectRotation**(`objectRotation`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `objectRotation` | `number` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[setObjectRotation](configurator_core_src_roomle_configurator._internal_.default-48.md#setobjectrotation)

___

## setToState

▸ **setToState**(`start`, `state`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |
| `state` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[setToState](configurator_core_src_roomle_configurator._internal_.default-48.md#settostate)

___

## unlock

▸ **unlock**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[unlock](configurator_core_src_roomle_configurator._internal_.default-48.md#unlock)

___

## updateAndReset

▸ **updateAndReset**(`boundingBox`, `animate?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `boundingBox` | `Box3` | `undefined` |
| `animate` | `boolean` | `true` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[updateAndReset](configurator_core_src_roomle_configurator._internal_.default-48.md#updateandreset)

___

## updateCamera

▸ **updateCamera**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[updateCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#updatecamera)

___

## updateToBounds

▸ **updateToBounds**(`boundingBox`, `isPreview`, `changeCamera?`, `target?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `boundingBox` | `Box3` | `undefined` |
| `isPreview` | `boolean` | `undefined` |
| `changeCamera` | `boolean` | `true` |
| `target?` | `Vector3` | `undefined` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[updateToBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#updatetobounds)

___

## zoomIn

▸ **zoomIn**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[zoomIn](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomin)

___

## zoomOut

▸ **zoomOut**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[zoomOut](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomout)

___

## zoomTo

▸ **zoomTo**(`cameraParameters`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameters` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[zoomTo](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomto)

___

## zoomToFitBounds

▸ **zoomToFitBounds**(`boundingBox`, `reset?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `boundingBox` | `Box3` | `undefined` |
| `reset` | `boolean` | `true` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-48.md).[zoomToFitBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomtofitbounds)
