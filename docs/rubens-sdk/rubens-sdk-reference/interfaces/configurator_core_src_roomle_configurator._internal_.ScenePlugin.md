[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ScenePlugin

# Hierarchy

- [`ScenePluginHooks`](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md)

- [`Context`](configurator_core_src_configurator._internal_.Context.md)

  ↳ **`ScenePlugin`**

# Table of contents

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#_creator_)

## Methods

- [clearScene](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#clearscene)
- [moveCameraEnd](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#movecameraend)
- [moveCameraStart](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#movecamerastart)
- [needsUiScene](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#needsuiscene)
- [setScene](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#setscene)
- [setUiScene](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#setuiscene)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.ScenePlugin.md#updatebounds)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[Context](configurator_core_src_configurator._internal_.Context.md).[_creator_](configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## clearScene

▸ **clearScene**(`scene`, `uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `uiScene` | `Scene` |

### Returns

`void`

### Inherited from

[ScenePluginHooks](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[clearScene](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#clearscene)

___

## moveCameraEnd

▸ **moveCameraEnd**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

### Inherited from

[ScenePluginHooks](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[moveCameraEnd](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#movecameraend)

___

## moveCameraStart

▸ **moveCameraStart**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

### Inherited from

[ScenePluginHooks](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[moveCameraStart](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#movecamerastart)

___

## needsUiScene

▸ **needsUiScene**(): `boolean`

### Returns

`boolean`

### Inherited from

[ScenePluginHooks](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[needsUiScene](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#needsuiscene)

___

## setScene

▸ **setScene**(`scene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |

### Returns

`void`

___

## setUiScene

▸ **setUiScene**(`uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `uiScene` | `Scene` |

### Returns

`void`

___

## updateBounds

▸ **updateBounds**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Inherited from

[ScenePluginHooks](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[updateBounds](configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#updatebounds)
