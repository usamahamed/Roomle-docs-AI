[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).UnitMeasureFormatter

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#constructor)

## Methods

- [formatMMValueToUnitString](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#formatmmvaluetounitstring)
- [formatMMValueWithReqMaxLength](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#formatmmvaluewithreqmaxlength)
- [formatNumber](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#formatnumber)
- [formatSquareMMValueToUnitString](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#formatsquaremmvaluetounitstring)
- [init](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#init)
- [isParseableNumber](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#isparseablenumber)
- [isParseableUnitString](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#isparseableunitstring)
- [parseMMValueFromUnitString](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#parsemmvaluefromunitstring)
- [parseNumber](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#parsenumber)
- [parseSquareMMValueFromUnitString](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#parsesquaremmvaluefromunitstring)
- [showExactValues](configurator_core_src_services_configurator_ui_callback._internal_.UnitMeasureFormatter-1.md#showexactvalues)

# Constructors

## constructor

• **new UnitMeasureFormatter**()

# Methods

## formatMMValueToUnitString

▸ **formatMMValueToUnitString**(`aValue`, `aUnit`, `aStringType`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |
| `aStringType` | [`UnitStringType`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.UnitStringType-1.md) |

### Returns

`string`

___

## formatMMValueWithReqMaxLength

▸ **formatMMValueWithReqMaxLength**(`aValue`, `aUnit`, `reqMaxSize`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |
| `reqMaxSize` | `number` |

### Returns

`string`

___

## formatNumber

▸ **formatNumber**(`aValue`, `digit`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `digit` | `number` |

### Returns

`string`

___

## formatSquareMMValueToUnitString

▸ **formatSquareMMValueToUnitString**(`aValue`, `aUnit`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aValue` | `number` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |

### Returns

`string`

___

## init

▸ **init**(`mmLabel`, `cmLabel`, `ftShortLabel`, `ftLongLabel`, `inchShortLabel`, `inchLongLabel`, `sqMLabel`, `sqftLabel`, `showExactValue`, `maxPrecision`, `showFractionalUnitString`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mmLabel` | `string` |
| `cmLabel` | `string` |
| `ftShortLabel` | `string` |
| `ftLongLabel` | `string` |
| `inchShortLabel` | `string` |
| `inchLongLabel` | `string` |
| `sqMLabel` | `string` |
| `sqftLabel` | `string` |
| `showExactValue` | `boolean` |
| `maxPrecision` | `number` |
| `showFractionalUnitString` | `boolean` |

### Returns

`void`

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

▸ **isParseableUnitString**(`aString`, `aUnit`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |

### Returns

`boolean`

___

## parseMMValueFromUnitString

▸ **parseMMValueFromUnitString**(`aString`, `aUnit`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |

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

## parseSquareMMValueFromUnitString

▸ **parseSquareMMValueFromUnitString**(`aString`, `aUnit`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aString` | `string` |
| `aUnit` | [`Unit`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.Unit-1.md) |

### Returns

`number`

___

## showExactValues

▸ **showExactValues**(`shouldeI`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `shouldeI` | `boolean` |

### Returns

`void`
