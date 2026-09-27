/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Scott Knick (sknick)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the Indigo dark theme.
 *
 * @asset(qx/decoration/Simple/*)
 * @asset(qx/static/blank.png)
 */
qx.Class.define("qx.ui.virtual.theme.indigo.ImageDark", {
  extend: qx.core.Object,

  statics: {
    /**
     * Holds a map containing all the URL to the images.
     * @internal
     */
    URLS: {
      // tree virtual
      "treevirtual-line": "decoration/treevirtual/line.gif",
      "treevirtual-minus-only": "decoration/treevirtual/only_minus.gif",
      "treevirtual-plus-only": "decoration/treevirtual/only_plus.gif",
      "treevirtual-minus-start": "decoration/treevirtual/start_minus.gif",
      "treevirtual-plus-start": "decoration/treevirtual/start_plus.gif",
      "treevirtual-minus-end": "decoration/treevirtual/end_minus.gif",
      "treevirtual-plus-end": "decoration/treevirtual/end_plus.gif",
      "treevirtual-minus-cross": "decoration/treevirtual/cross_minus.gif",
      "treevirtual-plus-cross": "decoration/treevirtual/cross_plus.gif",
      "treevirtual-end": "decoration/treevirtual/end.gif",
      "treevirtual-cross": "decoration/treevirtual/cross.gif"
    }
  }
});
