[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).RenderCacheManager

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#constructor)

## Methods

- [clearCache](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#clearcache)
- [clearObjectCache](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#clearobjectcache)
- [dispose](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#dispose)
- [onAfterRender](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#onafterrender)
- [onBeforeRender](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#onbeforerender)
- [registerCache](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#registercache)
- [render](configurator_core_src_roomle_configurator._internal_.RenderCacheManager.md#render)

# Constructors

## constructor

• **new RenderCacheManager**()

# Methods

## clearCache

▸ **clearCache**(): `void`

### Returns

`void`

___

## clearObjectCache

▸ **clearObjectCache**(`key`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

### Returns

`void`

___

## dispose

▸ **dispose**(): `void`

### Returns

`void`

___

## onAfterRender

▸ **onAfterRender**(`key`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

### Returns

`void`

___

## onBeforeRender

▸ **onBeforeRender**(`key`, `object3d`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `object3d` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`

___

## registerCache

▸ **registerCache**(`key`, `cache`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `cache` | [`RenderCache`](../interfaces/configurator_core_src_roomle_configurator._internal_.RenderCache.md) |

### Returns

`void`

___

## render

▸ **render**(`key`, `object3d`, `renderMethod`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `object3d` | `Object3D`<`Object3DEventMap`\> |
| `renderMethod` | () => `void` |

### Returns

`void`
