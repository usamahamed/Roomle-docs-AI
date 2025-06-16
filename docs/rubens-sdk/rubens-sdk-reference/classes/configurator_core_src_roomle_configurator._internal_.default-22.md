[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-22.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-22.md#_creator_)

## Methods

- [\_clear](configurator_core_src_roomle_configurator._internal_.default-22.md#_clear)
- [addToObject](configurator_core_src_roomle_configurator._internal_.default-22.md#addtoobject)
- [addToUiScene](configurator_core_src_roomle_configurator._internal_.default-22.md#addtouiscene)
- [areDimensionsEnabled](configurator_core_src_roomle_configurator._internal_.default-22.md#aredimensionsenabled)
- [clearScene](configurator_core_src_roomle_configurator._internal_.default-22.md#clearscene)
- [disableDimensions](configurator_core_src_roomle_configurator._internal_.default-22.md#disabledimensions)
- [disableTopDimensions](configurator_core_src_roomle_configurator._internal_.default-22.md#disabletopdimensions)
- [enableDimensions](configurator_core_src_roomle_configurator._internal_.default-22.md#enabledimensions)
- [enableTopDimensions](configurator_core_src_roomle_configurator._internal_.default-22.md#enabletopdimensions)
- [getBoundingBox](configurator_core_src_roomle_configurator._internal_.default-22.md#getboundingbox)
- [isInitialized](configurator_core_src_roomle_configurator._internal_.default-22.md#isinitialized)
- [moveCameraEnd](configurator_core_src_roomle_configurator._internal_.default-22.md#movecameraend)
- [moveCameraStart](configurator_core_src_roomle_configurator._internal_.default-22.md#movecamerastart)
- [onDimensionsVisibilityChanged](configurator_core_src_roomle_configurator._internal_.default-22.md#ondimensionsvisibilitychanged)
- [removeFromObject](configurator_core_src_roomle_configurator._internal_.default-22.md#removefromobject)
- [removeFromUiScene](configurator_core_src_roomle_configurator._internal_.default-22.md#removefromuiscene)
- [setObject](configurator_core_src_roomle_configurator._internal_.default-22.md#setobject)
- [setUiScene](configurator_core_src_roomle_configurator._internal_.default-22.md#setuiscene)
- [update](configurator_core_src_roomle_configurator._internal_.default-22.md#update)
- [updateSize](configurator_core_src_roomle_configurator._internal_.default-22.md#updatesize)

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

# Methods

## \_clear

▸ **_clear**(): `void`

### Returns

`void`

___

## addToObject

▸ **addToObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## addToUiScene

▸ **addToUiScene**(`uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `uiScene` | `Scene` |

### Returns

`void`

___

## areDimensionsEnabled

▸ **areDimensionsEnabled**(): `boolean`

### Returns

`boolean`

___

## clearScene

▸ **clearScene**(`_scene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_scene` | `Scene` |

### Returns

`void`

___

## disableDimensions

▸ **disableDimensions**(): `void`

### Returns

`void`

___

## disableTopDimensions

▸ **disableTopDimensions**(): `void`

### Returns

`void`

___

## enableDimensions

▸ **enableDimensions**(): `void`

### Returns

`void`

___

## enableTopDimensions

▸ **enableTopDimensions**(): `void`

### Returns

`void`

___

## getBoundingBox

▸ **getBoundingBox**(): `Box3`

### Returns

`Box3`

___

## isInitialized

▸ **isInitialized**(): `Promise`<`void`\>

### Returns

`Promise`<`void`\>

___

## moveCameraEnd

▸ **moveCameraEnd**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

___

## moveCameraStart

▸ **moveCameraStart**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

___

## onDimensionsVisibilityChanged

▸ **onDimensionsVisibilityChanged**(`handler`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`visible`: `boolean`) => `void` |

### Returns

`void`

___

## removeFromObject

▸ **removeFromObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## removeFromUiScene

▸ **removeFromUiScene**(`uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `uiScene` | `Scene` |

### Returns

`void`

___

## setObject

▸ **setObject**(`object`, `rotation?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> | `undefined` |
| `rotation` | `number` | `0` |

### Returns

`void`

___

## setUiScene

▸ **setUiScene**(`uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `uiScene` | `Scene` |

### Returns

`void`

___

## update

▸ **update**(`force?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

### Returns

`void`

___

## updateSize

▸ **updateSize**(`boxForMeasurement`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boxForMeasurement` | [`KernelCube`](../interfaces/typings_kernel.KernelCube.md) |

### Returns

`void`
