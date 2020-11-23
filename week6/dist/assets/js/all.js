"use strict";

;

(function () {
  $(document).ready(function () {
    var products = [];
    var currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');

    function pageHandler() {
      if (currentPath === 'product') {
        productHandler();
      } else if (currentPath === 'login') {
        loginHandler();
      }
    }

    function productHandler() {
      var productsList = document.querySelector('#productsList');

      for (var i = 0; i < 12; i++) {
        var productData = {
          "title": "Poppy & Barley",
          "imgPath": "./assets/images/product/products".concat(i + 1, ".jpg"),
          "brand": 'Jo Malone',
          "base_price": 1580,
          "price": 1380
        };
        products.push(productData);
      }

      function formatPrice(value) {
        var val = (value / 1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

      var html = products.map(function (item) {
        return "\n        <div class=\"col-6 col-md-4 col-lg-3 mb-15\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <img src=\"".concat(item.imgPath, "\" alt=\"\" class=\"product-img\">\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"font-weight-semibold text-lg text-lg-2_lg\">Poppy & Barley</h4>\n              <p class=\"\">Jo Malone</p>\n              <p>NT$").concat(formatPrice(item.price), "<span class=\"ml-2 line-through\">NT$1,580</span></p>\n              <a href=\"\" class=\"text-primary mr-3\">\n                <span class=\"material-icons text-lg text-lg-2_lg\">\n                  favorite\n                  </span>\n              </a><a href=\"\" class=\"text-primary\">\n                <span class=\"material-icons text-lg text-lg-2_lg\">\n                  shopping_cart\n                  </span>\n              </a>\n            </div>\n          </div>\n        </div>\n        ");
      }).join("");
      productsList.innerHTML = html;
    }

    function loginHandler() {
      var loginBtn = document.querySelector('#loginBtn');
      loginBtn.addEventListener('click', function () {
        location.href = '/member.html';
      });
    }

    ;
    pageHandler();
  });
})();
//# sourceMappingURL=all.js.map
