# Configurator Script

## Connections

There are two ways how components might connect with each other: docking and siblings. Both types share the ability to set values on the component and the other side of the connection.

### Docking

Docking describes the parent-child connection that creates the component-tree within a configuration. So each child has exactly one parent (except for the root component which has none).

### Siblings

Siblings on the other hand describe the connection between two arbitrary components within the configuration. Two siblingpoints are connected if their masks match and they have the same global position within the configuration.

### Assignments

Assignments are the way to transfer information from one component to another. There are three events when assignments are executed:

* on dock: when the connection is created (the child is docked to the parent, or the two siblings connect)
* on update: one of the connected components changed its internal state (was updated)
* on undock: the connection is removed.

### maxConnections

Every connection (except for childDockings) has the property maxConnections which is 1 by default. It defines the maximum number of other components that can be connected via this connection at once.

This is specially useful for siblingconnections where multiple components overlap on the same point and should share information between each other.

### condition

Every docking can have a condition which defines if the docking is possible at the moment.

### context "other"

In all scripts (assignmentScripts and condition) the context "other" is available, providing access to the value context of the other part of this connection:

### connection context

In all scripts (assignmentScripts and condition) the context "connection" is available, providing information for this connection:

* index : the index of the connection within the range it was created. non-range connections always have 0
* position: the position of the connection within the self component.
* isPreview: true if the current execution of the script is part of a preview-calculation

### global context "object"

