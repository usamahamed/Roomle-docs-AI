[glb-viewer-core/src/glb-viewer](../modules/glb_viewer_core_src_glb_viewer.md).GlbViewer

# Hierarchy

- [`default`](configurator_core_src_configurator._internal_.default.md)

  ↳ **`GlbViewer`**

# Table of contents

## Constructors

- [constructor](glb_viewer_core_src_glb_viewer.GlbViewer.md#constructor)

## Methods

- [boot](glb_viewer_core_src_glb_viewer.GlbViewer.md#boot)
- [destroy](glb_viewer_core_src_glb_viewer.GlbViewer.md#destroy)
- [getApi](glb_viewer_core_src_glb_viewer.GlbViewer.md#getapi)
- [getRapiAccess](glb_viewer_core_src_glb_viewer.GlbViewer.md#getrapiaccess)
- [pause](glb_viewer_core_src_glb_viewer.GlbViewer.md#pause)
- [resume](glb_viewer_core_src_glb_viewer.GlbViewer.md#resume)
- [teardown](glb_viewer_core_src_glb_viewer.GlbViewer.md#teardown)

# Constructors

## constructor

• **new GlbViewer**(`creator?`)

### Parameters

| Name | Type |
| :------ | :------ |
| `creator?` | `string` |

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[constructor](configurator_core_src_configurator._internal_.default.md#constructor)

# Methods

## boot

▸ **boot**(`settings?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `object` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[boot](configurator_core_src_configurator._internal_.default.md#boot)

___

## destroy

▸ **destroy**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[destroy](configurator_core_src_configurator._internal_.default.md#destroy)

___

## getApi

▸ **getApi**(): [`default`](glb_viewer_core_src_roomle_glb_viewer.default.md)

### Returns

[`default`](glb_viewer_core_src_roomle_glb_viewer.default.md)

### Overrides

[default](configurator_core_src_configurator._internal_.default.md).[getApi](configurator_core_src_configurator._internal_.default.md#getapi)

___

## getRapiAccess

▸ **getRapiAccess**(): [`default`](configurator_core_src_configurator._internal_.default-1.md)

returns the instance of the rapi access so that
the user of the SDK can fetch data from the Roomle backend

**`Params`**

none

### Returns

[`default`](configurator_core_src_configurator._internal_.default-1.md)

RapiAccess

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[getRapiAccess](configurator_core_src_configurator._internal_.default.md#getrapiaccess)

___

## pause

▸ **pause**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[pause](configurator_core_src_configurator._internal_.default.md#pause)

___

## resume

▸ **resume**(`element?`): `void`

### Parameters

| Name | Type |
| :------ | :------ |
| `element?` | `HTMLElement` |

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[resume](configurator_core_src_configurator._internal_.default.md#resume)

___

## teardown

▸ **teardown**(): `void`

### Returns

`void`

### Inherited from

[default](configurator_core_src_configurator._internal_.default.md).[teardown](configurator_core_src_configurator._internal_.default.md#teardown)
