[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-47.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-20.md#constructor)

## Properties

- [\_creator\_](planner_core_src_roomle_planner._internal_.default-20.md#_creator_)

## Accessors

- [domHelper](planner_core_src_roomle_planner._internal_.default-20.md#domhelper)

## Methods

- [addEventListener](planner_core_src_roomle_planner._internal_.default-20.md#addeventlistener)
- [addLightContainer](planner_core_src_roomle_planner._internal_.default-20.md#addlightcontainer)
- [animateCamera](planner_core_src_roomle_planner._internal_.default-20.md#animatecamera)
- [checkNearFarDistance](planner_core_src_roomle_planner._internal_.default-20.md#checknearfardistance)
- [cleanUp](planner_core_src_roomle_planner._internal_.default-20.md#cleanup)
- [disableEvents](planner_core_src_roomle_planner._internal_.default-20.md#disableevents)
- [dispatchEvent](planner_core_src_roomle_planner._internal_.default-20.md#dispatchevent)
- [enableEvents](planner_core_src_roomle_planner._internal_.default-20.md#enableevents)
- [getCamera](planner_core_src_roomle_planner._internal_.default-20.md#getcamera)
- [getCurrentCameraParameters](planner_core_src_roomle_planner._internal_.default-20.md#getcurrentcameraparameters)
- [getInputPosition](planner_core_src_roomle_planner._internal_.default-20.md#getinputposition)
- [getKernelZoomFactor](planner_core_src_roomle_planner._internal_.default-20.md#getkernelzoomfactor)
- [getTargetPosition](planner_core_src_roomle_planner._internal_.default-20.md#gettargetposition)
- [hasSavedState](planner_core_src_roomle_planner._internal_.default-20.md#hassavedstate)
- [isLocked](planner_core_src_roomle_planner._internal_.default-20.md#islocked)
- [lock](planner_core_src_roomle_planner._internal_.default-20.md#lock)
- [removeEventListener](planner_core_src_roomle_planner._internal_.default-20.md#removeeventlistener)
- [resetToState](planner_core_src_roomle_planner._internal_.default-20.md#resettostate)
- [saveState](planner_core_src_roomle_planner._internal_.default-20.md#savestate)
- [setBounds](planner_core_src_roomle_planner._internal_.default-20.md#setbounds)
- [setToState](planner_core_src_roomle_planner._internal_.default-20.md#settostate)
- [unlock](planner_core_src_roomle_planner._internal_.default-20.md#unlock)
- [updateCamera](planner_core_src_roomle_planner._internal_.default-20.md#updatecamera)
- [zoomToFitBounds](planner_core_src_roomle_planner._internal_.default-20.md#zoomtofitbounds)

# Constructors

## constructor

• **new default**(`creator`, `inputManager`, `initialCameraPosition?`, `camera?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |
| `initialCameraPosition?` | `Vector3` |
| `camera?` | [`OrthographicOffsetCamera`](../interfaces/configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-47.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-47.md#_creator_)

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

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-47.md#disableevents)

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

## getCamera

▸ **getCamera**(): [`PerspectiveOrOrthographicCamera`](../modules/configurator_core_src_roomle_configurator._internal_.md#perspectiveororthographiccamera)

### Returns

[`PerspectiveOrOrthographicCamera`](../modules/configurator_core_src_roomle_configurator._internal_.md#perspectiveororthographiccamera)

### Inherited from

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

## updateCamera

▸ **updateCamera**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-47.md).[updateCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#updatecamera)

___

## zoomToFitBounds

▸ **zoomToFitBounds**(`bounds`, `zoomInAllowed`, `force?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |
| `zoomInAllowed` | `boolean` |
| `force?` | `boolean` |

### Returns

`void`
