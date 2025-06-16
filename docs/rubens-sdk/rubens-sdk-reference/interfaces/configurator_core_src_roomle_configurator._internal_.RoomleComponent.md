[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RoomleComponent

# Hierarchy

- [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d)

  ↳ **`RoomleComponent`**

  ↳↳ [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

  ↳↳ [`StaticComponent`](configurator_core_src_roomle_configurator._internal_.StaticComponent.md)

# Table of contents

## Properties

- [animationValues](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#animationvalues)
- [boundingBox](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#boundingbox)
- [boundingBoxMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#boundingboxmesh)
- [geometryChanged](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#geometrychanged)
- [hash](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hash)
- [isChildPlanObject](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#ischildplanobject)
- [isRootComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#isrootcomponent)
- [loadingMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loadingmesh)
- [meshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#meshes)
- [parentObjectId](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#parentobjectid)
- [roomlePosition](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#roomleposition)
- [roomleRotation](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#roomlerotation)
- [runtimeId](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#runtimeid)

## Methods

- [addMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#addmesh)
- [animateMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#animatemeshes)
- [computeBoundingBox](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#computeboundingbox)
- [deselect](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#deselect)
- [getKernelPosition](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#getkernelposition)
- [getMeshById](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#getmeshbyid)
- [hoverOff](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hoveroff)
- [hoverOn](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hoveron)
- [isChild](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#ischild)
- [loading](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loading)
- [loadingFinished](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loadingfinished)
- [recursiveMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#recursivemeshes)
- [removeAllMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removeallmeshes)
- [removeMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removemesh)
- [removeMeshById](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removemeshbyid)
- [replaceMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#replacemeshes)
- [select](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#select)

# Properties

## animationValues

• `Optional` **animationValues**: `Map`<`string`, `string`\>

___

## boundingBox

• **boundingBox**: `Box3`

___

## boundingBoxMesh

• **boundingBoxMesh**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

___

## geometryChanged

• **geometryChanged**: `boolean`

___

## hash

• **hash**: `string`

___

## isChildPlanObject

• **isChildPlanObject**: `boolean`

___

## isRootComponent

• **isRootComponent**: `boolean`

___

## loadingMesh

• **loadingMesh**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

___

## meshes

• **meshes**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)[]

___

## parentObjectId

• **parentObjectId**: `number`

___

## roomlePosition

• **roomlePosition**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## roomleRotation

• **roomleRotation**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## runtimeId

• **runtimeId**: `number`

# Methods

## addMesh

▸ **addMesh**(`mesh`, `transform?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |
| `transform?` | `Float32Array` |

### Returns

`void`

___

## animateMeshes

▸ **animateMeshes**(`aniamtion`, `from`, `to`, `animate`, `onProgressUpdate?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aniamtion` | `string` |
| `from` | `string` |
| `to` | `string` |
| `animate` | `boolean` |
| `onProgressUpdate?` | () => `void` |

### Returns

`void`

___

## computeBoundingBox

▸ **computeBoundingBox**(`boxForMeasurements?`, `useMeshes?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `boxForMeasurements?` | [`KernelCube`](typings_kernel.KernelCube.md) |
| `useMeshes?` | `boolean` |

### Returns

`void`

___

## deselect

▸ **deselect**(): `void`

### Returns

`void`

___

## getKernelPosition

▸ **getKernelPosition**(`newParent`): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

___

## getMeshById

▸ **getMeshById**(`meshId`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `number` |

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

___

## hoverOff

▸ **hoverOff**(): `void`

### Returns

`void`

___

## hoverOn

▸ **hoverOn**(): `void`

### Returns

`void`

___

## isChild

▸ **isChild**(`componentId`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`boolean`

___

## loading

▸ **loading**(): `void`

### Returns

`void`

___

## loadingFinished

▸ **loadingFinished**(): `void`

### Returns

`void`

___

## recursiveMeshes

▸ **recursiveMeshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

___

## removeAllMeshes

▸ **removeAllMeshes**(): `void`

### Returns

`void`

___

## removeMesh

▸ **removeMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |

### Returns

`void`

___

## removeMeshById

▸ **removeMeshById**(`meshId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `number` |

### Returns

`void`

___

## replaceMeshes

▸ **replaceMeshes**(`meshes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[] |

### Returns

`void`

___

## select

▸ **select**(): `void`

### Returns

`void`
