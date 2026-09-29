qx.Theme.define("qx.ui.virtual.theme.simple.Appearance", {
  appearances: {
    /*
    ---------------------------------------------------------------------------
      TREEVIRTUAL
    ---------------------------------------------------------------------------
    */

    treevirtual: {
      include: "textfield",
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
            ? "icon/16/places/folder-open.png"
            : "icon/16/places/folder.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-file": {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",

      style(states) {
        return {
          icon: "icon/16/mimetypes/text-plain.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-line": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-line"]
        };
      }
    },

    "treevirtual-contract": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["tree-minus"]
        };
      }
    },

    "treevirtual-expand": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["tree-plus"]
        };
      }
    },

    "treevirtual-only-contract": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-minus-only"]
        };
      }
    },

    "treevirtual-only-expand": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-plus-only"]
        };
      }
    },

    "treevirtual-start-contract": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-minus-start"]
        };
      }
    },

    "treevirtual-start-expand": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-plus-start"]
        };
      }
    },

    "treevirtual-end-contract": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-minus-end"]
        };
      }
    },

    "treevirtual-end-expand": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-plus-end"]
        };
      }
    },

    "treevirtual-cross-contract": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-minus-cross"]
        };
      }
    },

    "treevirtual-cross-expand": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-plus-cross"]
        };
      }
    },

    "treevirtual-end": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-end"]
        };
      }
    },

    "treevirtual-cross": {
      style(states) {
        return {
          icon: qx.theme.simple.Image.URLS["treevirtual-cross"]
        };
      }
    },

    "treevirtual-node-editor-textfield": {
      include: "textfield",

      style(states) {
        return {
          decorator: undefined,
          padding: [2, 2]
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
    "column-layer": "widget",

    "virtual-background-span": {
      alias: "widget",

      style(states) {
        var style = {
          decorator: "virtual-background-span"
        };

        if (states.header) {
          style.decorator = "virtual-background-header";
          style.backgroundColor = "table-header-cell";
        } else if (states.selected) {
          style.backgroundColor = "table-row-background-selected";
        } else if (states.odd) {
          style.backgroundColor = "table-row-background-odd";
        } else {
          style.backgroundColor = "table-row-background-even";
        }

        return style;
      }
    },

    "virtual-list-header-cell": {
      alias: "atom",

      style(states) {
        return {
          font: "bold",
          paddingTop: 3,
          paddingLeft: 5
        };
      }
    },

    "group-item": {
      include: "label",
      alias: "label",

      style(states) {
        return {
          padding: 4,
          backgroundColor: "#BABABA",
          textColor: "white",
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
          itemHeight: 21
        };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    cell: {
      style(states) {
        return {
          backgroundColor: states.selected
            ? "table-row-background-selected"
            : "table-row-background-even",
          textColor: states.selected ? "text-selected" : "text",
          padding: [3, 6]
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
    "cell-boolean": "cell",
    "cell-atom": "cell",
    "cell-date": "cell",
    "cell-html": "cell"
  }
});
