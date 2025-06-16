[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).Plan

# Hierarchy

- [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

  ↳ **`Plan`**

# Table of contents

## Properties

- [defaultParapetHeight](configurator_core_src_roomle_configurator._internal_.Plan.md#defaultparapetheight)
- [defaultWallHeight](configurator_core_src_roomle_configurator._internal_.Plan.md#defaultwallheight)
- [defaultWallThickness](configurator_core_src_roomle_configurator._internal_.Plan.md#defaultwallthickness)
- [extRef](configurator_core_src_roomle_configurator._internal_.Plan.md#extref)
- [vectorWallThickness](configurator_core_src_roomle_configurator._internal_.Plan.md#vectorwallthickness)

## Methods

- [clone](configurator_core_src_roomle_configurator._internal_.Plan.md#clone)
- [createPlanXmlWithSingleObject](configurator_core_src_roomle_configurator._internal_.Plan.md#createplanxmlwithsingleobject)
- [delete](configurator_core_src_roomle_configurator._internal_.Plan.md#delete)
- [getBounds](configurator_core_src_roomle_configurator._internal_.Plan.md#getbounds)
- [getId](configurator_core_src_roomle_configurator._internal_.Plan.md#getid)
- [getPlanObjects](configurator_core_src_roomle_configurator._internal_.Plan.md#getplanobjects)
- [getPlanXML](configurator_core_src_roomle_configurator._internal_.Plan.md#getplanxml)
- [getTotalFloorArea](configurator_core_src_roomle_configurator._internal_.Plan.md#gettotalfloorarea)
- [getWallCount](configurator_core_src_roomle_configurator._internal_.Plan.md#getwallcount)

# Properties

## defaultParapetHeight

• **defaultParapetHeight**: `number`

___

## defaultWallHeight

• **defaultWallHeight**: `number`

___

## defaultWallThickness

• **defaultWallThickness**: `number`

___

## extRef

• **extRef**: [`EMSReference`](configurator_core_src_roomle_configurator._internal_.EMSReference.md)

### Inherited from

[KernelObject](configurator_core_src_roomle_configurator._internal_.KernelObject.md).[extRef](configurator_core_src_roomle_configurator._internal_.KernelObject.md#extref)

___

## vectorWallThickness

• **vectorWallThickness**: `number`

# Methods

## clone

▸ **clone**(): [`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Returns

[`KernelObject`](configurator_core_src_roomle_configurator._internal_.KernelObject.md)

### Inherited from

[KernelObject](configurator_core_src_roomle_configurator._internal_.KernelObject.md).[clone](configurator_core_src_roomle_configurator._internal_.KernelObject.md#clone)

___

## createPlanXmlWithSingleObject

▸ **createPlanXmlWithSingleObject**(`object`, `includeRuntimeId`, `version`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`PlanObject`](configurator_core_src_roomle_configurator._internal_.PlanObject.md) |
| `includeRuntimeId` | `boolean` |
| `version` | `number` |

### Returns

`string`

___

## delete

▸ **delete**(): `void`

### Returns

`void`

### Inherited from

[KernelObject](configurator_core_src_roomle_configurator._internal_.KernelObject.md).[delete](configurator_core_src_roomle_configurator._internal_.KernelObject.md#delete)

___

## getBounds

▸ **getBounds**(): [`KernelCube`](typings_kernel.KernelCube.md)

### Returns

[`KernelCube`](typings_kernel.KernelCube.md)

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Overrides

[KernelObject](configurator_core_src_roomle_configurator._internal_.KernelObject.md).[getId](configurator_core_src_roomle_configurator._internal_.KernelObject.md#getid)

___

## getPlanObjects

▸ **getPlanObjects**(): `any`

### Returns

`any`

___

## getPlanXML

▸ **getPlanXML**(`includeRuntimeId`, `xmlVersion`): `string`

### Parameters

| Name | Type |
| :------ | :------ |
| `includeRuntimeId` | `boolean` |
| `xmlVersion` | `number` |

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
