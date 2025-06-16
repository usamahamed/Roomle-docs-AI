[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-6.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-6.md#_creator_)

## Methods

- [cleanUp](configurator_core_src_roomle_configurator._internal_.default-6.md#cleanup)
- [fetch](configurator_core_src_roomle_configurator._internal_.default-6.md#fetch)
- [loadScripts](configurator_core_src_roomle_configurator._internal_.default-6.md#loadscripts)

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

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

___

## fetch

▸ **fetch**(`url`, `options`): `Promise`<`unknown`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `Object` |
| `options.id` | `string` |

### Returns

`Promise`<`unknown`\>

___

## loadScripts

▸ **loadScripts**(`scripts`): `Promise`<`any`[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `scripts` | [`ScriptData`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScriptData.md)[] |

### Returns

`Promise`<`any`[]\>
