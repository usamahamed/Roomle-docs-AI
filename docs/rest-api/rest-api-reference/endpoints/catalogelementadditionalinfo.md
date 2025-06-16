# CatalogElementAdditionalInfo

## Overview

- GET
- GET/id
- POST
- PUT /id

## Description

Path /v2/catalogElementAdditionalInfos

Handles all requests regarding the creation, updates and deletion of CatalogElementAdditionalInfos. There are different
types of elements within a catalog that can have additional information attached to them (like components,
component-parameters, paramter-values, materials etc.).
One information can be applied to multiple parent elements. f.e. one parameter info can be applied to multiple
components. Or some material information to multiple materials.

### CatalogElementAdditionalInfo JSON object

An example for a CatalogElementAdditionalInfo object.

```json

{
  "id":"randomGloballyUniqueId",
  "type":"parameter",
  "key":"material",
  "parentIdFilter":"comp1 comp2",
  "catalog":"someCatalog",
  "tooltip":{
    "de":"mein tipp",
    "it":"tippytoppy"
  },
  "fullInfo":{
    "type":"externalId",
    "url":{
      "de":"https://www.customer.com/content/materialInfo.html?language=de",
      "it":"https://www.customer.com/content/materialInfoEn.html"
    }
  }
}
```

### fields

- id: globally unique id of this element
- type: type of the information. This defines how the key and parentIdFilter is interpreted. Can
  be `parameter`, `paramValue`, `material`, `component` or `item`
- key: the key of the element which this info belongs to. Interpretation depends on the type
- parentIdFilter: space seperated list of ids where to apply this. usually extIds of elements within the catalog
- catalog: id of the catalog where this information belongs to
- tooltip: map of language:tooltip pairs containing the tooltip to show for this element in this language
- fullInfo: json containing additional information linked to the given key. In case of materials/components, the key is
  the externalId

## API Reference

### GET /

Generates: json

Query element data based on given filters. Catalog filter is mandatory.

Response:

````json
{
  "catalogElementAdditionalInfos": [
    elementAdditionalInfoObject1,
    elementAdditionalInfoObject2,
    ...
  ]
}
````

#### available filters

filters can be applied as query parameters

- catalog : (mandatory) only elementInformation for this catalog will be returned
- type
- parentId[] : only valid if type filter is set

### POST /

Generates: json
Accepts: json

creates a new CatalogElementAdditionalInfo object and returns it. body must be a CatalogAdditionalInformation-object
serialized as json (see above for an example)

caller needs catalog-mgt rights on the catalog

Response: the created object

### PUT /:id

Generates: json
Accepts: json

updates the given CatalogElementAdditionalInfo object and returns it. body must be a CatalogAdditionalInformation-object
serialized as json (see above for an example)

caller needs catalog-mgt rights on the catalog

Response: the updated object

### DELETE /:id

Generates: json
Accepts: json

deletes the given CatalogElementAdditionalInfo object.

caller needs catalog-mgt rights on the catalog

Response: 200 (OK)
