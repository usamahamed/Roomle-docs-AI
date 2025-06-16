# Example: Scripting a Table from Primitives

In this exmaple, the task is to script a table component of given width and depth combinations. The table consist of a wood tabletop and a metal frame. It comes in different colours of the tabletop and different colours of the frame. The legs come in two variations, fixed length legs and adjustable leg height. If the legs are adjustable, the user can visualize the adjustment using a range slider.

## Definition of the Product

List of possible sizes of the table in milimeters and their article numbers:

| Width | Depth | SKU         |
| ----- | ----- | ----------- |
| 1200  | 700   | 396.312.127 |
| 1200  | 800   | 396.312.128 |
| 1400  | 700   | 396.312.147 |
| 1400  | 800   | 396.312.148 |
| 1600  | 800   | 396.312.168 |
| 1800  | 800   | 396.312.188 |
| 1800  | 900   | 396.318.189 |
| 2000  | 1000  | 396.641.891 |

The tabletop comes in following variations, which add a suffix to the article number divided with a space, dash and space.

| Tabletop    | Suffix |
| ----------- | ------ |
| oak         | ECH    |
| crema white | CRW    |
| nut         | NSS    |
| gray        | SGR    |
| blue        | KBL    |

And the frame colour adds another suffix:

| Frame       | Suffix |
| ----------- | ------ |
| chrome      | 731    |
| cream white | 121    |
| matte black | JBL    |

Adjustable legs add yet another suffix ADJ.

Resulting article number example: `396.318.169 - NSS - JBL`

Geometry features:

* tabletop thickness 40 mm
* table frame:
  * rectangular profile 15x35 mm
  * distance behind edge of tabletop is 10 mm
* legs:
  * total height 670 mm (incl. base), cylinder diameter 50 mm
  * mounting base is a bracket of cube shape, 65 x 65 x 12 mm, leg is mounted centered
  * mounts tightly to the inner corner of the frame
  * black endcap, 48 x 5 mm
* adjustable legs:
  * telescopic cylindrical shape
  * same mounting base as standard legs
  * outer part diameter 60 x 500 mm
  * inner part diameter 50 x 380 mm
  * total height in range 630 - 700 mm
  * same endcaps as the fixed legs have

UX Design:

* The user will configure the table in following steps:
  * size (width first, depth second)
  * color (tabletop first, frame second)
  * legs (legs type and eventual table height)
* All parameter values will be options with buttons, colors will have thumbnails previews
* User can adjust the _total height of the table_ using a parameter "Height settings", that will show if the adjustable legs are selected.

## Available materials

## Recommended approach

1. Create the parameters with their values. Choose good parameter keys, suitable parameter types and descriptive labels. You can refer to the [Naming Convention](300\_20\_naming.md) for help.
2. Analyse possible combinations and interactions, implement relevant conditions into whole parameter's _visible_, _visibleInPartList_, _enabled_ and value object's _condition_ attributes.
3. Load the component and check the results. You need to test, if you can get all possible parameters combinations.
4. Analyse the table of article numbers, create the article number logic.
5. Design how to setup the geometry, how to group and implement it.
6. Once ready with everyting, define groups and assign the parameters to them as the last thing (it is good to see all parameters together while testing).
7. Finally test the component, check all constraints defined in the product definition.
8. In a real project, you would then submit the component for upload to the database (if you are not allowed to do it yourself) and to the quality check.

Please, take a few moments to try this out. You should be able to achieve this using what you've already learned in the previous chapters.

## Solution

### 1. Creating the parameters

#### 1.1 Look through all the parameters an their values.

* width : Decimal = \[1200, 1400, 1600, 1800]
* depth : Decimal = \[700, 800, 900]
* materialTabletop : Material = \[]
* materialFrame : Material = \[]
* legType : String = \["fixed", "adjustable"]
* totalHeight : Decimal = <670; 740> with step of 1 cm (defined total leg height including the tabletop thickness)

Note: The total height values and the step should be designed by the client. The product's design is their job after all. If such topics are not really clear, don't hesitate to ask in order to prevent feedback loops coming from wrong design understanding.

