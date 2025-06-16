Roomle Scripting Documentation Outline
======================================

## Disclaimer

This is a draft for how the documentation will be setup. It has to be reviewed internally, maybe possibly also by external teams.


# INTRO
* setup environment
    * blender
    * vs code extension
        * how to operate and utilize the extension
    * loader snippets
    * git


# LEVEL 1
* no need to cover in the scripting -> RuAd docs

# LEVEL 2
* setup environment
* create texture in RuAd
* process mesh with blender
    * import
    * batch import
    * submeshes names
    * export
    * check scale
* create component definition
    * id
    * parameter
        * material
        * list of values
    * geometry
    * articleNr
    * RoomleScript:
        * if statements
        * artilceNr variable
* create an itemId
* get integration links

# LEVEL 3
* level 2 +
the rest of the content

# LEVEL 4
* level 2
* select level 3 parts:
    * RoomleScript
    * geometry
    * docking
    * internal variables
* getting data payload
* understanding relevant components
* geometry bounding boxes and filling it
* fine alignments
* custom code in onUpdate
* custom subComponents
* adding custom docking
* uploading to RuAd
* best practices to prepare IDM data (@Ulli)
    * hockers
    * global parameters
    * pillows




# Scripting
## Scripting course
* Parameters  **4h**
    * Fields in parameters
        * validGroups, conditionalGroups
        * Configuration
            * Share, save as item, reload
        * Example: Wrong practices in parameter definitions
            * Errors in uninitialized variables
            * State of component must be a function of current parameters, it never can rely on previous selection
* Docking basics **12h**
    * Example: Docking wardrobes together to one direction
    * Explanations of docking points
    * Saving and reloading docked configurations
        * Saved docking points
        * Example: Wrong practice in computing docking points coordinate
        * Epsilon of 100 on connecting in config reload
        * Example: Good practice of storing docking points
    * Parameter context: root, local, global
        * Using a global parameter: height, material
        * Topics in both global and local parameters: mixing up value objects in cross conditions (described in RB-931)
    * Example: Docking of wardrobes internals
        * Preparation of internal equipment: shelf, hanging bar
        * Creating items for shelf and hanging bar
        * Adding possible children in groups
        * Making docking ranges for the accessories
        * Using active group view to hide the door
    * Example: Docking wardrobes in both directions
        * add a connecting screw, example on where to place it: selfAssignment hasLeft/RightChild > screw, or on everything that is not root, which is simpler.
* Working with meshes - **10h**
    * Example: Sofa
        * provide meshes from an existing sofa        
    * Example: Scalable parts
        * provide massjalousien parts geometry, create a really simple version of some blinds
        * explanation of AddPrism
    * Example: Scripting own mesh
        * DT geometry example - swiss geometry
            * vertex positions
            * triangles
            * normals
            * UVs
* Advanced part list topics - **4h**
    * Packaging
        * packageSizes
        * packaging
    * Component.Label
        * fallback to english
    * Subcomponent backreferences
* Pricing service **4h**
    * Making a CSV articleNr - price & price symbol table
    * Example: Processing pricelists - Google Sheets script
    * Testing prices - between CSV and pricelist
* Dimensioning - ALEXA 
    * Overriding measurement box
    * Adding custom measurement quotas
* Advanced docking logic **16h**
    * Restrictions in docking points
    * Restrictions in docking ranges
        * Example: Adding high accessory to the parameterized wardrobes
            * Drawer
            * Room divider
    * Grid docking with restrictions
        * Example: Rietberg/Biohort's dock grid
    * Docking lines
    * Sibling points
        * Example: utilizing siblings points in a shelf system's pillar stands
        * Example: utilizing sibling points in original rietberg docking logic
    * Previews based on group
* Testing **8h**
* Configurator Performance **8h**
    * Measuring
    * What influences the performance
        * (MAS-430) knowledge

## Rubens Admin for Content Creators
* User account
    * How to register
    * How to know what rights to request
* Components  **4h**
    * Creating a new component
    * Updating component
    * Exporting components
        * mass formatting
    * Importing components
    * Changing component entry labels
* Items  **4h**
    * Creating a new item
    * Importing items
    * Translating item labels
    * Categorizing items
        * for possibleChildren categorization in the UI
    * Making and using item thumbnails
    * Object type, detail type, level explanation
* Materials  **4h**
    * Creating a new material
    * Explanation of material attributes: base color, roughness, etc. ... link to some other existing page
    * Adding, updating and removing maps from material
    * Batch uploading materials
    * Translating material labels
    * Categorizing materials
* Categories  **4h**
    * Defining
    * Updating labels
    * Categorizing items (cross-link)
    * Categorizing materials (cross-link)




## Prioritization
Rubens Admin how to manual on batch materials with example - done
parameter groups - all features documenation with examples - ALEXA
sofa template documentation - how to use, step by steps what to fill out
wardrobe template documentation - ALEXA



tip: if not sure component loads using snippet, add some debug geometry