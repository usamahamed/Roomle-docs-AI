# Advanced Docking Logic

This chapter requires the reader to have already an understanding of the Roomle platform and to have some experience with scripting, including topics described in the [Basic Docking Logic](200\_80\_dockingbasics.md) chapter. Topics described in this chapter are ones of the most complex you can achieve in the Roomle platform.

## Utilizing connection.isPreview Check

In the docking points context, a boolean getter `connection.isPreview` can be utilized. Usually the condition updates itself in every update loop. If the condition uses extensive computations, like searching through many arrays slowing down the configuration, you can utilize a pattern like the one following:

```json
{
    "mask": "shelves",
    "position": "{ 100, 200, 300}",
    "condition": "
        if (connection.isPreview) {
            /* 
            adding a new add-on, preview phase
            compute whethet it fits
            */
        } else {
            /* already docked, keep it */
            condition = true;
        }
    "
}
```

You check in the preview phase whether the addon fits. You prevent the situation where you have an illogical configuration, because it won't delete the child as if you were using the condition in the common way. However, you can still add some computations whether it is still valid. Example: you have a docking range of shelves inside a wardrobe. They must be placed at least 5 docking positions from each other, which is something you would do in the `conneciton.isPreview == true` branch, because every docking point in the range cycles through an array in 10 indices and it would be expensive to compute the conditions in every update loop. But you can get to a situation where you change the wardrobe height from 2500 to 1600 mm, therefore you need to delete the shelves that go through the wardrobe ceiling. In this case, you can of course use the `connection.isPreview == false` branch as in any other script.

```javascript
if (connection.isPreview) {
    /* 
    for (from position - 5 to position + 5) - check if there is a shelf docked
    Note: we will show this further in this chapter
    */
} else {
    _.positionZ = zFromVector(connection.position);
    condition = dockRangeHeight > _.positionZ;
}
```

## Storing Data in the `connection` Context in `assignmentScripts`

In cases where you need to compute a value once in the first time and you are certain that you do not need to recompute it later, you can compute it only in `onDock` and retrieve its value in both `onUpdate` and `onUnDock` scripts. See following example:

```javascript
"assignmentScripts": {
    "onDock": "
        _.i = round(xFromVector(connection.position) / stepX, 0);
        _.j = round(yFromVector(connection.position) / stepY, 0);
        connection._index = _.i * self.maxX + _.j;
        set(self.dockedWidths, connection._index, other.width);
    ",
    "onUpdate": "
        if (connection._index >= 0) {
            set(self.dockedWidths, connection._index, other.width);
        }
    ",
    "onUnDock": "
        if (connection._index >= 0) {
            set(self.dockedWidths, connection._index, 0);
        }
    "
}
```

## Sibling Points

Up until now, you knew how to detect a neighbour if it has been docked via the docking points. This is a perfectly possible and recommended way to detect neighbours, as long as your product docks in a single line. If you can fork the abstract connecting line, you can end up in loops or parallel configurations, where you need to detect what is next to the current component and eventually transfer data. This is a common topic in shelf systems or also in docking ranges. To directly communicate with a neighbouring element, you can use the _Sibling Points_ scripting feature, where you define a connection point in one or more components at a given position with a mask. If there are two siblings points in one place with matching masks, they connect together and standard assignments, as you already know them, ensure the ability to share data between the components in the configuration regardless of their position in the parent-child hierarchy.

```json
{
    "id":"example:siblings",
    ...
    "siblings": [
        {
            "mask": "horizontalSibling",
            "position": "{ -width / 2, 0, 100}",
            "rotation": "{0, 0, 0}",
            "selfAssignments": {}
        },
        {
            "mask": "horizontalSibling",
            "position": "{width / 2, 0, 100}",
            "rotation": "{0, 0, 0}",
            "selfAssignments": {}
        }
    ]
}
```

**Note:** The `siblings` arrtibute of type `List<ConnectionWithAssignment>`. Docking points inherits `ConnectionWithAssignments` and adds a `condition` and `rotation`. Therefore, siblings points have neither `condition` nor `rotation`.

**Note:** You do not have a (direct) possibility to know what component is on the other side of the sibling point, neither can you get data from the other sibling point. Therefore, you need to rather pull the data from the other side than to push it and use the pulled data to compute what you need afterwards. Therefore we recommend using `selfAssignments` or `assignmentScripts` where you assign to `self.` values based on the `other.` values.

### Example: Grid Shelf System

