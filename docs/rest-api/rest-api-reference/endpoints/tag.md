# TagController

## Description

This is a tag.

Path /v2/tags

### Tag JSON Object

An example for a tag JSON object.

```
{
    "id": "products",
    "global": true,
    "created": "2016-08-01T14:35:53.000Z",
    "updated": "2016-11-28T16:48:34.000Z",
    "links": {
        "items": "/tags/products/items",
        "materials": "/tags/products/materials",
        "parentTags": "/tags/products/parentTags"
    },
    "catalog": "roomle_white_furniture",
    "label": "Products",
    "language": "en",
    "items": ["roomle_white_furniture:door"],
    "tags": [
        "product_beds",
        "product_lighting",
        "product_miscellaneous",
        "product_mockup",
        "product_seating",
        "product_storage",
        "product_tables"
    ],
    "parents": [
        "roomle_white_furniture_root"
    ],
    "hidden": false,
    "visibilityStatus": 0
}
```

### field

- id
- global
- created
- updated
- links
- catalog
- label
- language
- items - list of item ids connected to this tag
- tags
- parents
- hidden - deprecated - superseded by visibilityStatus
- visibilityStatus : possible values
    - 0 : SHOWN (visible everywhere)
    - 1 : SHOWN_IN_CMS (visible only in cms context)
    - 2 : ARCHIVED (hidden everywhere)