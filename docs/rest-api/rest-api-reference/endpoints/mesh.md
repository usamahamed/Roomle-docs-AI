# MeshController

## Overview

- [POST /](#post-)
- [GET /id/data](#get-iddata)

## Description

Path /v2/meshes

Handles all requests regarding mesh: creating, updating, deleting.

### Configuration JSON Object

An example for a mesh JSON object.

```
{ 
 "created": "2016-04-11T14:34:14.000Z", 
 "id":"usm:TVLowboard",
 "visibilityStatus":1,
 "catalog":"usm",
 "links": {"data": "/meshes/usm:TVLowboard/data"}
 }
```

### fields

- created
- id
- visibilityStatus : possible values
    - 0 : SHOWN (visible everywhere)
    - 1 : SHOWN_IN_CMS (visible only in cms context)
    - 2 : ARCHIVED (hidden everywhere)
- catalog
- links

## API Reference

## Creating Meshes

### POST /

Accepts: multipart-formdata

Generates: json

parameters:

- data : zip with meshsources
- catalog: extId of the catalog to upload the meshes to.
- allowUpdate: boolean if updating is allowed
- format: wanted format for the files (currently only crt)
- quality: quality of the mesh sources

For uploading batches of external meshes. All obj, ply or crt files in the zip are added as external mesh to the
catalog. The name of the file is the extId of the mesh. If meshes already exist they are updated (if "allowUpdates" is
true).

### GET /:id/data

Accepts: application/json

Generates: application/json

Returns list of meshData for the given mesh id. If no format, all meshdata entries for the given id are returned.

query-params:

- format : format of requested meshData
- targetQuality: quality of requested meshData - default 0 - returns closest match