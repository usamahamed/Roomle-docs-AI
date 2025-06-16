# RubensCLI Setup and Usage Tutorial

RubensCLI is a local server that can override certain data that the configurator would normally fetch from RAPI. In other words, it allows you to load component and material definitions from your local drive for development purposes. It is a way to go to develop Roomle Component definitions.

This is a step-by-step tutorial that explains the topic in more detail. Experienced software developers might find this too basic, but we want to also cover users that are from different fields. We believe that even advanced users and Roomle content developers who haven't yet switched to the RubensCLI workflow should read this chapter through. We do not deal with explaining what is Git and how to work with it. If you need to, please refer to the official [Book on git-scm.com](https://git-scm.com/book/en/v2) or various tutorials in the form of articles, videos or even podcasts that are available on the internet in large amounts from different authors.

Please refer first to the [Environment Setup](100\_10\_setup.md#vs-code--rubens-cli--git) chapter to **install the necessary software**.

**Important**: RubensCLI is a _node.js_ project. Therefore, if you check out a repository, you need to run `npm install` or `npm i` to make it work.

RubensCLI instance should be installed per every content project or every content project's Git repository. If you have more clients and handle their tenant accounts, it is highly recommended to have one Git repository for every tenant account you handle. If the tenant has more products in separate catalogs that are big, feel free to split the projects among more repositories, supposing no content catalog is handled by more repositories. The tools we provide expect to have a full snapshot of a catalog in one Git repository / project / working folder.

**Note**: It is recommended that the project folder name matches the tenant account.

**Note**: Although it is not recommended, you can omit Git and instead of creating the repository, you can just create a folder. However, no version control will be available, which is from a software developer standpoint a must-have for every project. Also, RubensCLI works by itself and users that are aware to do so can run it using the `npm run` commands from a terminal instance rather than from a VS Code instance. Since we provide a plugin for VS Code, this tutorial will describe mainly how to use it with VS Code.

## Setup a New Content Project with RubensCLI

1. Create an empty Git repository at a Git server of your choice. The project name should be equal to the tenant name as you see it in the Rubens Admin address. For example, if your tenant account has the address `https://admin.roomle.com/roomle`, your project name should be `roomle`.
2. Open the folder with the Git repository with VS Code using the _File > Open Folder_ (Windows version) or _File > Open_ (MacOS version). You can also `cd roomle` and `code .` or `code {path to the project folder}`
3. Open the Command Palette in the _View > Command Palette_ and run the command _Roomle: Install Rubens CLI_. ![](images/100\_45\_10\_installcli.png)
4. Specify the version you wish to install. Most users will should just hit enter and install the `latest`. ![](images/100\_45\_20\_installcli.png)
5. A terminal window will show up. If asked, confirm `y` to proceed. ![](images/100\_45\_30\_installcli.png)
6. At the prompt of `? [Rubens CLI]: What is the name of your project? »`, fill in the folder name you have setup. In our case, it is `roomle` ![](images/100\_45\_40\_installcli.png)
7. Hit `y` for the prompts to confirm to install to an existing folder and eventually that the git repo is not set up or that it is not clean.
8. Wait for all the dependencies to load and install. This can take several minutes.
9. Once the terminal window again shows a prompt, the RubensCLI has been installed. You can close the terminal session.
10. It is now recommended to make and push a commit with a message like `install RubensCLI v1.5.0`.

**Note**: You can alternatively open a terminal and run `npx @roomle/create-rubens-content@latest` in the parent folder of your project folder instead of steps 2 to 4.

You should now have several new files and subfolders in your working folder. Let's take a look at the ones that are most important:

* `.vscode/launch.json` provides VS Code's native launch controls (the floating play/stop/step over panel) to run RubensCLI via the editor's UI.
  * this is not present in the RubensCLI versions prior to `1.3.0`
* `content/` folder holds all catalogs
  * If you don't have one, you can create it as a blank folder.
* `node_modules/` folder holds the node.js project dependencies
  * If you don't have one, RubensCLI won't work and you have to run `npm install` in the terminal.
* `.gitignore` file that defines which file blob patterns you want your Git instance to ignore
  * This should contain `node_modules/`
* `package.json` launch file for node.js projects
* `rubens.config.ts` settings file for your local configurator instance

## Check-out an Existing Content Project that already has RubensCLI

1. Get a cloning link from the Git repository and use `git clone` to clone it. If you don't (want to) use Git, some Git providers allow to download the snapshot of the repository as a ZIP file.
2. Open the folder containing the repository in VS Code as your working project.
3. Open a new terminal instance in the menu _Terminal > New Terminal_, type `npm install` (or the short variant `npm i`).
4. Wait for up to a few minutes to finish the process.

This has to be done once after getting a Git repository. This will install the necessary dependencies as the `node_modules` folder, which is Git-ignored so that Git repositories are not too bulky.

## Install RubensCLI to an Existing Project

1. Do this preferably when no branches are open to avoid merge conflicts.
2. Change the existing project files to a structure that follows the convention.
3. Make a commit with the changed structure.
4. Follow the same process as in the [Setup a New Content Project with RubensCLI](100\_45\_setuptutorial.md#setup-a-new-content-project-with-rubenscli)

## Store Content Data

RubensCLI expects all content to be stored in a certain way. Please follow this convention:

```
project-root/                   <--- your working folder
├── rubens.config.ts
├── pakcage.json
└── content/                    <--- folder storing all catalogs
    └── catalogId               <--- folder with name matching a catalogId
        ├── _responses          <--- created by the Download Catalog Data command, which can be optionally git-ignored
        │  ├── catalogId_allItems.json 
        │  ├── catalogId_allTags.json 
        │  ├── catalogId_catalog.json 
        │  ├── catalogId_components.json 
        │  ├── catalogId_materials.json 
        │  └── catalogId_textures.json 
        └── components          <--- folder with component definitios
            └── *.json          <--- component definitions as JSON files
```

**Important**: This file structure is very important. RubensCLI and our other processes and workflow will count with such a structure.

## Get and Download Catalog Data

You can download a catalog with its data from the RAPI:

1. Commit your current changes
2. Open your working folder
3. Open the Command Palette
4. Run the _Roomle: Download Catalog Data_ command
5. Define the catalog you'd like to download (i.e. `example` for an example catalog)
6. Because this will overwrite your existing files, you have to explicitly type `yes` to confirm that you know what you are doing.
   * **Important warning**: This can overwrite your working changes or files. Make sure that you have a backup or no uncommitted changes!
7. Unless the catalog is really big, this will download the catalog in a few seconds. The `_responses` folder will be downloaded and component definition JSON files will be created from the downloaded responses.
8. Your catalog data are ready. You can navigate to `content/{catalogId you have just downloaded}/components/` to see the component definition files.

## Create a New Component Definition

1. If you do not have one, create a subfolder of the `content` folder with the same name as the catalogId of your component definition.
2. If you do not have one, create a subfolder called `components` in the folder of the same name as the catalogId of your component definition.
3. In the `components` folder of your catalog, create a blank file called in the pattern of `{externalId of your component}.json`.
   * Note: A `componentId` is a combined ID in a pattern of `{catalogId}:{externalId}`. For example, a component with the id `tutorial:`helloworld`will have file path`content/tutorial/components/helloworld.json\`
4. Open the newly created JSON file. Based on your Roomle Component Tool extension settings, it might be blank or prefilled with a simple component definition.
5. If the component is blank and it has opened as a JSON language file (you can check the current language highlighted blue), click the status bar button with the label `>RC-JSON` (highlighted green) to switch to the Roomle Component Definition JSON language.

![](images/100\_45\_50\_setupcomponent.png)

6. You should now have a simple, almost blank component definition, like the following:

```json
{
    "id": "tutorials:helloworld",
    "parameters": [],
    "onUpdate": "
        if (isnull(inited)) {
            inited = true;
        }
    ",
    "geometry": "",
    "articleNr": "'tutorials:helloworld'"
}
```

Note: If you don't you can open your VS Code settings and check the following entries. _Initialize empty RC-JSON_ must be set for automatic prefilling of blank components. Also if _Open JSONs as RC-JSON_ is set to _always_, step 5 will be skipped automatically. The value _smart_ means that you open a JSON file in the RC-JSON language if it is inside a subfolder called `components` and the JSON contains an `"id"` entry at its root level.

![](images/100\_45\_45\_settingsjson.png)

7. The component definition is ready to work with.

## Starting a RubensCLI Instance and Running a Component

1. Go to the _Run and Debug_ section in the _Activity Bar_ of the editor.
2. Select the _Run Rubens CLI_ entry from the dropdown menu and hit the play button. ![](images/100\_45\_60\_startcli.png)
   * Alternatively, you can run `npm run dev` from a terminal.
3. A floating debug control panel shows up and Debug Console will inform you about the status.
   * You can use the debug control panel to restart or stop the RubensCLI server.
4. Wait until the server has started.
5. The debug console will inform you about the server address. The default RubensCLI port number is `4848`. If it is free or not overridden, your local content server will start at `http://localhost:4848`. ![](images/100\_45\_70\_clistarted.png)
6. An information dialogue will show up. If you have a component open, the _Run current component_ option will show. In our example, this will point you to your web browser to `http://localhost:4848/?id=component@tutorials:helloworld`. Clicking _Run launch component_ will open the component defined in the `rubens.config.ts` file.
7. If you want to run a different component, you can open the component definition file and hit `Ctrl+Left Alt+R` / `Cmd+Alt+R` key combination, or you can use the `id=component@{your componentId}` URL parameter.
   * Note: This key combination will lead you to `https://www.roomle.com/t/cp/` (based on your extension settings) if RubensCLI is not running, meaning it will take the data from the live RAPI.
8. If you make changes to save a file in the project and you save the file, the current configuration reloads with the new content.
9. Use the debug controls to end or restart the RubensCLI instance. You can also quit the VS Code.
