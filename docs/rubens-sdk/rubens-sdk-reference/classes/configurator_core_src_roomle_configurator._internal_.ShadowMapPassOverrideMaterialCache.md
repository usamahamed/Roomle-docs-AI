[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ShadowMapPassOverrideMaterialCache

# Hierarchy

- [`ObjectRenderCache`](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md)

  ↳ **`ShadowMapPassOverrideMaterialCache`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#constructor)

## Properties

- [useModifiedMaterial](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#usemodifiedmaterial)

## Accessors

- [shadowOnGround](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#shadowonground)

## Methods

- [addLineOrPoint](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#addlineorpoint)
- [addMesh](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#addmesh)
- [addObject](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#addobject)
- [addToCache](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#addtocache)
- [clear](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#clear)
- [dispose](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#dispose)
- [onAfterRender](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#onafterrender)
- [onBeforeRender](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#onbeforerender)
- [setBoundingBox](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#setboundingbox)
- [setShadowParameters](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md#setshadowparameters)

# Constructors

## constructor

• **new ShadowMapPassOverrideMaterialCache**()

### Overrides

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[constructor](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#constructor)

# Properties

## useModifiedMaterial

▪ `Static` **useModifiedMaterial**: `boolean` = `true`

# Accessors

## shadowOnGround

• `set` **shadowOnGround**(`value`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

### Returns

`void`

# Methods

## addLineOrPoint

▸ **addLineOrPoint**(`object3d`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object3d` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

### Overrides

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[addLineOrPoint](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addlineorpoint)

___

## addMesh

▸ **addMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |

### Returns

`void`

### Overrides

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[addMesh](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addmesh)

___

## addObject

▸ **addObject**(`object3d`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object3d` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

### Overrides

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[addObject](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addobject)

___

## addToCache

▸ **addToCache**(`object`, `updateObjectData`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> \| `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |
| `updateObjectData` | [`ObjectCacheData`](../interfaces/configurator_core_src_roomle_configurator._internal_.ObjectCacheData.md) |

### Returns

`void`

### Inherited from

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[addToCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addtocache)

___

## clear

▸ **clear**(): `void`

### Returns

`void`

### Inherited from

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[clear](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#clear)

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

### Overrides

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[dispose](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#dispose)

___

## onAfterRender

▸ **onAfterRender**(): `void`

### Returns

`void`

### Inherited from

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[onAfterRender](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#onafterrender)

___

## onBeforeRender

▸ **onBeforeRender**(): `void`

### Returns

`void`

### Inherited from

[ObjectRenderCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md).[onBeforeRender](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#onbeforerender)

___

## setBoundingBox

▸ **setBoundingBox**(`box`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `Box3` |

### Returns

`void`

___

## setShadowParameters

▸ **setShadowParameters**(`enableGroundBoundary`, `directionalDependency`, `directionalExponent`, `groundBoundary`, `groundMapScale`, `distance`, `blur`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enableGroundBoundary` | `boolean` |
| `directionalDependency` | `number` |
| `directionalExponent` | `number` |
| `groundBoundary` | `number` |
| `groundMapScale` | `number` |
| `distance` | `number` |
| `blur` | `number` |

### Returns

`void`
