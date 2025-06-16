[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ConfiguratorKernelCallbackI

# Hierarchy

- [`CommonConfiguratorKernelCallbackI`](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md)

  ↳ **`ConfiguratorKernelCallbackI`**

# Implemented by

- [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-20.md)

# Table of contents

## Methods

- [Editor3ChangedMesh](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3changedmesh)
- [Editor3dAddDockPreview](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dadddockpreview)
- [Editor3dAddMesh](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3daddmesh)
- [Editor3dBeginConstruction](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dbeginconstruction)
- [Editor3dComponentCreated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dcomponentcreated)
- [Editor3dComponentDocked](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dcomponentdocked)
- [Editor3dEndConstruction](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dendconstruction)
- [Editor3dGeometryNotReady](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dgeometrynotready)
- [Editor3dGeometryReady](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dgeometryready)
- [Editor3dPlanObjectConstructionDone](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dplanobjectconstructiondone)
- [Editor3dPreviewConstructionDone](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dpreviewconstructiondone)
- [Editor3dRemoveMesh](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dremovemesh)
- [Editor3dSetPreviewLineAssociations](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dsetpreviewlineassociations)
- [Editor3dSetPreviewPointAssociations](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#editor3dsetpreviewpointassociations)
- [changeAnimationValue](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#changeanimationvalue)
- [componentConfigurationUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#componentconfigurationupdated)
- [componentDeleted](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#componentdeleted)
- [componentMetaUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#componentmetaupdated)
- [configurationLoaded](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#configurationloaded)
- [finishParameterChange](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#finishparameterchange)
- [planObjectConfigurationUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#planobjectconfigurationupdated)
- [planObjectCreated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#planobjectcreated)
- [planObjectUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#planobjectupdated)
- [sceneCleared](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#scenecleared)
- [updateAnimationParameters](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md#updateanimationparameters)

# Methods

## Editor3ChangedMesh

▸ **Editor3ChangedMesh**(`runtimeComponentId`, `meshId`, `geometryName`, `meshAttributes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeComponentId` | `number` |
| `meshId` | `number` |
| `geometryName` | `string` |
| `meshAttributes` | [`KernelMeshAttributes`](typings_kernel.KernelMeshAttributes.md) |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3ChangedMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3changedmesh)

___

## Editor3dAddDockPreview

▸ **Editor3dAddDockPreview**(`componentId`, `previewId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `previewId` | `number` |

### Returns

`void`

___

## Editor3dAddMesh

▸ **Editor3dAddMesh**(`runtimeComponentId`, `meshId`, `geometryName`, `environmentGeometry`, `meshAttributes`, `meshBuffer`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeComponentId` | `number` |
| `meshId` | `number` |
| `geometryName` | `string` |
| `environmentGeometry` | `boolean` |
| `meshAttributes` | [`KernelMeshAttributes`](typings_kernel.KernelMeshAttributes.md) |
| `meshBuffer` | [`KernelMeshBuffer`](typings_kernel.KernelMeshBuffer.md) |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dAddMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3daddmesh)

___

## Editor3dBeginConstruction

▸ **Editor3dBeginConstruction**(`componentId`, `isDeltaUpdate`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `isDeltaUpdate` | `boolean` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dBeginConstruction](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dbeginconstruction)

___

## Editor3dComponentCreated

▸ **Editor3dComponentCreated**(`id`, `position`, `eulerAngles`, `isRootComponent`, `parentObjectRuntimeId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `eulerAngles` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `isRootComponent` | `boolean` |
| `parentObjectRuntimeId` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dComponentCreated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dcomponentcreated)

___

## Editor3dComponentDocked

▸ **Editor3dComponentDocked**(`componentId`, `isRootComponent`, `parentObjectRuntimeId`, `componentPosition`, `componentRotation`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `isRootComponent` | `boolean` |
| `parentObjectRuntimeId` | `number` |
| `componentPosition` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `componentRotation` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

### Overrides

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dComponentDocked](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dcomponentdocked)

___

## Editor3dEndConstruction

▸ **Editor3dEndConstruction**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dEndConstruction](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dendconstruction)

___

## Editor3dGeometryNotReady

▸ **Editor3dGeometryNotReady**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dGeometryNotReady](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dgeometrynotready)

___

## Editor3dGeometryReady

▸ **Editor3dGeometryReady**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dGeometryReady](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dgeometryready)

___

## Editor3dPlanObjectConstructionDone

▸ **Editor3dPlanObjectConstructionDone**(`planObjectId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

`void`

___

## Editor3dPreviewConstructionDone

▸ **Editor3dPreviewConstructionDone**(`componentId`, `objectId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `objectId` | `number` |

### Returns

`void`

___

## Editor3dRemoveMesh

▸ **Editor3dRemoveMesh**(`runtimeComponentId`, `meshId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeComponentId` | `number` |
| `meshId` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[Editor3dRemoveMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dremovemesh)

___

## Editor3dSetPreviewLineAssociations

▸ **Editor3dSetPreviewLineAssociations**(`dockLines`, `previewId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `dockLines` | `any` |
| `previewId` | `number` |

### Returns

`void`

___

## Editor3dSetPreviewPointAssociations

▸ **Editor3dSetPreviewPointAssociations**(`dockPairs`, `previewId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `dockPairs` | `any` |
| `previewId` | `number` |

### Returns

`void`

___

## changeAnimationValue

▸ **changeAnimationValue**(`elementId`, `parameterKey`, `value`, `applyToChildren`, `animate`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `number` |
| `parameterKey` | `string` |
| `value` | `string` |
| `applyToChildren` | `boolean` |
| `animate` | `boolean` |

### Returns

`void`

___

## componentConfigurationUpdated

▸ **componentConfigurationUpdated**(`runtimeComponentId`, `geometryChanged`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeComponentId` | `number` |
| `geometryChanged` | `boolean` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[componentConfigurationUpdated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentconfigurationupdated)

___

## componentDeleted

▸ **componentDeleted**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[componentDeleted](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentdeleted)

___

## componentMetaUpdated

▸ **componentMetaUpdated**(`kernelComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelComponent` | [`KernelComponent`](typings_kernel.KernelComponent.md) |

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[componentMetaUpdated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentmetaupdated)

___

## configurationLoaded

▸ **configurationLoaded**(`conversationId`, `objectId`, `componentId`, `hash`, `errors`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `objectId` | `number` |
| `componentId` | `number` |
| `hash` | `string` |
| `errors` | `any` |

### Returns

`void`

___

## finishParameterChange

▸ **finishParameterChange**(`resolve`, `reject`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `resolve` | () => `void` |
| `reject` | () => `void` |

### Returns

`void`

___

## planObjectConfigurationUpdated

▸ **planObjectConfigurationUpdated**(`planObjectId`, `configuration`, `hash`, `pendingDocking`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |
| `configuration` | `string` |
| `hash` | `string` |
| `pendingDocking` | `boolean` |

### Returns

`void`

___

## planObjectCreated

▸ **planObjectCreated**(`conversationId`, `planObjectId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `planObjectId` | `number` |

### Returns

`void`

___

## planObjectUpdated

▸ **planObjectUpdated**(`planObject`, `pendingDocking`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`PlanObject`](typings_kernel.PlanObject.md) |
| `pendingDocking` | `boolean` |

### Returns

`void`

___

## sceneCleared

▸ **sceneCleared**(): `void`

### Returns

`void`

### Inherited from

[CommonConfiguratorKernelCallbackI](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md).[sceneCleared](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#scenecleared)

___

## updateAnimationParameters

▸ **updateAnimationParameters**(`elementId`, `parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `number` \| `number`[] |
| `parameters` | [`KernelParameter`](typings_kernel.KernelParameter.md)[] |

### Returns

`void`
