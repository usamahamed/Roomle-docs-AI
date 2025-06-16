[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).Floor

# Hierarchy

- [`PlanElement`](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md)

  ↳ **`Floor`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#constructor)

## Properties

- [area](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#area)
- [extRef](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#extref)
- [isLocked](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#islocked)
- [isValid](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#isvalid)
- [material](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#material)

## Methods

- [getCenter](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#getcenter)
- [getCorners](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#getcorners)
- [getId](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#getid)
- [getNumberOfTriangles](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#getnumberoftriangles)
- [getRandomPointInside](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#getrandompointinside)
- [getTriangulationIndices](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#gettriangulationindices)
- [getType](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md#gettype)

# Constructors

## constructor

• **new Floor**()

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[constructor](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#constructor)

# Properties

## area

• **area**: `number`

___

## extRef

• **extRef**: `number`

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[extRef](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#extref)

___

## isLocked

• **isLocked**: `boolean`

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[isLocked](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#islocked)

___

## isValid

• **isValid**: `boolean`

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[isValid](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#isvalid)

___

## material

• **material**: [`FloorMaterial`](configurator_core_src_services_configurator_ui_callback._internal_.FloorMaterial.md)

# Methods

## getCenter

▸ **getCenter**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[getCenter](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#getcenter)

___

## getCorners

▸ **getCorners**(): `Object`

### Returns

`Object`

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[getId](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#getid)

___

## getNumberOfTriangles

▸ **getNumberOfTriangles**(): `number`

### Returns

`number`

___

## getRandomPointInside

▸ **getRandomPointInside**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getTriangulationIndices

▸ **getTriangulationIndices**(): `Object`

### Returns

`Object`

___

## getType

▸ **getType**(): [`PlanElementType`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanElementType.md)

### Returns

[`PlanElementType`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanElementType.md)

### Inherited from

[PlanElement](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md).[getType](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#gettype)
