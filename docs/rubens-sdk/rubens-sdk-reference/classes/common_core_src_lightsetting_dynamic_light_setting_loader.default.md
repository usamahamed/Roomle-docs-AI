[common-core/src/lightsetting/dynamic-light-setting-loader](../modules/common_core_src_lightsetting_dynamic_light_setting_loader.md).default

# Table of contents

## Constructors

- [constructor](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#constructor)

## Properties

- [rectAreaLightLoadingListener](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#rectarealightloadinglistener)
- [rectAreaLightReplacement](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#rectarealightreplacement)

## Methods

- [load](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#load)
- [parse](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#parse)
- [createDynamicLightSettingSource](common_core_src_lightsetting_dynamic_light_setting_loader.default.md#createdynamiclightsettingsource)

# Constructors

## constructor

• **new default**()

# Properties

## rectAreaLightLoadingListener

▪ `Static` **rectAreaLightLoadingListener**: (`lightSource`: `RectAreaLight`) => `void`

### Type declaration

▸ (`lightSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lightSource` | `RectAreaLight` |

#### Returns

`void`

___

## rectAreaLightReplacement

▪ `Static` **rectAreaLightReplacement**: `boolean` = `true`

# Methods

## load

▸ **load**(`jsonObject`): `Light`<`LightShadow`<`Camera`\>\>[]

### Parameters

| Name | Type |
| :------ | :------ |
| `jsonObject` | [`SceneSettings`](../interfaces/common_core_src_scene_settings_loader.SceneSettings.md) |

### Returns

`Light`<`LightShadow`<`Camera`\>\>[]

___

## parse

▸ **parse**(`json`): `Light`<`LightShadow`<`Camera`\>\>[]

### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

### Returns

`Light`<`LightShadow`<`Camera`\>\>[]

___

## createDynamicLightSettingSource

▸ `Static` **createDynamicLightSettingSource**(`dls`, `ls`): [`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `dls` | `string` |
| `ls` | `string` |

### Returns

[`DynamicLightSettingSource`](../interfaces/common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLightSettingSource.md)
