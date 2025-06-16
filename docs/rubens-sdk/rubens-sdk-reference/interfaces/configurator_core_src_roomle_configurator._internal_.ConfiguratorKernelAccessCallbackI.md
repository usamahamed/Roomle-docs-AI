[configurator-core/src/roomle-configurator](../modules/configurator_core_src_roomle_configurator.md).[internal](../modules/configurator_core_src_roomle_configurator._internal_.md).ConfiguratorKernelAccessCallbackI

# Hierarchy

- [`KernelAccessCallbackI`](configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md)

  ↳ **`ConfiguratorKernelAccessCallbackI`**

# Implemented by

- [`default`](../classes/configurator_core_src_roomle_configurator.default.md)
- [`default`](../classes/configurator_core_src_roomle_configurator._internal_.default-3.md)

# Table of contents

## Methods

- [isReady](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#isready)
- [loadError](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#loaderror)
- [updateParameters](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updateparameters)
- [updatePossibleChildren](configurator_core_src_roomle_configurator._internal_.ConfiguratorKernelAccessCallbackI.md#updatepossiblechildren)

# Methods

## isReady

▸ **isReady**(): `void`

### Returns

`void`

### Inherited from

[KernelAccessCallbackI](configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[isReady](configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#isready)

___

## loadError

▸ **loadError**(`error?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

### Returns

`void`

### Inherited from

[KernelAccessCallbackI](configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md).[loadError](configurator_core_src_roomle_configurator._internal_.KernelAccessCallbackI.md#loaderror)

___

## updateParameters

▸ **updateParameters**(`parameters`, `parameterGroups`, `elementId`, `parameterUpdateType`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`KernelParameter`](typings_kernel.KernelParameter.md)[] |
| `parameterGroups` | [`KernelParameterGroup`](typings_kernel.KernelParameterGroup.md)[] |
| `elementId` | `number` \| `number`[] |
| `parameterUpdateType` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`void`

___

## updatePossibleChildren

▸ **updatePossibleChildren**(`elementId`, `children`, `parameterUpdateType?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `number` |
| `children` | [`KernelPossibleChild`](typings_kernel.KernelPossibleChild.md)[] |
| `parameterUpdateType?` | [`PARAMETER_UPDATE_TYPE`](../enums/configurator_core_src_roomle_configurator.PARAMETER_UPDATE_TYPE.md) |

### Returns

`void`
