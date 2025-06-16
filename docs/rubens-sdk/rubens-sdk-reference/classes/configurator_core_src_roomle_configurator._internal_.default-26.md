[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`ScenePluginHooks`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-26.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-26.md#_creator_)

## Methods

- [addPlugin](configurator_core_src_roomle_configurator._internal_.default-26.md#addplugin)
- [clearScene](configurator_core_src_roomle_configurator._internal_.default-26.md#clearscene)
- [getActivePlugins](configurator_core_src_roomle_configurator._internal_.default-26.md#getactiveplugins)
- [getPlugin](configurator_core_src_roomle_configurator._internal_.default-26.md#getplugin)
- [init](configurator_core_src_roomle_configurator._internal_.default-26.md#init)
- [moveCameraEnd](configurator_core_src_roomle_configurator._internal_.default-26.md#movecameraend)
- [moveCameraStart](configurator_core_src_roomle_configurator._internal_.default-26.md#movecamerastart)
- [needsUiScene](configurator_core_src_roomle_configurator._internal_.default-26.md#needsuiscene)
- [updateBounds](configurator_core_src_roomle_configurator._internal_.default-26.md#updatebounds)

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

## addPlugin

▸ **addPlugin**(`plugin`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`ScenePlugin`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePlugin.md) |

### Returns

`void`

___

## clearScene

▸ **clearScene**(`scene`, `uiScene`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `uiScene` | `Scene` |

### Returns

`void`

### Implementation of

[ScenePluginHooks](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[clearScene](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#clearscene)

___

## getActivePlugins

▸ **getActivePlugins**(): [`ScenePlugin`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePlugin.md)[]

### Returns

[`ScenePlugin`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePlugin.md)[]

___

## getPlugin

▸ **getPlugin**<`T`\>(`type`): `T`

### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ScenePlugin`](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePlugin.md) |

### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

### Returns

`T`

___

## init

▸ **init**(`scene`, `uiScene`, `cameraPosition`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `uiScene` | `Scene` |
| `cameraPosition` | `Vector3` |

### Returns

`Promise`<`void`\>

___

## moveCameraEnd

▸ **moveCameraEnd**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

### Implementation of

[ScenePluginHooks](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[moveCameraEnd](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#movecameraend)

___

## moveCameraStart

▸ **moveCameraStart**(`position`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

### Returns

`void`

### Implementation of

[ScenePluginHooks](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[moveCameraStart](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#movecamerastart)

___

## needsUiScene

▸ **needsUiScene**(): `boolean`

### Returns

`boolean`

### Implementation of

[ScenePluginHooks](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[needsUiScene](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#needsuiscene)

___

## updateBounds

▸ **updateBounds**(`bounds`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Box3` |

### Returns

`void`

### Implementation of

[ScenePluginHooks](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md).[updateBounds](../interfaces/configurator_core_src_roomle_configurator._internal_.ScenePluginHooks.md#updatebounds)
