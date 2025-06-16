[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PlanModelViewHelper

# Table of contents

## Methods

- [getExternalComponentModuleIdsForSelection](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getexternalcomponentmoduleidsforselection)
- [getExternalObjectComponent](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getexternalobjectcomponent)
- [getObjectComponent](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getobjectcomponent)
- [getPlanObject](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getplanobject)
- [getPlanOverview](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getplanoverview)
- [getRootPlanObjectId](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#getrootplanobjectid)
- [requestMesh3d](configurator_core_src_roomle_configurator._internal_.PlanModelViewHelper.md#requestmesh3d)

# Methods

## getExternalComponentModuleIdsForSelection

▸ **getExternalComponentModuleIdsForSelection**(`plan`, `groupOrRootModuleId`, `subModuleId`): [`ExternalModuleInformation`](typings_kernel.ExternalModuleInformation.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `groupOrRootModuleId` | `string` |
| `subModuleId` | `string` |

### Returns

[`ExternalModuleInformation`](typings_kernel.ExternalModuleInformation.md)

___

## getExternalObjectComponent

▸ **getExternalObjectComponent**(`plan`, `groupId`, `moduleId`): [`KernelPlanObjectComponent`](typings_kernel.KernelPlanObjectComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `groupId` | `string` |
| `moduleId` | `string` |

### Returns

[`KernelPlanObjectComponent`](typings_kernel.KernelPlanObjectComponent.md)

___

## getObjectComponent

▸ **getObjectComponent**(`plan`, `aComponentOrConfigurationId`): [`KernelPlanObjectComponent`](typings_kernel.KernelPlanObjectComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `aComponentOrConfigurationId` | `number` |

### Returns

[`KernelPlanObjectComponent`](typings_kernel.KernelPlanObjectComponent.md)

___

## getPlanObject

▸ **getPlanObject**(`plan`, `aRuntimeId`): [`KernelPlanObject`](typings_kernel.KernelPlanObject.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `aRuntimeId` | `number` |

### Returns

[`KernelPlanObject`](typings_kernel.KernelPlanObject.md)

___

## getPlanOverview

▸ **getPlanOverview**(`planObject`): [`PlanOverview`](configurator_core_src_roomle_configurator._internal_.PlanOverview.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

[`PlanOverview`](configurator_core_src_roomle_configurator._internal_.PlanOverview.md)

___

## getRootPlanObjectId

▸ **getRootPlanObjectId**(`plan`, `aRuntimeId`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md) |
| `aRuntimeId` | `number` |

### Returns

`number`

___

## requestMesh3d

▸ **requestMesh3d**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`PlanElement`](configurator_core_src_roomle_configurator._internal_.PlanElement.md) |

### Returns

`void`
