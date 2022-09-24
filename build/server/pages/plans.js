"use strict";
(() => {
var exports = {};
exports.id = 1892;
exports.ids = [1892,5941,3882];
exports.modules = {

/***/ 2232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bg1.3221f1e8.png","height":1333,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAeklEQVR42mP49++f8u8/f9kYkMD///8V//z5qwrm/P37z+73rz8SIPbqva+mzVz7pPnwpQ96QEVqv379lYDpcN1x8qnu7I2PZkxa/mgrA8MqdqCY6J8/f81AkkwMBABIEeOV028ZN+x8ybRq01smhozLjCCxP3/+MgEAIvFHtuiQNZ0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_plans)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./images/hosting/bg1.png
var bg1 = __webpack_require__(2232);
;// CONCATENATED MODULE: ./components/Heros/plans.js




// import images

class Section extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-home d-flex align-items-center margin-top-100",
                style: {
                    background: `url(${bg1/* default.src */.Z.src}) center center`
                },
                id: "plans",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-overlay-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "mt-1 justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "title-heading text-center mt-0 position-relative",
                                    style: {
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "heading title-dark text-black mb-3",
                                            children: "Perfect Plans for Any Business Types"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "para-desc para-dark mx-auto text-black",
                                            children: "Start today with one of our perfect plans and select the best set of tools for your business type."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-5 pt-2"
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
/* harmony default export */ const plans = (Section);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/pricing-box.js
var pricing_box = __webpack_require__(7555);
// EXTERNAL MODULE: ./components/Shared/reviews-slider.js
var reviews_slider = __webpack_require__(1791);
// EXTERNAL MODULE: ./images/client/01.jpg
var _01 = __webpack_require__(7713);
// EXTERNAL MODULE: ./images/client/02.jpg
var _02 = __webpack_require__(6659);
// EXTERNAL MODULE: ./images/client/03.jpg
var _03 = __webpack_require__(9296);
// EXTERNAL MODULE: ./images/client/04.jpg
var _04 = __webpack_require__(2153);
// EXTERNAL MODULE: ./images/client/05.jpg
var _05 = __webpack_require__(9768);
// EXTERNAL MODULE: ./images/client/06.jpg
var _06 = __webpack_require__(1860);
;// CONCATENATED MODULE: ./pages/plans.js
// React Basic and Bootstrap







//Import components


// import PricingBox2 from "../../components/Shared/pricing-box2";


//Import Images






class PagePricing extends external_react_.Component {
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
                    name: "Price"
                }, 
            ],
            pricings: [
                {
                    id: 1,
                    title: "Free",
                    price: 0,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Enhanced Security"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "Starter",
                    price: 39,
                    duration: "mo",
                    buttonText: "Get Started",
                    btnLink: "",
                    isActive: true,
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "Free Appointments"
                        },
                        {
                            title: "Enhanced Security"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "PROFESSIONAL",
                    price: 59,
                    duration: "mo",
                    buttonText: "Try It Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Enhanced Security"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        }, 
                    ]
                }
            ],
            pricings1: [
                {
                    id: 1,
                    title: "Free",
                    price: 0,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "Starter",
                    price: 139,
                    duration: "mo",
                    buttonText: "Get Started",
                    btnLink: "",
                    isActive: true,
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "Free Appointments"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "PROFESSIONAL",
                    price: 259,
                    duration: "mo",
                    buttonText: "Try It Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        },
                        {
                            title: "Enhanced Security"
                        }, 
                    ]
                },
                {
                    id: 4,
                    title: "ULTIMATE",
                    price: 379,
                    duration: "mo",
                    buttonText: "Started Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Enhanced Security"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        },
                        {
                            title: "Free Installment"
                        }, 
                    ]
                }
            ],
            pricings2: [
                {
                    id: 1,
                    title: "Free",
                    price: 0,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "Starter",
                    price: 39,
                    duration: "mo",
                    buttonText: "Get Started",
                    btnLink: "",
                    isActive: true,
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "Free Appointments"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "PROFESSIONAL",
                    price: 59,
                    duration: "mo",
                    buttonText: "Try It Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        },
                        {
                            title: "Enhanced Security"
                        }, 
                    ]
                },
                {
                    id: 4,
                    title: "ULTIMATE",
                    price: 79,
                    duration: "mo",
                    buttonText: "Started Now",
                    btnLink: "",
                    features: [
                        {
                            title: "Full Access"
                        },
                        {
                            title: "Enhanced Security"
                        },
                        {
                            title: "Source Files"
                        },
                        {
                            title: "1 Domain Free"
                        },
                        {
                            title: "Free Installment"
                        }, 
                    ]
                }
            ],
            reviews: [
                {
                    id: 1,
                    img: _01/* default */.Z,
                    name: "Thomas Israel",
                    post: "C.E.O",
                    desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
                    rating: 5
                },
                {
                    id: 2,
                    img: _02/* default */.Z,
                    name: "Barbara McIntosh",
                    post: "M.D",
                    desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
                    rating: 4
                },
                {
                    id: 3,
                    img: _03/* default */.Z,
                    name: "Carl Oliver",
                    post: "P.A",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
                    rating: 3
                },
                {
                    id: 4,
                    img: _04/* default */.Z,
                    name: "Christa Smith",
                    post: "Manager",
                    desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
                    rating: 5
                },
                {
                    id: 5,
                    img: _05/* default */.Z,
                    name: "Dean Tolle",
                    post: "Developer",
                    desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
                    rating: 5
                },
                {
                    id: 6,
                    img: _06/* default */.Z,
                    name: "ill Webb",
                    post: "Designer",
                    desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
                    rating: 4
                }, 
            ],
            activeTab: "1"
        };
        this.toggleTab = this.toggleTab.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
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
                /*#__PURE__*/ jsx_runtime_.jsx(plans, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section pt-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                xs: "12",
                                className: "mt-4 pt-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                                            pills: true,
                                            className: "rounded-pill justify-content-center d-inline-block border py-1 px-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                    className: "d-inline-block mr-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                        className: external_classnames_default()({
                                                            active: this.state.activeTab === "1"
                                                        }, "px-3", "rounded-pill", "monthly"),
                                                        onClick: ()=>{
                                                            this.toggleTab("1");
                                                        },
                                                        children: "Monthly"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                    className: "d-inline-block",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.NavLink, {
                                                        className: external_classnames_default()({
                                                            active: this.state.activeTab === "2"
                                                        }, "px-3", "rounded-pill", "yearly"),
                                                        onClick: ()=>{
                                                            this.toggleTab("2");
                                                        },
                                                        children: [
                                                            "Yearly ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "badge badge-success rounded",
                                                                children: "15% Off "
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.TabContent, {
                                        activeTab: this.state.activeTab,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                                tabId: "1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_box/* default */.Z, {
                                                        pricings: this.state.pricings1
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                                tabId: "2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_box/* default */.Z, {
                                                        pricings: this.state.pricings2
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "section bg-light",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: 6,
                                            xs: "12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "faq-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        className: "question",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-help-circle text-primary mr-2 h4"
                                                            }),
                                                            " How our ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-primary",
                                                                children: "Elektropay"
                                                            }),
                                                            " work ?"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "answer text-muted ml-lg-4 pl-lg-3 mb-0",
                                                        children: "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: 6,
                                            xs: "12",
                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "faq-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        className: "question",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-help-circle text-primary mr-2 h4"
                                                            }),
                                                            " What is the main process open account ?"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "answer text-muted ml-lg-4 pl-lg-3 mb-0",
                                                        children: "If the distribution of letters is random, the reader will not be distracted from making a neutral judgement on the visual impact"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: 6,
                                            xs: "12",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "faq-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        className: "question",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-help-circle text-primary mr-2 h4"
                                                            }),
                                                            " How to make unlimited data entry ?"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "answer text-muted ml-lg-4 pl-lg-3 mb-0",
                                                        children: "Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: 6,
                                            xs: "12",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "faq-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        className: "question",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-help-circle text-primary mr-2 h4"
                                                            }),
                                                            " Is ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-primary",
                                                                children: "Elektropay"
                                                            }),
                                                            " safer to use with my account ?"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "answer text-muted ml-lg-4 pl-lg-3 mb-0",
                                                        children: "The most well-known which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds Latin."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                    className: "mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        xs: "12",
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "main-title mb-4",
                                                    children: "Have Question ? Get in touch!"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-muted para-desc mx-auto",
                                                    children: [
                                                        "Start working with ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-primary font-weight-bold",
                                                            children: "Elektropay"
                                                        }),
                                                        " that can provide everything you need to generate awareness, drive traffic, connect."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/",
                                                    className: "btn btn-primary mt-4",
                                                    children: [
                                                        "Contact us ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-arrow-right"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                    title: "Client Reviews",
                                    desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(reviews_slider/* default */.Z, {
                                    reviews: this.state.reviews
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        });
    }
}
/* harmony default export */ const pages_plans = (PagePricing);


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,1791,7555], () => (__webpack_exec__(5265)));
module.exports = __webpack_exports__;

})();