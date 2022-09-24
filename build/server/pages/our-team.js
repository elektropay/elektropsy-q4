"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870,5941,3882];
exports.modules = {

/***/ 1710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ our_team)
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
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/team-box.js
var team_box = __webpack_require__(4066);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./images/team/1.jpg
var _1 = __webpack_require__(1929);
// EXTERNAL MODULE: ./images/team/2.jpg
var _2 = __webpack_require__(5493);
// EXTERNAL MODULE: ./images/team/3.jpg
var _3 = __webpack_require__(6971);
// EXTERNAL MODULE: ./images/team/4.jpg
var _4 = __webpack_require__(8547);
;// CONCATENATED MODULE: ./images/team/5.jpg
/* harmony default export */ const _5 = ({"src":"/_next/static/media/5.950e06db.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsDF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACFh/9oACAEBAAE/AHD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/team/6.jpg
/* harmony default export */ const _6 = ({"src":"/_next/static/media/6.5a094250.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsDF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACFh/9oACAEBAAE/AHD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/team/7.jpg
/* harmony default export */ const _7 = ({"src":"/_next/static/media/7.ba4d3d83.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsDF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACFh/9oACAEBAAE/AHD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/team/8.jpg
/* harmony default export */ const _8 = ({"src":"/_next/static/media/8.1b1b1ac7.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsDF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACFh/9oACAEBAAE/AHD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/our-team.js
// React Basic and Bootstrap



//Import components





// import images








class PageTeam extends external_react_.Component {
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
                    name: "Pages",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Team"
                }, 
            ],
            candidates: [
                {
                    id: 1,
                    image: _1/* default */.Z,
                    name: "Ronny Jofra",
                    designation: "Web Developer",
                    salary: "2300",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 2,
                    image: _2/* default */.Z,
                    name: "Micheal Carlo",
                    designation: "Web Designer",
                    salary: "1950",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 3,
                    image: _3/* default */.Z,
                    name: "Aliana Rosy",
                    designation: "IOS Developer",
                    salary: "2540",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 4,
                    image: _4/* default */.Z,
                    name: "Sofia Razaq",
                    designation: "Php Developer",
                    salary: "2190",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 5,
                    image: _5,
                    name: "Calvin Carlo",
                    designation: "C.E.O",
                    salary: "2190",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 6,
                    image: _6,
                    name: "Juhi Chawla",
                    designation: "Director",
                    salary: "2190",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 7,
                    image: _7,
                    name: "Arlo Walker",
                    designation: "Manager",
                    salary: "2190",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                },
                {
                    id: 8,
                    image: _8,
                    name: "Randeep Huda",
                    designation: "Developer",
                    salary: "2190",
                    link: "",
                    socialIds: [
                        {
                            icon: "mdi-facebook",
                            link: "#"
                        },
                        {
                            icon: "mdi-instagram",
                            link: "#"
                        },
                        {
                            icon: "mdi-twitter",
                            link: "#"
                        },
                        {
                            icon: "mdi-google-plus",
                            link: "#"
                        }, 
                    ]
                }, 
            ]
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        var teambox = document.getElementsByName("team");
        for(var i = 0; i < teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
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
            var ref;
            (ref = document.getElementById("topnav")) === null || ref === void 0 ? void 0 : ref.classList.add("nav-sticky");
        } else {
            var ref1;
            (ref1 = document.getElementById("topnav")) === null || ref1 === void 0 ? void 0 : ref1.classList.remove("nav-sticky");
        }
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Topbar/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(page_breadcrumb/* default */.Z, {
                    title: "Team Members",
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
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Our Greatest Minds",
                                desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(team_box/* default */.Z, {
                                    candidates: this.state.candidates
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        });
    }
}
/* harmony default export */ const our_team = (PageTeam);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,2503,8854,4904,7849], () => (__webpack_exec__(1710)));
module.exports = __webpack_exports__;

})();