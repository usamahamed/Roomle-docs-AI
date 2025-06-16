# SubComponents

_SubComponents_ are basically nested components in other components. They provide you with a possibility of reusing code in other components. They can also enter the part list as separate entries. To sum it up, they can be utilized in following scenarios:

* use other component's geometry
* use other component's parameters
* use them as part list entries
* use them as a workaround for some computations

To define a _SubComponent_, use _subComponents_ list, which is one of root attributes of the _Component_ class:

```json
{
    "id": "isdt:example_subcomponent_master",
    "parameters":[
        {
            "key": "width",
            "type": "Decimal"
        }
    ],
    "subComponents": [
        {
            "internalId": "SUBCOMPONENT",
            "componentId": "isdt:example_subcomponent_subcomponent",
            "numberInPartList": "1",
            "assignments": {
                "material": "isdt:red"
            },
            "isMain": false,
            "sort": 1,
            "active": true,
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "width"
                }
            ]
        }
    ],
    "geometry": "SubComponent('SUBCOMPONENT');",
    "articleNr": "'123.456'"
}
```

In the `isdt:example_subcomponent_subcomponent`, we have following code:

```json
{
    "id": "isdt:example_subcomponent_subcomponent",
    "parameters": [
        {
            "key": "width",
            "type": "Decimal",
            "defaultValue": 800,
            "validValues": [
                600,
                800,
                1000
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "material",
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:red",
                "isdt:green",
                "isdt:blue",
                "isdt:cyan",
                "isdt:magenta",
                "isdt:yellow",
                "isdt:black",
                "isdt:white",
                "isdt:black_transparent",
                "isdt:white_transparent",
                "demoCatalogId:reference1"
            ],
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "geometry": "
        AddCube(Vector3f{width, 1000, 1000});
         SetObjSurface(material);
    ",
    "articleNr": "width | ' ' | material"
}
```

If you load both of those components, you can see that it seems like the subcomponent is loaded. Practically everything in the master is coming from the subcomponent - the geometry, parameters and even the part list.

What can be unexpected is that the articleNr of '123.456' is nowhere to be seen. This is because if you have a subcomponent definition, the part list entry of the main component is hidden. To fix this, we can add a back-referencing subcomponent, but more on that later.

## Attributes of SubComponent

* **internalId**: You see that the SubComponent is defined with an internalId, which is any reasonable identifier string, which you will use in the geoemtry as argument for the SubComponent(subComponentInternalId) function. This basically takes the subcomponent's geometry and draws it as if it was the master's own geometry, including selection highlighting and measurement box. It is a mandatory attribute.
* **componentId**: This is the componentId of the component that is used as a subcomponent. Mandatory attribute.
* **numberInPartList**: Integer or Decimal, which is shown in the "Count" field in the part list. It can be a constant, expression or a RoomleScript. If you want, you can use assignment to an internal variable number in this script. Example:

```json
{
    "numberInPartList": "if (type == 'set') { number = 4; } else { number = 1; } "
}
```

