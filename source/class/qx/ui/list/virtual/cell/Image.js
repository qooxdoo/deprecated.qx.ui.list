/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Til Schneider (til132)
     * Carsten Lergenmueller (carstenl)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */

qx.Class.define("qx.ui.list.virtual.cell.Image", {
  extend: qx.ui.list.virtual.cell.AbstractImage,

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties: {
    appearance: {
      refine: true,
      init: "cell-image"
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members: {
    // overridden
    _identifyImage(value) {
      return value;
    }
  }
});
