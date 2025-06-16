[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).default

# Hierarchy

- **`default`**

  ↳ [`Configurator`](configurator_core_src_configurator.Configurator.md)

  ↳ [`GlbViewer`](glb_viewer_core_src_glb_viewer.GlbViewer.md)

  ↳ [`Planner`](planner_core_src_planner.Planner.md)

# Implements

- [`LifeCycleCallbacks`](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.default.md#constructor)

## Methods

- [boot](configurator_core_src_configurator._internal_.default.md#boot)
- [destroy](configurator_core_src_configurator._internal_.default.md#destroy)
- [getApi](configurator_core_src_configurator._internal_.default.md#getapi)
- [getRapiAccess](configurator_core_src_configurator._internal_.default.md#getrapiaccess)
- [pause](configurator_core_src_configurator._internal_.default.md#pause)
- [resume](configurator_core_src_configurator._internal_.default.md#resume)
- [teardown](configurator_core_src_configurator._internal_.default.md#teardown)

# Constructors

## constructor

• **new default**(`creator?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator?` | `string` |

# Methods

## boot

▸ **boot**(`settings?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `object` |

### Returns

`void`

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.destroy

___

## getApi

▸ `Abstract` **getApi**(): [`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<`any`\>

### Returns

[`ExternalEmbeddable`](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)<`any`\>

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

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Implementation of

LifeCycleCallbacks.pause

___

## resume

▸ **resume**(`element?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element?` | `HTMLElement` |

### Returns

`void`

### Implementation of

LifeCycleCallbacks.resume

___

## teardown

▸ **teardown**(): `void`

### Returns

`void`
