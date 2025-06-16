# Tags

Tags can be used for products, materials and components to make them easier to find. The first tag is created automatically and corresponds to the catalog, which is also reflected by the name.

## Tags list

In the `Tags` list, you can see all the tags of one catalog. To see the list, go to `Catalog management`, select a catalog and click on `Tags`.
The overview can be displayed in a `List view` or a `Grid view`.

To find a tag, you can search for the `Tag name` or the `External identifier` of a tag in the search textfield. The search is case-insensitive.

## Create or import tags

### Create a tag

To create a new tag manually,

-   click on the red plus button in the overview.
-   Under `General`, set a `Tag name` and an `External identifier`. We recommend to use a natural key which is easy to read. You can check on `Auto generated ID` checkbox to generate automatic ID for the created tag. The `External identifier` is globally unique.
-   Click the red plus button on the `Parent tags` section to assign one or more parent `Tags` to your child tag.
-   In order to quickly identify a tag you are looking for, it is helpful to set images in `Tag images` section. This image will be shown in the `Tags` overview list.
-   `Save` your changes.
-   You can see the changes in the tag tree when you navigate to catalog detail page under `Tags` section.

### Import tags

To import a list of tags, see [import tags](./import-export.md#import-tags).

### Delete tags

It is not possible to delete a tag once it is created.

### Tags filtering

On the left side of the `Tags` page you can see a filter section with the following controls:

1. **Search field:** You can search for tags by `Name` or `External identifier`.

2. **Visibility:** Show only tags in the list which match the hidden status. Valid values are: `All`, `Visible Tags`, `Non-visible Tags`

## Manage existing tags

To edit an already existing tag, select it in the `Tags` overview and click on it.

**Translations**

You can translate and save the name and description of your tags in different languages.
To do this, navigate to the details page of the tag and select the appropriate language in the action bar on the left side above the navigation. Change the name and/or description and click `SAVE`.

**Sort tags**

The easiest way to organize your tags list is by sorting it. When creating a tag, you can set a numeric value in the `Sort order` field inside the `Status` menu on the left. If you do not set a value, it will default to 0.
For existing tags, you can set the value in the `Tags` overview list. Move your cursor over the value of the `Sort order` column in the row of the respective tag. Click on the value or the appeared pencil icon, enter a number and press Enter or click outside the input field to save the new value. The tags will be shown in the configurator according to the sort number in the tag.

**Hide tags**

You can hide a tag by navigating to the tag's details page. Click on the `Hidden` checkbox in the `Status` section on the left and then click `Save`. In the `Tags` overview, you can filter by the hidden tags in the filter section.

**Position tag inside the tree**

Every tag can have parent tags that define the position of the tag inside the `Tag tree`. To add a tag to another tag click on the plus icon in the section `Parent tags` and you will see all the possible parents, then select the parent you want to add and then click `Save`. After saving the `Tag tree` will be updated with the new changes. You can assign multiple parents at the same time for each tag.

**Tag tree**

On each tag details page, you can see the whole tag tree for the current catalog. The current tag is in bold style so that you can easily see the position of the tag inside the tree.
