"use strict";
exports.id = 4904;
exports.ids = [4904];
exports.modules = {

/***/ 2232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bg1.3221f1e8.png","height":1333,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAeklEQVR42mP49++f8u8/f9kYkMD///8V//z5qwrm/P37z+73rz8SIPbqva+mzVz7pPnwpQ96QEVqv379lYDpcN1x8qnu7I2PZkxa/mgrA8MqdqCY6J8/f81AkkwMBABIEeOV028ZN+x8ybRq01smhozLjCCxP3/+MgEAIvFHtuiQNZ0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 4904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_hosting_bg1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2232);




// import images

class PageBreadcrumb extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const length = this.props.pathItems.length;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "bg-half-170 bg-light d-table w-100",
                style: {
                    background: `url(${_images_hosting_bg1_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src}) center center`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-overlay-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                lg: "12",
                                className: "text-left",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "page-next-level",
                                    children: [
                                        this.props.title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "jumbo pl-1 text-muted font-weight-bold",
                                            children: [
                                                " ",
                                                this.props.title
                                            ]
                                        }) : null,
                                        this.props.children ? this.props.children : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "page-next d-none bg-white shadow p-2 pl-4 pr-4 rounded mb-0",
                                            children: this.props.pathItems.map((item, key)=>item.id !== length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "text-normal font-weight-bold text-dark",
                                                            children: item.name
                                                        })
                                                    })
                                                }, key) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-normal text-primary font-weight-bold",
                                                        children: item.name
                                                    })
                                                }, key))
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBreadcrumb);


/***/ })

};
;