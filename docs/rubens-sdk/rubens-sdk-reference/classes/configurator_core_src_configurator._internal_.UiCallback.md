[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).UiCallback

# Hierarchy

- **`UiCallback`**

  ↳ [`default`](configurator_core_src_services_configurator_ui_callback.default.md)

  ↳ [`default`](planner_core_src_roomle_planner_ui_callback.default.md)

  ↳ [`GlobalCallback`](configurator_core_src_configurator._internal_.GlobalCallback.md)

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.UiCallback.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.UiCallback.md#_creator_)

## Methods

- [cameraStartsMoving](configurator_core_src_configurator._internal_.UiCallback.md#camerastartsmoving)
- [get](configurator_core_src_configurator._internal_.UiCallback.md#get)
- [mute](configurator_core_src_configurator._internal_.UiCallback.md#mute)
- [onReadyForRender](configurator_core_src_configurator._internal_.UiCallback.md#onreadyforrender)
- [unmute](configurator_core_src_configurator._internal_.UiCallback.md#unmute)

# Constructors

## constructor

• **new UiCallback**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Implementation of

[Context](../interfaces/configurator_core_src_configurator._internal_.Context.md).[_creator_](../interfaces/configurator_core_src_configurator._internal_.Context.md#_creator_)

# Methods

## cameraStartsMoving

▸ **cameraStartsMoving**(): `void`

### Returns

`void`

___

## get

▸ **get**(`target`, `prop`): `string` \| (`target`: [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md), `prop`: keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)) => `string` \| (target: UiCallback, prop: keyof UiCallback) =\> string \| ... \| (() =\> void) \| (() =\> void) \| (() =\> void) \| (() =\> void) \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md) |
| `prop` | keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md) |

### Returns

`string` \| (`target`: [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md), `prop`: keyof [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)) => `string` \| (target: UiCallback, prop: keyof UiCallback) =\> string \| ... \| (() =\> void) \| (() =\> void) \| (() =\> void) \| (() =\> void) \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void` \| () => `void`

___

## mute

▸ **mute**(): `void`

### Returns

`void`

___

## onReadyForRender

▸ **onReadyForRender**(): `void`

is called the scene is ready for rendering it as an image

### Returns

`void`

___

## unmute

▸ **unmute**(): `void`

### Returns

`void`
