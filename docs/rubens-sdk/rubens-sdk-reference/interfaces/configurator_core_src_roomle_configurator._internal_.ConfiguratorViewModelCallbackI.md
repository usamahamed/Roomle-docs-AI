[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ConfiguratorViewModelCallbackI

# Implemented by

- [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-10.md)

# Table of contents

## Methods

- [addComponentHandlers](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#addcomponenthandlers)
- [addPreviewHandlers](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#addpreviewhandlers)
- [addPreviewLineHandlers](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#addpreviewlinehandlers)
- [clearScene](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#clearscene)
- [componentDeleted](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#componentdeleted)
- [componentUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#componentupdated)
- [configurationLoaded](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#configurationloaded)
- [display](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#display)
- [planObjectConstructionDone](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#planobjectconstructiondone)
- [planObjectUpdated](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#planobjectupdated)
- [previewConstructionDone](configurator_core_src_roomle_configurator._internal_.ConfiguratorViewModelCallbackI.md#previewconstructiondone)

# Methods

## addComponentHandlers

▸ **addComponentHandlers**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## addPreviewHandlers

▸ **addPreviewHandlers**(`previewComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `previewComponent` | [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md) |

### Returns

`void`

___

## addPreviewLineHandlers

▸ **addPreviewLineHandlers**(`previewLineComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `previewLineComponent` | [`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md) |

### Returns

`void`

___

## clearScene

▸ **clearScene**(): `void`

### Returns

`void`

___

## componentDeleted

▸ **componentDeleted**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## componentUpdated

▸ **componentUpdated**(`component`, `kernelComponent`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |
| `kernelComponent` | [`KernelComponent`](typings_kernel.KernelComponent.md) |

### Returns

`void`

___

## configurationLoaded

▸ **configurationLoaded**(`component`, `isFreeFlying`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |
| `isFreeFlying` | `boolean` |

### Returns

`void`

___

## display

▸ **display**(`component`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`void`

___

## planObjectConstructionDone

▸ **planObjectConstructionDone**(`planObject`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`PlanObject`](typings_kernel.PlanObject.md) |

### Returns

`void`

___

## planObjectUpdated

▸ **planObjectUpdated**(`planObject`, `geometryChanged`, `pendingDocking`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`PlanObject`](typings_kernel.PlanObject.md) |
| `geometryChanged` | `boolean` |
| `pendingDocking` | `boolean` |

### Returns

`void`

___

## previewConstructionDone

▸ **previewConstructionDone**(`component`, `hasPreviews`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |
| `hasPreviews` | `boolean` |

### Returns

`void`
