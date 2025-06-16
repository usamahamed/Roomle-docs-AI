# PriceServiceController

## Overview

- [GET /](#get-)
- [POST /](#post-)
- [PUT /id](#put-id)

## Description

Path /v2/priceServices

Handles all requests regarding priceService: creating, updating, deleting.

Requirement: Super admin rights

### PriceService JSON Object

An example for a priceService JSON object.

```
{
    "id":"aGeneratedUUID",
    "active":true, 
    "owner":9,
    "type":"PriceServiceMock",
    "settings":"ThisCouldAlsoBeAValidJsonButAnythingWorksAswell",
    "usedFor":[{"catalog":"catalog1","country":"at", "active":true }, 
                {"catalog":"catalog1", "active":true} ] 
}
```

### fields

- id : identifies a price service (required)
- active : activate/deactivate a price service
- owner : tenant number of the price service (required)
- type : type of price service (required)
- settings : settings for the price service
- usedFor : list the catalog where this price service is used. (required)

## API Reference

### GET /

Generates: json

- type: of your price service, there is currently only GenericPriceService
- settings: a json as string serialized for your GenericPriceService, you have to add property method and url
- usedFor: an array of all catalog to country connections. If country is null, then this price service the default for
  this catalog.

```
{
    "priceServices": <priceServiceJsonObject>
}
```

### POST /

Accepts: json

Generates: json

Requires super admin rights, for creating a new price service which is used to query prices for a specific catalog and
country. If you create a catalog to country connection without any country set or country = null, this will be used as
default for all countries for this catalog. You can see in the GETs JSON example with "usedFor", how these connections
can be created.

example:

```
{
    "priceService": <updatedPriceServiceJsonObject>
}
```

### PUT /:id

Accepts: json

Generates: json

for updating a specific price service. For the connections you have to append all needed "usedFor" entries, because any
missing one will be deleted.
