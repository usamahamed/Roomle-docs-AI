## [2.87.0](https://github.com/roomle-dev/web-sdk/compare/v2.86.0...v2.87.0) (2024-10-22)


### Features

* core api ([326194d](https://github.com/roomle-dev/web-sdk/commit/326194d39417fc0fa2b83f7641757a31e289f348))
* manipulation of normal scale material property ([60ff461](https://github.com/roomle-dev/web-sdk/commit/60ff46156548eec450625f7823451a5e0464e1d3))
* set default for global parameters visible in the planner to true ([831119d](https://github.com/roomle-dev/web-sdk/commit/831119d6a0437ef379618fa8c5d6dbc6210ff06f))
* sort parameters after adding animation parameters ([bcff591](https://github.com/roomle-dev/web-sdk/commit/bcff5914d341807c24b8d2656f5ee20dbf7fe05f))
* **kernel:** upgrade to version 2.37.0 ([6b4d3e7](https://github.com/roomle-dev/web-sdk/commit/6b4d3e739280aba3741882c65fcbba711cd32211))
* **kernel:** upgrade to version 2.38.0-alpha.1 ([8c67ec2](https://github.com/roomle-dev/web-sdk/commit/8c67ec24e328fbb73fc3de718b763ad6d8f06e09))
* **kernel:** upgrade to version 2.38.0-alpha.2 ([3d0d6d5](https://github.com/roomle-dev/web-sdk/commit/3d0d6d51d2d82bad87d7c1882c9074bbaf85cc23))
* **kernel:** upgrade to version 2.38.0-alpha.5 ([7f823b2](https://github.com/roomle-dev/web-sdk/commit/7f823b266a97e5b44a693ba946e4f1bc9124400c))
* **kernel:** upgrade to version 2.38.0-alpha.6 ([3092cbc](https://github.com/roomle-dev/web-sdk/commit/3092cbc092aa8e8417b706adc35f99fc785f8fc0))


### Bug Fixes

* **planner:** check if current camera behaviour is planner ([9cf432c](https://github.com/roomle-dev/web-sdk/commit/9cf432cdceb456eebf6f4c647592713488589bad))
* do not automatically switch all objects to “child” mode if featureFlags.advancedDocking=true ([2e8e351](https://github.com/roomle-dev/web-sdk/commit/2e8e35124c4aa51cc7ce4ab84754044a9fd278f0))
* enable to set the outline with colors.SELECTION ([e00c2bd](https://github.com/roomle-dev/web-sdk/commit/e00c2bddd2b54edde709300a5c10b0920e89a31e))
* product list information (& thumbnail) missing for library construction elements ([a02c29b](https://github.com/roomle-dev/web-sdk/commit/a02c29be57909ae14e00c0b16a8c53c15dca46e2))
* update model for easter egg ([573808f](https://github.com/roomle-dev/web-sdk/commit/573808f990d8d1ee195a3d7c24aee8c410d73c0f))

## [2.86.0](https://github.com/roomle-dev/web-sdk/compare/v2.85.0...v2.86.0) (2024-10-08)


### Features

* add flag to disable camera animation ([a3bc4d6](https://github.com/roomle-dev/web-sdk/commit/a3bc4d697c0409e9be957997f42bac4451b126bb))
* set initial camera angle ([e5b9390](https://github.com/roomle-dev/web-sdk/commit/e5b9390bc6a6ea80ffc81c470d2fe64a097a9bb8))
* **kernel:** upgrade to version 2.36.0 ([bb3c20f](https://github.com/roomle-dev/web-sdk/commit/bb3c20f9eeae7a7e34137698016bd370edc9bba1))
* **kernel:** upgrade to version 2.37.0-alpha.1 ([9d3dc83](https://github.com/roomle-dev/web-sdk/commit/9d3dc835f7fd28361d6ad92a4a68c8778f2139ef))
* **kernel:** upgrade to version 2.37.0-alpha.2 ([75bc182](https://github.com/roomle-dev/web-sdk/commit/75bc182d20a4b492d0e389f2b82d5d083a210112))
* **kernel:** upgrade to version 2.37.0-alpha.3 ([e9b7752](https://github.com/roomle-dev/web-sdk/commit/e9b77528c96d7093ce072dbdb380793476d105e7))


### Bug Fixes

* **planner:** avoid snapping when setting measurement line length ([ba8b91c](https://github.com/roomle-dev/web-sdk/commit/ba8b91c9d0a660387c8e901bb6fccce1b1df82ee))
* **planner:** increase 2d click area for construction elements ([db673d4](https://github.com/roomle-dev/web-sdk/commit/db673d498828e750aeed1d597c66383f1e74f738))
* **planner:** resolve configurable items guard if queue is empty ([051f621](https://github.com/roomle-dev/web-sdk/commit/051f6218b46a30c42b5cde0352f25d5c217afa3f))
* **planner:** set correct priority for construction elements ([6665198](https://github.com/roomle-dev/web-sdk/commit/6665198c2e1fa9eb81ad194179601c2a3a457251))
* **planner:** set correct wall thickness in 3d view ([61801a5](https://github.com/roomle-dev/web-sdk/commit/61801a514e9acc73f0763de0957e3d3c2897fe7d))
* set image type png if transparentBackground is enabled ([903d081](https://github.com/roomle-dev/web-sdk/commit/903d081580bac34952e5dd60f14e2b061fc152a8))
* **configurator:** update shadow and AO after canceling previews ([d53e0a8](https://github.com/roomle-dev/web-sdk/commit/d53e0a841eb546c103c922aa6afb7a06ab2d5498))

## [2.85.0](https://github.com/roomle-dev/web-sdk/compare/v2.84.0...v2.85.0) (2024-09-25)


### Features

* add api to export canvas screenshot ([090632b](https://github.com/roomle-dev/web-sdk/commit/090632b3da53f762654cef620635f906a1ae990e))
* core api - load external svg ([6af4f16](https://github.com/roomle-dev/web-sdk/commit/6af4f165e07770695b59fd5d1606dc53f243f033))
* core API for planner objects that indicates whether an object consists of merged components ... ([b0e75f4](https://github.com/roomle-dev/web-sdk/commit/b0e75f4c36053c6490080aac3eb9f2c84b4b2f4c))
* enable insert in between in Designer configurator mode if “advancedDocking” is enabled ([efd013c](https://github.com/roomle-dev/web-sdk/commit/efd013c06ac7e49b29783c346731aeb60f2e018f))
* Shared plan URL should include set URL params ([2e2de7e](https://github.com/roomle-dev/web-sdk/commit/2e2de7ebdc412919c6308974f3aa32494177577c))
* **kernel:** upgrade to version 2.35.0 ([3b00ea4](https://github.com/roomle-dev/web-sdk/commit/3b00ea4467c51327b291f8fa7bc80f7f709b5b65))
* **kernel:** upgrade to version 2.36.0-alpha.1 ([52ff444](https://github.com/roomle-dev/web-sdk/commit/52ff4448fbbb1c7ebcb029f2f9f51b06019aa364))
* **kernel:** upgrade to version 2.36.0-alpha.3 ([c72fd34](https://github.com/roomle-dev/web-sdk/commit/c72fd34514c6c280b96005a38537e0c4d64ce842))
* **kernel:** upgrade to version 2.36.0-alpha.4 ([2fa464f](https://github.com/roomle-dev/web-sdk/commit/2fa464fd9d32a4256101a5da221345a5b2323b64))
* **kernel:** upgrade to version 2.36.0-alpha.5 ([405a344](https://github.com/roomle-dev/web-sdk/commit/405a344e31ec096237271d811eea713fb8fb7085))


### Bug Fixes

* **planner:** handle error if configurations are not saved yet ([4a3ed4c](https://github.com/roomle-dev/web-sdk/commit/4a3ed4c2f2b3ee312d67aa7b4b903fb1b9232e4a))
* prohibit resetting camera 2D when add/update/remove objects ([1e2cb52](https://github.com/roomle-dev/web-sdk/commit/1e2cb52144b134f1802e6c15560b267d14fabaf9))
* **shareURL:** Update regex to allow dot symbols in parameter validation ([773b92a](https://github.com/roomle-dev/web-sdk/commit/773b92a60f3ae5b13c90a36c33318de438846ec1))

## [2.84.0](https://github.com/roomle-dev/web-sdk/compare/v2.83.0...v2.84.0) (2024-09-10)


### Features

* add global callback for readyForRender ([017ddee](https://github.com/roomle-dev/web-sdk/commit/017ddee71ed9795ce08063361dc16477ec9b5da0))
* add log when scene is ready to render ([d45d5fe](https://github.com/roomle-dev/web-sdk/commit/d45d5fe60e4d96308048b1f021fb7ffbfdf6432a))
* added setRotationSnapAngle to PlanInteractionHandler ([33a8ea8](https://github.com/roomle-dev/web-sdk/commit/33a8ea8c8b5384d99d5bbf01b12306ab8893d1b3))
* core api and request for external OBJ ([25dee92](https://github.com/roomle-dev/web-sdk/commit/25dee92b385bb04d2728573ad8992f5542e95756))
* **kernel:** upgrade to version 2.34.0 ([30b89f8](https://github.com/roomle-dev/web-sdk/commit/30b89f81f049fc677fb6f6bb7536dbc45c85e03c))
* **kernel:** upgrade to version 2.35.0-alpha.1 ([71fab08](https://github.com/roomle-dev/web-sdk/commit/71fab08738c81001ac6488585808b076240abf10))
* **kernel:** upgrade to version 2.35.0-alpha.2 ([6fc2c37](https://github.com/roomle-dev/web-sdk/commit/6fc2c37546b79cb6df2eb7a5bdb87e872a084bf8))
* **kernel:** upgrade to version 2.35.0-alpha.3 ([6e35439](https://github.com/roomle-dev/web-sdk/commit/6e3543972288579c43e39dcae98835561fea3208))
* **kernel:** upgrade to version 2.35.0-alpha.4 ([8a20860](https://github.com/roomle-dev/web-sdk/commit/8a20860ff1dea37c34c1ecf719ff0fc3ac30dcbd))
* **kernel:** upgrade to version 2.35.0-alpha.5 ([b5532ab](https://github.com/roomle-dev/web-sdk/commit/b5532abe6c674afa3e3597b8a4e68dc96fca512d))


### Bug Fixes

* **planner:** check for configuratioHash before catalogItemId ([2a7bff8](https://github.com/roomle-dev/web-sdk/commit/2a7bff845c3a3d70162bf18446cde88b89dea713))
* only call render callback once for planner ([feda6b0](https://github.com/roomle-dev/web-sdk/commit/feda6b00da448260c7b2e5cd7a250681d0e8ff19))
* **configurator:** set label for origin part per main component ([234704d](https://github.com/roomle-dev/web-sdk/commit/234704deca3b8af773bce2f39a77a1c8dfa9d83b))

## [2.83.0](https://github.com/roomle-dev/web-sdk/compare/v2.82.0...v2.83.0) (2024-08-27)


### Features

* **planner:** add callbacks for when the context changes ([a1b88e9](https://github.com/roomle-dev/web-sdk/commit/a1b88e9d0f827b215e41a527f838bcef64979403))
* core api - animation group ([103b73e](https://github.com/roomle-dev/web-sdk/commit/103b73ea92b111e02b7c75e5f4f057f9536bcd60))
* core api - setShowChildrenOfPlanObject argument switchChildModeOffForAllOtherObjects ([9d6a399](https://github.com/roomle-dev/web-sdk/commit/9d6a3997ea7abf0700a0f4be51fe8599a278a741))
* core api getMeshOffsetRelativeToObject ([21fca34](https://github.com/roomle-dev/web-sdk/commit/21fca34a5bce909470887382b92f9a34c1118a22))
* Migrate Configuration/PlanSnapshot image uploads to new endpoint ([8807db0](https://github.com/roomle-dev/web-sdk/commit/8807db0313fca7a9611197974251c8e24fc4e01d))
* **kernel:** upgrade to version 2.34.0-alpha.1 ([ecb9569](https://github.com/roomle-dev/web-sdk/commit/ecb9569e7422bfda418fbcaedebf1555bdbf968a))
* **kernel:** upgrade to version 2.34.0-alpha.2 ([2565a53](https://github.com/roomle-dev/web-sdk/commit/2565a534af5a7b3766ad8a9ccad93ec3c019fd46))
* **kernel:** upgrade to version 2.34.0-alpha.3 ([aad7b7b](https://github.com/roomle-dev/web-sdk/commit/aad7b7b6fda9c6eb9462e7818719919b2ba0b49b))
* **kernel:** upgrade to version 2.34.0-alpha.4 ([f5cc6a1](https://github.com/roomle-dev/web-sdk/commit/f5cc6a14839573debbaae51c4dc1dc992f373e43))
* **kernel:** upgrade to version 2.34.0-alpha.5 ([2d12eb3](https://github.com/roomle-dev/web-sdk/commit/2d12eb3b92c7c12b18f910903777892b9187a3d4))


### Bug Fixes

* add null checks ([d0cf1b7](https://github.com/roomle-dev/web-sdk/commit/d0cf1b78e93d16766a3cd8ae8ec4db0a707071af))
* set default material v2 specularity to 1 ([5a1c8aa](https://github.com/roomle-dev/web-sdk/commit/5a1c8aa71697b24936e3b2d9e022cbe0cb4983f7))

## [2.82.0](https://github.com/roomle-dev/web-sdk/compare/v2.81.0...v2.82.0) (2024-07-31)


### Features

* **planner:** add raycaster to debug object on window ([7e6028b](https://github.com/roomle-dev/web-sdk/commit/7e6028bdbd6f332402e2d584861c82d9cc84b2c8))
* core API setDockInsertPreviewBoxParameters ([b9c2498](https://github.com/roomle-dev/web-sdk/commit/b9c2498f5fe5324363f36f6c195dfb68074f32bf))
* external object core api callbacks ([f1a74c0](https://github.com/roomle-dev/web-sdk/commit/f1a74c05d59d003b22e840a975894a9d537a9b28))
* removed insert dock preview boxe displacement (this was a PoC hack) ([96d2df1](https://github.com/roomle-dev/web-sdk/commit/96d2df12452828cad2fb5e4180a07f5a3f6cfc86))
* set length of wall in vector drawing mode ([990b96c](https://github.com/roomle-dev/web-sdk/commit/990b96c029bf1945e48edce1ab0f1c95811902d2))
* snap on collision but rotate within distance ([6727b4f](https://github.com/roomle-dev/web-sdk/commit/6727b4fa09d5e0c6bc341df4ccf83d779a5a1d7c))
* **kernel:** upgrade to version 2.32.0 ([90b6ebb](https://github.com/roomle-dev/web-sdk/commit/90b6ebb6bf45a9d803373a80d4cdcfb9c1a3f1a7))
* **kernel:** upgrade to version 2.33.0-alpha.2 ([ecaf4d4](https://github.com/roomle-dev/web-sdk/commit/ecaf4d421c05c63181e9e6ea8d0a41cb847e2c94))
* **kernel:** upgrade to version 2.33.0-alpha.3 ([f51fa56](https://github.com/roomle-dev/web-sdk/commit/f51fa564110d82c8e936a263b6b7c1a830fbbdf7))
* **kernel:** upgrade to version 2.33.0-alpha.4 ([d2fda67](https://github.com/roomle-dev/web-sdk/commit/d2fda671281ec21c934f9efcd796d66f226a6e97))
* **kernel:** upgrade to version 2.33.0-alpha.5 ([57cf709](https://github.com/roomle-dev/web-sdk/commit/57cf709d5fc0e089bd12a5dd12dd12d9a9f0b884))
* **kernel:** upgrade to version 2.33.0-alpha.6 ([b6cb3c9](https://github.com/roomle-dev/web-sdk/commit/b6cb3c9da2163b4d2f4abf1990408c659aa01cad))
* **kernel:** upgrade to version 2.33.0-alpha.7 ([c113f3d](https://github.com/roomle-dev/web-sdk/commit/c113f3db5c31336bc0584aaa402439ac5064a25c))
* **kernel:** upgrade to version 2.33.0-alpha.8 ([532ee49](https://github.com/roomle-dev/web-sdk/commit/532ee49fb70cf3d64f7603ec0afcedbb2aa197c7))
* **kernel:** upgrade to version 2.33.0-alpha.9 ([feb78dc](https://github.com/roomle-dev/web-sdk/commit/feb78dc569d919232861de5bb0fdb58039c94681))


### Bug Fixes

* **planner:** bounding box rotation ([cde6611](https://github.com/roomle-dev/web-sdk/commit/cde6611fec8e697040a3790c00104d102e20a4df))
* default snapping mode "ON_COLLISION" ([1032e11](https://github.com/roomle-dev/web-sdk/commit/1032e112b0a3ec1e698a395db75bd3af7077c181))
* **planner:** increase construction element priority ([42d9ae1](https://github.com/roomle-dev/web-sdk/commit/42d9ae174f7d4b66ba4a715c751ca432320abe39))
* position of bounding box of plan object depending on mesh offset ([343fc58](https://github.com/roomle-dev/web-sdk/commit/343fc5862094102059556cf96837f1a9c352d78c))
* promise resolve exception when addPlanObjectToScene get called with empty planViewModel ([8e90865](https://github.com/roomle-dev/web-sdk/commit/8e90865af29bce8269710ac6d2d64632ff90117a))
* **planner:** set first person camera FOV to 40 degrees ([278a470](https://github.com/roomle-dev/web-sdk/commit/278a4700b2204a3fca80814591fccd538abbd311))
* wait for all objects to be added before calling onCompletelyLoaded callback ([4d2a184](https://github.com/roomle-dev/web-sdk/commit/4d2a184c37798885b0733ad4582db95478c442d7))

## [2.81.0](https://github.com/roomle-dev/web-sdk/compare/v2.80.0...v2.81.0) (2024-07-16)


### Features

* **planner:** set first person camera focal length to 50mm ([152ce45](https://github.com/roomle-dev/web-sdk/commit/152ce454131385f426f3bcf17cd1b13f1da6225f))
* upgrade to threejs version 166 ([cf99d98](https://github.com/roomle-dev/web-sdk/commit/cf99d9851e7ecc50650c9adbf6a976b7b03e0220))
* **kernel:** upgrade to version 2.31.0 ([0f80417](https://github.com/roomle-dev/web-sdk/commit/0f804179ff4cdae765a7d8c60e3724996e90b68f))
* **kernel:** upgrade to version 2.32.0-alpha.1 ([18735c6](https://github.com/roomle-dev/web-sdk/commit/18735c6e6a6c7b1420c56369035d9a9d052bfe66))
* **kernel:** upgrade to version 2.32.0-alpha.2 ([7959140](https://github.com/roomle-dev/web-sdk/commit/7959140308265caed5c6b1735bca6d95ede55b48))
* **kernel:** upgrade to version 2.32.0-alpha.3 ([ede4efa](https://github.com/roomle-dev/web-sdk/commit/ede4efa9090261808e30ce67f78d2e362f742b92))
* **kernel:** upgrade to version 2.32.0-alpha.4 ([4fd2675](https://github.com/roomle-dev/web-sdk/commit/4fd2675265acf7401766336c3abdfdb3e0ef6975))


### Bug Fixes

* **planner:** only highlight component when in configurator ([da754ae](https://github.com/roomle-dev/web-sdk/commit/da754aec495af8b80dc1d4a08a5b14dad49aba4f))
* reduce max top image default size to 1024 ([cc9f148](https://github.com/roomle-dev/web-sdk/commit/cc9f1485cc3e88925f9e358095f7eeba267059d8))
* shader compile error (three 166) - pass shadow intensity to "getSahdow" ([46db4a5](https://github.com/roomle-dev/web-sdk/commit/46db4a57661e4438647e38ea09f5b5fa5be7d070))
* skip mapObjectToUI on planElementChange callback in case of configurable/construction products ([1126f00](https://github.com/roomle-dev/web-sdk/commit/1126f0017042fcb60965d7e49e9d726a6550c3bd))
* **planner:** use bounding box for wall selection ([84b9fce](https://github.com/roomle-dev/web-sdk/commit/84b9fce4ec592aae6e4548a438f846b288723dd4))
* **planner:** wait for next run loop to update bounds ([55a1604](https://github.com/roomle-dev/web-sdk/commit/55a1604db9795d30aae1e450112a67849a9ecad0))

## [2.80.0](https://github.com/roomle-dev/web-sdk/compare/v2.79.0...v2.80.0) (2024-07-03)


### Features

* configuration geometry animations ([994494e](https://github.com/roomle-dev/web-sdk/commit/994494e4f5140199c0dfdaa30f20603ab56ba8b1))
* core api - load asset ([7ba7a3b](https://github.com/roomle-dev/web-sdk/commit/7ba7a3b299e1183f596bc52425e9c12789480c16))
* core web API - show children of plan object ([395616e](https://github.com/roomle-dev/web-sdk/commit/395616e475dd172e6de755e3a9c4560db65319a5))
* enable ground reflection in planner by default ([a2f9ea8](https://github.com/roomle-dev/web-sdk/commit/a2f9ea8c011232a86c914537bd858ab574d46437))
* implement function and callback ([52cd2f7](https://github.com/roomle-dev/web-sdk/commit/52cd2f78cf6bcef6f089eb5280d2b2a8b5437763))
* **planner:** increase clickable area of walls ([a8f46af](https://github.com/roomle-dev/web-sdk/commit/a8f46af204a8ca0ba0babe826d21ffaed7cdb360))
* init data support ([408fb70](https://github.com/roomle-dev/web-sdk/commit/408fb706b70cbad1d84e71ab96756c7a9745ecca))
* open close animation api ([64ace57](https://github.com/roomle-dev/web-sdk/commit/64ace574254f3f25f3eaf644a5da46aaee5c7d7a))
* **kernel:** upgrade to version 2.30.0 ([0af9e3d](https://github.com/roomle-dev/web-sdk/commit/0af9e3dce53c0a8ce8ada4988d066d86905ff1b1))
* **kernel:** upgrade to version 2.31.0-alpha.10 ([8d0760a](https://github.com/roomle-dev/web-sdk/commit/8d0760a7fb9f63aff3dc520c208b7929ebe564f1))
* **kernel:** upgrade to version 2.31.0-alpha.5 ([627ee4e](https://github.com/roomle-dev/web-sdk/commit/627ee4ec5bec9684590cdc59b1e1081399edd01e))
* **kernel:** upgrade to version 2.31.0-alpha.7 ([e9a0056](https://github.com/roomle-dev/web-sdk/commit/e9a005682d0304433e4d241491e7e1ccf62e3c8a))
* **kernel:** upgrade to version 2.31.0-alpha.9 ([d7baaa2](https://github.com/roomle-dev/web-sdk/commit/d7baaa22f5ae0201be374fa8208d6b85670fd680))


### Bug Fixes

* add C into the mix ([7b179b7](https://github.com/roomle-dev/web-sdk/commit/7b179b724bc9df44d5c6dcd0bcd9edb37e960de4))
* add missing glyph to fonts for measurements ([fca395a](https://github.com/roomle-dev/web-sdk/commit/fca395ad6ac3d987808e80e3e660405bc2f917b3))
* circular dependencies ([bf3880c](https://github.com/roomle-dev/web-sdk/commit/bf3880c451a810deb976efdfe881eb290e38698a))
* **planner:** fix creating nodes in drawing mode ([77e0155](https://github.com/roomle-dev/web-sdk/commit/77e01554233a97e855ef2bd2de13ee25a5ae7f1a))
* fix togglablity, rerender scene, start with tets ([ddd8ca1](https://github.com/roomle-dev/web-sdk/commit/ddd8ca1a9063b373d465a6c2e9ca952fd282dad1))
* hide wall preview if height or thickness is 0 ([d5ac709](https://github.com/roomle-dev/web-sdk/commit/d5ac7096b10a600070aedc8c151c0ee3acd4ed2d))
* **planner:** highlight components only in configurator ([ac4c2c9](https://github.com/roomle-dev/web-sdk/commit/ac4c2c9f645283d5f05cebf621ba1b9a68c1b66a))
* replace rubik with lato font ([2c8beb5](https://github.com/roomle-dev/web-sdk/commit/2c8beb58e6ebea10a5f4742cd2f3b75b2a17a585))
* **planner:** restrict input to relevant objects ([12c7229](https://github.com/roomle-dev/web-sdk/commit/12c722927cf4401c2e775ef7b89dbe90665b7fc7))
* Save plansnapshot position in position field instead of location ([e65254c](https://github.com/roomle-dev/web-sdk/commit/e65254c97b5448b2a070cc2d9a31cbcb57bcaa87))
* **planner:** select correct plan element with advanced docking ([cd86521](https://github.com/roomle-dev/web-sdk/commit/cd8652155e377f368f5a58b61f62ec42573896ed))

## [2.79.0](https://github.com/roomle-dev/web-sdk/compare/v2.78.0...v2.79.0) (2024-06-18)


### Features

* adjustment of ao and shadow poisson denoiser ([d8b1e31](https://github.com/roomle-dev/web-sdk/commit/d8b1e314c8d5dfcd6f90c9b097667a03170026cb))
* create new API method for resolving short URL ([23e0bba](https://github.com/roomle-dev/web-sdk/commit/23e0bba389b1e4687fe74796acec45c56c55b360))
* enable auto-merge for Core updates PR ([e8ef1f7](https://github.com/roomle-dev/web-sdk/commit/e8ef1f7f7e4c9fc27bb7af24fdc201c8c2e402a9))
* enable snapping by default ([4a376a5](https://github.com/roomle-dev/web-sdk/commit/4a376a5b35df1e56c8fdb7856ecbd17079e77e37))
* snap on collision instead of magnetically snap on distance ([f8fb76d](https://github.com/roomle-dev/web-sdk/commit/f8fb76ddd80a7d937579fe718cd7c212f4abd4da))
* transparency demo & initData ([2f4e066](https://github.com/roomle-dev/web-sdk/commit/2f4e066a81daa31f27d3c2073015bc9d6a78a391))
* transparency demo & initData ([4db8387](https://github.com/roomle-dev/web-sdk/commit/4db83876b6734dc55ff82667b257c7d1b9f103f6))
* **kernel:** upgrade to version 2.30.0-alpha.4 ([11ad70a](https://github.com/roomle-dev/web-sdk/commit/11ad70ab7fc5f2aac1b0d7885e346654b83cb401))


### Bug Fixes

* add getcolor imports ([0a176e1](https://github.com/roomle-dev/web-sdk/commit/0a176e18825a029bb28b02cf3fe702a51ca3b70d))
* clear ground reflection render target before rendering ([b5d0123](https://github.com/roomle-dev/web-sdk/commit/b5d012326786c97c82da1b73fd58f2401a5ecfee))
* **planner:** construction elements will snap to wall ([093c3a3](https://github.com/roomle-dev/web-sdk/commit/093c3a320cda80986b9ce5124341de19976425a1))
* **planner:** use cancel selection to trigger callbacks ([17bfbeb](https://github.com/roomle-dev/web-sdk/commit/17bfbebfcb0ff61e90adc2d0df32486a3136514c))

## [2.78.0](https://github.com/roomle-dev/web-sdk/compare/v2.77.0...v2.78.0) (2024-06-05)


### Features

* **kernel:** upgrade to version 2.29.0 ([fcd7fa9](https://github.com/roomle-dev/web-sdk/commit/fcd7fa9c976630faf166821524753856405c1a09))
* **kernel:** upgrade to version 2.29.1 ([5cdb494](https://github.com/roomle-dev/web-sdk/commit/5cdb49432b6e23c551512973cf9731847a56af5c))

## [2.77.0](https://github.com/roomle-dev/web-sdk/compare/v2.76.0...v2.77.0) (2024-06-04)


### Features

* **planner:** add callback for onDrawingStateChanged ([dee4d20](https://github.com/roomle-dev/web-sdk/commit/dee4d204f55e567d461d44bcdb08223df733884e))
* **planner:** add isCurrentlyDrawn to wall dimension transferable ([24b3920](https://github.com/roomle-dev/web-sdk/commit/24b3920870494199c933c2e35392e01a85961d85))
* **planner:** add isCurrentlyDrawn to wall dimension transferable ([#654](https://github.com/roomle-dev/web-sdk/issues/654)) ([3605275](https://github.com/roomle-dev/web-sdk/commit/3605275906930792a5c99c3eacf71bfea1503e17))
* core api - drag cancel ([3c07a67](https://github.com/roomle-dev/web-sdk/commit/3c07a67f4645505dc726dcaba6fbf47773bfb861))
* disable ground shadow while drawing ([9acb289](https://github.com/roomle-dev/web-sdk/commit/9acb28963cb8f32aa10957043a02db5adc7cf17b))
* **kernel:** upgrade to version 2.28.0 ([afac19a](https://github.com/roomle-dev/web-sdk/commit/afac19a1956a1a89ecf853189cf0f328e300fda2))
* **kernel:** upgrade to version 2.29.0-alpha.1 ([1fc20a0](https://github.com/roomle-dev/web-sdk/commit/1fc20a050b41124c1690dd2d913b541d35d0a4b0))
* **kernel:** upgrade to version 2.29.0-alpha.2 ([f639245](https://github.com/roomle-dev/web-sdk/commit/f6392452772e1a78865dae3f49e2621c69188c8d))
* **kernel:** upgrade to version 2.29.0-alpha.3 ([1a180f8](https://github.com/roomle-dev/web-sdk/commit/1a180f858555e1265b643c52fb47ec0000429177))
* **kernel:** upgrade to version 2.29.0-alpha.4 ([c342baa](https://github.com/roomle-dev/web-sdk/commit/c342baa700c108e9094e3dc853db4cd8830af7dd))
* **kernel:** upgrade to version 2.29.0-alpha.6 ([3434a4d](https://github.com/roomle-dev/web-sdk/commit/3434a4dc4233464b724ff3d9ee778aeb34d30167))


### Bug Fixes

* add Measurement always triggers a Zoom Out ([d3e2205](https://github.com/roomle-dev/web-sdk/commit/d3e22057bdf15e3a7740276c2c681fbafc433005))
* advanced docking - link plan object and component when configuration is loaded ([8db396e](https://github.com/roomle-dev/web-sdk/commit/8db396efedb91e0c37a0b9bc4e50007c12748994))
* advanced docking - return only root components from inserted items ([76511e7](https://github.com/roomle-dev/web-sdk/commit/76511e7a95736f49e10ed7fdd6c8f5fb36ce4d55))
* set correct dimension bounds for top image ([a31286c](https://github.com/roomle-dev/web-sdk/commit/a31286c7878facde400278ea66836abbc9411ceb))
* set correct dimension depth label ([875736c](https://github.com/roomle-dev/web-sdk/commit/875736c00cc88627f19a88b7cf6ed41b7fd016d0))

## [2.76.0](https://github.com/roomle-dev/web-sdk/compare/v2.75.0...v2.76.0) (2024-05-22)


### Features

* "featureFlags.advancedDocking" and docking in moc (disabled by default) ([ed7dd2f](https://github.com/roomle-dev/web-sdk/commit/ed7dd2faa14e0f61d833a4e2051911dc45ee3ec4))
* AO antialiasing - use of blue and alpha channel to store the AO depth with higher precision ([7ed88fe](https://github.com/roomle-dev/web-sdk/commit/7ed88fe09c63a79d910833b7dac2a8ab80bcec16))
* core api createPlanXmlWithSingleObject ([7cfbfb4](https://github.com/roomle-dev/web-sdk/commit/7cfbfb41d7b7ca3e9230e597672ef268a6da2d27))
* core web api PlanInteractionHandler.unDockOnMove ([060502d](https://github.com/roomle-dev/web-sdk/commit/060502d224d9e8804b947d0330199e071bd878fa))
* core web api update ([8f1d624](https://github.com/roomle-dev/web-sdk/commit/8f1d62435729aa8e29e57ec3de154fb06b2f6979))
* create child objects for docking only from components on the ground ([7c4e6e2](https://github.com/roomle-dev/web-sdk/commit/7c4e6e2a5f43e0f2812677991f52d59f1d85b5f6))
* create resetMaterial API method to reset the scene if we load shading with a fresh material ([436024f](https://github.com/roomle-dev/web-sdk/commit/436024fe07fdd0f029423556ae1206d90413f4e0))
* **planner:** enable object in object selection ([486ad46](https://github.com/roomle-dev/web-sdk/commit/486ad46e91ea3b2ce28a5d0cbc0cddfd6c512bfa))
* migrate three.js r160 to r161 - migrate GroundProjectedSkybox to GroundedSkybox ([66e5ded](https://github.com/roomle-dev/web-sdk/commit/66e5ded44fb84145533c4ecf090c027bb8e61222))
* planner core web api ([49990f8](https://github.com/roomle-dev/web-sdk/commit/49990f815c974e305d07b69e93b7074cd6711569))
* poc - vector preview for drawing walls ([2a74cef](https://github.com/roomle-dev/web-sdk/commit/2a74cefc7a6672137c13e7dbc351c6d659aeed65))
* possibility to hook into JSON response from rapi ([#628](https://github.com/roomle-dev/web-sdk/issues/628)) ([e58cf27](https://github.com/roomle-dev/web-sdk/commit/e58cf279160d982a54c8b0dfac9c8ed4a90c8ac2))
* removed obsolete web assemblies ([ecad3a9](https://github.com/roomle-dev/web-sdk/commit/ecad3a9c267a8f04f73d899d37d5f02b5aa3f534))
* update three.js to version 164 ([1e12dbd](https://github.com/roomle-dev/web-sdk/commit/1e12dbd4cebf1cb883c5612a4bde677443660052))
* **kernel:** upgrade to version 2.27.0 ([6368800](https://github.com/roomle-dev/web-sdk/commit/6368800a9d160f2528ead314a8ad8cafe56d9244))
* **kernel:** upgrade to version 2.28.0-alpha.1 ([bae3ea1](https://github.com/roomle-dev/web-sdk/commit/bae3ea1fa514644beba5cf044c45b5ef720ac9a2))
* **kernel:** upgrade to version 2.28.0-alpha.10 ([e9d273e](https://github.com/roomle-dev/web-sdk/commit/e9d273e063c91f518984b80c1f6e969aacffe823))
* **kernel:** upgrade to version 2.28.0-alpha.11 ([e638994](https://github.com/roomle-dev/web-sdk/commit/e638994b417c971aaec8df87255df942d19e3832))
* **kernel:** upgrade to version 2.28.0-alpha.5 ([0c017f2](https://github.com/roomle-dev/web-sdk/commit/0c017f27a31567e52462c771daa7dead150a5bdc))
* **kernel:** upgrade to version 2.28.0-alpha.6 ([fb8f205](https://github.com/roomle-dev/web-sdk/commit/fb8f205825be51a6ebf14e6715b436aa76ccd623))
* **kernel:** upgrade to version 2.28.0-alpha.7 ([845f86e](https://github.com/roomle-dev/web-sdk/commit/845f86e611a5997b524f401b7fd1a21c7d5f46b9))
* **kernel:** upgrade to version 2.28.0-alpha.8 ([5a964f4](https://github.com/roomle-dev/web-sdk/commit/5a964f49e655cadf365df36da8ae3de92892c79c))
* **kernel:** upgrade to version 2.28.0-alpha.9 ([ead794d](https://github.com/roomle-dev/web-sdk/commit/ead794d4b0e6f39f775bfb152226d5eaa420424e))


### Bug Fixes

* add additionalInfos to component parameterGroup object ([6d30183](https://github.com/roomle-dev/web-sdk/commit/6d30183d509854971a286c4b595f6d82dd1c1033))
* check if a configurator camera is in use in moveCamera ([b63ba2a](https://github.com/roomle-dev/web-sdk/commit/b63ba2a1faa17547c842747ef0c74507972aaa24))
* consider object origin in dimensionhelper ([436f4ac](https://github.com/roomle-dev/web-sdk/commit/436f4ac017a604a01f9359bd7e71d9fedaca08a2))
* don't unformat code in method annotation ([f286d7e](https://github.com/roomle-dev/web-sdk/commit/f286d7e353f459bf72f4668283db59e9586ce099))
* downgrade threejs to version 162 ([06672ac](https://github.com/roomle-dev/web-sdk/commit/06672ac9f941703c27f77eb3ab6c3b111a5982ef))
* improve zooming, panning and moving on mobile ([c4c184b](https://github.com/roomle-dev/web-sdk/commit/c4c184b48a849a3c06b88c7c90515a15287ad215))
* only serialize rootElementId when calling toJSON on planElementViewModels ([2ef6a52](https://github.com/roomle-dev/web-sdk/commit/2ef6a52834f6135f95bbe594d0730b9d8228552d))
* preserve order if data comes from cache and is fetched from network ([0e2f0d5](https://github.com/roomle-dev/web-sdk/commit/0e2f0d5faa71f730cc841bb5cfc78ddd07ca6793))
* reset selection in configuratorator context when plan element is removed ([bcb68f2](https://github.com/roomle-dev/web-sdk/commit/bcb68f2bd5f05d79cb3654409aaf8d77c9236387))
* set dimensions correctly in planner ([8103366](https://github.com/roomle-dev/web-sdk/commit/81033665c46cf17dd409fd53ad681dfde826666c))
* update position of dimension text ([cc52474](https://github.com/roomle-dev/web-sdk/commit/cc52474be1e0cb2a8f09e0ff97d1ee16c836f7bf))

## [2.75.0](https://github.com/roomle-dev/web-sdk/compare/v2.74.0...v2.75.0) (2024-05-07)


### Features

* adjust initial camera distance for small objects ([c9dbb70](https://github.com/roomle-dev/web-sdk/commit/c9dbb70c029b3eacf6a61f4e505c99bfacf95a89))
* minimal changes to load a plan with external configurable objects ([e52dfc0](https://github.com/roomle-dev/web-sdk/commit/e52dfc0447bea3c46ed73225af8e98e764d5c7d5))
* plan object external configuration web api ([fcdfe09](https://github.com/roomle-dev/web-sdk/commit/fcdfe09c9fc47fe6cd3edbd98d69df37ad375424))
* planner core api - getExternalObjectComponent ([6292083](https://github.com/roomle-dev/web-sdk/commit/62920830c81e26c9a15706790a52a13a0e430723))
* planner core api update ([dc77be6](https://github.com/roomle-dev/web-sdk/commit/dc77be64e5e4fc4c9c9b33a3239496c16bf091f3))
* planner core web api ([047c45f](https://github.com/roomle-dev/web-sdk/commit/047c45ffd0d21d40642d86a4f315bce5b6b62593))
* roomle core web api ([799d37e](https://github.com/roomle-dev/web-sdk/commit/799d37e1211171175ac13690e8509cc7c7b9b878))
* RoomleComponent.entityId for docking in plan ([6839560](https://github.com/roomle-dev/web-sdk/commit/6839560b62c1a9af7cc30b8c22273821f0130139))
* **kernel:** upgrade to version 2.26.0 ([83a5b87](https://github.com/roomle-dev/web-sdk/commit/83a5b873416ab468b7511293fa5e76671ca8cfa0))
* **kernel:** upgrade to version 2.27.0-alpha.1 ([a6a5eff](https://github.com/roomle-dev/web-sdk/commit/a6a5effd4a1748224042d2dbc869ce253b967ced))
* **kernel:** upgrade to version 2.27.0-alpha.2 ([fbd6d41](https://github.com/roomle-dev/web-sdk/commit/fbd6d41466c22a21b3d182b1da45c0a8b727b198))
* **kernel:** upgrade to version 2.27.0-alpha.3 ([57c23c9](https://github.com/roomle-dev/web-sdk/commit/57c23c974dc4765848a1448bbc4fc5092f202cfc))
* **kernel:** upgrade to version 2.27.0-alpha.4 ([8c9e444](https://github.com/roomle-dev/web-sdk/commit/8c9e4443ae88fd824e57cca407ad6f7ad5408dba))
* **kernel:** upgrade to version 2.27.0-alpha.6 ([4b0e38d](https://github.com/roomle-dev/web-sdk/commit/4b0e38dfbdd44dc488de456a916adc30e5466c2d))
* **kernel:** upgrade to version 2.27.0-alpha.8 ([103e1fa](https://github.com/roomle-dev/web-sdk/commit/103e1fa5e495c0145078de6cf32004f6d1064571))


### Bug Fixes

* **planner:** always update position on plan element update ([55e57bf](https://github.com/roomle-dev/web-sdk/commit/55e57bf6b87a9cc6300b4b09fd60c36a668fa232))
* AO-pass anti-aliasing artifacts ([7a2173d](https://github.com/roomle-dev/web-sdk/commit/7a2173deb16606739708a59f2a758128e04559f0))
* black textures on iOS devices ([8050fac](https://github.com/roomle-dev/web-sdk/commit/8050fac36b6e283191bee4887f0c8268c7e4c9bd))
* do not prevent default on ctrl keydown ([f06fd45](https://github.com/roomle-dev/web-sdk/commit/f06fd45295e476426caaf8c06997a288d4a3a40f))
* failing tests ([0e503e3](https://github.com/roomle-dev/web-sdk/commit/0e503e3ef4838a825b45e4dc06e1b2ef4fe2197e))
* make e2e=true work for Room Designer as well ([bd1f65c](https://github.com/roomle-dev/web-sdk/commit/bd1f65c9924bb3829559b600a961aeeea6b40c85))
* measurements get hidden on sene click ([23c9bd9](https://github.com/roomle-dev/web-sdk/commit/23c9bd9ab43a21a18ce5bb1938faf0a6562cc499))
* minimization of AO-pass anti-aliasing artifacts caused by depth buffer inaccuracy ([d5f514b](https://github.com/roomle-dev/web-sdk/commit/d5f514bf7240bbbd97146b92a801b23313d1c13a))
* remove debugging code ([7180ef1](https://github.com/roomle-dev/web-sdk/commit/7180ef1304f1640313ebd12dde2dc8bb8096bcfe))
* remove unused import ([723a41f](https://github.com/roomle-dev/web-sdk/commit/723a41fe976ba6a68a30d64c046bf93ee4d6c1e8))
* render - clear cache after rendering images ([0d5974f](https://github.com/roomle-dev/web-sdk/commit/0d5974f0ea76038eacf836eaae3365a431b00fd8))
* renderer - ao material pass anti aliasing ([2cdc9c7](https://github.com/roomle-dev/web-sdk/commit/2cdc9c706fb9f85e74869c94af601b1fe9259a9d))
* renderer - only limit the ground shadow plane if the baked ground contact is enabled ([de87f96](https://github.com/roomle-dev/web-sdk/commit/de87f96ff8503c580cfa146063efcd2e9a5c4acd))
* sort IDs so that caching better works ([644a6f9](https://github.com/roomle-dev/web-sdk/commit/644a6f989f30b4aae553ef9f2af7ef28c826250f))
* **glb-viewer:** start render on zoom ([703fe6a](https://github.com/roomle-dev/web-sdk/commit/703fe6a067c5c34ec467397055a87de56faaae32))
* wait until everything is done so we can take a good screenshot ([927c3a5](https://github.com/roomle-dev/web-sdk/commit/927c3a5658a4cb973e55870e1ae2ef23acaa4212))
* working implementation ([82639c9](https://github.com/roomle-dev/web-sdk/commit/82639c92474c8f4324dd1315ef1eefb6c2356281))

## [2.74.0](https://github.com/roomle-dev/web-sdk/compare/v2.73.1...v2.74.0) (2024-04-23)


### Features

* ao material pass debug ([31c0d03](https://github.com/roomle-dev/web-sdk/commit/31c0d03b4b35e44399ce444d75fc8ed22ec7b0a9))
* calculate the measurements lines padding vector based on screen size and the aspect ratio ([adb6464](https://github.com/roomle-dev/web-sdk/commit/adb64643794658caf497251f88e9c29a951797e4))
* configurator core web api: getPlanObjectFromPlanComponent ([2fc64f9](https://github.com/roomle-dev/web-sdk/commit/2fc64f93bedf0fcf1efd7775a1a0133c42a7297b))
* core api for external plan object ([3165aa2](https://github.com/roomle-dev/web-sdk/commit/3165aa2d1062f42f85f4c5c98b8800ee6abeec35))
* expose escape drawing method and isCurrentlyDrawing state to UI ([245fb8b](https://github.com/roomle-dev/web-sdk/commit/245fb8bf2cb02cca02cd33769f906fcddf5205e0))
* plan raster web api ([e236579](https://github.com/roomle-dev/web-sdk/commit/e2365798c639d6ca12c97af942bb84c0a474d831))
* renderer - customShadingMoc parameter ([6cc5771](https://github.com/roomle-dev/web-sdk/commit/6cc57717823195c9edb4eb012b10028ba3ddf36a))
* renderer - grund reflection material plug-in ([a2c783d](https://github.com/roomle-dev/web-sdk/commit/a2c783d240ff80b12655a33a525f1abdc4752cd4))
* renderer - make ground reflection dependent on floor material ([9e1f949](https://github.com/roomle-dev/web-sdk/commit/9e1f949c52531d66343a55088169a4c7b12754b1))
* renderer - set mesh user data "isFloor" and "isWall" ([e4164c8](https://github.com/roomle-dev/web-sdk/commit/e4164c807590d76ce4942f199df0bf285bbb173f))
* **kernel:** upgrade to version 2.26.0-alpha.10 ([f60111b](https://github.com/roomle-dev/web-sdk/commit/f60111b01d8bd0bbd42548b6907633f85682f4ec))
* **kernel:** upgrade to version 2.26.0-alpha.4 ([c2a4dd2](https://github.com/roomle-dev/web-sdk/commit/c2a4dd2983f1a94bdd69db256e8be544d9f6e281))
* **kernel:** upgrade to version 2.26.0-alpha.5 ([3c1afb0](https://github.com/roomle-dev/web-sdk/commit/3c1afb084fdc8bdb240d693f5e5fc39ea55ae1ea))
* **kernel:** upgrade to version 2.26.0-alpha.6 ([b44c8b7](https://github.com/roomle-dev/web-sdk/commit/b44c8b74f6aa3bc1daecc0469589386349b7c677))
* **kernel:** upgrade to version 2.26.0-alpha.7 ([b290daf](https://github.com/roomle-dev/web-sdk/commit/b290daf45fda8b1491e0659b374cf1ee0a0fa75f))
* **kernel:** upgrade to version 2.26.0-alpha.8 ([8190d2c](https://github.com/roomle-dev/web-sdk/commit/8190d2c14c7c31c1fb6fe3748ef4ef1384a43405))
* **kernel:** upgrade to version 2.26.0-alpha.9 ([3522c0e](https://github.com/roomle-dev/web-sdk/commit/3522c0ecbc30ff71e84d5dd9d1b190246a6db49c))


### Bug Fixes

* ao material plug in - set only the shader uniform values, but keep the uniform shader objects ([f7341f5](https://github.com/roomle-dev/web-sdk/commit/f7341f5db3c6e08f5fea6004c53b2a814c77c1b4))
* **planner:** hide construction objects in 2d ([5484721](https://github.com/roomle-dev/web-sdk/commit/5484721817fedf4aef47c4ade6ba38fbdfeded7a))
* hot fix - disable AO in material pass (use instead, AO post-processing blending) ([756a796](https://github.com/roomle-dev/web-sdk/commit/756a796c7bb00bb02ccf1e8e8feeb3cb179542c8))
* make _latestNode/wallPlanObjectViewModel private, place with getter ([649a830](https://github.com/roomle-dev/web-sdk/commit/649a830c8edce43366dd45ef559eb6a6ba9cfe3c))
* pass cancelDrawing var to escapeDrawing method ([0ca3884](https://github.com/roomle-dev/web-sdk/commit/0ca3884abd817c6338a416f9f80d40c9244c3bba))
* planner-scene-manager.ts test ([b635156](https://github.com/roomle-dev/web-sdk/commit/b63515615bf2a5a21024ba8e36b1fca3aa6e8c70))
* refactor cleanup getSelectedPlanElementViewModels names ([0376179](https://github.com/roomle-dev/web-sdk/commit/0376179270b4dc8b2070b38e5f5f73d73184555d))
* remove uneeded code ([235e522](https://github.com/roomle-dev/web-sdk/commit/235e52274fc3fc48d06ffc88ad847d833328ca56))
* renderer - baked ground contact shadow in combination with customShadingMoc parameter ([11f7e99](https://github.com/roomle-dev/web-sdk/commit/11f7e99b8da0c508d5463f4c5d320a712b72042b))
* renderer - disable ground reflection in 2D  mode ([af0d721](https://github.com/roomle-dev/web-sdk/commit/af0d721a4a13bbde84971ba306f1414796d9b8b5))
* renderer - ground reflection pass, premultiplied alpha blending ([4c1421c](https://github.com/roomle-dev/web-sdk/commit/4c1421c186fc206bcc41c9d97ceba2af6d2e7e7f))
* renderer - material plug-in ground reflection pass texture look up ([7052aef](https://github.com/roomle-dev/web-sdk/commit/7052aef63a01fe23a014b06b8bf9ac56dca80201))
* show all wall nodes during drawing and keep them visible on zoom ([040d7cd](https://github.com/roomle-dev/web-sdk/commit/040d7cd166255ff789ab3e765eb18a4d7623d5f4))

### [2.73.1](https://github.com/roomle-dev/web-sdk/compare/v2.73.0...v2.73.1) (2024-04-11)


### Bug Fixes

* hot fix - disable AO in material pass (use instead, AO post-processing blending) ([a5101e5](https://github.com/roomle-dev/web-sdk/commit/a5101e5a76cdf19c1396d345f233b07136c159e1))

## [2.73.0](https://github.com/roomle-dev/web-sdk/compare/v2.72.0...v2.73.0) (2024-04-10)


### Features

* **planner:** add API to set object to wall length ([4b0ddae](https://github.com/roomle-dev/web-sdk/commit/4b0ddae1581e75a971be1e35b67d33ae1306eb91))
* change reading direction of vertical measurements ([2b7b946](https://github.com/roomle-dev/web-sdk/commit/2b7b94693713ff879d8808516826d269957e2d2c))
* Core API - vector draw mode ([8760948](https://github.com/roomle-dev/web-sdk/commit/876094869d67129da93205d68efdb4447c93f641))
* Core snap mode API ([0d2dced](https://github.com/roomle-dev/web-sdk/commit/0d2dced555c4d79bf5e680df6da63582be206d4f))
* create new API method for setting the wall length from the editable bubbles based on wall id ([fea6a74](https://github.com/roomle-dev/web-sdk/commit/fea6a74d1cc44059a7d68cf2087453971e8bf482))
* **planner:** disable lerp for 2d camera ([d2252b3](https://github.com/roomle-dev/web-sdk/commit/d2252b389eede2d7e37f8f65699315a83462f100))
* Editor3dComponentDocked callback API - entity id ([0ffd40e](https://github.com/roomle-dev/web-sdk/commit/0ffd40e82d82fc05cd1fa25754d89fd02e3c1c51))
* Make measurement bubbles for measurement lines editable ([c77b3bd](https://github.com/roomle-dev/web-sdk/commit/c77b3bd9d72abe21c5a2af43b03e7833a76aa1a6))
* Move measurement line ([c971d22](https://github.com/roomle-dev/web-sdk/commit/c971d2290624bca128c527c7cb239bb92b781dc4))
* renderer - apply ao and shadow directly to material ([088f35f](https://github.com/roomle-dev/web-sdk/commit/088f35f59907f9c886220435c667188e2974102b))
* Room square meter measurements ([c17fb2c](https://github.com/roomle-dev/web-sdk/commit/c17fb2caaf404bb2048b371aee7ea9e1d260b133))
* Roomle Core snap API ([e9073ce](https://github.com/roomle-dev/web-sdk/commit/e9073ce9ca5109d6e9079f04b06d9beaa4f97ee3))
* **planner:** show door arches for configurable construction items ([842237a](https://github.com/roomle-dev/web-sdk/commit/842237abd220722ae9b783ffc956f06ae3a43b4e))
* unified Editor3dComponentCreated callback API ([4666157](https://github.com/roomle-dev/web-sdk/commit/4666157c00fa2795a2803ab0931649c487400e1e))
* **kernel:** upgrade to version 2.23.0 ([f8ff910](https://github.com/roomle-dev/web-sdk/commit/f8ff910f9114a5b3109daf205a15783d3c57aead))
* **kernel:** upgrade to version 2.24.0 ([0fbe52e](https://github.com/roomle-dev/web-sdk/commit/0fbe52e5fec99b18abd34bf2a835b15815b77fda))
* **kernel:** upgrade to version 2.24.0-alpha.2 ([8abeece](https://github.com/roomle-dev/web-sdk/commit/8abeece2d6c57ec14d89166c6103236793105b69))
* **kernel:** upgrade to version 2.24.0-alpha.3 ([cd79027](https://github.com/roomle-dev/web-sdk/commit/cd7902743ab285a2fbc49ab24256499715b6789f))
* **kernel:** upgrade to version 2.24.0-alpha.4 ([5479d9c](https://github.com/roomle-dev/web-sdk/commit/5479d9c9aad5e94c75db96fc179cbe5586932073))
* **kernel:** upgrade to version 2.24.0-alpha.5 ([b7602ff](https://github.com/roomle-dev/web-sdk/commit/b7602ff1581c06fa1b13f0d5b66e4a341b119548))
* **kernel:** upgrade to version 2.24.0-alpha.6 ([f5ef58b](https://github.com/roomle-dev/web-sdk/commit/f5ef58b9420db4c0fbc9dff464f0953d47e1af28))
* **kernel:** upgrade to version 2.24.0-alpha.7 ([07ccc9b](https://github.com/roomle-dev/web-sdk/commit/07ccc9b2343dd2f46425b98aafba35b02a8d5f33))
* **kernel:** upgrade to version 2.24.0-alpha.9 ([20fba05](https://github.com/roomle-dev/web-sdk/commit/20fba05f38174363c5e88c4ee54086613a28462d))
* **kernel:** upgrade to version 2.25.0 ([7fb5732](https://github.com/roomle-dev/web-sdk/commit/7fb573247d8c547c1c078160239ea9debf534baf))
* **kernel:** upgrade to version 2.25.0-alpha.1 ([fd2ef9e](https://github.com/roomle-dev/web-sdk/commit/fd2ef9e299971b83f06eb787f0609c401e2b3417))
* **kernel:** upgrade to version 2.25.0-alpha.2 ([a2cde7a](https://github.com/roomle-dev/web-sdk/commit/a2cde7a9e117a6831cd0ae5d23370dbdb5e1f7a6))
* **kernel:** upgrade to version 2.25.0-alpha.3 ([01408ca](https://github.com/roomle-dev/web-sdk/commit/01408ca3ff2ce4aad709d9976b24a0badf25ff74))
* **kernel:** upgrade to version 2.25.0-alpha.4 ([de155a6](https://github.com/roomle-dev/web-sdk/commit/de155a6456e925b952fc5590d61767fa747a1653))
* **kernel:** upgrade to version 2.25.0-alpha.5 ([c19a210](https://github.com/roomle-dev/web-sdk/commit/c19a210bb2bd4adca04d47a57a2074e5b1808067))
* **kernel:** upgrade to version 2.26.0-alpha.1 ([0f7c05f](https://github.com/roomle-dev/web-sdk/commit/0f7c05f97c24f2cf4a484549f798af4d979d0ac1))
* **kernel:** upgrade to version 2.26.0-alpha.2 ([a9f446b](https://github.com/roomle-dev/web-sdk/commit/a9f446be91ec0796434235d5f90f549007c61ec5))
* **kernel:** upgrade to version 2.26.0-alpha.3 ([fe2e86b](https://github.com/roomle-dev/web-sdk/commit/fe2e86b75601df32c98f9d5da7f23cc9a4f23c1a))


### Bug Fixes

* always snap construction elements to wall ([d07aefd](https://github.com/roomle-dev/web-sdk/commit/d07aefddde6aa190b38ac7cf6c5cbd2dd0d9d3fa))
* circular dependency in material plug-in ([5a84bca](https://github.com/roomle-dev/web-sdk/commit/5a84bca330231004feedf125cab0595bba8563e7))
* clear ground reflection render target before rendering ([457d1b7](https://github.com/roomle-dev/web-sdk/commit/457d1b748b654b6429e7dcecf0d696b1e0d8b9d4))
* **planner:** disable drag on wall when multi-select is enabled ([e6fecc8](https://github.com/roomle-dev/web-sdk/commit/e6fecc8d9492c93a97af38b2670cd4636258832a))
* don't include runtime ID in idb saved planXMLs ([ce2b1ac](https://github.com/roomle-dev/web-sdk/commit/ce2b1ac63c668f93609b754a84b4eba59e0f2981))
* enable camera lerp for base class animation ([d5af23b](https://github.com/roomle-dev/web-sdk/commit/d5af23b0727f3b2e52d71006a65333b792a901a8))
* failing test ([e79d9a5](https://github.com/roomle-dev/web-sdk/commit/e79d9a543becf1108897d42076144ec74a0012b9))
* **planner:** implement getBoundingBoxOfGeometry ([cfe99cd](https://github.com/roomle-dev/web-sdk/commit/cfe99cdf985d3159e1f0265e3057ad5b4ad9af2f))
* not change camera if plan element is a construction item ([45fc8cf](https://github.com/roomle-dev/web-sdk/commit/45fc8cf25c95ce54817ad983720c001e0c1ddcb5))
* renderer - if shadow map is not enabled set 0 shadow intensity ([89ddcf3](https://github.com/roomle-dev/web-sdk/commit/89ddcf3c58418b07fbaf5f29b31a5e088cca3e7a))
* renderer - updating the material plug-in after the Ao/shadow pass and avoiding blackness in the shader ([4f117bf](https://github.com/roomle-dev/web-sdk/commit/4f117bf7b96ac67ec3dedea12cf573adb2c84698))
* return null if no wallPlanObject is found in calculateConstructionElementMeasurements ([40a26e8](https://github.com/roomle-dev/web-sdk/commit/40a26e84660cbd33af16b14ea95e59e262134030))
* save planXML while configuring in planner ([c395e07](https://github.com/roomle-dev/web-sdk/commit/c395e0781dcbafd42231da4a40c49ad381865a47))
* save planXML while configuring in planner ([b3f01ec](https://github.com/roomle-dev/web-sdk/commit/b3f01ecca1e7e3e8cbb12a6cfcd10cc8baea78b1))
* Selecting an object of an object in 3D is hard on mobile ([eee482a](https://github.com/roomle-dev/web-sdk/commit/eee482a34e1c7fe7b394abca89305f87503e7f9b))
* set selected item parameters to empty when selecting a static item in planner ([36262f8](https://github.com/roomle-dev/web-sdk/commit/36262f8f0364703eac45892b552b76a8911e7aab))
* snap object onto wall if snapping is enabled ([69bf79c](https://github.com/roomle-dev/web-sdk/commit/69bf79c76a4bc1f7ee0f0b01cd1bef98f96725cf))
* update construction element parameters on selection change ([884d498](https://github.com/roomle-dev/web-sdk/commit/884d498315f6e9b0c41778f0e9d85681f8528867))
* update test with box dimensions ([a1efc32](https://github.com/roomle-dev/web-sdk/commit/a1efc3265de0310d6eaff3ef1bb7860cb017985c))
* update top material tests to use box sizes ([679153a](https://github.com/roomle-dev/web-sdk/commit/679153a2e674c6b126b0a53d1a2d717951721e7b))

## [2.72.0](https://github.com/roomle-dev/web-sdk/compare/v2.71.0...v2.72.0) (2024-03-25)


### Features

* add method to update cache ([4eec520](https://github.com/roomle-dev/web-sdk/commit/4eec520c76d6d24a2090b289ba8beaf4f6106457))


### Bug Fixes

* update cache accordingly ([217ea07](https://github.com/roomle-dev/web-sdk/commit/217ea0767abf6d5c19a1bf433b16ded5d8a9a509))

## [2.71.0](https://github.com/roomle-dev/web-sdk/compare/v2.70.0...v2.71.0) (2024-03-12)


### Features

* **planner:** add arches to doors in 2d mode ([0b0ace2](https://github.com/roomle-dev/web-sdk/commit/0b0ace2a5ef978cb22741d9cd3a1f55fb1fd1310))
* docking line segments web API ([e074243](https://github.com/roomle-dev/web-sdk/commit/e074243893c8954c26b8be34a68d1e4ae81520ea))
* generate docking line bounding geometry from line segments ([cb083b8](https://github.com/roomle-dev/web-sdk/commit/cb083b883c530d9fb10fce036322feb44815cfe8))
* generate docking line preview geometry from line segments ([6fb6fbd](https://github.com/roomle-dev/web-sdk/commit/6fb6fbdb24b7f15f85417616597fadf957da04ea))
* implement callback ([9991083](https://github.com/roomle-dev/web-sdk/commit/9991083710f576155ede98fe60b86ab40cd342eb))
* **planner:** only adjust camera if item outside frustum ([8e1f22e](https://github.com/roomle-dev/web-sdk/commit/8e1f22ec88664ad3ac792e609e81e272e9ab46d0))
* **kernel:** upgrade to version 2.22.0 ([19021d5](https://github.com/roomle-dev/web-sdk/commit/19021d5e8a83e97f7871b99f1ae9928c8685b5f8))
* **kernel:** upgrade to version 2.23.0-alpha.1 ([1aa79ae](https://github.com/roomle-dev/web-sdk/commit/1aa79aef2f2541a72ef6b0c5db037ad07cf1b892))
* **kernel:** upgrade to version 2.23.0-alpha.2 ([4c1837f](https://github.com/roomle-dev/web-sdk/commit/4c1837fbebbe75dd8bc4f6295b4f92573fd37c86))
* **kernel:** upgrade to version 2.23.0-alpha.3 ([e448474](https://github.com/roomle-dev/web-sdk/commit/e44847498f319b48ca6a68f12ed69d8518375d60))
* **kernel:** upgrade to version 2.23.0-alpha.4 ([46f674f](https://github.com/roomle-dev/web-sdk/commit/46f674fceef5f529fc323075cc4a068489afbc3a))
* **kernel:** upgrade to version 2.23.0-alpha.5 ([b921a20](https://github.com/roomle-dev/web-sdk/commit/b921a20c518fdfa92a177b4ccecbe891aef64fc6))
* **kernel:** upgrade to version 2.23.0-alpha.7 ([2d64b91](https://github.com/roomle-dev/web-sdk/commit/2d64b91e8e0bf7c58e532f4f646a2882de2ad0a8))


### Bug Fixes

* add missing ([19c44eb](https://github.com/roomle-dev/web-sdk/commit/19c44ebc334d785b77567ed03559e69adcf42ed3))
* add quality level to "setExternalMeshInvalid" ([e7f8aad](https://github.com/roomle-dev/web-sdk/commit/e7f8aadeab4a28b7e5b268a6e4e8c5566a90a2fc))
* add top wall mesh in 2d mode ([1a20a7c](https://github.com/roomle-dev/web-sdk/commit/1a20a7c0482450fddc21e4a62797a34de33f473c))
* class, file name ([9e1c82d](https://github.com/roomle-dev/web-sdk/commit/9e1c82d2921c0c825d25df0a96b090c7e7ca23e3))
* class, file name ([4a98e83](https://github.com/roomle-dev/web-sdk/commit/4a98e8318aa8bcc85d30320890342da7f8e080e3))
* clean ([0163d47](https://github.com/roomle-dev/web-sdk/commit/0163d47c03064ed16e663b2704777945a3152a9e))
* **configurator:** disable esc key when previews are visible ([1481f40](https://github.com/roomle-dev/web-sdk/commit/1481f403b44679cef3afb5e6b77463eb5b6db384))
* docking line preview orientation ([fb3b3e3](https://github.com/roomle-dev/web-sdk/commit/fb3b3e399e98ed7676c647efa21ac677da9686f4))
* log properly ([7131db3](https://github.com/roomle-dev/web-sdk/commit/7131db30c8bd5948981b7639faa1663dfb662e75))
* **configurator:** move dimension lines and text into group ([0f5b0fd](https://github.com/roomle-dev/web-sdk/commit/0f5b0fd82af229d7605c8394df1f5a42d9a58932))
* params to docs ([33e5ee5](https://github.com/roomle-dev/web-sdk/commit/33e5ee53ef6d91d3bea318a3d6d8b9b8821194a9))
* refactor ([ab740fd](https://github.com/roomle-dev/web-sdk/commit/ab740fd086c8ccaacff24fde7eafefb8f253c2ec))
* refactor ([52217e1](https://github.com/roomle-dev/web-sdk/commit/52217e1ccad38983e05171fd360302aa453fefc5))
* remove log ([66ec93f](https://github.com/roomle-dev/web-sdk/commit/66ec93fa74de98c7e3f6f118bafe12543e4d9a85))
* reset history on configurationReady ([e3d3a96](https://github.com/roomle-dev/web-sdk/commit/e3d3a96c103d098358d75cdc06234fc1c5308f71))
* set false on load planxml ([30d33a0](https://github.com/roomle-dev/web-sdk/commit/30d33a01437fe7a3fb3455642eda313b3f1d15c0))
* show construction elements when switching back to planner ([5134a8e](https://github.com/roomle-dev/web-sdk/commit/5134a8e4313d177a930bdfdac3571dda83ccb95a))
* showing measurements ([a409ad9](https://github.com/roomle-dev/web-sdk/commit/a409ad91823fefbffd6e4fbb37e049f0c1c7d60d))
* showing topside on adding ([3276b88](https://github.com/roomle-dev/web-sdk/commit/3276b8884e3d99f73df9718b58a3371f8e8bf418))
* stringify parse ([4baff6f](https://github.com/roomle-dev/web-sdk/commit/4baff6f7f3ed838c30bee52e90e8aa2082137fba))
* test ([088805d](https://github.com/roomle-dev/web-sdk/commit/088805d105fd02a9648822e87f5b62218b316e3a))
* testing ([d4df1f3](https://github.com/roomle-dev/web-sdk/commit/d4df1f325b4cdf138895a3ed0b41a9f65414a32e))
* tests ([eedd851](https://github.com/roomle-dev/web-sdk/commit/eedd8513289796e559a5f94f966dc05ee7d8d6ac))
* type import ([77b2e34](https://github.com/roomle-dev/web-sdk/commit/77b2e3483f93439fbc1b6a3b6a0336a5e87a033e))
* use getCenter ([e4388af](https://github.com/roomle-dev/web-sdk/commit/e4388af3e908fb1d822f2995ad77608ef4c0d8e1))
* various ([afbd608](https://github.com/roomle-dev/web-sdk/commit/afbd608ac95bedfaa2f1df804c227a169cc7796c))
* visibility ([9b23451](https://github.com/roomle-dev/web-sdk/commit/9b23451cff106c1207ed675493c05d8eada9bdd7))
* wall measurements padding vectors to use clone function ([0afdd66](https://github.com/roomle-dev/web-sdk/commit/0afdd66071ca8adcef5f16e39e30d7ac371aa2f3))
* y hack, not sure how to fix the root cause ([8ce2321](https://github.com/roomle-dev/web-sdk/commit/8ce2321201b561c7427547393ca1a5b3870e2045))

## [2.70.0](https://github.com/roomle-dev/web-sdk/compare/v2.69.0...v2.70.0) (2024-02-27)


### Features

* add feature flag to enable configuring in room ([7c21db7](https://github.com/roomle-dev/web-sdk/commit/7c21db7fab08156bd92074a7ff96117e14bb3fa5))
* add idb-manager service ([4d471e4](https://github.com/roomle-dev/web-sdk/commit/4d471e45eef49ddf610c89ce07441e519ae3c228))
* added snapToWalls and snapToObjects in Core API setMeasurePoint1 and setMeasurePoint2 ([d2d0ce2](https://github.com/roomle-dev/web-sdk/commit/d2d0ce291fd76629b35af171735bae5089482a6d))
* AO clip range check (viewport bounds) ([ac4f2fa](https://github.com/roomle-dev/web-sdk/commit/ac4f2fa370135b9f75c84e8b02fba99df390edf5))
* core docking: "insertInBetween" web API ([e1f1af0](https://github.com/roomle-dev/web-sdk/commit/e1f1af0c35732aaa1396946b3c0a5563374530eb))
* disable default high res env map for e2e flag ([53e9c6d](https://github.com/roomle-dev/web-sdk/commit/53e9c6d3a41b358a6be9bef32a5b6761187e3055))
* expose storage manager globally ([6fae7d4](https://github.com/roomle-dev/web-sdk/commit/6fae7d455589cf9b36033bbcf9b86ee7bd2c5f8a))
* feature flag for advanced docking behavior ([820322a](https://github.com/roomle-dev/web-sdk/commit/820322aa28a343d1f03a494d9ff6c2a4fd10c3c5))
* material v2 - mapping of new maps to three.js material ([bc0478a](https://github.com/roomle-dev/web-sdk/commit/bc0478a6440e2bc79ab30a31b7d770e3d276769a))
* material V2 mapping - index of refraction ([be59bb3](https://github.com/roomle-dev/web-sdk/commit/be59bb3dce5cf53ea9eaec4accd24bcd3ad4d26b))
* remove legacy v1 material "glow" hack for v2 material ([74106f1](https://github.com/roomle-dev/web-sdk/commit/74106f1229342603b82dd7b4b6f0bcacab663e5a))
* renderer - antialiasing for (heavily downscaled) ground reflection ([b06edc5](https://github.com/roomle-dev/web-sdk/commit/b06edc5a50073252089083004b32c1075c718f86))
* renderer - custom shading parameters ([6f59108](https://github.com/roomle-dev/web-sdk/commit/6f59108d2a251b5e8f82fe141fb96cf8fec4ecf5))
* update three.js to version 160 ([8ee98f1](https://github.com/roomle-dev/web-sdk/commit/8ee98f122d464b5b328bc4566d0d2fd5f56bdec6))
* **kernel:** upgrade to version 2.21.0 ([2061849](https://github.com/roomle-dev/web-sdk/commit/206184915dbca1231624219e906dce659f484bbc))
* **kernel:** upgrade to version 2.21.0-alpha.5 ([61cefeb](https://github.com/roomle-dev/web-sdk/commit/61cefeb94b7b0801747b6a2b2c5978dd3bfab8d9))
* **kernel:** upgrade to version 2.21.0-alpha.6 ([227d80c](https://github.com/roomle-dev/web-sdk/commit/227d80c7292d57c1d428be517f69fde4e34709ad))
* **kernel:** upgrade to version 2.21.0-alpha.7 ([a6731ed](https://github.com/roomle-dev/web-sdk/commit/a6731ed5faf532f4aa260dfc3d048006b9b2b3f4))
* **kernel:** upgrade to version 2.21.0-alpha.8 ([44ef486](https://github.com/roomle-dev/web-sdk/commit/44ef486c6f73bde8c307cc019db585aa4293cb13))
* **kernel:** upgrade to version 2.22.0-alpha.1 ([18c526c](https://github.com/roomle-dev/web-sdk/commit/18c526c48115ddc51792a5cad5abc9ef9211e1ae))
* **kernel:** upgrade to version 2.22.0-alpha.2 ([e569d59](https://github.com/roomle-dev/web-sdk/commit/e569d5975b940c3efbb450c84db0ad2d918e182c))
* **kernel:** upgrade to version 2.22.0-alpha.3 ([5be076f](https://github.com/roomle-dev/web-sdk/commit/5be076f6413144e976c7c2be20f3b61113c72668))
* **kernel:** upgrade to version 2.22.0-alpha.4 ([74d468e](https://github.com/roomle-dev/web-sdk/commit/74d468e9b135a2ed1827fd7691423bbb5078b564))
* **kernel:** upgrade to version 2.22.0-alpha.5 ([807fba4](https://github.com/roomle-dev/web-sdk/commit/807fba47512297be66b276ebc826e6af3115559a))
* **kernel:** upgrade to version 2.22.0-alpha.5 ([cdc7a29](https://github.com/roomle-dev/web-sdk/commit/cdc7a29daece76579247bfd8b042be5d3c1a1a73))


### Bug Fixes

* call context ([08f722e](https://github.com/roomle-dev/web-sdk/commit/08f722e6357c2a21c1877ec07cc5f63d169f0971))
* call update to draw the measurements line after switch to 2D ([0482e7e](https://github.com/roomle-dev/web-sdk/commit/0482e7e5d6ccd0c1b09d539b8755608ff9b2cc19))
* changes ([869ca46](https://github.com/roomle-dev/web-sdk/commit/869ca460a6cc5da494c1851d174fe3fe2ee7bfe0))
* correction ([508c69d](https://github.com/roomle-dev/web-sdk/commit/508c69d73b00ab7153d94d1dcb03f242262a8248))
* do not discard parts if backend is too slow ([6b24745](https://github.com/roomle-dev/web-sdk/commit/6b247453af657dc10729ae77016daa750b592480))
* do not update camera panning on release key stroeks ([307ce7c](https://github.com/roomle-dev/web-sdk/commit/307ce7c900610e6728b43207cb8b438fea2473fb))
* **planner:** enable transparency if previews are not visible in configurator ([b017d85](https://github.com/roomle-dev/web-sdk/commit/b017d85c43eb3e7b7da5c3d6c278bc5f2d5c2962))
* expose configuratorContext ([da27a24](https://github.com/roomle-dev/web-sdk/commit/da27a248650292bed2b3636fa631b11527d1d27e))
* feedback changes pt1 ([75ccb01](https://github.com/roomle-dev/web-sdk/commit/75ccb01cc668f5bef06f821765406459ca718881))
* idb man confiStore type ([709c4d1](https://github.com/roomle-dev/web-sdk/commit/709c4d18d93a525f096c90c14620178913915dce))
* implement move camera correctly in planner ([d70f736](https://github.com/roomle-dev/web-sdk/commit/d70f736c0c8b60a5b7f407857b3a9faa927963c6))
* imports ([cb08b58](https://github.com/roomle-dev/web-sdk/commit/cb08b58dd0faf8b2930beb55a23b7c980aeabb5a))
* lint ([0e06f89](https://github.com/roomle-dev/web-sdk/commit/0e06f89a4d0c92164762b57e86ea1c7dd3b1b116))
* **planner:** make component raycast helper optional ([578bd90](https://github.com/roomle-dev/web-sdk/commit/578bd902b7cf801987d7b3895bdc156822f95842))
* move window blur listener ([a319ded](https://github.com/roomle-dev/web-sdk/commit/a319dedc3b27e87480fb5a2e3befa88df2b2a037))
* redo ([6772aa3](https://github.com/roomle-dev/web-sdk/commit/6772aa382704e4dc7219807b17b66cf80102df40))
* render - environment scene light front ([c3b653b](https://github.com/roomle-dev/web-sdk/commit/c3b653b670cc2b4d7349ff6aa232d2f8656c7477))
* renderer - ground reflection back ground color and transparency ([c2d3ff7](https://github.com/roomle-dev/web-sdk/commit/c2d3ff7a87badd10bf5ae081f2f625e194b9e366))
* renderer - use bounding box of geometry instead of bounding box for measurement ([0a8f8a1](https://github.com/roomle-dev/web-sdk/commit/0a8f8a1e7422978a32dcfe9735df5ffcf5d24451))
* reset test ([243f3f7](https://github.com/roomle-dev/web-sdk/commit/243f3f779e737e80d1bd6bb7f8ab8ae7b6e0285d))
* set correct bounds when update and reset camera ([fa9f207](https://github.com/roomle-dev/web-sdk/commit/fa9f2076c929d7fe0e30900bd649c478352eace2))
* show walls on switching to FP ([13b4337](https://github.com/roomle-dev/web-sdk/commit/13b43376414a95c0289c600d06bdf2730b575a4e))
* switch camera behaviour when start configuring/viewing ([859c5bb](https://github.com/roomle-dev/web-sdk/commit/859c5bbad2d6aaeec7c7b2139d3855789d540c05))
* types on idbManager ([8c73a98](https://github.com/roomle-dev/web-sdk/commit/8c73a98d6464b3c65fccc9d04b6135359e2e57b7))
* update the render cache if the properties of the object have changed ([23a0f3a](https://github.com/roomle-dev/web-sdk/commit/23a0f3a6606201ee384f152374ae995644e49443))

## [2.69.0](https://github.com/roomle-dev/web-sdk/compare/v2.68.0...v2.69.0) (2024-01-30)


### Features

* Disable camera tween if e2e flag is set ([62dd09f](https://github.com/roomle-dev/web-sdk/commit/62dd09f0fade252d4a3771f2ac6ef3f30e624d17))


### Bug Fixes

* remove lerp when e2e flag is set ([ba33eae](https://github.com/roomle-dev/web-sdk/commit/ba33eaeadd3edfd3f162bec4638b19f8044a8424))

## [2.68.0](https://github.com/roomle-dev/web-sdk/compare/v2.67.0...v2.68.0) (2024-01-30)


### Features

* 2D Implement object to wall measurements ([f4a410e](https://github.com/roomle-dev/web-sdk/commit/f4a410e10403f49ce1ce2d0e16e3e8621971651a))
* 2D implement objects measurements ([fbf42b7](https://github.com/roomle-dev/web-sdk/commit/fbf42b7cc0d217eae59090f163738f92fd9a1a6f))
* add eslint plugin to npm ([d32d4f2](https://github.com/roomle-dev/web-sdk/commit/d32d4f22df37824528744e83eb80c9ffb624ae0c))
* rapi material v2 properties ([b5dc347](https://github.com/roomle-dev/web-sdk/commit/b5dc3474d12077ac5bc89110c1e46c2ba1089732))
* release eslint plugin as well ([60249e3](https://github.com/roomle-dev/web-sdk/commit/60249e37775dd41adc5a129e15e51112d86a05ca))
* renderer - material v2 change attributes ([0aad706](https://github.com/roomle-dev/web-sdk/commit/0aad70651cbdb931e89f3daeb208799d3e9d55e2))
* renderer - material v2 mapping ([d234f4d](https://github.com/roomle-dev/web-sdk/commit/d234f4defd78a87115b8ebd60a63805f58e7edee))
* renderer - scene shading settings ([19a95d8](https://github.com/roomle-dev/web-sdk/commit/19a95d85db5948c69ee3bdf2bfdd224e98abed66))
* ruse latest core configuration in getObjects ([595cfb9](https://github.com/roomle-dev/web-sdk/commit/595cfb9e082b90f58e14ef0242e2d1b83e03b3ac))
* **kernel:** upgrade to version 2.20.0 ([ae25397](https://github.com/roomle-dev/web-sdk/commit/ae25397b8ed2f182f16a989ab77434f893aeed67))
* **kernel:** upgrade to version 2.21.0-alpha.1 ([45e98c8](https://github.com/roomle-dev/web-sdk/commit/45e98c86d2b6fac00977f012a9f99f9505fdcdc4))
* **kernel:** upgrade to version 2.21.0-alpha.2 ([6c68bd3](https://github.com/roomle-dev/web-sdk/commit/6c68bd3ed8985b8e37708dc6c00a4701340a562b))
* **kernel:** upgrade to version 2.21.0-alpha.3 ([3d08379](https://github.com/roomle-dev/web-sdk/commit/3d08379bd95e5d29ace25fc29b9b4a76c8acacdf))
* **kernel:** upgrade to version 2.21.0-alpha.4 ([59573c0](https://github.com/roomle-dev/web-sdk/commit/59573c0fff38250ad676b98b0dd59009612c0a4d))
* write an eslint plugin to check our init-data docs ([e8f10d4](https://github.com/roomle-dev/web-sdk/commit/e8f10d4a582fef12b4a520c4f9d97c796cd22e97))


### Bug Fixes

* also release eslint-plugin when we release a new sdk ([179bc08](https://github.com/roomle-dev/web-sdk/commit/179bc0882631628637457860722b3d25d5b65357))
* disable highlighting and selection in first person mode ([d9bd8a4](https://github.com/roomle-dev/web-sdk/commit/d9bd8a47cd1464bfb84d480dd7600f507ef97648))
* do not remove all the node packages that are under the [@roomle](https://github.com/roomle) organization only delete web-sdk, because web-sdk is built in the PR ([b1b3798](https://github.com/roomle-dev/web-sdk/commit/b1b3798dd65501721ce8efacda069b34e0c704cb))
* improve front scene light ([3237205](https://github.com/roomle-dev/web-sdk/commit/32372054c36b0e5798d2f431f1dae7d1ab466100))
* just always set to 30 ([b5c657d](https://github.com/roomle-dev/web-sdk/commit/b5c657d8f5d954592468c084cae406a7f4960d22))
* lint ([b5b7260](https://github.com/roomle-dev/web-sdk/commit/b5b726017cd0bba279aab6633f1f1e0cabb362e2))
* merge conflicts ([bebd14b](https://github.com/roomle-dev/web-sdk/commit/bebd14b974e3b1d7def2b29930f8ccef28affe33))
* planner TC export request ([7e15e8e](https://github.com/roomle-dev/web-sdk/commit/7e15e8e9ca48e670b94f4f915e29a9c63761efe0))
* remove uneeded check ([7c5beda](https://github.com/roomle-dev/web-sdk/commit/7c5bedac931272a134c23f106fe95e3e641f1d11))
* remove uneeded code, fix fov switch ([ebbf368](https://github.com/roomle-dev/web-sdk/commit/ebbf36814b5916b908167dab1a20aea943442b96))
* renderer - disable shadow ground boundary for legacy light ([e640bb4](https://github.com/roomle-dev/web-sdk/commit/e640bb4b7048b5795b15a529aadc9828664627ed))
* renderer - take into account the ground level for the bounding box of the scene ([717bd8d](https://github.com/roomle-dev/web-sdk/commit/717bd8d6f0e2e9f8c4bb705aa817759089a74b28))
* Select floor have a move mouse cursor while it is not dragable ([3ac1393](https://github.com/roomle-dev/web-sdk/commit/3ac1393c2b32dd415a4a443a9e8230d1ea7fd938))
* type import ([b8f5277](https://github.com/roomle-dev/web-sdk/commit/b8f527750f5fab521ee587fde7390c630d26c7a0))
* undo on delete ([728c749](https://github.com/roomle-dev/web-sdk/commit/728c749a4b946ed08992cba8ae2f5dea20e19ec7))
* update of IlluminationBufferMaterial ([3ca704e](https://github.com/roomle-dev/web-sdk/commit/3ca704e420e19204d859212bc73a69cfae2db9c5))
* use correct eslint config ([09fa69f](https://github.com/roomle-dev/web-sdk/commit/09fa69f06ddcdb6a3ec3e1a8ad697c6413e88418))
* working camera mode fp on initi ([1233353](https://github.com/roomle-dev/web-sdk/commit/12333533ceac86eadc6bf46c1e3cbb7ac8561975))
* working init camera mode ([b574c91](https://github.com/roomle-dev/web-sdk/commit/b574c91d26c5de6671b57a5aee0f7878b11e7c25))

## [2.67.0](https://github.com/roomle-dev/web-sdk/compare/v2.66.0...v2.67.0) (2024-01-16)


### Features

* **kernel:** upgrade to version 2.19.0 ([bff4db6](https://github.com/roomle-dev/web-sdk/commit/bff4db6f8e0ed7961434164dd20cf0cf583c6c1a))
* **kernel:** upgrade to version 2.20.0-alpha.2 ([ab535dd](https://github.com/roomle-dev/web-sdk/commit/ab535dd3b438760767ecce2f35b8533208070485))
* **kernel:** upgrade to version 2.20.0-alpha.3 ([476b11f](https://github.com/roomle-dev/web-sdk/commit/476b11fcf2beb6643f0cc69a88190a39d00efa32))


### Bug Fixes

* always denoise generated shadows, regardless of the quality settings ([f0fd49a](https://github.com/roomle-dev/web-sdk/commit/f0fd49a97ea949504b48f3940d72dbcf44d21022))

## [2.66.0](https://github.com/roomle-dev/web-sdk/compare/v2.65.0...v2.66.0) (2023-12-19)


### Features

* front scene light ([dc5b5bc](https://github.com/roomle-dev/web-sdk/commit/dc5b5bc35b99830a6108277288c893418233d435))
* update three.js to version 159 ([7232240](https://github.com/roomle-dev/web-sdk/commit/723224007616cdbdafde2998fbba9c10b3b854f2))
* **kernel:** upgrade to version 2.18.0 ([c683ebf](https://github.com/roomle-dev/web-sdk/commit/c683ebf0fdfcf8ef6a53181ac5bfabaf9e5e6cdc))
* **kernel:** upgrade to version 2.19.0-alpha.1 ([dcda3c0](https://github.com/roomle-dev/web-sdk/commit/dcda3c0b20492f9e98d44d3c93a772ec35bcc8d7))


### Bug Fixes

* render - correct detection of the intensity of the light source ([b7b9bb0](https://github.com/roomle-dev/web-sdk/commit/b7b9bb0d3a00cb96e3ff85df0c2420782d751ee9))
* shader compile error, if maxLightSources == 0 ([6eb8b20](https://github.com/roomle-dev/web-sdk/commit/6eb8b200dafa64b3c6912addf656d25465c9b3e5))
* try to anticipate key up and key down things ([d0a678f](https://github.com/roomle-dev/web-sdk/commit/d0a678f77d0b5fa733bc48b692f5f7e8aaa94acf))

## [2.65.0](https://github.com/roomle-dev/web-sdk/compare/v2.64.0...v2.65.0) (2023-12-05)


### Features

* dispatch multi select change to UI so that it can react to CMD etc ([9cd6e81](https://github.com/roomle-dev/web-sdk/commit/9cd6e8109c7ca0b87dc1192c461733ccd3f33fe8))
* improved Poisson-Denoising ([8dd5b64](https://github.com/roomle-dev/web-sdk/commit/8dd5b641032f929da274aa786869556e52fc4cd0))
* new argument "pendingDocking in "planObjectConfigurationUpdated" kernel callback ([7d41dab](https://github.com/roomle-dev/web-sdk/commit/7d41dabcabda812403c3e766463c6b24b4eb4e59))
* progressive AO and shadow denoising ([bbf1ceb](https://github.com/roomle-dev/web-sdk/commit/bbf1cebf00f3b9a646ab4016efbfb17f0f1ebd8e))
* Show measurements for doors&windows in 2D ([73a3ec8](https://github.com/roomle-dev/web-sdk/commit/73a3ec80130b7f56c1f8df8c39227642247c7100))
* **kernel:** upgrade to version 2.17.1-alpha.1 ([3bfe445](https://github.com/roomle-dev/web-sdk/commit/3bfe445215f5222aac591336f5605a363f14c45b))
* **kernel:** upgrade to version 2.17.1-alpha.2 ([79e0ddc](https://github.com/roomle-dev/web-sdk/commit/79e0ddc800c2fc1717d94dbdda8fdefa8304f5b0))
* **kernel:** upgrade to version 2.18.0-alpha.1 ([cb3c560](https://github.com/roomle-dev/web-sdk/commit/cb3c560b6486918637248b113c9627012cc930dd))
* **kernel:** upgrade to version 2.18.0-alpha.2 ([2c725c1](https://github.com/roomle-dev/web-sdk/commit/2c725c1e9a02fbc6434e69a145ebf4af26da738e))


### Bug Fixes

* do not add plan object configuration to history when docking requests are pending ([b856034](https://github.com/roomle-dev/web-sdk/commit/b856034f61fbc5a40b0aa45963873bef8ab78610))
* draw baked ground contact shadow only when enabled ([aea0a0a](https://github.com/roomle-dev/web-sdk/commit/aea0a0afe09da161ecde93912a55bfca09b8e395))
* **planner:** enable all layers for camera when in 2d ([f068d82](https://github.com/roomle-dev/web-sdk/commit/f068d8203c3a54265eb5d737a813f16c1dd75863))
* **planner:** hide walls before rendering perspective image when in 2d mode ([59faeef](https://github.com/roomle-dev/web-sdk/commit/59faeefe4b5d49772cbb7dd8b4eb83b4ad24646e))
* increase shadow plane size to 40 meters ([6fbf985](https://github.com/roomle-dev/web-sdk/commit/6fbf9856c2d49b1c220cdf6a782dbb70bcaa61c7))
* shadow on ground ([f5d3f35](https://github.com/roomle-dev/web-sdk/commit/f5d3f3510e2d22451420c1b9a29061247c1e8373))
* updated render cache material if the material of a mesh has been changed ([72299e3](https://github.com/roomle-dev/web-sdk/commit/72299e39aebb36ba6d44cdfe2b3eb457f241b737))


### Reverts

* Merge pull request [#335](https://github.com/roomle-dev/web-sdk/issues/335) from roomle-dev/refactor/render-cache ([bbf555f](https://github.com/roomle-dev/web-sdk/commit/bbf555fa0262ab7264b1e544e2698128b49f6a23))

## [2.64.0](https://github.com/roomle-dev/web-sdk/compare/v2.63.0...v2.64.0) (2023-11-21)


### Features

* "sceneLight" parameter ([2d620ac](https://github.com/roomle-dev/web-sdk/commit/2d620acde5e2d899017946eb3c569de2faff8e99))
* add a method to prepare a perspective image of a runtime id ([479cfe9](https://github.com/roomle-dev/web-sdk/commit/479cfe90086dc87c175a73f3778659baaf716cae))
* Add HBAO and Poisson-Denoise Shader from three.js (will be removed again with the update to three.js 159) ([def714f](https://github.com/roomle-dev/web-sdk/commit/def714f9ec62903b10d1a675bace04aa5344c71c))
* **planner:** add paper background to 2d mode ([2f7727a](https://github.com/roomle-dev/web-sdk/commit/2f7727a3999b96b662c49bc4b0358c1702b5b814))
* adjust environment scene defaults ([e1c9a6c](https://github.com/roomle-dev/web-sdk/commit/e1c9a6cc4af15afd147e7391c258356aa1fe511e))
* completely get rid of "realism-effects" pacakge ([c166b1e](https://github.com/roomle-dev/web-sdk/commit/c166b1e6440754c81d65403f15e02d2089416dc7))
* configurable environment map from the scene ([b8221e7](https://github.com/roomle-dev/web-sdk/commit/b8221e7dd02ea8017d2055119b2abfeee2bd881a))
* HABO settings for MOC ([2679aa9](https://github.com/roomle-dev/web-sdk/commit/2679aa91342bc4bb62b45aaef92e71485059a804))
* HBAO and Poisson-Denoise pass ([4292735](https://github.com/roomle-dev/web-sdk/commit/429273591c04bb3c0cb171d944921fd1c7593685))
* HBAO debug ui ([ceeb08c](https://github.com/roomle-dev/web-sdk/commit/ceeb08cbec2f27d345c966f1a439528715a7069c))
* improving the distribution of the AO noise rotation vectors ([02efeb0](https://github.com/roomle-dev/web-sdk/commit/02efeb006f38543dbbab88ec7862a3030eb27f3b))
* property "maxNoOfLightSources" in "EnvironmentDefinition" ([dd172fd](https://github.com/roomle-dev/web-sdk/commit/dd172fd06cc894ea3f19b6c26325e2b75fc1cc16))
* remove realism-effects SSAO from debug menu ([e958b17](https://github.com/roomle-dev/web-sdk/commit/e958b174a9c18cc61281ead2a323b15251998c55))
* replace realism effect's HABOand Poisson-Denoiser with three.js HABO and Poisson-Denoiser ([1051599](https://github.com/roomle-dev/web-sdk/commit/10515997b0ac79358d6e627311020ca5d984147e))
* SSAO anti aliasing - interpolation of the depth together with the normal vector ([7489c91](https://github.com/roomle-dev/web-sdk/commit/7489c915f083311bc77b572132da9d663378725e))
* three.js HBAO and Poisson-Denoise Shader patch (will be removed with the update to three.js 159) ([f11d2fd](https://github.com/roomle-dev/web-sdk/commit/f11d2fd92b6d3904300c160e104a7cfaac8455fb))
* update three.js to version 156 ([48c7ddb](https://github.com/roomle-dev/web-sdk/commit/48c7ddb7be427f34034fdba1b7586c91893eacf3))
* update three.js to version 157 ([0381888](https://github.com/roomle-dev/web-sdk/commit/0381888850221645eb632ebf875d187700d76f8d))
* update three.js to version 158 ([28fd0bf](https://github.com/roomle-dev/web-sdk/commit/28fd0bfa4f382497e43e9e2aa0f8046c63a38c2b))
* **kernel:** upgrade to version 2.17.0-alpha.2 ([5827928](https://github.com/roomle-dev/web-sdk/commit/5827928d19aea2f56e4f183ca431fe21a6177eb3))
* **kernel:** upgrade to version 2.17.0-alpha.3 ([#346](https://github.com/roomle-dev/web-sdk/issues/346)) ([b3b2023](https://github.com/roomle-dev/web-sdk/commit/b3b2023f6bdb699104c51941a34d9b5bd48658b5))


### Bug Fixes

* add mocks to not break the test ([7db0147](https://github.com/roomle-dev/web-sdk/commit/7db0147575d1bba3e2c13e0917fb2b755cb5a70f))
* cleanup, test ([3c078a1](https://github.com/roomle-dev/web-sdk/commit/3c078a16119df309e1bb62e73032f0b800cd47a8))
* **planner:** clone the camera to keep FOV after rendering ([9febaaa](https://github.com/roomle-dev/web-sdk/commit/9febaaae75c93d7c8a2ba991b674ea5d0c54acea))
* correct tooltip types ([7921c7f](https://github.com/roomle-dev/web-sdk/commit/7921c7f59786f067953668cac2d725b53c249813))
* poisson denoiser and habo noise texture ([86706d9](https://github.com/roomle-dev/web-sdk/commit/86706d9aed65935d6f8e060002a171a8dbfd1210))
* **planner:** remove old hack which caused jumping walls ([c58ede1](https://github.com/roomle-dev/web-sdk/commit/c58ede1f5c855617c0e0a9cef07f96323ddfd7b8))
* **planner:** set layer background for paper background ([504a7ab](https://github.com/roomle-dev/web-sdk/commit/504a7abe2f3db3d5ff7b0a729ccb8f45bee33e34))
* set paper background after we stop rendering to avoid black background ([b880552](https://github.com/roomle-dev/web-sdk/commit/b880552fe69546b0e31b034ae77468887799c64d))
* **planner:** set start and end interaction for wall drawing ([ad6759d](https://github.com/roomle-dev/web-sdk/commit/ad6759df46d39b0ce0b842868d31af26a1ac4ecc))
* update tooltip rapi type ([b951c62](https://github.com/roomle-dev/web-sdk/commit/b951c62397f9b1f09ce1238b542178da09c948b2))

## [2.63.0](https://github.com/roomle-dev/web-sdk/compare/v2.62.0...v2.63.0) (2023-11-09)


### Features

* **kernel:** upgrade to version 2.16.0 ([5a95e7a](https://github.com/roomle-dev/web-sdk/commit/5a95e7aa4f7406df0daf24270530c68c6bdc887a))


### Bug Fixes

* clear render cache after change of material ([21e644f](https://github.com/roomle-dev/web-sdk/commit/21e644f0aa899deea7cb341ddf4d9e0c0fbea972))

## [2.62.0](https://github.com/roomle-dev/web-sdk/compare/v2.61.0...v2.62.0) (2023-11-07)


### Features

* add e2e flag to disable post processing for end-to-end tests ([dbe081d](https://github.com/roomle-dev/web-sdk/commit/dbe081d6eabec43ed3f9d64573fafa14b0f98728))
* add env map rotation as URL param ([bd771be](https://github.com/roomle-dev/web-sdk/commit/bd771bec02b076ce796eeafe4b7ad013b645ae83))
* add flag for highlighting ([67e4526](https://github.com/roomle-dev/web-sdk/commit/67e4526f2028eba611a3aa08536126a11a019fd4))
* AO limiting and fading depending on the bounding box of the scene ([e78c22d](https://github.com/roomle-dev/web-sdk/commit/e78c22d2a9a40aeb9b55fbc721d3d7bdd1741eaa))
* attempt to antialias the normal vector in the AO pass ([fa8acbe](https://github.com/roomle-dev/web-sdk/commit/fa8acbe0ea053a4e15944eff101f02e7a3af9ae5))
* automatic detection of light sources from the environment map in renderer ([f87b810](https://github.com/roomle-dev/web-sdk/commit/f87b810100e83d49d7e22334bd19376bf3508a01))
* disable antialiasing for web gl renderer when e2e is enabled ([8ff4f47](https://github.com/roomle-dev/web-sdk/commit/8ff4f478c39ede7c723b7d62db31d785ba314a08))
* new API to set env map params (url, intensity, rotation, lights) ([bfc1686](https://github.com/roomle-dev/web-sdk/commit/bfc168661af599b7508a34593230d82c27a9dae3))
* pmrem generator with rotation and intensity and light source detection debug pass ([7c28ea7](https://github.com/roomle-dev/web-sdk/commit/7c28ea757e37915558a46c91bd1618f7a86f63a7))
* render shadow maps only when shadow has changed ([4200696](https://github.com/roomle-dev/web-sdk/commit/4200696455a873aa5330e0f9af9301871ebc60c6))
* shadow - directional dependency exponent ([52f2b54](https://github.com/roomle-dev/web-sdk/commit/52f2b5477ec110115512d4425a98f22246021c9d))
* shadow ground containment ([ee8b9f8](https://github.com/roomle-dev/web-sdk/commit/ee8b9f83617f5b031d1b48d48c0e4e179d0ef634))
* **kernel:** upgrade to version 2.16.0-alpha.1 ([c3f8285](https://github.com/roomle-dev/web-sdk/commit/c3f828512a78457ede9f96a38209556a15d05dc2))
* **kernel:** upgrade to version 2.16.0-alpha.2 ([28c63cf](https://github.com/roomle-dev/web-sdk/commit/28c63cf8614fc0444a615ccb059c42cf07305831))
* use e2e rendering for perspective images ([8568afe](https://github.com/roomle-dev/web-sdk/commit/8568afe856a7db2ce9a4abf49d214a400c7894bd))


### Bug Fixes

* "Pan scene" vs select is very unintuitive and has a bad UX ([acf93b1](https://github.com/roomle-dev/web-sdk/commit/acf93b10c6d164f495c6d273b2b25306e976a498))
* baked ground contact shadow resolution and maximum plane size ([4303066](https://github.com/roomle-dev/web-sdk/commit/43030664140d41b690ea64b9ddafb2e632974688))
* can't draw on mobile ([eeec1e9](https://github.com/roomle-dev/web-sdk/commit/eeec1e920fc556cb75451d8075c989b0556c539c))
* clear cache when updated of shadow is forced ([f56899c](https://github.com/roomle-dev/web-sdk/commit/f56899c2fb23dda6c4e11bb7d4c08bb4a094e617))
* **planner:** fix the docking in configurator when starting planner in 2d ([f867ee9](https://github.com/roomle-dev/web-sdk/commit/f867ee93a31433e408f4081d1a7e908c59fddaea))
* Measurements are shown too long ([4d70367](https://github.com/roomle-dev/web-sdk/commit/4d7036785e77bd907404dea1561066e8bb348250))
* merge conflicts ([be2584d](https://github.com/roomle-dev/web-sdk/commit/be2584df62c3aa0701bc3d9a8d04ac7329ad15d6))
* move around ([e4dd87b](https://github.com/roomle-dev/web-sdk/commit/e4dd87b064121662951bcc88fbabfb3725b68ec6))
* Re-enable setting hex values as colours ([2e0a7d0](https://github.com/roomle-dev/web-sdk/commit/2e0a7d078852f4def9dd552fac936966cf75f92a))
* remove planner related stuff ([ce3bd26](https://github.com/roomle-dev/web-sdk/commit/ce3bd26b905525cecb0d2a013af4f535460f44b9))
* set vector z to 0 so multi selected items dont climb when moving into a wall ([fe5f853](https://github.com/roomle-dev/web-sdk/commit/fe5f853ce24eaacd3d00edc45c13a3cf1cf93e44))
* Switch product removes the product on mobile ([ee3c01c](https://github.com/roomle-dev/web-sdk/commit/ee3c01c70c754ec40335cdef80b36e3ab82b87f2))
* unselect plan elements before switching to configurator ([2f03af8](https://github.com/roomle-dev/web-sdk/commit/2f03af86289c193d6fe44d22a5ac2ce05ba39930))
* unset after render function when no camera offset exists ([0b05573](https://github.com/roomle-dev/web-sdk/commit/0b055733c18979c22c5321d1a512bb5bd93be799))
* Z-fighting of preview geometry, if new geometry is to replace existing geometry ([7c014fe](https://github.com/roomle-dev/web-sdk/commit/7c014feaf51932687e632724f15d06f1a90b22c4))

## [2.61.0](https://github.com/roomle-dev/web-sdk/compare/v2.60.0...v2.61.0) (2023-10-24)


### Features

* improve shadow quality - less shadow on the ground and directional dependency ([0bce0a5](https://github.com/roomle-dev/web-sdk/commit/0bce0a5f22d2a182ce869bbdac86383126183462))
* prevent blurry edges in rendering - tweak Poisson denoising settings ([84b1902](https://github.com/roomle-dev/web-sdk/commit/84b1902c40ee95a8312a25935a03fdbcf30c5b05))
* **kernel:** upgrade to version 2.14.0 ([af27a30](https://github.com/roomle-dev/web-sdk/commit/af27a3014866b1ccc6a23564fe926ff9f72cd064))
* **kernel:** upgrade to version 2.14.0-alpha.10 ([c1c2764](https://github.com/roomle-dev/web-sdk/commit/c1c276406dfe2cb80d16fd870131c2bad845f690))
* **kernel:** upgrade to version 2.15.0-alpha.2 ([8cdbf4b](https://github.com/roomle-dev/web-sdk/commit/8cdbf4bbd1550d5f68a709749e49d1aca70759b7))
* **kernel:** upgrade to version 2.15.0-alpha.3 ([04961b1](https://github.com/roomle-dev/web-sdk/commit/04961b1e6e3309bc364f43e0cefffe32d5eaf1c4))


### Bug Fixes

*  no AO for materials where the alpha test is activated ([cb09a7c](https://github.com/roomle-dev/web-sdk/commit/cb09a7ca37075bbc1a24df0a4f3e45a67263d0d3))
* calculate AO on transparent objects that are at least 70% opaque ([cf59d88](https://github.com/roomle-dev/web-sdk/commit/cf59d889f22674c6a35a449e490500c1b71e71b8))
* do not create a new group object for every single fraction of the object rotation ([2835c1f](https://github.com/roomle-dev/web-sdk/commit/2835c1ff861318922e6a4d0ee4f7974e5ab02711))
* dynamic reduction of ground reflection for small objects (1m threshold) ([064cb86](https://github.com/roomle-dev/web-sdk/commit/064cb8655b2eb7e2574c7f310235ee202f500f73))
* empty shadow map in the first rendering pass ([6c6878b](https://github.com/roomle-dev/web-sdk/commit/6c6878b0579a24ec1d240f0d0f27674642e3efe0))
* fix failing test ([eee5c1f](https://github.com/roomle-dev/web-sdk/commit/eee5c1f7ec3c5dcd4e06c62be75856bf0c6a6a6d))
* flip autoQuality to false on default ([150fafb](https://github.com/roomle-dev/web-sdk/commit/150fafb1661b02e7754b7e02f179e41218a4a18c))
* ground reflection - vertical bias for compensation of aliasing ([1cf5020](https://github.com/roomle-dev/web-sdk/commit/1cf502069ed395a3bfe128cac82935ff46be895f))
* hide measurements for invisible walls ([af61b76](https://github.com/roomle-dev/web-sdk/commit/af61b76afa475cdb1166a8a8290c667d23e0fdac))
* individual Poisson denoising settings for HBAO ([c91c646](https://github.com/roomle-dev/web-sdk/commit/c91c6464c86e89a1a2fbbad07716b5c0d1bffddb))
* reduce emission to 50% ([235e577](https://github.com/roomle-dev/web-sdk/commit/235e577dc4eb4258ccde45e01e099519a4cbb446))
* shadow map materials ([409d635](https://github.com/roomle-dev/web-sdk/commit/409d635e7ee2d6f4c870e51ff768e6199dd359bc))
* treat a material as emissive if it has a texture with an alpha channel and the substring "glow" in its name (legacy handling) ([e4113ef](https://github.com/roomle-dev/web-sdk/commit/e4113efd7ac814e990063e5ebc5413bafed07613))

## [2.60.0](https://github.com/roomle-dev/web-sdk/compare/v2.59.0...v2.60.0) (2023-10-10)


### Features

* activate the Core mode, which only sends update callbacks when the geoemtry is read ([0b69678](https://github.com/roomle-dev/web-sdk/commit/0b696788f3c33c387c0edbf8b79c20adaa98e195))
* add auto quality (only down) for new renderer ([50974f2](https://github.com/roomle-dev/web-sdk/commit/50974f2abc88505bea2dae483c37aee3fc3120fa))
* add ground projection environment and env map intensity ([6506b91](https://github.com/roomle-dev/web-sdk/commit/6506b9168c711793a62921b3612ecaa3b5e99305))
* add hdr env loader with support for hdr and exr files ([6886d67](https://github.com/roomle-dev/web-sdk/commit/6886d67c8ea15b8f75e61121a7b99cc5ecce3b03))
* **configurator:** add legacyLight flag to switch to legacy lightsettings ([93bc9d8](https://github.com/roomle-dev/web-sdk/commit/93bc9d8514f2ac6282b6610cc20677201ba15e4e))
* added postprocessing module ([2e410b0](https://github.com/roomle-dev/web-sdk/commit/2e410b0da168a812801cf038c1fbd25cb032121d))
* added submodule repository https://github.com/0beqz/realism-effects ([428a878](https://github.com/roomle-dev/web-sdk/commit/428a8780aafc088cf019c61472cdc3bf959c9913))
* adjust wall measurements padding according to camera  zoom factor ([2bd8f9a](https://github.com/roomle-dev/web-sdk/commit/2bd8f9abedfbdf5a3bc7e22719630e1b73e82c56))
* baked ground contact shadow debug pass ([8fb6452](https://github.com/roomle-dev/web-sdk/commit/8fb6452c393a366d276b3a55e41ce1fb35d64edc))
* baked ground contact shadow parameters ([63d688d](https://github.com/roomle-dev/web-sdk/commit/63d688d1eb93811fc4b4c8db5dcd6f0e8c3b21be))
* BO-MVP export interfaces ([16c5cfe](https://github.com/roomle-dev/web-sdk/commit/16c5cfee5bb2f7470063c445f5e869f450c52ce0))
* callback, enable func, deselection, hover logic ([6c521b7](https://github.com/roomle-dev/web-sdk/commit/6c521b7c1267b39418ac13ef2ec3acb62a3b2330))
* combined shadow and ao classes ([9fd626d](https://github.com/roomle-dev/web-sdk/commit/9fd626db69e113dd727eb64260f64f8319f87fb2))
* configurator - enable shadow on ground, disable baked ground contact shadow ([c55a8a1](https://github.com/roomle-dev/web-sdk/commit/c55a8a1c3d847564e67313e7ad1d397ecf32dff3))
* create duplicated object at free position in plan ([95c40e3](https://github.com/roomle-dev/web-sdk/commit/95c40e3118c7e082d641c3740f0e7609bf82355f))
* create script to auto merge trivial conflicts ([aafd860](https://github.com/roomle-dev/web-sdk/commit/aafd860e9e669c2e7728a7f205bbc4e03a0f6e25))
* create shadow and light from environment ([6589faf](https://github.com/roomle-dev/web-sdk/commit/6589faf562322c255f61898c6b1bea4e275e2d9b))
* dat.GUI ([849bc66](https://github.com/roomle-dev/web-sdk/commit/849bc66107413b426a22a4535593178666d6956c))
* do not include transparent materials in g-buffer (no AO on transparent materials) ([b85c1c6](https://github.com/roomle-dev/web-sdk/commit/b85c1c6f111cedac01e10205329b81bcadd58872))
* duplicate items method ([9282990](https://github.com/roomle-dev/web-sdk/commit/9282990845133a357bc713c59e76482484a0d932))
* dynamic adjustment of the near and far plane of the perspective camera ([ffbf705](https://github.com/roomle-dev/web-sdk/commit/ffbf705f0524863a6e5dde5e8f33108f32a15734))
* dynamic and progressive ground contact shadow ([a213735](https://github.com/roomle-dev/web-sdk/commit/a213735cad30f767b721993cae400dac091b0231))
* dynamic and progressive ground contact shadow opacity ([a633f60](https://github.com/roomle-dev/web-sdk/commit/a633f603c98b209a34419d07733fa224e04c850e))
* dynamic quality settings ([d011468](https://github.com/roomle-dev/web-sdk/commit/d0114689c142086a230665bae1e186a6fb1e090f))
* enable multiSelect function for planner ([34371b6](https://github.com/roomle-dev/web-sdk/commit/34371b69a139b3cf97a52e3d4f2c4849494508d4))
* environment map light detector ([f7a0c60](https://github.com/roomle-dev/web-sdk/commit/f7a0c60d88e3c32ab686c200fb45664f7ce82adf))
* fade out and blur of shadow on the ground ([6b16280](https://github.com/roomle-dev/web-sdk/commit/6b1628073ee371e22fd41806806e1c3774204b00))
* ground contact shadow ([39bfff5](https://github.com/roomle-dev/web-sdk/commit/39bfff505019edca8182dcbeb8b95feb356b7358))
* ground reflection (configurator) ([1e5dca6](https://github.com/roomle-dev/web-sdk/commit/1e5dca6054285eda69ac1ec78b546d20fbf3b4bd))
* ground shadow paramerters ([feab05c](https://github.com/roomle-dev/web-sdk/commit/feab05cff954c03734b01be59dc6655a26434f2f))
* handling of invalid external networks ([5835271](https://github.com/roomle-dev/web-sdk/commit/583527194a43a64aac509d15abca5b1eb113d661))
* hard shadow and Poisson denoising on camera move ([a250314](https://github.com/roomle-dev/web-sdk/commit/a250314c9a76cffd09d0892b31cafbb07dc039eb))
* hard shadow when changing camera ([cf86962](https://github.com/roomle-dev/web-sdk/commit/cf86962eb2e3ba37291481d54e9a5f527d003908))
* improve auto quality fps calculation ([ec9f34b](https://github.com/roomle-dev/web-sdk/commit/ec9f34b8d13090311be8e791cd3bb65c8ad3c13d))
* MOC disable AO and soft shadow (for now) ([d4db114](https://github.com/roomle-dev/web-sdk/commit/d4db114cd7c6e546f1fd56c7874344c9f7d2092b))
* model size dependent shadow normal bias and ssao ([ed23e74](https://github.com/roomle-dev/web-sdk/commit/ed23e74198b2633978614c0c9ec88ffef357378d))
* multi sample g-buffer (only WebGL 2.0): RGB = normal vector; Alpha = depth ([454a33e](https://github.com/roomle-dev/web-sdk/commit/454a33ee5d17942fae706c4bb3931987c83d28fa))
* No multisample AO - unnecessary due to Poisson denoising ([92350e7](https://github.com/roomle-dev/web-sdk/commit/92350e757083b7ce22cb5dbc101b3efde261be94))
* optimize SSAO settings ([691998a](https://github.com/roomle-dev/web-sdk/commit/691998a48bad812a8ad052ad2d9d7e4d4e1d5ed8))
* outline anti aliasing - mask buffer FXAA ([0e28f7c](https://github.com/roomle-dev/web-sdk/commit/0e28f7cc075ad6bad3485290fc734980afbb6dca))
* outline pass ([903d912](https://github.com/roomle-dev/web-sdk/commit/903d912600667f2234bd7ef3f792b84b8e7fc692))
* outline pass without downscaling ([bf92e1e](https://github.com/roomle-dev/web-sdk/commit/bf92e1e99aeb5cbb209cb8fde72e0375beadf664))
* outline renderer class ([5669a08](https://github.com/roomle-dev/web-sdk/commit/5669a0816cbc7da3d21cedd8c4352482ff7d473d))
* outline settings ([77c577f](https://github.com/roomle-dev/web-sdk/commit/77c577fb3795eed5d82c79901ee00739a0a8cc33))
* planner-dummy "Show GUI" ([f52ef5d](https://github.com/roomle-dev/web-sdk/commit/f52ef5dde3f13de167e7f7ecdfdff6e54c372fcc))
* Poission denoise pass ([92d487d](https://github.com/roomle-dev/web-sdk/commit/92d487dcf83c10f28c2b1fd63821a133ea1a0ebc))
* preload smaller default environment map ([1f757b3](https://github.com/roomle-dev/web-sdk/commit/1f757b3e4f5fcf7b5ae7dac254bc59c0c8447ce4))
* RectAreaLight progressive shadow (not activated yet) ([d8259d3](https://github.com/roomle-dev/web-sdk/commit/d8259d3885a5d783b9ac3b8915632cd0479725cd))
* renderer compatibility for transmissive materials ([19cfb93](https://github.com/roomle-dev/web-sdk/commit/19cfb93b9528490817605dc85ba4e85747a75665))
* RML-6985 don't fade in baked ground contact shadow ([d349d87](https://github.com/roomle-dev/web-sdk/commit/d349d8769d30eeb1a9b4b16b6ac7759955771ec4))
* scale ground reflection for small geometry ([a6e985b](https://github.com/roomle-dev/web-sdk/commit/a6e985bf736d797a47c10357e1f3de648adad85c))
* scene renderer class ([65d06f4](https://github.com/roomle-dev/web-sdk/commit/65d06f4c0bbb9ef2abd0fbe104fa2d47a6c964ce))
* screen space ambient occlusion ([282b90d](https://github.com/roomle-dev/web-sdk/commit/282b90dfbf02d69706931197739efa68d1ee35c3))
* separate renderer quality levels for configurator and planner ([612f8f5](https://github.com/roomle-dev/web-sdk/commit/612f8f50ac57bb7d67200926aaa099e9690b4ab5))
* set legacy light env map intensity to 0.9 ([bacf6e1](https://github.com/roomle-dev/web-sdk/commit/bacf6e15810505f42ee915a23b6f27970dca1498))
* shadow ([a95973e](https://github.com/roomle-dev/web-sdk/commit/a95973eeb3d467770f9d790b176acd69d90ae2b5))
* shadow and ao fade in ([3d5f70d](https://github.com/roomle-dev/web-sdk/commit/3d5f70d7c67a5e29dc8618f2f43b8daee20ff181))
* shadow and ssao settings ([4f1a1a2](https://github.com/roomle-dev/web-sdk/commit/4f1a1a2837f419055f641f96955a6b1bf4d1630f))
* shadow bias and soft shadow FXAA ([ac7a9a8](https://github.com/roomle-dev/web-sdk/commit/ac7a9a81d9aaa40741e4e889bbbdb1255eae1888))
* shadow scale for fading shadows on the ground and scalin AO for small objects ([4218eb1](https://github.com/roomle-dev/web-sdk/commit/4218eb11c387ef46e0c138201a33a0e018229cf4))
* small adjustments so that UI can show loading indicator when we request external mesh ([6c7b83e](https://github.com/roomle-dev/web-sdk/commit/6c7b83e9d819ae48447538f922178bcb169b39b2))
* soft shadow for multiple light sources ([096d001](https://github.com/roomle-dev/web-sdk/commit/096d0019bcf0268f2b6175da900e4e3ae9a139b6))
* soft shadow with Mote Carlo Integration ([d40843f](https://github.com/roomle-dev/web-sdk/commit/d40843f5a11c9ee1ee3daaed27d6bfd602d0b969))
* spiral ssao kernel distribution ([d3301b9](https://github.com/roomle-dev/web-sdk/commit/d3301b99d6eaa7939dbe8059888898fe4ffae94e))
* three.js 146 -> 149 ([64237f3](https://github.com/roomle-dev/web-sdk/commit/64237f3ffbfb74fde26c857b8890c1972b6f6060))
* tweak planner ao parameter settings ([f0c9e39](https://github.com/roomle-dev/web-sdk/commit/f0c9e39f6020de662c75d2597fc7a7de96b2a007))
* updat to three.js r152 and update color managment ([7893285](https://github.com/roomle-dev/web-sdk/commit/78932857d86bbcee618a75b0e3471a225655fcc8))
* update of Realism Effects and integration of applied fixes ([54262c3](https://github.com/roomle-dev/web-sdk/commit/54262c370fe767b3a15dedb4755a4e5935cb158a))
* update renderer ([fb8b2ec](https://github.com/roomle-dev/web-sdk/commit/fb8b2ecdc4227d480a2d1be21c6d28d7333ea2c6))
* update three (151) ([a8b23c2](https://github.com/roomle-dev/web-sdk/commit/a8b23c28fbae139746e8516a7a205ccd118fc17b))
* update three.js from version 154 to 155 ([4635bda](https://github.com/roomle-dev/web-sdk/commit/4635bda300b95d1a00a7aca1699bad728d9fff74))
* update types/three ([7049a3e](https://github.com/roomle-dev/web-sdk/commit/7049a3e3fa8b0c5f91024cc197e84283fead2789))
* **kernel:** upgrade kernel to version 232 ([16f2a76](https://github.com/roomle-dev/web-sdk/commit/16f2a76a1627defedc537462e2eac530a7933367))
* **kernel:** upgrade to version 2.13.0 ([20db227](https://github.com/roomle-dev/web-sdk/commit/20db22723c03969a120f91fba477104dd28f2da3))
* **kernel:** upgrade to version 2.14.0-alpha.1 ([3914d0a](https://github.com/roomle-dev/web-sdk/commit/3914d0a681bbf9b9238a832a274c972ef275e340))
* **kernel:** upgrade to version 2.14.0-alpha.2 ([2c20f00](https://github.com/roomle-dev/web-sdk/commit/2c20f007d771a6e38625364af9a4bc186eae86cd))
* **kernel:** upgrade to version 2.14.0-alpha.2 ([362a02a](https://github.com/roomle-dev/web-sdk/commit/362a02a11e589acb947d074f6f92e0cbdec9de86))
* **kernel:** upgrade to version 2.14.0-alpha.3 ([a918c92](https://github.com/roomle-dev/web-sdk/commit/a918c922b871144309f559840115d346fbf78858))
* **kernel:** upgrade to version 2.14.0-alpha.4 ([13869e7](https://github.com/roomle-dev/web-sdk/commit/13869e72b0786abe982037b69d02e2e97a677d1b))
* **kernel:** upgrade to version 2.14.0-alpha.5 ([d128bd7](https://github.com/roomle-dev/web-sdk/commit/d128bd76cd0fe901426f45b620c4b3e6d5be662f))
* **kernel:** upgrade to version 2.14.0-alpha.6 ([15fdc81](https://github.com/roomle-dev/web-sdk/commit/15fdc81de716ec81ed7bf91c654daef842d1573d))
* **kernel:** upgrade to version 2.14.0-alpha.8 ([d452ce0](https://github.com/roomle-dev/web-sdk/commit/d452ce03a66a1672cf9c5feeec05809273ff3572))
* **kernel:** upgrade to version 2.14.0-alpha.9 ([27c7102](https://github.com/roomle-dev/web-sdk/commit/27c7102f29fd35b5dc9f33d7a60f44d8d526fdd9))
* use roomle renderer for perspective and top images ([c9dcca9](https://github.com/roomle-dev/web-sdk/commit/c9dcca97a6375390f170ed52606e8e981a429538))


### Bug Fixes

* a failing test ([017576f](https://github.com/roomle-dev/web-sdk/commit/017576fdfd8550e89eb261cc85e9523c9ddac503))
* add volta to make CI happy ([ed0934b](https://github.com/roomle-dev/web-sdk/commit/ed0934beadde5b68f818b286b7ecb0628945f91a))
* also update g-buffer when forcing the update of shadow and AO ([5a6c543](https://github.com/roomle-dev/web-sdk/commit/5a6c543ecc6e583d1a0610591b81bab8853751d2))
* ao and denoise shaders ([9960a16](https://github.com/roomle-dev/web-sdk/commit/9960a16bb44c1c84b4b92cdd2fcad9b910c83630))
* baked ground contact shadow - do not cast a shadow if the opacity is less than 0.5 ([0641d02](https://github.com/roomle-dev/web-sdk/commit/0641d02254e4286abca96c27d6610e3b423ef9cf))
* baked ground contact shadow for external meshes ([b568569](https://github.com/roomle-dev/web-sdk/commit/b5685695e7a7634d186d3b825c444cdbee73cf6e))
* baked ground contact shadow intensity ([5d4ff28](https://github.com/roomle-dev/web-sdk/commit/5d4ff280a721f021133819f388283f6906dea17f))
* baked ground contact shadow on multiple canvases ([ffb630e](https://github.com/roomle-dev/web-sdk/commit/ffb630e7810b4c5bded27eaa91a73e64fe8e049b))
* baked ground contact shadow plane size ([120a353](https://github.com/roomle-dev/web-sdk/commit/120a3534e3f44c83ff0d92fc54e09a8677e03314))
* camera matrix update ([8038f2d](https://github.com/roomle-dev/web-sdk/commit/8038f2d81df08e73ff9a959ad1c9066d79e8807f))
* check material id in applyMaterialToKernelMaterial ([a24680c](https://github.com/roomle-dev/web-sdk/commit/a24680c8ddb689fa48b7cca17b72ee3fa6b054bf))
* cleanup ([6d98476](https://github.com/roomle-dev/web-sdk/commit/6d984763ab464cf672640ab4b259e83ccc5421d9))
* cleanup ([633114a](https://github.com/roomle-dev/web-sdk/commit/633114afcafeabd80799aaf820a208b93f3c3c31))
* comments (caused by replacing "three." with empty string) ([b208b9d](https://github.com/roomle-dev/web-sdk/commit/b208b9de42bae5fca95151caa1c0cd7e51ebb6e5))
* completely deactivate light source shadows in the planner ([d598e2c](https://github.com/roomle-dev/web-sdk/commit/d598e2c6f89dfe035268da3bb1fd3604951faf2c))
* configurator - force shadow updates ([1b38dc6](https://github.com/roomle-dev/web-sdk/commit/1b38dc6227d195f75728de1bf2eea5454f23b048))
* configurator baked ground contact shadow ([cf54445](https://github.com/roomle-dev/web-sdk/commit/cf54445a4aa69a08e2bad1aab58f891e9c488f91))
* deactivate ground reflection when dragging ([9240981](https://github.com/roomle-dev/web-sdk/commit/92409811407bf46c95af469d807f832fb2028d02))
* disable shadow map shadow in plan ([c14894d](https://github.com/roomle-dev/web-sdk/commit/c14894de04c43307ebcc28db3106f0cbcdb364f1))
* disable SSAO "always update" ([181590c](https://github.com/roomle-dev/web-sdk/commit/181590c5cc47dbee6995100b276ddf4225d8d5ae))
* do not divide canvas size in half when setting render size ([f00d250](https://github.com/roomle-dev/web-sdk/commit/f00d250f397b54e6564c0e9057afaf6b9d1406df))
* do not include transparent materials in g-buffer (no AO on transparent materials) ([7bf46d1](https://github.com/roomle-dev/web-sdk/commit/7bf46d1d89946441ca3388d8b139c61991c91220))
* docking preview - ghost position ([bdb7f66](https://github.com/roomle-dev/web-sdk/commit/bdb7f668a6d6bcf91e2bea86e7566987ec422827))
* don't recalculate baked ground contact shadow on camera change ([f33b5f6](https://github.com/roomle-dev/web-sdk/commit/f33b5f662f39f356aa5fe16c54d21732b869cdb8))
* draco loader ([f714386](https://github.com/roomle-dev/web-sdk/commit/f7143867ea9ae3adac55afb0af93c5af6d95c17a))
* environment light sources ([51e2843](https://github.com/roomle-dev/web-sdk/commit/51e2843489b4d479e314d24f408d4bae64080014))
* even more tests ([55d2ef7](https://github.com/roomle-dev/web-sdk/commit/55d2ef7cb95a97423a7527cc31e9669bb5af9d35))
* fix shadow map by not multiplying the material color ([9e5e382](https://github.com/roomle-dev/web-sdk/commit/9e5e3825b47fbbb632a2391224dd1f54f6da4e73))
* ground reflection ([8fc5c97](https://github.com/roomle-dev/web-sdk/commit/8fc5c972a69074669612a1e5f818571854bac64c))
* ground reflection in planner ([73cbe79](https://github.com/roomle-dev/web-sdk/commit/73cbe79b25f5076e5da98f79ad7e368b1da20a88))
* ground reflection with asymmetric projection ([bf9b89e](https://github.com/roomle-dev/web-sdk/commit/bf9b89ef429256a003015925dc8f2ff7fab1c1bf))
* hard shadow radius ([237914d](https://github.com/roomle-dev/web-sdk/commit/237914db5843a0c00aca134474fc65b1cd616250))
* **planner:** hide wall nodes when loading plan in 2d ([d423e36](https://github.com/roomle-dev/web-sdk/commit/d423e364d6805786a4907bf53b030dba454fc47c))
* improve auto quality detection ([7929902](https://github.com/roomle-dev/web-sdk/commit/792990249f7ee7a57d9d3d96a62e6339a5d81329))
* improve initial fps for new renderer ([58a4e71](https://github.com/roomle-dev/web-sdk/commit/58a4e719c9d52e863fc191acc19880a4c1208693))
* make all transparent materials double-sided (compatibility) ([6b5e1b4](https://github.com/roomle-dev/web-sdk/commit/6b5e1b424dd90fce3f0d1be9eeadb24560b92cbc))
* make the from/to without padding start from wall surface not center corner ([088228c](https://github.com/roomle-dev/web-sdk/commit/088228c1187b9e8eb31b6e81930414f0e5aab99d))
* manually set draggedObject in test ([c331941](https://github.com/roomle-dev/web-sdk/commit/c331941f5e2ffa157832c7524d580c0945fcc433))
* minimum shadow plane size ([87147bc](https://github.com/roomle-dev/web-sdk/commit/87147bce64d9d66bf88623ee424bad1a662317e0))
* MOC baked ground contact shadow ([8066531](https://github.com/roomle-dev/web-sdk/commit/8066531c852e70fe2bd1f58e1500ea5eb2aaa941))
* MOC disable shadow map ([c90b575](https://github.com/roomle-dev/web-sdk/commit/c90b57538f42e5e89aa3af053ebd1ccb6d62529f))
* MOC handle plan bounds changed ([4c7aa5c](https://github.com/roomle-dev/web-sdk/commit/4c7aa5cef3e33cf3bd86988b31f3725d5bfaf690))
* MOC plan bounds ([d08579e](https://github.com/roomle-dev/web-sdk/commit/d08579ec42684cf83cb5ad31c9b2304383508565))
* MOC sky ([029a799](https://github.com/roomle-dev/web-sdk/commit/029a7993ff91ffeb89a920daa400cf7d29cc1f59))
* MOC soft shadow map layers ([c965eee](https://github.com/roomle-dev/web-sdk/commit/c965eee380afb16039df58bad4eefa4fb83fc843))
* MOC walls ground contact shadow ([8c28baa](https://github.com/roomle-dev/web-sdk/commit/8c28baa701ae5e68241aba868bf74abc6a0d643b))
* modulate metalness with alpha channel  (compatibility) ([8c102cb](https://github.com/roomle-dev/web-sdk/commit/8c102cb3d322b1ec702e334a3c8afc52fc1bcb18))
* more tests 🎉 ([50775ae](https://github.com/roomle-dev/web-sdk/commit/50775ae09d7ddf47f85c30eec6db80599e7a8491))
* new render camera frustum - do not modify the near and far plane of the render camera, but trust the camera provided by the SDK ([49e2819](https://github.com/roomle-dev/web-sdk/commit/49e2819e9778743aae3ee4f0d973c55ede909a75))
* new renderer (three.js) works internally with sRGB colors - do not convertSRGBToLinear ([336b98d](https://github.com/roomle-dev/web-sdk/commit/336b98dcadcd357c42040ade05b1c38710cd5c83))
* no shadow for objects that dot not cast shadow (e.g. dimensioning) ([049c3fe](https://github.com/roomle-dev/web-sdk/commit/049c3feb3824fe7572fcf6e3e799c2789bc89892))
* no shadow on and from emissive unlit and transparents ([f6c4adb](https://github.com/roomle-dev/web-sdk/commit/f6c4adb4199652fa86f64eaab48f68899b0725f0))
* only set size on the renderer once and without pixel ratio ([dfce2cf](https://github.com/roomle-dev/web-sdk/commit/dfce2cfa076c355fe4694a80c2c06c479af1bb3c))
* only set zoom factor if planInteractionHandler is initialized ([91a6070](https://github.com/roomle-dev/web-sdk/commit/91a607003f5aa4f1556386a715c32248480df447))
* outline pass sRGB encoding ([0c1824c](https://github.com/roomle-dev/web-sdk/commit/0c1824c2ed90c684e679dd1775077b4650d2ccfc))
* outline update ([d932e20](https://github.com/roomle-dev/web-sdk/commit/d932e2063a2be35c405702857f49ca696f471075))
* packages/planner-core/__tests__/planner-kernel-access.ts tests ([a47f6e7](https://github.com/roomle-dev/web-sdk/commit/a47f6e7ceb31e2b100e7dd8846326c2556118d6a))
* planner baked ground contact shadow ([fe205a6](https://github.com/roomle-dev/web-sdk/commit/fe205a61e43b7d82272edf59aec3ba83d5a859ae))
* planner switch 2D/3D ([0aef1f2](https://github.com/roomle-dev/web-sdk/commit/0aef1f244a4a892e8214a68687f9a4599191195a))
* reactivate some test suites ([1bffec0](https://github.com/roomle-dev/web-sdk/commit/1bffec07f1a5711751d02dd836ee04566c6241b0))
* recreate PMREM environment maps for new WebGL context and after context loss ([aee1ebb](https://github.com/roomle-dev/web-sdk/commit/aee1ebbad79e9bab27225db53f80a81af57deb37))
* RectAreaLight shadow and ContactShadow glitches ([2ba2218](https://github.com/roomle-dev/web-sdk/commit/2ba22186d3f45a2acd3612793a0b4ebf0cf16e97))
* reduce 90° shadow ([0d7afc0](https://github.com/roomle-dev/web-sdk/commit/0d7afc06ad5e2a7f549e2a59b510dad4b79f87f4))
* remove "enableHD" unit tests ([b1f86c6](https://github.com/roomle-dev/web-sdk/commit/b1f86c6d605128b0568fac9af2dfc990d7667a61))
* remove "new THREE." and use import ([852d1cc](https://github.com/roomle-dev/web-sdk/commit/852d1ccceac98d868138485bb292366d4fd0267a))
* remove CameraHelper objects from scene ([3e9d874](https://github.com/roomle-dev/web-sdk/commit/3e9d874d683334a26eb07e60022428bbfc901161))
* remove infinite render loops ([56145b4](https://github.com/roomle-dev/web-sdk/commit/56145b4f6f1e021be7871d7099b147e721f36cf6))
* remove names ([aefc581](https://github.com/roomle-dev/web-sdk/commit/aefc581f64c3b197970f7ab6de741a3fb062799e))
* render target size and setSize event ([4090574](https://github.com/roomle-dev/web-sdk/commit/4090574aa425556c4af58f211289c9843b613d07))
* rendering of the internal shadow plane only in the configurator ([96a8576](https://github.com/roomle-dev/web-sdk/commit/96a85760dff9496a3523a25d3ced1b96ec4a69c7))
* reset offset of perspective offset camera before rendering ([c7ff4c6](https://github.com/roomle-dev/web-sdk/commit/c7ff4c62219f215dd6afcec4814c93210a90066a))
* return if there is an error and do not continue with broken data ([475538f](https://github.com/roomle-dev/web-sdk/commit/475538f673e17179100289c6726e2d23f233f7da))
* revert, only unify mode and not events ([abe0209](https://github.com/roomle-dev/web-sdk/commit/abe0209d3b462f2b26bb072fa5d352255fc7f176))
* rewrite test because jest.spyOn(utils, 'disposeGeometry') does not work with --experimental-vm-modules ([487fc3c](https://github.com/roomle-dev/web-sdk/commit/487fc3cea9fb7124104d3a83e50fa1aea0a128ff))
* RML-6843 cancel dockings: force baked ground shadow update ([0cdeb1d](https://github.com/roomle-dev/web-sdk/commit/0cdeb1d0931e1a1026a818ff643f3935d925dca4))
* RML-6905 soft shadows on faces parallel to the direction of light ([058a579](https://github.com/roomle-dev/web-sdk/commit/058a579e59479c0c952a6c012dc4b9af2b764717))
* RML-6908 disable all layers of backed ground contact shadow plan ([f5c8812](https://github.com/roomle-dev/web-sdk/commit/f5c8812a54600a70271ec13fd6ad4821a828f90c))
* RML-6984 implemented HPerspectiveOffsetCamera.copy ([6c5aa37](https://github.com/roomle-dev/web-sdk/commit/6c5aa379a28aa550ce8b1e350a60a3b6bb1af1eb))
* set asset path for exr and hdr loader ([6b84eed](https://github.com/roomle-dev/web-sdk/commit/6b84eed2f5d022543d0064f76c6d48b70ecb4b48))
* set correct env map intensity on every material ([53ca78b](https://github.com/roomle-dev/web-sdk/commit/53ca78b1b00b6bebfcc4286df356d2f2c934f289))
* **glb-viewer:** set correct light and background ([ff47faf](https://github.com/roomle-dev/web-sdk/commit/ff47fafbdb345acdbb02ffa3b4ad37ff71b7ef02))
* set floor y position to -0.001 to ignore it for floor shadow calculation ([3c86d05](https://github.com/roomle-dev/web-sdk/commit/3c86d05cded3eddec065bfd9c0df2c25fa25c65c))
* set loader asset path based on environment map url ([2f9bbda](https://github.com/roomle-dev/web-sdk/commit/2f9bbda137b2785e77c98143dba71e375e006aa2))
* shadow ground geometry ([ae0a8ee](https://github.com/roomle-dev/web-sdk/commit/ae0a8ee20057b0bfc3452a802b0c5e8edff897aa))
* shadow light camera volume ([c9ef423](https://github.com/roomle-dev/web-sdk/commit/c9ef42384c814d200e19a63ac0be28cd8e9e3be5))
* size of shadow plane ([186d833](https://github.com/roomle-dev/web-sdk/commit/186d8333c5b55d06735fac44e6f1e37b3e5f9e78))
* smooth the corners of the ground shadow ([a9b3425](https://github.com/roomle-dev/web-sdk/commit/a9b342567aabffafab608c385411dccaec4f24d8))
* some more tests ([be0a7c2](https://github.com/roomle-dev/web-sdk/commit/be0a7c2888541ce68f27cc130e8ae3a9b9bd57cf))
* ssao fade out ([c96959e](https://github.com/roomle-dev/web-sdk/commit/c96959e4a6fcc62d6a0c9e397fb6a51da0ee964d))
* switch configurator/planner ([f3cbcdc](https://github.com/roomle-dev/web-sdk/commit/f3cbcdc6f26b28604c362514df8e37389201f16c))
* THREE import ([85cd07a](https://github.com/roomle-dev/web-sdk/commit/85cd07af0f0a1c4db2c401bb9203be3ef51eeed1))
* THREE import (merge conflicts) ([995eaed](https://github.com/roomle-dev/web-sdk/commit/995eaedffb23a3c6bacffa81025d7c36e6a36794))
* try this ([7e00714](https://github.com/roomle-dev/web-sdk/commit/7e00714a97d91dbef383b8c988a0c2f7773ffc65))
* update all packages with vulnerabilities ([78e4c2f](https://github.com/roomle-dev/web-sdk/commit/78e4c2f716dc888dd00527725dd3045e9ac4fc9f))
* update baked ground shadows on docking cancel ([6cb0dfd](https://github.com/roomle-dev/web-sdk/commit/6cb0dfd99588fd959e11494e33a79f875fced728))
* update camera projection matrix ([f15df5a](https://github.com/roomle-dev/web-sdk/commit/f15df5a124cf92354c9da26c4ef72fd733345a47))
* update camera/renderer/highlighting ([cecdfc1](https://github.com/roomle-dev/web-sdk/commit/cecdfc148bf6f0c8d5634c683bc3265c3443ecad))
* update outline when switching 2D/3D ([6eeec03](https://github.com/roomle-dev/web-sdk/commit/6eeec033b52422db447325f0d02ef1f3fd3e70a5))
* updating the baked ground contact shadow when the visibility of any wall has been changed ([d409106](https://github.com/roomle-dev/web-sdk/commit/d4091063abd5040ab0ef18ebf21becd283299134))
* uppercase lower case problems in git ([45228da](https://github.com/roomle-dev/web-sdk/commit/45228da21360ab3ef5e444df7f9c7815d7af11dd))
* use correct regex ([4b20e52](https://github.com/roomle-dev/web-sdk/commit/4b20e52b4637a8958624c5e774d660aa70f7eb90))
* use correct subfolder when iterating dat gui ([dfb7b67](https://github.com/roomle-dev/web-sdk/commit/dfb7b67a83a42872723e74de7ced75fbf8f0b757))
* use environment variable ([e6de914](https://github.com/roomle-dev/web-sdk/commit/e6de914be1c5707370b9dbf0a555e9db707fbc97))
* use rollup version which can handle optional chaining ?.key ([32ee817](https://github.com/roomle-dev/web-sdk/commit/32ee817c56f30063e364d826860fd0f9cee75b38))
* uv transformation (issue caused due to merge conflicts) ([448059f](https://github.com/roomle-dev/web-sdk/commit/448059fcf6abb285ddf9071b48c0ba64fc12b9f5))
* wall padding ([50be1d2](https://github.com/roomle-dev/web-sdk/commit/50be1d27e93d833f90530f8d64613c94ee377f77))


### Performance Improvements

* check hover raycast only once every 32 ms ([4787534](https://github.com/roomle-dev/web-sdk/commit/47875349a5a641e3c79c36446ea44179785ea86d))
* disable material transmission ([da7a1f7](https://github.com/roomle-dev/web-sdk/commit/da7a1f703826e0388a3c4a2b63e35e106c65358d))
* lock dpr to 1.5 ([ac59d6f](https://github.com/roomle-dev/web-sdk/commit/ac59d6fdbc182566074bb6517f7df60493a51cba))

## [2.59.0](https://github.com/roomle-dev/web-sdk/compare/v2.58.0...v2.59.0) (2023-09-26)


### Features

* add onZoomComponentStart callback ([e5fd26e](https://github.com/roomle-dev/web-sdk/commit/e5fd26e18690bd1b41fca7171c5755eb4461bce1))
* expose position2d to construction, wall, floor elements ([3bc637c](https://github.com/roomle-dev/web-sdk/commit/3bc637c1658b872b8f3fdfdc1f47756d134d7bde))
* flying menu changes, callbacks, etx ([5540f78](https://github.com/roomle-dev/web-sdk/commit/5540f7845dcb84fa0dff6609f797dd90ec2c1078))
* remove planner hover behaviour ([2bbbbb6](https://github.com/roomle-dev/web-sdk/commit/2bbbbb6db0e09bd976cd589f6db975cd43748b54))
* **kernel:** upgrade to version 2.12.1 ([44bfd43](https://github.com/roomle-dev/web-sdk/commit/44bfd437cb1b0649ff8447e1decaeb7f95a0a3b5))
* **kernel:** upgrade to version 2.13.0-alpha.1 ([8cf7d7d](https://github.com/roomle-dev/web-sdk/commit/8cf7d7dbb432af5366c3bfa3d88aae5807a8dad1))
* **kernel:** upgrade to version 2.13.0-alpha.3 ([b026ced](https://github.com/roomle-dev/web-sdk/commit/b026cedbca00a4764a1c6de695ff32b2c2a4b5ac))


### Bug Fixes

* convert obj surface attribute color from SRGB to linear ([74cd858](https://github.com/roomle-dev/web-sdk/commit/74cd85894aba5fc2489f1e3cd0ffa7c75d1092a4))
* do not use component delta updates for sub part construction ([2ac85f5](https://github.com/roomle-dev/web-sdk/commit/2ac85f5a2b877ccece5dd1eaa9bc10d5a173dc44))
* dont fire onCameraStartMoving on zoomtofitbounds if camera position is the same ([704789f](https://github.com/roomle-dev/web-sdk/commit/704789fdc39f4a442c50c946466c39868e609cda))
* expose unitStringType ([d6320e8](https://github.com/roomle-dev/web-sdk/commit/d6320e80c63c29b0ceb6fa2acc5f1cb29c73889e))
* feedback fixes ([da9792b](https://github.com/roomle-dev/web-sdk/commit/da9792b24ec7c972ff11b0ca61bf05b23fe2a151))
* ignore long unit-type-strings ([2b2837b](https://github.com/roomle-dev/web-sdk/commit/2b2837bc6e08725d62caf7668217d72694ea4ff7))
* public call ([a2801ce](https://github.com/roomle-dev/web-sdk/commit/a2801cef969bfebef55c2cd2497909553f259a30))

## [2.58.0](https://github.com/roomle-dev/web-sdk/compare/v2.57.0...v2.58.0) (2023-09-12)


### Features

* add object and find free space in plan ([9dbd2b6](https://github.com/roomle-dev/web-sdk/commit/9dbd2b68640c07746a9aec2f6df6c5fecf0d9d6c))
* export 3d for plan snapshots ([d28abde](https://github.com/roomle-dev/web-sdk/commit/d28abde574ea2bc7d4cd169628ca66a16382358b))
* expose a function to share a plan ([bf94c45](https://github.com/roomle-dev/web-sdk/commit/bf94c45dec77b229e3aab029061a1c786418f228))
* notify when plan is switched to initialize waiting again ([cbdbdf0](https://github.com/roomle-dev/web-sdk/commit/cbdbdf05fca726f6eec9d6d54645699803c1fc02))
* set snapping default on init ([3be9110](https://github.com/roomle-dev/web-sdk/commit/3be9110bda8b51e02ae80d78149843f202f65b8e))
* try to move unit-test and preview build jobs in one workflow ([9a54b68](https://github.com/roomle-dev/web-sdk/commit/9a54b68048718597cc3b291b34ee6b238a0c9958))
* **kernel:** upgrade to version 2.12.0-alpha.1 ([4c73d90](https://github.com/roomle-dev/web-sdk/commit/4c73d9001e128b93ed526dce5d8dc2647e561365))
* **kernel:** upgrade to version 2.12.0-alpha.2 ([8cf2cfc](https://github.com/roomle-dev/web-sdk/commit/8cf2cfc57b42d6c3d3936e841b277566e7754a83))
* **kernel:** upgrade to version 2.12.0-alpha.3 ([1a64919](https://github.com/roomle-dev/web-sdk/commit/1a649196ae059f0ce710f28e1eaee0429fe234eb))
* **kernel:** upgrade to version 2.12.0-alpha.4 ([9b98876](https://github.com/roomle-dev/web-sdk/commit/9b98876a904ed0910ea633d6faaee19d90178ec1))
* **kernel:** upgrade to version 304 ([6f21db6](https://github.com/roomle-dev/web-sdk/commit/6f21db62bebc5a86fcba55e5fef9053e225227f7))
* **kernel:** upgrade to version 305 ([b9fec6c](https://github.com/roomle-dev/web-sdk/commit/b9fec6cbf006df35b6db99756bf1e2911f1942b1))
* **kernel:** upgrade to version 306 ([288909f](https://github.com/roomle-dev/web-sdk/commit/288909f8479374b39a132a08084bf905377312d2))
* **kernel:** upgrade to version 306 ([c6e4d7e](https://github.com/roomle-dev/web-sdk/commit/c6e4d7e181aeebeeab6c7efbb4e09f55c7edd5d6))


### Bug Fixes

* add correct types ([5e0ba2c](https://github.com/roomle-dev/web-sdk/commit/5e0ba2c71f4f0189ccf043c3af69d64328af99f8))
* clean ([6cc9f6d](https://github.com/roomle-dev/web-sdk/commit/6cc9f6d229a0b558f7f6a8270a634e247fed19d6))
* copy temporary kernel callback arguments before async operation ([10ffe53](https://github.com/roomle-dev/web-sdk/commit/10ffe53848bcb42abd7fce19357491652d781d96))
* disable floor handlers when edit flag is false ([6f040bc](https://github.com/roomle-dev/web-sdk/commit/6f040bc65e940d9dc9111238ba0f8325c2cf2bb3))
* do not touch z/y coordinate when we are in 2D ([248cc2c](https://github.com/roomle-dev/web-sdk/commit/248cc2c48a2ebe90765cb90cc914e8c230533879))
* highlight when only a docked component is present ([f691787](https://github.com/roomle-dev/web-sdk/commit/f69178796d16477b689d617587a6810a5995ed86))
* highlighting ([d77df07](https://github.com/roomle-dev/web-sdk/commit/d77df0738760d927ac39868480b941f710bc6c9d))
* lint ([9b13abf](https://github.com/roomle-dev/web-sdk/commit/9b13abfc9fed63e91ab314455de358b9307db382))
* make kernel callback Editor3ChangedNamedMesh sync ([6de699e](https://github.com/roomle-dev/web-sdk/commit/6de699e08665e178e2195a786dea8dafa96cff93))
* send plan snapshot images serial not parallel for more details see: ([5943117](https://github.com/roomle-dev/web-sdk/commit/5943117eadb49ac4a8a7ca65a995e9db725c57c9))
* set ignoreComponentRaycast to true for dimensions ([7d4b4fd](https://github.com/roomle-dev/web-sdk/commit/7d4b4fde66772118238dbffa4117637301685fbe))
* use correct core method ([7559007](https://github.com/roomle-dev/web-sdk/commit/75590079484fc35d56e13fcbc394b83553578ea8))
* use current render instead of creating a new one ([131ede6](https://github.com/roomle-dev/web-sdk/commit/131ede688d61754ede8583f5233287df25e6fd31))
* use getChildrenOfPlanComponent on highlight logic ([8489248](https://github.com/roomle-dev/web-sdk/commit/8489248d8bab48ad20f9c858bbc6495ceef60a09))
* **planner:** wait for callback before calling onCompletelyLoaded ([6c97005](https://github.com/roomle-dev/web-sdk/commit/6c9700556d1c613e33c2748961b378cd73e24856))

## [2.57.0](https://github.com/roomle-dev/web-sdk/compare/v2.56.0...v2.57.0) (2023-08-01)


### Features

* 'alpha' instead of 'opacity' material attribute, added 'roughness', 'metallic' and 'transmission' (according to RuAd) ([d7a76f3](https://github.com/roomle-dev/web-sdk/commit/d7a76f36c23d4af7efa77b4ab8c12c8633b5886e))
* added materialAttributes? to configurator WASM callbacks ([693c3fb](https://github.com/roomle-dev/web-sdk/commit/693c3fb6fd0d1e2e24d728366acba2c1a8a3b2f8))
* dispose of material with individual attributes when it is no longer needed ([bc689d6](https://github.com/roomle-dev/web-sdk/commit/bc689d6eea9bacbd0c79b69a6d4254d32a2ca508))
* set 'color' material attribute ([b3900aa](https://github.com/roomle-dev/web-sdk/commit/b3900aa1e72c351a7e422d378f67b5ed64ed3bdb))
* set 'opacity' material attribute ([6c0db24](https://github.com/roomle-dev/web-sdk/commit/6c0db241aac24c99a2e20893380ba37d7c3fc9ec))
* **kernel:** upgrade to version 298 ([5ecce79](https://github.com/roomle-dev/web-sdk/commit/5ecce790ac469f24ea49c31009e0603cad6f2730))
* **kernel:** upgrade to version 299 ([d789a56](https://github.com/roomle-dev/web-sdk/commit/d789a5699d6fa2d294ece31118d6bc1f24c330ef))
* **kernel:** upgrade to version 300 ([a6dae80](https://github.com/roomle-dev/web-sdk/commit/a6dae80dbaa5f948d1d309671a13b53cdd0325b1))
* **kernel:** upgrade to version 301 ([308796f](https://github.com/roomle-dev/web-sdk/commit/308796fc1c638c46c8daf95d8f6ac22c811f31e6))
* **kernel:** upgrade to version 302 ([0f41de2](https://github.com/roomle-dev/web-sdk/commit/0f41de2d4a707269d8b7bbe0aa5197e9c6f8a03b))


### Bug Fixes

* handle empty material attributes object correctly ([32c1016](https://github.com/roomle-dev/web-sdk/commit/32c1016e8cde186bf3044b797b924c8067192457))
* tests ([3ceed85](https://github.com/roomle-dev/web-sdk/commit/3ceed851fb3a92ebc51506540c9d651589fd82bd))
* type ([fd02aa6](https://github.com/roomle-dev/web-sdk/commit/fd02aa6b9f83301914a292d9882bbf317dc4fadf))

## [2.56.0](https://github.com/roomle-dev/web-sdk/compare/v2.55.0...v2.56.0) (2023-07-18)


### Features

* add restrictionLevel parameter which defines parameter and children visibility ([f00af0f](https://github.com/roomle-dev/web-sdk/commit/f00af0f89f190a047f71ff45c292e36d0fcd0b25))
* extend RapiMaterial type ([f80d23e](https://github.com/roomle-dev/web-sdk/commit/f80d23e46d913d380333d84f7a09bf32a1fea7c5))
* **kernel:** upgrade to version 294 ([8cbc8eb](https://github.com/roomle-dev/web-sdk/commit/8cbc8eb96ac862274c664ae4bec2c57017bf5223))
* **kernel:** upgrade to version 295 ([1d8e302](https://github.com/roomle-dev/web-sdk/commit/1d8e302b7a37a80c79b7e9709e3a88b759d58fc0))


### Bug Fixes

* account for no initial values ([7fe444c](https://github.com/roomle-dev/web-sdk/commit/7fe444c3791b1ad87bf605cd21cc775ab7b7c777))
* add empty default so frontend builds ([5906599](https://github.com/roomle-dev/web-sdk/commit/590659921b4a7257880b96d5faaac64f004033f8))
* add method that passes a partlist to _calcPrice ([2f7b6ca](https://github.com/roomle-dev/web-sdk/commit/2f7b6ca5180df209b8c12a3771f418996dcaf2b3))
* args workaround ([9ac705a](https://github.com/roomle-dev/web-sdk/commit/9ac705a847b41492bbea34dea029c5396766293b))
* expose calcPartsPriceSum in configurator ([1e156b3](https://github.com/roomle-dev/web-sdk/commit/1e156b3db0e27247e03d129ec45057c44befaff4))
* if the partlist already has prices, calc those and return them ([a6cd284](https://github.com/roomle-dev/web-sdk/commit/a6cd2840f254506256638d193d31e41001f757c6))
* pass system to unitFormatter too ([2074cc4](https://github.com/roomle-dev/web-sdk/commit/2074cc47e4001887a4bce4edb6c81ccf5f7f4eb3))
* remove frontend workaround, add defaults ([1311763](https://github.com/roomle-dev/web-sdk/commit/131176373d2dcc1a456427629bc3d7b7f0ad21ee))
* remove uneeded param ([1fe30ed](https://github.com/roomle-dev/web-sdk/commit/1fe30ed06f091d0bd2e0389d867eed38fcb0a08b))
* return price ([8285dbe](https://github.com/roomle-dev/web-sdk/commit/8285dbe0ab4261b39a6a22991bdb4661146b0b0b))
* revert ci ([bf0d0c1](https://github.com/roomle-dev/web-sdk/commit/bf0d0c10a8ff12dc3aa8e0727e1e24d3e2e7ce88))
* set unit kernel env variable on switch ([347d73b](https://github.com/roomle-dev/web-sdk/commit/347d73b938e57dd33a0f0e88c148103057134f1c))
* temp hack CI for testing ([710f666](https://github.com/roomle-dev/web-sdk/commit/710f6667b2637f9e474c978d8de0d78da8f6398b))
* temp hack CI for testing ([cc75c88](https://github.com/roomle-dev/web-sdk/commit/cc75c887efeb21d7c2a0c3306e12c68f10c47c5f))
* temp hack CI for testing ([63dbcb1](https://github.com/roomle-dev/web-sdk/commit/63dbcb1afa824de692e1b0f5e87165bfa5c91c38))
* temp hack CI for testing ([9e06368](https://github.com/roomle-dev/web-sdk/commit/9e06368af295d0399267fa64bb3eca037b226488))
* temp hack CI for testing ([f9ebe01](https://github.com/roomle-dev/web-sdk/commit/f9ebe01fef631f8cacacb20bd3fea67c590b0653))
* temp hack CI for testing ([9b7a793](https://github.com/roomle-dev/web-sdk/commit/9b7a79393976f3513f71cf386334be3ff6fbc254))

## [2.55.0](https://github.com/roomle-dev/web-sdk/compare/v2.54.0...v2.55.0) (2023-07-04)


### Features

* add camera idle callback ([88ff99d](https://github.com/roomle-dev/web-sdk/commit/88ff99d834d3332b16625723e921d0652b75eb31))
* core callback - configuration "valid" argument ([5c9ae51](https://github.com/roomle-dev/web-sdk/commit/5c9ae51cfd968af60c9cbc81af53663d3f3f458c))
* init withrespective measurement unit based on measurement system ([d3059c8](https://github.com/roomle-dev/web-sdk/commit/d3059c8a6c9fd129076e79c63b35f7b126b30392))
* **kernel:** upgrade to version 287 ([e7f46d9](https://github.com/roomle-dev/web-sdk/commit/e7f46d979c69e40e6609981ba4abe592e537abf7))
* **kernel:** upgrade to version 289 ([3c428cd](https://github.com/roomle-dev/web-sdk/commit/3c428cdb12230afab6cd8eff1386f8e86062ca3a))
* **kernel:** upgrade to version 291 ([1e28e8a](https://github.com/roomle-dev/web-sdk/commit/1e28e8a7e92d12467a049ae05168f114f3dc89aa))
* use PalnElement.getMeshCenter instead of PlanElement.getCenter for mesh position ([50786b5](https://github.com/roomle-dev/web-sdk/commit/50786b5b6acd516de732621adfc8c2f552ec971e))


### Bug Fixes

* **planner:** add 10% margin to initial camera position in 2d ([bc2c1f6](https://github.com/roomle-dev/web-sdk/commit/bc2c1f64cf1784aadf349395e974c00998a73462))
* add dock line to preview layer ([004e52c](https://github.com/roomle-dev/web-sdk/commit/004e52c2c362e602f8350ded23f01f717afbfd22))
* cleanup ([b011726](https://github.com/roomle-dev/web-sdk/commit/b011726e155ffff5d469d026bf7792366e7093c5))
* enable events while moving the camera to enable dragging ([f3949fe](https://github.com/roomle-dev/web-sdk/commit/f3949feac9dde280212e54c3737ce03bc2855841))
* ensure that shadows and ao is updated at least once ([1c6d832](https://github.com/roomle-dev/web-sdk/commit/1c6d832253f0dbb8e0f97f6dd56d71badb74e35b))
* **planner:** set bounding box height based on camera mode ([5b16ceb](https://github.com/roomle-dev/web-sdk/commit/5b16ceb04798c25498b51b2c48388ca58a108e83))
* **planner:** set plan view models to 3d mode before rendering 3d image ([17d2155](https://github.com/roomle-dev/web-sdk/commit/17d2155966d3373c6b73614b6d892170f79533b8))
* types ([15f9ac1](https://github.com/roomle-dev/web-sdk/commit/15f9ac17af53f5b6c63127e5e33ee8ccdf19ac5d))

## [2.54.0](https://github.com/roomle-dev/web-sdk/compare/v2.53.0...v2.54.0) (2023-06-20)


### Features

* configurator kernel items request and response ([912ccd8](https://github.com/roomle-dev/web-sdk/commit/912ccd8da4abe404616b74ffa07108255cf10aee))
* expose a method that exports a jpeg from the current camera perspective ([d6158c6](https://github.com/roomle-dev/web-sdk/commit/d6158c6ae37d3947a637a11985adc2c3724b4921))
* expose a method to get serialized configuration by runtime id ([0533924](https://github.com/roomle-dev/web-sdk/commit/0533924abed616df1c4c4a2bef926ab54bf86853))
* expose a method to switch objects ([7e93f6c](https://github.com/roomle-dev/web-sdk/commit/7e93f6cf45e058e2a4bee8ea5a87c78b25e97ca1))
* expose createNewSerializedConfiguration so that you can fetch the full configuration string always ([76e1826](https://github.com/roomle-dev/web-sdk/commit/76e182620105be5fca8162424d4b08e005634285))
* **kernel:** upgrade to version 278 ([7e3c0d3](https://github.com/roomle-dev/web-sdk/commit/7e3c0d393fa7d7aff5752495026582562e4c70f7))
* **kernel:** upgrade to version 279 ([1c715eb](https://github.com/roomle-dev/web-sdk/commit/1c715eb2d762982c67af8a4cc8d5d3002a1636fe))
* **kernel:** upgrade to version 280 ([5aa7500](https://github.com/roomle-dev/web-sdk/commit/5aa7500b4c635e6959d2ff533ebb24b547a08536))
* **kernel:** upgrade to version 281 ([b3c1e38](https://github.com/roomle-dev/web-sdk/commit/b3c1e3816e9272de61c5bd6671952dabf0771750))
* **kernel:** upgrade to version 282 ([291cb36](https://github.com/roomle-dev/web-sdk/commit/291cb36ba255192998d234a09d58dc8e620bf32e))
* **kernel:** upgrade to version 283 ([ea48055](https://github.com/roomle-dev/web-sdk/commit/ea480556efc8962c5fab9c09160b2ac04c74c87f))
* **kernel:** upgrade to version 284 ([c57d2d7](https://github.com/roomle-dev/web-sdk/commit/c57d2d7d1b39ce6154f693318db6a8c4c30c70b6))
* **kernel:** upgrade to version 285 ([6b8db4e](https://github.com/roomle-dev/web-sdk/commit/6b8db4e196b19dcbe1917481f30896bab90a8fa7))
* **kernel:** upgrade to version 286 ([ce9d637](https://github.com/roomle-dev/web-sdk/commit/ce9d637e89c04fb6b7ea7870f344725b89ecc003))


### Bug Fixes

* clean types ([d4c4b7f](https://github.com/roomle-dev/web-sdk/commit/d4c4b7ff9f4cce57228867cb31c4625ea81c5d7c))
* cleanup ([0c0f18f](https://github.com/roomle-dev/web-sdk/commit/0c0f18f15acec401caacabad44e98d275ff2ba37))
* merge master ([b23f77a](https://github.com/roomle-dev/web-sdk/commit/b23f77ae461b4975d080a44ee24669d5d4a66737))
* store enums in consts ([cc54bf5](https://github.com/roomle-dev/web-sdk/commit/cc54bf59e8dbadc2098f28385d5e2b80e5ba8776))
* type ([e5b19da](https://github.com/roomle-dev/web-sdk/commit/e5b19daec01d22dab6f29293eda9c615ac0c9383))
* use correct mock for wallType so that === works properly ([1a14896](https://github.com/roomle-dev/web-sdk/commit/1a14896e47a0c32f76f2ad69e10f98615b5f3fc9))
* use kernel wall type instead of sdk inbuilt ([d596ded](https://github.com/roomle-dev/web-sdk/commit/d596ded49f9dc1631febe0633aed6b99fe56ccc7))

## [2.53.0](https://github.com/roomle-dev/web-sdk/compare/v2.52.0...v2.53.0) (2023-06-06)


### Features

* add deletionLocked to kernel interfaces ([84c5d67](https://github.com/roomle-dev/web-sdk/commit/84c5d67143fc5eef8557cee912188a07818e905c))
* add possibility to use feet with fractional ([b91c654](https://github.com/roomle-dev/web-sdk/commit/b91c654e5d76c6b4ffa48ea536d9d67ac9538205))
* improve move camera API ([a6bc278](https://github.com/roomle-dev/web-sdk/commit/a6bc278068aec8eb87cf45af124e064a7e2a2078))
* introduce new callable function ([969116a](https://github.com/roomle-dev/web-sdk/commit/969116a239f60da79a541527e97f2d306841f27a))
* **kernel:** upgrade to version 274 ([90b4c8d](https://github.com/roomle-dev/web-sdk/commit/90b4c8d5b9972149cac4c22f7b61f295342ec0be))
* **kernel:** upgrade to version 275 ([ddbd333](https://github.com/roomle-dev/web-sdk/commit/ddbd3331c504d72e45bf2dabdce06bc6df1b5d5c))
* **kernel:** upgrade to version 276 ([c09bebd](https://github.com/roomle-dev/web-sdk/commit/c09bebd89586420b80bf44a347d05c3dd1bbac2d))
* **kernel:** upgrade to version 277 ([82ba7bd](https://github.com/roomle-dev/web-sdk/commit/82ba7bdf02e12119900e020e2948fffc67a7381d))


### Bug Fixes

* add inch interface ([67312a2](https://github.com/roomle-dev/web-sdk/commit/67312a23989f4b8a9c93536f056c391cb132853c))
* always use userdata materialId instead of material ([4f4d712](https://github.com/roomle-dev/web-sdk/commit/4f4d712067747784fb6941964e8f464390a48ec9))
* missing func ([1f8378f](https://github.com/roomle-dev/web-sdk/commit/1f8378f585c9d66c2553c97153c98a0e0b9ff54a))
* remove any ([ba18aad](https://github.com/roomle-dev/web-sdk/commit/ba18aad8b411322b0c048b74d0e3f782cf3e030d))
* set floor bounding box center based on bounding sphere center ([1908732](https://github.com/roomle-dev/web-sdk/commit/19087322ead937760065b459b48d155d9b824918))
* skip check for drawing mode ([f0e3f69](https://github.com/roomle-dev/web-sdk/commit/f0e3f69384364e74fe466b7ff653f27cf51b325d))
* types ([eae3b31](https://github.com/roomle-dev/web-sdk/commit/eae3b31f787dd948d4ae0e6bf7b0d70df4fb8b88))
* use wall handler instead of nodeHandler ([c578950](https://github.com/roomle-dev/web-sdk/commit/c5789502c150297b989c56f79c7dbc83decee998))

## [2.52.0](https://github.com/roomle-dev/web-sdk/compare/v2.51.0...v2.52.0) (2023-05-23)


### Features

* add deletePlanComponent, idk if i'm doing this right ([59205ff](https://github.com/roomle-dev/web-sdk/commit/59205ff599fbc9cd0c10397afd0a51a71ca9085d))
* extend SDK to also support plan snapshots ([03eb8be](https://github.com/roomle-dev/web-sdk/commit/03eb8beb2ac199232d3da29d3dc335359d151a8c))
* show and move door and windows in 2D ([0a52e87](https://github.com/roomle-dev/web-sdk/commit/0a52e87ae90690eab7a45621b671549bc0399164))
* **kernel:** upgrade to version 272 ([41b1219](https://github.com/roomle-dev/web-sdk/commit/41b121922faecbbd4fbd26918133b9240320519d))
* **kernel:** upgrade to version 273 ([74fbfe9](https://github.com/roomle-dev/web-sdk/commit/74fbfe9c13e2a66534fc3b4ab3b8cfe131df3d6f))
* upload images for planSnapshot ([c8b4bc7](https://github.com/roomle-dev/web-sdk/commit/c8b4bc72ef7593414c062757bff306614fee939d))


### Bug Fixes

* added missing argument to "UnitMeasureFormatter.init" ([ad3b6ef](https://github.com/roomle-dev/web-sdk/commit/ad3b6ef13a089903196135e3ba855ee7cfd23122))
* adjust to latest rapi changes ([5d6ac8f](https://github.com/roomle-dev/web-sdk/commit/5d6ac8fa5a40f01b7ef0aecb2e6fc8f77696f605))
* disable UI layer for hidden wall plan elements ([fcbfe79](https://github.com/roomle-dev/web-sdk/commit/fcbfe79160187089f890805a85a5489a9672a071))
* hide construction elements when start configuring ([71c2150](https://github.com/roomle-dev/web-sdk/commit/71c2150f1f8d212cd1d55b0825e6f7c10c97a462))
* introduce check for wall visibility on dragging objects ([6339004](https://github.com/roomle-dev/web-sdk/commit/6339004fa7823fbb05ad143736d78e8c37055dbc))
* null check top grey mesh before updating it ([94917ec](https://github.com/roomle-dev/web-sdk/commit/94917ec14b973505913fd99426ab037d1ec0c8ad))
* **planner:** only report element hits when in planner ([a06a46b](https://github.com/roomle-dev/web-sdk/commit/a06a46b119d9c60df43011335bc8507af928ae0f))
* **planner:** set initial top view mode for construction elements ([017e978](https://github.com/roomle-dev/web-sdk/commit/017e97867b96ff068aa85f6d429ff10088734e80))
* use correct key so that rapi also recognizes parentId ([213dbc0](https://github.com/roomle-dev/web-sdk/commit/213dbc09294c58d59d159508ab3d6a281ae24dda))
