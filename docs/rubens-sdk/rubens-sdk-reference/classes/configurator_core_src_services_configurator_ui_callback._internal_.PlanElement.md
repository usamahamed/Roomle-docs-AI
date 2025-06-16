[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).PlanElement

# Hierarchy

- [`AbstractModelWrapper`](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md)

  ↳ **`PlanElement`**

  ↳↳ [`ObjectGroup`](configurator_core_src_services_configurator_ui_callback._internal_.ObjectGroup.md)

  ↳↳ [`PlanText`](configurator_core_src_services_configurator_ui_callback._internal_.PlanText.md)

  ↳↳ [`PlanImage`](configurator_core_src_services_configurator_ui_callback._internal_.PlanImage.md)

  ↳↳ [`PlanMeasure`](configurator_core_src_services_configurator_ui_callback._internal_.PlanMeasure.md)

  ↳↳ [`Node`](configurator_core_src_services_configurator_ui_callback._internal_.Node.md)

  ↳↳ [`Floor`](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#constructor)

## Properties

- [extRef](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#extref)
- [isLocked](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#islocked)
- [isValid](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#isvalid)

## Methods

- [getCenter](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#getcenter)
- [getId](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#getid)
- [getType](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md#gettype)

# Constructors

## constructor

• **new PlanElement**()

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[constructor](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#constructor)

# Properties

## extRef

• **extRef**: `number`

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[extRef](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#extref)

___

## isLocked

• **isLocked**: `boolean`

___

## isValid

• **isValid**: `boolean`

# Methods

## getCenter

▸ **getCenter**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[getId](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#getid)

___

## getType

▸ **getType**(): [`PlanElementType`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanElementType.md)

### Returns

[`PlanElementType`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanElementType.md)
