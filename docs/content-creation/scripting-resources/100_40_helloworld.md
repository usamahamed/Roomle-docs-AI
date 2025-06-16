# Hello World Example for Roomle Component Scripting

In this tutorial, you'll learn how to start scrpiting on a simple example. You will need VS Code with installed JSON schema, snippet and extensions (see [Environment Setup](100\_10\_setup.md)) and Google Chrome.

### Setting up the component definition

1. Start VS Code and open a working folder.
2. Using VS Code, create a new file with a .json suffix in a folder that you opened as the working folder of VS Code or one of the subfolders.
3. If you have set up your environemnt, create a new JSON file with your VS Code. In the status bar, you should see `>RC-JSON` button. Click it in order to change the JSON language to the RC-JSON language. Now, start typing `component` and editor should offer you a snippet, that is called `roomleComponentSimple`. Select it by navigating to it with your arrow keys and hit Enter. ![](images/100\_40\_10\_helloworld\_snippet.png) If you haven't set up the environment yet, simply get the code from the snippet in the next step.
4. This is the code we'll be working with:

```json
{
    "id":"catalogId:40_helloworld",
    "parameters":[],
    "onUpdate":"",
    "geometry":"AddCube(Vector3f{1000, 1000, 1000});",
    "articleNr":"'123.465'"
}
```

You see a JSON object with 5 attributes. This is a **Component Definition**, that contains a component `id`, empty `parameters` array, empty `onUpdate` string, that (if relevant) holds the onUpdate **RoomleScript** definition. If you read the `geometry` (which is also a _RoomleScript_ stored in the string value), you probably guess it draws a cube that is 1000 x 1000 x 1000 units big (1 unit = 1 mm), with an `articleNr` value of `'123.456'`.

### Working with the test site

5. Open the [Configurator Test Site](https://www.roomle.com/t/configurator-testing/).
6. Unfold the "Component" section. A text area shows, where you paste the sample code and click "Load into kernel button". ![](images/100\_40\_20\_helloworld\_configuration.png)
7. The configurator should show up. You should see a white cube in the left part of the screen. ![](images/100\_40\_30\_helloworld.png)
8. In order to see the article number defined in the JSON, unfold the "Interactions" section and find and click the "Open part list >>" button. The part list will open, looking like this: ![](images/100\_40\_40\_helloworld\_partlist.png)

### Changing the component definition

9. To change the colour of the cube, start a new line after the semicolon in the geoemtry script and start typing the function "SetObjSurface". The function itself will be offered by the autocomplete, as well as a set of debug colours. Pick one of them. ![](images/100\_40\_50\_helloworld\_setobjsurface.png) Notice the "\<geometry>" prefix in front of the snippet. Functions, that are available in a limited set of scripts, are marked like this. You can not use "SetObjSuface" function outside of the geometry field.
10. Press the Alt+Shift+F / Option+Shift+F keys to run the Roomle Component formatter. The resulting code should look like this:

```json
{
    "id": "catalogId:40_helloworld",
    "parameters": [],
    "onUpdate": "",
    "geometry": "
        AddCube(Vector3f{1000, 1000, 1000});
         SetObjSurface('isdt:blue');
    ",
    "articleNr": "'123.465'"
}
```

11. Copy this code again to the "Configuration" field like you did in step 6. Unless you've refreshed the page, the configurator window still shows the white cube. You have updated the component definition in the configurator cache, but as there is already a configurator running, the step we are going to do now is not made automatically.
12. Unfold the configuration field and paste following code and click "Load configuration"

```json
{
    "componentId":"catalogId:40_helloworld"
}
```

If there is still no configurator instance initialized (for example when you enter the fresh configurator page), this step is done automatically once the component source Json loads into kernel.

13. The configurator now reloads the configuration, using the component definition from the website cache, which was updated in between. The cube has changed the colour now.

This is a basic approach, that can be used for simple testing or introduction to the Roomle platform. More powerful tools are needed for a real development, though. Please refer to the chapter [RubensCLI Setup and Usage Tutorial](100\_45\_setuptutorial.md) or [Using offline loader snippets](100\_50\_loadersnippet.md).
