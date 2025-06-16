[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-25.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-25.md#_creator_)

## Methods

- [loadUrl](configurator_core_src_roomle_configurator._internal_.default-25.md#loadurl)
- [registerEnvironmentChangedCallback](configurator_core_src_roomle_configurator._internal_.default-25.md#registerenvironmentchangedcallback)

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

## loadUrl

▸ **loadUrl**(`renderer`, `url`): `Promise`<[`EnvironmentMapResult`](../interfaces/configurator_core_src_roomle_configurator._internal_.EnvironmentMapResult.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `url` | `string` |

### Returns

`Promise`<[`EnvironmentMapResult`](../interfaces/configurator_core_src_roomle_configurator._internal_.EnvironmentMapResult.md)\>

___

## registerEnvironmentChangedCallback

▸ **registerEnvironmentChangedCallback**(`callBack`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `callBack` | (`maps`: [`EnvironmentMapResult`](../interfaces/configurator_core_src_roomle_configurator._internal_.EnvironmentMapResult.md)) => `void` |

### Returns

`void`
