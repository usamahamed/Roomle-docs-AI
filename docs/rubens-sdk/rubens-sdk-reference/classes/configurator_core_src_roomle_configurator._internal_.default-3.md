[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).default

# Implements

- [`Context`](../interfaces/configurator_core_src_configurator._internal_.Context.md)
- [`ConfiguratorKernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md)

# Table of contents

## Constructors

- [constructor](configurator_core_src_roomle_configurator._internal_.default-3.md#constructor)

## Properties

- [\_creator\_](configurator_core_src_roomle_configurator._internal_.default-3.md#_creator_)

## Methods

- [addListener](configurator_core_src_roomle_configurator._internal_.default-3.md#addlistener)
- [isReady](configurator_core_src_roomle_configurator._internal_.default-3.md#isready)
- [loadError](configurator_core_src_roomle_configurator._internal_.default-3.md#loaderror)
- [removeListener](configurator_core_src_roomle_configurator._internal_.default-3.md#removelistener)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.default-3.md#updateparameters)
- [updatePossibleChildren](configurator_core_src_roomle_configurator._internal_.default-3.md#updatepossiblechildren)

# Constructors

## constructor

• **new default**(`creator`)

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

## addListener

▸ **addListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ConfiguratorKernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md) |

### Returns

`void`

___

## isReady

▸ **isReady**(): `void`

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[isReady](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#isready)

___

## loadError

▸ **loadError**(`error?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[loadError](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#loaderror)

___

## removeListener

▸ **removeListener**(`listener`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ConfiguratorKernelAccessCallbackI`](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md) |

### Returns

`void`

___

## updateParameters

▸ **updateParameters**(`parameters`, `parameterGroups`, `elementId`, `parameterUpdateType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`KernelParameter`](../interfaces/typings_kernel.KernelParameter.md)[] |
| `parameterGroups` | [`KernelParameterGroup`](../interfaces/typings_kernel.KernelParameterGroup.md)[] |
| `elementId` | `number` \| `number`[] |
| `parameterUpdateType` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[updateParameters](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updateparameters)

___

## updatePossibleChildren

▸ **updatePossibleChildren**(`elementId`, `children`, `parameterUpdateType?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `number` |
| `children` | [`KernelPossibleChild`](../interfaces/typings_kernel.KernelPossibleChild.md)[] |
| `parameterUpdateType?` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`void`

### Implementation of

[ConfiguratorKernelAccessCallbackI](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md).[updatePossibleChildren](../interfaces/configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updatepossiblechildren)
