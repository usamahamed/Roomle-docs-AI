# Using GIT for Roomle Content Development

Jiri Polcar from Roomle, 8. 6. 2019

## Introduction

Git is a well-known tool for working with source files. It helps with problems regarding more people working on one project and tracks changes and enables to revert any previous version. This document is a guide on how to setup GIT and work on Roomle Content. This is a very brief overview of what you should do. If you have any inclarities, there are a lot of lessons on git on internet. 

If something is omitted in this guide, please, contact us.

## Setup

* Download & Install https://git-scm.com/ - this is the GIT itself

* Make a directory that you will put all Roomle projects in. This will be referred to as the ROOT directory further in this guide. I recommend making a new directory that will be dedicated only for this purpose.

* Get a user interface for GIT (it is only a command-line tool). Most of them are the same in functionality, so you can pick any you like. This guide will show examples with Fork: https://git-fork.com/

* If the installation asks you to specify a working directory, pick the ROOT directory you've already created.

* You will need a gitlab.com account and we need to know your username (which is not your e-mail) to grant you access to the projects.

## Getting the Data

After we've posted invites to the project on gitlab, which will be refered to as the REPOSITORY, or REPO, you can clone it:

1. Login to gitlab.com, where you should see the repository. If you do not see it, ask the SCRIPT LEAD for an invite.
2. Get the cloning link for the repository. Click the clone button in the repository site and copy either the SSH or the HTTPS link.
3. In your GIT client, open the cloning dialogue (File/Clone). It should prefill the copied link for you. Do not forget to select the ROOT directory.
4. After cloning, you should have a new directory in your ROOT directory, which will contain the mirror of the REPOSITORY.

## Getting up-to-date Data from GIT

Before you start working, make sure you are going to work in the correct BRANCH. You should see all branches if you unfold the Remotes in the left menu. Double click a branch to TRACK it - this means, it will be quickly selectable and present in your working branches and ready to be worked on. You can also CHECKOUT a branch by double-clicking it in the overview.

Beware, that someone could have updated the branch in the meantime. So, always first FETCH (check whether there are changes) and PULL (get the changes to your files).

In best practice scenario, the master branch (which is always the 'main' branch) should be a mirror of what is in the database. But always check first!

## Working on the Data

If you are going to work with the data, make a branch where you are going to be working in. First, CHECKOUT the latest version in the branch. Then just click the new branch button and create a correct name for it:

* If there are more products in the REPO, prefix the branch with the product name or its abbreviation. All components should also be in separated folders (repository_root/projectname/projectnane_componentname.json - note that the filename should match componentId: catalogue:projectname_componentname, use lower case).
* If you are going to solve issues reported in the feedback, call the branch with the issue number. If you are going to be working on lots of issues, name it accordingly. You should have only one big issue fix per branch, but there is no point in having a branch for tiny fixes. If you are not sure, ask a SCRIPT LEAD.
* Checkout the branch you created (if the new branch was not selected as the current one).

### Updating the Data from the Database

* First, update your files from the database, apply formatting, check the changes and COMMIT!
* Work on your tasks in the code.
* Test, whether your task is finished in accordance with the request.
* Test, whether the configuration crashes or throws errors.
* Test, whether the change you just did breaks previous work.
* Throughout your work, if some changes leads you a step further, STAGE the change.
* If you got a few changes that end with a working stage (even if work is still pending), do a COMMIT into your working branch.
* PUSH the change after you commit.

### Staging Changes

Staging changes means that you save the current state of the files for you work. You can stage the whole changed file or only short snippets of that file. Unstaging works in a similar manner.

Before STAGING changes, you MUST format the code. If you do the formatting in a different way, the result will be that the whole script will be visible as a change, making such change illegible. If you start with unformatted data, format everything first without any other changes and make a COMMIT with the formatted data.

### Discarding Changes

You can revert the changes you've written by selecting them and clicking DISCARD in the right-button context menu. If you discard a change, it will be gone forever.

### Committing

You can save the state of the staged changes to an entry in the branch. In the field, prefix with \[projectname\] and describe shortly and efficiently what was changed (like "Fixed docking position", "Changed material", "Fixes JIRA-123" should it be a tiny fix). By COMMITING, you are creating a point of return that will be shown on the branch, but you still don't distribute it to the others. Beware, if you delete your GIT directory with commits before PUSHING, the changes will get lost.

### Pushing

By PUSHING, you upload the changes to the gitlab server. If someone made a parallel changes in your branch, you will be asked to push first. If your changes are in conflicts, you need to resolve the conflicts. You should always PULL before PUSHING. Once you've pushed, the changes will be tracked forever until the shut down gitlab and everyone deletes their git folders.

### Overview

~~~~
             CHECKOUT <   <   <   <   <   <   <   <
                |                                  |
   DISCARD <  CHANGE <>  STAGED CHANGE > COMMIT > PUSH 
~~~~

Note that there is no way back when you discard or commit.

## Merge Request

To connect your changes to the master branch, you should do a merge request. Go to REPO site in Gitlab.com, navigate to Merge Requests on left and make new. Pick the source branch (= your changes) and the target branch - to where you want to apply these changes. This will let a script lead to review the changes and code quality and if you do not have the component editing access right, he will do the upload. Otherwise, wait with the upload until the merge request is accepted.

You should do the merge requests per plan your script lead will define. The merge requests should be reasonably big and rationally divided - one big task or a few minor tasks. The task that you are going to be commiting and requesting to merge should be working.

## Comparing repository version with the live database

Currently, there is no hard-link between the master branch and the live Roomle database. For finding out, whether the live version is different from master, use following approach:

1. Create a branch with an id that explains, that reinitialization from database is inside
2. Mass-format all current scripts that you have
3. Make a commit with the formatted scripts
4. Download the components.zip file from the according catalogue's Import/Export page in https://admin.roomle.com/
5. Extract this zip file into the folder with your components and overwrite them
6. Mass-format again what came from database
7. GIT will show the changes. If there are any changes, you should make a merge request to master and you also should merge to your working branches.
