#ItemController

## Overview

- [GET /](#get-)
- [GET /id/topImage](#get-idtopimage)
- [GET /id/perspectiveImage](#get-idperspectiveimage)
- [GET /id/perspectiveImageHD](#get-idperspectiveimagehd)
- [GET /id/threeDimensionalAssets](#get-idthreedimensionalassets)
- [POST /id/threeDimensionalAssets](#post-idthreedimensionalassets)
- [PUT /id/threeDimensionalAssets](#put-idthreedimensionalassets)
- [POST /id/renderings](#post-idrenderings)
- [POST /id/3d-exports](#post-id3d-exports)
- [POST /id/3d-assets](#post-idassets)
- [POST /id/conversions](#post-idconversions)

## Description

Path /v2/items

Handles all requests regarding items: creating, updating, deleting.

### Item JSON object

An example for a item json object.

```json
{
    "width": 350,
    "height": 2250,
    "depth": 340,
    "displayedWidth": 300,
    "displayedHeight": 2200,
    "displayedDepth": 310,
    "perspectiveImage": "https://url-of-perspectiveImage",
    "perspectiveImageHD": "https://url-of-perspectiveImageHD",
    "topImage": "https://url-of-topImage",
    "assets": {
        "usdz":{
            "format":"usdz",
            "url":"https://uploads.roomle.com/somePath/to/some/usdz/file.usdz"},
        "glb":{
            "format":"glb",
            "url":"https://uploads.roomle.com/somePath/to/some/glb/file.glb"}
    },
    "configuration": "configuration as JSON",
    "hidden": false,
    "visibilityStatus": 0,
    "created": "2016-04-11T14:34:14.000Z",
    "manufacturerSKU": "manuSKU",
    "updated": "2016-04-12T09:17:16.000Z",
    "type": "storage",
    "detailType": "cabinet",
    "flipable": false,
    "scaleable": false,
    "colorable": false,
    "layer": 30,
    "orderable": false,
    "requestable": true,
    "retailPriceAllowed": false,
    "label": "USM TV Lowboard ",
    "language": "en",
    "catalog": "usm",
    "id": "usm:TVLowboard",
    "tags": ["living", "usm_root"],
    "affiliateIds": ["affiliate1", "affiliate2"],
    "links": {
        "tags": "/items/usm:TVLowboard/tags",
        "additionalContents": "/items/usm:TVLowboard/additionalContents",
        "similarItems": "/items/usm:TVLowboard/similarItems",
        "perfectFit": "/items/usm:TVLowboard/perfectFit"
    },
    "attributes": [{
        "key": "material",
        "value": "testMaterial",
        "label": "testLabel"
    }],
    "basecolor": "aabbcc",
    "elementType": "1",
    "assetProcessings": [{
      "id": "anyStringId",
      "type": 0,
      "status": 10,
      "sourceUrl": "link/to/source.zip"
    }],
    "translations": [{
      "language": "en",
      "label": "labelEN"
    }],
    "version": 3
}
```

### fields

- width
- height
- depth
- displayedWidth
- displayedHeight
- displayedDepth
- perspectiveImage
- perspectiveImageHD
- topImage
- assets : the known 3dAssets for this item.
- configuration
- hidden - deprecated - superseded by visibilityStatus
- visibilityStatus : possible values
  - 0 : SHOWN (visible everywhere)
  - 1 : SHOWN_IN_CMS (visible only in cms context)
  - 2 : ARCHIVED (hidden everywhere)
- created
- manufacturerSKU
- updated
- type
- detailType
- flipable
- scaleable
- colorable
- layer
- orderable
- requestable
- retailPriceAllowed
- label
- language
- catalog
- id
- tags
- affiliateIds
- links
- attributes
- basecolor
- version

## API Reference

### GET /

Generates: json

Query item data based on given filters. If no filter is added by query parameters, all visible items for the requested
user will be returned.

query-param:

- deltaSince: has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`. Only if given date string is matching this format, the response will be reduced to
  only updated items after given date.

Filter:

Each bullet point describes an available filter, where each secondary bullet point/s names the query parameter, which
has to be added to the request in order to execute that filter correctly. If requirements for a filter are not met, then
the request will behave like no filter was added and therefore will return all visible items.

- all items for one catalog
    - catalog
- all items for many catalogs
    - catalog[]
- all items which are visible to the requested user and match types
    - types[]
- specific items per id
    - ids[]
- perfect fit items per item ids
    - perfectFitItemIds[]
- perfect fit items per component ids
    - perfectFitComponentIds[]
- similar items
    - type
    - detailType
    - color
    - width
    - depth
    - height

Response:

Item objects are described in Section [Item JSON Object](#item-json-object)

```
{
    "items": [
        itemObjects1,
        itemObject2,
        ...
    ],
    "meta": {
        "lastUpdated": "2018-01-23T09:15:39.000Z",
        "cached": false,
        "total": 2,
        "serverTime": "2019-03-14T12:29:08.549Z"
    }
}
```

### PUT /:id (multipart)

updates assets on an item

Accepts: multipart-formdata

Generates: application/json

parameters:

- file : datafile to be uploaded
- type: type of the asset

possible types are
images: "perspectiveImage","perspectiveImageHD","topImage"
assetSource for 3d data: "src"

Response: Item object as described in section [Item JSON Object](#item-json-object)

```
{
    "item": itemObject
}
```

### PUT /:id (json)

Updates an existing Item.

Accepts: application/json

Generates: application/json

Response: Item object as described in section [Item JSON Object](#item-json-object)

```
{
    "item": itemObject
}
```


### GET /:id/topImage

returns a temporary redirect (307) to the URL of the topImage for this item

### GET /:id/perspectiveImage

returns a temporary redirect (307) to the URL of the perspectiveImage for this item

### GET /:id/perspectiveImageHD

returns a temporary redirect (307) to the URL of the perspectiveImageHD for this item

## Uploading 3D Assets

You can upload 3D Assets for an item which will then be processed for realtime usage within the roomle plattform.
If processed successfully, the dimensions of the 3D Asset will be taken as dimensions for the object, overriding any
previously existing dimensions.

### Asset Processing JSON object

An example for an asset processing object.

| Type | Description |
|------|-------------|
| 0    | item        |

| Status | Description                                 |
|--------|---------------------------------------------|
| 0      | DAP received job                            |
| 10     | DAP is processing this job                  |
| 100    | DAP has successfully processed this job     |
| -1     | DAP had some kind of error while processing |

```
{
	"id": "anyStringId",
	"type": 0,
	"status": 10,
	"sourceUrl": "link/to/source.zip"
}
```

### GET /:id/threeDimensionalAssets

Generates: json

Returns all asset processing statuses for requested item

Response: Asset Processing objects are described in
Section [Asset Processing JSON Object](#asset-processing-json-object)

```
{
    "assetProcessings": [
        assetProcessingObjects1,   
        assetProcessingObjects2,
        ...
    ],
    "meta": {
        "total": 2,
        "serverTime": "2019-03-14T12:29:08.549Z"
    }
}
```

### POST /:id/threeDimensionalAssets

Accepts: multipart-formdata

Generates: json

Creating a new asset processing (DAP-job) for requested item. needs to provide either the compressed source file or a
url to the compressed sourcefile. if both are provided, the URL is ignored.

form-parameters:

- threeDimensionalAsset (file) : the source file to be processed (zip or tar.gz)
- threeDimensionalAssetUrl (string) : URL to the source file

### PUT /:id/threeDimensionalAssets

Accepts: multipart-formdata

Generates: json

Updating asset processing with either just a progress update or with a finished zipped file.

### POST /:id/threeDimensionalAsset Deprecated

use POST /:id/threeDimensionalAssets instead

### PUT /:id/threeDimensionalAsset Deprecated

use PUT /:id/threeDimensionalAssets instead

### POST /:id/renderings

Creating a new asset processing rendering job (DAP-job) for requested item.

Accepts: multipart-formdata

Generates: json

path-parameters:

- id : item id

form-parameters: The form parameter body for rendering require the settings property to be
present and views field of this property to be non-empty.
- settings: contains all settings for import/render/export

```
{
    "light_preset": "default",
    "quality": "default",
    "views": [
        {
            "resolution_height": 1080,
            "resolution_width": 1920,
            "view_type": "perspective"
        },
        {
            "pixel_per_meter": 400,
            "view_type": "ortho_top"
        },
        {
            "camera_yaw": 0.0,
            "resolution_height": 1080,
            "resolution_width": 1920,
            "steps": 18,
            "view_type": "turntable"
        }
    ]
}
```

### POST /:id/3d-exports

Creating a new asset processing 3d-exports job (DAP-job) for requested item.

Accepts: multipart-formdata

Generates: json

path-parameters:
-id : item id

form-parameters: The form parameter body for 3d-exports require the settings property
to be present and the export field of this property to be non-empty.

- settings: contains all settings for import/render/export.

```
{
    "formats": [
        {
            "file_format": "blend",
            "pack_external_data": true
        }
    ]
}

```

### POST /:id/assets

Saving a new asset for the given item.

Accepts: multipart-formdata

Generates: json

path-parameters:
-id : item id

form-parameters:

- assetFile: body with file disposition - contains the file
- assetUrl : field - url to the asset
- type : field - string identifier of the asset type

The multipart should contain either an asset file or a url to the asset. It also requires a type for the asset.
The type can be any string except internally reserved ones. The files will keep their extensions.
The posts can only be made in a cms context

### POST /:id/conversions

Creating a new asset processing conversion job (DAP-job) targeting the item.

Accepts: multipart-formdata

Generates: json

path-parameters:

- id : String - combinedId of the item where the results of the conversion will be saved, must be already created

form-parameters:

- sourceId : String - combined id of the item that is the source of the conversion
- type : String - identifier of the conversion type
- settings: contains all settings for import/render/export/convert.

Settings json example:

```
{
    "target_id": "catalogId:targetItemId"
}

```

#### Conversion types:

- 'static-to-configurable' : This conversion takes the source static item and converts it into a configurable item by
  creating materials, textures, meshes and components.
  The resulting component is then set as the target items root component, to achieve an immediately usable configurable
  item.