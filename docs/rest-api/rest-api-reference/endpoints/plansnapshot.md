# PlanSnapshotController

## Overview

- [POST /](#post-)
- [GET /id](#get-id)
- [PUT /id](#get-id)
- [POST_/id/shares](#post-idshares)

## Description

Path /v2/planSnapshots

Handles all requests regarding planSnapshots: getting and creating.
Updating and deleting is not possible.

A PlanSnapshot is a saved version of a current state of a plan. It stores everything that is needed to use this data
standalone in a webshop context.

It can be seen like Configurations which are a snapshot of the current state within a configurator.

It is important to understand that a PlanSnapshot can have a plan as parentId (the planning started with this plan) but
has no further connection to plans.

### PlanSnapshot JSON Object

An example for a planSnapshot JSON object.

```
{
    "planSnapshot":
        {
            "id":"ps_planSnapshotId",
            "parentId":"ps_planSnapshotIdOfParent",
            "created":"2023-05-01T05:22:25.000Z",
            "updated":"2023-05-01T05:22:25.000Z",
            "planObjects":[
                {
                    "combinedId": "catalogExtId:itemExtId",
                    "position": "positionString"
                },
                {   "combinedId": "catalogExtId:itemExtId:configuration",
                    "position": "aPositionString"
                },
                {   "combinedId": "catalogExtId:itemExtId:configuration",
                    "position": "anotherPositionString"
                }],
            "combinedIds" [
                "catalogExtId:itemExtId", 
                "catalogExtId:itemExtId:configuration"
                ],
            "embedId":"configuratorId",
            "perspectiveImage":"https://roomle.com/ps_planSnapshotId/perspectiveImage.jpg",
            "topImage":"https://roomle.com/ps_planSnapshotId/topImage.jpg",
            "plan":"thePlanXmlString",
        }
 }
```

### fields

- id - String - uniqueId of a planSnapshot
- parentId - String - uniqueId of a planSnapshot that is previous version of the current one or of a plan which the
  snapshot originates from
- created - Long - unix timestamp
- updated - Long - unix timestamp
- planObjects - List of Jsons - each json is an object in the plan, composed of two fields - combinedId and position
- combinedIds - List of Strings - the list of unique combinedIds in the planSnapshot
- embedId - String - the id of the configurator where the planSnapshot was created
- perspectiveImage - String - link to the perspective image of the planSnapshot
- topImage - String - link to the top image of the planSnapshot
- plan - String - the plan XML generated by the core

## API Reference

### POST /

Accepts: json

Generates: json

standard way to create a new planSnapshot with the given content.

The post should contain:

- parentId
- planObjects
- plan

Other fields will either generate an error or be overridden.

Returns a PlanSnapshotContainer json with the created planSnapshot.

### GET /:id

Accepts: json

Generates: json

Returns a PlanSnapshotContainer json with the planSnapshot whose id is specified.

### PUT /:id

Accepts: multipart-formdata

Generates: json

Path :

- id - String - id of the PlanSnapshot to update
  Content:
- file - body - the data to be uploaded (image, ...)
- type - String - the type of asset
- file2 - body, optional - the second data to be uploaded (image, ...)
- type2 - String, optional - the type of the second asset

Possible types:

- perspectiveImage - returned as a link in the json field "perspectiveImage"
- topImage - returned as a link in the json field "topImage"

Returns a PlanSnapshotContainer json with the updated planSnapshot object.

### POST /:id/shares

Accepts: multipart-formdata

Generates: json

Path :

- id - String - id of the PlanSnapshot to share
  Content:
- type - Integer - the type of the share (11 = Standard, 12 = AR, 13 = saveDraft)
- email - String - the email address to send the share to
- message - String - a custom message to be added to the email
- params - JSON object - key:value object containing additional urlParams to be added to the share link

Shares this PlanSnapshot to the given email. Share can be include a normal link (type=11), a direct link to AR (type=12)
or work as saving the draft for yourself (email should be the senders email, type=13)

### POST /:id/3d-exports

Accepts: multipart-formdata

Generates: json

Path :

- id - String - id of the PlanSnapshot to share
  Content:
- email - String - the email address to send the share to
- settings - String - a json containing the 3D export settings

Starts an asynchronous 3D export, which will send an email to the given email address upon completion.
The endpoint returns an AssetProcessing Container.

### POST /:id/renderings

Accepts: multipart-formdata

Generates: json

Path :

- id - String - id of the PlanSnapshot to share
  Content:
- settings - String - a json containing the 3D export settings

Starts an asynchronous rendering, which will send an email to the email address of the user that triggered it upon
completion.
The endpoint returns an AssetProcessing Container.

### GET /:id/3dAssets/:format

Generates: APPLICATION_OCTET_STREAM

Path :

- id - String - id of the PlanSnapshot to share
- format - String - identifier of the requested format

Starts an synchronous 3D export, which will be returned as a stream.

For a list of supported formats: [Supported formats](./Configuration.md#Supported-formats)

### GET /:id/3dAssets/:format/:filename

Generates: APPLICATION_OCTET_STREAM

Path :

- id - String - id of the PlanSnapshot to share
- format - String - identifier of the requested format
- filename - String - filename

Starts an synchronous 3D export, which will be returned as a stream.
Used to generate a file on the return

For a list of supported formats: [Supported formats](./Configuration.md#Supported-formats)
