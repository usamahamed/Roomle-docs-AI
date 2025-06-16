# IDM Price logic

In the IDM format the base prices and additional prices of an item are contained inside the item itself. One item can contain multiple prices, based on the market where it is being commercialised.
This data is extracted from the ItemPrice data field and saved into a DTO with a unique id, composed of:

    "articleNumber"_PG"priceFeatureGroupNo"_PF"priceFieldNo"

Where the artice number is the SerieNo_ItemNo

For example:

    5_2098_PG1_PF5

If the price inside the priceField is 0, the price is not added. 
Also both the addition of the subcomponent and of the logic in the onUpdate are skipped, if the price is not added.

For each PRICE_FEATURE_GROUP a subcomponent is created, which references the priceGroup( either base or additional with the Id). In the subcomponents the self reference to the main component with numberInPartlist = 1 is also added.

The logic behind the calculation of prices, (option surcharges, which can be either fixed price surcharges or percentage price surcharges) is contained in the PRICE_DEFINITION part of the IDM XML file and referenced from the items. This logic is added to the OnUpdate, while sending the prices (price fields) to the price service.

If a PRICE_FEATURE_GROUP_NO and FEATURE_NO are used in the configuration, the price contained in the referenced priceField is used as surcharge.
The FINISH data field contains the conditions for the use of a specific price field (OPTION_REF), with the value for the condition being contained in the OPTION_KEY attribute.
Currently only the fixed price surcharges are converted.
The percent surcherges use a similar referencing and condition system. Instead of using the FINISH data field, they use the PERCENTAGE_SURCHARGE data field, with a PRICE_FACTOR. They require a calculation , sometimes based on base price and sometimes on price with fixed price surcharges (some or all).

