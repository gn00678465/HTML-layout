"use strict";

$(document).ready(function () {
  function setRootStyle() {
    var clientWidth = window.innerWidth;
    document.documentElement.style.setProperty('--index-image-height', "".concat(clientWidth / 2, "px"));
  }

  window.addEventListener('resize', setRootStyle);
  setRootStyle();
});
//# sourceMappingURL=all.js.map
