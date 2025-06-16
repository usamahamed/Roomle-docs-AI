[typings/kernel](../modules/typings_kernel.md).ConfiguratorKernelClass

# Table of contents

## Methods

- [addPriceList](typings_kernel.ConfiguratorKernelClass.md#addpricelist)
- [assetsLoaded](typings_kernel.ConfiguratorKernelClass.md#assetsloaded)
- [cancelDocking](typings_kernel.ConfiguratorKernelClass.md#canceldocking)
- [clearAll](typings_kernel.ConfiguratorKernelClass.md#clearall)
- [clearScene](typings_kernel.ConfiguratorKernelClass.md#clearscene)
- [createNewSerializedConfiguration](typings_kernel.ConfiguratorKernelClass.md#createnewserializedconfiguration)
- [deleteComponent](typings_kernel.ConfiguratorKernelClass.md#deletecomponent)
- [deletePlanComponent](typings_kernel.ConfiguratorKernelClass.md#deleteplancomponent)
- [deletePlanComponents](typings_kernel.ConfiguratorKernelClass.md#deleteplancomponents)
- [dockComponent](typings_kernel.ConfiguratorKernelClass.md#dockcomponent)
- [dockComponentWithPosition](typings_kernel.ConfiguratorKernelClass.md#dockcomponentwithposition)
- [getChildrenOfPlanComponent](typings_kernel.ConfiguratorKernelClass.md#getchildrenofplancomponent)
- [getChildrenOfPlanObject](typings_kernel.ConfiguratorKernelClass.md#getchildrenofplanobject)
- [getCommonPlanComponentParameters](typings_kernel.ConfiguratorKernelClass.md#getcommonplancomponentparameters)
- [getComponent](typings_kernel.ConfiguratorKernelClass.md#getcomponent)
- [getComponentId](typings_kernel.ConfiguratorKernelClass.md#getcomponentid)
- [getComponentParameters](typings_kernel.ConfiguratorKernelClass.md#getcomponentparameters)
- [getExternalComponentModuleIds](typings_kernel.ConfiguratorKernelClass.md#getexternalcomponentmoduleids)
- [getExternalObjectDocking](typings_kernel.ConfiguratorKernelClass.md#getexternalobjectdocking)
- [getFullPartList](typings_kernel.ConfiguratorKernelClass.md#getfullpartlist)
- [getHashOfConfiguration](typings_kernel.ConfiguratorKernelClass.md#gethashofconfiguration)
- [getHashOfSerializedConfiguration](typings_kernel.ConfiguratorKernelClass.md#gethashofserializedconfiguration)
- [getPartList](typings_kernel.ConfiguratorKernelClass.md#getpartlist)
- [getPlanComponentAnimations](typings_kernel.ConfiguratorKernelClass.md#getplancomponentanimations)
- [getPlanComponentPossibleChildren](typings_kernel.ConfiguratorKernelClass.md#getplancomponentpossiblechildren)
- [getPlanObject](typings_kernel.ConfiguratorKernelClass.md#getplanobject)
- [getPlanObjectAnimations](typings_kernel.ConfiguratorKernelClass.md#getplanobjectanimations)
- [getPlanObjectChildren](typings_kernel.ConfiguratorKernelClass.md#getplanobjectchildren)
- [getPlanObjectFromPlanComponent](typings_kernel.ConfiguratorKernelClass.md#getplanobjectfromplancomponent)
- [getPlanObjectParameters](typings_kernel.ConfiguratorKernelClass.md#getplanobjectparameters)
- [getPlanObjectPossibleChildren](typings_kernel.ConfiguratorKernelClass.md#getplanobjectpossiblechildren)
- [getRootPlanComponentIdFromObjectId](typings_kernel.ConfiguratorKernelClass.md#getrootplancomponentidfromobjectid)
- [getSerializedConfiguration](typings_kernel.ConfiguratorKernelClass.md#getserializedconfiguration)
- [isExternalPlanObject](typings_kernel.ConfiguratorKernelClass.md#isexternalplanobject)
- [loadComponentDefinition](typings_kernel.ConfiguratorKernelClass.md#loadcomponentdefinition)
- [loadConfiguration](typings_kernel.ConfiguratorKernelClass.md#loadconfiguration)
- [loadExternalAttributeDefinition](typings_kernel.ConfiguratorKernelClass.md#loadexternalattributedefinition)
- [loadFreeFlyingConfiguration](typings_kernel.ConfiguratorKernelClass.md#loadfreeflyingconfiguration)
- [loadPlainComponent](typings_kernel.ConfiguratorKernelClass.md#loadplaincomponent)
- [registerDebugClient](typings_kernel.ConfiguratorKernelClass.md#registerdebugclient)
- [requestDeltaPlanComponentConstruction](typings_kernel.ConfiguratorKernelClass.md#requestdeltaplancomponentconstruction)
- [requestPlanComponentConstruction](typings_kernel.ConfiguratorKernelClass.md#requestplancomponentconstruction)
- [requestPlanComponentConstructionRecursive](typings_kernel.ConfiguratorKernelClass.md#requestplancomponentconstructionrecursive)
- [requestPlanObjectConstruction](typings_kernel.ConfiguratorKernelClass.md#requestplanobjectconstruction)
- [requestPreviewGeometry](typings_kernel.ConfiguratorKernelClass.md#requestpreviewgeometry)
- [requestPreviewGeometryForExternalObject](typings_kernel.ConfiguratorKernelClass.md#requestpreviewgeometryforexternalobject)
- [resetPriceListIds](typings_kernel.ConfiguratorKernelClass.md#resetpricelistids)
- [setActiveGroupInView](typings_kernel.ConfiguratorKernelClass.md#setactivegroupinview)
- [setActiveGroupInViewForPlanObject](typings_kernel.ConfiguratorKernelClass.md#setactivegroupinviewforplanobject)
- [setAssetInvalid](typings_kernel.ConfiguratorKernelClass.md#setassetinvalid)
- [setComponentParameter](typings_kernel.ConfiguratorKernelClass.md#setcomponentparameter)
- [setDockInsertPreviewBoxParameters](typings_kernel.ConfiguratorKernelClass.md#setdockinsertpreviewboxparameters)
- [setEnvironmentVariable](typings_kernel.ConfiguratorKernelClass.md#setenvironmentvariable)
- [setExternalObjectConstructionProperties](typings_kernel.ConfiguratorKernelClass.md#setexternalobjectconstructionproperties)
- [setLevel](typings_kernel.ConfiguratorKernelClass.md#setlevel)
- [setPlanComponentParameters](typings_kernel.ConfiguratorKernelClass.md#setplancomponentparameters)
- [setPlanObjectParameter](typings_kernel.ConfiguratorKernelClass.md#setplanobjectparameter)
- [setUpdateCallbacksOnlyIfGeometryIsReady](typings_kernel.ConfiguratorKernelClass.md#setupdatecallbacksonlyifgeometryisready)
- [syncPlanObjectToView](typings_kernel.ConfiguratorKernelClass.md#syncplanobjecttoview)
- [useEnvironmentGeometry](typings_kernel.ConfiguratorKernelClass.md#useenvironmentgeometry)
- [useHDGeometry](typings_kernel.ConfiguratorKernelClass.md#usehdgeometry)

# Methods

## addPriceList

▸ **addPriceList**(`newLocale`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `newLocale` | `string` |

### Returns

`void`

___

## assetsLoaded

▸ **assetsLoaded**(`assets`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`AssetResponse`](typings_kernel.AssetResponse.md) \| [`AssetResponse`](typings_kernel.AssetResponse.md)[] |

### Returns

`void`

___

## cancelDocking

▸ **cancelDocking**(`componentId`, `undoDrag`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `undoDrag` | `boolean` |

### Returns

`void`

___

## clearAll

▸ **clearAll**(): `void`

### Returns

`void`

___

## clearScene

▸ **clearScene**(): `void`

### Returns

`void`

___

## createNewSerializedConfiguration

▸ **createNewSerializedConfiguration**(`configurationRuntimeId`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `configurationRuntimeId` | `number` |

### Returns

`string`

___

## deleteComponent

▸ **deleteComponent**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## deletePlanComponent

▸ **deletePlanComponent**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `any` |

### Returns

`void`

___

## deletePlanComponents

▸ **deletePlanComponents**(`componentIds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentIds` | `any` |

### Returns

`void`

___

## dockComponent

▸ **dockComponent**(`childId`, `childDockId`, `parentId`, `parentDockId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `childId` | `number` |
| `childDockId` | `number` |
| `parentId` | `number` |
| `parentDockId` | `number` |

### Returns

`void`

___

## dockComponentWithPosition

▸ **dockComponentWithPosition**(`childId`, `childDockId`, `parentId`, `parentDockId`, `position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `childId` | `number` |
| `childDockId` | `number` |
| `parentId` | `number` |
| `parentDockId` | `number` |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## getChildrenOfPlanComponent

▸ **getChildrenOfPlanComponent**(`componentId`, `onlyPossible`, `onlyVisible`): [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `onlyPossible` | `boolean` |
| `onlyVisible` | `boolean` |

### Returns

[`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

___

## getChildrenOfPlanObject

▸ **getChildrenOfPlanObject**(`planObjectId`, `onlyPossible`, `onlyVisible`): [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |
| `onlyPossible` | `boolean` |
| `onlyVisible` | `boolean` |

### Returns

[`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

___

## getCommonPlanComponentParameters

▸ **getCommonPlanComponentParameters**(`componentIds`): `Object`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentIds` | `any` |

### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `animations` | [`KernelAnimation`](typings_kernel.KernelAnimation.md)[] |
| `parameterGroups` | [`KernelParameterGroup`](typings_kernel.KernelParameterGroup.md)[] |
| `parameters` | [`KernelParameter`](typings_kernel.KernelParameter.md)[] |

___

## getComponent

▸ **getComponent**(`componentId`): [`KernelComponent`](typings_kernel.KernelComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

[`KernelComponent`](typings_kernel.KernelComponent.md)

___

## getComponentId

▸ **getComponentId**(`componentId`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`string`

___

## getComponentParameters

▸ **getComponentParameters**(`componentId`): [`KernelParameter`](typings_kernel.KernelParameter.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

[`KernelParameter`](typings_kernel.KernelParameter.md)[]

___

## getExternalComponentModuleIds

▸ **getExternalComponentModuleIds**(`objectOrPlanComponentId`): [`ExternalModuleInformation`](typings_kernel.ExternalModuleInformation.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `objectOrPlanComponentId` | `number` |

### Returns

[`ExternalModuleInformation`](typings_kernel.ExternalModuleInformation.md)

___

## getExternalObjectDocking

▸ **getExternalObjectDocking**(`childId`, `childDockId`, `parentId`, `parentDockId`): [`KernelExternalObjectDocking`](typings_kernel.KernelExternalObjectDocking.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `childId` | `number` |
| `childDockId` | `number` |
| `parentId` | `number` |
| `parentDockId` | `number` |

### Returns

[`KernelExternalObjectDocking`](typings_kernel.KernelExternalObjectDocking.md)

___

## getFullPartList

▸ **getFullPartList**(): [`KernelPartList`](typings_kernel.KernelPartList.md)

### Returns

[`KernelPartList`](typings_kernel.KernelPartList.md)

___

## getHashOfConfiguration

▸ **getHashOfConfiguration**(`aPlanObjectOrComponentId`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `aPlanObjectOrComponentId` | `number` |

### Returns

`string`

___

## getHashOfSerializedConfiguration

▸ **getHashOfSerializedConfiguration**(`serializedConfiguration`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `serializedConfiguration` | `string` |

### Returns

`string`

___

## getPartList

▸ **getPartList**(`getPartList`): [`KernelPartList`](typings_kernel.KernelPartList.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `getPartList` | `number` |

### Returns

[`KernelPartList`](typings_kernel.KernelPartList.md)

___

## getPlanComponentAnimations

▸ **getPlanComponentAnimations**(`planComponentId`): [`KernelAnimation`](typings_kernel.KernelAnimation.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `planComponentId` | `number` |

### Returns

[`KernelAnimation`](typings_kernel.KernelAnimation.md)[]

___

## getPlanComponentPossibleChildren

▸ **getPlanComponentPossibleChildren**(`componentId`): [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

[`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

___

## getPlanObject

▸ **getPlanObject**(`planObjectId`): [`PlanObject`](typings_kernel.PlanObject.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

[`PlanObject`](typings_kernel.PlanObject.md)

___

## getPlanObjectAnimations

▸ **getPlanObjectAnimations**(`planObjectId`): [`KernelAnimation`](typings_kernel.KernelAnimation.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

[`KernelAnimation`](typings_kernel.KernelAnimation.md)[]

___

## getPlanObjectChildren

▸ **getPlanObjectChildren**(`planObjectId`, `onlyPossible`, `onlyVisible`): [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |
| `onlyPossible` | `boolean` |
| `onlyVisible` | `boolean` |

### Returns

[`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

___

## getPlanObjectFromPlanComponent

▸ **getPlanObjectFromPlanComponent**(`componentId`): [`PlanObject`](typings_kernel.PlanObject.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

[`PlanObject`](typings_kernel.PlanObject.md)

___

## getPlanObjectParameters

▸ **getPlanObjectParameters**(`planObjectId`): [`KernelParameter`](typings_kernel.KernelParameter.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

[`KernelParameter`](typings_kernel.KernelParameter.md)[]

___

## getPlanObjectPossibleChildren

▸ **getPlanObjectPossibleChildren**(`componentId`): [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

[`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[]

___

## getRootPlanComponentIdFromObjectId

▸ **getRootPlanComponentIdFromObjectId**(`planObjectId`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

`number`

___

## getSerializedConfiguration

▸ **getSerializedConfiguration**(`planObjectOrComponentId`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectOrComponentId` | `number` |

### Returns

`string`

___

## isExternalPlanObject

▸ **isExternalPlanObject**(`objectOrPlanComponentId`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `objectOrPlanComponentId` | `number` |

### Returns

`boolean`

___

## loadComponentDefinition

▸ **loadComponentDefinition**(`conversationId`, `component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `component` | `string` |

### Returns

`void`

___

## loadConfiguration

▸ **loadConfiguration**(`kernelConversationId`, `configurationObject`, `position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `kernelConversationId` | `number` |
| `configurationObject` | `string` |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## loadExternalAttributeDefinition

▸ **loadExternalAttributeDefinition**(`serializedDefinition`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `serializedDefinition` | `string` |

### Returns

`void`

___

## loadFreeFlyingConfiguration

▸ **loadFreeFlyingConfiguration**(`conversationId`, `configuration`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `configuration` | `string` |

### Returns

`void`

___

## loadPlainComponent

▸ **loadPlainComponent**(`conversationId`, `componentId`, `configuration`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `componentId` | `string` |
| `configuration` | `string` |

### Returns

`void`

___

## registerDebugClient

▸ **registerDebugClient**(`debugClient`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `debugClient` | [`DebugClient`](typings_kernel.DebugClient.md) |

### Returns

`void`

___

## requestDeltaPlanComponentConstruction

▸ **requestDeltaPlanComponentConstruction**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## requestPlanComponentConstruction

▸ **requestPlanComponentConstruction**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## requestPlanComponentConstructionRecursive

▸ **requestPlanComponentConstructionRecursive**(`componentId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |

### Returns

`void`

___

## requestPlanObjectConstruction

▸ **requestPlanObjectConstruction**(`planObjectId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |

### Returns

`void`

___

## requestPreviewGeometry

▸ **requestPreviewGeometry**(`componentId`, `planObjectId`, `allowInsertInBetween`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `planObjectId` | `number` |
| `allowInsertInBetween` | `boolean` |

### Returns

`void`

___

## requestPreviewGeometryForExternalObject

▸ **requestPreviewGeometryForExternalObject**(`componentId`, `planObjectId`, `allowInsertInBetween`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `string` |
| `planObjectId` | `number` |
| `allowInsertInBetween` | `boolean` |

### Returns

`void`

___

## resetPriceListIds

▸ **resetPriceListIds**(): `void`

### Returns

`void`

___

## setActiveGroupInView

▸ **setActiveGroupInView**(`groupId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` |

### Returns

`void`

___

## setActiveGroupInViewForPlanObject

▸ **setActiveGroupInViewForPlanObject**(`groupId`, `runtimeId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` |
| `runtimeId` | `number` |

### Returns

`void`

___

## setAssetInvalid

▸ **setAssetInvalid**(`assetType`, `idOrUrl`, `quality`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `assetType` | [`AssetType`](typings_kernel.AssetType.md) |
| `idOrUrl` | `string` |
| `quality` | `number` |

### Returns

`void`

___

## setComponentParameter

▸ **setComponentParameter**(`componentId`, `parameterKey`, `value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentId` | `number` |
| `parameterKey` | `string` |
| `value` | `string` |

### Returns

`void`

___

## setDockInsertPreviewBoxParameters

▸ **setDockInsertPreviewBoxParameters**(`thickness`, `protruding`, `intruding`, `bevelSize`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `thickness` | `number` |
| `protruding` | `number` |
| `intruding` | `number` |
| `bevelSize` | `number` |

### Returns

`void`

___

## setEnvironmentVariable

▸ **setEnvironmentVariable**(`key`, `value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

### Returns

`void`

___

## setExternalObjectConstructionProperties

▸ **setExternalObjectConstructionProperties**(`serializedProperties`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `serializedProperties` | `string` |

### Returns

`void`

___

## setLevel

▸ **setLevel**(`restrictionLevel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `restrictionLevel` | `number` |

### Returns

`void`

___

## setPlanComponentParameters

▸ **setPlanComponentParameters**(`componentIds`, `parameterKey`, `value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `componentIds` | `any` |
| `parameterKey` | `string` |
| `value` | `string` |

### Returns

`void`

___

## setPlanObjectParameter

▸ **setPlanObjectParameter**(`planObjectId`, `parameterKey`, `value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectId` | `number` |
| `parameterKey` | `string` |
| `value` | `string` |

### Returns

`void`

___

## setUpdateCallbacksOnlyIfGeometryIsReady

▸ **setUpdateCallbacksOnlyIfGeometryIsReady**(`onlyUpdateIfReady`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `onlyUpdateIfReady` | `boolean` |

### Returns

`void`

▸ **setUpdateCallbacksOnlyIfGeometryIsReady**(`updateCallbacksOnlyIfGeometryIsReady`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `updateCallbacksOnlyIfGeometryIsReady` | `boolean` |

### Returns

`void`

___

## syncPlanObjectToView

▸ **syncPlanObjectToView**(`conversationId`, `planObjectId`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `planObjectId` | `number` |

### Returns

`void`

___

## useEnvironmentGeometry

▸ **useEnvironmentGeometry**(`requestEnvironmentGeometry`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `requestEnvironmentGeometry` | `boolean` |

### Returns

`void`

___

## useHDGeometry

▸ **useHDGeometry**(`requestUseHDGeometry`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `requestUseHDGeometry` | `boolean` |

### Returns

`void`
