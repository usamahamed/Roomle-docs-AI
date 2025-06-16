# IDM extensionfiles for the Roomle importer

To make use of Roomle's wide range of UX functionalities, it is necessary to add information to the IDM export (the xml file) as those informations are not part of the IDM format. This additional information can be provided via extension files (*.csv) as defined below.

## Catalog definitions 

File: `catalogDefinition.json`

Contains global data regarding the catalog. 

`priceLists` defines a list of countries for which the prices in this import should be used. "default" adds the prices to the default-list which is used by Roomle if no price is set for the current country.

`activateIDMMasks` (default: false) defines if the dockmaskhandling via IDM features (AVx values) should be activated.

`materialFeatures` (default: list of color features for IDMK, empty for IDMP and IDML) defines the list of features that must be considered as material features. 


```json
{
  "priceLists":["at","de","default"],
  "activateIDMMasks": true,
  "materialFeatures": [ 2, 3 ]
}
```

## Translations

File: `translations.csv`

To make translations reusable, its possible to provide one global translations file. This file can contain labels in multiple languages for a list of translationKeys. Those keys may then be referenced in other extensionfiles to use these translations

```csv
translationKey,label_de,label_en,
seatWidth,Sitzbreite,Seat width,
width,Breite,Width,
changeElementType,Elementtyp tauschen,Change element type,
customization,Anpassung,Customization,
```

## Parameter groups 

File: `parameter_<SeriesID>.csv`

IDM does not include a concept of grouping parameters. There are FeatureClasses but they are only structural definitions without labels etc. Therefore they cannot be used for the Rubens UI.

To make use of Roomle's parameter groups, you must provide an extensionfile including the following information:

* **First block** (identified by a line starting with `internalGroupKey` ): defines all wanted groups. Each group is defined by a internalGroupKey, which is preferably an english word, a parameter group label, the respective translations and a sort number (optional). If no sort-value is provided, the position in the block is used.

* **Second block** (identified by a line starting with `parameter` ) defines the parameters with their logic overrides and group connection. The column `parameter` can include the label of an IDMFeature or the IDMFeatureNumber (recommended) itself. Within the next two columns `local` and `global` the parameter levels can be overriden. `internalGroupKey` defines to which group the parameter belongs. 
In `defaultValue` a default value for this parameter can be set. This value must be an idm optionKey (can include spaces). The value will be processed as all optionKeys are (spaces and some special characters removed etc.). Please note that there exists idm logic to set the default value via decisions. This logic is not affected by this setting.

```csv
internalGroupKey,label_de,label_en,sort,
customization,Anpassung,Customization,5
material,Material,Material,4
legs,Füße,Legs,3
elementType,Elementtyp,Element Type,6
armrest,Seitenteil,Armrest,2
accessories,Accessoires,Accessories,1
​
parameter,local,global,forcedImplicit,visible,internalGroupKey,defaultValue,
Komfort,x,x,,x,customization,,
Bezug,x,x,,x,material,idmOptionKey1,
Material,,x,,x,legs,,
Element tauschen,x,,,x,customization,,
Seitenteil,x,,,x,armrest,,
Breite,x,,,x,customization,,
Rücken,x,,,x,customization,,
Sitztiefe,x,,,x,customization,idm Option Key 2,
Beinauflage,x,,,x,customization,,
Kopfstütze,x,,,x,customization,,
Fußvariante,x,,,x,legs,,
Sitzhöhe,x,,,x,legs,,
Kissenempfehlung,x,,,x,accessories,,
Bezug Kissenempfehlung,x,,,x,accessories,,
```

## Merging to type-objects 

File: `metacomponents_<SeriesID>.csv`

IDM includes all objects as seperate items. For usability it is often useful to combine them together for an easy switch in the interface.
For this two levels of combination are provided: Merging IDM items together by types (idm-type or customType) and then combining a list of types to one metacomponent.

* **First block** (identified by a line starting with `componentId` ) contains the metacomponents that should be created. Each line defines one such component with the elements as idmTypes (and all following columns) defining what types should be merged.


Types can either be the type number of an idmType or a reference to a customType defined in the ...

* **Second block** (identified by a line starting with `customType` ) contains a list of custom types.
Each line defines one customType with the type identifier, possible labels for the type and the list of models (column `modells` including all following colums) which belong to this type.
The order in which the modells are shown in the modellParameter of the created type-component is defined by the order how the modells appear in this list.

