# Getting Started

In this section we want to go through step by step how to setup the Rubens SDK.

### 1. Install the web-sdk package with npm or yarn

Our recommended setup is a build pipeline which uses the Node.js ecosystem. Therefore it also makes sense to use some package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/). To keep it "simple" we focus on npm in this tutorial. To install our Web SDK you need to run

```
npm i @roomle/web-sdk --save
```

This should add the following line to your `package.json`

```
"@roomle/web-sdk": "x.y.z",
```

Without any version specified this will always lead to the most recent version of the SDK.

To install for example version `2.1.1` just change the entry in your `package.json` to the following:

```
"@roomle/web-sdk": "^2.1.1",
```

When you want to upgrade the version you just need to change the version number. For more details you can see the official [npm docs](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies).

We follow [semantic versioning ](https://semver.org/)therefore the versions have the following semantics:

When we have a look on the following version number: `X.Y.Z`, a change in Z means a bug fix, in Y a new feature and in X a new major version which could be a breaking release. To find out what we changed we recommend reading through our [changelog ](../rubens-admin/changelog.md)before upgrading.

### 2. Setup the assets path <a href="#assets" id="assets"></a>

Since our applications are quite complex we do not only have JavaScript files. Therefore a simple packaging is not possible. Roomle uses [Three.js](https://threejs.org/) to display the 3D content and a [WASM ](https://webassembly.org/)module for our logic. Also we provide some standard backgrounds as [glb ](https://en.wikipedia.org/wiki/GlTF#GLB)files for our 3D scenes. This requiers you to copy all our static assets to some path which is available via https. These files are all located in `node_modules/roomle-web-sdk/lib/static`. We recommend doing this automated (and not by hand) with your build tools ([esbuild](https://esbuild.github.io/), [webpack ](https://webpack.js.org/), [rollup ](https://rollupjs.org/)etc).

To tell Roomle where to look for this assets you need to specify a global variable before you load the Roomle source code. We need to use a global variable because we try to load all the stuff as fast and parallel as possible.

#### Asset path <a href="#asset-path" id="asset-path"></a>

```html
<script>
  window.__RML__ENV__ = {
    assetPath: '__REPLACE__WITH__YOUR__PATH__SPECIFIED__IN__PACKAGE__JSON__',
  };
</script>
```

Typically the assets should be in some folder like `public` or `dist` and from there they are available via `https`. Let's assume your project setup serves from a `dist` folder at localhost:4242 and you place the Roomle assets into `dist/roomle`. You have `dist/index.html` which starts your app and loads Roomle. Then you have to set the `assetPath` to `roomle/`. You must not forget the trailing `/`, because otherwise the sub paths are not constructed correctly.

## TypeScript / ES6 Modules <a href="#typescript-es6-modules" id="typescript-es6-modules"></a>

All the Roomle Packages are authored in [TypeScript ](https://www.typescriptlang.org/)therefore we provide declaration files for a better developer experience. We recommend to use TypeScript but the SDK should also be useable as a plain ES6 module. Since we develop in TypeScript and do not do any special testing for plain ES6 we consider the usage of the SDK as plain ES6 as experimental. Because Roomle has very hard performance constraints (especially for webshop integrations) we use [dynamic imports](https://github.com/tc39/proposal-dynamic-import). Since dynamic imports are not supported by every browser it's important to transpile the code to something like [SystemJs](https://github.com/systemjs/systemjs). Keep in mind to provide two different bundles, one for legacy browsers and one for [modern browsers](overview.md#browser-compatibility). A very interesting article about this topic can be found here: [Smart Bundling: How To Serve Legacy Code Only To Legacy Browsers](https://www.smashingmagazine.com/2018/10/smart-bundling-legacy-code-browsers/)

### Let's get started

After you set up the project correctly you can start implementing the Rubens SDK. Therefore we provide three different ready to use modules:

* Rubens GLB Viewer
* Rubens Configurator
* Rubens Planner (Room Designer)

All Modules and how you can using it are described in the following sections.

\
 <a href="#typescript-es6-modules" id="typescript-es6-modules"></a>
-------------------------------------------------------------------
