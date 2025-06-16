# 4-Post Shelving System Example

Component of this complexity requires some experience with scripting in the Roomle platform in order to be fully understood. Understanding of the topic in the [Advanced Docking Logic chapter](200\_140\_advanceddockinglogic.md) is needed.

This shelving system consists of 4 poles, to which shelves are attached. Component definitions are available under the following links. Note, that the components were stripped of the product-relevant data, only the logic has been kept. List of features in this shelf system:

* Composition
  * mainspace draws posts, decides which posts are shown, provides docking for other mainspaces and a for a column of horizontal shelves
* Post sharing between neighbouring elements
  * The problem is that every component has 4 posts shared with other components. In order to show the posts part list count properly and to visualize this properly, rules deciding which of the neighbouring components will have the posts.
  * Up to 4 components can meet in one corner.
  * Rule: The higher neighbour draws the posts. If the neighbours are of the same height, the one who has the lower unique runtime ID has the post.
  * Implemented by sibling points in the corners.
  * Because the neighbour can be on any level of the child-tree hierarchy, sibling points "rodSiblings" are used in the corners. These assignments are not achievable in using parent-child docking points.
  * In every corner, arrays of neighbours' UIDs and heights are stored. They are pulled from the neighbours in each update.
  * Assume to draw own post. For each neighbour UID and height data pair, compare neihgbour's height with own height. If the height is bigger, stop evaluating and do not draw post. If the height is equal, stop evaluating and do not draw the post if UID is higher than of the neighbour.
  * Step-by-step implementation tutorial follows in this chapter.
* Addons
  * It was not able to have all addon types while showing a reasonable amount of previews. Therefore the addons are divided into basically which of their posts are missing. A straight addon has two posts missing on the short, 40cm wide side. Therefore, it can be docked straight to the side, or also to front and back if the parent is 40x40 cm square.
* Shelves
  * Shelves are docked using a docking range to the mainspaces.
  * Shelves come in different sizes. Therefore the mainspaces have also different sizes.
  * Although the size is parameter of the shelf, it is not reasonable to have more shelf sizes docked to one mainspace. Therefore mainspace as an abstract object defines the size.
* Materials
  * You can change the material of the shelves n both global and local context as standard, but you can also change material of all shelves connected to one mainspace.
  * In order to change the material of the shelves in only a single mainspace, a backing array of the material parameters in the mainspace is set to all ones. In assignmentScripts of the shelf docking range, if this value is set to 1, then update the shelve's parameter and set it back to 0.
  * This way, you can achieve this functionality: change completely all, change one (which is what the global parameter is there for) and also change all docked to one component (which is why you need this logic).
* Inter-shelf dimensions
  * In the mainspace, distance to the next shelf under is computed and passed to the docked component.
  * As the component knows the distance beneath, dimensioning in the Y direction can be easily achieved.
* Keeping the shelves docked when the height changes
  * The docking range starts at the top, goes in the direction to the bottom.
  * Because the docking points under the floor are not valid, normally the shelves would delete.
  * Instead of deactivating docking points that are below the floor, assign visible = false.
  * Shelves draw their geometry and enter the part list (using subComponent.numberInPartList) depending on the visible parameter.
  * Parent docking points' conditions can be false only in the preview.

Live Configurator: http://rml.co/UjPA

[quadpost\_mainspace.json](scripting\_examples/quadpost\_mainspace.json)\
[quadpost\_leg.json](scripting\_examples/quadpost\_leg.json)\
[quadpost\_shelf.json](scripting\_examples/quadpost\_shelf.json)\
[quadpost\_items.csv](scripting\_examples/quadpost\_items.csv)

## Algorithm description for the posts sharing

During the problem analysis, we've designed an abstract algorithm as follows:

* The higher of the neighbours draws the posts.
* If neighbours are of the same height, the one who has the lesser unique runtime ID draws the posts.

1. In order to implement it, we need to have something like an array of `{ height : Decimal, runtimeId : Integer }` in each of the corners. We first start with registering of the values in the sibling points placed in the corners. We show this on the back left (BL) corner. This needs to be made three times more for each corner - front left (FL), back right (BR), front right (BR).
2. Because we can neither create structs not arrays of something else than floats, we will need more arrays to init in the onUpdate - init:

```javascript
id = getUniqueRuntimeId(); /* store the runtime id in order to be accessible - because we can not do other.getUniqueRuntimeId() /*
idsBL = [0]; /* holds the unique runtime ids of the siblings - this is used to find out, which sibling has which height */
heightsBL = [0]; /* heights of the siblings. order is matching with the idsBL */
idsCountBL = 0; /* how many of them we have */
```

As you can see, we will store the runtimeIds in the idsBL array, heightsBL in the heights array and idsCountBL will hold the count of them in order to know how many values need to be checked in the for loops.

3. Store the neighbours' runtime ids and initial height in `assignmentScripts.onDock`

```javascript
pushBack(self.idsBL, other.id);
pushBack(self.heightsBL, other.height);
self.idsCountBL = self.idsCountBL + 1;
connection._i = indexOf(other.id, self.idsBL);
```

We will have value pairs of height and ids of the neighbour in two arrays under the same index. Therefore we can find them with the same index. Once we have pushed the new values in the arrays, we find the required index value and store it in the `connection.` context under the variable called `_i`. The connection context will exist until the sibling points disconnect.

4. Make clean up in `assignmentScripts.onUnDock`

```javascript
if (connection._i > 0) {
    set(self.heightsBL, connection._i, 0);
    set(self.idsBL, connection._i, 0);
}
```

We set the height and the id to 0, so that we can detect elsewhere that the component has already been undocked. We just check the `connection._i` to be bigger then 0, in order to prevent a crash should yet something else fail. The value of `connection._i` was stored during onDock and should be remembered correctly, though.

5. In the `assignmentScripts.onUpdate` script, pull the current height value and store it in the `heightsBL` array, but do so only if the heights are really different, in order to prevent an onUpdate call - basically nothing changed if the heights does not change.

```javascript
if (connection._i > 0) {
    if (other.height != get(self.heightsBL, connection._i)) {
       set(self.heightsBL, connection._i, other.height);
    }
}
```

6. Working in onUpdate, we first assume that this component will have the post and define the resulting height as the own height. This is important also for the case that this can be the only component in the configuration.

```javascript
hasBL = true;
resultHeightBL = height;
```

Starting with 0 (array was inited with a 0 on the beginning, therefore first relevant value has an index of 1), for each stored value (`<= idsCountBL`). If we already know another component is higher or younger (has lesser runtime id), there is no point in going further (`&& hasBL`). We locally store the neighbour's height. If there is no neighbour under that index anymore, its height is 0, which is always lower then own height - therefore we don't need a check on if the neighbour undocked.

```javascript
        for (i = 1; i < (idsCountBL + 1) && hasBL; i = i + 1) {
            _.neighbourH = get(heightsBL, i);
            ...
        }
```

If the neighbour is higher, we already know that this component does not have the posts. No further fork needed in this component. Which of the neighbours will finally keep their post will be computed in the other neighbours.

If the neighbour is of the same height, we need to check if it has a lesser id.

```javascript
if (_.neighbourH > height) { resultHeightBL = neighbourH; hasBL = false; }
else {
    if (_.neighbourH == height) { resultHeightBL = neighbourH; hasBL = id < get(idsBL, i); }
}
```
