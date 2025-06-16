[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).LightSource

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.LightSource.md#constructor)

## Properties

- [averageIntensity](configurator_core_src_roomle_configurator._internal_.LightSource.md#averageintensity)
- [lightSamples](configurator_core_src_roomle_configurator._internal_.LightSource.md#lightsamples)
- [maxIntensity](configurator_core_src_roomle_configurator._internal_.LightSource.md#maxintensity)
- [position](configurator_core_src_roomle_configurator._internal_.LightSource.md#position)
- [size](configurator_core_src_roomle_configurator._internal_.LightSource.md#size)
- [uv](configurator_core_src_roomle_configurator._internal_.LightSource.md#uv)

## Methods

- [calculateLightSourceProperties](configurator_core_src_roomle_configurator._internal_.LightSource.md#calculatelightsourceproperties)

# Constructors

## constructor

• **new LightSource**(`lightSamples`)

### Parameters

| Name | Type |
| :------ | :------ |
| `lightSamples` | [`LightSample`](configurator_core_src_roomle_configurator._internal_.LightSample.md)[] |

# Properties

## averageIntensity

• **averageIntensity**: `number` = `0`

___

## lightSamples

• `Readonly` **lightSamples**: [`LightSample`](configurator_core_src_roomle_configurator._internal_.LightSample.md)[]

___

## maxIntensity

• **maxIntensity**: `number` = `0`

___

## position

• **position**: `Vector3`

___

## size

• **size**: `number` = `0`

___

## uv

• **uv**: `Vector2`

# Methods

## calculateLightSourceProperties

▸ **calculateLightSourceProperties**(`luminanceFunction`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `luminanceFunction` | (`uv`: `Vector2`) => `number` |

### Returns

`void`
