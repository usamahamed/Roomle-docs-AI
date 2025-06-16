# Dragging in elements from embedding website into Rubens

To enable drag-and-drop functionality from your website into Rubens, you can use our embedding library. Ensure you have version 5.1.0 or newer of [@roomle/embedding-lib](https://www.npmjs.com/package/@roomle/embedding-lib) installed. Due to the complexity of handling HTML5 drag-and-drop across various browsers, a significant amount of code is required to ensure stable functionality. To keep our library lightweight, we’ve moved this code into a lazily-loaded ES6 module that’s only loaded when needed, so only users who require drag-and-drop will load the necessary code.

## Preparing your website

First, you need to prepare your website for drag-and-drop into Rubens. This example is written in vanilla JavaScript therefore it should be easy to translate it to your tech stack. Start by setting the position of the DOM element where Rubens will be injected to relative:

```html
<style>
    #configurator {
        width: 1025px; /* Example values */
        height: 580px; /* Example values */
        position: relative;
    }
</style>
<div id="configurator"></div>
```
Next, set up the objects you want to drag in. Here’s an example:
```html
<div class="catalog">
    <img
        src="https://catalog.roomle.com/1e9dbe16-bb11-446a-a28d-1cc42a3c16e4/items/frame/perspectiveimage.png?marker=1516698938"
        width="160"
        height="160"
        draggable="true"
        data-rml="usm:frame"
    />
</div>
```

Two things to point out: it is essential that you use `draggable="true"` and not only `draggable`. Addiditonally you need to know to which Roomle ID the dragged object belongs. In this example we do this by setting a data property, `data-rml="usm:frame"`.

## Integrating with Embedding Library

Now, let’s use [@roomle/embedding-lib](https://www.npmjs.com/package/@roomle/embedding-lib) to connect everything. Here’s the code:

```javascript
import RubensApi from "@roomle/embedding-lib";
  const options = {
    id: "ps_kyxjb94a9cu6e26cw1eed33jgztlnta",
    moc: true,
  };
  const instance = await RubensApi.createPlanner(
    "demoConfigurator", // <-- this is your ID
    document.getElementById("configurator"),
    options,
    ["dragIn"] // <-- Specify the plugin you want to use. In this case, "dragIn"
  );
```
This code initializes Rubens and loads the drag-in plugin. You can customize the plugin’s behavior using the following options:

```javascript
     // Customization options (default settings are generally very good so normally you do not need to change them)

    // How long should we show the drag-ghost and when do we show the actual 3D object. If set to 0 we start immediatelly after the drag entered the scene
    instance.plugins.dragIn.options.dragInOverlapY = 45;
    // How long should we show the drag-ghost and when do we show the actual 3D object. If set to 0 we start immediatelly after the drag entered the scene
    instance.plugins.dragIn.options.dragInOverlapX = 45;
    // Next options are for touch devices
    instance.plugins.dragIn.options.fingerSize = 25; // <-- how big is the finger in pixels, this will move the object a little bit away from your finger so that you can actually see it
    instance.plugins.dragIn.options.touchDragDelay = 500; // <-- after which delay we should check if a touch gesture could be a drag
    instance.plugins.dragIn.options.touchDragEpsilon = 75; // <-- which distance during a touch gesture could signal a drag
```

After everything is setup we can attach the event listeners. This could look like:

```javascript
  const extractId = (event) => {
    const id = event.target.getAttribute("data-rml");
    return id;
  };

  const dragStart = (event) => {
    const id = extractId(event);
    instance.plugins.dragIn.dragStart(id, event);
  };

  const dragEnd = () => {
    instance.plugins.dragIn.dragEnd();
  };

  const drag = (event) => {
    instance.plugins.dragIn.dragUpdate(event);
  };

  const touchStart = (event) => {
    const id = extractId(event);
    instance.plugins.dragIn.touchStart(id, event);
  };

  const touchMove = (event) => {
    instance.plugins.dragIn.touchMove(event);
  };
  const touchEnd = (event) => {
    instance.plugins.dragIn.touchEnd();
  };

  document.querySelectorAll(".catalog img").forEach((node) => {
    node.addEventListener("dragstart", dragStart);
    node.addEventListener("dragend", dragEnd);
    node.addEventListener("drag", drag);

    node.addEventListener("touchstart", touchStart);
    node.addEventListener("touchend", touchEnd);
    node.addEventListener("touchmove", touchMove);
  });
```

The full working example can be found in the following [CodeSandbox](https://codesandbox.io/p/sandbox/drag-in-from-outside-v58d3l).

## Trouble shooting

Since this feature is very browser dependant always small problems could arise. Here are some well known problems

### Drag-in plugin can not be loaded

When you do not use a JavaScript bundler it could happen that the Drag-in plugin can not be loaded lazyly. Therefore you have three options:

* use our UMD bundle that combines everything. You can import it via `@roomle/embedding-lib/roomle-embedding-lib.umd.js`
* use a service like [https://unpkg.com/](https://unpkg.com/) (keeping in mind the pros and cons of such a service)
* load the plugin yourself and hand it over on initialization. This looks like:

```javascript
import RubensApi from "@roomle/embedding-lib/roomle-embedding-lib.es.js";
import { DragIn } from "@roomle/embedding-lib/drag-in-BtcHTOaz.js"; // check your node modules folder for the exact file path
  const options = {
    id: "ps_kyxjb94a9cu6e26cw1eed33jgztlnta",
    moc: true,
  };
  const instance = await RubensApi.createPlanner(
    "demoConfigurator", // <-- this is your ID
    document.getElementById("configurator"),
    options,
    [// Specify the plugin you want to use. In this case we want to use dragIn
        {
          name: 'dragIn', // it has to be 'dragIn'
          loader: async () => {
            return DragIn;
          },
        },
    ]
  );
```

### Dragged in element is not visible

If the dragged element seems invisible, it may be positioned far behind your current camera perspective (possibly near infinity). This is mathematically correct but poor UX. Use the dragInOverlapY and dragInOverlapX parameters to control how long the drag-ghost is shown, ensuring the object appears within view.