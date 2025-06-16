[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-21.md#constructor)

## Methods

- [areAllComponentsInFrustum](configurator_core_src_roomle_configurator._internal_.default-21.md#areallcomponentsinfrustum)
- [areAllPreviewsVisible](configurator_core_src_roomle_configurator._internal_.default-21.md#areallpreviewsvisible)
- [changeMaterialsOnSelect](configurator_core_src_roomle_configurator._internal_.default-21.md#changematerialsonselect)
- [checkComponentAndPreviewVisibility](configurator_core_src_roomle_configurator._internal_.default-21.md#checkcomponentandpreviewvisibility)
- [checkComponentVisibility](configurator_core_src_roomle_configurator._internal_.default-21.md#checkcomponentvisibility)
- [checkPreviewVisibility](configurator_core_src_roomle_configurator._internal_.default-21.md#checkpreviewvisibility)
- [init](configurator_core_src_roomle_configurator._internal_.default-21.md#init)
- [isComponentVisible](configurator_core_src_roomle_configurator._internal_.default-21.md#iscomponentvisible)
- [setCamera](configurator_core_src_roomle_configurator._internal_.default-21.md#setcamera)
- [setObject](configurator_core_src_roomle_configurator._internal_.default-21.md#setobject)

# Constructors

## constructor

• **new default**()

# Methods

## areAllComponentsInFrustum

▸ **areAllComponentsInFrustum**(`previews`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `previews` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md)[] |

### Returns

`boolean`

___

## areAllPreviewsVisible

▸ **areAllPreviewsVisible**(`configuratorViewModel`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `configuratorViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-20.md) |

### Returns

`boolean`

___

## changeMaterialsOnSelect

▸ **changeMaterialsOnSelect**(`object`, `component`, `selected?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> | `undefined` |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) | `undefined` |
| `selected` | `boolean` | `false` |

### Returns

`void`

___

## checkComponentAndPreviewVisibility

▸ **checkComponentAndPreviewVisibility**(`sceneEventHandler`, `configuratorViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneEventHandler` | [`default`](configurator_core_src_roomle_configurator._internal_.default-24.md) |
| `configuratorViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-20.md) |

### Returns

`void`

___

## checkComponentVisibility

▸ **checkComponentVisibility**(`sceneEventHandler`, `configuratorViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `sceneEventHandler` | [`default`](configurator_core_src_roomle_configurator._internal_.default-24.md) |
| `configuratorViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-20.md) |

### Returns

`void`

___

## checkPreviewVisibility

▸ **checkPreviewVisibility**(`configuratorViewModel`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `configuratorViewModel` | [`default`](configurator_core_src_roomle_configurator._internal_.default-20.md) |

### Returns

`void`

___

## init

▸ **init**(`object`, `camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |
| `camera` | `PerspectiveCamera` |

### Returns

`void`

___

## isComponentVisible

▸ **isComponentVisible**(`component`): `boolean`

### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`RoomleComponent`](../interfaces/configurator_core_src_roomle_configurator._internal_.RoomleComponent.md) |

### Returns

`boolean`

___

## setCamera

▸ **setCamera**(`camera`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |

### Returns

`void`

___

## setObject

▸ **setObject**(`object`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> |

### Returns

`void`
