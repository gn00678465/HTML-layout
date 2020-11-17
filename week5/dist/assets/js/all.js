"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

;

(function () {
  var user_array = [{
    name: 'Emir Wicks',
    mail: 'emir.wicks@mail.com',
    verified: true
  }, {
    name: 'Zaina Goldsmith',
    mail: 'zaina.goldsmith@mail.com',
    verified: true
  }, {
    name: 'Mahima Lopez',
    mail: 'Mahima.Lopez@mail.com',
    verified: true
  }, {
    name: 'Pharrell Murray',
    mail: 'Pharrell.Murray@mail.com',
    verified: true
  }, {
    name: 'Annika Mcbride',
    mail: 'Annika.Mcbride@mail.com',
    verified: true
  }, {
    name: 'Fatimah Clark',
    mail: 'Fatimah.Clark@mail.com',
    verified: true
  }, {
    name: 'Klaudia Rhodes',
    mail: 'Klaudia.Rhodes@mail.com',
    verified: true
  }, {
    name: 'Tillie Lucero',
    mail: 'Tillie.Lucero@mail.com',
    verified: true
  }, {
    name: 'Sabrina Stephenson',
    mail: 'Sabrina.Stephenson@mail.com',
    verified: true
  }, {
    name: 'Annie Smith',
    mail: 'Annie.Smith@mail.com',
    verified: true
  }];
  $(document).ready(function () {
    var currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');

    function page() {
      if (currentPath === 'index') {
        indexHandler();
      } else if (currentPath === 'admin') {
        adminHandler();
      }
    }

    function indexHandler() {
      var textEditBtn = document.querySelector('[data-toggle="text-edit"]');
      var textEdit = document.querySelector('.text-edit'); // text-edit

      textEditBtn.addEventListener('click', function () {
        if (!textEdit.classList.contains('show')) {
          textEdit.classList.add('show');
        }

        textEdit.querySelector('[data-dismiss="modal"').addEventListener('click', function () {
          textEdit.classList.remove('show');
        });
      });
    }

    function adminHandler() {
      // 產生表格
      var tbody = document.querySelector('.tbody');

      function userTable() {
        if (currentPath == 'admin') {
          var user_html = user_array.map(function (user, index) {
            return "\n            <tr class=\"tr\">\n              <td class=\"td\">#".concat(index + 1, "</td>\n              <td class=\"td\">").concat(user.name, "</td>\n              <td class=\"td\">").concat(user.mail, "</td>\n              <td class=\"td\">").concat(user.verified ? 'Yes' : 'No', "</td>\n              <td class=\"td\">\n                <button type=\"button\" class=\"material-icons btn-icon hover-primary mr-6\" data-target=\"userPhotoModal\" data-action=\"view\" data-name=\"").concat(user.name, "\">remove_red_eye</button>\n                <button type=\"button\" class=\"material-icons btn-icon hover-primary edit-admin\" data-target=\"userDataModal\" data-action=\"edit\" data-name=\"").concat(user.name, "\">edit</button>\n              </td>\n            </tr>\n            ");
          }).join('');
          tbody.innerHTML = user_html;
          addAdminBtn.addEventListener('click', modalHandler);
          table.addEventListener('click', tableHandler);
        }
      }

      var table = document.querySelector('.table'); // modal

      var addAdminBtn = document.querySelector('.add-admin');
      var modalShow = false;
      var modalStatus = '';
      var currentModal = null;
      var userTemp = {};

      var modals = _toConsumableArray(document.querySelectorAll('.modal'));

      modals.forEach(function (modal) {
        modal.classList.add('d-none');
      });

      function modalShowHandler() {
        currentModal.classList.remove('d-none');
        currentModal.classList.add('d-block');
        setTimeout(function () {
          currentModal.classList.add('show');
        }, 200);
        var deactivate = currentModal.querySelector('#deactivate');
        var addBtn = currentModal.querySelector('.add-btn');
        var updateBtn = currentModal.querySelector('.update-btn');

        if (modalShow && modalStatus === 'edit') {
          var name = currentModal.querySelector('#name');
          var mail = currentModal.querySelector('#mail');
          var verification = currentModal.querySelector('#verification');
          deactivate.classList.remove('d-none');
          deactivate.classList.add('d-block');
          addBtn.style.display = 'none';
          updateBtn.style.display = 'inline-block';
          name.value = userTemp.name;
          mail.value = userTemp.mail;

          if (userTemp.verified) {
            verification.querySelector('.label').innerText = "Verified";
            verification.querySelector('#verified').checked = userTemp.verified;
            verification.querySelector('#verified').readOnly = true;
            verification.querySelector('[type="button"]').disabled = true;
          }
        } else if (modalShow && modalStatus === 'add') {
          deactivate.classList.add('d-none');
          deactivate.classList.remove('d-block');
          updateBtn.style.display = 'none';
          addBtn.style.display = 'inline-block';
        }
      }

      function modalHandler(e) {
        var _e$target$dataset = e.target.dataset,
            target = _e$target$dataset.target,
            action = _e$target$dataset.action;
        currentModal = document.querySelector("#".concat(target));
        modalShow = true;
        modalStatus = action;
        modalShowHandler();
        currentModal.addEventListener('click', function (e) {
          if (e.currentTarget === e.target || e.target.dataset.dismiss === 'modal') {
            moadalClose();
          }
        });

        if (action === 'view') {
          var userDetial = currentModal.querySelector('#userDetial');
          var showBtn = userDetial.querySelector('.showBtn');

          if (userDetial.classList.contains('open')) {
            userDetial.classList.remove('open');
            showBtn.addEventListener('click', function () {
              userDetial.classList.toggle('open');
            });
          }

          showBtn.addEventListener('click', function () {
            userDetial.classList.toggle('open');
          });
        }
      }

      function moadalClose() {
        if (modalShow && modalStatus === 'edit') {
          userTemp = {};
          var name = currentModal.querySelector('#name');
          var mail = currentModal.querySelector('#mail');
          var verification = currentModal.querySelector('#verification');
          name.value = '';
          mail.value = '';
          verification.querySelector('#verified').checked = false;
          verification.querySelector('[type="button"]').disabled = false;
        }

        currentModal.classList.remove('show');
        setTimeout(function () {
          currentModal.classList.remove('d-block');
          currentModal.classList.add('d-none');
          modalShow = false;
          modalStatus = ''; // currentModal = null;
        }, 200);
      }

      function tableHandler(e) {
        var name = e.target.dataset.name;
        var index = user_array.findIndex(function (user) {
          return user.name === name;
        });
        userTemp = _objectSpread({}, user_array[index]);
        modalHandler(e);
      }

      userTable();
    }

    page();
  });
})($);
//# sourceMappingURL=all.js.map
