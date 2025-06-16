# Overview

The Roomle Web SDK gives you the possibility to use the same 3D packages which power the Roomle Platform. With the Rubens SDK, you have the flexibility to craft a fully custom user interface tailored to your specific needs, ensuring a unique and engaging 3D experience for your users. Whether you are developing for e-commerce, virtual showrooms, interior design, or any other application requiring a robust 3D visualization tool, the Rubens SDK provides the resources and flexibility you need.&#x20;

### Differences between Rubens Products and Rubens SDK

* **Customization**: Rubens Products are built on the Rubens SDK and provide a widely customizable user interface. With the Rubens SDK, you have the flexibility to build your very own user interface from scratch.
* **User Interface Creation**: Rubens Products come with a customizable user interface out of the box, allowing for quick adjustments and branding. In contrast, the Rubens SDK gives you the freedom to design and implement a completely bespoke user interface tailored to your specific needs.
* **Update Management**: Rubens Products benefit from an automatic update cycle, ensuring you always have the latest features and improvements without any manual effort. However, when using the Rubens SDK, you are responsible for managing and applying updates yourself to keep your application up-to-date.

## Browser compatibility <a href="#browser-compatibility" id="browser-compatibility"></a>

Since our SDK is focused on high performance and high quality 3D visualization we recommend modern browsers. We suggest to target browser which support ES6 modules, for details see: [https://caniuse.com/#feat=es6-module](https://caniuse.com/#feat=es6-module). Of course it is possible to do transpile magic and convert the code to some JavaScript version which supports more browsers but this is totally experimental and not supported by this SDK. If you do apply transpile magic, make sure to send the correct bundle to every browser and not a legacy version to everybody. Also keep in mind that browser compatibility is restricted to the [constraints of Three.js ](https://threejs.org/docs/index.html#manual/en/introduction/Browser-support)and [WebAssembly](https://caniuse.com/#search=webassembly).

#### Desktop

We support the current and previous major releases of the following desktop browsers:

* Chrome (current and last major revision)
*   Safari (current and last major revision)

    ***

    > **Note:** In Safari 7.1.3 (OS X 10.9) and earlier, WebGL must be enabled manually. Go to Safari → Preferences → Advanced and check Show Develop menu in menu bar. Go to Develop → Enable WebGL.

    ***
* Firefox (current and last major revision)
* Microsoft Edge (current and last major revision)
* Any other Chromium-based browser
*   ~~Internet Explorer 11~~

    ***

    > **Note:** We will no longer support Internet Explorer 11 (or below) by June 30, 2020. Your Rubens Configurator experience may be limited and we recommend switching to one of the above browsers as soon as possible.

    ***

#### Mobile <a href="#mobile" id="mobile"></a>

On mobile, we support the current and previous major releases of the following browsers:

* Chrome
* Safari

## WebGL Compatibility <a href="#webgl-compatibility" id="webgl-compatibility"></a>

Rubens Configurator relies on WebGL to display 3D content in real-time. WebGL is a standard rendering library in most modern browsers. Use https://get.webgl.org/ to check if your browser is compatible.

For more technical details about WebGL on your machine, visit [WebGL Report](https://webglreport.com/).

If you run into problems, make sure your graphics driver and browser are up-to-date. If that doesn’t help, try one of the other browsers listed above.

In some cases, WebGL may be disabled in your browser based on your GPU. Check that you are using a compatible browser. If you see an incompatible warning or the configurator performs very badly, try forcing the browser to use your GPU by force-enabling webgl and hardware acceleration.

## Report an Issue <a href="#report-an-issue" id="report-an-issue"></a>

In case you are using a supported browser and a feature still doesn't work as expected:

* Determine if your internet browser is current or needs upgrading.
* Try using a different browser (in its latest version) as a temporary workaround.

If you've tried these solutions but continue experiencing issues, contact us with the following details:

* An explanation of the issue
* The browsers and versions you've tried
* A screenshot of your issue

Report your problem in our [Servicedesk](https://servicedesk.roomle.com/).

\
