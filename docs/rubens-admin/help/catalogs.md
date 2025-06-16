# Catalogs

Catalogs are used in Rubens Admin to organize data. Elements are assigned to a catalog, those are products, components, meshes and materials.

Click on `Catalog management` on the dashboard to get to the overview list of your catalogs. The overview can be displayed in a `List view` or a `Grid view`. To find a catalog, you can search for the `Name` of a catalog or the `Catalog ID` in the search textfield. The search is case-insensitive.

## Create or archive a catalog

### Create a catalog

To create a new catalog,

* click on the red plus button inside the `Catalogs` overview.
* Under `General`, set a `Catalog name` and a `Catalog ID`. You can also check the `Auto generated ID` checkbox, then the `Catalog ID` will be automatically generated. The ID is not editable once the catalog was created. If you want to, you can also set a `Description`.
* Check the `Available for public` checkbox if you want to allow any user of the Rubens Configurator to view the products of this catalog. To make the catalog available in the `Roomle iOS App` or `Floorplanner (Web)`, users must be given explicit permission:
  * The catalog can be assigned directly to a user.
  * As an alternative a catalog can be made visible via the tenant. The user needs the rights in the tenant to see catalogs which are not public. Both of this permissions can currently only be given by the Roomle support team. In Rubens Admin a catalog is only visible to the owner of a catalog.
* Check the `Hidden` checkbox if you do not want to display the catalog and the contained products temporarily or for a longer period of time. Embedded configurators will then no longer display the product.
* Check the `Free` checkbox to provide the catalog to all users for free. If you deselect this, only users who purchased the catalog have access to it. This feature is rarely used at the moment so it is recommended to activate `Free`, otherwise embedded configurators will not display the product.
* Check the `Publicly orderable` checkbox if you want imported product prices to be displayed in Rubens.

Under the `General` tab within a catalog, you can handle different metainformation, like `Catalog images` and `Tags`.

You can define three different images for a catalog:

* the `Catalog cover`,
* the `Brand logo` and
* the `Feature image`.

If you want to delete the uploaded image, simply click on the trash can icon beneath it. Click `SAVE` to save your changes.

### Archive a catalog

If you do not need a catalog anymore, you can remove it from the catalog list. Hover over the catalog you want to remove and click on the trash icon.

Alternatively you can archive it on the catalogs's details page. Click on the red trash can icon in the upper right corner. The catalog still remains in our cloud to maintain connections.

If you are not sure if you need the catalog again later, it is possible to just check the `Hidden` checkbox in the `General` section at the top of the page. Therefore the catalog is hidden in configurators but it remains in the Rubens Admin `Catalogs` list and can be maintained.

### Catalogs filtering

On the left side of the `Catalogs` page you can see a filter section with the following controls:

1. **Search field:** You can enter text into this field to search for catalogs with an id or label.
2. **Visibility:** Show only catalogs in the list which match the hidden status. Valid values are: `All`, `Visible catalogs`, `Non-visible catalogs`
3. **Type:** Distinguish here between live and draft catalogs. Valid values are: `All`, `Live`, `Draft`

## Manage existing catalogs

**Translations**

You can translate and save the name and description of your catalogs in different languages. To do this, navigate to the details page of the catalog and select the appropriate language in the action bar on the left side above the navigation. Change the name and/or description and click `SAVE`.

## Tags

Products, materials and components can be tagged to make them easier to find. The tag tree provides an overview of all created tags within a catalog. If a tag is not assigned to any other tag it will be listed under `Stand-alone tags`. Tags can also be assigned to stand-alone tags and the respective tag tree is shown when a stand-alone tag is selected. It is not possible to make changes in this tree. More information about tags can be found [here](tags.md).

## Draft catalogs

