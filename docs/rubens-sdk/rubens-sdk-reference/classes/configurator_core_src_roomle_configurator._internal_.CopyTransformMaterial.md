[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).CopyTransformMaterial

# Hierarchy

- `ShaderMaterial`

  ↳ **`CopyTransformMaterial`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.CopyTransformMaterial.md#constructor)

## Methods

- [update](configurator_core_src_roomle_configurator._internal_.CopyTransformMaterial.md#update)

# Constructors

## constructor

• **new CopyTransformMaterial**(`parameters?`, `copyBlendMode?`, `linearToSrgb?`, `premultipliedALpha?`)

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parameters?` | [`CopyTransformMaterialParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.CopyTransformMaterialParameters.md) | `undefined` |
| `copyBlendMode` | [`CopyMaterialBlendMode`](../modules/configurator_core_src_roomle_configurator._internal_.md#copymaterialblendmode) | `COLOR_COPY_BLEND_MODES.ADDITIVE` |
| `linearToSrgb` | `boolean` | `false` |
| `premultipliedALpha` | `boolean` | `false` |

### Overrides

ShaderMaterial.constructor

# Methods

## update

▸ **update**(`parameters?`): [`CopyTransformMaterial`](configurator_core_src_roomle_configurator._internal_.CopyTransformMaterial.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`CopyTransformMaterialParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.CopyTransformMaterialParameters.md) |

### Returns

[`CopyTransformMaterial`](configurator_core_src_roomle_configurator._internal_.CopyTransformMaterial.md)
