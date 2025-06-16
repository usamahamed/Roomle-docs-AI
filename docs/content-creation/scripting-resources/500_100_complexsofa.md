# Scripting Template: Complex Sofa

Link to the template repo: https://gitlab.com/roomle/content/resources/-/tree/master/Templates/SofaSystem

Starting component: [bestsofa_master](http://rml.co/UTvh)

## Features

* supported logical element types:
    * inline element without armrest, with 1 armrest (left and right endpart), with 2 armrests (armchair & sofa)
    * inline footstool
    * end half-back seater
    * corner
    * longchair, sectional corner
    * freestanding footstool, sofa, armchair
    * separate armrests
* two seating depths with combination corner
* legs logic that makes the outer legs or legs in the corner viewed
* endplates - added automatically to plug an undocked 
* bi-color sofa option
* accessory pillows

## Step-by-step guide on filling the template

### 1. Analyse needed subcomponents
Not all sofa systems have all logical supported element types and also this template does not have all actual element types that a sofa can have. However, when we are talking about their looks, you should be able to use it. Based on the product catalogue or other data, you should know the necessary *elementTypes*.

You can mostly distinguish the element types by looking at the component and reading their names or looking at their reference images or schemes. Mostly, they are the same elements in different sizes (width and seating depth) and they can be left, right or symmetric. Typical examples:
* inline part without armrest, in several sizes and two seating depths
* inline parts with one armrest - basically the same as above, having an armrest either on left or right side
* inline parts with two armrests - forming a sofa or an armchair, again the same as inline parts, but having an armrest of both sides
* corner - used to make a 90 degrees turn in the sofa
* ending element - these exist in various shapes:
    * ending stool-like element
    * ending half-seater (has backrest on half of the side)
    * ending element of special shape

Rule of thumb: One such element described above will be one subcomponent, between which you switch using the *elementType* parameter. Note that there is an *elementType* value for left and right side, that is leading to the same subcomponent. Based on the analyse, you can utilize more element types with one subcomponent. Example in the template:
* Armchair, sofa, inline armrest left and right - All those lead to a single subcomponent called inlinearmrest. The difference is where the armrests are. Difference between armchair and sofa is the available widhts.
* Longchair left and right lead to the same subcomponent: longchair
* Half seaters have the same logic as the inline armrests left and right (same docking restrictions), but the graphics are completely different. Therefore, an extra subcomponent is used.

However, if you look at the geometry, in the case of the template, secional corner and longchair are made of armrest element + footstool in front of it or corner + half seater respectively. This is necessarily not how it should be done, probably they have the models directly.

Regarding the legs, every component draws the legs, because different element types can have different legs placement and amount. If the legs are always a (abstract) frame consisting of 4 legs, you can have one leg master component as a subcomponent of master, where you only input the legs base dimensions and offsets.

### 2. Prepare the subcomponents

When you have analysed the components, you need the geometry. Once you receive it from the 3D team, you can go on (you can also work without geometry and add it later). Prepare the subcomponents, so that the particular geometries are as simple as possible -> therefore we discourage from the approach where you combine more element types into one subcomponent. For each subcomponent, make sure that its part list works on its own and the subcomponent itself as well. For sizing modifications, do the parameter UI properly, including valueObject conditions, because you'll probably want to supersede them into the master component.

You should decide, whether you can do the legs logic in the master component like in the template, or if you will use the approach, where you draw the legs in the individual subcomponents. Rule of thumb: If you can not say, that the legs always form a same base, just with different dimensions, rather move the legs to the subcomponents. Also possible: the legs are constant and therefore there is not going to be a legs parameter at all.

Make sure that the geometry is centered around the point on the floor under center of the backrest - so that docking points coordinates are ±width/2 on X axis and 0 on Y axis (or total depth for corners)

### 3. Clean unnecessary master component logic

Open the template and delete the parts of code, that supports features you will not need, e.g. the selector of leg logic type, the enplates, separate armrests etc. After you purge the component, do a testing run to see if you haven't deleted enough to make it non-operational.

### 4. Implement the subcomponents and element types

For each subcomponent, make a subcomponent definition and a value for the subcomponentType selector. Then, add the *elementType* valueObjects into the *elementType* parameter. Please, try to use the ones that are there, so that there is better maintainability.

### 5. Prepare item definitions

For each element type, prepare an item definition. See the example CSV file _bestsofa_items_definitions.csv. Also use the labels and category files to add labels in all languages you will need.

### 6. Generate & apply thubmnails, add possibleChildren

Upload the item csv files to Rubens Admin, open the item one-by-one and save the thumbnails. Copy the perspective image address and paste it as thubmnail attribute of the value objects. Add possibleChildren with itemIds, copy their conditions from the relevant template counterparts in order to get proper view of add-ons. Utilize the show* variables that are computed in onUpdate.

### 7. Compute docking variables and restrictions

Make sure that each element type has all docking values, fill in correct sizings of the corner. Most sofas disallow docking two corners next to each other or corner + longchair, two longchairs next to each other etc. There is an usual rule of thumb, where the components big in depth are not allowed to be next to each other. In such case, utilize the *isCornerLongchair* and *canBeCornerLongchair* variables. If other rule needs to be applied, you have to adjust the code.

Implement legs logic based on definition. Sometimes, the legs are not removed. Sometimes, more complex rule can be defined. Utilize data in the master component to compute which legs should be present.

### 8. Upload everything and test

Test against product definition, don't forget to also test against configuration reloading!