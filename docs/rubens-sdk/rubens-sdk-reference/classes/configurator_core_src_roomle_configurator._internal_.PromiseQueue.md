[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PromiseQueue

# Type parameters

| Name |
| :------ |
| `T` |

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#constructor)

## Accessors

- [length](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#length)

## Methods

- [clear](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#clear)
- [finished](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#finished)
- [push](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#push)
- [registerCallback](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#registercallback)
- [unregisterCallback](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md#unregistercallback)

# Constructors

## constructor

• **new PromiseQueue**<`T`\>(`callback?`, `errorCallback?`)

### Type parameters

| Name |
| :------ |
| `T` |

### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`results`: `T`[]) => `void` |
| `errorCallback?` | (`e`: `Error`) => `void` |

# Accessors

## length

• `get` **length**(): `number`

### Returns

`number`

# Methods

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## finished

▸ **finished**(`ignoreErrors?`): `Promise`<`T`[]\>

Wait for current queue to finish

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ignoreErrors` | `boolean` | `false` |

### Returns

`Promise`<`T`[]\>

___

## push

▸ **push**(`promise`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |

### Returns

`void`

___

## registerCallback

▸ **registerCallback**(`callback`): `void`

Callback whenever queue is finished

### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`results`: `T`[]) => `void` |

### Returns

`void`

___

## unregisterCallback

▸ **unregisterCallback**(): `void`

### Returns

`void`
