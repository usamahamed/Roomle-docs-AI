# Administration

## User management

***

> **NOTE:** Multiple users are not supported in Level 1, and the `User management` is only visible for users with the `Admin` role.

***

Within a tenant you can add users, remove them or change their rights. Navigate to the `User management` by clicking on the hamburger menu `≡` on the top left. A drawer menu shows up.

Under `User management` you will find information about all users that are assigned to the current tenant.

### Invite a new user

If you want to add a new user to your tenant,

* Click on `Create new user connection`.
* Enter the `Email` address of the user you want to invite.
* Assign the desired `Roles` by clicking on the red plus and selecting the respective role. You can assign as many roles as you like.
* To send the invitation, click on `SAVE`.

The user will now automatically receive an email in which he must confirm his address to create his account.

### Remove a user from a tenant

If you want to remove a user from a tenant, remove all roles assigned to him.

### User roles

There are different user roles in Rubens Admin. Here you can find an overview of the most importent rights.

|                                                              | Admin | Catalog Manager | Catalog Meta Manager | Statistics Data | Price Manager | Marketer |
| ------------------------------------------------------------ | :---: | :-------------: | :------------------: | :-------------: | :-----------: | :------: |
| **Tenant**                                                   |       |                 |                      |                 |               |          |
| View tenant analytics                                        |   x   |                 |                      |        x        |               |          |
| User management                                              |   x   |                 |                      |                 |               |          |
| Tenant payment                                               |   x   |                 |                      |                 |               |          |
| **Catalogs**                                                 |       |                 |                      |                 |               |          |
| View catalogs and their related content such as products     |   x   |        x        |           x          |                 |       x       |          |
| Create catalogs and release draft catalogs                   |   x   |        x        |                      |                 |               |          |
| Modify catalog information like name, description, etc.      |   x   |        x        |                      |                 |               |          |
| **Products**                                                 |       |                 |                      |                 |               |          |
| Create products                                              |   x   |        x        |                      |                 |               |     x    |
| Modify product information like name, description, etc.      |   x   |        x        |           x          |                 |               |     x    |
| Modify the product configuration script                      |   x   |        x        |                      |                 |               |          |
| **Components**                                               |       |                 |                      |                 |               |          |
| Create components and modify the component definition script |   x   |        x        |                      |                 |               |          |
| Modify component information like name, description, etc.    |   x   |        x        |           x          |                 |               |          |
| **Materials**                                                |       |                 |                      |                 |               |          |
| Create materials and modify the material shadings            |   x   |        x        |                      |                 |               |          |
| Modify material information like name, description, etc.     |   x   |        x        |           x          |                 |               |          |
| **Textures**                                                 |       |                 |                      |                 |               |          |
| Create or modify textures                                    |   x   |        x        |                      |                 |               |          |
| **Meshes**                                                   |       |                 |                      |                 |               |          |
| Create or modify meshes                                      |   x   |        x        |                      |                 |               |          |
| **Tags**                                                     |       |                 |                      |                 |               |          |
| Create tags                                                  |   x   |        x        |                      |                 |               |          |
| Modify tag information like name, description, etc.          |   x   |        x        |           x          |                 |               |          |
| **Rendering and 3D exports**                                 |       |                 |                      |                 |               |          |
| Request renderings and 3D exports in Rubens Admin            |   x   |                 |                      |                 |               |     x    |
| **Prices**                                                   |       |                 |                      |                 |               |          |
| Create or modify catalog prices                              |   x   |                 |                      |                 |       x       |          |

## User settings

Manage your personal settings like name, email address and password. When you are logged in, there is an avatar icon in the top right corner. Click on the icon, then on your email address to open the user settings of your account.

### Edit personal data

Under `User profile`, enter `First name` and `Last name` and click `SAVE` to save your changes. `DISCARD` will reset your changes.

In this section you can also find the information when your account was registered and when you logged in the last time.

### Change email address

Under `Change email address`, enter the new email address and your password and click `CHANGE`. You will receive an email when the email address was successfully changed.

