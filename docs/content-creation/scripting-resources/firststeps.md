# Table of Contents

* [Introduction](#introduction)
* [Setting-Up the Environment](#setting-up-the-environment)
* [First Example](#first-example)

#### Other Uses of Dual-Value Parameters and Direction Parameters

Also, wherever there are only two options, consider using a Boolean or Integer with validValues of 0 and 1. If you can not think of a suitable name for the key that refers to a situation that is *is a (...)* or it *has a (...)*, you can try calling it like something that refers to something positive or negative. Then, the values might be -1 and +1 (and possible 0 for neutral value, like *in center*). A typical example is the **direction**, where you should keep this **convention**:

|Axis|Direction Name|Positive Direction|Negative Direction|
|---|---|---|---|
|X|Width|Right|Left|
|Y|Depth|Forward|Backward|
|Z|Height|Up|Down|
|X|RotationX/Pitch|Clockwise|Counter-clockwise|
|Y|RotationY/Roll|Clockwise|Counter-clockwise|
|Z|RotationX/Yaw|Clockwise|Counter-clockwise|

Note: The rotation directions follow the left-hand rule as we use a left-hand coordinate system. That means: Point the thumb of your left hand in the direction of the according axis and your fingers will then wrap in the positive directions.

Let's say you have a piece of furniture that is made of two symmetric left and right variants, to which you can attach a small door. If you have the pivot of the *Component* in the center bottom, you can easily compute the dockpoints coordinates and also use it as the condition (in case the centered option shouldn't have a door):

~~~~
"parentDockings": {
    "points":[
        {
            "mask": "smalldoor",
            "position": "{Side * Width/2, 300, handlePositionZ}",
            "condition": "Side != 0"
        }
    ]
}
~~~~

### Global Parameters

There are cases where you need to have a parameter that is distributed across all components. For example, whether a set of connected cupboards has legs or the main surface material of a component sofa system. You can set a parameter to be global by setting it's attributes *global* and *visibleAsGlobal* to true. Normally, if you have nothing selected, you get UI controls for the parameters of the root component. If there is a global parameter in any of the components in the configuration and you do not have anything selected, the parameters in the global context are shown. The global parameters work in the same way as local parameters, but if they are interacted in the global context, it will be assigned to all components that have a global parameter of the same key. Still, if the parameter is *visible* and *enabled* (set to true), you can change the parameter for the one component. This way, you can set the color of all components in the configuration at once, while still having one that has a different color.

The principle of global parameters is that by clicking on the value, it will get distributed to the components that have a global parameter with a matching key. Consider it like an UI. Unfortunately, it is an one-way process only: changing any local parameter or internal variable will not have any influence on global parameters (note: as of August 2019, there is a possibility to be changed in the future)

### Example: Global Material Parameter for the Shelf System

We will now try out what was written in the previous chapter. Let's add one more option to the Material parameter and make it global:

~~~~
{
    "key": "material",
    "enabled": "true",
    "global":"true",
    "visibleAsGlobal":"true",
    "visible": "true",
    "type": "Material",
    "defaultValue": "demoCatalogId:wood",
    "validValues":[
        "demoCatalogId:wood",
        "demoCatalogId:defaultGray"
    ]
}
~~~~~

Now, you can dock the shelves together and from the global context, you can set the color for all components at once. If you then select a particular shelf, you are able to change the color only of the current selected instance. If you want to force the configuration to have all of them in the same color, you just have to set *visible* to false.

[Glimmer]: https://www.roomle.com/t/configurator-testing/