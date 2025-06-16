# Rubens Modules

The Roomle Web SDK consists of 3 big "ready to use" modules, namely:

* Configurator: this is the configurator as known by several webshop integrations
* GLB Viewer: this module helps to display GLB files
* Planner: this is the Room Designer which is basically the Configurator on steroids and enables planning a complete room on the top of the fully functional Rubens Configurator.&#x20;

### Sample usage <a href="#sample-usage" id="sample-usage"></a>

You can import the RoomleSdk and call a getter on the module you want to use. The following pseudo-code demonstrate how to load each module

```typescript
import RoomleSdk from '@roomle/web-sdk';
(async function () {
  const roomleConfigurator = await RoomleSdk.getConfigurator();
  const roomleGlbViewer = await RoomleSdk.getGlbViewer();
})();
```

### Common interfaces between modules <a href="#common-interfaces-between-modules" id="common-interfaces-between-modules"></a>

All of the modules have certain common interfaces. You can read about this in detail in [our reference](rubens-sdk-reference/). In this section we want to focus on the most important things to get you started:

* `boot`: the getter of the module gives you a new instance of this module. When you want to start it you need to call `boot()` on this module. If you want to start the configurator from the snippet above you need to call `roomleConfigurator.boot()`. After that, the API is set up and you can use the methods of the instance
* `getApi`: after the boot is finished you can call `getApi()` on every instance of a module. For example: `roomleConfigurator.getApi()`. This method returns the specific api of each module. The APIs differ widely across the modules. You can read about the APIs in [our reference](rubens-sdk-reference/)
* [`event system`](rubens-modules.md#event-system-in-detail): we architected our SDK around events. All the available events are visible on `getApi().callbacks`. In default all these callbacks are [no-ops](https://en.wikipedia.org/wiki/NOP\_\(code\)), you can assign them functions which should register the events to your event system. Since the event systems vary greatly across different projects, we wanted to create a single neutral entry point for events which are emitted from the SDK. So this enables you to use things like [RxJS](https://rxjs-dev.firebaseapp.com/), [Redux ](https://redux.js.org/introduction)or your own event handling system.

#### Event system in detail <a href="#event-system-in-detail" id="event-system-in-detail"></a>

If you want to listen to the `update parameter` event of the configurator you can do this with the following line of code:

```typescript
roomleConfigurator.getApi().callbacks.onUpdateParameters = (parameters) => {
  // send this event to your own event system, redux, RxJS or home grown
  // this should trigger all the updates you wan to do on a parameter update
};
```

All our events are prefixed with `on`. All the other methods are utility methods. For example `mute` and `unmute`. If you call `roomleConfigurator.getApi().callbacks.mute()` there will be no events sent to you. With `unmute()` the events will be sent again.

Often we get the question why we not just provide an `addEventListener` and `removeEventListener`. We think the `callbacks` approach has three main advantages:

* discoverability: it's easy to discover all the events. With TypeScript you have code completion and for JavaScript user you have a nice overview during runtime
* type safety: in TypeScript every parameter is typed, therefore it's clear which parameter is passed to which event
* simplicity: why adding an event listener array and run through this array if the SDK user does only need one listener? Why looping through event listener if the event system of the SDK user does it again or more adjusted to the underlying application?

### Limits of the SDK <a href="#limits-of-the-sdk" id="limits-of-the-sdk"></a>

Right now you can only use things which are accessible via `import RoomleSdk from '@roomle/web-sdk';`. This means you can not import the Configurator on your own and create a new instance of it. This is a consequence of two constraints. On the one hand we want to make it as easy as possible to integrate your custom UI with our code and on the other hand we want to give you a highly optimized pre packaged library. This does not mean that we are not considering opening the SDK more. Theoretically it could be possible to extend our core classes and totally change their behaviour in the future. But right now there is no timeline for that.

### One note about SPAs <a href="#one-note-about-spas" id="one-note-about-spas"></a>

When you build a [SPA](https://en.wikipedia.org/wiki/Single-page\_application) it is common that DOM nodes are removed and added dynamically. You have two strategies to deal with this issue:

* add the canvas into a DOM node which is never remove and just show/hide this DOM node via CSS. This has the advantage that switching back and forth between the 3D scene and your app is very quick. On the other hand it could be a waste of memory and ressources if you always keep the 3D scene alive
* call `pause()` before the DOM node of the canvas is removed. Most of the modern UI frameworks give you the possibility to hook into some event which is fired before the DOM node is removed. When you navigate back to the page and want to show the canvas again you need to call `resume()`. See [our reference](rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md) how to do this.

Nevertheless which strategy you choose you have to call `destroy()` (for details see [our reference](rubens-sdk-reference/classes/configurator\_core\_src\_roomle\_configurator.default.md)) when you want to remove all the Roomle stuff completely.
