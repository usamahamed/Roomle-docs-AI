[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).PlanInteractionHandler

# Table of contents

## Properties

- [customRaster](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#customraster)
- [dockWhenSnap](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#dockwhensnap)
- [enableDrawingSnap](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#enabledrawingsnap)
- [enableRaster](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#enableraster)
- [enableSnap](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#enablesnap)
- [objectToObjectSnapMode](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#objecttoobjectsnapmode)
- [objectToWallSnapMode](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#objecttowallsnapmode)
- [showChildrenOfPlanObjects](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#showchildrenofplanobjects)
- [unDockOnMove](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#undockonmove)
- [unit](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#unit)

## Methods

- [addMeasure](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addmeasure)
- [addNode](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addnode)
- [addOrUpdateExternalPlanObjects](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addorupdateexternalplanobjects)
- [addPlanObjectFromItem](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addplanobjectfromitem)
- [addPlanObjects](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addplanobjects)
- [addWall](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#addwall)
- [beginDrawing](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#begindrawing)
- [cancelDrawing](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#canceldrawing)
- [consistsOfMergedComponents](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#consistsofmergedcomponents)
- [currentDrawingPosition](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#currentdrawingposition)
- [deactivateAllSnappingActivity](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#deactivateallsnappingactivity)
- [duplicatePlanObject](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#duplicateplanobject)
- [duplicatePlanObjects](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#duplicateplanobjects)
- [endDrawing](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#enddrawing)
- [endInteraction](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#endinteraction)
- [forceNode](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#forcenode)
- [getConfiguratorKernel](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#getconfiguratorkernel)
- [getContinuousDrawingManager](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#getcontinuousdrawingmanager)
- [getPlan](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#getplan)
- [getShowChildrenOfPlanObject](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#getshowchildrenofplanobject)
- [groupObjects](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#groupobjects)
- [init](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#init)
- [isRedoPossible](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#isredopossible)
- [isUndoPossible](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#isundopossible)
- [isVectorPreviewModeEnabled](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#isvectorpreviewmodeenabled)
- [loadPlanXML](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#loadplanxml)
- [moveElementBy](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#moveelementby)
- [moveElementTo](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#moveelementto)
- [moveObjectsBy](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#moveobjectsby)
- [reactivateAllSnappingActivity](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#reactivateallsnappingactivity)
- [redo](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#redo)
- [removeElement](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#removeelement)
- [rotateGroupBy](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#rotategroupby)
- [rotateObjectTo](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#rotateobjectto)
- [rotateObjectsBy](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#rotateobjectsby)
- [setDefaultParapetHeight](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setdefaultparapetheight)
- [setDefaultWallHeight](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setdefaultwallheight)
- [setDefaultWallThickness](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setdefaultwallthickness)
- [setDrawingType](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setdrawingtype)
- [setFloorMaterial](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setfloormaterial)
- [setLengthOfWall](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setlengthofwall)
- [setMeasurePoint1](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setmeasurepoint1)
- [setMeasurePoint2](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setmeasurepoint2)
- [setObjectCustomColor](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectcustomcolor)
- [setObjectFixedZ](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectfixedz)
- [setObjectFlipX](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectflipx)
- [setObjectFlipY](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectflipy)
- [setObjectRotation](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectrotation)
- [setObjectSize](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setobjectsize)
- [setRotationSnapAngle](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setrotationsnapangle)
- [setShowChildrenOfPlanObject](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setshowchildrenofplanobject)
- [setSnapFeedbackWhileDrawing](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setsnapfeedbackwhiledrawing)
- [setViewSnapDist](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setviewsnapdist)
- [setWallHeight](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setwallheight)
- [setWallLeftMaterial](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setwallleftmaterial)
- [setWallRightMaterial](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setwallrightmaterial)
- [setWallThickness](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setwallthickness)
- [setZoomFactor](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#setzoomfactor)
- [startInteraction](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#startinteraction)
- [undo](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md#undo)

# Properties

## customRaster

• **customRaster**: `number`

___

## dockWhenSnap

• **dockWhenSnap**: `boolean`

___

## enableDrawingSnap

• **enableDrawingSnap**: `boolean`

___

## enableRaster

• **enableRaster**: `boolean`

___

## enableSnap

• **enableSnap**: `boolean`

___

## objectToObjectSnapMode

• **objectToObjectSnapMode**: [`SnapMode`](../enums/configurator_core_src_roomle_configurator._internal_.SnapMode.md)

___

## objectToWallSnapMode

• **objectToWallSnapMode**: [`SnapMode`](../enums/configurator_core_src_roomle_configurator._internal_.SnapMode.md)

___

## showChildrenOfPlanObjects

• **showChildrenOfPlanObjects**: [`ChildEntityMode`](configurator_core_src_roomle_configurator._internal_.ChildEntityMode.md)

___

## unDockOnMove

• **unDockOnMove**: `boolean`

___

## unit

• **unit**: `string`

# Methods

## addMeasure

▸ **addMeasure**(`startPosition`, `endPosition`): [`PlanMeasure`](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `startPosition` | [`KernelVector3f`](typings_kernel.KernelVector3f.md) |
| `endPosition` | [`KernelVector3f`](typings_kernel.KernelVector3f.md) |

### Returns

[`PlanMeasure`](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md)

___

## addNode

▸ **addNode**(`point`): [`PlanNode`](configurator_core_src_roomle_configurator._internal_.PlanNode.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `point.x` | `number` |
| `point.y` | `number` |
| `point.z` | `number` |

### Returns

[`PlanNode`](configurator_core_src_roomle_configurator._internal_.PlanNode.md)

___

## addOrUpdateExternalPlanObjects

▸ **addOrUpdateExternalPlanObjects**(`serialzedConfiguration`, `position`, `rotationInRad`, `findFreeSpaceInPlan`, `applyGlobalChildMode`): [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `serialzedConfiguration` | `string` |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `rotationInRad` | `number` |
| `findFreeSpaceInPlan` | `boolean` |
| `applyGlobalChildMode` | `boolean` |

### Returns

[`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

___

## addPlanObjectFromItem

▸ **addPlanObjectFromItem**(`object`, `position`, `type`, `findFreeSpaceInPlan`): [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `position` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `type` | `number` |
| `findFreeSpaceInPlan` | `boolean` |

### Returns

[`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)

___

## addPlanObjects

▸ **addPlanObjects**(`list`, `findFreeSpaceInPlan`): [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`KernelObjectPtrList`](typings_kernel.KernelObjectPtrList.md) |
| `findFreeSpaceInPlan` | `boolean` |

### Returns

[`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

___

## addWall

▸ **addWall**(`from`, `to`): [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PlanNode`](configurator_core_src_roomle_configurator._internal_.PlanNode.md) |
| `to` | [`PlanNode`](configurator_core_src_roomle_configurator._internal_.PlanNode.md) |

### Returns

[`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md)

___

## beginDrawing

▸ **beginDrawing**(`point`, `vectorPreviewMode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `point.x` | `number` |
| `point.y` | `number` |
| `point.z` | `number` |
| `vectorPreviewMode` | `boolean` |

### Returns

`void`

___

## cancelDrawing

▸ **cancelDrawing**(): `void`

### Returns

`void`

___

## consistsOfMergedComponents

▸ **consistsOfMergedComponents**(`object`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

`boolean`

___

## currentDrawingPosition

▸ **currentDrawingPosition**(`point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `point.x` | `number` |
| `point.y` | `number` |
| `point.z` | `number` |

### Returns

`void`

___

## deactivateAllSnappingActivity

▸ **deactivateAllSnappingActivity**(): `void`

### Returns

`void`

___

## duplicatePlanObject

▸ **duplicatePlanObject**(`object`, `count`, `findFreeSpaceInPlan`): [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md) |
| `count` | `number` |
| `findFreeSpaceInPlan` | `boolean` |

### Returns

[`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

___

## duplicatePlanObjects

▸ **duplicatePlanObjects**(`objects`, `count`, `findFreeSpaceInPlan`): [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`PlanObjectList`](../classes/configurator_core_src_roomle_configurator._internal_.PlanObjectList.md) |
| `count` | `number` |
| `findFreeSpaceInPlan` | `boolean` |

### Returns

[`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md)[]

___

## endDrawing

▸ **endDrawing**(`point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `point.x` | `number` |
| `point.y` | `number` |
| `point.z` | `number` |

### Returns

`void`

___

## endInteraction

▸ **endInteraction**(): `void`

### Returns

`void`

___

## forceNode

▸ **forceNode**(`point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `point.x` | `number` |
| `point.y` | `number` |
| `point.z` | `number` |

### Returns

`void`

___

## getConfiguratorKernel

▸ **getConfiguratorKernel**(): [`ConfiguratorKernelClass`](typings_kernel.ConfiguratorKernelClass.md)

### Returns

[`ConfiguratorKernelClass`](typings_kernel.ConfiguratorKernelClass.md)

___

## getContinuousDrawingManager

▸ **getContinuousDrawingManager**(): [`ContinuousDrawingManager`](configurator_core_src_roomle_configurator._internal_.ContinuousDrawingManager.md)

### Returns

[`ContinuousDrawingManager`](configurator_core_src_roomle_configurator._internal_.ContinuousDrawingManager.md)

___

## getPlan

▸ **getPlan**(): [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md)

### Returns

[`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md)

___

## getShowChildrenOfPlanObject

▸ **getShowChildrenOfPlanObject**(`object`): [`ChildEntityMode`](configurator_core_src_roomle_configurator._internal_.ChildEntityMode.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

[`ChildEntityMode`](configurator_core_src_roomle_configurator._internal_.ChildEntityMode.md)

___

## groupObjects

▸ **groupObjects**(`planObjectPtrList`): [`ObjectGroupPtr`](typings_kernel.ObjectGroupPtr.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectPtrList` | [`PlanObjectList`](../classes/configurator_core_src_roomle_configurator._internal_.PlanObjectList.md) |

### Returns

[`ObjectGroupPtr`](typings_kernel.ObjectGroupPtr.md)

___

## init

▸ **init**(`reference`, `zoomFactor`, `viewSnapDist`, `wallSnapMode`, `objectSnapMode`, `shouldSnap`, `drawingType`): [`PlanInteractionHandler`](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`PlanInteractionHandler`](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md) |
| `zoomFactor` | `number` |
| `viewSnapDist` | `number` |
| `wallSnapMode` | `any` |
| `objectSnapMode` | `any` |
| `shouldSnap` | `boolean` |
| `drawingType` | `any` |

### Returns

[`PlanInteractionHandler`](configurator_core_src_roomle_configurator._internal_.PlanInteractionHandler.md)

___

## isRedoPossible

▸ **isRedoPossible**(): `boolean`

### Returns

`boolean`

___

## isUndoPossible

▸ **isUndoPossible**(): `boolean`

### Returns

`boolean`

___

## isVectorPreviewModeEnabled

▸ **isVectorPreviewModeEnabled**(): `boolean`

### Returns

`boolean`

___

## loadPlanXML

▸ **loadPlanXML**(`xml`): [`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md)

### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `string` |

### Returns

[`Plan`](configurator_core_src_roomle_configurator._internal_.Plan.md)

___

## moveElementBy

▸ **moveElementBy**(`planObject`, `distance`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `distance` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## moveElementTo

▸ **moveElementTo**(`planObject`, `point`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `point` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## moveObjectsBy

▸ **moveObjectsBy**(`planObjects`, `distance`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjects` | [`KernelObjectPtrList`](typings_kernel.KernelObjectPtrList.md) |
| `distance` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## reactivateAllSnappingActivity

▸ **reactivateAllSnappingActivity**(): `void`

### Returns

`void`

___

## redo

▸ **redo**(): `void`

### Returns

`void`

___

## removeElement

▸ **removeElement**(`planObject`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |

### Returns

`void`

___

## rotateGroupBy

▸ **rotateGroupBy**(`group`, `anAngleInRad`, `aroundPoint`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ObjectGroupPtr`](typings_kernel.ObjectGroupPtr.md) |
| `anAngleInRad` | `number` |
| `aroundPoint` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## rotateObjectTo

▸ **rotateObjectTo**(`planObject`, `angleInRad`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `angleInRad` | `number` |

### Returns

`void`

___

## rotateObjectsBy

▸ **rotateObjectsBy**(`planObjectPtrList`, `anAngleInRad`, `aroundPoint`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObjectPtrList` | [`PlanObjectList`](../classes/configurator_core_src_roomle_configurator._internal_.PlanObjectList.md) |
| `anAngleInRad` | `number` |
| `aroundPoint` | [`KernelVector3`](typings_kernel.KernelVector3.md) |

### Returns

`void`

___

## setDefaultParapetHeight

▸ **setDefaultParapetHeight**(`parapetHeight`, `applyToAll`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parapetHeight` | `number` |
| `applyToAll` | `boolean` |

### Returns

`void`

___

## setDefaultWallHeight

▸ **setDefaultWallHeight**(`wallHeight`, `applyToAll`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wallHeight` | `number` |
| `applyToAll` | `boolean` |

### Returns

`void`

___

## setDefaultWallThickness

▸ **setDefaultWallThickness**(`wallThickness`, `applyToAll`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wallThickness` | `number` |
| `applyToAll` | `boolean` |

### Returns

`void`

___

## setDrawingType

▸ **setDrawingType**(`aNewDrawingType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aNewDrawingType` | [`DrawingType`](../enums/configurator_core_src_roomle_configurator._internal_.DrawingType.md) |

### Returns

`void`

___

## setFloorMaterial

▸ **setFloorMaterial**(`floor`, `material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `floor` | [`KernelFloor`](configurator_core_src_roomle_configurator._internal_.KernelFloor.md) |
| `material` | [`KernelFloorMaterial`](configurator_core_src_roomle_configurator._internal_.KernelFloorMaterial.md) |

### Returns

`void`

___

## setLengthOfWall

▸ **setLengthOfWall**(`wall`, `length`, `preferredSide`, `direction`, `moveOrthogonalWalls`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wall` | [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md) |
| `length` | `number` |
| `preferredSide` | [`WallSide`](configurator_core_src_roomle_configurator._internal_.WallSide.md) |
| `direction` | [`EMSConstant`](../classes/configurator_core_src_roomle_configurator._internal_.EMSConstant.md) |
| `moveOrthogonalWalls` | `boolean` |

### Returns

`void`

___

## setMeasurePoint1

▸ **setMeasurePoint1**(`measure`, `point`, `snapToWalls`, `snapToObjects`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `measure` | [`PlanMeasure`](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md) |
| `point` | [`KernelVector3f`](typings_kernel.KernelVector3f.md) |
| `snapToWalls` | `boolean` |
| `snapToObjects` | `boolean` |

### Returns

`void`

___

## setMeasurePoint2

▸ **setMeasurePoint2**(`measure`, `point`, `snapToWalls`, `snapToObjects`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `measure` | [`PlanMeasure`](configurator_core_src_roomle_configurator._internal_.PlanMeasure.md) |
| `point` | [`KernelVector3f`](typings_kernel.KernelVector3f.md) |
| `snapToWalls` | `boolean` |
| `snapToObjects` | `boolean` |

### Returns

`void`

___

## setObjectCustomColor

▸ **setObjectCustomColor**(`anObject`, `aCustomColor`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `aCustomColor` | `number` |

### Returns

`void`

___

## setObjectFixedZ

▸ **setObjectFixedZ**(`anObject`, `shouldFlipZ`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `shouldFlipZ` | `boolean` |

### Returns

`void`

___

## setObjectFlipX

▸ **setObjectFlipX**(`anObject`, `shouldFlipX`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `shouldFlipX` | `boolean` |

### Returns

`void`

___

## setObjectFlipY

▸ **setObjectFlipY**(`anObject`, `shouldFlipY`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `shouldFlipY` | `boolean` |

### Returns

`void`

___

## setObjectRotation

▸ **setObjectRotation**(`planObject`, `angleInRad`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `angleInRad` | `number` |

### Returns

`void`

___

## setObjectSize

▸ **setObjectSize**(`anObject`, `aNewSize`, `anAnchor`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `aNewSize` | [`KernelVector3`](typings_kernel.KernelVector3.md) |
| `anAnchor` | [`Anchor`](configurator_core_src_roomle_configurator._internal_.Anchor.md) |

### Returns

`void`

___

## setRotationSnapAngle

▸ **setRotationSnapAngle**(`angleInRadians`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `angleInRadians` | `number` |

### Returns

`void`

___

## setShowChildrenOfPlanObject

▸ **setShowChildrenOfPlanObject**(`object`, `mode`, `switchChildModeOffForAllOtherObjects`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md) |
| `mode` | [`ChildEntityMode`](configurator_core_src_roomle_configurator._internal_.ChildEntityMode.md) |
| `switchChildModeOffForAllOtherObjects` | `boolean` |

### Returns

`void`

___

## setSnapFeedbackWhileDrawing

▸ **setSnapFeedbackWhileDrawing**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

___

## setViewSnapDist

▸ **setViewSnapDist**(`aDist`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aDist` | `number` |

### Returns

`void`

___

## setWallHeight

▸ **setWallHeight**(`wall`, `height`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wall` | [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md) |
| `height` | `number` |

### Returns

`void`

___

## setWallLeftMaterial

▸ **setWallLeftMaterial**(`wall`, `material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wall` | [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md) |
| `material` | [`KernelWallMaterial`](configurator_core_src_roomle_configurator._internal_.KernelWallMaterial.md) |

### Returns

`void`

___

## setWallRightMaterial

▸ **setWallRightMaterial**(`wall`, `material`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wall` | [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md) |
| `material` | [`KernelWallMaterial`](configurator_core_src_roomle_configurator._internal_.KernelWallMaterial.md) |

### Returns

`void`

___

## setWallThickness

▸ **setWallThickness**(`wall`, `thickness`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `wall` | [`KernelWall`](configurator_core_src_roomle_configurator._internal_.KernelWall.md) |
| `thickness` | `number` |

### Returns

`void`

___

## setZoomFactor

▸ **setZoomFactor**(`pxPerMM`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `pxPerMM` | `number` |

### Returns

`void`

___

## startInteraction

▸ **startInteraction**(): `void`

### Returns

`void`

___

## undo

▸ **undo**(): `void`

### Returns

`void`