#### 1.2 Implement in the component source code.

<details>

<summary>Unfold to see the result of the this step</summary>

```json
{
    "id": "isdt:example_table",
    "parameters": [
        {
            "key": "width",
            "labels": {
                "en": "Width"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1200,
            "valueObjects": [
                {
                    "value": 1200,
                    "condition": "true"
                },
                {
                    "value": 1400,
                    "condition": "true"
                },
                {
                    "value": 1600,
                    "condition": "true"
                },
                {
                    "value": 1800,
                    "condition": "true"
                },
                {
                    "value": 2000,
                    "condition": "true"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "depth",
            "labels": {
                "en": "Depth"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 800,
            "valueObjects": [
                {
                    "value": 700,
                    "condition": "true"
                },
                {
                    "value": 800,
                    "condition": "true"
                },
                {
                    "value": 900,
                    "condition": "true"
                },
                {
                    "value": 1000,
                    "condition": "true"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "materialTabletop",
            "labels": {
                "en": "Tabletop Surface"
            },
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:surface_cremewhite",
                "isdt:surface_gray",
                "isdt:surface_oak",
                "isdt:surface_nut",
                "isdt:surface_blue"
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "materialFrame",
            "labels": {
                "en": "Frame Colour"
            },
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:surface_chrome",
                "isdt:surface_cremewhite",
                "isdt:surface_black"
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key":"legType",
            "labels": {
                "en": "Leg Type"
            },
            "type":"String",
            "defaultValue":"fixed",
            "valueObjects": [
                {
                    "value": "fixed",
                    "labels": {
                        "en": "Fixed length"
                    }
                },
                {
                    "value": "adjustable",
                    "labels": {
                        "en": "Telescopic, adjustable length"
                    }
                }
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "totalHeight",
            "labels": {
                "en": "Tabletop Height"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 710,
            "validRange": {
                "valueFrom": 670,
                "valueTo": 740,
                "step": 10
            },
            "enabled": true,
            "visible": true,
            "visibleInPartList": false
        }
    ]
}
```

</details>

### 2. Analyse and implement interaction possibilities

#### 2.1 Look through the combinations

* widths:
  * 1200, 1400 can be combined with 700, 800 depths
  * 1600 can be combined only with 800 depth
  * 1800 can be combined with 800, 900 depths
* depths:
  * 700 can be combined with 1200, 1400 widths
  * 800 can be combined with 1200, 1400, 1600, 1800 widths
  * 900 can be combined only with 1800 width
* materials do not have any constraints
* leg types also do not have any constraints
* totalHeight should not be in the part list (it does not define the product) and is relevant only for adjustable legs -> visible only with relevant legType

#### 2.2 Implement as conditions into the script

<details>

<summary>Unfold to see the result of the this step</summary>

```json
{
    "id": "isdt:example_table",
    "parameters": [
        {
            "key": "width",
            "labels": {
                "en": "Width"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1200,
            "valueObjects": [
                {
                    "value": 1200,
                    "condition": "in(depth, 700, 800)"
                },
                {
                    "value": 1400,
                    "condition": "in(depth, 700, 800)"
                },
                {
                    "value": 1600,
                    "condition": "depth == 800"
                },
                {
                    "value": 1800,
                    "condition": "in(depth, 800, 900)"
                },
                {
                    "value": 2000,
                    "condition": "depth == 1000"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "depth",
            "labels": {
                "en": "Depth"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 800,
            "valueObjects": [
                {
                    "value": 700,
                    "condition": "in(width, 1200, 1400)"
                },
                {
                    "value": 800,
                    "condition": "in(width, 1200, 1400, 1600, 1800)"
                },
                {
                    "value": 900,
                    "condition": "width == 1800"
                },
                {
                    "value": 1000,
                    "condition": "width == 2000"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "materialTabletop",
            "labels": {
                "en": "Tabletop Surface"
            },
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:surface_cremewhite",
                "isdt:surface_gray",
                "isdt:surface_oak",
                "isdt:surface_nut",
                "isdt:surface_blue"
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "materialFrame",
            "labels": {
                "en": "Frame Colour"
            },
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:surface_chrome",
                "isdt:surface_cremewhite",
                "isdt:surface_black"
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "legType",
            "labels": {
                "en": "Leg Type"
            },
            "type": "String",
            "defaultValue": "fixed",
            "valueObjects": [
                {
                    "value": "fixed",
                    "labels": {
                        "en": "Fixed length"
                    }
                },
                {
                    "value": "adjustable",
                    "labels": {
                        "en": "Telescopic, adjustable length"
                    }
                }
            ],
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "totalHeight",
            "labels": {
                "en": "Tabletop Height"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 710,
            "validRange": {
                "valueFrom": 670,
                "valueTo": 740,
                "step": 10
            },
            "enabled": true,
            "visible": "legType == 'adjustable'",
            "visibleInPartList": false
        }
    ]
}
```

