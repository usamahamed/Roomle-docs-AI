# IDM Conversion

The Roomle Importer converts the IDM data into Roomle data. A detailed description of it can be found below.

Items (Roomle components) are separated in SERIES. From this the SERIES_NO is used to ensure that there are no duplicate itemIds by using TYPE_NO from the ITEM element.
Therefore componentIds are:

    "SERIE_NO"_"TYPE_NO"
    
## Merge with existing components
To make custom script improvements possible, the importer takes existing components from the targetCatalog and merges the existing data into the newly imported components if a component with the same extId exists.
* existing geometry is replacing any new geometry (since IDM has no geometry information)
* within onUpdate all code within ```/*BEGIN CUSTOM CODE*/ <code to be merged> /*END CUSTOM CODE*/``` is copied to the new component
* subcomponents whos internalId start with "custom_" are copied completly

## Component conversion process
The conversion start by filling the maps from the data contained in the  Global Definitions, Feature definitions and Price Definitions.
When iterating through Series -> ProductGroups -> Items, lists are populated with references. When in the item, they are added to the IDMItem data object they belong to.
At this point, the IDMItem data object is converted into the Component data object.
During this conversion, the references are accessed from the maps creating all the parts needed in the Component. 
Additionaly, during the conversion to ComponentDefinition, also the subComponents from the IDMPartLists and the Prices are added.

For the PartLists the subComponents from the IDMPartLists are added, if the Item references one of them and the logic to the onUpdate.
For the Prices, the Price data objects for the Component are added and the logic for the price calculation is added to the onUpdate. 

### combined features
The converter processes Combined Feature and associated Detail Features. Depending on the value of the Combined Feature, the relevant Detail Features are set to appropriate values.
If the Detail Features of a Combined Feature are not already added from a different source (e.g. Feature Class), the referenced Detail Features are added to the list of needed features for an item.

### Style conversion
Styles for IDM kitchen are processed if present.
The IDM Feature No 1 may reference styles. If that is the case, Styles are added as a new parameter in component.
Specific value for Style parameter is set based on value of IDM Feature 1. After Style Value is changed, other features' values may be also set based on the Default Options defined by the Style.

## Feature conversion

In IDM Features define the variation types of elements. They are converted to roomle parameters. 

### Material parameters

It is possible to define features as material features for the converter. The OPTION_KEYs in material features get converted to combinedIds (`catalogExtId:OptionKey`) everywhere in the conversion.

If converter is not set to ignore materials, every OPTION in material features is also converted to a Material for the import.

A feature is considered a material feature if any of the conditions is fulfilled:
* `FEATURE_TYPE` is `C` 
* any OPTION of the feature has a `MATERIAL_REF`
* it's IDM Kitchen with no materialFeature override and the FEATURE_NO is in (101,102,103,104,111,112,113,114,121,122,123,124,151,153,155,161,171,202,203,205,207,208,301,302,401,411,501,503,505,507,509,511,513,515,517,521,523,525,527,551,561,563,565,601,603,605,607,621,623,625,627,651,701,703,801,802,851,852,853,901,931,933,935,937,939,951,953,955,957,959,961,963,965,967,969,971,973,975,977,979,981,983,985,987,989,998,999)
* it's IDM Kitchen with materialFeature override and the FEATURE_NO is in the provided list

### inherited variants

Per default, partlist entries (PART_LIST_POS) in IDM are converted to subcomponents in roomle. Those subcomponents have assignments for all parameters.

If a PART_LIST_POS has CONFIGURATION_MODE is set to 1 (fully configurable), all parameters of the subcomponent are defined as superseding instead of assignments, with custom key in the parent and a special group to for the subcomponent.

## Material conversion process
The materials are converted from the IDMOption data objects referenced in the IDMFeature data object.
While iterating through all features in the catalog, when the idmFeature is of Type.COLOR, the IDMOptions connected to this feature are collected, iterated (using a map with key extId to avoid duplicates) and converted to our Material DTO. 

## Logic conversion

Within IDM the list of possible parameter-values can be defined via Decisions or Restrictions. During the conversions both options result in conditions on the ValueObjects. 

Decisions in IDM also allow to define actions based on parameter combinations. Such logic is converted to script blocks within onUpdate of the componentDefinition in roomle

