# Roomle Component Definition Reference

This document provides an overview of all available keys in the Component Definition JSON objects and reference for the RoomleScript language.

## Component Definition Objects

---
### **`Component`**

####  `"id"` : String
>Defines componentId, which serves as the unique key across the whole RAPI database. It is composed of `catalogueId` and `externalId` in format `catalogueId:externalId`.
>
>File path of the file that contains the component definition should end with `<catalogueId>/components/<externalId>.json`.
>
>This is the only mandatory member of a Component Definition.

#### `"parameters"` : [[Parameter](#Parameter)]

> Holds list of [Parameters]. 
>
> Parameters are displayed at the right side of the user interface in the configurator.

#### `"parameterGroups"` : [[ParameterGroup](#ParameterGroup)]

> Holds list of [ParameterGroups](#ParameterGroup).
>
> Parameters and possibleChildren can be categorized to groups defined in this array.


Component : {
  "valid": Script<Boolean>?(true),  
  "label": Script<String>?,  
  "labels": { (Language(_Country)?: String)+ },  
  "parameterGroups": [ ParameterGroup* ]?,  
  "possibleChildren": [PossibleChild*],  
  "parentDockings": ParentDockings?,  
  "childDockings": ChildDockings?,  
  "siblings":[ SiblingPoint* ]?,  
  "addOnSpots":[ AddOnSpot* ]?,  
  "geometry": Script,  
  "geometryHD": Script?,  
  "previewGeometry": Script,  
  "environmentGeometry": Script?,  
  "packageSizes": Array<Integer>,  
  "packaging": [Packaging+],  
  "dimensioning": [ Dimensioning*]?,  
  "pricing": [ PriceList+ ],  
  "articleNr":Script<String>,  
  "subComponents":[SubComponent*],  
  "onUpdate":Script?,  
  "planInteraction": PlanInteraction,  
  "plugin-data": PluginData?  
}

---

### Parameter <a id="Parameter"></a>
---

### Parameter Group <a id="ParameterGroup"></a>
---

### Labels
---
### ...

## Script Access Rights
---
