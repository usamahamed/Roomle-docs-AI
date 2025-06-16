# Processes and Good Practices

This chapter provides info to understand, how to efficiently handle your component definitions. Those are recommendations that we have found out to be working well for us.

## Reinitialize from Catalogue

## Publishing a Change of a Live Product to a Draft Catalogue for Client Approval

Situation: You have to make changes in a live product, but have to test them before go-live.

Here it is best to utilize the draft catalogue feature. Every catalogue has a possibility to create a draft catalogue. If you do so, the original catalogue locks for changes and you should do your work in the draft catalogue. After the change is done in the draft catalogue, you can use the RuAd publishing, where you take the content in the draft, which then overwrites the content in the live catalogue. You can select whether components, items, prices, meshes, materials should merge or be ignored, but it is all or nothing in every of those categories.

If you need to selectively publish only particular entries, or you need to work in more than one draft, or you need to publish entries into the live catalogue, you can do so by unlocking the original catalogue, but then you do not have a native merging possibility and you must merge the data yourself by using the standard catalogue import functionalities, while changing the catalogueIds accordingly.

Prerequisities:

* Master branch mirrors the state of the live catalogue.
* Data are stored in a proper way. All components are formatted with latest version of the Roomle Component Formatter.

1. Starting in the `master` branch, create a new branch that will aggregate the `changes`. Call the branch in a good way, for example `<productName>/<JIRA-CODE>-changes`, where `<JIRA-CODE>` stands for a aggregate ticket for the batch of changes. If not available, you can replace this by `<YY-MM-changes>` or in another way that you later know what and why was happening. If there is only one ticket to handle, use the standart [branch naming conventions](300\_10\_gitstructure.md#product-jira-code-one-word-description).
2. Start every change in the `master` branch and work on them parallel.

**WARNING:** It is highly not recommended to start `change2` at the tip of `change1`, or to develop `change1`, merge to `changes` and start `change2` in `changes`. This way you loose the possibility to (easily) reject some of the changes when the task is redefined or cancelled.

3. After all individual changes will have been done and tested on the developer's side, merge them to the `changes` branch.
4. Starting in `master`, create a `draft0` or `drafts/draft0` branch (based on the actual number in the draft catalouge's ID)
5. Change the catalogueIds of the relevant data to the draft catalogue IDs.

You usually need to make a copy of components and items for the draft. For this, you can do a replacement of:

* Full-text `d": "catalogue:` -> `d": "catalogue_draft0:` to change `id`, `itemId`, `componentId` fields. Watch out for field, where you assign a material value to a parameter/variable that ends with the letter `d`.
* Full-text `""componentId"":""catalogue:` -> `""componentId"":""catalogue_draft0:` to change item configurations from an exported `allItems.csv` file; watch out for if there are spaces between `"": ""`

It is fine that components and items are taken from the draft, but materials and meshes are taken from the live catalogue. If you need to change or add new materials and meshes, it is fine that you refer only the changed or added meshes/materials in the draft catalogue. In such case, have only the relevant material or mesh IDs in the draft. However, you should change every occurence of such ID. You can do this by replacing:

* Full-text `AddExternalMesh('catalogue:<changed mesh id>'` -> `AddExternalMesh('catalogue_draft0:<changed mesh id>'` for calling meshes
* Full-text `"catalogue:<changed material id>"` ->`"catalogue:<changed material id>"` for material IDs inside the Roomle Component Definition JSON values
* Full-text `'catalogue:<changed material id>'` -> `'catalogue:<changed material id>'` for material IDs inside RoomleScripts. However, you should check in Git diff view if there are IDs inside `AddExternalMesh` functions affected, which is probably unintended.

6. Do a commmit in the `draft` branch, so that all data you're going to upload have the draft catalougeId.
7. Merge the `changes` branch to `draft` branch. If there's any new data, change their catalogueId during the merge or in the next commit to the `draft` branch.
8. Upload `draft` to the draft catalogue.
9. Check if the functionality in the draft catalogue matches your expectations.
10. Hand the task over to your PM or to the client and wait for approval.
11. If approved, merge `changes` to `master` and upload to the live catalogue. If not approved, do fixes based on the `changes` branch or do new requests based on the `master` branch and go back to step 7.

Scheme of the just described process, as it would look like in a Git repository follows:

![](images/300\_30\_draft\_git\_process.png)

**WATCH OUT FOR** having draft IDs in any branch outside the `draft`. Otherwise you can end with referring to a draft catalogue in the live product, which will sooner or later bring crashes to a live product configurator.
