[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PostProcessingMaterialPlugin

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#constructor)

## Properties

- [applyAoAndShadowToAlpha](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#applyaoandshadowtoalpha)
- [applyReflectionPassMap](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#applyreflectionpassmap)

## Accessors

- [aoPassMap](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#aopassmap)
- [aoPassMapIntensity](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#aopassmapintensity)
- [aoPassMapScale](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#aopassmapscale)
- [reflectionPassMap](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#reflectionpassmap)
- [reflectionPassMapIntensity](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#reflectionpassmapintensity)
- [reflectionPassMapScale](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#reflectionpassmapscale)
- [shPassMapIntensity](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#shpassmapintensity)

## Methods

- [addPlugin](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md#addplugin)

# Constructors

## constructor

• **new PostProcessingMaterialPlugin**()

# Properties

## applyAoAndShadowToAlpha

• **applyAoAndShadowToAlpha**: `boolean` = `false`

___

## applyReflectionPassMap

• **applyReflectionPassMap**: `boolean` = `false`

# Accessors

## aoPassMap

• `set` **aoPassMap**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

### Returns

`void`

___

## aoPassMapIntensity

• `set` **aoPassMapIntensity**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

### Returns

`void`

___

## aoPassMapScale

• `set` **aoPassMapScale**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

### Returns

`void`

___

## reflectionPassMap

• `set` **reflectionPassMap**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

### Returns

`void`

___

## reflectionPassMapIntensity

• `set` **reflectionPassMapIntensity**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

### Returns

`void`

___

## reflectionPassMapScale

• `set` **reflectionPassMapScale**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

### Returns

`void`

___

## shPassMapIntensity

• `set` **shPassMapIntensity**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

### Returns

`void`

# Methods

## addPlugin

▸ `Static` **addPlugin**(`material`): [`PostProcessingMaterialPlugin`](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `MeshStandardMaterial` |

### Returns

[`PostProcessingMaterialPlugin`](configurator_core_src_roomle_configurator._internal_.PostProcessingMaterialPlugin.md)
