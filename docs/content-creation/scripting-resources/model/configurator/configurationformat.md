# Roomle Configuration Catalog Structure Format

Kernelversion 2.24.0

## Definitions

### Catalogs

A catalog consists of items, components, tags and materials. It can be private (visible only to selected users and the owner) or public (available for all Roomle users).

### Tag

Tags are the way items are organized in catalogs. Each catalog must have at least one root-tag. Tags can be structured hierarchically and one tag can be a child of multiple other tags. Each Tag is linked to one catalog and must have a (globally) unique identifier.

### Item

An item is an object that can be added to a plan or loaded into a configurator. This can be a normal 3D object or a pre-defined configuration of components. Each item belongs to exactly one catalog but can be linked to multiple tags. Items which are not linked to any tag are not visible to the user. Every item must have a unique SKU (within the catalog). The terms item and product refer to the same thing and can be used interchangeably.

### Component

A component is the basic element used for configurable objects. Each component contains a definition on how this component can be configured and used within configurations. Similar to items, components can be linked to multiple tags. Every component must have a unique identifier (within the catalog).

### Mesh

Within each catalog you can define meshes to be used in the geometry-script of a component. Each mesh can have data for different formats and quality levels. At the moment only CRT (Corto compressed meshes) with Realtime quality (level 50) is used. Within the script the mesh can be inserted with the AddExternalMesh command. The MeshId is the combined id \<catalogId>:\<meshId>.

Defined meshes (external meshes in the script) improve loading performance since only those meshes are loaded that are currently needed. In contrast to scripted meshes where the whole mesh is part of the script and needs to be interpreted even if not shown. Furthermore defined meshes provide the client with the ability to reuse the mesh (since defined meshes have an id and are const by definition) within the scene which also improves performance and memory usage.

### Material

Within each catalog you can define materials that can be used in the geometry script of a component. Each material can have no or multiple textures assigned to it for use. Each material must have a unique identifier (within the catalog).

### Configurations

When talking about configurable items you must distinguish between what we call "configuring variants" (which is basically just changing colors, product dimensions, etc.) and "combining components to one object" (creation of new objects and products - real configuration). Components can be seen as templates for the basic elements of configurable objects. A component itself can not be used within a plan. To use a component within a plan it must be embedded into a configurated item, which is an item with a given configuration. The configuration (see section configuration format) defines the actual variant of the involved components used in the configuration.

### Configuring variants

An example for configuring variants is a table where you can change the dimensions and the material of the surface. In Roomle this can be modeled as one component with parameters for the dimensions and the material. This table within a plan is defined through a configuration containing only one component.

### Combining components

More complex configurations arise when multiple components can be combined together, e.g. a frame with different possible shelves that can be added. Every configuration must have exactly one root-component. Details on docking components can be found in [2.5](configurationformat.md#dockingComponents){reference-type="ref" reference="dockingComponents"}

## Roomle Configuration Format

The Roomle Configuration Format is serialized as JSON file.

### Coordinate system

The coordinate system within the Roomle ConfigurationScript is a left-handed cartesian coordinate system with `+Z` as the up vector and `+Y` as the forward direction of the model. In the 3d file `1 Model Unit` has to correspond to `1mm` real world size of the object.

```json
{
    "id": "catalog_id:coordinate_system",
    "geometry": "
        AddPrism(1000, Vector2f[{0, 0}, {2000, 0}, {0, 1000}]);
       SetObjSurface('roomle_script_test:yellow');
    "
}
```

![coordinate system](<../images/roomleScriptCoordinateSystem (1).png>)

### Component definition

The component definition defines how a component should be displayed, which parameters are possible and the interaction with other components. It includes all information needed within the configurator. This includes:

* A condition when the component is considered valid. This can be used for Components who must have specific parameters/dockings set to be valid.
* A list of possible parameters including the possible values and a default value per parameter
* A list of possible ParentDockings and ChildDockings. These are the connectors to combine different components.
* A list of possible SiblingPoints. These are connectors throu which components can transfer data (e.g. parameter values) regardless of the parent-child connection.
* A list of possible AddOnSpots. These are visual aids for the User.
* A list of possible Subcomponents which can be used within the geometry script and will be displayed in the partlist
* The article number script written in RoomleScript
* The geometry script written in RoomleScript
* The geometryHD script written in RoomleScript. This version is used in special clients for higher resolution and quality. Besides thatit follows the same logic and definitions as the geometry script. Everything that can be done in the geometry script can be done in geometryHD too.
* The previewGeometry script written in RoomleScript. When provided, this geometry is used to preview objects during adding of new children. If not provided, the geometry script is used. All geometry-script functions work the same in the previewGeometry. If provided the previewGeometry script should be less complex than the real geometry script to improve performance during the insertion.
* The boundingGeometry is intended to define the simplified boundaries of the components geometry that can be used for collision detection and cutting holes of construction objects in walls.
* The boundingGeometry script written in RoomleScript.
* The packageSize contains a Array\<int>, these are all the numbers of packages which are allowed for this component
* The packaging contains a list of sizes with conditions for adding certain sizes if needed
* The price calculation written in RoomleScript
* an onUpdate RoomleScript which is executed everytime something changes within the component. Within this script even parameters of the component may be changed.

### Parameters

A component is completely defined by the values of its parameters. Parameters have multiple ways to control where and how it is shown and behaves.

If all connected parameters behind a global parameter have the same value, the global parameter is automatically set to this value.

* visible: shown to the user as part of the component. Default value `true`.
* enabled: user can modify the value. Default value `true`.
* global: all global parameters with the same key within a configuration are combined together and shown globally. The global value for a parameter-key may differ from the actual value on the component (if the component-parameter is changed after the global value is set). New components get the global value assigned automatically on dock. If all connected parameters behind a global parameter have the same value, the global parameter is automatically set to this value. Default value `false`.
* volatile: If this property is set, the parameter is not stored in the configuration. Default value `false`.
* visibleAsGlobal: the global parameter is shown if any of the connected component parameters is set as "visibleAsGlobal", otherwise its invisible globally. visible and visibleAsGlobal can be completely independent. Default value `true`.
* visibleInPartlist: if this parameter should be shown in the partlist. parameters not visible in the partlist are also ignored in the aggregation of components in the partlist. Default value `true`.
* userTriggeredChange: is set to true, if onValueChange is triggered from user. Then for corresponding key respective values fetched from json will be set. if onValueChange is internal trigger, values are ignored.
* an onValueChange RoomleScript which can be provided for every Parameter and is executed on startup (change from no value to the first/default value) and every time this parameter changes.
* visibleInPlanner: If the parameter is "global" and "visibleInPlanner", the object parameter is delivered with the PlanObject when a plan overview or an individual plan object is requested. If the "visibleInPlanner" property of the parameter is set but not the "global" property, then a warning is generated when the component is read and the parameter is treated as if "visibleInPlanner" would be "false".

### Parameter and possible children level

The visibility of parameters and possible children are restricted and are only visible if the user level exceeds the restriction. Therefore the property `level` needs to be added to parameters or possible children. The value of the property can only be an integral constant. The default restriction level is 0, so these parameters are visible to all users. The user level is set via an environment variable and is 0 by default. The core only populates the parameters and possible children that the user can access. Thus, a user with a higher level can access more parameters and more restricted parameters can be accessed by fewer users. As the default level of each parameter is 0, this new feature has no impact on the live content, as any user can access parameters with level 0 (unrestricted).

## Subcomponents

Every component can contain multiple subcomponents. A subcomponent references a component with all of its scripts and computations. The main component may set parameters of the subcomponents via assignments. It's also possible for the main component to define one or more subcomponents as active. If defined, the main component can take parameters of the active subcomponents to supersede its own.

### Supersedings

For active subcomponents the main component may define supersedings. If a superseding parameter is defined, it completly replaces the parameter of the main component with the same key if one exists. This means that from outside it behave as if the parameter were the parameter of the main component itself although the validValues and all calculations are done in the subcomponent.

This is specially useful for cases where the main component acts as a metacomponent which only decides which subcomponent is used. In this case all calculations can stay subcomponent specific without the need to copy them to the main component while still having all logic available.

The values of the superseded parameters are also available in the main component (and may override existing values in the main component) and can be used in geometry, docking etc. Be aware that the values of the superseding parameters may not be available on the initial executions of "onUpdate" since the component needs to initialize itself before knowing what parameters will be superseded. Consider using ifnull in such a case.

Optionally, the key used to access the substituted parameters in the component can be specified by adding an override object with a key attribute. This is useful for avoiding parameter shadowing in the main component and for superseding parameters with the same name from different subcomponents. In the script, the substituted parameter can be used just as if there were a parameter with the used override key.

By default, the substituted parameter maps to the same group specified in the subcomponent. This default behavior can be changed by setting an override group. Membership in a group can even be removed by assigning an empty string to the override group.

## Plan interaction

Information about how the object interacts with the plan, such as the intersection of the PlanComponent with walls.

## Data

### Getting data

Static JSON data that can be queried in RoomleScript with the functions `getData`, `getDataOrNull` or `getDataWithDefault`. While `getData` generates an error if the data is not found, `getDataOrNull` and `getDataWithDefault` never generate an error and always return a valid value. `getDataOrNull` returns `null` if the data is not found, while `getDataWithDefault` has an additional default argument that is returned if the data is not found. The default argument is only evaluated if the data is not found.

The `getData*` can return not only values, but also objects and arrays. The elements of the objects can be accessed with the `.` (member access) operator. Multidimensional arrays or lists of arrays are not supported because the RoomleScript does not support multidimensional arrays at all, not even for basic data types.

Example

```json
{
    "data": {
        "simpleObject": {
            "stringValue": "string 1",
            "intValue": 1
        },
        "nestedObject": {
            "elementA": {
                "stringValue": "string 2",
                "intValue": 2
            },
            "elementB": {
                "stringValue": "string 3",
                "intValue": 3
            }
        },
        "objectArray": [
            {
                "stringValue": "string 4",
                "intValue": 4
            },
            {
                "stringValue": "string 5",
                "intValue": 5
            }
        ],
        "valueArray": [ 6, 7 ],
        "multiDimensionalArray": [ 
          [8, 9],
          [10, 11] 
        ],
         "multiDimensionalObjectArray": [ 
          [
              {
                  "stringValue": "string 12",
                  "intValue": 12
              },
              {
                  "stringValue": "string 13",
                  "intValue": 13
              }
          ],
          [
              {
                  "stringValue": "string 14",
                  "intValue": 14
              },
              {
                  "stringValue": "string 15",
                  "intValue": 15
              }
          ] 
        ]
    }
}
```

```js
value = getData('simpleObject', 'stringValue');          // value == "string 1"
```

```js
value = getData('nestedObject', 'elementA', 'intValue'); // value == 2
```

```js
value = getData('objectArray', 0, 'intValue');           // value == 4
```

```js
value = getData('valueArray', 1);                        // value == 6
```

```js
obj = getData('simpleObject');
value1 = obj.stringValue;                                // value1 == "string 1"
value2 = obj.intValue;                                   // value2 == 1
```

```js
obj = getData('nestedObject', 'elementB');
value1 = obj.stringValue;                                // value1 == "string 3"
value2 = obj.intValue;                                   // value2 == 3
```

```js
obj = getData('nestedObject');
value1 = obj.elementA.stringValue;                       // value1 == "string 2"
value2 = obj.elementA.intValue;                          // value2 == 2
innerObject = obj.elementB;
value3 = innerObject.stringValue;                        // value3 == "string 3"
value4 = innerObject.intValue;                           // value4 == 3
```

```js
obj = getData('objectArray', 0);
value1 = obj.stringValue;                                // value1 == "string 4"
value2 = obj.intValue;                                   // value2 == 4
```

```js
array = getData('objectArray');                          // array is an array with two elements, each element is an object 
```

```js
array = getData('valueArray');                           // array is the array [6, 7]
```

```js
array = getData('multiDimensionalArray', 1);             // array is the array [10, 11]
```

```js
array = getData('multiDimensionalArray');                // array is "null" because multidimensional arrays are not supported
```

```js
array = getData('multiDimensionalObjectArray', 0);       // array is an array with two elements, each element is an object 
```

```js
array = getData('multiDimensionalObjectArray');          // array is "null" because multidimensional arrays are not supported
```

`getData*` returns a copy of the data. The elements of objects can also be assigned. Note that this only changes the data in the variable, but of course not the data in the component.

```js
obj = getData('simpleObject');
value1 = obj.stringValue;               // value1 == "string 1"
value2 = obj.intValue;                  // value2 == 1

obj.stringValue = getData('nestedObject', 'elementA');
obj.intValue = 10;
value3 = obj.stringValue.stringValue;   // value3 == "string 2"
value4 = obj.stringValue.intValue;      // value4 == 2
value5 = obj.intValue;                  // value5 == 10

obj2 = getData('simpleObject');
value6 = obj2.stringValue;              // value1 == "string 1"
value7 = obj2.intValue;                 // value2 == 1
```

In the Roomle script, the names of the variables can also be `self`, `other`, `child`, `parent`, `sibling`, `connection`, `other_connection`, `parameter` and `object`. Despite the fact that this is a bad style, it does not contradict the corresponding context names. However, if such a variable is an object, the context must be explicitly specified when accessing the object's members.

```js
self = getData('simpleObject');         // bad style to name a variable "self" which is actually "self.self"
value1 = self.intValue;                 // value1 is "null", because there is no variable "intValue" in the context "self"
value2 = self.self.intValue;            // value2 == 1
```

Elements of arrays of objects can be accessed with the `get` function:

```js
array = getData('objectArray');
obj = get(array, 1);                    // obj is the 2nd element of the array
value1 = obj.stringValue;               // value1 == "string 5"
value2 = obj.intValue;                  // value2 == 5
```

Elements of arrays of objects can be overwritten with the `set` function:

```js
array = getData('objectArray');
obj = get(array, 1);                    // obj is the 2nd element of the array
set(array, 0, obj);                     // the 1st element of the array is now the same as the 2nd element
```

As for any other array, the length of an array of objects can be get with the `length` function:

```js
array = getData('objectArray');
value = length(array);                  // value == 2
```

### Evaluating data

In addition to the `gerData*` functions, there are `evaluateData`, `evaluateDataOrNull` or `evaluateDataWithDefault`. These functions work exactly like the corresponding `getData*` functions, however, if the data is a string, the string is treated as an expression and evaluated. The expressions in the data are not parsed when the component is loaded, but only at runtime when the particular element in "data" is evaluated for the first time. Note that to prevent recursion, it is not allowed to call a `getData*` or `evaluateData*` function again within a data expression.

Example

```json
{
    "data": {
        "simpleObject": {
            "stringValue": "'string 1'",
            "intValue": 1,
            "formula": "variableA + 1"
        },
        "nestedObject": {
            "elementA": {
                "stringValue": "'string 2'",
                "intValue": 2,
                "formula": "variableB * 2"
            },
            "elementB": {
                "stringValue": "'string 3'",
                "intValue": 3,
                "formula": "round(variableC, 0)"
            }
        },
        "objectArray": [
            {
                "stringValue": "'string 4'",
                "intValue": 4,
                "formula": "variableD | string(variableE)"
            },
            {
                "stringValue": "'string 5'",
                "intValue": 5
            }
        ]
    }
}
```

```js
variableA = 2;
value = evaluateData('simpleObject', 'formula');  // value == "3.00"
```

```js
variableA = 10;
obj = evaluateData('simpleObject');  
value1 = obj.stringValue;                         // value1 == "string 1"
value2 = obj.intValue;                            // value2 == "1"
value3 = obj.formula;                             // value3 == "11.00"
```

```js
variableB = 100;
variableC = 3.1;
obj = evaluateData('nestedObject');  
value1 = obj.elementA.stringValue;                // value1 == "string 2"
value2 = obj.elementA.intValue;                   // value2 == "2"
value3 = obj.elementA.formula;                    // value3 == "200.00"
value4 = obj.elementB.stringValue;                // value4 == "string 3"
value5 = obj.elementB.intValue;                   // value5 == "3"
value6 = obj.elementB.formula;                    // value6 == "3.00"
```

```js
variableD = 'article';
variableE = 4i;
obj = evaluateData('objectArray', 0); 
value1 = obj.stringValue;                         // value1 == "string 4"
value2 = obj.intValue;                            // value2 == "4"
value3 = obj.formula;                             // value3 == "article4"
```

With the functions `getSubComponentData`, `getSubComponentDataOrNull`, `getSubComponentDataWithDefault`, `evaluateSubComponentData`, `evaluateSubComponentDataOrNull` and `evaluateSubComponentDataWithDefault` data from subcomponents can be accessed. The functions work exactly like the corresponding `getData*` and `evaluateData*` functions, but have an additional argument at the beginning, which is the internal ID of the subcomponent.

Example

```json
{
    "id": "catalogId:data",
    "data": {
        "testData1": {
            "stringValue": "'string 1'",
            "intValue": 1,
            "formula": "variableA + 1"
        }
      }
}
```

```json
{
    "id": "catalogId:main",
    "onUpdate": "

        value1 = getSubComponentData('globalData', 'testData1', 'stringValue1');   // value1 == "string 1"
        
        variableA = 3;
        dataObject = evaluateSubComponentData('globalData', 'testData1');
        value2 = dataObject.stringValue;                                           // value2 == "string 1"
        value3 = dataObject.integerValue;                                          // value3 == 1
        value4 = dataObject.formula;                                               // value4 == 4
    ",      
    "subComponents": [
        {
            "internalId": "globalData",
            "componentId": "catalogId:data"
        }
    ]
}
```

### Finding data

In addition to getting or evaluating data, the data can also be filtered using the `findData`, `findSubComponentData`, `findAndEvaluateData`, and `findAndEvaluateSubComponentData` functions. findData" returns the filtered objects and values as they are. `findAndEvaluateData` treats expressions as strings and evaluates them before filtering. With the functions `findSubComponentData`, and `findAndEvaluateSubComponentData` data from subcomponents can be accessed.

The last arguments of this functions is the filter functions, which can be a script function ot a component function. The function must have exactly 2 arguments, the key and the value of the data object and The function must return a boolean value. If an array is searched, the key is a 'Decimal' number with the index of the element. If an object is searched for, the key is a "String" value with the key of the data object. All functions return an array with the matches. If no value matches the filter, an empty array is returned. If an object is searched for, the returned array contains objects with 2 properties. The name of the first property is "key" and contains the key of the matching object. The name of the second property is "value" and contains the value of the matching object.

```js
function filter(key, value) {
      return value.intValue > 1;
}
valueA = findData('objectArray', filter);
valueB = findSubComponentData('subComponent', 'objectArray', filter);
valueC = findAndEvaluateData('objectArray', filter);
valueD = findAndEvaluateSubComponentData('subComponent', 'objectArray', filter);
```

If the functions are used with a component function, the first argument of the component function must be the key and the second argument of the function must be the value. The values are passed to the function in the order of the arguments, not in the order of the keys. So if the name of the first argument is "value" and the name of the second argument is "key", this is just bad naming, but it does not change the order of the arguments. Default values of the arguments are of no use:

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        valueA = findData('objectArray', filter);
        valueB = findSubComponentData('subComponent', 'objectArray', filter);
        valueC = findAndEvaluateData('objectArray', filter);
        valueD = findAndEvaluateSubComponentData('subComponent', 'objectArray', filter);
    ",
    "functions": [
        {
            "key": "filter",
            "arguments": [{ "key": "arg1isTheKey" }, { "key": "arg2isTheValue" }],
            "script": "
                return arg2isTheValue.intValue > 1;
            "
        }
    ],
    ...
}
```

If the functions are used to look up array data, all the values that match the filter are returned in an array. If no value matches the filter, an empty array is returned. Regardless of whether you search in objects or arrays, arrays with key value pairs are always returned. If you search in arrays, the "key" is the index of the element found. The indices of course start with 0. When searching in objects, the "key" is the name of the property found. "value" is the element found.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value > 1 && value < 4;
        }
        valueA = findData('valueArray', filter);
    ",
    "data": {
        "valueArray": [0, 1, 2, 3, 4, 5]
    }
}
```

