# Roomle Content Project Data Structure

This document is a prescription on how to keep the configurator content data in a unified and easy-to-handle way.

## GIT repository structure
The git repository name should match with the tenant. The repository should start with folders matching the catalogues in the relevant tenant account.

Following structure should be used for git content repositories:
````
catalogue1/
    components/
        product1_components.json
        product1_master.json
        ...
        product2_components.json
        product2_master.json
        ...   
    materials/
        material1_id/
            material1_id_rbg.png
            material1_id_xyz.png
            material1_id_xyz.png
        material2_id/
        ...
        materials_categories.csv
        materials_shaders.csv
        materials_textures.csv
        materials_translations.csv
        materials.csv
    geometry/
        models/
            all ply, obj that are ready to be uploaded
        meshes_ALL.txt
        product1_meshes.txt
        product2_meshes.txt
    items/
        items_categories.csv
        items_definition.csv
        items_sort.csv
        items_translations.csv
        product1_addons.csv
        product1_categories.csv
        product1_definitions.csv
        startconfigs_definitions.csv
        startconfigs_translations.csv
        <dtto for product2>
    catalogue1_categories.csv
    catalogue1_components_translations.csv
    catalogue1_product1_components_import.csv
    catalogue1_product1_loadersnippet.js
    catalogue1_product2_components_import.csv
    catalogue1_product2_loadersnippet.js
    ...
catalogue2/
    ...
````

Explanation of the individual parts follow:

#### Components
Keep component source files (JSONs) in the /components/ folder and the relevant CSVs outside of that folder. Use-case: Select the whole folder + a relevant uploading CSV file, zip and upload a particular product fast & easy.

#### product1_components_import.csv
This CSV file is used for the product import. Example:

````
"component_id","component_definition"
"product1_master","zip://product1_master.json"
"product1_components","zip://product1_components.json"
````

#### Translations
The files components_translations.csv, catalogue1_materials_translations.csv, catalogue1_items_translations.csv are used to hold the RAPI labels of the entires used for translations. Example of the items translations header for a product, which is relevant for English-speaking, German and French markets:

````
"item_id","label_en","label_de","label_fr"
````

#### Categories
Categories are defined in catalogue1_categories.csv with a header and labels. 

````
"tag_id","sort","label_en","label_de","label_fr"
````

Categories then should apply to materials and items in the catalogue1_materials_categories.csv and catalogue1_items_categories.csv files. To add categories:

````
"material_id","tag_ids_to_add"
````

To remove categories, change the tag_ids_to_add to tag_ids_to_remove:
````
"material_id","tag_ids_to_remove"
````

If you want to change the categories, first remove, then add.

#### Sorting
Use catalogue1_items_sort.csv file. Add-ons and planner entries are ascendingly ordered by the value of *sort*. A good practice is not to use 1,2,3 as sort values, but rather 10, 20, 30, or 100, 110, 120, allowing you to add entries in between (100, 110, 115, 120, 123, 125, 130, etc.) without having to rewrite all sort values.

## Commits

* Start the commit subject with the relevant JIRA ticket code
* Describe what changes in the using imperative form. Try to call the commit, so that it answers the question why there is a change or what changes, not WHAT is in the commit (because you can open it and get the answer). 
    * Good example: `[Ladder] LAD-234 create ladder steps`
    * Bad example: `lad 234 did cubes in for loop`
* Add a HTTP link to the commit description.
* If you had trouble during work, it is probable that someone else also has trouble when they need to fix it. In that case, do a proper description what was difficult, what you tried and failed or why you can't use an obviously simple solution, etc.

Example: `BS-123 reorder parameters`, in branch `bestsofa/BS-123-sort`

* Avoid doing too big commits, be clear in the code. Otherwise your changes are not trackable or fixable.
* Stage only what acutally changes, do not stage debug code snippets if you don't need to (like displaying parameters, coordinate system etc.). When you review the changes (Quality Management), you won't be able to check it properly if you see too much lines with changes which are not actual changes!
* Format before you commit. However, if you start working in an unformatted state, pick only what you really change or do not format at all.

## Branch strcuture

### master 
The master branch should always mirror the RAPI status. If you make changes in the master branch, make sure that those changes get updated in the RAPI. On the other hand, if you make changes in RAPI, do not forget to update the master.

If you continue working on a project that has been on halt, always do or let a production overseer do a reinitialization of the master branch. See the [chapter how to do it](#comparing-git-state-with-rapi).

### dev/main
Use this branch for development. Commit merge requests from individual tickets to dev/main, which should be checked by your internal QM. The state of dev/main should be functional, no half-done work or work with known bugs should be accepted to merge into dev/main.

### \<product\>/main
Use this branch as the main branch for the product or configurator project. For example, we have a product called freistil190 -> the branch is called `freistil190/main`

### \<product\>/\<Jira-code\>-\<one-word-description\>
Each product should have its own branch (same name as the components prefix). The branch name should contain the Jira ticket code and a short, one-word description of the topic of the branch. For example: `freistil190/RB-1100-dev.`

After the relevant work for the ticket has been finished, make a MR to the products main branch.

If possible, use one of the following one word descriptions:

* 3d (change in the geometry)
* addons (adding, changing addons logic)
* dev (general development of product)
* dock (docking logic fix / specialized development)
* fix (general fix of the product)
* group (grouping change)
* label (labels, changing labels texts)
* lang (changing or adding translation)
* mats (materials)
* params (parameter logic)
* partlist (fixing articleNrs, part list change)
* sort (change in sorting)

If none of these fits, make up your own short and descriptive suffix.

## Workflow

### Comparing GIT state with RAPI
To be sure that the current online state is being used, you should reinitialize the GIT repository in order to check the GIT vs. RAPI consistency. As the process of merging into master is not currently bound automatically with the upload to RAPI and vice versa, you should make a diff between master and RAPI yourself.

Normally, the master branch should be a mirror of the state that is uploaded to the RAPI. To check, whether this is true, do the following:

1. create a new branch from master - call it reinit/\<currentDate\>
2. apply formatting on all components
3. make a commit called "apply formatting with v 0.4.3" (the version of your roomle formatter plugin)
4. delete /components/ folder
5. download components.zip from the RAPI and place the /component/ folder instead of the deleted /component/ folder
6. clean all auxiliary files (incoming components.csv)
7. apply formatting on all components
8. make a commit called "reinitialize"

You can see the changes in the "reinitialize" commit. At the end of each project and at the start of every reopening, this reinitialization should be done to see if the GIT repository is consistent with the RAPI.

* In order to easily and quickly apply formatting on all components, select all of them in the file selector of VS Code, right click and open them to the side. Then, apply the command (Ctrl+Shift+P or Cmd+Shift+P) "Format All Open Roomle JSONs".

### Workflow during development
Start your work in the dev/main branch and make a new branch product1/JIRA-100-dev. After the development is done, do a merge request to the dev/main branch, which should be checked by your QM. When the quality of the dev, fix or change is good, open a merge request to master assigned to the production overseer of the project.

### Creating repo from existing catalogue or tenant
* Repository name should match tenant account name.
* Prepare all subfolders with all catalogues.
* In every of the catalogues, export categories CSV, components ZIP, mateirals CSV and products CSV.
* Rename the CSV files accordingly and store it in the repository.
* Make a commit to master branch of the repo.
* Now you're good to go; you can develop the changes in the repository, test offline and upload to the database when you're ready.