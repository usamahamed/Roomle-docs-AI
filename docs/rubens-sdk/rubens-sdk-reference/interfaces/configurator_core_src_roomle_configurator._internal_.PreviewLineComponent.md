[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PreviewLineComponent

# Hierarchy

- [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

  ↳ **`PreviewLineComponent`**

# Table of contents

## Properties

- [animationValues](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#animationvalues)
- [boundingBox](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#boundingbox)
- [boundingBoxMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#boundingboxmesh)
- [boundingLineMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#boundinglinemesh)
- [childDockId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#childdockid)
- [childId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#childid)
- [docklineRotation](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#docklinerotation)
- [geometryChanged](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#geometrychanged)
- [hash](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#hash)
- [isChildPlanObject](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#ischildplanobject)
- [isRootComponent](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#isrootcomponent)
- [lineFrom](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#linefrom)
- [lineMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#linemesh)
- [lineSegments](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#linesegments)
- [lineTo](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#lineto)
- [loadingMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#loadingmesh)
- [meshes](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#meshes)
- [parentDockId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#parentdockid)
- [parentId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#parentid)
- [parentObjectId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#parentobjectid)
- [positionFrom](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#positionfrom)
- [positionTo](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#positionto)
- [receivedPointAssociation](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#receivedpointassociation)
- [roomleLineFrom](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomlelinefrom)
- [roomleLineTo](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomlelineto)
- [roomlePosition](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomleposition)
- [roomlePositionFrom](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomlepositionfrom)
- [roomlePositionTo](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomlepositionto)
- [roomleRotation](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#roomlerotation)
- [runtimeId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#runtimeid)
- [stringId](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#stringid)

## Methods

- [addMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#addmesh)
- [animateMeshes](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#animatemeshes)
- [clonePreview](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#clonepreview)
- [clonePreviewLine](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#clonepreviewline)
- [computeBoundingBox](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#computeboundingbox)
- [deselect](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#deselect)
- [getKernelPosition](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#getkernelposition)
- [getMeshById](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#getmeshbyid)
- [getPositionForIntersectionPoint](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#getpositionforintersectionpoint)
- [hideSelectionLine](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#hideselectionline)
- [hoverOff](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#hoveroff)
- [hoverOn](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#hoveron)
- [isChild](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#ischild)
- [loading](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#loading)
- [loadingFinished](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#loadingfinished)
- [preparePreview](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#preparepreview)
- [recursiveMeshes](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#recursivemeshes)
- [removeAllMeshes](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#removeallmeshes)
- [removeMesh](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#removemesh)
- [removeMeshById](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#removemeshbyid)
- [replaceMeshes](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#replacemeshes)
- [select](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#select)
- [startPulsating](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#startpulsating)
- [updatePreviewPosition](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md#updatepreviewposition)

# Properties

## animationValues

• `Optional` **animationValues**: `Map`<`string`, `string`\>

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[animationValues](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#animationvalues)

___

## boundingBox

• **boundingBox**: `Box3`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[boundingBox](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#boundingbox)

___

## boundingBoxMesh

• **boundingBoxMesh**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[boundingBoxMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#boundingboxmesh)

___

## boundingLineMesh

• **boundingLineMesh**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

___

## childDockId

• **childDockId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[childDockId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#childdockid)

___

## childId

• **childId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[childId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#childid)

___

## docklineRotation

• **docklineRotation**: `Euler`

___

## geometryChanged

• **geometryChanged**: `boolean`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[geometryChanged](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#geometrychanged)

___

## hash

• **hash**: `string`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[hash](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hash)

___

## isChildPlanObject

• **isChildPlanObject**: `boolean`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[isChildPlanObject](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#ischildplanobject)

___

## isRootComponent

• **isRootComponent**: `boolean`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[isRootComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#isrootcomponent)

___

## lineFrom

• **lineFrom**: `Vector3`

___

## lineMesh

• **lineMesh**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

___

## lineSegments

• **lineSegments**: [`PreviewLineSegment`](configurator_core_src_roomle_configurator._internal_.PreviewLineSegment.md)[]

___

## lineTo

• **lineTo**: `Vector3`

___

## loadingMesh

• **loadingMesh**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[loadingMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loadingmesh)

___

## meshes

• **meshes**: [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)[]

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[meshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#meshes)

___

## parentDockId

• **parentDockId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[parentDockId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentdockid)

___

## parentId

• **parentId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[parentId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentid)

___

## parentObjectId

• **parentObjectId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[parentObjectId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#parentobjectid)

___

## positionFrom

• **positionFrom**: `Vector3`

___

## positionTo

• **positionTo**: `Vector3`

___

## receivedPointAssociation

• **receivedPointAssociation**: `boolean`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[receivedPointAssociation](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#receivedpointassociation)

___

## roomleLineFrom

• **roomleLineFrom**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## roomleLineTo

• **roomleLineTo**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## roomlePosition

• **roomlePosition**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[roomlePosition](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#roomleposition)

___

## roomlePositionFrom

• **roomlePositionFrom**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## roomlePositionTo

• **roomlePositionTo**: [`KernelVector3`](typings_kernel.KernelVector3.md)

___

## roomleRotation

• **roomleRotation**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[roomleRotation](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#roomlerotation)

___

## runtimeId

• **runtimeId**: `number`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[runtimeId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#runtimeid)

___

## stringId

• **stringId**: `string`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[stringId](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#stringid)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[addMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#addmesh)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[animateMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#animatemeshes)

___

## clonePreview

▸ **clonePreview**(`numberOfDuplication`): [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfDuplication` | `number` |

### Returns

[`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[clonePreview](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#clonepreview)

___

## clonePreviewLine

▸ **clonePreviewLine**(`numberOfDuplication`): [`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfDuplication` | `number` |

### Returns

[`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[computeBoundingBox](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#computeboundingbox)

___

## deselect

▸ **deselect**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[deselect](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#deselect)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[getKernelPosition](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#getkernelposition)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[getMeshById](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#getmeshbyid)

___

## getPositionForIntersectionPoint

▸ **getPositionForIntersectionPoint**(`intersectionPoint`): `Vector3`

### Parameters

| Name | Type |
| :------ | :------ |
| `intersectionPoint` | `Vector3` |

### Returns

`Vector3`

___

## hideSelectionLine

▸ **hideSelectionLine**(): `void`

### Returns

`void`

___

## hoverOff

▸ **hoverOff**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[hoverOff](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hoveroff)

___

## hoverOn

▸ **hoverOn**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[hoverOn](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#hoveron)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[isChild](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#ischild)

___

## loading

▸ **loading**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[loading](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loading)

___

## loadingFinished

▸ **loadingFinished**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[loadingFinished](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#loadingfinished)

___

## preparePreview

▸ **preparePreview**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[preparePreview](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#preparepreview)

___

## recursiveMeshes

▸ **recursiveMeshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[recursiveMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#recursivemeshes)

___

## removeAllMeshes

▸ **removeAllMeshes**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[removeAllMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removeallmeshes)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[removeMesh](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removemesh)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[removeMeshById](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#removemeshbyid)

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

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[replaceMeshes](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#replacemeshes)

___

## select

▸ **select**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[select](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#select)

___

## startPulsating

▸ **startPulsating**(): `void`

### Returns

`void`

### Inherited from

[PreviewComponent](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md).[startPulsating](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md#startpulsating)

___

## updatePreviewPosition

▸ **updatePreviewPosition**(`intersectionPoint`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `intersectionPoint` | `Vector3` |

### Returns

`void`
