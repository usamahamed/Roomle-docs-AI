[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default-3.md#constructor)

## Methods

- [dispatch](configurator_core_src_configurator._internal_.default-3.md#dispatch)
- [softReject](configurator_core_src_configurator._internal_.default-3.md#softreject)
- [subscribe](configurator_core_src_configurator._internal_.default-3.md#subscribe)
- [unsubscribe](configurator_core_src_configurator._internal_.default-3.md#unsubscribe)

# Constructors

## constructor

• **new default**()

# Methods

## dispatch

▸ **dispatch**(`errorCode`, `args?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`ERROR_CODES`](../enums/configurator_core_src_configurator._internal_.ERROR_CODES.md) |
| `args?` | `any`[] |

### Returns

`void`

___

## softReject

▸ **softReject**(`resolve`, `errorMessage`, `errorCode`): `any`

### Parameters

| Name | Type |
| :------ | :------ |
| `resolve` | (...`args`: `any`[]) => `any` |
| `errorMessage` | `string` |
| `errorCode` | [`ERROR_CODES`](../enums/configurator_core_src_configurator._internal_.ERROR_CODES.md) |

### Returns

`any`

___

## subscribe

▸ **subscribe**(`errorCode`, `callback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`ERROR_CODES`](../enums/configurator_core_src_configurator._internal_.ERROR_CODES.md) |
| `callback` | [`ErrorListener`](../modules/configurator_core_src_configurator._internal_.md#errorlistener) |

### Returns

`void`

___

## unsubscribe

▸ **unsubscribe**(`errorCode`, `callback`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`ERROR_CODES`](../enums/configurator_core_src_configurator._internal_.ERROR_CODES.md) |
| `callback` | [`ErrorListener`](../modules/configurator_core_src_configurator._internal_.md#errorlistener) |

### Returns

`void`
