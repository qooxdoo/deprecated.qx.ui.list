# qx.ui.list

This package is DEPRECATED and was removed from the main Qooxdoo project and this library only exists for those who have legacy code that depends on it. The recommended library for virtual UI is [qxl.datagrid](https://github.com/qooxdoo/qxl.datagrid), which provides a framework for virtual tables
and trees, and where the virtual data source is independent of the user interface, as well as avoiding a number of issues with the deprecated code in
this repo.

## Installation

Add the library to your application:

```bash
qx package install qooxdoo/deprecated.qx.ui.list
```

## Themes

The theme content (appearances, decorations and colors of the virtual widgets) has been moved into this repo also, in
`source/class/qx/ui/virtual/theme/<theme>/`.

### Automatic (default)

Nothing to do. As soon as your application uses one of the virtual widgets, `qx.ui.virtual.theme.ThemeLoader` is compiled into the
application and includes the theme entries into the framework themes which are part of your application:

| Framework theme               | Included                                  |
| ----------------------------- | ----------------------------------------- |
| `qx.theme.tangible.Appearance` | `qx.ui.virtual.theme.tangible.Appearance` |
| `qx.theme.indigo.Appearance`   | `qx.ui.virtual.theme.indigo.Appearance`   |
| `qx.theme.simple.Appearance`   | `qx.ui.virtual.theme.simple.Appearance`   |
| `qx.theme.simple.Decoration`   | `qx.ui.virtual.theme.simple.Decoration`   |
| `qx.theme.modern.Appearance`   | `qx.ui.virtual.theme.modern.Appearance`   |
| `qx.theme.modern.Color`        | `qx.ui.virtual.theme.modern.Color`        |
| `qx.theme.classic.Appearance`  | `qx.ui.virtual.theme.classic.Appearance`  |

Because the entries are included into the base themes, all derived themes get them as well, e.g. `TangibleLight`/`TangibleDark`,
`Indigo`/`IndigoDark` (which are built on top of Simple) and your app's own theme if it `extend`s one of the framework themes.
`qx.Theme.include` never overwrites an existing key, so any appearance you define yourself always takes precedence.

### Manual (themes not derived from a framework theme)

If your app's theme does not extend one of the framework themes above, include the matching classes into your own theme, for example:

```javascript
qx.Theme.define("myapp.theme.Appearance", {
  extend: myapp.theme.BaseAppearance,
  include: [qx.ui.virtual.theme.tangible.Appearance],

  appearances: {}
});
```

Use the table above to pick the classes; for an Indigo based theme include `qx.ui.virtual.theme.indigo.Appearance` **before**
`qx.ui.virtual.theme.simple.Appearance` (with `include` the first theme in the list wins), plus `qx.ui.virtual.theme.simple.Decoration` in your
decoration theme. `qx.ui.virtual.theme.simple.Image` and `qx.ui.virtual.theme.indigo.ImageDark` are image mapping classes, not themes.
