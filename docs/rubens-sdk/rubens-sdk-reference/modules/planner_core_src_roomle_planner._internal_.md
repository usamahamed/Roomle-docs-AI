# Table of contents

## Enumerations

- [MODE](../enums/planner_core_src_roomle_planner._internal_.MODE.md)
- [PLANNER\_SCENE\_EVENT\_STATE](../enums/planner_core_src_roomle_planner._internal_.PLANNER_SCENE_EVENT_STATE.md)
- [STATE](../enums/planner_core_src_roomle_planner._internal_.STATE.md)

## Classes

- [PlannerSelectionHandlerEvent](../classes/planner_core_src_roomle_planner._internal_.PlannerSelectionHandlerEvent.md)
- [SceneEventInfo](../classes/planner_core_src_roomle_planner._internal_.SceneEventInfo.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-1.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-2.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-3.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-4.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-5.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-6.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-7.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-8.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-9.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-10.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-11.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-12.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-13.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-14.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-15.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-16.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-17.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-18.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-19.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-20.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-21.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-22.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-23.md)
- [default](../classes/planner_core_src_roomle_planner._internal_.default-24.md)

## Interfaces

- [ConstructionMeasurements](../interfaces/planner_core_src_roomle_planner._internal_.ConstructionMeasurements.md)
- [ConstructionPlanObject](../interfaces/planner_core_src_roomle_planner._internal_.ConstructionPlanObject.md)
- [FloorAreaData](../interfaces/planner_core_src_roomle_planner._internal_.FloorAreaData.md)
- [LeftOrRightWallSide](../interfaces/planner_core_src_roomle_planner._internal_.LeftOrRightWallSide.md)
- [LocalStorageEntry](../interfaces/planner_core_src_roomle_planner._internal_.LocalStorageEntry.md)
- [NodePlanObject](../interfaces/planner_core_src_roomle_planner._internal_.NodePlanObject.md)
- [PlanObjectEventInfo](../interfaces/planner_core_src_roomle_planner._internal_.PlanObjectEventInfo.md)
- [PrepareImageOptionsPlanner](../interfaces/planner_core_src_roomle_planner._internal_.PrepareImageOptionsPlanner.md)
- [Store](../interfaces/planner_core_src_roomle_planner._internal_.Store.md)
- [WallPlanObject](../interfaces/planner_core_src_roomle_planner._internal_.WallPlanObject.md)

## Type Aliases

- [CancelSelectionReasons](planner_core_src_roomle_planner._internal_.md#cancelselectionreasons)
- [ConstructionMeasurement](planner_core_src_roomle_planner._internal_.md#constructionmeasurement)
- [MeasurementLineDimension](planner_core_src_roomle_planner._internal_.md#measurementlinedimension)
- [MeasurementLineDraggablePoints](planner_core_src_roomle_planner._internal_.md#measurementlinedraggablepoints)
- [ObjectToWallDimensionTransferable](planner_core_src_roomle_planner._internal_.md#objecttowalldimensiontransferable)
- [Values](planner_core_src_roomle_planner._internal_.md#values)
- [WallDimension](planner_core_src_roomle_planner._internal_.md#walldimension)

## Variables

- [MEASUREMENTS\_LINE\_DRAGGABLE\_POINTS\_NAME](planner_core_src_roomle_planner._internal_.md#measurements_line_draggable_points_name)

# Type Aliases

## CancelSelectionReasons

Ƭ **CancelSelectionReasons**: ``"swap_object"`` \| ``"click_outside"`` \| ``"select_other"`` \| ``"double_click_wall"`` \| ``"unknown"`` \| ``"dock_component"`` \| ``"delete_object"``

___

## ConstructionMeasurement

Ƭ **ConstructionMeasurement**: [`MeasurementBase`](../interfaces/configurator_core_src_roomle_configurator._internal_.MeasurementBase.md)<`Vector3`, `Vector3`\>

___

## MeasurementLineDimension

Ƭ **MeasurementLineDimension**: [`DimensionDefinition`](../interfaces/configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md)<`Vector3`, `Vector3`\>

___

## MeasurementLineDraggablePoints

Ƭ **MeasurementLineDraggablePoints**: [`ValuesFromObject`](configurator_core_src_configurator._internal_.md#valuesfromobject)<typeof [`MEASUREMENTS_LINE_DRAGGABLE_POINTS_NAME`](planner_core_src_roomle_planner._internal_.md#measurements_line_draggable_points_name)\>

___

## ObjectToWallDimensionTransferable

Ƭ **ObjectToWallDimensionTransferable**: [`DimensionDefinition`](../interfaces/configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md)<[`Position2`](../interfaces/common_core_src_common_interfaces.Position2.md), [`Position3`](../interfaces/common_core_src_common_interfaces.Position3.md)\>

___

## Values

Ƭ **Values**<`T`\>: `T`[keyof `T`]

### Type parameters

| Name |
| :------ |
| `T` |

___

## WallDimension

Ƭ **WallDimension**: [`DimensionDefinition`](../interfaces/configurator_core_src_roomle_configurator._internal_.DimensionDefinition.md)<`Vector3`, `Vector3`\>

# Variables

## MEASUREMENTS\_LINE\_DRAGGABLE\_POINTS\_NAME

• `Const` **MEASUREMENTS\_LINE\_DRAGGABLE\_POINTS\_NAME**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `POINT1` | ``"point1"`` |
| `POINT2` | ``"point2"`` |
