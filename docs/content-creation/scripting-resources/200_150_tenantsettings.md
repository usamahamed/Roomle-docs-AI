# Tenant Settings

Tenant settings is a JSON that can store different data to modify the looks, translations and behaviour of the configurator.

## Applying the Tenant Settings

Run the configurator with the `configuratorId={your_configurator_id}` argument, for example: `https://www.roomle.com/t/cp/?configuratorId=myAwesomeId&id=mycatalog:myproduct`.

## Modifying the Tenant Settings

Tenatn settings are available in the Rubens Admin interface. You can access it via the hamburger menu in top left corner. In this page, you will see the configurator id for which you are changing the settings JSON.

![](images/200\_150\_tenantsettings.png)

## Changing accent colour, light settings etc.

1. Refer to [UiInitData](../../rubens-products/rubens-products-reference/interfaces/types.UiInitData.md) to see what all settings you can store in the configurator settings.
2. Go to the Tenant Settings
3. Add the desired key-value pairs:

```json
{
    "ls": "sofa",
    "buttons": {
        "multiselect": "false"
    },
    "skin": {
        "primary-color": "#48A43F"
    }
}
```

## Setup Configurator Variants

Variants are stored products with itemIds that have a configuration. They are useful for switching pre-configured variants directly inside the configurator, offering the end-user to quickly order the product. If varaints are setup, they appear as a parameter group.

This works by assigning a tag to the componentId of the root component and is set up in the Rubens Admin interface.

![](images/200\_150\_variants.png)

In order to setup variants, follow these steps:

1. Go to the catalogue in the Rubens Admin
2. Create a new tag that will denote the variants. You can use the word 'variants' in the tag id or tag label, so that you have a better understanding.
3. Set up the products you want to have as variants. Assign the tag you created in the previous step to them.
4. Go to tenant settings.
5. Assign the tag to the componentId as follows (this is the full JSON):

```json
{
    "variants": {
        "yourcatalog:your_root_component_id": "your_tag_with_the_variants"
    }
}
```

