# TextureController

## Overview

- [POST /](#post-)
- [PUT /](#put-)

## Description

Path /v2/textures

Handles all requests regarding texture: creating, updating, deleting.

### Texture JSON Object

An example for a texture JSON object.

```
{ 
    "id":42, 
    "material":"catalog1:aMaterialId",
    "mapping":"RGBA", 
    "platform":"web",
    "image":"https://catalog.roomle.com/df7db650-df1e-4f0e-9ae3-85fdc98f9e0c/materials/2099/thumbnail.jpg",
    "url":"https://catalog.roomle.com/df7db650-df1e-4f0e-9ae3-85fdc98f9e0c/materials/2099/thumbnail.jpg",
    "height":150,
    "width":200,
    "mmHeight":250,
    "mmWidth":250,
    "tileable":true,
    "definition":{
        "height":150,
        "width":200,
        "mmHeight":250,
        "mmWidth":250,
        "tileable":true,
        "mapping":"RGBA" 
     } 
}
```

### fields

- id
- material
- mapping
- platform
- image
- url
- height
- width
- mmHeight
- mmWidth
- tileable
- definition

## API Reference

### POST /

Accepts: json

Generates: json

for uploading a texture to a given material. There are meta data which has to be set and a definition parameter which
has some well known properties but is extendable with custom properties.

meta information:

- id: Long (is only needed for PUT)
- material: String ("catalog1:materialExtId1")
- image: String
- platform: String ("web")

definition well known properties:

- mapping: String ("RGBA")
- mmWidth: Long
- mmHeight: Long
- tileable: Boolean

deprecated properties:

- height
- width
- url
- ppm

### PUT /

Accepts: json

Generates: json

updates an existing texture with new information. Same meta data and definition properties are valid equal to POST.
