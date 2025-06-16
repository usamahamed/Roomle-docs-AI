# Scripting Template: Two-Part Sofa System

Link to the template repo: https://gitlab.com/roomle/content/resources/-/tree/master/Templates/SofaSystem

Starting component: [doublesofa_master](http://rml.co/UTmg)

## Step-by-step guide on filling the template

### 1. Analyse needed subcomponents
You always have a left part and right part that consist of element types with a different function. You should agregate them based on the category into subcomponents, e.g. longchairs, inline elements with armrest etc.

Use one subcomponent for both left and right side variations of the element.

Notice, that the subcomponents are taken from the modular sofa system, they have the same logic.

### 2. Prepare the subcomponents

When you have analysed the components, you need the geometry. Once you receive it from the 3D team, you can go on (you can also work without geometry and add it later). Prepare the subcomponents, so that the particular geometries are as simple as possible -> therefore we discourage from the approach where you combine more element types into one subcomponent. 

Eventually, you will end up with elementType parameter allowing you to select which two element types you want to combine and list of valid widths or depths for that combination. Also, you have cornerSide variable, if the sofa forms a corner (-> does not consist of two inline parts).

### 3. Clean unnecessary master component logic

Open the template and delete the parts of code, that supports features you will not need, e.g. the selector of leg logic type, the enplates, separate armrests etc. After you purge the component, do a testing run to see if you haven't deleted enough to make it non-operational.

### 4. Prepare item definitions

For each add-on element type (pillow, footstool), prepare an item definition. See the example CSV file _bestsofa_items_definitions.csv. Also use the labels and category files to add labels in all languages you will need.

You might need thumbnails for the element types combination. You can store them in items leading to the master component with a different element type value.

### 6. Generate & apply thubmnails, add possibleChildren

Upload the item csv files via Rubens Admin import, open the item one-by-one and save the thumbnails. Copy the perspective image address and paste it as thubmnail attribute of the value objects. Add possibleChildren with itemIds, copy their conditions from the relevant template counterparts in order to get proper view of add-ons. Utilize the show* variables that are computed in onUpdate.

### 7. Compute docking variables and restrictions

Make sure that each element type has all docking values, fill in correct sizings of the corner. Most sofas disallow docking two corners next to each other or corner + longchair, two longchairs next to each other etc. There is an usual rule of thumb, where the components big in depth are not allowed to be next to each other. In such case, utilize the *isCornerLongchair* and *canBeCornerLongchair* variables. If other rule needs to be applied, you have to adjust the code.

Implement legs logic based on definition. Sometimes, the legs are not removed. Sometimes, more complex rule can be defined. Utilize data in the master component to compute which legs should be present.

### 8. Upload everything and test

Test against product definition, don't forget to also test against configuration reloading!