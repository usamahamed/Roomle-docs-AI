# onSavePlan ???

To be informed when an action to save the draft is initiated, whether by the user inside the iframe or triggered externally, you should utilize the `onSaveDraft` callback.

```javascript
const planner = await RoomleConfiguratorApi.createPlanner(
  'demoConfigurator',
  document.getElementById('planner-container'),
  options,
);
planner.ui.callbacks.onSaveDraft = (id, image, url, { type, payload }) => {
  console.log(id, image, url, type, payload);
};

```

There are times when you wish to initiate the save draft process externally for example is we use `elements.bottom_bar=false` to use custom bottomBar or use custom saveDraft button. For such cases, we provide the method `triggerSaveDraft`

```javascript
const planner = await RoomleConfiguratorApi.createPlanner(
  'demoConfigurator',
  document.getElementById('planner-container'),
  options,
);
planner.ui.callbacks.onSaveDraft = (id, image, url, { type, payload }) => {
  console.log(id, image, url, type, payload);
};
document.getElementById('trigger-save').addEventListener('click', async () => {
  await planner.ui.triggerSaveDraft('user@example.com');
  console.log('save-draft-triggered');
});

```

`onSaveDraft` parameters:

`id`: A unique string identifier for the configuration Id or the plan Id. `image`: The image of the current configuration. `url`: The generated url from save draft. `data`: An object containing: `type`: It specifies the kind of draft. It can be either `plan` if you trigger save from the planner or `configuration` of you trigger save from the configurator. `payload`: The actual saved data, which could be the configuration object or plan snapshot data.

When you use the `triggerSaveDraft` method, it saves the current configuration and then activates the `onSaveDraft` callback after `triggerSaveDraft` is finished. If you want to monitor and respond to actions from the custom save draft button, you can set up the `onSaveDraft` callback and execute your custom code inside it. The returned data from this callback aligns with the saved data in Roomle's backend, facilitating functionalities like reloading the configuration based on the draft ID later on. This comes in handy when users wish to return to a previous configuration, be it after a short break, the following day, or even post browser restarts.

Using onSaveDraft, there is also discern patterns or statistics such as how many users who started a configuration opted to save their drafts. This metric offers insights into user behaviors, shedding light on potential improvements or user tendencies. Given the importance of this callback, we strongly advise incorporating it seamlessly into your

You can try and play around with this example [here](https://codesandbox.io/s/onsavedraft-moc-s86js7?fontsize=14\&hidenavigation=1\&theme=dark).
