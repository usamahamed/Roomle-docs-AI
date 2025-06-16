# Rubens Products vs. Rubens SDK

There are three different kinds of using the Rubens Configurator.

* First our Rubens Products where you get a ready to use solutions with a fully api based approach.
* Secondly our Rubens SDK which offers a bunch of api functions based on a high end 3D scene, where you can build a fully customised user interface by your own.
* Thirdly use our Rubens SDK and fork our Rubens Configurator UI project as a starter template

## Different integration options in detail

### 1. Integration via Embedding

<figure><img src="https://a.storyblok.com/f/56431/400x279/d45f1a3030/rubens_playmobil_embedding.png/m/0x375/filters:quality(90)" alt="The Playmobil of Roomle Rubens"><figcaption></figcaption></figure>

The embedding is very similar to the firefighter Playmobil model you see above. Everything is assembled together and it is ready to use. You can use all the functionality like the ladder, the siren, and move the figures around. You can maybe change the appearance by applying some stickers or so.\
\
**Real-world embedding example:**

<figure><img src="https://a.storyblok.com/f/56431/512x449/761c2b4cfd/e-commerce-configurator-integration-example.png/m/0x525/filters:quality(90)" alt="E-Commerce Configurator Integration Example"><figcaption></figcaption></figure>

Here the configurator is used as it is. Only the Embedding API was used to integrate into the web shop.

### 2. Integration via SDK

<figure><img src="https://a.storyblok.com/f/56431/395x395/f7ff078185/rubens-configurator-modular-setup.png/m/0x495/filters:quality(90)" alt="The Playmobil of Roomle Rubens"><figcaption></figcaption></figure>

**“The engine and basic building blocks of a Lego Technic set”**\


With the SDK you will get all the building blocks that were used to build our UI on top. They give you the freedom to assemble them like you want and how you need them.\
\
The Roomle configurator interface is designed as extendable project. This enables you to design individual interface layers or slightly adapt our template in an efficient way using the Roomle Configurator SDK. \
\
Here an overview of the main SDK building blocks:\
\
**1. Configurator interface & logic**

* Configurator Interface&#x20;
* Interpretation of the components definition
* Business rule engine
* 3D model calculation
* Part list calculation\
  \


**2. 3D engine**

* Light and shadow calculation&#x20;
* Description of materials
* Real-time rendering
* User-interaction, selection
* Image production of the current configuration
* 3D scenery & room configuration\
  &#x20;\
  **3. Data Service**
* Data sync with Roomle API
* Save current configuration
* Offline cache (depending on the platform)\
  \


In the graphic below we want to give you an overview of the **areas of responsibility and interaction** in a **Custom UI Configurator** project and which parts are in full control on customer side:

<figure><img src="https://a.storyblok.com/f/56431/1584x884/1b0d7190ef/sdk_functionality_overview_2.png/m/0x495/filters:quality(90)" alt="Roomle SDK Overview: areas of responsibility &#x26; interaction"><figcaption></figcaption></figure>

**Real-World SDK example:**





