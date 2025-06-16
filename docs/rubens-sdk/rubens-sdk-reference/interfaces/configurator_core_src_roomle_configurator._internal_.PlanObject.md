[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PlanObject

# Hierarchy

- [`PlanElement`](configurator_core_src_roomle_configurator._internal_.PlanElement.md)

  ↳ **`PlanObject`**

  ↳↳ [`PlanMeasure`](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md)

  ↳↳ [`ConstructionPlanObject`](planner_core_src_roomle_planner._internal_.ConstructionPlanObject.md)

  ↳↳ [`WallPlanObject`](planner_core_src_roomle_planner._internal_.WallPlanObject.md)

  ↳↳ [`NodePlanObject`](planner_core_src_roomle_planner._internal_.NodePlanObject.md)

# Table of contents

## Properties

- [boxForMeasurement](configurator_core_src_roomle_configurator._internal_.PlanObject.md#boxformeasurement)
- [customColor](configurator_core_src_roomle_configurator._internal_.PlanObject.md#customcolor)
- [extRef](configurator_core_src_roomle_configurator._internal_.PlanObject.md#extref)
- [fixedZ](configurator_core_src_roomle_configurator._internal_.PlanObject.md#fixedz)
- [flipX](configurator_core_src_roomle_configurator._internal_.PlanObject.md#flipx)
- [flipY](configurator_core_src_roomle_configurator._internal_.PlanObject.md#flipy)
- [rotation](configurator_core_src_roomle_configurator._internal_.PlanObject.md#rotation)
- [size](configurator_core_src_roomle_configurator._internal_.PlanObject.md#size)

## Methods

- [clone](configurator_core_src_roomle_configurator._internal_.PlanObject.md#clone)
- [delete](configurator_core_src_roomle_configurator._internal_.PlanObject.md#delete)
- [getCatalogItemId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getcatalogitemid)
- [getCenter](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getcenter)
- [getConfiguration](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfiguration)
- [getConfigurationHash](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfigurationhash)
- [getConfigurationRuntimeId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getconfigurationruntimeid)
- [getId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getid)
- [getMeshCenter](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getmeshcenter)
- [getMeshOffsetRelativeToObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getmeshoffsetrelativetoobject)
- [getObjectType](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getobjecttype)
- [getRectangle](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getrectangle)
- [getType](configurator_core_src_roomle_configurator._internal_.PlanObject.md#gettype)
- [getWallDistances](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getwalldistances)
- [hasConfiguration](configurator_core_src_roomle_configurator._internal_.PlanObject.md#hasconfiguration)
- [isExternalObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md#isexternalobject)

# Properties

## boxForMeasurement

• **boxForMeasurement**: [`KernelCube`](typings_kernel.KernelCube.md)

___

## customColor

• **customColor**: `number`

___

## extRef

• **extRef**: [`EMSReference`](configurator_core_src_roomle_configurator._internal_.EMSReference.md)

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[extRef](configurator_core_src_roomle_configurator._internal_.PlanElement.md#extref)

___

## fixedZ

• **fixedZ**: `boolean`

___

## flipX

• **flipX**: `boolean`

___

## flipY

• **flipY**: `boolean`

___

## rotation

• **rotation**: `number`

___

## size

• **size**: [`KernelVector3`](typings_kernel.KernelVector3.md)

# Methods

## clone

▸ **clone**(): [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Returns

[`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[clone](configurator_core_src_roomle_configurator._internal_.PlanElement.md#clone)

___

## delete

▸ **delete**(): `void`

### Returns

`void`

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[delete](configurator_core_src_roomle_configurator._internal_.PlanElement.md#delete)

___

## getCatalogItemId

▸ **getCatalogItemId**(): `string`

### Returns

`string`

___

## getCenter

▸ **getCenter**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[getCenter](configurator_core_src_roomle_configurator._internal_.PlanElement.md#getcenter)

___

## getConfiguration

▸ **getConfiguration**(): `string`

### Returns

`string`

___

## getConfigurationHash

▸ **getConfigurationHash**(): `string`

### Returns

`string`

___

## getConfigurationRuntimeId

▸ **getConfigurationRuntimeId**(): `number`

### Returns

`number`

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[getId](configurator_core_src_roomle_configurator._internal_.PlanElement.md#getid)

___

## getMeshCenter

▸ **getMeshCenter**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[getMeshCenter](configurator_core_src_roomle_configurator._internal_.PlanElement.md#getmeshcenter)

___

## getMeshOffsetRelativeToObject

▸ **getMeshOffsetRelativeToObject**(): [`KernelVector3`](typings_kernel.KernelVector3.md)

### Returns

[`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[getMeshOffsetRelativeToObject](configurator_core_src_roomle_configurator._internal_.PlanElement.md#getmeshoffsetrelativetoobject)

___

## getObjectType

▸ **getObjectType**(): `string`

### Returns

`string`

___

## getRectangle

▸ **getRectangle**(): [`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

### Returns

[`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

___

## getType

▸ **getType**(): `any`

### Returns

`any`

### Inherited from

[PlanElement](configurator_core_src_roomle_configurator._internal_.PlanElement.md).[getType](configurator_core_src_roomle_configurator._internal_.PlanElement.md#gettype)

___

## getWallDistances

▸ **getWallDistances**(): [`ObjectToWallLineArray`](../classes/configurator_core_src_roomle_configurator._internal_.ObjectToWallLineArray.md)

### Returns

[`ObjectToWallLineArray`](../classes/configurator_core_src_roomle_configurator._internal_.ObjectToWallLineArray.md)

___

## hasConfiguration

▸ **hasConfiguration**(): `boolean`

### Returns

`boolean`

___

## isExternalObject

▸ **isExternalObject**(): `boolean`

### Returns

`boolean`
