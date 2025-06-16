# Roomle Component Formatter

Includes JSON escaper/unescaper, which provides a possibility to replace /n with //n and vice-versa. This allows to have multiline value JSONs but still be able to use code prettifiers, schemas etc.

## Downloads

Current version: [rmlformatter-1.6.2.vsix](../plugins/rmlformatter-1.6.2.vsix)

Legacy versions:

* [1.5.0](../plugins/rmlformatter-1.5.0.vsix)
* [1.4.2](../plugins/rmlformatter-1.4.2.vsix)
* [1.4.0](../plugins/rmlformatter-1.4.0.vsix)
* [1.3.0](../plugins/rmlformatter-1.3.0.vsix)
* [1.1.1](../plugins/rmlformatter-1.1.1.vsix)
* [1.0.0](../plugins/rmlformatter-1.0.0.vsix)
* [0.4.3](../plugins/rmlformatter-0.4.3.vsix)
* [0.3.3](../plugins/rmlformatter-0.3.3.vsix)

## Features

### RC-JSON Language and Tooling

* If you open a `.json` file, that has `components` in its absolute path and the file contains `"id":` as a string, language is automatically switched to RC-JSON.
* You can switch any JSON to RC-JSON using the "Change Language Mode" command.
* RC-JSON loses JSON validations (because it is by its nature and invalid JSON). Different tools are still appliable if JSON is escaped (See Multiline Escaper feature).

### Syntax Higlighting for Roomle Component Definition and Roomle Script

* Syntax higlighting definition is derived from JSON.
* This is tested with VS Code's default Ligth and Dark schemes. Custom themes might not have all definition for every token used by the grammar.
* Rules:
  * Grammar was derived from JSONs with embedded RoomleScript (which is derived from JavaScript grammar), with following exceptions.
  * Ids: as string + underline.
  * Keys of supersedings and parameters, internalIds: bold value.
  * unitType, type: as keyowrds.
  * unrecognized keys by the configurator (except for debugGeometry): attribute key is marked as a comment
  * context markers: keywords
  * various keywords: Vector2f, Vector3f

### Roomle Component Definition Formatter

* A strict formatter supporting Roomle Script
* Rules:
  * Indentation: 4 spaces
  * Indentation reasons:
    * `{ }`, `( )`, `[ ]`, `BeginObjGroup(); EndObjGroup();`
    * geometry modifier functions (`MoveMatrixBy`, `RotateMatrixBy` and `SetObjSurface`) indent by 1 space
  * Exactly one space around operators, one behind commas and semicolons
  * No spaces around ( and ) except 'for (' and 'if ('
  * No trailing spaces, empty have no spaces
  * Multiline string ends with closing quote at the level of next JSON attribute
  * Ignores string values (= characters between apostrophes)

### Roomle Component Definition JSON Structure Normalizer

* Sorts attributes of the JSON in an unified way.
* Especially useful if you are comparing true changes of two component definition files with Git.

### Mass Formatting Tool

* Command: `Format all open JSONs` goes trhough all open tabs in your VS Code window and applies formatting.
* Command: `Format all Roomle JSONs in Current Workspace` goes through all JSON files that contain `"id":`, applies formatting and saves the files.
  * Intended usage: open a folder you want to format in a separate VS Code instance. Use this command.
  * This command must be confirmed by typing `yes`. If you type `normalize` instead, it will apply formatting and normalizing of the component definitions.
  * **Warning**: Always make sure you will be formatting only the components you really want to format.

### Autocomplete Provider for Roomle Components

* On autcomoplete feed call, it inserts following entries into the autocomplete list:
  * parameter keys
    * along with parameter keys, it also lists the possible values in the documentation area of the VS Code's Autocomplete
  * superseding keys
  * internal variables
    * this is done by RegEx search for structures of: \[a-zA-Z0-9\_.]\*\s=\s (some.thing _space_ = _space_)
    * not yet context aware (everything is available everywhere)
