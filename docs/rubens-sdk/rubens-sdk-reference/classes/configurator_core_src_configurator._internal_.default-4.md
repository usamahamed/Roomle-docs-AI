[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`CommunicationInterfaceCallback`](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default-4.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.default-4.md#_creator_)

## Methods

- [\_syncTypeChangeTag](configurator_core_src_configurator._internal_.default-4.md#_synctypechangetag)
- [getIsCatalogSynced](configurator_core_src_configurator._internal_.default-4.md#getiscatalogsynced)
- [onCommand](configurator_core_src_configurator._internal_.default-4.md#oncommand)
- [preFillAssetCache](configurator_core_src_configurator._internal_.default-4.md#prefillassetcache)
- [requestAsset](configurator_core_src_configurator._internal_.default-4.md#requestasset)
- [setAlwaysUseCache](configurator_core_src_configurator._internal_.default-4.md#setalwaysusecache)
- [start](configurator_core_src_configurator._internal_.default-4.md#start)
- [syncCatalog](configurator_core_src_configurator._internal_.default-4.md#synccatalog)
- [syncFloorTag](configurator_core_src_configurator._internal_.default-4.md#syncfloortag)
- [syncTypeChangeTag](configurator_core_src_configurator._internal_.default-4.md#synctypechangetag)

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

## \_syncTypeChangeTag

▸ **_syncTypeChangeTag**(`tagId`): `Promise`<`any`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string` |

### Returns

`Promise`<`any`\>

___

## getIsCatalogSynced

▸ **getIsCatalogSynced**(`catalogId`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`boolean`

___

## onCommand

▸ **onCommand**(`command`, `conversationId`, `data`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`WORKER_MESSAGE`](../enums/configurator_core_src_configurator._internal_.WORKER_MESSAGE.md) |
| `conversationId` | `number` |
| `data` | `any` |

### Returns

`void`

### Implementation of

[CommunicationInterfaceCallback](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md).[onCommand](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md#oncommand)

___

## preFillAssetCache

▸ **preFillAssetCache**(`key`, `url`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `url` | `string` |

### Returns

`void`

___

## requestAsset

▸ **requestAsset**(`url`, `urlAsFallback?`): `string`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `urlAsFallback` | `boolean` | `false` |

### Returns

`string`

___

## setAlwaysUseCache

▸ **setAlwaysUseCache**(`alwaysUseCache`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysUseCache` | `boolean` |

### Returns

`void`

___

## start

▸ **start**(`catalogId`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`Promise`<`void`\>

___

## syncCatalog

▸ **syncCatalog**(`catalogId`): `Promise`<`void`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `catalogId` | `string` |

### Returns

`Promise`<`void`\>

___

## syncFloorTag

▸ **syncFloorTag**(`tagId`): `Promise`<`any`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string` |

### Returns

`Promise`<`any`\>

___

## syncTypeChangeTag

▸ **syncTypeChangeTag**(`tagId`): `Promise`<`any`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string` |

### Returns

`Promise`<`any`\>
