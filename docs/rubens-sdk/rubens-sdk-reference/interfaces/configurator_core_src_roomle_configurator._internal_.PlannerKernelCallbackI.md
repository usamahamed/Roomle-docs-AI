[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PlannerKernelCallbackI

# Implemented by

- [`default`](../classes/planner_core_src_roomle_planner._internal_.default.md)
- [`default`](../classes/planner_core_src_roomle_planner._internal_.default-6.md)

# Table of contents

## Methods

- [addMesh](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#addmesh)
- [addPlanMesh](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#addplanmesh)
- [addPlanObjectToScene](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#addplanobjecttoscene)
- [beginPlanConstruction](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#beginplanconstruction)
- [endPlanConstruction](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#endplanconstruction)
- [handlerSwitchedPlans](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#handlerswitchedplans)
- [planBoundsChanged](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#planboundschanged)
- [planCleared](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#plancleared)
- [planCompletelyLoaded](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#plancompletelyloaded)
- [planElementChanged](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#planelementchanged)
- [planElementRemoved](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#planelementremoved)
- [planHistoryStateChanged](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#planhistorystatechanged)
- [planObjectConfigurationLoaded](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#planobjectconfigurationloaded)
- [removePlanObjectFromScene](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#removeplanobjectfromscene)
- [startedDrawing](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#starteddrawing)
- [stoppedDrawing](configurator_core_src_roomle_configurator._internal_.PlannerKernelCallbackI.md#stoppeddrawing)

# Methods

## addMesh

▸ **addMesh**(`planElement`, `material`, `vertices`, `indices`, `uvCoords`, `normals`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElement` | [`PlanElement`](configurator_core_src_roomle_configurator._internal_.PlanElement.md) |
| `material` | `any` |
| `vertices` | `Float32Array` |
| `indices` | `Int32Array` |
| `uvCoords` | `Float32Array` |
| `normals` | `Float32Array` |

### Returns

`void`

___

## addPlanMesh

▸ **addPlanMesh**(`plan`, `material`, `vertices`, `indices`, `uvCoords`, `normals`, `type`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `material` | `any` |
| `vertices` | `Float32Array` |
| `indices` | `Int32Array` |
| `uvCoords` | `Float32Array` |
| `normals` | `Float32Array` |
| `type` | [`KernelEnum`](typings_kernel.KernelEnum.md) |

### Returns

`void`

___

## addPlanObjectToScene

▸ **addPlanObjectToScene**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-49.md) |

### Returns

`void`

___

## beginPlanConstruction

▸ **beginPlanConstruction**(`plan`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |

### Returns

`void`

___

## endPlanConstruction

▸ **endPlanConstruction**(`plan`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |

### Returns

`void`

___

## handlerSwitchedPlans

▸ **handlerSwitchedPlans**(`fromPlan`, `toPlan`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `fromPlan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `toPlan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |

### Returns

`void`

___

## planBoundsChanged

▸ **planBoundsChanged**(): `void`

### Returns

`void`

___

## planCleared

▸ **planCleared**(): `void`

### Returns

`void`

___

## planCompletelyLoaded

▸ **planCompletelyLoaded**(`plan`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |

### Returns

`void`

___

## planElementChanged

▸ **planElementChanged**(`plan`, `planObject`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `planObject` | [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## planElementRemoved

▸ **planElementRemoved**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`PlanElement`](configurator_core_src_roomle_configurator._internal_.PlanElement.md) |

### Returns

`void`

___

## planHistoryStateChanged

▸ **planHistoryStateChanged**(): `void`

### Returns

`void`

___

## planObjectConfigurationLoaded

▸ **planObjectConfigurationLoaded**(`plan`, `element`, `success`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `element` | [`PlanElement`](configurator_core_src_roomle_configurator._internal_.PlanElement.md) |
| `success` | `boolean` |

### Returns

`void`

___

## removePlanObjectFromScene

▸ **removePlanObjectFromScene**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-49.md) |

### Returns

`void`

___

## startedDrawing

▸ **startedDrawing**(): `void`

### Returns

`void`

___

## stoppedDrawing

▸ **stoppedDrawing**(): `void`

### Returns

`void`
