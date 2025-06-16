[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-13.md)

  ↳ **`default`**

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-8.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-8.md#_creator_)

## Accessors

- [meta](configurator_core_src_roomle_configurator._internal_.default-8.md#meta)

## Methods

- [error](configurator_core_src_roomle_configurator._internal_.default-8.md#error)
- [info](configurator_core_src_roomle_configurator._internal_.default-8.md#info)
- [log](configurator_core_src_roomle_configurator._internal_.default-8.md#log)
- [setMeta](configurator_core_src_roomle_configurator._internal_.default-8.md#setmeta)
- [throw](configurator_core_src_roomle_configurator._internal_.default-8.md#throw)
- [warn](configurator_core_src_roomle_configurator._internal_.default-8.md#warn)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-13.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-13.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Accessors

## meta

• `get` **meta**(): [`KernelMessageMetaInfo`](../interfaces/configurator_core_src_configurator._internal_.KernelMessageMetaInfo.md)

### Returns

[`KernelMessageMetaInfo`](../interfaces/configurator_core_src_configurator._internal_.KernelMessageMetaInfo.md)

# Methods

## error

▸ **error**(`msg`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-13.md).[error](configurator_core_src_roomle_configurator._internal_.default-13.md#error)

___

## info

▸ **info**(`...args`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-13.md).[info](configurator_core_src_roomle_configurator._internal_.default-13.md#info)

___

## log

▸ **log**(`...args`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-13.md).[log](configurator_core_src_roomle_configurator._internal_.default-13.md#log)

___

## setMeta

▸ **setMeta**(`meta`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | `object` |

### Returns

`void`

___

## throw

▸ **throw**(`msg`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

### Returns

`void`

___

## warn

▸ **warn**(`msg`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-13.md).[warn](configurator_core_src_roomle_configurator._internal_.default-13.md#warn)
