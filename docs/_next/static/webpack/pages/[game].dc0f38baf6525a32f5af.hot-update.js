webpackHotUpdate_N_E("pages/[game]",{

/***/ "./components/Game/HeaderGame/HeaderGame.js":
/*!**************************************************!*\
  !*** ./components/Game/HeaderGame/HeaderGame.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderGame; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/favorite */ "./api/favorite.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./hooks/useAuth.js");
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useCart */ "./hooks/useCart.js");
/* harmony import */ var _utils_breakpoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/breakpoint */ "./utils/breakpoint.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");





var _jsxFileName = "C:\\react\\ecommerce\\client\\components\\Game\\HeaderGame\\HeaderGame.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();










function HeaderGame(_ref) {
  _s();

  var game = _ref.game;
  var poster = game.poster,
      title = game.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isFavorite = _useState[0],
      setIsFavorite = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      realoadFavorite = _useState2[0],
      setRealoadFavorite = _useState2[1];

  var _useAuth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      auth = _useAuth.auth,
      logout = _useAuth.logout;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_favorite__WEBPACK_IMPORTED_MODULE_6__["isFavoriteApi"])(auth.idUser, game.id, logout);

            case 2:
              response = _context.sent;
              if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["size"])(response) > 0) setIsFavorite(true);else setIsFavorite(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    setRealoadFavorite(false);
  }, [game, realoadFavorite]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    className: "header-game",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      mobile: 16,
      tablet: 6,
      computer: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        src: game.poster.url,
        alt: game.title,
        fluid: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
      mobile: 16,
      tablet: 10,
      computer: 11,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Info, {
        game: game,
        isFavorite: isFavorite,
        auth: auth,
        logout: logout,
        setRealoadFavorite: setRealoadFavorite
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 8
  }, this);
}

