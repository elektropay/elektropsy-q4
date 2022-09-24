"use strict";
(() => {
var exports = {};
exports.id = 2975;
exports.ids = [2975];
exports.modules = {

/***/ 1191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/calendar.73860621.svg","height":512,"width":512});

/***/ }),

/***/ 1459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/intellectual.1c3f2539.svg","height":512,"width":512});

/***/ }),

/***/ 9285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/pen.bdd02842.svg","height":512,"width":512});

/***/ }),

/***/ 8092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/sand-clock.265a035d.svg","height":533,"width":533});

/***/ }),

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/user.808daa75.svg","height":633,"width":633});

/***/ }),

/***/ 5811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/video.0990a9f9.svg","height":512,"width":512});

/***/ }),

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/Feature.js
var Feature = __webpack_require__(5208);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./images/icon/pen.svg
var pen = __webpack_require__(9285);
// EXTERNAL MODULE: ./images/icon/video.svg
var video = __webpack_require__(5811);
// EXTERNAL MODULE: ./images/icon/intellectual.svg
var intellectual = __webpack_require__(1459);
// EXTERNAL MODULE: ./images/icon/user.svg
var user = __webpack_require__(8189);
// EXTERNAL MODULE: ./images/icon/calendar.svg
var calendar = __webpack_require__(1191);
// EXTERNAL MODULE: ./images/icon/sand-clock.svg
var sand_clock = __webpack_require__(8092);
;// CONCATENATED MODULE: ./images/software/mobile-hori.png
/* harmony default export */ const mobile_hori = ({"src":"/_next/static/media/mobile-hori.aab833c8.png","height":398,"width":1765,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAVAMQ5AQBCcSSQXeloSER/0Ch6kUviBQqNU0un25Hb3QpFv2TeZur7CMJaI4nAnVH+YxpnXeazvg7ZuihgCaQaQcAAhpXRnZiUfkxxvwEcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./pages/Software/features.js



//Import Components



//Import Images







class Features extends external_react_.Component {
    state = {
        features: [
            {
                id: 1,
                imgUrl: pen/* default */.Z,
                title: "Seo Services",
                description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."
            },
            {
                id: 2,
                imgUrl: video/* default */.Z,
                title: "Email Marketing",
                description: "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word."
            },
            {
                id: 3,
                imgUrl: intellectual/* default */.Z,
                title: "Data Analysis",
                description: "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today."
            },
            {
                id: 4,
                imgUrl: user/* default */.Z,
                title: "Digital Marketing",
                description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."
            },
            {
                id: 5,
                imgUrl: calendar/* default */.Z,
                title: "Social Media Marketing",
                description: "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word."
            },
            {
                id: 6,
                imgUrl: sand_clock/* default */.Z,
                title: "Link Building",
                description: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today."
            }, 
        ]
    };
    componentDidMount() {
        var featureboxes = document.getElementsByName("featurebox");
        for(var i = 0; i < featureboxes.length; i++){
            featureboxes[i].classList.add("mt-5");
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                        title: "Why Us",
                        desc: " can provide everything you need to conduct commerce, pay suppliers, subscription billing."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Feature/* default */.Z, {
                        featureArray: this.state.features,
                        isCenter: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-center mt-5 pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "10",
                                md: "12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: mobile_hori,
                                    className: "img-fluid d-block mx-auto",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                xs: "12",
                                className: "text-center pt-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "alert alert-light alert-pills shadow",
                                    role: "alert",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
                                            color: "primary",
                                            className: "rounded mr-1",
                                            children: "Download"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "content",
                                            children: [
                                                " Trusted by the worlds best ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "mdi mdi-download"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const features = (Features);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,5675,8854,5208], () => (__webpack_exec__(289)));
module.exports = __webpack_exports__;

})();