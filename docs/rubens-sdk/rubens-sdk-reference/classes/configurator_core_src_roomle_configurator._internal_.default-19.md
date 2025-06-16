[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-19.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-19.md#_creator_)

## Methods

- [add](configurator_core_src_roomle_configurator._internal_.default-19.md#add)
- [hasComponentDimensions](configurator_core_src_roomle_configurator._internal_.default-19.md#hascomponentdimensions)
- [invalidateDimensioningsCache](configurator_core_src_roomle_configurator._internal_.default-19.md#invalidatedimensioningscache)
- [remove](configurator_core_src_roomle_configurator._internal_.default-19.md#remove)
- [reset](configurator_core_src_roomle_configurator._internal_.default-19.md#reset)
- [setCamera](configurator_core_src_roomle_configurator._internal_.default-19.md#setcamera)

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

# Methods

## add

▸ **add**(`component`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`boolean`

___

## hasComponentDimensions

▸ **hasComponentDimensions**(): `boolean`

### Returns

`boolean`

___

## invalidateDimensioningsCache

▸ **invalidateDimensioningsCache**(`componentRuntimeId?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentRuntimeId?` | `number` |

### Returns

`void`

___

## remove

▸ **remove**(`component`, `remove?`): `Promise`<`void`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) | `undefined` |
| `remove` | `boolean` | `true` |

### Returns

`Promise`<`void`\>

___

## reset

▸ **reset**(): `Promise`<`void`\>

### Returns

`Promise`<`void`\>

___

## setCamera

▸ **setCamera**(`camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |

### Returns

`void`
