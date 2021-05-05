webpackHotUpdate_N_E("pages/[game]",{

/***/ "./components/Game/InfoGame/InfoGame.js":
/*!**********************************************!*\
  !*** ./components/Game/InfoGame/InfoGame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoGame; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player/lazy */ "./node_modules/react-player/lazy/index.js");
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player_lazy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CarruselScreenshots_CarruselScreenshots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CarruselScreenshots/CarruselScreenshots */ "./components/Game/CarruselScreenshots/CarruselScreenshots.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\react\\ecommerce\\client\\components\\Game\\InfoGame\\InfoGame.js";





function InfoGame(_ref) {
  var game = _ref.game;
  var video = game.video;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "info-game",
    children: [video && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player_lazy__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "info-game__video",
      url: video
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 23
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CarruselScreenshots_CarruselScreenshots__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: game.title,
      screenshots: game.screenshots
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info-game__content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
          __html: game.summary
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "info-game__content-date",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Fecha de lanzamento:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: moment__WEBPACK_IMPORTED_MODULE_4___default()(game.releaseDate).format("LL")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
_c = InfoGame;

var _c;

$RefreshReg$(_c, "InfoGame");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL0luZm9HYW1lL0luZm9HYW1lLmpzIl0sIm5hbWVzIjpbIkluZm9HYW1lIiwiZ2FtZSIsInZpZGVvIiwidGl0bGUiLCJzY3JlZW5zaG90cyIsIl9faHRtbCIsInN1bW1hcnkiLCJtb21lbnQiLCJyZWxlYXNlRGF0ZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQTBCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQUEsTUFFOUJDLEtBRjhCLEdBRXJCRCxJQUZxQixDQUU5QkMsS0FGOEI7QUFNckMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLGVBR0tBLEtBQUssaUJBQUkscUVBQUMsd0RBQUQ7QUFBYSxlQUFTLEVBQUMsa0JBQXZCO0FBQTBDLFNBQUcsRUFBRUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhkLGVBS0kscUVBQUMsZ0ZBQUQ7QUFBcUIsV0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBQWpDO0FBQXdDLGlCQUFXLEVBQUVGLElBQUksQ0FBQ0c7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBT0k7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDQTtBQUFLLCtCQUF1QixFQUFFO0FBQUNDLGdCQUFNLEVBQUVKLElBQUksQ0FBQ0s7QUFBZDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFHQTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQUlDLDZDQUFNLENBQUNOLElBQUksQ0FBQ08sV0FBTixDQUFOLENBQXlCQyxNQUF6QixDQUFnQyxJQUFoQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7S0EzQnVCVCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tnYW1lXS43N2FjMzRiMzNhN2FjZjYwMzIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllci9sYXp5XCJcclxuaW1wb3J0IENhcnJ1c2VsU2NyZWVuc2hvdHMgZnJvbSAnLi4vQ2FycnVzZWxTY3JlZW5zaG90cy9DYXJydXNlbFNjcmVlbnNob3RzJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxyXG5pbXBvcnQgXCJtb21lbnQvbG9jYWxlL2VzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9HYW1lKHtnYW1lfSkge1xyXG5cclxuICAgIGNvbnN0IHt2aWRlb30gPSBnYW1lXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZ2FtZVwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgeyB2aWRlbyAmJiA8UmVhY3RQbGF5ZXIgY2xhc3NOYW1lPVwiaW5mby1nYW1lX192aWRlb1wiIHVybD17dmlkZW99Lz59XHJcblxyXG4gICAgICAgICAgICA8Q2FycnVzZWxTY3JlZW5zaG90cyB0aXRsZT17Z2FtZS50aXRsZX0gc2NyZWVuc2hvdHM9e2dhbWUuc2NyZWVuc2hvdHN9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1nYW1lX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGdhbWUuc3VtbWFyeX19Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1nYW1lX19jb250ZW50LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoND5GZWNoYSBkZSBsYW56YW1lbnRvOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57bW9tZW50KGdhbWUucmVsZWFzZURhdGUpLmZvcm1hdChcIkxMXCIpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==