[glb-viewer-core/src/roomle-glb-viewer](../modules/glb_viewer_core_src_roomle_glb_viewer.md).[internal](../modules/glb_viewer_core_src_roomle_glb_viewer._internal_.md).default

# Hierarchy

- [`default`](configurator_core_src_roomle_configurator._internal_.default-31.md)

  ↳ **`default`**

# Table of contents

## Constructors

- [constructor](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#constructor)

## Properties

- [\_creator\_](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#_creator_)

## Methods

- [addEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#addeventlistener)
- [addEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#addevents)
- [disableEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#disableevents)
- [dispatchEvent](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#dispatchevent)
- [enableDragIn](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#enabledragin)
- [enableEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#enableevents)
- [handleEvent](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#handleevent)
- [isMouseUp](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#ismouseup)
- [onElementHit](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#onelementhit)
- [removeEventListener](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#removeeventlistener)
- [removeEvents](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#removeevents)
- [setDragEnabled](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#setdragenabled)
- [updateSize](glb_viewer_core_src_roomle_glb_viewer._internal_.default-1.md#updatesize)

# Constructors

## constructor

• **new default**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[constructor](configurator_core_src_roomle_configurator._internal_.default-31.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[_creator_](configurator_core_src_roomle_configurator._internal_.default-31.md#_creator_)

# Methods

## addEventListener

▸ **addEventListener**(`eventName`, `callback`, `scope`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `callback` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md)\> |
| `scope` | `any` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[addEventListener](configurator_core_src_roomle_configurator._internal_.default-31.md#addeventlistener)

___

## addEvents

▸ **addEvents**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[addEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#addevents)

___

## disableEvents

▸ **disableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[disableEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#disableevents)

___

## dispatchEvent

▸ **dispatchEvent**(`eventName`, `arg?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `arg?` | [`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md) |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[dispatchEvent](configurator_core_src_roomle_configurator._internal_.default-31.md#dispatchevent)

___

## enableDragIn

▸ **enableDragIn**(`dragEvent?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `dragEvent?` | `DragEvent` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[enableDragIn](configurator_core_src_roomle_configurator._internal_.default-31.md#enabledragin)

___

## enableEvents

▸ **enableEvents**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[enableEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#enableevents)

___

## handleEvent

▸ **handleEvent**(`evt`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `Event` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[handleEvent](configurator_core_src_roomle_configurator._internal_.default-31.md#handleevent)

___

## isMouseUp

▸ **isMouseUp**(): `boolean`

### Returns

`boolean`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[isMouseUp](configurator_core_src_roomle_configurator._internal_.default-31.md#ismouseup)

___

## onElementHit

▸ **onElementHit**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[onElementHit](configurator_core_src_roomle_configurator._internal_.default-31.md#onelementhit)

___

## removeEventListener

▸ **removeEventListener**(`eventName`, `fun`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `number` |
| `fun` | [`ListenerFunction`](../modules/configurator_core_src_roomle_configurator._internal_.md#listenerfunction)<[`InputEvent`](configurator_core_src_roomle_configurator._internal_.InputEvent.md)\> |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[removeEventListener](configurator_core_src_roomle_configurator._internal_.default-31.md#removeeventlistener)

___

## removeEvents

▸ **removeEvents**(`element`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[removeEvents](configurator_core_src_roomle_configurator._internal_.default-31.md#removeevents)

___

## setDragEnabled

▸ **setDragEnabled**(`enabled`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[setDragEnabled](configurator_core_src_roomle_configurator._internal_.default-31.md#setdragenabled)

___

## updateSize

▸ **updateSize**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_roomle_configurator._internal_.default-31.md).[updateSize](configurator_core_src_roomle_configurator._internal_.default-31.md#updatesize)
