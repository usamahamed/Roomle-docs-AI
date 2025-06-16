# Types.UiInitData

[Embedding API Reference](../) / [Modules](../modules/) / [types](../modules/types.md) / UiInitData

## Interface: UiInitData

[types](../modules/types.md).UiInitData

### Hierarchy

* `InitDataDefinition`
*   `GlobalInitDataDefinition`

    ↳ **`UiInitData`**

### Table of contents

#### Properties

* [api](types.UiInitData.md#api)
* [applyCurrentGlobalParameters](types.UiInitData.md#applycurrentglobalparameters)
* [autoStart](types.UiInitData.md#autostart)
* [buttons](types.UiInitData.md#buttons)
* [catalogRootTag](types.UiInitData.md#catalogroottag)
* [configureInRoom](types.UiInitData.md#configureinroom)
* [constructionRootTag](types.UiInitData.md#constructionroottag)
* [customTutorials](types.UiInitData.md#customtutorials)
* [deeplink](types.UiInitData.md#deeplink)
* [doorMaterialRootTag](types.UiInitData.md#doormaterialroottag)
* [elements](types.UiInitData.md#elements)
* [emails](types.UiInitData.md#emails)
* [extCatalog](types.UiInitData.md#extcatalog)
* [featureFlags](types.UiInitData.md#featureflags)
* [firstPersonView](types.UiInitData.md#firstpersonview)
* [floorMaterialRootTag](types.UiInitData.md#floormaterialroottag)
* [fonts](types.UiInitData.md#fonts)
* [gaConsent](types.UiInitData.md#gaconsent)
* [groupPartList](types.UiInitData.md#grouppartlist)
* [helpcenter](types.UiInitData.md#helpcenter)
* [logCanvasCoords](types.UiInitData.md#logcanvascoords)
* [materialMultiSelect](types.UiInitData.md#materialmultiselect)
* [materialRootTag](types.UiInitData.md#materialroottag)
* [measurementSystem](types.UiInitData.md#measurementsystem)
* [mobileLandscape](types.UiInitData.md#mobilelandscape)
* [objectMaterialRootTag](types.UiInitData.md#objectmaterialroottag)
* [overrideServerUrl](types.UiInitData.md#overrideserverurl)
* [rotationSnapDegrees](types.UiInitData.md#rotationsnapdegrees)
* [saveToIdb](types.UiInitData.md#savetoidb)
* [searchThreshold](types.UiInitData.md#searchthreshold)
* [shareUrl](types.UiInitData.md#shareurl)
* [skin](types.UiInitData.md#skin)
* [startInDetail](types.UiInitData.md#startindetail)
* [state](types.UiInitData.md#state)
* [thumbnails](types.UiInitData.md#thumbnails)
* [translations](types.UiInitData.md#translations)
* [unit](types.UiInitData.md#unit)
* [useLocalRoomle](types.UiInitData.md#uselocalroomle)
* [variants](types.UiInitData.md#variants)
* [viewer](types.UiInitData.md#viewer)
* [wallMaterialRootTag](types.UiInitData.md#wallmaterialroottag)
* [windowMaterialRootTag](types.UiInitData.md#windowmaterialroottag)
* [zIndex](types.UiInitData.md#zindex)

### Properties

#### api

• `Optional` **api**: `boolean`

**`Description`**

if set to true you can load the configurator in an iframe.src but without any embedding lib This is needed if you do not want to interact with the configurator and only want to use it to view 3d content. Imagine it then as a  tag for 3d content

***

#### applyCurrentGlobalParameters

• `Optional` **applyCurrentGlobalParameters**: `boolean`

**`Description`**

set this flag to false and global parameters are not applied when switching variants

**Overrides**

InitDataDefinition.applyCurrentGlobalParameters

***

#### autoStart

• `Optional` **autoStart**: `boolean`

**`Description`**

when the configurator/Room Designer is embedded into a too small space we start it in view only mode, then the user has to click the "start" button and the configurator/Room Designer expands over the whole window. This is great for UX but it's not always ideal in every use case. Therefore you can turn on/off this behavior now with this toggle.

***

#### buttons

• `Optional` **buttons**: `Object`

**`Description`**

show and hide certain buttons

**Index signature**

▪ \[key: `string`]: `boolean` | `undefined`

**Type declaration**

| Name                    | Type      |
| ----------------------- | --------- |
| `2dview?`               | `boolean` |
| `3dview?`               | `boolean` |
| `add_measurement_line?` | `boolean` |
| `add_room?`             | `boolean` |
| `add_to_basket?`        | `boolean` |
| `addons?`               | `boolean` |
| `ar?`                   | `boolean` |
| `close_view?`           | `boolean` |
| `configure_in_room?`    | `boolean` |
| `dimensions?`           | `boolean` |
| `export3d?`             | `boolean` |
| `firstperson?`          | `boolean` |
| `fullscreen?`           | `boolean` |
| `help_center?`          | `boolean` |
| `load_product?`         | `boolean` |
| `multiselect?`          | `boolean` |
| `partlist?`             | `boolean` |
| `partlist_planner?`     | `boolean` |
| `partlist_print?`       | `boolean` |
| `pauseconfigure?`       | `boolean` |
| `productlist?`          | `boolean` |
| `redo?`                 | `boolean` |
| `renderimage?`          | `boolean` |
| `requestplan?`          | `boolean` |
| `requestproduct?`       | `boolean` |
| `resetcamera?`          | `boolean` |
| `rotate?`               | `boolean` |
| `savedraft?`            | `boolean` |
| `snapping?`             | `boolean` |
| `startPlanner?`         | `boolean` |
| `startconfigure?`       | `boolean` |
| `undo?`                 | `boolean` |
| `view_mode?`            | `boolean` |

***

#### catalogRootTag

• `Optional` **catalogRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of your catalog you can define multiple root tags by using \[] e.g.: catalogRootTag\[]=123\&catalogRootTag\[]=456

**`Groups`**

room-designer

***

#### configureInRoom

• `Optional` **configureInRoom**: `boolean`

**`Description`**

For use with planner only, if set to true the room will be shown while configuring a configurable object.

***

#### constructionRootTag

• `Optional` **constructionRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the construction elements, default is "construction\_moc" when moc=true and null otherwise you can define multiple root tags by using \[] e.g.: constructionRootTag\[]=123\&constructionRootTag\[]=456

**`Groups`**

room-designer

***

#### customTutorials

• `Optional` **customTutorials**: [`TutorialData`](../modules/types.\_internal\_.md#tutorialdata)\[]

**`Description`**

Specify custom tutorials to be shown in the tutorial/helpcenter. Should be of the following format: \[{ "en": { // mandatory "link": "SOME\_LINK", "label": "first step", "desc": "some description", }, "de": { // optional "link": "SOME\_LINK", "label": "first step", "desc": "some description", }, "SOME\_OTHER\_LOCALE": { // optional --> SOME\_OTHER\_LOCALE should be a valid locale from: https://en.wikipedia.org/wiki/List\_of\_ISO\_639\_language\_codes "link": "SOME\_LINK", "label": "first step", "desc": "some description", }, "scope": "room-designer", // optional "platform": "desktop" // optional }]

***

#### deeplink

• `Optional` **deeplink**: `string`

**`Description`**

Set this parameter to use your custom share url. The provided url has to contain a configuration id parameter (`#CONFIGURATIONID#`) which will be replaced with the real configuration id. default: not set -> use Roomle short url service (linking to roomle.com domain) usage: http://www.example.com/configurator?id=#CONFIGURATIONID#

***

#### doorMaterialRootTag

• `Optional` **doorMaterialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used for doors you can define multiple root tags by using \[] e.g.: doorMaterialRootTag\[]=123\&doorMaterialRootTag\[]=456

**`Groups`**

room-designer

***

#### elements

• `Optional` **elements**: `Object`

**`Description`**

show and hide certain elements

**Index signature**

▪ \[key: `string`]: `boolean` | `undefined`

**Type declaration**

| Name          | Type      |
| ------------- | --------- |
| `bottom_bar?` | `boolean` |

***

#### emails

• `Optional` **emails**: `boolean`

**`Description`**

if this is set to true the "save draft" will be done by sending an e-mail

***

#### extCatalog

• `Optional` **extCatalog**: `string`

**`Description`**

use an external catalog

**`Groups`**

room-designer

***

#### featureFlags

• `Optional` **featureFlags**: [`UiFeatureFlags`](types.\_internal\_.UiFeatureFlags.md)

**`Description`**

this is an object which is for Roomle internal usage, we can set feature flags so that we can ensure a smooth transition between different versions of our configurator

**Overrides**

InitDataDefinition.featureFlags

***

#### firstPersonView

• `Optional` **firstPersonView**: `boolean`

**`Description`**

Shows or hides the first person mode toggle button in the sidebar menu

**`Groups`**

room-designer

***

#### floorMaterialRootTag

• `Optional` **floorMaterialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used for floors you can define multiple root tags by using \[] e.g.: floorMaterialRootTag\[]=123\&floorMaterialRootTag\[]=456

**`Groups`**

room-designer

***

#### fonts

• `Optional` **fonts**: `Object`

**`Description`**

specify a custom font to be used. When using a custom font make sure you understand the legal implications. For example: copyrigth law, data protection law, etc.

* source needs to be a valid url to a font file CSS. Similar to what Google Fonts provides. For an example see: https://fonts.googleapis.com/css?family=Lato:300,400,700\&display=swap\&subset=latin-ext The font should provide the following weights: 300, 400, 700 If you use the URL as a query param make sure to use encodeURIComponent
* family needs to be a valid CSS font family name. If you use font family as a query param make sure to use encodeURIComponent

**Type declaration**

| Name      | Type     |
| --------- | -------- |
| `family?` | `string` |
| `source?` | `string` |

***

#### gaConsent

• `Optional` **gaConsent**: `boolean`

**`Description`**

set this flag to false if the user did not give the consent to Analytics

***

#### groupPartList

• `Optional` **groupPartList**: `boolean`

**`Description`**

set this flag to true if you want to group the part list by main components

***

#### helpcenter

• `Optional` **helpcenter**: [`HelpCenterSetting`](types.HelpCenterSetting.md)

**`Description`**

Specify which context (i.e room designer or configurator or neither) to show the tutorial/helpcenter button in the sidebar.

***

#### logCanvasCoords

• `Optional` **logCanvasCoords**: [`LogLevelCanvasCoords`](../modules/types.md#loglevelcanvascoords)

**`Description`**

if set to true the coords of the clicks on the canvas will be logged to the console

***

#### materialMultiSelect

• `Optional` **materialMultiSelect**: `boolean`

**`Description`**

set this flag to true if you want that a user can select more than one material category at once

***

#### materialRootTag

• `Optional` **materialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used, this sets floorMaterialRootTag, wallMaterialRootTag, doorMaterialRootTag, windowMaterialRootTag, objectMaterialRootTag if they are not set you can define multiple root tags by using \[] e.g.: materialRootTag\[]=123\&materialRootTag\[]=456

**`Groups`**

room-designer

***

#### measurementSystem

• `Optional` **measurementSystem**: [`Enumify`](../modules/exposed\_api.\_internal\_.md#enumify)<{ `IMPERIAL`: `"imperial"` = 'imperial'; `METRIC`: `"metric"` = 'metric' }>

**`Description`**

sets the measurement unit to be displayed in the planner and configurator UI. imperial sets measurementUnit to inches if no unit is passed metric sets measurementUnit to cm if no unit is passed if unit is not a metric unit (i.e. inch) but unitType=metric it will default to a metric unit (CM) and vice-versa

***

#### mobileLandscape

• `Optional` **mobileLandscape**: `boolean`

**`Description`**

set this flag to true if you want to configure on small devices in landscape as well this is relevant for things like Rubens Admin, where the configurator is embedded into a very small div

***

#### objectMaterialRootTag

• `Optional` **objectMaterialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used for objects you can define multiple root tags by using \[] e.g.: objectMaterialRootTag\[]=123\&objectMaterialRootTag\[]=456

**`Groups`**

room-designer

***

#### overrideServerUrl

• `Optional` **overrideServerUrl**: `string`

**`Description`**

use another server url for the embedding

***

#### rotationSnapDegrees

• `Optional` **rotationSnapDegrees**: `number`

**`Description`**

Sets the rotation indicator to snap a plan object to the nearest supplied degree value while being rotated, default is 10 degrees. Supplying 0 will allow the rotation indicator to rotate plan object freely.

***

#### saveToIdb

• `Optional` **saveToIdb**: `boolean`

**`Description`**

Enables saving changes to the current configuration and or plan to indexedDB storage locally in the browser, reloading the page will prompt the user to restore the saved configuration/plan.

* The data saved in indexedDB is stored in a key-value pair under the database 'rml-idb' and the table named 'rml-config-store' where the key consists of the current hostname (if inside an iframe it will be 'window.referrer'), the configurator ID and the plan or configurator ID separated by underscores (\_).
* This key format allows saved data to be scoped by the aforementioned IDs and hostname.
* The data stored in 'rml-config-store' follows the following format: { "id": "example.com\_exampleConfiguratorId\_examplePlanOrConfigurationId", "data": "<...configurationOrPlanDataString...>", "lastModified": "2024-04-16T04:54:48.825Z" "referrer": "example.com" }
* Any data in the 'rml-idb' database older than 30 days is removed automatically when the app loads.

***

#### searchThreshold

• `Optional` **searchThreshold**: `string`

**`Description`**

define when you want to show the search bar, currently we hide the search bar until there are more than 10 elements. since it is a query param the value is a string. Please only provide a string that can be parseInt(x,10) otherwise it will be undefined behavior

***

#### shareUrl

• `Optional` **shareUrl**: `string`

**`Deprecated`**

**`Description`**

for details see deeplink, the only change is that the placeholder is \<CONF\_ID> here instead of #CONFIGURATIONID#

***

#### skin

• `Optional` **skin**: [`EmbeddingSkin`](types.EmbeddingSkin.md)

**`Description`**

skin the embedding instance

***

#### startInDetail

• `Optional` **startInDetail**: `boolean`

**`Description`**

set this flag to true if you want to start the moc in configuring mode if there is only one object in the scene

**`Groups`**

room-designer

***

#### state

• `Optional` **state**: [`UiState`](types.UiState.md)

**`Description`**

use this param to initialize the configurator ui state, like opening certain views, camera modes, etc

**`Groups`**

room-designer

***

#### thumbnails

• `Optional` **thumbnails**: [`ThumbnailsSettings`](types.ThumbnailsSettings.md)

**`Description`**

the query param thumbnails will be converted to the following object:

```
{
  collapsed: { desktop: ViewTypeState; mobile: ViewTypeState };
  expanded: { desktop: ViewTypeState; mobile: ViewTypeState };
}
```

You have separate options to specify the settings for the thumbnails e.g.: ?thumbnails=big this sets all the values to "big" or you do: ?thumbnails.collapsed=big\&thumbnails.expanded=list this sets the collapsed state to "big" and the expanded state to "list". Or you can specify the full object like: ?thumbnails.collapsed.desktop=big\&thumbnails.collapsed.mobile=small\&thumbnails.expanded.desktop=list\&thumbnails.expanded.mobile=big

the following values for ViewTypeState are valid: list | small | big for the collapsed state list will have no effect and just be rendered like small. On mobile collapsed will only use small

***

#### translations

• `Optional` **translations**: `any`

**`Description`**

override translations to change labels for some or all languages. Example:

```
  "translations": {
    "en": {
      "params": {
        "request-product": "Add to cart",
      }
    }
  }
```

You can find all labels here: [Base.json](../translate-labels/)

***

#### unit

• `Optional` **unit**: [`Enumify`](../modules/exposed\_api.\_internal\_.md#enumify)<{ `CM`: `"cm"` = 'cm'; `FEET`: `"feet"` = 'feet'; `INCH`: `"inch"` = 'inch'; `INCH_FEET`: `"inchfeet"` = 'inchfeet'; `MM`: `"mm"` = 'mm' }>

**`Description`**

sets the measurement unit to be displayed in the planner and configurator UI.

**Overrides**

InitDataDefinition.unit

***

#### useLocalRoomle

• `Optional` **useLocalRoomle**: `boolean`

**`Description`**

use a local version of the embedding

***

#### variants

• `Optional` **variants**: [`VariantsMap`](types.VariantsMap.md)

**`Description`**

Define to which variants you can switch from which root component id. This is a simple JS object which is used like a map, e.g.: '"usm:frame": "DB\_Start\_ohne\_Element"' now if a configuration with root component usm:frame is loaded all the items from the tag "DB\_Start\_ohne\_Element" are now shown as variants

***

#### viewer

• `Optional` **viewer**: `boolean`

**`Description`**

start embedding instance only as viewer

***

#### wallMaterialRootTag

• `Optional` **wallMaterialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used for walls you can define multiple root tags by using \[] e.g.: wallMaterialRootTag\[]=123\&wallMaterialRootTag\[]=456

**`Groups`**

room-designer

***

#### windowMaterialRootTag

• `Optional` **windowMaterialRootTag**: `string` | `string`\[]

**`Description`**

define the root tag of the materials that can be used for windows you can define multiple root tags by using \[] e.g.: windowMaterialRootTag\[]=123\&windowMaterialRootTag\[]=456

**`Groups`**

room-designer

***

#### zIndex

• `Optional` **zIndex**: `number`

**`Description`**

set the z-index of the embedding instance
