#TenantController

## Overview

- [GET /tenants/id/useractions](#get-tenantsiduseractions)
- [GET /tenants/id/useractionsAggregated](#get-tenantsiduseractionsaggregated)
- [GET /tenants/id/configurations](#get-tenantsidconfigurations)

## Description

Path /v2/statistics

Provides statistic information about different parts in roomle

To retrieve tenant statistics (subpath `tenants/:id/`) the user needs TENANT_STATISTICS rights within this tenant.

## API Reference

### GET tenants/:id/useractions/

Generates: application/json , text/csv

returns the monthly-aggregated useractions within this tenant. possible filters:

- module
- action (only allowed with module filter is also present)

sample results:

```json
{
    "userActions":[
    {
    "date":"2014-12-31T23:00:00.000Z",
    "module":4,
    "action":1,
    "tenant":2,
    "count":2,
    "aggregationLevel":2}
    ,...
    ]
}
```

```csv
"module","action","tenant","count","month","year",
4,1,2,2,1,2015
4,1,2,1,4,2015
4,1,2,46,5,2015

```

please note that the date is the date of the first userAction that appeared within the aggregation period (in this case
months)

### GET tenants/:id/userActionsAggregated

Generates: application/json

Returns the aggregated UserActions in the list for the specified tenant, module and actions in the time frame (from-to)
If the time frame is incomplete/absent, the current month is returned
If aggregations[] are posted, the results are additionaly aggregated by the posted parameters as well

path-param:

- id (Long): the tenantId
  query-param:
- module (Integer): id of the requested Module
- actions[] (List of Integer): List of integers of the Actions
- from (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.
- to (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.
- aggregations[] (List of String) : List of parameters by which the UserActions are additionaly aggregated - More info

#### aggregations[]

The list can contain only specific strings, which equal columns in the DB. These are:

- country
- device
- actionLabel - it is used by the configurator for storing the configuratorId
- actionId - it is used by the configurator to store the item/configuration ID
  Any other strings will be rejected with a 400 error

sample results:

```json
{
  "userActions": [
    {
      "module": 4,
      "action": 1,
      "tenant": 2,
      "count": 49,
      "aggregationLevel": 0
    },
    {
      "module": 4,
      "action": 3,
      "tenant": 2,
      "count": 2,
      "aggregationLevel": 0
    }
  ],
  "meta": {
    "total": 2,
    "serverTime": "2021-04-15T08:55:20.421Z"
  }
}
```

### GET tenants/:id/configurations

Generates: application/json , text/csv

path-param:

- id (Long): the tenantId
  query-param:
- from (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.
- to (String): has to be a date string with timezone. This string has to match following
  example `2016-06-01T07:54:07.000Z`.
- configuratorId (String) : Configurator id of the requested statistics
- actions[] (List of Integer): List of integers of the Actions - only supported actions will be returned

If configuratorId is provided, the data is filtered to this configurator. Otherwise all tenant data is returned.
Note: If the timeframe is missing or incomplete (from and/or to are missing) the call will return the statistic for the
last 30 days

fields:

- link - link to the configuration
- thumbnail - thumbnail to the configuration perspective image
- created - date of creation - in aggregated entries it is the time of start of aggregation period
- action - string identifier of the action
- actionParameter - additional data regarding the action
- count
- aggregationLevel - string representation of aggregation level
    - possible values:
        - real time - un-aggregated
        - daily - aggregated by day
        - montlhy - aggregated by month
          Additional columns - depending on the requested action:
        - userEmail - email of user who saved the configuration - users without consent are not returned as well as
          users of aggregated entries
        - partList - a serialized json containing the part list of the configuration

sample results:

```json
{
    "tenantConfigurationStatistics":[
    {
      "link":"https://www.roomle.com/t/cp/?id=conf:igu:ration12345",
      "thumbnail":"https://url.to.perspective/image.jpg",
      "created":"2021-07-21T00:00:00.000Z",
      "action":"Save",
      "actionParameter":"",
      "count":15,
      "aggregationLevel":"daily",
      "userEmail":"email.with@consent.com",
      "partList":
        {
          "articleNr":"article1",
          "count":1,
          "label":"Frame without door",
          "component_id":"frameComponent",
          ...
        },
      "planCombinedIds" : 
        [
          "conf:igu:ration12345",
          "conf:igu:ration58471",
          "catalogId:itemId"
        ]
    }
    , ...
    ]
}
```

```csv
"link","thumbnail","created","action","actionParameter","count","aggregationLevel","userEmail","partList","planCombinedIds"
"https://www.roomle.com/t/cp/?id=conf:igu:rationB1AER98B1AE98RB1E98RB1","https://url.to.perspective/image1.jpg","2021-09-21T12:17:59.968Z","Save_Draft","",1,"real time","email.with@consent.com","{""originPart"":{""articleNr"":""article1"",""count"":1,""label"":""Frame without door"",""component_id"":""frameComponent"",...}",""
"https://www.roomle.com/t/cp/?id=conf:igu:rationF1V9AE8RB1AE98RB1ER98B","https://url.to.perspective/image2.jpg","2021-07-21T00:00:00.000Z","Save_Draft","",5,"daily","","{""originPart"":{""articleNr"":""article2"",""count"":1,""label"":""Frame with door"","component_id"":""frameWithDoorComponent"",...}",""
"https://www.roomle.com/t/cp/?id=catalog:item:NI1816321831681POOLKM484","https://url.to.perspective/image3.jpg","2021-02-01T00:00:00.000Z","Save_Draft","",27,"monthly","","{""originPart"":{""articleNr"":""article3"",""count"":1,""label"":""Door"",""component_id"":""doorComponent"",...}",""
"https://www.roomle.com/t/cp/?id=catalog:item","https://url.to.perspective/image1.jpg","2021-09-21T12:17:59.968Z","View","",1,"real time","","",""
"https://www.roomle.com/t/cp/?id=ps_uniquePlanId","https://url.to.perspective/image1.jpg","2021-09-21T12:17:59.968Z","Save_Plan","",1,"real time","email.with@consent.com","","conf:igu:rationF1V9AE8RB1AE98RB1ER98B,catalog:item,catalog:item2,catalog:item:NI1816321831681POOLKM484"

```

please note that the date is the date of the first userAction that appeared within the aggregation period

