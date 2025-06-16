[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).PlanObjectPtrVector

# Hierarchy

- [`EmsArray`](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md#emsarray)<[`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)\>

  ↳ **`PlanObjectPtrVector`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#constructor)

## Methods

- [clone](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#clone)
- [delete](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#delete)
- [deleteLater](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#deletelater)
- [get](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#get)
- [isAliasOf](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#isaliasof)
- [isDeleted](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#isdeleted)
- [push\_back](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#push_back)
- [resize](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#resize)
- [set](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#set)
- [size](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md#size)

# Constructors

## constructor

• **new PlanObjectPtrVector**()

### Inherited from

EmsArray<PlanObjectPtr\>.constructor

# Methods

## clone

▸ **clone**(`index`): [`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`EmsArray`](configurator_core_src_roomle_configurator._internal_.EmsArray.md)<[`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)\>

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

▸ **get**(`index`): [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

### Returns

[`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)

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
| `element` | [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md) |

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

▸ **set**(`index`, `element`): [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md) |

### Returns

[`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)

### Inherited from

EmsArray.set

___

## size

▸ **size**(): `number`

### Returns

`number`

### Inherited from

EmsArray.size
