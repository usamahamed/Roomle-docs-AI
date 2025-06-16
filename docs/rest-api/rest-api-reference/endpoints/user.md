#UserController

## Overview

- [POST /](#post-)

## Description

Path /v2/users

Handles all requests regarding users: creating, updating, deleting.

### User JSON object

An example for a user json object.

```json
{ 
    "username": "johne", 
    "salutationCode": 1, 
    "firstname": "daniel", 
    "lastname": "george", 
    "isoCountryCode": "at", 
    "email": "john@roomle.com", 
    "street": "Articiaa behind musuem", 
    "zipcode": "4020", 
    "city": "Linz", "countryCode": "A", 
    "birthdate": "2005-03-01T00:00:00.000Z", 
    "phone": "000000000000000",
    "locale": "de", 
    "providedConsentInTenant": true, 
    "registerDate": "2014-09-08T00:00:00.000Z", 
    "active": true, 
    "newsletter": false, 
    "termsChanged": false, 
    "tenants": [21, 9, 13, 22, 26, 30, 31, 10, 29, 33, 18, 23, 36, 27, 35, 37, 38 ],
    "roles": [6982, 7042, 7617, 1004397, 1006171, 1079717, 1097870, 1097893, 1112033, 1119418, 1143931, 1179123, 1182812, 1184163, 1191952, 1217437, 1223139 ], 
    "links": {"tenants": "/users/73232/tenants",
    "connectedTenants": "/users/73232/tenants", 
    "roles": "/users/73232/roles", 
    "catalogs": "/users/73232/catalogs", 
    "rolesInTenant": [99, 40, 20, 10],
    "plans": "/users/73232/plans", 
    "favorites": "/users/73232/favorites"}, 
    "priceLists": ["default", "at"], 
    "allowedModulesInTenant": [10,20,30], 
    "moduleRightsInTenant":[{"tenant":2,"module":0,"viewRights":[9],"modificationRights":[9, 0]}],
    "flags": ["flagId1", "flagId2"], 
    "catalogs": ["roomle_premium", "roomle_cubes_ios", "umdasch", "roomle_cubes_fb"] 
}
```

### fields

- username
- salutationCode
- firstname
- lastname
- isoCountryCode
- email
- street
- zipcode
- city
- birthdate :
- phone
- local
- providedConsentInTenant
- registerDate
- active
- rolesInTenants (users role in tenants)
- moduleRightInTenants (users module rights, encapsulating the view rights and modification rights)
- newsletter
- termsChanged
- tenants
- roles (deprecated)
- catalogs
- plans
- favorites
- priceLists
- allowedModulesInTenant (deprecated)
- flags
- catalogs

## API Reference

### POST /

Accepts: multipart-formdata

Generates: json

Registering user.

Response: 201 Created

```
{"user":
    {
       "user":<createdUserJsonObject>
    }
}
```

### DELETE /{id}

Accepts: multipart-formdata

Generates: json

Deactivate user. (you can only deactivate yourself, not others).

Response: 204 No Content

### GET /removeConsent/

removes consent for the user with the given email at the given tenant. throws no error if there is no user with this
email, tenant or the user didn't provide consent before

query-param:

- email: emailaddress of the user to remove consent
- tenant: id of the tenant to remove the consent

Response: 204 No Content

### POST /{userId}/validateMail/

@PathParam("userId") String userId,
@QueryParam("mailHash") String mailHash,
@QueryParam("consentOn") Long consentForTenant,
@QueryParam("f") String forward,
@QueryParam("fid") String forwardId,
@QueryParam("ft") String forwardType

#### QueryParam "f"

Possible values:
- "c": configuration
- "a": asset

#### QueryParam "fid"

it contains the id of the configuration

#### QueryParam "ft"

it additionally specifies the type of forward.
Possible values:
- default - configuration share
- "ar" - AR share
The configurator id is extracted from the context

### POST /{id}/termsAccepted

@PathParam("userId") String userId,

Response: 202 Accepted

Sets the termsChanged flag in the RoomleUser to false, meaning the user accepted the changed terms