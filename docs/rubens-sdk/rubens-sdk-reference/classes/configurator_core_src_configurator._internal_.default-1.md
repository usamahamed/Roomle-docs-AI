[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default-1.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.default-1.md#_creator_)

## Methods

- [changeUseOfHDGeometry](configurator_core_src_configurator._internal_.default-1.md#changeuseofhdgeometry)
- [cleanUp](configurator_core_src_configurator._internal_.default-1.md#cleanup)
- [combineMaterialsToGroups](configurator_core_src_configurator._internal_.default-1.md#combinematerialstogroups)
- [createNewPlan](configurator_core_src_configurator._internal_.default-1.md#createnewplan)
- [export3D](configurator_core_src_configurator._internal_.default-1.md#export3d)
- [getAdditionalContentsOfItems](configurator_core_src_configurator._internal_.default-1.md#getadditionalcontentsofitems)
- [getCatalog](configurator_core_src_configurator._internal_.default-1.md#getcatalog)
- [getComponent](configurator_core_src_configurator._internal_.default-1.md#getcomponent)
- [getComponents](configurator_core_src_configurator._internal_.default-1.md#getcomponents)
- [getComponentsOf](configurator_core_src_configurator._internal_.default-1.md#getcomponentsof)
- [getConfiguration](configurator_core_src_configurator._internal_.default-1.md#getconfiguration)
- [getConfigurations](configurator_core_src_configurator._internal_.default-1.md#getconfigurations)
- [getConfiguratorSettings](configurator_core_src_configurator._internal_.default-1.md#getconfiguratorsettings)
- [getCurrentSkin](configurator_core_src_configurator._internal_.default-1.md#getcurrentskin)
- [getHSCPackage](configurator_core_src_configurator._internal_.default-1.md#gethscpackage)
- [getItem](configurator_core_src_configurator._internal_.default-1.md#getitem)
- [getItems](configurator_core_src_configurator._internal_.default-1.md#getitems)
- [getItemsOf](configurator_core_src_configurator._internal_.default-1.md#getitemsof)
- [getMaterial](configurator_core_src_configurator._internal_.default-1.md#getmaterial)
- [getMaterials](configurator_core_src_configurator._internal_.default-1.md#getmaterials)
- [getMaterialsByGroup](configurator_core_src_configurator._internal_.default-1.md#getmaterialsbygroup)
- [getMaterialsOf](configurator_core_src_configurator._internal_.default-1.md#getmaterialsof)
- [getMesh](configurator_core_src_configurator._internal_.default-1.md#getmesh)
- [getMeshesOfCatalog](configurator_core_src_configurator._internal_.default-1.md#getmeshesofcatalog)
- [getPlan](configurator_core_src_configurator._internal_.default-1.md#getplan)
- [getPlanSnapshot](configurator_core_src_configurator._internal_.default-1.md#getplansnapshot)
- [getPreloadForConfiguration](configurator_core_src_configurator._internal_.default-1.md#getpreloadforconfiguration)
- [getPreloadForItem](configurator_core_src_configurator._internal_.default-1.md#getpreloadforitem)
- [getPrices](configurator_core_src_configurator._internal_.default-1.md#getprices)
- [getShortUrl](configurator_core_src_configurator._internal_.default-1.md#getshorturl)
- [getTag](configurator_core_src_configurator._internal_.default-1.md#gettag)
- [getTags](configurator_core_src_configurator._internal_.default-1.md#gettags)
- [getTenant](configurator_core_src_configurator._internal_.default-1.md#gettenant)
- [getTexture](configurator_core_src_configurator._internal_.default-1.md#gettexture)
- [getTexturesOf](configurator_core_src_configurator._internal_.default-1.md#gettexturesof)
- [peekComponent](configurator_core_src_configurator._internal_.default-1.md#peekcomponent)
- [peekConfiguration](configurator_core_src_configurator._internal_.default-1.md#peekconfiguration)
- [peekItem](configurator_core_src_configurator._internal_.default-1.md#peekitem)
- [peekMaterial](configurator_core_src_configurator._internal_.default-1.md#peekmaterial)
- [removeCurrentToken](configurator_core_src_configurator._internal_.default-1.md#removecurrenttoken)
- [resolveShortUrl](configurator_core_src_configurator._internal_.default-1.md#resolveshorturl)
- [saveConfiguration](configurator_core_src_configurator._internal_.default-1.md#saveconfiguration)
- [saveConfigurationImage](configurator_core_src_configurator._internal_.default-1.md#saveconfigurationimage)
- [savePlan](configurator_core_src_configurator._internal_.default-1.md#saveplan)
- [savePlanSnapshot](configurator_core_src_configurator._internal_.default-1.md#saveplansnapshot)
- [savePlanSnapshotImage](configurator_core_src_configurator._internal_.default-1.md#saveplansnapshotimage)
- [sendUserAction](configurator_core_src_configurator._internal_.default-1.md#senduseraction)
- [setCurrentToken](configurator_core_src_configurator._internal_.default-1.md#setcurrenttoken)
- [shareConfiguration](configurator_core_src_configurator._internal_.default-1.md#shareconfiguration)
- [sharePlanSnapshot](configurator_core_src_configurator._internal_.default-1.md#shareplansnapshot)
- [signinUser](configurator_core_src_configurator._internal_.default-1.md#signinuser)
- [signoutUser](configurator_core_src_configurator._internal_.default-1.md#signoutuser)
- [trackView](configurator_core_src_configurator._internal_.default-1.md#trackview)
- [updateCache](configurator_core_src_configurator._internal_.default-1.md#updatecache)
- [clearCaches](configurator_core_src_configurator._internal_.default-1.md#clearcaches)

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

# Methods

## changeUseOfHDGeometry

▸ **changeUseOfHDGeometry**(): `void`

### Returns

`void`

___

## cleanUp

▸ **cleanUp**(): `void`

### Returns

`void`

___

## combineMaterialsToGroups

▸ **combineMaterialsToGroups**(`materials`): `Promise`<[`RapiMaterialGroup`](../interfaces/typings_rapi_types.RapiMaterialGroup.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `materials` | [`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)[] |

### Returns

`Promise`<[`RapiMaterialGroup`](../interfaces/typings_rapi_types.RapiMaterialGroup.md)[]\>

___

## createNewPlan

▸ **createNewPlan**(): [`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)

### Returns

[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)

___

## export3D

▸ **export3D**(`id`, `email`, `fileFormat`, `options?`): `Promise`<`unknown`\>

Export a configuration id into a given file format and send it via email

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `email` | `string` |  |
| `fileFormat` | `string` | check API documentation for valid formats |
| `options` | `object` | - |

### Returns

`Promise`<`unknown`\>

___

## getAdditionalContentsOfItems

▸ **getAdditionalContentsOfItems**(`rapiItems`): `Promise`<[`RapiAdditionalContent`](../interfaces/typings_rapi_types.RapiAdditionalContent.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiItems` | [`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[] |

### Returns

`Promise`<[`RapiAdditionalContent`](../interfaces/typings_rapi_types.RapiAdditionalContent.md)[]\>

___

## getCatalog

▸ **getCatalog**(`id`): `Promise`<[`RapiCatalog`](../interfaces/typings_rapi_types.RapiCatalog.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiCatalog`](../interfaces/typings_rapi_types.RapiCatalog.md)\>

___

## getComponent

▸ **getComponent**(`id`): `Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)\>

___

## getComponents

▸ **getComponents**(`ids`): `Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)[]\>

___

## getComponentsOf

▸ **getComponentsOf**(`rapiJson`): `Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiJson` | [`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md) |

### Returns

`Promise`<[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)[]\>

___

## getConfiguration

▸ **getConfiguration**(`id`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

___

## getConfigurations

▸ **getConfigurations**(`ids`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)[]\>

___

## getConfiguratorSettings

▸ **getConfiguratorSettings**(`id`): `Promise`<[`RapiConfiguratorSettings`](../interfaces/typings_rapi_types.RapiConfiguratorSettings.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiConfiguratorSettings`](../interfaces/typings_rapi_types.RapiConfiguratorSettings.md)\>

___

## getCurrentSkin

▸ **getCurrentSkin**(): `Promise`<[`RapiSkin`](../interfaces/typings_rapi_types.RapiSkin.md)\>

### Returns

`Promise`<[`RapiSkin`](../interfaces/typings_rapi_types.RapiSkin.md)\>

___

## getHSCPackage

▸ **getHSCPackage**(`id`): `Promise`<`void` \| [`RapiPackage`](../interfaces/typings_rapi_types.RapiPackage.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<`void` \| [`RapiPackage`](../interfaces/typings_rapi_types.RapiPackage.md)\>

___

## getItem

▸ **getItem**(`id`): `Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)\>

___

## getItems

▸ **getItems**(`ids`): `Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[]\>

___

## getItemsOf

▸ **getItemsOf**(`rapiJson`): `Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiJson` | [`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md) |

### Returns

`Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[]\>

___

## getMaterial

▸ **getMaterial**(`id`): `Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)\>

___

## getMaterials

▸ **getMaterials**(`ids`): `Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)[]\>

___

## getMaterialsByGroup

▸ **getMaterialsByGroup**(`groupIdsToCheck`): `Promise`<[`RapiMaterialGroup`](../interfaces/typings_rapi_types.RapiMaterialGroup.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `groupIdsToCheck` | `string`[] |

### Returns

`Promise`<[`RapiMaterialGroup`](../interfaces/typings_rapi_types.RapiMaterialGroup.md)[]\>

___

## getMaterialsOf

▸ **getMaterialsOf**(`rapiJson`): `Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiJson` | [`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md) |

### Returns

`Promise`<[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)[]\>

___

## getMesh

▸ **getMesh**(`id`, `format?`, `quality?`): `Promise`<[`RapiMeshData`](../interfaces/typings_rapi_types.RapiMeshData.md)\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `format` | `string` | `MESH_DEFAULT_FORMAT` |
| `quality` | `number` | `MESH_DEFAULT_QUALITY` |

### Returns

`Promise`<[`RapiMeshData`](../interfaces/typings_rapi_types.RapiMeshData.md)\>

___

## getMeshesOfCatalog

▸ **getMeshesOfCatalog**(`catalogId`): `Promise`<[`RapiMesh`](../interfaces/typings_rapi_types.RapiMesh.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`Promise`<[`RapiMesh`](../interfaces/typings_rapi_types.RapiMesh.md)[]\>

___

## getPlan

▸ **getPlan**(`id`): `Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)\>

___

## getPlanSnapshot

▸ **getPlanSnapshot**(`id`): `Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | \`ps\_${string}\` |

### Returns

`Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

___

## getPreloadForConfiguration

▸ **getPreloadForConfiguration**(`id`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<`void`\>

___

## getPreloadForItem

▸ **getPreloadForItem**(`id`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<`void`\>

___

## getPrices

▸ **getPrices**(`pricesIds`): `Promise`<[`RapiPrice`](../interfaces/typings_rapi_types.RapiPrice.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `pricesIds` | `string`[] |

### Returns

`Promise`<[`RapiPrice`](../interfaces/typings_rapi_types.RapiPrice.md)[]\>

___

## getShortUrl

▸ **getShortUrl**(`referencedId`, `type`): `Promise`<[`RapiShortId`](../interfaces/typings_rapi_types.RapiShortId.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `referencedId` | `string` |
| `type` | [`SHORT_TYPES`](../enums/configurator_core_src_configurator._internal_.SHORT_TYPES.md) |

### Returns

`Promise`<[`RapiShortId`](../interfaces/typings_rapi_types.RapiShortId.md)\>

___

## getTag

▸ **getTag**(`id`): `Promise`<[`RapiTag`](../interfaces/typings_rapi_types.RapiTag.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiTag`](../interfaces/typings_rapi_types.RapiTag.md)\>

___

## getTags

▸ **getTags**(`ids`): `Promise`<[`RapiTag`](../interfaces/typings_rapi_types.RapiTag.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

### Returns

`Promise`<[`RapiTag`](../interfaces/typings_rapi_types.RapiTag.md)[]\>

___

## getTenant

▸ **getTenant**(`tenantId?`): `Promise`<[`RapiTenant`](../interfaces/typings_rapi_types.RapiTenant.md)\>

Returns info about the tenant with the provided ID. If the ID is not set it tries to use the current tenant.

### Parameters

| Name | Type |
| :------ | :------ |
| `tenantId?` | `number` |

### Returns

`Promise`<[`RapiTenant`](../interfaces/typings_rapi_types.RapiTenant.md)\>

___

## getTexture

▸ **getTexture**(`id`): `Promise`<[`RapiTexture`](../interfaces/typings_rapi_types.RapiTexture.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiTexture`](../interfaces/typings_rapi_types.RapiTexture.md)\>

___

## getTexturesOf

▸ **getTexturesOf**(`rapiJson`): `Promise`<[`RapiTexture`](../interfaces/typings_rapi_types.RapiTexture.md)[]\>

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiJson` | [`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md) |

### Returns

`Promise`<[`RapiTexture`](../interfaces/typings_rapi_types.RapiTexture.md)[]\>

___

## peekComponent

▸ **peekComponent**(`id`): [`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

[`RapiComponent`](../interfaces/typings_rapi_types.RapiComponent.md)

___

## peekConfiguration

▸ **peekConfiguration**(`id`): [`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)

___

## peekItem

▸ **peekItem**(`id`): [`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)

___

## peekMaterial

▸ **peekMaterial**(`id`): [`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

[`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md)

___

## removeCurrentToken

▸ **removeCurrentToken**(): `void`

### Returns

`void`

___

## resolveShortUrl

▸ **resolveShortUrl**(`id`): `Promise`<[`RapiShortId`](../interfaces/typings_rapi_types.RapiShortId.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiShortId`](../interfaces/typings_rapi_types.RapiShortId.md)\>

___

## saveConfiguration

▸ **saveConfiguration**(`configuration`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md) |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

___

## saveConfigurationImage

▸ **saveConfigurationImage**(`configuration`, `image1`, `type1`, `image2`, `type2`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md) |
| `image1` | [`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md) |
| `type1` | [`ImageKeysOnObject`](../modules/configurator_core_src_configurator._internal_.md#imagekeysonobject) |
| `image2` | [`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md) |
| `type2` | [`ImageKeysOnObject`](../modules/configurator_core_src_configurator._internal_.md#imagekeysonobject) |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

___

## savePlan

▸ **savePlan**(`plan`): `Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `plan` | [`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md) |

### Returns

`Promise`<[`RapiPlan`](../interfaces/typings_rapi_types.RapiPlan.md)\>

___

## savePlanSnapshot

▸ **savePlanSnapshot**(`planSnapshot`): `Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `planSnapshot` | [`RapiPlanSnapshotPostData`](../interfaces/typings_rapi_types.RapiPlanSnapshotPostData.md) |

### Returns

`Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

___

## savePlanSnapshotImage

▸ **savePlanSnapshotImage**(`planSnapshot`, `image1`, `type1`, `image2`, `type2`): `Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `planSnapshot` | [`RapiPlanSnapshotPostData`](../interfaces/typings_rapi_types.RapiPlanSnapshotPostData.md) |
| `image1` | [`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md) |
| `type1` | [`ImageKeysOnObject`](../modules/configurator_core_src_configurator._internal_.md#imagekeysonobject) |
| `image2` | [`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md) |
| `type2` | [`ImageKeysOnObject`](../modules/configurator_core_src_configurator._internal_.md#imagekeysonobject) |

### Returns

`Promise`<[`RapiPlanSnapshotGetData`](../interfaces/typings_rapi_types.RapiPlanSnapshotGetData.md)\>

___

## sendUserAction

▸ **sendUserAction**(`userAction`): `Promise`<[`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `userAction` | [`UserAction`](../interfaces/typings_rapi_types.UserAction.md) |

### Returns

`Promise`<[`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md)\>

___

## setCurrentToken

▸ **setCurrentToken**(`token`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

### Returns

`void`

___

## shareConfiguration

▸ **shareConfiguration**(`id`, `email`, `type`, `urlParams?`): `Promise`<`unknown`\>

Export a configuration or plansnapshot id into a given file format and send it via email
Shares a configuration id using email

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `email` | `string` |  |
| `type` | [`MAIL_TYPE`](../enums/typings_rapi_types.MAIL_TYPE.md) | the email template to use |
| `urlParams?` | `Record`<`string`, `string`\> | URL parameters to include in the request (key-value pairs) of the current configuration settings. |

### Returns

`Promise`<`unknown`\>

___

## sharePlanSnapshot

▸ **sharePlanSnapshot**(`id`, `email`, `type`, `urlParams?`): `Promise`<`unknown`\>

Shares a sharePlanSnapshot id using email

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `email` | `string` |  |
| `type` | [`MAIL_TYPE`](../enums/typings_rapi_types.MAIL_TYPE.md) | the email template to use |
| `urlParams?` | `Record`<`string`, `string`\> | URL parameters to include in the request (key-value pairs) of the current planner settings. |

### Returns

`Promise`<`unknown`\>

___

## signinUser

▸ **signinUser**(`email`, `password`): `Promise`<[`RapiAuth`](../interfaces/typings_rapi_types.RapiAuth.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |

### Returns

`Promise`<[`RapiAuth`](../interfaces/typings_rapi_types.RapiAuth.md)\>

___

## signoutUser

▸ **signoutUser**(`token`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

### Returns

`Promise`<`void`\>

___

## trackView

▸ **trackView**(`id`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<`void`\>

___

## updateCache

▸ **updateCache**(`rapiPath`, `data`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiPath` | [`RAPI_PATHS`](../enums/configurator_core_src_configurator._internal_.RAPI_PATHS.md) |
| `data` | [`RapiJson`](../interfaces/typings_rapi_types.RapiJson.md) & { `id`: `string`  } |

### Returns

`void`

___

## clearCaches

▸ `Static` **clearCaches**(): `void`

### Returns

`void`
