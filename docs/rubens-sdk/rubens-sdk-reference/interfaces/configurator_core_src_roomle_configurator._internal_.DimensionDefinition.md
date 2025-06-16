[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).DimensionDefinition

# Type parameters

| Name | Type |
| :------ | :------ |
| `Vector2Type` | `Vector3` \| [`Position2`](common_core_src_common_interfaces.Position2.md) |
| `Vector3Type` | `Vector3` \| [`Position3`](common_core_src_common_interfaces.Position3.md) |

# Hierarchy

- [`MeasurementBase`](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md)<`Vector2Type`, `Vector3Type`\>

  ↳ **`DimensionDefinition`**

# Table of contents

## Properties

- [fromPosition2d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#fromposition2d)
- [fromPosition3d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#fromposition3d)
- [fromWithoutPadding](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#fromwithoutpadding)
- [id](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#id)
- [isCurrentlyDrawn](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#iscurrentlydrawn)
- [length](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#length)
- [lengthFormatted](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#lengthformatted)
- [textDirection](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#textdirection)
- [textPosition2d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#textposition2d)
- [textPosition3d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#textposition3d)
- [textRotation](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#textrotation)
- [toPosition2d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#toposition2d)
- [toPosition3d](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#toposition3d)
- [toWithoutPadding](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md#towithoutpadding)

# Properties

## fromPosition2d

• **fromPosition2d**: `Vector2Type`

start position of the dimension in 2D *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[fromPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#fromposition2d)

___

## fromPosition3d

• **fromPosition3d**: `Vector3Type`

start position of the dimension in 3D *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[fromPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#fromposition3d)

___

## fromWithoutPadding

• `Optional` **fromWithoutPadding**: `Vector2Type`

___

## id

• **id**: `number`

___

## isCurrentlyDrawn

• `Optional` **isCurrentlyDrawn**: `boolean`

___

## length

• **length**: `number`

length of the wall in millimeters *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[length](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#length)

___

## lengthFormatted

• **lengthFormatted**: `string`

___

## textDirection

• **textDirection**: `Vector3Type`

3D direction vector of the text *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[textDirection](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textdirection)

___

## textPosition2d

• **textPosition2d**: `Vector2Type`

2D position where the length/label should be shown *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[textPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textposition2d)

___

## textPosition3d

• **textPosition3d**: `Vector3Type`

3D position where the length/label should be shown *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[textPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textposition3d)

___

## textRotation

• **textRotation**: `number`

rotation of the text in radians *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[textRotation](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textrotation)

___

## toPosition2d

• **toPosition2d**: `Vector2Type`

end position of the dimension in 2D *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[toPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#toposition2d)

___

## toPosition3d

• **toPosition3d**: `Vector3Type`

end position of the dimension in 3D *

### Inherited from

[MeasurementBase](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md).[toPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#toposition3d)

___

## toWithoutPadding

• `Optional` **toWithoutPadding**: `Vector2Type`
