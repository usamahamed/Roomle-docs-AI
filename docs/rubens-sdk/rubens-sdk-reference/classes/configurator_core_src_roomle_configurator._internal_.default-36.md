[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- **`default`**

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-17.md)

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-52.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-36.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-36.md#_creator_)
- [materialQueue](configurator_core_src_roomle_configurator._internal_.default-36.md#materialqueue)

## Accessors

- [maxAnisotropy](configurator_core_src_roomle_configurator._internal_.default-36.md#maxanisotropy)
- [maxTextures](configurator_core_src_roomle_configurator._internal_.default-36.md#maxtextures)

## Methods

- [changeMaterialOfMesh](configurator_core_src_roomle_configurator._internal_.default-36.md#changematerialofmesh)
- [clear](configurator_core_src_roomle_configurator._internal_.default-36.md#clear)
- [getGeometry](configurator_core_src_roomle_configurator._internal_.default-36.md#getgeometry)
- [removeMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-36.md#removematerialloadedlistener)
- [setMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-36.md#setmaterialloadedlistener)

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

## materialQueue

• **materialQueue**: [`PromiseQueue`](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md)<`void`\>

# Accessors

## maxAnisotropy

• `get` **maxAnisotropy**(): `number`

### Returns

`number`

• `set` **maxAnisotropy**(`maxAnisotropy`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `maxAnisotropy` | `number` |

### Returns

`void`

___

## maxTextures

• `get` **maxTextures**(): `number`

### Returns

`number`

• `set` **maxTextures**(`maxTextures`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `maxTextures` | `number` |

### Returns

`void`

# Methods

## changeMaterialOfMesh

▸ **changeMaterialOfMesh**(`mesh`, `material`, `materialAttributes?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |
| `material` | `Material` |
| `materialAttributes?` | `Record`<`string`, `string`\> |

### Returns

`void`

___

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## getGeometry

▸ **getGeometry**(`meshId`): `BufferGeometry`<`NormalBufferAttributes`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `string` |

### Returns

`BufferGeometry`<`NormalBufferAttributes`\>

___

## removeMaterialLoadedListener

▸ **removeMaterialLoadedListener**(): `void`

### Returns

`void`

___

## setMaterialLoadedListener

▸ **setMaterialLoadedListener**(`fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | () => `void` |

### Returns

`void`
