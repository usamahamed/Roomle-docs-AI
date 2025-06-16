# ShortIdController

## Description

Path /v2/shortIds

Handles all requests regarding shortId: creating, updating, deleting.

### ShortId JSON Object

An example for a shortId JSON object.

```
{
	"shortId": "shortId123",
	"referencedId": "referencedId123",
	"type": 3,
	"url": "https://www.roomle.com/t/configurator/?isItem=false&id=referencedId123",
	"created": "2014-11-18T07:55:56.000Z",
	"lastAccess": "2014-11-18T07:55:56.000Z"
}
```

### fields

- shortId
- referencedId
- type
- url
- created
- lastAccess

## API Reference

### ShortId JSON Object

An example for a shortId JSON object

possible Types:
BASE(0),
PLAN(1), USER(2), CONFIGURATION(3), ITEM(4), CONFIGURATION_AR(5),
PLANSNAPSHOT(6), PLANSNAPSHOT_AR(7)

```
{
	"shortId": "shortId123",
	"referencedId": "referencedId123",
	"type": 3,
	"url": "https://www.roomle.com/t/configurator/?isItem=false&id=referencedId123",
	"created": "2014-11-18T07:55:56.000Z",
	"lastAccess": "2014-11-18T07:55:56.000Z"
}
```