# Use your own backend for calculating prices

There are situation were it makes sense that you use your own backend API to calculate prices. Maybe there are already existing API endpoints you want to reuse, or you do not want to encode your pricing logic inside client side JavaScript or you want to enable price calculation along the whole Roomle Platform and not only in embedding case. In those situations it could make sense to think about connecting your backend API with our Rubens frontend. Then the flow is the following: Rubens UI calls the Roomle Backend, the Roomle Backend looks if there is a custom endpoint provided and forwards the request to your custom endpoint. Then the endpoint returns to the Roomle Backend and the Roomle Backend returns the response to the Rubens UI.

To setup this process you have to do some steps (we will cover them in more detail later):

1. you need a configurable product that produces a part list
2. inside of this part list there should be article numbers
3. Login to [Rubens Admin](https://admin.roomle.com/)
4. make sure you are Super Admin of the tenant
5. go to Tenant Settings and enter the section Price Services
6. Add a price service entry
7. Add the correct JSON (we will see later in the example what do to)
8. Make sure that there is an endpoint behind the URL you specified in the JSON in step 7
9. To test it, call the Configurator or Room Designer with the correct Embedding ID

## Example:

### Create the configurable product and part list

Lets add a component with the following Roomle Script:

```json
{
    "id": "external-price-service:cube-component",
    "parameters": [
        {
            "key": "width",
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1000,
            "validValues": [
                800,
                1000,
                1200
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "depth",
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1000,
            "validValues": [
                600,
                700,
                1000,
                1500
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        },
        {
            "key": "height",
            "type": "Decimal",
            "unitType": "length",
            "defaultValue": 1000,
            "validValues": [
                600,
                700,
                1000
            ],
            "enabled": true,
            "visible": true,
            "visibleInPartList": true
        }
    ],
    "onUpdate": "",
    "geometry": "AddCube(Vector3f{width,depth,height});",
    "articleNr": "string(width,0)|'x'|string(depth,0)|'x'|string(height,0)"
}
```

To make it more fun, we calculate a dynamic article number. In real world most products will have static article number but to illustrate what's going on it's better for understanding. The article number will be constructed out of the dimensions, so if the cube is configured to a width, depth and height of 1000mm the article number will be 1000x1000x1000. This logic we will use later in our custom price calculation service.

Now since we want to test the component also somewhere we will create a configurable item. Therefore we create a new product and add the following Roomle Script:

```json
{
    "componentId": "external-price-service:cube-component"
}
```

We give the product the ID: `external-price-service:cube`

To see if we assembled everything correctly just open the Configurator with: 

https://www.roomle.com/t/cp?id=external-price-service:cube

Now we should see a cube and when we open the part list we should see one entry with the article number that is constructed out of the current dimensions

### Tenant settings and price service entry 

As described above, login to [Rubens Admin](https://admin.roomle.com/) and enter Tenant Settings > Price Service

Add a new Price Service Entry with the following JSON:

```json
{
    "method": "GET",
    "url": "<YOUR_ENDPOINT_URL>",
    "queryParamName": "articleNumbers[]"
}
```

### Your custom endpoint

For this example we use Google Cloud Functions and create a simple function that returns a price for us. The following code is only an example and shows only the parts needed (no error handling, validations etc):

```javascript
import functions from "@google-cloud/functions-framework";

const catalogPrefix = "external-price-service:";

functions.http("index", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    
    const [width, depth, height] = req.query.articleNumbers[0].replace(catalogPrefix, '').split("x");
    const volume = parseInt(width,10)/1000 * parseInt(depth,10)/1000 * parseInt(height, 10)/1000;
    res.status(200).json({
      prices: [
        {
          articleNumber: catalogPrefix + req.query.articleNumbers[0],
          price: volume * 100,
          currencySymbol: "€",
        },
      ],
    });
  }
});
```

To test this endpoint we simply call the URL: `<YOUR_ENDPOINT_URL>?articleNumbers[]=1000x1000x1000`, in our case it should return the following JSON:

```json
{
    "prices": [
      {
        "articleNumber": "external-price-service:1000x1000x1000",
        "price": 100,
        "currencySymbol": "€"
      }
    ]
}
```
It is important to mention that the returned JSON needs to be in the following structure:

```typescript
// The suffix `external-price-service:` is defined by the catalog ID
type ArticleNumber = `external-price-service:${string}`;

interface Price {
    // name "articleNumber" is defined in the Price Service Entry JSON in Rubens Admin
    articleNumber: string; 
    price: number;
    currencySymbol: string;
}


interface PriceResponse {
    prices: Price[]
}
```

### Test it

Now everything should be setup correctly. Therefore we can check it with the correct embedding settings. It's important the you use the correct embedding ID and turn on "usePriceService" inside your Tenant Settings > Rubens Settings > Editor. 

The example I outlined above can be tested live here: [https://www.roomle.com/t/cp/?id=external-price-service:cube&usePriceService=true&configuratorId=roomleplay](https://www.roomle.com/t/cp/?id=external-price-service:cube&configuratorId=roomleplay)