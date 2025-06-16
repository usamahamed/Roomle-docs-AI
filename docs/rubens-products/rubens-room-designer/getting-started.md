---
description: >-
  The Room designer allows you to configure not only one object but several
  objects in relation to each other within rooms. Also, the rooms can be
  configured within the Room Designer.
---

# Getting started

## Enable Room designer <a href="#enable-room-designer" id="enable-room-designer"></a>

To enable the room designer interface:

* To enable the room designer, you need to add and set the `moc` flag in the `Rubens settings` to true ([see Rubens Admin documentation](../../rubens-admin/help/administration.md#rubens-settings)). When this flag is set, all configurators in the tenant automatically use the room designer user interface.

## Setup the catalog structure <a href="#setup-the-catalog-structure" id="setup-the-catalog-structure"></a>

To offer a set of products in the Room Designer, they must be stored in a catalog and tagged accordingly. To display products and divide them into categories, tags must be structured correctly.

Each tag can be used as root tag for the Room Designer. A sub-tag must be created for each category and each product that corresponds to this category must be tagged with it. The tag structure could then look like this:

{% code lineNumbers="true" %}
```
moc_catalog (root-tag)
├── Fences (sub-tag 1)
├── Couch Tables (sub-tag 2)
├── Outdoor Tables (sub-tag 3)
└── Sofas (sub-tag 4)
```
{% endcode %}

Also see the [documentation on tags](../../rubens-admin/help/tags.md#create-or-import-tags)

By tagging the products in the catalog, you can add them to the scene by clicking the "Add Product" button.

***

> **NOTE:** In order to use the tags in the Room Designer, the catalog that hosts these tags should be `Free` and `Available for public`. You can set these flags inside the catalog detail page in the Admin interface. More info can be found here [documentation on create catalog](../../rubens-admin/help/catalogs.md#create-a-catalog)

***

## Define custom materials <a href="#define-custom-materials" id="define-custom-materials"></a>

You can customize which materials are used to color:

* walls
* floors
* colorable doors, windows and objects (be aware that not every door or window or object is colorable)

First of all you have to create a root tag for the materials you want to use in Rubens Admin. The tag structure is exactly the same as for the catalog. For more details see the section above ([setup catalog](getting-started.md#setup-the-catalog-structure)). The only difference is, that you tag materials instead of items. Another important difference is, that additionally to the visibility rights described in the catalog section, the materials need to belong to the tenant that instantiates the Rubens Room Designer. Normally that's not a problem when you setup the materials in Rubens Admin inside your tenant. But make sure that you use the correct configurator ID. Otherwise the materials won't be visible.

If you have setup the tag, then you just need to set the options correctly (either via query params, configurator settings or init-options).

You can set different tags for the different things you want to color:

* walls: `wallMaterialRootTag`
* floors: `floorMaterialRootTag`
* doors: `doorMaterialRootTag`
* windows: `windowMaterialRootTag`
* objects: `objectMaterialRootTag`

If you do not want to use a separate tag for everything you can just use `materialRootTag` and this is applied to everything. If no tag is specified Rubens Room Designer falls back to standard RAL colors. If you want to use a specific `materialRootTag` for everything but for the walls you want to use the RAL colors, you would specify it the following way:

```url
materialRootTag=my_custom_material_root_tag_id&wallMaterialRootTag=__SAMPLE__MATERIALS__
```

The phrase `__SAMPLE__MATERIALS__` indicates to use the fallback materials.
