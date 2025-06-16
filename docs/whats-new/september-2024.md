# September 2024

## Room designer News <a href="#room-designer-news" id="room-designer-news"></a>

### Adaptions in snapping of measurement lines

We improved the snapping of measurement lines. We are snapping the measurement lines now against the corners, 45 and 90 degrees of catalogue items within the room designer (2D), provided the item is long enough.

<figure><img src="../.gitbook/assets/92108fa6-1066-4a94-b472-96d468dd5ae6.png" alt=""><figcaption></figcaption></figure>



## Configurator News <a href="#configurator-news" id="configurator-news"></a>

### Configurator Animations <a href="#configurator-animations" id="configurator-animations"></a>

Animations for the configurators are production-ready and ready to be used. They can now be implemented in Roomle Script and activated in the configurators via `featureFlags.animations=true`

Find more information about the implementation here within the roomle docs. [https://docs.roomle.com/rubens/content-creation/roomlescript-reference/configurationformat#animations](https://docs.roomle.com/rubens/content-creation/roomlescript-reference/configurationformat#animations) & [https://docs.roomle.com/rubens/content-creation/roomlescript-reference/configurationformat#animations-matrix-animationmatrixmoveby-rotateuvmatrixby-animationmatrixscaleby](https://docs.roomle.com/rubens/content-creation/roomlescript-reference/configurationformat#animations-matrix-animationmatrixmoveby-rotateuvmatrixby-animationmatrixscaleby)

You can see in the following example how animations within the configurator work [https://www.roomle.com/t/cp/?id=roomle\_script\_test:animated\_carcass\_1\&featureFlags.animations=true](https://www.roomle.com/t/cp/?id=roomle\_script\_test:animated\_carcass\_1\&featureFlags.animations=true)

&#x20;

### Searchbar Threshold <a href="#searchbar-threshold" id="searchbar-threshold"></a>

We had a fixed threshold (10) which when exceeded showed the search field for addons in the Roomle Configurator. We now implemented a URL parameter `searchThreshold` for that so that the users can set their own thresholds in case they want to show the search bar already if there are less than 10 items.

[https://www.roomle.com/t/cp/?searchThreshold=3](https://www.roomle.com/t/cp/?searchThreshold=3)



## Rubens Admin News <a href="#rubens-admin-news" id="rubens-admin-news"></a>

&#x20;

### Individual Analytics queries <a href="#individual-analytics-queries" id="individual-analytics-queries"></a>

We now provide individual timeslots for analytics queries in the corresponding RuAd forms both in the dashboard and the analytics section.&#x20;

<figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

&#x20;

### Speed improvements for Static item (batch) uploads <a href="#speed-improvements-for-static-item-batch-uploads" id="speed-improvements-for-static-item-batch-uploads"></a>

We’re always working to make your experience smoother and more efficient. We’re happy to announce that we’ve recently improved the performance of our static item uploads in Rubens Admin. This means you can now upload your items (both in batch and single items) faster than ever, allowing you to manage your content with greater ease and efficiency.

&#x20;

### Static item batch uploads for Level 1 <a href="#static-item-batch-uploads-for-level-1" id="static-item-batch-uploads-for-level-1"></a>

Level 1 users now have reduced catalogue management available to manage their products and use the full power of static item batch uploads.

&#x20;

<figure><img src="../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure>



### Duplicate materials in Rubens Admin <a href="#duplicate-materials-in-rubens-admin" id="duplicate-materials-in-rubens-admin"></a>

We can easily duplicate materials in RuAd now and save the users time in creating variants of one material. All you need to do is click the duplicate icon with the materials list inside Rubens Admin and a copy of the selected material is created.&#x20;

That is a nice use case for

* level 2 self-service customers: as they can now easily duplicate and change materials and have them immediately available within the material configurators.
* highly sophisticated content creators: as they can easily duplicate and change complex materials including their textures without having to create the materials including their textures from scratch again

<figure><img src="../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