There is a possibility to create so-called draft catalogs. A draft catalog is always assigned to a live catalog. This gives you the possibility to work in a test environment and to create content without endangering live data. When the work on the draft catalog is finished, the data can either be merged into the live catalog or the draft can be deleted. To keep track of the current state of the draft catalog there is the `Status` that needs to be set manually. There are three different values for this:

* `In progress` Every created draft catalog is automatically `In progress`. This status means that the catalog is currently being worked on or still needs to be worked on.
* `Ready for review` As soon as a draft catalog is finished it can be released for review. In the status `Ready for review` the catalog is no longer editable. To make further changes, the status must be set back to `In progress`.
* `Ready to publish` Once the catalog has been reviewed and approved, it can be released for publishing. Only then can the catalog be published. Automatic publishing is not supported if multiple drafts per live catalog exist. Also in this status the catalog is not editable.

You can change from any status to any other status, there are no restrictions. Nevertheless, the procedure shown in the following diagram is recommended.

For the already published drafts, you cannot navigate to the published catalog anymore but you can access the release logs by clicking on the `open logs` link.

![draft\_catalog\_process.png](<../images/draft\_catalog\_process (1).png>)

### Create a draft catalog

A draft catalog can be created manually by navigating to the catalog's details page. In the left column under the navigation you can see the `Status` of the catalog and thus whether it is a live catalog or already a draft.

In a live catalog, all related drafts are listed on the details page under the section `Draft catalogs`. A click on `Create new draft catalog` will open a dialog that contains two options for creating a draft.