In all scripts the context "object" is available providing support for global variables available in all scripts of all connected components and subparts. Can be read from all scripts, but only scripts that are allowed to write to self are also allowed to write to object, see list below: [List of script access rights](configuratorscript.md#List-of-script-access-rights)

## Parameters

The parameters of a component define how this component can be changed from the outside. The state of any component must be uniquely defined by the values of its parameters. This is because on serialization of a configuration, the values of the parameters are serialized and on load only those values are set again.

### onValueChange

every Parameter may have an onValueChange script which is executed everytime this parameter value changes **from the outside**. From the outside means either by change in the view or by change throu assignment (docking, sibling or subcomponent). It is not executed if the value of the parameter changes during an internal calculation.

## Subcomponents

Every component can contain multiple subcomponents. A subcomponent references a component with all of its scripts and computations. The master component may set parameters of the subcomponents via assignments. It’s also possible for the master component to define one or more subcomponents as active. If defined, the master component can take parameters of the active subcomponents to supersede its own. The master components also defines if and with what amount the subcomponent is added to the partlist. If the subcomponent itself contains subcomponents, each element in the subcomponent is multiplied with the appearance of the subcomponent and added to the partlist. This numberInPartList may also be a decimal number.

Every subcomponent can be defined as a main component. When accessing the partlist, the elements are aggregated overall and on a mainComponent basis. This means that everything beneath a mainComponent is aggregated but not combined with elements outside of this mainComponent. If mainComponents contain mainComponents themself they are aggregated seperatly and doesn't show up in the higher level mainComponents partlist.

toplevel components are set as mainComponents by default, but can be declared NOT main components with a selfreference in their list of subcomponents.

## Packaging

packaging allows defining a package size for its component. This size will be the amount of all appearances of this component.

used elements in the componentDefinition:

* packageSizes: contains a Array\<int>, these are all the numbers of packages which are allowed for this component
* packaging: contains a list of sizes with conditions for adding certain sizes if needed

also affected:

* articleNr: the used packageSize is available in here
* pricing: the used packageSize is available in here
* labelInPartlist: the used packageSize is available in here

## Label in Partlist

It is sometimes necessary to have dynamic labels in the partlist based on the current articleNumber and/or packaging.

If present, the script in labelInPartlist is executed for each entry in the partlist with `articleNr`, `packageSize` and `language` provided.

### Example

```json
{
   "id": "comp",
   "parameters": [
   		{
           "key": "someParameter",
           "type": "Decimal",
           "visible":true,
           "defaultValue": 1,
           "validValues": [1, 2, 3, 4, 5, 6, 7, 9, 10]
       	}, 
   		{
           "key": "someOtherParameter",
           "type": "Decimal",
           "visible":true,
           "defaultValue": 0
       }
   ],
   "geometry": "
       	...
   ",
   "parentDockings": {
   		...
   },
   "packageSizes": [5, 3],
   "packaging": [{
       "size": 1,
       "condition": "someOtherParameter == 1"
   },{
       "size": 7,
       "condition": "someOtherParameter == 1"
   }],
   "articleNr": "
     articleNr= 'nr'|someParameter|'x'|packageSize
   ",
   "pricing": [{
       "region": "default",
       "currency": "EUR",
       "price": "
          price= 100*packageSize;
        "
   }]
}
```

The possible “packageSizes” are set to \[5,3], this means for example if the component is docked 11 times the number of packages with size 5 will be 2 and the number of packages with size 3 will be 1. The number of components will always be first divided into the biggest possible package size and then the next smaller one and next smaller one until the smallest one is reached.

The parameter packaging adds also the size 1 to the “packageSize” if the condition of "someOtherParameter == 1" is true.

The parameter “articleNr” and pricing are containing the variable "packageSize".

## Restrictions

Additionally to the script, external restrictions can be defined. See the [documentation for restrictions](../scripting-resources/model/configdocu.md#parameterrestrictions) for more details.

Each restriction contains 3 fields:

* target: the target of the restriction. Can be `parameter` or `valueIn:&lt;paramKey&gt;`
* type: Number representing the type of the restriction can be RESTRICT\_TO(1) or EXCLUDE(2)
* value: comma seperated list of values to apply

The restrictions must be provided in a JSON Array.

### Example

```json
 [
    {
        "target": "parameter",
        "type": 2,
        "value": "param2"
    },{
        "target": "valueIn:param4",
        "type": 1,
        "value": "value1, value2, value3"
    }
 ]
```

## MaterialProperties

Added getmaterialproperty takes 3param a.materialname b.materialkey c.defaultvalue as input and returns material value if material or material properties is not found, default value will be returned. setMaterialProperties is called from client to set value which is stored in object manager.

### Example

```json
{
    "id": "comp","
    "onUpdate":"param3= getmaterialproperty(material,fabkey3,notfound);",
    "parameters": 
    [
        {
            "defaultValue": "notavailable",
            "key": "param3",
            "type": "String"
        },
        {
            "defaultValue": "notavailable",
            "key": "material",
            "type": "Material",
            "validValues":
            [
                "fabric",
                "satin"
            ]
        }
    ],
    "articleNr":"articleNr ='nr_' | getmaterialproperty(material,fabkey1,'notfound')",
                       "geometry":"thickness = getmaterialproperty(material,thick,'12'); AddCube(Vector3f{100,100,thickness});""
} 
```

## ActiveGroupInView

Added script activeGroupInView returns group which is active in the view. setActiveGroupInView is triggered from view which sets the active group in view to the configurator kernel

```json
{
    "id": "comp","
    "onUpdate":"param3= 2; if(activegroupinview() != 'inner') { param3=1;};","
    "parameters":
    [
        {
            "defaultValue": "notavailable","
            "key":"param3","
            "type": "String"
        }
    ],
    "articleNr":"articleNr ='nr_' | activegroupinview()","
    "geometry":" if(activegroupinview() != 'inner') { AddCube(Vector3f{10+param3,100,500});MoveMatrixBy(Vector3f{1,100,1});} AddCube(Vector3f{100,100,500});""
}
```

## Script Access Rights

As mentioned above, various scripts can have access to `self`, `connection` and `other`. But not all scripts have full access to everything everywhere, instead it is explicitly defined for every script where it has access to and which type of access it has.

### List of script access locations

This list is just an information for the considered location of every part/component.

```c++
{"_",                   ScriptAccessLocation::Local},
{"",                    ScriptAccessLocation::Local},
{"self",                ScriptAccessLocation::Self},
{"parameter",           ScriptAccessLocation::Self},
{"object",              ScriptAccessLocation::Self},
{"connection",          ScriptAccessLocation::Connection},
{"other",               ScriptAccessLocation::Other},
{"other_connection",    ScriptAccessLocation::Other},
{"parent",              ScriptAccessLocation::Other},
{"child",               ScriptAccessLocation::Other},
{"sibling",             ScriptAccessLocation::Other}
```

### List of script access rights

The following is a list of all scripts and script paths (also subpaths) and the corresponding access rights for it. The first member (string) defines the path in the script, so for example `onUpdate`. The second string defines if the path is part of another path, eg `onUpdate` in `parentDockings`. The next member is the `ScriptType`, this is just relevant code internally. Next is the `ScriptAccessLocation` and defines where the script has access to, so if it has access just to `self`, `connection` or `other`. These are in hierarchic order, so if a script has rights to access `other`, it also has rights for `connection` and `self`, (`read`) access to `self` is always granted. The last member defines if the script has only `read` or also `write` access rights.