</details>

### 3. Load the component and test

If you followed our implementation exacly, you probably discovered an error: In the way we analysed and implemented this, you'll find out, that we can not select the table 200 x 100 cm! If you try this as the default dimensions, you end up dead-locked with:

![Only width 2000 and 1000 are possible](images/200\_50\_20\_deadlock.png)

This is clearly wrong and needs to be fixed. However, clients' usual wishes are that only possible variations are displayed. This is a good UX idea, however as you can see, not always implementable. In such cases, follow top-to-bottom, left-to-right rule of thumb: You select the parameters in a logic that you start at top, limiting possibilities in further parameters and in following groups. It might not always be possible, but once the enduser selects something, it should not modify the configuration that is already behind them.

Therefore, we modify all conditions of width's value objects to true and the depths will adjust accordingly.

### 4. Article Numbers

When you look into the table, you can see some rules there:

* always starts with 396
* depths 700 and 800 have constant second part: 312
* depth 900 has second part 318
* except for 2000x1000, third part are the first digits of the widths and depth
* 2000x1000 has different second and third part: 641.891

This means, you could:

```javascript
secondPart = '312';
if (depth == 900) { secondPart = '318'; }

thirdPart = substring(string(width), 0, 2) | substring(string(depth), 0, 1);

if (width == 2000 && depth == 1000) {
    secondPart = '641';
    thirdPart = '891';
}

articleNr = '396.' | secondPart | '.' | thirdPart;
```

This works perfectly, however, this is a logical approach that would have been perfectly suitable if you haven't had those exceptions. Also, it is practically impossible for the code review to check it. Also, it will be hard and error prone for you to modify it when adding new size options, making you basically do the analyses once again. As written above, this is not recommended unless you have a lot of parts with perfectly regular logical articleNr codes without exceptions.

Therefore, we implement it using the "brutal force approach":

1. type #TABLE width, depth and apply formatting
2. this is the result:

```javascript
/*TABLE width, depth*/
if (width == 1200) {
    if (depth == 700) { }
    if (depth == 800) { }
    if (depth == 900) { }
    if (depth == 1000) { }
}
if (width == 1400) {
    if (depth == 700) { }
    if (depth == 800) { }
    if (depth == 900) { }
    if (depth == 1000) { }
}
if (width == 1600) {
    if (depth == 700) { }
    if (depth == 800) { }
    if (depth == 900) { }
    if (depth == 1000) { }
}
if (width == 1800) {
    if (depth == 700) { }
    if (depth == 800) { }
    if (depth == 900) { }
    if (depth == 1000) { }
}
if (width == 2000) {
    if (depth == 700) { }
    if (depth == 800) { }
    if (depth == 900) { }
    if (depth == 1000) { }
}
/* END OF TABLE width, depth*/
```

3. This does not take into account possible combinations, therefore we need to delete them.
4. Fill in the articleNrs. If you have the data in a formalized way, you can do this really quickly using multicursor approach:
   * open this md file in VS Code
   * select the table of articleNrs above, do "place cursor at end of each selected line" (Cmd+Alt+I)
   * copy the articleNrs
   * select "if (depth == " and do "place cursor at each of selected occurences" (Cmd+Shift+L)
   * type articleNr = ' (paste) ';