1. `No data source` means creating an empty draft catalog without importing any external data source. This will create an empty draft assigned to the live catalog and you will be directed there automatically. You can now start working on the draft of the catalog.
2. `IDM data file` will create the new draft catalog automatically based on an IDM file. The IDM data format (Integriertes Datenmodell) is an XML schema format standardized by the [Daten Competence Center](https://www.dcc-moebel.org). Find more information about the file preparation [here](catalogs.md#idm-in-rubens-admin). The import may take some time. You can see the import status in the `Import history` section in the live catalog. When it is finished you can adjust the imported data before merging it into the live catalog.
   * Depending on the schema type, select `idmw`, `idmp` or `idmk` in the Import section.
   * Upload the prepared ZIP file by drag and drop or with the `CHOOSE FILE` button.
   * When the data was uploaded successfully,you will see the new entry inside the drafts table. There is now a new draft catalog with the same ID as that of the live catalog, with a 'draft\<x>' appended ('x' is a sequential number that is incremented when you import data more often). The draft catalog cannot be deleted as long as the import process is not completed. This is indicated by the `Processing` icon in the catalog overview list.
3. `TC data file` will create the new draft catalog automatically based on a TC file. The TC data format (TechConfigurator) is a transfer format in JSON containing modules and attributes. The import may take some time. You can see the import status in the `Import history` section in the live catalog.
   * From the `Draft catalogs` section click on the link and click `Create new draft catalog`.
   * Select the `TC` option and upload the prepared ZIP file by drag and drop or with the `CHOOSE FILE` button.
   * Then you will see the new entry inside the drafts table. You can navigate to the newly created draft to track the current status of the draft. The draft catalog cannot be deleted as long as the import process is not completed. This is indicated by the `Processing` icon in the catalog overview list.
4. `IDM data file` will create the new draft catalog automatically based on an IDM file. The IDM data format (Integriertes Datenmodell) is an XML schema format standardized by the [Daten Competence Center](https://www.dcc-moebel.org). Find more information about the file preparation [here](catalogs.md#idm-in-rubens-admin). The import may take some time. You can see the import status in the `Import history` section in the live catalog. When it is finished you can adjust the imported data before merging it into the live catalog.
   * Depending on the schema type, select `idmw` or `idmp` in the Import section.
   * Upload the prepared ZIP file by drag and drop or with the `CHOOSE FILE` button.
   * When the data was uploaded successfully,you will see the new entry inside the drafts table. There is now a new draft catalog with the same ID as that of the live catalog, with a 'draft\<x>' appended ('x' is a sequential number that is incremented when you import data more often). The draft catalog cannot be deleted as long as the import process is not completed. This is indicated by the `Processing` icon in the catalog overview list.
5. `TC data file` will create the new draft catalog automatically based on a TC file. The TC data format (TechConfigurator) is a transfer format in JSON containing modules and attributes. The import may take some time. You can see the import status in the `Import history` section in the live catalog. - From the `Draft catalogs` section click on the link and click `Create new draft catalog`. - Select the `TC` option and upload the prepared ZIP file by drag and drop or with the `CHOOSE FILE` button. - Then you will see the new entry inside the drafts table. You can navigate to the newly created draft to track the current status of the draft. The draft catalog cannot be deleted as long as the import process is not completed. This is indicated by the `Processing` icon in the catalog overview list.

***

> **Note:** If you are not sure which format you need, you can look it up in the XML file. The main element `T_NEW_CATALOG` has an attribute `FORMAT`, which contains the corresponding information. This attribute is available from IDMP 3.0 and IDMW 2.0 and higher.

***

***

> **Note:** The general settings of the live catalog will be copied to the draft catalog.

***

### Unlock the live catalog

After you create a draft of the live catalog there are two cases regarding editing the live catalog:

* If the live catalog has only one draft, the live catalog will be locked until the draft is either published or deleted.
* If the live catalog has more than one draft, the live catalog will be unlocked by default.

In the first case, if you want to manually unlock the live catalog for editing, you can simply click the unlock icon on the live catalog detail page next to the archive icon. After that, all changes must be merged manually.

### Publish a draft catalog

If the live catalog has one draft then you can automatically merge the elements from the draft catalog into the live catalog.

After you are done with your changes, choose the appropriate merge policy per element and click the `Publish` button.

There are three different merge policies:

* `Merge` All elements of the corresponding type (materials, products, etc.) are transferred. Elements that are not in the draft catalog stay in the live catalog.
* `Replace` All elements of the corresponding type (materials, products, etc.) are exchanged in the live catalog with those in the draft catalog. Elements that have not been in the draft, but exist in the live, are removed.
* `Ignore` The elements of the corresponding type (materials, products, etc.) are not transferred to the live catalog and are no longer available after publishing.

If the live catalog has more than one draft you cannot automatically publish it and your changes must be manually merged into the live catalog to prevent conflicts.

Please note: The merging is done on element level. This means, for example, if you have a material with textures in the live catalog and the same material ID without textures in the draft, there will be no textures in the live catalog after the merge. The same logic applies to translations: After the merge, only translations from the draft are present in the live catalog.

For prices, each price entry (identified by item number + price list) is considered as one element.

***

### Delete a draft catalog

If you no longer need the draft and the data it contains, you can delete it. Therefore navigate to the `Draft controls` section in the details page of the draft catalog. This section is only visible in draft catalogs. Click on `DELETE` and confirm in the dialog to permanently delete this catalog and it's data. This cannot be undone.

### Revert latest live merge

If you want to revert the latest live merge of a draft catalog in order to undo potential undesired changes of live data:

1. Navigate to the live catalog and go to `Draft catalogs` section.
2. Under the `restore` column, navigate to the latest published draft and click on the restore icon.
3. Click on the `Revert live merge` button.

After this process, the draft catalog will be accessible again for editing and re-importing and then you can re-publish it again with the correct data.

### Import into draft catalog

If you want to change the current IDM or TC data in an existing draft, you can reimport a new IDM or TC file via doing the following:

1. Select the draft catalog you want to reimport on.
2. In the top menu bar click on the `Import/Export` button and scroll down to the `Import data` section.
3. Select or drag and drop the IDM or TC file and then select the merge policies you want. The file must be correctly formatted as `ZIP`.
4. Click on the `Import` button, then you will navigate to the live catalogs's details page. You can not edit the draft catalog until the import is finished.

In the `Import history` section of the draft catalog's details page you can see all previous imports of a draft.

***

> **Note:** The IDM or TC file format must be like what it stated above the `Choose file` button. It's not possible to import IDM data in draft that was created with no data source or with TC file format and vice versa.

> **Note:** For the TC file format there is only merge policies for `components` to select from.

***

### IDM in Rubens Admin

Roomle provides an import interface to convert IDM data into configuration data. Find more information about the IDM format [here](../../content-creation/idm/).

#### Supported schema types

Currently the following schema types are supported:

* [IDM Living 4.0](https://www.dcc-moebel.org/dochtml/IDML\_4\_0\_1\_XML-Schema\_Dokumentation/index.html)
* [IDM Polster 3.1](https://www.dcc-moebel.org/dochtml/IDMP\_3\_1\_0\_XML-Schema\_Dokumentation/index.html)
* [IDM Polster 3.0](https://www.dcc-moebel.org/dochtml/IDMP\_3\_0\_0\_XML-Schema\_Dokumentation/webframe.html#topic1.html)
* [IDM Polster 2.5.1](https://www.dcc-moebel.org/dochtml/IDMP\_2\_5\_1\_XML-Schema\_Dokumentation/webframe.html#topic1.html)
* [IDM Kueche/Bad 3.0](https://www.dcc-moebel.org/dochtml/IDM\_3\_0\_1\_XML\_Schema/index.html)
* [IDM Wohnen 1.0](https://www.dcc-moebel.org/dochtml/IDMW\_1\_0\_0\_XML-Schema\_Dokumentation/webframe.html#topic1.html)

A list of all the schemas and documentation can be found [here](https://dcc-moebel.org/download.html).

#### Preparing the data

You need a ZIP file for the import. The ZIP file has to contain one IDM export file (XML) and the needed extension files (CSV, JSON):

```
- IDMexport.xml
- translations.csv
- parameter_<SeriesID>.csv
- metacomponents_<SeriesID>.csv
- catalogDefinition.json
```

To make use of Roomle's wide range of UX functionalities, it is necessary to add information to the IDM export XML file, as those informations are not part of the IDM format. This additional information can be provided via extension files.

***

### Catalog additional information

Within Rubens Admin there is the possibility to add an information tooltip for a `Parameter`. This tooltip can then be shown in Rubens as additional information which makes the user learn more about these parameters as the information text is shown on hover.

In addition to the tooltip text, you can add an embedded URL to the parameter in case you want to embed some external content as additional information for that parameter. This webpage is then opened as an iframe inside the configurator after clicking the linked label inside the tooltip.

> **Note:** Ensure entered URLs allow iframe embedding by allowing CORS and checking X-Frame-Options. [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

There are two ways to add this information:

#### Adding it to specific catalog parameter

1. Navigate to the catalog detail page.
2. Under the `Catalog additional information` section you can create a new entry. Firstly, you need to enter the identifier of the parameter, you want to add a tooltip to the field `Key`. You can derive this identifier from the configuration script. Find more information about roomle script in the [Scripting resources](../../content-creation/scripting-resources/) section of our documentation.
3. Set the language for the tooltip from the languages dropdown in the top left of the catalog page then enter the tooltip text.
4. Then select the components that you want to apply the tooltip to, in the field `parents`. For those `parents`, the tooltip will then show up for the affected parameter. In case the `parents` are empty, it will apply to all the components that have included the parameter in its configuration script.
5. Click save and you can see the new entry in the list .

You can also update and delete the tooltip from the list.

#### Patch uploading

There is a possibility to import tooltips via importing instead of creating them one by one. In order to do so,

1. In the top menu bar click on the `Import/Export` button and scroll down to the `Import Catalog additional information` section.
2. Click `Choose file` or `drag/drop` the additional information `CSV` or `JSON` file
3. Navigate to the catalog detail page and you should see the updates under the `Catalog additional information` section.
