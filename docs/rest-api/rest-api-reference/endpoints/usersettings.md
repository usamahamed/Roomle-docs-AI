# UserSettings

## POST /v2/userSettings

Creates or updates settings for the currently logged in user.

- metric: if metric units should be used
- measurements: if measurements in the plan should be shown
- area: if the areas should be shown in the plan
- furnitureSnap: if furniture should snap to walls
- roomHeight: default room height in mm
- parapetHeight: default parapetHeight in mm
- wallThickness: default wall thickness in mm

Accepts: application/json

Generates: application/json

Body:

```json
{
    "userSetting": {
        "metric": true,
        "measurements": false,
        "area": false,
        "furnitureSnap": false,
        "roomHeight": 2800,
        "parapetHeight": 900,
        "wallThickness": 250
    }
}
```

All fields are optional, shown are the default values.

Response success (200 OK):

```json
{
    "userSetting": {
        "id": "<settingsId>",
        "user": "<userId>",
        "metric": true,
        "measurements": false,
        "area": false,
        "furnitureSnap": false,
        "roomHeight": 2800,
        "parapetHeight": 900,
        "wallThickness": 250
    }
}
```