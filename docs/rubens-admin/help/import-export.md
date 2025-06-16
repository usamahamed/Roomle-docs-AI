# Import/Export

## Import data in Rubens Admin

Navigate to `Dashboard > Catalogs` and select an existing catalog. Click on `Import/Export` in the top menu bar.

On the left side of the page you can find the import fields and import options. You can import data for products, tags, materials, components, prices and meshes. For each type of data a sample file is linked below. Feel free to use it as a starting point for your data import.

You can import some catalog formats into Rubens Admin.

To import multiple static products in one batch you can import a correctly formatted ZIP file in the `Import 3D assets` import section.

### Recommended approach and versioning

Store all relevant CSV data in [Git](https://en.wikipedia.org/wiki/Git). Keep the data separated, have one csv file for sorting, one for tagging, one for definitions etc. Use the Git repository structure convention.

Guide for the CSV data update:

1. Open the Rubens Admin catalog `Import/Export` page
2. Export the CSV file of the entries you are going to modify
3. Sort the file by the ids alphabetically
4. Find the CSV file in Git, make a diff in order to compare the changes
5. If there are changes, make a commit in the main working branch
6. Branch the main working branch, make a CSV file with your changes
   * Delete all unnecessary columns, best also delete all entries you do not want to change
7. Import the changes into Rubens Admin (if you have approval and know what you're doing)
8. Repeat steps 2, 3, 4
9. Commit the change file and the resulting overwritten CSV, do not forget to add a description to the commit (ticket code + reason of the change)

This approach will keep a thorough track of what has been changing in the work.

> **Warning:** Make sure you back up the data (follow the above mentioned steps), so that you can revert in case the result went wrong for any reason.

> **There are no backups in the database, thus all files and information will be permanently deleted!** If an error occurs during the import, no changes will be saved.

### CSV format rules

The CSV files must be formatted correctly, otherwise the imports will fail. Adopt the following requirements to your files:

* The values must be comma-separated. Semicolon, TAB or other characters as separator will not work

```
"abc_armchair","Armchair","Sessel"
```

* The decimal separator must be a dot.

```
"abc_armchair",10.5
```

* Any field may be quoted, so enclosed within double-quote characters

```
"abc_armchair","10.5"
```

* Each of the embedded double-quote characters must be represented by a pair of double-quote characters.

```
"abc_armchair ""noir""","abc_armchair"
```

* Fields with embedded commas or double-quote characters must be quoted

```
"abc_armchair, left",10.5
```

* There must be no empty lines

```
"item_id","label_en","label_de"
"abc_armchair","Armchair","Sessel"
"abc_1seater","1-Seater","1-Sitzer"
```

The .csv has to be saved with BOM (byte order mark) encoding set to `UTF-8 without BOM` or plain `UTF-8`. Note that `UTF-8 with BOM` can not be imported. You can check the file encoding with the editor of your choice.

### General fields in import CSVs

#### Id headers

The entry is selected by its id. In the following table you can see which id header you should use for which import entry.

If you want to translate tags, components or material, use a different header for the id column:

| Entry Type | Id field header |
| ---------- | --------------- |
| Products   | item\_id        |
| Tags       | tag\_id         |
| Materials  | material\_id    |
| Components | component\_id   |

#### Import translations

All entries in Rubens Admin can have their labels in [different languages](https://www.roomle.com/en/documentation/configurator-languages). In order to be able to quickly translate multiple entries, use following example:

```
"item_id","label_en","label_de"
"abc_armchair","Armchair","Sessel"
"abc_1seater","1-Seater","1-Sitzer"
```

To translate components, materials or tags, use `component_id`, `material_id` or `tag_id` in the header respectively. You can import label\_XX, where XX is any supported language abbreviation.

In the Git repository, keep this data in files with a \_labels.csv suffix.

#### Set tags via import

This applies for materials and products. The product tag will be applied in the add-on list in the catalog. The material tag will then be applied in the material selectors.

To tag, use id and tag\_ids\_to\_add, where you put in one or more tags, for example:

```
"material_id","tag_ids_to_add"
"leather_brown","leather brown"
"fabric_green","fabric green"
```

To remove tags, use tag\_ids\_to\_remove instead of the tag\_ids\_to\_add.

```
"material_id","tag_ids_to_remove"
"leather_brown","leather brown"
"fabric_green","fabric green"
```

To change tags, do two steps: Remove tags first, then tag again. Use two separate CSVs. In the Git repo, best keep the tagging CSV with all entries with all tags. Then, you can remove the tag from all entries, change the tagging file and tag again.

#### Import sort values

This applies to products. Items in add-ons lists will be sorted ascending by the sort value.

```
"item_id","sort"
"abc_armchair","10"
"abc_armchair","20"
```

> **Recommendation:** Do not use 1, 2, 3, but rather 10, 20, 30 as sort values (you can use even higher numbers), so that you do not have to change values in all other entries if you want to move/add one or more items. Keep it in a file suffixed with \_sort.csv

### Import products

This is mostly relevant for content scripters. If you want to make an item add-on, or a thumbnail carrier, use the item\_id and the configuration. Use the minimal needed configuration in a items\_definition.csv file. Do not forget to use double quotes in the configuration Json.

```
"item_id","configuration"
"abc_armchair","{""componentId"":""cata:abc_master"",""parameters"":{""elementType"":""armchair""}}
"abc_1seater","{""componentId"":""cata:abc_master"",""parameters"":{""elementType"":""inline""}}
```

#### Set product metadata via import

Items (Products) should have their metadata along with the configurations. Store in items\_metadata.csv file.

```
"item_id","type","detailType","width","depth","height","layer","scaleable","flipable","colorable","visibilityStatus","manufacturerSKU"
```

## Batch Upload of Static Products

If you have multiple static products, you can streamline the process by batch uploading them in a `ZIP` format. Follow these steps to efficiently upload and publish your products:

1. Navigate to the `Import/Export` Section.
2. Upload your `ZIP` file containing the static products to the `Import products` uploader and click `Proceed`.
3. A new draft will be automatically created, with each static file in the ZIP resulting in a separate product in the draft catalog.
4. Wait for the assets to finish processing. Once processing is complete, navigate to the catalog section and publish the draft to the live catalog. For more details on automatic draft publishing, refer to [this section](catalogs.md).

***

> **NOTE:** Before uploading, ensure that your data meets the platform's format requirements. This will prevent long wait times for data that does not conform to the necessary standards. Utilize our free [Content Analyzer](https://admin.roomle.com/content-analyzer) tool at Content Analyzer to verify your products. If your data is compliant, proceed with the upload.

> This feature is only available for live catalogs.

***

## Import tags

Prepare the tags in the following structure to import it via Rubens Admin:

```
"tag_id","label_en","description_en","material_ids","item_ids","png_icon","svg_icon","inspiration_image","global","hidden","sort"
```

### Import components

In order to batch import component definitions use:

```
"component_id","component_definition"
"abc_master","zip://components/abc_master.json"
```

Path must start with `zip://` prefix and be relative to the zip root. Compress the CSV along with the components folder and import the ZIP-file to components.

> **Unused components:** You can have unused components JSONs in the zip, but make sure that you compress only the CSV file intended to define the operation you're doing at the moment.

### Import materials

The material import can contain both texture files and meta data. A detailed explanation on how to prepare the texture files correctly can be found in the [Roomle materials and texture requirements](../../content-creation/materialdefinition/).

The meta data is imported as a CSV file. It should contain all specifications for each material, such as shading, scaling, material tag, etc. All the information about a single material should be in a single row and each column must have the specification description so that the data is imported correctly. Below is the list of all possible column descriptions.

#### Import materials CSV columns

**"material\_id"**

This column must always be filled out for an import to be successful. Each material has a unique "material\_id" and it is saved to a specific catalog. In the import can be used both existing material ids for updating the meta / texture details, or new ids to create new materials. A `material_id` can contain small or capital letters, numbers, '-' and '\_'; no spaces or special characters are allowed.

**"label\_\<language>"**

To define multiple translations for a material, add a column for each language with the description "label\_\<ISO 639-1 language code>". For example, for English write "label\_en", for German "label\_de", for Dutch "label\_nl" and so on. Languages currently supported by Rubens [are listed here](https://www.roomle.com/en/documentation/configurator-languages).

**"description\_\<language>"**

It is possible to add a more detailed description about a material but it is not shown in any of the standard Roomle destinations at the moment.

**"thumbnail"**

The texture thumbnail will be shown in the configurator menu. It is better to keep this image as small as possible, ideally around 320 px x 320 px. In this column the location "zip://" and the name of the file must be included (e.g.: "zip://thumbnail.jpg"). For a material, that has no texture, there is no need to import a thumbnail because it will be automatically generated.

Still the thumbnail image can be provided by the content creator in the following CSV format:

```
"material_id","thumbnail"
"leather_brown","zip://thumbnails/brownLeather543_small.jpg"
```

**"shading"**

The material properties are described in the shading json. The following settings must **always** be defined for the shading:

* `basecolor` - the material base colour is defined with RGB values. For example,

```json
"basecolor": {
    "r":0.2196078431372549,"g":0.21176470588235294,"b":0.21568627450980393
}
```

* `metallic` - specifies how 'metallic-like' a material is.It is always a value from 0 to 1, where 0 is a non metallic material (e.g.: rubber) and 1 is a very metallic material which strongly reflects its environment (e.g.: chrome).
* `roughness` - defines how smooth or rough a material is. It is always a value from 0 to 1, 0is perfectly smooth with sharp reflections material and 1is completely matte/dull surface.
* `alpha` - defines the opacity of a material. The value can be from 0 - a completely invisible material; to 1 - a completely opaque material (it is the default value).

Optional parameters - those settings can be included in the shading definition or simply omitted when not needed:

* `doubleSided` - by default in real-time renderings a back-face culling is applied. This means polygons/triangles are only visible from one side. If `doubleSided` is `true`, they are visible from both sides. If not, please enter "false" or do not include this parameter in the import as it is optional.
* `transmission` - determines the transmission factor. This parameter allows to simulate refractive materials like coloured glass. The value can be from 0.0, which is used for fully opaque materials and it is selected by default, to 1.0for completely transmissive with (fresnel) reflections and specular highlights.
* `transmissionIOR` -is the transmissive index of refraction (IOR), controlling the angle in which light is refracted when entering/leaving. At the moment this will not have effect in real-time renderings.
* `alphaCutoff` - used for materials containingtransparent and opaque areas. This feature can only be used for texture with an alpha channel. This setting determines the cutoff point, from which an area will be shown. The possible values can be from "0.0" to "1.0".
* `occlusion` -provide information about which areas of the model should receive high or low indirect lighting. It is relevant only for occlusions textures,its values are scaled by this factor. "0" results in no occlusion, "1.0" is full occlusion (the default settings).

Shading specifies:

* constant or modifier values for material properties (roughness, metallic, specularity)
* basecolor in RGB (normalized, <0-1>), which is applied if no RGB or RGBA texture is present
* alpha <0-1> (1 - fully opaque, 0 - fully transparent)

Sample csv:

```
"material_id","shading"
"leather_brown","{""alpha"":1,""roughness"":0.9,""metallic"":0,""specularity"":0,""basecolor"":{""r"":0.9686274509803922,""g"":0.3607843137254902,""b"":0.9686274509803922}}"
```

> **Texture files:** A material can contain multiple texture files, such as texture image, normal map, etc. The setting for each file - image, width, height, tileable and mapping - must be described with the tag tex\<N> starting the count from '0'. This means, that if 3 texture files must be imported, the tags should be 'tex0', 'tex1' and 'tex2'.

It is recommended to have one file for albedos (basemaps, main textures), one file for normal maps, one file for ORM maps. The number of textures and maps may vary per material.

**"tex\<N>\_image"**

The path to the texture image file in the zip. The location "zip://" and the name of the texture file must be specified. For example "zip://WoodenMaterials/oak\_natural.jpg".

**"tex\<N>\_mmwidth"**

The real width of the texture image must be defined for its correct scaling on a 3D model. Real-world dimensions of the texture in millimeters (used for UV mapping).

**"tex\<N>\_mmheight"**

The real height of the image must also be specified for the correct scaling of the texture. Real-world dimensions of the texture in millimeters (used for UV mapping).

![MaterialImportWidthHeightExample.jpg](<../images/MaterialImportWidthHeightExample (1).jpg>)

_Example, on the left side is a texture with tex0\_mmwidth:750 andtex0\_mmheight:750; and on the right side is the same texture withtex0\_mmwidth:450 andtex0\_mmheight:450 applied on a cube with a 1000mm side. On the left side the texture pattern is much bigger the texture scale is bigger, i.e. 75cm x 75 cm._

**"tex\<N>\_tileable"**

When a material is tileable, it should have the value '1' and if not, it should be '0'.

```
"material_id","tex0_mapping","tex0_mmHeight","tex0_mmWidth","tex0_tileable","tex0_image"
"leather_brown","XYZ","100","100","1","zip://textures/brownLeather543.jpg"
```

**"tex\<N>\_mapping"**

At the moment there are 3 possible mappings:

* RGB: used for normal texture images
* RGBA: used for textures with an alpha channel
* XYZ: used for normal maps
* ORM: used for object-relational mapping

**"tag\_ids"**

Materials can be tagged and then filtered inside the configurator. To tag to material, it first must be created in the catalog and its id should be added in the `tag_ids` column.

**"active"**

The material will be visible if it is active ("active":1). In case it should be hidden, change the value to "0" for false.

**Material properties**

To assign custom data to the materials that can be recovered using the GetMaterialProperty function, use the following CSV header:

```
"material_id","property_<property1name>","property_<property2name>",...,"property_<propertyNname>"
```

See [Using GetMaterialPropery Function](../../content-creation/scripting-resources/200\_140\_getmaterialproperty.md) for details.

#### Import materials workflow

There are two ways to import materials:

1. a CSV-file together with texture files, all files compressed as a ZIP-file
2. a CSV-file alone If you need to add textures to your materials you will have to import a ZIP.

**Import materials as ZIP**

The `material_id` column has to be included in the CSV file for an import to be successful - otherwise the data cannot be linked.

When importing a zip with a CSV file including the texture headers like `texN_`, the image files for the textures are expected to be included. For example, when materials with textures have been created in a previous import and you want to update `tex0_tileable` in a second step, make sure to reference the texture file `tex0_image` and include the texture image in the zip. Textures which can not be found in the zip of the current update, will be removed.

We recommend not to mix the two approaches to avoid deleting data from a previous import.

**Import materials as CSV**

If you need materials without textures you can import them using a CSV-file including the meta-data.

That allows partial updates to be made of specific parameters, for example multi-language translations, deactivating materials or tagging material.

When using the CSV-file alone approach and including `texN_` columns without adding the referenced images to the zip, the textures will be created but without a referencing file. Changes to texture metadata, without the `tex0_image` column, for example `tex0_tileable`, will be ignored.

> **Important:** It is critical, when executing an import, that only the relevant meta data is included. In case an import is made with a CSV file including empty columns with meta descriptions, the existing meta data or textures for those settings will be deleted with the import.

**Batch create materials**

When you need to import lots of materials, a good practice is to prepare the data in the correct way and import it in a batch. Navigate to `Datamanagement`and select a catalog. Select the `Import/Export` tab on the top navigation. If you can not find the `Import/Export` page, you probably do not have the needed rights. Ask your tenant admin for help.

This is a step-by-step guide on how to import a batch of materials.

1.  In the Git catalogue's `materials` folder, create a materials\_import.csv file (file name is not relevant, use another if not available). We recommend having all textures in one folder, with following structure:

    * materialname\_thumbnail.png
    * materialname\_rgb.png
    * materialname\_orm.png
    * materialname\_xyz.png

    In this structure, the material name is chosen so that you know which textures belong to which material. The filenames are not relevant at all, but we still recommend keeping reasonable suffixes. RGB could be albedo/diffuse, XYZ is also called a normal map.

> **Note:** The thumbnail will be created from the \_rgb texture by scaling it down to 256x256mm during import. However, it might happen that you need a small cutout of the texture, so that you can see the pattern. In this case, you must supply your own thumbnail. It is recommended to use a batch image processing tool, that will allow you to export a defined cutout from the images to achieve this.

```
If you re-use one texture in more materials it is good to name it in a way you can distinguish what belongs to what. For example, you might need a fabric material with different colors. The _rgb and _thumbnail are different, but the other maps are the same. Choose a structure for the files which makes the logic understandable in an easy way. 

You can put all textures per material inside a folder named by the `materialId` as well. Make sure the files are referenced correctly in the .csv file.
```

2. Place the texture files in the referenced subfolders.
3.  Open the CSV file and create a header

    ```csv
    "material_id","label_en","shading","thumbnail","tex0_mapping","tex0_mmHeight","tex0_mmWidth","tex0_tileable","tex0_image"
    ```

    In the header, you must declare all columns you are going to import. This header is for the situation, where you import a material with an English label, an RGB map and a thumbnail. If you want to import labels in more languages, simply add relevant columns, like `label_de`, `label_ru` etc. If you have more maps, you will have to add 5 more columns for each map type, which will be called `tex1`, `tex2`, etc. additional to `tex0`. Here is an example with normal maps:

    ```csv
    "material_id","label_en","shading","thumbnail","tex0_mapping","tex0_mmHeight","tex0_mmWidth","tex0_tileable","tex0_image","tex1_mapping","tex1_mmHeight","tex1_mmWidth","tex1_tileable","tex1_image"
    ```

    ***

    > **Important warning:** When batch importing the textures with prefixed columns **tex0** to **texN** in the CSV file, existing textures on the server are deleted. In case you already imported RGB textures using one CSV, importing another CSV with only XYZ will NOT result in adding normals, but **(untinentionally) DELETING CURRENT TEXTURES** and replacing them with only the XYZ maps. In order to achieve this, you need to import both RGB and XYZ in a single CSV.

    ***
4.  Fill in the values:

    * **material\_id**: the unique identifier of the material. This can not be changed after the import.
    * **label\_en**: label that shows in the end-user interface
    * **shading**: serialized Json that holds the shading data ... see how to fill _shading_ below
    * **thumbnail**: relative path to the thumbnail image file. Example: zip://thumbnails/leather\_red.png
    * **tex0\_mapping**: mapping of the texture with number 0. Can be: RGB, RGBA, XYZ, ORM
      * RGB - Standard, non-transparent mapping
      * RGBA - As above + has a transparency alpha channel. This is rare and relevant for transparent textures. Hint: JPGs do not have a alpha channel, PNGs do.
      * XYZ - Normal map
      * ORM - Ambient Occlusion - Roughness - Metallness map.
    * **tex0\_mmHeight** and **tex0\_mmWidth**: size of the cutout of the texture in reality
    * **tex0\_tileable**: 1/0, sets the tileability flag of the texture
    * **tex0\_image**: relative address of the texture file. Example: zip://textures/leather\_red.png
    * **tex1\_ ...**: fill in relevant values for the other textures as well

    If you use more maps, keep a convention that you use tex0 for RGB or RGBA, tex1 for normal maps, tex2 for ORM maps.

    **Shading explanation**

    Shading is a Json that provides values for the shader. Full class source code:

    ```json
    {
        "basecolor": {
            "r": 1,
            "g": 1,
            "b": 1
        },
        "alpha": 1,
        "metallic": 0,
        "roughness": 0.9,
        "doubleSided": false
    }
    ```

    * **r, g, b**: Values are normalized (values between <0..1>). To get them from <0..255>, simply divide by 255. To get color form hex, you must use a converter.
    * **alpha**: Opacity of the material between <0..1> from fully transparent (invisble) to fully opaque. If alpha < 1, material is treaded as transparent, being more expensive to render.
    * **metallic**: Metallness value of the material. 0 or 1 - dielectric or metal. Values in between correlate, but most values near to, or exactly 0 or 1 are suitable. Watch out that painted metal is _not_ metallic = 1 (the paint on it is usually dielectric).
    * **roughness**: <0..1> from glossy to fully matt. Warning: Exactly 0 is overriden by a value of around 0.7. For most glossy surface, use near 0 values like 0.01.
    * **doubleSided**: The material applies to both sides of the mesh, irrelevant of the normal direction. This is expensive to render and should be avoided if not needed.

    If you use ORM maps, relevant alpha, roughness and metallic are coefficient to the value from maps. Use 1 in all those values in order to follow the exact values of the ORM maps.

    RGB values are overriden by the RBG/RGBA maps, meaning you can not use those values to make color variations of a texture.

    To use the shading Json inside a CSV, you must stringify it and escape quotes:

    ```csv
    "material_id","shading"
    "material_test","{""basecolor"":{""r"":1,""g"":1,""b"":1},""alpha"":1,""metallic"":0,""roughness"":0.9,""doubleSided:false}"
    ```
5.  The resulting file should look like this:

    ```csv
    "material_id","label_en","shading","thumbnail","tex0_mapping","tex0_mmHeight","tex0_mmWidth","tex0_tileable","tex0_image","tex1_mapping","tex1_mmHeight","tex1_mmWidth","tex1_tileable","tex1_image"
    "lux_red","Leather Lux Red","{""basecolor"":{""r"":1,""g"":1,""b"":1},""alpha"":1,""metallic"":0,""roughness"":0.9,""doubleSided:false}","zip://thumbnails/leather_red_thumb.png","RGB","200","300","1","zip://textures/leather_lux_red.png","XYZ","200","300","1","zip://normalmaps/leather_normal.png"
    ```
6.  Once you are ready with the import, zip all the folders including the CSV-file and drag and drop it to the `Import materials` field. Take a look at the sample files for reference.

    The import file size in Rubens Admin is limited to 100MB. In case you are reaching this limit, try to import fewer entries at once. Create batches of smaller size to the import for your materials working. The import field message changes to `Successful` as soon as processing is finished. The processing might take around 3 minutes for importing a .zip with around 100MB.

#### Import materials sample files

{% file src="../../.gitbook/assets/materials_template.csv" %}

{% file src="../../.gitbook/assets/materials-sample1.zip" %}

{% file src="../../.gitbook/assets/materials-sample2.zip" %}

#### Create a material based on a RAL color

* Get the RGB code from the RAL code. It is recommended to use https://en.wikipedia.org/wiki/List\_of\_RAL\_colors as reference. There are many sources with the RAL shades slightly differing, therefore it is good to have something that gets at least some review.
* If you plan to enter the values in Rubens Admin directly, search for the hex code in the upper reference and enter it into the color input field.
* If you plan to **import a csv**, you need the RGB color in a normalized form, where the values are between <0;1>. If your RGB values are <0;255>, divide them by 255.
* If not colliding with other requirements, the **materialId should be or contain ral\_xxxx**.

Template for CSV file:

```
"material_id","label_en","shading"
"ral_1000","Greeb beige","{""alpha"":1,""basecolor"":{""r"":0.788,""g"":0.733,""b"":0.533}}"
```

Template for CSV file with normal map:

```
"material_id","label_en","shading","tex0_tileable","tex0_image","tex0_mapping","tex0_mmwidth","tex0_mmheight"
"ral_1000","Greeb beige","{""alpha"":1,""basecolor"":{""r"":0.788,""g"":0.733,""b"":0.533}}","true","zip://materials/rough_metal_xyz.png","XYZ","5","5"
```

### Import 3D assets

To import multiple static products in one batch you can import a correctly formatted ZIP file in the `Import 3D assets` import section.

The ZIP file has to contain a folder structure as described below:

```
- extItem1/
    - anyFileNameForExtItem1.fbx
- extItem2/
    - anyFileNameForExtItem2.fbx
    - someTexture.jpg
```

Folders names extItem1 and extItem2 must match real external identifiers for the corresponding items (products) in this catalog. The folder structure must align with this examples, there are no additional levels of folders allowed. For the imported 3d models a corresponding item with matching [item\_id](import-export.md#id-headers) is looked up. The 3d model is processed and linked to the product. If no matching item is found inside the catalog, the 3d model will not be imported.

### Import prices

To add prices to your products, you can import a price list. Therefore, navigate to `Dashboard > Catalogs` and select an existing catalog. In the top menu bar click on the `Import/Export` button and scroll down to the `Import Prices` section.

Prepare the prices in the following structure to import it via Rubens Admin:

```
"article_number","price","currency_symbol"
```

You can also simply export the `prices.csv` sample file and insert the values, you want to set. Or export the existing prices in the `Export Prices` section, edit the existing data and re-import. Already existing data for products will be overwritten.

***

> **Note:** If prices are to be displayed in Rubens, the catalog containing the products must have the `Publicly orderable` setting in the `General` section enabled.

***

### Import meshes

If you have multiple meshes, you can import them in Rubens Admin by following these steps:

1. Navigate to `Dashboard > Catalogs` and select an existing catalog.
2. In the top menu bar, click on the `Import/Export` button and scroll down to the `Import Meshes` section.
3. Import your meshes as a zipped folder containing `PLY`, `OBJ`, or `CRT` formatted files.

In addition to the mesh formats mentioned above, meshes can also be uploaded in `CSV` format. For a successful import, ensure your CSV file follows this format:

| Header        | Description                                    |
|---------------|------------------------------------------------|
| `mesh_id`     | Unique identifier for each mesh                |
| `asset_source`| Source path or file reference for the asset    |

Example of a CSV file structure:

```csv
"mesh_id","asset_source"
"mesh001","path/to/asset1.obj"
"mesh002","path/to/asset2.ply"
"mesh003","path/to/asset3.crt"
```

***

> **Note:** Meshes with the same name, regardless of PLY/OBJ extension, are then overwritten. The changes should be visible immediately the next time the configurator is called, but sometimes the caching can cause the changes in the overwritten meshes to be visible only after up to 1 hour.

***

### Import catalog additional information

You can bulk upload and create additional catalog information like information tooltips for parameters or embedded information for products, components or materials if you upload a csv file with that information in the form for catalog additional information in the Import/Export section of your catalog. You can download the sample csv file, which is provided in the import form for catalog additional information or it is also possible to download the already existing additional information entries for that catalog from the export form for additional catalog information. You can create new entries in the csv file and reupload the csv file again. New entries in the csv file will then be created and displayed in Rubens.

***

## Export data from Rubens Admin

Navigate to `Dashboard > Catalogs` and select an existing catalog. In the top menu bar click on the `Import/Export` button. On the right side of the page you can find the export options. Choose a format `CSV` or `JSON` and click on the `EXPORT` button. Materials will not include the textures on export. It is not possible to export catalogs.
