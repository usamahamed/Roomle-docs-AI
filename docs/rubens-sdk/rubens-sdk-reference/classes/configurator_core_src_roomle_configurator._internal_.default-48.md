[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md)

  ↳ **`default`**

  ↳↳ [`default`](glb_viewer_core_src_roomle_glb_viewer._internal_.default-3.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-48.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-48.md#_creator_)
- [maxAzimuthAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#maxazimuthangle)
- [maxDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#maxdistance)
- [maxPolarAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#maxpolarangle)
- [minAzimuthAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#minazimuthangle)
- [minDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#mindistance)
- [minPolarAngle](configurator_core_src_roomle_configurator._internal_.default-48.md#minpolarangle)

## Accessors

- [domHelper](configurator_core_src_roomle_configurator._internal_.default-48.md#domhelper)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-48.md#addeventlistener)
- [addLightContainer](configurator_core_src_roomle_configurator._internal_.default-48.md#addlightcontainer)
- [adjustToBoundsWithoutChangingDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#adjusttoboundswithoutchangingdistance)
- [animateCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#animatecamera)
- [checkBoundsAndPlaceCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#checkboundsandplacecamera)
- [checkNearFarDistance](configurator_core_src_roomle_configurator._internal_.default-48.md#checknearfardistance)
- [cleanUp](configurator_core_src_roomle_configurator._internal_.default-48.md#cleanup)
- [clear](configurator_core_src_roomle_configurator._internal_.default-48.md#clear)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-48.md#disableevents)
- [disablePanning](configurator_core_src_roomle_configurator._internal_.default-48.md#disablepanning)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-48.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-48.md#enableevents)
- [enablePanning](configurator_core_src_roomle_configurator._internal_.default-48.md#enablepanning)
- [getCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#getcamera)
- [getCurrentCameraParameters](configurator_core_src_roomle_configurator._internal_.default-48.md#getcurrentcameraparameters)
- [getInputPosition](configurator_core_src_roomle_configurator._internal_.default-48.md#getinputposition)
- [getKernelZoomFactor](configurator_core_src_roomle_configurator._internal_.default-48.md#getkernelzoomfactor)
- [getObjectRotation](configurator_core_src_roomle_configurator._internal_.default-48.md#getobjectrotation)
- [getTargetPosition](configurator_core_src_roomle_configurator._internal_.default-48.md#gettargetposition)
- [hasSavedState](configurator_core_src_roomle_configurator._internal_.default-48.md#hassavedstate)
- [isLocked](configurator_core_src_roomle_configurator._internal_.default-48.md#islocked)
- [lock](configurator_core_src_roomle_configurator._internal_.default-48.md#lock)
- [moveCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#movecamera)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-48.md#removeeventlistener)
- [reset](configurator_core_src_roomle_configurator._internal_.default-48.md#reset)
- [resetToState](configurator_core_src_roomle_configurator._internal_.default-48.md#resettostate)
- [saveState](configurator_core_src_roomle_configurator._internal_.default-48.md#savestate)
- [setBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#setbounds)
- [setObjectRotation](configurator_core_src_roomle_configurator._internal_.default-48.md#setobjectrotation)
- [setToState](configurator_core_src_roomle_configurator._internal_.default-48.md#settostate)
- [unlock](configurator_core_src_roomle_configurator._internal_.default-48.md#unlock)
- [updateAndReset](configurator_core_src_roomle_configurator._internal_.default-48.md#updateandreset)
- [updateCamera](configurator_core_src_roomle_configurator._internal_.default-48.md#updatecamera)
- [updateToBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#updatetobounds)
- [zoomIn](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomin)
- [zoomOut](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomout)
- [zoomTo](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomto)
- [zoomToFitBounds](configurator_core_src_roomle_configurator._internal_.default-48.md#zoomtofitbounds)

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

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-47.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-47.md#_creator_)

___

## maxAzimuthAngle

• **maxAzimuthAngle**: `number` = `Number.POSITIVE_INFINITY`

___

## maxDistance

• **maxDistance**: `number` = `5`

___

## maxPolarAngle

• **maxPolarAngle**: `number`

___

## minAzimuthAngle

• **minAzimuthAngle**: `number` = `Number.NEGATIVE_INFINITY`

___

## minDistance

• **minDistance**: `number` = `0`

___

## minPolarAngle

• **minPolarAngle**: `number`

# Accessors

## domHelper

• `get` **domHelper**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

### Inherited from

CameraControl.domHelper

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-47.md#addeventlistener)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[addLightContainer](configurator_core_src_roomle_configurator._internal_.default-47.md#addlightcontainer)

___

## adjustToBoundsWithoutChangingDistance

▸ **adjustToBoundsWithoutChangingDistance**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

### Returns

`void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[animateCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#animatecamera)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[checkNearFarDistance](configurator_core_src_roomle_configurator._internal_.default-47.md#checknearfardistance)

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[cleanUp](configurator_core_src_roomle_configurator._internal_.default-47.md#cleanup)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-47.md#disableevents)

___

## disablePanning

▸ **disablePanning**(): `void`

### Returns

`void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-47.md#dispatchevent)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-47.md#enableevents)

___

## enablePanning

▸ **enablePanning**(): `void`

### Returns

`void`

___

## getCamera

▸ **getCamera**(): [`PerspectiveOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

### Returns

[`PerspectiveOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[getCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#getcamera)

___

## getCurrentCameraParameters

▸ **getCurrentCameraParameters**(): [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Returns

[`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[getCurrentCameraParameters](configurator_core_src_roomle_configurator._internal_.default-47.md#getcurrentcameraparameters)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[getInputPosition](configurator_core_src_roomle_configurator._internal_.default-47.md#getinputposition)

___

## getKernelZoomFactor

▸ **getKernelZoomFactor**(): `number`

### Returns

`number`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[getKernelZoomFactor](configurator_core_src_roomle_configurator._internal_.default-47.md#getkernelzoomfactor)

___

## getObjectRotation

▸ **getObjectRotation**(): `number`

### Returns

`number`

___

## getTargetPosition

▸ **getTargetPosition**(): `Vector3`

### Returns

`Vector3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[getTargetPosition](configurator_core_src_roomle_configurator._internal_.default-47.md#gettargetposition)

___

## hasSavedState

▸ **hasSavedState**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[hasSavedState](configurator_core_src_roomle_configurator._internal_.default-47.md#hassavedstate)

___

## isLocked

▸ **isLocked**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[isLocked](configurator_core_src_roomle_configurator._internal_.default-47.md#islocked)

___

## lock

▸ **lock**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[lock](configurator_core_src_roomle_configurator._internal_.default-47.md#lock)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-47.md#removeeventlistener)

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

___

## resetToState

▸ **resetToState**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[resetToState](configurator_core_src_roomle_configurator._internal_.default-47.md#resettostate)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[saveState](configurator_core_src_roomle_configurator._internal_.default-47.md#savestate)

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[setBounds](configurator_core_src_roomle_configurator._internal_.default-47.md#setbounds)

___

## setObjectRotation

▸ **setObjectRotation**(`objectRotation`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `objectRotation` | `number` |

### Returns

`void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[setToState](configurator_core_src_roomle_configurator._internal_.default-47.md#settostate)

___

## unlock

▸ **unlock**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[unlock](configurator_core_src_roomle_configurator._internal_.default-47.md#unlock)

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

___

## updateCamera

▸ **updateCamera**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[updateCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#updatecamera)

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

___

## zoomIn

▸ **zoomIn**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

___

## zoomOut

▸ **zoomOut**(`value?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

___

## zoomTo

▸ **zoomTo**(`cameraParameters`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameters` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

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
