# Scripting Resources

This is a starting page for the Roomle scripting knowledge base. It is intended for all content creators, that do involve themselves in the creation of the component definitions (scripts).

This guide is a work in progress and not everything has already been included. We appreciate any feedback if you find some errors, you have difficulties with understanding some topics, etc. Should this be the case, please contact your Roomle representative.

## Getting Started

Although creating content in the Roomle platform does not require any specific knowledge, it can get complex. For _Level 1_ content (3D Viewer), please refer to the Rubens Admin documentation. Content creators for _Level 2_ should start with the first chapters linked to this page. _Level 3_ content creators should start with the _Level 2_ topics, and then continue with the _Level 3_ topics, where they will learn the full feature set of the configurator. _Level 4_ should start with _Level 2_ topics and then continue with select basic topics, as they are not required to know the full feature set of the platform, but _Level 4_ scripting brings different challenges, mainly in the form of how the data are handled.

## Environment Setup

* [Environment Setup](100\_10\_setup.md)
  * [JSON schema for Component (direct link)](https://www.roomle.com/e/roomle.schema.json)
  * [Roomle Component Formatter for VS Code](https://marketplace.visualstudio.com/items?itemName=JiriPolcar.rmlformatter)
  * [Roomle Blender Addon on GitHub](https://github.com/roomle/roomle-blender-addon)
* [Hello World Example for Roomle Component Scripting](100\_40\_helloworld.md)
* **NEW** [RubensCLI Setup and Usage Tutorial](100\_45\_setuptutorial.md)
* [Using offline loader snippets](100\_50\_loadersnippet.md)

## Material Configurators (Level 2)

* [Introduction](150\_10\_lvl2\_intro.md)
* [Meshes Conversion and Upload](150\_20\_lvl2\_mesh.md)
  * Converting a Single Mesh for Use in the Rubens Configurator
  * Converting and Processing Multiple Meshes
* [Materials Set Up](150\_30\_lvl2\_material.md)
* [Level 2 Component Definition](150\_40\_lvl2\_component.md)
  * Writing Component Definition
  * Default Value of Parameter
  * Testing the Component Definition
  * Uploading Component Definition to the Rubens Admin
  * Direct Link to Component
* [Set Up Product Entries](150\_50\_lvl2\_item.md)
  * Setting Up Item Definition in Rubens Admin
  * Choosing a Default Value for Parameters
* [Level 2-4 Content Requirements for 3D Data](170\_10\_contentmeshes.md)

***

## Product Configurators (Level 3 and 4)

* [Prerequisities and expectations from the reader](200\_10\_prerequisities.md)
* [Level 3 Component Definition Basics](200\_20\_componentdefinitionbasics.md)
  * Parameter attributes
  * Parameter's Relevant Values
  * Parameter Types and Unit Types
    * types
    * unitTypes
  * Working with Imperial Measurements - Inches and Feet
  * Value Objects
  * Example: Parametrized Table Value Combinations
  * Creating and Updating Values with Thumbnails
  * Variable parameters, parameterGroups and valueObject labels
  * Storing string literals for the label scripts
  * Ranges
  * Parameter Groups
  * Example: Parameter Grouping
  * Examples of Parameters and their UI Represenatations
    * Type: Boolean - Yes/No Option
    * Type: Integer and Decimal
    * Unit Type: Length
    * Material or Parameter with Thumbnails
    * Buttons vs Dropdown
    * Range
  * Object parameters
    * Example: Utilizing Parameter of Type Object
    * Arrays and Vectors as Parameter Values
* [RoomleScript Language Reference](200\_40\_roomlescript.md)
  * Variables
  * Data Types
  * Keywords
  * Operators
  * Comments
  * Scope and Context of Variables
  * Internal values
  * Functions
  * Constants
  * Available Functions
  * Available Geometry Functions
  * Tools and Importer Meta Keywords
* [Example: Scripting a Parameterized Table and Implementing Client Feedback](200\_50\_exampletable.md)
* [Example: Parametrized shelf system](200\_60\_shelves.md)
* [SubComponents](200\_70\_subcomponents.md)
  * Attributes of SubComponent
  * Back-reference
  * SubComponents Use Cases Examples
    * External Geometry
      * Example: Using SubComponent's Geometry
    * Part List Entry
      * Example: Adding Mounting Parts to the Parametrized Shelf
      * Example: Part List Pattern
    * External Computation
    * Parameter Provider
    * ElementType Pattern
* [Docking Basics](200\_80\_dockingbasics.md)
  * Minimum Docking Example
  * Example: Two-Way Docking of Parametrized Shelf
  * Docking Assignments
  * Example: Shared walls between the parametrized shelves
  * Docking Ranges
  * Multi-Selection Parameter Error Topic
  * Addons and Possible Children
    * Possible Child: itemId vs componentId - thumbnail, sort, category
    * Hiding Addons in the List
    * Addons in Parameter Groups
    * Docking Multiple Components
* [Global Parameters and Parameter Context](200\_90\_globalparameters.md)
  * Parameter Context
  * Global Parameters
    * Global Parameter
    * Global and Local Parameter
  * Example: Adjusting global parameters in the parametrized shelf system.
* [3D Models & Meshes](200\_100\_meshes.md)
  * Theory
  * AddMesh
  * Primitives, UV settings and Bevels
  * AddPrism
    * Example: Drawer Front with Handle from AddPrism
    * Example: Window Frame
  * AddExternalMesh
  * Pivot Convention
  * Scalable Mesh Example
* [Advanced Part List Topics](200\_110\_advancedpartlist.md)
  * Packaging
  * Component Label
    * Where are component labels used?
  * Aggregating part list entries using count
  * Part List Grouping
  * Part List Highlighting
* [Dimensioning](200\_120\_dimensioning.md)
  * Measurement Box
    * Example: Overriding measurements with the setBoxForMeasurement Function
  * Custom Dimensions
* [Pricing](200\_130\_pricing.md)
* [Using GetMaterialPropery Function](200\_140\_getmaterialproperty.md)
* [Advanced Docking Logic](200\_140\_advanceddockinglogic.md) (work in progress)
  * Utilizing connection.isPreview Check
  * Storing Data in the `connection` Context in `assignmentScripts`
  * Sibling Points
    * Example: Grid Shelf System
    * Example: Deciding Which of the Neighbours Should Draw a Post in the 4 Post Shelf System
  * Docking Ranges
    * Getting Connection Index
    * Limiting Amount of Children Docked in a Range
    * Docking Range Examples
    * Collision Detection in the Docking Ranges
    * Collisions Inside a Range
    * Example: Infills for the Parametrized Shelf
    * Collisions Between More Ranges
    * Example: Detecting Neighbouring Door in a Modular Garden Shed
    * Example: Interior Accessory Docking in a Modular Garden Shed
  * Docking Lines
    * Example: Stackable Shelving System
  * Docking Line Ranges
* [Tenant Settings](200\_150\_tenantsettings.md)
  * Applying the Tenant Settings
  * Modifying the Tenant Settings
  * Changing accent colour, light settings etc.
  * Setup Configurator Variants
  * Changing the "Variants" Label
  * Changing labels in the UI of the configurator

***

[List of all examples json files that are mentioned in the Scripting Course](examples/\_allexamples.md)

***

## Scripting Reference Documentation

* [RoomleScript language reference](200\_40\_roomlescript.md)
* [Roomle Configuration Catalog Structure Format](model/configurator/configurationformat.md)

***

## Content Production Process-related Topics

* [Roomle Content Project Data Structure AKA 'The GIT Convention'](300\_10\_gitstructure.md)
* [Naming Convention of Components, Items, Parameters, Variables](300\_20\_naming.md)
* [Processes and Good Practices](300\_30\_processes.md)

***

## Scripting Examples

* [Simple Colour Changing Product Scripting Example](400\_20\_cg1example.md)
* [Chairs, Armchairs and Footstools](400\_10\_chairs.md)
* [Office Table System](400\_40\_tablesystem.md)
* [4-Posts Shelving System](400\_30\_quadpost.md)

***

## Scripting Templates and Case Studies

* Sofa Systems
  * [Simple Sofa](500\_100\_simplesofa.md) - two armrest sofa with dockable footstool and pillows
  * [Two-Parts Sofa System](500\_100\_doublesofa.md) - consists of two sub-parts, has dockable footstool and pillows
  * [Complex Sofa System](500\_100\_complexsofa.md) - consists of dockable modules, utilizing elementType subcomponent template
* [Wardrobes](500\_400\_wardrobes.md)

***

## Rubens Admin for Content Creators

* [Data Import and Export](../../web/datamanagement/import-export.html)

***

## Changelog

* 9.1.2024
  * new tutorial on a wardrobe with collision detection in a docking range
  * update of the RoomleScript reference with new functions
* 1.8.2023
  * update and formatting of the RoomleScript reference
* 3.7.2023
  * Updated mention of UV modifiers and scaling function in the meshes chapter.
* 2.6.2023
  * Added setup RubensCLI chapter
* 18.5.2023
  * Added the Tenant Settings chapter
* 3.4.2023
  * Added RoomleScript Language Reference Document
  * Added Rubens CLI to environment setup
* 22.7.2022
  * Fixed loader snippets (API's `RoomleConfigurator._kernelAccess` is now `RoomleConfigurator._plannerKernelAccess`)
  * Changed link to VS Code extension some, fixes throughout the documentation
* 23.5.2022
  * Formatter is now in the VS Code extension marketplace.
  * Enhanced the chapter about loader snippets by new feature (debug text injection).
  * Added [description of new Object, Vector and Array parameters](200\_30\_parameters.md#object-parameters)
  * Added subchapters:
    * [valueObject.label](200\_30\_parameters.md#variable-valueobject-labels)
    * [superseding.overrides](200\_70\_subcomponents.md#superseding-overrides)
* 20.3.2022
  * Added new formatter version 1.6.2, which fixes `else if` collapsing to `elseif` on some occasions.
* 15.3.2022
  * Added documentation on `else if`, `break`, `continue`, `return` (which are new core features)
  * Added new formatter version 1.6.1, which supports the above-mentioned keywords.
* 4.2.2022
  * Added Part List Highlighting subchapter.
  * Added formatter 1.5.0: New features, bug fixes.
* 20.11.2021
  * Added a chapter about processes
  * Roomle Component Formatter Version 1.4.2: Bug fixes, small incremental improvements.
* 30.10.2021
  * Roomle Component Formatter Version 1.4.0: Component code outline, incremental improvements.
* 28.8.2021
  * _SubComponents_:
    * improved example of the `External Computation` usage pattern
  * _Parameters_:
    * added subchapter Example: _Utilizing Parameter of Type Object_
  * _Advanced part list topics_:
    * added subchapter _Aggregating part list entries using count_
    * improved example code for the _packaging_ feature
    * add further information in the _Part List Grouping_
  * Added chapter _How to Test Content_
  * Roomle Formatter Version 1.3.0: Syntax Highlighting, language definition and some fixes
* 12.6.2021
  * _Dimensioning_: Improved subchapter about the `setBoxForMeasurement` function
* 7.4.2021
  * Added a subchapter about part list grouping in the Advanced Part List Logic chapter.
  * Added notes on good practices to the Docking Basics chapter.
  * Added new loader snippet variants.
  * Roomle Formatter Version 1.2.1
  * Added "Storing Data in the `connection` Context in `assignmentScripts`" in the Advanced Docking Logic chapters
* 1.4.2021
  * Added an instruction on parameter thumbnails in the parameters chapter.
  * Deleted chapters _How to import materials in Rubens Admin_, _When and how to use which CSV template for Rubens Admin_ data import, which moved to the Rubens Admin documentation section.
  * Roomle Formatter Version 1.2.0
* 22.3.2021
  * moved data import content to Rubens Admin documentation
* 20.3.2021
  * Roomle Formatter version 1.1.1
  * Updated [Advanced Part List Topics: Where are component labels used?](200\_110\_advancedpartlist.md#where-are-component-labels-used)
* 26.2.2021
  * changed the naming of Roomle Product Data Cloud (PDC) to Rubens Admin
  * updated Roomle Formatter 1.0.0
  * reorganized scripting documentation landing page in a way for the user to be more clear where to start
  * added a note about the _Object_ parameter type
  * added a note about meshes upload
  * added a subchapter about component labels in the configurator
  * added a mention of how to integrate the price service
* 21.11.2020added the first part of the Advanced Docking Logic chapter \* added extensive subchapter sibling on docking points and their utilization in a grid-patterned dock shelf system\
  \* added example on quad post shelf system \* added wardrobe example
* 14.11.2020
  * reviewed the Docking basics chapter, added a subchapter about addons
  * added an example of an office table system
  * separated chapter Parameters from Component Definition Basics
  * added/updated examples of how parameters render in the UI
  * added information about switching units to inches and millimeters
* 7.11.2020
  * new example and template: simple color-changing product configurator
  * new example: 4 post shelf system with complex logic
  * added some notes in the "How to import materials in PDC" chapter
  * added a chapter about the GetMaterialProperty functionality
* 23.10.2020
  * added article on pricing in Roomle Configurator
* 16.10.2020
  * added real-world examples for chairs and sofa systems
  * fixed broken links
* 2.10.2020
  * added dimensioning chapter
* 25.9.2020
  * new chapter "3D Models & Meshes"
  * improved this index file by adding subchapters
