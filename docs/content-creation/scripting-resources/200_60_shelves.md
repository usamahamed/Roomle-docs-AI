# Example: Parameterized Shelf System

![resulting shelf system](images/200\_60\_20\_shelf.png)

In this example, we are going to make a rectantular shelf, which consists of a thick outer wall and thin inner walls. It will basically be a grid of shelves with fields of size 35x35 cm with their horizontal and vertical counts determined by a parameter the end-user will be able to choose. In cases, where there are repeated segments that make a lot of combinations, it can be hard to maintain a huge number of models. A slightly more complex definition of the scripting project and problem decomposition can yield in the possibility to add more size options as easy as just to add a parameter option and an articleNr. Let's look step-by-step how such a procedural component can be made using loops and at the steps that will make the shelf:

## Geometry definition:

Thickness of outer wall: 40 mm\
Thickness of inner walls: 20 mm\
Available configurations: 1x1, 2x1, 2x2, 2x4, 3x4, 4x4, 4x5, 5x5 compartments\
Size of comparment: 350 x 350 mm\
Total depth: 400 mm

Therefore, total size in one dimension is (example on x):

`width = fieldsX * 350 + 2 * 40 + (fieldsX - 1) * 20`

It is a good question to clarify, how you want the end users to define their furniture: By count of grid options, or by the overall size?

Because mostly we have to fit in some given dimensions, let's use total size as the parameters. Therefore, we will have a conversion of:

| compartments | total size |
| ------------ | ---------- |
| 1            | 430        |
| 2            | 800        |
| 3            | 1170       |
| 4            | 1540       |
| 5            | 1910       |

We solve this problem in following steps:

1. Define parameter logic
2. Prepare data for drawing geometry
3. Implement geometry using for-loops

## Defining parameter logic

As in an previous example, we will set-up parameters of the size with value objects, allowing us to create the needed combinations and converting the sizes to the compartments counts.

We will also create a green debug surface to check, if we got the total size correctly.

```json
{
    "id": "demoCatalogId:example_shelf",
    "parameters": [
        {
            "key": "width",
            "labels": {
                "en": "Width"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 800,
            "valueObjects": [
                {
                    "value": 430,
                    "condition": "true"
                },
                {
                    "value": 800,
                    "condition": "true"
                },
                {
                    "value": 1170,
                    "condition": "true"
                },
                {
                    "value": 1540,
                    "condition": "true"
                },
                {
                    "value": 1910,
                    "condition": "true"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true,
            "onValueChange": "
                if (width == 430) { fieldsX = 1; }
                if (width == 800) { fieldsX = 2; }
                if (width == 1170) { fieldsX = 3; }
                if (width == 1540) { fieldsX = 4; }
                if (width == 1910) { fieldsX = 5; }
            "
        },
        {
            "key": "height",
            "labels": {
                "en": "Height"
            },
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1000,
            "valueObjects": [
                {
                    "value": 430,
                    "condition": "in(width, 430, 800)"
                },
                {
                    "value": 800,
                    "condition": "width == 800"
                },
                {
                    "value": 1540,
                    "condition": "in(width, 800, 1170, 1540)"
                },
                {
                    "value": 1910,
                    "condition": "in(width, 1540, 1910)"
                }
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true,
            "onValueChange": "
                if (height == 430) { fieldsZ = 1; }
                if (height == 800) { fieldsZ = 2; }
                if (height == 1540) { fieldsZ = 4; }
                if (height == 1910) { fieldsZ = 5; }
            "
        },
        {
            "key": "material",
            "labels": {
                "en": "Colour"
            },
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:surface_oak",
                "isdt:surface_cremewhite",
                "isdt:surface_nut",
                "isdt:surface_gray"
            ],
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "onUpdate": "
        if (ifnull(inited, false) == false) {
            inited = true;
            outerThickness = 40;
            innerThickness = 20;
            sizeFieldX = 350;
            sizeFieldZ = 350;
            depth = 400;
        }
    ",
    "geometry": "
        AddCube(Vector3f{width, 10, height});
         SetObjSurface('isdt:green');
    "
}
```

