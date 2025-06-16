[common-core/src/lightsetting/dynamic-light-setting-loader](../modules/common_core_src_lightsetting_dynamic_light_setting_loader.md).DynamicLight

Description of fields:
- type: 'ambient'/'rectarea'/'spot'/'directional'
- name: set a name for this light to identify it more easily
- intensity: light intensity/brightness
- color: light color as hex ('#ffffff')
- position: position of the light, for example `{"x": 0,"y": 0, "z": 0}`, coords are right hand y up
- target: position to which the light should shine, defaults to center
- castShadow: defines if this light casts shadows
- angle: used for spotlights, defines the light cone of the spotlight
- penumbra: used for spotlights, defines how hard the edges of the light are
- width: used for rect area light, width of the area
- height: used for rect area light, height of the area
- movesWithCamera: if true the light will always have the same position and angle as the camera

# Table of contents

## Properties

- [angle](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#angle)
- [castShadow](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#castshadow)
- [color](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#color)
- [height](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#height)
- [intensity](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#intensity)
- [movesWithCamera](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#moveswithcamera)
- [name](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#name)
- [penumbra](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#penumbra)
- [position](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#position)
- [target](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#target)
- [type](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#type)
- [width](common_core_src_lightsetting_dynamic_light_setting_loader.DynamicLight.md#width)

# Properties

## angle

• `Optional` **angle**: `number`

___

## castShadow

• `Optional` **castShadow**: `boolean`

___

## color

• `Optional` **color**: `string`

___

## height

• `Optional` **height**: `number`

___

## intensity

• `Optional` **intensity**: `number`

___

## movesWithCamera

• `Optional` **movesWithCamera**: `boolean`

___

## name

• `Optional` **name**: `string`

___

## penumbra

• `Optional` **penumbra**: `number`

___

## position

• `Optional` **position**: `Vector3`

___

## target

• `Optional` **target**: `Vector3`

___

## type

• **type**: `string`

___

## width

• `Optional` **width**: `number`
