/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2026 qooxdoo contributors

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */

/**
 * Leak tests for qx.ui.treevirtual.TreeVirtual. This test was previously
 * in qx.test.ui.table.Dispose.
 */
qx.Class.define("qx.test.ui.treevirtual.Dispose", {
  extend: qx.test.ui.LayoutTestCase,

  members: {
    testTreeVirtual() {
      this.assertDestroy(
        function () {
          // A Basic column model keeps this about the row renderer: the
          // default Resize model has a leak of its own.
          var tree = new qx.ui.treevirtual.TreeVirtual(["Tree"], {
            tableColumnModel(obj) {
              return new qx.ui.table.columnmodel.Basic(obj);
            }
          });

          var model = tree.getTableModel();
          tree.destroy();
          model.dispose();
        },
        this,
        "Dispose tree, which replaces the default row renderer"
      );
    }
  }
});
