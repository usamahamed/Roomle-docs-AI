# Roomle Content Naming Conventions

## Patterns for Naming Parameters and Variables in Given Situations
|Situation|Prefix|Example|Typical type and values
|---|---|---|---|
|Can change element type to|canBe-|canBeFootstool|Boolean|
|Can change to a situation|can(Be)-|canBeFreestanding|Boolean|
|Can have accessory or neighbour of type docked|canHave-|canHaveFootstool|Boolean|
|Has accessory or neighbour of type docked|has-|hasFootstool, hasLegs|Boolean|
|Has child behind a dock mask|has\<Mask\>Child|hasLeftChild, hasTopChild|Boolean|
|Has accessory of type|\<accessory\>Type|legsType, handleType|String / matching with that accessory's parameter|
|The main type of this component|elementType|elementType|String|
|Is child behind parent's mask|is\<Parent's Mask\>Child|isLeftChild, isTopChild|Boolean|
|Is in a situation|is-|isFreestanding, isOnFloor, isRoot, isCorner|Boolean|
|Is of type|is-|isFootstool|Boolean|
|Situation of a \[neighbour/child\] behind a connection mask|\<mask\> -\[Neighbour/Child/\]\[Is/Has/CanBe\]|leftNeighbourElementType, topChildHasBottomShelf, rightNeighbourIsCorner|depends on the situation|
|Docking mask should be allowed <=> can dock with that mask|allow- \<mask\> -Dock|allowLeftDock|Boolean|
|Count of accessories docked|count- (-docked)|countFootstools(Docked), countPillows|Integer|
|Main component's material|material|material|Material|
|Distinguish between main component's materials if we can't say one of them is the main|\<part\>Material|countertopMaterial, sidesMaterial, frontsMaterial|Material|
|Material of some accessory|\<accessory\>Material|legsMaterial, handleMaterial|Material|
|Dimensions of components that go in volume|width, depth, height, diameter, radius|width, depth, height, diameter, radius|Decimal (!)|
|Position of docking points or accessories|\<situation\>Pos\[X/Y/Z\]|leftDockPosX, topDockPosZ|Decimal (!)|
|Base dimensions for accessories or dock placement|\<situation\>\[Width/Depth/Height/Length\]|legsBaseWidth, dockDepth|Decimal (!)|
|Sizes of construction elements|\<part\>\[Width/Depth/Height/Length/Thickness\]|woodThickness, |Decimal (!)|
|Gaps or distance between, offset of first|\<situation\>[Gap\Offset]|freestandingDockGap, holesOffset, holesDistance|Decimal (!)|

Always **use camelCase to separate words** in variable and parameter names instead of using underlines_to_separate_words. If the identifier has an abbreviation, let only the first character of the abbreviation be uppercase, like weHave**Abc**Abbreviation or **abc**Abbreviation instead of weHave**ABC**Abbreviation or **aBC**Abbreviation.

## Naming Components
Since the componentId (also referred to as `External Identifier`) already has the catalogId, it is clearly distinguishable to which project it belongs. A delimiter `_` follows. Last part of the componentId should denote what the actual thing is. 

It is strogly recommended to use lowercase characters for componentId only. 

The format should then be:
`catalogid:projectname_partname`

The reason is that this is much easier to remember as for example having to remember Celeste_FootStool or Celeste_Footstool.

It might be necessary to use uppercase characters in the componentId in some rare cases. This is possible but you will have to accept a warning pop-up to reduce the chances of using uppercase characters by unintended.   

Examples:

We have a Celeste sofa system by ABC-Design:

`abcdesign:celeste_master` - the master component for following subcomponents

`abcdesign:celeste_1seater`

`abcdesign:celeste_corner`

`abcdesign:celeste_longchair`

If there are more articles in one component, use plural. 

`abcdesign:celeste_pillows`

## Naming items

ItemIds should carry information on to which componentId they lead to. It does not have to be equal, but the content creator should understand this from reading the itemId already. Pattern for selecting itemId:

`catalogueId:projectname_partname_[distinctiveParameterValue]`

Examples:

`abcdesign:celeste_longchair_left`, `abcdesign:celeste_longchair_right`  (longchair_left and longchair_right are elementType values, we omit "master" in itemId)

`abcdesign:celeste_1seater_1200` - single seater of width 1200 (you expect that this is width in sofa elements)

`shelfmasters:supershelf_frame_800_400` leads to a frame of size 800x400 (probably width x height) -> If there are more dimensions in the itemId, follow the natural width x depth x height order

## Language Specific Characters for Identifiers

Use english equivalents for the identifiers and componentIds. If, for any reason, you need to write them in any different language, handle the language specific characters in a way that is common to that given language, for example:

* German
    * ä, ö, ü -> replace with ae, oe, ue
    * ß -> replace with ss
* Czech
    * ignore diacritic marks ě, š, ž, ý, á, ů -> e, s, z, y, a, u etc.

This is of course not relevant for labels or string content, where you should display the texts correctly.

## Naming docking masks

The docking masks should contain information about what can be docked behind it. Imagine it as a connector, where you specify the standard you need for the other part to connect. There can be several situations:

* you dock a part of a modular product (sofa, shelf frame) - use the same prefix of the product as you use for the componentId
* you can dock one concrete part - use a docking mask describing the part
* you can dock a type of accessories - use an umbrella term of matching accessories

Use the masks as they are described above in cases, where there is only one child docking point on the child side - that means that the child has only one connector and the position of the docking does not influence the child further. However, if you need to distinguish this (generally if the child is not smaller than parent or is not lower in the product hierarchy), use one of words like: left, right, bottom, top, back, forward etc. from the perspective of the parent. Example: sofamoduleLeft, where the parent docking point is on the left in the parent component and on the right in the child component. Be aware that this takes some time to get used to this when you work in the child's perspective.