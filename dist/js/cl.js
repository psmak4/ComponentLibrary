/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __webpack_require__(1);
window.onload = function () {
    var app = new app_1.App();
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var header_1 = __webpack_require__(2);
var modal_1 = __webpack_require__(3);
var nav_1 = __webpack_require__(4);
var App = (function () {
    function App() {
        var _this = this;
        this.RegisterModals = function () {
            _this.Modals = new Array();
            var modals = document.querySelectorAll('.modal');
            for (var i = 0; i < modals.length; i++) {
                _this.Modals.push(new modal_1.Modal('#' + modals[i].id));
            }
            console.log('modal count', _this.Modals.length);
        };
        this.RegisterHeaders = function () {
            _this.Headers = new Array();
            var headers = document.querySelectorAll('.header');
            for (var i = 0; i < headers.length; i++) {
                _this.Headers.push(new header_1.Header('#' + headers[i].id));
            }
            console.log('header count', _this.Headers.length);
        };
        this.RegisterNavs = function () {
            _this.Navs = new Array();
            var navs = document.querySelectorAll('.nav');
            for (var i = 0; i < navs.length; i++) {
                _this.Navs.push(new nav_1.Nav('#' + navs[i].id));
            }
            console.log('nav count', _this.Navs.length);
        };
        this.RegisterHeaders();
        this.RegisterModals();
        this.RegisterNavs();
    }
    return App;
}());
exports.App = App;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Header = (function () {
    function Header(headerId) {
        this.headerDom = document.querySelector(headerId);
    }
    return Header;
}());
exports.Header = Header;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Modal = (function () {
    function Modal(modalId) {
        var _this = this;
        this.RegisterClosers = function (modalId) {
            var closers = document.querySelectorAll(modalId + ' [data-modal-close]');
            for (var i = 0; i < closers.length; i++) {
                closers[i].addEventListener('click', _this.Close, false);
            }
        };
        this.RegisterOpeners = function (modalId) {
            var openers = document.querySelectorAll('[data-modal-open="' + modalId + '"]');
            for (var i = 0; i < openers.length; i++) {
                openers[i].addEventListener('click', _this.Open, false);
            }
        };
        this.Open = function (event) {
            if (event)
                event.preventDefault();
            _this.modalDom.classList.remove('modal--hidden');
        };
        this.Close = function (event) {
            if (event)
                event.preventDefault();
            _this.modalDom.classList.add('modal--hidden');
        };
        this.modalDom = document.querySelector(modalId);
        this.RegisterClosers(modalId);
        this.RegisterOpeners(modalId);
    }
    return Modal;
}());
exports.Modal = Modal;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Nav = (function () {
    function Nav(navId) {
        var _this = this;
        this.RegisterToggles = function (navId) {
            var toggles = document.querySelectorAll('[data-nav-toggle="' + navId + '"]');
            for (var i = 0; i < toggles.length; i++) {
                toggles[i].addEventListener('click', _this.Toggle, false);
            }
        };
        this.Toggle = function (event) {
            if (event)
                event.preventDefault();
            _this.navDom.classList.toggle('nav--hidden');
        };
        this.RegisterOpeners = function (navId) {
            var openers = document.querySelectorAll('[data-nav-open="' + navId + '"]');
            for (var i = 0; i < openers.length; i++) {
                openers[i].addEventListener('click', _this.Open, false);
            }
        };
        this.Open = function (event) {
            if (event)
                event.preventDefault();
            _this.navDom.classList.remove('nav--hidden');
        };
        this.RegisterClosers = function (navId) {
            var closers = document.querySelectorAll('[data-nav-close="' + navId + '"]');
            for (var i = 0; i < closers.length; i++) {
                closers[i].addEventListener('click', _this.Close, false);
            }
        };
        this.Close = function (event) {
            if (event)
                event.preventDefault();
            _this.navDom.classList.add('modal--hidden');
        };
        this.navDom = document.querySelector(navId);
        this.RegisterToggles(navId);
    }
    return Nav;
}());
exports.Nav = Nav;


/***/ })
/******/ ]);
//# sourceMappingURL=cl.js.map