[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default.md#constructor)

## Properties

- [\_actualUnitString](configurator_core_src_roomle_configurator._internal_.default.md#_actualunitstring)
- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default.md#_creator_)

## Methods

- [formatAngleValueToUnitString](configurator_core_src_roomle_configurator._internal_.default.md#formatanglevaluetounitstring)
- [formatMMValueToUnitString](configurator_core_src_roomle_configurator._internal_.default.md#formatmmvaluetounitstring)
- [formatMMValueWithReqMaxLength](configurator_core_src_roomle_configurator._internal_.default.md#formatmmvaluewithreqmaxlength)
- [formatNumber](configurator_core_src_roomle_configurator._internal_.default.md#formatnumber)
- [formatParameter](configurator_core_src_roomle_configurator._internal_.default.md#formatparameter)
- [formatPartListParameter](configurator_core_src_roomle_configurator._internal_.default.md#formatpartlistparameter)
- [formatSquareMMValueToUnitString](configurator_core_src_roomle_configurator._internal_.default.md#formatsquaremmvaluetounitstring)
- [formatValueToUnitString](configurator_core_src_roomle_configurator._internal_.default.md#formatvaluetounitstring)
- [getActualMeasurementString](configurator_core_src_roomle_configurator._internal_.default.md#getactualmeasurementstring)
- [getActualUnitString](configurator_core_src_roomle_configurator._internal_.default.md#getactualunitstring)
- [getAllowedDelta](configurator_core_src_roomle_configurator._internal_.default.md#getalloweddelta)
- [getPrecision](configurator_core_src_roomle_configurator._internal_.default.md#getprecision)
- [getUnitStringType](configurator_core_src_roomle_configurator._internal_.default.md#getunitstringtype)
- [init](configurator_core_src_roomle_configurator._internal_.default.md#init)
- [isInch](configurator_core_src_roomle_configurator._internal_.default.md#isinch)
- [isParseableNumber](configurator_core_src_roomle_configurator._internal_.default.md#isparseablenumber)
- [isParseableUnitString](configurator_core_src_roomle_configurator._internal_.default.md#isparseableunitstring)
- [parseAngleValueFromUnitString](configurator_core_src_roomle_configurator._internal_.default.md#parseanglevaluefromunitstring)
- [parseMMValueFromUnitString](configurator_core_src_roomle_configurator._internal_.default.md#parsemmvaluefromunitstring)
- [parseNumber](configurator_core_src_roomle_configurator._internal_.default.md#parsenumber)
- [parseValue](configurator_core_src_roomle_configurator._internal_.default.md#parsevalue)
- [setUnitInitData](configurator_core_src_roomle_configurator._internal_.default.md#setunitinitdata)

# Constructors

## constructor

• **new default**(`creator?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator?` | `string` |

# Properties

## \_actualUnitString

• **\_actualUnitString**: `string`

___

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## formatAngleValueToUnitString

▸ **formatAngleValueToUnitString**(`value`, `parameter`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`string`

___

## formatMMValueToUnitString

▸ **formatMMValueToUnitString**(`aValue`, `unitType?`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `unitType?` | `string` |

### Returns

`string`

___

## formatMMValueWithReqMaxLength

▸ **formatMMValueWithReqMaxLength**(`aValue`, `reqMaxSize`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `reqMaxSize` | `number` |

### Returns

`string`

___

## formatNumber

▸ **formatNumber**(`aValue`, `digit?`): `string`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aValue` | `number` | `undefined` |
| `digit` | `number` | `0` |

### Returns

`string`

___

## formatParameter

▸ **formatParameter**(`parameter`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | [`UiKernelParameter`](../interfaces/typings_kernel.UiKernelParameter.md) |

### Returns

`void`

___

## formatPartListParameter

▸ **formatPartListParameter**(`parameter`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | [`KernelPartListParameter`](../interfaces/typings_kernel.KernelPartListParameter.md) |

### Returns

`void`

___

## formatSquareMMValueToUnitString

▸ **formatSquareMMValueToUnitString**(`aValue`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |

### Returns

`string`

___

## formatValueToUnitString

▸ **formatValueToUnitString**(`value`, `parameter`): `string` \| `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`string` \| `number`

___

## getActualMeasurementString

▸ **getActualMeasurementString**(): `string`

### Returns

`string`

___

## getActualUnitString

▸ **getActualUnitString**(): `string`

### Returns

`string`

___

## getAllowedDelta

▸ **getAllowedDelta**(): `number`

### Returns

`number`

___

## getPrecision

▸ **getPrecision**(): `number`

### Returns

`number`

___

## getUnitStringType

▸ **getUnitStringType**(): `string`

### Returns

`string`

___

## init

▸ **init**(`kernelContainer`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelContainer` | `any` |

### Returns

`void`

___

## isInch

▸ **isInch**(): `boolean`

### Returns

`boolean`

___

## isParseableNumber

▸ **isParseableNumber**(`aString`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |

### Returns

`boolean`

___

## isParseableUnitString

▸ **isParseableUnitString**(`aString`, `parameter`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`boolean`

___

## parseAngleValueFromUnitString

▸ **parseAngleValueFromUnitString**(`rotation`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `string` |

### Returns

`string`

___

## parseMMValueFromUnitString

▸ **parseMMValueFromUnitString**(`aString`, `unitType`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |
| `unitType` | `string` |

### Returns

`number`

___

## parseNumber

▸ **parseNumber**(`aString`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |

### Returns

`number`

___

## parseValue

▸ **parseValue**(`value`, `parameter`): `string` \| `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`string` \| `number`

___

## setUnitInitData

▸ **setUnitInitData**(`unit`, `measurementSystem?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `unit` | `string` | `undefined` |
| `measurementSystem` | `string` | `''` |

### Returns

`void`
