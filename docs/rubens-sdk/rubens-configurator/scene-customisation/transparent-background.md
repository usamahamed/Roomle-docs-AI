# Transparent Background

Via [InitData](../../rubens-sdk-reference/interfaces/common\_core\_src\_utils\_shims.InitDataDefinition.md), you can remove the background of the scene completely allowing the embedding iframe to be transparent and elements behind it to be visible through the scene. [Example (opens new window)](https://roomle-dev.github.io/transparency.html?transparentBackground=true\&moc=true\&edit=true\&id=86qux3bxbgv615qxzby3k2q4a4oni7o\&customApiUrl=https://api.roomle.com/v2).

Embedding example

```
const configurator = await RoomleConfiguratorApi.create(
  "demoConfigurator",
  document.getElementById("configurator-container"),
  {
    id: '...',
    transparentBackground: true,
  }
);
```

Query Parameter

`&transparentBackground=true`
