# Data format

The IDM data format (Integriertes Datenmodell) is an XML schema format standardized by the [Daten Competence Center](https://dcc-moebel.org). A list of all the schemas and documentation can be found at: https://dcc-moebel.org/download.html

```
We are currently able to import the following schema types:
- IDM Living 4.0
- IDM Polster >3.1
- IDM Polster 2.5.1
- IDM Kueche/Bad 3.0
- IDM Wohnen 1.0
```

## Data preparation

To use the Roomle importer, the IDM data must be stored as XML in a ZIP file. The ZIP can also contain additional extension files.

## Data structure

The schemas of IDM Polster and IDM Wohnen are very similar and use the same logic in terms of data needed for conversion to Roomle data format.

The XML structure main component is a `T_NEW_CATALOG`, which contains the version of the standard as attributes and has the following main elements:

* `Catalog` Stores administrative information concerning the data pool
* `Supplier` Stores administrative information concerning the manufacturer. We currently do not extract any data from this element.
* `Global Definitions` It is a kind of data pool for information used in the other elements. Example: storage of media, photos and installation and/or various notes, instructions. The data is stored in \<DETAIL\_INFO> elements. In our case, we use the DETAIL\_INFO od INFO\_TYPE 3, as this contains the SVG files (path or url to svg file), in which the docking information in stored (Magnetplanerzeichnung). More info in IDMDockingLogic.md
* `Series` Stores the data for the description of the items. Items are combined into product groups, such as armchairs or intermediate elements.
* `Part Lists` - Optional This element is used to assemble dynamic part lists, with the sub-positions assigned to rules (DECISIONS) that determine depending on the version in which quantity the respective position exists in the part list. Details about conversion of PartLists can be found in: IDMPartLists.md
* `Feature Definition` Features contain the data about variants and the logic behind the options for the items. From this element we extract most of our ComponentDefinition parameters, which are referenced in the item itself.
* `Price Definition` The element contains price data, which is referenced in the items themselfs. It mainly contains the logic behind the calculation of those, based on additional prices and percent surcharges. The base price is contained in the item itself. More info in IDMPriceLogic.md
