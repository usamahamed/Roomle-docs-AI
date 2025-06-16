[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).WallPlanObject

# Hierarchy

- [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)

  ↳ **`WallPlanObject`**

# Table of contents

## Properties

- [boxForMeasurement](planner_core_src_roomle_planner._internal_.WallPlanObject.md#boxformeasurement)
- [customColor](planner_core_src_roomle_planner._internal_.WallPlanObject.md#customcolor)
- [extRef](planner_core_src_roomle_planner._internal_.WallPlanObject.md#extref)
- [fixedZ](planner_core_src_roomle_planner._internal_.WallPlanObject.md#fixedz)
- [flipX](planner_core_src_roomle_planner._internal_.WallPlanObject.md#flipx)
- [flipY](planner_core_src_roomle_planner._internal_.WallPlanObject.md#flipy)
- [height](planner_core_src_roomle_planner._internal_.WallPlanObject.md#height)
- [rotation](planner_core_src_roomle_planner._internal_.WallPlanObject.md#rotation)
- [size](planner_core_src_roomle_planner._internal_.WallPlanObject.md#size)
- [thickness](planner_core_src_roomle_planner._internal_.WallPlanObject.md#thickness)

## Methods

- [clone](planner_core_src_roomle_planner._internal_.WallPlanObject.md#clone)
- [delete](planner_core_src_roomle_planner._internal_.WallPlanObject.md#delete)
- [getCatalogItemId](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcatalogitemid)
- [getCenter](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcenter)
- [getConfiguration](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getconfiguration)
- [getConfigurationHash](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getconfigurationhash)
- [getConfigurationRuntimeId](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getconfigurationruntimeid)
- [getCornerFromLeft](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcornerfromleft)
- [getCornerFromRight](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcornerfromright)
- [getCornerToLeft](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcornertoleft)
- [getCornerToRight](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getcornertoright)
- [getFrom](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getfrom)
- [getId](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getid)
- [getLength](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getlength)
- [getMeshCenter](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getmeshcenter)
- [getMeshOffsetRelativeToObject](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getmeshoffsetrelativetoobject)
- [getObjectType](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getobjecttype)
- [getPreferredSide](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getpreferredside)
- [getRectangle](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getrectangle)
- [getTo](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getto)
- [getType](planner_core_src_roomle_planner._internal_.WallPlanObject.md#gettype)
- [getWallDistances](planner_core_src_roomle_planner._internal_.WallPlanObject.md#getwalldistances)
- [hasConfiguration](planner_core_src_roomle_planner._internal_.WallPlanObject.md#hasconfiguration)
- [isExternalObject](planner_core_src_roomle_planner._internal_.WallPlanObject.md#isexternalobject)

# Properties

## boxForMeasurement

• **boxForMeasurement**: [`KernelCube`](typings_kernel.KernelCube.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[boxForMeasurement](configurator_core_src_roomle_configurator._internal_.PlanObject.md#boxformeasurement)

___

## customColor

• **customColor**: `number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[customColor](configurator_core_src_roomle_configurator._internal_.PlanObject.md#customcolor)

___

## extRef

• **extRef**: [`EMSReference`](configurator_core_src_roomle_configurator._internal_.EMSReference.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[extRef](configurator_core_src_roomle_configurator._internal_.PlanObject.md#extref)

___

## fixedZ

• **fixedZ**: `boolean`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[fixedZ](configurator_core_src_roomle_configurator._internal_.PlanObject.md#fixedz)

___

## flipX

• **flipX**: `boolean`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[flipX](configurator_core_src_roomle_configurator._internal_.PlanObject.md#flipx)

___

## flipY

• **flipY**: `boolean`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[flipY](configurator_core_src_roomle_configurator._internal_.PlanObject.md#flipy)

___

## height

• `Readonly` **height**: `number`

___

## rotation

• **rotation**: `number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[rotation](configurator_core_src_roomle_configurator._internal_.PlanObject.md#rotation)

___

## size

• **size**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[size](configurator_core_src_roomle_configurator._internal_.PlanObject.md#size)

___

## thickness

• `Readonly` **thickness**: `number`

# Methods

## clone

▸ **clone**(): [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Returns

[`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[clone](configurator_core_src_roomle_configurator._internal_.PlanObject.md#clone)

___

## delete

▸ **delete**(): `void`

### Returns

`void`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[delete](configurator_core_src_roomle_configurator._internal_.PlanObject.md#delete)

___

## getCatalogItemId

▸ **getCatalogItemId**(): `string`

### Returns

`string`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getCatalogItemId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getcatalogitemid)

___

## getCenter

▸ **getCenter**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Overrides

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getCenter](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getcenter)

___

## getConfiguration

▸ **getConfiguration**(): `string`

### Returns

`string`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getConfiguration](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfiguration)

___

## getConfigurationHash

▸ **getConfigurationHash**(): `string`

### Returns

`string`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getConfigurationHash](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfigurationhash)

___

## getConfigurationRuntimeId

▸ **getConfigurationRuntimeId**(): `number`

### Returns

`number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getConfigurationRuntimeId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfigurationruntimeid)

___

## getCornerFromLeft

▸ **getCornerFromLeft**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

___

## getCornerFromRight

▸ **getCornerFromRight**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

___

## getCornerToLeft

▸ **getCornerToLeft**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

___

## getCornerToRight

▸ **getCornerToRight**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

___

## getFrom

▸ **getFrom**(): [`NodePlanObject`](planner_core_src_roomle_planner._internal_.NodePlanObject.md)

### Returns

[`NodePlanObject`](planner_core_src_roomle_planner._internal_.NodePlanObject.md)

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getid)

___

## getLength

▸ **getLength**(`preferredSide`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `preferredSide` | [`WallSide`](configurator_core_src_roomle_configurator._internal_.WallSide.md) |

### Returns

`number`

___

## getMeshCenter

▸ **getMeshCenter**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getMeshCenter](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getmeshcenter)

___

## getMeshOffsetRelativeToObject

▸ **getMeshOffsetRelativeToObject**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getMeshOffsetRelativeToObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getmeshoffsetrelativetoobject)

___

## getObjectType

▸ **getObjectType**(): `string`

### Returns

`string`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getObjectType](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getobjecttype)

___

## getPreferredSide

▸ **getPreferredSide**(): [`LeftOrRightWallSide`](planner_core_src_roomle_planner._internal_.LeftOrRightWallSide.md)

### Returns

[`LeftOrRightWallSide`](planner_core_src_roomle_planner._internal_.LeftOrRightWallSide.md)

___

## getRectangle

▸ **getRectangle**(): [`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

### Returns

[`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getRectangle](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getrectangle)

___

## getTo

▸ **getTo**(): [`NodePlanObject`](planner_core_src_roomle_planner._internal_.NodePlanObject.md)

### Returns

[`NodePlanObject`](planner_core_src_roomle_planner._internal_.NodePlanObject.md)

___

## getType

▸ **getType**(): `any`

### Returns

`any`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getType](configurator_core_src_roomle_configurator._internal_.PlanObject.md#gettype)

___

## getWallDistances

▸ **getWallDistances**(): [`ObjectToWallLineArray`](../classes/configurator_core_src_roomle_configurator._internal_.ObjectToWallLineArray.md)

### Returns

[`ObjectToWallLineArray`](../classes/configurator_core_src_roomle_configurator._internal_.ObjectToWallLineArray.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getWallDistances](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getwalldistances)

___

## hasConfiguration

▸ **hasConfiguration**(): `boolean`

### Returns

`boolean`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[hasConfiguration](configurator_core_src_roomle_configurator._internal_.PlanObject.md#hasconfiguration)

___

## isExternalObject

▸ **isExternalObject**(): `boolean`

### Returns

`boolean`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[isExternalObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md#isexternalobject)
