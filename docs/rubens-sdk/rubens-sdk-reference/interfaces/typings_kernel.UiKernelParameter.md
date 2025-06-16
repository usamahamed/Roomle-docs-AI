[typings/kernel](../modules/typings_kernel.md).UiKernelParameter

# Hierarchy

- [`KernelParameter`](typings_kernel.KernelParameter.md)

  ↳ **`UiKernelParameter`**

# Table of contents

## Properties

- [additionalInfos](typings_kernel.UiKernelParameter.md#additionalinfos)
- [enabled](typings_kernel.UiKernelParameter.md#enabled)
- [group](typings_kernel.UiKernelParameter.md#group)
- [grouping](typings_kernel.UiKernelParameter.md#grouping)
- [groups](typings_kernel.UiKernelParameter.md#groups)
- [key](typings_kernel.UiKernelParameter.md#key)
- [label](typings_kernel.UiKernelParameter.md#label)
- [sort](typings_kernel.UiKernelParameter.md#sort)
- [tooltip](typings_kernel.UiKernelParameter.md#tooltip)
- [type](typings_kernel.UiKernelParameter.md#type)
- [uiType](typings_kernel.UiKernelParameter.md#uitype)
- [unitType](typings_kernel.UiKernelParameter.md#unittype)
- [validGroups](typings_kernel.UiKernelParameter.md#validgroups)
- [validRange](typings_kernel.UiKernelParameter.md#validrange)
- [validRangeLabels](typings_kernel.UiKernelParameter.md#validrangelabels)
- [validValues](typings_kernel.UiKernelParameter.md#validvalues)
- [value](typings_kernel.UiKernelParameter.md#value)
- [valueLabel](typings_kernel.UiKernelParameter.md#valuelabel)
- [visibleInPlanner](typings_kernel.UiKernelParameter.md#visibleinplanner)

# Properties

## additionalInfos

• `Optional` **additionalInfos**: [`AdditionalInfo`](typings_rapi_types.AdditionalInfo.md)[]

___

## enabled

• **enabled**: `boolean`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[enabled](typings_kernel.KernelParameter.md#enabled)

___

## group

• **group**: `string`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[group](typings_kernel.KernelParameter.md#group)

___

## grouping

• **grouping**: [`KernelParameterGroup`](typings_kernel.KernelParameterGroup.md)

___

## groups

• **groups**: `Promise`<[`RapiJson`](typings_rapi_types.RapiJson.md)[]\>

___

## key

• **key**: `string`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[key](typings_kernel.KernelParameter.md#key)

___

## label

• **label**: `string`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[label](typings_kernel.KernelParameter.md#label)

___

## sort

• **sort**: `number`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[sort](typings_kernel.KernelParameter.md#sort)

___

## tooltip

• `Optional` **tooltip**: `Object`

### Index signature

▪ [key: `string`]: `string`

___

## type

• **type**: [`PARAMETER_KERNEL_TYPE`](../enums/configurator_core_src_roomle_configurator._internal_.PARAMETER_KERNEL_TYPE.md)

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[type](typings_kernel.KernelParameter.md#type)

___

## uiType

• **uiType**: `string`

___

## unitType

• **unitType**: [`PARAMETER_UNIT_TYPES`](../enums/typings_kernel._internal_.PARAMETER_UNIT_TYPES.md)

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[unitType](typings_kernel.KernelParameter.md#unittype)

___

## validGroups

• **validGroups**: [`string`]

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[validGroups](typings_kernel.KernelParameter.md#validgroups)

___

## validRange

• **validRange**: [`KernelRange`](typings_kernel.KernelRange.md)

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[validRange](typings_kernel.KernelParameter.md#validrange)

___

## validRangeLabels

• `Optional` **validRangeLabels**: [`UiKernelRange`](typings_kernel.UiKernelRange.md)

___

## validValues

• **validValues**: [`KernelValue`](typings_kernel.KernelValue.md)[]

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[validValues](typings_kernel.KernelParameter.md#validvalues)

___

## value

• **value**: `string`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[value](typings_kernel.KernelParameter.md#value)

___

## valueLabel

• **valueLabel**: `string`

___

## visibleInPlanner

• `Optional` **visibleInPlanner**: `boolean`

### Inherited from

[KernelParameter](typings_kernel.KernelParameter.md).[visibleInPlanner](typings_kernel.KernelParameter.md#visibleinplanner)