The content of `valueA` is an array with 2 object:.

```json
[
  { "key": 2, "value": 2 },
  { "key": 3, "value": 3 }
]
```

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueB = findData('objectArray', filter);
    ",
    "data": {
        "objectArray": [
            { "intValue": 0 },
            { "intValue": 1 },
            { "intValue": 2 },
            { "intValue": 3 }
        ]
    }
}
```

The content of `valueB` is an array with 2 objects:

```json
[
  { "key": 2, "value": { "intValue": 2 } }, 
  { "key": 3, "value": { "intValue": 3 } } 
]
```

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueC = findData('object', filter);
    ",
    "data": {
        "object": {
            "key1": { "intValue": 0 },
            "key2": { "intValue": 1 },
            "key3": { "intValue": 2 },
            "key4": { "intValue": 3 }
        }
    }
}
```

The content of `valueC` is an empty array with 2 objects with the properties "key" and "value":

```json
[
    { 
        "key": "key3",
        "value": { "intValue": 2}
    },
    { 
        "key": "key4",
        "value": { "intValue": 3 }
    }
]
```

If no value matches the filter, an empty array is returned.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueD = findData('objectArray', filter);
    ",
    "data": {
        "objectArray": [
            { "intValue": 0 },
            { "intValue": 1 }
        ]
    }
}
```

The content of `valueD` is an empty array `[]`.

The data is evaluated prior to filtering:

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.formula > 1;
        }
        inputValue = 1;
        valueE = findAndEvaluateData('objectArray', filter);
    ",
    "data": {
        "objectArray": [
            { "formula": "inputValue + 0" },
            { "formula": "inputValue + 1" },
            { "formula": "inputValue + 2" },
            { "formula": "inputValue + 3" }
        ]
    }
}
```

The content of `valueE` is an array with 3 objects:

```json
[ 
  { "key": 1, { "formula": 2.00 } }, 
  { "key": 2, { "formula": 3.00 } }, 
  { "key": 3, { "formula": 4.00 } } 
]
```

With `findDataKey` and `findSubComponentDataKey` it is also possible to search only for indices and keys of objects and values. The functions work exactly like the corresponding `findData` and `findSubComponentData` functions, but return only the keys or indices of the matching objects and values instead of key-value pairs.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value > 1 && value < 4;
        }
        valueA = findDataKey('valueArray', filter);
    ",
    "data": {
        "valueArray": [0, 1, 2, 3, 4, 5]
    }
}
```

The content of `valueA` is an array with 2 indices: `[2, 3]`.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueB = findDataKey('objectArray', filter);
    ",
    "data": {
        "objectArray": [
            { "intValue": 0 },
            { "intValue": 1 },
            { "intValue": 2 },
            { "intValue": 3 }
        ]
    }
}
```

