# ComponentController

## Overview

- [GET /id](#get-id)
- [POST /](#post-)
- [PUT /id](#put-id)
- [GET /id/tags](#get-idtags)
- [Component Restrictions](#component-restrictions)
    - [GET /restrictions](#get-restrictions)
    - [POST /restrictions](#post-restrictions)
    - [PUT /restrictions/id](#put-restrictionsid)
    - [DELETE /restrictions/id](#delete-restrictionsid)
    - [GET /id/perspectiveImage](#get-idperspectiveimage)

## Description

Path /v2/components

Handles all request regarding component: creating, updating, deleting.

### Component JSON Object

An example for a component JSON object.

```
{
    "externalIdentifier": "door_1",
    "catalog": "roomle_white_furniture",
    "id": "roomle_white_furniture:door_1",
    "type": "door",
    "detailType": "other",
    "configuration": "a configuration JSON which describes this configuration.",
    "restrictionsForCore": "Json array of restrictions to be forwarded to the core",
    "active": false,
    "visibilityStatus": 1,
    "updated": "2016-06-01T07:54:07.000Z",
    "created": "2016-01-13T11:25:17.000Z",
    "perspectiveImage": "https://url-of-perspectiveImage",
    "labels": [],
    "orderable": false,
    "label": "Door",
    "layer": 15,
    "language": "en",
    "links": {
        "tags": "/components/roomle_white_furniture:door_1/tags"
    },
    "priceScript": "{ somePriceScript}",
    "translations":[{"language":"EN","description":"ENdescription","label":"ENlable","created":"2017-05-27T09:28:12.733Z","updated":"2016-04-25T09:28:13.723Z"}],
    "neededComponents":"someComponentId,anotherComponentId",
    "elementType":"1",
    "version": 0
}
```

### fields

- externalIndentifier
- catalog
- id
- type
- detailType
- configuration
- restrictionsForCore
- active - deprecated - superseded by visibilityStatus
- visibilityStatus : possible values
  - 0 : SHOWN (visible everywhere)
  - 1 : SHOWN_IN_CMS (visible only in cms context)
  - 2 : ARCHIVED (hidden everywhere)
- updated
- created
- prespectiveImage
- labels
- orderable
- label
- layer
- priceScript
- translations
- neededComponents
- elementType
- language
- links
- version

## API Reference

### GET /:id

Generates: json

Returns a specific component.

Response:

Component objects are described in section [Component JSON Object](#component-json-object)

```
{
    "component": componentObject
}
```

### POST /

Creates a new component.

Accepts: application/json Generates: application/json

Response: Component object as described in section [Component JSON Object](#component-json-object)

```
{
    "component": componentObject
}
```

### PUT /:id

Updates an existing component.

Accepts: application/json Generates: application/json

Response: Component object as described in section [Component JSON Object](#component-json-object)

```
{
    "component": componentObject
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
images: "perspectiveImage"

Response: Component object as described in section [Component JSON Object](#component-json-object)

```
{
    "component": componentObject
}
```


### GET /:id/tags

Generates: json

Returns all tags which have are assigned to this component.

Response:

Tag objects are described in section [Tag JSON Object](#tag-json-object)

```
{
    "tags": [
        tagObject1,
        tagObject2,
        ...
    ],
    "meta": {
        "total": 2,
        "serverTime": "2019-03-14T13:02:37.222Z"
    }
}
```

## Component restrictions

Path /v2/components/:id

Restrictions are used to restrict views from showing parameters, parameter-values or addons. A Restriction contains

- embedId or tenantId : defines where this restriction applies. Either the given tenant in roomle, or the embedding (
  configurator). if none is given the restriction is global.
- fromOwner : defines if this restriction is managed by the owner of the catalog, if false, the owner of the target
  tenant/embed manages it.
- active : if this restriction is currently active
- restrictionTarget : "parameter", "valueIn:<paramKey>" or "addOn" what to apply this restriction on
- restrictionType : EXCLUDE(1) or RESTRICT_TO(2) : exclude means this value should not be shown, restrict_to means only
  these values should be shown.
- restrictionValue : the value of the restriction

```
{
    "id":"idOfTheRestriction",
    "fromOwner":true,
    "embedId":"configuratorId",
    "restrictionTarget":"paramValue:width",
    "restrictionType":2,
    "restrictionValue":"120"
    "active":true
}
```

### GET /restrictions

Generates: json

returns the restrictions of this component manageable by the current tenant (fromOwner if tenant is owner, matching
tenantId or embedds where this tenant is the owner)

### POST /restrictions

Accepts: json

Generates: json

creates a new restriction with the given values

### PUT /restrictions/:id

Accepts: json

Generates: json

updates the given restriction with the given values

### DELETE /restrictions/:id

deletes the given restriction

### GET /:id/perspectiveImage

returns a temporary redirect (307) to the URL of the perspectiveImage for this component
