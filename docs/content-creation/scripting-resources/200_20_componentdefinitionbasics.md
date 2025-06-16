[Parameters]:200_30_parameters.md
[Naming Convention]:300_20_naming.md
[RoomleScript Language Reference]:200_40_roomlescript.md
[Level 2 Component Definition]:150_40_lvl2_component.md
[Roomle Component Formatter Extension]:https://marketplace.visualstudio.com/items?itemName=JiriPolcar.rmlformatter
# Level 3 Component Definition Basics

The component definition format for Level 3 Product Configurator is a superset of the Level 2 Material Configurator. Because of this fact, please refer to the [Level 2 Component Definition] before proceeding here. Level 3 provides a full feature set of the Rubens Configurator platform. This chapter will provide you with the basics, which will further be explained in the following chapters.

Supposing you have the VS Code with the [Roomle Component Formatter Extension] installed, you can make a new JSON file and switch the language to the RC-JSON. If the file was empty, you should now have a minimum component template pre-filled in the editor:

```json
{
    "id": "catalogId:example",
    "parameters": [],
    "onUpdate": "
        if (isnull(inited)) {
            inited = true;
        }
    ",
    "geometry": "",
    "articleNr": "'catalogId:example'"
}
```



## Parameters
To have really configurable products, we need to allow the end users to interact with the current model they are looking at. One of the ways to allow the user to interact with the models are the *Parameters*. Parameters can be of different data types, they can have also various kinds of value representation. In this chapter, we only slightly touch the parameters topic and show you how to implement a simple parameter. Parameters will be described in detail in the [Parameters] chapter.

### Example: Adding Width and Depth Parameters

Let's add "width" and "depth" parameters to our previous code.
<details>
<summary>Unfold to see resulting source code after adding two parameters</summary>

```json
{
    "id": "catalog_id:component",
    "parameters": [
        {
            "key": "width",
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1000,
            "validValues": [
                800,
                1000,
                1200
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "depth",
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 600,
            "validValues": [
                600,
                700
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "onUpdate": "",
    "geometry": "AddCube(Vector3f{width, depth, 1000});",
    "articleNr": "'123.465'"
}
```

</details>

Here, we defined two parameters of type Decimal (which is a float data type, allowing you to store numbers with decimal places). When you load the *Component*, the *defaultValues* will be selected at start, unless overridden with *Configuration*. The *length* *unitType* will display the values in centimeters (or mm or inches depending on the configurator settings and location) instead of plain numbers (if you delete the unitType line, you get for example 600.00). The valid values are a plain list of values the user can select and which show up as buttons. The most important entry in every parameter is the *key* (which specifies how you will refer to it and it must be unique in the context of one *Component*). The other important entry is the *type* which specifies what will be stored inside.

In the *geometry* script, you can see that the *AddCube* function now uses the values from parameters instead of the previous numeric constants.

**IMPORTANT:** Parameter KEYS ARE CASE SENSITIVE. That means, if the *key* is width and you use Width in the *AddCube* function, it will not work.

## On Update

Component's onUpdate Json attribute is a RoomleScript. Once a parameter is selected and valueObjects between components are evaluated, the onUpdate functions is run in order to process the parameters. In case a parameter is changed, the process starts over again. There are more of the steps in this loop (subComponent evaluations, docking assignments etc.), but more on that later.

OnUpdate is a place to do all computations needed to process the component to show a correct docking logic, prepare all data for geometry and part list. Most computations will be done here. Once onUpdate loops are finished, the evaluation of the component continues with the geometry script and articleNr script when the part list is called.

An example will be shown after the [RoomleScript Language Reference] chapter.

## Geometry

Geometry is the RoomleScript used to display the 3D visualization of the component. Everything 3D related goes into this script. You already know one of the functions, the AddCube, which is valid only in the geometry (and previewGeometry and geometryHD scripts).

More after the [RoomleScript Language Reference] chapter.

## Article Numbers

Article numbers are unique product/SKU identificators in the context of the shop we are doing the configurator for. In a *Component*, we can specify one unique *articleNr* or use an *Expression* or *Script* so that one *Component* can show the article number of the current *Configuration*. To define the article number, type in:

```json
{
    "id": "some id",
    ...
    "articleNr" = "'A-320-XY'" or "'1600'" or "'type here what you want'"
}
```

In the HSC Test site, you can display the part list. For that you have to unfold the *Interactions* section, where you will find the *Open part list* button. You can check the article number in the part list.

**Notice** the apostrophes that enclose the 'value'. They specify, that the value inside is a *string*. In other words, the *articleNr* value will be exactly what is enclosed. If you didn't use it and had parameteters with key of A and XY, kernel would have tried to compute the *articleNr* like (value of A) minus (320) minus (value of XY), likely throwing an undeclared variable error. In the second case, it would have parsed 1600 as a number, which would have been read as a default *Decimal* type. Result of this would be 1600.00 (numbers display two decimal places). By enclosing the numbers in apostrophes, you make sure that you get 1600.

To get through the article number in more details, we first need to proceed to the [RoomleScript Language Reference] chapter.