* Autocomplete feed is called automatically on changing editor tabs, opening new RC-JSON document, applying formatting.

### TABLE function

Usage:

1. Write following in a RoomleScript

```
#TABLE parameter1, parameter2, ...
```

2. Apply formatting

Result is an if-structure of all possible parameter values (`validValues`, `valueObject`) combinations.

### Multiline JSON Escaper:

Takes

```
{
    "key": " multiline
    string
    in 
    json
    value
    "
}
```

and makes it to:

```
{
    "key": " multiline\n    string\n    in \n    json\n    value\n    "
}
```

and back.

## Requirements

JSON keys and values delimiter character must be quote "

There can't be quote characters inside values, even "

No other extensions required.

## Extension Settings

## Known Issues

* Ignores commented parts of the code
* While mass formatting all open JSONs, pressing the stop formatting button does not help when a script is too big making the configurator stuck.
* If a Roomle Component Definition JSON is open at start-up of VS Code, the language will not switch to RC-JSON properly. You need to do it yourself in that case using the `>RC-JSON` button.

## Release Notes

### 1.6.2

* Fixed error that `else if` would collapse to `elseif` in some occasions.

### 1.6.1

* Fix: `component.parameterGroups` now normalize.

### 1.6.0

* Added support for the `component.environmentGeometry` script.
* Added the possibility to also normalize component definitions automatically on saving. Format is set by default as the action on save. You can switch it to normalize in the settings.
* Added syntax highlighting support for new keywords: `else if`, `break`, `continue`, `return`

### 1.5.0

* Added extension settings. Find them in Settings > Extensions > RoomleTool.
* Added possibility to run Roomle configurator instance in the web browser with id of the currently open component. This opens the component as it is stored in the database. You can modify the URL base in the extension settings under the key `roomletool.openComponentInBrowserUrlBase`, which is useful if you want to change the arguments in the URL. Default key binding: `Ctrl` + `Alt` + `R` or `Cmd` + `Alt` + `R`. Command `roomletool.openComponentInBrowser`, or `Run Roomle Configurator with current componentId`.
* Format and normalized current component file status bar buttons, that were removed in version 1.4.0, are back. You can enable or disable them in the extension settings. `RML-format` button is enabled by default, whereas `RML-norm` button is disabled.
* Fixed error where valueObjects with numeric values would not feed into autocomplete, if their values were not enclosed inside quotes.
* Autocomplete now also shows `valueObject`s' labels in the typing suggestions.
* Fixed undefined `subComponent.isMain` and an error in `dimensioning.level` in syntax highlighting.
* Added auto format RC-JSON on save functionality. Standard `Format on Save` setting does not affect RC-JSON language. Settings key is `roomletool.autoformatOnSave`.
* Added `SubComponent('internalId');` into code suggestions for all subComponent definitions.
* Added `sup` and `var` prefixes in the code suggestions labels for superseded parameters and internal variables.

### 1.4.2

* Fixed `connection.onUpdate` formatting and syntax highlighting issues.

### 1.4.1

* Improved behaviour on deciding whether open JSON document should switch to RC-JSON. If you switch to RC-JSON or JSON, the choice is remembered until the end of the VS Code instance.
* Added `connection.onUpdate` RoomleScript to formatter, normalizer and grammar.
* Added code snippets for `/*BEGIN CUSTOM CODE*/` and `/*END CUSTOM CODE*/`, which are useful for working in IDM-converted components
* Improved and fixed some code snippets.
* Added BeginObjGroup and EndObjGroup to language brackets definitions in order to show their indentation guides and being subject to automatic bracket pair colouring, if `editor.bracketPairColorization.enabled` and `editor.guides.bracketPairs` VS Code settings are set.
* A space is added in a way that `}if` now formats as `} if`
* Multiline string values inside the scripts will not make the formatting of affected scripts fail. Known issue: they stay ugly, but they are generally unintended in the first place.

