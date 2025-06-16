[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default-8.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.default-8.md#_creator_)

## Methods

- [create](configurator_core_src_configurator._internal_.default-8.md#create)

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

## create

▸ **create**<`T`\>(`promiseCategory`, `promiseIdentifier`, `workToDo`): `Promise`<`T`\>

### Type parameters

| Name |
| :------ |
| `T` |

### Parameters

| Name | Type |
| :------ | :------ |
| `promiseCategory` | [`PROMISE_CATEGORY`](../enums/configurator_core_src_configurator._internal_.PROMISE_CATEGORY.md) |
| `promiseIdentifier` | `string` |
| `workToDo` | (`resolve`: (`data?`: `T`) => `void`, `reject`: (`error`: `Error`) => `void`) => `void` |

### Returns

`Promise`<`T`\>
