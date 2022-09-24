"use strict";
exports.id = 1791;
exports.ids = [1791];
exports.modules = {

/***/ 1791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9883);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);





//Slider
var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Shared/reviews-slider.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
class ReviewsSlider extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "justify-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    lg: "12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwlCarousel, {
                        className: "owl-theme",
                        items: 3,
                        loop: true,
                        margin: 1,
                        responsive: this.state.responsive,
                        children: this.props.reviews.map((review, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Media, {
                                className: "customer-testi d-flex align-items-start m-2",
                                name: "clientsreview",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: review.img,
                                        className: "avatar testi-users avatar-small mr-3 rounded shadow",
                                        height: 65,
                                        width: 65,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Media, {
                                        className: "content p-3 shadow rounded bg-white position-relative",
                                        body: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                items: 3,
                                                rating: review.rating,
                                                starRatedColor: "#F17425",
                                                numberOfStars: 5,
                                                name: "rating",
                                                starDimension: "15px"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-muted mt-2",
                                                children: review.desc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "text-primary",
                                                children: [
                                                    "- ",
                                                    review.name,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "text-muted",
                                                        children: review.post
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, key))
                    })
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsSlider);


/***/ })

};
;