# Convert your static product into a material configurator

## Material configurator no-code conversion within Rubens Admin

If you have a level 2 license or higher, you can easily convert one of the static items in your Rubens Admin catalogue into a material configurator with a no-code experience. If you have not yet created any products in your catalogue you can see [here](create-you-first-3d-viewer-and-ar/create-a-product-for-the-rubens-3d-viewer.md) how to do so.

### Trigger the conversion

To start the conversion to a level 2 material configurator, you need to open the product, which you want to convert from your catalogue in the product details view. Inside the product details view you will find the section "Convert to Level 2" which contains a button to start the conversion process. Make sure your catalogue is set to "Free" and is not hidden in the general settings of the catalogue. Otherwise the conversion won't work.&#x20;

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption><p>Convert to Level 2 section product details view in Rubens Admin.</p></figcaption></figure>

After clicking the Convert button, a new product in your catalogue is created. Therefore you need to assign either an individual product id (= external identifier) or auto-generate an id. Once this is done, you can start the conversion. While the conversion is running, you will see inside the corresponding section in the product details view an information that the conversion is in progress. You can leave the page at this point, as you will receive an email, once the conversion is done and your material configurator is ready to be used.

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption><p>Rubens Admin section while product conversion is in progress.</p></figcaption></figure>

### Check the result of the conversion

Once the conversion is done, you can check the result of the conversion, if you open the new product in the product details view in Rubens Admin. You will see parameters with materials next to your 3D object. Those are the ones which were created during the conversion and both the naming and the 3D layer depend on how the uploaded 3D model was setup. If you want to have additional layers of the model to be configurable, you need to change the 3D model accordingly. If you want to have the names of the parameters changed, you can change this within your model and reupload it, or you do so within Rubens Admin. How this is done is described further below. &#x20;

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption><p>Checking the result of the conversion process in Rubens Admin.</p></figcaption></figure>

### Adding further material options to the parameters

If you now want to add more material options to the generated parameters in your configurator, you have to navigate to the materials section within your catalogue in Rubens Admin. There you can find the materials which were created inside your catalogue. The materials options that are already visible in your configurator got tags assigned during the conversion process. Each tag stands for one parameter group inside your configurator. If you now want to add further materials from your catalogue to the configurator, you can do so via assigning the desired tags to the corresponding material.&#x20;

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption><p>The materials list in the Rubens Admin catalogue.</p></figcaption></figure>

To assign a material to a tag/parameter group, you need to open the material in the materials details view and within the section Tags you can assign one or more tags based on which parameter group you want to add the material to.&#x20;

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption><p>Assigning tags in the materials details view in Rubens Admin.</p></figcaption></figure>

After assigning the tags to the materials according to your requirements, you can see and use the materials already as additional options in the configurator.

<figure><img src="../.gitbook/assets/image (16).png" alt=""><figcaption><p>Additional material options available in the configurator after assigning them to tags.</p></figcaption></figure>

### Adapt generated parameter names via the component definition

The labels of the parameter names in your converted configurator depend on the names of the layers in your 3D model. If you want to change them after conversion, you can do so via the component definition. To do so, you have to navigate to the Components section within your catalogue in Rubens Admin.&#x20;

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption><p>Components overview in the Rubens Admin catalogue.</p></figcaption></figure>

To rename the material parameter in the configurator UI, you just need to adapt the component definition of the corresponding component. You can find a component, that has the same identifier as the product that was created during the conversion process in your component overview in the Rubens Admin catalogue. You can open that component and navigate to the section Component Definition. There you find the Component definition/Roomle script of the component. If you want to know more about Roomle Script and components, you can find it in the [section Content Creation in our documentation](broken-reference). Generally, we recommend not touching the component definition too much unless you are an experienced roomle script user as invalid changes can break your live configurator. For adapting the labels of your parameters, you find inside the component definition which is similar to a JSON document an attribute called `parameters`. Inside `parameters`, you have entries for all parameters in the configurator. There you can search and replace the label you want to change. Saving the changes updates the live configuration.

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption><p>Changing the labels of your parameters inside the component definition.</p></figcaption></figure>

After saving changes, the parameter labels in your configurator are updated accordingly.

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption><p>Updated parameter labels in the configurator.</p></figcaption></figure>



### Changing material labels in the materials view

If you also want to change the labels of the materials, you can do so by navigating to the materials view in your Rubens Admin catalogue. Select the material you want to update and change the material name in the corresponding input field.&#x20;

<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption><p>Adapting the material name label in the Rubens Admin materials details page.</p></figcaption></figure>

Saving the changes automatically updates the materials labels in the configurator UI as well.&#x20;

<figure><img src="../.gitbook/assets/image (20).png" alt=""><figcaption><p>The configurator after the material labels got updated.</p></figcaption></figure>

## Create product images for your configurator

If you want to create product images for your configurator, you can do so via opening the product in the product details view in Rubens Admin. Inside the Product Images section, you will find a Generate Images button that after clicking creates two perspective images (one of them is in HD) and a top image.&#x20;

<figure><img src="../.gitbook/assets/image (23).png" alt=""><figcaption><p>Generated product images inside the products details view.</p></figcaption></figure>

Clicking Save persists the changes and the images are then shown next to the product within your catalogue in Rubens Admin.&#x20;

<figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption><p>The Products view inside Rubens Admin catalogue which also now holds an image of your configurator.</p></figcaption></figure>
