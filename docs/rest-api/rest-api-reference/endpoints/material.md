# MaterialController

## Overview

- [POST /id/thumbnail](#post-idthumbnail)
- [GET /id/thumbnail](#get-idthumbnail)

## Description

This is a material.

Path /v2/materials

Handles all request regarding materials: creating, updating, deleting.

query-params for every GET-call:

- embedTextures: true/false if true the materials contain textureObjects additionally to the textures array (with the
  ids) so that the client doesn't have to request them seperatly

### Material JSON object

An example for a material json object.

```json
{
  "externalIdentifier": "materialExtId1",
  "version": 0,
  "id": "catalog1:materialExtId1",
  "color": "128,128,128",
  "shading": {
    "basecolor": {
      "r": 0.9019607843137255,
      "g": 0.5823529411764706,
      "b": 0.6470588235294118
    },
    "specularity": 0.9999999999999999,
    "metallic": 0,
    "roughness": 0.6,
    "alpha": 1.0
  },
  "properties": {
    "property1": "value1",
    "property2": "value2",
    "property3": "value3",
    "property4": "value4"
  },
  "thumbnail": "thumb",
  "asset": "asset/web/3/assetfile",
  "textures": [
    1
  ],
  "tags": [
    "tag1",
    "tag2"
  ],
  "label": "mat1En",
  "language": "en",
  "catalog": "catalog1",
  "group": "catalog1:group1",
  "links": {
    "textures": "/materials/catalog1:materialExtId1/textures"
  },
  "hidden": false,
  "active": true,
  "activeFrom": "2020-01-01T00:00:00.000Z",
  "activeTill": "2022-10-01T00:00:00.000Z",
  "sort": 13,
  "updated": "1970-01-01T00:00:00.000Z",
  "created": "1970-01-01T00:00:00.000Z",
  "visibilityStatus": 0
}
```

### fields

- externalIdentfier
- version
- id
- color
- shading
- properties
- thumbnail
- asset
- textures
- tags
- label
- language
- catalog
- group
- links
- hidden - deprecated, superseded by visibilityStatus
- active - deprecated, superseded by visibilityStatus
- activeFrom
- activeTill
- updated
- created
- visibilityStatus : possible values (0, 1, 2), note that this value is computed from activeFrom and activeTill if those
  are set
    - 0 : "shown everywhere "
    - 1 : "shown only in Rubens Admin"
    - 2 : "hidden everywhere" - item is archived

### GET /v2/materials

List of all materials matching the filter and visible to the Client

Generates: application/json

Response success (200 OK):

```json
{
  "materials": [
    <materialJson>,
    <materialJson>
    ...
  ]
}
```

Parameters

| Name          | Type            | Comment                                                    |
|---------------|-----------------|------------------------------------------------------------|
| catalogs[]    | List of strings | filters the result to the given catalog ids                |
| embedTextures | Boolean         | If true the textures are included as embedded json objects |

### POST /v2/materials

Creates a new material in the catalog provided in the body.

Accepts: application/json Generates: application/json

Body:

```json
{
  "material": <materialJson>
}
```

Response success (201 CREATED):

```json
{
  "material": <materialJson>
}
```

### PUT /v2/materials/:materialId

Updates the metainformation of a material. Thumbnail needs to be uploaded explicitly (can’t be changed with this call).

Accepts: application/json Generates: application/json

Body:

```json
{
  "material": <materialJson>
}
```

Response success (200 OK):

```json
{
  "material": <materialJson>
}
```

### POST /v2/materials/:materialId/thumbnail

Uploads the thumbnail for the material. Override the last uploaded thumbnail if any.

Accepts: multipart-formdata

Generates: application/json (the adapted material)

Body: thumbnail binary file  (filename is only relevant for the ending)

Response success (200 OK):

```json
{
  "material": <materialJson>
}
```

Updated materialJSON with updated thumbnailUrl.

For uploading a thumbnail to a given material. The image will be uploaded and linked in the material. If the image is
bigger than 256x256, it will be resized to fit in to the square 256x256.

### GET /v2/materials/:materialId/thumbnail

Returns a temporary redirect (307) to the URL of the thumbnail for this material.
If the response status is 403, you are not allowed to see the material.
If the response status is 404, the material has no thumbnail.