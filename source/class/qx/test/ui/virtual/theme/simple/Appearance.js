/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2016 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * William Opandi (woprandi)

************************************************************************ */
qx.Class.define("qx.test.ui.virtual.theme.simple.Appearance", {
  extend: qx.dev.unit.TestCase,

  members: {
    __obj: null,

    setUp() {
      this.__obj = qx.ui.virtual.theme.simple.Appearance.appearances;
    },

    tearDown() {
      this.__obj = null;
    },

    testTreeVirtual() {
      var styleFunc = this.__obj["treevirtual"].style;

      var superStyles = {
        padding: [3, 4]
      };

      var style = styleFunc(null, superStyles);

      this.assertArrayEquals([5, 5], style.padding);
    },

    testTreeVirtualFolder() {
      var styleFunc = this.__obj["treevirtual-folder"].style;

      var states = {
        opened: true,
        drag: true
      };

      var style = styleFunc(states);

      this.assertIdentical("icon/16/places/folder-open.png", style.icon);
      this.assertIdentical(0.5, style.opacity);

      states.opened = false;
      states.drag = false;

      style = styleFunc(states);

      this.assertIdentical("icon/16/places/folder.png", style.icon);
      this.assertUndefined(style.opacity);
    },

    testTreeVirtualFile() {
      var styleFunc = this.__obj["treevirtual-file"].style;

      this.assertIdentical("icon/16/mimetypes/text-plain.png", styleFunc({ drag: false }).icon);

      this.assertIdentical(0.5, styleFunc({ drag: true }).opacity);
      this.assertUndefined(styleFunc({ drag: false }).opacity);
    },

    testTreeVirtualLine() {
      var style = this.__obj["treevirtual-line"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-line"], style.icon);
    },

    testTreeVirtualContract() {
      var style = this.__obj["treevirtual-contract"].style();

      this.assertIdentical(qx.theme.simple.Image.URLS["tree-minus"], style.icon);
    },

    testTreeVirtualExpand() {
      var style = this.__obj["treevirtual-expand"].style();

      this.assertIdentical(qx.theme.simple.Image.URLS["tree-plus"], style.icon);
    },

    testTreeVirtualOnlyContract() {
      var style = this.__obj["treevirtual-only-contract"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-minus-only"], style.icon);
    },

    testTreeVirtualOnlyExpand() {
      var style = this.__obj["treevirtual-only-expand"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-plus-only"], style.icon);
    },

    testTreeVirtualStartContract() {
      var style = this.__obj["treevirtual-start-contract"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-minus-start"], style.icon);
    },

    testTreeVirtualStartExpand() {
      var style = this.__obj["treevirtual-start-expand"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-plus-start"], style.icon);
    },

    testTreeVirtualEndContract() {
      var style = this.__obj["treevirtual-end-contract"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-minus-end"], style.icon);
    },

    testTreeVirtualEndExpand() {
      var style = this.__obj["treevirtual-end-expand"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-plus-end"], style.icon);
    },

    testTreeVirtualCrossContract() {
      var style = this.__obj["treevirtual-cross-contract"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-minus-cross"], style.icon);
    },

    testTreeVirtualCrossExpand() {
      var style = this.__obj["treevirtual-cross-expand"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-plus-cross"], style.icon);
    },

    testTreeVirtualEnd() {
      var style = this.__obj["treevirtual-end"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-end"], style.icon);
    },

    testTreeVirtualCross() {
      var style = this.__obj["treevirtual-cross"].style();

      this.assertIdentical(qx.ui.virtual.theme.simple.Image.URLS["treevirtual-cross"], style.icon);
    },

    testGroupItem() {
      var style = this.__obj["group-item"].style();

      this.assertIdentical(4, style.padding);
      this.assertIdentical("#BABABA", style.backgroundColor);
      this.assertIdentical("white", style.textColor);
      this.assertIdentical("bold", style.font);
    },

    testCell() {
      var styleFunc = this.__obj["cell"].style;

      var style = styleFunc({ selected: true });

      this.assertIdentical("table-row-background-selected", style.backgroundColor);

      this.assertIdentical("text-selected", style.textColor);
      this.assertArrayEquals([3, 6], style.padding);

      style = styleFunc({ selected: false });

      this.assertIdentical("table-row-background-even", style.backgroundColor);
      this.assertIdentical("text", style.textColor);
    },

    testCellNumber() {
      var style = this.__obj["cell-number"].style();

      this.assertIdentical("right", style.textAlign);
    }
  }
});