### 1.4.0

* Added outline of component definition for the RC-JSON language.
* Removed RML-Format and RML-Normalize buttons from the status bar.
* Stop Mass Formatting of workspace button now shows progress.
* Autocomplete now feeds parameters and parameter values with `par` and `val` prefixes, making it easier to work with them.
* Autocomplete entries also now show labels, which is useful when working with IDM parameter keys.
* Fixed an error that made formatter crash when dimensionings were present in the component definition.

### 1.3.0

* Added RC-JSON (Roomle Component JSON) and RoomleScript language support.
  * Provides syntax higlighting for Roomle Component Definition
  * Removes JSON validation in the RC-JSON mode.
* Code snippets for Roomle Components are now part of the plugin and do not require an extra installation step.
* Fixed normalizer order for addOnSpots, dimensioning. Added the plugin-data attribute order in component definition.
* Small improvement of reporting of the formatter outcome.
* Fixed issue that made the formatting not apply to component dimensionings.
* Added a key binding Shift+Alt+N to apply normalize to currently open RC-JSON document.
* `+Esc` and `-Esc` buttons changed to `>JSON` and `>RC-JSON` to also switch the language between JSON and RC-JSON

### 1.2.2

* VS Code information windows in UI will not show anymore while mass formatting, improving performance and solving some crashes.

### 1.2.1

* Added debugGeometry script to normalize and format. Note: see documentation on loader snippets to see how to use it.
* Changed the prefix of the commands from generic 'extension' to 'roomletool'.

### 1.2.0

* Feature Normalize component. Orders JSON attributes in a defined manner. Useful for checking differencies between automated processing or reimports of components. Usage: Implemented under `Format All JSONs in Current Workspace` command if you type `normalize` in the confirmation dialog, or press button at the bottom bar or command `Format and Normalize Roomle Component JSON`.

### 1.1.1

* Prevents running format on JSONs that do not have an `id` attribute.
* Small improvement of error reporting in the output.
* Added more extension activation events, preventing formatter failing to run.
* Improved UI of the Format all JSON files in the current workspace feature.

### 1.1.0

* New feature: Format all JSON files in the current workspace. Usage: command 'Format All JSONs in Current Workspace'.
  * This finds all files that match found '\*\*/\*.json' file pattern in your current open workspace.
  * All found files are open, Roomle Component Formatter run is in them and then saved.
  * Warning: all found JSON files are saved!
  * This works around the fact that VS Code gets slower with lots of tabs open. This formats huge amounts of components much faster.