### Decisions

 A decision defines a list of possible parameter-value combinations in a table form:
The headers are the parameters that are affected by the decision. Each row defines a set of value combinations. Depending on the usage of the decision, this has different implications.

#### value definition
Decisions can be used to decide which values are possible together (decision type 0 and 1). In this case each row of a decision defines a valid(in case of type 1) or invalid (type 0) combination of parametervalues. 

for a type 1 decision on parameter A, B and C. with a row defining A1,A2 for A, B2 for B and C1,C2,C3 for C this means that C2 is valid if (A1 or A2) is selected in A and B2 is selected in B. for type 0 this would mean that C2 is only possible if the A is not A1 or A2, or B is not B2.

If multiple decisions apply to the same feature, they are connected with OR. **ATTENTION: The IDM dataformat does not specify any defined behaviour here, so this might be interpreted differently by different dataproviders.**

#### actions
Decisions can be used to trigger conditional actions (enable/disable other decisions, set features visible/invisble, set values of features...). In this case each row also contains a list of actions. these actions are to be executed if the value-combination matches the current parameter values.

#### pos_count of partlist

Decisions are also used to define the count within a partlist. These are action-decisions with the special action SET_POS_COUNT

#### conditions on Detail information

DETAIL_INFO (we use it for SVGs) also have decisions to decide if they apply to the current state. The detail_info is used if any of the option-combinations fit the current parameter values.

### Restrictions

Restrictions can be seen as "simplified" version of Decisions. There are no actions, partlist impact or effects on Detail information from Restrictions. 

Restriction can either define the list of possible values of parameters, or change the possible sizes of the item. `VALIDATION_TYPE` = 0 defines value restrictions, `VALIDATION_TYPE` = 1 defines dimension restrictions.

#### Value restrictions

Restrictions can either define the possible combinations (`TEST_ID`= 1) or define combinations that are not allowed (`TEST_ID`= 0). With that they behave same as Decisions with `DECISION_TYPE` = 0 or 1 respectively.

#### Dimension restrictions

If the Restriction is affecting the possible dimension of an item, the converter adds the needed code to `onUpdate` of the roomle component definition which sets the internal variables accordingly.
The Restriction is converted to a Decision with `DECISION_TYPE` = 2 and the dimensions are handled in the same way as Actions in Decisions.

#### Style Restriction

Syles may reference Restrictions. Style Restrictions may be active or inactive depending on the selected Style.
If the Style Value changes, first, all restrictions are disabled and then the appropriate restrictions are enabled in `onUpdate`.

## Mandatory Items

IDM allows to define mandatory item groups within an item. This means that the referenced item(s) must be added to the configuration when the original item is added.

This specification is converted to roomle script via `requestDockItem`: Each MandatoryItemGroup is converted to a mandatory-item-group component (similar to type components that are defined via extension files). If all referenced Item in the mandatory group provide the same child-docking that also fits a parent-docking on the main item, this dockpoint is used. otherwise an additional docking is added to the mandatory-item-group and the main component and used. These dockings keep track if the mandatory item is docked and if not, it is forced via `requestDockItem` in the onUpdate.

In case of merged main components, the mandatory items might change due to change of the modell in the main component. For this case, the mandatory-item-group component remembers the model-value it was docked to and removes itself if this changes. this way the docking is freed up and can be used by the previously described logic.

Since all items in the group are merged to one mandatory-item-group component we only dock 1 component per group and then the user can select which item they want from the parameters.

In case of a quantity > 1 in the group, we create an intermediate "hub"-component which is docked to the main component as described before. This hub has no geometry or parameters and only provides dockpoints in the defined number of the quantity (depending on the item which is selected) and forces the referenced items to be docked to it. 

## Optional Items

IDM allows to define optional item groups within an item. This means that the referenced item(s) may be added to the main item.

The optional items are added as possible dockable add-ons. The referenced items receive a child docking point, while the main item receives a parent docking point for each optional group.
Each docking point is reserved for items in the appropriate optional group.

In case of merged main components, the parent docking points are additionally activated based on the selected IDM model.

In case of single-select groups (MULTI_SELECT = false), a selection parameter is added to the main component. Through this component, the user can select which optional item should be added.
If this selection changes, the currently docked item is removed, and new item is added via `requestDockItem` call.