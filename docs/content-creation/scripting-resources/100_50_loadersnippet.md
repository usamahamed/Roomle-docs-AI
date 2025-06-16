# Using Code Snippets to Instantly Load Offline Component Definitions

The approach described in this chapter is outdated and the RubensCLI has been developed as a superior way to loading component definitions from your local drive in the development phase. You can however still use this approach in cases you do not have RubensCLI set up for any reason. The advantage of this approach is that any other software than VS Code and an internet browser is required.

You must have VS Code with the Live Server extension (see [Environment Setup](100\_10\_setup.md)), or another local HTTP server running on your computer.

## Using the Content Test Site

1. Open the [Configurator Test Site](https://www.roomle.com/t/configurator-testing/) at https://www.roomle.com/t/configurator-testing/ in your browser.
2. Open your browser's developer console, usually using `Cmd+Shift+J` (or `Ctrl+Shift+I`) and navigate to the Sources bar, Snippets, click the new snippet button and choose a name for it (for example `loadersnippet`) ![](images/100\_50\_10\_snippets.png)
3. Paste the following code

```javascript
/* https://www.roomle.com/t/configurator-testing/ */
(async function () {
    const iframe = document.querySelector('iframe');
    let iframeContentWindow = null;
    if (!iframe) {
        await RoomleConfigurator.init('demoConfigurator', 'roomle-configurator', 'usm:frame', {
            __overrideServerUrl: 'https://www.roomle.com/t/configurator/'
        });
        iframeContentWindow = document.querySelector('iframe').contentWindow;
    } else {
        iframeContentWindow = document.querySelector('iframe').contentWindow;
        iframeContentWindow.RoomleConfigurator._plannerKernelAccess._kernelInstance.clearAll();
    }
    // fill in the URLs you want to load
    const prefix = 'http://127.0.0.1:5500/'
    const urls = [
    ];
    const responses = await Promise.all(urls.map((url) => fetch(prefix + url)))
    const components = await Promise.all(responses.map((response) => response.text()));
    let lastComponentId = '';
    components.forEach((component) => {
        component = component
        const cleanComponent = JSON.parse(component.replace(/((\/\/|#).*)?\r?\n|\r/g, ''));
        iframeContentWindow.RoomleConfigurator._plannerKernelAccess._kernelInstance.loadComponentDefinition(10, cleanComponent);
        lastComponentId = JSON.parse(cleanComponent).id;
        console.log(`loaded ${lastComponentId} into kernel`);
    });

   RoomleConfigurator.loadConfiguration(`{"componentId":"${lastComponentId}"}`);

}());
```

4. Go to VS Code, open your working folder and start the Live Server extension (button "Go Live" at the right side of the bottom bar or the "Live Server: Open with Live Server")
5. Navigate to a component definition JSON, open its context menu using a right-click on the file and choose Copy relative path.
6. Paste this as an entry into the URLs array. Example:

```javascript
    const urls = [
        'componentdefinitions/examples/40_helloworld.json'
    ];
```

_Windows_: You will get the relative path with backslashes (`\`) which you either need to change to forward slashes (`/`) or escape via doubling them ('\\').

Hint 1: You can load more components at once by putting more entries into the `urls` array, separated with commas. Put the component you want to load in the configurator as the root of the configuration to the last position (see what the `lastComponentId` variable in the snippet code is for)\
Hint 2: You can load any configuration. Just replace the argument in the last line with a different stringified configuration JSON.\
Hint 3: You can set the path of the folder containing component definitions to the prefix variable, letting you use only the filenames in the URLs array. See the same code as above modified like this:

```javascript
    const prefix = 'http://127.0.0.1:5500/componentdefinitions/examples/'
    const urls = [
        '40_helloworld.json'
    ];
```

7. In the lower right area, run the script.
8. The configurator loads the content from your local HTTP server, letting you safely and quickly test the content.

## Using the Configurator Directly

If you want, you can run content in the configurator directly. This is especially useful if you want to check a stored configuration with new content.

1. Open the configurator using the default settings [Rubens Configurator](https://www.roomle.com/t/cp/) or a share link with configuration hash, like https://www.roomle.com/t/cp/?id=usm:frame:C6A1C58D311C7660962FA07610B1FD076A26F4C860CFF1A84D39626A40CCA8C4
2. Go on like in the previous example. Only use the following form of the snippet:

```javascript
/* https://www.roomle.com/t/cp/ */

(async function () {

    const prefix = 'http://127.0.0.1:5500/';
    const urls = [
    ];
    const responses = await Promise.all(urls.map((url) => fetch(prefix + url)))
    const components = await Promise.all(responses.map((response) => response.text()));
    let lastComponentId = '';
    components.forEach((component) => {
        let jsonComponent = JSON.parse(component.replace(/((\/\/|#).*)?\r?\n|\r/g, ''));
        lastComponentId = jsonComponent.id;
        RoomleConfigurator._plannerKernelAccess._kernelInstance.loadComponentDefinition(10, JSON.stringify(jsonComponent));
        console.log(`loaded ${lastComponentId} into kernel`);
    });
    RoomleConfigurator.loadConfiguration(`{"componentId":"${lastComponentId}"}`);

}());
```

## Advanced Loader Snippet

Because the loader snippet parses the configuration JSON to a JavaScript object, you can easily modify it and make it help you when developing the content via injecting debug geometry, disabling parameter groups etc. See the following snippet intended to be run in [Rubens Configurator](https://www.roomle.com/t/cp/).

Please use this carefully. If you develop, watch out that you do not influence how the live content works, for example by accidentally overriding a variable value.

### component.debugGeometry

`component.debugGeometry` is not anyhow defined by the kernel and it completely ignores it. The debugGeometry is concatenated on the side-load of the components. It is highly useful for displaying the positions of docking points, offsets, coordinate axes etc.

### Debug text injection

We've prepared a component under the id [isdt:text](https://www.roomle.com/t/cp/?id=component@isdt:text) that allows you to display a given text in the 3D scene. This is highly useful for displaying internal data of the components and is a workaround for the missing inspection functionality. You can use it by writing the following meta-command in the `geometry` or (recommended) `debugGeometry` of your component definition:

```javascript
/* #INJECTTEXT shouldDisplay : boolean; x; y; z; textToDisplay : string #ENDINJECTTEXT */
/* 
This example:
    * this must be inside a comment
    * shows always (first argument = true)
    * position of the text origin: {0, depth + 50, 200}
    * displays the label, articleCode and pricegroup as part list data for a quick overview debugging
#INJECTTEXT 
true; 
0;
depth + 50;
200;
componentLabel | '~' |
articleCode | '~' |
material_primary_pricegroup | '~' |
''
#ENDINJECTTEXT
*/
```

This form of the injection marker is supported by the syntax highlighting and code snippet provides by the Roomle Component Tool VS Code extension. In its default status, it is regex-found in the `geometry` (after `debugGeometry` is concatenated into it) and parses the arguments. Then the string in between is split via `;` (not with `,` because it can be used in function arguments etc.) and then the subComponent definition is injected and an if statement with the relevant SubComponent() + MoveMatrixBy() functions inside it. After this processing, the component is finally loaded into the kernel. The result can look like this:

![Inject text example](images/100\_50\_injecttext.png)

### Blank advanced loader snippet

This is an example of a loader snippet that provides a lot of useful debugging functionalities. You can modify it as you wish. Just watch out that you do not do something that will cause unnoticed errors in your final work.

```javascript
/* https://www.roomle.com/t/cp/ */
var doNotFreshload;
/* 
Uncomment following to pre-init doNotFreshload variable to make the current configuration reload with updated components, without loading the configuration with the last component only.
*/
//doNotFreshload = true;
/* Uncomment following to never reload current configuration */ 
//doNotFreshload = false;

(async function () {

    const prefix = 'http://127.0.0.1:5500/<REPOSITORY FOLDER>/<CATALOGUE>/components';
    const urls = [
        'component1.json'
        , 'component2.json'
        // Because we added /**/ comment at the end of this, and we put commas at the beginning of the lines, you can easily comment out components without deleting them from the snippet. You will then load component2.json if you comment it out like this. Watch out for dependencies. Therefore, keep the components in this snippet sorted in a way that component on the next line has all dependencies already loaded!
        /*
        , 'component3.json'
        , 'root_component.json'
        /**/
    ];
    const responses = await Promise.all(urls.map((url) => fetch(prefix + url)))
    const components = await Promise.all(responses.map((response) => response.text()));
    let lastComponentId = '';
    components.forEach((component) => {
        // Parse the JSON to object. You can do whatever you want with it in this snippet later. The Regex escapes newlines in the component, making JSON with multiple lines valid. Note: Windows use /r/n as line ends. This is also handled.
        let jsonComponent = JSON.parse(component.replace(/((\/\/|#).*)?\r?\n|\r/g, ''));
        // Store the last componentId to load it at the end in doNotFreshload.
        lastComponentId = jsonComponent.id;
        // Undefined by the API, but you can leave debugGeometry in the script. This injects what you have in the debugGeometry at the end of the actual geometry.
        if (jsonComponent.debugGeometry) {
            jsonComponent.geometry = jsonComponent.geometry.concat(jsonComponent.debugGeometry);
        }
        // Inject text feature of the loader snippet. Will inject a 3D floating text in the scene that can display any information you want.
        if (jsonComponent.geometry) {
            const foundDebugTextCalls = jsonComponent.geometry.match(/(?<=#INJECTTEXT)(.*?)(?=#ENDINJECTTEXT)/g);
            if (foundDebugTextCalls) {
                let internalId = 'DEBUG_TEST_INJECTED_SUBCOMPONENT_';
                let debugTextInjectionNumber = 0;
                foundDebugTextCalls.forEach((debugtext) => {
                    console.log(debugtext);
                    let split = debugtext.split(';');
                    let data = {
                        "condition": split[0],
                        "x": split[1],
                        "y": split[2],
                        "z": split[3],
                        "text": split[4]
                    };
                    debugTextInjectionNumber++;
                    if (!jsonComponent.subComponents) { jsonComponent.subComponents = []; }
                    jsonComponent.subComponents.push(
                        { "internalId": internalId + debugTextInjectionNumber, "componentId": "isdt:text", "assignments": { "text": data.text } }
                    );
                    jsonComponent.geometry = jsonComponent.geometry.concat
                        (
                            "if (" + data.condition + ") {" +
                            "SubComponent(" + (internalId + debugTextInjectionNumber) + ");" +
                            "MoveMatrixBy(Vector3f{" + data.x + "," + data.y + "," + data.z + "});" +
                            "}"
                        );
                });
            }
        }
        // For IDM-imported components: Place the idmFeature key number at the beginning of the label in every language. Makes working with IDM components easier.
        if (jsonComponent.parameters) {
            jsonComponent.parameters.forEach(p => {
                if (p.key) {
                    if (p.key.includes("idmFeature")) {
                        var x = p.key.substring(10, p.key.length);
                        for (var k in p.labels) {
                            p.labels[k] = x + " : " + p.labels[k];
                        }
                        // Show value object values at beginning of every label
                        if (p.valueObjects) {
                            p.valueObjects.forEach(vo => {
                                if (vo.value && vo.labels) {
                                    var val = vo.value;
                                    for (var k in vo.labels) {
                                        vo.labels[k] = val + " : " + vo.labels[k];
                                    }
                                }
                            });
                        }
                    }
                }
            });
        }
        // Deactivate parameter groups. Also delete possible children's group, otherwise they do not show.
        jsonComponent.parameterGroups = null;
        if (jsonComponent.possibleChildren) {
            jsonComponent.possibleChildren.forEach(pc => {
                pc.group = null;
            });
        }
        // Stringify the object and feed it to the configurator.
        RoomleConfigurator._plannerKernelAccess._kernelInstance.loadComponentDefinition(10, JSON.stringify(jsonComponent));
        // If you see this log, the current component passed. If you read componentId component1.json in the console, error is in component2.json, which did not reach to here.
        console.log(`loaded ${lastComponentId} into kernel`);
    });

    // if false or uninitialized
    if (doNotFreshload) {
        var previous_configuration = await RoomleConfigurator.getCurrentConfiguration();
        RoomleConfigurator.loadConfiguration(previous_configuration);
        console.log(`reloading previous config`);
    } else {
        // if doNotFreshload is not yet inited, load the component with the lastComponentId.
        RoomleConfigurator.loadConfiguration(`{"componentId":"${lastComponentId}"}`);
        // initialize in order to reload previous config next time
        doNotFreshload = true;
        console.log(`freshloaded: {"componentId":"${lastComponentId}"}`);
    }
}());
```
