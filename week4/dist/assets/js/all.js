"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  window.addEventListener('load', loadHandler);
  window.addEventListener('scroll', scrollHandler); // variables

  var navbar = document.querySelector('.navbar');

  var tabs = _toConsumableArray(document.querySelectorAll('.tab'));

  var content = document.querySelector('.content');

  function loadHandler() {
    function tabHandler() {
      var currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');
      var currentTab = this.dataset.tab;

      if (currentPath === currentTab) {
        this.classList.add('active');
      }
    }

    ;
    tabs.forEach(function (tab) {
      var link = tab.querySelector('a'); // link.classList.remove('active');

      link.addEventListener('click', tabHandler);
    });
  }

  function scrollHandler(e) {
    var _navbar$getBoundingCl = navbar.getBoundingClientRect(),
        height = _navbar$getBoundingCl.height;

    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
      content.style.paddingTop = "".concat(height, "px");
    } else {
      navbar.classList.remove('fixed');
      content.style.paddingTop = "0";
    }
  }

  ;
});
"use strict";

var opticalData = {
  sn: 'BJ41600S',
  price: '3490',
  colors: ['brown', 'darkslategray']
};
var opticalDatas = [];

for (var i = 0; i < 12; i++) {
  var num = (i + 12) % 6;
  var imgPath = "./assets/images/series/optical-".concat(num + 1, ".png");
  opticalData.img = imgPath;
  opticalDatas.push(opticalData);
}
//# sourceMappingURL=all.js.map
