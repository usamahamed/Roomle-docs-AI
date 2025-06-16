[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-36.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-17.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-17.md#_creator_)
- [materialQueue](configurator_core_src_roomle_configurator._internal_.default-17.md#materialqueue)

## Accessors

- [maxAnisotropy](configurator_core_src_roomle_configurator._internal_.default-17.md#maxanisotropy)
- [maxTextures](configurator_core_src_roomle_configurator._internal_.default-17.md#maxtextures)

## Methods

- [changeMaterialOfMesh](configurator_core_src_roomle_configurator._internal_.default-17.md#changematerialofmesh)
- [clear](configurator_core_src_roomle_configurator._internal_.default-17.md#clear)
- [generateMesh](configurator_core_src_roomle_configurator._internal_.default-17.md#generatemesh)
- [getGeometry](configurator_core_src_roomle_configurator._internal_.default-17.md#getgeometry)
- [loadMaterial](configurator_core_src_roomle_configurator._internal_.default-17.md#loadmaterial)
- [loadTextures](configurator_core_src_roomle_configurator._internal_.default-17.md#loadtextures)
- [removeMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-17.md#removematerialloadedlistener)
- [setMaterial](configurator_core_src_roomle_configurator._internal_.default-17.md#setmaterial)
- [setMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-17.md#setmaterialloadedlistener)

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

• `get` **maxAnisotropy**(): `number`

### Returns

`number`

### Inherited from

MeshGenerator.maxAnisotropy

• `set` **maxAnisotropy**(`maxAnisotropy`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `maxAnisotropy` | `number` |

### Returns

`void`

### Inherited from

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

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[clear](configurator_core_src_roomle_configurator._internal_.default-36.md#clear)

___

## generateMesh

▸ **generateMesh**(`runtimeComponentId?`, `geometryId?`, `materialId`, `vertices`, `indices`, `uvCoords`, `normals`, `newGeometryInstance?`, `materialAttributes?`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `runtimeComponentId` | `number` | `0` |
| `geometryId` | `string` | `null` |
| `materialId` | `string` | `undefined` |
| `vertices` | `Float32Array` | `undefined` |
| `indices` | `Int32Array` | `undefined` |
| `uvCoords` | `Float32Array` | `undefined` |
| `normals` | `Float32Array` | `undefined` |
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

## loadMaterial

▸ **loadMaterial**(`materialId`, `width?`, `height?`): `Promise`<`Material`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `materialId` | `string` |
| `width?` | `number` |
| `height?` | `number` |

### Returns

`Promise`<`Material`\>

___

## loadTextures

▸ **loadTextures**(`rapiMaterial`, `material`, `width?`, `height?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiMaterial` | [`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md) |
| `material` | `MeshPhysicalMaterial` |
| `width?` | `number` |
| `height?` | `number` |

### Returns

`Promise`<`void`\>

___

## removeMaterialLoadedListener

▸ **removeMaterialLoadedListener**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-36.md).[removeMaterialLoadedListener](configurator_core_src_roomle_configurator._internal_.default-36.md#removematerialloadedlistener)

___

## setMaterial

▸ **setMaterial**(`mesh`, `materialId`, `_type?`, `materialAttributes?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |
| `materialId` | `string` |
| `_type?` | [`KernelEnum`](../interfaces/typings_kernel.KernelEnum.md) |
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
