[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PreviewComponent

# Hierarchy

- [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md)

  ↳ **`PreviewComponent`**

  ↳↳ [`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md)

# Table of contents

## Properties

- [animationValues](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#animationvalues)
- [boundingBox](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#boundingbox)
- [boundingBoxMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#boundingboxmesh)
- [childDockId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#childdockid)
- [childId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#childid)
- [geometryChanged](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#geometrychanged)
- [hash](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hash)
- [isChildPlanObject](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#ischildplanobject)
- [isRootComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#isrootcomponent)
- [loadingMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loadingmesh)
- [meshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#meshes)
- [parentDockId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentdockid)
- [parentId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentid)
- [parentObjectId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentobjectid)
- [receivedPointAssociation](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#receivedpointassociation)
- [roomlePosition](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#roomleposition)
- [roomleRotation](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#roomlerotation)
- [runtimeId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#runtimeid)
- [stringId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#stringid)

## Methods

- [addMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#addmesh)
- [animateMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#animatemeshes)
- [clonePreview](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#clonepreview)
- [computeBoundingBox](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#computeboundingbox)
- [deselect](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#deselect)
- [getKernelPosition](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#getkernelposition)
- [getMeshById](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#getmeshbyid)
- [hoverOff](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hoveroff)
- [hoverOn](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hoveron)
- [isChild](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#ischild)
- [loading](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loading)
- [loadingFinished](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loadingfinished)
- [preparePreview](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#preparepreview)
- [recursiveMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#recursivemeshes)
- [removeAllMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removeallmeshes)
- [removeMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removemesh)
- [removeMeshById](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removemeshbyid)
- [replaceMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#replacemeshes)
- [select](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#select)
- [startPulsating](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#startpulsating)

# Properties

## animationValues

• `Optional` **animationValues**: `Map`<`string`, `string`\>

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[animationValues](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#animationvalues)

___

## boundingBox

• **boundingBox**: `Box3`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[boundingBox](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#boundingbox)

___

## boundingBoxMesh

• **boundingBoxMesh**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[boundingBoxMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#boundingboxmesh)

___

## childDockId

• **childDockId**: `number`

___

## childId

• **childId**: `number`

___

## geometryChanged

• **geometryChanged**: `boolean`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[geometryChanged](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#geometrychanged)

___

## hash

• **hash**: `string`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[hash](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hash)

___

## isChildPlanObject

• **isChildPlanObject**: `boolean`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[isChildPlanObject](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#ischildplanobject)

___

## isRootComponent

• **isRootComponent**: `boolean`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[isRootComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#isrootcomponent)

___

## loadingMesh

• **loadingMesh**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[loadingMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loadingmesh)

___

## meshes

• **meshes**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)[]

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[meshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#meshes)

___

## parentDockId

• **parentDockId**: `number`

___

## parentId

• **parentId**: `number`

___

## parentObjectId

• **parentObjectId**: `number`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[parentObjectId](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#parentobjectid)

___

## receivedPointAssociation

• **receivedPointAssociation**: `boolean`

___

## roomlePosition

• **roomlePosition**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[roomlePosition](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#roomleposition)

___

## roomleRotation

• **roomleRotation**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[roomleRotation](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#roomlerotation)

___

## runtimeId

• **runtimeId**: `number`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[runtimeId](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#runtimeid)

___

## stringId

• **stringId**: `string`

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

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[addMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#addmesh)

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

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[animateMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#animatemeshes)

___

## clonePreview

▸ **clonePreview**(`numberOfDuplication`): [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfDuplication` | `number` |

### Returns

[`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

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

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[computeBoundingBox](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#computeboundingbox)

___

## deselect

▸ **deselect**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[deselect](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#deselect)

___

## getKernelPosition

▸ **getKernelPosition**(`newParent`): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[getKernelPosition](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#getkernelposition)

___

## getMeshById

▸ **getMeshById**(`meshId`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `number` |

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[getMeshById](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#getmeshbyid)

___

## hoverOff

▸ **hoverOff**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[hoverOff](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hoveroff)

___

## hoverOn

▸ **hoverOn**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[hoverOn](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#hoveron)

___

## isChild

▸ **isChild**(`componentId`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`boolean`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[isChild](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#ischild)

___

## loading

▸ **loading**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[loading](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loading)

___

## loadingFinished

▸ **loadingFinished**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[loadingFinished](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#loadingfinished)

___

## preparePreview

▸ **preparePreview**(): `void`

### Returns

`void`

___

## recursiveMeshes

▸ **recursiveMeshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[recursiveMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#recursivemeshes)

___

## removeAllMeshes

▸ **removeAllMeshes**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[removeAllMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removeallmeshes)

___

## removeMesh

▸ **removeMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[removeMesh](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removemesh)

___

## removeMeshById

▸ **removeMeshById**(`meshId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `number` |

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[removeMeshById](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#removemeshbyid)

___

## replaceMeshes

▸ **replaceMeshes**(`meshes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[] |

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[replaceMeshes](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#replacemeshes)

___

## select

▸ **select**(): `void`

### Returns

`void`

### Inherited from

[RoomleComponent](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md).[select](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md#select)

___

## startPulsating

▸ **startPulsating**(): `void`

### Returns

`void`
