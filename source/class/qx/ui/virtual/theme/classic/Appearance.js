qx.Theme.define("qx.ui.virtual.theme.classic.Appearance", {
  appearances: {
    /*
    ---------------------------------------------------------------------------
      TREEVIRTUAL
    ---------------------------------------------------------------------------
    */

    treevirtual: {
      style(states) {
        return {
          decorator: "main"
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
          icon: "decoration/treevirtual/line.gif"
        };
      }
    },

    "treevirtual-contract": {
      style(states) {
        return {
          icon: "decoration/tree/minus.gif"
        };
      }
    },

    "treevirtual-expand": {
      style(states) {
        return {
          icon: "decoration/tree/plus.gif"
        };
      }
    },

    "treevirtual-only-contract": {
      style(states) {
        return {
          icon: "decoration/treevirtual/only_minus.gif"
        };
      }
    },

    "treevirtual-only-expand": {
      style(states) {
        return {
          icon: "decoration/treevirtual/only_plus.gif"
        };
      }
    },

    "treevirtual-start-contract": {
      style(states) {
        return {
          icon: "decoration/treevirtual/start_minus.gif"
        };
      }
    },

    "treevirtual-start-expand": {
      style(states) {
        return {
          icon: "decoration/treevirtual/start_plus.gif"
        };
      }
    },

    "treevirtual-end-contract": {
      style(states) {
        return {
          icon: "decoration/treevirtual/end_minus.gif"
        };
      }
    },

    "treevirtual-end-expand": {
      style(states) {
        return {
          icon: "decoration/treevirtual/end_plus.gif"
        };
      }
    },

    "treevirtual-cross-contract": {
      style(states) {
        return {
          icon: "decoration/treevirtual/cross_minus.gif"
        };
      }
    },

    "treevirtual-cross-expand": {
      style(states) {
        return {
          icon: "decoration/treevirtual/cross_plus.gif"
        };
      }
    },

    "treevirtual-end": {
      style(states) {
        return {
          icon: "decoration/treevirtual/end.gif"
        };
      }
    },

    "treevirtual-cross": {
      style(states) {
        return {
          icon: "decoration/treevirtual/cross.gif"
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
