# List of possible error, warning and info messages

|Errorcode|InternalId|Message|
|---|---|---|
||**Script/Expression**||
|`1101`|`NO_BOOLEAN`|*'VAL' cannot be interpreted as a Boolean value*|
|`1102`|`NO_INTEGER`|*'VAL' cannot be interpreted as an Integer value*|
|`1103`|`NO_DECIMAL`|*'VAL' cannot be interpreted as a Decimal value*|
|`1104`|`NO_PARAMETER`|*'MEM' has no parameter 'VAL'*|
|`1105`|`NO_CONSTRUCTOR_IN_RUNNING_SCRIPT`|*There must be a constructor when running the script*|
|`1106`|`TOO_MANY_STRUCT_MEMBERS`|*Struct has more members than it should. Additional member 'MEM'*|
|`1107`|`CANNOT_BE_PARSED_TO_ARRAY`|*'VAL' cannot be parsed to array*|
|`1108`|`NO_OBJECT_ELEMENT`|*Element 'VAL' does not exist*|
|`1109`|`NO_OBJECT`|*'VAL' cannot be interpreted as an Object value*|
|`1111`|`DIVIDE_BY_ZERO`|*Tried to divide by zero*|
|`1112`|`SQRT_OF_NEGATIVE_VALUE`|*Square root of negative value 'VAL' not possible*|
|`1113`|`NEGATIVE_INDEX_VALUE`|*Can not use negative index value 'VAL' to access 'MEM'*|
|`1114`|`NO_VECTOR2`|*'VAL' cannot be interpreted as a value of type Vector2f*|
|`1115`|`NO_VECTOR3`|*'VAL' cannot be interpreted as a value of type Vector3f*|
|`1116`|`VALUE_CAN_NOT_BE_LOWER_THAN`|*'KEY' value 'VAL' can not be lower than 'VAL'*|
|`1117`|`VALUE_CAN_NOT_BE_HIGHER_THAN`|*'KEY' value 'VAL' can not be higher than 'VAL'*|
||**Script/Expression/Geometry**||
|`1201`|`UNKNOWN_SUB_COMPONENT`|*Unknown SubComponent 'CMP'*|
|`1202`|`INACTIVE_SUB_COMPONENT`|*The SubComponent 'CMP' is not active*|
|`1203`|`CANNOT_PARSE_VECTOR_MEMBER`|*'VAL' can not be parsed for Vector3f-member(MEM)*|
|`1204`|`EXECUTE_INVALID_COMMAND`|*Trying to execute invalid 'CMD' command*|
|`1205`|`GEOMETRY_WITHOUT_PLANCOMPONENT`|*Trying to execute Geometry without PlanComponent*|
|`1206`|`GEOMETRY_WITHOUT_CONFIGURATOR`|*Trying to execute Geometry without Configurator in Component 'CMP'*|
|`1207`|`NON_FLOAT_VECTOR_WITHOUT_FACTORY`|*Non-float vector without a factory! Please report to rml core*|
|`1208`|`BONDING_GEOMETRY_WITH_MATERIAL`|*The 'boundingGeometry' shouldn't have a material because there is no use for the material*|
||**Script/Expression/Arguments**||
|`1301`|`INVALID_ARGUMENT`|*Error getting 'VAL' from 'MEM'*|
|`1302`|`FUNCTION_ARGUMENT_ERROR`|*Call to 'FNC' is not valid, check the number and types of parameters*|
|`1303`|`FUNCTION_WRONG_NUMBER_OF_ARGUMENTS`|*Call of function 'FNC' has X arguments, but X were expected.*|
|`1304`|`FUNCTION_WRONG_ARGUMENT_TYPE`|*Argument X of function 'FNC' must be of type X*|
|`1305`|`NO_OF_INDICES_NOT_DIVISIBLE_BY_3`|*The number of indices (X) in the function 'FNC' is not divisible by 3*|
|`1306`|`WRONG_NO_OF_UVS`|*The number of UVs (X) does not match the number of vertices (X) in the function 'FNC'*|
|`1307`|`WRONG_NO_OF_NORMALS`|*The number of normals (X) does not match the number of vertices (X) in the function 'FNC'*|
|`1308`|`DATA_NOT_FOUND`|*Data 'DAT' not found*|
|`1309`|`FLOAT_OUT_OF_RANGE`|*The float value 'VAL' is out of range*|
|`1310`|`INTEGER_OUT_OF_RANGE`|*The integer value 'VAL' is out of range*|
|`1311`|`FUNCTION_ARGUMENT_TYPE_MISMATCH`|*"Argument ARG of function 'FNC' got parsed as type X but was provided as type Y*|
|`1312`|`DOUBLE_OUT_OF_RANGE`|*The double value 'VAL' is out of range*|
|`1313`|`FUNCTION_ARGUMENT_WRONG_NUMBER_OF_ARGUMENTS`|*Function argument 'FNC' has X arguments, but X were expected*|
|`1320`|`KEYWORD_ARGUMENT_ALREADY_DEFINED`|*Keyword argument 'ARG' ignored, already defined*|
|`1321`|`KEYWORD_ARGUMENT_UNKNOWN`|*Keyword argument 'ARG' unknown for function 'FNC'*|
|`1322`|`KEYWORD_ARGUMENTS_NOT_SUPPORTED_BY_FUNCTION`|*Keyword arguments not supported for function 'FNC'*|
|`1330`|`FUNCTION_NAME_ALREADY_EXISTS`|*A function with the name 'FNC' already exists*|
|`1331`|`FUNCTION_ARGUMENT_SHADOWS_VARIABLE`|*The variable 'VAR' gets shadowed inside the script function 'FNC'*|
|`1332`|`FUNCTION_OVERRIDES_EXISTING_FUNCTION`|*The function 'FNC' overrides the 'SCOPE' function of the same name*|
|`1333`|`FUNCTION_RECURSIVE_FUNCTION_CALL`|*Can't call function 'FNC' because of recursive function call [ FNCs ]*|
|`1334`|`FUNCTION_ARGUMENT_MISSING`|*No parameter, keyword argument or default value provided for argument 'ARG' in function 'FNC'*|
|`1335`|`FUNCTION_KEY_MISSING`|*Component function could not be created, function key is missing*|
|`1336`|`FUNCTION_SCRIPT_MISSING`|*Component function 'FNC' could not be created, function script is missing*|
|`1337`|`FUNCTION_INOUT_PARAMETER_NOT_A_VARIABLE`|*The provided argument for function parameter 'ARG"' of type INOUT in function 'FNC' is not a variable*|
|`1340`|`UNKNOWN_ENVIRONMENT_VARIABLE`|*Unknown environment variable 'VAR'*|
||**Script/Expression/Array**||
|`1401`|`ELEMENT_NOT_FOUND`|*Element not found at given index 'X'*|
|`1402`|`NOT_AN_ARRAY`|*'ARR' is not an array*|
|`1403`|`ARRAY_NOT_INITIALIZED`|*Array 'ARR' is not initialized*|
|`1404`|`ARRAY_OUT_OF_BOUNDS`|*Index (X out of bounds [X,X]) in array 'ARR'*|
|`1405`|`POP_BACK_EMPTY_ARRAY`|*popBack empty array 'ARR'*|
|`1406`|`DIFFERENT_ARRAY_TYPE`|*Array 'ARR' (TYPE) of different type then 'ARR' (TYPE)*|
|`1407`|`NOT_SUPPORTED_FOR_ARRAY_OF_OBJECTS`|*Function 'FUN' is not supported for array of objects*|
||**Kernel**||
|`2101`|`KERNEL_INITIALIZED`|*Version X.X.X initialized*|
|`2102`|`DIRECT_SUBCOMPONENT_UPDATE`|*Trying to update subcomponent 'CMP' directly*|
|`2103`|`ARTICLE_NR_SCRIPT_NOT_OPTIMIZABLE`|*Only articleNrs requested, but articleNrScript not optimizable! Falling back to full variantlist*|
|`2104`|`MISSING_PARAM_KEYS_WHEN_GENERATING_ARTICLE_NRS`|*Missing wanted ParamKeys when generating only articleNrs. Results might be wrong*|
|`2105`|`SHARED_STRINGS_TOKEN_ALLOWED`|*Shared strings in token allowed*|
|`2106`|`CONST_STRUCT_ALLOWED`|*Efficient const-struct handling is activated*|
|`2107`|`DEBUG_BUILD_WARNING`|*This is a debug build! DON'T USE IN PRODUCTION*|
||**Kernel/Docking**||
|`2201`|`DOCKING_PARENT_NOT_FOUND`|*Docking: Parent with ID 'ID' not found*|
|`2202`|`DOCKING_NEW_CHILD_NOT_FOUND`|*Docking: New child with ID 'ID' not found*|
|`2203`|`DOCKING_CHILD_REMOVED_ITSELF`|*Docking: Child with ID 'ID' removed itself while docking*|
|`2299`|`DOCKING_UNKNOWN_ERROR`|*Docking: Unknown error docking component 'CMP'*|
||**Component**||
|`3101`|`CANNOT_TRIANGULATE_PRISM`|*Cannot triangulate prism properly*|
|`3102`|`NOT_ALL_MESHES_HAVE_A_MATERIAL`|*Not all meshes have a material assigned*|
|`3103`|`BASE_MATERIAL_MISSING`|*There are materials defined for 'FNC' but no base material was given*|
|`3104`|`TOO_MANY_MATERIALS_GIVEN`|*There where 'NUM' materials given for 'FNC' but only 'NUM' are supported*|
|`3105`|`TOO_MANY_VALUES_GIVEN`|*There where 'NUM' values given for 'FNC' but only 'NUM' are supported*|
|`3106`|`VERTEX_INDEX_OUT_OF_BOUNDS`|*Vertex index 'IDX' out of bounds in function 'FNC'*|
||**Component/Entity**||
|`3201`|`PARENT_DOCKING_DISABLED_WHILE_DOCKING`|*Parent docking disabled while docking*|
|`3202`|`CHILD_DOCKING_DISABLED_WHILE_DOCKING`|*Child docking disabled while docking*|
|`3203`|`MULTIPLE_SELF_REFERENCES`|*Multiple self-references in component 'CMP' are ignored*|
|`3204`|`VALID_CHILDREN_ARE_DEPRECATED`|*validChildren is deprecated. Please use the much more powerful possibleChildren*|
|`3205`|`ASSIGNMENT_IN_SELF_REFERENCING_SUBCOMPONENT`|*Assignments in the self-referencing sub-component 'CMP' are ignored*|
|`3206`|`UNIT_TYPE_IS_IGNORED`|*The value 'VAL' of the 'PAR' parameter has labels, so the parameter's unitType is ignored*|
|`3207`|`MULTIPLE_IDENTICALLY_VALUES`|*X value objects with value 'VAL'*|
|`3208`|`ERROR_SETTING_PARAMETER`|*Error setting parameter 'PAR': 'ERR'*|
|`3209`|`MULTIPLE_PARAMETER_UPDATES_IN_ON_VALUE_CHANGE_LOOP`|*Parameter 'PAR' updated more than twice in onValueChange Loop*|
|`3210`|`UPDATE_LOOP`|*'SCR' lead to updateLoop*|
|`3211`|`DUPLICATE_PARAMETER`|*Parameter with key 'PAR' already exists*|
|`3212`|`PARAMETER_VISIBLE_IN_PLANNER_BUT_NOT_GLOBAL`|*Parameter 'PAR' is set to be visible in planner but not set global*|
|`3213`|`PARAMETER_UNKNOWN_TYPE`|*Unknown 'TYP' for parameter 'PAR'*|
|`3214`|`PARAMETER_OBJECT_INVALID_VISIBILITY`|*Parameter type is 'Object' but parameter is set to be visible for parameter 'PAR'*|
|`3215`|`PARAMETER_UNKNOWN_GROUP`|*Unknown parameterGroup 'GRP' used in parameter 'PAR'*|
|`3220`|`CANNOT_DOCK_AT_DESIRED_PARENT`|*Docking to the desired parent is not possible as the docking with the mask 'MSK' is already in use*|
|`3230`|`ANIMATION_VISIBLE_IN_PLANNER_BUT_NOT_GLOBAL`|*Animation 'ANI' is set to be visible in planner but not set global*|
|`3231`|`ANIMATION_UNKNOWN_GROUP`|*Unknown parameterGroup 'GRP' used in animation 'ANI'*|
|`3232`|`ANIMATION_OBJECT_ILLEGAL_OPERATION`|*TYPE operation is not allowed for animated objects*|
||**Configurator/Component/Geometry construction**||
|`3301`|`BOOLEAN_3D_NO_OBJECTS`|*Tried to perform a boolean geometry operation without first generating 2 geometries*|
|`3302`|`BOOLEAN_3D_ERROR`|*Error in boolean operation*|
|`3303`|`BOOLEAN_3D_GROUPS`|*Boolean 'OPR' operations with groups are not possible*|
|`3311`|`PLAN_INTERACTION_NO_OBJECT`|*Tried to perform a plan interaction operation without geometry*|
|`3312`|`PLAN_INTERACTION_PRIOR_BOOLEAN_3D_OPERATION`|*'OPR' operations prior to Boolean 'OPR' operation is not allowed*|
||**Component/Serializer**||
|`3401`|`UNKNOWN_RESTRICTION_TARGET`|*Unknown restriction target 'TRG'*|
|`3402`|`JSON_INVALID_ELEMENT`|*JSON had invalid elements in string, please fix 'JSN'*|
|`3403`|`INVALID_CHARACTER_IN_ID`|*Invalid character 'VAL' in ID*|
|`3404`|`MISSING_COLON_IN_ID`|*Missing colon in ID*|
|`3405`|`MULTIPLE_COLON_IN_ID`|*More than one colon found in ID*|
||**Component/Manager**||
|`3501`|`CANNOT_ASSIGN_VALUE`|*Can't assign value to 'VAL'*|
|`3502`|`SAME_ID_FOR_MULTIPLE_SUBCOMPONENTS`|*Multiple subcomponents have same internalId 'ID'*|
||**Grammar/Visitor**||
|`3601`|`ADDITIONAL_DIMENSION_IN_VECTOR`|*Additional dimension with value 'VAL' in Vector3f*|
||**Model/Plan**||
|`4101`|`INVALID_WALL`|*Invalid wall: Start node and end node are the same (NOD)*|
|`4102`|`ADD_OBJECT_TO_GROUP_IN_PLAN`|*Adding an Object to a group once its added to the plan is not supported*|
|`4103`|`NO_OBJECT_FOR_BOUNDARIES`|*Boundaries cannot be calculated because no objects are loaded*|
|`4104`|`XML_MISSING_NODE_REFERENCE_FROM_FLOOR`|*Error reading xml:missing a node referenced from floor*|
|`4105`|`INVALID_SNAP_DISTANCE`|*Invalid snap distance of 'VAL' is ignored, the snap distance must be greater than or equal to zero*|
|`4106`|`INVALID_ZOOM_FACTOR`|*Invalid zoom factor of 'VAL' is ignored, the zoom factor must be greater than zero*|
||**Util/Mesh**||
|`5101`|`CALCULATED_NORMALS_NOT_SANE`|*Calculated normals are not sane*|
|`5102`|`NO_MESH_CALLBACK_FOR_ELEMENT`|*No mesh callback implemented for that element*|
|`5103`|`ERROR_DECODING_CORTO`|*Error decoding corto 'COR'*|
||**Tools/ScriptAnalyzer/JsonAnalyzer**||
|`6101`|`EXPECTED_VALUE`|*It is expected that 'VAL' is a value*|
|`6102`|`EXPECTED_ARRAY`|*It is expected that 'ARR' is an array*|
|`6103`|`EXPECTED_OBJECT`|*It is expected that 'OBJ' is an object*|
|`6104`|`INVALID_KEY`|*The 'KEY' key is invalid*|
||**Tools/ScriptAnalyzer/AccessVisitor**||
|`6201`|`ACCESS_NOT_ALLOWED`|*DIR-access to 'MEM' is not allowed*|
|`6202`|`KEY_NOT_FOUND`|*Key not found: 'KEY'*|
|`6203`|`LOCAL_VARIABLE_WITHOUT_CONTEXT`|*Variable 'VAR' only used locally in script! Add local context to variable '_.VAR'*|
||**Tools/ScriptAnalyzer/ParseErrors**||
|`6301`|`SYNTAX_ERROR`|*Syntax Error: 'ERR'*|
|`6302`|`UNKNOWN_FUNCTION`|*Unknown function 'FNC'*|
|`6303`|`NOT_ALLOWED_FUNCTION`|*Calling not permitted function 'FNC'*|
|`6304`|`UNKNOWN_FUNCTION_TYPE`|*Unknown type 'TYP' for function 'FNC'*|
|`6305`|`WRONG_FUNCTION_TYPE`|*Can not call function 'FNC' of type 'TYP' in script of type 'TYP'*|
||**Tools/MaterialAnalyzer**||
|`6401`|`INVALID_MATERIAL_VERSION`|*Unknown material version 'VAL', fall back to version 'VAL'*|
||**Service/Export**||
|`7101`|`IMOSIX_EXPORT_MODULE`|*Module created from component 'ID' cannot be exported to IMOS iX*|
|`7102`|`HOMAGIX_EXPORT_MODULE`|*Module created from component 'ID' cannot be exported to HOMAG iX*|
||**Deprecated/Uncategorized**||
|`99001`|`MISSING_IMOS_VALUE`|*Missing IMOS 'IMO', fallback to dimension*|
