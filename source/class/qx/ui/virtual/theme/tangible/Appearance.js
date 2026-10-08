qx.Theme.define("qx.ui.virtual.theme.tangible.Appearance", {
  appearances: {
    /*
    ---------------------------------------------------------------------------
      TREEVIRTUAL
    ---------------------------------------------------------------------------
    */

    treevirtual: {
      include: "framebox",
      alias: "table",
      style(states, superStyles) {
        return {
          padding: [superStyles.padding[0] + 2, superStyles.padding[1] + 1]
        };
      }
    },

    "treevirtual-folder": {
      style(states) {
        return {
          icon: states.opened
            ? qx.theme.tangible.Image.URLS["folder-open"]
            : qx.theme.tangible.Image.URLS["folder"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-file": {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",

      style(states) {
        return {
          icon: qx.theme.tangible.Image.URLS["file"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-blank": {
      style(states) {
        return { icon: qx.theme.tangible.Image.URLS["blank"] };
      }
    },

    "treevirtual-contract": {
      style(states) {
        return { icon: qx.theme.tangible.Image.URLS["tree-minus"] };
      }
    },

    "treevirtual-expand": {
      style(states) {
        return { icon: qx.theme.tangible.Image.URLS["tree-plus"] };
      }
    },

    "treevirtual-only-contract": "treevirtual-contract",
    "treevirtual-only-expand": "treevirtual-expand",
    "treevirtual-start-contract": "treevirtual-contract",
    "treevirtual-start-expand": "treevirtual-expand",
    "treevirtual-end-contract": "treevirtual-contract",
    "treevirtual-end-expand": "treevirtual-expand",
    "treevirtual-cross-contract": "treevirtual-contract",
    "treevirtual-cross-expand": "treevirtual-expand",
    "treevirtual-line": "treevirtual-blank",
    "treevirtual-end": "treevirtual-blank",
    "treevirtual-cross": "treevirtual-blank",

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */
    "virtual-list": "list",
    "virtual-list/row-layer": "row-layer",

    "row-layer": "widget",
    "column-layer": "widget",

    "group-item": {
      include: "label",
      alias: "label",

      style(states) {
        return {
          padding: 4,
          backgroundColor: "primary",
          textColor: "text-on-primary",
          font: "bold"
        };
      }
    },

    "virtual-selectbox": "selectbox",
    "virtual-selectbox/dropdown": "popup",
    "virtual-selectbox/dropdown/list": { alias: "virtual-list" },

    "virtual-combobox": "combobox",
    "virtual-combobox/dropdown": "popup",
    "virtual-combobox/dropdown/list": { alias: "virtual-list" },

    "virtual-tree": {
      include: "tree",
      alias: "tree",

      style(states) {
        return { itemHeight: 21 };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    cell: {
      style(states) {
        return {
          backgroundColor: states.selected ? "primary-selected" : "surface",
          textColor: states.selected
            ? "text-on-primary"
            : "text-primary-on-surface",
          padding: [3, 6]
        };
      }
    },

    "cell-string": "cell",
    "cell-number": {
      include: "cell",
      style(states) {
        return { textAlign: "right" };
      }
    },

    "cell-image": "cell",
    "cell-boolean": "cell",
    "cell-atom": "cell",
    "cell-date": "cell",
    "cell-html": "cell",

    /*
      --------------------
      VIRTUAL SELECTBOX
      --------------------
    */

    "list-search-highlight": {
      style(states) {
        return {
          backgroundColor: "rgba(255, 251, 0, 0.53)",
          textDecorationStyle: "dotted",
          textDecorationLine: "underline"
        };
      }
    }
  }
});
