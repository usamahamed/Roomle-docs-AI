[planner-core/src/roomle-planner](../modules/planner_core_src_roomle_planner.md).[internal](../modules/planner_core_src_roomle_planner._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-37.md)<[`PlannerSelectionHandlerEvent`](planner_core_src_roomle_planner._internal_.PlannerSelectionHandlerEvent.md)\>

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](planner_core_src_roomle_planner._internal_.default-11.md#constructor)

## Methods

- [addEventListener](planner_core_src_roomle_planner._internal_.default-11.md#addeventlistener)
- [cancelSelection](planner_core_src_roomle_planner._internal_.default-11.md#cancelselection)
- [check](planner_core_src_roomle_planner._internal_.default-11.md#check)
- [disableEvents](planner_core_src_roomle_planner._internal_.default-11.md#disableevents)
- [dispatchEvent](planner_core_src_roomle_planner._internal_.default-11.md#dispatchevent)
- [enableEvents](planner_core_src_roomle_planner._internal_.default-11.md#enableevents)
- [getSelectedIds](planner_core_src_roomle_planner._internal_.default-11.md#getselectedids)
- [getSelectedPlanElementViewModels](planner_core_src_roomle_planner._internal_.default-11.md#getselectedplanelementviewmodels)
- [getSelectionMode](planner_core_src_roomle_planner._internal_.default-11.md#getselectionmode)
- [hasMultiSelection](planner_core_src_roomle_planner._internal_.default-11.md#hasmultiselection)
- [hasSelection](planner_core_src_roomle_planner._internal_.default-11.md#hasselection)
- [isSelected](planner_core_src_roomle_planner._internal_.default-11.md#isselected)
- [removeEventListener](planner_core_src_roomle_planner._internal_.default-11.md#removeeventlistener)
- [removeSelection](planner_core_src_roomle_planner._internal_.default-11.md#removeselection)
- [setSelectionMode](planner_core_src_roomle_planner._internal_.default-11.md#setselectionmode)

# Constructors

## constructor

• **new default**()

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-37.md#constructor)

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`PlannerSelectionHandlerEvent`](planner_core_src_roomle_planner._internal_.PlannerSelectionHandlerEvent.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#addeventlistener)

___

## cancelSelection

▸ **cancelSelection**(`reason`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | [`CancelSelectionReasons`](../modules/planner_core_src_roomle_planner._internal_.md#cancelselectionreasons) |

### Returns

`void`

___

## check

▸ **check**(`planElementViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `planElementViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md) |

### Returns

`void`

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#disableevents)

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | [`PlannerSelectionHandlerEvent`](planner_core_src_roomle_planner._internal_.PlannerSelectionHandlerEvent.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-37.md#dispatchevent)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-37.md#enableevents)

___

## getSelectedIds

▸ **getSelectedIds**(): `number`[]

### Returns

`number`[]

___

## getSelectedPlanElementViewModels

▸ **getSelectedPlanElementViewModels**(): [`default`](configurator_core_src_roomle_configurator._internal_.default-50.md)[]

### Returns

[`default`](configurator_core_src_roomle_configurator._internal_.default-50.md)[]

___

## getSelectionMode

▸ **getSelectionMode**(): [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

### Returns

[`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md)

___

## hasMultiSelection

▸ **hasMultiSelection**(): `boolean`

### Returns

`boolean`

___

## hasSelection

▸ **hasSelection**(): `boolean`

### Returns

`boolean`

___

## isSelected

▸ **isSelected**(`id`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

### Returns

`boolean`

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`PlannerSelectionHandlerEvent`](planner_core_src_roomle_planner._internal_.PlannerSelectionHandlerEvent.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-37.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-37.md#removeeventlistener)

___

## removeSelection

▸ **removeSelection**(): `void`

### Returns

`void`

___

## setSelectionMode

▸ **setSelectionMode**(`mode`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`SELECTION_MODE`](../enums/configurator_core_src_roomle_configurator._internal_.SELECTION_MODE.md) |

### Returns

`void`