In this example we have to create a shelf system consisting of spaces dockable to left, right and top, with a similar logic to our demo [USM configurator](https://www.roomle.com/t/cp/), where widths and heights synchronize across the columns and lines (like in an Excel table, where you can not have two cells with different heights in a single row). We will work step-by-step in implementing a similar logic.

We start from the logic implementation, using abstract geometry in order not to overwhelm the script from the beginning. We start with visualizing the blank spaces and preparing the docking points.

<details>

<summary>Unfold to see the component definition</summary>

```json
{
    "id": "usm:frame",
    "parameters": [
        {
            "key": "width",
            "labels": {
                "de": "Breite",
                "en": "Width"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 750,
            "validValues": [
                350,
                395,
                500,
                750
            ],
            "visible": "true"
        },
        {
            "key": "depth",
            "sort": 10,
            "global": true,
            "labels": {
                "de": "Tiefe",
                "en": "Depth"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 350,
            "validValues": [
                350,
                500
            ],
            "visible": false
        },
        {
            "sort": 10,
            "key": "height",
            "labels": {
                "de": "Höhe",
                "en": "Height"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 350,
            "validValues": [
                100,
                175,
                250,
                350,
                395
            ],
            "visible": "true"
        }
    ],
    "onUpdate": "
        if (ifnull(inited, false) == false) {
            inited = true;
            isRoot = true;
        }
    ",
    "geometry": "
        if (isRoot) {
            coordSystemAxesLength = 200;
            coordSystemAxesThickness = 10;
            BeginObjGroup();
                AddPlainCube(Vector3f{coordSystemAxesThickness, coordSystemAxesThickness, coordSystemAxesLength}); SetObjSurface('demoCatalogId:test_crazy_gree');
                AddPlainCube(Vector3f{coordSystemAxesThickness, coordSystemAxesLength, coordSystemAxesThickness}); SetObjSurface('demoCatalogId:cyan');
                AddPlainCube(Vector3f{coordSystemAxesLength, coordSystemAxesThickness, coordSystemAxesThickness}); SetObjSurface('demoCatalogId:red');
            EndObjGroup();
        }
        AddCube(Vector3f{width, depth, height});
         MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
         SetObjSurface('isdt:black_transparent');
    ",
    "parentDockings": {
        "points": [
            {
                "mask": "gridLeft",
                "position": "{ -width / 2, 0, 0}",
                "rotation": "{0, 0, 0}",
                "condition": "true"
            },
            {
                "mask": "gridRight",
                "position": "{width / 2, 0, 0}",
                "rotation": "{0, 0, 0}",
                "condition": "true"
            },
            {
                "mask": "gridTop",
                "position": "{0, 0, height}",
                "rotation": "{0, 0, 0}",
                "condition": "true"
            }
        ]
    },
    "childDockings": {
        "points": [
            {
                "mask": "gridLeft",
                "position": "{width / 2, 0, 0}",
                "rotation": "{0, 0, 0}",
                "condition": "true",
                "selfAssignments": {
                    "onDock": {
                        "isRoot": false
                    },
                    "onUnDock": {
                        "isRoot": true
                    }
                }
            },
            {
                "mask": "gridRight",
                "position": "{ -width / 2, 0, 0}",
                "rotation": "{0, 0, 0}",
                "condition": "true",
                "selfAssignments": {
                    "onDock": {
                        "isRoot": false
                    },
                    "onUnDock": {
                        "isRoot": true
                    }
                }
            },
            {
                "mask": "gridTop",
                "position": "{0, 0, 0}",
                "rotation": "{0, 0, 0}",
                "condition": "true",
                "selfAssignments": {
                    "onDock": {
                        "isRoot": false
                    },
                    "onUnDock": {
                        "isRoot": true
                    }
                }
            }
        ]
    },
    "possibleChildren": [
        {
            "componentId": "usm:frame"
        }
    ]
}
```

</details>

![Initial state of the grid docking](images/200\_140\_10\_siblings\_10.png)

We already show a coordinate system axes in the root component - see figure above. You can understand from the code, that only the top-level parent has the `isRoot` variable set to `true`. Any other component has it set to `false`. In order to be less error-prone, we add visualization of the sibling points. We will use spheres with a diameter of 50 units, and we will also detect using sibling points, if there is a neighbour in the respective direction. Therefore, we add some values to the onUpdate - inited block:

```javascript
hasLeftNeighbour = false;
hasRightNeighbour = false;
hasTopNeighbour = false;
hasBottomNeighbour = false;
```

Which we visualize in the geometry and colour them in red if they are not connected, green when they are connected.

```javascript
AddSphere(Vector3f{50, 50, 50});
 MoveMatrixBy(Vector3f{ -width / 2 + 25, 0, 50});
if (hasLeftNeighbour) {
    SetObjSurface('isdt:green');
} else {
    SetObjSurface('isdt:red');
}

AddSphere(Vector3f{50, 50, 50});
 MoveMatrixBy(Vector3f{width / 2 - 25, 0, 50});
if (hasRightNeighbour) {
    SetObjSurface('isdt:green');
} else {
    SetObjSurface('isdt:red');
}

AddSphere(Vector3f{50, 50, 50});
 MoveMatrixBy(Vector3f{0, 0, height - 25});
if (hasTopNeighbour) {
    SetObjSurface('isdt:green');
} else {
    SetObjSurface('isdt:red');
}

AddSphere(Vector3f{50, 50, 50});
 MoveMatrixBy(Vector3f{0, 0, 25});
if (hasBottomNeighbour) {
    SetObjSurface('isdt:green');
} else {
    SetObjSurface('isdt:red');
}
```

Now the most important part: The sibling points themselves:

```json
{
    "mask": "horizontalSibling",
    "position": "{ -width / 2, 0, 50}",
    "selfAssignments": {
        "onDock": {
            "hasLeftNeighbour": true
        },
        "onUnDock": {
            "hasLeftNeighbour": false
        }
    }
},
{
    "mask": "horizontalSibling",
    "position": "{width / 2, 0, 50}",
    "selfAssignments": {
        "onDock": {
            "hasRightNeighbour": true
        },
        "onUnDock": {
            "hasRightNeighbour": false
        }
    }
},
{
    "mask": "verticalSibling",
    "position": "{0, 0, height}",
    "selfAssignments": {
        "onDock": {
            "hasTopNeighbour": true
        },
        "onUnDock": {
            "hasTopNeighbour": false
        }
    }
},
{
    "mask": "verticalSibling",
    "position": "{0, 0, 0}",
    "selfAssignments": {
        "onDock": {
            "hasBottomNeighbour": true
        },
        "onUnDock": {
            "hasBottomNeighbour": false
        }
    }
}
```

If you have two of those components docked, they will always match with the sibling points. Notice that the horizontal sibling points are not in the corners, but at the height of 50. This way, you can be sure that you won't connect with a component diagonally (there would have to be sibling points in the upper corner as well, but it is more understandable). In the current state, there are sibling points where their connections are visualized using the debug spheres:

![Debug geometry with sibling points](images/200\_140\_10\_siblings\_20.png)

![parent child hieararchy visualisation](images/200\_140\_10\_siblings\_30.png)

Because we now have all the neccessary data in the component regarding what can fit where, we can now add parent-side conditions. The simplest docking pattern in such shelf systems is a "pitchfork-like" hierarchy - only the components that are on the bottom can dock to the left and right, while all can dock in the vertical up direction. Therefore, the conditions will be:

`(!hasBottomNeighbour) && ((!connection.isPreview) || (!hasLeftNeighbour))` for the left docking point `(!hasBottomNeighbour) && ((!connection.isPreview) || (!hasRightNeighbour))` for the right docking point

`!hasBottomNeighbour` Implicates this is the bottom element -> therefore it even should have the left and right docking points. `(!connection.isPreview) || (!hasLeftNeighbour)` Allows docking as long as something is docked on the left side. However, after docking, this will immediately delete the docked child. Therefore this check needs to be there only in preview.

A more simple-to-understand version of above:

```javascript
if (connection.isPreview) {
    if (hasBottomNeighbour) {
        condition = false;
    } else {
        condition = hasLeftNeighbour /* or hasRightNeighbour */
    }
} else {
    condition = true;
}
```

Option 2: Implement this without `connection.isPreview` using `hasLeftChild` and `hasRightChild` variables, as described in the [Basic Docking Logic](200\_80\_dockingbasics.md).

The sibling points will be used, among other, to lock the widths and heights in the rows and columns. Therefore, `assignmentsOnUpdateSilent` will be used. `"height": "height"` in the horizontal siblings, `"width": "width"` in the vertical siblings. Why have we just picked `assignmentsOnUpdateSilent` instead of `assignmentsOnUpdate`? As written [Basic Docking Logic](200\_80\_dockingbasics.md), we need to keep the assigned parameters enabled.

Now the time comes to the geometry. The shelf system consists of pipes and connecting heads that connected together form frames. Into these frames, walls, doors, floors, trays and other parts can be mounted. The heads have 5 holes, allowing to screw the pipes together. Because the heads can be shared among up to 4 components, we have to define a rule which of the components will draw the head. Also, the frames on the bottom have legs. Check out subComponent definitions from the USM shelf system.

<details>

<summary>Unfold subComponent definitions</summary>

{ "internalId": "HEAD", "componentId": "usm:head", "numberInPartList": "1" }, { "internalId": "PIPE\_HORIZONTAL", "componentId": "usm:pipe", "assignments": { "length": "width" }, "numberInPartList": "1" }, { "internalId": "PIPE\_VERTICAL", "componentId": "usm:pipe", "assignments": { "length": "height" }, "numberInPartList": "1" }, { "internalId": "PIPE\_FORWARD", "componentId": "usm:pipe", "assignments": { "length": "depth" }, "numberInPartList": "1" }, { "internalId": "FOOT", "componentId": "usm:levelingfoot", "numberInPartList": "1" }

</details>

The task now is to define which of the neighbours draws which heads, which pipes etc. Before you read further, please try to yourself define a ruleset, which will ensure that all parts will be there once and only once. Hint: we've already got more than enough data in the `hasLeftNeighour`, `hasRightNeighbour`, `hasBottomNeighbour` and `hasTopNeighbour` parameters.

In our example we follow with building the ruleset in a way that we first build the component that is most to the left on the bottom. If add another component to the right, it will be missing its left parts. If we build upwards, the bottom will be missing. If we are filling a top-right corner, where there is the left and the right neighbour, the top and right parts will be present. Therefore we can say that we always have the two top pipes, two right pipes and the two top-right heads. Left top heads, and left pipes are there when `!hasLeftNeighbour`. Bottom heads, legs and pipes are there if `!hasBottomNeighbour`. The bottom left parts are there whenever there is no bottom or left neighbour -> `(!hasLeftNeighbour) && (!hasRightNeighbour)`

We prepare logical variables for this in onUpdate in order to make the code more legible. These computations are really simple and might seem trivial. However, an uninitiated person will read that the geometry and part list counts depend on whether the component _HAS_ the parts and the component has the parts as long as there are no neighbours, making the code provide the answer to the question: "Why does it have the parts?"

```javascript
hasBottomParts = !hasBottomNeighbour;
hasLeftParts = !hasLeftNeighbour;
hasBottomLeftParts = hasBottomParts && hasLeftParts;
```

Therefore we can build the geometry:

```javascript
if (hasLeftParts) {
    BeginObjGroup();
        SubComponent('PIPE_VERTICAL');
        SubComponent('HEAD');
         MoveMatrixBy(Vector3f{0, 0, height});
    EndObjGroup();
     MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
    Copy();
     MoveMatrixBy(Vector3f{0, depth, 0});
    SubComponent('PIPE_FORWARD');
     RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
     MoveMatrixBy(Vector3f{ -width / 2, 0, height});
}
if (hasBottomParts) {
    BeginObjGroup();
        SubComponent('HEAD');
        SubComponent('PIPE_HORIZONTAL');
         RotateMatrixBy(Vector3f{0, 1, 0}, Vector3f{0, 0, 0}, -90);
        SubComponent('FOOT');
    EndObjGroup();
     MoveMatrixBy(Vector3f{width / 2, 0, 0});
    Copy();
     MoveMatrixBy(Vector3f{0, depth, 0});
    SubComponent('PIPE_FORWARD');
     RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
     MoveMatrixBy(Vector3f{width / 2, 0, 0});
}
if (hasBottomLeftParts) {
    SubComponent('HEAD');
     MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
    Copy();
     MoveMatrixBy(Vector3f{0, depth, 0});
     SubComponent('FOOT');
     MoveMatrixBy(Vector3f{-width / 2, 0, 0});
     Copy();
     MoveMatrixBy(Vector3f{0, depth, 0});
    SubComponent('PIPE_FORWARD');
     RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
     MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
}
BeginObjGroup();
    SubComponent('HEAD');
     MoveMatrixBy(Vector3f{width / 2, 0, height});
    SubComponent('PIPE_HORIZONTAL');
     RotateMatrixBy(Vector3f{0, 1, 0}, Vector3f{0, 0, 0}, 90);
     MoveMatrixBy(Vector3f{ -width / 2, 0, height});
    SubComponent('PIPE_VERTICAL');
     MoveMatrixBy(Vector3f{width / 2, 0, 0});
EndObjGroup();
Copy();
 MoveMatrixBy(Vector3f{0, depth, 0});
SubComponent('PIPE_FORWARD');
 RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
 MoveMatrixBy(Vector3f{width / 2, 0, height});
```

The part list counts (`numberInPartList` expressions):

PIPE\_FORWARD: `(1 + hasBottomParts + hasLeftParts + hasBottomLeftParts)` - top right always, then based on the rest parameters HEAD: `2 * (1 + hasBottomParts + hasLeftParts + hasBottomLeftParts)` - like the forward pipes, but two times PIPE\_HORIZONTAL: `2 * (1 + hasBottomParts)` - top, then optionally bottom PIPE\_VERTICAL: `2 * (1 + hasLeftParts)` - right, then optionally left FOOT: `2 * (1 + hasBottomLeftParts)` - right, then optionally left

In further steps we'll delete the debug geometry. Check out the [component definition up to the current state](examples/200\_140\_siblings\_10\_debug.json) if you are interested.

***

![Current state of the configurator - rods and heads](images/200\_140\_10\_siblings\_40.png)

In order to add the infills, walls etc., there are more possibilities. Every floor or wall could be docked. In such a case, it would be sometimes hard to dock the components, for example to dock floors if there are already all four walls docked. Also it would have been more suitable to compute the above variables not from left to right, but from child to parent. The reason for this might not be clear at first thought: if you delete a shelf on the left, also the left wall deletes. You would need the isLeft/RightChild logic for this.

We'll choose the approach that the configurator end-user docks ready-made assemblies together, which will compute which of the components will draw which parts of the accessories. We keep the logic the same: if the left or lower component already has the part, do not add it anymore.

We start with the variables driving the logic:

* add those to onUpdate - init block:

```javascript
hasLeftWall = true;
hasRightWall = true;
hasCeiling = true;
hasBottom = true;
hasLeftPanel = true;
hasRightPanel = true;
hasTopPanel = true;
hasBottomPanel = true;
leftNeighbourHasRightPanel = false;
bottomNeighbourHasTopPanel = false;
```

* sibling points assignmentScripts:

left sibling point:

```json
"assignmentScripts": {
    "onUpdate": "self.leftNeighbourHasRightPanel = other.hasRightPanel;",
    "onUnDock": "self.leftNeighbourHasRightPanel = false;"
}
```

bottom sibling point:

```json
"assignmentScripts": {
    "onUpdate": "self.bottomNeighbourHasTopPanel = other.hasTopPanel;",
    "onUnDock": "self.bottomNeighbourHasTopPanel = false;"
}
```

* subComponent definition for USM's wall panel:

```json
{
    "internalId": "PANEL",
    "componentId": "usm:metalelement",
    "assignments": {
        "width": [350, 395, 750 ], 
        "height":[100, 175, 250, 350, 395, 500],
        "colorMaterial": Material,
        "perforated": bool
    }
}
```

Those need to be there for all 5 walls except for the front:

* colour material selector - simply global for now:

```json
{
    "key": "material",
    "global": true,
    "labels": {
        "de": "Verkleidungsfarbe",
        "en": "Color"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors",
    ],
    "visible": "true"
}
```

* Change element type parameter

```json
{
    "key": "elementType",
    "defaultValue": "no_front",
    "enabled": true,
    "labels": {
        "de": "Fachtyp ändern",
        "en": "Change elementtype"
    },
    "type": "String",
    "valueObjects": [
        {
            "value": "no_front",
            "labels": {
                "en": "Without Doors",
                "de": "Ohne Tür"
            },
            "thumbnail": "https://storage.googleapis.com/roomle-catalogs/1e9dbe16-bb11-446a-a28d-1cc42a3c16e4/thumbnails/parameters/elementtype/usm_3.png"
        },
        {
            "value": "onlyTop",
            "labels": {
                "en": "Top only",
                "de": "Ohne Seitenwände"
            },
            "thumbnail": "https://storage.googleapis.com/roomle-catalogs/1e9dbe16-bb11-446a-a28d-1cc42a3c16e4/thumbnails/parameters/elementtype/onlyTop.png"
        },
        {
            "value": "skeleton",
            "labels": {
                "en": "Without walls",
                "de": "Ohne Wände"
            },
            "thumbnail": "https://storage.googleapis.com/roomle-catalogs/1e9dbe16-bb11-446a-a28d-1cc42a3c16e4/thumbnails/parameters/elementtype/skeleton.png"
        }
    ],
    "visible": true
}
```

We have the `elementType` parameter which defines whether the current component should have the walls in the first place. We need to combine it with properties from the left and bottom neighbours: if they have the right or top panel, do not draw it regardless whether the current component should have them or not - similarily as with the parts.

```javascript
hasOwnLeftPanel = (!leftNeighbourHasRightPanel) && (in(elementType, 'no_front'));
hasOwnRightPanel = in(elementType, 'no_front');
hasOwnBottomPanel = (!bottomNeighbourHasTopPanel) && (in(elementType, 'no_front'));
hasOwnTopPanel = in(elementType, 'no_front', 'onlyTop');
hasOwnRearPanel = in(elementType, 'no_front');
```

Therefore, we can draw the geometry:

```json
if (hasOwnRearPanel) {
    SubComponent('PANEL_REAR');
        MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
        RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
}
if (hasOwnLeftPanel) {
    SubComponent('PANEL_LEFT');
        RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
        RotateMatrixBy(Vector3f{0, 0, 1}, Vector3f{0, 0, 0}, 90);
        MoveMatrixBy(Vector3f{ -width / 2, 0, 0});
}
if (hasOwnRightPanel) {
    SubComponent('PANEL_RIGHT');
        RotateMatrixBy(Vector3f{1, 0, 0}, Vector3f{0, 0, 0}, -90);
        RotateMatrixBy(Vector3f{0, 0, 1}, Vector3f{0, 0, 0}, 90);
        MoveMatrixBy(Vector3f{width / 2, 0, 0});
}
if (hasOwnBottomPanel) {
    SubComponent('PANEL_BOTTOM');
        MoveMatrixBy(Vector3f{ -width / 2, depth, 0});
}
if (hasOwnTopPanel) {
    SubComponent('PANEL_TOP');
        MoveMatrixBy(Vector3f{ -width / 2, depth, height});
}
```

Note: Look at how simply the geometry works with using the widths and depths. The panels are actually smaller than those values with their pivot slightly off the panels - everything is set up to match the reference dimensions.

SubComponent's numberInPartList definitions are as simple as:

PANEL\_BOTTOM - `hasOwnBottomPanel`\
PANEL\_TOP - `hasOwnTopPanel`\
PANEL\_LEFT - `hasOwnLeftPanel`\
PANEL\_RIGHT - `hasOwnRightPanel`\
PANEL\_REAR - `hasOwnRearPanel`

We've come to another problem with this: the colour definition of the individual panels. Because the parameter is both global and local, and some panels are in one component and some another, you can not define which panels exactly you wish to have in which colours. We will utilize the sibling points' assignments to solve this.

![parrot-coloured shelf](images/200\_140\_10\_siblings\_50.png)

We will solve this by adding following parameters: `material_rear`, `material_left`, `material_right`, `material_top`, `material_bottom`, which will be bound together using assignments in the sibling points:

1. Add the material definitions - just copy the parameters, with a different key. Also the parameters will be displayed based on the value of `elementType` variable and only the rear will be global:

<details>

<summary>Unfold to see the parameters code</summary>

```json
{
    "key": "material",
    "global": true,
    "labels": {
        "de": "Verkleidungsfarbe",
        "en": "Color"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": "true",
    "onValueChange": "
        if (parameter.userTriggeredChange) {
            material_rear = material;
            material_left = material;
            material_right = material;
            material_bottom = material;
            material_top = material;
        }
    "
},
{
    "key": "material_rear",
    "global": true,
    "labels": {
        "de": "Verkleidungsfarbe - hinten",
        "en": "Color - rear"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": "in(elementType, 'no_front')",
    "visibleAsGlobal": "in(elementType, 'no_front')"
},
{
    "key": "material_left",
    "labels": {
        "de": "Verkleidungsfarbe - links",
        "en": "Color - left"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": "in(elementType, 'no_front')"
},
{
    "key": "material_right",
    "labels": {
        "de": "Verkleidungsfarbe - rechts",
        "en": "Color - right"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": "in(elementType, 'no_front')"
},
{
    "key": "material_top",
    "labels": {
        "de": "Verkleidungsfarbe - oben",
        "en": "Color - top"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": " in(elementType, 'no_front', 'onlyTop')"
},
{
    "key": "material_bottom",
    "labels": {
        "de": "Verkleidungsfarbe - unten",
        "en": "Color - bottom"
    },
    "type": "Material",
    "defaultValue": "usm:RAL9010",
    "validGroups": [
        "usm:metalcolors"
    ],
    "visible": "in(elementType, 'no_front')"
}
```

</details>

2. Assign the side-relevant materials to the respective subComponents

`PANEL_BOTTOM` - `"colorMaterial": "material_bottom"`\
`PANEL_TOP` - `"colorMaterial": "material_top"`\
`PANEL_LEFT` - `"colorMaterial": "material_left"`\
`PANEL_RIGHT` - `"colorMaterial": "material_right"`\
`PANEL_REAR` - `"colorMaterial": "material_rear"`

3. Add `onValueChange` script to the `material` parameter

```javascript
if (parameter.userTriggeredChange) {
    material_rear = material;
    material_left = material;
    material_right = material;
    material_bottom = material;
    material_top = material;
}
```

4. Add assignments into the siblings points:

left - `"assignmentsOnUpdateSilent": { "material_right": "material_left" }`\
right - `"assignmentsOnUpdateSilent": { "material_left": "material_right" }`\
top - `"assignmentsOnUpdateSilent": { "material_bottom": "material_top" }`\
bottom - `"assignmentsOnUpdateSilent": { "material_top": "material_bottom" }`

This will ensure that all the materials will propagate the respective panels. If someone wants a 2x2 shelf with the rear panels in mustard, bottom panels in dark grey, panels of the top-left element in red and the rest in white, it can be achieved:

![Colour specific sides](images/200\_140\_10\_siblings\_60.png)

See the final state of this example [here](examples/200\_140\_siblings.json)

### Example: Deciding Which of the Neighbours Should Draw a Post in the 4 Post Shelf System

See the [4-Posts Shelving System](400\_30\_quadpost.md) scripting example, where this is described in detail.

## Docking Ranges

Docking ranges have already been mentioned in the [Basic Docking Logic](200\_80\_dockingbasics.md) chapter. Docking ranges are internally implemented as arrays of docking points, therefore one docked component in a range can have the same feature as any component docked via a docking point. To define a range, use the `parentDocking.ranges` array, where you use the `roomleDockingRange` snippet, which looks like this:

```json
"parentDockings": {
    "ranges": [
        {
            "mask": "mask",
            "position": "{0, 0, 0}",
            "stepEnd": "{0, 0, 1000}",
            "rotation": "{0, 0, 0}",
            "condition": "true",
            "stepX": 0,
            "stepY": 0,
            "stepZ": 100
        }
    ]
}
```

Ranges can be 1, 2, or 3 dimensional. The range above is a 1D range, with a total of 11 docking points between 0 and 1000 on the Z-axis, with a step of 100 in between. The range is axis-aligned in the coordinate system of its component. If you need 2D range, you must have two delta values between `stepEnd` and `position` and two of `stepX`, `stepY`, `stepZ` defined.

### Limiting Amount of Children Docked in a Range

Docking range has no native way of limiting how many children are possible to be docked to it. You must write your own logic to achieve this. Examples how to achieve this are folded below.

<details>

<summary>Unfold to see template for given number of docked children.</summary>

```json
"onUpdate":"
    if (ifnull(inited, false) == false) {
        inited = true;
        countMaskChildrenDocked = 0;
        limitMaskChildrenDocked = 5;
    }
",

...

{
    "mask": "mask",
    "position": "{0, 0, 0}",
    "stepEnd": "{0, 0, 1000}",
    "condition": "
        if (connection.isPreview) {
            condition = countMaskChildrenDocked < limitMaskChildrenDocked;
        } else {
            condition = true;
        }
    ",
    "stepZ": 100,
    "selfAssignments": {
        "onDock": {
            "countMaskChildrenDocked": "countMaskChildrenDocked + 1"
        },
        "onUnDock": {
            "countMaskChildrenDocked": "countMaskChildrenDocked - 1"
        }
    }
}
```

</details>

<details>

<summary>Simplification for maximum of one child in the range.</summary>

```json
"onUpdate":"
    if (ifnull(inited, false) == false) {
        inited = true;
        maskChildDocked = false;
    }
"

...

{
    "mask": "mask",
    "position": "{0, 0, 0}",
    "stepEnd": "{0, 0, 1000}",
    "condition": "condition = (!maskChildDocked) || (!connection.isPreview)",
    "stepZ": 100,
    "selfAssignments": {
        "onDock": {
            "maskChildDocked": true
        },
        "onUnDock": {
            "maskChildDocked": false
        }
    }
}
```

</details>

Note: Although `DockingPointRange` is dependent on `ConnectionWithAssignments`, which has `maxConnections`, this is not useful for ranges, because `maxConnections` apply to a single point, not a range of the points.

### Getting Connection Index in a 1D Range

You can use the `connection.index` getter in most cases. If your range's `position` changes, you might need to compute it from the connection.position using following formula:

`i = round(xFromVector(connection.position) / stepX, 0);`

Be aware, that if you change the range's `position`, it will not cut the first position of the range, but move them (cutting the last positions instead). If this is unintended, the range should not move, but the first elements should still delete, consider following (at cost of some possible, but usally small, performance decrease):

1. keep the `position` and `stepEnd` constant (not in means of position, but in means of length).
2. disable the relevant docking points in the condition instead:\
   `condition = connection.index >= dockRange<MaskName>_startIndex && connection.index < dockRange<MaskName>_endIndex;`,\
   while defining `dockRange<MaskName>_startIndex` and `dockRange<MaskName>_endIndex` in onUpdate.

### Getting Connection Index in a 2D or 3D Range

To get i, j, k coordinates from the range, you can:

```javascript
i = round(xFromVector(connection.position) / stepX, 0);
j = round(yFromVector(connection.position) / stepY, 0);
k = round(zFromVector(connection.position) / stepZ, 0);
```

If you have a 1D docking range, you can easily use the `connection.index`. However, in 2D or 3D arrays, it is more advantageous to compute it from the coordinates on your own, so that you have more control over it, should the docking grid dimension change and also that you're certain in which order of the directions the indices are added. If you have a backing 1D array behind the range, where every field of the array corresponds to one docking point of the range, you can then:

```javascript
/* 1D array */
index = connection.index;
/* or */
index = i;

/* 2D array */
index = i * maxX + j;

/* 3D array */
index = (i * maxX + j) * maxY + k;
```

**Warning:** If you need the value in `condition` too, you must compute it BOTH in `assignmentScripts.onDock` AND `condition`.

**Recommendation:** Store the values in the `connection.` context, e.g.:

```javascript
connection.i = round(xFromVector(connection.position) / stepX, 0) * self.maxX + round(yFromVector(connection.position) / stepY, 0)
```

### Docking Range Examples

See commented example in [4-Posts Shelving System](400\_30\_quadpost.md)

## Collision Detection

There are two ways of collisions detection in the Roomle Rubens Configurator. One is by using assignments that will store information about what is docked to what and if another part would collide or fit. The second way is to use the `collisionCondition` script of the parent dockings.

The cheapest way is to track the collisions by yourself, but you have to implement logic in a pattern of "If A is docked with B, X fits. If A is docked with C, X doesn't fit.". You can track the status of what is docked with or next to what by `assignmentsOnDock`, `assignmentsOnUpdate` and `assignmentsOnUnDock`. This of course can get complex and it is easy to compute such things only with direct neighbours. Such an example has already been described in the [Two-Way Docking of Parametrized Shelf](200\_80\_dockingbasics.md#example-two-way-docking-of-parametrized-shelf).

### Example: Using Assignment Scripts in Docking Ranges to Prevent Collisions in Wardrobe Equipment

When using docking ranges, collisions can be prevented by tracking information about which points of the range are occupied in an array. Every field of such an array represents the status of every docking point. The array is set up in the way, that the index of the connection matches the array index. In 1D ranges, you can use the `connection.index` directly, in 2D or 3D docking arrays, the method to compute the index by yourself is recommended.

In this example, we're going to create a docking range for internal equipment of a wardrobe, that has a vertical array of mounting points - standard drill holes every 5 cm, as is usual in wardrobes. We will dock a shelf, a clothes rod and an internal drawer.

We will not cover parameter, geometry and part list creation of the wardrobe in this example, but you can check it yourself. We will focus on the docking instead. First, the accessory component or components are prepared. We have chosen an "element type" design pattern for this. The reason behind is that the parent docking side will need some data from the child component, effectively requiring what could be called an interface. If there are too many accessories, from which some would provide further features, like further docking, it would make sense to split to multiple components. The second reason for using the "element type" pattern is that there is only geometry and articleNr provided by the different element types, without any further logic.

Important to say is that the shelf, the clothes rod and the drawer all take a different amount of space, meaning they occcupy a different amount of docking points. The shelf is flat and fits to a single hole. You could place shelves in every point, but in reality, that doesn't make sense, because the space between the shelf would not be useful. Therefore, we define that we occupy more docking points than it is physically necessary. The drawer has some height and physically occupies more space. Drawers do not need extra clearance above them, so the number of occupied positions is equal to the physically occupied positions. The clothes rod on the other hand requires some amount of space below it and only little space above.

For simplicity, we consider that all accessories have their child docking point at the bottom and occupy a certain amount of docking points in the upward direction. Therefore, we end up with following docking points positions as marked with the coordinate crosses.

![wardrobe accesssories docking points](images/200\_140\_20\_wardrobe\_accessories.png)

Because we want to occupy the space only in the upward direction, we solve the space occupation below the clothes rod by placing it above into the occupied space. This will simplify the code that will not have to check against negative indices in the docking points occupations array and only occupying them in one direction.

In the parent component, we initialize the values necessary for the occupations array.

```javascript
if (isnull(occupations)) {
    rangeStepZ = 50;
    FREE = 0;
    SHADOW = 1;
    OCCUPIED = 100;
    UNAVAILABLE = -1;
    occupations = [FREE];
    _.maxHeight = 2360;
    _.maxAccessoryHeight = 1000;
    _.occupations_maxIndex = _.maxHeight + _.maxAccessoryHeight;
    for (_.i = 0; _.i < _.occupations_maxIndex; _.i = _.i + rangeStepZ) {
        pushBack(occupations, FREE);
    }
    occupations_spaceAbove = occupations;
}
```

We define, that the docking point can be either `FREE`, `OCCUPIED` (the docking itself; connection exists at that point) or shadowed (space occupied by the accessory). We also add the status `UNAVAILABLE` where the docking points are deactivated for some reason.

In the `assignmentScripts.onDock` scripts of the docking array, we do:

```javascript
// set this point as occupied
set(self.occupations, connection.index, get(self.occupations, connection.index) + OCCUPIED);
// set points above this one as shadowed
for (_.i = connection.index + 1; _.i < connection.index + ceil(other.dock_minimumSpaceAbove / rangeStepZ, 0); _.i = _.i + 1) {
    set(self.occupations, _.i, get(self.occupations, _.i) + SHADOW);
}
```

Notice, that we do not set the values, but rather increment. This prevents us from leaving unexpected errors in development. Should one point be shadowed twice, we would know that an invalid value is in the array and we can detect it more easy.

On the other hand, we must not forget to do a cleanup in the onUnDock by doing an inverse operation:

```javascript
set(self.occupations, connection.index, get(self.occupations, connection.index) - OCCUPIED);
for (_.i = connection.index + 1; _.i < connection.index + ceil(other.dock_minimumSpaceAbove / rangeStepZ, 0); _.i = _.i + 1) {
    set(self.occupations, _.i, get(self.occupations, _.i) - SHADOW);
}
```

We can already create the condition that checks against statuses of the docking points. We keep `return true;` as a fallthrough at the end of the condition and if we detect any occupation, we `return false;`.

If a docking point occupation value is `SHADOW`, we disable docking. If the value is `FREE`, we let the code reach the terminating return statement. If the value is `OCCUPIED`, we also do nothing, because we need to keep the condition of the docked points to evaluate as `true`.

```javascript
if (get(self.occupations, connection.index) == SHADOW) {
    return false;
}
return true;
```

The prevents us from placing a shelf directly above another shelf. But it does not prevent us from placing the shelf below it. We would end up with a mixture of `OCCUPIED + SHADOW` and `2 * SHADOW`. We could compare against values that are not FREE or OCCUPIED instead, but that is not a solution - a preview would still show below the shelf, deleting the previous shelf above the new shelf after the docking would finish. The true correct solution is to check, if there are enough free points above the docking point. A for loop in the condition can be done to check a sub-range of the docking points above and eventually return false if an unusable point is reached:

```javascript
_.minimumSpaceAbove = floor(other.dock_minimumSpaceAbove / rangeStepZ, 0);
for (_.i = connection.index + _.minimumSpaceAbove; _.i > connection.index; _.i = _.i - 1) {
    if (get(self.occupations, _.i) == OCCUPIED) {
        return false;
    }
}
```

However, there are two approaches against doing this in the condition. Firstly, it is a loop inside a loop which is evaluated in every update call. This alone is not a performance issue in simple projects, but can sum up with other features leading to poor performance. Secondly, you might need the information of available space above a point in more places, like changing the child's element type. Therefore, we compute this array in the onUpdate call instead:

```javascript
_.lastOccupiedIndex = 0;
for (_.i = length(occupations_spaceAbove) - 1; _.i >= 0; _.i = _.i - 1) {
    _.position = zFromVector(internalBoxPosition) + _.i * rangeStepZ;
    _.occupation = get(occupations, _.i);
    if (_.position > zFromVector(internalBoxPosition) + zFromVector(internalBoxSize)) {
        set(occupations_spaceAbove, _.i, UNAVAILABLE);
        _.lastOccupiedIndex = _.i;
    }
    else { 
        if (_.occupation == OCCUPIED) {
            set(occupations_spaceAbove, _.i, _.lastOccupiedIndex - _.i);
        }
        _.lastOccupiedIndex = _.i;
    }
}
```

This for loop goes through the `occupations` in a descending order and writes the sums of free indices above each docking point into the `occupations_spaceAbove` array. Condition for the docking point is then much more simple:

```javascript
_.spaceAbove = get(self.occupations_spaceAbove, connection.index) * rangeStepZ;
if (ifnull(other.dock_minimumSpaceAbove, 0) > _.spaceAbove) {
    return false;
}
```

If you do `connection.spaceAbove` in the onUpdate call of the connection, you can also use it elsewhere, i.e. `assignmentsOnUpdate`:

```json
{
    "mask": "'FRAME_TO_ACCESSORY'",
    ...
    "onUpdate": "
        connection.spaceAbove = get(self.occupations_spaceAbove, connection.index) * rangeStepZ;
    ",
    "condition": "
        ...
        if (ifnull(other.dock_minimumSpaceAbove, 0) > connection.spaceAbove) {
            return false;
        }
        ...
    "
}
```

To debug this more easily, you can also add a `debugGeometry` script, which gets concatenated to the `geometry` script if your `rubens.config.ts` file has the `concatenateDebugGeometry` modifier call uncommented. A debug geometry can look like this:

```javascript
for (i = 0; i <= (height - zFromVector(internalBoxPosition)) / rangeStepZ; i = i + 1) {
    occupationValue = get(occupations, i);
    AddSphere(Vector3f{rangeStepZ / 2, rangeStepZ / 2, rangeStepZ / 2});
        MoveMatrixBy(Vector3f{ -rangeStepZ, depth - rangeStepZ / 2, i * rangeStepZ + zFromVector(internalBoxPosition)});
    debugPointColor = 'isdt:red';
    if (occupationValue == FREE) {
        debugPointColor = 'isdt:green';
    }
    else if (occupationValue == SHADOW) {
        debugPointColor = 'isdt:blue';
    }
    else if (occupationValue == OCCUPIED) {
        debugPointColor = 'isdt:yellow';
    }
        SetObjSurface(debugPointColor);

    for (j = 0; j < get(occupations_spaceAbove, i); j = j + 1) {
        AddPlainCube(Vector3f{20, 20, 20});
            MoveMatrixBy(Vector3f{width + 20 + j * 50, depth - 20, i * rangeStepZ + zFromVector(internalBoxPosition)});
        if ((j + 1) % 5 == 0) { SetObjSurface('isdt:black'); } else { SetObjSurface(debugPointColor); }
    }
}
```

Resulting in view of the docking point occupation and space above status:

![debug geometry of the wardrobe docking](images/200\_140\_20\_wardrobe\_debug.png)

See the final example in our [public content sample GitHub repository](https://github.com/roomle-content/sample/blob/main/content/example/components/wardrobe\_master.json) or run it in the [configurator](https://www.roomle.com/t/cp/?id=example:wardrobe)

### Using collisionCondition
