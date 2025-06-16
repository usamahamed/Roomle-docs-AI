# Overview

The Rubens Products are our ready to use solution where you as a customer can integrate a complete configurator user interface as an iframe in your Website. Our solutions are widely customisable which means you can adapt colours, fonts, control the 3D scene with API calls and listen to events. If you need a fully custom user interface we recommend to use our Rubens SDK (Software Development Kit) and build the user interface by your own.

### Embedding vs. embedded integration

Simple embedding makes most sense for static items or when you do not need an integration into your website or webshop you can find more details in the Rubens 3D Viewer & AR section. You can imagine the simple embed like a YouTube embedding code. In contrast to that we also offer embedding integration. To use this you need to write a little bit of JavaScript to glue code so that the Rubens Configurator and your website or webshop can communicate with each other. Then your website or webshop code can also interact with Rubens Configurator. If we compare it to the YouTube example this would be more like the YouTube JavaScript API (or also known as YouTube Iframe-API). The embedding integration is needed to integrate our Rubens Configurator and Rubens Room Designer.

### Iframe

Yes, the Roomle Configurator is integrated as an iframe. This is per se nothing bad. Iframes have a bad reputation because they are also used for displaying ads etc. But the Roomle Configurator is not an annoying banner it is an essential part of the UX for a potential customer. Big platforms like Youtube, Vimeo, Paypal are also integrating their widgets as iframe. Of course, there are technologies like Web Components but the iframe approach has several advantages in the use case of Roomle Configurator, e.g.: each WebAssembly instance is in its own process, it's easier to react on resize events, etc.

"Iframes are bad for SEO they told me". Yes, that's true but only if you put essential data into the iframes. The Roomle Configurator only has a 3D scene that has basically no information for search engines. Therefore it makes sense to optimize your landing page on the website and treat the iframe just like you would treat an image.

Since the embedding webshop has no control over the iframe it also can not track what happens inside the iframe. Therefore we send important events to the webshop so it is possible to track events.

### Upgrades

We follow the [sematic versioning](https://semver.org/) approach and to make sure no breaking change slips through we follow the [Conventional Commits](https://www.conventionalcommits.org) convention. Therefore always make sure to read through our [changelog](../web/ui/CHANGELOG.md) if you upgrade to a new major version of the embedding lib. All the other upgrades should be straight forward and you only need to increment the package version in your package manager.

### Our Products:

We differentiate between 3 main Rubens products:

#### Rubens 3D Viewer & AR

Our Rubens 3D Viewer & AR is an easy ready to use solution to display you static 3D files like glb's. You can integrate easily as an iframe on all platforms and have an AR Viewer straight out of the box.

#### Rubens Configurator

Our core product, the powerful full logic configurator which is capable to visualise and configure the most complex products, live in 3D in the web on all devices. It is integrated as an embedding integration with our java script library, which is used for the communication between our 3D scene and the website. Learn more about in the Rubens Configurator section.

#### Rubens Room Designer

The Rubens Room Designer combines our Rubens Configurator with all features which are needed for designing a room. It is also integrated with our java script embedding library, learn more about it in the Rubens Room Designer section
