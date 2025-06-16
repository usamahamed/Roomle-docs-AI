# Pricing

Roomle Configurator can display prices of the current configuration. There are two ways of adding the prices. Prices can be scripted using component.pricing attribute or Roomle Price Service can be used.

## Price Service

Price service provides you with a total price of your current configuration. It does so in the way that it takes the article numbers and their counts from the part list and computes the total price based on those. A CSV table of article numbers vs prices needs to be provided. Price service works in a catalogue with the "Publicly orderable" attribute set to true and if there is a price.csv uploaded, which is done in Rubens Admin using the "Import Prices" field. This field is visible if you have correct Rubens Admin access rights.

The prices.csv file example:

```csv
"article_number","price","currency_symbol"
"312.532.124","79.99","€"
"312.532.128","89.99","€"
```

Notice that a price and currency symbol is defined with every articleNr. If an articleNr is missing, its price will be 0.

You can also override the prices and currency symbols for different countries by providing a column with a \_countrycode suffix. The column without those suffixes is taken as a default, being overriden by the eventual country, for example:

```csv
"article_number","price","currency_symbol","price_uk","currency_symbol_uk"
"312.532.124","79.99","€","71.99","GBP"
"312.532.128","89.99","€","80.99","GBP"
```

If you have a proper set of articleNr, there are no extra efforts from the scripting side other than creating the price list csv.

To run a configurator with the price service the flags in the configurator settings have to be set to: `&usePriceService=true`,\
`&overrideTenant=\<tenantNumber\>`,\
the configurator has to be ran with those flags or a `configuratorId` containing them needs to be used\
and the `Publicly orderable` flag of the catalog has to be set.

You can ask your Roomle Contact Person to provide you with the tenant number or the configurator settings. Configurator settings user interface will be eventually added to Rubens Admin.

To get information on how the configurator detects which country it considers to get the prices for, see the [Embedding Integration](../../rubens-products/rubens-configurator/integration/).

## Scripted Prices

This is a legacy feature that should not be used unless abolutely necessary with no other option. Prices in the scripts are hard to maintain and insecure - becasue component definitions can be downloaded and prices can therefore be isolated from them. See example (https://www.roomle.com/t/cp/?id=isdt:example\_roomleprice\&useRoomlePrice=true). Notice, `useRoomlePrice=true` is present in the address, telling the configurator to take the prices from the script.

[Link to the example component definition](examples/200\_130\_roomleprice.json)

There is pricing with one object in following example. You can have different prices for different regions. The `RML_DEFAULT` region is the fallback region. Price is then computed from parameters and current state of internal variables.

```json
{
    "id": "isdt:example_roomleprice",
    ...
    "pricing": [
        {
            "region": "RML_DEFAULT",
            "currency": "EUR",
            "price": "
                if (material == 'candy:florida_light_blue') { pricePerSqM = 16; }
                if (material == 'candy:florida_rot') { pricePerSqM = 18; }
                if (material == 'candy:florida_saphran') { pricePerSqM = 20; }
                if (material == 'candy:florida_stone') { pricePerSqM = 22; }
                price = pricePerSqM * (width / 1000) * (length / 1000);
            "
        }
    ]
}
```

To achieve such a functionality using the price service, add another article number for the fabric with price per square metres. Then use the [subcomponent part list entry template](200\_70\_subcomponents.md#\_2-partlist-entry), setting numberInPartList as the amount of square metres. Assign a unique articleNr for every fabric code.
