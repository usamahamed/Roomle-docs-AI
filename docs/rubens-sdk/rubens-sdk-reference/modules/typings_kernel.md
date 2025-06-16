# Table of contents

## Modules

- [internal](typings_kernel._internal_.md)

## Enumerations

- [DIMENSIONING\_TYPE](../enums/typings_kernel.DIMENSIONING_TYPE.md)
- [ExportType](../enums/typings_kernel.ExportType.md)

## Interfaces

- [AddOnSpot](../interfaces/typings_kernel.AddOnSpot.md)
- [AssetRequest](../interfaces/typings_kernel.AssetRequest.md)
- [AssetResponse](../interfaces/typings_kernel.AssetResponse.md)
- [AssetType](../interfaces/typings_kernel.AssetType.md)
- [ConfigurationExporter](../interfaces/typings_kernel.ConfigurationExporter.md)
- [ConfigurationObject](../interfaces/typings_kernel.ConfigurationObject.md)
- [ConfiguratorKernelClass](../interfaces/typings_kernel.ConfiguratorKernelClass.md)
- [DebugClient](../interfaces/typings_kernel.DebugClient.md)
- [DebugValueMapChange](../interfaces/typings_kernel.DebugValueMapChange.md)
- [DebugValueMapDump](../interfaces/typings_kernel.DebugValueMapDump.md)
- [Dimensioning](../interfaces/typings_kernel.Dimensioning.md)
- [DockLine](../interfaces/typings_kernel.DockLine.md)
- [DockPair](../interfaces/typings_kernel.DockPair.md)
- [DockingLineSegment](../interfaces/typings_kernel.DockingLineSegment.md)
- [EmscriptenList](../interfaces/typings_kernel.EmscriptenList.md)
- [EmscriptenMap](../interfaces/typings_kernel.EmscriptenMap.md)
- [ExternalModuleInformation](../interfaces/typings_kernel.ExternalModuleInformation.md)
- [HomagIxArticleData](../interfaces/typings_kernel.HomagIxArticleData.md)
- [KernelActionValue](../interfaces/typings_kernel.KernelActionValue.md)
- [KernelAddOnSpot](../interfaces/typings_kernel.KernelAddOnSpot.md)
- [KernelAnimation](../interfaces/typings_kernel.KernelAnimation.md)
- [KernelAnimationAction](../interfaces/typings_kernel.KernelAnimationAction.md)
- [KernelCatalogItem](../interfaces/typings_kernel.KernelCatalogItem.md)
- [KernelComponent](../interfaces/typings_kernel.KernelComponent.md)
- [KernelConfiguration](../interfaces/typings_kernel.KernelConfiguration.md)
- [KernelConfigurationLoadedData](../interfaces/typings_kernel.KernelConfigurationLoadedData.md)
- [KernelContainer](../interfaces/typings_kernel.KernelContainer.md)
- [KernelCube](../interfaces/typings_kernel.KernelCube.md)
- [KernelDockPairToLine](../interfaces/typings_kernel.KernelDockPairToLine.md)
- [KernelDockPairToPoint](../interfaces/typings_kernel.KernelDockPairToPoint.md)
- [KernelEnum](../interfaces/typings_kernel.KernelEnum.md)
- [KernelExternalObjectDocking](../interfaces/typings_kernel.KernelExternalObjectDocking.md)
- [KernelMeshAttributes](../interfaces/typings_kernel.KernelMeshAttributes.md)
- [KernelMeshBuffer](../interfaces/typings_kernel.KernelMeshBuffer.md)
- [KernelObjectPtrList](../interfaces/typings_kernel.KernelObjectPtrList.md)
- [KernelParamKeyValuePair](../interfaces/typings_kernel.KernelParamKeyValuePair.md)
- [KernelParameter](../interfaces/typings_kernel.KernelParameter.md)
- [KernelParameterGroup](../interfaces/typings_kernel.KernelParameterGroup.md)
- [KernelParameterValue](../interfaces/typings_kernel.KernelParameterValue.md)
- [KernelPart](../interfaces/typings_kernel.KernelPart.md)
- [KernelPartList](../interfaces/typings_kernel.KernelPartList.md)
- [KernelPartListParameter](../interfaces/typings_kernel.KernelPartListParameter.md)
- [KernelPartListPrice](../interfaces/typings_kernel.KernelPartListPrice.md)
- [KernelPlanObject](../interfaces/typings_kernel.KernelPlanObject.md)
- [KernelPlanObjectBase](../interfaces/typings_kernel.KernelPlanObjectBase.md)
- [KernelPlanObjectComponent](../interfaces/typings_kernel.KernelPlanObjectComponent.md)
- [KernelPossibleChild](../interfaces/typings_kernel.KernelPossibleChild.md)
- [KernelRange](../interfaces/typings_kernel.KernelRange.md)
- [KernelValue](../interfaces/typings_kernel.KernelValue.md)
- [KernelVariable](../interfaces/typings_kernel.KernelVariable.md)
- [KernelVariant](../interfaces/typings_kernel.KernelVariant.md)
- [KernelVector2f](../interfaces/typings_kernel.KernelVector2f.md)
- [KernelVector3](../interfaces/typings_kernel.KernelVector3.md)
- [KernelVector3f](../interfaces/typings_kernel.KernelVector3f.md)
- [ObjectConfigurationType](../interfaces/typings_kernel.ObjectConfigurationType.md)
- [ObjectGroupPtr](../interfaces/typings_kernel.ObjectGroupPtr.md)
- [ParamterKeyValue](../interfaces/typings_kernel.ParamterKeyValue.md)
- [PlanObject](../interfaces/typings_kernel.PlanObject.md)
- [UiKernelParameter](../interfaces/typings_kernel.UiKernelParameter.md)
- [UiKernelRange](../interfaces/typings_kernel.UiKernelRange.md)
- [UiPlanObject](../interfaces/typings_kernel.UiPlanObject.md)
- [UiPossibleChild](../interfaces/typings_kernel.UiPossibleChild.md)
- [UiPossibleChildTag](../interfaces/typings_kernel.UiPossibleChildTag.md)
- [VariantsList](../interfaces/typings_kernel.VariantsList.md)
- [WasmDbEntry](../interfaces/typings_kernel.WasmDbEntry.md)

## Type Aliases

- [EmscriptenString](typings_kernel.md#emscriptenstring)
- [RuntimeId](typings_kernel.md#runtimeid)

## Variables

- [CONFIGURATION\_TYPE](typings_kernel.md#configuration_type)
- [CORE\_ASSET\_TYPE](typings_kernel.md#core_asset_type)

# Type Aliases

## EmscriptenString

Ƭ **EmscriptenString**: `any`

___

## RuntimeId

Ƭ **RuntimeId**: `number`

# Variables

## CONFIGURATION\_TYPE

• `Const` **CONFIGURATION\_TYPE**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `CORE` | ``1`` |
| `EXTERNAL` | ``2`` |
| `STATIC` | ``0`` |

___

## CORE\_ASSET\_TYPE

• `Const` **CORE\_ASSET\_TYPE**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `COMPONENT` | ``1`` |
| `EXTERNAL_MESH` | ``2`` |
| `EXTERNAL_OBJ_URL` | ``5`` |
| `EXTERNAL_SVG_URL` | ``6`` |
| `ITEM` | ``0`` |
| `MATERIAL_GROUP` | ``4`` |
| `MATERIAL_PROPERTIES` | ``3`` |
