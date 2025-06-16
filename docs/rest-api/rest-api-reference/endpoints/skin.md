#SkinController

## Overview

- [PUT /id](#put-skinid)

## Description

Path /v2/skins/

Handles all requests regarding skin: creating, updating, deleting.

### Skin JSON object

An example for a skin json object.

```
{
        "id":7, 
        "tenant":2, 
        "ciColor":"0xCB0112",
        "btnColorLight":"0x00ae6c",
        "btnColorDark":"0x009d60", 
        "mailHeaderImage":"https://path/to/some/image/header.jpg",
        "mailBackgroundColor":"#a1c0ae", 
        "tenantUrl":"www.someclient.at",
        "mailTemplatePath":"http://some/unknow/path/", 
        "loginBackground":"http://path/to/some/image/image.png",
        "referralUrl":"http://rtest.url.com",
        "hideMadeByRoomle":false,
        "hidePressLink":true,
        "hideShareButton":true,
        "hideFeedbackButton":true, 
            "hideCatalogOverview":false,
            "catalogEntryTags":["tag1","tag2"]" 
}
```

### fields

- id : identifies the skin
- tenant : the tenant of skin
- ciColor : ?
- btnColorLight : button light color
- btnColorDark : button dark color
- mailHeaderImage : mail header image
- mailBackgroundColor : mail background image
- tenantUrl : tenant web url
- mailTemplatePath : path to mail template
- loginBackground : path to login background image
- referralUrl : referral url
- hideMadeByRoomle : hides made by roomle
- hidePressLink : hides press link
- hidesShareButton : hides share button
- hideFeedbackButton : hides feedback button
- hideCatalogOverview : hides catalog overview
- catalogEntryTags : catalog entry tags(categories)

## API Reference

### PUT /skinId

Accepts: multipart-formdata

Generates: json

Update skin from tenant.

- Must be admin

Response:

```
{
    "skin": <updatedSkinJsonObject>
}
```