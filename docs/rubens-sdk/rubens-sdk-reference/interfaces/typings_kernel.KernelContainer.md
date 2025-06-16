[typings/kernel](../modules/typings_kernel.md).KernelContainer

# Table of contents

## Properties

- [BindingError](typings_kernel.KernelContainer.md#bindingerror)
- [InternalError](typings_kernel.KernelContainer.md#internalerror)
- [UnboundTypeError](typings_kernel.KernelContainer.md#unboundtypeerror)
- [abort](typings_kernel.KernelContainer.md#abort)
- [calledRun](typings_kernel.KernelContainer.md#calledrun)
- [noExitRuntime](typings_kernel.KernelContainer.md#noexitruntime)
- [print](typings_kernel.KernelContainer.md#print)
- [printErr](typings_kernel.KernelContainer.md#printerr)
- [quit](typings_kernel.KernelContainer.md#quit)
- [reallocBuffer](typings_kernel.KernelContainer.md#reallocbuffer)
- [registerConfiguratorCallback](typings_kernel.KernelContainer.md#registerconfiguratorcallback)
- [run](typings_kernel.KernelContainer.md#run)
- [setExternalHelpers](typings_kernel.KernelContainer.md#setexternalhelpers)
- [thisProgram](typings_kernel.KernelContainer.md#thisprogram)
- [unregisterConfiguratorCallback](typings_kernel.KernelContainer.md#unregisterconfiguratorcallback)
- [usingWasm](typings_kernel.KernelContainer.md#usingwasm)
- [wasmBinaryFile](typings_kernel.KernelContainer.md#wasmbinaryfile)
- [wasmMaxTableSize](typings_kernel.KernelContainer.md#wasmmaxtablesize)
- [wasmTableSize](typings_kernel.KernelContainer.md#wasmtablesize)

# Properties

## BindingError

• **BindingError**: typeof [`BindingError`](../classes/typings_kernel._internal_.BindingError.md)

___

## InternalError

• **InternalError**: typeof [`InternalError`](../classes/typings_kernel._internal_.InternalError.md)

___

## UnboundTypeError

• **UnboundTypeError**: typeof [`UnboundTypeError`](../classes/typings_kernel._internal_.UnboundTypeError.md)

___

## abort

• **abort**: (`msg`: `string`) => `void`

### Type declaration

▸ (`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

___

## calledRun

• **calledRun**: `boolean`

___

## noExitRuntime

• **noExitRuntime**: `boolean`

___

## print

• **print**: (`msg`: `string`) => `void`

### Type declaration

▸ (`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

___

## printErr

• **printErr**: (`msg`: `string`) => `void`

### Type declaration

▸ (`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

___

## quit

• **quit**: (`msg`: `string`) => `void`

### Type declaration

▸ (`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

___

## reallocBuffer

• **reallocBuffer**: (`size`: `string`) => `void`

### Type declaration

▸ (`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` |

#### Returns

`void`

___

## registerConfiguratorCallback

• **registerConfiguratorCallback**: (`callbacksObject`: `any`) => `void`

### Type declaration

▸ (`callbacksObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbacksObject` | `any` |

#### Returns

`void`

___

## run

• **run**: (`a`: `any`) => `void`

### Type declaration

▸ (`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`void`

___

## setExternalHelpers

• **setExternalHelpers**: (`kernelIo`: `any`, `utils`: `any`) => `void`

### Type declaration

▸ (`kernelIo`, `utils`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kernelIo` | `any` |
| `utils` | `any` |

#### Returns

`void`

___

## thisProgram

• **thisProgram**: `string`

___

## unregisterConfiguratorCallback

• **unregisterConfiguratorCallback**: (`callbacksObject`: `any`) => `void`

### Type declaration

▸ (`callbacksObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbacksObject` | `any` |

#### Returns

`void`

___

## usingWasm

• **usingWasm**: `boolean`

___

## wasmBinaryFile

• **wasmBinaryFile**: `string`

___

## wasmMaxTableSize

• **wasmMaxTableSize**: `number`

___

## wasmTableSize

• **wasmTableSize**: `number`