* **sort**: This is the sort criteria for the part list entry. Part list entries will be sorted by ascending order of this value. Part list entries without the sort value defined are sorted at the end of the part list. To control sort of the current component, apply the sort attribute to the [back-reference](200\_70\_subcomponents.md#back-reference).
* **isMain**: If part list grouping is set in the configurator init data, this component is displayed in the part list as the category header. See [Part List Grouping](200\_110\_advancedpartlist.md#part-list-grouping) for more details.
* **assignments**: Will assign a value to the subComponent's parameters. They are assigned in every onUpdate loop, making the loop continue in the subComponent. You can assign to any parameter, as long as the assigned value is among the set of the target parameter's possible values.
* **active**: If true, all supersedings are valid and the update loop runs in the subcomponent. If false, superseded parameters are not available (including their identifiers' declarations) and the update loops do not run. Inactive subComponents do not enter the part list.
* **supersedings**: Currently working only for parameters. Superseded parameters will be exposed in the master component's UI and its value is available in the master. Superseding can happen through more levels of the whole subcomponent hieararchy.
  * Superseded parameter's onValueChange will be evaluated in its own component's context only.
  * If you supersede a parameter, it should be initialized with a parameter of the same key and type, with no provided valid values.
* **supersedings.overrides**: Object with fields `key` and `group`. Allows you to override the group or key of the superseded parameter.

## Back-reference

If you use subcompnent definitions, the root component (of the subcomponent hierarchy, not of the configuration/docking hierarchy) looses its entry from the part list. Resulting part list can even be empty. To show the root component, use a following back-reference pattern:

```json
{
    "id": "this:component",
    "subComponents": [
        {
            "internalId": "BACKREFERENCE",
            "componentId": "this:component",
            "numberInPartList": 1,
            "sort": 10
        }
    ]
}
```

Every subComponent that has the same componentId as the parent component id (like in the example above) is considered to be a back-reference and its sole purpose is to be able to define the count of the component in the part list. All assignments to this component are ignored and it is not indended to be instantiated in the geometry (otherwise this would end in an endless hierarchy).

You can use the `Roomle: Add SubComponent Backreference` command of the VS Code extension to inject the back-reference for you if there is none yet.

**Hint:** Always write the back-reference as the first subComponent.

## SubComponents Use Cases Examples

In following subchapters, you can see how to utilize SubComponents in commented examples.

### 1. External Geometry

If you have a geometry that you extensively reuse accross more components, or more times in a single component, you can take this geometry, put it in another component and instantiate the geometry using the subcomponent. This is especially usable if you do complex geometry functions in order to keep your components more clean.

#### 1.1 Example: Using SubComponent's Geometry

In this example, we instantiate pleated window blinds using geometry from existing components. The blinds should be attached in between two rails. The geometry has been created beforehand in another project and its usage is internally documented. What you need to know when using a subcomponent are the parameters, because you can only assign to (and supersede from) the parameters.

Let's take a look at the following code:

```json
{
    "id": "isdt:example_supersedegeometry",
    "parameters": [
        {
            "key": "width",
            "defaultValue": 400,
            "type": "Decimal",
            "unitType": "length",
            "validRange": {
                "valueFrom": 200,
                "valueTo": 1000,
                "step": 1
            },
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "height",
            "defaultValue": 800,
            "type": "Decimal",
            "unitType": "length",
            "validRange": {
                "valueFrom": 200,
                "valueTo": 1000,
                "step": 1
            },
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "RailHeight",
            "type": "Decimal"
        }
    ],
    "subComponents": [
        {
            "internalId": "FOLDS",
            "componentId": "massjalousien:plissee_trapezoid",
            "numberInPartList": "1",
            "assignments": {
                "width": "width",
                "position": 100,
                "height": "height",
                "material": "isdt:alpha100"
            }
        },
        {
            "internalId": "TOP_RAIL",
            "componentId": "massjalousien:Rail_225x185",
            "numberInPartList": "1",
            "assignments": {
                "Length": "width"
            },
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "RailHeight"
                }
            ]
        },
        {
            "internalId": "BOTTOM_RAIL",
            "componentId": "massjalousien:Rail_225x185",
            "numberInPartList": "1",
            "assignments": {
                "Length": "width",
                "place": -1
            }
        }
    ],
    "geometry": "
        SubComponent('FOLDS');

        SubComponent('BOTTOM_RAIL');
         MoveMatrixBy(Vector3f{0, 0, -RailHeight});

        SubComponent('TOP_RAIL');
         MoveMatrixBy(Vector3f{0, 0, height});
    "
}
```

As you can see, we have two parameters driving the size of the product. There are three defined SubComponents - the folds and two rails. The parameters assigned to the folds are mostly self-explanatory. However, there are some that you need to know what they're for:

* position: how the plissee is open (in percent)
* place: +1 if the rail is on top, -1 if on bottom
* RailHeight: superseded, its the dimension of the rail, it has to be moved up in order that the folds fit on it

In the geometry, we simply instantiate the subcomponents' geometries using the SubComponent() function. We also supersede one parameter here, basically copying its instance to the above hierarchy level.

### 2. Partlist Entry

#### 2.1 Example: Adding Mounting Parts to the Parametrized Shelf

In the previous example, we looked into how to instantiate a subcomponent's geometry. Here, we look into how to instantiate it as a part list entry. We will extend the previous example of the parameterized grid shelf. Not exactly a feature for the customer, more like a feature for the manufacturer: Specify the screws and pins needed in the package. Therefore, we make two new components:

```json
{
    "id": "demoCatalogId:example_pin",
    "label": "label = 'Wood Pin D8x50'",
    "articleNr": "'900.134.850'"
}
```

```json
{
    "id": "demoCatalogId:example_screw",
    "label": "label = 'Hex Screw D6x60'",
    "articleNr": "'900.010.710'"
}
```

Now we open [demoCatalogId:example\_shelf](examples/200\_60\_example\_shelf.json), we compute how many screws and pins are needed. The screws hold the outer walls togetger, always needing 8 of them, and there are always two pins in every intersection of the wood plates. We add following SubComponent definitions:

```json
"subComponents": [
    {
        "internalId": "pin",
        "componentId": "demoCatalogId:example_pin",
        "numberInPartList": "(fieldsX + 1) * (fieldsZ + 1) * 2"
    },
    {
        "internalId": "screw",
        "componentId": "demoCatalogId:example_screw",
        "numberInPartList": 8
    }
],
```

When we load the component and open the part list, we can see following result:

![shelf is missing in the part list](images/200\_70\_30\_shelfemptypartlist.png)

Everything is fine, but the shelf is gone from the part list! As mentioned above in the Back-reference chapter, we add the component itself as a subcomponent. We also add a label:

```
"label": "label = 'Grid Shelf ' | substring(string(fieldsX), 0, 1) | 'x' | substring(string(fieldsZ), 0, 1);",
...
"subComponents": [
    {
        "internalId": "backreference",
        "componentId": "demoCatalogId:example_shelf",
        "numberInPartList": 1
    },
    ...
],
```

You can get resulting componend definition [here](examples/200\_70\_30\_example\_shelf.json)

#### Example 2.2 Part List Pattern

Not always a best case example, but sometimes it can be handy, that you override the part list of one component by another component. This can be especially useful, if the customer's partlist contains a lot of data that are unrelevant for you and are only output of the configurator, like pricegroups, weight, etc. You can compute a correct articleNr in your main component and then send this articleNr to another component, that has code generated for example from an Excel/Google sheet, that can be exported from the client's information system. You can then have one component that contains a table of all partlist entries, which you can update easily, should the client want to add/remove/change some data. Your only responsibility is to compute the articleNr correctly.

See an [example of such a table](https://docs.google.com/spreadsheets/d/1lNuH69cSQ3KlrSmkeW9zddef5c4o3CdeS-7XpDW3SNs/edit?usp=sharing), where our code is generated in column I [this table of data](https://docs.google.com/spreadsheets/d/1lNuH69cSQ3KlrSmkeW9zddef5c4o3CdeS-7XpDW3SNs/edit?usp=sharing) at Google Drive.

<details>

<summary>Unfold to see the code of `isdt:example_partlistpattern` generated from Google Sheets</summary>

```json
{
    "id": "isdt:example_partlistpattern",
    "label": "label = name_english;",
    "parameters": [
        {
            "key": "articleNumber",
            "type": "String",
            "defaultValue": "value",
            "visible": false,
            "visibleInPartList": false
        },
        {
            "key": "productCode",
            "labels": {
                "en": "Product Code"
            },
            "type": "String",
            "defaultValue": "value",
            "visible": false,
            "visibleInPartList": false
        },
        {
            "key": "width",
            "labels": {
                "en": "Width"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 0,
            "visible": false,
            "visibleInPartList": true
        },
        {
            "key": "height",
            "labels": {
                "en": "Height"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 0,
            "visible": false,
            "visibleInPartList": true
        },
        {
            "key": "depth",
            "labels": {
                "en": "Depth"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 0,
            "visible": false,
            "visibleInPartList": true
        },
        {
            "key": "weight",
            "labels": {
                "en": "Weight"
            },
            "type": "String",
            "defaultValue": 0,
            "visible": false,
            "visibleInPartList": true
        }
    ],
    "onUpdate": "
        name_english = 'ERROR'; /* so that you can notice if an articleNr is missing */
        productCode = 'ERROR';
        if (articleNumber == '771.005.120') { productCode = 'SZ-KA-1500-800'; name_english = 'Straight Seater 150 cm'; width = 1500; depth = 800; height = 760; weight = '41'; }
        if (articleNumber == '771.005.130') { productCode = 'SZ-KA-1700-800'; name_english = 'Straight Seater 170 cm'; width = 1700; depth = 800; height = 760; weight = '43'; }
        if (articleNumber == '771.005.140') { productCode = 'SZ-KA-1900-800'; name_english = 'Straight Seater 190 cm'; width = 1900; depth = 800; height = 760; weight = '47'; }
        if (articleNumber == '771.005.150') { productCode = 'SZ-KA-2100-800'; name_english = 'Straight Seater 210 cm'; width = 2100; depth = 800; height = 760; weight = '49'; }
        if (articleNumber == '771.015.160') { productCode = 'SZ-AL-1750-800'; name_english = 'Seater with Left Armrest 175'; width = 1750; depth = 800; height = 760; weight = '48'; }
        if (articleNumber == '771.015.180') { productCode = 'SZ-AL-1950-800'; name_english = 'Seater with Left Armrest 195'; width = 1950; depth = 800; height = 760; weight = '49'; }
        if (articleNumber == '771.025.100') { productCode = 'SZ-AL-2150-800'; name_english = 'Seater with Left Armrest 215'; width = 2150; depth = 800; height = 760; weight = '53'; }
        if (articleNumber == '771.025.120') { productCode = 'SZ-AL-2250-800'; name_english = 'Seater with Left Armrest 225'; width = 2250; depth = 800; height = 760; weight = '55'; }
        if (articleNumber == '771.025.140') { productCode = 'SZ-AR-1750-800'; name_english = 'Seater with Right Armrest 175'; width = 1750; depth = 800; height = 760; weight = '48'; }
        if (articleNumber == '771.055.120') { productCode = 'SZ-AR-1950-800'; name_english = 'Seater with Right Armrest 195'; width = 1950; depth = 800; height = 760; weight = '49'; }
        if (articleNumber == '771.055.130') { productCode = 'SZ-AR-2150-800'; name_english = 'Seater with Right Armrest 215'; width = 2150; depth = 800; height = 760; weight = '53'; }
        if (articleNumber == '771.055.140') { productCode = 'SZ-AR-2250-800'; name_english = 'Seater with Right Armrest 225'; width = 2250; depth = 800; height = 760; weight = '55'; }
        if (articleNumber == '771.055.150') { productCode = 'LC-L-1400-1415'; name_english = 'Longchair with Left Armrest'; width = 140; depth = 1415; height = 760; weight = '92'; }
        if (articleNumber == '771.065.160') { productCode = 'LC-L-1900-1415'; name_english = 'Longchair with Left Armrest'; width = 190; depth = 1415; height = 760; weight = '98'; }
        if (articleNumber == '771.065.180') { productCode = 'LC-R-1400-1415'; name_english = 'Longchair with Right Armrest'; width = 140; depth = 1415; height = 760; weight = '92'; }
        if (articleNumber == '771.075.100') { productCode = 'LC-R-1900-1415'; name_english = 'Longchair with Right Armrest'; width = 190; depth = 1415; height = 760; weight = '98'; }
        if (articleNumber == '771.075.120') { productCode = 'LCXL-L-1400-1715'; name_english = 'Longchair XL with Left Armrest'; width = 140; depth = 1715; height = 760; weight = '122'; }
        if (articleNumber == '771.075.140') { productCode = 'LCXL-L-1900-1715'; name_english = 'Longchair XL with Left Armrest'; width = 190; depth = 1715; height = 760; weight = '128'; }
        if (articleNumber == '771.105.110') { productCode = 'LCXL-R-1400-1715'; name_english = 'Longchair XL with Right Armrest'; width = 140; depth = 1715; height = 760; weight = '122'; }
        if (articleNumber == '771.105.150') { productCode = 'LCXL-R-1900-1715'; name_english = 'Longchair XL with Right Armrest'; width = 190; depth = 1715; height = 760; weight = '128'; }
    ",
    "geometry": "
        if (productCode == 'ERROR') {
            AddCube(Vector3f{1000, 1000, 1000});
            SetObjSurface('isdt:red');
        }
    ",
    "articleNr": "articleNr = articleNumber;"
}
```

</details>

[or download it here](examples/200\_70\_40\_example\_partlistpattern.json)

Let's test this:

```json
{
    "id": "isdt:example_partlistpattern_test",
    "parameters": [
        {
            "key": "articleNumber",
            "type": "String",
            "defaultValue": "value",
            "validValues": [
                "771.015.160",
                "771.015.181",
                "4654654",
                "xxxxxxx",
                "771.005.120",
                "771.005.130",
                "771.005.140",
                "771.005.150"
            ],
            "visible": true,
            "visibleInPartList": false
        }
    ],
    "subComponents": [
        {
            "internalId": "partlist",
            "componentId": "isdt:example_partlistpattern",
            "numberInPartList": "1",
            "assignments": {
                "articleNumber": "articleNumber"
            }
        }
    ]
}
```

If you select an invalid `articleNumber` to assign, no of the if-statements will be evaluated and `productCode` stays with 'ERROR', showing also a big red cube in the geometry supposing you instantiate geometry of the subComponent using the `SubComponent` function. We recommend doing this in debugGeometry supposing you're using the [Advanced Loader Snippet](100\_50\_loadersnippet.md#advanced-loader-snippet). You should notice error in the QM phase when clicking through the elements.

### 3. External Computation

This pattern was used in the past as a workaround for the missing [Functions](200\_40\_roomlescript.md#functions) feature. Following is kept in the documentation, but not recommended anymore.

Let's say we have a function we want to reuse across multiple components. We make and extra component for it, in means of a workaround for a missing function definition feature:

```json
{
    "id": "your_catalogue:function_add",
    "parameters": [
        {
            "key": "argument1",
            "type": "Decimal"
        },
        {
            "key": "argument2",
            "type": "Decimal"
        },
        {
            "key": "result",
            "type": "Decimal"
        }
    ],
    "onUpdate": "result = argument1 + argument2;"
}
```

And we can further use it like following:

```json
{
    "id": "your_catalogue:your_component",
    "parameters": [
        {
            "key": "result",
            "type": "Decimal"
        }
    ],
    "subComponents": [
        {
            "internalId": "ADD",
            "componentId": "your_catalogue:function_add",
            "numberInPartList": "0",
            "active": "true",
            "assignments": {
                "argument1": "200",
                "argument2": "1000"
            },
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "result"
                }
            ]
        }
    ],
    "geometry": "AddCube(Vector3f{1000, 1000, result});"
}
```

_Note_: If you want to call the function several times from the same component with different arguments, you get a collision of the supersedings. To solve this, see the [Superseding Overrides](200\_70\_subcomponents.md#superseding-overrides)

**Suggestion**: Consider [Using GetMaterialPropery Function](200\_140\_getmaterialproperty.md) if the data you need depend on a selected material.

As for the part list pattern from the previous example, you can get `width`, `depth` and `height` out of it (you need to unfold the huge code-block in the previous subchapter to find it). Because `width`, `depth` and `height` are stored as parameters, we can use superseding for them.

```json
{
    "id": "isdt:example_externalcomputation",
    "parameters": [
        {
            "key": "articleNumber",
            "type": "String",
            "defaultValue": "value",
            "validValues": [
                "771.005.120",
                "771.005.130",
                "771.005.140",
                "771.005.150"
            ],
            "visible": true,
            "visibleInPartList": false
        }
    ],
    "subComponents": [
        {
            "internalId": "backreference",
            "componentId": "isdt:example_externalcomputation",
            "numberInPartList": "1",
            "assignments": {
                "articleNumber": "articleNumber"
            }
        },
        {
            "internalId": "partlist",
            "componentId": "isdt:example_partlistpattern",
            "numberInPartList": "0",
            "assignments": {
                "articleNumber": "articleNumber"
            },
            "active": true,
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "width"
                },
                {
                    "type": "parameter",
                    "key": "height"
                },
                {
                    "type": "parameter",
                    "key": "depth"
                }
            ]
        }
    ],
    "geometry": "
        /* we get cube with dimensions based on the part list data; can be useful for QM */
        AddCube(Vector3f{width, depth, height});
         SetObjSurface('isdt:black_transparent');
    "
}
```

What happens here is that we assign an article number we've already computed. The subcomponent computes all values relevant to that articleNr and returns them as superseded parameters. When you test this, notice the cube's size changes based on the selected article number and also the superseded values are visible in the part list. If you want to hide them from the part list, you must do it in the subcomponent or create and assign to parameters like "width\_visibleInPartList".

### 4. Parameter Provider

If you have a extensive parameter logic that you need to use in more components, you can also solve this via supersedings. Try to make a as minimal component with the parameters as possible and try to keep all of the logic inside it.

A simple example is a list of parameters you can supersede around your product line, being able to modify the material selection parameter in one place. This approach can be combined with the external computation provider, superseding material relevant data (like pricegroup, weight per sq.m) along with it.

### 5. ElementType Pattern

When you have a lot of elements that you need to combine together, you probably want to separate the docking logic from the components themselves. This way, you handle the docking logic in one component, geometry and part list is kept with the subcomponents. This is a good use case for applying the element type design pattern. You basically have an element type selector, based on which a specific subcomponent is used. From the elementType value, subcomponentType is computed. SubcomponentType values match with subcomponents' internalIds. Based on the design, the elementTypes already can match the internalIds. Below you see a draft master component for a sofa system, without docking logic. Only the elementType parameter is present, all other parameters are superseded from the subcomponent, leaving less of the logic in the master component. The subcomponentType could be an internal value, but it is better to save it as a parameter to be more robust against configuration reload failures.

Based on the subcompnentType, only one of the subcomponents is superseded and its part list is used. We recommend using this pattern whenever you have docking logic with interchangeable parts - which is a typical case of modular sofa systems.

```json
{
    "id": "isdt:example_elementtype_master",
    "parameters": [
        {
            "key": "elementType",
            "type": "String",
            "defaultValue": "2seatNA",
            "valueObjects": [
                {
                    "value": "1seatNA"
                },
                {
                    "value": "2seatNA"
                },
                {
                    "value": "2seatLA"
                },
                {
                    "value": "2seatRA"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "subcomponentType",
            "type": "String",
            "defaultValue": "MIDDLE_2",
            "visible": false,
            "visibleInPartList": false
        }
    ],
    "subComponents": [
        {
            "internalId": "MIDDLE_1",
            "componentId": "jab:inspiration_1seat",
            "numberInPartList": "subcomponentType == 'MIDDLE_1'",
            "active": "subcomponentType == 'MIDDLE_1'",
            "assignments": {
                "bezug": "isdt:upholstery_green"
            },
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "sitztiefe"
                },
                {
                    "type": "parameter",
                    "key": "sitzbreite"
                }
            ]
        },
        {
            "internalId": "MIDDLE_2",
            "componentId": "jab:inspiration_2seat",
            "numberInPartList": "subcomponentType == 'MIDDLE_2'",
            "active": "subcomponentType == 'MIDDLE_2'",
            "assignments": {
                "bezug": "isdt:upholstery_green"
            },
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "sitztiefe"
                },
                {
                    "type": "parameter",
                    "key": "sitzbreite"
                }
            ]
        },
        {
            "internalId": "STRAIGHT_END_2",
            "componentId": "jab:inspiration_2seat_l_r",
            "numberInPartList": "subcomponentType == 'STRAIGHT_END_2'",
            "active": "subcomponentType == 'STRAIGHT_END_2'",
            "assignments": {
                "bezug": "isdt:upholstery_green",
                "side": "subcomponentSide"
            },
            "supersedings": [
                {
                    "type": "parameter",
                    "key": "sitztiefe"
                },
                {
                    "type": "parameter",
                    "key": "sitzbreite"
                }
            ]
        }
    ],
    "onUpdate": "
        if (ifnull(inited, false) == false) {
            inited = true;
            subcomponentSide = 0;
            sitztiefe = 560;
            sitzbreite = 1850;
        }

        if (elementType == '1seatNA') { subcomponentType = 'MIDDLE_1'; subcomponentSide = 0; }
        if (elementType == '2seatNA') { subcomponentType = 'MIDDLE_2'; subcomponentSide = 0; }
        if (elementType == '2seatLA') { subcomponentType = 'STRAIGHT_END_2'; subcomponentSide = -1; }
        if (elementType == '2seatRA') { subcomponentType = 'STRAIGHT_END_2'; subcomponentSide = 1; }
    ",
    "geometry": "
        SubComponent(subcomponentType);
    "
}
```

## Superseding Overrides

Supersedings overrides allow you to override certain attributes of the superseded parameters. Currently, `key` and `group` can be overridden, allowing you to solve problems coming from colliding keys when more supersedings meet in one parent component or allowing you to assign a different group in different master components. To use superseding, simply use the `supersedings.override` key. In the following example, we have a construction made of walls connected with 4 rods. The rods attach to the walls with pins, which comes in 2 sizes: intended to connect either one rod with a wall, or if you put more cubes togetether, you use a longer one connecting two rods with the walls in between them. Override allows you to utilize a subComponent that displays geometry (and eventually also part list entries) in a master component exposing the parameters directly to the sibling points' selfAssignments.

The source of the rod is nothing special, if has selectable pin type on left and right end: [rod.json](examples/200\_70\_70\_example\_override\_rod.json)

The source of the master uses sibling points assignments to the direct left and right pin types. FB, FT, RB, RT suffixes stand for front bottom, front top, rear bottom, rear top. Advantage is that you do not have to pass anything around - when the sibling points connect, you just do the assignment: [master.json](examples/200\_70\_70\_example\_override\_master.json)

## Displaying SubComponent hierarchy

You can use the `Roomle: Get SubComponent Dependencies` command to display the subComponent hierarchy tree in the extension's output channel.