The content of `valueB` is an array with 2 indices: `[2, 3]`.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueC = findDataKey('object', filter);
    ",
    "data": {
        "object": {
            "key1": { "intValue": 0 },
            "key2": { "intValue": 1 },
            "key3": { "intValue": 2 },
            "key4": { "intValue": 3 }
        }
    }
}
```

The content of `valueC` is an empty array with 2 keys `['key3', 'key4']`.

If no value matches the filter, an empty array is returned.

```json
{
    "id": "catalogId:data",
    "onUpdate": "
        function filter(key, value) {
            return value.intValue > 1;
        }
        valueD = findDataKey('objectArray', filter);
    ",
    "data": {
        "objectArray": [
            { "intValue": 0 },
            { "intValue": 1 }
        ]
    }
}
```

The content of `valueD` is an empty array `[]`.

## Plugin Data

It is possible to add plugin-data to the component-definition. Only data of well known plugins is considered. The details on the json structure can be found below. More details about the concepts and usage can be found in [Plugin Documentation](../plugins.md)

### imos

To transfer structural data from rml-configurations to imos, the components need additional information:

* the zones for the imos topology
* dividers to split up the zones
* elements to be used in the zones with well known CP\_PART\_NAME (those need to exist in imos already)

for the main component (the root element) we also need the dimensions (width/depth/height) of the furniture, the rootzone and possible other attributes to be added to the main article.

The definition of a rootzone within the plugin-data of a component defines the start of a new article. All child- and subcomponents of this component will be added to this article. That is the zones, divisions and elements of those components. Until a new root-zone is found which triggers the next article.

Every element in the imos plugindata is interpreted as an expression and executed within the context of the component before put into the pxm export.

Every part within the imos plugindata (zone,division,element) can contain an "active" node which is interpreted as boolean expression. If this expression is present and evaluates to false, the part is not added to the pxm-export. an articleDescription with no active zone, is completly ignored for the export.

sample json part:

```json
{
"onUpdate": "divForumla= '1'; for(i= 0; i < height/300;i++) {divFormula = divFormula | ':1';}",
"plugin-data": {
    "imos": {
      "dimensions": {"width": "width","depth": "depth","height": "height"},
      "attributes": {"IMOS_ART_C_CONSTRUCTION": "'1'"},
      "rootzone": "'root'",
      "zones": [
        {"id": "'root'"},
        {"id": "'shelfzone'|getUniqueRuntimeId()","parent": "'shelfs'","divnum": "divnum"}
      ],
      "divisions": [
        {"id": "'shelfs'", "parent": "'root'","type": "'z'", "formula": "divFormula",
          "attributes": {"IMOS_PART_CP": "' '","IMOS_PART_TYPE": "'1'"}}
      ],
      "elements": [
        { 
          "id": "'top'|getUniqueRuntimeId()","parent":"'root'","side": "'top'",
          "attributes": { "IMOS_PART_CP": "KP_1_OBE_1000_V1"}
        },{ 
          "id": "'left'|getUniqueRuntimeId()","parent":"'root'","side": "'left'",
          "attributes": { "IMOS_PART_CP": "KP_1_LS_1111","IMOS_PART_TYPE": "'2'"}
        },{ 
          "id": "'right'|getUniqueRuntimeId()","parent":"'root'","side": "'right'",
          "attributes": { "IMOS_PART_CP": "KP_1_RS_1111","IMOS_PART_TYPE": "'2'"}
        }, { 
          "id": "'bottom'|getUniqueRuntimeId()","parent":"'root'","side": "'bottom'",
          "attributes": { "IMOS_PART_CP": "KP_1_UBE_1000_V1"}
        },{ 
          "id": "'shelf'|getUniqueRuntimeId()","parent":"'shelfzone'|getUniqueRuntimeId()","side": "bottom",
           "attributes": { "IMOS_PART_CP": "KP_1_UBE_1000_V1"}
        }
      ]
    }
  }
}
```

## Sample file

```json
{
  "id": "sampleCatalog:component1",
  
  "labels": {
    "de": "deutsches Label",
    "en": "english Label", ...
  },
  "label": "parameter",
  "parameters": [
    {
      "key": "Length",
      "enabled": "true",
      "visible": "true",
      "visibleInPartList": "true",
      "unitType": "length",
      "labels": {
        "de":"Laenge",
        "en":"Length"
      },
      "label": "parameter",
      "type": "Decimal",
      "defaultValue": 1400,
      "validValues": [
        1400,
        1600, ...
      ]
    }, ...
  ],
  "pricing": [
    {
      "region": "RML_DEFAULT",
      "currency": "EUR",
      "price": "<price calculation skript>"
    }
  ],
  "possibleChildren": [  { "componentId":"sampleCatalog:component2" } ... ],
  "parentDockings": {
    "points": [ {
        "position": "{0,0,0}",
        "mask": "DockingMask1",
        "rotation": "{0,0,0}",
        "assignments": {}
      },...
    ],
    "lines": [{
        "position": "{(-Breite/2),0,-42.5}",
        "mask": "DockingMask2",
        "assignments": {},
        "rotation": "{0,-(0),-90}",
        "positionTo": "{(Breite/2),0,-42.5}"
      },...
    ],
    "ranges": [{
        "position": "{0,-(-34.5),1100}",
        "mask": "DockingMask1",
        "assignments": {},
        "rotation": "{0,0,0}",
        "stepEnd": "{0,34.5,2200}",
        "stepX": "0",
        "stepY": "0",
        "stepZ": "488"
      },...
    ],
    "lineRanges": [{
        "position": "{(-Breite/2),0,-42.5}",
        "mask": "DockingMask2",
        "assignments": {},
        "rotation": "{0,0,-90}",
        "positionTo": "{(Breite/2),0,-42.5}",
        "stepEnd": "{0,34.5,2200}",
        "stepX": "0",
        "stepY": "0",
        "stepZ": "488"
      },...
    ]},
    "childDockings": {
        "points": [...]
    },
    "addOnSpots": [{
        "position:"{-100,0,0}",
        "visible":"hasLeftNeighbour == false",
        "mask":"leftSpot"
      },...
    ],
    "subComponents": [ {
          "internalId":"leftSide",
          "componentId":"sampleCatalog:sideComponent",
          "assignments": {
            "Length":"Length"
          },
          "numberInPartList":"3",
          "active":"true",
          "supersedings":[
            { "type":"parameter","key":"color" }
          ]
        },{
            "internalId":"rightSide",
            "componentId":"sampleCatalog:sideComponent",
            "assignments": {
            "Length":"Length*2"
          },
        "numberInPartList":"if(Length > 10) {number= 2; } else { number = 1; }"
       },...
    ],
    "packageSizes": [5, 3],
    "packaging": [{
          "size": 1,
          "condition": "someOtherParameter == 1"
        },{
            "size": 7,
            "condition": "someOtherParameter == 1"
          }
    ],
    "articleNr":"article1234",
    "geometry": "<geometry skript>",
    "geometryHD": "<geometry HD skript>",
    "previewGeometry": "<previewGeometry skript>",
    "environmentGeometry": "<environmentGeometry skript>",
    "boundingGeometry": "<boundingGeometry skript>",
    "palnInteration": {
        "intersectWithWalls": "<script(Boolean)>
    },
    "data": {...}
}
```

| tag name            | type   | description                                                                                                                                                                                                                                                                                                                     |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                  | string | the global unique id of the component. It is combined from the unique id of the catalog and an unique id of the component within the catalog                                                                                                                                                                                    |
| onUpdate            | Script | a Script being executed on every changes. Setting of parametervalues within this script persist.                                                                                                                                                                                                                                |
| valid               | Script | a condition to evaluate if the component is considered valid.                                                                                                                                                                                                                                                                   |
| label               | Script | A script being executed when the label is requested. Once preset, the label map ("labels") is ignored.                                                                                                                                                                                                                          |
| labels              | map    | a map containing key-value pairs for the label of this component. The keys are the isocodes of the language. The values are the labels to be used.                                                                                                                                                                              |
| parameters          | array  | list of the possible parameters of this component                                                                                                                                                                                                                                                                               |
| parameterGroups     | array  | list of the possible parameterGroups of this component.                                                                                                                                                                                                                                                                         |
| possibleChildren    | array  | list of the possibleChild objects defining possible children for this component. Each child must have either itemId or componentId. Items must be configurable. Can have a script defining if it is the default. If multiple possible children evaluate default to true, its undefined which one is taken as the default child. |
| parentDockings      | map    | contains the definitions for all possible dockings where other components can be docked to this component as children. There can be points, lines, ranges (of points) and lineRanges.                                                                                                                                           |
| childDockings       | map    | contains the definitions of all possible dockingPoints where this component can be docked to another component as a child. This contains only points.                                                                                                                                                                           |
| addOnSpots          | array  | contains the definitions of all possible addOnSpots.                                                                                                                                                                                                                                                                            |
| subComponents       | array  | list of possible subcomponents of this component. They can be referenced from the geometryScript and the previewGeometry by the internalId. If the component itself should appear in the partlist additionally to the subcomponents, a backreference is possible.                                                               |
| articleNr           | string | the script to calculate the articleNr that should be displayed in the partlist. If the script contains only a string, this string is used as the articleNr. Otherwise the content of the variable "articleNr" is used.                                                                                                          |
| packageSizes        | array  | list of numbers of packages which are allowed for this component                                                                                                                                                                                                                                                                |
| packaging           | array  | list of sizes with conditions for adding certain sizes if needed                                                                                                                                                                                                                                                                |
| dimensionings       | array  | list of all dimensionings that might be used.                                                                                                                                                                                                                                                                                   |
| siblings            | array  | contains the definitions of all possible siblingPoints.                                                                                                                                                                                                                                                                         |
| geometry            | string | the geometry script for this component. For details see the RoomleScript chapter.                                                                                                                                                                                                                                               |
| geometryHD          | string | the geometry script for higher quality of this component. For details see the RoomleScript chapter.                                                                                                                                                                                                                             |
| previewGeometry     | string | the geometry script for this component in previewmode. For details see the RoomleScript chapter.                                                                                                                                                                                                                                |
| environmentGeometry | string | the geometry script for the environment of this component                                                                                                                                                                                                                                                                       |
| boundingGeometry    | string | the geometry script for the bounds of this component                                                                                                                                                                                                                                                                            |
| planInteraction     | object | definition about how the object interacts with the plan                                                                                                                                                                                                                                                                         |
| data                | object | contains the subobject with plugin-specific data                                                                                                                                                                                                                                                                                |
| plugin-data         | object | data that can be queried with the function `getData`, `getDataOrNull` or `getDataWithDefault`                                                                                                                                                                                                                                   |

### Measuring of Components

By default the Configurator takes the real bounding box of the geometry as the measurements. If necessary the scripter can provide a custom definition for the shown measurements with the setBoxForMeasurement command in the onUpdate script. When the command is called, the display of the measurements behaves as if the component would consist only of a simple Cube with the size and offset as given in the command.

### Combining Components <a href="#dockingcomponents" id="dockingcomponents"></a>

Components can be docked to each other via dockpoints. Each Component can have at most one parent which leads to a parent-child treehierachy. It is possible to transfer data from one component to another. Either directly via the Dockingconnection or via Siblingconnections which can be created between any two components. Data is transfered via assignments.

### Labels

Components, Parameters, Parameter Groups and Value objects can have a label. A Label is a user friendly name used to represent the object in the user interface. Labels can be defined with either a language map or a script. A label map is a collection of language and label pairs. If the label for a requested language does not exist in a label map, the English label is used. If the English label is requested but does not exist, the key or value of the object is used instead of the label. In a label script, a label will be generated completely dynamically. Once a label script is preset, the label map is ignored. However, the label from the `labels` map is the input label of the label script.

Label map exsample:

```json
"labels": {
    "de": "Laenge",
    "en": "Length"
}
```

Label script examples:

```json
"label" : "isRound ? 'Diameter' : 'Length'"
```

```json
"label" : "
    _.aspect = string(width/height, 2);
    if (width > height) {
        label = 'landscape: ' |  _.aspect;
    } else {
        label =  'portrait: ' |  _.aspect;
    }
"  
```

```json
"label" : "
    _.aspect = string(width/height, 2);
    if (width > height) {
        return 'landscape: ' |  _.aspect;
    } else {
        return 'portrait: ' |  _.aspect;
    }