5. result:

```javascript
if (width == 1200) {
    if (depth == 700) { articleNr = '396.312.127'; }
    if (depth == 800) { articleNr = '396.312.128'; }
}
if (width == 1400) {
    if (depth == 700) { articleNr = '396.312.147'; }
    if (depth == 800) { articleNr = '396.312.148'; }
}
if (width == 1600) {
    if (depth == 900) { articleNr = '396.312.168'; }
}
if (width == 1800) {
    if (depth == 800) { articleNr = '396.312.188'; }
    if (depth == 900) { articleNr = '396.318.189'; }
}
if (width == 2000) {
    if (depth == 1000) { articleNr = '396.641.891'; }
}
```

This approach is not as smart as the first one, but you can:

1. add or remove articleNrs for new/obsolete parameter combinations really quickly and easily
2. check the articleNrs in phase of code review, not requiring you to click through every possible combination (you should still check some, though)

We did not take into account the suffixes together with this approach, because the suffixes do not influence what is in front of them. Therefore, we don't do something like `#TABLE width, depth, materialTabletop, materialFrame, legType`, because this would deprive the simplicity and take a lot of time to implement and check. Therefore, we use a combination of the "smart" and the "brutal force" approach.

Rest of resulting articleNr code:

```javascript
if (width == 1200) {
    if (depth == 700) { articleNr = '396.312.127'; }
    if (depth == 800) { articleNr = '396.312.128'; }
}
if (width == 1400) {
    if (depth == 700) { articleNr = '396.312.147'; }
    if (depth == 800) { articleNr = '396.312.148'; }
}
if (width == 1600) {
    if (depth == 900) { articleNr = '396.312.168'; }
}
if (width == 1800) {
    if (depth == 800) { articleNr = '396.312.188'; }
    if (depth == 900) { articleNr = '396.318.189'; }
}
if (width == 2000) {
    if (depth == 1000) { articleNr = '396.641.891'; }
}

articleNr = articleNr | ' - ';
if (materialTabletop == 'isdt:surface_oak') { articleNr = articleNr | 'ECH'; }
if (materialTabletop == 'isdt:surface_cremewhite') { articleNr = articleNr | 'CRW'; }
if (materialTabletop == 'isdt:surface_nut') { articleNr = articleNr | 'NSS'; }
if (materialTabletop == 'isdt:surface_gray') { articleNr = articleNr | 'SGR'; }
if (materialTabletop == 'isdt:surface_blue') { articleNr = articleNr | 'KBL'; }

articleNr = articleNr | ' - ';
if (materialFrame == 'isdt:surface_chrome') { articleNr = articleNr | '731'; }
if (materialFrame == 'isdt:surface_cremewhite') { articleNr = articleNr | '121'; }
if (materialFrame == 'isdt:surface_black') { articleNr = articleNr | 'JBL'; }

if (legType == 'adjustable') { articleNr = articleNr | ' - ADJ'; }
```

### 5. Design and Implement the Geometry

First, we extract the constants from the product definition and initialize them in a inited block:

```javascript
if (ifnull(geometryInited, false) == false) {
    geometryInited = true;
    woodThickness = 40;
    legBaseHeight = 12;
    legBaseSide = 65;
    frameWidth = 15;
    frameHeight = 35;
    frameOffset = 10;
    legOffset = frameOffset + frameWidth + legBaseSide / 2;
    endcapDiameter = 48;
    endcapHeight = 5;
    fixedLegDiameter = 50;
    fixedLegTotalHeight = 670;
    fixedLegHeight = fixedLegTotalHeight - legBaseHeight - endcapHeight;
    adjLegBigDiameter = 60;
    adjLegSmallDiameter = 50;
    adjLegBigHeight = 500;
    adjLegSmallHeight = 380;
}
```

See that some of the values are the same (fixedLegDiameter, adjLegSmallDiameter), but we make it as extra variables: First, it is a separate part and therefore the meaning of the constant is not the same. Second: doing it separate makes our geometry script robust in case of "Sorry, we got it wrong, the fixed leg is actually 55, please adjust!" situations.

