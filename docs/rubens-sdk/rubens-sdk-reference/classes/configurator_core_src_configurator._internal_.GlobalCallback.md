[configurator-core/src/configurator](../modules/configurator_core_src_configurator.md).[internal](../modules/configurator_core_src_configurator._internal_.md).GlobalCallback

# Hierarchy

- [`UiCallback`](configurator_core_src_configurator._internal_.UiCallback.md)

  ↳ **`GlobalCallback`**

# Table of contents

## Constructors

- [constructor](configurator_core_src_configurator._internal_.GlobalCallback.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_configurator._internal_.GlobalCallback.md#_creator_)
- [onValidateNetworkResponse](configurator_core_src_configurator._internal_.GlobalCallback.md#onvalidatenetworkresponse)

## Methods

- [cameraStartsMoving](configurator_core_src_configurator._internal_.GlobalCallback.md#camerastartsmoving)
- [get](configurator_core_src_configurator._internal_.GlobalCallback.md#get)
- [mute](configurator_core_src_configurator._internal_.GlobalCallback.md#mute)
- [onApiJsonReceived](configurator_core_src_configurator._internal_.GlobalCallback.md#onapijsonreceived)
- [onCheckExternalCache](configurator_core_src_configurator._internal_.GlobalCallback.md#oncheckexternalcache)
- [onKernelMsg](configurator_core_src_configurator._internal_.GlobalCallback.md#onkernelmsg)
- [onNetworkRequest](configurator_core_src_configurator._internal_.GlobalCallback.md#onnetworkrequest)
- [onReadyForRender](configurator_core_src_configurator._internal_.GlobalCallback.md#onreadyforrender)
- [unmute](configurator_core_src_configurator._internal_.GlobalCallback.md#unmute)

# Constructors

## constructor

• **new GlobalCallback**(`creator`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[constructor](configurator_core_src_configurator._internal_.UiCallback.md#constructor)

# Properties

## \_creator\_

• **\_creator\_**: `string`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[_creator_](configurator_core_src_configurator._internal_.UiCallback.md#_creator_)

___

## onValidateNetworkResponse

• **onValidateNetworkResponse**: [`ExternalResponseValidator`](../modules/configurator_core_src_configurator._internal_.md#externalresponsevalidator)

# Methods

## cameraStartsMoving

▸ **cameraStartsMoving**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[cameraStartsMoving](configurator_core_src_configurator._internal_.UiCallback.md#camerastartsmoving)

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

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[get](configurator_core_src_configurator._internal_.UiCallback.md#get)

___

## mute

▸ **mute**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[mute](configurator_core_src_configurator._internal_.UiCallback.md#mute)

___

## onApiJsonReceived

▸ **onApiJsonReceived**(`_url`, `_rapiPath`, `_json`): `Promise`<[`RapiJsonBox`](../interfaces/typings_rapi_types.RapiJsonBox.md)\>

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_url` | `string` | URL of the request |
| `_rapiPath` | [`RAPI_PATHS`](../enums/configurator_core_src_configurator._internal_.RAPI_PATHS.md) | the RAPI_PATHS enum |
| `_json` | `any` | the JSON response |

### Returns

`Promise`<[`RapiJsonBox`](../interfaces/typings_rapi_types.RapiJsonBox.md)\>

void

___

## onCheckExternalCache

▸ **onCheckExternalCache**(`_url`, `_requestData`): `Promise`<`any`\>

### Parameters

| Name | Type |
| :------ | :------ |
| `_url` | `string` |
| `_requestData` | `RequestInit` |

### Returns

`Promise`<`any`\>

___

## onKernelMsg

▸ **onKernelMsg**(`_type`, `_message`, `_meta?`): `void`

is called when the Kernel sends us some message

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_type` | [`KernelMessageType`](../modules/configurator_core_src_configurator._internal_.md#kernelmessagetype) | KernelMessageType can either be exception, error or warning |
| `_message` | `string` | string the message from the Kernel |
| `_meta` | [`KernelMessageMetaInfo`](../interfaces/configurator_core_src_configurator._internal_.KernelMessageMetaInfo.md) | KernelMessageMetaInfo optional, adds more information for debugging |

### Returns

`void`

___

## onNetworkRequest

▸ **onNetworkRequest**(`_url`, `_data`, `_options`): `void`

is called when a network request is made

### Parameters

| Name | Type |
| :------ | :------ |
| `_url` | `string` |
| `_data` | `RequestInit` |
| `_options` | [`FetchOptions`](../interfaces/configurator_core_src_configurator._internal_.FetchOptions.md) |

### Returns

`void`

___

## onReadyForRender

▸ **onReadyForRender**(): `void`

is called the scene is ready for rendering it as an image

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[onReadyForRender](configurator_core_src_configurator._internal_.UiCallback.md#onreadyforrender)

___

## unmute

▸ **unmute**(): `void`

### Returns

`void`

### Inherited from

[UiCallback](configurator_core_src_configurator._internal_.UiCallback.md).[unmute](configurator_core_src_configurator._internal_.UiCallback.md#unmute)
