# Custom parts list print

This documentation provides a detailed guide on how to override the `printPartList` function to customize the printing behavior of the part list in the configurator. In the first part of this documentation we want to focus on an generic implementation of overriden the Rubens `onPrintPartList` callback. In the second part we want to show an example case how to generate an PDF with an java script library - if you want to use your own java script library or just do something else with the print part list button you can skip the second part.

## Code Sandbox:

If you need some example or just want to copy paste, please have a look in this [Code Sandbox.](https://codesandbox.io/p/sandbox/external-partlist-printing-forked-zcyj3c)

## Overriding the onPartlistPrint callback

### 1. Step: Initialize the configurator as usual

If you initialize the configurator for the first time please have a look in [getting-started.md](../getting-started.md "mention").

If you don't want to override the print button but want to hide it you can set the `partlist_print` in the init data to false.

```typescript
const configurator = await RoomleConfiguratorApi.createConfigurator(
    "demoConfigurator",
    document.getElementById("configurator-container"),
    {
      id: "usm:frame",
      autoStart: true,
      buttons: {
        partlist_print: true, // Currently it is true by default so it is fine to not use it as well but you can hide it
      },
    }
  );
```

### 2. Step: Override the `onPartlistPrint` callback

As usual you can override the `onPartlistPrint` callback with every function you want, we override it in this case with our own custom `printPartList` function which is described in the following steps.

#### Parameters of the `onPartlistPrint` Callback

* `partList`: An array containing the parts in the configuration.
* `price`: The total price of the configuration.
* `label`: A label for the configuration.
* `bounds`: The bounds of the configuration.
* `catalogLabel`: A catalog label for the configuration.

```typescript
configurator.ui.callbacks.onPartlistPrint = async (
    partList,
    price,
    label,
    bounds,
    catalogLabel
  ) => {
    console.log("args", partList, price, label, bounds, catalogLabel);

    const { image } = await configurator.extended.preparePerspectiveImage();
    await printPartList({
      partList,
      price,
      label,
      bounds,
      catalogLabel,
      image,
    });
  };
```

## Generate custom PDF

As described above this is just an example how you can generate an PDF with our parts list data. You can generate a PDF in every way you prefer. You can find the full code in the [Code Sandbox](https://codesandbox.io/p/sandbox/external-partlist-printing-forked-zcyj3c) in the `print.js` file.

We use for our example: [jspdf](https://www.npmjs.com/package/jspdf)

### 1. Step: Translate "0" and "1" of the script to boolean

We have to translate all the "0" and "1" of the parts list to boolean values, because we use "0" and "1" as boolean values in the script.

```typescript
const BOOLEAN_VALUES = ["1", "0"];

const getLabel = (parameterType, label) => {
  if (parameterType === "Boolean") {
    return BOOLEAN_VALUES.includes(label)
      ? label === "0"
        ? "no"
        : "yes"
      : label;
  } else {
    return label;
  }
};
```

### 2. Step: Generate an array of parts list data

Since we want to show the parts list data in the PDF as a table, we need to generate an array out of the parts list data.

This looks a little bit complicated, but basically is formatting all the labels and data of the parts list to a human readable format. Just do it in the way you want to format your data.

```typescript
const generateData = (partList) => {
  return partList.map(
    ({
      articleNr = "",
      label: partLabel = "",
      count = "",
      price: partPrice,
      currencySymbol,
      parameters,
    }) => [
      articleNr,
      partLabel +
        (parameters || []).reduce(
          (acc, { label: parameterLabel, valueLabel, key, value, type }) => {
            if (acc === "") {
              acc = "\n";
            }
            acc +=
              "       " +
              (parameterLabel || key) +
              ": " +
              (getLabel(type, valueLabel) || value) +
              "\n";
            return acc;
          },
          ""
        ),
      count.toLocaleString(),
      partPrice ? partPrice.toString().replace(" ", "") : "",
    ]
  );
};
```

### 3. Step: Initializes the PDF document and add image

Initializes the PDF document with the main label, catalog label, and image.

We now set up the PDF as it is needed for the jspdf library. You can set the font family, font wheight, font size and so on - if you need more information please have a look in the documentation of the [jspdf](https://www.npmjs.com/package/jspdf).

Further we add an image on the top right edge.

```typescript
const initializeDocument = (label, catalogLabel, image, doc) => {
  const startX = 14;
  const startY = 22;
  const bigFont = 22;
  const regularFont = 11;
  const mediumPadding = 5;

  doc.setFont("Lato");
  doc.setFontSize(bigFont);
  doc.text(label, startX, startY);
  doc.setFontSize(regularFont);
  doc.text(
    catalogLabel || "Custom configuration",
    startX,
    startY + mediumPadding
  );

  const imageWidthMm = 50;
  doc.addImage(
    image,
    "PNG",
    doc.internal.pageSize.getWidth() - imageWidthMm - startX,
    startY - bigFont,
    imageWidthMm,
    imageWidthMm
  );
};
```

### 4. Step: Adding description of the bounds

Besides the image we want to add the bounds - so how big the item is - to the pdf.&#x20;

```typescript
const addBoundsAndPrice = (bounds, price, doc) => {
  const startX = 14;
  const startY = 22;
  const mediumFont = 18;
  const regularFont = 11;
  const mediumPadding = 5;

  if (bounds) {
    doc.text(bounds, startX, startY + mediumPadding * 4);
  }

  if (price) {
    doc.setFontSize(mediumFont);
    doc.text(price, startX, startY + mediumPadding * 2.5);
  }
};
```

### 5. Step: Adding the parts list table

Now we want to add the parts list table for which we formatted the parts list data in step 2.

```typescript
const addPartListTable = (partList, price, doc) => {
  const startX = 14;
  const startY = 22;
  const mediumPadding = 5;
  const smallFont = 9;

  doc.autoTableSetDefaults({
    headStyles: { fillColor: [64, 64, 64] },
  });

  const totalPagesExp = "{total_pages_count_string}";
  partList.forEach(({ fullList, originPart }, index) => {
    const tableContent = generateData(fullList);

    const headers = ["Article Number", "Part Name", "Count"];
    if (price) {
      headers.push("Price");
    }
    const headersLength = headers.length;
    const startYMainComponent =
      index === 0
        ? startY + mediumPadding * 4
        : doc.lastAutoTable.finalY + mediumPadding;
    doc.autoTable({
      head: [
        [
          {
            content: originPart.label ? originPart.label : "",
            colSpan: headersLength,
            styles: {
              cellPadding: { top: 5, right: 0, bottom: 5, left: 0 },
              fontSize: 12,
              fontStyle: "bold",
              textColor: [0, 0, 0],
              fillColor: [255, 255, 255],
            },
          },
        ],
        headers,
      ],
      body: tableContent,
      theme: "grid",
      startY: startYMainComponent + mediumPadding,
      styles: {
        font: "Lato",
      },
      rowPageBreak: "avoid",
      didDrawPage(data) {
        let str = "Page " + doc.internal.getNumberOfPages();
        if (typeof doc.putTotalPages === "function") {
          str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(smallFont);
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - smallFont);
      },
    });
  });

  if (typeof doc.putTotalPages === "function") {
    doc.putTotalPages(totalPagesExp);
  }
};
```

### 6. Step: Final step

Finally you have to call all the function above to set up the PDF with your parts list.

```typescript
export const printPartList = async ({
  partList,
  price,
  label,
  bounds,
  catalogLabel,
  image,
}) => {
  const doc = new jsPDF();

  initializeDocument(label, catalogLabel, image, doc);
  addBoundsAndPrice(bounds, price, doc);
  addPartListTable(partList, price, doc);

  doc.save(`${label} ${catalogLabel || "Custom configuration"}.pdf`);
};
```

## Conclusion

To implement your custom parts list there are some steps needed, as mentioned above you after overriding the `onPartlistPrint` callback you can implement printing the parts list PDF in your own way.

If you want to look up the full example please have a look in this [Code Sandbox.](https://codesandbox.io/p/sandbox/external-partlist-printing-forked-zcyj3c)
