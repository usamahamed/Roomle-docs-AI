# Configurator Feature Documentation

## Partlist

The Partlist is an aggregated view of the current Components (and SubComponents) in an Object or the full scene.
The aggregation is based on the componentId, articleNr and Parameters, who are visible in the partlist:
Two components are considered "equal" (and therefore appear as the same entry in the partlist) if:
- they have the same componentId
- the same articleNr
- for every parameter visible in partlist the key and value of the parameter matches.

The count in the partlist can be a decimal number, as the script may define decimal numbers as numberInPartList

### subPartId
Every element in the partlist also contains a subpartId. This id can be used to request the geometry for this element.
This can be useful for interfaces which want to show images for each part in the partlist.

Bear in mind that some parts in the partlist might have no meaningful geometry. Additionally `hasGeometry` tells the client if this subpart has a geometry or not.

### main components
additionally to the fullList, each partlist contains an aggregated view per main component. 
Subelements in the partList are not combined with elements beneath other mainComponents, even if they are exactly the same.
There is also no aggregation between main components, even if the resulting partlist and main component itself is identical.

## Parameterrestrictions

When loading a componentdefinition into the Configurator, it is possible to add (json serialized) list of parameter restrictions.
Those restrictions may restrict parameters and/or parametervalues from being shown to the user. It is possible to exclude elements or restrict the possible list of values.

If the restrictions contain multiple restriction lists for parameters or values of the same parameter, the intersection of all those lists applies.

The dataformat is defined in the [Script documentation](configuratorscript.md#restrictions)
### Example

Component A has Parameters `param1`, `param2` and `param3`. And param1 has values `val1`,`val2`,`val3` and `val4`.

If we now add restrictions :
- restrict the parameters to param1 and param2
- exclude param2
- restrict values of param1 to val1, val2 and val3
- restrict values of param1 to val2, val3 and val4
- exclude values val2 and val4 from param1

the result would be showing only param1 with value val3.

## Plugins
It is possible to add pluginData into rml components for wellknown plugins.
for more details see [plugins](plugins.md)

### imos
the imos pluginData includes the structural data necessary to convert the rml-configuration into a pxm format.
With this it is possible to import the configuration into imos as long as the used construction-principles are known in imos.

You can use the `IMOSGenerator` to generate pxm data out of the configuration.

# Configurator DataTransferObjects

## PlanComponent

A configuration consists of a tree of plancomponents. 

### members

- id (long)
- label (string)
- hash (string) : the hash of the component itself. every plancomponent with the same parametervalues have the same hash.
- position (Vector3f): position relative to the parent
- rotation (Vector3f): rotation relative to the parent, eulerangles in degrees
- transform (Matrix4f): transform relative to the parent
- bounds (Vector3f): bounds within the parentspace
- boundingBox (Cube): bounds within the parentspace
- boxForMeasurement (Cube): bounds for measurement within the parentspace
- valid (bool)
- parameters (vector &lt;Parameter&gt;): visible parameters of this plancomponent
- parameterGroups (vector &lt;ParameterGroup&gt;)
- childIds (vector &lt;long&gt;)
- possibleChildren (vector &lt;PossibleChild&gt;)
- addOnSpots (vector &lt;AddOnSpot&gt;)
- dimensionings (vector &lt;Dimensioning&gt;)


## Dimensioning

represents a dimensioning to be shown on the current component. Each dimensioning has a type (currently which axis it should be shown on), 
a from and to position. Those values are relative to the component space on the line defined by the type.

The level defines on what level it should be shown the lower the level the further outside it is. Per convention 0 should be the overall dimensioning and 1 is the first level of the plancomponent dimensions.

### members

-  type (Type = X|Y|Z)
-  from (float)
-  to (float)
-  label (string)
-  level (int)
-  maxLevel (int) the current maximum level within this type

## Parameter

The parameter transfer object is used for both PlanComponent-Parameters and PlanObject-Parameters.

valuesAreEqual is always true for PlanComponent-Parameters. On PlanObject-Parameters it is true if all connected
planComponent-parameters behind this object-parameter has the same value.

In ParameterDTO valuesAreEqual param is added, param is set to true, if their is a consensus otherwise it will be set to false

(Ex: consider the planObject-Parameter “colour” is set to “green”,
if in plan component some of the components colours are different, then valuesAreEqual will be set to false.
 if all components are changed to “blue” then object param will automatically be changed to blue
 and valuesAreEqual will be set to “true”)

### members
- label (string)
- enabled (bool)
- highlighted (bool)
- valuesAreEqual (bool) 
- sort (long)
- group (string)
- range (Range)
- unitType (UnitType = UNKNOWN_UNIT | LENGTH | AREA | ANGLE |COUNT)
- unitTypeString (string)
- groups (vector &lt;std::string&gt;)
- values (vector &lt;ParameterValueDTO&gt;)