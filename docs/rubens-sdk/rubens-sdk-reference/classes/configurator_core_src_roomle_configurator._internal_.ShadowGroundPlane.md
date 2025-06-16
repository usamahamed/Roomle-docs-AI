[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ShadowGroundPlane

# Hierarchy

- `Mesh`

  ↳ **`ShadowGroundPlane`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#constructor)

## Properties

- [alphaMap](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#alphamap)

## Methods

- [setDepthWrite](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#setdepthwrite)
- [setReceiveShadow](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#setreceiveshadow)
- [setShadowMap](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#setshadowmap)
- [setVisibility](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#setvisibility)
- [setVisibilityLayers](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#setvisibilitylayers)
- [updateMaterial](configurator_core_src_roomle_configurator._internal_.ShadowGroundPlane.md#updatematerial)

# Constructors

## constructor

• **new ShadowGroundPlane**(`shadowMap`, `parameters?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `shadowMap` | `Texture` |
| `parameters?` | [`ShadowGroundPlaneParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowGroundPlaneParameters.md) |

### Overrides

Mesh.constructor

# Properties

## alphaMap

▪ `Static` **alphaMap**: `boolean` = `true`

# Methods

## setDepthWrite

▸ **setDepthWrite**(`write`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `write` | `boolean` |

### Returns

`void`

___

## setReceiveShadow

▸ **setReceiveShadow**(`receive`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `receive` | `boolean` |

### Returns

`void`

___

## setShadowMap

▸ **setShadowMap**(`shadowMap`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `shadowMap` | `Texture` |

### Returns

`void`

___

## setVisibility

▸ **setVisibility**(`visible`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

### Returns

`void`

___

## setVisibilityLayers

▸ **setVisibilityLayers**(`visible`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

### Returns

`void`

___

## updateMaterial

▸ **updateMaterial**(`parameters`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ShadowGroundPlaneParameters`](../interfaces/configurator_core_src_roomle_configurator._internal_.ShadowGroundPlaneParameters.md) |

### Returns

`void`
