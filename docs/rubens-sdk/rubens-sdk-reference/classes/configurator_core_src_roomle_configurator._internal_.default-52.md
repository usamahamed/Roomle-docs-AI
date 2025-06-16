[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-36.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-52.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-52.md#_creator_)
- [materialQueue](configurator_core_src_roomle_configurator._internal_.default-52.md#materialqueue)

## Accessors

- [maxAnisotropy](configurator_core_src_roomle_configurator._internal_.default-52.md#maxanisotropy)
- [maxTextures](configurator_core_src_roomle_configurator._internal_.default-52.md#maxtextures)
- [wallMeshes](configurator_core_src_roomle_configurator._internal_.default-52.md#wallmeshes)

## Methods

- [changeMaterialOfMesh](configurator_core_src_roomle_configurator._internal_.default-52.md#changematerialofmesh)
- [clear](configurator_core_src_roomle_configurator._internal_.default-52.md#clear)
- [clearWallMeshes](configurator_core_src_roomle_configurator._internal_.default-52.md#clearwallmeshes)
- [generateGeometry](configurator_core_src_roomle_configurator._internal_.default-52.md#generategeometry)
- [generateMesh](configurator_core_src_roomle_configurator._internal_.default-52.md#generatemesh)
- [getGeometry](configurator_core_src_roomle_configurator._internal_.default-52.md#getgeometry)
- [removeMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-52.md#removematerialloadedlistener)
- [setMaterial](configurator_core_src_roomle_configurator._internal_.default-52.md#setmaterial)
- [setMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-52.md#setmaterialloadedlistener)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-36.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-36.md#_creator_)

___

## materialQueue

• **materialQueue**: [`PromiseQueue`](configurator_core_src_roomle_configurator._internal_.PromiseQueue.md)<`void`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[materialQueue](configurator_core_src_roomle_configurator._internal_.default-36.md#materialqueue)

# Accessors

## maxAnisotropy

• `set` **maxAnisotropy**(`maxAnisotropy`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `maxAnisotropy` | `number` |

### Returns

`void`

### Overrides

MeshGenerator.maxAnisotropy

___

## maxTextures

• `get` **maxTextures**(): `number`

### Returns

`number`

### Inherited from

MeshGenerator.maxTextures

• `set` **maxTextures**(`maxTextures`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `maxTextures` | `number` |

### Returns

`void`

### Inherited from

MeshGenerator.maxTextures

___

## wallMeshes

• `get` **wallMeshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

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

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[changeMaterialOfMesh](configurator_core_src_roomle_configurator._internal_.default-36.md#changematerialofmesh)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[clear](configurator_core_src_roomle_configurator._internal_.default-36.md#clear)

___

## clearWallMeshes

▸ **clearWallMeshes**(): `void`

### Returns

`void`

___

## generateGeometry

▸ **generateGeometry**(`meshId?`, `vertices`, `indices`, `uvCoords`, `normals`, `newGeometryInstance?`): `BufferGeometry`<`NormalBufferAttributes`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `meshId` | `string` | `null` |
| `vertices` | `Float32Array` | `undefined` |
| `indices` | `Int32Array` | `undefined` |
| `uvCoords` | `Float32Array` | `undefined` |
| `normals` | `Float32Array` | `undefined` |
| `newGeometryInstance` | `boolean` | `false` |

### Returns

`BufferGeometry`<`NormalBufferAttributes`\>

___

## generateMesh

▸ **generateMesh**(`runtimeComponentId?`, `geometryId?`, `materialId`, `vertices`, `indices`, `uvCoords`, `normals`, `type?`, `newGeometryInstance?`, `materialAttributes?`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `runtimeComponentId` | `number` | `0` |
| `geometryId` | `string` | `null` |
| `materialId` | `string` \| [`BaseMaterial`](configurator_core_src_roomle_configurator._internal_.BaseMaterial.md) | `undefined` |
| `vertices` | `Float32Array` | `undefined` |
| `indices` | `Int32Array` | `undefined` |
| `uvCoords` | `Float32Array` | `undefined` |
| `normals` | `Float32Array` | `undefined` |
| `type?` | [`KernelEnum`](../interfaces/typings_kernel.KernelEnum.md) | `undefined` |
| `newGeometryInstance` | `boolean` | `false` |
| `materialAttributes?` | `Record`<`string`, `string`\> | `undefined` |

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

___

## getGeometry

▸ **getGeometry**(`meshId`): `BufferGeometry`<`NormalBufferAttributes`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `string` |

### Returns

`BufferGeometry`<`NormalBufferAttributes`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[getGeometry](configurator_core_src_roomle_configurator._internal_.default-36.md#getgeometry)

___

## removeMaterialLoadedListener

▸ **removeMaterialLoadedListener**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[removeMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-36.md#removematerialloadedlistener)

___

## setMaterial

▸ **setMaterial**(`mesh`, `material`, `type?`, `materialAttributes?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |
| `material` | `string` \| [`BaseMaterial`](configurator_core_src_roomle_configurator._internal_.BaseMaterial.md) |
| `type?` | [`KernelEnum`](../interfaces/typings_kernel.KernelEnum.md) |
| `materialAttributes?` | `Record`<`string`, `string`\> |

### Returns

`Promise`<`void`\>

___

## setMaterialLoadedListener

▸ **setMaterialLoadedListener**(`fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | () => `void` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[setMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-36.md#setmaterialloadedlistener)
