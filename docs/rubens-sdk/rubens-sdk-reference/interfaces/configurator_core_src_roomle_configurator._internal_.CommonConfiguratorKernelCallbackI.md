[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).CommonConfiguratorKernelCallbackI

# Hierarchy

- **`CommonConfiguratorKernelCallbackI`**

  ↳ [`ConfiguratorKernelCallbackI`](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md)

# Table of contents

## Methods

- [Editor3ChangedMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3changedmesh)
- [Editor3dAddMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3daddmesh)
- [Editor3dBeginConstruction](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dbeginconstruction)
- [Editor3dComponentCreated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dcomponentcreated)
- [Editor3dComponentDocked](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dcomponentdocked)
- [Editor3dEndConstruction](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dendconstruction)
- [Editor3dGeometryNotReady](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dgeometrynotready)
- [Editor3dGeometryReady](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dgeometryready)
- [Editor3dRemoveMesh](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#editor3dremovemesh)
- [componentConfigurationUpdated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentconfigurationupdated)
- [componentDeleted](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentdeleted)
- [componentMetaUpdated](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#componentmetaupdated)
- [sceneCleared](configurator_core_src_roomle_configurator._internal_.CommonConfiguratorKernelCallbackI.md#scenecleared)

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

___

## Editor3dComponentDocked

▸ **Editor3dComponentDocked**(`componentId`, `isRootComponent`, `parentId`, `componentPosition`, `componentRotation`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `isRootComponent` | `boolean` |
| `parentId` | `number` |
| `componentPosition` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `componentRotation` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## Editor3dEndConstruction

▸ **Editor3dEndConstruction**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`void`

___

## Editor3dGeometryNotReady

▸ **Editor3dGeometryNotReady**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`void`

___

## Editor3dGeometryReady

▸ **Editor3dGeometryReady**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

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

___

## componentDeleted

▸ **componentDeleted**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## componentMetaUpdated

▸ **componentMetaUpdated**(`kernelComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelComponent` | [`KernelComponent`](typings_kernel.KernelComponent.md) |

### Returns

`void`

___

## sceneCleared

▸ **sceneCleared**(): `void`

### Returns

`void`
