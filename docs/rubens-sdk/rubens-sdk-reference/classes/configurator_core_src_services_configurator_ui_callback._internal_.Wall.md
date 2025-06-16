[configurator-core/src/services/configurator-ui-callback](../modules/configurator_core_src_services_configurator_ui_callback.md).[internal](../modules/configurator_core_src_services_configurator_ui_callback._internal_.md).Wall

# Hierarchy

- [`PlanObjectPtr`](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md)

  ↳ **`Wall`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#constructor)

## Properties

- [customColor](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#customcolor)
- [extRef](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#extref)
- [fixedZ](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#fixedz)
- [flipX](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#flipx)
- [flipY](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#flipy)
- [height](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#height)
- [leftMaterial](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#leftmaterial)
- [level](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#level)
- [rightMaterial](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#rightmaterial)
- [rotation](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#rotation)
- [size](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#size)
- [thickness](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#thickness)

## Methods

- [getAngle](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getangle)
- [getAttachedObjects](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getattachedobjects)
- [getCatalogItemId](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcatalogitemid)
- [getCenter](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcenter)
- [getConfigurationRuntimeId](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getconfigurationruntimeid)
- [getCornerFromLeft](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcornerfromleft)
- [getCornerFromRight](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcornerfromright)
- [getCornerToLeft](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcornertoleft)
- [getCornerToRight](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getcornertoright)
- [getFrom](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getfrom)
- [getId](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getid)
- [getLength](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getlength)
- [getObjectType](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getobjecttype)
- [getPreferredSide](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getpreferredside)
- [getTo](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#getto)
- [hasConfiguration](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#hasconfiguration)
- [isConfigurationLoaded](configurator_core_src_services_configurator_ui_callback._internal_.Wall.md#isconfigurationloaded)

# Constructors

## constructor

• **new Wall**()

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[constructor](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#constructor)

# Properties

## customColor

• **customColor**: `number`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[customColor](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#customcolor)

___

## extRef

• **extRef**: `number`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[extRef](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#extref)

___

## fixedZ

• **fixedZ**: `boolean`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[fixedZ](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#fixedz)

___

## flipX

• **flipX**: `boolean`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[flipX](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#flipx)

___

## flipY

• **flipY**: `boolean`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[flipY](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#flipy)

___

## height

• **height**: `number`

___

## leftMaterial

• **leftMaterial**: [`WallMaterial`](configurator_core_src_services_configurator_ui_callback._internal_.WallMaterial.md)

___

## level

• **level**: `number`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[level](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#level)

___

## rightMaterial

• **rightMaterial**: [`WallMaterial`](configurator_core_src_services_configurator_ui_callback._internal_.WallMaterial.md)

___

## rotation

• **rotation**: [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[rotation](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#rotation)

___

## size

• **size**: [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[size](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#size)

___

## thickness

• **thickness**: `number`

# Methods

## getAngle

▸ **getAngle**(): `number`

### Returns

`number`

___

## getAttachedObjects

▸ **getAttachedObjects**(): [`PlanObjectObjectSet`](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectObjectSet.md)

### Returns

[`PlanObjectObjectSet`](configurator_core_src_services_configurator_ui_callback._internal_.PlanObjectObjectSet.md)

___

## getCatalogItemId

▸ **getCatalogItemId**(): `string`

### Returns

`string`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[getCatalogItemId](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#getcatalogitemid)

___

## getCenter

▸ **getCenter**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getConfigurationRuntimeId

▸ **getConfigurationRuntimeId**(): `number`

### Returns

`number`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[getConfigurationRuntimeId](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#getconfigurationruntimeid)

___

## getCornerFromLeft

▸ **getCornerFromLeft**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getCornerFromRight

▸ **getCornerFromRight**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getCornerToLeft

▸ **getCornerToLeft**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getCornerToRight

▸ **getCornerToRight**(): [`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

### Returns

[`KernelVector3f`](../interfaces/typings_kernel.KernelVector3f.md)

___

## getFrom

▸ **getFrom**(): [`Node`](configurator_core_src_services_configurator_ui_callback._internal_.Node.md)

### Returns

[`Node`](configurator_core_src_services_configurator_ui_callback._internal_.Node.md)

___

## getId

▸ **getId**(): `number`

### Returns

`number`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[getId](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#getid)

___

## getLength

▸ **getLength**(): `number`

### Returns

`number`

___

## getObjectType

▸ **getObjectType**(): `string`

### Returns

`string`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[getObjectType](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#getobjecttype)

___

## getPreferredSide

▸ **getPreferredSide**(): `Object`

### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | [`Enumify`](../modules/configurator_core_src_configurator._internal_.md#enumify)<{ `LEFT`: ``0`` = 0; `MIDDLE`: ``2`` = 2; `RIGHT`: ``1`` = 1 }\> |

___

## getTo

▸ **getTo**(): [`Node`](configurator_core_src_services_configurator_ui_callback._internal_.Node.md)

### Returns

[`Node`](configurator_core_src_services_configurator_ui_callback._internal_.Node.md)

___

## hasConfiguration

▸ **hasConfiguration**(): `boolean`

### Returns

`boolean`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[hasConfiguration](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#hasconfiguration)

___

## isConfigurationLoaded

▸ **isConfigurationLoaded**(): `boolean`

### Returns

`boolean`

### Inherited from

[PlanObjectPtr](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md).[isConfigurationLoaded](configurator_core_src_roomle_configurator._internal_.PlanObjectPtr.md#isconfigurationloaded)
