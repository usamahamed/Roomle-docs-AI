[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-9.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-9.md#_creator_)

## Methods

- [canRedo](configurator_core_src_roomle_configurator._internal_.default-9.md#canredo)
- [canUndo](configurator_core_src_roomle_configurator._internal_.default-9.md#canundo)
- [clearHistory](configurator_core_src_roomle_configurator._internal_.default-9.md#clearhistory)
- [getHistory](configurator_core_src_roomle_configurator._internal_.default-9.md#gethistory)
- [push](configurator_core_src_roomle_configurator._internal_.default-9.md#push)
- [redo](configurator_core_src_roomle_configurator._internal_.default-9.md#redo)
- [undo](configurator_core_src_roomle_configurator._internal_.default-9.md#undo)

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

## canRedo

▸ **canRedo**(): `boolean`

checks if there are newer configurations

### Returns

`boolean`

true if current configuration is not the latest configuration

___

## canUndo

▸ **canUndo**(): `boolean`

checks if there are any changes on the item already happened

### Returns

`boolean`

true if the current configuration is not the default configuration

___

## clearHistory

▸ **clearHistory**(): `void`

clears history and make new empty history array
sets index on 0 that no undo and redo is possible

### Returns

`void`

___

## getHistory

▸ **getHistory**(): `string`[]

### Returns

`string`[]

array of all configuration strings

___

## push

▸ **push**(`configurationString`): `void`

pushes new configurationString to history Array
is called when changes on the item happened

### Parameters

| Name | Type |
| :------ | :------ |
| `configurationString` | `string` |

### Returns

`void`

___

## redo

▸ **redo**(): `string`

loads the configurationString of the configuration which was set before undo function was called
only possible if undo function was called before

### Returns

`string`

configurationString of configuration before undo was called or null if canRedo returns false

___

## undo

▸ **undo**(): `string`

loads the configurationString of the configuration which was set before
only possible if there are some changes on the current item

### Returns

`string`

configurationString of lastAction or null if canUndo returns false
