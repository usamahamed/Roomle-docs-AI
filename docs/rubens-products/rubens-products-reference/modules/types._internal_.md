[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [types](types.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [CustomTutorialTranslation](../interfaces/types._internal_.CustomTutorialTranslation.md)
- [PartlistPrintPayload](../interfaces/types._internal_.PartlistPrintPayload.md)
- [UiFeatureFlags](../interfaces/types._internal_.UiFeatureFlags.md)

### Type Aliases

- [CallbackPayloads](types._internal_.md#callbackpayloads)
- [CustomTutorialPlatform](types._internal_.md#customtutorialplatform)
- [CustomTutorialScope](types._internal_.md#customtutorialscope)
- [DefaultCallbackPayloads](types._internal_.md#defaultcallbackpayloads)
- [TutorialData](types._internal_.md#tutorialdata)

## Type Aliases

### CallbackPayloads

Ƭ **CallbackPayloads**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `partlist_print` | [`PartlistPrintPayload`](../interfaces/types._internal_.PartlistPrintPayload.md) |

___

### CustomTutorialPlatform

Ƭ **CustomTutorialPlatform**: ``"desktop"`` \| ``"mobile"``

___

### CustomTutorialScope

Ƭ **CustomTutorialScope**: ``"room-designer"`` \| ``"configurator"``

___

### DefaultCallbackPayloads

Ƭ **DefaultCallbackPayloads**\<`T`, `U`\>: \{ [K in U]: K extends keyof T ? T[K] : void }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends `string` |

___

### TutorialData

Ƭ **TutorialData**: \{ `en`: [`CustomTutorialTranslation`](../interfaces/types._internal_.CustomTutorialTranslation.md) ; `platform?`: [`CustomTutorialPlatform`](types._internal_.md#customtutorialplatform) ; `scope?`: [`CustomTutorialScope`](types._internal_.md#customtutorialscope)  } & \{ `[key: string]`: [`CustomTutorialTranslation`](../interfaces/types._internal_.CustomTutorialTranslation.md) \| [`CustomTutorialPlatform`](types._internal_.md#customtutorialplatform) \| [`CustomTutorialScope`](types._internal_.md#customtutorialscope);  }
