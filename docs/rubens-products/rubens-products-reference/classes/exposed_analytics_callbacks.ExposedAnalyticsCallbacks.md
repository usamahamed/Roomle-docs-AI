[Embedding API Reference](../README.md) / [Modules](../modules/README.md) / [exposed-analytics-callbacks](../modules/exposed_analytics_callbacks.md) / ExposedAnalyticsCallbacks

# Class: ExposedAnalyticsCallbacks

[exposed-analytics-callbacks](../modules/exposed_analytics_callbacks.md).ExposedAnalyticsCallbacks

## Table of contents

### Constructors

- [constructor](exposed_analytics_callbacks.ExposedAnalyticsCallbacks.md#constructor)

### Methods

- [onGATracking](exposed_analytics_callbacks.ExposedAnalyticsCallbacks.md#ongatracking)

## Constructors

### constructor

• **new ExposedAnalyticsCallbacks**(): [`ExposedAnalyticsCallbacks`](exposed_analytics_callbacks.ExposedAnalyticsCallbacks.md)

#### Returns

[`ExposedAnalyticsCallbacks`](exposed_analytics_callbacks.ExposedAnalyticsCallbacks.md)

## Methods

### onGATracking

▸ **onGATracking**(`..._args`): `void`

Is called whenever something is sent to google analytics
Possible parameters are everything which is possible in gtag.js
If you need further details about gtag.js: https://developers.google.com/gtagjs
Currently we use Google Analytics in combination with gtag.js so
you can intercept events and send them to your own analytics tool

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

`void`
