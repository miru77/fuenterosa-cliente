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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Inicia sesi??n"),
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
        children: width > breakpointUpMd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnVXZWIiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtcyIsInNldFBsYXRmb3JtcyIsInNob3dNb2RhbCIsInNldHNob3dNb2RhbCIsInRpdGxlTW9kYWwiLCJzZXR0aXRsZU1vZGFsIiwidW5kZWZpbmVkIiwidXNlciIsInNldFVzZXIiLCJ1c2VBdXRoIiwibG9nb3V0IiwiYXV0aCIsInVzZUVmZmVjdCIsImdldFBsYXRmb3JtQXBpIiwicmVzcG9uc2UiLCJnZXRNZUFwaSIsIm9uU2hvd01vZGFsIiwib25DbG9zZU1vZGFsIiwiYnJlYWtwb2ludFVwTWQiLCJNZW51UGxhdGZvcm1zIiwibWFwIiwicGxhdGZvcm0iLCJ1cmwiLCJ0aXRsZSIsIl9pZCIsIk1lbnVPcHRpb25zIiwicHJvcHMiLCJ1c2VDYXJ0IiwicHJvZHVjdHNDYXJ0IiwibmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSx1QkFFZEMscUVBQWEsRUFGQztBQUFBLE1BRXZCQyxLQUZ1QixrQkFFdkJBLEtBRnVCOztBQUFBLGtCQUtJQyxzREFBUSxDQUFDLEVBQUQsQ0FMWjtBQUFBLE1BS3ZCQyxTQUx1QjtBQUFBLE1BS1pDLFlBTFk7O0FBQUEsbUJBT0lGLHNEQUFRLENBQUMsS0FBRCxDQVBaO0FBQUEsTUFPdkJHLFNBUHVCO0FBQUEsTUFPWkMsWUFQWTs7QUFBQSxtQkFTTUosc0RBQVEsQ0FBQyxlQUFELENBVGQ7QUFBQSxNQVN2QkssVUFUdUI7QUFBQSxNQVNYQyxhQVRXOztBQUFBLG1CQVdOTixzREFB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TCxFQUVNRixZQUFZLEdBQUcsQ0FBZixpQkFDTSxxRUFBQyx1REFBRDtBQUFPLGlCQUFLLEVBQUMsS0FBYjtBQUFtQixvQkFBUSxNQUEzQjtBQUE0QixvQkFBUSxNQUFwQztBQUFBLHNCQUNDQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCQSxlQWtDQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxlQUFPLEVBQUVsQixNQUFwQjtBQUE2QixpQkFBUyxFQUFDLEtBQXZDO0FBQUEsK0JBQ0EscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRDtBQUFBLG9CQURDLGdCQXdDRCxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxhQUFPLEVBQUVNLFdBQXBCO0FBQUEsOEJBQ0EscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXNESDs7SUEzRFFTLFc7VUFHa0JFLHNEOzs7TUFIbEJGLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dhbWVdLjQ2YWI0N2M5OGVmMThlOGY5ZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRhaW5lciwgTWVudSwgR3JpZCwgSWNvbiwgTGFiZWx9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQmFzaWNNb2RhbCBmcm9tIFwiLi4vLi4vTW9kYWwvQmFzaWNNb2RhbFwiXHJcbmltcG9ydCBBdXRoIGZyb20gXCIuLi8uLi9BdXRoXCJcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhcIlxyXG5pbXBvcnQgdXNlQ2FydCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQ2FydFwiXHJcbmltcG9ydCB7Z2V0TWVBcGl9IGZyb20gXCIuLi8uLi8uLi9hcGkvdXNlclwiXHJcbmltcG9ydCB7Z2V0UGxhdGZvcm1BcGl9IGZyb20gXCIuLi8uLi8uLi9hcGkvcGxhdGZvcm1cIlxyXG5pbXBvcnQge21hcH0gZnJvbSBcImxvZGFzaFwiXHJcbmltcG9ydCB7YnJlYWtwb2ludFVwU219IGZyb20gXCIuLi8uLi8uLi91dGlscy9icmVha3BvaW50XCJcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemVcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVXZWIoKSB7XHJcblxyXG4gICAgY29uc3Qge3dpZHRofSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcblxyXG4gICAgY29uc3QgW3BsYXRmb3Jtcywgc2V0UGxhdGZvcm1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldHNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbdGl0bGVNb2RhbCwgc2V0dGl0bGVNb2RhbF0gPSB1c2VTdGF0ZShcIkluaWNpYSBzZXNpw7NuXCIpXHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG5cclxuICAgIGNvbnN0IHtsb2dvdXQsIGF1dGh9ID0gdXNlQXV0aCgpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UGxhdGZvcm1BcGkoKVxyXG4gICAgICAgICAgIHNldFBsYXRmb3JtcyhyZXNwb25zZSB8fCBbXSlcclxuICAgICAgIH0pKClcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE1lQXBpKGxvZ291dClcclxuICAgICAgICAgICAgc2V0VXNlcihyZXNwb25zZSlcclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbYXV0aF0pXHJcblxyXG4gICAgY29uc3Qgb25TaG93TW9kYWwgPSAoKSA9PiBzZXRzaG93TW9kYWwodHJ1ZSlcclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpID0+IHNldHNob3dNb2RhbChmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgeyAod2lkdGggPiBicmVha3BvaW50VXBNZCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJtZW51X19sZWZ0XCIgbW9iaWxlPXsxNn0gdGFibGV0PXsxNn0gY29tcHV0ZXI9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVBsYXRmb3JtcyBwbGF0Zm9ybXM9e3BsYXRmb3Jtc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT1cIm1lbnVfX3JpZ2h0XCIgbW9iaWxlPXsxNn0gdGFibGV0PXsxNn0gY29tcHV0ZXI9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAge3VzZXIgIT09IHVuZGVmaW5lZCAmJiAgPE1lbnVPcHRpb25zIG9uU2hvd01vZGFsPXtvblNob3dNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dD17bG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9XCJtZW51X19yaWdodFwiIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICE9PSB1bmRlZmluZWQgJiYgIDxNZW51T3B0aW9ucyBvblNob3dNb2RhbD17b25TaG93TW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQ9e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QmFzaWNNb2RhbCBzaG93PXtzaG93TW9kYWx9IHNldFNob3cgPSB7c2V0c2hvd01vZGFsfSB0aXRsZT17dGl0bGVNb2RhbH0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxBdXRoIG9uQ2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfSBzZXR0aXRsZU1vZGFsPXtzZXR0aXRsZU1vZGFsfS8+XHJcbiAgICAgICAgICAgIDwvQmFzaWNNb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVudVBsYXRmb3Jtcyh7cGxhdGZvcm1zfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAge21hcChwbGF0Zm9ybXMsIChwbGF0Zm9ybSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2dhbWVzLyR7cGxhdGZvcm0udXJsfWB9ICBrZXk9e3BsYXRmb3JtLl9pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImFcIiBuYW1lPXtwbGF0Zm9ybS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF0Zm9ybXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZW51T3B0aW9ucyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHtvblNob3dNb2RhbCwgdXNlciwgbG9nb3V0fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge3Byb2R1Y3RzQ2FydH0gPSB1c2VDYXJ0KClcclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZ2FtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgTWlzIHBlZGlkb3NcclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVhcnQgb3V0bGluZVwiLz5cclxuICAgICAgICAgICAgICAgICAgRmF2b3JpdG9zXHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlciBvdXRsaW5lXCIvPlxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfSB7dXNlci5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJhXCIgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjYXJ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHNDYXJ0ID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sb3I9XCJyZWRcIiBmbG9hdGluZyBjaXJjdWxhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0c0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17bG9nb3V0fSAgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBvd2VyIG9mZlwiLz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25TaG93TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXIgb3V0bGluZVwiLz5cclxuICAgICAgICAgICAgICAgICAgTWkgY3VlbnRhXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgIFxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==