Another thing we need to realize and prepare for, is to compute the position of the tabletop in the Z axis. This is important, because we need to visualize the adjustable legs correctly and we need to show the tabletop at a constant Z position, if the fixed legs are selected.

```javascript
if (legType == 'fixed') { tabletopZ = fixedLegTotalHeight; }
else { tabletopZ = totalHeight - woodThickness; }
```

Now, we have prepared all necessary values and can display the geometry. We set the pivot of the table on the floor under the center of the table. First, let's draw the tabletop to have it as a reference. The dimensions are width x depth x woodThickness. Because AddCube has pivot in the rear left bottom corner, we need to center it in the top view and move it up:

```javascript
/* tabletop */
AddCube(Vector3f{width, depth, woodThickness});
 SetObjSurface(materialTabletop);
 MoveMatrixBy(Vector3f{ -width / 2, -depth / 2, tabletopZ});
```

We continute with the legs. Let's make the fixed leg first. We start with the endcap, then the leg itself above the endcap and we end with the leg's mounting base. We enclose everything in a group, so that everything can be copied at once and moved around. Notice how we call the group, so that it is clear what is in it and where it ends.

```javascript
BeginObjGroup('FIXED_LEG');
    AddCylinder(endcapDiameter / 2, endcapDiameter / 2, endcapHeight, 8);
     SetObjSurface('isdt:black');
    AddCylinder(fixedLegDiameter / 2, fixedLegDiameter / 2, fixedLegHeight, 8);
     SetObjSurface(materialFrame);
     MoveMatrixBy(Vector3f{0, 0, endcapHeight});
    AddCube(Vector3f{legBaseSide, legBaseSide, legBaseHeight});
     SetObjSurface(materialFrame);
     MoveMatrixBy(Vector3f{ -legBaseSide / 2, -legBaseSide / 2, endcapHeight + fixedLegHeight});
EndObjGroup('FIXED_LEG');
```

Let's see what we have at the moment:

![tabletop and one leg, centerd](images/200\_50\_50\_geometry1leg.png)

We see the measurements, which are correct - the overall leg height should have been 670, adding woodThickness 40 to resulting 710 height. If possible, do this check as early as possible to find errors early.

Because this leg should be visualized only when the leg type is fixed, we wrap this code in an if-block and prepare the group for the adjustable leg.

```javascript
/* Draw the legs, based on the legType setting. Pivot in the center of the leg's circle and under center of the base. */
if (legType == 'fixed') {
    BeginObjGroup('FIXED_LEG');
        ...
    EndObjGroup('FIXED_LEG');
} else {
    BeginObjGroup('ADJUSTABLE_LEG');

    EndObjGroup('ADJUSTABLE_LEG');
}
```

We draw the adjustable leg in two phases: lower small part + end cap and above it the big part + mounting base. The lower part is on the ground, but we have to move the upper part based on the tabletopZ value.

```javascript
BeginObjGroup('ADJUSTABLE_LEG');
    AddCylinder(endcapDiameter / 2, endcapDiameter / 2, endcapHeight, 8);
     SetObjSurface('isdt:black');
    AddCylinder(adjLegSmallDiameter / 2, adjLegSmallDiameter / 2, adjLegSmallHeight, 8);
     SetObjSurface(materialFrame);
     MoveMatrixBy(Vector3f{0, 0, endcapHeight});
     
    /* top adjustable part of the leg */
    BeginObjGroup('ADJUSTABLE_LEG_TOP');
        AddCylinder(adjLegBigDiameter / 2, adjLegBigDiameter / 2, adjLegBigHeight, 8);
         SetObjSurface(materialFrame);
        AddCube(Vector3f{legBaseSide, legBaseSide, legBaseHeight});
         SetObjSurface(materialFrame);
         MoveMatrixBy(Vector3f{ -legBaseSide / 2, -legBaseSide / 2, adjLegBigHeight});
    EndObjGroup('ADJUSTABLE_LEG_TOP');
     MoveMatrixBy(Vector3f{0, 0, tabletopZ - legBaseHeight - adjLegBigHeight});
    /* the top part is moved, so that its top end meets the frame's top surface */
EndObjGroup('ADJUSTABLE_LEG');
```