6. Use the configuratorId as described in [Applying the Tenant Settings](200\_150\_tenantsettings.md#applying-the-tenant-settings)

## Changing the "Variants" Label

If you want to change the word `Variants` to something else, go to the tenant and add following to your JSON:

```json
    "translations": {
        "language isocode": {
            "params": {
                "variants": "Your new variants label"
            }
        }
    }
```

## Changing labels in the UI of the configurator

There is a `translations` object in the configurator settings JSON. Go to the Tenant Settings and add the relevant label. You can see all available translations under this link: [Translate labels](../../rubens-products/rubens-products-reference/translate-labels/). The root of this file is the object behind the language isocode, so for changing the label saying "Back" in English, you can:

```json
{
    "translations": {
        "en": {
            "back": "your new label saying back"
        }
    }
}
```

Hint: You can use following, so that you will see the paths of the labels in your interface.

```json
{
    "translations": {
        "en": {
          "global": {
            "back": "lng.global.back",
            "roomle": "lng.global.roomle",
            "cancel": "lng.global.cancel",
            "enter-mail": "lng.global.enter-mail",
            "gdpr-info": "lng.global.gdpr-info",
            "see-more": "lng.global.see-more",
            "configurator-title": "lng.global.configurator-title"
          },
          "params": {
            "show-all": "lng.params.show-all",
            "show-less": "lng.params.show-less",
            "search": "lng.params.search",
            "nothing-found": "lng.params.nothing-found",
            "nothing-available": "lng.params.nothing-available",
            "filter-all": "lng.params.filter-all",
            "save-draft": "lng.params.save-draft",
            "request-product": "lng.params.request-product",
            "order-products": "lng.params.order-products",
            "add-to-cart": "lng.params.add-to-cart",
            "ceiling-height": "lng.params.ceiling-height",
            "parapet-height": "lng.params.parapet-height",
            "wall-thickness": "lng.params.wall-thickness",
            "measure-unit": "lng.params.measure-unit",
            "unit-inch": "lng.params.unit-inch",
            "range": {
              "range-error": "lng.params.range.range-error",
              "syntax-error": "lng.params.range.syntax-error"
            },
            "back": "lng.params.back",
            "boolean": [
              "lng.params.boolean.0",
              "lng.params.boolean.1"
            ],
            "no-elements": "lng.params.no-elements",
            "cancel-selection": "lng.params.cancel-selection",
            "variants": "lng.params.variants",
            "room-height": "lng.params.room-height",
            "wall-length": "lng.params.wall-length",
            "wall-scale": "lng.params.wall-scale",
            "wall-material": "lng.params.wall-material",
            "tab-cat-settings": "lng.params.tab-cat-settings",
            "tab-cat-draw": "lng.params.tab-cat-draw"
          },
          "hint": {
            "turn-device": "lng.hint.turn-device"
          },
          "addon-trigger": "lng.addon-trigger",
          "catalog-trigger": "lng.catalog-trigger",
          "addon-trigger-planner": "lng.addon-trigger-planner",
          "add-room": "lng.add-room",
          "article-nr": "lng.article-nr",
          "count": "lng.count",
          "catalog": "lng.catalog",
          "parameters": "lng.parameters",
          "width-short": "lng.width-short",
          "height-short": "lng.height-short",
          "depth-short": "lng.depth-short",
          "drop-down": {
            "partlist": "lng.drop-down.partlist",
            "multiselect": "lng.drop-down.multiselect",
            "measurements": "lng.drop-down.measurements",
            "fullscreen ": "lng.drop-down.fullscreen ",
            "export-3d": "lng.drop-down.export-3d",
            "snapping": "lng.drop-down.snapping",
            "undoAction": "lng.drop-down.undoAction",
            "redoAction": "lng.drop-down.redoAction",
            "twoDView": "lng.drop-down.twoDView"
          },
          "addon-fallback": "lng.addon-fallback",
          "parameter-fallback": "lng.parameter-fallback",
          "addons": {
            "hint": "lng.addons.hint"
          },
          "ar": {
            "heading": "lng.ar.heading",
            "hint": {
              "ios": "lng.ar.hint.ios",
              "android": "lng.ar.hint.android",
              "desktop": "lng.ar.hint.desktop"
            },
            "title": "lng.ar.title",
            "description": "lng.ar.description",
            "send": "lng.ar.send",
            "landing-page": {
              "title": "lng.ar.landing-page.title",
              "description": "lng.ar.landing-page.description",
              "button-ar": "lng.ar.landing-page.button-ar",
              "button-ar-legacy": "lng.ar.landing-page.button-ar-legacy"
            },
            "not-available": "lng.ar.not-available",
            "in-app": "lng.ar.in-app"
          },
          "no-docking": {
            "heading": "lng.no-docking.heading",
            "desc": "lng.no-docking.desc",
            "ok": "lng.no-docking.ok"
          },
          "feedback": {
            "question": "lng.feedback.question",
            "yes": "lng.feedback.yes",
            "no": "lng.feedback.no"
          },
          "continue-to": "lng.continue-to",
          "wrong-domain": "lng.wrong-domain",
          "save-draft": {
            "title": "lng.save-draft.title",
            "description": "lng.save-draft.description",
            "save": "lng.save-draft.save",
            "loading-url": "lng.save-draft.loading-url",
            "copy": "lng.save-draft.copy",
            "copied": "lng.save-draft.copied",
            "description-link": "lng.save-draft.description-link"
          },
          "variants": {
            "heading1": "lng.variants.heading1",
            "heading2": "lng.variants.heading2",
            "desc": "lng.variants.desc",
            "button": "lng.variants.button",
            "close": "lng.variants.close",
            "help": "lng.variants.help"
          },
          "variant-fallback": "lng.variant-fallback",
          "export-3d": {
            "title": "lng.export-3d.title",
            "description": "lng.export-3d.description",
            "cta": "lng.export-3d.cta",
            "error": "lng.export-3d.error"
          },
          "print": {
            "page": "lng.print.page",
            "of": "lng.print.of",
            "custom": "lng.print.custom",
            "button": "lng.print.button"
          },
          "part-list": {
            "label": "lng.part-list.label",
            "price": "lng.part-list.price",
            "main-component": "lng.part-list.main-component",
            "heading": "lng.part-list.heading"
          },
          "no-active-package": "lng.no-active-package",
          "tooltip": {
            "ar": "lng.tooltip.ar",
            "partlist": "lng.tooltip.partlist",
            "multiselect": "lng.tooltip.multiselect",
            "measurements": "lng.tooltip.measurements",
            "fullscreen": "lng.tooltip.fullscreen",
            "reset-camera": "lng.tooltip.reset-camera",
            "render": "lng.tooltip.render",
            "export": "lng.tooltip.export",
            "snapping": "lng.tooltip.snapping",
            "undoAction": "lng.tooltip.undoAction",
            "redoAction": "lng.tooltip.redoAction",
            "twoDView": "lng.tooltip.twoDView",
            "threeDView": "lng.tooltip.threeDView"
          },
          "element-disabled": {
            "heading": "lng.element-disabled.heading",
            "desc": "lng.element-disabled.desc",
            "ok": "lng.element-disabled.ok"
          },
          "cookies": {
            "info": "lng.cookies.info",
            "link": "lng.cookies.link",
            "accept": "lng.cookies.accept"
          },
          "object-fallback": "lng.object-fallback",
          "delete-warning": {
            "heading": "lng.delete-warning.heading",
            "desc": "lng.delete-warning.desc",
            "yes": "lng.delete-warning.yes",
            "no": "lng.delete-warning.no"
          },
          "partlist-header": {
            "group": "lng.partlist-header.group",
            "article-nr": "lng.partlist-header.article-nr",
            "amount": "lng.partlist-header.amount",
            "price": "lng.partlist-header.price"
          },
          "errors": {
            "error-headline": "lng.errors.error-headline",
            "error-descr": "lng.errors.error-descr"
          },
          "product-list": {
            "header": "lng.product-list.header",
            "products-cart": "lng.product-list.products-cart"
          },
          "rooms": {
            "heading": "lng.rooms.heading",
            "wall": "lng.rooms.wall",
            "room": "lng.rooms.room",
            "corner": "lng.rooms.corner",
            "four-walls": "lng.rooms.four-walls",
            "lform": "lng.rooms.lform",
            "no-room": "lng.rooms.no-room",
            "desc": "lng.rooms.desc",
            "sidebar-title": "lng.rooms.sidebar-title",
            "draw": "lng.rooms.draw",
            "draw-head": "lng.rooms.draw-head",
            "draw-desc": "lng.rooms.draw-desc",
            "3d-disable-hint": "lng.rooms.3d-disable-hint",
            "mouse-hint-head": "lng.rooms.mouse-hint-head",
            "mouse-hint-desc": "lng.rooms.mouse-hint-desc",
            "esc-hint-head": "lng.rooms.esc-hint-head",
            "esc-hint-desc": "lng.rooms.esc-hint-desc",
            "shift-hint-head": "lng.rooms.shift-hint-head",
            "shift-hint-desc": "lng.rooms.shift-hint-desc",
            "delete-wall": "lng.rooms.delete-wall",
            "confirm-room": "lng.rooms.confirm-room",
            "settings": "lng.rooms.settings",
            "add-room": "lng.rooms.add-room",
            "free-draw": "lng.rooms.free-draw",
            "start-draw": "lng.rooms.start-draw",
            "select": "lng.rooms.select",
            "two-d-hint-head": "lng.rooms.two-d-hint-head",
            "two-d-hint-desc": "lng.rooms.two-d-hint-desc"
          },
          "static-item-preview": {
            "heading": "lng.static-item-preview.heading",
            "desc": "lng.static-item-preview.desc",
            "show-preview-button": "lng.static-item-preview.show-preview-button"
          },
          "configuration-preview": {
            "heading": "lng.configuration-preview.heading",
            "desc": "lng.configuration-preview.desc",
            "individualize-button": "lng.configuration-preview.individualize-button"
          },
          "moc-bottom-bar": {
            "main-label": "lng.moc-bottom-bar.main-label",
            "sub-label": "lng.moc-bottom-bar.sub-label"
          },
          "overlays": {
            "go-to-cart": "lng.overlays.go-to-cart",
            "back-to-configurator": "lng.overlays.back-to-configurator",
            "close": "lng.overlays.close",
            "close-head": "lng.overlays.close-head",
            "configurator-cart-head": "lng.overlays.configurator-cart-head",
            "planner-cart-head-plural-1": "lng.overlays.planner-cart-head-plural-1",
            "planner-cart-head-singular-1": "lng.overlays.planner-cart-head-singular-1",
            "planner-cart-head-singular-2": "lng.overlays.planner-cart-head-singular-2",
            "planner-cart-head-plural-2": "lng.overlays.planner-cart-head-plural-2",
            "unsaved-changes-warning": "lng.overlays.unsaved-changes-warning"
          },
          "moc": {
            "no-items-hint": "lng.moc.no-items-hint"
          }
        }
    }
}

```
