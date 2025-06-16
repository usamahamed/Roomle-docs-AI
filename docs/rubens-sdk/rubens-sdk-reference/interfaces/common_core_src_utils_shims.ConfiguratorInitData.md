[common-core/src/utils/shims](../modules/common_core_src_utils_shims.md).ConfiguratorInitData

# Hierarchy

- **`ConfiguratorInitData`**

  ↳ [`InitDataDefinition`](common_core_src_utils_shims.InitDataDefinition.md)

# Table of contents

## Properties

- [animateCamera](common_core_src_utils_shims.ConfiguratorInitData.md#animatecamera)
- [applyCurrentGlobalParameters](common_core_src_utils_shims.ConfiguratorInitData.md#applycurrentglobalparameters)
- [cameraRestriction](common_core_src_utils_shims.ConfiguratorInitData.md#camerarestriction)
- [cameraSpacing](common_core_src_utils_shims.ConfiguratorInitData.md#cameraspacing)
- [floorMaterialsTag](common_core_src_utils_shims.ConfiguratorInitData.md#floormaterialstag)
- [highlighting](common_core_src_utils_shims.ConfiguratorInitData.md#highlighting)
- [horizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#horizontalcameraangle)
- [initialFloorMaterial](common_core_src_utils_shims.ConfiguratorInitData.md#initialfloormaterial)
- [ls](common_core_src_utils_shims.ConfiguratorInitData.md#ls)
- [maxHorizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#maxhorizontalcameraangle)
- [maxVerticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#maxverticalcameraangle)
- [minHorizontalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#minhorizontalcameraangle)
- [minVerticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#minverticalcameraangle)
- [offlineSync](common_core_src_utils_shims.ConfiguratorInitData.md#offlinesync)
- [showInfos](common_core_src_utils_shims.ConfiguratorInitData.md#showinfos)
- [showPrice](common_core_src_utils_shims.ConfiguratorInitData.md#showprice)
- [transparentBackground](common_core_src_utils_shims.ConfiguratorInitData.md#transparentbackground)
- [transparentHighlighting](common_core_src_utils_shims.ConfiguratorInitData.md#transparenthighlighting)
- [verticalCameraAngle](common_core_src_utils_shims.ConfiguratorInitData.md#verticalcameraangle)
- [zoomDistance](common_core_src_utils_shims.ConfiguratorInitData.md#zoomdistance)

# Properties

## animateCamera

• `Optional` **animateCamera**: `boolean`

**`Description`**

If set to false the camera will just jump to a new position
default: true
usage: animateCamera=false

**`Groups`**

scene-settings

___

## applyCurrentGlobalParameters

• `Optional` **applyCurrentGlobalParameters**: `boolean`

**`Description`**

If set to true it will try to apply all current global parameters to the loaded object

___

## cameraRestriction

• `Optional` **cameraRestriction**: `number`

**`Description`**

When set this param restricts the camera rotation to the given angle (e.g. 45 degree), this overrides minHorizontalCameraAngle and maxHorizontalCameraAngle
default: not set -> no camera restriction
usage: cameraRestriction=45

**`Groups`**

scene-settings

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

___

## floorMaterialsTag

• `Optional` **floorMaterialsTag**: `string`

**`Deprecated`**

**`Description`**

define which floors to load

___

## highlighting

• `Optional` **highlighting**: `string`

**`Description`**

Sets the behavior of the highlighting of a hovered component.
usage: highlighting=smart

___

## horizontalCameraAngle

• `Optional` **horizontalCameraAngle**: `number`

**`Description`**

Sets the default/initial horizontal camera angle (yaw)
default: -30
usage: horizontalCameraAngle=45

**`Groups`**

scene-settings

___

## initialFloorMaterial

• `Optional` **initialFloorMaterial**: `string`

**`Deprecated`**

**`Description`**

Set the floor material which is used when loading the configurator
For different options see [@roomle/web-sdk/configurator-core/src/environment/dynamic-environment-setting-loader#EnvironmentSetting](../modules/common_core_src_utils_shims.md)

___

## ls

• `Optional` **ls**: `string`

**`Description`**

Load a predefined light setting, eg: ls=sofa

**`Groups`**

scene-settings

___

## maxHorizontalCameraAngle

• `Optional` **maxHorizontalCameraAngle**: `number`

**`Description`**

When set this param restricts the right/horizontal camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: maxHorizontalCameraAngle=45

**`Groups`**

scene-settings

___

## maxVerticalCameraAngle

• `Optional` **maxVerticalCameraAngle**: `number`

**`Description`**

When set this param restricts the up/vertical camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: maxVerticalCameraAngle=45

**`Groups`**

scene-settings

___

## minHorizontalCameraAngle

• `Optional` **minHorizontalCameraAngle**: `number`

**`Description`**

When set this param restricts the left/horizontal camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: minHorizontalCameraAngle=45

**`Groups`**

scene-settings

___

## minVerticalCameraAngle

• `Optional` **minVerticalCameraAngle**: `number`

**`Description`**

When set this param restricts the down/vertical camera rotation to the given angle (e.g. 45 degree)
default: not set -> no camera angle restriction
usage: minVerticalCameraAngle=45

**`Groups`**

scene-settings

___

## offlineSync

• `Optional` **offlineSync**: `string`

**`Deprecated`**

**`Description`**

Download all necessary files to run the configurator in offline mode

___

## showInfos

• `Optional` **showInfos**: `boolean`

**`Deprecated`**

**`Description`**

Shows partlist if there are no prices

___

## showPrice

• `Optional` **showPrice**: `boolean`

**`Deprecated`**

**`Description`**

Show price label using prices from configuration script

___

## transparentBackground

• `Optional` **transparentBackground**: `boolean`

**`Description`**

If set to true, the background is transparent and allows elements behind the configurator to be visible through the scene.
usage: transparentBackground=true

**`Groups`**

scene-settings

___

## transparentHighlighting

• `Optional` **transparentHighlighting**: `boolean`

**`Description`**

If set to true, components which are between the camera and the selected component/preview will be rendered transparent
usage: transparentHighlighting=true

**`Groups`**

scene-settings

___

## verticalCameraAngle

• `Optional` **verticalCameraAngle**: `number`

**`Description`**

Sets the default/initial vertical camera angle (pitch)
default: 10
usage: verticalCameraAngle=45

**`Groups`**

scene-settings

___

## zoomDistance

• `Optional` **zoomDistance**: `number`

**`Description`**

Set the distance to which the user can zoom (in centimeters).
default: object size divided by 10 or 10 cm
usage: zoomDistance=3

**`Groups`**

scene-settings
