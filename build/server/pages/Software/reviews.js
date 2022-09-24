"use strict";
(() => {
var exports = {};
exports.id = 2154;
exports.ids = [2154];
exports.modules = {

/***/ 8145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Shared_section_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _components_Shared_reviews_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1791);
/* harmony import */ var _images_client_01_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7713);
/* harmony import */ var _images_client_02_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6659);
/* harmony import */ var _images_client_03_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9296);
/* harmony import */ var _images_client_04_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2153);
/* harmony import */ var _images_client_05_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9768);
/* harmony import */ var _images_client_06_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1860);



//Import Containers


//Import Images






class Reviews extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        reviews: [
            {
                id: 1,
                img: _images_client_01_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                name: "Thomas Israel",
                post: "C.E.O",
                desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
                rating: 5
            },
            {
                id: 2,
                img: _images_client_02_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                name: "Barbara McIntosh",
                post: "M.D",
                desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
                rating: 4
            },
            {
                id: 3,
                img: _images_client_03_jpg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                name: "Carl Oliver",
                post: "P.A",
                desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
                rating: 3
            },
            {
                id: 4,
                img: _images_client_04_jpg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                name: "Christa Smith",
                post: "Manager",
                desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
                rating: 5
            },
            {
                id: 5,
                img: _images_client_05_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                name: "Dean Tolle",
                post: "Developer",
                desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
                rating: 5
            },
            {
                id: 6,
                img: _images_client_06_jpg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                name: "ill Webb",
                post: "Designer",
                desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
                rating: 4
            }, 
        ]
    };
    componentDidMount() {
        var sectionTitles = document.getElementsByName("maintitle");
        sectionTitles[2].classList.remove("mb-4");
        sectionTitles[2].classList.remove("pb-2");
        sectionTitles[2].classList.add("mb-60");
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: "mt-100 mt-60",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_section_title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: "Client Reviews",
                        desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_reviews_slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        reviews: this.state.reviews
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);


/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 9883:
/***/ ((module) => {

module.exports = require("react-star-ratings");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3598,5675,5152,8854,4394,1791], () => (__webpack_exec__(8145)));
module.exports = __webpack_exports__;

})();