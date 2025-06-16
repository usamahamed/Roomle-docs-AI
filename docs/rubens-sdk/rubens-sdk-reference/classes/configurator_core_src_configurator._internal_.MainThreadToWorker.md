[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).MainThreadToWorker

# Hierarchy

- [`CommunicationInterface`](configurator_core_src_configurator._internal_.CommunicationInterface.md)

  ↳ **`MainThreadToWorker`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.MainThreadToWorker.md#constructor)

## Methods

- [handleEvent](configurator_core_src_configurator._internal_.MainThreadToWorker.md#handleevent)
- [resolvePromises](configurator_core_src_configurator._internal_.MainThreadToWorker.md#resolvepromises)
- [sendToWorker](configurator_core_src_configurator._internal_.MainThreadToWorker.md#sendtoworker)
- [setEventPoster](configurator_core_src_configurator._internal_.MainThreadToWorker.md#seteventposter)

# Constructors

## constructor

• **new MainThreadToWorker**(`callback`, `eventListener`)

### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`CommunicationInterfaceCallback`](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md) |
| `eventListener` | `Worker` \| `ServiceWorker` \| `ServiceWorkerContainer` |

### Overrides

[CommunicationInterface](configurator_core_src_configurator._internal_.CommunicationInterface.md).[constructor](configurator_core_src_configurator._internal_.CommunicationInterface.md#constructor)

# Methods

## handleEvent

▸ **handleEvent**(`e`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MessageEvent`<`any`\> |

### Returns

`void`

### Inherited from

[CommunicationInterface](configurator_core_src_configurator._internal_.CommunicationInterface.md).[handleEvent](configurator_core_src_configurator._internal_.CommunicationInterface.md#handleevent)

___

## resolvePromises

▸ **resolvePromises**(`conversationId`, `data`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `number` |
| `data` | `any`[] |

### Returns

`void`

___

## sendToWorker

▸ **sendToWorker**(`command`, `data?`, `resolve?`, `reject?`): `void`

### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `command` | [`WORKER_MESSAGE`](../enums/configurator_core_src_configurator._internal_.WORKER_MESSAGE.md) | `undefined` |
| `data` | `any` | `null` |
| `resolve?` | (...`args`: `any`[]) => `void` | `undefined` |
| `reject?` | (...`args`: `any`[]) => `void` | `undefined` |

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

### Inherited from

[CommunicationInterface](configurator_core_src_configurator._internal_.CommunicationInterface.md).[setEventPoster](configurator_core_src_configurator._internal_.CommunicationInterface.md#seteventposter)
