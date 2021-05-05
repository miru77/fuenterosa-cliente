webpackHotUpdate_N_E("pages/[game]",{

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
      logout = props.logout;

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
            lineNumber: 122,
            columnNumber: 22
          }, this), "Mis pedidos"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/wishlist",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "heart outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 22
          }, this), "Favoritos"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/account",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          as: "a",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            name: "user outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 22
          }, this), user.name, " ", user.lastname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
            lineNumber: 143,
            columnNumber: 22
          }, this), productsCart > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
            color: "red",
            floating: true,
            circular: true,
            children: productsCart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        onClick: logout,
        className: "m-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "power off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 18
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      onClick: onShowModal,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: "user outline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this), "Mi cuenta"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnVXZWIiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtcyIsInNldFBsYXRmb3JtcyIsInNob3dNb2RhbCIsInNldHNob3dNb2RhbCIsInRpdGxlTW9kYWwiLCJzZXR0aXRsZU1vZGFsIiwidW5kZWZpbmVkIiwidXNlciIsInNldFVzZXIiLCJ1c2VBdXRoIiwibG9nb3V0IiwiYXV0aCIsInVzZUVmZmVjdCIsImdldFBsYXRmb3JtQXBpIiwicmVzcG9uc2UiLCJnZXRNZUFwaSIsIm9uU2hvd01vZGFsIiwib25DbG9zZU1vZGFsIiwiYnJlYWtwb2ludFVwU20iLCJNZW51UGxhdGZvcm1zIiwibWFwIiwicGxhdGZvcm0iLCJ1cmwiLCJ0aXRsZSIsIl9pZCIsIk1lbnVPcHRpb25zIiwicHJvcHMiLCJ1c2VDYXJ0IiwicHJvZHVjdHNDYXJ0IiwibmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSx1QkFFZEMscUVBQWEsRUFGQztBQUFBLE1BRXZCQyxLQUZ1QixrQkFFdkJBLEtBRnVCOztBQUFBLGtCQUtJQyxzREFBUSxDQUFDLEVBQUQsQ0FMWjtBQUFBLE1BS3ZCQyxTQUx1QjtBQUFBLE1BS1pDLFlBTFk7O0FBQUEsbUJBT0lGLHNEQUFRLENBQUMsS0FBRCxDQVBaO0FBQUEsTUFPdkJHLFNBUHVCO0FBQUEsTUFPWkMsWUFQWTs7QUFBQSxtQkFTTUosc0RBQVEsQ0FBQyxlQUFELENBVGQ7QUFBQSxNQVN2QkssVUFUdUI7QUFBQSxNQVNYQyxhQVRXOztBQUFBLG1CQVdOTixzREFB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REwsRUFFTUYsWUFBWSxHQUFHLENBQWYsaUJBQ00scUVBQUMsdURBQUQ7QUFBTyxpQkFBSyxFQUFDLEtBQWI7QUFBbUIsb0JBQVEsTUFBM0I7QUFBNEIsb0JBQVEsTUFBcEM7QUFBQSxzQkFDQ0E7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkEsZUFrQ0MscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBTyxFQUFFbEIsTUFBcEI7QUFBNkIsaUJBQVMsRUFBQyxLQUF2QztBQUFBLCtCQUNBLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Q7QUFBQSxvQkFEQyxnQkF3Q0QscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBTyxFQUFFTSxXQUFwQjtBQUFBLDhCQUNBLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFzREg7O0lBM0RRUyxXO1VBR2tCRSxzRDs7O01BSGxCRixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tnYW1lXS5kOGI5NTVhNTMyZjFlYjcyNTZiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250YWluZXIsIE1lbnUsIEdyaWQsIEljb24sIExhYmVsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEJhc2ljTW9kYWwgZnJvbSBcIi4uLy4uL01vZGFsL0Jhc2ljTW9kYWxcIlxyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vLi4vQXV0aFwiXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRoXCJcclxuaW1wb3J0IHVzZUNhcnQgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUNhcnRcIlxyXG5pbXBvcnQge2dldE1lQXBpfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3VzZXJcIlxyXG5pbXBvcnQge2dldFBsYXRmb3JtQXBpfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3BsYXRmb3JtXCJcclxuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQge2JyZWFrcG9pbnRVcFNtfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYnJlYWtwb2ludFwiXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51V2ViKCkge1xyXG5cclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtwbGF0Zm9ybXMsIHNldFBsYXRmb3Jtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRzaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW3RpdGxlTW9kYWwsIHNldHRpdGxlTW9kYWxdID0gdXNlU3RhdGUoXCJJbmljaWEgc2VzacOzblwiKVxyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuXHJcbiAgICBjb25zdCB7bG9nb3V0LCBhdXRofSA9IHVzZUF1dGgoKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFBsYXRmb3JtQXBpKClcclxuICAgICAgICAgICBzZXRQbGF0Zm9ybXMocmVzcG9uc2UgfHwgW10pXHJcbiAgICAgICB9KSgpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNZUFwaShsb2dvdXQpXHJcbiAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UpXHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgIFxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIGNvbnN0IG9uU2hvd01vZGFsID0gKCkgPT4gc2V0c2hvd01vZGFsKHRydWUpXHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRzaG93TW9kYWwoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsgKHdpZHRoID4gYnJlYWtwb2ludFVwU20pID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPVwibWVudV9fbGVmdFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVQbGF0Zm9ybXMgcGxhdGZvcm1zPXtwbGF0Zm9ybXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJtZW51X19yaWdodFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICE9PSB1bmRlZmluZWQgJiYgIDxNZW51T3B0aW9ucyBvblNob3dNb2RhbD17b25TaG93TW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQ9e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPVwibWVudV9fcmlnaHRcIiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlciAhPT0gdW5kZWZpbmVkICYmICA8TWVudU9wdGlvbnMgb25TaG93TW9kYWw9e29uU2hvd01vZGFsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nb3V0PXtsb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJhc2ljTW9kYWwgc2hvdz17c2hvd01vZGFsfSBzZXRTaG93ID0ge3NldHNob3dNb2RhbH0gdGl0bGU9e3RpdGxlTW9kYWx9IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8QXV0aCBvbkNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0gc2V0dGl0bGVNb2RhbD17c2V0dGl0bGVNb2RhbH0vPlxyXG4gICAgICAgICAgICA8L0Jhc2ljTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVQbGF0Zm9ybXMoe3BsYXRmb3Jtc30pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICAgIHttYXAocGxhdGZvcm1zLCAocGxhdGZvcm0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9nYW1lcy8ke3BsYXRmb3JtLnVybH1gfSAga2V5PXtwbGF0Zm9ybS5faWR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJhXCIgbmFtZT17cGxhdGZvcm0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGxhdGZvcm1zLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVudU9wdGlvbnMocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7b25TaG93TW9kYWwsIHVzZXIsIGxvZ291dH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtwcm9kdWN0c0NhcnR9ID0gdXNlQ2FydCgpXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImdhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIE1pcyBwZWRpZG9zXHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93aXNobGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlYXJ0IG91dGxpbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIEZhdm9yaXRvc1xyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXIgb3V0bGluZVwiLz5cclxuICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX0ge3VzZXIubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2FydFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzQ2FydCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbG9yPVwicmVkXCIgZmxvYXRpbmcgY2lyY3VsYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHNDYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2xvZ291dH0gIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwb3dlciBvZmZcIi8+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e29uU2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyIG91dGxpbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIE1pIGN1ZW50YVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICAgICBcclxuICAgIClcclxuICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=