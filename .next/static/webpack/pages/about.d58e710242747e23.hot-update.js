"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ \"./node_modules/@n8tb1t/use-scroll-position/lib/index.js\");\n/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scroll-lock */ \"./node_modules/scroll-lock/dist/scroll-lock.js\");\n/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header.module.sass */ \"./components/Header/Header.module.sass\");\n/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Logo */ \"./components/Logo/index.tsx\");\n/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Socials */ \"./components/Socials/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst navigation = [\n    {\n        title: \"Om virksomheden\",\n        url: \"/about\"\n    },\n    {\n        title: \"Ydelser\",\n        url: \"/services\"\n    },\n    {\n        title: \"Projekter\",\n        url: \"/projects\"\n    },\n    {\n        title: \"Blogs\",\n        url: \"/blogs\"\n    },\n    {\n        title: \"Contact\",\n        url: \"/contact\"\n    }\n];\nconst socials = [\n    {\n        icon: \"facebook\",\n        url: \"https://www.facebook.com/ui8.net/\"\n    },\n    {\n        icon: \"twitter\",\n        url: \"https://twitter.com/ui8\"\n    },\n    {\n        icon: \"instagram\",\n        url: \"https://www.instagram.com/ui8net/\"\n    },\n    {\n        icon: \"linkedin\",\n        url: \"https://www.linkedin.com/company/ui8\"\n    }\n];\nconst Header = (param)=>{\n    let {} = param;\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [headerStyle, setHeaderStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(router);\n    const toggleMenu = ()=>{\n        setVisible(!visible);\n        if (visible) {\n            (0,scroll_lock__WEBPACK_IMPORTED_MODULE_5__.enablePageScroll)();\n        } else {\n            (0,scroll_lock__WEBPACK_IMPORTED_MODULE_5__.disablePageScroll)();\n        }\n    };\n    (0,_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__.useScrollPosition)((param)=>{\n        let { currPos  } = param;\n        setHeaderStyle(currPos.y <= -1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().header), {\n            [(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().visible)]: headerStyle,\n            [(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().active)]: visible\n        }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(\"container\", (_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().container)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                    dark: headerStyle || visible\n                }, void 0, false, {\n                    fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().wrap), {\n                        [(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().visible)]: visible\n                    }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().navigation),\n                            children: navigation.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().link), {\n                                        [(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().active)]: router.pathname === link.url || router.pathname.includes(link.url)\n                                    }),\n                                    href: link.url,\n                                    children: link.title\n                                }, index, false, {\n                                    fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Socials__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().socials),\n                            classSocial: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().social),\n                            items: socials,\n                            dark: true,\n                            small: true\n                        }, void 0, false, {\n                            fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().burger), {\n                        [(_Header_module_sass__WEBPACK_IMPORTED_MODULE_9___default().active)]: visible\n                    }),\n                    onClick: toggleMenu,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/heutedenkenmorgenfertigcom/components/Header/index.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"JIEgX/Zd02s8r8ROeO6mvX4ndU8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__.useScrollPosition\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJmWTtBQXNFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIjtcbmltcG9ydCB7IGRpc2FibGVQYWdlU2Nyb2xsLCBlbmFibGVQYWdlU2Nyb2xsIH0gZnJvbSBcInNjcm9sbC1sb2NrXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zYXNzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQC9jb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBTb2NpYWxzIGZyb20gXCIuLi9Tb2NpYWxzXCI7XG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJPbSB2aXJrc29taGVkZW5cIixcbiAgICAgICAgdXJsOiBcIi9hYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJZZGVsc2VyXCIsXG4gICAgICAgIHVybDogXCIvc2VydmljZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUHJvamVrdGVyXCIsXG4gICAgICAgIHVybDogXCIvcHJvamVjdHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQmxvZ3NcIixcbiAgICAgICAgdXJsOiBcIi9ibG9nc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgICAgIHVybDogXCIvY29udGFjdFwiLFxuICAgIH0sXG5dO1xuXG5jb25zdCBzb2NpYWxzID0gW1xuICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWNlYm9va1wiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3VpOC5uZXQvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IFwidHdpdHRlclwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS91aThcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogXCJpbnN0YWdyYW1cIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdWk4bmV0L1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBcImxpbmtlZGluXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS91aThcIixcbiAgICB9LFxuXTtcblxudHlwZSBIZWFkZXJQcm9wcyA9IHt9O1xuXG5jb25zdCBIZWFkZXIgPSAoe306IEhlYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtoZWFkZXJTdHlsZSwgc2V0SGVhZGVyU3R5bGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcblxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUoIXZpc2libGUpO1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgZW5hYmxlUGFnZVNjcm9sbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VTY3JvbGxQb3NpdGlvbigoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgICAgc2V0SGVhZGVyU3R5bGUoY3VyclBvcy55IDw9IC0xKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLmhlYWRlciwge1xuICAgICAgICAgICAgICAgIFtzdHlsZXMudmlzaWJsZV06IGhlYWRlclN0eWxlLFxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogdmlzaWJsZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJjb250YWluZXJcIiwgc3R5bGVzLmNvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGRhcms9e2hlYWRlclN0eWxlIHx8IHZpc2libGV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy53cmFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLnZpc2libGVdOiB2aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMubGluaywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gbGluay51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMobGluay51cmwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NTb2NpYWw9e3N0eWxlcy5zb2NpYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c29jaWFsc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXJnZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogdmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsImRpc2FibGVQYWdlU2Nyb2xsIiwiZW5hYmxlUGFnZVNjcm9sbCIsImNuIiwic3R5bGVzIiwiTG9nbyIsIlNvY2lhbHMiLCJuYXZpZ2F0aW9uIiwidGl0bGUiLCJ1cmwiLCJzb2NpYWxzIiwiaWNvbiIsIkhlYWRlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGVhZGVyU3R5bGUiLCJzZXRIZWFkZXJTdHlsZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVNZW51IiwiY3VyclBvcyIsInkiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJkaXYiLCJjb250YWluZXIiLCJsb2dvIiwiZGFyayIsIndyYXAiLCJuYXYiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiaHJlZiIsImNsYXNzU29jaWFsIiwic29jaWFsIiwiaXRlbXMiLCJzbWFsbCIsImJ1dHRvbiIsImJ1cmdlciIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});