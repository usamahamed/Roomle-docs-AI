# 3D Assets Requirements

## 3D assets requirements

### Level 1 (3D Viewer)

* formats:
  * **`.glb`** (**recommended**)
  * `.gltf`
  * `.fbx`
  * `.obj`
* model-units: `meters`
* materials: PBR roughness metallic
* uv maps:
  * tiling uv maps
  * material atlas
  * unwrapped uv maps
* file coordinate system:![](<../images/axis-alignment-static (1).png>)

#### Upload

The `glb` format contains all files for a given model including texture maps. If you choose this format you just have to upload the `.glb` file.

In case you choose another format make sure to include all necessary files like texture maps along with the 3d model within a `zip` file and upload this.

> **information gltf/glb format**
>
> * Version 2.0 (see [specification](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0) for details)
> * Supported extensions
>   * Texture transforms (`KHR_texture_transform` )
>   * Unlit materials (`KHR_materials_unlit`)

### Levels 2+ (3D Material Configurator, 3D Product Configurator)

* formats:
  * `.obj` (**recommended**)
  * `.ply`
  * `.crt`
* model-units: `millimeters`
* materials: **need to be uploaded/created separately** ([more information](../help/materials.md))
* uv maps:
  * the uv space units are treated as `0 to 1mm` real world scale
  * the correct scaling is done later in the material settings and or roomle script
  * [How to apply the needed UV Scaling](../help/meshes.md)
* file coordinate system: ![](<../images/axis-alignment-config (1).png>)

#### Geometry

* **Must-have**
  * Manifold meshes.
  * Correct and consistent up­\* and forward­-axis.
* **Recommended**
  * Quads and triangles only.
  * Keep the pivot/center point in the lower center of the object’s bounding box.
  * Keep the root transform at the scene’s origin with no rotation or scaling applied.
  * Back-facing polygons are culled (only one side is visible) keep that in mind.
  * Objects can contain multiple materials and sub-­objects in a hierarchy.
  * Sub­-objects of the same material should be merged/joined together to save draw calls at runtime.

#### UV mapping

* Must-have
  * Whenever textures are applied, correct UV layouts have to be provided. For til
  * For configurable objects the UVs must be scaled according to Rubens Configurator specifications
* Recommended
  * If the object uses specular shaded materials, normal maps or reflections provide either custom tangents or a UV ­map to make sure the specular highlights are consistently correct.

UV requirements for the Rubens Configurator:

* In Roomle one UV unit equals to 1 mm on the model. To achieve this, lay out the UVs in a way that a texture map with a size of 1 x 1 mmis mapped onto the object in its correct size.

#### Materials & Textures

You may provide textures for the following channels

* diffuse (with or without alpha channel)
* normal
* metallic
* roughness
* occlusion

**Must-have**

* JPEG or PNG Images
* No special characters in (file) names (see Naming convention below)
* Make sure the texture file paths in the 3D file are relative and correct. Otherwise they are not guaranteed to be assigned.

We automatically optimize images for real-time rendering by scaling them down and limit the total number of textures.

|                        | <p><strong>3D Viewer</strong><br><strong>Material Configurator</strong><br><strong>Product Configurator</strong></p> | **High-quality offline rendering** |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Max. resolution        | 2048x2048                                                                                                            | no limit                           |
| Max number of textures | 12                                                                                                                   | no limit                           |

Additional real-time notes:

* Images are scaled so that the pixel size is a power of two (eg. 32, 64, 128, 256, 512 or 1024 Pixel)
* A lossy image compression is applied

Keep the automatic down-scaling in mind when creating UV layouts! UV islands with a narrow distance might introduce bleeding artefacts.

***

> **Attention:** Please deep dive further into our detailed [**Roomle texture requirements documentation**](../../content-creation/materialdefinition/).

***

## Detail variants and complexity limits

#### _General rule_

> Complexity/triangle count should be as low as possible, but as high as necessary. Parts which are not relevant and visible in the sales configuration should not be part of the 3D model.

We offer 2 different use cases:

**1. 3D Viewer, 3D Material Configurator, 3D Product Configurator (Live 3D Rendering)**

**Purpose:** browser-based sales visualization We have the same 3D requirements for all 3 product categories.

**2. HD Renderings (Offline 3D Rendering)**

**Purpose:** photo-realistic rendered product images for marketing & sales channels.

Automated high-quality product images (CGI) based on the Live 3D Data from Material Configurator or Product Configurator. Alternatively you can also upload and use a higher-quality 3D model for photo-realistic rendering results.

If you provide Configurator and assets for HD Renderings, keep the objects for the different profiles in separate source files.

These are the **geometry detail profiles** for our 2 use cases:

* **For 3D Viewer (Level 1), 3D Material Configurator (Level 2), 3D Product Configurator (Level 3)** Used in real-time renderings in detail views and more powerful devices. Ideal quality specification for Roomle configurator high-quality product visualization.
* **For HD Renderings (High-quality offline Renderings)** Used in offline (non-real-time) renderings like image previews and product renderings only.

All geometry will be converted to triangles, so triangles are our basis to measure complexity.

_We distinguish between a soft and hard limit_

* **Soft triangle count limit:** Try to keep your triangle count below the soft limit if possible. You may occasionally have objects of big size and complexity, where keeping this limit and maintaining a good look is not possible. Only in that case you may exceed this limit.
* **Hard triangle count limit:** Every object, no matter how big or complex, must have a triangle count below the hard limit.

The recommended/maximum triangle count depends on the object size and complexity/shape. For normally sized objects (like chairs, tables or couches) these are the limit guides:

|                           | <p><strong>3D Viewer</strong><br><strong>Material Configurator</strong><br><strong>Product Configurator Profile</strong></p> | <p><strong>High-quality</strong><br><strong>offline Rendering Profile</strong></p> |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Soft Triangle Count Limit | 30.000                                                                                                                       | none                                                                               |
| Hard Triangle Count Limit | 100.000                                                                                                                      | 5.000.000                                                                          |

### Naming convention

File names of 3D or texture files, object names, material names, etc. may only consist of alphanumeric characters (digits & letters) found in the ASCII standard supplemented by underscores `_` and dash `-`.
