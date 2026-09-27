/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Martin Wittemann (martinwittemann)

************************************************************************* */

/**
 * The simple qooxdoo decoration theme.
 */
qx.Theme.define("qx.ui.virtual.theme.simple.Decoration", {
  decorations: {
    "virtual-background-header": {
      style: {
        gradientStart: ["button-box-bright", 40],
        gradientEnd: ["button-box-dark", 70],
        backgroundColor: "button-box-bright"
      }
    },

    "virtual-background-span": {
      include: "table-header-cell",
      style: {
        color: "table-row-line",
        width: [0, 0, 1, 0]
      }
    }
  }
});
