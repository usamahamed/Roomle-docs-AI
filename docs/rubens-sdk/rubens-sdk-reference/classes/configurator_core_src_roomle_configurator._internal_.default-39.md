[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-39.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-39.md#_creator_)

## Methods

- [loadGLB](configurator_core_src_roomle_configurator._internal_.default-39.md#loadglb)
- [loadGLTF](configurator_core_src_roomle_configurator._internal_.default-39.md#loadgltf)

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

## loadGLB

▸ **loadGLB**(`url`, `position?`, `rotation?`, `size?`, `scaling?`, `color?`, `colorable?`, `callback?`): `Promise`<[`GLTFScene`](../interfaces/configurator_core_src_roomle_configurator._internal_.GLTFScene.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `position?` | `Vector3` |
| `rotation?` | `number` |
| `size?` | `Vector3` |
| `scaling?` | `Vector3` |
| `color?` | `number` |
| `colorable?` | `boolean` |
| `callback?` | (`percent`: `number`) => `void` |

### Returns

`Promise`<[`GLTFScene`](../interfaces/configurator_core_src_roomle_configurator._internal_.GLTFScene.md)\>

___

## loadGLTF

▸ **loadGLTF**(`gltfJSON`, `position?`, `rotation?`, `size?`, `scale?`, `color?`, `colorable?`, `callback?`): `Promise`<[`GLTFScene`](../interfaces/configurator_core_src_roomle_configurator._internal_.GLTFScene.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `gltfJSON` | `string` |
| `position?` | `Vector3` |
| `rotation?` | `number` |
| `size?` | `Vector3` |
| `scale?` | `Vector3` |
| `color?` | `number` |
| `colorable?` | `boolean` |
| `callback?` | (`percent`: `number`) => `void` |

### Returns

`Promise`<[`GLTFScene`](../interfaces/configurator_core_src_roomle_configurator._internal_.GLTFScene.md)\>
