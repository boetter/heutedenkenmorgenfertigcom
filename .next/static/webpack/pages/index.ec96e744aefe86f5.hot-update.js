"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Socials/index.tsx":
/*!**************************************!*\
  !*** ./components/Socials/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Socials_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Socials.module.sass */ \"./components/Socials/Socials.module.sass\");\n/* harmony import */ var _Socials_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon */ \"./components/Icon/index.tsx\");\n\n\n\n\nconst Socials = (param)=>/*#__PURE__*/ {\n    let { className , classSocial , items , dark , small  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Socials_module_sass__WEBPACK_IMPORTED_MODULE_3___default().socials), className),\n        children: items.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"aria-label\": social.icon,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Socials_module_sass__WEBPACK_IMPORTED_MODULE_3___default().social), {\n                    [(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_3___default().socialDark)]: dark,\n                    [(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_3___default().socialSmall)]: small\n                }, classSocial),\n                href: social.url,\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: social.icon\n                }, void 0, false, {\n                    fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Socials/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Socials/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Socials/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\nvar _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDZTtBQUNOO0FBZXJDLE1BQU1HLFVBQVUsdUJBT1o7UUFQYSxFQUNiQyxVQUFTLEVBQ1RDLFlBQVcsRUFDWEMsTUFBSyxFQUNMQyxLQUFJLEVBQ0pDLE1BQUssRUFDTTtXQUNYLDhEQUFDQztRQUFJTCxXQUFXSixpREFBRUEsQ0FBQ0MscUVBQWMsRUFBRUc7a0JBQzlCRSxNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2hCLDhEQUFDQztnQkFDR0MsY0FBWUgsT0FBT0ksSUFBSTtnQkFDdkJaLFdBQVdKLGlEQUFFQSxDQUNUQyxvRUFBYSxFQUNiO29CQUFFLENBQUNBLHdFQUFpQixDQUFDLEVBQUVNO29CQUFNLENBQUNOLHlFQUFrQixDQUFDLEVBQUVPO2dCQUFNLEdBQ3pESDtnQkFFSmMsTUFBTVAsT0FBT1EsR0FBRztnQkFDaEJDLFFBQU87Z0JBQ1BDLEtBQUk7MEJBR0osNEVBQUNwQix3REFBSUE7b0JBQUNxQixNQUFNWCxPQUFPSSxJQUFJOzs7Ozs7ZUFGbEJIOzs7Ozs7Ozs7O0FBS1o7S0F4QkhWO0FBMkJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29jaWFscy9pbmRleC50c3g/ODI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU29jaWFscy5tb2R1bGUuc2Fzc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIkAvY29tcG9uZW50cy9JY29uXCI7XG5cbnR5cGUgSXRlbXNUeXBlID0ge1xuICAgIGljb246IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgU29jaWFsc1Byb3BzID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBjbGFzc1NvY2lhbD86IHN0cmluZztcbiAgICBpdGVtczogSXRlbXNUeXBlW107XG4gICAgZGFyaz86IGJvb2xlYW47XG4gICAgc21hbGw/OiBib29sZWFuO1xufTtcblxuY29uc3QgU29jaWFscyA9ICh7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNsYXNzU29jaWFsLFxuICAgIGl0ZW1zLFxuICAgIGRhcmssXG4gICAgc21hbGwsXG59OiBTb2NpYWxzUHJvcHMpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNvY2lhbHMsIGNsYXNzTmFtZSl9PlxuICAgICAgICB7aXRlbXMubWFwKChzb2NpYWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NvY2lhbC5pY29ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5zb2NpYWwsXG4gICAgICAgICAgICAgICAgICAgIHsgW3N0eWxlcy5zb2NpYWxEYXJrXTogZGFyaywgW3N0eWxlcy5zb2NpYWxTbWFsbF06IHNtYWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzU29jaWFsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWwudXJsfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtzb2NpYWwuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxzO1xuIl0sIm5hbWVzIjpbImNuIiwic3R5bGVzIiwiSWNvbiIsIlNvY2lhbHMiLCJjbGFzc05hbWUiLCJjbGFzc1NvY2lhbCIsIml0ZW1zIiwiZGFyayIsInNtYWxsIiwiZGl2Iiwic29jaWFscyIsIm1hcCIsInNvY2lhbCIsImluZGV4IiwiYSIsImFyaWEtbGFiZWwiLCJpY29uIiwic29jaWFsRGFyayIsInNvY2lhbFNtYWxsIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Socials/index.tsx\n"));

/***/ })

});