[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md)
- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-2.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-2.md#_creator_)

## Accessors

- [element](configurator_core_src_roomle_configurator._internal_.default-2.md#element)

## Methods

- [destroy](configurator_core_src_roomle_configurator._internal_.default-2.md#destroy)
- [getClientDimensions](configurator_core_src_roomle_configurator._internal_.default-2.md#getclientdimensions)
- [pause](configurator_core_src_roomle_configurator._internal_.default-2.md#pause)
- [reset](configurator_core_src_roomle_configurator._internal_.default-2.md#reset)
- [resume](configurator_core_src_roomle_configurator._internal_.default-2.md#resume)
- [setDomElement](configurator_core_src_roomle_configurator._internal_.default-2.md#setdomelement)

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

# Accessors

## element

• `get` **element**(): `HTMLElement`

### Returns

`HTMLElement`

# Methods

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.destroy

___

## getClientDimensions

▸ **getClientDimensions**(): `Vector2`

### Returns

`Vector2`

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.pause

___

## reset

▸ **reset**(): `void`

### Returns

`void`

___

## resume

▸ **resume**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.resume

___

## setDomElement

▸ **setDomElement**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

### Returns

`void`
