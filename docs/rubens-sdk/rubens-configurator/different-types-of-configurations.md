# Different types of configurations

The configurator can load every `configurable-item`, `configuration` and `configuration string`. Let's digg into what these terms mean.

#### Configurable item <a href="#configurable-item" id="configurable-item"></a>

A configurable item is a product which is saved to the Roomle Database (or external service). Every configurable item is attached to a catalog and get's a combined ID. The ID of the configurable item looks like: `catalogID:itemID` (for example: `usm:frame`). That there is one `:` inside the ID indicates that it is a configurable item. All configurable items also have a configuration string. This string is a script which is written in the Roomle Scripting Language. You can find details about [scripting here (opens new window)](https://github.com/Roomle/scripting-docu). Since a configurable item is part of a catalog it is possible to add meta data, like dimensions, labels etc to it. To load a configurable item you can use the following code: `roomleConfigurator.getApi().loadConfigurableItemById(id)`. You get the IDs of your product when you add them to the Roomle Rubens Admin platform.

#### Configuration <a href="#configuration" id="configuration"></a>

A configuration is a specific configuration string which is saved to the Roomle Database (or external service). The regular way to create a configuration is to load a configurable item and then change it. If you then save the changed configurable item to the Roomle Furniture Platform it becomes a configuration. In contrast to a configurable item the configuration has no meta data like labels etc. But like a configurable item a configuration has an ID. The ID consists of the id of a catalog, and a root component, extended by a [hash (opens new window)](https://en.wikipedia.org/wiki/Hash\_function)which describes the configuration. The ids and the hash are seperated by `:` therefore the ID has two `:` an example configuration ID looks like:

```
usm:frame:0003390D41E3F803F1CFE98B7A13CFD00E51D068D187F7EC840FEDEB774AB13A
```

#### Configuration String <a href="#configuration-string" id="configuration-string"></a>

A configuration string is a string which is written in Roomle Scripting Language. This script can be saved to a configurable item or can be the result of a change to a configurable item. If you want to load a configuration string you can use the following code: `roomleConfigurator.getApi().loadConfiguration(configurationString)`. The configuration string can be scripted. For details about scripting [see here (opens new window)](https://github.com/Roomle/scripting-docu). A sample configuration string looks as follows:

```
{ "componentId": "usm:frame" }
```
