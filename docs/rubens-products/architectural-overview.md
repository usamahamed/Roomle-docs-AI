# Architectural overview

### How to embed the Rubens Configurator into your web shop system? An architectural overview

Before you get started we want to give you an architectural overview of embedding the Roomle Rubens Configurator into your web shop system.

### Terminology

* **Client**: the device of the customer of the webshop (the person who browses your webshop)
* **Client-side code**: everything that runs in a web browser. In our examples, that’s HTML, CSS, and JavaScript
* **Server**: the webserver which delivers content to the client

### Intro

The main concept behind the Roomle Rubens Configurator is the idea of a single page application (SPA). If you do not know what a SPA is or if you are unsure how it’s different from server-rendered applications we recommend reading some intros. [Wikipedia](https://en.wikipedia.org/wiki/Single-page\_application) is a good starting point, also the following [Stackoverflow](https://softwareengineering.stackexchange.com/questions/376859/single-page-vs-multi-page-and-client-side-vs-server-side) answer gives a pretty good idea about the concept. But there are plenty of explanations. For [more details, you can see here.](https://www.google.com/search?q=client+side+vs+server+side+rendering)\
\
In our use-case, a SPA has the advantage that everything happens on one single page and all the interaction happens on the client. This decouples your webshop fully from the Roomle Rubens Configurator. Since the Roomle Rubens Configurator only uses HTML, CSS, and JavaScript there are no requirements for your webshop or web server. The Roomle Rubens Configurator can be integrated into every system. No matter what backend technology you use there are no restrictions. Only when the client-side code is generated on your web server, you need to be able to add some JavaScript to the client-side code. The JavaScript you add will then interact with the Roomle Rubens Embedding Lib.\
\
We will walk you through the steps involved with 2 graphics. We want to divide the things involved in “initial load” and “interaction”.

### Initial Load

Imagine a customer browsing your webshop. At some point, the client-side code of a certain page needs to be sent to your customer. **Let’s see what’s going on with the help of the following graphic:**\


<figure><img src="https://a.storyblok.com/f/56431/1451x372/4c123b47aa/initial-request_roomle_rubens_embedding.png/m/1200x0/filters:quality(90)" alt="Initial Request - Rubens Configurator Embedding Instructions"><figcaption></figcaption></figure>

1. the customer of your web shop wants to see a certain page
2. the request to view this page is sent to your server
3. your server generates the client-side code (HTML/CSS/JS)
4. this code is sent to the customer
5. the client (device of your customer) interprets the client-side code and renders the page\


As you see there is no need to change your architecture or server-side code to be compliant with Roomle Rubens Configurator. Only in step 3, the JavaScript code which is needed to interact with the Roomle Rubens Configurator needs to be injected into the final client-side code. Normally that’s a few lines of JavaScript. If you want to more about it you can have a look in one of our getting started sections:

* **Rubens 3D Viewer & AR:** [getting-started.md](rubens-3d-viewer-and-ar/getting-started.md "mention")
* **Rubens Configurator:** [getting-started.md](rubens-configurator/getting-started.md "mention")
* **Room Designer:** [getting-started.md](rubens-room-designer/getting-started.md "mention")

### Interaction

After the client-side code is shipped to the device of the webshop customer, the HTML page is rendered on the customers' device. Now the whole webshop page is interactive and the user can interact with the HTML page via the browser. Since the client-side code of your webshops page contains the Roomle Rubens Embedding Lib the Roomle Rubens Configurator is started with an iframe. The iframe loads everything that is needed and you as a webshop admin does not need to think about anything.\
\
**Let’s review the overview of the next graphic**:

<figure><img src="https://a.storyblok.com/f/56431/1516x570/012e811f98/interaction_rubens_configurator_embedding.png/m/1200x0/filters:quality(90)" alt="Interaction with the Rubens Configurator Embedding Instructions"><figcaption></figcaption></figure>

Everything which is placed inside the violet square is client-side code and runs on the client. Basically, it’s HTML, CSS, and JavaScript so the user can interact via the browser with your web shop page. If some data is needed the client-side code loads it asynchronously from the server. If everything is already at the client the whole page can work without a backend or even without an internet connection.\
\
Another thing you see are the green areas. Those are the parts of the code which belongs to your web shop and to your architecture. The yellow areas are the parts of the code where your web shop communicates with the Roomle Rubens Configurator. As you can see, those areas are only in the client-side code so your server is not affected by the usage of the Roomle Rubens Configurator. Since everything happens on the client you only need to write JavaScript (or transpile to JavaScript).\
\
The blue parts are the Roomle Code. They “just work” and you do not have to do anything. The Roomle Server is only contacted if there is data needed. We do not load everything upfront because this would hinder loading performance. We use an approach of asynchronously loading only what is needed.\
\
Let’s see what is going on in the diagram:

1. in step one the user interacts with the web shop page
2. at some point, the Roomle Rubens Configurator is started. This is done via JavaScript code and all the details are abstracted into the Roomle Rubens Embedding Lib
3. if the user changes something or interacts with the Roomle Rubens Configurator the Embedding Lib sends events to the webshop page. The webshop page can react to those events and trigger other actions if needed
4. if there is more data needed, for example for price calculation, you can send a request to your webshop server
5. your server returns the needed data and your JavaScript code and react to it accordingly.
6. and 7. are nothing you need to worry about. The Roomle Rubens Configurator communicates with the Roomle server if needed and there is no need that you change something.

### Summary

The Roomle Rubens Configurator runs in an iframe on the client of your web shop customer. All the interaction is handled client-side in JavaScript and therefore there are no requirements to your server. You need to implement a client-side code in JavaScript which handles events that are dispatched from the Roomle Rubens Configurator. Depending on the level of integration and how deep you want to integrate the Roomle Rubens Configurator this could be something from a few lines of JavaScript to more sophisticated solutions with some hundred lines of code.
