[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).CommunicationInterface

# Hierarchy

- **`CommunicationInterface`**

  ↳ [`MainThreadToWorker`](configurator_core_src_configurator._internal_.MainThreadToWorker.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.CommunicationInterface.md#constructor)

## Methods

- [handleEvent](configurator_core_src_configurator._internal_.CommunicationInterface.md#handleevent)
- [setEventPoster](configurator_core_src_configurator._internal_.CommunicationInterface.md#seteventposter)

# Constructors

## constructor

• **new CommunicationInterface**(`_callbacks`, `eventListener`)

### Parameters

| Name | Type |
| :------ | :------ |
| `_callbacks` | [`CommunicationInterfaceCallback`](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md) |
| `eventListener` | `any` |

# Methods

## handleEvent

▸ **handleEvent**(`e`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MessageEvent`<`any`\> |

### Returns

`void`

___

## setEventPoster

▸ **setEventPoster**(`eventPoster`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `eventPoster` | `any` |

### Returns

`void`
