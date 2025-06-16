# Table of contents

## Enumerations

- [ASSET\_KEYS](../enums/configurator_core_src_configurator._internal_.ASSET_KEYS.md)
- [ERROR\_CODES](../enums/configurator_core_src_configurator._internal_.ERROR_CODES.md)
- [PROMISE\_CATEGORY](../enums/configurator_core_src_configurator._internal_.PROMISE_CATEGORY.md)
- [RAPI\_PATHS](../enums/configurator_core_src_configurator._internal_.RAPI_PATHS.md)
- [SHORT\_TYPES](../enums/configurator_core_src_configurator._internal_.SHORT_TYPES.md)
- [WORKER\_MESSAGE](../enums/configurator_core_src_configurator._internal_.WORKER_MESSAGE.md)

## Enumeration Members

- [UNKNOWN](configurator_core_src_configurator._internal_.md#unknown)

## Classes

- [CommunicationInterface](../classes/configurator_core_src_configurator._internal_.CommunicationInterface.md)
- [GlobalCallback](../classes/configurator_core_src_configurator._internal_.GlobalCallback.md)
- [MainThreadToWorker](../classes/configurator_core_src_configurator._internal_.MainThreadToWorker.md)
- [RoomleError](../classes/configurator_core_src_configurator._internal_.RoomleError.md)
- [UiCallback](../classes/configurator_core_src_configurator._internal_.UiCallback.md)
- [default](../classes/configurator_core_src_configurator._internal_.default.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-1.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-2.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-3.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-4.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-5.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-6.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-7.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-8.md)
- [default](../classes/configurator_core_src_configurator._internal_.default-9.md)

## Interfaces

- [AppState](../interfaces/configurator_core_src_configurator._internal_.AppState.md)
- [CommunicationInterfaceCallback](../interfaces/configurator_core_src_configurator._internal_.CommunicationInterfaceCallback.md)
- [Context](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [CustomShadingParameters](../interfaces/configurator_core_src_configurator._internal_.CustomShadingParameters.md)
- [ExternalEmbeddable](../interfaces/configurator_core_src_configurator._internal_.ExternalEmbeddable.md)
- [FetchOptions](../interfaces/configurator_core_src_configurator._internal_.FetchOptions.md)
- [KernelMessageMetaInfo](../interfaces/configurator_core_src_configurator._internal_.KernelMessageMetaInfo.md)
- [LifeCycleCallbacks](../interfaces/configurator_core_src_configurator._internal_.LifeCycleCallbacks.md)
- [ListenersMap](../interfaces/configurator_core_src_configurator._internal_.ListenersMap.md)
- [NetworkRequestValidations](../interfaces/configurator_core_src_configurator._internal_.NetworkRequestValidations.md)
- [QueuedElement](../interfaces/configurator_core_src_configurator._internal_.QueuedElement.md)
- [RapiError](../interfaces/configurator_core_src_configurator._internal_.RapiError.md)
- [RapiRelationDefinition](../interfaces/configurator_core_src_configurator._internal_.RapiRelationDefinition.md)
- [SaveOptions](../interfaces/configurator_core_src_configurator._internal_.SaveOptions.md)

## Type Aliases

- [DefaultEnvironmentSceneType](configurator_core_src_configurator._internal_.md#defaultenvironmentscenetype)
- [Enumify](configurator_core_src_configurator._internal_.md#enumify)
- [ErrorListener](configurator_core_src_configurator._internal_.md#errorlistener)
- [ExternalResponseValidator](configurator_core_src_configurator._internal_.md#externalresponsevalidator)
- [ImageKeysOnObject](configurator_core_src_configurator._internal_.md#imagekeysonobject)
- [KernelMessageType](configurator_core_src_configurator._internal_.md#kernelmessagetype)
- [NetworkResponseValidator](configurator_core_src_configurator._internal_.md#networkresponsevalidator)
- [SceneShadingType](configurator_core_src_configurator._internal_.md#sceneshadingtype)
- [ValuesFromObject](configurator_core_src_configurator._internal_.md#valuesfromobject)

## Variables

- [DEFAULT\_ENVIRONMENT\_SCENE\_TYPES](configurator_core_src_configurator._internal_.md#default_environment_scene_types)
- [KERNEL\_MESSAGE\_TYPE](configurator_core_src_configurator._internal_.md#kernel_message_type)
- [SCENE\_SHADING\_TYPES](configurator_core_src_configurator._internal_.md#scene_shading_types)

# Enumeration Members

## UNKNOWN

• **UNKNOWN**: ``0``

# Type Aliases

## DefaultEnvironmentSceneType

Ƭ **DefaultEnvironmentSceneType**: [`Enumify`](configurator_core_src_configurator._internal_.md#enumify)<typeof [`DEFAULT_ENVIRONMENT_SCENE_TYPES`](configurator_core_src_configurator._internal_.md#default_environment_scene_types)\> \| ``null``

___

## Enumify

Ƭ **Enumify**<`T`\>: `T`[keyof `T`]

### Type parameters

| Name |
| :------ |
| `T` |

___

## ErrorListener

Ƭ **ErrorListener**: (...`args`: `any`[]) => `void`

### Type declaration

▸ (`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

## ExternalResponseValidator

Ƭ **ExternalResponseValidator**: (`type`: ``"rapi-access"``, `response`: `Response`) => `Promise`<`boolean`\>

### Type declaration

▸ (`type`, `response`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rapi-access"`` |
| `response` | `Response` |

#### Returns

`Promise`<`boolean`\>

___

## ImageKeysOnObject

Ƭ **ImageKeysOnObject**: ``"perspectiveImage"`` \| ``"topImage"``

___

## KernelMessageType

Ƭ **KernelMessageType**: [`ValuesFromObject`](configurator_core_src_configurator._internal_.md#valuesfromobject)<typeof [`KERNEL_MESSAGE_TYPE`](configurator_core_src_configurator._internal_.md#kernel_message_type)\>

___

## NetworkResponseValidator

Ƭ **NetworkResponseValidator**: (`response`: `Response`) => `Promise`<`boolean`\>

### Type declaration

▸ (`response`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`<`boolean`\>

___

## SceneShadingType

Ƭ **SceneShadingType**: [`Enumify`](configurator_core_src_configurator._internal_.md#enumify)<typeof [`SCENE_SHADING_TYPES`](configurator_core_src_configurator._internal_.md#scene_shading_types)\>

___

## ValuesFromObject

Ƭ **ValuesFromObject**<`T`\>: `T`[keyof `T`]

### Type parameters

| Name |
| :------ |
| `T` |

# Variables

## DEFAULT\_ENVIRONMENT\_SCENE\_TYPES

• `Const` **DEFAULT\_ENVIRONMENT\_SCENE\_TYPES**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `ALL_AROUND` | ``"all_around"`` |
| `FRONT` | ``"front"`` |

___

## KERNEL\_MESSAGE\_TYPE

• `Const` **KERNEL\_MESSAGE\_TYPE**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `ERROR` | ``"error"`` |
| `EXCEPTION` | ``"exception"`` |
| `LOG` | ``"log"`` |
| `WARNING` | ``"warning"`` |

___

## SCENE\_SHADING\_TYPES

• `Const` **SCENE\_SHADING\_TYPES**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `BRIGHT` | ``"bright"`` |
| `DEFAULT` | ``"default"`` |