2. We will create the outer frame. We add following to the geometry script:

```javascript
/* left, right wall */
AddCube(Vector3f{outerThickness, depth, height});
 SetObjSurface(material);
Copy();
 MoveMatrixBy(Vector3f{width - outerThickness, 0, 0});
/* bottom, top walls */
AddCube(Vector3f{width - 2 * outerThickness, depth, outerThickness});
 SetObjSurface(material);
 MoveMatrixBy(Vector3f{outerThickness, 0, 0});
Copy();
 MoveMatrixBy(Vector3f{0, 0, height - outerThickness});
```

Let's look at the result. We got the green surface perfectly aligned with the outer geometry, allowing us to delete it already (we could have viewed the outer dimensions again, but this is a different approach - immediately visible, alarming you if it goes wrong during your workflow).

However, see how the texture is applied to the vertical parts: this is not how it is usually done - the texture is mapped transversely to the length of the part.

![size fits, uv error](images/200\_60\_10\_totalsize.png)

To solve this, we use primitive functions with UV settings. The 90 is the angle of the rotation of the surface in degrees.

```javascript
AddCube(Vector3f{outerThickness, depth, height}, Vector2f{1, 1}, 90, Vector2f{0, 0});
```

3. We do the inner division walls. We start with the horizontal one, then we go up. Notice the _i_ variable in the local context in the for-loop, so that this variable is not defined in the whole component, possibly causing more update loops. It is not necessary in simple components if you do not use an _i_ elsewhere, but still recommended.

If there are more than 2 comparments in height, we draw a floor, which we then copy with respect, that we already have one and need one less. Therefore, we start with _\_.i = 2_.

```javascript
if (fieldsZ > 1) {
    AddCube(Vector3f{width - 2 * outerThickness, depth, innerThickness});
     SetObjSurface(material);
     MoveMatrixBy(Vector3f{outerThickness, 0, outerThickness + sizeFieldZ});
    for (_.i = 2; _.i < fieldsZ; _.i++) {
        Copy();
         MoveMatrixBy(Vector3f{0, 0, innerThickness + sizeFieldZ});
    }
}
```

4. We need an analogic amount of the vertical dividers. We will use the same logic as with the horizontal dividers to generate them. The difference is, that we need to generate them for all levels separately, so that they do not get drawn over each other, which would create coplanarities in their intersections. Also, the AddCube function draws a cube which edges are slightly rounded. That is why we draw the vertical dividers in one level, enclose them in a group and then we copy the whole group of these dividers and move them always one level up. Notice that we again use the variation of the primitive under the snippet 'AddCubeWithUvSettingsAndBevels' to rotate the textures.

```javascript
if (fieldsX > 1) {
    BeginObjGroup('VERTICAL_DIVIDERS');
        /* will divide one row into more columns */
                Vector3f{innerThickness, depth, sizeFieldZ}, Vector2f{1, 1}, 90, Vector2f{0, 0}, 2);
         SetObjSurface(material);
         MoveMatrixBy(Vector3f{outerThickness + sizeFieldX, 0, outerThickness});
        for (i = 2; i < fieldsX; i++) {
            Copy();
             MoveMatrixBy(Vector3f{innerThickness + sizeFieldX, 0, 0});
        }
    EndObjGroup('VERTICAL_DIVIDERS');
    /* copy into upper rows */
    for (i = 1; i < fieldsZ; i++) {
        Copy();
         MoveMatrixBy(Vector3f{0, 0, innerThickness + sizeFieldZ});
    }
}
```

The result should look like this:

![resulting shelf system](images/200\_60\_20\_shelf.png)

See the final source code [here](examples/200\_60\_example\_shelf.json)

Note: We've left the constant in onUpdate, because we are going to use this component as an example for the docking ranges. Therefore, we will need those constant accessible accross the whole component.
