# Overview

The API reference does not contain every file/class used in the SDK but the interfaces used to communicate with the modules (see Getting started/Roomle Modules).

# Configurator

When you're requesting an instance of the configurator by using `const roomleConfigurator = await RoomleSdk.getConfigurator();` you get a class of type [Configurator](classes/configurator_core_src_roomle_configurator.default.md).

To integrate a configurator you'll need the `getApi()` function which will give you an [RoomleConfigurator](classes/configurator_core_src_roomle_configurator.default.md) instance.

You can then use `RoomleConfigurator.callbacks` to get [ConfiguratorUiCallbacks](classes/configurator_core_src_services_configurator_ui_callback.default.md) whose functions you can override to receive configurator callbacks.
