[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).OutlineRenderer

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#constructor)

## Properties

- [outlinePassActivated](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#outlinepassactivated)
- [parameters](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#parameters)

## Accessors

- [isOutlinePassActivated](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#isoutlinepassactivated)
- [outlinePass](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#outlinepass)

## Methods

- [activateOutline](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#activateoutline)
- [applyParameters](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#applyparameters)
- [deactivateOutline](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#deactivateoutline)
- [updateOutline](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#updateoutline)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.OutlineRenderer.md#updateparameters)

# Constructors

## constructor

• **new OutlineRenderer**(`renderPassManager`, `_effectComposer`, `parameters`)

### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassManager` | [`RenderPassManager`](configurator_core_src_roomle_configurator._internal_.RenderPassManager.md) |
| `_effectComposer` | `EffectComposer` |
| `parameters` | [`OutlineRendererParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlineRendererParameters.md) |

# Properties

## outlinePassActivated

• **outlinePassActivated**: `boolean` = `false`

___

## parameters

• **parameters**: [`OutlineParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlineParameters.md)

# Accessors

## isOutlinePassActivated

• `get` **isOutlinePassActivated**(): `boolean`

### Returns

`boolean`

___

## outlinePass

• `get` **outlinePass**(): [`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

### Returns

[`OutlinePass`](configurator_core_src_roomle_configurator._internal_.OutlinePass.md)

# Methods

## activateOutline

▸ **activateOutline**(`scene`, `camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `camera` | `Camera` |

### Returns

`void`

___

## applyParameters

▸ **applyParameters**(): `void`

### Returns

`void`

___

## deactivateOutline

▸ **deactivateOutline**(): `void`

### Returns

`void`

___

## updateOutline

▸ **updateOutline**(`scene`, `camera`, `selectedObjects`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `selectedObjects` | `Object3D`<`Object3DEventMap`\>[] |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`OutlineParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.OutlineParameters.md) |

### Returns

`void`
