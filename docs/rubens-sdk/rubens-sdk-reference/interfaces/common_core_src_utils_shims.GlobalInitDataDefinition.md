[common-core/src/utils/shims](../modules/common_core_src_utils_shims.md).GlobalInitDataDefinition

Init data parameters which are not context specific

# Implemented by

- [`default`](../classes/configurator_core_src_configurator._internal_.default-7.md)

# Table of contents

## Properties

- [alwaysUseCache](common_core_src_utils_shims.GlobalInitDataDefinition.md#alwaysusecache)
- [locale](common_core_src_utils_shims.GlobalInitDataDefinition.md#locale)
- [overrideCountry](common_core_src_utils_shims.GlobalInitDataDefinition.md#overridecountry)

# Properties

## alwaysUseCache

• `Optional` **alwaysUseCache**: `boolean`

**`Deprecated`**

**`Description`**

when set to true and assets were prechaced by the asset loader they are returned from cache. Otherwise we always return a fresh copy from network usage: alwaysUseCache=true default: not set -> assets fetched from url, set -> assets from cache

___

## locale

• `Optional` **locale**: `string`

**`Description`**

locale to use for the
embedding instance

___

## overrideCountry

• `Optional` **overrideCountry**: `string`

**`Description`**

Set country to use for the Roomle price service. If not used the customer IP address will be used to determine the location. usage: overrideCountry=de
