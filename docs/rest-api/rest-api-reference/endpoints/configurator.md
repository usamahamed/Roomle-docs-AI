# ConfiguratorController

## Description

Path /v2/configurators

Handles all requests regarding a configurator.
Creating, deleting and requesting all configurator is not allowed.

Requirement: A valid token/apiKey is required to get a specific configurator.

### Configuration JSON Object

An example for a configurator JSON object.

```
{"configurator":
    {
        "id":"configurator1",
        "allowedHosts":"myHost",
        "tenant":2,
        "url":"someUrl",
        "SDK_access":0,
        "settings": {
            "settings1": "value1",
            "settings2": "value2",
            "settings3": "value3",
            "settings4": "value4"
        }
    }
}
```

### fields

- id
- allowedHosts
- tenant
- settings
- url
- SDK_access

## API Reference

### GET /:id/

Returns the configurator with the specified id

Accepts: json

Generates: json

path-parameters:

- id : configurator id

### PUT /:id/

Updates and returns the updated configurator with the specified id

Accepts: json

Generates: json

path-parameters:

- id : configurator id

Updated fields:

- allowedHosts
- settings
- url

### POST /

creates a configurator for this tenant. The configurator-id is the name of the tenant. Only users with TenantManagement
rights in this tenant are allowed to call it.

Accepts: json

Generates: json

### Settings json - possible key:value pairs

- deeplink : deep.link.to/configurator/of/tenant

this deeplink contains a placeholder #CONFIGURATIONID#, to be replaced with the configuration ID. It is used so that the
configuration can be opened withing the store/page, where the configurator is embeded.




