[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<`any`\>

  ↳ **`default`**

  ↳↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-48.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-20.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-21.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-47.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-47.md#_creator_)

## Accessors

- [domHelper](configurator_core_src_roomle_configurator._internal_.default-47.md#domhelper)

## Methods

- [addEventListener](configurator_core_src_roomle_configurator._internal_.default-47.md#addeventlistener)
- [addLightContainer](configurator_core_src_roomle_configurator._internal_.default-47.md#addlightcontainer)
- [animateCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#animatecamera)
- [checkNearFarDistance](configurator_core_src_roomle_configurator._internal_.default-47.md#checknearfardistance)
- [cleanUp](configurator_core_src_roomle_configurator._internal_.default-47.md#cleanup)
- [disableEvents](configurator_core_src_roomle_configurator._internal_.default-47.md#disableevents)
- [dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-47.md#dispatchevent)
- [enableEvents](configurator_core_src_roomle_configurator._internal_.default-47.md#enableevents)
- [getCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#getcamera)
- [getCurrentCameraParameters](configurator_core_src_roomle_configurator._internal_.default-47.md#getcurrentcameraparameters)
- [getInputPosition](configurator_core_src_roomle_configurator._internal_.default-47.md#getinputposition)
- [getKernelZoomFactor](configurator_core_src_roomle_configurator._internal_.default-47.md#getkernelzoomfactor)
- [getTargetPosition](configurator_core_src_roomle_configurator._internal_.default-47.md#gettargetposition)
- [hasSavedState](configurator_core_src_roomle_configurator._internal_.default-47.md#hassavedstate)
- [isLocked](configurator_core_src_roomle_configurator._internal_.default-47.md#islocked)
- [lock](configurator_core_src_roomle_configurator._internal_.default-47.md#lock)
- [removeEventListener](configurator_core_src_roomle_configurator._internal_.default-47.md#removeeventlistener)
- [resetToState](configurator_core_src_roomle_configurator._internal_.default-47.md#resettostate)
- [saveState](configurator_core_src_roomle_configurator._internal_.default-47.md#savestate)
- [setBounds](configurator_core_src_roomle_configurator._internal_.default-47.md#setbounds)
- [setToState](configurator_core_src_roomle_configurator._internal_.default-47.md#settostate)
- [unlock](configurator_core_src_roomle_configurator._internal_.default-47.md#unlock)
- [updateCamera](configurator_core_src_roomle_configurator._internal_.default-47.md#updatecamera)

# Constructors

## constructor

• **new default**(`creator`, `inputManager`, `initialCameraPosition?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `inputManager` | [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md) |
| `initialCameraPosition?` | `Vector3` |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Accessors

## domHelper

• `get` **domHelper**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-2.md)

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## addLightContainer

▸ **addLightContainer**(`container`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Object3D`<`Object3DEventMap`\> |

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

___

## checkNearFarDistance

▸ **checkNearFarDistance**(`point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector3` |

### Returns

`void`

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#disableevents)

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#enableevents)

___

## getCamera

▸ **getCamera**(): [`PerspectiveOrOrthographicCamera`](../modules/configurator_core_src_roomle_configurator._internal_.md#perspectiveororthographiccamera)

### Returns

[`PerspectiveOrOrthographicCamera`](../modules/configurator_core_src_roomle_configurator._internal_.md#perspectiveororthographiccamera)

___

## getCurrentCameraParameters

▸ **getCurrentCameraParameters**(): [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Returns

[`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

___

## getInputPosition

▸ **getInputPosition**(`position`): `Vector3`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position2`](../interfaces/common_core_src_common_interfaces.Position2.md) |

### Returns

`Vector3`

___

## getKernelZoomFactor

▸ `Abstract` **getKernelZoomFactor**(): `number`

### Returns

`number`

___

## getTargetPosition

▸ **getTargetPosition**(): `Vector3`

### Returns

`Vector3`

___

## hasSavedState

▸ **hasSavedState**(): `boolean`

### Returns

`boolean`

___

## isLocked

▸ **isLocked**(): `boolean`

### Returns

`boolean`

___

## lock

▸ **lock**(): `void`

### Returns

`void`

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

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

___

## resetToState

▸ **resetToState**(): `void`

### Returns

`void`

___

## saveState

▸ **saveState**(`override`): [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `override` | `boolean` |

### Returns

[`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md)

___

## setBounds

▸ **setBounds**(`boundingBox`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | `Box3` |

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

___

## unlock

▸ **unlock**(): `void`

### Returns

`void`

___

## updateCamera

▸ `Abstract` **updateCamera**(): `void`

### Returns

`void`
