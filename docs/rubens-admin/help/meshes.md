# Meshes

## Create Meshes For Configurations

The coordinate system within the Roomle ConfigurationScript is a left-handed cartesian coordinate system with `+Z` being the up vector and `+Y` the forward direction of the model. `1 model unit` has to be equal to `1mm` real world scale.

### Mesh Scale And Orientation

* Left-handed coordinate system
* Up vector: `Z+`
* Forward direction: `Y+`
* Units: One mesh unit represents `1mm` real world scale

> ⚠️ Be aware of a possible scaling factor applied to the coordinates within your 3d application to display the desired real world units on screen!
>
> This information may get lost when exporting to .obj resulting in an unexpected scaled mesh.
>
> In doubt open an `ASCII` based `.obj` file in a texteditor and check if then coordinates have a reasonable size (eg. max. \~500-1000 units for a chair).

If you encounter issues with the size of your model, it is recommended to apply a scaling factor on export.

> If the model is constructed _"in Meters"_ (`1 model unit` = `1m`) add a multiplication of `1000` on export.
>
> A Model _"in Centimeters"_ (`1 model unit` = `1cm`) has to be upscaled by `10`.
>
> When working _"in Millimeters"_ (`1 model unit` = `1mm`) no scaling is needed on export.

![Axis Orientation](<../images/mesh\_creation-chair\_model\_with\_coordinate\_system (1).png>)

![Blender Export Dialog](<../images/mesh\_creation-Blender\_Export\_Dialog (1).png>)

### UV Scaling

Prepare the UV map to properly view the texture dimensions entered in the material settings.



{% file src="../../.gitbook/assets/roomle-200x200mm-5mm_grid.png" %}
Texture in png format with a 5mm grid.
{% endfile %}



1. Create `20 x 20 cm` real world scale plane ![20cm x 20cm reference plane](<../images/mesh\_creation-01-reference\_plane (1).png>)
2. Apply the `5cm` Grid Texture you downloaded in the beginning. ![scale reference texture](<../images/mesh\_creation-02-reference\_grid (1).png>)
3. Map the same Grid to the Objects with the UVs that should be scaled ![texture on model](<../images/mesh\_creation-03-initial\_grid (1).png>)
4. Scale UVs so the grid sizes match on the objects and on the plane ![UV scaling off](<../images/mesh\_creation-04-scale\_before (1).png>) ![UV scaling fixed](<../images/mesh\_creation-05-scale\_after (1).png>)
5. Now Scale the `UVs` by `200` so `1 UV tile` = `1mm` real world size ![UVs scaled x200](<../images/mesh\_creation-06-200x\_scaled\_UVs (1).png>)
6. Delete the reference plane ![removed plane](<../images/mesh\_creation-07-removed\_reference\_plane (1).png>)
7. Export the model like described above
8. Zip the result and upload to Rubens Admin
9. Enter the real world sizes for your textures
10. The texture now maps exactly as expected ![finished model](<../images/mesh\_creation-09-model\_with\_texture (1).png>)

## Meshes list

In the `Meshes` list, you can see all the meshes of one catalog. To see the list, go to `Catalog management`, select a catalog and click on `Meshes`. The overview can be displayed in a `List view` or a `Grid view`.

> **NOTE:** Mesh management is not available for Level 1.

### Meshes filtering

On the left side of the `Meshes` page you can see a filter section with the following controls:

1. **Search field:** You can enter text into this field to search for meshes with an id.
2. **Status:** Show only meshes in the list which match the active status. Valid values are: `All`, `Active meshes`, `Inactive meshes`

### Hide meshes

You can hide a mesh by navigating to the mesh's details page. Click on the `Hidden` checkbox in the `Status` section on the left and then click `Save`. In the `Meshes` overview, you can filter by the hidden meshes in the filter section.

## Import or archive meshes

### Import meshes

To import a list of meshes, see [Import meshes](import-export.md).

### Archive meshes

If you do not need the mesh anymore, you can remove it from the meshes list. Hover over the mesh you want to delete and click on the trash icon.

Alternatively you can archive it on the mesh's details page. Click on the red trash can icon in the upper right corner. The mesh still remains in our cloud to maintain connections.

## Manage existing meshes

To view an already existing mesh, select it in the `Meshes` overview and click on it.

On the details page of the mesh you can copy the `External identifier` and the `AddExternalMesh command` function and see a `Preview` of the mesh.

For more details of meshes see [3D Models & Meshes](../../content-creation/scripting-resources/200\_100\_meshes.md)
