qx.Theme.define("qx.ui.virtual.theme.modern.Appearance", {
  appearances: {
    /*
    ---------------------------------------------------------------------------
      TREEVIRTUAL
    ---------------------------------------------------------------------------
    */

    treevirtual: "table",

    "treevirtual-folder": {
      style(states) {
        return {
          icon: states.opened
            ? "icon/16/places/folder-open.png"
            : "icon/16/places/folder.png"
        };
      }
    },

    "treevirtual-file": {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",

      style(states) {
        return {
          icon: "icon/16/mimetypes/office-document.png"
        };
      }
    },

    "treevirtual-line": {
      style(states) {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-contract": {
      style(states) {
        return {
          icon: "decoration/tree/open.png",
          paddingLeft: 5,
          paddingTop: 2
        };
      }
    },

    "treevirtual-expand": {
      style(states) {
        return {
          icon: "decoration/tree/closed.png",
          paddingLeft: 5,
          paddingTop: 2
        };
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

    "treevirtual-end": {
      style(states) {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-cross": {
      style(states) {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "virtual-list": "list",
    "virtual-list/row-layer": "row-layer",

    "row-layer": "widget",

    "group-item": {
      include: "label",
      alias: "label",

      style(states) {
        return {
          padding: 4,
          decorator: "group-item",
          textColor: "groupitem-text",
          font: "bold"
        };
      }
    },

    "virtual-selectbox": "selectbox",
    "virtual-selectbox/dropdown": "popup",
    "virtual-selectbox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-combobox": "combobox",
    "virtual-combobox/dropdown": "popup",
    "virtual-combobox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-tree": {
      include: "tree",
      alias: "tree",

      style(states) {
        return {
          itemHeight: 26
        };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    "column-layer": "widget",

    cell: {
      style(states) {
        return {
          textColor: states.selected ? "text-selected" : "text-label",
          padding: [3, 6],
          font: "default"
        };
      }
    },

    "cell-string": "cell",
    "cell-number": {
      include: "cell",
      style(states) {
        return {
          textAlign: "right"
        };
      }
    },

    "cell-image": "cell",
    "cell-boolean": {
      include: "cell",
      style(states) {
        return {
          iconTrue: "decoration/table/boolean-true.png",
          iconFalse: "decoration/table/boolean-false.png"
        };
      }
    },

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
