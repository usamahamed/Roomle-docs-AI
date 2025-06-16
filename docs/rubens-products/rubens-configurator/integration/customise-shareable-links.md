# Customise shareable links

Usually you have integrated your Rubens configurator somewhere on your website (if you do not know how to that you can have a look [here](setup-the-configurator.md)), which means you also a custom domain and need to modify our sharable links which are displayed for example when the user clicks on the `save draft button`. In this case it is necessary to give Rubens your desired Url in the init data.

Here a small code example:

```typescript
const configurator = await RoomleConfiguratorApi.create(
    configuratorId,
    domElement,
    {
      deeplink: "http://www.example.com/configurator?id=#CONFIGURATIONID#",
    }
  );
```

Please note that this is just a pseudo code URL, change it to your website URL. Normally you have placed the Rubens configurator somewhere on your single product page, then `configurator` is most probably the handle of the product. It is **important** that you have a id=#CONFIGURATIONID# in the URL because this will be replaced by the configuration id of Rubens.

### Code Sandbox

If you want to have a quick impression on a coded sample you can have a look at this [Code Sandbox](https://codesandbox.io/p/sandbox/getting-started-forked-jg78cv).

&#x20;