These customer reference projects use the SDK to show the 3D scene and interact with it via the [SDK API](https://docs.roomle.com/rubens/rubens-sdk/overview). Since they have special needs and want to integrate fully customized and seamlessly into their web shop the best option for them was the SDK.

### 3. SDK + Rubens Configurator UI Project (UI Fork)

<figure><img src="https://a.storyblok.com/f/56431/441x441/e02b4fc6da/lego-monstertruck-example.png/m/0x495/filters:quality(90)" alt="Lego Monstertruck example"><figcaption></figcaption></figure>

**“A Lego Monster Truck which uses the things of the SDK”**\


As described above we use the SDK as a basis for our own UI. If we translate this to the “Lego” picture the engine, the battery, and the power lines are parts of the SDK and all the rest like the car-body, suspension, wheels, etc are part of the UI. The advantage over the Playmobil version is, that I can for example change the suspension now. And in contrast to the SDK I do not need to build a completely new car if I only want to change the suspension. But as soon as you start to customise the car, there is no guarantee that future updates would be easy or even possible to apply anymore. If we (Roomle) update the wheels (parts of the UI), there is no guarantee that they will fit on the car after your modifications of the suspension. Also, no one prohibits you from changing the Lego Monster Truck into a Lego Tank or a Lego Ship.

The Roomle SDK is therefor the perfect approach for customers with special UI needs and requirements who can develop their custom user interface frontend layer for the Rubens 3D configurator.

<figure><img src="https://a.storyblok.com/f/56431/1658x864/6389d8caf8/bildschirmfoto-2022-07-15-um-07-26-39.png/m/0x495/filters:quality(90)" alt="Custom Rubens Configurator UI example"><figcaption></figcaption></figure>

Updates to the SDK will be easier to integrate into your UI project because, for example, an engine could be useful in a Tank or a Ship as well. Therefore if we update for example the engine (parts of the SDK) it will be possible to integrate the new engine because it is defined how an engine looks, how big and heavy it is and the base function of an engine will be always the same.

So for users of the fork there are some things to keep in mind:

1. You need to understand what we developed and get an overview of our code (which is complex because we need to handle every content in every situation with every feature (aka “dock-lines”, “part list shenanigans”…), which might not be the case for a custom developed configurator). That’s the same as with the Lego Monster Truck, you need to know what was assembled how, and why so that your changes do not harm the whole system.
2. You need to use the technology we choose. In the example, it’s a Lego Monster Truck Set in the real world its vue.js and vue-cli.
3. You need to be sure that you need something similar like we implemented. Maybe you do not need a Monster Truck but a small “city flitzer”. Then you should consider using the SDK.
4. You need to be aware that upgrades will be more complex and it’s a high likelihood that you only get updates for the SDK and develop and maintain the UI on your own.

Using the fork needs to be a well-thought decision that it is the best option. Often the decision will be based on the cost-benefit ratio. Sometimes you also need to question if the cost to introduce some “custom label somewhere” is really worth the effort. If you develop a long-term project you also need to consider how you diverge from the original Roomle UI code and how you want to stay up-to-date with the Roomle UI code. For long-term projects, it’s often advisable to use the SDK because most of the time it just starts with “a custom label somewhere” and then more and more special wishes come in. So the break-even between fork and SDK can be sooner than someone thinks.

<figure><img src="https://a.storyblok.com/f/56431/1092x1322/afaf105aa5/bildschirmfoto-2020-12-04-um-11-52-52.png/m/1200x0/filters:quality(90)" alt="Overview Table - Rubens embedding options"><figcaption></figcaption></figure>

### Some technical notes on a fork

Fork means something like (abbiegen, gabeln, abzweigen). On the day the person does the fork this person copies our whole UI code and move from there into another direction as we move (remember the Lego Monster Truck which could be modified to a Lego Tank or Lego Ship)? From this day on, we as Roomle can not provide any support for the UI code anymore. The person who did the fork needs to take care to pull in future changes we do in our UI code if this person needs those changes. Typically no one cares about pulling in changes to her/his codebase as long as there are no bugs or critical problems. But if you do not pull in the changes for 6 months it’s likely that it could be very hard or even impossible to merge our changes into the fork. This is just because of the fact that both codebases diverged too much.\
\
For example, we did 627 changes to our code in the time frame of 2020-05-01 to 2020-11-16. To check this for other time frames you can use:\
\
git rev-list --count HEAD --since="2020-05-01T00:00:00-00:00" --before="2020-11-16T00:00:00-00:00" (see: [https://stackoverflow.com/a/36080228/10800831](https://stackoverflow.com/a/36080228/10800831)).\
\
So it could become very hard to know if all those 627 changes are compatible with the custom changes. Be aware that this problem is only for the UI code because this is the code which is forked. A fork means: “You can do whatever you want, no restrictions”. The SDK has a well-defined API and therefore we can provide upgrade guides and instructions if breaking changes happen. Furthermore, we can work around possible SDK problems because we know how the SDK is used.
