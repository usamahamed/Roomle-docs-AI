[common-core/src/utils/shims](../modules/common_core_src_utils_shims.md).InitDataDefinition

Init data parameter which can be used in configurator AND planner

# Hierarchy

- [`CommonInitData`](common_core_src_utils_shims.CommonInitData.md)

- [`ConfiguratorInitData`](common_core_src_utils_shims.ConfiguratorInitData.md)

- [`PlannerInitData`](common_core_src_utils_shims.PlannerInitData.md)

  ↳ **`InitDataDefinition`**

# Table of contents

## Properties

- [animateCamera](common_core_src_utils_shims.InitDataDefinition.md#animatecamera)
- [applyCurrentGlobalParameters](common_core_src_utils_shims.InitDataDefinition.md#applycurrentglobalparameters)
- [autoQuality](common_core_src_utils_shims.InitDataDefinition.md#autoquality)
- [cameraRestriction](common_core_src_utils_shims.InitDataDefinition.md#camerarestriction)
- [cameraSpacing](common_core_src_utils_shims.InitDataDefinition.md#cameraspacing)
- [colors](common_core_src_utils_shims.InitDataDefinition.md#colors)
- [customShading](common_core_src_utils_shims.InitDataDefinition.md#customshading)
- [customShadingMoc](common_core_src_utils_shims.InitDataDefinition.md#customshadingmoc)
- [debug](common_core_src_utils_shims.InitDataDefinition.md#debug)
- [envMapIntensity](common_core_src_utils_shims.InitDataDefinition.md#envmapintensity)
- [envMapRotation](common_core_src_utils_shims.InitDataDefinition.md#envmaprotation)
- [envMapUrl](common_core_src_utils_shims.InitDataDefinition.md#envmapurl)
- [floorMaterialsTag](common_core_src_utils_shims.InitDataDefinition.md#floormaterialstag)
- [highlighting](common_core_src_utils_shims.InitDataDefinition.md#highlighting)
- [horizontalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#horizontalcameraangle)
- [id](common_core_src_utils_shims.InitDataDefinition.md#id)
- [initialFloorMaterial](common_core_src_utils_shims.InitDataDefinition.md#initialfloormaterial)
- [isItem](common_core_src_utils_shims.InitDataDefinition.md#isitem)
- [legacyLight](common_core_src_utils_shims.InitDataDefinition.md#legacylight)
- [ls](common_core_src_utils_shims.InitDataDefinition.md#ls)
- [maxHorizontalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#maxhorizontalcameraangle)
- [maxLightSources](common_core_src_utils_shims.InitDataDefinition.md#maxlightsources)
- [maxVerticalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#maxverticalcameraangle)
- [meshSelection](common_core_src_utils_shims.InitDataDefinition.md#meshselection)
- [minHorizontalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#minhorizontalcameraangle)
- [minVerticalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#minverticalcameraangle)
- [mode](common_core_src_utils_shims.InitDataDefinition.md#mode)
- [offlineSync](common_core_src_utils_shims.InitDataDefinition.md#offlinesync)
- [offset](common_core_src_utils_shims.InitDataDefinition.md#offset)
- [precisionCm](common_core_src_utils_shims.InitDataDefinition.md#precisioncm)
- [precisionInch](common_core_src_utils_shims.InitDataDefinition.md#precisioninch)
- [restrictionLevel](common_core_src_utils_shims.InitDataDefinition.md#restrictionlevel)
- [sceneLight](common_core_src_utils_shims.InitDataDefinition.md#scenelight)
- [shading](common_core_src_utils_shims.InitDataDefinition.md#shading)
- [showArButton](common_core_src_utils_shims.InitDataDefinition.md#showarbutton)
- [showInfos](common_core_src_utils_shims.InitDataDefinition.md#showinfos)
- [showPrice](common_core_src_utils_shims.InitDataDefinition.md#showprice)
- [startTag](common_core_src_utils_shims.InitDataDefinition.md#starttag)
- [stats](common_core_src_utils_shims.InitDataDefinition.md#stats)
- [transparentBackground](common_core_src_utils_shims.InitDataDefinition.md#transparentbackground)
- [transparentHighlighting](common_core_src_utils_shims.InitDataDefinition.md#transparenthighlighting)
- [typeChangeTag](common_core_src_utils_shims.InitDataDefinition.md#typechangetag)
- [unit](common_core_src_utils_shims.InitDataDefinition.md#unit)
- [unitStringType](common_core_src_utils_shims.InitDataDefinition.md#unitstringtype)
- [usePriceService](common_core_src_utils_shims.InitDataDefinition.md#usepriceservice)
- [verticalCameraAngle](common_core_src_utils_shims.InitDataDefinition.md#verticalcameraangle)
- [zoomDistance](common_core_src_utils_shims.InitDataDefinition.md#zoomdistance)

# Properties

## animateCamera

• `Optional` **animateCamera**: `boolean`

**`Description`**

If set to false the camera will just jump to a new position
default: true
usage: animateCamera=false

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[animateCamera](common_core_src_utils_shims.ConfiguratorInitData.md#animatecamera)

___

## applyCurrentGlobalParameters

• `Optional` **applyCurrentGlobalParameters**: `boolean`

**`Description`**

If set to true it will try to apply all current global parameters to the loaded object

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[applyCurrentGlobalParameters](common_core_src_utils_shims.ConfiguratorInitData.md#applycurrentglobalparameters)

___

## autoQuality

• `Optional` **autoQuality**: `boolean`

**`Description`**

If set to true the configurator will make sure every device has great user experience  with fluid frame rate.
If set to false the configurator will always show the highest quality possible.
That could lead to stutter and other problems on low-end devices. We advise you to only turn off "autoQuality" if you really know what you are doing.
usage: autoQuality=false

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[autoQuality](common_core_src_utils_shims.CommonInitData.md#autoquality)

___

## cameraRestriction

• `Optional` **cameraRestriction**: `number`

**`Description`**

When set this param restricts the camera rotation to the given angle (e.g. 45 degree), this overrides minHorizontalCameraAngle and maxHorizontalCameraAngle
default: not set -> no camera restriction
usage: cameraRestriction=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[cameraRestriction](common_core_src_utils_shims.ConfiguratorInitData.md#camerarestriction)

___

## cameraSpacing

• `Optional` **cameraSpacing**: `number`

**`Description`**

Adds the given spacing (in centimeters) to the loaded object. This is then used to calculate the initial camera distance
default: 0
usage:
 cameraSpacing=100, zoom out further by increasing camera spacing by 100 centimeters
 cameraSpacing=-30, zoom in further by decreasing camera spacing by 30 centimeters

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[cameraSpacing](common_core_src_utils_shims.ConfiguratorInitData.md#cameraspacing)

___

## colors

• `Optional` **colors**: [`ColorsIn3dScene`](../modules/common_core_src_utils_shims.md#colorsin3dscene)

**`Description`**

Can be used to personalize colors used in the 3D scene

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[colors](common_core_src_utils_shims.CommonInitData.md#colors)

___

## customShading

• `Optional` **customShading**: [`CustomShadingParameters`](configurator_core_src_configurator._internal_.CustomShadingParameters.md)

**`Description`**

Customized shading properties for the overall appearance

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[customShading](common_core_src_utils_shims.CommonInitData.md#customshading)

___

## customShadingMoc

• `Optional` **customShadingMoc**: [`CustomShadingParameters`](configurator_core_src_configurator._internal_.CustomShadingParameters.md)

**`Description`**

Customized shading properties for the overall appearance in MOC

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[customShadingMoc](common_core_src_utils_shims.CommonInitData.md#customshadingmoc)

___

## debug

• `Optional` **debug**: `boolean`

**`Description`**

This flag enables:
  - Scripter debug logs (e.g. which parameter is not assigned to a parameter group)
  - Free camera movement (no restrictions, camera stays after reload, panning using Shift key)

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[debug](common_core_src_utils_shims.CommonInitData.md#debug)

___

## envMapIntensity

• `Optional` **envMapIntensity**: `number`

**`Description`**

Set the intensity of the environment map

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[envMapIntensity](common_core_src_utils_shims.CommonInitData.md#envmapintensity)

___

## envMapRotation

• `Optional` **envMapRotation**: `number`

**`Description`**

Set the rotation of the environment map in radians, between 0 and 2 * PI, rotates counter-clockwise

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[envMapRotation](common_core_src_utils_shims.CommonInitData.md#envmaprotation)

___

## envMapUrl

• `Optional` **envMapUrl**: `string`

**`Description`**

Url to an exr or hdr env map

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[envMapUrl](common_core_src_utils_shims.CommonInitData.md#envmapurl)

___

## floorMaterialsTag

• `Optional` **floorMaterialsTag**: `string`

**`Deprecated`**

**`Description`**

define which floors to load

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[floorMaterialsTag](common_core_src_utils_shims.ConfiguratorInitData.md#floormaterialstag)

___

## highlighting

• `Optional` **highlighting**: `string`

**`Description`**

Sets the behavior of the highlighting of a hovered component.
usage: highlighting=smart

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[highlighting](common_core_src_utils_shims.ConfiguratorInitData.md#highlighting)

___

## horizontalCameraAngle

• `Optional` **horizontalCameraAngle**: `number`

**`Description`**

Sets the default/initial horizontal camera angle (yaw)
default: -30
usage: horizontalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[horizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#horizontalcameraangle)

___

## id

• `Optional` **id**: `string`

**`Description`**

The item id or configuration id of the item which should be loaded.
Examples:
Configuration id: usm:frame:2449773A7F54278EBB61A67A10EF6A10E8BB6F38BE775B028AC050B438414507
Item id: usm:frame

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[id](common_core_src_utils_shims.CommonInitData.md#id)

___

## initialFloorMaterial

• `Optional` **initialFloorMaterial**: `string`

**`Deprecated`**

**`Description`**

Set the floor material which is used when loading the configurator
For different options see [@roomle/web-sdk/configurator-core/src/environment/dynamic-environment-setting-loader#EnvironmentSetting](../modules/common_core_src_utils_shims.md)

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[initialFloorMaterial](common_core_src_utils_shims.ConfiguratorInitData.md#initialfloormaterial)

___

## isItem

• `Optional` **isItem**: `boolean`

**`Deprecated`**

**`Description`**

Set if the currently loaded id is an item or a configuration.
In the new configurator UI this is determined automatically based on the id.

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[isItem](common_core_src_utils_shims.CommonInitData.md#isitem)

___

## legacyLight

• `Optional` **legacyLight**: `boolean`

**`Description`**

Use old light setting instead of env maps

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[legacyLight](common_core_src_utils_shims.CommonInitData.md#legacylight)

___

## ls

• `Optional` **ls**: `string`

**`Description`**

Load a predefined light setting, eg: ls=sofa

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[ls](common_core_src_utils_shims.ConfiguratorInitData.md#ls)

___

## maxHorizontalCameraAngle

• `Optional` **maxHorizontalCameraAngle**: `number`

**`Description`**

When set this param restricts the right/horizontal camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: maxHorizontalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[maxHorizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#maxhorizontalcameraangle)

___

## maxLightSources

• `Optional` **maxLightSources**: `number`

**`Description`**

Set the maximum number of light sources extracted from the environment map

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[maxLightSources](common_core_src_utils_shims.CommonInitData.md#maxlightsources)

___

## maxVerticalCameraAngle

• `Optional` **maxVerticalCameraAngle**: `number`

**`Description`**

When set this param restricts the up/vertical camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: maxVerticalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[maxVerticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#maxverticalcameraangle)

___

## meshSelection

• `Optional` **meshSelection**: `boolean`

**`Description`**

When mesh selection is enabled, the meshes of the object are used directly for highlighting.
Setting it to false could be useful for square/rectangular (shelf) items.

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[meshSelection](common_core_src_utils_shims.CommonInitData.md#meshselection)

___

## minHorizontalCameraAngle

• `Optional` **minHorizontalCameraAngle**: `number`

**`Description`**

When set this param restricts the left/horizontal camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: minHorizontalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[minHorizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#minhorizontalcameraangle)

___

## minVerticalCameraAngle

• `Optional` **minVerticalCameraAngle**: `number`

**`Description`**

When set this param restricts the down/vertical camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: minVerticalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[minVerticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#minverticalcameraangle)

___

## mode

• `Optional` **mode**: [`Enumify`](../modules/configurator_core_src_configurator._internal_.md#enumify)<{ `CAMERA_2D`: ``"2D"`` = '2D'; `CAMERA_3D`: ``"3D"`` = '3D'; `CAMERA_FP`: ``"FP"`` = 'FP' }\>

**`Description`**

Select with which camera mode to start initially.
usage: mode=2D
options: 2D, 3D, FP

### Inherited from

[PlannerInitData](common_core_src_utils_shims.PlannerInitData.md).[mode](common_core_src_utils_shims.PlannerInitData.md#mode)

___

## offlineSync

• `Optional` **offlineSync**: `string`

**`Deprecated`**

**`Description`**

Download all necessary files to run the configurator in offline mode

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[offlineSync](common_core_src_utils_shims.ConfiguratorInitData.md#offlinesync)

___

## offset

• `Optional` **offset**: [`CanvasOffset`](common_core_src_common_interfaces.CanvasOffset.md)

**`Deprecated`**

**`Description`**

Change the offset of the camera. For example if you add a margin left (0.1 means 10%) then
the item moves to the right.
This value is overridden in the new configurator UI.

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[offset](common_core_src_utils_shims.CommonInitData.md#offset)

___

## precisionCm

• `Optional` **precisionCm**: `string`

**`Description`**

Set how many positions after the decimal point should be shown.
For example:
123,45 -> precisionCm=2 -> 123,45
123,45 -> precisionCm=1 -> 123,5
123,45 -> precisionCm=0 -> 124

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[precisionCm](common_core_src_utils_shims.CommonInitData.md#precisioncm)

___

## precisionInch

• `Optional` **precisionInch**: `string`

**`Description`**

Set how many positions after the decimal point should be shown.
For example:
8' 1.68" -> precisionCm=2 -> 8' 1.68"
8' 1.68" -> precisionCm=1 -> 8' 1.7"
8' 1.68" -> precisionCm=0 -> 8' 2"

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[precisionInch](common_core_src_utils_shims.CommonInitData.md#precisioninch)

___

## restrictionLevel

• `Optional` **restrictionLevel**: `number`

**`Description`**

restrictionLevel defines visibility of parameters and possible children

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[restrictionLevel](common_core_src_utils_shims.CommonInitData.md#restrictionlevel)

___

## sceneLight

• `Optional` **sceneLight**: [`DefaultEnvironmentSceneType`](../modules/configurator_core_src_configurator._internal_.md#defaultenvironmentscenetype)

**`Description`**

Generate environment map from a scene instead of env maps
use all_around for an surrounding light
use front for a mainly frontal light

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[sceneLight](common_core_src_utils_shims.CommonInitData.md#scenelight)

___

## shading

• `Optional` **shading**: [`SceneShadingType`](../modules/configurator_core_src_configurator._internal_.md#sceneshadingtype)

**`Description`**

General shading properties for the overall appearance
default: for planner and a configurator with colorful, metallic or wooden materials
bright: for a configurator with white and bright materials

**`Groups`**

scene-settings

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[shading](common_core_src_utils_shims.CommonInitData.md#shading)

___

## showArButton

• `Optional` **showArButton**: `boolean`

**`Deprecated`**

**`Description`**

Set if the AR button should be shown.
In the new configurator UI this is in the configurator settings object called buttons.

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[showArButton](common_core_src_utils_shims.CommonInitData.md#showarbutton)

___

## showInfos

• `Optional` **showInfos**: `boolean`

**`Deprecated`**

**`Description`**

Shows partlist if there are no prices

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[showInfos](common_core_src_utils_shims.ConfiguratorInitData.md#showinfos)

___

## showPrice

• `Optional` **showPrice**: `boolean`

**`Deprecated`**

**`Description`**

Show price label using prices from configuration script

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[showPrice](common_core_src_utils_shims.ConfiguratorInitData.md#showprice)

___

## startTag

• `Optional` **startTag**: `string`

**`Deprecated`**

**`Description`**

Add a tag id which is used to show different variations when opening the configurator

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[startTag](common_core_src_utils_shims.CommonInitData.md#starttag)

___

## stats

• `Optional` **stats**: `boolean`

**`Description`**

if set to true it shows a little overlay with performance stats

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[stats](common_core_src_utils_shims.CommonInitData.md#stats)

___

## transparentBackground

• `Optional` **transparentBackground**: `boolean`

**`Description`**

If set to true, the background is transparent and allows elements behind the configurator to be visible through the scene.
usage: transparentBackground=true

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[transparentBackground](common_core_src_utils_shims.ConfiguratorInitData.md#transparentbackground)

___

## transparentHighlighting

• `Optional` **transparentHighlighting**: `boolean`

**`Description`**

If set to true, components which are between the camera and the selected component/preview will be rendered transparent
usage: transparentHighlighting=true

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[transparentHighlighting](common_core_src_utils_shims.ConfiguratorInitData.md#transparenthighlighting)

___

## typeChangeTag

• `Optional` **typeChangeTag**: `string`

**`Description`**

Add a tag id which is used to show different variations for the current item/configuration

**`Deprecated`**

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[typeChangeTag](common_core_src_utils_shims.CommonInitData.md#typechangetag)

___

## unit

• `Optional` **unit**: `string`

**`Description`**

Defines which unit should be used for measurements/dimensions
Options: 'cm', 'mm', 'inchfeet'

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[unit](common_core_src_utils_shims.CommonInitData.md#unit)

___

## unitStringType

• `Optional` **unitStringType**: `string`

**`Description`**

How the current unit should be formatted
Options:
  - 'none': No unit string added, for example '200'
  - 'long': Long unit string, for example '200 meters'
  - 'short': Short unit string, for example '200 m'

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[unitStringType](common_core_src_utils_shims.CommonInitData.md#unitstringtype)

___

## usePriceService

• `Optional` **usePriceService**: `boolean`

**`Description`**

If set to true, prices are calculated using the Roomle price service.
For more information ask your Roomle contact.

### Inherited from

[CommonInitData](common_core_src_utils_shims.CommonInitData.md).[usePriceService](common_core_src_utils_shims.CommonInitData.md#usepriceservice)

___

## verticalCameraAngle

• `Optional` **verticalCameraAngle**: `number`

**`Description`**

Sets the default/initial vertical camera angle (pitch)
default: 10
usage: verticalCameraAngle=45

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[verticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#verticalcameraangle)

___

## zoomDistance

• `Optional` **zoomDistance**: `number`

**`Description`**

Set the distance to which the user can zoom (in centimeters).
default: object size divided by 10 or 10 cm
usage: zoomDistance=3

**`Groups`**

scene-settings

### Inherited from

[ConfiguratorInitData](common_core_src_utils_shims.ConfiguratorInitData.md).[zoomDistance](common_core_src_utils_shims.ConfiguratorInitData.md#zoomdistance)
