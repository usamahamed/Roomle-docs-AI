[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PlanMeasure

# Hierarchy

- [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)

  ↳ **`PlanMeasure`**

# Table of contents

## Properties

- [boxForMeasurement](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#boxformeasurement)
- [customColor](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#customcolor)
- [extRef](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#extref)
- [fixedZ](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#fixedz)
- [flipX](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#flipx)
- [flipY](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#flipy)
- [rotation](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#rotation)
- [size](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#size)

## Methods

- [clone](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#clone)
- [delete](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#delete)
- [getCatalogItemId](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getcatalogitemid)
- [getCenter](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getcenter)
- [getConfiguration](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getconfiguration)
- [getConfigurationHash](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getconfigurationhash)
- [getConfigurationRuntimeId](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getconfigurationruntimeid)
- [getId](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getid)
- [getMeshCenter](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getmeshcenter)
- [getMeshOffsetRelativeToObject](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getmeshoffsetrelativetoobject)
- [getObjectType](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getobjecttype)
- [getPoint1](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getpoint1)
- [getPoint2](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getpoint2)
- [getRectangle](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getrectangle)
- [getType](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#gettype)
- [getWallDistances](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#getwalldistances)
- [hasConfiguration](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#hasconfiguration)
- [isExternalObject](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md#isexternalobject)

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

## rotation

• **rotation**: `number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[rotation](configurator_core_src_roomle_configurator._internal_.PlanObject.md#rotation)

___

## size

• **size**: [`KernelVector3`](typings_kernel.KernelVector3.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[size](configurator_core_src_roomle_configurator._internal_.PlanObject.md#size)

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

### Inherited from

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

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getId](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getid)

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

## getPoint1

▸ **getPoint1**(): [`KernelVector3f`](typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](typings_kernel.KernelVector3f.md)

___

## getPoint2

▸ **getPoint2**(): [`KernelVector3f`](typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](typings_kernel.KernelVector3f.md)

___

## getRectangle

▸ **getRectangle**(): [`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

### Returns

[`Rectangle`](configurator_core_src_roomle_configurator._internal_.Rectangle.md)

### Inherited from

[PlanObject](configurator_core_src_roomle_configurator._internal_.PlanObject.md).[getRectangle](configurator_core_src_roomle_configurator._internal_.PlanObject.md#getrectangle)

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
