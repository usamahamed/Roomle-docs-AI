[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / MessageHandler

# Class: MessageHandler

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).MessageHandler

## Table of contents

### Constructors

- [constructor](exposed_api._internal_.MessageHandler.md#constructor)

### Methods

- [sendMessage](exposed_api._internal_.MessageHandler.md#sendmessage)
- [setMessageExecution](exposed_api._internal_.MessageHandler.md#setmessageexecution)
- [setOutgoingMessageBus](exposed_api._internal_.MessageHandler.md#setoutgoingmessagebus)

## Constructors

### constructor

• **new MessageHandler**(`side`, `incomingMessageBus`, `outgoingMessageBus`, `messageExecution`): [`MessageHandler`](exposed_api._internal_.MessageHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`CommunicationSide`](../modules/exposed_api._internal_.md#communicationside) |
| `incomingMessageBus` | [`IncomingMessageBus`](../interfaces/exposed_api._internal_.IncomingMessageBus.md) |
| `outgoingMessageBus` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`OutgoingMessageBus`](../interfaces/exposed_api._internal_.OutgoingMessageBus.md)\> |
| `messageExecution` | [`Nullable`](../modules/exposed_api._internal_.md#nullable)\<[`MessageExecution`](../modules/exposed_api._internal_.md#messageexecution)\> |

#### Returns

[`MessageHandler`](exposed_api._internal_.MessageHandler.md)

## Methods

### sendMessage

▸ **sendMessage**(`message`, `args?`): `Promise`\<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `args` | `any`[] | `[]` |

#### Returns

`Promise`\<`any`\>

___

### setMessageExecution

▸ **setMessageExecution**(`fun`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | [`MessageExecution`](../modules/exposed_api._internal_.md#messageexecution) |

#### Returns

`void`

___

### setOutgoingMessageBus

▸ **setOutgoingMessageBus**(`outgoingMessageBus`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outgoingMessageBus` | [`OutgoingMessageBus`](../interfaces/exposed_api._internal_.OutgoingMessageBus.md) |

#### Returns

`void`
