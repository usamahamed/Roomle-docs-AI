# Simple Colour Changing Product Scripting Example

This example shows a simple case of a product configurator: A product that comes in several colors. A step-by-step guide to achieve such a configurator is included.

1. Prepare the meshes Prepare optimized 3D models for upload into the Rubens Admin. Use the Roomle Blender Exporter Plugin to get meshes in the correct form. You will get a TXT file with a geometry script and subfolders with the actual meshes. Zip the meshes (regardless if you zip the TXTs along) and upload in your catalog's Import/Export page utilizing the Import Meshes field.
2. Prepare the materials Prepare the needed textures or color codes. If you use RGB color codes, prepare normalized RGB values (eventually divide by 255 to get numbers between 0 and 1). Either create the materials one by one in Rubens Admin or prepare an [importer CSV](../../web/datamanagement/import-export.html#import-materials-workflow).
3. Prepare component definition Prepare component definition. Use the following as a template. You can see that there is a single parameter `material` and article numbers and component labels as a function of this parameter. Geometry does not, except for the materials, change.

```json
{
    "id": "demoCatalogId:example_storagebox",
    "label": "
        if (material == 'demoCatalogId:silver_metallic') { label = 'Storage Box - Silver Metallic'; }
        if (material == 'demoCatalogId:lightblue_metallic') { label = 'Storage Box - Light Blue Metallic'; }
        if (material == 'demoCatalogId:darkgrey_metallic') { label = 'Storage Box - Dark Grey Metallic'; }
        if (material == 'demoCatalogId:bronze_metallic') { label = 'Storage Box - Bronze Metallic'; }
        if (material == 'demoCatalogId:white_metallic') { label = 'Storage Box - White Metallic'; }
        if (material == 'demoCatalogId:orange_metallic') { label = 'Storage Box - Orange Metallic'; }
        if (language == 'de') {
            if (material == 'demoCatalogId:silver_metallic') { label = 'Storage Box - Silber Metallic'; }
            if (material == 'demoCatalogId:lightblue_metallic') { label = 'Storage Box - Light Blue Metallic'; }
            if (material == 'demoCatalogId:darkgrey_metallic') { label = 'Storage Box - Dark Grey Metallic'; }
            if (material == 'demoCatalogId:bronze_metallic') { label = 'Storage Box - Bronze Metallic'; }
            if (material == 'demoCatalogId:white_metallic') { label = 'Storage Box - White Metallic'; }
            if (material == 'demoCatalogId:orange_metallic') { label = 'Storage Box - Orange Metallic'; }
        }
    ",
    "parameters": [
        {
            "key": "material",
            "type": "Material",
            "labels": {
                "en": "Colour",
                "de": "Farbe"
            },
            "defaultValue": "demoCatalogId:silver_metallic",
            "validValues": [
                "demoCatalogId:silver_metallic",
                "demoCatalogId:lightblue_metallic",
                "demoCatalogId:darkgrey_metallic",
                "demoCatalogId:bronze_metallic",
                "demoCatalogId:white_metallic",
                "demoCatalogId:orange_metallic"
            ],
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "geometry": "
        AddExternalMesh('demoCatalogId:storagebox_lid', Vector3f{1010, 459.6, 52}, Vector3f{ -505, -229.8, 557.8});
         SetObjSurface(material);
        AddExternalMesh('demoCatalogId:storagebox_nuts', Vector3f{953.2, 408.2, 379.6}, Vector3f{ -476.6, -204.1, 44.9});
         SetObjSurface('demoCatalogId:chrome');
        AddExternalMesh('demoCatalogId:storagebox_handles', Vector3f{62.6, 42.4, 23.1}, Vector3f{ -31.3, 187.1, 506});
         SetObjSurface('demoCatalogId:chrome');
        AddExternalMesh('demoCatalogId:storagebox_legs', Vector3f{936.7, 392.3, 16.2}, Vector3f{ -468.2, -195.8, 0});
         SetObjSurface('demoCatalogId:black_rough');
        AddExternalMesh('demoCatalogId:storagebox_frame', Vector3f{948.8, 404, 576.1}, Vector3f{ -474.4, -202, 14.4});
         SetObjSurface(material);
    ",
    "articleNr": "
        if (material == 'demoCatalogId:silver_metallic') { articleNr = '100.200.300'; }
        if (material == 'demoCatalogId:lightblue_metallic') { articleNr = '100.200.301'; }
        if (material == 'demoCatalogId:darkgrey_metallic') { articleNr = '100.200.302'; }
        if (material == 'demoCatalogId:bronze_metallic') { articleNr = '100.200.303'; }
        if (material == 'demoCatalogId:white_metallic') { articleNr = '100.200.305'; }
        if (material == 'demoCatalogId:orange_metallic') { articleNr = '100.200.307'; }
    "
}
```

The materials CSV:

```csv
"material_id","label_de","label_en","shading","visibilityStatus","active","tex0_mapping","tex0_mmHeight","tex0_mmWidth","tex0_tileable","tex0_image"
"silver_metallic","Silber-metallic","Silve Metallic","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""r"":0.78,""g"":0.78,""b"":0.78}}","0","1","XYZ","10","10","true","zip://textures/metallic_xyz.png"
"lightblue_metallic","Hellblau-metallic","Light Blue Metallic","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""g"":0.95,""r"":0.82,""b"":1}}","0","1","XYX","10","10","true","zip://textures/metallic_xyz.png"
"darkgrey_metallic","Dunkelgrau-metallic","Dark Grey Metallic","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""r"":0.25098039215686274,""g"":0.25098039215686274,""b"":0.25098039215686274}}","0","1","XYX","10","10","true","zip://textures/metallic_xyz.png"
"bronze_metallic","Bronze-metallic","Bronze Metallic","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""r"":0.4823529411764706,""g"":0.41568627450980394,""b"":0.2980392156862745}}","0","1","XYX","10","10","true","zip://textures/metallic_xyz.png"
"white_metallic","Weiß-metallic","White Metallic","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""r"":0.9137254901960784,""g"":0.9137254901960784,""b"":0.9137254901960784}}","0","1","XYX","10","10","true","zip://textures/metallic_xyz.png"
"orange_metallic","Orange-metallic","Orange","{""alpha"":1,""roughness"":0.5,""metallic"":0,""specularity"":0.7,""basecolor"":{""g"":0.67,""r"":1,""b"":0.05}}","0","1","XYX","10","10","true","zip://textures/metallic_xyz.png"
```

The normal map: ![scripting\_examples/cg1\_storagebox/textures/metallic\_xyz.png](scripting\_examples/cg1\_storagebox/textures/metallic\_xyz.png)