Again, notice the calling of the groups. Understanding geometry made with primitives does not force you to assign any identifiers, therefore it is up to you to comment it, so that everyone else understands what is going on in the code.

Either with legType == 'fixed' or else, we've ended with either of the legs in a group. Next step is to make copies and distribute them to the corners of the table. We place following behind the if-else block that draws the legs:

```javascript
/* move leg to the rear left corner */
 MoveMatrixBy(Vector3f{ -width / 2 + legOffset, -depth / 2 + legOffset, 0});
Copy();
/* copy and move to the front left corner */
 MoveMatrixBy(Vector3f{0, depth - 2 * legOffset, 0});
Copy();
/* front right */
 MoveMatrixBy(Vector3f{width - 2 * legOffset, 0, 0});
Copy();
/* rear right */
 MoveMatrixBy(Vector3f{0, -depth + 2 * legOffset, 0});
```

See above what is the legs offset. The frame is 10 mm behind the tabletop edge and 25 mm thick. We have the legs positioned by their cirles' centres, therefore half of the mounting base side has to be added.

We check the positioning of the legs along with the consistence of the totalHeight variable to the dimensions displayed:

![tabletop and four legs, height matches](images/200\_50\_60\_geometry4legs.png)

Last step is to create the frame. It will be placed under the tabletop, using two AddCube calls and two Copies - that way the cubes always have the same dimensions. We comment out the tabletop and align the frame with the legs. We pay attention that the frame sides do not collide into each other.

```javascript
BeginObjGroup('FRAME');
    /* long bars, width direction */
    AddCube(Vector3f{width - 2 * frameOffset, frameWidth, frameHeight});
     SetObjSurface(materialFrame);
    /* move to the rear side, copy, move to front side */
     MoveMatrixBy(Vector3f{ -width / 2 + frameOffset, -depth / 2 + frameOffset, 0});
    Copy();
     MoveMatrixBy(Vector3f{0, depth - 2 * frameOffset - frameWidth, 0});
    /* short bars, depth direction, make them fit in between long bars without collision */
    AddCube(Vector3f{frameWidth, depth - 2 * frameWidth - 2 * frameOffset, frameHeight});
     SetObjSurface(materialFrame);
    /* move to left, copy, move right */
     MoveMatrixBy(Vector3f{ -width / 2 + frameOffset, -depth / 2 + frameOffset + frameWidth, 0});
    Copy();
     MoveMatrixBy(Vector3f{width - 2 * frameOffset - frameWidth, 0, 0});
EndObjGroup('FRAME');
 MoveMatrixBy(Vector3f{0, 0, tabletopZ - frameHeight});
```

With the commented-out tabletop, we can see following:

![frame with four legs](images/200\_50\_70\_frameandlegs.png)

After uncommenting the tabletop, the table is ready:

![ready geometry](images/200\_50\_80\_fulltable.png)

See the full sourcecode [here](examples/200\_50\_10\_example\_table.json)

## Finalizing

After the component is tested, a merge request should be made. Then, the _Production Overseer_ checks it, accepts the merge request and eventually merges the changes into the master branch in GIT along with updating the live table.

## Incoming Change Request or Bug Report

It can happen, that the client is not satisfied with some details. Sometimes, something can be misunderstood or misinterpreted or there are some errors or crashes in the resulting configurator. In that case, we classify this as a bug. If the report goes against the definition, which changes, this is classified as a change request. A bug should be reported in a way, that it describes how IT IS in the current, wrong state and how it SHOULD BE in a correct state. Example:

```
"The leg diameter is 100 mm, but it should be 50 mm."
```

Compare it with:

```
"The leg diameter is 100 mm, but it is 50 mm."
```

