qx.Theme.define("qx.ui.virtual.theme.indigo.Appearance", {
  appearances: {
    "virtual-tree": {
      include: "tree",
      alias: "tree",

      style(states) {
        return {
          itemHeight: 27
        };
      }
    },

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