### Change password

Under `Change password`, you have to enter the `Old password` and `New password` and click `SAVE PASSWORD`.

### Delete user account

If you want to delete your user account, navigate to the [Floorplanner user settings](https://www.roomle.com/app/settings) and click `DELETE ACCOUNT`. You will not be able to undo this action. Please be aware that access to Rubens Admin and Floorplanner will no longer be possible afterwards.

## Tenant settings

### Rubens settings

The Rubens configurator has several properties that can be set and change the appearance. This includes, for example, showing and hiding the AR button or setting an initial floor material. You can find the full list of properties [here](../../rubens-products/rubens-products-reference/interfaces/types.UiInitData.md).

You can change the Rubens configurator settings in your tenant account by following these steps:

1. Click on the hamburger menu `≡` on the top left. A drawer menu shows up. Now click on `Tenant settings`.
2. Inside the `Tenant settings` page, you will see a selected configurator ID. If the tenant account has multiple configurators, you can switch between them using a select box.
3. Now you have the chance to either use the adapt the Rubens settings in the editor or the advanced mode. From a functional perspective there is no difference between both modes but the editor gives you the chance to adapt the settings with a user interface including a description for the settings.

### Editor

You need to be `Admin` inside the tenant to be able to edit the feature flags menu in the editor. The editor consists of a list of all available settings for Rubens. Clicking an option from the list opens a form with a description of the flag and the corresponding input to adapt the settings. Via the preview dropdown on top of the options list, you can see how the set flags influence the configurator. You can search for items in your catalogues and use those for the preview.

If the set option meets your expectations you can save the settings. This automatically sets the option for all your configurators globally on the `configuratorId` level! So you should be cautious and always use the preview before actually saving the settings.

If you updated a setting and saved it, the corresponding flag is highlighted green in the list. If it is indicated as grey, this means that the default for it is set.

You can filter and search for specific flags in the component on the left side of the screen.

### Special cases inside the Editor

`customTutorials`: You can create entries for `customTutorials` via the UI inside the editor. To create a new entry, select the `language` from the dropdown for which you want to create a custom tutorials entry and click `Add custom tutorial`. Inside this new form, you can paste in a `link`, `label` and `description`. For links, we support embed links from supademo and youtube. The label entry is used inside the bubble of the tutorials overlay in the configurator. The `description` is optional and not displayed in the configurator UI. Via the `platform` parameter, you can define if the tutorial is a `mobile` or a `desktop` tutorial and hence will only be shown on the corresponding devices. Dropdown `scope` defines if the content is displayed as a configurator tutorial or as a room designer tutorial. After saving the changes, the tutorials will be displayed in the configurator for the configuratorId, provided you activated `helpcenter` parameter for the corresponding scope to true. You can check that in the editor when selecting the entry `helpcenter`.

### Advanced mode

1. Type the settings in the text area on the page. The input has to be valid JSON, see our examples [here](administration.md#rubens-settings-examples). To see how it will look, there is a `RELOAD PREVIEW` button to reload the displayed configurator with the new settings.
2. As soon as you are happy with the result, click the SAVE button on the top to publish the changes.

### Rubens settings examples

Find a list of examples of the Rubens settings here to understand how they need to be set. You can simply copy and paste the code into the Rubens Admin UI.

#### Enable emails

Data type: boolean

If this is set to true the `Save draft` will be done by sending an email.

```
{
    "emails": true
} 
```

#### Show or hide buttons

Data type: object

Show or hide different buttons like the AR or Export 3D button here. The full list of buttons can be found [here](../../rubens-products/rubens-products-reference/interfaces/types.UiInitData.md#buttons).

```
{
    "buttons": {
        "ar": false,
        "export3d": true
    }
} 
```

#### Set the zoom distance

Data type: number

Set the distance to which the user can zoom in centimeters. The default is the object size divided by 10 or 10 cm.

```
{
    "zoomDistance": 3
} 
```

#### Set the initial floor material

Data type: string

Set the floor material which is used when loading the configurator.

```
{
    "initialFloorMaterial": "roomle_floor:DresdenEiche"
} 
```

#### Set the skin

Data type: string

Set the primary color for the Rubens configurator.

```
{
    "skin": {
        "primary-color": "blue"
    }
} 
```

#### Override translations to change labels for some or all languages

Override translations to change labels for some or all languages. The full list of labels can be found [here](broken-reference).

```
{
    "translations": {
        "en": {
            "params": {
                "request-product": "Add to cart"
            }
        }
    }
} 
```

#### Setting multiple properties at once

```
{
    "emails": true,
    "buttons": {
        "ar": false,
        "export3d": true
    },
    "zoomDistance": 3,
    "initialFloorMaterial": "roomle_floor:DresdenEiche"
} 
```

### Webhook

You have the possibility to define a webhook URL in Rubens Admin to respond to events.

Enter the URL into the `Webhook URL` field under `Email webhook` and save. Find more information about webhooks [here](../../rest-api/rest-api-reference/webhook.md) and an example [here](https://gitlab.com/roomle/showcases/webhooks).

### Price Service

In the price services section inside the tenant settings of Rubens Admin it is possible to reference an external price API, provided you have implemented such a service on your side. You can only create such a reference if you have Super Admin role for this tenant.

Therefore you have to create a new entry in the corresponding interface. The country code field defines for which countries the prices should be fetched. Via the selection Applies to catalogs you can choose for which of the catalogs in your tenant the price service should be used. You can select more than one catalog there. In the settings field, an entry in JSON format is required which includes the URL to your custom price service.

Once you created this price service entry, all the price requests inside the Rubens configurator for the affected catalogs and countries are then forwarded to this price service. If the response of the price service is formatted correctly, Rubens will be able to display those prices inside the configurators correctly.

If you do not have an individual price service set up there, the default Roomle price API is used for all price requests.

## Analytics

Under `Analytics` you will find information about the use of the embedded configurators. To get there, click on the hamburger menu `≡` on the top left. A drawer menu shows up. Now click on `Analytics`.

### Task history

Under `Task history` you can see the renderings, 3D exports and 3D imports that were requested per tenant in Rubens Admin. You can use the filters above the table to filter by the following:

* `Type`: filter by task type like renderings, 3D exports and 3D imports.
* `Catalog`: filter by the catalog to see only the jobs that happened for products in this catalog. By default no catalog is selected and only catalogs that also provide a result are available for selection.
* `Period`: Filter by jobs that happened per selected month. By default the current month is selected.

In the table, you can see the task details like the product, the creation date, the user that requested the task and if the task was successful or failed. By clicking on `download` a finished rendering or 3D export can be downloaded again. In case of a 3D import there is a `go to product` link to navigate to the product to see the result. In case of a product variation that has not been saved, this link will take you to the product the variation was created from.

### Saved configurations

Under `Saved configurations` you can see which configurations are saved internally when specific actions are triggered. This includes AR, 3D export, save draft and requesting a product. The information about it is saved and can be exported here as a `CSV` or `JSON`. These files do not contain user email addresses. If you are interested in them use the `Save draft` analytics.

The files can be exported for a selected `Period` and `Configurator ID` and contain the following information:

* `link` the actual link to the Rubens configurator in which the product is loaded according to the saved configurations.
* `thumbnail` the preview image of the saved configuration of the product.
* `creationDate` the time at which the configuration was saved.
* `action` the action that the user performed in the Rubens UI.
* `count` the number of the same configuration if the data is already aggregated. If the `aggregationLevel` is `real time` this value is always `1`.
* `aggregationLevel` the aggregation level of the stored data. Possible values are `real time`, `daily` and `monthly`.
* `partlist` contains an aggregated view of the current components (and subcomponents) according to the saved configurations. See more about partlist [here](../../content-creation/scripting-resources/model/configdocu.md#partlist)

### Saved user drafts

Under `Saved user drafts` you can see which configurations are saved directly by users. Once a user uses the `Save draft` functionality in Rubens, the information about it is saved and can be exported here as a `CSV` or `JSON`.

Note that all save draft events will be counted, even if the configuration is not sent via email. In this case the `userEmail` column will be empty.

The files can be exported for a selected `Period` and `Configurator ID` and contain the following information:

* `link` the actual link to the Rubens configurator in which the product is loaded according to the saved configurations.
* `thumbnail` the preview image of the saved configuration of the product.
* `creationDate` the time at which the configuration was saved.
* `action` the action that the user performed in the Rubens UI. In the case of saved configurations this is always `Save Draft`. The corresponding number in the JSON file is `302`.
* `count` the number of the same configuration if the data is already aggregated. If the `aggregationLevel` is `real time` this value is always `1`.
* `aggregationLevel` the aggregation level of the stored data. Possible values are `real time`, `daily` and `monthly`.
* `userEmail` the email that was specified.
* `partlist` contains an aggregated view of the current components (and subcomponents) according to the saved configurations. See more about partlist [here](../../content-creation/scripting-resources/model/configdocu.md#partlist)

### Views

Under `Views` you can see which configurations are loaded by users. The information about the views is saved and can be exported here as a `CSV` or `JSON`.

The files can be exported for a selected `Period` and `Configurator ID` and contain the following information:

* `link` the actual link to the Rubens configurator in which the product is loaded according to the view.
* `thumbnail` the preview image of the product.
* `creationDate` the time at which the configuration was viewed.
* `action` the action that the user performed in the Rubens UI. In the case of views this is always `View` in the CSV. The corresponding number in the JSON file is `1`.
* `count` the number of the same configuration if the data is already aggregated. If the `aggregationLevel` is `real time` this value is always `1`.
* `aggregationLevel` the aggregation level of the stored data. Possible values are `real time`, `daily` and `monthly`.

### 3D export

Under `3D export` you can see which 3D exports were created by users. The information about the 3D exports is saved and can be exported here as a `CSV` or `JSON`.

The files can be exported for a selected `Period`, `Source`, and `Configurator ID` - If the `Source` is `All`, the file will contain the tasks that happened in Rubens Admin and the configurator for all available configurator IDs. The `Configurator ID` is disabled in this case.\
\- If the `Source` is `Rubens Admin`, the file will contain all tasks that were requested in Rubens Admin. The `Configurator ID` is disabled in this case.\
\- If the `Source` is `Configurator`, the file will contain all the tasks that were requested in the configurator for the selected configurator ID. In this case, you have to select the `Configurator ID`.

and result contain the following information:

* `link` the actual link to the Rubens configurator in which the product is loaded according to the 3D export.
* `thumbnail` the preview image of the product.
* `creationDate` the time at which the 3D export was requested.
* `action` the action that the user performed in the Rubens UI. In the case of a 3D export this is always `3D export` in the CSV. The corresponding number in the JSON file is `4`.
* `count` the number of the same configuration if the data is already aggregated. If the `aggregationLevel` is `real time` this value is always `1`.
* `aggregationLevel` the aggregation level of the stored data. Possible values are `real time`, `daily` and `monthly`.

### Renderings

Under `Renderings` you can see which renderings were created by users in Rubens Admin. The information about the renderings is saved and can be exported here as a `CSV` or `JSON`.

The files can be exported for a selected `Period` and contain the following information:

* `link` the actual link to the Rubens configurator in which the product is loaded according to the renderings.
* `thumbnail` the preview image of the product.
* `creationDate` the time at which the renderings were requested.
* `action` the action that the user performed in the Rubens UI. In the case of renderings this is always `renderings` in the CSV. The corresponding number in the JSON file is `5`.
* `count` the number of the same configuration if the data is already aggregated. If the `aggregationLevel` is `real time` this value is always `1`.
* `aggregationLevel` the aggregation level of the stored data. Possible values are `real time`, `daily` and `monthly`.

### Roomle Analytics to Google Data Studio

Our overall goal is to provide an easy and highly customizable way to work with the generated data form the configurator. We also don’t want you to be forced to use a particular tool or a complicated workaround. If you, for example, don’t like Google Data Studio, feel free to use your preferred Data visualisation tool. Each step of the process can be adapted and changed to your wishes and needs!

This chart should give you an idea of the overall process:

<figure><img src="https://a.storyblok.com/f/56431/1084x1096/a5c8f70cbe/rubens_configuator_analytics_process.png/m/1200x0/filters:quality(90)" alt="Rubens Configurator - Deep dive into the Analytics Process"><figcaption></figcaption></figure>

The outlined boxes contain the steps that need to be performed. The ones on the right side are those provided by Roomle. Lets talk about the individual steps:

#### **Export Saved\_Configurations File**

The first step is to get the saved data. Therefore enter the Rubens Admin and use the “Analytics” Button on the right side on the welcome page.

<figure><img src="https://a.storyblok.com/f/56431/2436x1111/65c0ba95fa/rubens_admin_platform_click_on_analytics.png/m/1200x0/filters:quality(90)" alt="Click on Analytics"><figcaption></figcaption></figure>

There you will find different sets of data. We will use the “Saved configurations”, as there are the most relevant informations stored for a general evaluation. For the next step we need the CSV, so please choose the corresponding button.

<figure><img src="https://a.storyblok.com/f/56431/2436x1098/c47acf15a1/export_the_csv.png/m/1200x0/filters:quality(90)" alt="Click on Analytics"><figcaption></figcaption></figure>

You can see that this can be done for each month. Just use the dropdown to navigate.\
In the file you will find some general information, like the creation date or a picture of the thumbnail as well as the partlist. This partlist contains all data regarding the configurated product in form of a JSON file. If you want to know more about the pat list JSON file, it is recommended reading the corresponding section later in this documentation.\
\
The next step is to extract those informations from the part list and make it accessible for other software.

#### **Run Parser**

The purpose of the parser is to provide all the information from the “Saved configurations” file in such a way that data visualization or analytics tools can easy work with it. The java file serves meets exactly this goal and provides you with four different CSV files. If you want to know more about the structure of those, take a look at the “Data structure” section.\
\
To use it, please download the latest version from [github.com/Roomle/analytics-converter](https://github.com/Roomle/analytics-converter).\
You can either just download the [analytics-converter.jar](https://github.com/Roomle/analytics-converter/blob/main/bin/analytics-converter.jar) or you can get the whole source code as well. By default the jar file can be found in the “bin” folder. Please make sure, that you have JAVA installed on you computer.\
To execute the program, you have to use the terminal. After you have opened the terminal, you have to set it to the right path. Therefore use “cd ” + path, where path is the location of the folder where the analytics-converter.jar is saved.\
\
Then enter _java -jar analytics-converter.jar {source} {destination}_

The command takes two input parameters:

* First parameter need to contain the source path. So the path were you saved your “Saved configurations” CSV file.
* The second one should be the destination path. In other words: Were your created files should be saved. If nothing is entered here, the program will use the same path as for the source.

#### **Connect Files to visualisation tool**

In the last step you need to hand those files over to your analytics tool. We chose Google Data Studio, as it is quit easy to use and highly customizable:

Google Data Studio is a free, open source software which can be used with a google account. First enter Google Data Studio. You can follow this link: [Google Data Studio](https://datastudio.google.com/u/0/)\
\
The next step is to create a new report, or use our provided example report which can be found here: [Testreport](https://datastudio.google.com/u/0/reporting/94df1bce-9b98-49da-978f-32a640eef6f8/page/IGpqC)\
\
You can use this report as a template, by clicking on the three dots on the right side and select the option to copy the report. Now can upload your own data files or just play around with the given file. The data can be updated at any time. Just follow those steps below.\
\
In the toolbar you find a menu “resources” and here you can manage all connected data sources. Navigate your way to add a new set of data. Now you can choose from different data import options. Here you need to click on “File-upload”. This Google Data Studio connector is used to upload CSV files to your data studio.\
\
You will enter a new page where you can see the already connected data pools on the right side. Those pools contain the files which are used for the sample report. Click on the matching name and upload your own file per drag and drop to a data pool. The big advantage is that the logic of the report is saved in those data pools not the file it self. You can delete the sample data file, if you want.\
\
In the corner you see a small “add”- button. This saves all your changes and your report will display your own data.\
\
Please note, that those manual is designed to guide you with your first steps in Google Data Studio. There is a lot more it can do and can everything be optimized according to your needs and wishes. Feel free to experiment with the different tools and customize your report.

Further tutorials and deeper insides for Google Data Studio can be found online.

#### **Database structure**

For our reports we used the following database structure, which you will also finde in the generated files:\
\
**Configuration.csv** (Basically the database CSV)

<figure><img src="https://a.storyblok.com/f/56431/2182x802/187cd47ed7/configurator_csv_1.png/m/1200x0/filters:quality(90)" alt="Configurator CSV Overview"><figcaption></figcaption></figure>

<figure><img src="https://a.storyblok.com/f/56431/2174x678/9237a406ed/configurator_csv_2.png/m/1200x0/filters:quality(90)" alt="Configurator CSV Overview"><figcaption></figcaption></figure>

Not every column may be relevant to you, but this structure ensures that no information is lost. As discussed earlier, you can adapted those tables to your individual needs.

You can see that each parameter, like “hight”, is linked to its component and one step further, to the corresponding configuration. (as well as the orignpart of corse)\
This structure allows you to decide how granular you want your analytics to be.

## Prices and billing

1. There are two easy ways to access your billing information:
   * Open the hamburger menu `≡` in the top left corner. Click on `Pricing & billing` to open the pricing and billing details page.
   * Click on the user profile in the top right corner to open a dropdown menu. The section `PRICING & BILLING` shows your current account status. Click on the `more info` button to open the pricing and billing details page.
2. Choose one of the provided packages and click `UPGRADE` to add the billing information. If you already purchased a package, you can see a panel with your `Billing information` on the price and billing page. You can easily update the information by clicking on the `change billing information`.
3. A form with your current billing information is shown. Update the information and click on `SAVE`. Use the `GO TO STRIPE` button to verify the changes will be printed correctly on your next invoice.

## Setting up custom tutorials in the configurator URL

### Step 1: Activating the Tutorials Overlay

Once you're inside the Room Designer, ensure that the URL parameter `helpcenter` setting is enabled. This setting enables the Tutorials Overlay feature.

It is possible to enable the helpcenter both for either configurator or room designer separately.

For configurator you need to set `helpcenter.configurator=true`. For room designer you have to set `helpcenter.roomdesigner=true`.

Per default, you will see the standard tutorials provided by roomle.

### Step 2: Sharing Custom Tutorials

#### Desktop Tutorials

If you want to upload custom tutorials for the desktop version, follow these steps:

Construct the URL with the custom tutorials parameters:

> https://roomle.com/t/cp/?\<YOUR\_PARAMETERS\_HERE>

Replace `<YOUR_PARAMETERS_HERE>` with the custom tutorials parameters. The parameter `customTutorials` should contain an array of values with the following structure. An array is a table-like structure where each dataset corresponds to one line in the table.

In those lines you can define:

The link which refers to the tutorial content

`label.en` which corresponds to the english label displayed in the bubble of the tutorials overlay

`label.de` which corresponds to the german label displayed in the bubble of the tutorials overlay

`desc.en` which corresponds to the English description of the video (optional as it is not visible in the configurator UI)

`desc.de` which corresponds to the German description of the video (optional as it is not visible in the configurator UI)

`scope` defines if the content should be shown in room designer (assigning `roomdesigner`) or configurator (assigning `configurator`)

`platform` defines if the content to be displayed is mobile (assigning `mobile`) or desktop content (assigning `desktop`)

### Step 3: Formatting the URL

When constructing the URL, ensure it follows this format:

> \&customTutorials\[0].link=`<VIDEO_URL>`\&customTutorials\[0].label.de=`<VIDEO_TITLE_GERMAN>`\&customTutorials\[0].label.en=`<VIDEO_TITLE_ENGLISH>`\&customTutorials\[0].desc.de=`<VIDEO_DESCRIPTION_GERMAN>`\&customTutorials\[0].desc.en=`<VIDEO_DESCRIPTION_ENGLISH>`\&customTutorials\[0].scope=room-designer

Replace `<VIDEO_URL>`, `<VIDEO_TITLE_GERMAN>`, `<VIDEO_TITLE_ENGLISH>`, `<VIDEO_DESCRIPTION_GERMAN>`, and `<VIDEO_DESCRIPTION_ENGLISH>` with your video's URL, titles, and descriptions in both German and English.

If you want to add further content, just add new entries increasing the value inside the brackets.

> \&customTutorials\[1].link=`<VIDEO_URL>`\&customTutorials\[1].label.de=`<VIDEO_TITLE_GERMAN>`\&customTutorials\[1].label.en=`<VIDEO_TITLE_ENGLISH>`\&customTutorials\[1].desc.de=`<VIDEO_DESCRIPTION_GERMAN>`\&customTutorials\[1].desc.en=`<VIDEO_DESCRIPTION_ENGLISH>`\&customTutorials\[1].scope=room-designer

#### Step 4: Viewing Custom Tutorials

Once the URL with the custom tutorials parameters is constructed in the URL, the Room Designer will display bubbles in the tutorials overlay for each uploaded tutorial. Clicking on a bubble will display the corresponding tutorial video within the Room Designer interface.

#### Step 5: Fallback Option

If you have activated the tutorials overlay feature but haven't uploaded any custom tutorials, the Room Designer will display existing tutorial content as a fallback.

### Setting up custom tutorials in Rubens Admin

You can also set the individual tutorial content for all the configurators at once without having to construct each configurator URL. This also brings the advantage that your configurator links are smaller than if you construct the custom tutorial content in the URL.

To do so, navigate to the tenant settings in Rubens Admin. In the Rubens settings JSON you can define global settings for all configurators of a configurationId. So if you have the same tutorial content for your configurator, it is the best option to setup the content for your tutorials there directly.

The procedure is similar to if you set it up in the URL. You have the same parameters available - the only difference is, that you have to bring the format into JSON format. PS: If you are not so familiar with those format, you can ask ChatGPT to convert the URL parameter structure to JSON format for. That works quite well.

```json
{
  "customTutorials": [
    {
      "link": "<VIDEO_URL>",
      "label": {
        "de": "<VIDEO_TITLE_GERMAN>",
        "en": "<VIDEO_TITLE_ENGLISH>"
      },
      "desc": {
        "de": "<VIDEO_DESCRIPTION_GERMAN>",
        "en": "<VIDEO_DESCRIPTION_ENGLISH>"
      },
      "scope": "room-designer"
    },
    {
      "link": "<VIDEO_URL>",
      "label": {
        "de": "<VIDEO_TITLE_GERMAN>",
        "en": "<VIDEO_TITLE_ENGLISH>"
      },
      "desc": {
        "de": "<VIDEO_DESCRIPTION_GERMAN>",
        "en": "<VIDEO_DESCRIPTION_ENGLISH>"
      },
      "scope": "room-designer"
    }
  ]
}
```

Replace `<VIDEO_URL>`, `<VIDEO_TITLE_GERMAN>`, `<VIDEO_TITLE_ENGLISH>`, `<VIDEO_DESCRIPTION_GERMAN>`, and `<VIDEO_DESCRIPTION_ENGLISH>` with your actual video URLs, titles, and descriptions in both German and English.

Once you are done editing the Rubens settings you can save your editing. All the configurators of the configuratorId should then have your individual content displayed in the rubens tutorials overlay without having to set them explicitly in the URL provided you enabled the rubens tutorials for your configurators.

That's it! You're now ready to customize your Rubens configurator/Room Designer experience with your own tutorials. If you encounter any issues or have questions, feel free to reach out to our service desk for assistance.
