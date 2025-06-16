[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).MeasurementBase

# Type parameters

| Name | Type |
| :------ | :------ |
| `Vector2Type` | `Vector3` \| [`Position2`](common_core_src_common_interfaces.Position2.md) |
| `Vector3Type` | `Vector3` \| [`Position3`](common_core_src_common_interfaces.Position3.md) |

# Hierarchy

- **`MeasurementBase`**

  ↳ [`DimensionDefinition`](configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md)

# Table of contents

## Properties

- [fromPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#fromposition2d)
- [fromPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#fromposition3d)
- [length](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#length)
- [textDirection](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textdirection)
- [textPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textposition2d)
- [textPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textposition3d)
- [textRotation](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#textrotation)
- [toPosition2d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#toposition2d)
- [toPosition3d](configurator_core_src_roomle_configurator._internal_.MeasurementBase.md#toposition3d)

# Properties

## fromPosition2d

• **fromPosition2d**: `Vector2Type`

start position of the dimension in 2D *

___

## fromPosition3d

• **fromPosition3d**: `Vector3Type`

start position of the dimension in 3D *

___

## length

• **length**: `number`

length of the wall in millimeters *

___

## textDirection

• **textDirection**: `Vector3Type`

3D direction vector of the text *

___

## textPosition2d

• **textPosition2d**: `Vector2Type`

2D position where the length/label should be shown *

___

## textPosition3d

• **textPosition3d**: `Vector3Type`

3D position where the length/label should be shown *

___

## textRotation

• **textRotation**: `number`

rotation of the text in radians *

___

## toPosition2d

• **toPosition2d**: `Vector2Type`

end position of the dimension in 2D *

___

## toPosition3d

• **toPosition3d**: `Vector3Type`

end position of the dimension in 3D *