* Fixed error where a space was added behind { inside commented code regions in every formatter run.

### 1.0.0

* Improved error reporting:
  * reversed path and error type in the message.
  * errors now also show in the VS Code's output field (switch channel to ROOMLE Formatter to see formatter errors)
* Added detection of nested comments. Formatter will warn you, if you do `/* ... /* ... */ ... */`
* Formatter now ignores escaped quote (`\"`, for example in labels that have inch sign) and will not be prevented from running.
* Improves Mass Format All Open Roomle JSONs workflow. Will not freeze anymore if a JSON does not parse and will leave error messages in the output fields
* Fixed formatting of numbers written in the scientific notation.

### 0.4.3

* String parameter values now come in apostrophes out of autocomplete.
* Improved #TABLE functionality for Boolean parameters

### 0.4.2

* Fixed a bug, where validValues of valueObject values of type string (from Json perspective <=> values without quotes) did not enter autocomplete.
* Autocomplete now also suggests values of parameters with validValues or valueObjects.
* On document open, the event is not called reliably to feed the autocomlete. Sometimes, you need to do it yourself.
* Added better error path. Up to now, only index in the JSON list was shown in the error path. Now, it also shows parameter's key, subComponent's internalId and connection's mask behind a colon, which should make scripts with errors much easier to find in big component definitions.
* Implemented parameter table generation.
  * Usage: #TABLE parameter1Ket, parameter2Key and then let format
  * This will prescribe an if-structure of all validValues and valueObjects in a parameter. Parameters require validValues or valueObjects for this feature to generate the table.
* While formatting mutliple JSONs, buttons leading to formatter functions are hidden and a button "STOP MASS FORMATTING" is shown instead, allowing you to stop formatting in the process. However, it does not stop formatting of a current script, which is a known error. If the script is too big or makes the formatter stuck, you still need to restart VS Code.

### 0.4.1

* Implemented support for formatting component.label script
* Introduced VS Code command Format All Open Roomle JSONs
  * Allows you to mass-format the open tabs with JSON scripts
  * Usage:
    1. I recommend closing all open tabs first
    2. in the file explorer, select the files you want to open and select "Open to Side" from the right-click context menu
    3. invoke command menu with Ctrl+Shift+P and rum the command
    4. wait until the formatter runs through all open tabs
    5. after formatting, the scripts are not saved, do it yourself by selecting File > Save All, you can also close all tabs by right clicking the tab and select Close others or other options

### 0.4.0

* Introduced the autocomplete function for parameters, variables and supersedings has been implemented

This is a prototype autoformatting. The principle is that it feeds parameteres and supersedings keys and then regex searches the whole JSON file on _something =_ and feeds _something_ into the autocomplete list. Context in which RoomleScript you are at the moment of typing is not being wathced.

Autocomplete feeding is ran on document open, tab change and after formatting the code using Alt+Shift+F. If it fails for any reason, you can still use the RML-Format. Keep in mind, that it does not (yet) dynamically update the autocomplete list during typing.

### 0.3.4

* Formatting is now applied also on assignments
* Fixed failure on packaging conditions
* Fixed inline else {\_... did not retain the marked line

### 0.3.3

* Fixed error where multiline comments lost their spaces

### 0.3.2

* **Renamed extension name (uninstall previous version first!)**
* Added hotkey Shift+Alt+F to run the formatter
* Discovers following errors:
  * non-matchning /\* \*/
* Excessive closing bracket error displays a line number only with the first occurence of the error. Excessive opening bracket can not be detected until end of script. The formatter will go on so that the bracket error can be more easily discovered.
* Odd apostrophe will terminate the formatter and display a line number with the error.
* Fixed error when replacing // with /\* \*/

### 0.3.1

* Formatting tweaks
* Added functionality to discover following errors:
  * mismatch of count in opening and closing indentation reasons (shows which script)
  * unclosed string apostrophe (shows which script and which line)
  * keeps normalized numbers (format 1.23e-0045)

### 0.3.0

* Optimized and reafactored formatter
* Improved stability
* Reduced strictness of formatting

### 0.2.4

* Fixed bug where the formatter would return with no result if a script with multiple empty lines was present
* Fixed incorrectly formatted trailing // style single line comments

### 0.2.3

* Fixed Windows line end style errors
* Formatter now formats negative numbers as -1 instead of - 1
* Formatter now formats correctly ++ and -- operators
* Stability fixes
* Fixed an error where some one-line right-side expression incorrectly went to more lines
* Trimmed empty newlines at start & end of multiline scripts

### 0.2.2

* Fixes to the formatter
* Applies to most scripts in the JSON file structure

### 0.2.1

* New formatter rules:
  * keeps max. 2 empty lines
  * keeps inline expressions separated by semicolon
  * keeps single-line script
  * converts // comments to /\* \*/

### 0.2.0

* Prototype code indenter, added status bar buttons

### 0.1.4

* Internal improvements

### 0.1.3

* Fixed line-ends for Windows

### 0.1.2

* Internal algorithm change.

### 0.1.1

* Fixed an error that lost the last character in affected string values in certain situations and made the functionality mroe robust.
* Count of affected lines now works correctly.

### 0.1.0

* Initial release
