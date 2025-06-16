[common-core/src/environment/dynamic-environment-setting-loader](../modules/common_core_src_environment_dynamic_environment_setting_loader.md).EnvironmentSetting

Dynamic environment settings can be used to select which environment is used.

Example

```
{
"environment": {
   "type": "image",
   "details": {
     "imageUrl": "https://storage.googleapis.com/roomle-static/test/bg/bg_grey.jpg"
   }
 }
}
```

Available environment types

"type": "floor"/"image"/"color"/"gltf"

Type floor

```
"details": {
   "material": "roomle_floor:DresdenEiche"
}
```

Currently available floor materials, for others get in touch with us

```
roomle_floor:DresdenEiche
roomle_floor:Ibiza
roomle_floor:Palma
roomle_floor:Elba
roomle_floor:Manacor
roomle_floor:KernEiche
roomle_floor:KieferScandic
roomle_floor:EicheHabsburg
roomle_floor:FuldaKiefer
roomle_floor:Ashton
roomle_floor:EicheLondon
```

Type image

```
"details": {
   "imageUrl": "https://storage.googleapis.com/roomle-static/test/bg/bg_grey_shine.jpg"
}
```

Type color

```
"details": {
   "color": "#ff0000"
}
```

Type gltf

Type gltf does not have any details yet

# Table of contents

## Properties

- [details](common_core_src_environment_dynamic_environment_setting_loader.EnvironmentSetting.md#details)
- [type](common_core_src_environment_dynamic_environment_setting_loader.EnvironmentSetting.md#type)

# Properties

## details

• **details**: [`EnvironmentDetails`](common_core_src_environment_dynamic_environment_setting_loader.EnvironmentDetails.md)

___

## type

• **type**: `string`
