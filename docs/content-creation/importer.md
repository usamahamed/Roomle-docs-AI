# Importer

## Getting started

To create an importer/converter from any given 3D data into Roomle you need to answer those questions:

* How is the data structured which I want to import?
* How is Roomle data structured?
* How can I prepare my data for import?
* How do I import the prepared data into Roomle?

### How is the data structured which I want to import?

To convert from one format into another you need to understand both. We can not guide you through this process since we do not know with which format you are starting. Also we do not have deep understanding of all the formats available.

### How is Roomle data structured?

To get started we recommend you are taking a look at the definition of different terms we are using when talking about Roomle data.

To create a product you need to understand [Roomle Script](scripting-resources/200\_40\_roomlescript.md) and all parts necessary, especially:

* [Catalogs](../rubens-admin/help/catalogs.md)
* [Components](../rubens-admin/help/components.md) and how they are related to [Roomle Script](scripting-resources/200\_40\_roomlescript.md)
* [Meshes](../rubens-admin/help/meshes.md) and that they can be created [manually](../rubens-admin/help/meshes.md#create-meshes-for-configurations) or [imported](../rubens-admin/help/import-export.md#import-meshes)
* [Materials](../rubens-admin/help/materials.md) and how they can be set using [parameters](scripting-resources/200\_30\_parameters.md)
* Items/products

We recommend to go through our [Hello World example](scripting-resources/100\_40\_helloworld.md) and the [scripting course](scripting-resources/#getting-started).

### How can I prepare my data for import?

You will find an overview of all possible imports, exports and how they need to be structured in the [Rubens Admin documentation](broken-reference).

If you have existing 3D data and you want to use external meshes you can export them using our [Blender Addon](blender-addon/)

### How do I import the prepared data into Roomle?

You can either import it manually in [Rubens Admin](https://admin.roomle.com/login) as described [here](../rubens-admin/help/import-export.md#import-data-in-rubens-admin) or you can use our [REST API](../rest-api/rest-api-reference/) to import it automatically from within your code.

## Example

In the following we will work with a simple example to explain the best practices of converting. For this we assume that we have an item list in CSV format.

This list includes all variations of the product with item number 122. The product has two changeable properties, the color and the width. Each variation in the list is a separate entry, so each property has exactly one value (e.g. color: white). We assume that there are only three different variations.

* white, 50cm wide, 80cm high
* white, 60cm wide, 80cm high
* black, 50cm wide, 80cm high

The product is not available in black and 60cm width.

```
"Item number","Color","Width(cm)","Height(cm)"
122_w_50,"white",50,80
122_w_60,"white",60,80
122_b_50,"black",50,80
```

### Requirements

As explained in [Getting Started](importer.md#getting-started), you need to understand the Roomle structure to prepare your data for import. First you have to answer if you want multiple start configurations, how products should be configurable and which materials exist.

**Should there be several start configurations per product?**

We only want one start configuration. The configurator should always show the variant white, 50cm wide to start with.

**How should the articles be configurable?**

In our example, the product has three parameters. The color, the width and the height. The height is the same for each variation, therefore it should not be configurable. The color and the width, however, should be.

**Do materials exist and if so, in what form?**

There are no existing materials but we want to store the specified colors as materials and therefore we need to extract them from the item list.

### Roomle data structure

The requirements described above result in the data structure in Roomle described below.

**Catalog**

Products, components and materials are assigned to catalogs in Roomle. Therefore, a catalog must be [created](https://docs.roomle.com/web/datamanagement/products.html#catalogs) first.

The following properties are set for the catalog:

```
"Catalog name", "Roomle internal catalog ID"
"My catalog", "mycatalog"
```

**Materials**

Two materials must be created. You can find the description how to import materials [here](https://docs.roomle.com/web/datamanagement/import-export.html#import-materials).

The following properties are set for the materials:

```
"material_id","label_en","shading","active"
"white","White","{"basecolor":{"r":1,"g":1,"b":1},"alpha":1,"transmission":0,"transmissionIOR":0,"roughness":0,"metallic":0,"doubleSided":false}","1"
"black","Black","{"basecolor":{"r":0,"g":0,"b":0},"alpha":1,"transmission":0,"transmissionIOR":0,"roughness":0,"metallic":0,"doubleSided":false}","1"
```

**Component**

To ensure the configurability described above, a component must be created. The component script given below meets the specified requirements.

* There are three parameter: height, width and color
* The width is displayed as 'Width' and can be changed between two values. The default value is 50cm.
* The height is displayed as 'Height' but cannot be changed.
* Two materials are available, they are displayed under the label 'Color' and white is the default. The materials are referenced with the respective catalog prefix.
* The geometry of the component is also added. If there is no geometry available, it needs to be added manually after the import.
* The article number is automatically built depending on the configuration.

```json

{
    "id": "mycatalog:122",
    "parameters":
    [
        {
            "key": "width",
            "labels":
            {
                "en": "Width"
            },
            "type": "Integer",
            "unitType": "length",
            "defaultValue": "500",
            "validValues":
            [
                500,
                600
            ]
        },
        {
            "key": "height",
            "labels":
            {
                "en": "Height"
            },
            "type": "Integer",
            "unitType": "length",
            "defaultValue": "800",
            "validValues":
            [
                800
            ]
        },
        {
            "key": "color",
            "labels":
            {
                "en": "Color"
            },
            "type": "Material",
            "defaultValue": "mycatalog:white",
            "valueObjects":
            [
                {
                    "value": "mycatalog:white"
                },
                {
                    "value": "mycatalog:black",
                    "condition": "width != 600"
                }
            ]
        }
    ],
    "geometry":" AddCube(Vector3f{width,500,1000});SetObjSurface(color);",
    "articleNr": "articleNr= '122_'; if(color == 'mycatalog:black') { articleNr = articleNr | 'b_';} else { articleNr = articleNr | 'w_';} articleNr = articleNr | (width/10); if(width == 600) { articleNr = articleNr | '60'; } else { articleNr = articleNr | '50'; }"
}

```

**Product**

The created component must be referenced in a product. You can find the description how to import products [here](../rubens-admin/help/import-export.md#import-products).

The following properties are set for the product:

```
"item_id","configuration"
"122","{"componentId":"mycatalog:122"}"
```

With the data created, the product is now ready to be displayed in a Rubens configurator.
