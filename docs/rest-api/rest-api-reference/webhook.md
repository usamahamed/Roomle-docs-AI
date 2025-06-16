#Webhook documentation

## Overview
- [Description](#description)
    - [Event JSON example](#event-json-example)
    - [Fields](#fields)
- [Usage](#usage)
  - [Event Types](#event-types)
    - [Email forwarding](#email-forwarding)
  - [Authentication of the call](#authentication-of-the-event)

## Description
The webhook provides the functionality for the user to personalize/track events in the tenant configurators.
For an example of the integration, check [here](https://gitlab.com/roomle/showcases/webhooks).

### Event JSON example

```json
{
  "event": "email.savedConfiguration",
  "data": {
    "success": true,
    "email": "targetEmail@gmail.com",
    "configurationId": "catalogId:itemId:2564B3D4E19A9C4605DAF5236F0ADFE80DA638F63A49D5D4C8260CB5FF48011C",
    "url": "https://test.roomle.com/t/cp/?id=catalogId:itemId:2564B3D4E19A9C4605DAF5236F0ADFE80DA638F63A49D5D4C8260CB5FF48011C&configuratorId=vizmotor",
    "configuratorId": "myConfigurator"
  }
}
```

### Fields
- event - a unique string identifying the event type
- data - a json containing the data connected with the event - check [event types](#event-types) for content based on the event

## Usage

A tenant can set a webhook url for personalizing/tracking events in the configurator.
If a webhook is set in the tenant, the possible events will be forwarded to the url.
Based on the type of event, the Roomle API will react accordingly in case of unsuccessful POST.
For more specifics - check the [event types](#event-types).
The posts to the webhook can be also authenticated - for more info check [authentication](#authentication-of-the-event)

### Event Types
Events are grouped based on functionality and the data forwarded to the endpoint

Event types:
- [Email Forwarding](#email-forwarding)
  - _email.savedConfiguration_ - sent when a user saves a draft with an email in the configurator
  - _email.shareConfiguration_- sent when a user shares a configuration
  - _email.shareConfigurationAR_- sent when a user requests an AR link to be sent to an email
  - _email.3DExportAsset_- sent when a user requests a 3D export

#### Email forwarding
The email forwarding events contain the following JSON in the **data** field:
```json
{
    "email": "targetEmail@gmail.com",
    "configurationId": "catalogId:itemId:2564B3D4E19A9C4605DAF5236F0ADFE80DA638F63A49D5D4C8260CB5FF48011C",
    "url": "https://www.roomle.com/t/cp/?id=catalogId:itemId:2564B3D4E19A9C4605DAF5236F0ADFE80DA638F63A49D5D4C8260CB5FF48011C&configuratorId=myConfigurator",
    "configuratorId": "myConfigurator"
  }
```
Fields:
- success - boolean representing the result of the processing in the Roomle API
- email - contains the email entered by the user, to which to send the email
- configurationId - if its a configuration it contains the configuration id
- itemId - if its an item it contains the item id 
- configuratorId - contains the configurator id from where the share originated
- url - the link to the requested content
- resultUrl - the link to the 3D Asset

Response:
In case of a failed POST (response status 300+) to the webhook url, a Roomle email will be sent instead!

### Authentication of the event
Posts to the webhook can be authenticated using a apiKey/secret pair provided by Roomle.
Each post contains a token in the header, which can be decrypted using the provided secret.
For this to be possible, the user must insert the provided api key in the tenant settings.
The token will be then encrypted using the users secret and decryption on user side provides authentication of the event.
The token is encrypted using AES CBC PKCS5.
In case no api key is provided, then token is encrypted with a default secret and cannot be authenticated.
