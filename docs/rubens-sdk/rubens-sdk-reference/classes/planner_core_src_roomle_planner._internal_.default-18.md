[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-18.md#constructor)

## Methods

- [addMesh](planner_core_src_roomle_planner._internal_.default-18.md#addmesh)
- [clear](planner_core_src_roomle_planner._internal_.default-18.md#clear)
- [clearReference](planner_core_src_roomle_planner._internal_.default-18.md#clearreference)
- [deselect](planner_core_src_roomle_planner._internal_.default-18.md#deselect)
- [getBoundingBox](planner_core_src_roomle_planner._internal_.default-18.md#getboundingbox)
- [getBounds](planner_core_src_roomle_planner._internal_.default-18.md#getbounds)
- [getContainer](planner_core_src_roomle_planner._internal_.default-18.md#getcontainer)
- [getFloorData](planner_core_src_roomle_planner._internal_.default-18.md#getfloordata)
- [getId](planner_core_src_roomle_planner._internal_.default-18.md#getid)
- [getKernelObject](planner_core_src_roomle_planner._internal_.default-18.md#getkernelobject)
- [getMesh](planner_core_src_roomle_planner._internal_.default-18.md#getmesh)
- [getName](planner_core_src_roomle_planner._internal_.default-18.md#getname)
- [getObject](planner_core_src_roomle_planner._internal_.default-18.md#getobject)
- [getObjectAsync](planner_core_src_roomle_planner._internal_.default-18.md#getobjectasync)
- [getPlanElement](planner_core_src_roomle_planner._internal_.default-18.md#getplanelement)
- [getPosition](planner_core_src_roomle_planner._internal_.default-18.md#getposition)
- [getRotation](planner_core_src_roomle_planner._internal_.default-18.md#getrotation)
- [getSize](planner_core_src_roomle_planner._internal_.default-18.md#getsize)
- [hidePreviewBox](planner_core_src_roomle_planner._internal_.default-18.md#hidepreviewbox)
- [hoverOff](planner_core_src_roomle_planner._internal_.default-18.md#hoveroff)
- [hoverOn](planner_core_src_roomle_planner._internal_.default-18.md#hoveron)
- [remove](planner_core_src_roomle_planner._internal_.default-18.md#remove)
- [select](planner_core_src_roomle_planner._internal_.default-18.md#select)
- [setObject](planner_core_src_roomle_planner._internal_.default-18.md#setobject)
- [setTopView](planner_core_src_roomle_planner._internal_.default-18.md#settopview)
- [toJSON](planner_core_src_roomle_planner._internal_.default-18.md#tojson)
- [update](planner_core_src_roomle_planner._internal_.default-18.md#update)

# Constructors

## constructor

• **new default**(`planObject`)

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-50.md#constructor)

# Methods

## addMesh

▸ **addMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |

### Returns

`void`

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[addMesh](configurator_core_src_roomle_configurator._internal_.default-50.md#addmesh)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[clear](configurator_core_src_roomle_configurator._internal_.default-50.md#clear)

___

## clearReference

▸ **clearReference**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[clearReference](configurator_core_src_roomle_configurator._internal_.default-50.md#clearreference)

___

## deselect

▸ **deselect**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[deselect](configurator_core_src_roomle_configurator._internal_.default-50.md#deselect)

___

## getBoundingBox

▸ **getBoundingBox**(): [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

### Returns

[`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getBoundingBox](configurator_core_src_roomle_configurator._internal_.default-50.md#getboundingbox)

___

## getBounds

▸ **getBounds**(): `Box3`

### Returns

`Box3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getBounds](configurator_core_src_roomle_configurator._internal_.default-50.md#getbounds)

___

## getContainer

▸ **getContainer**(): `Object3D`<`Object3DEventMap`\>

### Returns

`Object3D`<`Object3DEventMap`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getContainer](configurator_core_src_roomle_configurator._internal_.default-50.md#getcontainer)

___

## getFloorData

▸ **getFloorData**(`zoomFactor`): [`FloorAreaData`](../interfaces/planner_core_src_roomle_planner._internal_.FloorAreaData.md)<`Vector3`, `Vector3`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `zoomFactor` | `number` |

### Returns

[`FloorAreaData`](../interfaces/planner_core_src_roomle_planner._internal_.FloorAreaData.md)<`Vector3`, `Vector3`\>

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getId](configurator_core_src_roomle_configurator._internal_.default-50.md#getid)

___

## getKernelObject

▸ **getKernelObject**(): [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Returns

[`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getKernelObject](configurator_core_src_roomle_configurator._internal_.default-50.md#getkernelobject)

___

## getMesh

▸ **getMesh**(`material`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `any` |

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getMesh](configurator_core_src_roomle_configurator._internal_.default-50.md#getmesh)

___

## getName

▸ **getName**(): `string`

### Returns

`string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getName](configurator_core_src_roomle_configurator._internal_.default-50.md#getname)

___

## getObject

▸ **getObject**(): [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d)

### Returns

[`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getObject](configurator_core_src_roomle_configurator._internal_.default-50.md#getobject)

___

## getObjectAsync

▸ **getObjectAsync**(): `Promise`<`Object3D`<`Object3DEventMap`\>\>

### Returns

`Promise`<`Object3D`<`Object3DEventMap`\>\>

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getObjectAsync](configurator_core_src_roomle_configurator._internal_.default-50.md#getobjectasync)

___

## getPlanElement

▸ **getPlanElement**(): [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)

### Returns

[`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getPlanElement](configurator_core_src_roomle_configurator._internal_.default-50.md#getplanelement)

___

## getPosition

▸ **getPosition**(): `Vector3`

### Returns

`Vector3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getPosition](configurator_core_src_roomle_configurator._internal_.default-50.md#getposition)

___

## getRotation

▸ **getRotation**(): `number`

### Returns

`number`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getRotation](configurator_core_src_roomle_configurator._internal_.default-50.md#getrotation)

___

## getSize

▸ **getSize**(): `Vector3`

### Returns

`Vector3`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[getSize](configurator_core_src_roomle_configurator._internal_.default-50.md#getsize)

___

## hidePreviewBox

▸ **hidePreviewBox**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[hidePreviewBox](configurator_core_src_roomle_configurator._internal_.default-50.md#hidepreviewbox)

___

## hoverOff

▸ **hoverOff**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[hoverOff](configurator_core_src_roomle_configurator._internal_.default-50.md#hoveroff)

___

## hoverOn

▸ **hoverOn**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[hoverOn](configurator_core_src_roomle_configurator._internal_.default-50.md#hoveron)

___

## remove

▸ **remove**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[remove](configurator_core_src_roomle_configurator._internal_.default-50.md#remove)

___

## select

▸ **select**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[select](configurator_core_src_roomle_configurator._internal_.default-50.md#select)

___

## setObject

▸ **setObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[setObject](configurator_core_src_roomle_configurator._internal_.default-50.md#setobject)

___

## setTopView

▸ **setTopView**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[setTopView](configurator_core_src_roomle_configurator._internal_.default-50.md#settopview)

___

## toJSON

▸ **toJSON**(): `Object`

### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rootElementId` | `number` |

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[toJSON](configurator_core_src_roomle_configurator._internal_.default-50.md#tojson)

___

## update

▸ **update**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-50.md).[update](configurator_core_src_roomle_configurator._internal_.default-50.md#update)
