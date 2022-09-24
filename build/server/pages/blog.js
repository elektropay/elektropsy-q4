"use strict";
(() => {
var exports = {};
exports.id = 9195;
exports.ids = [9195,5941,3882];
exports.modules = {

/***/ 6661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./components/Shared/page-breadcrumb.js
var page_breadcrumb = __webpack_require__(4904);
// EXTERNAL MODULE: ./components/Shared/blog-box.js
var blog_box = __webpack_require__(2321);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./images/blog/01.jpg
var _01 = __webpack_require__(2835);
// EXTERNAL MODULE: ./images/blog/02.jpg
var _02 = __webpack_require__(2710);
// EXTERNAL MODULE: ./images/blog/03.jpg
var _03 = __webpack_require__(9082);
;// CONCATENATED MODULE: ./images/blog/04.jpg
/* harmony default export */ const _04 = ({"src":"/_next/static/media/04.b2b06d20.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKcTf//EABsQAAICAwEAAAAAAAAAAAAAAAEDAhEAEhUh/9oACAEBAAE/AOqWp0CV2EgyseSN5//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/blog/05.jpg
/* harmony default export */ const _05 = ({"src":"/_next/static/media/05.58335f33.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmBN//8QAGxABAAMAAwEAAAAAAAAAAAAAAgEDEQAFEhP/2gAIAQEAAT8Au7myINepL6kWaSYxRs+ef//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwAXL//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPwBxv//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/blog/06.jpg
/* harmony default export */ const _06 = ({"src":"/_next/static/media/06.dbbab122.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqwf/xAAdEAACAgEFAAAAAAAAAAAAAAABAwIEAAUREhNB/9oACAEBAAE/ANSp2mTCk3OrgkjcR9nn/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAUZH/2gAIAQIBAT8AKKb2f//EABgRAAIDAAAAAAAAAAAAAAAAAAACAWGR/9oACAEDAQE/AIdqw//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/blog/07.jpg
/* harmony default export */ const _07 = ({"src":"/_next/static/media/07.2653696f.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAgCv/xAAaEAEBAAIDAAAAAAAAAAAAAAABAwACBTEy/9oACAEBAAE/AOLIya0nDyTQd9nvP//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/ABb/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwBAv//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/blog/08.jpg
/* harmony default export */ const _08 = ({"src":"/_next/static/media/08.c9792776.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqgSf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBBEABRIhUf/aAAgBAQABPwCxuTNUnnEKAcMhfO8a/8QAFREBAQAAAAAAAAAAAAAAAAAAAAL/2gAIAQIBAT8At//EABURAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDAQE/AJf/2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./pages/blog.js
// React Basic and Bootstrap



//Import components




// import images








class Elektrobytes extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            pathItems: [
                //id must required
                {
                    id: 1,
                    name: "Home",
                    link: "/index"
                },
                {
                    id: 2,
                    name: "ElektroBytes"
                }, 
            ],
            blogs: [
                {
                    id: 1,
                    image: _01/* default */.Z,
                    title: "Design your apps in your own way",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 2,
                    image: _02/* default */.Z,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 3,
                    image: _03/* default */.Z,
                    title: "Smartest Applications for Business",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 4,
                    image: _04,
                    title: "Design your apps in your own way",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 5,
                    image: _05,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 6,
                    image: _06,
                    title: "Smartest Applications for Business",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 7,
                    image: _07,
                    title: "Design your apps in your own way",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 8,
                    image: _08,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                }, 
            ]
        };
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        var blogs = document.getElementsByName("blog");
        for(var i = 0; i < blogs.length; i++){
            blogs[i].classList.remove("mt-4");
            blogs[i].classList.add("mb-4");
        }
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }
    scrollNavigation = ()=>{
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Topbar/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(page_breadcrumb/* default */.Z, {
                    title: "Blog",
                    pathItems: this.state.pathItems
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",
                                fill: "currentColor"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_box/* default */.Z, {
                                    blogs: this.state.blogs
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    xs: "12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Pagination, {
                                        className: "pagination justify-content-center mb-0 list-unstyled",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationLink, {
                                                    href: "#",
                                                    className: "pr-3 pl-3 pt-2 pb-2",
                                                    children: "Prev"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationItem, {
                                                active: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationLink, {
                                                    href: "#",
                                                    className: "pr-3 pl-3 pt-2 pb-2",
                                                    children: "1"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationLink, {
                                                    href: "#",
                                                    className: "pr-3 pl-3 pt-2 pb-2",
                                                    children: "2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationLink, {
                                                    href: "#",
                                                    className: "pr-3 pl-3 pt-2 pb-2",
                                                    children: "3"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.PaginationLink, {
                                                    href: "#",
                                                    className: "pr-3 pl-3 pt-2 pb-2",
                                                    children: "Next"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        });
    }
}
/* harmony default export */ const blog = (Elektrobytes);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 3308:
/***/ ((module) => {

module.exports = require("react-router");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,2503,2321,4904,9353], () => (__webpack_exec__(6661)));
module.exports = __webpack_exports__;

})();