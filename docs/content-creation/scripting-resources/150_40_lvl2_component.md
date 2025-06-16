# Level 2 Component Definition

Components are the basic unit of the Rubens Configurator. They provide the configurator with data based on which it shows the correct mesh with correct textures and correct part list. In order to write a component for the Level 2 Material Configurator, you need to have meshes and materials set up in the Rubens Admin and you need to know their IDs and `AddExternalMesh` function prescriptions, that come from the TXT file that is exported by the Roomle Blender Addon.

## Writing Component Definition

If you haven't set up your own data, you can use our samples:

```javascript
/* meshes */
AddExternalMesh('isdt:chair6547_Corpus594SE1', Vector3f{820, 886.4, 838.3}, Vector3f{ -410, -455.1, 240.2});
AddExternalMesh('isdt:chair6547_Corpus594SEseam', Vector3f{820.2, 196.8, 70.5}, Vector3f{ -410.1, -412.9, 831.1});
AddExternalMesh('isdt:chair6547_Corpus594SE', Vector3f{817.8, 902.2, 793.4}, Vector3f{ -408.9, -447.1, 295});
AddExternalMesh('isdt:chair6547_Corpus594SEzipper', Vector3f{4.4, 355.5, 580.9}, Vector3f{ -2.5, -410.9, 249.6});
AddExternalMesh('isdt:chair6547_Corpus594SE2', Vector3f{553.6, 609.2, 161.1}, Vector3f{ -275, -154.1, 312.8});
AddExternalMesh('isdt:chair6547_Gilders594SE', Vector3f{567.4, 629.4, 13}, Vector3f{ -285.9, -208.7, -2});
AddExternalMesh('isdt:chair6547_Fourfoodmetal594SE', Vector3f{570.5, 631, 297.5}, Vector3f{ -287.5, -208.8, 4.6});


/* materialIds */
isdt:fabric_grey
isdt:fabric_blue
isdt:fabric_beige
isdt:fabric_curry
isdt:surface_chrome
isdt:surface_black
isdt:black_plastic
```

A component definition is a JSON object with defined attributes and a `componentId`, which is a unique reference of the component across the Rubens Admin platform (this fact applies to any ID - material, product, mesh etc.). This is the same for all Rubens Configurators. Level 2 Material Configurators provide a subset of the full functionalities, which are:

* material parameter(s)
* geometry script
  * `AddExternalMesh` function
  * `SetObjSurface` function
* articleNr script
  * `if - else if - else` statement(s)

To start writing a component definition (with VS Code set up in the way as described in the Environment Setup section), first define a component Id. It will consist of the `catalogueId`, a colon (`:`) and then the `componentId` itself. In our case, this will be `isdt:chair6547`.

Note: Across the whole Rubens platform, combineIds (which are `meshId`, `materialId`, `componentId`, `itemId` ...) follow the same pattern `catalogueId:externalId`

Now, make a folder of the same name as the `catalogueId` is. Inside it, create a folder called `components` and in this folder, create a file with a file name following the pattern of `externalId.json`. In our example, we will have `/isdt/components/chair6547.json`.

Open the file and switch your editor language to RC-JSON. You can do this multiple way:

* on the status bar, use the `>RC-JSON` button which is provided by our extension
* on the status bar, use the language switch in the right corner - if it says JSON, click it and pick RC-JSON
* open the command palette and use the `>Change Language Mode` command to pick the RC-JSON

Note: The extension functionality includes automatic switching to RC-JSON language if the file has a `.json` suffix, its path containts `components` and the JSON has an `id` attribute. Because we do not have the `id` attribute in the file yet, it hasn't switched to RC-JSON.

Paste the following code:

```json
{
    "id": "isdt:chair6547",
    "parameters": [],
    "geometry": "",
    "articleNr": ""
}
```

This is the basic structure we will be filling. The JSON attributes explained are:

* `id`: the `componentId`, a unique identifier of the component across the whole Rubens Configurator platform. In the case of this example, `isdt` is the `catalogueId` part of the `id` and `chair6547` is the `externalId` part. Together, they form a componentId.
* `parameters`: is an array of the Parameter class objects.
* `geometry`: is a string value, which holds the _RoomleScript_ which is responsible for the 3D representation of the configuration. In case of Level 2 Material Configurator, it defines which meshes will be instantiated and which material will be assigned to them.
* `articleNr`: as well as the geometry, it is a string value holding the _RoomleScript_, which is useful for computing the article number (or the SKU) of the current product state to show in the part list. Every component instance in the configurator can provide one article number.

Our chair has a selectable upholstery material and selectable legs surface. Based on this fact, we know that we will need two material parameters: one for the upholstery, another one for the base.

Let's define two material parameters:

```json
{
    "id": "isdt:chair6547",
    "parameters": [
        {
            "key": "material_upholstery",
            "type": "Material",
            "labels": {
                "en": "Cover color",
                "de": "Bezugsfarbe"
            },
            "visible": true,
            "visibleInPartList": true,
            "validValues": [
                "isdt:fabric_blue",
                "isdt:fabric_beige",
                "isdt:fabric_curry"
            ]
        },
        {
            "key": "material_base",
            "type": "Material",
            "labels": {
                "en": "Base color",
                "de": "Gestellfarbe"
            },
            "visible": true,
            "visibleInPartList": true,
            "validValues": [
                "isdt:surface_chrome",
                "isdt:surface_black"
            ]
        }
    ],
    "geometry": "",
    "articleNr": ""
}
```

