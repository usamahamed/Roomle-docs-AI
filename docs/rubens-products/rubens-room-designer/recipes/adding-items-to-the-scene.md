# Adding items to the scene

It’s possible to add additional products/items/configurations to the scene using the `insertObject` API:

```javascript
await interface.ui.insertObject('usm:frame');
```

By default the object is placed somewhere where it does not overlap with other items in the scene. You can also supply a position and a rotation for the object in the scene:

```javascript
await interface.ui.insertObject('usm:frame', { x: -3, y: 0, z: 3 }, Math.PI);
```

Position (2nd parameter) is in meters and the rotation (3rd parameter) is in radians.

### Gets called when something is changed in the plan <a href="#gets-called-when-something-is-changed-in-the-plan" id="gets-called-when-something-is-changed-in-the-plan"></a>

It is possible to implement a behavior which gets called when there is something changed in the plan. It gets all objects of the plan as parameter.

```javascript
interface.ui.callbacks.onPlanUpdate = (objects) => doSomething;
```

### React on specific plan element changes <a href="#react-on-specific-plan-element-changes" id="react-on-specific-plan-element-changes"></a>

You can react to certain plan element changes using the `onPlanElementChanged(changeType)` callback.

Depending on what happened, the `changeType` parameter can be:

* `added`: When a new plan element is added to the scene
* `removed`: When an existing plan element gets removed
* `changed`: When a plan element is changed, like rotated or moved. But also when it is added or removed
* `updated`: When the configuration of a configurable product inside the scene is updated.

You can try and play around with this example here: [(opens new window)](https://codesandbox.io/s/onplanelementchanged-l7jc5x?file=/index.js)

### React when tooltip is closed by controls button <a href="#react-when-tooltip-is-closed-by-controls-button" id="react-when-tooltip-is-closed-by-controls-button"></a>

You can react on any time when a tooltip is closed on controls button click As a parameter you get the name of the tooltip, e.g. "stopConfiguring"

```javascript
interface.ui.callbacks.onTooltipClose = (tooltipName) => doSomething;
```
