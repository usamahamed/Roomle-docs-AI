# Table of contents

## Modules

- [internal](common_core_src_utils_shims._internal_.md)

## Enumerations

- [WINDOW\_EVENT](../enums/common_core_src_utils_shims.WINDOW_EVENT.md)

## Interfaces

- [CommonInitData](../interfaces/common_core_src_utils_shims.CommonInitData.md)
- [ConfiguratorInitData](../interfaces/common_core_src_utils_shims.ConfiguratorInitData.md)
- [FeatureFlags](../interfaces/common_core_src_utils_shims.FeatureFlags.md)
- [GlobalInitDataDefinition](../interfaces/common_core_src_utils_shims.GlobalInitDataDefinition.md)
- [InitDataDefinition](../interfaces/common_core_src_utils_shims.InitDataDefinition.md)
- [PlannerInitData](../interfaces/common_core_src_utils_shims.PlannerInitData.md)

## Type Aliases

- [ColorsIn3dScene](common_core_src_utils_shims.md#colorsin3dscene)
- [RoomleColors](common_core_src_utils_shims.md#roomlecolors)
- [ThreeJsColorsIn3dScene](common_core_src_utils_shims.md#threejscolorsin3dscene)

## Variables

- [DRAW\_PREVIEW\_MODES](common_core_src_utils_shims.md#draw_preview_modes)

# Type Aliases

## ColorsIn3dScene

Ƭ **ColorsIn3dScene**: `Record`<[`RoomleColors`](common_core_src_utils_shims.md#roomlecolors), [`HexColorString`](typings_rapi_types.md#hexcolorstring) \| [`HexColorNumber`](typings_rapi_types.md#hexcolornumber)\>

___

## RoomleColors

Ƭ **RoomleColors**: keyof typeof [`ROOMLE_COLORS`](common_core_src_utils_shims._internal_.md#roomle_colors)

___

## ThreeJsColorsIn3dScene

Ƭ **ThreeJsColorsIn3dScene**: `Record`<keyof typeof [`ROOMLE_COLORS`](common_core_src_utils_shims._internal_.md#roomle_colors), `Color`\>

# Variables

## DRAW\_PREVIEW\_MODES

• `Const` **DRAW\_PREVIEW\_MODES**: `Object`

### Type declaration

| Name | Type |
| :------ | :------ |
| `DEFAULT` | ``"default"`` |
| `VECTOR` | ``"vector"`` |
