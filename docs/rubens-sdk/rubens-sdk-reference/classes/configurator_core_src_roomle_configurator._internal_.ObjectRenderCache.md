[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ObjectRenderCache

# Hierarchy

- **`ObjectRenderCache`**

  ↳ [`GBufferMaterialCache`](configurator_core_src_roomle_configurator._internal_.GBufferMaterialCache.md)

  ↳ [`ShadowMapPassOverrideMaterialCache`](configurator_core_src_roomle_configurator._internal_.ShadowMapPassOverrideMaterialCache.md)

# Implements

- [`RenderCache`](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#constructor)

## Methods

- [addLineOrPoint](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addlineorpoint)
- [addMesh](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addmesh)
- [addObject](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addobject)
- [addToCache](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#addtocache)
- [clear](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#clear)
- [dispose](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#dispose)
- [onAfterRender](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#onafterrender)
- [onBeforeRender](configurator_core_src_roomle_configurator._internal_.ObjectRenderCache.md#onbeforerender)

# Constructors

## constructor

• **new ObjectRenderCache**()

# Methods

## addLineOrPoint

▸ `Abstract` **addLineOrPoint**(`object3d`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object3d` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[addLineOrPoint](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#addlineorpoint)

___

## addMesh

▸ `Abstract` **addMesh**(`mesh`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> |

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[addMesh](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#addmesh)

___

## addObject

▸ `Abstract` **addObject**(`object3d`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object3d` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[addObject](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#addobject)

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

___

## clear

▸ **clear**(): `void`

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[clear](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#clear)

___

## dispose

▸ `Abstract` **dispose**(): `void`

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[dispose](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#dispose)

___

## onAfterRender

▸ **onAfterRender**(): `void`

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[onAfterRender](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#onafterrender)

___

## onBeforeRender

▸ **onBeforeRender**(): `void`

### Returns

`void`

### Implementation of

[RenderCache](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md).[onBeforeRender](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md#onbeforerender)