"  
```

Value object label scripts can be combined with the automatically unit formatted values. In the example below, the values label of the "size" parameter is "ø 100 cm" if `isRound` and "100 cm" otherwise.

```json
{
    "id": "test:diameter",
    "parameters": [
        {
            "key": "size",
            "type": "Decimal",
            "defaultValue": 1000,
            "unitType": "length",
            "valueObjects": [
                {
                    "value": 1000,
                    "label": "isRound ? ‘ø ‘ | label : label",
                    "condition": "true"
                }
            ]
        }
    ]
}
```

### Docking

Each component can define dockingPoints and dockingLines where other components can be docked to (called ParentDockings) and dockingPoints (called ChildDockings) through which this component can be docked to the ParentDockings of other components. Components which are docked to another component A are called the children of A. Through the docking connection the parent can set parameters of the child, e.g. the width of a shelf can be set by the parent frame. The child can also set parameters of the parent. There are three types of assignments: onDock, onUpdate and onUndock.

When a new component is docked the assignments are always first executed on the parent side. Meaning

* assignmentOnDock in parentDocking
* assignmentOnDock in childDocking
* assignmentOnUpdate in parentDocking
* assignmentOnUpdate in childDocking

Assignments in the onDock Block doesn't trigger recursive onUpdate actions themself.

On configuration changes, only the update assignments from the changed component are executed.

On Undock the order is reversed:

* assignmentOnUnDock in childDocking
* assignmentOnUnDock in parentDocking

One ParentDockPoint can only be used by one ChildDockPoint, on the other hand one ParentDockLine can be used by multiple ChildDockPoints at once. The maximum possible Children on a DockLine can be set via the maxChildren property.

#### Dynamically change docking

If an existing dock-connection and the parent-child relationship becomes invalid (due to a changed condition or changed masks), the child is undocked from their parent. In principle and dogmatically, an undocked child (a child without a parent) and all of its children (the entire child tree) are deleted immediately. However, in order to prevent unnecessary deletion, an alternative docking between the child and the parent is sought and, if found, established (docked) before the children are deleted. This feature enables completely dynamic changes of docking points. When the docking is changed, the child's position is recalculated and automatically changed depending on the new position and rotation, whereby the distance from the new to the old position is not restricted. If there is more than 1 possible new docking position, the position that causes the smallest translation of the child component is selected.

#### Delete PlanComponent and try to keep the children

If a PlanComponent is deleted and the children of the deleted PlanCmponent should be kept, it must be attempted to dock the children to the parent. A child can only be kept if it can be docked to the parent. Therefore, a matching docking point with a mask that matches the parent's mask must be found. Which child has priority when docking to the parent depends on the "persistent" and "priority" properties of the "parentDockings" to which the children are currently docked. This means that the PlanComponet to be deleted decides via the "persistent" and "priority" properties of the "parentDockings" which children are retained. If "persistent" is set to "false", a child element cannot be docked at all to the parent of its parent. The default value for "persistent" is "true". All chides that may be docked to the parent of their parent are sorted by the attribute "priority" and are attempted to dock in this order. If the attribute "Priority" is not set, this means the lowest priority.

In the following example, component "A" has a child "B". "B" itself has three children "C1", "C2" and "C3".\
For the parent docking of "B" to "C1", the attribute "persistent" is set to "false".\
The parent docking of "B" to "C2" has set the attribute "persistent" to "true" and "priority" 1.\
The parent docking of "B" to "C3" has set the attribute "persistent" to "true" and "priority" 1.

![docking delete child](<docking\_delete\_child (1).png>)

PlanComponent "B" is deleted. The root PlanComponent can only take over one of the 3 children because it has only one docking point.\
The PlanComponent "C1" is not "persistent", so it is not docked to the root PlanComponent. "C1" is automatically deleted.\
"C2" has the higher priority than "C3", so that "C2" is docked to the root PlanComponent and "C3" is automatically deleted.

![docking delete child result](<docking\_delete\_child\_result (1).png>)

#### Collision detection of docked components

Sometimes a newly added component would collide with an existing one. In some cases this is the expected behavior but in other scenarios the collision should not be allowed. It is possible to define a `collisionCondition` script for DockingPoints, DockingLines, DockingPointRanges and DockingLineRanges. The `collisionCondition` script defines if a collision with another component is allowed for the corresponding docking. If the `collisionCondition` script evaluates to `false` all docking previews of colliding components get discarded, so it is not possible to add a component there. A list (array) of all colliding components can be retrieved inside of the `collisionCondition` script via `collidingComponentIDs`. It is an array which contains the IDs of all colliding components, ordered by their overlapping volume from largest to smallest. There are also some additional functions available inside the `collisionCondition` script:

* `getComponentProperty(key:string, *componentId:int)`
* `getBoxOrigin(*componentId:int)`
* `getBoxSize(*componentId:int)`
* `getBoxForMeasurementOrigin(*componentId:int)`
* `getBoxForMeasurementSize(*componentId:int)`

These functions have been extended and optionally accept an additional parameter to retrieve the corresponding data from a specific component via its ID. The IDs inside the `collidingComponentIDs` variable can be used in this case.

The calculation of the collision detection is based on axis aligned bounding box calculations. So for determination if something is colliding or not the `BoundingBox` or `BoxForMeasurement` (if available) get used. This is a very fast and performant calculation but has the drawback that sometimes components can get detected as colliding, even if they aren't, just because their bounding boxes are colliding but not the 3D objects themselves. This is especially the case if 3D objects get rotated.

If the object has a `BoundingGeometry` defined this geometry gets used and a more complex mesh intersection calculation is taking place which checks if the 3D objects are intersecting each other. This is an exact calculation that checks exactly the 3D meshes against each other, and so is a bit slower but far more precise. If only one of the objects has a `BoundingGeometry` defined the `BoundingBox` of the other object gets used for calculation. Be aware that if the component to be docked has a `BoundingGeometry` defined, the more complex mesh intersection calculation will always take place at docking preview generation.

In the case of DockingLines and DockingLineRanges, the generated lines are clipped based on the projection of the bounding box of the colliding geometry onto the line. This means that the line is segmented and shortened depending on the collisions detected. If none of the remaining line segments is large enough to dock the component in its full size, the line is completely discarded.

#### Locking of parent dockings

With the property `childDeletionLocked` it is possible to prevent deletion of child components on a specific parent docking. If this property is set to true it will not be possible to delete the child component docked at this docking. But if the parent component itself gets deleted, the docked child will also get deleted, even if the `childDeletionLocked` property is set to true. `childDeletionLocked` supports simple expression/condition scripts.

### Siblings

Additionaly to assignments throu parent/child connections, components can transfer Data via Siblingpoints. Siblingpoints connect to any other siblingpoint with the same mask and same position somewhere within the object. Therefor its possible to transfer data (parametervalues) directly between two childcomponents on completly seperated branches in the parent-child-hierachy. Like Dokcings, Siblingpoints have onDock, onUpdate and onUndock assignments. Regarding the executionorder during the docking process the logic follows the same rules as with Dockingpoints: first the assignments from the currently existing Component, then the assignment from the newly docked one. First both onDock, then onUpdate. On undock the order is reversed, same as with the DockingPoints.

Docking assigments are always executed prior to sibling assignments.

### Self Assignments

Normal assignments (either on docking or siblings) sets the value of a parameter on the other side of the connection. With self assignments one can set values on parameters of the component of the docking/sibling.

Self assignments are always executed after the "normal" assignment and never trigger recursive actions.

### onUpdate of Connections

Each connection definition (dockingpoint, dockingline, siblingpoint) may have their own `onUpdate`. Those are executed after the onUpdate of the component and the calculation of the position but before any other script of the connection is evaluated (condition, assignments). This `onUpdate` may write values to the connections-context which is then available in the other scripts on this connection. This is usefull when the connection may decide what data from the whole component to use within this context.

### Silent Assignments

Normal "On Update"-Assignments lead to a disabling of the parameter which is set from the assignment. This is done because normally a User shouldnt be able to change a Parameter whose value will be override with the next refresh. In some case (e.g. if the change of the value triggers an update of the connected Component which leads to changes in the parameters so that the changed value stays the same after the next refresh) this automatic disabling should be silenced. In this case one can use assignmentsOnUpdateSilent. Those assignments are handled exactly like onUpdate Assignments, but without disabling the parameter. Silent assignments are always applied before the normal assignments (if both exist).

### AssignmentScripts

For more complex solutions its possible to define assignmentScripts. Again seperated into onDock, onUnDock and onUpdate, those scripts are executed after the "normal" assignments are done. Within the assignmentScript one has access to the values of both sides of the connection (parent and child in docking, both siblings for siblingpoints). Those are accessilbe via context definition. F.e. the paramter "width" of the other side of the connection is accessible via "other.width" while "self.width" is the own parameter width. In parentDockings the "other." context is also accessible via "child.", in childDockings its "parent." and for Siblings its "sibling."

### Dock Ranges

Dockranges provide the ability to create a range of dockPoints without specifing each of them individually. A range is defined by a startingPoint, the stepSize and the endPoint. The step might be one 3D step which is used as a direct increment until the endPoint is reached, or as stepX, stepY and stepZ which creates a raster of points. The condition and assignments are defined for the range, but executed for each generated point seperatly. Within those scripts you can access the position of the point and index within the range via "connection.position" and "connection.index".

### AddOn Spots

For a visual hint to the user, its possible to define addOnSpots. An AddOnSpot is a position in the 3D space relative to the current Component where a Plus-Sign is shown. If the User clicks on the sign, the AddOn-View opens.

AddOnSpots have a position and a condition. The mask is defined for future use and has nothing to do with docking masks.

### Packaging Size

This feature allows defining a package size for its component. This size will be the amount of all appearances of this component. Description by example:

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

The possible "packageSizes" are set to \[5,3], this means for example if the component is docked 11 times the number of packages with size 5 will be 2 and the number of packages with size 3 will be 1. The number of components will always be first divided into the biggest possible package size and then the next smaller one and next smaller one until the smallest one is reached.

The parameter packaging adds also the size 1 to the "packageSize" if the condition of "someOtherParameter == 1" is true.

The parameter "articleNr" and "pricing" are containing the variable "packageSize". Therefore it is possible to get the current "packageSize".

### Dimensioning

The configurator automatically shows the dimensions of the bounding box, or of the boxForMeasurement if defined. Additional dimensioning levels can be defined as objects in the dimensionings array. Every dimensioning has a type, from, to, level and visibility field:

* type defines where this dimensioning applies (x, y or z)
* from and to defines the begining and the end of the dimensioning
* level is the layer of the dimensioning. 0 is the outermost layer
* visible can be any condition defining if this dimensioning should be shown.

### Plan interaction

In order for configurations to interact with objects in the plan such as walls, it must be possible to define the part of the geometries that can be influenced. This information must be taken into account when placing a configuration in a plan.

### Intersect wit walls

In the case of walls, this is a 2-step process. In the plan component itself the state `intersectWithWalls` needs to be set. If this state is not set, the PlanComponent and its underlying SubParts are not checked for intersections with walls. How to intersect the geometry with walls in detail must be defined with the special geometry function `IntersectWithWalls`.

### Configuration format

The Configuration describes an actual component in a plan with the set parameters and the docked children.

```json
{
  "componentId": "<id der Root Komponente>",
  "parameters": {
        "paramKey1": "paramValue1", 
        "paramKey2": "paramValue2", ? 
  },
  "children": [{
         "componentId": "",
         "parameters": {
                "paramKey1": "paramValue1", 
                "paramKey2": "paramValue2", ... 
        },
        
// Docking point sample
        "dockParent": "[ {x,y,z} ]",  
        "dockPosition": "{x,y,z}",
        "dockChild": "{x,y,z}",
      
// Docking line sample
        "dockParent": "[ {x,y,z}, {x,y,z} ]", 
  "dockPosition": "{x,y,z}",
        "dockChild": "{x,y,z}",

        "children": [ ... ]
    }]
}
```

| Tag name              | Type   | Description                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentId           | string | the id of outermost component.                                                                                                                                                                                                                                                                                                                                |
| parameters            | map    | the values to be set for the parameters of this component. Its a Map of key-value pairs where the key is the key of the parameter and the value is the value to be set.                                                                                                                                                                                       |
| children              | array  | contains recursivly the definition for all components which are docked to this component.                                                                                                                                                                                                                                                                     |
| children/dockChild    | string | defines the dockingPoint (one of the points defined in ChildDockings) used to dock this component to its parent. It is defined throu the position of the dockingPoint.                                                                                                                                                                                        |
| children/dockParent   | string | defines the docking of the parent (from the possible dockings defined in ParentDockings of the parent) used to dock this component to. For a DockingPoint the Array contains one point (position of the point), for a DockingLine it contains two points (the start and end point of the line). The positions are within the coordinate system of the parent. |
| children/dockPosition | string | defines the actual position of the dockingPoint within the coordinate system of the parent. This is used to define the actual position on a dockingLine.                                                                                                                                                                                                      |

A note to the docking logic: The positions should be stated with 2 digits floating point precision. When matching the points with given docking points from the component definition, they are rounded to 1 digit.

### Requirements

There are a few requirements to consider when defining the configuration definition for Components. Since Roomle provides realtime visualization on different plattforms, the models must not become to complex. In general the same rules apply as for static items. When talking about 3D visualization the final number of triangles is the main factor. The less triangles the better the performance. On the other hand less triangles may mean less quality. Therefore one should thrive for the perfect tradeoff between quality and performance.

We define recommendations for preferred average values and upper boundaries that must not be exceeded.

### Items

Since Components can be combined to items (via docking logic) of a big variety in size and complexity are possible. Nevertheless the average trianglecount should be between 2000 and 3000. Any Item must not exceed 10000 triangles.

For these values only the rendered triangles are counted, meaning the geometry parts send to the 3D engine for a given parameter combination. Meshes and Primitives which are in the geometryscript but not send to the Engine because of conditions in the script are not counted. Because of the nature of primitives, they should always be preferred to meshes wherever possible.

| Geometryfunction | trianglecount desktop                                                                                                          | trianglecount mobile                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| AddCube          | 43                                                                                                                             | 12                                                          |
| AddSphere        | Depending on the maximum size per dimension: < 10 mm: up to 80 < 100 mm: up to 290 < 1000 mm: up to 1100 < 3000 mm: up to 2100 | same                                                        |
| AddCylinder      | 8\*CircleSegments - 4                                                                                                          | 4\*CircleSegments - 4                                       |
| AddPrism         | 8\*NumberOfVertices - 4                                                                                                        | 4\*NumberOfVertices - 4                                     |
| AddRectangle     | 2                                                                                                                              | 2                                                           |
| AddMesh          | as defined in the call if no indices provided: nrVertices/3                                                                    | as defined in the call if no indices provided: nrVertices/3 |

### Configuration Definition

Beside the restrictions on triangles for realtime rendering performance, restriction on filesize for the configuration format apply. This is needed to ensure parsing and execution speed during interaction. Configuration definition should have less than 10k characters on average and must not exceed 500k characters. For these values all characters in the json-file are counted. To fullfill those boundaries one should try to use primitives wherever possible.

### Textures

Since imagefiles are always heavy on the memory usage, please keep the usage of textures as little as possible.

Regarding imagefiles for the textures, the same rules as for textures of static items applies:

Imagefiles must be JPEG or PNG with a maximum size of 2048x2048 pixels. The recommended size is below 512x512 pixels. For better performance consider keeping the imagesize a power of two (e.g. 32,64,128...), not necessarily square and use the mm dimensions for scaling.

## JSON Objects

This chapter defines all possible JSON Objects used within a Component definition or Configuration. A "?" denotes an optional field.

### Script-types

For some properties it is possible to pass a `Script`, `Expression` or `Condition` instead of a simple constant value. The different script types are:

* `Script`: Complex scripts
  * e.g.: `"value1 = 1; value2 = 2; if (value1 < value2) {return true;}"`
* `Expression`: Simple expression that evaluates to a specific value
  * e.g.: `"value1 - value2"`
* `Condition`: Similar to expression but always evaluates to `true` or `false`
  * e.g.: `"value1 >= value2"`

```none
Currency: "EUR"|"GBP"|"USD"|...
Region: "default"|"at"|"uk"|"us"...
Language: "en"|"de"|...
Type: "Integer"|"Decimal"|"String"|"Boolean"|"Material"
UnitType: "length"|"area"|"count"|"angle"
Value: long|float|String|true|false
Script<ResultType>: String
```

```json
Range : {
  "valueFrom": Expression<Decimal>,
  "valueTo": Expression<Decimal>,
  "step": Expression<Decimal>,
  "unitRelativeStep": Boolean?(false),
}
```

```json
ParameterGroup : {
  "key": String,
  "label": Script<String>?,
  "labels": { (Language(_Country)?: String)+ },
  "collapsed": Condition<Boolean>?(false),
  "sort": Script<Long>?(0)
}
```

```json
Parameter : {
  "key": String,
  "type": Type,
  "sort": long,
  "unitType": UnitType,
  "value": Value,
  "label": Script<String>?,
  "labels": { (Language(_Country)?: String)+ },
  "defaultValue": Value?,
  "enabled": Condition<Boolean>?(true),
  "visible": Condition<Boolean>?(true),
  "visibleAsGlobal": Condition<Boolean>?(true),
  "global": Boolean?(false),
  "visibleInPlanner": Boolean?(false),
  "volatile": Boolean?(false),
  "highlighted": Boolean?(false),
  "visibleInPartList": Condition<Boolean>?,
  "validGroups": [ String* ]?,
  "validRange": Range?,
  "validValues": [ Value* ]?,
  "conditionalGroups":[ ValueObject* ]?,
  "valueObjects":[ ValueObject* ]?,
  "onValueChange":Script?,
  "group":Expression<String>?,
  "level": Integer
}
```

```json
ValueObject  {
  "value": Value,
  "label": Script<String>?,
  "labels": { (Language(_Country)?: String)+ }?,
  "condition": Script<Boolean>?,
  "thumbnail":String?
}
```

```json
ConnectionWithAssignment  {
 "position": Expression<Vector3f>,
 "maxConnections": Expression<long>?(1),
  "mask": Expression<String>,
  "onUpdate": Script?,
  "assignmentsOnDock": { String:Script< String>,...},
  "assignmentsOnUpdate": { String:Script< String>,...},
  "assignmentsOnUpdateSilent": { String:Script< String>,...},
  "assignmentsOnUnDock": { String:Script< String>,...},
  "selfAssignments": {
    "onDock": { String:Script< String>,...},
    "onUpdate": { String:Script< String>,...},
    "onUnDock": { String:Script< String>,...}
  },
  "assignmentScripts": {
    "onDock": Script,
    "onUpdate": Script,
    "onUnDock": Script
  },
  "persistent": Condition<Boolean>,
  "priority": Expression<Integer>,
  "childDeletionLocked": Condition<Boolean>(false),
}
```

```json
DockingPoint : ConnectionWithAssignment {
  "rotation": Expression<Vector3f>,
  "condition": Script<Boolean>?(true),
  "collisionCondition": Script<Boolean>?(true),
  "rotationaxis": Expression<Vector3f>,
  "rotationangle": Expression<float>,
}
```

```json
DockingRange  {
  "stepX": Expression<float>,
  "stepY": Expression<float>,
  "stepZ": Expression<float>,
  "stepEnd": Expression<Vector3f>
}
```

```json
DockingPointRange : DockingPoint, DockingRange  {
}
```

```json
DockingLine : DockingPoint {
  "positionTo": Expression<Vector3f>,
  "maxChildren":Expression<long>?(Inf)
}
```

```json
DockingLineRange : DockingLine, DockingRange {
}
```

```json
ParentDockings : {
  "points":[ DockingPoint* ],
  "lines": [ DockingLine* ],
  "ranges":[ DockingPointRange* ],
  "lineRanges": [ DockingLineRange* ]
}
```

```json
ChildDockings : {
  "points":[ DockingPoint* ]
}
```

```json
SiblingPoint : ConnectionWithAssignment {
}
```

```json
AddOnSpot {
  "position": Expression<Vector3f>,
  "mask": String,
  "visible": Condition<Boolean>,
  "condition": Script<Boolean>?(true)
}
```

```json
PriceList : {
  "region": Region,
  "currency": Currency,
  "retailPriceDependsOnCustomerPrice": Boolean?(false),
  "price": Script<float>,
  "retailPrice": Script<float>
}
```

```json
Superseding : {
  "type": String,
  "key": String,
  "overrides": SupersedingOverride?
}
```

```json
SupersedingOverride : {
  "key": String,
  "group": String?
}
```

```json
SubComponent : {
  "internalId": String,
  "componentId": String,
  "assignments": { String:Script< String>,...},
  "numberInPartList":Script<integer>,
  "active":Script<Boolean>?(true),
  "isMain":Script<Boolean>?(false),
  "supersedings":[ Superseding* ],
  "sort": Script<Long>?(-1)
}
```

```json
PossibleChild : {
  "itemId": String?,
  "componentId": String?,
  "condition": Script<Boolean>?(true),
  "default": Script<Boolean>?(false),
  "group": Expression<String>,
  "visible": Condition<Boolean>?,
  "visibleAsGlobal": Condition<Boolean>?,
  "level": Integer
}
```

```json
Component : {
  "id": String,
  "valid": Script<Boolean>?(true),
  "label": Script<String>?,
  "labels": { (Language(_Country)?: String)+ },
  "parameters": [ Parameter* ],
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
  "boundingGeometry": Script?,
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
```

```json
ParameterValues  {
  String: String,... 
}
```

```json
Configuration : {
  "componentId": String,
  "parameters": ParameterValues,
  "dockParent": Expression<Vector3fArray>,
  "dockPosition": Expression<Vector3f>,
  "dockChild":Expression<Vector3f>,
  "children": [Configuration*]?
}
```

```json
Packaging : {
  "size": Integer,
  "condition": Script<Boolean>
}
```

```json
Dimensioning : {
  "labels": { (Language(_Country)?: String)+ },
  "type": String,
  "from": Script<Float>,
  "to": Script<Float>,
  "level": Integer,
  "visible": Script<Boolean>
}
```

```json
PlanInteraction: {
  "intersectWithWalls": Condition<Boolean>
}
```

```json
PluginData: {
  "imos": imosPluginData?
}
```

```json
imosBaseData: {
  "attributes": { (attributeName : Script<String>)+ }?
}
```

```json
imosData: imosBaseData {
  "id": Script<String>,
  "parent": Script<String>,
  "active": Script<bool>?
}
```

```json
imosZone: imosData {
  "divnum": Script<long>
}
```

```json
imosDivision: imosData {
  "type": Script<String>,
  "formula": Script<String>
}
```

```json
imosElement: imosData {
  "side": Script<String>
}
```

```json
imosPluginData: imosBaseData {
  "rootzone":Script<String>?,
  "dimensions":{"width":Script<float>,"depth":Script<float>,"height":Script<float>},
  "zones": [imosZone*],
  "divisions":[imosDivision*],
  "elements":[imosElement*]
}
```

## RoomleScript

RoomleScript is a simple scripting untyped language used within the component definition and configurations. There exists the possiblity of Comments either single line or multiline. Comments are ignored by the Configurator.

### Grammar

```none
Script: Command*

Command: Evaluate | Assign | IfElse | For | Branch | Comment | MultilineComment
  Evaluate: Expression ';'
  Assign: identifier '=' Expression ';'
  CommandBlock: Command | '{' Command* '}'
  IfElse: 'if' '(' Condition ')' CommandBlock ('else' CommandBlock)?
  For: 'for' '(' Command ';' Condition ';' Command ')' CommandBlock
  Branch: 'break' | 'continue' | 'return' Expression?
  Comment: ( '#' | '//' ) String* '\n'
  MultilineComment: '/*' String* '*/'

Condition:
  Condition ('&&' | '||') Condition
  Expression ( '==' | '!=' ) Expression
  Expression ( '<=' | '>=' | '<' | '>' ) Expression
  
Expression: SimpleExpression | Array
  Array: identifier? '[' (SimpleExpression(,SimpleExpression)*)? ']'
  
SimpleExpression: Variable | Function | Struct | Value | UnaryOperation | BinaryOperation | TernaryOperator | '(' Expression ')'
  Variable: String
  Function: FunctionName '(' Expression* ')'
  FunctionName: String
  Struct: Vector2f | Vector3f
  Vector2f: 'Vector2f'? '{' SimpleExpression ',' SimpleExpression '}'
  Vector3f: 'Vector3f'? '{' SimpleExpression ',' SimpleExpression ',' SimpleExpression '}'
  Value: Number | String
  Number: int | float
  UnaryOperation: ( int '++' ) | ( ('sin'|'cos'|'tan') '(' Expression ')' )
  BinaryOperation: SimpleExpression Operand SimpleExpression
  TernaryOperator: SimpleExpression ? SimpleExpression : SimpleExpression
  Operand: '+' | '-' | '*' | '/' 
```

Operator precedence

| Precedence | Operator                     | Description                                           |
| ---------- | ---------------------------- | ----------------------------------------------------- |
| 1          | `-a`, `+a`                   | Unary plus and minus                                  |
| 2          | `!a`                         | Logical NOT                                           |
| 3          | `a++`                        | Suffix/postfix increment                              |
| 4          | `a*b`, `a/b`, `a%b`          | Multiplication, division and modulo                   |
| 5          | `a+b`, `a-b`, `a\|b`         | Addition, subtraction and concatenation               |
| 6          | `a>=b`, `a<=b`, `a>b`, `a<b` | Relational operators < and ≤ and > and ≥ respectively |
| 7          | `a==b`, `a!=b`               | Equality operators = and ≠ respectively               |
| 8          | `a&&b`                       | Logical AND                                           |
| 9          | `a\|\|b`                     | Logical OR                                            |
| 10         | `a?b:c`                      | Ternary conditional                                   |

The Roomle script supports the `%` (modulo) operator and also has the `fmod(float):float` function.

`break` statement:

The `break` statement terminates a `for`-loop. If a "break" statement is inside nested loops, the innermost loop containing the statement is terminated. A `break` statement that is not inside a loop is ignored and has no effect.

`continue` statement:

The `continue` statement skips the remaining statements in a `for`-loop, but the loop itself is not terminated. The loop continues its execution with the next iteration. When a `continue` statement is inside nested loops, only the innermost loop containing the statement is affected A `continue` statement that is not inside a loop is ignored and has no effect.

`return` statement:

The `return` statement terminates the script immediately. This statement can be invoked anywhere within a script. All subsequent commands are skipped and the script ends. It is possible to return a value for scripts that assign a value to its dependent property via "`=`", such as

* `articleNr`
* `label`
* `valid`
* `condition`
* `price`
* `retailPrice`

## Parameters, internal Variables and Context

### Parameters and Variables

Within a component every script has access to a list of variables. All scripts can read the values but only onUpdate, onValueChange and the assignmentScripts are allowed to change them. The list of variables contain all Parameters with the parameter-key as the variable name. New variables are created on first use (e.g. when a value is assigned to it). In Scripts with write access to the internal variables those variables are also stored and from now on accessible from all the other scripts.

### Variables context

Variables in roomle script can (and should) always be used with a specific context that defines the scope of the variable. Variables that are used temporarily only insed one script should always be defined with the local `_.*` modifier, this has a great performance benefit in comparison to variables in the component scope `self`. The following is a list of all available context-prefixes. Further information on this topic can be found under [Connections](../../../roomlescript-reference/configuratorscript.md#Connections) and a detailed list of all script access rights regarding the context-prefix can be found under [List of script access rights](../../../roomlescript-reference/configuratorscript.md#List-of-script-access-rights).

* `_.*` -> Local context: Available only inside the scope of the current script
* `*` and `self.` -> Self context: Available in all scripts of the component. Can be read everywhere, but only written in specific scripts
* `connection.*` -> Connection context: Available in connection elements (dockpoint, dockline, sibling)
* `other.*`, `other_connection.*` -> Other context: Available in connection elements (dockpoint, dockline, sibling)
* `object.*` -> Object context: This is the global context and these variables are available in all scripts of all connected components and parts

#### Connection, other and other\_connection context

In some scripts you have access to more than one list of variables at once (for example in assignmentScripts). For that you can access variables via "\<context>.\<variableName>" . In any connection element (dockpoint, dockline, sibling) you can for example access the position of the current dockPoint via "connection.position" and the index within the dockRange via "connection.index". also the context of the other side of the connection (if one is connected) is available in `other_connection.*`

#### Global variable context (object scope)

It is possible to define globally available variables via the `object` keyword "\<object>.\<variableName>". These variables are available in all scripts of all connected components and subComponents/parts. These variables follow the same access rules as for `self` variables and so can be read from inside every script, but only specific scripts have the rights to write, see [List of script access rights](../../../roomlescript-reference/configuratorscript.md#List-of-script-access-rights)

### Basic data types

All basic data types (`baseType`) are support and follow the usual order:

* `bool`
* `int`
* `float`
* `string`

So `string` is more powerful than `float` which is more powerful than `int` and that again is more powerful than `bool`. This comes to use when working with arrays. That means that you can for example insert a `float` value into an array of `string` but not the other way round. More on that topic in the descriptions of the individual array operations.

#### Integer data type for values

Support for integer data type in roomle script was introduced later in its lifetime and so requires a special suffix `i` to explicitly define an integer value to not break existing content. So an integer value of `500` looks like `500i`, if only `500` gets supplied then this value gets interpreted as a float value. So this means if you have an integer array of `arr = [1i,2i,3i]` it is necessary to also use the suffix for all array (value) operations, so for example if you look for a value inside of the array `inArray(2,arr)` would deliver `false` but `inArray(2i,arr)` `true` as a result. Values inside of the array, and also the output, is without the suffix, so it looks like this `[1,2,3]` and also if you get a value from it `get(arr,2)` it delivers `3` as result. So the suffix is just needed to explicitly define the data type of the value. IMPORTANT: As mentioned before this is only needed for values! It is not needed for things like indices or such stuff, but is also supported, so it is possible to write an index with or without the suffix.

### Available Functions

This section includes all functions available in the Roomle Script

### General Functions

| Functionname                        | Parameters                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeGroupInView                   | -                                                                                                                             | To request active group in the view.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| getPosition                         | \*componentId:int                                                                                                             | Returns the current position of the component in the coordinate system of the parent. ONLY Inside of the collisionCondition script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                                                                                                                                                                                                                                                                                                                                                                                          |
| getDockPosition                     | -                                                                                                                             | Returns the current position of the childDockPoint of this component in the coordinate system of the parent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getDockPositionRelativeToParentDock | -                                                                                                                             | Returns the current position of the childDockPoint of this component relative to the parentDock in the coordinate system of the parent. The reference is the point for dockpoints and the starting point for docklines.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| getUniqueRuntimeId                  | -                                                                                                                             | Returns a unique runtimeId for the component. This id is unique in the session and wont change for this component (during this session).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| isnull                              | -                                                                                                                             | Checks whether the provided variable is null. if variable is null it returns true , otherwise false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| setnull                             | -                                                                                                                             | Sets the given variable to null.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| getMaterialProperty                 | parameterKey:string, propertyKey:string, defaultValue:string                                                                  | Returns material property value for a material.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| xFromVector                         | vector:Vector3f{x,y,z}                                                                                                        | Returns the x component of the given vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| yFromVector                         | vector:Vector3f{x,y,z}                                                                                                        | Returns the y component of the given vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| zFromVector                         | vector:Vector3f{x,y,z}                                                                                                        | Returns the z component of the given vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| set                                 | array:Array\<baseType> index:int value:baseType                                                                               | Sets the value at the given index in the array. It is possible to set values of a lower type in an array of a more powerful type, e.g. set a `bool` value in an array of type `float`. Keep in mind that the value gets converted to the type of the array.                                                                                                                                                                                                                                                                                                                                                                                        |
| get                                 | array:Array\<baseType> index:int                                                                                              | Returns the value at the given index in the array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| pushBack                            | <p>array:Array&#x3C;baseType> value:baseType<br>array:Array&#x3C;baseType> value:Array&#x3C;baseType></p>                     | Adds the value, or multiple values, at the end of the array. It is also possible to add another array via variable or literal. Also mixed parameters are support (eg: `pushback(arr, 1, 2, otherArr, [3, 4, 5])`. It is possible to push back single values of a lower type to an array of a more powerful type. The value then gets converted to the type of the array. Push back an array, or multiple values at once, into an array of a different type is not possible. `pushBack` is also implemented for `Vecto2f` and `Vector3f`. So it is possible to push `Vecto2f` and `Vector3f` arrays and values to arrays of the corresponding type. |
| insert                              | <p>array:Array&#x3C;baseType> index:int value:baseType<br>array:Array&#x3C;baseType> index:int value:Array&#x3C;baseType></p> | Insert the value, or multiple values, at the given index and pushes back all other elements in the existing array. Inserting multiple values at once is also supported. It is also possible to insert single values of a lower type to an array of a more powerful type. The value then gets converted to the type of the array. Inserting an array, or multiple values at once, into an array of a different type is not possible.                                                                                                                                                                                                                |
| removeAt                            | <p>array:Array&#x3C;baseType> index:int<br>array:Array&#x3C;baseType> indexBegin:int indexEnd:int</p>                         | Removes one, or multiple, elements from an array and returns the next valid element in the array. If a range of elements gets removed `indexBegin` defines the first element to be removed and all elements up to `indexEnd` get removed, without the element at `indexEnd`. So the element before `indexEnd` is the last element that gets removed and the element at `indexEnd` stays and will be returned as the next valid element in the array.                                                                                                                                                                                               |
| popBack                             | array:Array\<baseType>                                                                                                        | Removes and returns the last element of the array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| indexOf                             | value:baseType array:Array\<baseType>                                                                                         | Returns the first index of the value in the array, or -1 if not found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| length                              | array:Array\<baseType>                                                                                                        | Returns the current length of the array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| getBoxOrigin                        | \*componentId:int                                                                                                             | Returns the (local) origin position of the bounding box of this component relative to its own root (not global!). ONLY Inside of the `collisionCondition` script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                                                                                                                                                                                                                                                                                                                                                            |
| getBoxSize                          | \*componentId:int                                                                                                             | Returns the size of the bounding box of this component. ONLY Inside of the `collisionCondition` script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| getBoxForMeasurementOrigin          | \*componentId:int                                                                                                             | Returns the (local) origin position of the measurement box of this component relative to its own root (not global!). ONLY Inside of the `collisionCondition` script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                                                                                                                                                                                                                                                                                                                                                         |
| getBoxForMeasurementSize            | \*componentId:int                                                                                                             | Returns the size of the measurement box of this component. ONLY Inside of the `collisionCondition` script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| setBoxForMeasurement                | Box:Vector3f{w,d,h},Offset:Vector3f{x,y,z}                                                                                    | Defines the box to be used for calculating the measurements of this component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| isEnabled                           | parameterKey:string                                                                                                           | Returns true if the parameter is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| setEnabled                          | parameterKey:string, value:bool                                                                                               | Sets the enabled-property of the parameter to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| isVisible                           | parameterKey:string                                                                                                           | Returns true if the parameter is visible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| setVisible                          | parameterKey:string, value:bool                                                                                               | Sets the visible-property of the parameter to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| like                                | value: string, pattern: string                                                                                                | Returns true if the value of the string matches the pattern, '\_' is a wildcard for any character and '%' is a wildcard for any string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| in                                  | anyVariable, listOfValues...                                                                                                  | Returns true if the first Parameter is equal to any of the remaining parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| inArray                             | anyVariable, array:Array\<baseType>                                                                                           | Returns true if the first Parameter is equal to any of the elements in the array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| intersection                        | array:Array\<baseType>, array:Array\<baseType>                                                                                | Returns an array containing the numbers that exist in both arrays. Intersecting arrays of different types also returns an empty array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| string                              | value:any \[, precision:int]                                                                                                  | Converts the parameter to string, the precision argument is optional and specifies the decimal places of a floating-point number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| stringToArray                       | argument:string                                                                                                               | Converts a string to an array of floating-point numbers (array:Array). The numbers in the string have to be constants. e.g.: `stringToArray('[1,2,3]')` returns the array \[1.0, 2.0, 3.0].                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| stringToVector2f                    | argument:string                                                                                                               | Converts a string to a value of type `Vector2f`. The numbers in the string have to be constants. e.g.: `stringToVector2f('{1,2}')` and `stringToVector2f('Vector2f{1,2}')` returns the vecotor Vector2f{1.0, 2.0}.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| stringToVector3f                    | argument:string                                                                                                               | Converts a string to a value of type `Vector3f`. The numbers in the string have to be constants. e.g.: `stringToVector3f('{1,2,3}')` and `stringToVector3f('Vector3f{1,2,3}')` returns the vecotor Vector3f{1.0, 2.0, 3.0}.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| float                               | any                                                                                                                           | Converts the parameter to float.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| size                                | param:string                                                                                                                  | Calculates the size of the given string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| substring                           | string:string, startIndex:int, length:int                                                                                     | Returns the substring of the given string, starting at startIndex with given length.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| stringPart                          | string:string, delimiter:string, index:int, \*fallback:string                                                                 | Splits a string at the delimiter and returns the substring at the corresponding index, or the (optional) fallback-value (or empty string if not provided) if not found or invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| stringSplit                         | string:string, delimiter:string                                                                                               | Splits a string at the delimiter and returns an array:Array\<string> with all substrings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| tanh                                | angle:float                                                                                                                   | Returns the tanges hyperbolicus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| sinh                                | angle:float                                                                                                                   | returns the sinus hyperbolicus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| cosh                                | angle:float                                                                                                                   | Returns the cosinus hyperbolicus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| tan                                 | angle:float                                                                                                                   | Returns the tanges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sin                                 | angle:float                                                                                                                   | Returns the sinus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| cos                                 | angle:float                                                                                                                   | Returns the cosinus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| atan                                | value:float                                                                                                                   | Returns the arcus tanges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| atan2                               | y:float, x:float                                                                                                              | Returns the principal value of the arc tangent of y/x.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| asin                                | value:float                                                                                                                   | Returns the arcus sinus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| acos                                | value:float                                                                                                                   | Returns the arcus cosinus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| log                                 | value:float                                                                                                                   | Returns the natural logarithm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| log10                               | value:float                                                                                                                   | Returns the logarithm with base 10.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| exp                                 | value:float                                                                                                                   | Returns the exponential function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| fabs                                | value:float                                                                                                                   | Returns the absolute value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sqrt                                | value:float                                                                                                                   | returns the square root.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| fmod                                | a:float, b:float                                                                                                              | Returns the floating point remainder of a/b.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| pow                                 | a:float, b:float                                                                                                              | Calculates a to the power of b.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| floor                               | number:float, digits:int                                                                                                      | Returns the next lower number with the given digits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ceil                                | number:float,digits:int                                                                                                       | Returns the next bigger number with the given digits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| round                               | number:float, digits:int                                                                                                      | Rounds to the nearest number with the given digits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| isnull                              | anyVariable                                                                                                                   | Returns true if the variable/parameter is not set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ifnull                              | anyVariable, defaultValue:any                                                                                                 | Returns the first parameter if it is not null, otherwise the second.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| getData                             | ... key: (string or int)                                                                                                      | Returns an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| getDataOrNull                       | ... key: (string or int)                                                                                                      | Returns an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| getDataWithDefault                  | ... key: (string or int), defaultValue: (boolean, int, float or string)                                                       | Returns an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| getSubComponentData                 | internalId: string, ... key: (string or int)                                                                                  | Returns an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| getSubComponentDataOrNull           | internalId: string, ... key: (string or int)                                                                                  | Returns an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| getSubComponentDataWithDefault      | internalId: string, ... key: (string or int), defaultValue: (boolean, int, float or string)                                   | Returns an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| evalauteData                        | ... key: (string or int)                                                                                                      | Evalautes an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| evalauteDataOrNull                  | ... key: (string or int)                                                                                                      | Evalautes an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| evaluateDataWithDefault             | ... key: (string or int), defaultValue: (boolean, int, float or string)                                                       | Evalautes an element of the "data" object addressed by a list of keys and/or indices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| evaluateSubComponentData            | internalId: string, ... key: (string or int)                                                                                  | Evalautes an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| evaluateSubComponentDataOrNull      | internalId: string, ... key: (string or int)                                                                                  | Evalautes an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| evaluateSubComponentDataWithDefault | internalId: string, ... key: (string or int), defaultValue: (boolean, int, float or string)                                   | Evaluates an element of the "data" object addressed by a list of keys and/or indices from a subcomponent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| findData                            | ... key: (string or int), filterFunction: String                                                                              | Search for objects in a data using a filter function. The return value is an array with all matches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| findSubComponentDataData            | internalId: string,... key: (string or int), filterFunction: String                                                           | Search for objects in a data using a filter function from a subcomponent. The return value is an array with all matches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| findAndEvaluateData                 | ... key: (string or int), filterFunction: String                                                                              | Evalautes and search for objects in a data using a filter function. The return value is an array with all matches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| findAndEvaluateSubComponentData     | internalId: string,... key: (string or int), filterFunction: String                                                           | Evalautes and search for objects in a data using a filter function from a subcomponent. The return value is an array with all matches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| getComponentProperty                | key:string, \*componentId:int                                                                                                 | Returns the value for the given property-key. Available keys are `runtimeId`, `catalogId` and `externalId`. `getComponentProperty('runtimeId')` delivers the same result as `getUniqueRuntimeId()` and returns an integer value with the runtimeId, whereas `getComponentProperty('catalogId')` and `getComponentProperty('externalId')` return a string value with the corresponding id-values (or empty string if no catalogId was defined). ONLY Inside of the `collisionCondition` script it is possible to optionally pass a componentId to the function to retrieve the data from the corresponding component.                               |
| getObjectProperty                   | key: string, \*defaultValue: (boolean, int, float or string)                                                                  | Returns the value for the given property-key from the plan object. The only available key at the moment is `wallthickness`. `getObjectProperty('wallthickness')` returns the thickness of the wall to which the plan object is attached if the object is used as a construction object. Otherwise, the default value or, if not present, 0 is returned.                                                                                                                                                                                                                                                                                            |

### Custom Script Functions

It is possible to define a custom function inside of scripts. These functions are available in the whole script after its definition, also if it was defined in the scope of an if/else/for body or even inside another function. The function is only available inside the script it was defined, so it is not possible to use a function that was defined in the `onUpdate` script inside the `geometryScript` (for example). To define a function it is only needed to provide the `function` keyword, followed by a name and parameters inside of brackets, followed by the function body inside curly brackets. Functions also support return values. So a function can look like this:

```json
function func(val) {
  result = val * 2;
  return val;
}
```

Afterwards you can call the function simply by writing

```json
func(10);
```

which result is `20` with the given example.

Functions have the same access rights as the scripts in which they get defined and used. So for example a function defined inside the geometry script has the same access rights as the geometry script itself.

If a parameter shadows an existing variable by using the same name, the parameters value gets used inside the function and a warning message gets raised. If a function shadows an existing, internal function by using the same name, the custom defined function overrules the existing, internal one and a warning message gets raised. Local variables (e.g.: `_.a`) are only available inside the function and get deleted when out of scope.

It is possible to pass functions as parameters or use them as values, for example something like this:

```json
function getStart() { return 1; }
function getCount() { return 10; }
function getSize() { return 50; }
function getMaterial() { return 'isdt:green'; }

function createCube(size, mat) {
    AddPlainCube(Vector3f{size, size, size});
    SetObjSurface(mat);
}

for (_.i = getStart(); _.i < getCount(); _.i++) {
  createCube(getSize() * _.i, getMaterial());
}
```

### Custom Component Functions

Similar to the `Custom Script Functions` it is possible to define `Custom Component Functions`. The biggest difference is that these functions are accessible in all scripts of the component. Another difference is that these functions support default values for arguments and also keyword arguments. Be aware that the first argument can not be passed via keyword argument! These functions are defined in the `functions` section of the component and look like this:

```json
"functions": [
    {
        "key": "foo",
        "arguments": [
            {
                "key": "myArg1",
                "defaultValue": 0
            },
            {
                "key": "myArg2",
                "defaultValue": 0
            }
        ],
        "script": "
            myReturnValue = maArg1 + myArg2 + 1;
            return myReturnValue;
        "
    }    
],
...
```

In this example the identifier/name (key) of the function is `foo` and so is callable from all scripts by simply writing its name: `foo()`. Defining a key is mandatory, without it a function would not be callable. The next section is the `arguments` section which defines an array of function arguments. Setting the `key` is mandatory because this is the name of the paramter it gets referenced inside the function script. The `defaultValue` property of an argument is optional and gets used inside the function script if no parameter was provided during function call. The last section is the function `script` itself, or function-body, and is the main part of the function and where the magic happens. Everything you can do inside a script is also possible to do inside the function script, including defining `Custom Script Functions` inside the body of a component function script. Be aware of script access rights, so if you create a component function that writes to a parameter or accesses members from `other` or `connection` or something, it is not possible to call this component function inside a script that does not have the corresponding access rights. So for example if your component function writes to a parameter it is not possible to call this functions inside of a geometry script. The highest access of a component function gets determined during compile time and throws an error if access rights got violated. It is also not possible to call functions recursive, this alse gets determined during compile time and throws an error, such functions are callable but always return `0`. Function name overrides are possible but throw a warning and the hierarchy is `Custom Script Function` -> `Custom Component Function` -> `Internal Function`, that means you can overwrite a internal function with a component function and then overwrite a component function with a script function. Variable shadowing gets detemined during runtime and also throws a warning, similar to how script functions behave. If a function gets called with too few arguments and no default values are given you also get an error. It is possible to call a component funciton inside another component function.

So a complete component definition could look something like this example:

```json
{
    "id": "catalog_id:component",
    "functions": [
        {
            "key": "foo",
            "arguments": [
                {
                    "key": "myArg1",
                    "defaultValue": 1
                },
                {
                    "key": "myArg2",
                    "defaultValue": 2
                }
            ],
            "script": "
                return myArg1 + myArg2 + 3;
            "
        }
    ],
    "parameters": [
        {
            "key": "result",
            "defaultValue": 0,
            "type": "Decimal"
        }
    ],
    "onUpdate": "
        result = foo(5);
    "
}
```

This would result in the parameter called `result` having the value `10`. The value for argument `myArg1` gets set during function call (`5`) and the value for argument `arg2` gets taken from its defined default value.

It is also possible to call functions from sub-components. This can simply be achieved by putting the name of the sub-component with a dot in front of the function call, so something like `comp.func()`. This could look like the following example:

```json
{
    "id": "catalog:subComponent",
    "functions": [
        {
            "key": "foo",
            "arguments": [
                {
                    "key": "value"
                }
            ],
            "script": "return value + 1;"
        }
    ]
}
```

```json
{
    "id": "catalog:mainComponent",
    "parameters": [
        {
            "key": "result",
            "defaultValue": 0,
            "type": "Decimal"
        }
    ],
    "subComponents": [
        {
            "internalId": "library",
            "componentId": "catalog:subComponent"
        }
    ],
    "onUpdate": "
        result = library.foo(910);
    "
}
```

This would result in the parameter called `result` having the value `911`. The `result` gets assigned via the `onUpdate` script in the main-component which calls the function `foo(...)` of the sub-component called `library` with the value `910` as function argument. Every function is always executed in the context of its caller, so keep this in mind regarding script access rights and variable shadowing.

**Info:** Calling an unknown function logs an error in the Script Analyzer but if you call a function from another component it is not possible to determine availability of this function during compile time, so the Script Analyzer will not log an error, but you get an error during runtime (Browser console log). The only exception for this is the `self.` [context-prefix](configurationformat.md#Variables-context), because this can be checked in its own scope.

#### Component function types

Some scripts in roomle script have special functions available, like `AddCube` in `geometry`. These special functions are not available in default component functions, but it is possible to define the type of a component function to make these functions available. The available function types are:

* `default`
* `onUpdate`
* `changeable`
* `collisionCondition`
* `geometry`

A function without a specified type is considered as `default`. These types can be defined by setting it via the key `type` inside the function definition:

```json
"functions": [
    {
        "key": "foo",
        "type": "default",
        "arguments": [
            {
                "key": "myArg",
                "defaultValue": 0
            }
        ],
        "script": "
            return myArg * 2;
        "
    }    
],
...
```

Functions of the type `default` can be called from everywhere, all others can only be called inside the corresponding scripts. It is also possible to call functions inside functions of a different type, but validity is depended of the context of the calling script. So for example it is possible to call a `default` function that calls a `geometry` function (and vice versa) inside a `geometry` script, but not inside an `onUpdate` script. The special functions inside the scripts and corresponding typed functions are:

* `collisionCondition`
  * `getBoxOrigin`
  * `getBoxSize`
  * `getBoxForMeasurementOrigin`
  * `getBoxForMeasurementSize`
* `changeable`
  * `setBoxForMeasurement`
  * `setVisible`
  * `setEnabled`
* `onUpdate`
  * `requestDockItem`
  * `setBoxForMeasurement`
  * `setVisible`
  * `setEnabled`
* `geometry`
  * `BeginObjGroup`
  * `Cube`
  * `Cylinder`
  * `Sphere`
  * `Prism`
  * `Mesh`
  * `Rectangle`
  * `MoveMatrixBy`
  * `RotateMatrixBy`
  * `ScaleMatrixBy`
  * `SetObjDimensionPoint`
  * `Copy`
  * `EndObjGroup`
  * `SetObjSurface`
  * `SetObjSurfaceAttribute`
  * `SetUvTransform`
  * `ScaleUvMatrixBy`
  * `RotateUvMatrixBy`
  * `MoveUvMatrixBy`
  * `SubComponent`
  * `AddCube`
  * `AddPlainCube`
  * `AddCylinder`
  * `AddSphere`
  * `AddPrism`
  * `AddMesh`
  * `AddExternalMesh`
  * `AddRectangle`
  * `AndOperator`
  * `OrOperator`
  * `MinusOperator`
  * `IntersectWithWalls`
  * `ReverseFaces`

So a complete component definition could look something like this:

```json
{
	"id": "catalog_id:subComponent",
	"functions": [
		{
			"key": "doubleValue",
			"type": "default",
			"arguments": [
				{
					"key": "value"
				}
			],
			"script": "return value * 2;"
		},
		{
			"key": "createCube",
			"type": "geometry",
			"arguments": [
				{
					"key": "size"
				}
			],
			"script": "
				AddCube(Vector3f{doubleValue(size), doubleValue(size), doubleValue(size)});
				SetObjSurface('isdt:black');
			"
		},
		{
			"key": "evaluate",
			"type": "collisionCondition",
			"script": "return false;"
		}
	]
}
```

```json
{
	"id": "catalog_id:component",
	"subComponents": [
		{
			"internalId": "library",
			"componentId": "catalog_id:subComponent"
		}
	],
	"geometry": "
		library.createCube(600);
	",
	"parentDockings": {
		"points": [
			{
				"mask": "mask1",
				"position": "{1000, 500, 500}",
				"collisionCondition": "library.evaluate();"
			}
		]
	}
}
```

### Geometry Object Functions

There exist a set of functions for generating geometry objects for this component. Each function has optional Parameters to modify the generation of the uv-Coordinates for the object. This is relevant for the placement of textures.

A uvScale of 2 means that the uv-Coordinates are scaled by 2 which results in the texture being shown with half the size. Same goes for the uv-Offset and Rotation: They modifiy the position and orientation of the uv-Coordinates, which in return affects the placement of the texture in the "other" direction.

For the AddMesh function one can provide explicit uvCoord and normals. The number of uvCoords must match the number of indices provided. The number of normals must match the number of vertices provided.

Vertices, uvCoords and uvOffset ist always in mm.

`SubComponent` injects the corrensponding geometry of the given Subcomponent. For geometry, geometryHD, previewGeoemtry, environmentGeometry or boundingGeometry scripts the corresponding geometry, geometryHD, previewGeoemtry, environmentGeometry or boundingGeometry of the sub component is injected.

#### Keyword arguments

It is possible to pass parameters for geometry functions via keyword arguments. So it is not needed to input all parameters with default values just to set the last one, instead it is possible to pass the parameter name and value to set it. So for example if one wants to just set the bevel value, instead of writing `AddCube(Vector3f{1000, 1000, 1000}, Vector2f{0, 0}, 0, Vector2f{0, 0}, 100);` it is possible to just write `AddCube(Vector3f{1000, 1000, 1000}, bevelWidth=100);` instead. The paramter names can be looked up in the list below.

This is currently only possible for geometry functions of simple geometries, not meshes or external meshes. So it is currently supported by:

* AddCube
* AddPlainCube
* AddCylinder
* AddSphere
* AddPrism
* AddRectangle

#### Geometry faces indices

Basic geometry funtions support passing of multiple individual properties via arrays for some parameters (like materials or uvTransforms). The index of the property inside the array specifies the face of the geometry the property gets applied to. These indices are as follows:

| Geometry Face | Index |
| ------------- | ----- |
| BASE          | 0     |
| BEVEL         | 1     |
| TOP           | 2     |
| BOTTOM        | 3     |
| FRONT         | 4     |
| BACK          | 5     |
| LEFT          | 6     |
| RIGHT         | 7     |

#### Material parameter

All basic geometry functions support passing a list (array) of material IDs directly in the constructor, either via array of strings or keyword arguments. If different materials get passed, the geometry gets created with the provided different materials. The order of the IDs inside the array is defined as mentioned above in the section [Geometry faces indices](configurationformat.md#Geometry-faces-indices).

The corresponding keyword arguments are:

| Geometry Face | Index | Keyword          |
| ------------- | ----- | ---------------- |
| BASE          | 0     | `material`       |
| BEVEL         | 1     | `materialBevel`  |
| TOP           | 2     | `materialTop`    |
| BOTTOM        | 3     | `materialBottom` |
| FRONT         | 4     | `materialFront`  |
| BACK          | 5     | `materialBack`   |
| LEFT          | 6     | `materialLeft`   |
| RIGHT         | 7     | `materialRight`  |

Or `materials` to pass whole array as keyword argument.

So if a for example a cube gets created with the following code:

```json
materials = ['isdt:red', 'isdt:green', 'isdt:blue', 'isdt:black', 'isdt:cyan', 'isdt:magenta', 'isdt:yellow', 'isdt:white'];
AddCube(Vector3f{1000, 1000, 1000}, Vector2f{1, 1}, 0, Vector2f{0, 0}, 50, materials);
```

The result is a cube with a green bevel, a blue top, black bottom, cyan front, magenta back, yellow left side and white right side. The first member in the array is always the base material, so if not all sides are explicitly set to a material these sides get the base material assigned.

So if for example if a cube gets created with the following code:

```json
materials = ['isdt:red', 'isdt:green', 'isdt:blue'];
AddCube(Vector3f{1000, 1000, 1000}, Vector2f{1, 1}, 0, Vector2f{0, 0}, 50, materials);
```

The result will be a red cube with a green bevel and a blue top.

It is also possible to set the materials via keyword arguments, so the code could look like this:

```json
AddCube(Vector3f{1000, 1000, 1000}, bevelWidth = 50, material = 'isdt:black', materialBevel = 'isdt:red');
```

Or pass an array as keyword argument:

```json
mat = ['isdt:black', 'isdt:red'];
AddCube(Vector3f{1000, 1000, 1000}, bevelWidth = 50, materials = mat);
```

These would result in a black cube with a red bevel.

If a material for a side gets provided via keyword arguments but no base material ("material") was given an error message will be logged and the base material gets set to the default value (empty string which results in plain white in the renderer). Some geometries, like prism or cylinder, have no left, right, front and back, but only a side/mantle that goes all around. In this case the material for the side has to be set via the 'materialFront' property or corresponding index in the array, all other provided side materials will be ignored.

If `setObjSurface(...)` function gets called after component creation, all previously defined materials get overridden.

#### UvTransform parameters

Similar to the multi-material arrays for geometry construtor functions it is possible to pass multiple different UV-transforms for all basic geometries. That means that all three different UV-transforms can be passed via a single value, to apply the same UV-transform to all faces, or as arrays of values, to apply different UV-transforms to different faces. So for example a `uvScale` can be passed as single value like `Vector2f{2, 2}` to apply a 2-times scaling to all faces of the geometry, or as multiple value array `[{2, 2}, {3, 3}, {4, 4}]` to apply different UV-scalings to different faces of the geometry. The order of the transforms inside the array is defined the same way as it is for the multi-material-arrays and can be seen in the section [Geometry faces indices](configurationformat.md#Geometry-faces-indices).

If `SetUvTransform(...)` function gets called after component creation, the transform gets added to the existing one.

### Material attributes

It is possible to override a representation property of the material for a specific geometry. This avoids the need to create multiple materials in the database when only one property (e.g. colour) is different. For example, a basic "plastic" material can be added to the DB, but the actual colour of the object is set in Roomle Script. This can be done with the `SetObjSurfaceAttribute` function, where a key/value pair is specified that overrides a property of the current object material. The colour of the material can be specified with a hexadecimal colour representation ('#ff8000', 'rgb(255,128,0)', 'rgb(50%,0%,100%)', 'hsl(0,100%,50%)'). e.g.:

```js
SetObjSurface(mateialId);
SetObjSurfaceAttribute('color', '#ff0000');
SetObjSurfaceAttribute('alpha', 0.5);
```

**Parameters marked with \* are optional.**

### Table of Geometry Functions

| Functionname           | Parameters                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddCube                | Size:Vector3f{width,depth,height}, \*uvScale:Vector2f{scaleU, scaleV} , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV}, \*bevelWidth, \*materials:Array\<String>                                      | Creates a Cube where bevel width with value 0 creates sharp cube. You can optionally pass an array with material IDs, see [Material parameter](configurationformat.md#Material-parameter). The values for `uvScale`, `uvRotation` and `uvOffset` can also be passed via array to apply different transforms to each geometry face, see section [UvTransform parameters](configurationformat.md#UvTransform-parameters).                                                                                                                                                                                                                                                                                                                                                                                                                        |
| AddPlainCube           | Size:Vector3f{width,depth,height}, \*uvScale:Vector2f{scaleU, scaleV} , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV}, \*materials:Array\<String>                                                    | Creates a sharp Cube without bevel. You can optionally pass an array with material IDs, see [Material parameter](configurationformat.md#Material-parameter). The values for `uvScale`, `uvRotation` and `uvOffset` can also be passed via array to apply different transforms to each geometry face, see section [UvTransform parameters](configurationformat.md#UvTransform-parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| AddSphere              | Size:Vector3f{width,depth,height}, \*uvScale:Vector2f{scaleU, scaleV} , \*uvRotation:float ,\*uvOffset:Vector2f{offU, offV}, \*materials:Array\<String>                                                     | Creates a Sphere. Passing multiple materials or uvTransforms via array is possible but has no effect because Sphere has only one face. Only the first value will be taken.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| AddCylinder            | RadiusBottom:float, RadiusTop:float,Height:float, CircleSegments:float, \*uvScale:Vector2f{scaleU, scaleV} , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV}, \*bevelWidth, \*materials:Array\<String> | Creates a Cylinder, where bevelWidth 0 creates sharp cylinder. You can optionally pass an array with material IDs, see [Material parameter](configurationformat.md#Material-parameter). The values for `uvScale`, `uvRotation` and `uvOffset` can also be passed via array to apply different transforms to each geometry face, see section [UvTransform parameters](configurationformat.md#UvTransform-parameters).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| AddPrism               | Height:float, Vertices:Array\<Vector2f>, \*uvScale:Vector2f{scaleU, scaleV} ,\*uvRotation:float , \*uvOffset:Vector2f{offU, offV}, \*bevelWidth, \*materials:Array\<String>                                 | Creates an extruded object given the 2D Shape and the height where bevel width 0 creates sharp prism. You can optionally pass an array with material IDs, see [Material parameter](configurationformat.md#Material-parameter). The values for `uvScale`, `uvRotation` and `uvOffset` can also be passed via array to apply different transforms to each geometry face, see section [UvTransform parameters](configurationformat.md#UvTransform-parameters). Bevels where not working correctly for prisms so there is a new implementation in place. To use the new construction algorithm you need to pass more then one material or uvTransform to the construction function. This can be the same material or uvTransform twice but it is needed to trigger the new algorithm. This extra step is needed to ensure backwards compatibility. |
| AddRectangle           | Size:Vector2f{width,height}, \*uvScale:Vector2f{scaleU, scaleV} , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV}, \*materials:Array\<String>                                                          | Creates a flat rectangle. Passing multiple materials or uvTransforms via array is possible but has no effect because Rectangle has only one face. Only the first value will be taken.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Copy                   |                                                                                                                                                                                                             | Creates a copy of the last drawn object or group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| AddMesh                | Vertices:Array\<Vector3f>, \*Indices:Array\<int> , \*uvScale:Vector2f{scaleU, scaleV } , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV }                                                              | Creates a mesh from the given vertices. If no indices are provided, the number of points must be a multiple of 3. Every group of 3 vertices form a triangle. With indices there must not be an index bigger than the number of Points -1. The number of Indices must be a multiple of                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| AddMesh                | Vertices:Array\<Vector3f>, \*Indices:Array\<int> , \*uvCoordinates:Array\<Vector2f> , \*normals:Array\<Vector3f>                                                                                            | Creates a mesh from the given vertices with uvCoordinates and normals                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| AddExternalMesh        | meshId:String, Bounds:Vector3f{w,d,h}, \*BoundsOffset:Vector3f{x,y,z}, \*uvScale:Vector2f{scaleU, scaleV } , \*uvRotation:float , \*uvOffset:Vector2f{offU, offV }                                          | Adds an external Mesh with the given Id. Bounds and boundsOffset tells the configurator the size and position of the loading box until the mesh is loaded. Optional parameters for scaling, rotating and offsetting uvCoordinates are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| hasEqualGeometry       |                                                                                                                                                                                                             | Checks whether 2 meshes are equal, External mesh is checked based on geometry and internal id(material) and Baked mesh is checked based on vertices and its corresponding transform. If equal returns true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| BeginObjGroup          | GroupName:String                                                                                                                                                                                            | Begins a new objectgroup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| EndObjGroup            | GroupName:String                                                                                                                                                                                            | Defines the end of the Objectgroup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MoveMatrixBy           | Translation:Vector3f{x,y,z}                                                                                                                                                                                 | Moves the previously drawn object or group by the given vector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| RotateMatrixBy         | RotationAxis:Vector3f{x,y,z}, Pivot:Vector3f{x,y,z}, Angle:float                                                                                                                                            | Rotates the last drawn object or group according to the parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ScaleMatrixBy          | Scaling:Vector3f{x,y,z}, \*Pivot:Vector3f{x,y,z}                                                                                                                                                            | Scales the last drawn object or group by the given vector around a given pivot. Pivot is optional and defaults to {0,0,0} if no values provided                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| SetUvTransform         | uvScale:Vector2f{scaleU, scaleV }, uvRotation:float, uvOffset:Vector2f{offU, offV }                                                                                                                         | Sets UV transform for the last drawn object. Overrides previous `SetUvTransform` calls, but gets multiplied on uvTransforms added via geometry generation functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ScaleUvMatrixBy        | uvScale:Vector2f{scaleU, scaleV }                                                                                                                                                                           | Applies scaling to UVs of the last drawn object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| RotateUvMatrixBy       | uvRotation:float                                                                                                                                                                                            | Applies rotation to UVs of the last drawn object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| MoveUvMatrixBy         | uvOffset:Vector2f{offU, offV }                                                                                                                                                                              | Applies offset to UVs of the last drawn object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| SetObjSurface          | MaterialId:String                                                                                                                                                                                           | Assigns the given Material to the last drawn object or group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| SetObjSurfaceAttribute | AttributeId: String or Variable, AttributeValue: Any                                                                                                                                                        | Overries an attribute of the Material of the last drawn object or group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| SubComponent           | internalId:String                                                                                                                                                                                           | Injects the geometry of the given Subcomponent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| AndOperator            |                                                                                                                                                                                                             | Intersect the two previously constructed geometries, the result is the volume that both geometries have in common (A AND B)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| OrOperator             |                                                                                                                                                                                                             | Merge the two previously constructed geometries, the result is the outer cover of both geometries (A OR B)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MinusOperator          |                                                                                                                                                                                                             | Subtracts the two previously constructed geometries from each other (A - B)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ReverseFaces           | Reverses the faces of the last drawn object or group                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| IntersectWithWalls     |                                                                                                                                                                                                             | Indicates that the previously constructed geometry must be intersected with walls (\*1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

\*1) Intersection with walls cannot be applied prior to 3D Boolean operations. Therefore, using a geometry that needs to be intersected by walls in a Boolean operation will result in an error.

#### RotateMatrix

The `RotateMatrixBy` function can be used to rotate an object.

![rotate](<rotate\_matrix\_origin (1).gif>)

The object is always rotated around the origin of the world (0, 0, 0). That means if the centre of the mesh is not (0, 0, 0) or the object is moved prior to rotation, the origin of the world is the pivot point of the rotation.

![rotate around orign](<rotate\_matrix\_offset (1).gif>)

To get better control over the rotation, the pivot point can be specified explicitly.

![rotate around pivot](<rotate\_matrix\_pivot (1).gif>)

#### ScaleMatrixBy

The `ScaleMatrixBy` function can be used to scale an object.

![scale](<scale\_matrix\_origin (1).gif>)

The object is always scaled relative the origin of the world (0, 0, 0). This means that if the centre of the mesh is not (0, 0, 0) or the object is moved prior to scaling, the origin of the world is the pivot point for scaling.

![scale relative to origin](<scale\_matrix\_offset (1).gif>)

To get better control over the scaling, the pivot point can be specified explicitly.

![scale relative to pivot](<scale\_matrix\_pivot (1).gif>)

### CSG (Constructive Solid Geometry) Operators (AndOperator, MinusOperator, OrOperator)

The CSG operators can unite, intersect or subtract individual geometries or even groups of geometries. e.g.:

```js
 /* MeshA */
AddPlainCube(Vector3f{500, 500, 500});

/* MeshB */
AddSphere(Vector3f{1000, 1000, 1000});
MoveMatrixBy(Vector3f{500, 500, 500});

/* Operator mesh A minus mesh B */
MinusOperator(); /* ... AndOperator, OrOperator */
```

| `OrOperator`                                                       | `AndOperator`                                                                                    | `MinusOperator`                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| ![OR operator](<csg\_or (1).png>)                                  | ![AND operator](<csg\_and (1).png>)                                                              | ![MINUS operator](<csg\_minus (1).png>)          |
| combines two geometries, respectively determines the united volume | intersects two geometries, respectively determines the volume that two geometries have in common | subtracts the second geometry from the first one |

The operators also work with geometries made of different materials. The final shape consists of the materials of the two objects from which it was created. So, for example, if a cube with material A is subtracted from a cube with material B, the resulting shape will have materials A and B. This also applies to multiple material geometries, groups, nested groups and combinations of all these where the objects in groups are ORed as long as no other operation is explicitly specified.

| Code                                                                                 | resulting Geometry                                                                    |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| <pre><code>AddPlainCube(Vector3f{1000, 1000, 1000});
</code></pre>                   |                                                                                       |
|                                                                                      |                                                                                       |
| SetObjSurface('roomle\_script\_test:texture\_4x4');                                  |                                                                                       |
| AddPlainCube(Vector3f{1000, 1000, 1000});                                            |                                                                                       |
| MoveMatrixBy(Vector3f{250, 250, 250});                                               |                                                                                       |
| SetObjSurface('roomle\_script\_test:red');                                           |                                                                                       |
| MinusOperator();                                                                     |                                                                                       |
|                                                                                      | ![MINUS operator with differnt materials](<csg\_minus\_materials (1).png>)            |
| <pre><code>m1 = ['roomle_script_test:blue', 'roomle_script_test:red'];
</code></pre> |                                                                                       |
|                                                                                      |                                                                                       |
| AddCube(Vector3f{1000, 1000, 1000}, bevelWidth = 50, materials = m1);                |                                                                                       |
| m2 = \['roomle\_script\_test:magenta', 'roomle\_script\_test:yellow'];               |                                                                                       |
| AddCube(Vector3f{1000, 1000, 1000}, bevelWidth = 50, materials = m2);                |                                                                                       |
| MoveMatrixBy(Vector3f{250, 250, 250});                                               |                                                                                       |
| MinusOperator();                                                                     |                                                                                       |
|                                                                                      | ![MINUS operator with mulit material geoemtry](<csg\_minus\_multi\_material (1).png>) |
| <pre><code>BeginObjGroup();
</code></pre>                                            |                                                                                       |
|                                                                                      |                                                                                       |
| AddPlainCube(Vector3f{1000, 1000, 800});                                             |                                                                                       |
| SetObjSurface('roomle\_script\_test:blue');                                          |                                                                                       |
| AddPlainCube(Vector3f{800, 800, 1000});                                              |                                                                                       |
| SetObjSurface('roomle\_script\_test:cyan');                                          |                                                                                       |
| MoveMatrixBy(Vector3f{200, 200, 800});                                               |                                                                                       |
| EndObjGroup();                                                                       |                                                                                       |
| BeginObjGroup();                                                                     |                                                                                       |
| AddCylinder(500, 500, 1400, 32);                                                     |                                                                                       |
| SetObjSurface('roomle\_script\_test:yellow');                                        |                                                                                       |
| MoveMatrixBy(Vector3f{1000, 1000, 200});                                             |                                                                                       |
| AddSphere(Vector3f{1000, 1000, 1000});                                               |                                                                                       |
| SetObjSurface('roomle\_script\_test:red');                                           |                                                                                       |
| MoveMatrixBy(Vector3f{700, 700, 500});                                               |                                                                                       |
| EndObjGroup();                                                                       |                                                                                       |
| MinusOperator();                                                                     |                                                                                       |
|                                                                                      | ![MINUS operator with groups](<csg\_groups (1).png>)                                  |

If a material is set after the CSG operation with `SetObjSurface`, the material of the whole resulting geometry will be overwritten and the resulting geometry will have only this material. If the material specification for a part of the geometry is missing, the first material involved in the operation is automatically used.

The operators work on the basis of the winding order of the triangles of the meshes. It may therefore be necessary to reverse the order of the triangles of the mesh. This can be done with the `ReverseFaces` function.

### Docking request functions

A docking request can only be used in the "onUpdate" script of a component.

| Functionname    | Parameters                                                                    | Description                                                                  |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| requestDockItem | item: String, parentPostion: Vector3f{x,y,z}, \*childPostion: Vector3f{x,y,z} | Requests the docking of an item at the specified position to this component. |

The docking request is only valid if a docking point or a docking line is defined at the parent position in the component. The subordinate position is optional and is only used to select a subordinate position if multiple child points are defined.

### Constants

There are various constants available in roomle script, accessible via a specific keyword.

| Name                | Key          | Value                                    |
| ------------------- | ------------ | ---------------------------------------- |
| **Math Constants**  |              |                                          |
| e                   | `M_E`        | `2.71828182845904523536028747135266250`  |
| log2(e)             | `M_LOG2E`    | `1.44269504088896340735992468100189214`  |
| log10(e)            | `M_LOG10E`   | `0.434294481903251827651128918916605082` |
| loge(2)             | `M_LN2`      | `0.693147180559945309417232121458176568` |
| loge(10)            | `M_LN10`     | `2.30258509299404568401799145468436421`  |
| pi                  | `M_PI`       | `3.14159265358979323846264338327950288`  |
| pi/2                | `M_PI_2`     | `1.57079632679489661923132169163975144`  |
| pi/4                | `M_PI_4`     | `0.785398163397448309615660845819875721` |
| 1/pi                | `M_1_PI`     | `0.318309886183790671537767526745028724` |
| 2/pi                | `M_2_PI`     | `0.636619772367581343075535053490057448` |
| 2/sqrt(pi)          | `M_2_SQRTPI` | `1.12837916709551257389615890312154517`  |
| sqrt(2)             | `M_SQRT2`    | `1.41421356237309504880168872420969808`  |
| 1/sqrt(2)           | `M_SQRT1_2`  | `0.707106781186547524400844362104849039` |
| **Other Constants** |              |                                          |
| null                | `NULL_VALUE` | `null`                                   |

## Examples

### Component Definition of a table

This geometry script defines a table where the material of the plate and the legs can be set (via Parameter of the component). The width of the table is also a parameter.

```javascript
Height= 750;
Width= 800;
TableThickness= 28;
LegHeight=682;
LegBuffer=16;
LegBufferGap= 5;
BeginObjGroup(group_table);
BeginObjGroup(group_legs);
  BeginObjGroup(group_leg);
    Cylinder(30,30,LegHeight-LegBuffer-LegBufferGap,20,1,1);
      MoveMatrixBy(Vector3f{0,0,LegBufferGap+LegBuffer});
    Cylinder(30,30,LegBuffer,20,1,1);
  EndObjGroup();
    SetObjSurface(LegMaterial);
  Copy();
    MoveMatrixBy(Vector3f{0,572,0});
 EndObjGroup();
  SetObjSurface(LegMaterial);
  MoveMatrixBy(Vector3f{114,Width/2-286,0});
Copy();
  RotateMatrixBy(Vector3f{0,0,1},Vector3f{0,400,0},180);
  MoveMatrixBy(Vector3f{Length,0,0});
Cube(Vector3f{Length-400,40,Height-TableThickness-LegHeight});
  MoveMatrixBy(Vector3f {200,Width/2-150,LegHeight } );
  SetObjSurface(LegMaterial);
Copy();
  MoveMatrixBy(Vector3f {0,300,0} );

Cube(Vector3f{Length-TableThickness*2,Width-TableThickness*2,TableThickness});
  MoveMatrixBy(Vector3f{TableThickness,TableThickness,Height-TableThickness+1});
  SetObjSurface(TableSurface);

Mesh(AlternatePlateAsMesh,Vector3f[
{0,0,TableThickness},{Length,0,TableThickness}, {Length,Width,TableThickness},
{0,0,TableThickness},{Length,Width,TableThickness}, {0,Width,TableThickness},
{0,0,TableThickness}, {TableThickness,TableThickness,0}, {Length,0,TableThickness},
{TableThickness,TableThickness,0}, {Length-TableThickness,TableThickness,0}, {Length,0,TableThickness},
{Length,0,TableThickness},{Length-TableThickness,TableThickness,0}, {Length, Width,TableThickness},
{Length-TableThickness,TableThickness,0}, {Length-TableThickness,Width-TableThickness,0},{Length,Width,TableThickness},
{Length,Width,TableThickness},{Length-TableThickness,Width-TableThickness,0},{0,Width,TableThickness},
{Length-TableThickness,Width-TableThickness,0},{TableThickness,Width-TableThickness,0},{0,Width,TableThickness},
{0,Width,TableThickness},{TableThickness,Width-TableThickness,0},{0,0,TableThickness},
{TableThickness,Width-TableThickness,0},{TableThickness,TableThickness,0},{0,0,TableThickness},
{TableThickness,TableThickness,0},{Length-TableThickness,Width-TableThickness,0},{Length-TableThickness,TableThickness,0},
{TableThickness,TableThickness,0},{TableThickness,Width-TableThickness,0},{Length-TableThickness,Width-TableThickness,0}]);
  MoveMatrixBy(Vector3f {0,0, Height-TableThickness } );
  SetObjSurface(TableSurface);
EndObjGroup();
  MoveMatrixBy(Vector3f{-Length/2,-400,0});
```
