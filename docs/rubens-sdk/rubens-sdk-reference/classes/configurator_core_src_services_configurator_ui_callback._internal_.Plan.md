[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).Plan

# Hierarchy

- [`AbstractModelWrapper`](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md)

  ↳ **`Plan`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#constructor)

## Properties

- [defaultParapetHeight](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#defaultparapetheight)
- [defaultWallColor](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#defaultwallcolor)
- [defaultWallHeight](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#defaultwallheight)
- [defaultWallThickness](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#defaultwallthickness)
- [extRef](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#extref)

## Methods

- [applySettings](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#applysettings)
- [getBounds](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getbounds)
- [getId](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getid)
- [getImageCount](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getimagecount)
- [getPlanObjects](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getplanobjects)
- [getPlanXML](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getplanxml)
- [getPlanXMLWithNormalizedLockLevels](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getplanxmlwithnormalizedlocklevels)
- [getTotalFloorArea](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#gettotalfloorarea)
- [getWallCount](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#getwallcount)
- [increaseLockLevels](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#increaselocklevels)
- [isEmpty](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#isempty)
- [syncToView](configurator_core_src_services_configurator_ui_callback._internal_.Plan.md#synctoview)

# Constructors

## constructor

• **new Plan**()

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[constructor](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#constructor)

# Properties

## defaultParapetHeight

• **defaultParapetHeight**: `number`

___

## defaultWallColor

• **defaultWallColor**: `number`

___

## defaultWallHeight

• **defaultWallHeight**: `number`

___

## defaultWallThickness

• **defaultWallThickness**: `number`

___

## extRef

• **extRef**: `number`

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[extRef](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#extref)

# Methods

## applySettings

▸ **applySettings**(`aRoomHeight`, `aParapetHeight`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `aRoomHeight` | `number` |
| `aParapetHeight` | `number` |

### Returns

`void`

___

## getBounds

▸ **getBounds**(): [`KernelCube`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.KernelCube.md)

### Returns

[`KernelCube`](../interfaces/configurator_core_src_services_configurator_ui_callback._internal_.KernelCube.md)

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[AbstractModelWrapper](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md).[getId](configurator_core_src_roomle_configurator._internal_.AbstractModelWrapper.md#getid)

___

## getImageCount

▸ **getImageCount**(): `number`

### Returns

`number`

___

## getPlanObjects

▸ **getPlanObjects**(): [`PlanObjectPtrVector`](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md)

### Returns

[`PlanObjectPtrVector`](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectPtrVector.md)

___

## getPlanXML

▸ **getPlanXML**(): `string`

### Returns

`string`

___

## getPlanXMLWithNormalizedLockLevels

▸ **getPlanXMLWithNormalizedLockLevels**(): `string`

### Returns

`string`

___

## getTotalFloorArea

▸ **getTotalFloorArea**(): `number`

### Returns

`number`

___

## getWallCount

▸ **getWallCount**(): `number`

### Returns

`number`

___

## increaseLockLevels

▸ **increaseLockLevels**(): `void`

### Returns

`void`

___

## isEmpty

▸ **isEmpty**(): `boolean`

### Returns

`boolean`

___

## syncToView

▸ **syncToView**(): `void`

### Returns

`void`
