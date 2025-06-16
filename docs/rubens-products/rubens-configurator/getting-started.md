# Getting started

## Install the roomle embedding library

As stated in the [section before](./) the communication happens with the help of a JavaScript library. Therefore you need to integrate the library into your project. This can either happen via a package manager (e.g. npm, yarn...) or a simple HTML script tag.

### Code Sandbox Example:

If you just want to copy paste a fast example integration of our configurator you can just have a look in [this Code Sandbox](https://codesandbox.io/p/sandbox/youthful-visvesvaraya-rvrd7f).

### Install with npm package manager

All the needed files can be found here: [https://www.npmjs.com/package/@roomle/embedding-lib](https://www.npmjs.com/package/@roomle/embedding-lib)

You can either download the `tar.gz` or if you use `npm` you could do the following:

`npm install @roomle/embedding-lib --save`

Always specify the correct `configuratorId` in the init options (more details on that later). The `configuratorId` is handed over to you by your Roomle Contact Person. The correct `configuratorId` prevents attackers from simply copying your code and use the configurator on their website. The only thing you have to do is, to specify the domains on which the Roomle Configurator should be available. For example: www.roomle.com. You can do this either in Rubens Admin or by telling your Roomle Contact Person. If something is wrongly configured you will see a message on the screen and further information in the JavaScript error console. If you can not figure out what is wrong please contact your Roomle Contact Person.

### Copy & Paste without package manager

This section shows a simple quick start. We always recommend using a package manager and a good built step but to quickly illustrate the idea of the Roomle Configurator these examples should be sufficient.

```html
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      #configurator-container {
        width: 1200px;
        height: 675px;
      }
    </style>
  </head>

  <body>
    <div id="configurator-container"></div>
    <script src="./roomle-configurator-api.es.min.js" type="module"></script>
    <script type="module">
      import RoomleConfiguratorApi from './roomle-configurator-api.es.min.js';

      (async () => {
        const options = {
          id: 'usm:frame',
        };
        const configurator = await RoomleConfiguratorApi.createConfigurator(
          'demoConfigurator',
          document.getElementById('configurator-container'),
          options,
        );
      })();
    </script>
  </body>
</html>
```

To try it out just copy\&paste the HTML snippet from above into a file called index.html and serve it from a web server. For quick experiments, the npm package [http-server](https://www.npmjs.com/package/http-server) is very nice.

## Continue with setting up the configurator

When you installed the Roomle Configurator API you can continue setting up the configurator in the setup Configurator section.
