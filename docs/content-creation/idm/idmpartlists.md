# IDM Part Lists

In the IDM format there is a separate section containing PartLists, which can be referenced from the Items in the Series using the PART_LIST_KEY.

The PartList elements can contain one or multiple PART_LIST_POS elements, which reference an item to be added to the part list. They also reference an order (SEQUENCE), which we are currently not using. It also contains a reference to a Decision from IDMDecisions, which gives us the logic regarding how many of the referenced items must be added to the part list.

For example:
An table set contains one table and a different number of chairs, depending on the size of the table.

All items in the partlist are added as subcomponents, with the numberInPartlist being linked to the onUpdate, in which the logic from the linked IDMDecision is added.