The second sentence is okay-ish before it gets changed. This sentence is grammatically incorrect and also does not specify what is the error state. Example: Jack changes the diameter from 100 to 50 mm. After one week, Jane comes back from vacation and because she has received the error report as well, she opens the configurator, where the diameter is 50 mm and changes it back to 100 mm. Of course, this is also a total process failure, but even if the process is well managed, it will cost a lot of mental effort to understand such sentences.

After some time, the client tested and ordered following definition changes from his side. The reason behind it can be a change of the product design or wrong definitions. The message of the client follows:

```
"For longer tables, a fifth supporting leg in the center of the rear side of the table should be added to add rigidity. It is mandatory for all tables with a length bigger than 2000. Also, we have started using a thicker frame profile (16x40) for those tables. We have also started producing new sizes, please see the attached table of articleNrs. Also there is error in the 1600 x 800 articleNr, it is displayed improperly.
Regards,  
John 'The Client' Doe"
```

| Width | Depth | SKU         |
| ----- | ----- | ----------- |
| 1200  | 700   | 396.312.127 |
| 1200  | 800   | 396.312.128 |
| 1400  | 700   | 396.312.147 |
| 1400  | 800   | 396.312.148 |
| 1600  | 700   | 396.312.167 |
| 1600  | 800   | 396.312.168 |
| 1600  | 900   | 396.318.169 |
| 1800  | 800   | 396.312.188 |
| 1800  | 900   | 396.318.189 |
| 2000  | 1000  | 396.641.891 |
| 2200  | 1000  | 396.641.221 |
| 2400  | 1000  | 396.641.241 |

First, we extract the changes:

| Width | Depth | SKU         |
| ----- | ----- | ----------- |
| 1600  | 700   | 396.312.167 |
| 1600  | 900   | 396.318.169 |
| 2200  | 1000  | 396.641.221 |
| 2400  | 1000  | 396.641.241 |

Then, there is the change of the frame if length >= 2000 and a third change, if length >= 2000, add a 5th leg. And there is an error in the part list.

#### 1. Fixing the part list bug

We first fix the part list bug. The client reported, that the part list was not working properly in case of 1600 x 800. The articleNr we get if we try that configuration is: `isdt:example_table - CRW - 731 - ADJ`. ArticleNr is inited to the componentId, therefore it seems that we're missing out some if-block in the articleNr computation. After analysing the articleNr code, we can see a wrong depth equation in the list. See the diff that solves the issue:

![diff of bug fix 1600 x 800 part list](images/200\_50\_110\_diffbug.png)

#### 2. Adding new sizes

1. We add two valueObjects to width, 2200, 2400.
2. We modify the depth valueObject's condition.
3. We finalize articleNrs in the table.

Because the geometry is fully parametrized, it should be as easy as:

![diff of adding sizes](images/200\_50\_110\_diffsizes.png)

#### 3. Changing frame size for big tables

We will not have constants of the frame anymore. We must ensure that each geometry call gets all values that depend on those correctly. Therefore, we have to reorganize the geometry - inited block. If you highlight the frameWidth and frameHeight, you see the legOffset depends on them. No other computation depends on the legOffset.

We move the frameWidth and frameHeight out of the inited block and we do an if-else block depending on the length compared with 2000. After we've got these values, we compute the legs offset:

```javascript
if (width >= 2000) {
    frameWidth = 16;
    frameHeight = 40;
} else {
    frameWidth = 15;
    frameHeight = 35;
}
legOffset = frameOffset + frameWidth + legBaseSide / 2;
```

#### 4. Adding a fifth leg

We will have to make another copy of the leg and move it to the center of the backside. We can copy either the first leg, or the last leg in order to make it easiest:

1. If we copy the first leg, based on width:
   * either we move the first leg to rear, copy, move to left
   * or we move the first leg to right rear
2. If we copy the last leg, and we are in affected width, we do one more copy and move it to the back center.

Approach 2 is the more simple, therefore we just add:

```javascript
/* fifth leg for big tables */
if (width >= 2000) {
    Copy();
     MoveMatrixBy(Vector3f{ -width / 2 + legOffset, 0, 0});
}
```

See the full sourcecode after these changes [here](examples/200\_50\_20\_example\_table.json)
