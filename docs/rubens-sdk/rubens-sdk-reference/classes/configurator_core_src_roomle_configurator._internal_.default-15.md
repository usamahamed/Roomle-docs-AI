[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`KernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-15.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-15.md#_creator_)

## Methods

- [addListener](configurator_core_src_roomle_configurator._internal_.default-15.md#addlistener)
- [isReady](configurator_core_src_roomle_configurator._internal_.default-15.md#isready)
- [loadError](configurator_core_src_roomle_configurator._internal_.default-15.md#loaderror)
- [removeListener](configurator_core_src_roomle_configurator._internal_.default-15.md#removelistener)

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

## addListener

▸ **addListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`KernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md) |

### Returns

`void`

___

## isReady

▸ **isReady**(): `void`

### Returns

`void`

### Implementation of

[KernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[isReady](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#isready)

___

## loadError

▸ **loadError**(`error?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

### Returns

`void`

### Implementation of

[KernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[loadError](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#loaderror)

___

## removeListener

▸ **removeListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`KernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md) |

### Returns

`void`
