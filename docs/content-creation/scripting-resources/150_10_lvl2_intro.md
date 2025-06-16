# Introduction to Making Level 2 Material Configurators

This part of the documentation describes ways on how to create *Level 2 Material Configurator* content for the *Roomle Rubens Configurator*. Because the Material Configurators use a subset of the functionalities that are available in the *Level 3 Product Configurators*, we recommend Level 3 content creators to start with Level 2.

In order to make a *Level 2 Product Configurator*, content creators need to first create following data:
* 3D meshes
* materials
* labels, texts, article codes

The meshes and materials  need to be processed into a supported format and have to be imported into the *Rubens Admin*, which provides user interface for the database, which is used by the *Roomle Rubens Configurator*. Once the meshes and materials are in the *Rubens Admin*, you can then use them in so called *Component Definitions*. 

*Components* are the basic unit which connects everything together. They define which 3D meshes should be displayed, which materials should the meshes carry, what are the parameters and what data are present in the part list. *Components* are also handled and stored in the *Rubens Admin*. A *Product Definition* then provides the link for the Rubens Configurator, so that a correct component, and thus a correct configurator is loaded.

If you have gone through the [Environment Setup](100_10_setup.md) chapter, you are ready to start with the next subchapters of the Level 2 Material Configurator documentation.