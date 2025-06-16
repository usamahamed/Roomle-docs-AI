# Components

## Components list

In the `Components` list, you can see all the components of one catalog. To see the list, go to `Catalog management`, select a catalog and click on `Components`. The overview can be displayed in a `List view` or a `Grid view`.

To find a component, you can search for the `Component name` or the `External identifier` of a component in the search textfield. The search is case-insensitive.

***

> **NOTE:** Components are part of configurable products and therefore not available for Level 1.

***

## Create or import a component

### Create a component

To create a new component manually,

* click on the red plus button in the overview.
* Under `General`, set a `Component name` and an `External identifier`. We recommend to use a natural key which is easy to read. If you want to, you can also set a `Description` and an `Element Type`.
* Click the red plus button to assign different `Tags` to your component to group the components.
* Under `Technical` you can additionally set the `Object Type` and the `Detail Type` of the component.
* Add the `Component definition`. Find more information on that [here](../../content-creation/scripting-resources/#component-definition-basics).
* In order to quickly identify a component you are looking for, it is helpful to set a `Perspective image` in the `Component images` section. This image will be shown in the `Components` overview list.
* `Save` your changes.

### Analyze component script

* There is an analyzer running in the background for testing the validity of the component script. While you edit the component definition, if it is not valid you will immediately see the errors below the script box.

### Import components

To import a list of components, see [import components](import-export.md).

### Components filtering

On the left side of the `Components` page you can see a filter section with the following controls:

1. **Search field:** You can enter text into this field to search for components with an id or label.
2. **Tags:** Click on the plus icon to reduce the list to components matching the tag.
3. **Status:** Show only components in the list which match the active status. Valid values are: `All`, `Active components`, `Inactive components`

## Manage existing components

To edit an already existing component, select it in the `Components` overview and click on it.

**Translations**

You can translate and save the name and description of your components in different languages. To do this, navigate to the details page of the component and select the appropriate language in the action bar on the left side above the navigation. Change the name and/or description and click `SAVE`.

**Sort components**

The easiest way to organize your component list is by sorting it. When creating a component, you can set a numeric value in the left column under the navigation in the `Sort order` field. If you do not set a value, it will default to 0. For existing components, you can set the value in the `components` overview list. Move your cursor over the value of the `Sort order` column in the row of the respective component. Click on the value or the appeared pencil icon, enter an integer and press Enter or click outside the input field to save the new value.

The rows will not automatically re-sort unless you have sorted the table by `Sort order`. To do so, click on the `Sort order` column name.

## **Add a component embedded information**

There is a possibility to add a tooltip and an embedded URL for `Component`. This tooltip and the embedded Url can then be shown in Rubens as additional information which makes the user learn more about these components.

To add embedded information to a component

* Navigate to an already created component.
* Go to `Component Embedded information` and then click on `Add additional content` link.
* Enter the tooltip value plus an embedded URL and save the form.
* In order to add different languages to the created information:
  * Change the language from the top left section.
  * Click on the component information from the components information table.
  * Add the new information and then click save.

***

> **Note:** Ensure entered URLs allow iframe embedding by allowing CORS and checking X-Frame-Options. [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

***
