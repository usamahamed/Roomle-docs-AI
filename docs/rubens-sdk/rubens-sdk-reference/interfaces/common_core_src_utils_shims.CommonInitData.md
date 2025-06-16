[common-core/src/utils/shims](../modules/common_core_src_utils_shims.md).CommonInitData

Init data parameter which can be used in configurator AND planner

# Hierarchy

- **`CommonInitData`**

  ↳ [`InitDataDefinition`](common_core_src_utils_shims.InitDataDefinition.md)

# Table of contents

## Properties

- [autoQuality](common_core_src_utils_shims.CommonInitData.md#autoquality)
- [colors](common_core_src_utils_shims.CommonInitData.md#colors)
- [customShading](common_core_src_utils_shims.CommonInitData.md#customshading)
- [customShadingMoc](common_core_src_utils_shims.CommonInitData.md#customshadingmoc)
- [debug](common_core_src_utils_shims.CommonInitData.md#debug)
- [envMapIntensity](common_core_src_utils_shims.CommonInitData.md#envmapintensity)
- [envMapRotation](common_core_src_utils_shims.CommonInitData.md#envmaprotation)
- [envMapUrl](common_core_src_utils_shims.CommonInitData.md#envmapurl)
- [id](common_core_src_utils_shims.CommonInitData.md#id)
- [isItem](common_core_src_utils_shims.CommonInitData.md#isitem)
- [legacyLight](common_core_src_utils_shims.CommonInitData.md#legacylight)
- [maxLightSources](common_core_src_utils_shims.CommonInitData.md#maxlightsources)
- [meshSelection](common_core_src_utils_shims.CommonInitData.md#meshselection)
- [offset](common_core_src_utils_shims.CommonInitData.md#offset)
- [precisionCm](common_core_src_utils_shims.CommonInitData.md#precisioncm)
- [precisionInch](common_core_src_utils_shims.CommonInitData.md#precisioninch)
- [restrictionLevel](common_core_src_utils_shims.CommonInitData.md#restrictionlevel)
- [sceneLight](common_core_src_utils_shims.CommonInitData.md#scenelight)
- [shading](common_core_src_utils_shims.CommonInitData.md#shading)
- [showArButton](common_core_src_utils_shims.CommonInitData.md#showarbutton)
- [startTag](common_core_src_utils_shims.CommonInitData.md#starttag)
- [stats](common_core_src_utils_shims.CommonInitData.md#stats)
- [typeChangeTag](common_core_src_utils_shims.CommonInitData.md#typechangetag)
- [unit](common_core_src_utils_shims.CommonInitData.md#unit)
- [unitStringType](common_core_src_utils_shims.CommonInitData.md#unitstringtype)
- [usePriceService](common_core_src_utils_shims.CommonInitData.md#usepriceservice)

# Properties

## autoQuality

• `Optional` **autoQuality**: `boolean`

**`Description`**

If set to true the configurator will make sure every device has great user experience  with fluid frame rate.
If set to false the configurator will always show the highest quality possible.
That could lead to stutter and other problems on low-end devices. We advise you to only turn off "autoQuality" if you really know what you are doing.
usage: autoQuality=false

**`Groups`**

scene-settings

___

## colors

• `Optional` **colors**: [`ColorsIn3dScene`](../modules/common_core_src_utils_shims.md#colorsin3dscene)

**`Description`**

Can be used to personalize colors used in the 3D scene

**`Groups`**

scene-settings

___

## customShading

• `Optional` **customShading**: [`CustomShadingParameters`](configurator_core_src_configurator._internal_.CustomShadingParameters.md)

**`Description`**

Customized shading properties for the overall appearance

**`Groups`**

scene-settings

___

## customShadingMoc

• `Optional` **customShadingMoc**: [`CustomShadingParameters`](configurator_core_src_configurator._internal_.CustomShadingParameters.md)

**`Description`**

Customized shading properties for the overall appearance in MOC

**`Groups`**

scene-settings

___

## debug

• `Optional` **debug**: `boolean`

**`Description`**

This flag enables:
  - Scripter debug logs (e.g. which parameter is not assigned to a parameter group)
  - Free camera movement (no restrictions, camera stays after reload, panning using Shift key)

___

## envMapIntensity

• `Optional` **envMapIntensity**: `number`

**`Description`**

Set the intensity of the environment map

**`Groups`**

scene-settings

___

## envMapRotation

• `Optional` **envMapRotation**: `number`

**`Description`**

Set the rotation of the environment map in radians, between 0 and 2 * PI, rotates counter-clockwise

**`Groups`**

scene-settings

___

## envMapUrl

• `Optional` **envMapUrl**: `string`

**`Description`**

Url to an exr or hdr env map

**`Groups`**

scene-settings

___

## id

• `Optional` **id**: `string`

**`Description`**

The item id or configuration id of the item which should be loaded.
Examples:
Configuration id: usm:frame:2449773A7F54278EBB61A67A10EF6A10E8BB6F38BE775B028AC050B438414507
Item id: usm:frame

___

## isItem

• `Optional` **isItem**: `boolean`

**`Deprecated`**

**`Description`**

Set if the currently loaded id is an item or a configuration.
In the new configurator UI this is determined automatically based on the id.

___

## legacyLight

• `Optional` **legacyLight**: `boolean`

**`Description`**

Use old light setting instead of env maps

**`Groups`**

scene-settings

___

## maxLightSources

• `Optional` **maxLightSources**: `number`

**`Description`**

Set the maximum number of light sources extracted from the environment map

**`Groups`**

scene-settings

___

## meshSelection

• `Optional` **meshSelection**: `boolean`

**`Description`**

When mesh selection is enabled, the meshes of the object are used directly for highlighting.
Setting it to false could be useful for square/rectangular (shelf) items.

___

## offset

• `Optional` **offset**: [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md)

**`Deprecated`**

**`Description`**

Change the offset of the camera. For example if you add a margin left (0.1 means 10%) then
the item moves to the right.
This value is overridden in the new configurator UI.

___

## precisionCm

• `Optional` **precisionCm**: `string`

**`Description`**

Set how many positions after the decimal point should be shown.
For example:
123,45 -> precisionCm=2 -> 123,45
123,45 -> precisionCm=1 -> 123,5
123,45 -> precisionCm=0 -> 124

___

## precisionInch

• `Optional` **precisionInch**: `string`

**`Description`**

Set how many positions after the decimal point should be shown.
For example:
8' 1.68" -> precisionCm=2 -> 8' 1.68"
8' 1.68" -> precisionCm=1 -> 8' 1.7"
8' 1.68" -> precisionCm=0 -> 8' 2"

___

## restrictionLevel

• `Optional` **restrictionLevel**: `number`

**`Description`**

restrictionLevel defines visibility of parameters and possible children

___

## sceneLight

• `Optional` **sceneLight**: [`DefaultEnvironmentSceneType`](../modules/configurator_core_src_configurator._internal_.md#defaultenvironmentscenetype)

**`Description`**

Generate environment map from a scene instead of env maps
use all_around for an surrounding light
use front for a mainly frontal light

**`Groups`**

scene-settings

___

## shading

• `Optional` **shading**: [`SceneShadingType`](../modules/configurator_core_src_configurator._internal_.md#sceneshadingtype)

**`Description`**

General shading properties for the overall appearance
default: for planner and a configurator with colorful, metallic or wooden materials
bright: for a configurator with white and bright materials

**`Groups`**

scene-settings

___

## showArButton

• `Optional` **showArButton**: `boolean`

**`Deprecated`**

**`Description`**

Set if the AR button should be shown.
In the new configurator UI this is in the configurator settings object called buttons.

___

## startTag

• `Optional` **startTag**: `string`

**`Deprecated`**

**`Description`**

Add a tag id which is used to show different variations when opening the configurator

___

## stats

• `Optional` **stats**: `boolean`

**`Description`**

if set to true it shows a little overlay with performance stats

___

## typeChangeTag

• `Optional` **typeChangeTag**: `string`

**`Description`**

Add a tag id which is used to show different variations for the current item/configuration

**`Deprecated`**

___

## unit

• `Optional` **unit**: `string`

**`Description`**

Defines which unit should be used for measurements/dimensions
Options: 'cm', 'mm', 'inchfeet'

___

## unitStringType

• `Optional` **unitStringType**: `string`

**`Description`**

How the current unit should be formatted
Options:
  - 'none': No unit string added, for example '200'
  - 'long': Long unit string, for example '200 meters'
  - 'short': Short unit string, for example '200 m'

___

## usePriceService

• `Optional` **usePriceService**: `boolean`

**`Description`**

If set to true, prices are calculated using the Roomle price service.
For more information ask your Roomle contact.
