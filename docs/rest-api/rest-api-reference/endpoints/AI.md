# AIController

## Overview

- [POST /](#post-)

## Description

Path `/v2/ai`

### POST /

Generates: json
Consumes: json

input json:

```json
{
  "id": "idOfTheObject",
  "task": "suggestFurniturePlacement"
}
```

this prepares the data for AI and forwards the bundle to the AIConnector for processing. The result json from AI is
forwarded back to the user directly.

currently, only planSnapshotIds are allowed and only `suggestFurniturePlacement` task is implemented.