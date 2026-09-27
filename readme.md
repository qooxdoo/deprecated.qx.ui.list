# qx.ui.list

This package is DEPRECATED and was removed from the main Qooxdoo project and this library only exists for those who have legacy code that depends on it. The recommended library for virtual UI is [qxl.datagrid](https://github.com/qooxdoo/qxl.datagrid), which provides a framework for virtual tables
and trees, and where the virtual data source is independent of the user interface, as well as avoiding a number of issues with the deprecated code in
this repo.

## Themes

The theme content has been moved into this repo also, but will not be picked up automatically; you will need to modify your app's theme to include the
appropriate theme classes in this repo. For example, if your app's theme is based on the Tangible theme, you will find the relevant files in the
`qx.ui.virtual.theme.tangible` directory. Take a look inside `source/class/qx/theme/tangible` - in that case, there is an `Appearance.js` and you
will need to modify your app's `Appearance` to have `include: [ qx.ui.virtual.theme.Appearance ]`; repeat this for all files in the folder (different
theme provide different files)
