[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

Init data parameters which are not context specific

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default-7.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.default-7.md#_creator_)
- [alwaysUseCache](configurator_core_src_configurator._internal_.default-7.md#alwaysusecache)
- [configuratorId](configurator_core_src_configurator._internal_.default-7.md#configuratorid)
- [customApiUrl](configurator_core_src_configurator._internal_.default-7.md#customapiurl)
- [e2e](configurator_core_src_configurator._internal_.default-7.md#e2e)
- [e2eRoomleRendererForImages](configurator_core_src_configurator._internal_.default-7.md#e2eroomlerendererforimages)
- [locale](configurator_core_src_configurator._internal_.default-7.md#locale)
- [overrideCountry](configurator_core_src_configurator._internal_.default-7.md#overridecountry)
- [overrideRapi](configurator_core_src_configurator._internal_.default-7.md#overriderapi)
- [overrideTenant](configurator_core_src_configurator._internal_.default-7.md#overridetenant)

## Methods

- [setOverrides](configurator_core_src_configurator._internal_.default-7.md#setoverrides)

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

___

## alwaysUseCache

• `Optional` **alwaysUseCache**: `boolean`

**`Deprecated`**

**`Description`**

when set to true and assets were prechaced by the asset loader they are returned from cache. Otherwise we always return a fresh copy from network usage: alwaysUseCache=true default: not set -> assets fetched from url, set -> assets from cache

### Implementation of

[GlobalInitDataDefinition](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md).[alwaysUseCache](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md#alwaysusecache)

___

## configuratorId

• `Optional` **configuratorId**: `string`

### Implementation of

GlobalInitDataDefinition.configuratorId

___

## customApiUrl

• `Optional` **customApiUrl**: `string`

### Implementation of

GlobalInitDataDefinition.customApiUrl

___

## e2e

• `Optional` **e2e**: `boolean` = `false`

### Implementation of

GlobalInitDataDefinition.e2e

___

## e2eRoomleRendererForImages

• `Optional` **e2eRoomleRendererForImages**: `boolean` = `false`

### Implementation of

GlobalInitDataDefinition.e2eRoomleRendererForImages

___

## locale

• `Optional` **locale**: `string`

**`Description`**

locale to use for the
embedding instance

### Implementation of

[GlobalInitDataDefinition](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md).[locale](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md#locale)

___

## overrideCountry

• `Optional` **overrideCountry**: `string` = `null`

**`Description`**

Set country to use for the Roomle price service. If not used the customer IP address will be used to determine the location. usage: overrideCountry=de

### Implementation of

[GlobalInitDataDefinition](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md).[overrideCountry](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md#overridecountry)

___

## overrideRapi

• `Optional` **overrideRapi**: [`RapiServerUrlType`](../modules/typings_rapi_types.md#rapiserverurltype)

### Implementation of

GlobalInitDataDefinition.overrideRapi

___

## overrideTenant

• `Optional` **overrideTenant**: `number`

### Implementation of

GlobalInitDataDefinition.overrideTenant

# Methods

## setOverrides

▸ **setOverrides**(`globalInitData`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `globalInitData` | [`default`](configurator_core_src_configurator._internal_.default-9.md) \| `Partial`<[`GlobalInitDataDefinition`](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md)\> |

### Returns

`void`
