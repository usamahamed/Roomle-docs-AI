# How to Debug Content

There are 3 available configurator sites:

Roomle Rubens Configurator: https://www.roomle.com/t/cp/

Roomle Configurator (legacy): https://www.roomle.com/t/configurator/

Roomle Rubens Configurator test site: https://www.roomle.com/t/configurator-testing/

Content should be developed in the Roomle Rubens Configurator site directly. The configurator testing site wraps the legacy Roomle Configurator in an `iframe` and provides some interface for the development. A test site with the Roomle Rubens Configurator is currently in the development and the test site will be updated in the future to wrap the newer Rubens Configurator.

If you use browser snippets to side-load content from a local server, you must watch out for the fact, that snippets that work for the configurator sites will might not work in the test site and vice versa.

## Arguments in the Rubens Configurator Adress

You can run the [Roomle Rubens Configurator](https://www.roomle.com/t/cp/) with following arguments, that are useful for debugging:

* `locale=<language ISO code>` switches the content and configurator language, i.e `locale=de` to switch interface and content language to German
* `id=<configurationId>` loads item, component or stored configuration, where the configurationId can be:
    * itemId, for example `id=isdt:wardrobe_drawer`
    * componentId if prefixed with `component@`, for example: `id=component@isdt:wardrobe_shelf_master`
    * stored root componentId with a configuration hash, i.e. `isdt:wardrobe_shelf_master:76B6493C13425E899F5A54720483CB04655C9BDC51747A934C16931EF228C767`, which you get if you run a sharing short link
* `debug=<boolean>` false by default; if true, the configurator behaviour changes in following way:
    * camera does not reset automatically, you have to hit the reset camera button
    * camera angles are not limited - you can see content from below
    * camera can pan (move) if you hold the Shift key
    * camera collisions are disabled
    * note: if you loose camera, you can always click the *Reset camera* button at the left side of the UI
    * if a parameter of possibleChild is missing a group assignment, you get a warning in the console

This are just those that are most commonly used. To get a full list of those arguments and their documentation, see https://docs.roomle.com/web/embedding/api/interfaces/types.uiinitdata.html

Example: load component `nordic-design:maestro_master` in French locale: https://www.roomle.com/t/cp/?id=component@nordic-design:maestro_master&locale=fr

Note: To enable pricing, see the [Pricing](200_130_pricing.md) chapter.

## Useful JavaScript calls

If you open your browser's JavaScript console, you can use following methods:

Load configuration by itemId:
````
RoomleConfigurator.loadConfiguration( <itemId> );
````

Load component by componentId, using a configuration string:
````
RoomleConfigurator.loadConfiguration(`{"componentId": "<componentId>"}`);
````


Get current configuration string:
````
await RoomleConfigurator.getCurrentConfiguration();
````

Reload current configuration:
````
RoomleConfigurator.loadConfiguration(await RoomleConfigurator.getCurrentConfiguration());
````

Get configuration hash:
````
RoomleConfigurator.getCurrentConfigurationHash();
````

## Injecting Debug Geometry

You can use `debugGeometry` along the standard `geometry` and leave it in the script. The configurator core itself does not have this object defined, but you can concatenate them together in the [Advanced Loader Snippet](100_50_loadersnippet.md#advanced-loader-snippet). You can leave `debugGeometry` in the scripts, because the Roomle platform just ignores this. Using this approach prevents you from issues that can be caused by having to delete debug geometry before publishing and having to put it back in next development loop.