_s(HeaderGame, "/D2BSB1jeZkuuR/j8yhIpMrBXP0=", false, function () {
  return [_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = HeaderGame;

function Info(_ref3) {
  _s2();

  var game = _ref3.game,
      isFavorite = _ref3.isFavorite,
      auth = _ref3.auth,
      logout = _ref3.logout,
      setRealoadFavorite = _ref3.setRealoadFavorite;

  var _useCart = Object(_hooks_useCart__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      addProductCart = _useCart.addProductCart;

  var addFavorite = /*#__PURE__*/function () {
    var _ref4 = Object(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!auth) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return Object(_api_favorite__WEBPACK_IMPORTED_MODULE_6__["addFavoriteApi"])(auth.idUser, game.id, logout);

            case 3:
              setRealoadFavorite(true);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addFavorite() {
      return _ref4.apply(this, arguments);
    };
  }();

  var deleteFavorite = /*#__PURE__*/function () {
    var _ref5 = Object(C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return C_react_ecommerce_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!auth) {
                _context3.next = 4;
                break;
              }

              _context3.next = 3;
              return Object(_api_favorite__WEBPACK_IMPORTED_MODULE_6__["deleteFavoriteApi"])(auth.idUser, game.id, logout);

            case 3:
              setRealoadFavorite(true);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteFavorite() {
      return _ref5.apply(this, arguments);
    };
  }();

  var title = game.title,
      summary = game.summary,
      price = game.price,
      discount = game.discount,
      url = game.url;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-game__title",
      children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: isFavorite ? "heart" : "heart outline",
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
          like: isFavorite
        }),
        link: true,
        onClick: isFavorite ? deleteFavorite : addFavorite
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-game__delivery",
      children: "Entrega en 24/48 horas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-game__summary",
      dangerouslySetInnerHTML: {
        __html: summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-game__buy",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-game__buy-price",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Precio de venta al publico: ", price, "$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header-game__buy-price-actions",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" - ", discount, " %"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [(price - Math.floor(price * discount) / 100).toFixed(2), " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "header-game__buy-btn",
        onClick: function onClick() {
          return addProductCart(url);
        },
        children: "Comprar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s2(Info, "qrLOnGShc4jhpIFE8T8YCCkYkec=", false, function () {
  return [_hooks_useCart__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c2 = Info;

var _c, _c2;

$RefreshReg$(_c, "HeaderGame");
$RefreshReg$(_c2, "Info");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL0hlYWRlckdhbWUvSGVhZGVyR2FtZS5qcyJdLCJuYW1lcyI6WyJIZWFkZXJHYW1lIiwiZ2FtZSIsInBvc3RlciIsInRpdGxlIiwidXNlU3RhdGUiLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsInJlYWxvYWRGYXZvcml0ZSIsInNldFJlYWxvYWRGYXZvcml0ZSIsInVzZUF1dGgiLCJhdXRoIiwibG9nb3V0IiwidXNlRWZmZWN0IiwiaXNGYXZvcml0ZUFwaSIsImlkVXNlciIsImlkIiwicmVzcG9uc2UiLCJzaXplIiwidXJsIiwiSW5mbyIsInVzZUNhcnQiLCJhZGRQcm9kdWN0Q2FydCIsImFkZEZhdm9yaXRlIiwiYWRkRmF2b3JpdGVBcGkiLCJkZWxldGVGYXZvcml0ZSIsImRlbGV0ZUZhdm9yaXRlQXBpIiwic3VtbWFyeSIsInByaWNlIiwiZGlzY291bnQiLCJjbGFzc05hbWVzIiwibGlrZSIsIl9faHRtbCIsIk1hdGgiLCJmbG9vciIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsVUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUFBLE1BR2hDQyxNQUhnQyxHQUdmRCxJQUhlLENBR2hDQyxNQUhnQztBQUFBLE1BR3hCQyxLQUh3QixHQUdmRixJQUhlLENBR3hCRSxLQUh3Qjs7QUFBQSxrQkFJSEMsc0RBQVEsQ0FBQyxLQUFELENBSkw7QUFBQSxNQUloQ0MsVUFKZ0M7QUFBQSxNQUlwQkMsYUFKb0I7O0FBQUEsbUJBS09GLHNEQUFRLENBQUMsS0FBRCxDQUxmO0FBQUEsTUFLaENHLGVBTGdDO0FBQUEsTUFLZkMsa0JBTGU7O0FBQUEsaUJBTWhCQyw4REFBTyxFQU5TO0FBQUEsTUFNaENDLElB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Q0k7QUFBQSxxREFBZ0NDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtDQUNBO0FBQUEsOEJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBQSx1QkFBSSxDQUFDRCxLQUFLLEdBQUdLLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixLQUFLLEdBQUdDLFFBQW5CLElBQStCLEdBQXhDLEVBQTZDTSxPQUE3QyxDQUFxRCxDQUFyRCxDQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSSxxRUFBQyx3REFBRDtBQUFRLGlCQUFTLEVBQUMsc0JBQWxCO0FBQXlDLGVBQU8sRUFBRTtBQUFBLGlCQUFNYixjQUFjLENBQUNILEdBQUQsQ0FBcEI7QUFBQSxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKO0FBQUEsa0JBREo7QUE2Qkg7O0lBakRRQyxJO1VBRW9CQyxzRDs7O01BRnBCRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tnYW1lXS5kYzBmMzhiYWY2NTI1YTMyZjVhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7R3JpZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuaW1wb3J0IHtzaXplfSBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0IHtpc0Zhdm9yaXRlQXBpLCBhZGRGYXZvcml0ZUFwaSwgZGVsZXRlRmF2b3JpdGVBcGl9IGZyb20gXCIuLi8uLi8uLi9hcGkvZmF2b3JpdGVcIlxyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRoXCJcclxuaW1wb3J0IHVzZUNhcnQgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUNhcnRcIlxyXG5pbXBvcnQge2JyZWFrcG9pbnRVcFNtfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYnJlYWtwb2ludFwiXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJHYW1lKHtnYW1lfSkge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge3Bvc3RlciwgdGl0bGV9ID0gZ2FtZVxyXG4gICAgY29uc3QgW2lzRmF2b3JpdGUsIHNldElzRmF2b3JpdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcmVhbG9hZEZhdm9yaXRlLCBzZXRSZWFsb2FkRmF2b3JpdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7YXV0aCwgbG9nb3V0fSA9IHVzZUF1dGgoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGlzRmF2b3JpdGVBcGkoYXV0aC5pZFVzZXIsIGdhbWUuaWQsIGxvZ291dClcclxuICAgICAgICAgICAgaWYoc2l6ZShyZXNwb25zZSkgPiAwKSBzZXRJc0Zhdm9yaXRlKHRydWUpXHJcbiAgICAgICAgICAgIGVsc2Ugc2V0SXNGYXZvcml0ZShmYWxzZSlcclxuICAgICAgIH0pKClcclxuICAgICAgIHNldFJlYWxvYWRGYXZvcml0ZShmYWxzZSlcclxuICAgIH0sIFtnYW1lLCByZWFsb2FkRmF2b3JpdGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8R3JpZCBjbGFzc05hbWU9XCJoZWFkZXItZ2FtZVwiPlxyXG4gICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezZ9IGNvbXB1dGVyPXs1fT5cclxuICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Z2FtZS5wb3N0ZXIudXJsfSBhbHQ9e2dhbWUudGl0bGV9IGZsdWlkLz5cclxuICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezEwfSBjb21wdXRlcj17MTF9PlxyXG4gICAgICAgICAgICAgICA8SW5mbyBnYW1lPXtnYW1lfSBpc0Zhdm9yaXRlPXtpc0Zhdm9yaXRlfSBhdXRoPXthdXRofSBsb2dvdXQ9e2xvZ291dH0gc2V0UmVhbG9hZEZhdm9yaXRlPXtzZXRSZWFsb2FkRmF2b3JpdGV9Lz5cclxuICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbmZvKHtnYW1lLCBpc0Zhdm9yaXRlLCBhdXRoLCBsb2dvdXQsIHNldFJlYWxvYWRGYXZvcml0ZX0pIHtcclxuXHJcbiAgICBjb25zdCB7YWRkUHJvZHVjdENhcnR9ID0gdXNlQ2FydCgpXHJcblxyXG4gICAgY29uc3QgYWRkRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKGF1dGgpIHtcclxuICAgICAgICBhd2FpdCBhZGRGYXZvcml0ZUFwaShhdXRoLmlkVXNlciwgZ2FtZS5pZCwgbG9nb3V0KVxyXG4gICAgICAgIHNldFJlYWxvYWRGYXZvcml0ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUZhdm9yaXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGF1dGgpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGVsZXRlRmF2b3JpdGVBcGkoYXV0aC5pZFVzZXIsIGdhbWUuaWQsIGxvZ291dClcclxuICAgICAgICAgICAgc2V0UmVhbG9hZEZhdm9yaXRlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHt0aXRsZSwgc3VtbWFyeSwgcHJpY2UsIGRpc2NvdW50LCB1cmx9ID0gZ2FtZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZ2FtZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZSA9IHtpc0Zhdm9yaXRlID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZTogaXNGYXZvcml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNGYXZvcml0ZSA/IGRlbGV0ZUZhdm9yaXRlIDogYWRkRmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWdhbWVfX2RlbGl2ZXJ5XCI+RW50cmVnYSBlbiAyNC80OCBob3JhczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1nYW1lX19zdW1tYXJ5XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN1bW1hcnl9fSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZ2FtZV9fYnV5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1nYW1lX19idXktcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5QcmVjaW8gZGUgdmVudGEgYWwgcHVibGljbzoge3ByaWNlfSQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZ2FtZV9fYnV5LXByaWNlLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gLSB7ZGlzY291bnR9ICU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+eyhwcmljZSAtIE1hdGguZmxvb3IocHJpY2UgKiBkaXNjb3VudCkgLyAxMDApLnRvRml4ZWQoMil9ICQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImhlYWRlci1nYW1lX19idXktYnRuXCIgb25DbGljaz17KCkgPT4gYWRkUHJvZHVjdENhcnQodXJsKX0+Q29tcHJhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9