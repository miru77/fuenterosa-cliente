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
  console.log(video);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "info-game",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player_lazy__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "info-game__video",
      url: video
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL0luZm9HYW1lL0luZm9HYW1lLmpzIl0sIm5hbWVzIjpbIkluZm9HYW1lIiwiZ2FtZSIsInZpZGVvIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic2NyZWVuc2hvdHMiLCJfX2h0bWwiLCJzdW1tYXJ5IiwibW9tZW50IiwicmVsZWFzZURhdGUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUEwQjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUFBLE1BRTlCQyxLQUY4QixHQUVyQkQsSUFGcUIsQ0FFOUJDLEtBRjhCO0FBSXJDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFHSSxxRUFBQyx3REFBRDtBQUFhLGVBQVMsRUFBQyxrQkFBdkI7QUFBMEMsU0FBRyxFQUFFQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFLSSxxRUFBQyxnRkFBRDtBQUFxQixXQUFLLEVBQUVELElBQUksQ0FBQ0ksS0FBakM7QUFBd0MsaUJBQVcsRUFBRUosSUFBSSxDQUFDSztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNBO0FBQUssK0JBQXVCLEVBQUU7QUFBQ0MsZ0JBQU0sRUFBRU4sSUFBSSxDQUFDTztBQUFkO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUdBO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBSUMsNkNBQU0sQ0FBQ1IsSUFBSSxDQUFDUyxXQUFOLENBQU4sQ0FBeUJDLE1BQXpCLENBQWdDLElBQWhDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDtLQTNCdUJYLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dhbWVdLjI2YzZiMGVhOGEzMDhjMTFkNjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyL2xhenlcIlxyXG5pbXBvcnQgQ2FycnVzZWxTY3JlZW5zaG90cyBmcm9tICcuLi9DYXJydXNlbFNjcmVlbnNob3RzL0NhcnJ1c2VsU2NyZWVuc2hvdHMnXHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXHJcbmltcG9ydCBcIm1vbWVudC9sb2NhbGUvZXNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0dhbWUoe2dhbWV9KSB7XHJcblxyXG4gICAgY29uc3Qge3ZpZGVvfSA9IGdhbWVcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2aWRlbylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1nYW1lXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPFJlYWN0UGxheWVyIGNsYXNzTmFtZT1cImluZm8tZ2FtZV9fdmlkZW9cIiB1cmw9e3ZpZGVvfS8+XHJcblxyXG4gICAgICAgICAgICA8Q2FycnVzZWxTY3JlZW5zaG90cyB0aXRsZT17Z2FtZS50aXRsZX0gc2NyZWVuc2hvdHM9e2dhbWUuc2NyZWVuc2hvdHN9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1nYW1lX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGdhbWUuc3VtbWFyeX19Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1nYW1lX19jb250ZW50LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoND5GZWNoYSBkZSBsYW56YW1lbnRvOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57bW9tZW50KGdhbWUucmVsZWFzZURhdGUpLmZvcm1hdChcIkxMXCIpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==