```csv
componentId, label_de, label_en, groupOfTypeParam, typeParamLabel_de, idmTypes,
SofaSystem, Sofa System, sofasystem, typechange, Elementtyp tauschen, 5, eck, anreihbank, anreihsessel, anreihsofa, abschluss,

customType, sort, label_de, groupOfModellParam,modellParamLabel_de, modells
eck, 1, Eck Anreihbank, modell, Ausführung, 0000099018 modellLAbelKEy, 0000099019, 0000099020, 0000099025, 0000099014, 0000099015, 0000099016
anreihbank,3,Anreihbank, modell, Ausführung, 0000099021, 0000099024, 0000099017
anreihsessel,2, Anreihsessel, modell, Ausführung,  0000099022, 0000099023
anreihsofa,4,AnreihSofa,modell, Ausführung, 0000099007, 0000099008, 0000099009, 0000099010, 0000099011,
abschluss, 5, Abschlusssofa, modell, Ausführung, 0000099006, 0000099012, 0000099013, 
```

<!--
## Additional Dockings

IDM only provides specific dockpoints. For UX purposes, sometimes additional dockings like for accessories or extra cushions, are wanted. Those points (parent and child) needs to be defined via extensionfiles: mask, position and rotation.

## Parameters for function-visualization

The existence of a function (like foldable back) is defined in IDM. But in the Roomle interface we also want to show how this function works/looks: f.e. show the back in a folded and unfolded state.
The extension file will define all possible parameters for the function-states, and then a block connecting the idm-modells to the parameters.

Furthermore there are functions like a rotatable table top. This functions are not defined in the IDM. Therefore this functionality has to be added by the importer. Extension file: parameter type (e.g. slider), possible values have to be defined and assigned to the correct model.


## Custom subcomponents

For example `cushion recommendations`.

Sometimes it is required to have a parameter on a furniture which defines additional elements to appear. Those elements should also be shown in the partlist, and their parameters be available for selection.

The extension file will define parameter to decide the number of subelements and which subelements there are. It should be possible to use merged elements or metacomponents as subelements here.

-->

<!--
svgOverrides.csv - HIDDEN FEATURE, don't document it in the official documentation
-->


## Custom dock mapping

File: `dockings_<SeriesID>.csv`

With this file you can change and extend docking-definitions from IDM. It is possible to map an IDM dockpoint to another dockpoint (f.e. AVC1 to AVL). This will keep everything else untouched and only switch the dockmask of the roomle-component to the according mask. Therefore it is possible to have multiple dockings with the same "IDM-mask" in rml. f.e. when there is already an AVL and you add a mapping of AVC1 to AVL.
It is also possible to restrict the mapping to being only a parent or a child-docking by adding `_parent` or `_child` to the target mask. In this case, only the defined version of the docking will be added to the component.

In general, the mapping applies to the whole series unless `restrictedToItemIds` is set. If the mapping is restricted to IDM itemIds, only those items are affected by the mapping.

It is also possible to define a flipped version as the input by adding `_flipped` to conversionFrom. In this case the resulting docking takes the AV-line from the SVG in the opposite direction for the conversion to roomle. Flipping is only supported for AVC dockings

It is not possible to map one IDM docking to multiple rml dockings within one IDM Item. Meaning you can't create f.e. an AVL and an AVR from one AVC02. It is only possible to us an AVC and a flipped AVC for different target dockings.

`additionalCondition` can contain a roomle expression which is added to the generated conditions of the dockpoints in the roomle script. The resulting condition will be `(<additionalCondition>) && (<other generated conditions>)`. 
If there exists an item-restricted adaption for a dockpoint, all additionalConditions for this dockpoint in this series (even for items who use a non-restricted mapping) are evaluated within the onUpdate of the component.
For dockpoints without item-restrictions, the additionalCondition is evaluated in the dock-condition directly. So only in this case have you access to the connection context.
This is necessary cause different types might have different conditions.

`shouldPropagateAVValueChange` defines if this dockpoint should be able to set the AVValue on the other side. This happens if parameters get changed such that the current masks don't fit anymore and the docked component would need to change. If this is not wanted (aka if the other side should not be changed) then this needs to be set to `false`. Default is false for al AVUs and true for everything else. Empty means the default is used.

```csv
conversionFrom,conversionTo,restrictedToItemIds,additionalCondition,shouldPropagateAVValueChange
AVC1,AVR,,hasNeighbourOnAVL == false,
AVC2,AVL_parent,,idmFeature2 == 'red' || idmFeature2 == '45',
AVC3,AVL, 0009123 0009234,,
AVO1_flipped,AVR_child,,,false

```