Next step is to combine the meshes with the materials in the geometry section:

1. paste the `AddExternalMesh` functions from your TXT file.
2. apply materials by their IDs or parameter keys using the `SetObjSurface` function behind every `AddExternalMesh` function.
   * You can use parameter keys as an argument of the function, or a `meshId` as a string constant literal.

```javascript
AddExternalMesh('isdt:chair6547_Corpus594SE1', Vector3f{820, 886.4, 838.3}, Vector3f{ -410, -455.1, 240.2});
 SetObjSurface(material_upholstery);

AddExternalMesh('isdt:chair6547_Corpus594SEseam', Vector3f{820.2, 196.8, 70.5}, Vector3f{ -410.1, -412.9, 831.1});
 SetObjSurface('isdt:fabric_grey');

AddExternalMesh('isdt:chair6547_Corpus594SE', Vector3f{817.8, 902.2, 793.4}, Vector3f{ -408.9, -447.1, 295});
 SetObjSurface(material_upholstery);

AddExternalMesh('isdt:chair6547_Corpus594SEzipper', Vector3f{4.4, 355.5, 580.9}, Vector3f{ -2.5, -410.9, 249.6});
 SetObjSurface('isdt:black_plastic');

AddExternalMesh('isdt:chair6547_Corpus594SE2', Vector3f{553.6, 609.2, 161.1}, Vector3f{ -275, -154.1, 312.8});
 SetObjSurface(material_upholstery);

AddExternalMesh('isdt:chair6547_Gilders594SE', Vector3f{567.4, 629.4, 13}, Vector3f{ -285.9, -208.7, -2});
 SetObjSurface('isdt:black_plastic');

AddExternalMesh('isdt:chair6547_Fourfoodmetal594SE', Vector3f{570.5, 631, 297.5}, Vector3f{ -287.5, -208.8, 4.6});
 SetObjSurface(material_base);
```

As a last step in the component definition creation, we define the articleNrs. Here we use `if - else if - else` control statements in order to assign a value to the `articleNr` variable.

```javascript
articleNr = 'error1';
if (material_base == 'isdt:surface_black') {
    articleNr = 'error2';
    if (material_upholstery == 'isdt:fabric_beige') {
        articleNr = '6547.435.653';
    } else if (material_upholstery == 'isdt:fabric_blue') {
        articleNr = '6547.435.435';
    } else if (material_upholstery == 'isdt:fabric_curry') {
        articleNr = '6547.435.766';
    }
} else if (material_base == 'isdt:surface_chrome') {
    articleNr = 'error3';
    if (material_upholstery == 'isdt:fabric_beige') {
        articleNr = '6547.435.286';
    } else if (material_upholstery == 'isdt:fabric_blue') {
        articleNr = '6547.435.651';
    } else if (material_upholstery == 'isdt:fabric_curry') {
        articleNr = '6547.435.562';
    }
}
```

Since we do not use `else` statements in this case, we could theoretically get into a situation where you add a material and forget to implement an articleNr. Therefore we initialize the articleNr to `error1` to `error3` in order to be able to find the error quickly if there is some reported.

Final component definition can be found here: [chair6547.json](examples/chair6547.json)

There are various kinds of component attributes and some are constant values but some are _RoomleScript_ source code. _RoomleScript_ is a proprietary language used within the Roomle platform which has a JavaScript-like grammar and syntax. `id` is a constant, `geometry` and `articleNr` is _RoomleScript_.

## Default Value of Parameter

When you load a component definition, all parameters will have the first value of their valid values selected by default. To override this, you can use the `defaultValue` attribute:

```json
{
    "key": "material_upholstery",
    "type": "Material",
    "defaultValue": "isdt:fabric_curry",
    "labels": {
        "en": "Cover color",
        "de": "Bezugsfarbe"
    },
    ...
}
```

You can further override the default value in the item definition, which will be explained in the next chapter.

## Testing the Component Definition

In order to test the component definition in the test site, you can follow the same steps as were described in the [Hello World](100\_40\_helloworld.md) chapter.

## Uploading Component Definition to the Rubens Admin

Navigate to your catalog and in the Components section, add a new component with the same ID as you defined. Paste your component definition in the component definition field and fill in the label that will show in the lower left section of the configurator and in the part list. You can follow the [Rubens Admin Components Documentation](https://docs.roomle.com/web/datamanagement/components.html#create-a-component).

## Direct Link to Component

You can run a component in the Rubens Configurator by running link: [https://www.roomle.com/t/cp/?id=component@isdt:chair6547](https://www.roomle.com/t/cp/?id=component@isdt:chair6547). The argument `id` is combined ID of an item. If you prefix the ID with `component@`, you can run a component directly, without needing to set up any item. However, `component@` IDs are intended for **quick debug purposes and are not indended to be embedded**. Please, continue to the next chapter in order to set up an _itemId_ linked with your component.
