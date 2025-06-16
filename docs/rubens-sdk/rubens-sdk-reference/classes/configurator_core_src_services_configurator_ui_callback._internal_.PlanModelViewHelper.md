[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).PlanModelViewHelper

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#constructor)

## Methods

- [getCeilingHeight](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#getceilingheight)
- [getDistAlongWallOnSide](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#getdistalongwallonside)
- [getDistToNextWallOnSide](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#getdisttonextwallonside)
- [getMaxDistToBorderForPlanObject](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#getmaxdisttoborderforplanobject)
- [requestFloorMesh2d](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#requestfloormesh2d)
- [requestMesh3d](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#requestmesh3d)
- [requestPlanMesh3d](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#requestplanmesh3d)
- [requestWallMesh2d](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#requestwallmesh2d)
- [setDrawHiddenWallCaps](configurator_core_src_services_configurator_ui_callback._internal_.PlanModelViewHelper.md#setdrawhiddenwallcaps)

# Constructors

## constructor

• **new PlanModelViewHelper**()

# Methods

## getCeilingHeight

▸ `Static` **getCeilingHeight**(`aFloor`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aFloor` | [`Floor`](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md) |

### Returns

`number`

___

## getDistAlongWallOnSide

▸ `Static` **getDistAlongWallOnSide**(`anObject`, `aSide`, `aWallSide`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`ConstructionObject`](configurator_core_src_services_configurator_ui_callback._internal_.ConstructionObject.md) |
| `aSide` | [`PlanObjectSide`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectSide.md) |
| `aWallSide` | [`WallSide`](../interfaces/configurator_core_src_roomle_configurator._internal_.WallSide.md) |

### Returns

`number`

___

## getDistToNextWallOnSide

▸ `Static` **getDistToNextWallOnSide**(`anObject`, `aSide`, `maxDist`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `anObject` | [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md) |
| `aSide` | [`PlanObjectSide`](../enums/configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectSide.md) |
| `maxDist` | `number` |

### Returns

`number`

___

## getMaxDistToBorderForPlanObject

▸ `Static` **getMaxDistToBorderForPlanObject**(`aPlanObject`): `number`

### Parameters

| Name | Type |
| :------ | :------ |
| `aPlanObject` | [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md) |

### Returns

`number`

___

## requestFloorMesh2d

▸ `Static` **requestFloorMesh2d**(`aFloor`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aFloor` | [`Floor`](configurator_core_src_services_configurator_ui_callback._internal_.Floor.md) |

### Returns

`void`

___

## requestMesh3d

▸ `Static` **requestMesh3d**(`aPlanElement`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aPlanElement` | [`PlanElement`](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md) |

### Returns

`void`

___

## requestPlanMesh3d

▸ `Static` **requestPlanMesh3d**(`aPlanElement`, `includeCeiling`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aPlanElement` | [`PlanElement`](configurator_core_src_services_configurator_ui_callback._internal_.PlanElement.md) |
| `includeCeiling` | `boolean` |

### Returns

`void`

___

## requestWallMesh2d

▸ `Static` **requestWallMesh2d**(`aWall`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aWall` | [`Wall`](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md) |

### Returns

`void`

___

## setDrawHiddenWallCaps

▸ `Static` **setDrawHiddenWallCaps**(`drawHiddenWallCaps`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `drawHiddenWallCaps` | `boolean` |

### Returns

`void`
