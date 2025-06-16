[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).default

Shared API between configurator and planner

# Implements

- [`GlobalAPI`](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md)
- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`KernelUtilityForUi`](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md)
- [`ConfiguratorKernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md)
- [`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<[`default`](configurator_core_src_services_configurator_ui_callback.default.md)\>
- [`RubensAPI`](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator.default.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator.default.md#_creator_)

## Accessors

- [callbacks](configurator_core_src_roomle_configurator.default.md#callbacks)

## Methods

- [calcPartsPriceSum](configurator_core_src_roomle_configurator.default.md#calcpartspricesum)
- [cancelDockings](configurator_core_src_roomle_configurator.default.md#canceldockings)
- [cancelSelection](configurator_core_src_roomle_configurator.default.md#cancelselection)
- [changeFloorMaterial](configurator_core_src_roomle_configurator.default.md#changefloormaterial)
- [changeFloorMaterialById](configurator_core_src_roomle_configurator.default.md#changefloormaterialbyid)
- [changeOffset](configurator_core_src_roomle_configurator.default.md#changeoffset)
- [cleanup](configurator_core_src_roomle_configurator.default.md#cleanup)
- [clearHistory](configurator_core_src_roomle_configurator.default.md#clearhistory)
- [disableHDGeometry](configurator_core_src_roomle_configurator.default.md#disablehdgeometry)
- [disableMultiselect](configurator_core_src_roomle_configurator.default.md#disablemultiselect)
- [enableHDGeometry](configurator_core_src_roomle_configurator.default.md#enablehdgeometry)
- [enableMeshSelection](configurator_core_src_roomle_configurator.default.md#enablemeshselection)
- [enableMultiselect](configurator_core_src_roomle_configurator.default.md#enablemultiselect)
- [exportCanvasScreenshot](configurator_core_src_roomle_configurator.default.md#exportcanvasscreenshot)
- [exportImageFromCamera](configurator_core_src_roomle_configurator.default.md#exportimagefromcamera)
- [formatValueToUnitString](configurator_core_src_roomle_configurator.default.md#formatvaluetounitstring)
- [generateExport](configurator_core_src_roomle_configurator.default.md#generateexport)
- [generateIMOSiXExport](configurator_core_src_roomle_configurator.default.md#generateimosixexport)
- [generateImagesOfCurrentConfiguration](configurator_core_src_roomle_configurator.default.md#generateimagesofcurrentconfiguration)
- [generateProductionServiceExport](configurator_core_src_roomle_configurator.default.md#generateproductionserviceexport)
- [generateTCExport](configurator_core_src_roomle_configurator.default.md#generatetcexport)
- [getAdditionalContentsOf](configurator_core_src_roomle_configurator.default.md#getadditionalcontentsof)
- [getCameraOffset](configurator_core_src_roomle_configurator.default.md#getcameraoffset)
- [getChildrenOfPlanComponent](configurator_core_src_roomle_configurator.default.md#getchildrenofplancomponent)
- [getChildrenOfPlanObject](configurator_core_src_roomle_configurator.default.md#getchildrenofplanobject)
- [getComponent](configurator_core_src_roomle_configurator.default.md#getcomponent)
- [getConfiguratorContext](configurator_core_src_roomle_configurator.default.md#getconfiguratorcontext)
- [getConfiguratorSettings](configurator_core_src_roomle_configurator.default.md#getconfiguratorsettings)
- [getCurrentConfiguration](configurator_core_src_roomle_configurator.default.md#getcurrentconfiguration)
- [getCurrentConfigurationHash](configurator_core_src_roomle_configurator.default.md#getcurrentconfigurationhash)
- [getCurrentSelection](configurator_core_src_roomle_configurator.default.md#getcurrentselection)
- [getHashOfSerializedConfiguration](configurator_core_src_roomle_configurator.default.md#gethashofserializedconfiguration)
- [getParameterGroups](configurator_core_src_roomle_configurator.default.md#getparametergroups)
- [getParametersOfComponent](configurator_core_src_roomle_configurator.default.md#getparametersofcomponent)
- [getParametersOfPlanObject](configurator_core_src_roomle_configurator.default.md#getparametersofplanobject)
- [getParametersOfRootComponent](configurator_core_src_roomle_configurator.default.md#getparametersofrootcomponent)
- [getRuntimeComponentIdOfRootComponent](configurator_core_src_roomle_configurator.default.md#getruntimecomponentidofrootcomponent)
- [getScene](configurator_core_src_roomle_configurator.default.md#getscene)
- [getShortUrlOfCurrentConfiguration](configurator_core_src_roomle_configurator.default.md#getshorturlofcurrentconfiguration)
- [getStorage](configurator_core_src_roomle_configurator.default.md#getstorage)
- [getTagById](configurator_core_src_roomle_configurator.default.md#gettagbyid)
- [getTools](configurator_core_src_roomle_configurator.default.md#gettools)
- [getUnitFormatter](configurator_core_src_roomle_configurator.default.md#getunitformatter)
- [hideDimensions](configurator_core_src_roomle_configurator.default.md#hidedimensions)
- [highlightParts](configurator_core_src_roomle_configurator.default.md#highlightparts)
- [init](configurator_core_src_roomle_configurator.default.md#init)
- [initSceneManager](configurator_core_src_roomle_configurator.default.md#initscenemanager)
- [isReady](configurator_core_src_roomle_configurator.default.md#isready)
- [loadComponentIntoKernel](configurator_core_src_roomle_configurator.default.md#loadcomponentintokernel)
- [loadConfigurableItemById](configurator_core_src_roomle_configurator.default.md#loadconfigurableitembyid)
- [loadConfiguration](configurator_core_src_roomle_configurator.default.md#loadconfiguration)
- [loadConfigurationById](configurator_core_src_roomle_configurator.default.md#loadconfigurationbyid)
- [loadDynamicLightSetting](configurator_core_src_roomle_configurator.default.md#loaddynamiclightsetting)
- [loadError](configurator_core_src_roomle_configurator.default.md#loaderror)
- [loadSceneSetting](configurator_core_src_roomle_configurator.default.md#loadscenesetting)
- [moveCamera](configurator_core_src_roomle_configurator.default.md#movecamera)
- [notifyUiAboutNewLabel](configurator_core_src_roomle_configurator.default.md#notifyuiaboutnewlabel)
- [pauseKernelCallbacks](configurator_core_src_roomle_configurator.default.md#pausekernelcallbacks)
- [preLoadConfigurableItemById](configurator_core_src_roomle_configurator.default.md#preloadconfigurableitembyid)
- [preLoadConfigurationById](configurator_core_src_roomle_configurator.default.md#preloadconfigurationbyid)
- [preparePartImage](configurator_core_src_roomle_configurator.default.md#preparepartimage)
- [preparePerspectiveImage](configurator_core_src_roomle_configurator.default.md#prepareperspectiveimage)
- [prepareTopImage](configurator_core_src_roomle_configurator.default.md#preparetopimage)
- [previewDockings](configurator_core_src_roomle_configurator.default.md#previewdockings)
- [redo](configurator_core_src_roomle_configurator.default.md#redo)
- [removeTypeChangeTag](configurator_core_src_roomle_configurator.default.md#removetypechangetag)
- [renderImage](configurator_core_src_roomle_configurator.default.md#renderimage)
- [requestAsset](configurator_core_src_roomle_configurator.default.md#requestasset)
- [requestDeleteComponent](configurator_core_src_roomle_configurator.default.md#requestdeletecomponent)
- [resetCameraPosition](configurator_core_src_roomle_configurator.default.md#resetcameraposition)
- [resumeKernelCallbacks](configurator_core_src_roomle_configurator.default.md#resumekernelcallbacks)
- [saveCurrentConfiguration](configurator_core_src_roomle_configurator.default.md#savecurrentconfiguration)
- [selectComponent](configurator_core_src_roomle_configurator.default.md#selectcomponent)
- [setActiveGroupInView](configurator_core_src_roomle_configurator.default.md#setactivegroupinview)
- [setActiveGroupInViewForPlanObject](configurator_core_src_roomle_configurator.default.md#setactivegroupinviewforplanobject)
- [setCameraOffset](configurator_core_src_roomle_configurator.default.md#setcameraoffset)
- [setComponentParameter](configurator_core_src_roomle_configurator.default.md#setcomponentparameter)
- [setEnvironmentMap](configurator_core_src_roomle_configurator.default.md#setenvironmentmap)
- [setOverrides](configurator_core_src_roomle_configurator.default.md#setoverrides)
- [setParameter](configurator_core_src_roomle_configurator.default.md#setparameter)
- [setParameterOfPlanObject](configurator_core_src_roomle_configurator.default.md#setparameterofplanobject)
- [setParameterOfRootComponent](configurator_core_src_roomle_configurator.default.md#setparameterofrootcomponent)
- [showDimensions](configurator_core_src_roomle_configurator.default.md#showdimensions)
- [showGUI](configurator_core_src_roomle_configurator.default.md#showgui)
- [showStats](configurator_core_src_roomle_configurator.default.md#showstats)
- [syncCatalog](configurator_core_src_roomle_configurator.default.md#synccatalog)
- [syncFloorTag](configurator_core_src_roomle_configurator.default.md#syncfloortag)
- [syncTypeChangeTag](configurator_core_src_roomle_configurator.default.md#synctypechangetag)
- [undo](configurator_core_src_roomle_configurator.default.md#undo)
- [updateParameters](configurator_core_src_roomle_configurator.default.md#updateparameters)
- [updatePossibleChildren](configurator_core_src_roomle_configurator.default.md#updatepossiblechildren)
- [updateScene](configurator_core_src_roomle_configurator.default.md#updatescene)
- [updateSize](configurator_core_src_roomle_configurator.default.md#updatesize)
- [zoomIn](configurator_core_src_roomle_configurator.default.md#zoomin)
- [zoomOut](configurator_core_src_roomle_configurator.default.md#zoomout)

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

## callbacks

• `get` **callbacks**(): [`default`](configurator_core_src_services_configurator_ui_callback.default.md)

Use this callbacks to hook in your functionality

### Returns

[`default`](configurator_core_src_services_configurator_ui_callback.default.md)

### Implementation of

[ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md).[callbacks](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md#callbacks)

# Methods

## calcPartsPriceSum

▸ **calcPartsPriceSum**(`partList`): `Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

### Parameters

| Name | Type |
| :------ | :------ |
| `partList` | [`KernelPartList`](../interfaces/typings_kernel.KernelPartList.md) |

### Returns

`Promise`<[`KernelPartListPrice`](../interfaces/typings_kernel.KernelPartListPrice.md)\>

___

## cancelDockings

▸ **cancelDockings**(): `void`

Remove/cancel all dockings/ghosts

### Returns

`void`

___

## cancelSelection

▸ **cancelSelection**(): `void`

Cancels the selection of all currently selected components

### Returns

`void`

___

## changeFloorMaterial

▸ **changeFloorMaterial**(`material`): `Promise`<`void`\>

Sets the material of the floor to the given RapiMaterial.
If the current environment is not floor environment it will be changed

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`RapiMaterial`](../interfaces/typings_rapi_types.RapiMaterial.md) |

### Returns

`Promise`<`void`\>

promise that resolves when material has been changed

___

## changeFloorMaterialById

▸ **changeFloorMaterialById**(`materialId`): `Promise`<`void`\>

Sets the material of the floor to the given material id.
If the current environment is not floor environment it will be changed

Example material ids are:
roomle_floor:DresdenEiche
roomle_floor:Ibiza
roomle_floor:Palma
roomle_floor:Elba
roomle_floor:Manacor
roomle_floor:KernEiche
roomle_floor:KieferScandic
roomle_floor:EicheHabsburg
roomle_floor:FuldaKiefer
roomle_floor:Ashton
roomle_floor:EicheLondon

### Parameters

| Name | Type |
| :------ | :------ |
| `materialId` | `string` |

### Returns

`Promise`<`void`\>

promise that resolves when material has been changed

___

## changeOffset

▸ **changeOffset**(`offset`): `void`

Change the camera offset

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

___

## cleanup

▸ **cleanup**(`options?`): `void`

Clears the scene and all components/meshes.
Also unregisters configurator callbacks in kernel.

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CleanupOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.CleanupOptions.md) | CleanupOptions |

### Returns

`void`

___

## clearHistory

▸ **clearHistory**(): `void`

clears current configurator history

### Returns

`void`

___

## disableHDGeometry

▸ **disableHDGeometry**(): `Promise`<`void` \| [`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

Disable the use of HD Geometry

### Returns

`Promise`<`void` \| [`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

___

## disableMultiselect

▸ **disableMultiselect**(): `void`

Disable selection of multiple components. By default only one component can be selected at a time

### Returns

`void`

___

## enableHDGeometry

▸ **enableHDGeometry**(): `Promise`<`void` \| [`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

Enable the use of HD geometry. Also reloads the object with HD geometry enabled

### Returns

`Promise`<`void` \| [`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

___

## enableMeshSelection

▸ **enableMeshSelection**(`enabled`): `void`

By default the outline pass uses the bounding box mesh of each component to highlight the object.
When mesh selection is enabled, the meshes of the object are used directly.
This is the recommended setting for non square/rectangular (shelf) components like sofas.

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

___

## enableMultiselect

▸ **enableMultiselect**(): `void`

Enable the selection of multiple components.
Common parameters shared between those components can then be changed at once

### Returns

`void`

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[enableMultiselect](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#enablemultiselect)

___

## exportCanvasScreenshot

▸ **exportCanvasScreenshot**(`quality?`): `Promise`<`string`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `quality?` | `number` |

### Returns

`Promise`<`string`\>

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[exportCanvasScreenshot](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#exportcanvasscreenshot)

___

## exportImageFromCamera

▸ **exportImageFromCamera**(`filename?`, `shouldWaitForAssets?`): `Promise`<`void`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filename` | `string` | `'image'` |
| `shouldWaitForAssets` | `boolean` | `false` |

### Returns

`Promise`<`void`\>

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[exportImageFromCamera](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#exportimagefromcamera)

___

## formatValueToUnitString

▸ **formatValueToUnitString**(`value`, `parameter`): `string` \| `number`

Returns the formatted value based on the parameter.unitType

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) |

### Returns

`string` \| `number`

___

## generateExport

▸ **generateExport**(`exportType`, `defaultExportDefinition?`): `Promise`<`any`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `exportType` | [`ExportType`](../enums/typings_kernel.ExportType.md) | `undefined` |
| `defaultExportDefinition` | `string` | `''` |

### Returns

`Promise`<`any`\>

___

## generateIMOSiXExport

▸ **generateIMOSiXExport**(`defaultExportDefinition?`): `Promise`<`any`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultExportDefinition` | `string` | `''` |

### Returns

`Promise`<`any`\>

___

## generateImagesOfCurrentConfiguration

▸ **generateImagesOfCurrentConfiguration**(): `Promise`<`object`\>

Generates images of the current configuration

### Returns

`Promise`<`object`\>

Promise containing the `topImage`, `perspectgetAdditionalContentsOfiveImage` and a boolean `isLocally` which indicates if the images were generated while being offline

___

## generateProductionServiceExport

▸ **generateProductionServiceExport**(`defaultExportDefinition?`): `Promise`<`any`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultExportDefinition` | `string` | `''` |

### Returns

`Promise`<`any`\>

___

## generateTCExport

▸ **generateTCExport**(`defaultExportDefinition?`): `Promise`<`any`\>

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultExportDefinition` | `string` | `''` |

### Returns

`Promise`<`any`\>

___

## getAdditionalContentsOf

▸ **getAdditionalContentsOf**(`rapiItems`): `Promise`<[`RapiAdditionalContent`](../interfaces/typings_rapi_types.RapiAdditionalContent.md)[]\>

It is possible to add additional content to a configurable-item in our backend
for example, product images, product videos etc. To fetch them you can use this method

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiItems` | [`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)[] |

### Returns

`Promise`<[`RapiAdditionalContent`](../interfaces/typings_rapi_types.RapiAdditionalContent.md)[]\>

___

## getCameraOffset

▸ **getCameraOffset**(): [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

Gets the available screen space for our item
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Returns

[`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getcameraoffset)

___

## getChildrenOfPlanComponent

▸ **getChildrenOfPlanComponent**(`componentRuntimeId`, `onlyPossible?`, `onlyVisible?`): `Promise`<{ `defaultChild`: [`UiPossibleChild`](../interfaces/typings_kernel.UiPossibleChild.md) ; `tags`: [`UiPossibleChildTag`](../interfaces/typings_kernel.UiPossibleChildTag.md)[]  }\>

Returns all possible children and the default child for a given component

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `componentRuntimeId` | `number` | `undefined` |
| `onlyPossible` | `boolean` | `false` |
| `onlyVisible` | `boolean` | `false` |

### Returns

`Promise`<{ `defaultChild`: [`UiPossibleChild`](../interfaces/typings_kernel.UiPossibleChild.md) ; `tags`: [`UiPossibleChildTag`](../interfaces/typings_kernel.UiPossibleChildTag.md)[]  }\>

___

## getChildrenOfPlanObject

▸ **getChildrenOfPlanObject**(`onlyPossible?`, `onlyVisible?`): `Promise`<{ `defaultChild`: [`UiPossibleChild`](../interfaces/typings_kernel.UiPossibleChild.md) ; `tags`: [`UiPossibleChildTag`](../interfaces/typings_kernel.UiPossibleChildTag.md)[]  }\>

Returns all possible children and the default child for the plan object

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `onlyPossible` | `boolean` | `false` |
| `onlyVisible` | `boolean` | `false` |

### Returns

`Promise`<{ `defaultChild`: [`UiPossibleChild`](../interfaces/typings_kernel.UiPossibleChild.md) ; `tags`: [`UiPossibleChildTag`](../interfaces/typings_kernel.UiPossibleChildTag.md)[]  }\>

___

## getComponent

▸ **getComponent**(`componentRuntimeId`): [`KernelComponent`](../interfaces/typings_kernel.KernelComponent.md)

Returns the KernelComponent object for the given componentRuntimeId

### Parameters

| Name | Type |
| :------ | :------ |
| `componentRuntimeId` | `number` |

### Returns

[`KernelComponent`](../interfaces/typings_kernel.KernelComponent.md)

___

## getConfiguratorContext

▸ **getConfiguratorContext**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-7.md)

returns class containing configurator specific data properties

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-7.md)

___

## getConfiguratorSettings

▸ **getConfiguratorSettings**(`id`): `Promise`<[`RapiConfiguratorSettings`](../interfaces/typings_rapi_types.RapiConfiguratorSettings.md)\>

Get the data which is assigned to the configurator object, especially things like allowed hosts

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`Promise`<[`RapiConfiguratorSettings`](../interfaces/typings_rapi_types.RapiConfiguratorSettings.md)\>

___

## getCurrentConfiguration

▸ **getCurrentConfiguration**(): `Promise`<`string`\>

### Returns

`Promise`<`string`\>

Promise with the current configuration string/hash

___

## getCurrentConfigurationHash

▸ **getCurrentConfigurationHash**(): `Promise`<`string`\>

returns the current configuration hash, this can be used for analytics or other stuff like caching etc

### Returns

`Promise`<`string`\>

string current configuration hash

___

## getCurrentSelection

▸ **getCurrentSelection**(): `string`[]

### Returns

`string`[]

___

## getHashOfSerializedConfiguration

▸ **getHashOfSerializedConfiguration**(`serializedConfiguration`): `string`

Returns the hash of the given serialized configuration

### Parameters

| Name | Type |
| :------ | :------ |
| `serializedConfiguration` | `string` |

### Returns

`string`

___

## getParameterGroups

▸ **getParameterGroups**(): [`KernelParameterGroup`](../interfaces/typings_kernel.KernelParameterGroup.md)[]

Get all parameter groups defined on the component, even if it has no parameters assigned

### Returns

[`KernelParameterGroup`](../interfaces/typings_kernel.KernelParameterGroup.md)[]

___

## getParametersOfComponent

▸ **getParametersOfComponent**(`componentRuntimeId`): [`UiKernelParameter`](../interfaces/typings_kernel.UiKernelParameter.md)[]

Returns parameters of the component including groups

### Parameters

| Name | Type |
| :------ | :------ |
| `componentRuntimeId` | `number` |

### Returns

[`UiKernelParameter`](../interfaces/typings_kernel.UiKernelParameter.md)[]

___

## getParametersOfPlanObject

▸ **getParametersOfPlanObject**(): `Promise`<[`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[]\>

Returns all parameters which correspond to the plan object. This is also exposed for embedding

### Returns

`Promise`<[`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[]\>

___

## getParametersOfRootComponent

▸ **getParametersOfRootComponent**(): `Promise`<[`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[]\>

Returns all parameters which correspond to the root component. This is also exposed for embedding

### Returns

`Promise`<[`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[]\>

___

## getRuntimeComponentIdOfRootComponent

▸ **getRuntimeComponentIdOfRootComponent**(): `number`

Returns the runtime component id of root component of the current plan object

### Returns

`number`

number the number of the runtime id of the root component

### Implementation of

[KernelUtilityForUi](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md).[getRuntimeComponentIdOfRootComponent](../interfaces/configurator_core_src_roomle_configurator._internal_.KernelUtilityForUi.md#getruntimecomponentidofrootcomponent)

___

## getScene

▸ **getScene**(): `Scene`

Returns the three.js scene (https://threejs.org/docs/#api/en/scenes/Scene)
WARNING: This is the actual scene (reference) and not a copy!

### Returns

`Scene`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getscene)

___

## getShortUrlOfCurrentConfiguration

▸ **getShortUrlOfCurrentConfiguration**(): `Promise`<`string`\>

### Returns

`Promise`<`string`\>

Promise containing the short url for the current configuration

___

## getStorage

▸ **getStorage**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

returns manager class to interface with indexedDB storage

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-1.md)

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[getStorage](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#getstorage)

___

## getTagById

▸ **getTagById**(`tagId`, `options?`): `Promise`<[`RapiTagForUi`](../interfaces/typings_rapi_types.RapiTagForUi.md)\>

Get tag for a given tag id

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagId` | `string` |  |
| `options?` | `Object` | `{ include: RAPI_PATHS[] }` |
| `options.include` | [`RAPI_PATHS`](../enums/configurator_core_src_configurator._internal_.RAPI_PATHS.md)[] | - |

### Returns

`Promise`<[`RapiTagForUi`](../interfaces/typings_rapi_types.RapiTagForUi.md)\>

Promise containing the tag including items and materials for that tag

___

## getTools

▸ **getTools**(): `Promise`<[`default`](configurator_core_src_roomle_configurator._internal_.default-11.md)\>

### Returns

`Promise`<[`default`](configurator_core_src_roomle_configurator._internal_.default-11.md)\>

___

## getUnitFormatter

▸ **getUnitFormatter**(): [`default`](configurator_core_src_roomle_configurator._internal_.default.md)

returns unit formatter for formatting input und output values in scene

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default.md)

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[getUnitFormatter](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#getunitformatter)

___

## hideDimensions

▸ **hideDimensions**(): `void`

Hides dimensions when they are shown (see [showDimensions](configurator_core_src_roomle_configurator.default.md#showdimensions)).
Calling hideDimensions does not force dimensions to be always hidden.

See [@roomle/web-sdk/configurator-core/src/services/configurator-ui-callback#ConfiguratorUiCallbacks.onDimensionsVisibilityChange](../modules/configurator_core_src_roomle_configurator.md) to get notified when dimension visibility changes

### Returns

`void`

___

## highlightParts

▸ **highlightParts**(`ids`): `void`

Highlight parts in the scene with the given ids
Use empty array to remove highlights

### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `number`[] |

### Returns

`void`

___

## init

▸ **init**(`element`, `initData?`): `Promise`<`void`\>

This method has to be called before configurator is ready to use

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | which should contain the configurator |
| `initData?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) |  |

### Returns

`Promise`<`void`\>

Promise which is resolved when configurator is initialized

___

## initSceneManager

▸ **initSceneManager**(`sceneManager?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneManager?` | [`default`](configurator_core_src_roomle_configurator._internal_.default-10.md) |

### Returns

`void`

___

## isReady

▸ **isReady**(): `void`

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[isReady](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#isready)

___

## loadComponentIntoKernel

▸ **loadComponentIntoKernel**(`componentString`): `Promise`<`void`\>

Loads the component (defined as string) into the kernel

### Parameters

| Name | Type |
| :------ | :------ |
| `componentString` | `string` |

### Returns

`Promise`<`void`\>

Promise which gets resolved when the component has been loaded

___

## loadConfigurableItemById

▸ **loadConfigurableItemById**(`itemId`, `initData?`): `Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

Loads a configuration based on the item id

### Parameters

| Name | Type |
| :------ | :------ |
| `itemId` | `string` |
| `initData?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) |

### Returns

`Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

___

## loadConfiguration

▸ **loadConfiguration**(`configuration`, `initData?`): `Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

Loads an item based on a configuration string

For example: `{'componentId":"muuto:Muuto-Stacked'}`

### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | `string` |
| `initData?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) |

### Returns

`Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

___

## loadConfigurationById

▸ **loadConfigurationById**(`configurationId`, `initData?`): `Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

Loads an item based on a configuration hash

For example: `koinor:FORMIA_LeftGroup:79FBF0D6C79A2598B5FF943111EA29DC0C6884AA97F4383582B47F69C14DDB2C`

### Parameters

| Name | Type |
| :------ | :------ |
| `configurationId` | `string` |
| `initData?` | [`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) |

### Returns

`Promise`<[`ConfigurationLoadedResponse`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfigurationLoadedResponse.md)\>

___

## loadDynamicLightSetting

▸ **loadDynamicLightSetting**(`source`): `Promise`<`void`\>

Loads a dynamic light settings into the scene. The dynamic light setting source can be an
object (js), json, or an url (url to json). See [@roomle/web-sdk/configurator-core/src/scene-settings-loader#SceneSettings](../modules/configurator_core_src_roomle_configurator.md) how to define it.

Exampe:
```
{
 "lights": [
   {
     "type": "rectarea",
     "name": "main",
     "intensity": 240,
     "color": "#ffffff",
     "position": {
       "x": -0.5,
       "y": 6,
       "z": 3
     },
     "target": {
       "x": 0,
       "y": 0,
       "z": 0
     },
     "castShadow": true,
     "width": 0.8,
     "height": 0.8
   },
   {
     "type": "spot",
     "name": "side",
     "intensity": 0.3,
     "color": "#ffffff",
     "position": {
       "x": 2,
       "y": 3,
       "z": 1.5
     },
     "target": {
       "x": 0,
       "y": 0.1,
       "z": 0
     },
     "castShadow": false,
     "angle": 50,
     "penumbra": 0.5
   },
   {
     "type": "ambient",
     "name": "ambient",
     "intensity": 0.3,
     "color": "#ffffff",
     "position": {
       "x": 0,
       "y": 0,
       "z": 0
     }
   }
 ]
}
```

### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md) |

### Returns

`Promise`<`void`\>

___

## loadError

▸ **loadError**(`error?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[loadError](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#loaderror)

___

## loadSceneSetting

▸ **loadSceneSetting**(`sceneSettings`): `Promise`<`void`\>

Loads a SceneSettings object, currently it can can contain a light setting definition
(see [@roomle/web-sdk/configurator-core/src/roomle-configurator#RoomleConfigurator.loadDynamicLightSetting](../modules/configurator_core_src_roomle_configurator.md)) and an environment definition (see [@roomle/web-sdk/configurator-core/src/environment/dynamic-environment-setting-loader#EnvironmentSetting](../modules/configurator_core_src_roomle_configurator.md)).

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneSettings` | [`SceneSettings`](../interfaces/common_core_src_scene_settings_loader.SceneSettings.md) |

### Returns

`Promise`<`void`\>

___

## moveCamera

▸ **moveCamera**(`cameraParameter`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `cameraParameter` | [`CameraParameter`](../interfaces/configurator_core_src_roomle_configurator._internal_.CameraParameter.md) |

### Returns

`Promise`<`void`\>

___

## notifyUiAboutNewLabel

▸ **notifyUiAboutNewLabel**(`id`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

### Returns

`void`

___

## pauseKernelCallbacks

▸ **pauseKernelCallbacks**(): `void`

### Returns

`void`

___

## preLoadConfigurableItemById

▸ **preLoadConfigurableItemById**(`itemId`): `Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)\>

Downloads and caches the selected item id for faster use

### Parameters

| Name | Type |
| :------ | :------ |
| `itemId` | `string` |

### Returns

`Promise`<[`RapiItem`](../interfaces/typings_rapi_types.RapiItem.md)\>

___

## preLoadConfigurationById

▸ **preLoadConfigurationById**(`configurationId`): `Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

Downloads and caches the selected configuration id for faster use

### Parameters

| Name | Type |
| :------ | :------ |
| `configurationId` | `string` |

### Returns

`Promise`<[`RapiConfiguration`](../interfaces/typings_rapi_types.RapiConfiguration.md)\>

___

## preparePartImage

▸ **preparePartImage**(`partId`, `options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates an image of one part (slightly from the side) and returns it as base 64
WARNING: It's only possible to render one sub part at a time
*

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partId` | `number` | id of the sub part, received from part list * |
| `options?` | `number` \| [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) | size of the rendered image in pixel (default is 256), will render faster when size is smaller |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## preparePerspectiveImage

▸ **preparePerspectiveImage**(`options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates a perspective image (slightly from the side) and returns it as base 64

### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## prepareTopImage

▸ **prepareTopImage**(`options?`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Generates a top image (birds perspective) and returns it as base 64

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`PrepareImageOptions`](../interfaces/configurator_core_src_roomle_configurator._internal_.PrepareImageOptions.md) | should object dimensions be visible |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## previewDockings

▸ **previewDockings**(`possibleChild`, `dragEvent?`, `dragIn?`): `void`

Shows dockings/ghosts for the selected possible child

### Parameters

| Name | Type |
| :------ | :------ |
| `possibleChild` | [`UiPossibleChild`](../interfaces/typings_kernel.UiPossibleChild.md) |
| `dragEvent?` | `DragEvent` |
| `dragIn?` | `boolean` |

### Returns

`void`

___

## redo

▸ **redo**(): `Promise`<`void`\>

Redo last action
calls configuratorHistory.redo where array of last configuration are stored
only possible if undo was called before

### Returns

`Promise`<`void`\>

___

## removeTypeChangeTag

▸ **removeTypeChangeTag**(`rapiId`): `void`

After calling this method the UiCallback removeTypeChangeTag is triggered (see: [@roomle/web-sdk/configurator-core/src/services/configurator-ui-callback#ConfiguratorUiCallbacks.onRemoveTypeChangeTag](../modules/configurator_core_src_roomle_configurator.md))

### Parameters

| Name | Type |
| :------ | :------ |
| `rapiId` | `string` |

### Returns

`void`

___

## renderImage

▸ **renderImage**(`renderOptions`): `Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

Renders the current item in high quality, it also uses the current lightsetting

### Parameters

| Name | Type |
| :------ | :------ |
| `renderOptions` | `Partial`<{ `useCurrentPerspective`: `boolean` = false }\> |

### Returns

`Promise`<[`Base64Image`](../interfaces/common_core_src_common_interfaces.Base64Image.md)\>

___

## requestAsset

▸ **requestAsset**(`url`): `string`

Returns same url when online or caches url when offline

### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

### Returns

`string`

___

## requestDeleteComponent

▸ **requestDeleteComponent**(): `void`

Deletes the currently selected component if possible

### Returns

`void`

___

## resetCameraPosition

▸ **resetCameraPosition**(): `void`

Resets the camera back to the start position

### Returns

`void`

### Implementation of

[RubensAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md).[resetCameraPosition](../interfaces/configurator_core_src_roomle_configurator._internal_.RubensAPI.md#resetcameraposition)

___

## resumeKernelCallbacks

▸ **resumeKernelCallbacks**(): `void`

### Returns

`void`

___

## saveCurrentConfiguration

▸ **saveCurrentConfiguration**(): `Promise`<[`RapiConfigurationEnhanced`](../interfaces/typings_rapi_types.RapiConfigurationEnhanced.md)\>

Saves the current configuration (parameters etc)
and returns a new configuration object including the configuration hash

### Returns

`Promise`<[`RapiConfigurationEnhanced`](../interfaces/typings_rapi_types.RapiConfigurationEnhanced.md)\>

___

## selectComponent

▸ **selectComponent**(`runtimeId`): `Promise`<`void`\>

Select a component by runtime id. You can retrieve this ID from partlist etc
If it's already selected it will be deselected to mimic the behavior of click/touch

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runtimeId` | `number` | number, the runtime id of the component. You can retrieve this ID from partlist etc |

### Returns

`Promise`<`void`\>

___

## setActiveGroupInView

▸ **setActiveGroupInView**(`group`): `void`

Set the name of the parameter group which is selected at the moment

### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `string` |

### Returns

`void`

___

## setActiveGroupInViewForPlanObject

▸ **setActiveGroupInViewForPlanObject**(`group`, `runtimeId?`): `void`

Set the name of the parameter group which is selected at the moment

### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `string` |
| `runtimeId?` | `number` |

### Returns

`void`

___

## setCameraOffset

▸ **setCameraOffset**(`offset`): `void`

Sets the available screen space for our item
Example 1: right 0.9 means 10% padding on the right side
Example 2: bottom 0.2 means 20% padding on the bottom side
default: 'left: 0, top: 1, right: 1, bottom: 0'

### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`CanvasOffset`](../interfaces/common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setCameraOffset](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setcameraoffset)

___

## setComponentParameter

▸ **setComponentParameter**(`runtimeId`, `parameter`, `value`): `Promise`<`void`\>

Sets the parameter of the component by it's runtime id
parameters of the plan object are set

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runtimeId` | `number` | number, the runtime id of the component. You can retrieve this ID from partlist etc |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) | an instance of the kernel parameter we want to set, use 'key: "your-key"' if you do not have a kernel instance and do not need validation of the input |
| `value` | `string` | the value we want to set on the parameter as string |

### Returns

`Promise`<`void`\>

___

## setEnvironmentMap

▸ **setEnvironmentMap**(`params`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.intensity?` | `number` |
| `params.maxLightSources?` | `number` |
| `params.rotation?` | `number` |
| `params.url?` | `string` |

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[setEnvironmentMap](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#setenvironmentmap)

___

## setOverrides

▸ **setOverrides**(`initData`): `void`

Set general configuration parameter

### Parameters

| Name | Type |
| :------ | :------ |
| `initData` | [`default`](configurator_core_src_configurator._internal_.default-9.md) \| `Partial`<[`InitDataDefinition`](../interfaces/common_core_src_utils_shims.InitDataDefinition.md) & [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md)\> |

### Returns

`void`

___

## setParameter

▸ **setParameter**(`parameter`, `value`, `isRaw?`): `Promise`<`void`\>

Sets the parameter of the selected component. If nothing is selected the parameters of the
parameters of the plan object are set

### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) | `undefined` | an instance of the kernel parameter we want to set, use 'key: "your-key"' if you do not have a kernel instance and do not need validation of the input |
| `value` | `string` | `undefined` | the value we want to set on the parameter as string |
| `isRaw` | `boolean` | `false` | turn this to true if you dont want the kernel to parse the value string, e.g. convert 100cm to 1000 |

### Returns

`Promise`<`void`\>

___

## setParameterOfPlanObject

▸ **setParameterOfPlanObject**(`parameter`, `value`): `Promise`<`void`\>

Method to set a parameter on the plan object. This is used by embedding as well

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) | an instance of the kernel parameter we want to set, use 'key: "your-key"' if you do not have a kernel instance and do not need validation of the input |
| `value` | `string` | the value we want to set on the parameter as string |

### Returns

`Promise`<`void`\>

___

## setParameterOfRootComponent

▸ **setParameterOfRootComponent**(`parameter`, `value`): `Promise`<`void`\>

Method to set a parameter on the root component. This is used by embedding as well

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md) | an instance of the kernel parameter we want to set, use 'key: "your-key"' if you do not have a kernel instance and do not need validation of the input |
| `value` | `string` | the value we want to set on the parameter as string |

### Returns

`Promise`<`void`\>

___

## showDimensions

▸ **showDimensions**(): `void`

Show dimensions (width, height, depth) of object

See [@roomle/web-sdk/configurator-core/src/services/configurator-ui-callback#ConfiguratorUiCallbacks.onDimensionsVisibilityChange](../modules/configurator_core_src_roomle_configurator.md) to get notified when dimension visibility changes

### Returns

`void`

___

## showGUI

▸ **showGUI**(): `void`

### Returns

`void`

___

## showStats

▸ **showStats**(): `void`

Show overlay with statistic data for:
fps
memory in MB
number of draw calls
number of poly/triangle count
number of geometries
number of textures

### Returns

`void`

___

## syncCatalog

▸ **syncCatalog**(`catalogId`): `Promise`<`void`\>

Start sync of catalog to make it offline available

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`Promise`<`void`\>

___

## syncFloorTag

▸ **syncFloorTag**(`tagId`): `Promise`<`void`\>

Start sync of floor tag to make it offline available

### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string` |

### Returns

`Promise`<`void`\>

___

## syncTypeChangeTag

▸ **syncTypeChangeTag**(`tagId`): `Promise`<`void`\>

Start sync of type change tag to make it offline available

### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string` |

### Returns

`Promise`<`void`\>

___

## undo

▸ **undo**(): `Promise`<`void`\>

Undo last action
calls configuratorHistory.undo where array of last configuration are stored

### Returns

`Promise`<`void`\>

___

## updateParameters

▸ **updateParameters**(`parameters`, `parameterGroups`, `elementId`, `parameterUpdateType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[] |
| `parameterGroups` | [`KernelParameterGroup`](../interfaces/typings_kernel.KernelParameterGroup.md)[] |
| `elementId` | `number` \| `number`[] |
| `parameterUpdateType` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[updateParameters](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updateparameters)

___

## updatePossibleChildren

▸ **updatePossibleChildren**(`elementId`, `children`, `parameterUpdateType?`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `number` |
| `children` | [`KernelPossibleChild`](../interfaces/typings_kernel.KernelPossibleChild.md)[] |
| `parameterUpdateType?` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`Promise`<`void`\>

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[updatePossibleChildren](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updatepossiblechildren)

___

## updateScene

▸ **updateScene**(): `void`

Updates the scene (recalculating bounds) and restart rendering

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateScene](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatescene)

___

## updateSize

▸ **updateSize**(): `void`

This function has to be called when the size of the container
(the html element which has been used in the init method) changes
It is VERY important to call this method because the SDK can not
detect if the DOM element which embeds the canvas of the 3D scene
changes in size

### Returns

`void`

### Implementation of

[GlobalAPI](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md).[updateSize](../interfaces/configurator_core_src_roomle_configurator._internal_.GlobalAPI.md#updatesize)

___

## zoomIn

▸ **zoomIn**(`value?`): `void`

Moves the camera closer to the object. Default value (when no value given) is 4, higher value moves a bigger distance.

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`

___

## zoomOut

▸ **zoomOut**(`value?`): `void`

Moves the camera away from the object. Default value (when no value given) is 4, higher value moves a bigger distance.

### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

### Returns

`void`
