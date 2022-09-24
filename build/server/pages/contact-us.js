"use strict";
(() => {
var exports = {};
exports.id = 8455;
exports.ids = [8455,5941,3882];
exports.modules = {

/***/ 5949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
;// CONCATENATED MODULE: ./images/icon/bitcoin.svg
/* harmony default export */ const bitcoin = ({"src":"/_next/static/media/bitcoin.b1a87254.svg","height":617,"width":617});
;// CONCATENATED MODULE: ./images/icon/Email.svg
/* harmony default export */ const Email = ({"src":"/_next/static/media/Email.9d33d2c3.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/location.svg
/* harmony default export */ const icon_location = ({"src":"/_next/static/media/location.de5d4f10.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/contact.png
/* harmony default export */ const contact = ({"src":"/_next/static/media/contact.ea1de3a1.png","height":1493,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAu0lEQVR42mMAgf//f0s/fPc/sWDyv+CJc6/I/P/fyrb30ls2sGTi5P9Mczd/iU5vv/+fIfLC/wPbzx9YvWTPrkNXvkxgQIC/YgxJnyfGtz6/mDrxXmhD36kz569++vj2/382humb/zMyIIF3P/5u2X/r//8LD//9v/HivxpY8PzDfwuB+MXMvT+EP/3533by/v/fl578X/j/1w8WsIL7r/8lAPGC15//hb/98i/g9LUP8y/f/uDHwMDAAACvZ2zHASdQrQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./pages/contact-us.js
// React Basic and Bootstrap







// import images




class ContactUs extends external_react_.Component {
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
                    name: "Contact Us"
                }, 
            ],
            Contactvisible: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMail.bind(this);
        this.callNumber.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            Contactvisible: true
        });
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
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
    sendMail() {
        window.location.href = "mailto:hello@elektropay.com";
    }
    callNumber() {
        window.location.href = "tel:+1-800-566-6003";
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Topbar/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative bg-primary",
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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "section pt-3 pb-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-detail text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: bitcoin,
                                                        width: 65,
                                                        height: 65,
                                                        className: "avatar avatar-small",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content mt-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "title font-weight-bold",
                                                            children: "Contact Sales"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-muted",
                                                            children: "Speak to an expert to find the right solutions and products to meet your payment needs."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/",
                                                            onClick: this.callNumber,
                                                            className: "btn btn-outline btn-primary",
                                                            children: "Toll-Free: +1 800-566-6003"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        md: 4,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-detail text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: Email,
                                                        width: 65,
                                                        height: 65,
                                                        className: "avatar avatar-small",
                                                        alt: "Elektropay"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content mt-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "title font-weight-bold",
                                                            children: "Contact Support"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-muted",
                                                            children: "Visit our support portal to request assistance or to open a support ticket."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/",
                                                            onClick: this.sendMail,
                                                            className: "btn btn-outline btn-primary",
                                                            children: "support@elektropay.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        md: 4,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-detail text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: icon_location,
                                                        width: 65,
                                                        height: 65,
                                                        className: "avatar avatar-small",
                                                        alt: "Elektropay"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content mt-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "title font-weight-bold",
                                                            children: "Corporate HQ"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-muted",
                                                            children: [
                                                                "7, Mornington Cresent, Suite 200 ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "Manchester, M14 6DF, England"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.2546861447104!2d-2.2352382750476707!3d53.44071001137228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb23dd1f74d3b%3A0x11655e5e5281636d!2s7%20Mornington%20Cres%2C%20Manchester%20M14%206DF%2C%20UK!5e0!3m2!1sen!2smx!4v1596942375098!5m2!1sen!2smx",
                                                            className: "btn btn-outline btn-primary video-play-icon",
                                                            children: "View on Google map"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 5,
                                        md: 6,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pt-5 pb-5 p-4 bg-light shadow rounded",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Get In Touch !"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "custom-form mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            id: "message"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                                            color: "info",
                                                            isOpen: this.state.Contactvisible,
                                                            toggle: ()=>{
                                                                this.setState({
                                                                    Contactvisible: !this.state.Contactvisible
                                                                });
                                                            },
                                                            children: "Contact details send successfully."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                                            method: "post",
                                                            onSubmit: this.handleSubmit,
                                                            name: "contact-form",
                                                            id: "contact-form",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                            md: 6,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                                className: "position-relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                                        children: [
                                                                                            "Your Name ",
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "text-danger",
                                                                                                children: "*"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "mdi mdi-account ms-3 icons"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                        name: "name",
                                                                                        id: "name",
                                                                                        type: "text",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "First Name :",
                                                                                        required: true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                            md: 6,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                                className: "position-relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                                        children: [
                                                                                            "Your Email ",
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "text-danger",
                                                                                                children: "*"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "mdi mdi-email ms-3 icons"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                        name: "email",
                                                                                        id: "email",
                                                                                        type: "email",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "Your email :",
                                                                                        required: true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                            md: 12,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                                className: "position-relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                        children: "Subject"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "mdi mdi-book ms-3 icons"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                        name: "subject",
                                                                                        id: "subject",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "Your subject :",
                                                                                        required: true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                            md: 12,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                                className: "position-relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                        children: "Comments"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "mdi mdi-comment-text-outline ms-3 icons"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                        name: "comments",
                                                                                        id: "comments",
                                                                                        rows: "4",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "Your Message :"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                                                        sm: 12,
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                type: "submit",
                                                                                id: "submit",
                                                                                name: "send",
                                                                                className: "submitBnt btn btn-primary btn-block",
                                                                                value: "Send Message"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                id: "simple-msg"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 7,
                                        md: 6,
                                        className: "order-1 order-md-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: contact,
                                            className: "img-fluid",
                                            alt: "Elektropay"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            fluid: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    className: "p-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "map",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                            title: "Elektropay Headquarters",
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.2546861447104!2d-2.2352382750476707!3d53.44071001137228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb23dd1f74d3b%3A0x11655e5e5281636d!2s7%20Mornington%20Cres%2C%20Manchester%20M14%206DF%2C%20UK!5e0!3m2!1sen!2smx!4v1596942375098!5m2!1sen!2smx",
                                            style: {
                                                border: "0"
                                            },
                                            className: "rounded",
                                            allowFullScreen: true
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        });
    }
}
/* harmony default export */ const contact_us = (ContactUs);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,2503], () => (__webpack_exec__(5949)));
module.exports = __webpack_exports__;

})();