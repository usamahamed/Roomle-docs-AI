# Products

There are two different types of products:

* Static: upload a static 3D model to show it in the 3D viewer.
* Configurable: customizable, extendable products where you can change part properties individually.

> **NOTE:** Configurable products are not supported in Level 1.

In the `Products` overview list you can see all your products in one place. The overview can be displayed in a `List view` or a `Grid view`. To change the view, click on the icon in the upper right corner of the overview, next to the search textfield.

To find a product, you can search for the `Product name` or the `External identifier` of a product in the search textfield. The search is case-insensitive.

> **NOTE:** If you are not in a Level 1 plan your products are grouped by catalog and you have to select a catalog first.

## Create or archive a product

### Create a static product

To create a new product

1. Click on the red plus button inside the overview.
2. Depending on your level, you must now make the preselection for a `3D viewer`. Therefore click on `CHOOSE`. If you are in Level 1, this step is not relevant for you.
3. Upload your 3D content. In the section `3D model`, select the file using the button `CHOOSE FILE` or drag and drop the file and click `UPLOAD`.
4.  You will see a preview of the 3D model and two bars visualising the number of triangles and textures with an indication if this content is ready to use in Rubens Admin. You might see the following indications:

    * Content is `Perfect` will be indicated in green. The number of triangles and textures is fine for Roomle Rubens.
    * Content is `OK` for Rubens Admin. It `Could be better but still ok` and it is marked in yellow.
    * Content analysis numbers are `Too high`. `Please correct your data and upload again!` means the content has to be reviewed and should be fixed, because the numbers are too high and it should be below the max number inside the [complexity limit reference](../requirements-and-sample-products/3d-assets-requirements.md#detail-variants-and-complexity-limits). Otherwise the fast download times and smooth user experience are at risk.

    You can also see a detailed table which contains all information about the uploaded 3D content. This is helpful to evaluate the quality of the content before creating the product.
5. Click `SAVE` to save your product and autogenerate the `Product images` and the `Integration links`.

You will be redirected to the `Products` overview where the `Processing` icon indicates, that the model is still uploading. As long as the upload is not finished, you can only edit the `General` information. It may take more than one hour until the importing process is finished.

As soon as the upload is finished, you will be notified by an email. Click on the `Go to product` button in the email or select the product manually in the overview.

Go to [Embed a product](products.md#embed-a-product) to integrate your created product.

### Create a configurable product

> **NOTE:** Configurable products are available in Level 2 and higher. Your user account requires **Catalog Management Rights**. Log in on [Rubens Admin](https://admin.roomle.com), open **Catalog management** and click on the catalog you want to add configurable products to.

1.  Select `Components` in the top menu bar. Click on `Create component` (the red plus button) to create a new component.

    1.1 Fill in the `Component name`. Choose a natural key for the `External identifier`.

    1.2 Copy and paste an existing `Component definition` and `Save` your changes. If you do not have an existing component you can learn how to script in the [scripting course](../../content-creation/scripting-resources/#getting-started).
2.  Upload "External Meshes" in the [Import / Export section](import-export.md) to use them inside your scripts.

    2.1 If your component is using basic primitives exclusively, you can skip this point. To improve the loading performance we recommend using [External Meshes](../../content-creation/scripting-resources/plugins/roomle\_blender\_addon.md#roomle-script-output) over the [AddMesh](../../content-creation/blender-addon/#mesh-export-method) command with in-line parameters.

    2.2 Read through the [Blender Addon Documentation](../../content-creation/blender-addon/) for details on how to create an "External Mesh" from your 3d model.
3. [Create the materials](materials.md#create-a-material) referenced in the component script.
4.  Create the product based on the component script.

    4.1 Navigate to `Products` and click on `Create product` with the red plus button. On the dialog choose `Product configurator`.

    4.2 Fill in the `Product name`. Choose a natural key for the `External identifier` which makes urls more readable.

    4.3 Scroll down to `Product details` and fill in the required fields `Width`, `Height` and `Depth`. You should add approximate numbers here if you do not know the actual size of the product yet.

    4.4 Scroll down to the `Configuration definition` section. Select `SHOW SCRIPT`. Add a basic configuration definition using the root-component’s id. See the following configuration definition snippet:

    ```javascript
    {
        "componentId": "yourExternalComponentId"
    }
    ```

    Replace the `yourExternalComponentId` in the code snippet with the `External identifier` of your component. Navigate to `Components` and select a component from the list. Copy the `External identifier` and paste it to the sample configuration definition above. The basic configuration should look like the following:

    ```javascript
    {
        "componentId": "product_samples_level2:coffeemachine"
    }
    ```

    4.4 `Save` your changes

    4.5 Click on `SHOW CONFIGURATOR` in the `Configuration definition` section to open the configurator view.

    4.6 Refresh the page to load the configuration.

    4.7 You can generate the thumbnails for the product now.
5.  Configure the product

    There are two possible approaches how to configure your product:

    5.1 Configure the product in the configurator view. You can configure the product to set the parameters and save your changes. You can proof this by switching to "SHOW SCRIPT". All parameters are saved.

    ***

    > **NOTE:** Parameters set in the configuration will overwrite the default value set in the component.

    ***

    5.2 As an alternative approach you can write the parameter values manually in the script. This way default values of the component won’t be overwritten by the item which makes your component more flexible for future changes.

From here you can [embed the product](products.md#embed-a-product) on your own website.

If you need to create many configurable products using a lot of components, materials, textures and external geometry the [Import / Export](import-export.md) section might be helpful for you.

###  Linking External Demo Products

This feature lets you link external demo catalogs from different tenants to your catalog. By linking external catalogs, you can tag demo products with your catalog’s tags, enabling these products to be displayed in your room designer. This is particularly useful for scenarios where you must include sample products from other catalogs in your room designer environment.

***

> **NOTE:** This feature is available only for Enterprise tenants.

***

#### Steps to Link External Demo Products:
1. Navigate to the Products Page:

    - Access the `Products` section within your catalog.

2. Link an External Catalog:

    - Open the `Link external demo products` dropdown located at the top of the product list.
    - In the input field, add the ID of the external catalog you want to link.
    - Press `Enter` or click the `Add` button to link the catalog.

3. View Linked External Products:

    - Once the catalog is added, check the checkbox next to the catalog in the dropdown to display the external demo products.
    - These products will appear in a separate list underneath your existing products, marked with `External` label.

4. Tagging External Products:

    - Open one of the external demo products and navigate to the Tags section.
    - Add tags from your own catalog to the external product. This allows the tagged products to be used in your room designer.

### Unlinking a Catalog:

- To remove an external catalog, open the `Link external demo products` dropdown again.
- Click the unlink icon next to the catalog you wish to remove.
- Confirm the action in the popup to successfully unlink the catalog and remove its demo products from the list.

### Archive a product

If you do not need the product anymore, navigate to the `Products` page. Move the cursor to the product, you want to remove and click on the trash can icon that appears. The product will then no longer be displayed in Rubens Admin. Alternatively you can archive it on the product's details page. Click on the red trash can icon in the upper right corner. The product still remains in the cloud to maintain connections, therefore existing integrations are not affected by this.

### Product filtering

On the left side of the `Products` page you can see a filter section with the following controls:

1. **Search field:** You can enter text into this field to search for products with an id or label.
2. **Tags:** Click on the plus icon to reduce the list to products matching the tag.
3. **Types:** Filter according to the product type `3D viewer` (static products) or `Product configurator` (configurable products).
4. **Visibility:** Show only products in the list which match the visibility status. Valid values are: `All`, `Visible products`, `Non-visible products`

## Embed a product

In the `Products` overview, select the product you want to embed. Open the product detail page and navigate to the `Integration links` section.

This section contains various links to work with. The `Top image` and the `Perspective image` can be integrated via the link directly or you can open the links in a new browser window and copy the picture to use it.

To embed Roomle Rubens into your webshop, there is an `Embed code` that is the HTML code that you can simply copy and paste to your website. To give you a better idea of where and how to insert this code, there is a so-called sandbox. Click on the `GENERATE SANDBOX` button. As soon as the sandbox is created, the button changes its state to `Edit on SandBox`. Click on it again to open the sandbox. You can also see a complete `Integration example`, which is helpful if you want to deeply integrate the product into your webshop.

## Manage existing products

To edit an already existing product, select it in the `Products` overview and click on it.

**Update the 3D model**

To update the `3D model` of an existing product

* drag and drop the file and click `UPLOAD` or select the file with `CHOOSE FILE` to upload it under `3D model`.
  * Upload as single file in these extensions: .fbx, .obj, .glTF(.gltf + .glb) or .glTF-binary(.glb)
  * or packed as .zip or .tar.gz.
  * If you do not have 3D data files at hand, you can have a look at our [sample products](../requirements-and-sample-products/sample-products-and-files.md#id-3d-model-samples).
  * All files have to meet the [3D asset requirements](../requirements-and-sample-products/3d-assets-requirements.md#id-3d-assets-requirements).

It may take more than one hour until the importing process is finished. As soon as the upload is finished, you will be notified by an email. Click on the `Go to product` button in the email or select the product manually in the overview.

> **NOTE:** The integration links of your products will change by uploading a new 3D model!

**General**

Set your `Product name` and `Description` and click `SAVE` in the upper right corner to save your settings. `DISCARD` will discard your changes.

**Translations**

You can translate and save the name and description of your products in different languages. To do this, navigate to the details page of the product and select the appropriate language in the action bar on the left side above the navigation. Change the name and/or description and click `SAVE`.

**Get product images**

The perspective and top images of the product are autogenerated when it is created and the 3D model is defined.

When you configure a product, the images are not automatically regenerated. To get the images of the current configuration, click on `Generate images` and `Save` your changes.

It is also possible to upload your own pictures. To do this, delete the generated images by clicking on the trash can icon. After that, you can upload and use your own images as you wish. It is possible to generate images of the current configuration at any time. Note that all existing images, including your own, will then be overwritten.

To get the product images, go to `Integration links`, copy the links of the `Top image` or `Perspective image` and open it in a browser.

**Sort products**

The easiest way to organize your product list is by sorting it. When creating a product, you can set a numeric value in the left column under the navigation in the `Sort order` field. If you do not set a value, it will default to 0. For existing products, you can set the value in the `Products` overview list. Move your cursor over the value of the `Sort order` column in the row of the respective product. Click on the value or the appeared pencil icon, enter an integer and press Enter or click outside the input field to save the new value.

The rows will not automatically re-sort unless you have sorted the table by `Sort order`. To do so, click on the `Sort order` column name.

## Create variations

> **NOTE:** The features described below are not available in Level 1.

As soon as you have configurable products, the need to configure and store variations of individual products arises. To create a variation of a product, navigate to the `Products` overview list.

* Either navigate to the details page of the product of which you want to create a variation directly here. Scroll down to the `Variations` section and click the red plus button.
* Or click on the red plus button directly and then select `CHOOSE` in the `Variation` panel and select here the product from which you want to start.

Whichever way you choose, now configure the product in the loaded configurator, enter a `Product name` and `External identifier` and click `SAVE VARIATION`. You can repeat this process as many times as you like. Each saved variation is displayed in a list at the bottom of the page.

Variations created in this way are linked among themselves and are always displayed in the `Variations` section.

## Request renderings

> **NOTE:** The features described below are not available in Level 1.

You can request high quality renderings of your configurable products. To do so, navigate to the detailed view of the desired product. Scroll to the `Renderings` section and trigger renderings in four steps:

1. Select all the camera positions you want to render. The schematic figure will give you an idea from which perspective on the product the image will be created.
2. Select the desired quality, you can choose between 2K and 4K.
3. Press the \`REQUEST RENDERINGS´ button. A dialog will appear with the total number of requested renderings for final confirmation.
4. Press `START RENDERING`.

As soon as your renderings are ready, you will receive an email with a download link.

**Render variations of a product**

The description above is used to render an existing product. If you want to request renderings of a product variation, there are two ways to do this.

The first way is to create a variation of the product in the `Variations` section and request the renderings as described above. The variation will then be saved as a new product and can be retrieved at any time.

The second option is to load a page with the configurator in the `Renderings` section of the desired product via the `RENDER VARIATIONS` button. Now configure the product according to your wishes, select the desired rendering parameters and start the renderings via the `RENDER VARIATION` button. Again, a dialog will appear to confirm the request. In this way, no additional product is created.

> **NOTE:** The **RENDER VARIATION** button will only become active once you have made a change to the existing product.

## Export a 3D model

> **NOTE:** The features described below are not available in Level 1.

### Static product

You can export your static product as a 3D file. To do so, navigate to the detailed view of the desired product and scroll to the `Export` section.

Select the desired file format and click the `EXPORT` button. The following file types are supported: `blend`, `glb` and `usdz`. Once you click the export button, the file will be downloaded directly.

You can also download the source file you initially used by clicking on the `Export source file` button.

It is not possible to export if the product does not have previously uploaded 3D content or if the uploaded content is still in progress.

### Configurable product

You can export your configurable product as a 3D file. To do so, navigate to the detailed view of the desired product and scroll to the `Export` section.

Select the desired file format and click the `EXPORT` button. The following file types are supported: `blend`, `glb`, `abc`, `dxf`, `fbx`, `dae`, `x3d`, `ply`, `stl`, `usd`, `usdz` and `obj`. If you want to export materials in addition to geometry, we recommend `blend` or `glb`. `fbx` is not exporting materials.

Once the export is ready, you will receive an email with a download link.

If you want to export the product again in another format, simply click the `START NEW EXPORT` button and start from the top.

**Export variations of a product**

The above description is used to export an existing product. If you want to export a product variation, there are two ways to do this.

The first way is to create a variation of the product in the `Variations` section and export as described above. The variation will then be saved as a new product and can be retrieved at any time.

The second option is to load a page with the configurator in the `Export` section of the desired product via the `EXPORT VARIATION` button. Now configure the product according to your wishes, select the desired `File type` and start the export via the `EXPORT` button. In this way, no additional product is created.

> **NOTE:** The **EXPORT** button will only become active once you have made a change to the existing product.

## Static product converter

> **NOTE:** The features described below are not available in Level 1.

You can convert your static product to a configurable product. To do so, navigate to the detailed view of the desired product and scroll to the `Convert to Level 2` section.

Click the `Convert` button and you should see a prompt to enter the product ID of the generated configurable product. Alternatively, you can click on `Auto-generated ID` and an ID will be generated for you.

As soon as the conversion is finished, you will be notified via e-mail.

To open the product, click the `Go to product` button in the e-mail or select the product manually in the overview of Rubens Admin.

> **NOTE:** To enable this feature, the catalog should be set to free in the general catalog settings.

**Add a product embedded information**

There is a possibility to add a tooltip and an embedded URL for `Product`. This tooltip and the embedded Url can then be shown in Rubens as additional information which makes the user learn more about these products.

To add embedded information to a product

* Navigate to an already created product.
* Go to `Product Embedded information` and then click on `Add additional content` link.
* Enter the tooltip value plus an embedded URL and save the form.
* In order to add different languages to the created information:
  * Change the language from the top left section.
  * Click on the product information from the products information table.
  * Add the new information and then click save.

> **Note:** Ensure entered URLs allow iframe embedding by allowing CORS and checking X-Frame-Options. [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
