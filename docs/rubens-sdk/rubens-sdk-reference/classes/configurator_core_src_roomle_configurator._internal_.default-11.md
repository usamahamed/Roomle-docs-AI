[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<[`RoomleToolsCoreUICallback`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleToolsCoreUICallback.md)\>

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-11.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-11.md#_creator_)
- [\_kernelCallbacks](configurator_core_src_roomle_configurator._internal_.default-11.md#_kernelcallbacks)
- [callbacks](configurator_core_src_roomle_configurator._internal_.default-11.md#callbacks)

## Methods

- [analyzeComponent](configurator_core_src_roomle_configurator._internal_.default-11.md#analyzecomponent)
- [init](configurator_core_src_roomle_configurator._internal_.default-11.md#init)

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

___

## \_kernelCallbacks

• **\_kernelCallbacks**: [`ToolsCoreContextCallback`](../interfaces/configurator_core_src_roomle_configurator._internal_.ToolsCoreContextCallback.md)

___

## callbacks

• **callbacks**: [`RoomleToolsCoreUICallback`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleToolsCoreUICallback.md)

### Implementation of

[ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md).[callbacks](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md#callbacks)

# Methods

## analyzeComponent

▸ **analyzeComponent**(`componentDefinition`, `source`): `Promise`<[`MessageObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.MessageObject.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `componentDefinition` | `string` |
| `source` | `string` |

### Returns

`Promise`<[`MessageObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.MessageObject.md)[]\>

___

## init

▸ **init**(): `Promise`<`void`\>

### Returns

`Promise`<`void`\>
