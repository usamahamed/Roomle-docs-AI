# Add products from an external catalog

To integrate an external catalog into Rubens Room Designer and add products seamlessly to your design scenes, follow these steps:

1. **Attach Events to Product Cards:** Before you can make products interact from the external catalog to the Room Designer, ensure that you attached the proper events to it like `insertProduct` event, See the sample script below.
2. **Provide Event Data:** you must adhere to the following API structure. This structure specifies the format for the message object that will be sent to the Room Designer, including the `eventType` and `payload` fields, which includes the productId.

{% code lineNumbers="true" %}
```
export interface MessageEventData {
  eventData: {
    eventType: 'insertProduct';
    payload: {
      productId: string;
    };
  };
}

```
{% endcode %}

3. **Ensure CORS Compatibility:** Make sure that the external catalog is embeddable. For more information see [CORS Integration Guide](../integration/handle-cors.md)

### **Integration Example**

You can use the following code as a reference for implementing interaction features with the Room Designer. This script adds necessary actions based on the `data-product-id` attribute to handle product addition to the Room Designer scene. Customize this script to meet your specific requirements:

{% code lineNumbers="true" %}
```javascript
const EVENTS_MAP = {
        CLICK: { eventName: "insertProduct", nativeEventName: "click" }
      };

      const sendEvent = (eventType, productId) => {
        const parentWindow = window.parent;
        if (parentWindow) {
          const eventData = {
            eventType,
            payload: {
              productId
            }
          };
          parentWindow.postMessage({ eventData }, "*");
        }
      };

      const addEventHandlers = ({ eventName, nativeEventName }) => {
        const elementsWithEvent = document.querySelectorAll(
          `[data-product-id]`
        );
        elementsWithEvent.forEach((element) => {
          const productId = element.getAttribute("data-product-id");
          const eventHandler = (event) => {
            sendEvent(eventName, productId);
          };

          element.addEventListener(nativeEventName, eventHandler);
        });
      };

      const removeEventHandlers = ({ nativeEventName }) => {
        const elementsWithEvent = document.querySelectorAll(
          `[data-product-id]`
        );
        elementsWithEvent.forEach((element) => {
          if (element.eventHandler) {
            element.removeEventListener(nativeEventName, element.eventHandler);
            delete element.eventHandler;
          }
        });
      };

      const addClickHandlers = () => {
        addEventHandlers(EVENTS_MAP.CLICK);
      };

      const removeEventListeners = () => {
        removeEventHandlers(EVENTS_MAP.CLICK);
      };

      window.addEventListener("load", () => {
        addClickHandlers();
      });

      window.addEventListener("beforeunload", removeEventListeners);
```
{% endcode %}
