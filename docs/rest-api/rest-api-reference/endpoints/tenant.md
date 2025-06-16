#TenantController

## Overview

- [Description](#description)
    - [Tenant object example](#tenant-json-object)
    - [Fields](#fields)
- [POST /](#post-)
- [GET /:id](#get-id)
- [PUT /:id](#put-id)
- [DELETE /:id](#delete-id)
- [POST /:id/promocode](#post-idpromocode)
- [Links](#links)
    - [Tenant users](#users)
        - [GET /:id/users](#get-idusers)
        - [POST /:id/users](#post-idusers)
        - [PUT /:id/users/userId](#put-idusersuserid)
    - [Payment Connections](#paymentconnections)
        - [GET /:id/paymentConnections](#get-idpaymentconnections)
        - [POST /:id/paymentConnections](#post-idpaymentconnections)
        - [POST /:id/paymentConnectionsSessions](#post-idpaymentconnectionsessions)
    - [Billing Information](#tenant-billinginformation)
        - [GET /:id/billingInformation](#get-idbillinginformation)
        - [POST /:id/billingInformation](#post-idbillinginformation)
        - [PUT /:id/billingInformation](#put-idbillinginformation)
    - [Usages](#usages)
        - [GET /:id/usages](#get-idusages)
    - [AssetProcessings](#assetprocessings)
        - [GET /:id/assetProcessings](#get-idassetprocessings)
    - [Other](#other)
        - [GET /:id/roles](#get-idroles)
        - [GET /:id/catalogs](#get-idcatalogs)
        - [GET /:id/visibleCatalogs](#get-idvisiblecatalogs)
        - [GET /:id/shownCatalogs](#get-idshowncatalogs)
        - [GET /:id/enableTags](#get-idenabledtags)

## Description

Path /v2/tenants

Handles all requests regarding tenants: creating, updating, deleting.

### Tenant JSON object

An example for a tenant json object with id 0L.

```json
{
  "id": 0,
  "name": "myName",
  "label": "myLabel",
  "active": true,
  "showLanguageSwitch": true,
  "authenticationRequired": true,
  "visibility": 10,
  "privacyUrl": "https://www.myDomain.com/privacy.html",
  "webhook": "https://api.myDomain.com/webhookEndpoint",
  "apiKey": "aValidApiKey",
  "packages": [
    {
      "id": "internalId",
      "package": "tenant_free",
      "fromPromocode": false,
      "validFrom": "2000-01-01T00:00:00.000Z",
      "validTill": "2100-01-01T00:00:00.000Z"
    }
  ],
  "links": {
    "plans": "/tenants/0/plans",
    "roles": "/tenants/0/roles/",
    "users": "/tenants/0/users/",
    "catalogs": "/tenants/0/catalogs/",
    "retailerInfos": "/tenants/0/retailerInfos/",
    "visibleCatalogs": "/tenants/0/visibleCatalogs/",
    "shownCatalogs": "/tenants/0/shownCatalogs/",
    "paymentConnections": "/tenants/0/paymentConnections/",
    "billingInformation": "/tenants/0/billingInformation/",
    "usages": "/tenants/0/usages/"
  },
  "allowRegistration": true,
  "branded": true,
  "catalogConnections": [ 
    {
      "id":"aCatalogId",
      "active":true,
      "owner":true,
      "public":false,
      "visibilityLevel":5
    }
  ],
  "modules": [
    "basic_usage",
    "catalog_management"
  ]
}
```

### Fields

- name : tenant name (must be unique within roomle)
- label : tenant label (used in the UI and email)
- active : active/inactive tenant
- showLanguageSwitch : show language switch
- defaultLanguage : tenant default language
- authenticationRequired :  toggles authentication
- visibility :  visibility level
- privacyUrl : link to privacy disclaimer page
- webhook : url to endpoint, to which events will be posted - only visible to users with tenant management rights
- apiKey : apiKey for authentication with the Roomle API - only visible to users with tenant management rights
- packages : list of active packages for this tenant. can
  contain `tenant_free`, `tenant_basic`, `tenant_premium`, `tenant_enterprise`
- configurators : tenant configurators
- links : contains a sequence of links, where to collect additional data connected with the tenant
- allowRegistration: registration allowed or not
- branded :  branded or not
- users : users connected with this tenant
- skin : tenant skin
- catalogs : list of catalogs owned by this tenant
- visibleCatalogs : list of visible catalogs for this tenant
- shownCatalogs : list of shown catalogs for this tenant
- configuration - tenant configuration
- modules : modules tenant can access
- catalogConnections: list of connection objects for the existing connections to catalogs. this includes owned catalogs and catalogs of other tenants that this tenant has explicit rights to or wants to show them. Can be updated with the Update call to add visibility to new catalogs.

## API Reference

### POST /

Accepts: application/json

Generates: json

Creates a new tenant.

- Must be super admin.
- The new tenant must be given a unique name.

Response:

```json
{
    "tenant":<createdTenantJsonObject>
}
```

### GET /:id/

Generates: json

Returns the tenant json with requested id.

Response:

```json
{
    "tenant":<requestedTenantJsonObject>
}
```

### PUT /:id/

Accepts: application/json

Generates: json

Updates the tenant with the given id

- can only be called for the current tenant
- calling user must have tenant management rights

Response:

```json
{
    "tenant":<updatedTenantJsonObject>
}
```

### DELETE /:id/

Deleting a tenant is currently not possible.

### POST /:id/promocode/

Accepts: application/json

Generates: application/json

uses the given promocode on the tenant

- calling user must have tenant_payment rights
- promocode needs to be active, available and tenant must not have used it already

Body: PromocodeContainer:

```json
{
    "promocode":{
      "code":"<promoCodeToUse>"
    }
}
```

Response:

- generated purchase if any

### Links

The links section contains links to endpoints where to collect additional data connected with the tenant.
This data is collected by the front end when needed and usually asynchronously.

#### Users

For more information about the User object used in this section, please see [here](User.md/#user-json-object)

##### GET /:id/users/

Generates: application/json

Returns the users who are connected to the tenant.

- can only be called for the current tenant
- calling user must have user management rights
- rolesInTenant field in the user states the assigned roles in this tenant

The User objects returned in this endpoint are limited to basic user data.
If user has not provided consent on the tenant, the data is further limited to:

- id
- email
- rolesInTenant

Response:

```json
{
    "users":<ListOfUserObjects>
}
```

##### POST /:id/users/

Accepts: application/json

Generates: application/json

creates/adds connections between the given user and the tenant.

- calling user must have user management rights
- if user (email) doesn't exist, he will be invited per email to join roomle
- can only be called for the current tenant

This endpoint accepts also batch upload of users - deprecated

Body: UserContainer with the user-object. only email and roles are used from the object

Response:

```json
{
  "user":<userObject with roles>
}
```

##### PUT /:id/users/:userId/

Accepts: application/json

Generates: application/json

Updates connections between the given user and the tenant.

- calling user must have user management rights
- can only be called for the current tenant

Body: UserContainer with the user-object. only email and roles are used from the object

Response:

```json
{
  "user":<updatedUserObject with roles>
}
```

#### PaymentConnections

##### GET /:id/paymentConnections/

Accepts: application/json

Generates: application/json

collects all the paymentConnection Objects for the tenant and serializes them

- calling user must have tenant_payment rights

Body: PaymentConnectionContainer:

```json
{
  "id": "someUniqueId",
  "user": "someUser",
  "tenant": 0,
  "storeId": "stripe",
  "data": {
    "payment_method_id": "pm_1H8NvA2eZvKYlo2CylNGFDCL",
    "customerId": "cus_HhnVsIbbtTgRwo"
  }
}
```

##### POST /:id/paymentConnections/

Accepts: application/json

Generates: application/json

the call accepts a serialized PaymentConnection object, addind/updating the payment connection of the tenant

- calling user must have tenant_management rights
- only the current tenant can be updated

Response:

```json
    {
      "id": "se_vf2v6sdv26s",
      "created": 1358448484
    }
```

##### POST /:id/paymentConnectionSessions/

Accepts: application/json

Generates: application/json

the call checks for a valid paymentConnection for the tenant in the given store and creates a billingPortalSession in
the StripeAPI
it then returns the sessionId with a created timestamp, serialized in a json

- calling user must have tenant_management rights

Body: JsonObject:

```json
    {
      "id": "se_vf2v6sdv26s",
      "created": 1358448484
    }
```

#### Tenant BillingInformation

##### GET /:id/billingInformation/

Accepts: application/json

Generates: application/json

collects billingInformation data for the tenant from the Customer Object retrieved from StripeAPI and serializes them

- allowed for current tenant

Body: BillingInformationContainer:

```json
{
  "billingInformation": {
    "storeId": "stripe",
    "customerId": "cus_IQ8kfKXklJb0lm",
    "email": "noreply@netural.com",
    "name": "customerNameNew",
    "address1": "a new address",
    "address2": null,
    "zip": "999",
    "city": "someWhereElse",
    "country": "at",
    "uid": "ATU87654321",
    "reverseCharge": false,
    "uidVerified": true
  }
}
```

##### POST /:id/billingInformation/

Accepts: application/json

Generates: application/json

checks billingInformation data for the tenant ad creates a Customer Object inside the StripeAPI.
The returned Stripe Customer object in converted, serialized and returned

- calling user must have tenant_management rights

Body: BillingInformationContainer:

```json
{
  "billingInformation": {
    "storeId": "stripe",
    "name": "customerNameNew",
    "address1": "a new address",
    "zip": "999",
    "city": "someWhereElse",
    "country": "at",
    "uid": "ATU87654321",
    "reverseCharge": false
  }
}
```

##### PUT /:id/billingInformation/

Accepts: application/json

Generates: application/json

checks billingInformation data for the tenant ad creates a Customer Object inside the StripeAPI.
The returned Stripe Customer object in converted, serialized and returned

- calling user must have tenant_management rights

Body: BillingInformationContainer:

```json
{
  "billingInformation": {
    "storeId": "stripe",
    "name": "customerNameNew",
    "address1": "a new address",
    "zip": "999",
    "city": "someWhereElse",
    "country": "at",
    "uid": "ATU87654321",
    "reverseCharge": false
  }
}
```

#### Usages

##### GET /:id/usages/

Accepts: application/json

Generates: application/json

collects all the paymentConnection Objects for the tenant and serializes them

- calling user must have tenant_payment rights

Body: TenantUsagesContainer:

```json
    {
      "id": "123:uploadProduct",
      "type": "uploadProduct",
      "used": 123,
      "limit": 250
    }
```

#### AssetProcessings

##### GET /:id/assetProcessings/

Accepts: application/json
Generates: application/json

path-param:

- id (Long): the tenantId
  query-param:
- from (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.
- to (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.

fields:

- id - unique identifier of the processing
- created - date of creation
- updated - date of last update
- type - identifier of the processing type
- targetId - combined id of the originating item/configuration
- status - current status of the processing
- tenantId
- userEmail - email of the user that triggered the processing
- thumbnail - url to perspective image
- resultUrl - link to result data in storage
- label - label of the item/configuration
- catalogLabel - label of the catalog

collects all the internally triggered assetProcessings for the tenant in the given time span - default is last 30 days

- calling user must have tenant_statistics rights

Body: AssetProcessingContainer:

```json
    {
  "assetProcessings":
  [
    {
      "id": "id",
      "sourceSettings":
      {
        ...
      },
      "resultMetaData":
      {
        ...
      },
      "type": 5,
      "status": 100,
      "tenantId": 3,
      "targetId": "<id of the object for which the processing was started>",
      "updated": "2022-05-02T22:23:30.000Z",
      "created": "1970-01-01T00:54:54.000Z",
      "userEmail": "<email of the user that triggered the processing>",
      "thumbnail": "<url to the thumbnail for the target object>",
      "resultUrl": "link to result data in storage",
      "label": "label of the target",
      "catalogLabel": "label of the catalog"
    },
    ...
  ]
}
```

#### Other

The following endpoint provide lists of objects connected to the tenant

##### GET /:id/roles/

Generates: application/json

Return a User2TenantContainer object containing the user/tenant connections of this tenant.

User must have User management rights.

##### GET /:id/catalogs/

Generates: application/json

Returns a CatalogContainer object with catalogs owned by the tenant.

User must have Catalog management rights.
Only visible for the current tenant.

##### GET /:id/visibleCatalogs/

Generates: application/json

Returns a CatalogContainer object with catalogs visible by the tenant

User must have Catalog management rights.
Only visible for the current tenant.

##### GET /:id/shownCatalogs/

Generates: application/json

Returns a CatalogContainer object with catalogs shown in the tenant

User must have Catalog management rights.
Only visible for the current tenant.

##### GET /:id/enabledTags/

Generates: application/json

Returns a TagContainer object containing the enabled Tags in this tenant

Tags are only visible for the current tenant.
