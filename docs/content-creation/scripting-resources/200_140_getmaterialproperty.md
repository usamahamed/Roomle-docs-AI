# Using GetMaterialPropery Function

Roomle Rubens Configurator supports getting content-creator defined data from materials. This is especially useful when materials are divided into price groups that need to be shown in the configurator or if you need to visualize different geometry based on the material, e.g. a wood, glass or metal sheet plate that have different thickness or mountings.

See following code example:

````json
{
    "id": "demo:material_pricegroups",
    "parameters": [
        {
            "key": "material",
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:fabric_grey",
                "isdt:fabric_blue",
                "isdt:fabric_beige",
                "isdt:fabric_lightgrey",
                "isdt:fabric_curry",
                "isdt:fabric_red"
            ],
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "articleNr": "
        if (material == 'isdt:fabric_grey') { pricegroup = '30'; }
        if (material == 'isdt:fabric_blue') { pricegroup = '30'; }
        if (material == 'isdt:fabric_beige') { pricegroup = '40'; }
        if (material == 'isdt:fabric_lightgrey') { pricegroup = '40'; }
        if (material == 'isdt:fabric_curry') { pricegroup = 'T50'; }
        if (material == 'isdt:fabric_red') { pricegroup = 'T50'; }
        articleNr = sku_base | ' ' | pricegroup;
    "
}
````

You can think of many things why this is suboptimal solution to compute pricegroups correctly based on the material: The data are in the script and they are hard to maintain. Especially if you have other components that utilize duplicate code. You could follow the [subcomponent external computation](200_70_subcomponents.md#_3-external-computation), but still this might not be optimal.

To achieve the same functionality, you can define material properties in the materials.csv file for importing in Rubens Admin. Prepare a file with column material_id and property_\<propertyname\>. The column with property_ prefix will then add additional data of your choice to the material you can get in the script using `GetMaterialProperty(materialId, propertyname, fallback)`. If the materialId is not found or the material is missing the selected property, the fallback value is returned.

1. Prepare the data that are bound with the materials and upload to the catalogue.

````csv
"material_id","property_pricegroup"
"fabric_grey","30"
"fabric_blue","30"
"fabric_beige","40"
"fabric_lightgrey","40"
"fabric_curry","T50"
"fabric_red","T50"
````

2. Replace the code computing pricegroup based on materialId:

````json
{
    "id": "demo:material_pricegroups",
    "parameters": [
        {
            "key": "material",
            "type": "Material",
            "defaultValue": "value",
            "validValues": [
                "isdt:fabric_grey",
                "isdt:fabric_blue",
                "isdt:fabric_beige",
                "isdt:fabric_lightgrey",
                "isdt:fabric_curry",
                "isdt:fabric_red"
            ],
            "visible": true,
            "visibleInPartList": true
        }
    ],
        "articleNr": "
        pricegroup = getMaterialProperty(material, 'pricegroup', 'NULL');
        articleNr = sku_base | ' ' | pricegroup;
    "
}
````

**Note 1:** This functionality is not implemented in the legacy configurator. You must use Roomle Rubens Configurator in order to use this function.

**Note 2:** You can yet even more make this script more robust against material changes, where you can reach the state that you do not need to touch the script at all when adding or removing materials from the configurator, by using:

````json
{
    "key": "material",
    "type": "Material",
    "defaultValue": "value",
    "validGroups": [
        "isdt:fabrics"
    ],
    "visible": true,
    "visibleInPartList": true
}
````

This will display all materials with property active set to 1, that are tagged with the isdt:fabrics category. Both can be set in Rubens Admin without updating the component definitions.
(Due to a currently known bug, there is a missing reference from the category to materials, making this non-functional for newly categorized materials.)