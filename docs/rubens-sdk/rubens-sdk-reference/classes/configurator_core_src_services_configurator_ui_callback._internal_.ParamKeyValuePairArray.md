[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).ParamKeyValuePairArray

# Hierarchy

- [`EmsArray`](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md#emsarray)<[`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)\>

  ↳ **`ParamKeyValuePairArray`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#constructor)

## Methods

- [clone](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#clone)
- [delete](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#delete)
- [deleteLater](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#deletelater)
- [get](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#get)
- [isAliasOf](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#isaliasof)
- [isDeleted](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#isdeleted)
- [push\_back](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#push_back)
- [resize](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#resize)
- [set](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#set)
- [size](configurator_core_src_services_configurator_ui_callback._internal_.ParamKeyValuePairArray.md#size)

# Constructors

## constructor

• **new ParamKeyValuePairArray**()

### Inherited from

EmsArray<KernelParamKeyValuePair\>.constructor

# Methods

## clone

▸ **clone**(`index`): [`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)\>

### Inherited from

EmsArray.clone

___

## delete

▸ **delete**(`index`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`void`

### Inherited from

EmsArray.delete

___

## deleteLater

▸ **deleteLater**(`index`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`void`

### Inherited from

EmsArray.deleteLater

___

## get

▸ **get**(`index`): [`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)

### Inherited from

EmsArray.get

___

## isAliasOf

▸ **isAliasOf**(`index`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`boolean`

### Inherited from

EmsArray.isAliasOf

___

## isDeleted

▸ **isDeleted**(`index`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

`boolean`

### Inherited from

EmsArray.isDeleted

___

## push\_back

▸ **push_back**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md) |

### Returns

`void`

### Inherited from

EmsArray.push\_back

___

## resize

▸ **resize**(`from`, `to`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

### Returns

`void`

### Inherited from

EmsArray.resize

___

## set

▸ **set**(`index`, `element`): [`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | [`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md) |

### Returns

[`KernelParamKeyValuePair`](../interfaces/typings_kernel.KernelParamKeyValuePair.md)

### Inherited from

EmsArray.set

___

## size

▸ **size**(): `number`

### Returns

`number`

### Inherited from

EmsArray.size
