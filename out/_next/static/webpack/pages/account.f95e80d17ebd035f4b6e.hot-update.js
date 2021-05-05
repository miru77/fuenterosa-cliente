webpackHotUpdate_N_E("pages/account",{

/***/ "./components/Header/Menu/Menu.js":
/*!****************************************!*\
  !*** ./components/Header/Menu/Menu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuWeb; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_BasicModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modal/BasicModal */ "./components/Modal/BasicModal/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Auth */ "./components/Auth/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./hooks/useAuth.js");
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useCart */ "./hooks/useCart.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/user */ "./api/user.js");
/* harmony import */ var _api_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/platform */ "./api/platform.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_breakpoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/breakpoint */ "./utils/breakpoint.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");





var _jsxFileName = "C:\\react\\ecommerce\\client\\components\\Header\\Menu\\Menu.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();













function MenuWeb() {
  _s();

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_14__["default"])(),
      width = _useWindowSize.width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      platforms = _useState[0],
      setPlatforms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showModal = _useState2[0],
      setshowModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Inicia sesión"),
      titleModal = _useState3[0],
      settitleModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      logout = _useAuth.logout,
      auth = _useAuth.auth;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_platform__WEBPACK_IMPORTED_MODULE_11__["getPlatformApi"])();

            case 2:
              response = _context.sent;
              setPlatforms(response || []);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response;
      return C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_api_user__WEBPACK_IMPORTED_MODULE_10__["getMeApi"])(logout);

            case 2:
              response = _context2.sent;
              setUser(response);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [auth]);

  var onShowModal = function onShowModal() {
    return setshowModal(true);
  };

  var onCloseModal = function onCloseModal() {
    return setshowModal(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "menu",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        children: width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_13__["breakpointUpSm"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            className: "menu__left",
            mobile: 16,
            tablet: 16,
            computer: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuPlatforms, {
              platforms: platforms
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 23
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            className: "menu__right",
            mobile: 16,
            tablet: 16,
            computer: 10,
            children: user !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuOptions, {
              width: width,
              onShowModal: onShowModal,
              user: user,
              logout: logout
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 47
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            className: "menu__right",
            mobile: 16,
            tablet: 16,
            computer: 10,
            children: user !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuOptions, {
              onShowModal: onShowModal,
              user: user,
              logout: logout
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 47
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 22
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_BasicModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      show: showModal,
      setShow: setshowModal,
      title: titleModal,
      size: "small",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Auth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onCloseModal: onCloseModal,
        settitleModal: settitleModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(MenuWeb, "WW384C6+sKG30Jk0Bx3978U6dWQ=", false, function () {
  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_14__["default"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = MenuWeb;

function MenuPlatforms(_ref3) {
  var _this = this;

  var platforms = _ref3.platforms;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    children: Object(lodash__WEBPACK_IMPORTED_MODULE_12__["map"])(platforms, function (platform) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/games/".concat(platform.url),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          name: platform.url,
          children: platforms.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 29
        }, _this)
      }, platform._id, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 13
  }, this);
}

_c2 = MenuPlatforms;

function MenuOptions(props) {
  _s2();

  var onShowModal = props.onShowModal,
      user = props.user,
      logout = props.logout,
      width = props.width;

  var _useCart = Object(_hooks_useCart__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      productsCart = _useCart.productsCart;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/order",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "game"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 22
          }, this), width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_13__["breakpointUpSm"] ? " Mis pedidos" : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/wishlist",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "heart outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 22
          }, this), width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_13__["breakpointUpSm"] ? "Favoritos" : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/account",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "user outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 22
          }, this), width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_13__["breakpointUpSm"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [user.name, " ", user.lastname]
          }, void 0, true) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/cart",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          className: "m-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 22
          }, this), productsCart > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
            color: "red",
            floating: true,
            circular: true,
            children: productsCart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        onClick: logout,
        className: "m-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "power off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 18
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      onClick: onShowModal,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: "user outline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this), "Mi cuenta"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 9
  }, this);
}

