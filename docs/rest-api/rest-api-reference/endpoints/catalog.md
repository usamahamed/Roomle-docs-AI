# CatalogController

## Overview

- [Description](#description)
    - [Catalog Object](#catalog-json-object)
- [Concepts](#concepts)
    - [CatalogDrafts](#catalogdrafts)
        - [Publishing a draft](#publishing)
    - [Visibility](#visibility)
- [Batch Uploader Feedback Codes](#batch-uploader-feedback-codes)
    - [Warnings](#warnings)
    - [Errors](#errors)
- [API Reference](#api-reference)
    - [Catalogs](#_catalogs_)
        - [POST - Create-Catalog](#post-catalog---create-catalog)
        - [GET /id](#get-id)
        - [PUT /id](#put-id)
        - [DELETE /id ](#delete-id)
    - [Items](#_items_)
        - [Item object](#item-object)
        - [GET /id/items](#get-iditems)
        - [POST /id/items](#post-iditems)
        - [POST /id/threeDimensionalAssets](#post-idthreedimensionalassets)
    - [Materials](#_materials_)
        - [GET /id/materials](#get-idmaterials)
        - [POST /id/materials](#post-idmaterials)
    - [Tags](#_tags_)
        - [GET /id/tags](#get-idtags)
        - [POST /id/tags](#post-idtags)
        - [GET /id/allTags](#get-idalltags)
    - [Prices](#_prices_)
        - [GET /id/prices](#get-idprices)
        - [POST /id/prices](#post-idprices)
    - [Components](#_components_)
        - [GET /id/components](#get-idcomponents)
        - [POST /id/components](#post-idcomponents)
    - [Drafts](#_drafts_)
        - [GET /id/drafts](#get-iddrafts)
        - [POST /id/drafts - Create empty draft](#post-iddrafts---create-empty-draft)
        - [POST /id/drafts - Create from ZIP](#post-iddrafts---create-draft-from-zip)
    - [Imports](#_imports_)
        - [CatalogImportStatus Object](#catalogimportstatus-object-example)
    - [Meshes](#_meshes_)
        - [GET /id/meshes](#get-idmeshes)
        - [GET /id/meshes](#get-idmeshes---zip)

## Description

Path /v2/catalogs

Handles all request regarding catalog: creating, updating, deleting.

### Catalog JSON Object

An example for a catalog JSON object.

```json
{
  "catalog": {
    "translations": [
      {
        "id": "7fb1db43-b997-4703-be83-6e3e975b901a",
        "language": "en",
        "label": "label in language",
        "description": "description in language",
        "created": "2024-05-24T07:42:20.000Z",
        "updated": "2024-05-24T07:42:21.000Z"
      }
    ],
    "id": "<catalog_id>",
    "free": false,
    "public": false,
    "featured": false,
    "created": "2024-05-24T07:42:20.000Z",
    "updated": "2024-05-24T07:42:21.000Z",
    "active": true,
    "hidden": false,
    "visibilityStatus": 0,
    "publiclyOrderable": false,
    "mandatory": false,
    "draftOf": "<parent_catalog_id>",
    "draftStatus": {
      "draftCatalogId": "<draft_catalog_id>",
      "targetCatalogId": "<live_catalog_id>",
      "status": 10,
      "progress": 0,
      "locksLiveCatalog": true,
      "lockDraftCatalog": false,
      "mergePolicies": {}
    },
    "links": {
      "items": "/catalogs/<catalog_id>/items",
      "catalogSets": "/catalogs/<catalog_id>/catalogSets",
      "allItems": "/catalogs/<catalog_id>/allItems",
      "components": "/catalogs/<catalog_id>/components",
      "materials": "/catalogs/<catalog_id>/materials",
      "textures": "/catalogs/<catalog_id>/textures",
      "allTags": "/catalogs/<catalog_id>/allTags",
      "rootTags": "/catalogs/<catalog_id>/rootTags",
      "retailers": "/catalogs/<catalog_id>/retailers",
      "retailerInfos": "/catalogs/<catalog_id>/retailerInfos",
      "visibleToTenants": "/catalogs/<catalog_id>/visibleToTenants",
      "visibleToUsers": "/catalogs/<catalog_id>/visibleToUsers",
      "meshes": "/catalogs/<catalog_id>/meshes",
      "imports": "/catalogs/<catalog_id>/imports",
      "catalogElementAdditionalInfos": "/catalogs/<catalog_id>/catalogElementAdditionalInfos"
    },
    "language": "en",
    "name": "catalog name",
    "label": "catalog label",
    "orderable": false,
    "requestable": false,
    "retailPriceAllowed": false,
    "hiddenByUser": false,
    "hiddenByTenant": true,
    "tenantIsOwner": true,
    "purchased": false,
    "tags": [
      "<catalog tags>"
    ],
    "rootTags": [
      "<catalog root tags>"
    ],
    "tenant": <my_tenant_id>,
    "branded": true,
    "shownInOverview": false,
    "accessibleByTenants": [
      "tenant_name"
    ]
  }
}
```

### fields

- id
- active - deprecated - superseded by visibilityStatus
- hidden - deprecated - superseded by visibilityStatus
- visibilityStatus : possible values
    - 0 : SHOWN (visible everywhere)
    - 1 : SHOWN_IN_CMS (visible only in cms context)
    - 2 : ARCHIVED (hidden everywhere)
- created
- updated
- draftStatus (Explained below in the concepts section)
- tenant
- links (api links to the materials, items etc. in the catalog)
- draftOf (If this is a draft catalog then this field denotes the live Catalog from which this draft is created or the
  live catalog this draft is pointing to)

## Concepts

### CatalogDrafts

It is possible to create drafts of catalogs for updating data without directly changing live data.
A catalog can have multiple drafts simultaneously. Each draft belongs to exactly one catalog.

Each Draft has an associated CatalogDraftStatus. The status contains additional information like

- mergePolicies - the merge policies to be used when the draft is published
- releaseLog - the log of the publishing process

The draftStatus can be updated by including the status object in the `PUT /:draftId` (updating the catalogDraft
directly).

Possible Status of the draft:

- FAILED(-1)
- CREATED(0)
- IN_PROGRESS(10)
- READY_TO_REVIEW(20)
- READY_FOR_PUBLISHING(30)
- IS_PUBLISHED(40)

#### Publishing

For publishing a draft, its status must first be set to READY_FOR_PUBLISHING. Any draft with this status can be
published by sending a
`POST /:productionCatalogId/drafts/:draftId/publish` where `productionCatalogId` is the id of the live catalog.

When a draft is published, the data of the draft is moved to the live catalog according to the merge policies.
The draft Catalog is completely removed but an archived catalog is created with the same id as the draft catalog. The
archived version includes a snapshot of the catalog before the publishing.
Also including the draftStatus from the original draft with the status updated to PUBLISHED.

In case of any error, the archived snapshot can be put back into the live catalog by
calling `POST /:productionCatalogId/drafts/:draftId/unpublish`. This flips all archived data back to live and any
corresponding live data back to the draft and sets the draft back to READY_FOR_PUBLISHING.

### Visibility

A short description how our catalog visibility currently works and what the thoughts behind are.

We differ between two aspects for each element (item, material, tags, etc.)

1) allowed to see an element
2) wants to see an element (will be referred as visible in further explanation)

Every request will be checked if the requester is allowed to see requested elements. The second check will be different
based on what the requester is actually asking. To have a better base to explain take a look at following sketch.

```
               Catalog
     /       /        \         \
Material -- Tags -- Items -- Components
    |                  |
Textures           AdditionalContent        
```

All requests which will go down in the hierarchy for example `v2/catalogs/:id/items` will return all items which the
requester is allowed to see and not only visible. That means - there may be more items in the result set, than the
requester wants to show in the catalog. Therefore, a property like `hidden`is set on the element and the requester has
to decide.

All requests which are sideways like `v2/items/:id/tags` or `v2/tags/:id/materials` will return all tags or material
which are assigned to that tag and will be restricted to allowed to see and only visible elements. That means - the
requester only gets elements it wants to see.

The last possible way to query elements is by attaching a filter. For example an `ids[]` filter. Which will return an
element if the requester is allowed to see that element. If the requester is instead asking for all items or materials
via `v2/items` or `v2/materials` only elements which are allowed to see and are visible will be returned.

### Batch Uploader Feedback Codes

We differentiate between three different types.

- infos
- warnings
- errors

Whereby infos are more infos about the process (currently not used) and warnings is a report, that something expected
was missing but will not stop the process.

There are feedbacks with additional information like which column and line number this feedback is meant for, but there
are also more general errors like not being able to read a ZIP file.

The Expected batch upload document is utf8. If the encoding is not utf8 we try guessing the encoding and return a
warning.

#### Warnings

| Code | Description                                    |
|------|------------------------------------------------|
| 1011 | CSV file is missing data                       |
| 1012 | Unsupported encoding                           |
| 1013 | CSV contains empty lines                       |
| 1014 | CSV contains a deprecated column               |
| 1020 | File structure in ZIP is not supported         |
| 1021 | File in ZIP not found                          |
| 1022 | File in ZIP is not used by the data within CSV |
| 1023 | Folder in ZIP is not a valid combined id       |
| 1024 | Ignored data found                             |
| 1110 | Empty file                                     |
| 1111 | cannot create archived element                 |
| 1120 | Expected but not mandatory field is empty      |
| 1121 | Data value is superseded by other data         |
| 1126 | Old id used                                    | 
| 1130 | One or more given tag ids not found            |
| 1301 | Currency symbol have more than one symbol      |

#### Errors

| Code | Description                                                         |
|------|---------------------------------------------------------------------|
| 2000 | Wrong separator used, please use `,` instead                        |
| 2001 | Missing rights                                                      |
| 2002 | Limit reached                                                       |
| 2005 | Invalid ID - tag-id already belongs to another catalog              |
| 2010 | CSV file is missing                                                 |
| 2011 | CSV file is not readable                                            |
| 2012 | ID contains invalid Characters(-+^*\s)                              |
| 2020 | ZIP file is missing                                                 |
| 2021 | ZIP file is not readable                                            |
| 2022 | ZIP file does not contain a CSV file                                |
| 2023 | ZIP file does not contain needed file                               |
| 2024 | File in ZIP not readable or invalid                                 |
| 2100 | Could not find element with id                                      |
| 2110 | Invalid line                                                        |
| 2111 | Invalid line - wrong number of columns                              |
| 2112 | Invalid line - multiple lines with same id                          |
| 2120 | Mandatory ID column is empty                                        |
| 2121 | Mandatory column is empty                                           |
| 2122 | Invalid json in column                                              |
| 2123 | Mismatching ids in json and ID column                               |
| 2124 | Missing file scheme in column                                       |
| 2125 | Column is invalid (probably contains `:`)                           |
| 2126 | Old id used                                                         |
| 2127 | Invalid id, id start with catalog id                                |
| 2128 | referenced id in data field is invalid                              |
| 2130 | Error selecting element                                             |
| 2131 | Error adding element                                                |
| 2132 | Not allowed to override, please set allowUpdate                     |
| 2133 | Error updating element                                              |
| 2200 | DAP job is already processing                                       |
| 2210 | No valid file entry was found in given data. No DAP job got created |
| 2211 | Error on preparing DAP job                                          |
| 2220 | Error on creating DAP job                                           |
| 2300 | Error sending prices to price engine                                |
| 2301 | Error creating prices on price engine                               |

## API Reference

### _Catalogs_

#### POST catalog - Create-Catalog

Accepts: application/json

Generates: application/json

Parameters:

```json
{
  "name": "<name_of_the_catalog>",
  "featuredImage": null,
  "externalIdentifier": "<my_external_identifier>",
  "cover": null,
  "brandIcon": null,
  "description": "i_am_a_description",
  "free": true,
  "public": true,
  "featured": false,
  "sort": null,
  "created": null,
  "updated": null,
  "hidden": false,
  "orderable": false,
  "publiclyOrderable": false,
  "active": true,
  "visibilityStatus": 1,
  "purchased": false,
  "branded": false,
  "draftOf": null,
  "tenant": <my_tenant_id>
}
```

Create a new Catalog based on the body in the post request.

#### GET /:id

Accepts: application/json

Generates: application/json

Parameters:

- Catalog ID

Returns a Catalog by catalog-id. It looks like the Catalog json example.

#### PUT /:id

Accepts: application/json

Generates: application/json

Parameters:

- id : the external identifier of the catalog

Returns a Catalog by catalog-id. It looks like the Catalog json example.

#### DELETE /:id

Accepts: application/json

Generates: application/json

Parameters:

- Catalog ID

No live Catalogs can be deleted at this time. Only Drafts can be deleted.
It deletes also Items, Tags, Import History e.g.

### _ElementAdditionalInformation_

#### ElementAdditionalInformation object

Fields

- id: globally unique id of this element (automatically generated)
- type: type of the information. This defines how the key and parentIdFilter is interpreted. Can
  be `parameter`, `paramValue`, `material`, `component` or `item`
- key: the key of the element which this info belongs to. Interpretation depends on the type
- parentIdFilter: space seperated list of ids where to apply this. usually extIds of elements within the catalog
- catalog: id of the catalog where this information belongs to
- tooltip: map of language:tooltip pairs containing the tooltip to show for this element in this language
- fullInfo: json containing additional information linked to the given key

#### GET /:id/elementAdditionalInformations

Generates: json, csv

Returns all elements of requested catalog

Response:

ElementAdditionalInformation objects are described
in  [CatalogElementAdditionalInformation JSON Object](CatalogElementAdditionalInfo.md#CatalogElementAdditionalInfo-JSON-object)

```
{
    "catalogElementAdditionalInfos": [
        infoObject1,
        infoObject2,
        ...
    ],
    "meta": {
        "lastUpdated": "2018-01-23T09:15:39.000Z",
        "total": 2,
        "serverTime": "2019-03-14T12:29:08.549Z"
    }
}
```

##### CSV fields

- additionalInfo_id: globally unique id of this element (automatically generated)
- type: type of the information. This defines how the key and parentIdFilter is interpreted. Can
  be `parameter`, `paramValue`, `material`, `component` or `item`
- key: the key of the element which this info belongs to. Interpretation depends on the type
- parentIdFilter: space seperated list of ids where to apply this. usually extIds of elements within the catalog
- tooltip: map of language:tooltip pairs containing the tooltip to show for this element in this language
- fullInfo: json containing additional information linked to the given key

#### POST /:id/elementAdditionalInformations

Accepts: multipart-formdata

Generates: json

Batch uploading elementAdditionalInformations

Parameters:

- file: a csv file
- allowUpdate: boolean - whether existing elements are allowed to be updated/overridden. default is false.

If any error occurs, no changes are made. If the content contains an existing id, but allowUpdate = false,
this is interpreted as an error and nothing is changed.

##### CSV fields

Contains all fields specified in {GET /:id/elementAdditionalInformations}

### _Items_

#### Item object

Fields

- id: identifier of an item  (Deprecated)
- item_id : identifier of an item
- Translations can be multiple, we always return all the available translations in the form of multiple column pairs. If
  no translations are available, we insert in the CSV reference columns label_en and description_en.
    - label_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value
      of this language in the ItemTranslation.
    - description_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current
      value of this language in the ItemTranslation.
- type: for example "seating" or "table"
- detailType: for example "sofa", "chair" or "table"
- width: width of the item in millimeters
- depth: depth of the item in millimeters
- height: height of the item in millimeters
- layer: can be an integer or null, if there is no value for this field
- sort: can be an integer or null, if there is no value for this field
- scaleable: indicates if the item is scalable or not
- flipable: indicates if the item can be flipped or not
- colorable: indicates if the item can be colored or not
- hidden: indicates if the item is hidden
- manufacturerSKU:
- tag_ids: all tag ids separated by ' ' (whitespace)
- configuration: the configuration of the item
- visibilityStatus : possible values (0, 1, 2)
    - 0 : "shown everywhere"
    - 1 : "shown only in Rubens Admin"
    - 2 : "hidden everywhere"

#### GET /:id/items

Generates: json, csv

Returns all items of requested catalog

query-param:

- deltaSince: has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`. Only if given date string is matching this format, the response will be reduced to
  only updated items after given date.

Response:

Item objects are described in Section [Item JSON Object](#item-json-object)

```
{
    "items": [
        itemObject1,
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

##### CSV fields

- id: identifier of an item  (Deprecated)
- item_id : identifier of an item
- Translations can be multiple, we always return all the available translations in the form of multiple column pairs. If
  no translations are available, we insert in the CSV reference columns label_en and description_en.
    - label_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value
      of this language in the ItemTranslation.
    - description_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current
      value of this language in the ItemTranslation.
- type: for example "seating" or "table"
- detailType: for example "sofa", "chair" or "table"
- width: width of the item in millimeters
- depth: depth of the item in millimeters
- height: height of the item in millimeters
- layer: can be an integer or null, if there is no value for this field
- sort: can be an integer or null, if there is no value for this field
- scaleable: indicates if the item is scalable or not
- flipable: indicates if the item can be flipped or not
- colorable: indicates if the item can be colored or not
- hidden: indicates if the item is hidden
- manufacturerSKU:
- tag_ids: all tag ids separated by ' ' (whitespace)
- configuration: the configuration of the item
- visibilityStatus : possible values (0, 1, 2)
    - 0 : "shown everywhere (planner, catalog)"
    - 1 : "shown only in Rubens Admin, hidden in planner, catalog"
    - 2 : "hidden everywhere"

#### POST /:id/items

Accepts: multipart-formdata

Generates: json

Batch uploading items

Parameters:

- file: a csv file
- allowUpdate: boolean - whether existing materials are allowed to be updated/overridden. default is false.

If any error occurs, no changes are made. If the content contains an existing id, but allowUpdate = false,
this is interpreted as an error and nothing is changed.

##### CSV fields

Contains all field specified in {GET /:id/items}, but ignores the content of tag_ids, additionally it includes the (
optional) fields

- tag_ids_to_add : all tags ids to add separated by ' ' (whitespace).
- tag_ids_to_remove : all tags ids to remove separated by ' ' (whitespace).
- asset_source : can contain a URL where to take the asset source for this item from

#### GET /:id/itemBatch Deprecated

use /:id/items instead with header accept = text/csv

#### POST /:id/itemBatch Deprecated

use /:id/items instead with header accept = text/csv

#### PUT /:id/itemBatch Deprecated

use POST /:id/items instead with header accept = text/csv and query parameter allowUpdates = true

#### POST /:id/threeDimensionalAssets

Accepts: multipart-formdata

Generates: json

Batch uploading item assets, which will be split up in item packages and forwarded to our asset pipe.

Parameters:

- file: input file for the upload .zip

ZIP explanation:

The .zip file has to contain a folder structure as described below:

```
- extItem1/
    - anyFileNameForExtItem1.fbx
- extItem2/
    - anyFileNameForExtItem2.fbx
    - someImage.jpg
```

Where extItem1 and extItem2 are real external identifiers for the corresponding items in this catalog. The folder
structure must align with these examples, there are no additional levels of folders allowed.
We will preprocess uploaded .zip file and check if given items do exist, are not already processing. After those checks
we will generate the item packages which can be forwarded to our asset pipe.

If any error occurs during this process (preprocessing, checking and creating packages), the request will be canceled
and a detailed import log with warnings and errors will be returned as JSON.

### _Materials_

#### GET /:id/materials

Generates: json, csv

query-param:

- embedTextures: true/false if true the materials contain textureObjects additionally to the textures array (with the
  ids) so that the client doesn't have to request them separately

returns all materials from the given catalog, when in cms-context this returns all the hidden and inactive material as
well.

##### CSV fields

- material_id
- Translations - we always return all the available translations in the form of multiple column pairs. If no
  translations are available, we insert in the CSV reference columns label_en and description_en.
    - label_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value
      of this language in the MaterialTranslation.
    - description_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current
      value of this language in the MaterialTranslation.
- shading - contains the serialized shading object, if present in the database
- tag_ids - contains a list of tag ids connected with this material
- active - boolean value if the material is active. If activeFrom and/or activeTill are set, it is overridden by the
  timespan. If set while no activeFrom or activeTill columns are present, setting active will remove previously set time
  spans
- activeFrom - unix timestamp, is null if no value, sets a starting point in time for the material to be active
- activeTill - unix timestamp, is null if no value, sets an ending point in time for the material to be active
- sort: can be an integer or null, if there is no value for this field
- Embeded textures - can be multiple, repeating with different prefix - tex0_ , tex1_, .... We always have a set of the
  following
    - tex0_mapping
    - tex0_height
    - tex0_width
    - tex0_mmHeight
    - tex0_mmWidth
    - tex0_tileable
- visibilityStatus : possible values (0, 1, 2)
    - 0 : "shown everywhere (planner, catalog)"
    - 1 : "shown only in Rubens Admin, hidden in planner, catalog"
    - 2 : "hidden everywhere" - item is archived

#### POST /:id/materials

Accepts: multipart-formdata

Generates: json

Batch uploading materials

Parameters:

- file: either a csv or a zip with a csv within and additional files like images.
- allowUpdate: boolean - whether existing materials are allowed to be updated/overriden. default is false.

If any error occurs, no changes are made. If the content contains an existing id, but allowUpdate = false,
this is interpreted as an error and nothing is changed.

##### CSV fields

Contains all field specified in {/:id/materials} csv including the (optional) fields

- tag_ids_to_add : all tag ids to add separated by ' ' (whitespace).
- tag_ids_to_remove : all tag ids to remove separated by ' ' (whitespace).
- texture_mappings_to_delete: the textures to be deleted, defined by type. seperated by ' ' (whitespace)

##### fields:

- material_id : extId of the material
- shading: shadingJson of the material
- active - boolean value if the material is active. If activeFrom and/or activeTill are set, it is overridden by the
  timespan. If set while no activeFrom or activeTill columns are present, setting active will remove previously set
  timespans
- activeFrom - unix timestamp in seconds, is null if no value, sets a starting point in time for the material to be
  active
- activeTill - unix timestamp in seconds, is null if no value, sets an ending point in time for the material to be
  active
- sort: can be an integer or null, if there is no value for this field
- label_\<language>: labels for the materials, language being the iso code.
  if any label is provided the existing labels are removed and replaced with the given ones
- thumbnail: has to start with zip://. if data is provided this must be a filename relative in the zip to be uploaded as
  thumbnail

if texturefields are provided, the given textures replace existing textures with those types. only textures listed
in `texture_mappings_to_delete` are deleted.

- tex\<N>_mmwidth
- tex\<N>_mmheight
- tex\<N>_tileable: 0 for false, 1 for true
- tex\<N>_mapping: the mapping for the texture (e.g. "RGB", "RGBA", "XYZ" ...)
- tex\<N>_image: has to start with zip://. relative path in the zip for the image to be used

### _Tags_

#### GET /:id/tags

Generates: csv

returns all tags from the given catalog in csv representation. requested user has to have catalog management rights for
the given catalog.

tag fields:

- id: identifier of a tag (deprecated)
- tag_id : identifier of the tag
- Translations can be multiple, we always return all the available translations in the form of multiple column pairs. If
  no translations are available, we insert in the CSV reference columns label_en and description_en.
- label_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value of
  this language in the TagTranslation.
- description_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value
  of this language in the TagTranslation.
- png_icon: current png icon for this tag
- svg_icon: current svg icon for this tag
- inspiration_image: current inspiration image for this tag
- global: is the tag global visible?
- hidden: deprecated by visibilityStatus
- visibilityStatus : possible values
    - 0 : SHOWN (visible everywhere)
    - 1 : SHOWN_IN_CMS (visible only in cms context)
    - 2 : ARCHIVED (hidden everywhere)
- sort: can be an integer or null, if there is no value for this field
- material_ids: all connected material combined ids separated by ' ' (whitespace)
- item_ids: all connected item combined ids separated by ' ' (whitespace)
- component_ids: all connected component combined ids separated by ' ' (whitespace)
- parent_tag_ids: ids of parent tags separated by ' ' (whitespace)

#### POST /:id/tags

Accepts: multipart-formdata

Generates: json

Batch uploading tags

Parameters:

- file: input file for the upload (.csv)
- allowUpdate: boolean whether existing tags are allowed to be updated/overriden. default is false.

If any error occurs, no changes are made.

##### CSV fields

Contains all field specified in {GET /:id/tags}, but ignores the entries item_ids, material_ids, component_ids and
parent_tag_ids, additionally
includes the (optional) fields

- material_ids_to_add : all material ids to add separated by ' ' (whitespace).
- material_ids_to_remove : all material ids to remove separated by ' ' (whitespace).
- items_ids_to_add : all items ids to add separated by ' ' (whitespace).
- items_ids_to_remove : all items ids to remove separated by ' ' (whitespace).
- component_ids_to_add : all component ids to add separated by ' ' (whitespace).
- component_ids_to_remove : all component ids to remove separated by ' ' (whitespace).
- parent_tag_ids_to_add : all parent_tag ids to add separated by ' ' (whitespace).
- parent_tag_ids_to_remove : all parent_tag ids to remove separated by ' ' (whitespace).

#### GET /:id/tagBatch Deprecated

use /:id/tags instead with header accept = text/csv

#### POST /:id/tagBatch Deprecated

use /:id/tags instead with header accept = text/csv

#### PUT /:id/tagBatch Deprecated

use POST /:id/tags instead with header accept = text/csv and query parameter allowUpdates = true

#### GET /:id/allTags

Generates: json

Returns all tags of requested catalog

Response:

Tag objects are described in Section [Tag JSON Object](#tag-json-object)

```
{
    "tags": [
        tagObject1,
        tagObject2,
        ...
    ],
    "meta": {
        "total": 2,
        "serverTime": "2019-03-14T12:29:08.549Z"
    }
}
```

If the request comes from a cms-context, it will also return the hidden tags.

### _Components_

#### GET /:id/components

Generates: json or csv

returns all components from the given catalog in csv representation. requested user has to have catalog management
rights for the given catalog.

component fields:

- id: identifier of a component (deprecated)
- component_id : identifier of the component
- Translations can be multiple, we always return all the available translations in the form of multiple column pairs. If
  no translations are available, we insert in the CSV reference columns label_en and description_en.
    - label_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current value
      of this language in the ComponentTranslation.
    - description_{languageCode}: languageCode in ISO standard can be "en" or "de" for example and will be the current
      value of this language in the ComponentTranslation.
- active: boolean (1 or 0) which indicates if the component is active or inactive.
- perspectiveImage: an url to the perspective image
- type: for example "seating" or "table"
- detailType: for example "sofa", "chair" or "table"
- layer: can be an integer or null, if there is no value for this field
- sort: can be an integer or null, if there is no value for this field
- tag_ids: all tag ids separated by ' ' (whitespace)

#### POST /:id/components

Accepts: multipart-formdata

Generates: json

Batch uploading components

Parameters:

- file: input file for the upload (.csv) or (.zip)
- allowUpdate: boolean whether existing components are allowed to be updated/overriden. default is false.

ZIP explanation:

The .zip file has to contain a .csv file and component definitions as .json files.
In order correctly detect your wanted component definition file, you have to add a column "component_definition" to your
.csv file. As values the columns should contain zip://fileName.json. The value could also contain a directory structure
to better organize your .zip file. Which could yield to following value zip://aFolder/aSecondFolder/component1.json

Should there be any error like not prefixing with zip:// or just having a typo or forgot to add files to your zip, a bad
request (400) will be thrown and an import log will be attached. In the import log you should be able to read, what went
wrong or has to be adjusted.

The `component_definition` column can also contain weblinks. In this case its assumed that the link returns a 
componentDefinition as UTF-8 string.

If any error occurs, no changes are made. If the content contains an existing id and allowUpdate = false a conflict (
409) will be returned with an import log.

##### CSV fields

Contains all field specified in {/:id/components} csv, but ignores the tag_ids, additionally includes the (optional)
fields

- tag_ids_to_add : all tags ids to add separated by ' ' (whitespace).
- tag_ids_to_remove : all tags ids to remove separated by ' ' (whitespace).

#### GET /:id/componentBatch Deprecated

use /:id/components instead with header accept = text/csv

#### POST /:id/componentBatch Deprecated

use /:id/components instead with header accept = text/csv

#### PUT /:id/componentBatch Deprecated

use POST /:id/components instead with header accept = text/csv and query parameter allowUpdates = true

### _Prices_

#### GET /:id/prices

Generates: csv

Returns all prices from the given catalog in csv representation. Requested user has to have admin rights for the given
catalog.

price fields:

- article_number
- price: default price for this article number. default means if a country gets requested, where there is no specific
  entry this default price will be returned
- currency_symbol: default currency symbol for this article number. default means if a country gets requested, where
  there is no specific entry this default currency symbol will be returned
- price_{countryCode}: countryCode can be "at", "de" and so on. Represents a specific price entry for this country
- currency_symbol_{countryCode}: countryCode can be "at", "de" and so on. Represents a specific currency symbol for this
  country

#### POST /:id/prices

Accepts: multipart-formdata

Generates: csv

Batch uploading prices

Side information:

Given CSV will be parsed and converted to fit our price engine needs and then forwarded to it. There can be errors where
the upload is correct but we encounter problems when accessing our price engine.

### _Drafts_

#### GET /:id/drafts

Accepts: application/json

Generates: application/json

Returns all catalogs that are drafts of the given catalog, including published ones.
Requesting user has to have Catalog Management rights for the given catalog.

```json
{
  "catalogs": [
    <listOfCatalogObjects>
  ]
}
```

#### POST /:id/drafts - create empty draft

Accepts: application/json

Generates: application/json

used to create an empty draft of this catalog. If it is the first draft for this catalog, `locksLiveCatalog` is set to
true. In case there are already drafts active, it's set to false.

#### POST /:id/drafts - create draft from ZIP

Accepts: multipart-formdata

Generates: application/json

used to create a draft of this catalog for automatic importing.

Send a zip and type to this endpoint for starting the automatic import. will happen asynchronously.

bodyparameters:

- file: zip file to import from
- type: type id of the source format. Currently supported: bb, idmp,idmw

#### PUT /:id/drafts/:draftid - reimport (Deprecated)

Accepts: multipart-formdata

Generates: application/json

used to make re-imports into existing drafts. A reimport is only possible for a draft that originated as an import. The
multi-part must contain:

- file - the source file for the import
- mergePolicies - String - serialized merge policies between the current draft and the reimport are required

#### POST /:id/drafts/:draftId/publish - publishes this draft

Accepts: application/json

Generates: application/json

publishes all data from this draft according to the defined merge policies

#### POST /:id/drafts/:draftId/unpublish - reverts the changes of a published this draft

Accepts: application/json

Generates: application/json

undoes the publishing of this draft. any data that was added to the catalog (was in the draft before but not in the
catalog) stays in the catalog even after the unpublish. Only data that was swapped between live and draft is swapped
back.

### _Imports_

#### CatalogImportStatus object example

CatalogImport fields:

- id - String - unique id
- draftCatalogExtId - String - externalId of the draft catalog
- sourceCatalogExtId - String - externalId of the source catalog
- importType - String - type of import
- mergePolicies - JSONObject - nested MergePolicies json object - contains the Merge policies used for the import
- status - Integer - integer representing the status
    - CREATED(10)
    - PROCESSING(20)
    - SUCCESS(30)
    - FAILED(-1)
- progress - Integer - integer representing the current progress of the import (0-100)
- importLog - String - serialized ImportLog object - contains the logs of the import process
- email - String - email of the user who started the import
- created - Date - date of creation
- updated - Date - date of update
- sourceFile - String - url of zip file used for the import

```json
{
  "id": "uniqueIdentifierString",
  "draftCatalogExtId": "catalogId_draft5",
  "sourceCatalogExtId": "catalogId",
  "importType": "idmw",
  "mergePolicies": {
    "items": "replace",
    "components": "ignore",
    "materials": "merge",
    "tags": "ignore",
    "prices": "replace",
    "meshes": "ignore"
  },
  "status": 10,
  "progress": 100,
  "importLog": {
    "messages": [
      {
        "context": "importer",
        "type": "ERROR",
        "message": "an error message",
        "detail": ""
      },
      {
        "context": "importer",
        "type": "WARN",
        "message": "a warning message",
        "detail": ""
      },
      {
        "context": "importer",
        "type": "INFO",
        "message": "an info message",
        "detail": ""
      }
    ],
    "numWarnings": 1,
    "numErrors": 1
  },
  "email": "import.triggered.by@email.com",
  "created": "2021-02-13T23:31:30.000Z",
  "updated": "2021-08-13T23:51:42.000Z",
  "sourceFile": "https://roomle-catalogs.storage.googleapis.com/source/file/location/source_1234567890.zip"
}
```

### _Meshes_

#### GET /:id/meshes

Accepts: application/json

Generates: application/json

returns a json containing all the mesh objects in the given catalog.

Mesh fields:

- catalog - externalId of the catalog
- id - combinedId of the mesh
- created - date of creation
- links - links to connected endpoints
- data - link to meshdata endpoint

#### GET /:id/meshes - ZIP

Accepts: application/json

Generates: application/zip

returns a zip containing the meshData for the given catalog, that match the query params currently supports only crt
format returned quality will be equal, better or closest match the file currently contains just the meshData, no
additional data (csv)

query-param:

- format - format of requested meshes (accepted values - crt)
- quality - quality level of meshData (accepted value Integer 0-100) 
