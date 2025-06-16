# ConfigurationController

## Description

Path /v2/configurations

Handles all requests regarding configuration: creating, updating, deleting.

Requirement: No specific required rights at the moment.

### Configuration JSON Object

An example for a configuration JSON object.

```json
{
  "id": "configId",
  "created": "2016-04-25T09:28:13.723Z",
  "configurationHash": "aHash",
  "configuration": "config",
  "orderable": false,
  "requestable": false,
  "assets": {
    "usdz": {
      "format": "usdz",
      "url": "https://uploads.roomle.com/somePath/to/some/usdz/file",
      "generated": "2016-04-25T09:28:13.723Z"
    },
    "glb": {
      "format": "glb",
      "url": "https://uploads.roomle.com/somePath/to/some/glb/file",
      "generated": "2016-04-25T09:28:13.723Z"
    }
  }
}
```

### fields

- id
- created
- configuration
- configurationHash
- requestable
- orderable
- height
- width
- depth
- assets

## API Reference

### PUT /:id (multipart)

updates assets on an item

Accepts: multipart-formdata

Generates: application/json

parameters:

- file : datafile to be uploaded
- type: type of the asset
- file2 - body, optional - the second data to be uploaded (image, ...)
- type2 - String, optional - the type of the second asset

possible types are
images: "perspectiveImage","topImage"

Response: Configuration object as described in section [Configuration JSON Object](#configuration-json-object)

```
{
    "configuration": configurationObject
}
```

### POST /:id/renderings

Creating a new asset processing rendering job (DAP-job) for requested configuration.

Accepts: multipart-formdata

Generates: json

path-parameters:

- id : configuration id

form-parameters: The form parameter body for renderings require the settings property to be
present and the views field of this property to be non-empty.

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
        }
    ]
}

```

### POST /:id/3d-exports

Accepts: multipart-formdata

Generates: json

Creates a new asset processing 3d-exports job (DAP-job) for the requested configuration.

path-parameters:
-id : configuration id

form-parameters: The form parameter body for 3d-exports require the settings property to be
present and the export field of this property to be non-empty.

- settings: contains all settings for import/render/export
- email: contains the email address to which to send the 3dExport email containing the link to the exported file

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

For a list of file_format keys, see [Supported formats](#Supported-formats).

### GET /:id/3dAssets/:format

Generates: Octet stream

Request a new 3d-exports synchronously for requested configuration.
(client receives no email for this call.)

path-parameters:
-id : configuration id
-format : asset format e.g [ usdz / glTF / glb ] - for a detailed list see [Supported formats](#Supported-formats).

### GET /:id/3dAssets/:format/:dummyFileName

Generates: Octet stream

Same as the other 3dAssets call, the pathParam `dummyFileName` is there for clients who need to make it look like a
static file.

path-parameters:
-id : configuration id
-format : asset format e.g [ usdz / glTF / glb ] - for a detailed list see [Supported formats](#Supported-formats).

### Supported formats

The available formats with respective file_format key:

- `abc`     - Allembic (.abc)
- `dxf`     - Autodesk Drawing Interchange File (.dxf)
- `fbx`     - Autodesk FBX (.fbx)
- `blend`   - Blender (.blend)
- `dae`     - Collada (.dae)
- `x3d`     - Extensible 3D (.x3d)
- `glTF`    - glTF (.gltf/.glb)
- `glb`     - glTF (.gltf/.glb)
- `ply`     - Polygon File Format / Stanford Triangle Format (.ply)
- `stl`     - Stereolithography (.stl; often used for 3D printing)
- `usd`     - Universal Scene Description (.usdc/.usdz)
- `usdz`    - Universal Scene Description (.usdc/.usdz)
- `obj`     - Wavefront Object (.obj)

### POST /:id/shares

Accepts: multipart-formdata

Generates: json

Path :

- id - String - id of the Configuration to share
  Content:
- type - Integer - the type of the share (1 = Standard, 2 = AR, 3 = save draft)
- email - String - the email address to send the share to
- message - String - a custom message to be added to the email
- params - JSON object - key:value object containing additional urlParams to be added to the share link

Shares this Configuration to the given email. Share can be include a normal link (type = 1), a direct link to AR (type = 2) or work as saving the draft for yourself (email should be the senders email, type = 3)

### POST /fromSerialized

Accepts: application/json
Generates: application/json

Endpoint to get an existing configuration from a serialized configuration. With this endpoint you can check if this
configuration already exists. Body is the serialized configurationdata (directly as you get it from the core) like

```json
{
  "children": [],
  "componentId": "some:rootComponent",
  "dockChild": "",
  "dockParent": "",
  "dockPosition": "",
  "parameters": {
    "paramKey1": "value1",
    "paramKey2": "value2"
  }
}
```

Response: a ConfigurationContainer with the configuration if it exists

```
{
    "configuration": configurationObject
}
```
