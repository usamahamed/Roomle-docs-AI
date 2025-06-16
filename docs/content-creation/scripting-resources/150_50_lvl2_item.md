[Rubens Admin Products Documentation]: https://docs.roomle.com/web/datamanagement/products.html#create-or-archive-a-product

# Set Up Product Entries

You need to prepare an itemId in order to be able to use the configurable item embedded in your website or in the Multi Object Configurator.

## Setting Up Item Definition in Rubens Admin

To set up an item, go to your catalogue page Products section and click the plus icon to create a new product and select "Product configurator". See [Rubens Admin Products Documentation] for reference.

Choose a good id for the product (you can simply use the same as your componentId, which is recommended for most cases). Fill in the required fields and paste a configuration JSON, which will be:
````json
{
    "componentId": "catalogueId:componentId"
}
````

For example: `{"componentId": "isdt:chair6547"}`

And click save. You should be able now to generate thumbnails and save the product again. You can also request renderings, download 3D meshes and get integration links and embedding code.

## Choosing a Default Value for Pararameters

You can store a parameter value in the item definition. This will assign the values to the parameters on component load, overriding the default value defined in the component definition. If you do not define it, the default value defined by the component is used. To override, use the item definition like following:

````json
{
    "componentId": "catalogueId:componentId",
    "parameters": {
        "parameterKey": "parameterValue"
    }
}
````

Concrete example for our Chair 6547:

````json
{
    "componentId": "isdt:chair6547",
    "parameters": {
        "material_upholstery": "isdt:fabric_beige",
        "material_base": "isdt:surface_black"
    }
}
````
