# Materials

## Materials list

In the `Materials` list, you can see all the materials of one catalog. To see the list, go to `Catalog management`, select a catalog and click on `Materials`. The overview can be displayed in a `List view` or a `Grid view`. To change the view, click on the icon in the upper right corner of the overview, next to the search textfield.

To find a material, you can search for the `Material name` or the `External identifier` of a material in the search textfield. The search is case-insensitive.

***

> **NOTE:** Materials management is not available for Level 1.

***

## Sample materials

If you do not have ready materials to integrate into your products, you can use the sample materials. Navigate to the `Materials` tap and select `Show sample materials` on the upper right corner of the components table. You can use the ids to create and configure your products. For more infos on how to use materials in products, see the section [create configurable products](products.md#create-a-configurable-product). Select `Hide sample materials` to hide the materials again.

***

> **NOTE:** The sample materials might change without notice. It is recommended to use your own materials for production content.

***

## Create, import, archive or deactivate a material

### Create a material

To create a new material manually,

* click on the red plus button inside the overview.
* Under `General`, set a `Material name` and an `External identifier`. We recommend to use a natural key which is easy to read. You can also check the `Auto generated ID` checkbox, then the `External identifier` will be automatically generated. If you want to, you can also set a `Description`.
* The material is active by default. Uncheck the `Active` checkbox to hide it in embedded configurators. You can also define a period of time during which the material is active. You can change this setting at any time, see [Activate or deactivate a material](materials.md#activate-or-deactivate-a-material). When a material is set to inactive, existing configurations where the material is used remain valid. However, once the material is removed from the configuration, it cannot be used again. To do this, it must first be reactivated.
* Click the red plus button to assign different `Tags` to your material to group the materials inside a configurator.
* Set the parameters in `Material shadings` as described in [Manage existing materials](materials.md#manage-existing-materials).
* In order to quickly identify a material you are looking for, it is helpful to set a thumbnail in the `Assets` section. This image will be shown in the `Materials` overview list and in embedded configurators, if used.
* `Save` your changes.
* After saving the material a new section `Textures` shows up. This is optional and you can upload multiple textures with different mapping - if needed. You can define the `Mapping`, `Width in mm`, `Height in mm` and `Tileable` for textures. Read the [materials section](materials.md) for details.

***

> **NOTE:** Check if a material already exists before creating a new one. Search for the `materialId` in the materials list.

***

### Import materials

To import a list of materials, see the following links

* [Import materials](import-export.md)
* [Requirements for materials and textures](../requirements-and-sample-products/materials-and-texture-requirements.md)

### Materials filtering

On the left side of the `Materials` page you can see a filter section with the following controls:

1. **Search field:** You can enter text into this field to search for materials with an id or label.
2. **Tags:** Click on the plus icon to reduce the list to materials matching the tag.
3. **Status:** Show only materials in the list which match the active status. Valid values are: `All`, `Active materials`, `Inactive materials`

### Duplicate a material

Duplicating materials is a quick way to create new materials based on existing ones. This can be especially useful when you want to create variations of a material with similar properties but slight differences in color, texture, or other parameters.

To duplicate a material:

1. Navigate to the `Materials` list where you see all the materials of one catalog.
2. Find the material you want to duplicate and hover over it to reveal action icons.
3. Click on the duplicate icon.
4. After duplication, you can edit the new material to adjust any properties, tags, textures, or other settings as needed.

### Archive a material

If you do not need the material anymore, you can remove it from the material list. Hover over the material you want to delete and click on the trash icon.

Alternatively you can archive it on the material's details page. Click on the red trash can icon in the upper right corner. The material still remains in our cloud to maintain connections.

### Activate or deactivate a material

You can specify a time period in which a material should be active. Outside this period, the material is deactivated automatically. The material will then not show up in configurators but it remains in Rubens Admin `Materials` list and can be maintained. It is also still available in already saved configurations.

To set a time span for a material

* select the material that you want to activate or deactivate automatically.
* In the `Status` section, switch `Update automatically` on.
* Specify `Active from` as the first active day and `Active until` as the first inactive day.

It is also possible to just check or uncheck the `Active` checkbox in the `Status` section at the left side of the page manually. If you want to set the status manually you have to switch off `Update automatically`.

## Manage existing materials

Materials in our system are defined with various parameters that determine their appearance and behavior. By default, materials are created with Version `1.0.0` parameters, but they can be upgraded to Version `2.0.0` to access enhanced features and more detailed control over material properties.

**Set material shading parameters**

The `Material shadings` section is divided into two parts. On the left part, you can see how the material looks like on an object. On the right part, you can define the settings of the material. The following parameters can be changed:

_**Version 1.0.0 Default Shading Properties**_

* `Base color`: The base color of the material in HEX color code. Click on the colored field on the left to pick a color or enter a value directly into the textfield.
* `Material is double-sided`: Check this checkbox if you want your material to be applied to both sides of an object.
* `Alpha`: Defines the opacity of the material. 0.0 is completely invisible, while 1.0 completely opaque.
* `Transmission`: If an object is transmissive, its basecolor is used as transmissive color. 0.0 is fully opaque (the default) and 1.0 is completely transmissive.
* `Index of refraction`: Controlling the angle in which light is refracted when entering/leaving.
* `Roughness`: The value has to be between 0.0 (perfectly smooth) and 1.0 (completely matte/dull).
* `Metallic`: A physical material is always either metal (1.0) or non-metal (0.0) (conductor or dielectric).

**Enabling Version 2.0.0 Features**

To access additional material properties introduced in Version `2.0.0`, toggle the `Material V2` checkbox. Enabling this option will expand the interface to include advanced settings that allow for more detailed control and realism:

* `Occlusion`: Controls the shadowing effect from ambient lighting to enhance depth in crevices, affecting the material's perceived texture depth without altering its geometry. Higher values darken creases more significantly.
* `Reflectivity`: Controls the amount of light that is reflected off the surface, rather than absorbed or transmitted through. Higher values produce a more mirror-like surface, enhancing the material's shiny appearance.
* `Specular Color`: Determines the color of the specular highlights on the material. Specular highlights are the bright spots of light that appear on shiny objects when they reflect light sources.
* `Emissive Color`: Sets the color that the material emits as if it were a light source. Useful for creating objects that appear to glow, such as light bulbs or screens.
* `Emissive Intensity`: Adjusts the strength of the light emitted by the material. Higher values increase the brightness and visibility of the emissive color.
* `Clearcoat Intensity`: Applies an additional clear layer over the material, commonly used for car paints, varnished wood, or any materials that require an extra glossy coating.
* `Clearcoat Roughness`: Controls the roughness of the clearcoat layer. Lower values result in a smoother, clearer coat, while higher values make the clearcoat appear hazier and less reflective.
* `Clearcoat Normal Scale`: Affects the influence of normal maps on the clearcoat layer, allowing for detailed control over how the clearcoat's light reflection is distorted by the underlying textures.
* `Sheen Color`: Specifies the color of the sheen effect, often used to simulate the subtle, soft reflection seen on fabrics like silk or satin.
* `Sheen Intensity`: Modifies the intensity of the sheen effect, providing control over how pronounced the sheen appears on the material surface.
* `Sheen Roughness`: Adjusts the roughness of the sheen, affecting how sharply or softly the sheen spreads across the material. Lower values produce a sharper, more focused sheen, while higher values diffuse it.
* `Specular Intensity`:Adjusts the roughness of the sheen, affecting how sharply or softly the sheen spreads across the material. Lower values produce a sharper, more focused sheen, while higher values diffuse it.
* `Thickness Factor`: Utilized primarily in subsurface scattering materials to simulate the effect of light penetrating a translucent object, like skin, wax, or leaves, affecting the perceived depth and translucency.
* `Attenuation Color`: Defines the color that appears as light passes through a thin or semi-transparent material. This setting is crucial for materials like stained glass or colored liquids.
* `Attenuation Distance`: Specifies the distance over which light diminishes through the material. Shorter distances increase the rate at which the light is absorbed, enhancing the depth effect in translucent materials.

For a more detailed definition of the parameters, see [Material Json](../../content-creation/materialdefinition/#material-json).

You can see the changes in your `Material shadings` settings immediately on the left sided object. To have a better understanding of how the material looks like on different surfaces, you can choose between

* a `Cube`,
* a `Sphere`,
* a `Vertical plane` and
* a `Horizontal plane`.

The defined parameters will be automatically written and shown into the `Shading` textbox. This textbox is read-only.

**Switching between Material Versions**

When switching from Material Version `2.0.0` back to Material Version `1.0.0` by unchecking the `Material V2` checkbox, all properties exclusive to Material V2 will be removed. This ensures that the material strictly conforms to the V1 specifications, which may not support the advanced features introduced in V2. Please review your material settings to adjust any properties as necessary after downgrading.

**Sort material**

The easiest way to organize your material list is by sorting it. When creating a material, you can set a numeric value in the `Sort order` field in the left column under the navigation. If you do not set a value, it will default to 0. For existing materials, you can set the value in the `Materials` overview list. Move your cursor over the value of the `Sort order` column in the row of the respective material. Click on the value or the appeared pencil icon, enter an integer and press Enter or click outside the input field to save the new value. The materials will be shown in the configurator according to the sort number in the material.

**Add a material embedded information**

There is a possibility to add a tooltip and an embedded URL for `Material`. This tooltip and the embedded Url can then be shown in Rubens as additional information which makes the user learn more about these materials.

To add embedded information to a material

* Navigate to an already created material.
* Go to `Material Embedded information` and then click on `Add additional content` link.
* Enter the tooltip value plus an embedded URL and save the form.
* In order to add different languages to the created information:
  * Change the language from the top left section.
  * Click on the material information from the materials information table.
  * Add the new information and then click save.

***

> **Note:** Ensure entered URLs allow iframe embedding by allowing CORS and checking X-Frame-Options. [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

***

**Add a texture**

A texture map is an image applied (mapped) to the surface of a 3D object. This may be a .jpg or .png file.

To add a texture to a material

* Navigate to an already created material.
* Click the red plus button in the `Textures` section and select your favored `Mapping`. There are four different possibilities:
  * RGB: Base color
  * RGBA: Base color with alpha channel
  * XYZ: Normal map
  * ORM: Occlusion, Roughness and Metallic channels in a combined map. For further information about the mapping types, see [Texture mapping](../../content-creation/materialdefinition/#mapping).
* Set the `Width in mm` and `Height in mm` and define therefore the dimensions on which the image should be mapped.
* Click `SAVE`.

**Set texture parameters**

To change already existing textures within a material, navigate to the `Textures` section within the material. Select the texture you want to change and click on the row to open the texture definition. Change the parameters you want or click the `X` in the right upper corner to close the texture definition again.

**Delete a texture**

If you do not need the texture anymore, navigate to the `Textures` section of the material. Move the cursor to the texture, you want to delete and click on the trash can icon that appears. The texture will be permanently deleted and a dialog opens to confirm the action. Click `DELETE` to confirm or `CANCEL` if you want to keep the texture.

**Translations**

You can translate and save the name and description of your materials in different languages. To do this, navigate to the details page of the material and select the appropriate language in the action bar on the left side above the navigation. Change the name and/or description and click `SAVE`.
