# Material Definition

Materials in Roomle are JSON files with defined attributes. One main material JSON and several texture JSON files (one for each texture variant).

## Material JSON

{% code title="material.json" %}
```json
{
    "basecolor": {
        "b": 0.9,
        "g": 0.9,
        "r": 0.9
    },
    "roughness": 0.85,
    "metallic": 0,
    "alpha": 1.0,
    "transmission": 1.0,
    "transmissionIOR": 1.52,
    "alphaCutoff": 0.5,
    "doubleSided": true,
    "occlusion": 1.0
}
```
{% endcode %}

### Base color

Base color in sRGB color space

If a diffuse texture is present, its texel values will get multiplied with the basecolor in linear color space.

For diffuse reflection, avoid extreme values (0.0 or 1.0) and leave some headroom (min:0.04 and max:0.9).

Example: default white

```json
"basecolor": {
    "b": 0.9,
    "g": 0.9,
    "r": 0.9
},
```

### Roughness

`0.0` is perfectly smooth with sharp reflections

`1.0` is completely matte/dull surface due to lots of microsurface scattering

Default `0.85`

```json
"roughness": 0.85,
```

### Metallic

Metallness of material

`1.0` for metals

`0.0` for dielectrics

A physical material is always either metal or non-metal (conductor or dielectric). Mixed values only make sense to mimic the appearance of layered materials (e.g. a bit of dust on a metal surface)

Default `0.0`

```json
"metallic": 0,
```

### Alpha / Opacity

Opacity factor

`0.0` is completely invisible

`1.0` completely opaque (the default)

```json
"alpha": 1.0,
```

### Alpha / Transmission

Transmission factor. Useful for creating transparent materials like glass.

If an object is transmissive, its basecolor is used as transmissive color. This is useful to create colored glass.

`0.0` fully opaque (the default) `1.0` is completely transmissive with (fresnel) reflections and specular highlights

`transmissionIOR` is the transmissive index of refraction (IOR), controlling the angle in which light is refracted when entering/leaving. At the moment this won't have effect in real-time renderings.

Default is IOR of plate glass ( https://en.wikipedia.org/wiki/List\_of\_refractive\_indices )

Example: clear glass (assuming the basecolor is completely white)

```json
"transmission": 1.0,
"transmissionIOR": 1.52,
```

### Real-time render related

#### Alpha cutoff

Alpha testing - use with alpha channel (opacity) texture

Fragment only gets rendered if alpha value is greater than this value.

defaults to `0.0`, meaning no alpha cutoff

```json
"alphaCutoff": 0.5,
```

#### Double sided

By default in real-time renderings a back-face culling is applied. This means polygons/triangles are only visible from one side. If `doubleSided` is true, they are visible from both sides.

Useful for billboards, semi-transparent fabrics or plant leaves.

Default: `false`

```json
"doubleSided": true,
```

#### Occlusion strength

If an occlusion texture is present, its values are scaled by this factor.

`0` results in no occlusion, `1.0` is full occlusion (default).

```json
"occlusion": 1.0
```

## Texture JSON

Here is a example texture file:

{% code title="texture.json" %}
```json
{
    "width": 256,
    "height": 256,
    "tileable": 1,
    "url": "https://catalog.roomle.com/51a8755d-8732-4a16-9e23-ac44c0f1cf56/textures/6377/image.jpg",
    "mmHeight": 100,
    "mmWidth": 100,
    "mapping": "RGB"
}
```
{% endcode %}

### Resolution

Width and height in pixels

```json
"width": 256,
"height": 256,
```

### Tileable

If 1, texture repeats itself in both axes Default: 0

```json
"tileable": 1,
```

### URL

URL of image file

```json
"url": "https://catalog.roomle.com/51a8755d-8732-4a16-9e23-ac44c0f1cf56/textures/6377/image.jpg",
```

### Size

Real world width/height.

Necessary for universal texture application with correct scaling/sizing. The idea is that this texture/material can be applied to many different objects with a consistent size/scaling appearance as long as they fulfill this requirements:

* The UVs are absolute in a certain unit (millimeter in our case)

Default: 0.0 (results in a uniform texture scale of 1.0, ordinary/normalized UV application)

```json
"mmHeight": 100.0,
"mmWidth": 100.0,
```

#### Explanatory example

A 3D quad has the measurement 10 cm by 20 cm. Its correct UVs are in the rect x:0/y:0 to x:100/y:200. The texture we want to apply spans 50 by 50 mm.

The resulting texture tileable will be x = 50; y = 50. This way the texture is tiled twice on the x axis and 4 times on the y axis.

### Mapping

Describes how texture channels are mapped to material channels.

* RGB: Albedo color
* RGBA: Albedo color plus alpha channel (opacity)
* XYZ: Normal map (Open GL style Y-up)
* ORM: Combined occlusion/roughness/metallic map (similar to glTF 2.0 specification)

Texture channel assignments

|      | red           | green           | blue           | alpha |
| ---- | ------------- | --------------- | -------------- | ----- |
| RGB  | basecolor red | basecolor green | basecolor blue | -     |
| RGBA | basecolor red | basecolor green | basecolor blue | alpha |
| XYZ  | normal x      | normal y        | normal z       | -     |
| ORM  | occlusion     | roughness       | metallic       | -     |

Default: RGB

```json
    "mapping": "RGB"
```

#### Occlusion Roughness Metallic composition

![](<images/orm (1).png>) _Graphical explanation of composing a combined ORM texture_

The texel values are in linear color space and are multiplied with their respective factor property values:

* Metallic texel values are multiplied with the metallic factor value.
* Occlusion texel values are multiplied with the occlusion strength factor value.
* Roughness texel values are multiplied with the roughness factor value.

The occlusion is used in real-time rendering only.

## Appendix

* [Change log](changelog.md)
* [Feature ideas](ideas/)
* [References](references/)
* [Research resources](resources.md)
