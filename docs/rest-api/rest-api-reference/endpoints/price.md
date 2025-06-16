# PriceController

## Overview

- [GET /](#get-)

## Description

Path /v2/prices

Handles all requests regarding price: creating, updating, deleting.

### Price JSON Object

An example for a price JSON object.

```
<PRICE_FEATURE_GROUP_BASE_PRICE_REF PRICE_FEATURE_GROUP_NO=10>
    <ITEM_PRICE>
    <PRICE_FIELD>1</PRICE_FIELD>
    <PRICE>12345</PRICE>
    </ITEM_PRICE>
    <ITEM_PRICE>
    <PRICE_FIELD>2</PRICE_FIELD>
    <PRICE>54321</PRICE>
    </ITEM_PRICE> 
</PRICE_FEATURE_GROUP_BASE_PRICE_REF>
```

## API Reference

### GET /

Generates: json

query-param:

- priceIds[]: an array of price ids which you need. A price id is built with your catalogId and needed articleNumber
  separated by ":". For example "yourCatalogId:1023457" or "yourCatalogId:someStringArticleNumber".

Will query price information about given price ids and will return those informations with articleNumber, price and
currencySymbol. Result may be different for request country via your headers.

 ```
 {
 	"prices": [
 	    {
 	        "priceId":"yourCatalogId:1023457",
 	        "price": 109.99,
 	        "currencySymbol": "€"
 	    },
 		...
 	]
 }
 ```

#### IMPORT INFORMATION

In order to successfully retrieve prices for a given price identifier following requirements have to been met.

1. catalog has to be allowed to be ordered, that is only an internal requirement and is not visible if you
   inspect `orderable` of the catalog.
2. a `PriceService` has to be created for this catalog
3. `usedFor` has to be set correctly for all wanted countries
4. As a caller you have to be in the correct tenant and country to retrieve price information.
