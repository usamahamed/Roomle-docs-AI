# Create a product for the Rubens 3D Viewer

## Create a product in Rubens Admin

After signing up in the Rubens Admin platform, you can create a new product. You can do so by clicking the + button in the User interface.&#x20;

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>The product overview page in Rubens Admin shows all your products.</p></figcaption></figure>

After clicking the Create new product button, a new form is opened where you can enter data for your product.&#x20;

<figure><img src="../../.gitbook/assets/image (3) (1).png" alt=""><figcaption><p>An empty product form for creating a new product.</p></figcaption></figure>

The form contains the section basic information which holds the general data like the product name or an optional description of your product. You can also optionally assign a Manufacturer SKU (stock-keeping unit). It is required to provide an external identifier, which is used to globally identify your product. If you check the "Auto generated ID" checkbox, this identifier will be generated for you. Unlike all the other attributes of your product, the external identifier cannot be changed after initial creation. So if you want to have a more descriptive identifier for your product you can also insert an individual value there. Please consider that only lowercase or uppercase letters(a-z)(A-Z), numbers(0-9), dashes(-) & underscores(\_) are allowed to be used.

### Upload a 3D model

In the section 3D model you can upload the 3D data of your product. Make sure that the format of your 3D data is either fbx, obj, gltf or glb. After importing the 3D data of your product, the quality of the 3D data is evaluated against [our format requirements](../../rubens-admin/help/meshes.md). This process is called content analysis. You will immediately see the result of this process to give you an indication of the quality of the 3D data. If you see one of the aspects of the analysis (like triangles or dimensions) outside of the ideal ranges, we recommend adapting the 3D at those aspects accordingly and reuploading the model. After clicking the Save button either in the header or on the bottom of the form, the product is created. This process can take some time based on the size of the 3D model but you can safely leave the page as an email is sent to the user who initiated the creation once the item is created.

<figure><img src="../../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption><p>Result of the content analysis after importing the 3D data of a product. </p></figcaption></figure>

After the item creation is done, you will see that the product form of the created product in Rubens Admin contains additional sections Product images and Integration links. At this stage you can also reupload a new 3D model for your product inside the section 3D model if you want to update it. You will again see the result of content analysis for the updated 3D model after importing the data without having the product automatically updated. Saving the changes after the content analysis updates the 3D data of your product.

Inside the new section Product images, the images are rendered in high quality after your product is created. They are used if you use the product for example in the [Rubens Room Designer](../../rubens-products/rubens-room-designer/) or the [Rubens Configurator](../../rubens-products/rubens-configurator/). As this process can take some time, there might still be placeholder icons if you open the product immediately after initial creation. Once they are rendered, those placeholder icons are replaced with the actual images of the product. You can also delete and replace the rendered images with other images. &#x20;

### Integration links

The section Integration links contains links which are useful for integration in your webshop. The link in the field Rubens link is the link to your product in the Rubens 3D viewer. You will also find other links like the Top or Perspective image. Keep in mind that those links are read-only; which is why the textboxes are disabled. You can copy all links to your clipboard via the small icon in the textbox. In addition to the Embed code, you will find an integration example for your product and code sandboxes where you can try to integrate the Rubens 3D viewer in an exemplary webshop.&#x20;

<figure><img src="../../.gitbook/assets/image (3) (1) (1).png" alt=""><figcaption><p>New sections Product images and Integration links after creation of the product. </p></figcaption></figure>

## Open Rubens 3D Viewer

You can copy the link in the Rubens link field to your clipboard to open it in the next step. You will see your product in the Rubens 3D Viewer with the button to trigger the AR functionality which you can use both on your desktop or mobile device.&#x20;

<figure><img src="../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption><p>The uploaded 3D model in the Rubens 3D Viewer.</p></figcaption></figure>
