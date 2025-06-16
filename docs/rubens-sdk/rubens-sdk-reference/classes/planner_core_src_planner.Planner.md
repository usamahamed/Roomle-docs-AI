[planner-core/src/planner](../modules/planner_core_src_planner.md).Planner

# Hierarchy

- [`default`](configurator_core_src_configurator._internal_.default.md)

  ↳ **`Planner`**

# Table of contents

## Constructors

- [constructor](planner_core_src_planner.Planner.md#constructor)

## Methods

- [boot](planner_core_src_planner.Planner.md#boot)
- [destroy](planner_core_src_planner.Planner.md#destroy)
- [getApi](planner_core_src_planner.Planner.md#getapi)
- [getRapiAccess](planner_core_src_planner.Planner.md#getrapiaccess)
- [pause](planner_core_src_planner.Planner.md#pause)
- [resume](planner_core_src_planner.Planner.md#resume)
- [teardown](planner_core_src_planner.Planner.md#teardown)

# Constructors

## constructor

• **new Planner**(`creator?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator?` | `string` |

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[constructor](configurator_core_src_configurator._internal_.default.md#constructor)

# Methods

## boot

▸ **boot**(`settings?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `object` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[boot](configurator_core_src_configurator._internal_.default.md#boot)

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[destroy](configurator_core_src_configurator._internal_.default.md#destroy)

___

## getApi

▸ **getApi**(): [`default`](planner_core_src_roomle_planner.default.md)

### Returns

[`default`](planner_core_src_roomle_planner.default.md)

### Overrides

[default](configurator_core_src_configurator._internal_.default.md).[getApi](configurator_core_src_configurator._internal_.default.md#getapi)

___

## getRapiAccess

▸ **getRapiAccess**(): [`default`](configurator_core_src_configurator._internal_.default-1.md)

returns the instance of the rapi access so that
the user of the SDK can fetch data from the Roomle backend

**`Params`**

none

### Returns

[`default`](configurator_core_src_configurator._internal_.default-1.md)

RapiAccess

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[getRapiAccess](configurator_core_src_configurator._internal_.default.md#getrapiaccess)

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[pause](configurator_core_src_configurator._internal_.default.md#pause)

___

## resume

▸ **resume**(`element?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element?` | `HTMLElement` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[resume](configurator_core_src_configurator._internal_.default.md#resume)

___

## teardown

▸ **teardown**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[teardown](configurator_core_src_configurator._internal_.default.md#teardown)
