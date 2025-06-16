[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-51.md)

  ↳ **`default`**

  ↳↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-49.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-1.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-17.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-18.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-19.md)

  ↳↳ [`default`](planner_core_src_roomle_planner._internal_.default-22.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-50.md#constructor)

## Methods

- [addMesh](configurator_core_src_roomle_configurator._internal_.default-50.md#addmesh)
- [clear](configurator_core_src_roomle_configurator._internal_.default-50.md#clear)
- [clearReference](configurator_core_src_roomle_configurator._internal_.default-50.md#clearreference)
- [deselect](configurator_core_src_roomle_configurator._internal_.default-50.md#deselect)
- [getBoundingBox](configurator_core_src_roomle_configurator._internal_.default-50.md#getboundingbox)
- [getBounds](configurator_core_src_roomle_configurator._internal_.default-50.md#getbounds)
- [getContainer](configurator_core_src_roomle_configurator._internal_.default-50.md#getcontainer)
- [getId](configurator_core_src_roomle_configurator._internal_.default-50.md#getid)
- [getKernelObject](configurator_core_src_roomle_configurator._internal_.default-50.md#getkernelobject)
- [getMesh](configurator_core_src_roomle_configurator._internal_.default-50.md#getmesh)
- [getName](configurator_core_src_roomle_configurator._internal_.default-50.md#getname)
- [getObject](configurator_core_src_roomle_configurator._internal_.default-50.md#getobject)
- [getObjectAsync](configurator_core_src_roomle_configurator._internal_.default-50.md#getobjectasync)
- [getPlanElement](configurator_core_src_roomle_configurator._internal_.default-50.md#getplanelement)
- [getPosition](configurator_core_src_roomle_configurator._internal_.default-50.md#getposition)
- [getRotation](configurator_core_src_roomle_configurator._internal_.default-50.md#getrotation)
- [getSize](configurator_core_src_roomle_configurator._internal_.default-50.md#getsize)
- [hidePreviewBox](configurator_core_src_roomle_configurator._internal_.default-50.md#hidepreviewbox)
- [hoverOff](configurator_core_src_roomle_configurator._internal_.default-50.md#hoveroff)
- [hoverOn](configurator_core_src_roomle_configurator._internal_.default-50.md#hoveron)
- [remove](configurator_core_src_roomle_configurator._internal_.default-50.md#remove)
- [select](configurator_core_src_roomle_configurator._internal_.default-50.md#select)
- [setObject](configurator_core_src_roomle_configurator._internal_.default-50.md#setobject)
- [setTopView](configurator_core_src_roomle_configurator._internal_.default-50.md#settopview)
- [toJSON](configurator_core_src_roomle_configurator._internal_.default-50.md#tojson)
- [update](configurator_core_src_roomle_configurator._internal_.default-50.md#update)

# Constructors

## constructor

• **new default**(`planObject`)

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md) |

### Overrides

[default](configurator_core_src_roomle_configurator._internal_.default-51.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-51.md#constructor)

# Methods

## addMesh

▸ **addMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## clear

▸ **clear**(): `void`

### Returns

`void`

___

## clearReference

▸ **clearReference**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-51.md).[clearReference](configurator_core_src_roomle_configurator._internal_.default-51.md#clearreference)

___

## deselect

▸ **deselect**(): `void`

### Returns

`void`

___

## getBoundingBox

▸ **getBoundingBox**(): [`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

### Returns

[`RoomleEventedMesh`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedmesh)

___

## getBounds

▸ **getBounds**(): `Box3`

### Returns

`Box3`

___

## getContainer

▸ **getContainer**(): `Object3D`<`Object3DEventMap`\>

### Returns

`Object3D`<`Object3DEventMap`\>

___

## getId

▸ **getId**(): `number`

### Returns

`number`

___

## getKernelObject

▸ **getKernelObject**(): [`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Returns

[`KernelObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-51.md).[getKernelObject](configurator_core_src_roomle_configurator._internal_.default-51.md#getkernelobject)

___

## getMesh

▸ **getMesh**(`material`): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `any` |

### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

___

## getName

▸ **getName**(): `string`

### Returns

`string`

___

## getObject

▸ **getObject**(): [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d)

### Returns

[`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d)

___

## getObjectAsync

▸ **getObjectAsync**(): `Promise`<`Object3D`<`Object3DEventMap`\>\>

### Returns

`Promise`<`Object3D`<`Object3DEventMap`\>\>

___

## getPlanElement

▸ **getPlanElement**(): [`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)

### Returns

[`PlanObject`](../interfaces/configurator_core_src_roomle_configurator._internal_.PlanObject.md)

___

## getPosition

▸ **getPosition**(): `Vector3`

### Returns

`Vector3`

___

## getRotation

▸ **getRotation**(): `number`

### Returns

`number`

___

## getSize

▸ **getSize**(): `Vector3`

### Returns

`Vector3`

___

## hidePreviewBox

▸ **hidePreviewBox**(): `void`

### Returns

`void`

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

## remove

▸ **remove**(): `void`

### Returns

`void`

___

## select

▸ **select**(): `void`

### Returns

`void`

___

## setObject

▸ **setObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`RoomleEventedObject3D`](../modules/configurator_core_src_roomle_configurator._internal_.md#roomleeventedobject3d) |

### Returns

`void`

___

## setTopView

▸ **setTopView**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

___

## toJSON

▸ **toJSON**(): `Object`

### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rootElementId` | `number` |

___

## update

▸ **update**(): `void`

### Returns

`void`
