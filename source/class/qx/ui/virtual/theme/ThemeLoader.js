/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */

/**
 * Includes the appearances, decorations and colors of the deprecated virtual
 * widgets into the framework themes, so that applications do not need to
 * modify their own themes.
 *
 * The framework themes are looked up by name, so that only the themes which
 * are actually part of the application are patched (and no theme is pulled
 * into the application just because of this class). Because the entries are
 * included into the base themes, all derived themes (e.g. `TangibleDark`,
 * `IndigoDark` or an application's own theme which extends a framework theme)
 * pick them up automatically. `qx.Theme.include` never overwrites existing
 * keys, so any appearance defined by the application takes precedence.
 *
 * This class is referenced with `@use` (not `@require`) by the virtual widgets:
 * its `defer` must not be forced to run while the classes are still loading,
 * but only when all classes (and therefore all themes) are loaded, which is
 * before the application's theme is initialized.
 */
qx.Class.define("qx.ui.virtual.theme.ThemeLoader", {
  type: "static",

  statics: {
    /**
     * Returns a map of framework theme names to the themes which have to be
     * included into them.
     *
     * @return {Map<String,qx.Theme>} framework theme name -> mixin theme
     */
    getThemeMap() {
      return {
        "qx.theme.tangible.Appearance": qx.ui.virtual.theme.tangible.Appearance,
        "qx.theme.indigo.Appearance": qx.ui.virtual.theme.indigo.Appearance,
        "qx.theme.simple.Appearance": qx.ui.virtual.theme.simple.Appearance,
        "qx.theme.simple.Decoration": qx.ui.virtual.theme.simple.Decoration,
        "qx.theme.modern.Appearance": qx.ui.virtual.theme.modern.Appearance,
        "qx.theme.modern.Color": qx.ui.virtual.theme.modern.Color,
        "qx.theme.classic.Appearance": qx.ui.virtual.theme.classic.Appearance
      };
    },

    /**
     * Includes the virtual widget themes into all framework themes which are loaded.
     */
    load() {
      let map = this.getThemeMap();
      for (let name in map) {
        let theme = qx.Theme.getByName(name);
        if (theme) {
          qx.Theme.include(theme, map[name]);
        }
      }
    }
  },

  defer(statics) {
    statics.load();
  }
});
