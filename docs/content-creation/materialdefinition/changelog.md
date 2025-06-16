# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2019-07-24
### Changed
- Moved to repository
- Switched to changelog markdown
- Re-defined basecolor to be in sRGB color space
- Set default basecolor to be 0.9 (which is 0.79 in linear space, a very bright white)
- Re-defined "alpha" as opacity factor
  Already was treated like it in three.js implementations, but not in Unity. Trying to remove discrepancies.
- Re-defined RGBA texture mapping's alpha channel to be alpha (in terms of opacity). Used for alpha clipping/testing as well
### Added
- Texture mapping ORM: combined occlusion, roughness, metallic texture
- Transmission factor and IOR to allow specular transmissive materials (glass)
  Note: No explicit transmission color. The base color is used.
- Added occlusion strength (used in real-time when occlusion textures are present)
### Removed
- Removed obsolete `specular` factor
  Referred to the specular-glossiness workflow, which is not supported

## [1.1.0] 2018-12-10
### Added
- alphaCutoff
- doubleSided
### Changed
- Declared specular workflow obsolete

## [1.0.0] - Initial Version
### Added
- Material properties
  - basecolor
  - roughness
  - metallic
  - alpha
  - specularity
- Texture properties
  - id
  - material
  - width
  - height
  - mapping (RGB,RGBA,XYZ)
  - url
  - mmWidth
  - mmHeight
