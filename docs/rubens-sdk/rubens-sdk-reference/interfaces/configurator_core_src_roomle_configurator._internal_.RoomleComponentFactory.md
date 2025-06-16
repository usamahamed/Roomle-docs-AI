[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RoomleComponentFactory

# Table of contents

## Methods

- [create](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#create)
- [createOrthographicCamera](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#createorthographiccamera)
- [createPerspectiveCamera](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#createperspectivecamera)
- [createPreview](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#createpreview)
- [createPreviewLine](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#createpreviewline)
- [createStatic](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#createstatic)
- [isPreview](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#ispreview)
- [isPreviewLine](configurator_core_src_roomle_configurator._internal_.RoomleComponentFactory.md#ispreviewline)

# Methods

## create

▸ **create**(`id`, `position`, `eulerAngles`, `parentObjectId`, `isRootComponent`): [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `eulerAngles` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `parentObjectId` | `number` |
| `isRootComponent` | `boolean` |

### Returns

[`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md)

___

## createOrthographicCamera

▸ **createOrthographicCamera**(`left`, `right`, `top`, `bottom`, `near?`, `far?`, `offset?`): [`OrthographicOffsetCamera`](configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `right` | `number` |
| `top` | `number` |
| `bottom` | `number` |
| `near?` | `number` |
| `far?` | `number` |
| `offset?` | [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

[`OrthographicOffsetCamera`](configurator_core_src_roomle_configurator._internal_.OrthographicOffsetCamera.md)

___

## createPerspectiveCamera

▸ **createPerspectiveCamera**(`fov`, `aspect`, `near`, `far`, `offset?`): [`PerspectiveOffsetCamera`](configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `number` |
| `aspect` | `number` |
| `near` | `number` |
| `far` | `number` |
| `offset?` | [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md) |

### Returns

[`PerspectiveOffsetCamera`](configurator_core_src_roomle_configurator._internal_.PerspectiveOffsetCamera.md)

___

## createPreview

▸ **createPreview**(`id`, `parentObjectId`, `creator`): [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `parentObjectId` | `number` |
| `creator` | `string` |

### Returns

[`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md)

___

## createPreviewLine

▸ **createPreviewLine**(`previewComponent`, `creator`): [`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `previewComponent` | [`PreviewComponent`](configurator_core_src_roomle_configurator._internal_.PreviewComponent.md) |
| `creator` | `string` |

### Returns

[`PreviewLineComponent`](configurator_core_src_roomle_configurator._internal_.PreviewLineComponent.md)

___

## createStatic

▸ **createStatic**(`id`, `url`): [`StaticComponent`](configurator_core_src_roomle_configurator._internal_.StaticComponent.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `url` | `string` |

### Returns

[`StaticComponent`](configurator_core_src_roomle_configurator._internal_.StaticComponent.md)

___

## isPreview

▸ **isPreview**(`obj`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`boolean`

___

## isPreviewLine

▸ **isPreviewLine**(`obj`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`RoomleComponent`](configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`boolean`
