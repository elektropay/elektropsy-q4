"use strict";
exports.id = 7713;
exports.ids = [7713];
exports.modules = {

/***/ 1319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);



var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Shared/review-slider2.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
class ReviewSlider2 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            650: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwlCarousel, {
                className: "owl-theme",
                items: 3,
                loop: true,
                margin: 1,
                responsive: this.state.responsive,
                autoplay: true,
                children: this.props.clients.map((client, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "customer-testi p-3 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: client.image,
                                height: 65,
                                width: 65,
                                className: "img-fluid avatar avatar-small rounded-pill mx-auto shadow",
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-muted mt-4",
                                children: [
                                    " ",
                                    client.desc
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                className: "text-primary",
                                children: [
                                    "- ",
                                    client.name
                                ]
                            })
                        ]
                    }, key))
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewSlider2);


/***/ })

};
;