_s2(MenuOptions, "RTCh3g3sk3nEeSQm4SWqFqun0Ls=", false, function () {
  return [_hooks_useCart__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c3 = MenuOptions;

var _c, _c2, _c3;

$RefreshReg$(_c, "MenuWeb");
$RefreshReg$(_c2, "MenuPlatforms");
$RefreshReg$(_c3, "MenuOptions");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnVXZWIiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtcyIsInNldFBsYXRmb3JtcyIsInNob3dNb2RhbCIsInNldHNob3dNb2RhbCIsInRpdGxlTW9kYWwiLCJzZXR0aXRsZU1vZGFsIiwidW5kZWZpbmVkIiwidXNlciIsInNldFVzZXIiLCJ1c2VBdXRoIiwibG9nb3V0IiwiYXV0aCIsInVzZUVmZmVjdCIsImdldFBsYXRmb3JtQXBpIiwicmVzcG9uc2UiLCJnZXRNZUFwaSIsIm9uU2hvd01vZGFsIiwib25DbG9zZU1vZGFsIiwiYnJlYWtwb2ludFVwU20iLCJNZW51UGxhdGZvcm1zIiwibWFwIiwicGxhdGZvcm0iLCJ1cmwiLCJ0aXRsZSIsIl9pZCIsIk1lbnVPcHRpb25zIiwicHJvcHMiLCJ1c2VDYXJ0IiwicHJvZHVjdHNDYXJ0IiwibmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSx1QkFFZEMscUVBQWEsRUFGQztBQUFBLE1BRXZCQyxLQUZ1QixrQkFFdkJBLEtBRnVCOztBQUFBLGtCQUtJQyxzREFBUSxDQUFDLEVBQUQsQ0FMWjtBQUFBLE1BS3ZCQyxTQUx1QjtBQUFBLE1BS1pDLFlBTFk7O0FBQUEsbUJBT0lGLHNEQUFRLENBQUMsS0FBRCxDQVBaO0FBQUEsTUFPdkJHLFNBUHVCO0FBQUEsTUFPWkMsWUFQWTs7QUFBQSxtQkFTTUosc0RBQVEsQ0FBQyxlQUFELENBVGQ7QUFBQSxNQVN2QkssVUFUdUI7QUFBQSxNQVNYQyxhQVRXOztBQUFBLG1CQVdOTixzREFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJBLGVBMkJBLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQSwrQkFDQSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxZQUFFLEVBQUMsR0FBZDtBQUFrQixtQkFBUyxFQUFDLEtBQTVCO0FBQUEsa0NBQ0sscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFETCxFQUVNRixZQUFZLEdBQUcsQ0FBZixpQkFDTSxxRUFBQyx1REFBRDtBQUFPLGlCQUFLLEVBQUMsS0FBYjtBQUFtQixvQkFBUSxNQUEzQjtBQUE0QixvQkFBUSxNQUFwQztBQUFBLHNCQUNDQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCQSxlQXVDQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxlQUFPLEVBQUVsQixNQUFwQjtBQUE2QixpQkFBUyxFQUFDLEtBQXZDO0FBQUEsK0JBQ0EscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZDRDtBQUFBLG9CQURDLGdCQTZDRCxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxhQUFPLEVBQUVNLFdBQXBCO0FBQUEsOEJBQ0EscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTJESDs7SUFsRVFTLFc7VUFHa0JFLHNEOzs7TUFIbEJGLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC5mOTVlODBkMTdlYmQwMzVmNGI2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250YWluZXIsIE1lbnUsIEdyaWQsIEljb24sIExhYmVsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEJhc2ljTW9kYWwgZnJvbSBcIi4uLy4uL01vZGFsL0Jhc2ljTW9kYWxcIlxyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vLi4vQXV0aFwiXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRoXCJcclxuaW1wb3J0IHVzZUNhcnQgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUNhcnRcIlxyXG5pbXBvcnQge2dldE1lQXBpfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3VzZXJcIlxyXG5pbXBvcnQge2dldFBsYXRmb3JtQXBpfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3BsYXRmb3JtXCJcclxuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQge2JyZWFrcG9pbnRVcFNtfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYnJlYWtwb2ludFwiXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51V2ViKCkge1xyXG5cclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtwbGF0Zm9ybXMsIHNldFBsYXRmb3Jtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRzaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW3RpdGxlTW9kYWwsIHNldHRpdGxlTW9kYWxdID0gdXNlU3RhdGUoXCJJbmljaWEgc2VzacOzblwiKVxyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuXHJcbiAgICBjb25zdCB7bG9nb3V0LCBhdXRofSA9IHVzZUF1dGgoKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFBsYXRmb3JtQXBpKClcclxuICAgICAgICAgICBzZXRQbGF0Zm9ybXMocmVzcG9uc2UgfHwgW10pXHJcbiAgICAgICB9KSgpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNZUFwaShsb2dvdXQpXHJcbiAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UpXHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgIFxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIGNvbnN0IG9uU2hvd01vZGFsID0gKCkgPT4gc2V0c2hvd01vZGFsKHRydWUpXHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRzaG93TW9kYWwoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsgKHdpZHRoID4gYnJlYWtwb2ludFVwU20pID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPVwibWVudV9fbGVmdFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVQbGF0Zm9ybXMgcGxhdGZvcm1zPXtwbGF0Zm9ybXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJtZW51X19yaWdodFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICE9PSB1bmRlZmluZWQgJiYgIDxNZW51T3B0aW9ucyB3aWR0aD17d2lkdGh9IG9uU2hvd01vZGFsPXtvblNob3dNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dD17bG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJtZW51X19yaWdodFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICE9PSB1bmRlZmluZWQgJiYgIDxNZW51T3B0aW9ucyBvblNob3dNb2RhbD17b25TaG93TW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQ9e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QmFzaWNNb2RhbCBzaG93PXtzaG93TW9kYWx9IHNldFNob3cgPSB7c2V0c2hvd01vZGFsfSB0aXRsZT17dGl0bGVNb2RhbH0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxBdXRoIG9uQ2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfSBzZXR0aXRsZU1vZGFsPXtzZXR0aXRsZU1vZGFsfS8+XHJcbiAgICAgICAgICAgIDwvQmFzaWNNb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVudVBsYXRmb3Jtcyh7cGxhdGZvcm1zfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAge21hcChwbGF0Zm9ybXMsIChwbGF0Zm9ybSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2dhbWVzLyR7cGxhdGZvcm0udXJsfWB9ICBrZXk9e3BsYXRmb3JtLl9pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIiBuYW1lPXtwbGF0Zm9ybS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF0Zm9ybXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZW51T3B0aW9ucyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHtvblNob3dNb2RhbCwgdXNlciwgbG9nb3V0LCB3aWR0aH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtwcm9kdWN0c0NhcnR9ID0gdXNlQ2FydCgpXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImdhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsgKHdpZHRoID4gYnJlYWtwb2ludFVwU20pID8gKFwiIE1pcyBwZWRpZG9zXCIpIDooXCJcIil9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVhcnQgb3V0bGluZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgeyAod2lkdGggPiBicmVha3BvaW50VXBTbSkgPyAoXCJGYXZvcml0b3NcIikgOihcIlwiKX1cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyIG91dGxpbmVcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB7ICh3aWR0aCA+IGJyZWFrcG9pbnRVcFNtKSA/ICg8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfSB7dXNlci5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgPC8+KSA6KFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2FydFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzQ2FydCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbG9yPVwicmVkXCIgZmxvYXRpbmcgY2lyY3VsYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHNDYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2xvZ291dH0gIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwb3dlciBvZmZcIi8+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e29uU2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyIG91dGxpbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIE1pIGN1ZW50YVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICAgICBcclxuICAgIClcclxuICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=