[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).RangeArray

# Hierarchy

- [`EmsArray`](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md#emsarray-1)<[`KernelRange`](../interfaces/typings_kernel.KernelRange.md)\>

  ↳ **`RangeArray`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#constructor)

## Methods

- [clone](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#clone)
- [delete](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#delete)
- [deleteLater](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#deletelater)
- [get](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#get)
- [isAliasOf](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#isaliasof)
- [isDeleted](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#isdeleted)
- [push\_back](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#push_back)
- [resize](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#resize)
- [set](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#set)
- [size](configurator_core_src_services_configurator_ui_callback._internal_.RangeArray-1.md#size)

# Constructors

## constructor

• **new RangeArray**()

### Inherited from

EmsArray<KernelRange\>.constructor

# Methods

## clone

▸ **clone**(`index`): [`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`KernelRange`](../interfaces/typings_kernel.KernelRange.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`KernelRange`](../interfaces/typings_kernel.KernelRange.md)\>

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

▸ **get**(`index`): [`KernelRange`](../interfaces/typings_kernel.KernelRange.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`KernelRange`](../interfaces/typings_kernel.KernelRange.md)

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
| `element` | [`KernelRange`](../interfaces/typings_kernel.KernelRange.md) |

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

▸ **set**(`index`, `element`): [`KernelRange`](../interfaces/typings_kernel.KernelRange.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | [`KernelRange`](../interfaces/typings_kernel.KernelRange.md) |

### Returns

[`KernelRange`](../interfaces/typings_kernel.KernelRange.md)

### Inherited from

EmsArray.set

___

## size

▸ **size**(): `number`

### Returns

`number`

### Inherited from

EmsArray.size
