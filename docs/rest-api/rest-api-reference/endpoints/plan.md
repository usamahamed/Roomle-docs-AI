# PlanController

## Overview

- [POST /](#post-)
- [GET /demoPlans](#get-demoplans)
- [GET /id](#get-id)
- [PUT /id](#put-id)
- [DELETE /id](#delete-id)
- [POST /planId/assets/assetId](#post-planidassetsassetid)
- [POST /id/draft](#post-iddraft)
- [GET /id/settings](#get-idsettings)
- [POST /id/settings](#post-idsettings)
- [PUT /id/settings](#put-idsettings)

## Description

Path /v2/plans

Handles all requests regarding plans: creating, updating, deleting.

Plans can be userPlans (userId not null) oder tenantPlans (userId = null and tenant != 0)

### Plan JSON Object

An example for a plan JSON object.

```
{
    "plan":
        {
            "id":"userPlan3",
            "parent":"tenantPlan1",
            "name":"child of tenant plan 1",
            "user":"standardUser",
            "hash":"[NULL]",
            "visibility":0,
            "editRight":0,
            "description":"[NULL]",
            "active":true,
            "created":"2014-10-20T05:22:25.000Z",
            "draft":0,
            "changeDate":"2025-10-19T22:00:00.000Z",
            "planObjects":"planObjects content 4",
            "open":0,
            "planDirectory":1,
            "changed":0,
            "version":1,
            "floorLevel":0,
            "thumbnail":"thumbnailUserPlan3?version=1",
            "createdInTenant":2,"assets":[],
            "links":{},
            "objectsInPlan":[
                {
                    "combinedId": "catalogExtId:itemExtId",
                    "location": "x/y/z"
                },
                {   "combinedId": "catalogExtId:itemExtId:configuration",
                    "location": "10/20/0"
                },
                {   "combinedId": "catalogExtId:itemExtId:configuration",
                    "location": "1.2/2.3/4.5"
                }],
            "combinedIds" [
                "catalogExtId:itemExtId", 
                "catalogExtId:itemExtId:configuration"
                ],
        }
 }
```

### fields

- id
- pngIcon
- svgIcon
- inpirationImage
- global
- created
- accessibleByTenants
- translations
- hidden
- planObjects - the XML containing the plan data
- objectsInPlan - List of Jsons - each json is an object in the plan, composed of two fields - combinedId and location
- combinedIds - List of Strings - the list of unique combinedIds in the plan

## API Reference

### POST /

Accepts: json

Generates: json

standard way to create a new plan with the given content.

Returns a PlanContainer json with the created plan.

### POST /

Accepts: multipart-formdata

Generates: json

Converting external format to a plan.

Parameters:

- file: inputfile for the converter (may be zipped or gzipped)
- format: format of the inputfile (currently support: dxf)
- plan: json for the plan to be created. If provided this json will be enhanced by the planObjects from the converter
  and then added like in the normal POST
- converterParams: json containing parameters for the converter.

possible Parameters for dxf:

- windowHeight: Height of the windows, default 1200
- parapetHeight: Z position of the windows, default 900
- doorHeight: Height of the doors, default 2100

### GET /demoPlans

Accepts: json

Generates: json

Returns a json object with demo plans.

### GET /:id

Accepts: json

Generates: json

Returns a PlanContainer json with the plan whose id is specified.

### PUT /:id

Accepts: json

Generates: json

Updates user plan, user must have valid rights to modify plans

Returns a PlanContainer json with updated plan

### DELETE /:id

Accepts: json

Generates: json

Deletes the plan which has the specified id,users must have valid rights.

Returns empty content.

### POST /:planId/assets/:assetId

Accepts: multipart-formdata

Generates: json

uploads plan asset image, users must have valid rights, and the image size
being uploaded must not be too small

Returns a plan asset container json with the created plan assest.

```
{
    "planAsset":{
    "id":"assetId",
    "image":"image",
    "created":"2015-03-23T12:21:00.000Z"
    }
}
```

### POST /:id/draft

Accepts: multipart-formdata

Generates: json

uploads plan draft, users must have valid rights.

parameters:
id - the plan id
form-data - non-empty input stream.

Returns a plan draft json

```
{
	{
        "draft":{
            "id":30,
            "objId":0,
            "timestamp":"2020-03-31T13:30:04.088Z",
            "scale":1.0,"rotation":0.0,
            "pathRoomle":"https://rsomeurl/m403988.jpg"
        }
    }
}
```

### GET /:id/settings

Accepts: json

Generates: json

gets plan setting

Returns a plan settings json

```
{
    "id":"test_setting",
    "plan":"userPlan1",
    "metric":false," +
    "measurements":true,
    "area":true,
    "furnitureSnap":false,
    "roomHeight":2805,
    "wallThickness":250
}
```

### POST /:id/settings

Accepts: json

Generates: json

creates a plan setting, require users to have valid rights

Returns a settings json

### PUT /:id/settings

Accepts: json

Generates: json

updates a plan setting, require users to have valid rights

Returns a settings json


