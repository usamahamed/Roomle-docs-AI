# AssetController

## Overview

- [POST /analyze](#post-analyze)
- [PUT /processings/:id](#put-processingsid)
- [Accepted file formats](#-accepted-file-formats)

## Description

Path /v2/assets

## Concepts

### Asset Analyzer

The assetAnalyzer is a syncronous call to the digital asset pipe - DAP, which returns an analysis of the posted 3D asset
and a link to a .glb file to show in the front end.

### Asset processing

A post to assetProcessing contains 3D assets, that are to be prepared and optimized by the digital asset pipe - DAP and
then added to the item for which they were posted.
The operation is asyncronous and the user is notified of the success/failure of the processing by email.

## API Reference

### POST /analyze

Generates: json
Consumes: MultipartFormData

form-parameters:

- threeDimensionalAsset (file) : the source file to be processed (zip or tar.gz)
- threeDimensionalAssetUrl (string) : URL to the source file

If a threeDimensionalAssetUrl is given, the threeDimensionalAsset is ignored and the file from the Url is taken as a
source.

### PUT /processings/{id}

Generates: json
Consumes: MultipartFormData

Path paremeters:
{id} - the id of the item to which we are adding the assets

MultiPart:
- "assetBundle" -> InputStream, data
- "assetBundle" -> FormDataContentDisposition, details of the file in the stream
- "assetResult" -> String, json for the assetPipe

### Accepted file formats:
- 