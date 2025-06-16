[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Hierarchy

- **`default`**

  ↳ [`default`](configurator_core_src_roomle_configurator._internal_.default-12.md)

# Implements

- [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md)
- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-35.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-35.md#_creator_)

## Accessors

- [configurationExporter](configurator_core_src_roomle_configurator._internal_.default-35.md#configurationexporter)
- [kernelContainer](configurator_core_src_roomle_configurator._internal_.default-35.md#kernelcontainer)
- [kernelInstance](configurator_core_src_roomle_configurator._internal_.default-35.md#kernelinstance)

## Methods

- [Editor3ChangedMesh](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3changedmesh)
- [Editor3dAddMesh](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3daddmesh)
- [Editor3dBeginConstruction](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dbeginconstruction)
- [Editor3dComponentCreated](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dcomponentcreated)
- [Editor3dComponentDocked](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dcomponentdocked)
- [Editor3dEndConstruction](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dendconstruction)
- [Editor3dGeometryNotReady](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dgeometrynotready)
- [Editor3dGeometryReady](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dgeometryready)
- [Editor3dRemoveMesh](configurator_core_src_roomle_configurator._internal_.default-35.md#editor3dremovemesh)
- [addConfiguratorListener](configurator_core_src_roomle_configurator._internal_.default-35.md#addconfiguratorlistener)
- [addLabelToKernelComponent](configurator_core_src_roomle_configurator._internal_.default-35.md#addlabeltokernelcomponent)
- [addUiDataAndPriceToPartList](configurator_core_src_roomle_configurator._internal_.default-35.md#adduidataandpricetopartlist)
- [addUiDataToPartList](configurator_core_src_roomle_configurator._internal_.default-35.md#adduidatatopartlist)
- [calcPartsPriceSum](configurator_core_src_roomle_configurator._internal_.default-35.md#calcpartspricesum)
- [cleanUpCallbacks](configurator_core_src_roomle_configurator._internal_.default-35.md#cleanupcallbacks)
- [componentDeleted](configurator_core_src_roomle_configurator._internal_.default-35.md#componentdeleted)
- [componentMetaUpdated](configurator_core_src_roomle_configurator._internal_.default-35.md#componentmetaupdated)
- [destroy](configurator_core_src_roomle_configurator._internal_.default-35.md#destroy)
- [dockComponentWithPosition](configurator_core_src_roomle_configurator._internal_.default-35.md#dockcomponentwithposition)
- [getConfigurationData](configurator_core_src_roomle_configurator._internal_.default-35.md#getconfigurationdata)
- [loadComponent](configurator_core_src_roomle_configurator._internal_.default-35.md#loadcomponent)
- [loadItemConfigurations](configurator_core_src_roomle_configurator._internal_.default-35.md#loaditemconfigurations)
- [pause](configurator_core_src_roomle_configurator._internal_.default-35.md#pause)
- [removeConfiguratorListener](configurator_core_src_roomle_configurator._internal_.default-35.md#removeconfiguratorlistener)
- [requestAssets](configurator_core_src_roomle_configurator._internal_.default-35.md#requestassets)
- [requestDeleteComponent](configurator_core_src_roomle_configurator._internal_.default-35.md#requestdeletecomponent)
- [requestExternalMesh](configurator_core_src_roomle_configurator._internal_.default-35.md#requestexternalmesh)
- [requestMaterialProperties](configurator_core_src_roomle_configurator._internal_.default-35.md#requestmaterialproperties)
- [requestMaterialsInGroup](configurator_core_src_roomle_configurator._internal_.default-35.md#requestmaterialsingroup)
- [requestPartListAndUpdatePricesOfParts](configurator_core_src_roomle_configurator._internal_.default-35.md#requestpartlistandupdatepricesofparts)
- [requestPlanComponentConstruction](configurator_core_src_roomle_configurator._internal_.default-35.md#requestplancomponentconstruction)
- [resume](configurator_core_src_roomle_configurator._internal_.default-35.md#resume)
- [sceneCleared](configurator_core_src_roomle_configurator._internal_.default-35.md#scenecleared)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Accessors

## configurationExporter

• `get` **configurationExporter**(): [`ConfigurationExporter`](../interfaces/typings_kernel.ConfigurationExporter.md)

### Returns

[`ConfigurationExporter`](../interfaces/typings_kernel.ConfigurationExporter.md)

___

## kernelContainer

• `get` **kernelContainer**(): `any`

### Returns

`any`

___

## kernelInstance

• `get` **kernelInstance**(): [`ConfiguratorKernelClass`](../interfaces/typings_kernel.ConfiguratorKernelClass.md)

### Returns

[`ConfiguratorKernelClass`](../interfaces/typings_kernel.ConfiguratorKernelClass.md)

# Methods

## Editor3ChangedMesh

▸ **Editor3ChangedMesh**(`runtimeComponentId`, `meshId`, `geometryName`, `meshAttributes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `runtimeComponentId` | `number` |
| `meshId` | `number` |
| `geometryName` | `string` |
| `meshAttributes` | [`KernelMeshAttributes`](../interfaces/typings_kernel.KernelMeshAttributes.md) |

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
| `meshAttributes` | [`KernelMeshAttributes`](../interfaces/typings_kernel.KernelMeshAttributes.md) |
| `meshBuffer` | [`KernelMeshBuffer`](../interfaces/typings_kernel.KernelMeshBuffer.md) |

### Returns

`void`

___

## Editor3dBeginConstruction

▸ **Editor3dBeginConstruction**(`id`, `isDeltaUpdate`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
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
| `position` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |
| `eulerAngles` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |
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
| `componentPosition` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |
| `componentRotation` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |

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

## addConfiguratorListener

▸ **addConfiguratorListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ConfiguratorKernelCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md) |

### Returns

`void`

___

## addLabelToKernelComponent

▸ **addLabelToKernelComponent**(`kernelComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelComponent` | [`KernelComponent`](../interfaces/typings_kernel.KernelComponent.md) |

### Returns

`void`

___

## addUiDataAndPriceToPartList

▸ **addUiDataAndPriceToPartList**(`partList`, `hash`): `Promise`<[`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `partList` | [`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md) |
| `hash` | `string` |

### Returns

`Promise`<[`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md)\>

___

## addUiDataToPartList

▸ **addUiDataToPartList**(`partList`, `hash`): [`KernelPart`](../interfaces/typings_kernel.KernelPart.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `partList` | [`KernelPart`](../interfaces/typings_kernel.KernelPart.md)[] |
| `hash` | `string` |

### Returns

[`KernelPart`](../interfaces/typings_kernel.KernelPart.md)[]

___

## calcPartsPriceSum

▸ **calcPartsPriceSum**(`partList`): `Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `partList` | [`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md) |

### Returns

`Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

___

## cleanUpCallbacks

▸ **cleanUpCallbacks**(): `void`

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

▸ **componentMetaUpdated**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.destroy

___

## dockComponentWithPosition

▸ **dockComponentWithPosition**(`parentId`, `parentDockId`, `childId`, `childDockId`, `position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parentId` | `number` |
| `parentDockId` | `number` |
| `childId` | `number` |
| `childDockId` | `number` |
| `position` | [`KernelVector3`](../interfaces/typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## getConfigurationData

▸ **getConfigurationData**(`planObjectId`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

___

## loadComponent

▸ **loadComponent**(`componentIds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentIds` | `string`[] |

### Returns

`void`

___

## loadItemConfigurations

▸ **loadItemConfigurations**(`itemIds`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `itemIds` | `string`[] |

### Returns

`Promise`<`void`\>

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.pause

___

## removeConfiguratorListener

▸ **removeConfiguratorListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ConfiguratorKernelCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelCallbackI.md) |

### Returns

`void`

___

## requestAssets

▸ **requestAssets**(`requestedAssets`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `requestedAssets` | [`AssetRequest`](../interfaces/typings_kernel.AssetRequest.md)[] |

### Returns

`void`

___

## requestDeleteComponent

▸ **requestDeleteComponent**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## requestExternalMesh

▸ **requestExternalMesh**(`_requestedMeshes`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `_requestedMeshes` | { `meshId`: `string` ; `quality`: `number`  }[] |

### Returns

`void`

___

## requestMaterialProperties

▸ **requestMaterialProperties**(`materialIds`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `materialIds` | `string`[] |

### Returns

`Promise`<`void`\>

___

## requestMaterialsInGroup

▸ **requestMaterialsInGroup**(`groupIds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `groupIds` | `string`[] |

### Returns

`void`

___

## requestPartListAndUpdatePricesOfParts

▸ **requestPartListAndUpdatePricesOfParts**(`hash?`, `_prices?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `hash?` | `string` |
| `_prices?` | `Map`<`string`, [`RapiPrice`](../interfaces/typings_rapi_types.RapiPrice.md)\> |

### Returns

`Promise`<`void`\>

___

## requestPlanComponentConstruction

▸ **requestPlanComponentConstruction**(`id`, `useDeltaUpdates?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `useDeltaUpdates` | `boolean` | `USE_DELTA_COMPONENT_UPDATES` |

### Returns

`void`

___

## resume

▸ **resume**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.resume

___

## sceneCleared

▸ **sceneCleared**(): `void`

### Returns

`void`
