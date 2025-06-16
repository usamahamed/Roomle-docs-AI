[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-api](../modules/exposed_api.md) / [\<internal\>](../modules/exposed_api._internal_.md) / IncomingMessageBus

# Interface: IncomingMessageBus

[exposed-api](../modules/exposed_api.md).[\<internal\>](../modules/exposed_api._internal_.md).IncomingMessageBus

## Table of contents

### Methods

- [addEventListener](exposed_api._internal_.IncomingMessageBus.md#addeventlistener)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"message"`` |
| `listener` | (`this`: `Window`, `ev`: `MessageEvent`\<`any`\>) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`
