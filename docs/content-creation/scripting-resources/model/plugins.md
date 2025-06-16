# Plugin Data

Descriptions for all currently known plugins in rml components. To add plugin data to a rml component, you need to put it into the `plugin-data` object within the component definition. Each plugin uses the object named after the plugin itself. f.e. for imos the object is found as "imos" under plugin-data.

For details to the actual structure see [plugin-data in config docu](configurator/configurationformat.md#Plugin-Data)

## imos

The imos plugin allows to add structural information to rml components which can then be used to generate pxm files for import into imos.

Currently grade "a" and "b" can be generated via the IMOSGenerator. pxm-a can contain only 1 article description, therefore trying to export an object that would generate multiple articles in imos to pxm-a results in an error.

### articleDescription

An article in imos is build up from `zones` which are divided by `divisions` leading again to zones. Each zone can have `elements` on each side of the zone (top, bottom, left, right, back, front). Currently only rectangular zones are available.

Each article starts with the rootZone, therefore whenever a plancomponent in the configuration is found with a definition of a rootzone in the plugin-data, it starts a new articleDescription. All child- and subComponents are then added to this articleDescription until the next rootZone is found.

The elements in the article reference constructionPrinciples (via the attribute `IMOS_PART_CP`) that must be already known within the imos target system.

Since the zones, divisions and elements in pxm are flat, it doesn't matter where in the configuration (within the subtree of the plancomponent with the rootzone) they are defined. The connection between them is done solely by id. Therefore they can be seperated over children and subcomponents as long as the ids match.

The connections are:

* The parent of a division is always a zone
* The parent of a zone is always a division, the rootzone has no parent
* The parent of an element is always a zone

### groups

Within pxm-b multiple articles can be transfered at once. with the articleDescriptions and `groups` in the pxm-b specifying actual objects (based on those articleDescriptions) positioned in the scene. The IMOSGenerator uses the global position of each planComponent (which defines a rootZone) to position the group in the imos scene.
