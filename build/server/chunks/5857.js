"use strict";
exports.id = 5857;
exports.ids = [5857];
exports.modules = {

/***/ 5857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9883);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);


//Star Rating


var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Shared/review-slider3.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
class ReviewSlider3 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
                items: this.props.items,
                loop: true,
                margin: 1,
                responsive: this.props.items !== 1 ? this.state.responsive : null,
                autoplay: true,
                children: this.props.clients.map((client, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: this.props.isBgWhite ? "customer-testi m-2 bg-white text-center p-5  rounded shadow" : "customer-testi text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-muted h6 font-italic",
                                children: client.desc
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center mt-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: client.image,
                                    width: 65,
                                    height: 65,
                                    layout: "intrinsic",
                                    className: this.props.isBgWhite ? "d-block img-fluid avatar avatar-small  rounded-pill mx-auto shadow" : "img-fluid avatar avatar-small rounded-pill mx-auto shadow",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        rating: client.rating,
                                        starRatedColor: "#F17425",
                                        numberOfStars: 5,
                                        name: "rating",
                                        starDimension: "15px",
                                        starSpacing: "5px",
                                        className: "list-unstyled mb-0 mt-3"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        className: "text-primary mt-1",
                                        children: [
                                            "- ",
                                            client.name,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                className: "text-muted ml-1",
                                                children: client.post
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, key))
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewSlider3);


/***/ })

};
;