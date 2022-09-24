"use strict";
exports.id = 2503;
exports.ids = [2503];
exports.modules = {

/***/ 9291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./images/logo_white.png
/* harmony default export */ const logo_white = ({"src":"/_next/static/media/logo_white.36bced00.png","height":27,"width":172,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJUlEQVR4nGNcceN1eJCK0A1WZiax////MzIwMLwHYi4gZgbifwDBmAk82+gj1QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./images/pci_dss.png
/* harmony default export */ const pci_dss = ({"src":"/_next/static/media/pci_dss.68079cb9.png","height":14,"width":39,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAQUlEQVR42mPo7u7OBuJCIE4DYmUgVgRiCyA2B2JxBiChA8TWQOwKxOZArADEhiDc1dUlClIQDsQpQGwAxEoMaAAAeTglJevlEkkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/Layout/Footer.js





// import CookiePolicy
// import CookiePolicyBanner from '@edx/frontend-component-cookie-policy-banner';
// import images


class Footer extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            grid1: [
                {
                    title: "Card Processing",
                    link: "/card-processing"
                },
                {
                    title: "Omni Commerce",
                    link: "/omni-commerce"
                },
                {
                    title: "Crypto Processing",
                    link: "/bitcoin-payments"
                },
                {
                    title: "Real-Time Processing",
                    link: "/real-time-payments"
                },
                {
                    title: "Mobile Processing",
                    link: "/mobile-payments"
                },
                {
                    title: "ElektroPOS",
                    link: "/elektropos"
                },
                {
                    title: "Marketplace",
                    link: "/marketplace"
                },
                {
                    title: "SugarBiller",
                    link: "/sugar-biller"
                },
                {
                    title: "KardIssue",
                    link: "/kard-issue"
                }, 
            ],
            grid2: [
                {
                    title: "Payment Methods",
                    link: "/payment-method"
                },
                {
                    title: "InStore Payments",
                    link: "/instore-payments"
                },
                {
                    title: "Fraud Prevention",
                    link: "/fraud-prevention"
                },
                {
                    title: "Payouts",
                    link: "/payouts"
                },
                {
                    title: "Global Reach",
                    link: "/global-reach"
                },
                {
                    title: "Analytics Engine",
                    link: "/analytics-engine"
                },
                {
                    title: "Serverless Stack",
                    link: "/serverless-stack"
                },
                {
                    title: "Risk Management",
                    link: "/risk-management"
                },
                {
                    title: "Fees & Pricing",
                    link: "/plans"
                }, 
            ],
            grid3: [
                {
                    title: "Contact us",
                    link: "/contact-us"
                },
                {
                    title: "About us",
                    link: "/about-us"
                },
                {
                    title: "Our Team",
                    link: "/our-team"
                },
                {
                    title: "Careers",
                    link: "/careers",
                    isNowHiring: true
                },
                {
                    title: "Partners",
                    link: "/partners"
                }, 
            ],
            grid4: [
                {
                    title: "Our Blog",
                    link: "/blog"
                },
                {
                    title: "Help & Support",
                    link: "/support"
                },
                {
                    title: "Sandbox API",
                    link: "sandbox.elektropay.com"
                },
                {
                    title: "Documentation",
                    link: "docs.elektropay.com"
                },
                {
                    title: "Developer Portal",
                    link: "developers.elektropay.com"
                }, 
            ],
            grid5: [
                {
                    title: "Privacy",
                    link: "/privacy-policy"
                },
                {
                    title: "Terms",
                    link: "/terms"
                },
                {
                    title: "GDPR",
                    link: "/gbpr"
                },
                {
                    title: "Security",
                    link: "/security-policy"
                },
                {
                    title: "Cookies",
                    link: "/cookie-policy"
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "w-100",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                        className: this.props.isLight ? "footer bg-black" : "footer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                className: "mt-20 mb-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-3 pb-4 pe-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        className: "align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                sm: "8",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-sm-start",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "mb-0 text-white",
                                                        children: "Ready To start Accepting Payments?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                sm: "4",
                                                className: "mt-1 mt-sm-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-sm-start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "app.elektropay.com/signup",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "btn btn-primary me-2",
                                                                children: [
                                                                    "Get Started ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi mdi-chevron-right"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "sandbox.elektropay.com",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "btn btn-secondary",
                                                                children: [
                                                                    "Try Sandbox ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi mdi-chevron-right"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: "4",
                                            xs: "12",
                                            className: "mb-0 mb-md-4 pb-0 pb-md-2 pe-4",
                                            name: "footercolumn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: this.props.isLight ? "logo-footer" : "logo-footer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: logo_white,
                                                            className: "",
                                                            width: "160",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: this.props.isLight ? "small mt-4 text-white" : "mt-4 me-1 small",
                                                    children: "Elektropay is an Open Payments Platform that enables customers to manage payments, transfer money, connect thier personal, business and payment accounts"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-unstyled social-icon social mb-0 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-inline-item me-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "rounded",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "mdi mdi-facebook",
                                                                            title: "Facebook"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-inline-item me-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "rounded",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "mdi mdi-linkedin",
                                                                            title: "Linkedin"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-inline-item me-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "rounded",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "mdi mdi-whatsapp",
                                                                            title: "Whatsapp"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-inline-item me-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "rounded",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "mdi mdi-twitter",
                                                                            title: "Twitter"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-inline-item me-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "rounded",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "mdi mdi-slack",
                                                                            title: "Slack"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: "2",
                                            md: "4",
                                            xs: "12",
                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                            name: "footercolumn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: this.props.isLight ? "text-dark footer-head" : "text-light footer-head",
                                                    children: "Platform"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-unstyled footer-list mt-4 small",
                                                    children: this.state.grid1.map((grid, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: grid.link,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: this.props.isLight ? "text-muted" : "text-foot",
                                                                    children: [
                                                                        grid.title,
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }, key))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: "2",
                                            md: "2",
                                            xs: "12",
                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                            name: "footercolumn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: this.props.isLight ? "text-dark footer-head" : "text-light footer-head",
                                                    children: "Features"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-unstyled footer-list mt-4 small",
                                                    children: this.state.grid2.map((grid, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: grid.link,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: this.props.isLight ? "text-muted" : "text-foot",
                                                                    children: [
                                                                        grid.title,
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }, key))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: "2",
                                            md: "2",
                                            xs: "12",
                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                            name: "footercolumn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: this.props.isLight ? "text-dark footer-head" : "text-light footer-head",
                                                    children: "Company"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-unstyled footer-list mt-4 small",
                                                    children: this.state.grid3.map((grid, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: grid.link,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: this.props.isLight ? "text-muted" : "text-foot",
                                                                    children: [
                                                                        grid.title,
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }, key))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: "2",
                                            md: "2",
                                            xs: "12",
                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                            name: "footercolumn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: this.props.isLight ? "text-dark footer-head" : "text-light footer-head",
                                                    children: "Resources"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-unstyled footer-list mt-4 small",
                                                    children: this.state.grid4.map((grid, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: grid.link,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: this.props.isLight ? "text-muted" : "text-foot",
                                                                    children: [
                                                                        grid.title,
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        }, key))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                        className: "footer footer-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                            className: "text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: "align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        md: "4",
                                        sm: "6",
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm-start small",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled mb-0 small",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "list-inline-item me-0 text-muted",
                                                    children: [
                                                        "Elektropay is a service of EverPay. \xa9 2022 Elektropay.",
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        md: "3",
                                        sm: "6",
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled creditcard-icons text-sm-center mb-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-discover"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-jcb"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-amex"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-stripe"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-apple-pay"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-cc-amazon-pay"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: pci_dss,
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        md: "5",
                                        sm: "6",
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled copyright-list text-sm-right mb-0",
                                            children: [
                                                this.state.grid5.map((grid, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-inline-item small me-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: grid.link,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: this.props.isLight ? "text-copyright" : "text-muted small",
                                                                children: [
                                                                    grid.title,
                                                                    " "
                                                                ]
                                                            })
                                                        })
                                                    }, key)),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "list-inline-item small ms-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "elektropay.freshstatus.io",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "text-muted small",
                                                                children: [
                                                                    " ",
                                                                    "Status ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-circle text-success"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "xx-small text-white pb1",
                                                            children: [
                                                                " ",
                                                                "Operational"
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const Layout_Footer = (Footer);


/***/ }),

/***/ 6695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Topbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(3308);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./images/logo_grey.png
/* harmony default export */ const logo_grey = ({"src":"/_next/static/media/logo_grey.8a3dc180.png","height":678,"width":3361,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGMM3XhOT+DZPU7RZ7e+/WHj4mL4/+8rAwPDbyBmBuI3jH4rjuhx3rv6V+X3Z47fTMxsDP//fwBKiAIxSMFzAIWEGE2+TqySAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./components/Layout/Topbar.js






//Import Images

class Topbar extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            navLinks: [
                {
                    id: 1,
                    title: "Platform",
                    link: "/#",
                    isMegaMenu: true,
                    isOpenSubMenu: false,
                    child: [
                        {
                            title: "Card Processing",
                            link: `/card-processing`
                        },
                        {
                            title: "Omni-Commerce",
                            link: "/omni-commerce"
                        },
                        {
                            title: "Real-Time Payments",
                            link: "/real-time-payments",
                            isNew: true
                        },
                        {
                            title: "Bitcoin Payments",
                            link: "/bitcoin-payments"
                        },
                        {
                            title: "Mobile Payments",
                            link: "/mobile-payments"
                        },
                        {
                            title: "Bank Payments",
                            link: "/bank-payments",
                            isNew: true
                        }, 
                    ],
                    child2: [
                        {
                            title: "ElektroPos",
                            link: "/elektropos",
                            isNew: true
                        },
                        {
                            title: "Tasket",
                            link: "/tasket"
                        },
                        {
                            title: "Marketplace",
                            link: "/marketplace"
                        },
                        {
                            title: "EAuth",
                            link: "/e-auth"
                        },
                        {
                            title: "SugarBiller",
                            link: "/sugar-biller"
                        },
                        {
                            title: "KardIssue",
                            link: "/kard-issue",
                            isNew: true
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "Features",
                    link: "/#",
                    isMegaMenu: true,
                    isOpenSubMenu: false,
                    child: [
                        {
                            title: "Payment Methods",
                            link: "/payment-method"
                        },
                        {
                            title: "Fraud Prevention",
                            link: "/fraud-prevention"
                        },
                        {
                            title: "Instore Payments",
                            link: "/instore-payments"
                        },
                        {
                            title: "Risk Management",
                            link: "/risk-management",
                            isNew: true
                        }, 
                    ],
                    child2: [
                        {
                            title: "Payouts",
                            link: "/payouts"
                        },
                        {
                            title: "Global Reach",
                            link: "/global-reach"
                        },
                        {
                            title: "Analytics Engine",
                            link: "/analytics-engine"
                        },
                        {
                            title: "Serverless Stack",
                            link: "/serverless-stack"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "Plans",
                    link: "/plans"
                },
                {
                    id: 4,
                    title: "Company",
                    link: "/#",
                    isOpenSubMenu: false,
                    child: [
                        {
                            id: 1,
                            title: "Contact Us",
                            link: "/contact-us"
                        },
                        {
                            id: 3,
                            title: "About Us",
                            link: "/about-us"
                        },
                        {
                            id: 4,
                            title: "Our Team",
                            link: "/our-team"
                        },
                        {
                            id: 5,
                            title: "Careers",
                            link: "/careers",
                            isNowHiring: true
                        },
                        {
                            id: 6,
                            title: "Partners",
                            link: "/partners"
                        }, 
                    ]
                },
                {
                    id: 5,
                    title: "Resources",
                    link: "/#",
                    isOpenSubMenu: false,
                    child: [
                        {
                            title: "Our Blog",
                            link: "/blog"
                        },
                        {
                            title: "Help & Support",
                            link: "/support"
                        },
                        {
                            title: "Sandbox API",
                            link: "https://sandbox.elektropay.com"
                        },
                        {
                            title: "Documentation",
                            link: "https://docs.elektropay.com"
                        },
                        {
                            title: "Developer Portal",
                            link: "https://developers.elektropay.com"
                        }, 
                    ]
                }, 
            ]
        };
        this.toggleLine = this.toggleLine.bind(this);
        this.openBlock.bind(this);
        this.openNestedBlock.bind(this);
    }
    toggleLine() {
        this.setState((prevState)=>({
                isOpen: !prevState.isOpen
            }));
    }
    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("top-menu");
        var items = ul.getElementsByTagName("a");
        for(var i = 0; i < (items === null || items === void 0 ? void 0 : items.length); ++i){
            var ref, ref1, ref2;
            if (((ref = this.props) === null || ref === void 0 ? void 0 : (ref1 = ref.location) === null || ref1 === void 0 ? void 0 : ref1.pathname) === ((ref2 = items[i]) === null || ref2 === void 0 ? void 0 : ref2.pathname)) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }
    activateParentDropdown = (item)=>{
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent1 = parent.parentElement;
            parent1.classList.add("active"); // li
            if (parent1) {
                const parent2 = parent1.parentElement;
                parent2.classList.add("active"); // li
                if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add("active"); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add("active"); // li
                    }
                }
            }
        }
    };
    openBlock = (level2_id)=>{
        //match level 2 id with current clicked id and if id is correct then update status and open level 2 submenu
        this.setState({
            navLinks: this.state.navLinks.map((navLink)=>navLink.id === level2_id ? {
                    ...navLink,
                    isOpenSubMenu: !navLink.isOpenSubMenu
                } : navLink)
        });
    };
    openNestedBlock = (level2_id, level3_id)=>{
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink)=>//Match level 2 id
            tmpLink.id === level2_id ? tmpLink.child.map((tmpchild)=>//if level1 id is matched then match level 3 id
                tmpchild.id === level3_id ? //if id is matched then update status(level 3 sub menu will be open)
                tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu : tmpchild.isOpenNestedSubMenu = false) : false);
        this.setState({
            navLinks: tmpLinks
        });
    };
    render() {
        var ref;
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
                id: "topnav",
                className: "defaultscroll sticky active bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo_grey,
                                    alt: "",
                                    className: "header_logo",
                                    width: 180,
                                    height: 36
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "buy-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://app.elektropay.com/signup",
                                id: "signupButton",
                                className: "btn btn-outline-primary mt-3 d-none d-sm-block",
                                children: "Try Its Free "
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "buy-button login-btn-light",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                id: "loginButton",
                                className: "btn btn-light mt-3 me-2 d-none d-md-block",
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-extras",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: this.toggleLine,
                                        className: this.state.isOpen ? "navbar-toggle open" : "navbar-toggle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "lines",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                            ]
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "navigation",
                            style: {
                                display: this.state.isOpen ? "block" : "none"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navigation-menu pt-1",
                                    id: "top-menu",
                                    children: [
                                        (ref = this.state.navLinks) === null || ref === void 0 ? void 0 : ref.map((navLink, key)=>{
                                            return navLink.child || navLink.child2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-submenu",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: navLink === null || navLink === void 0 ? void 0 : navLink.link,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: (event)=>{
                                                                event.preventDefault();
                                                                this.openBlock(navLink.id);
                                                            },
                                                            children: navLink.title
                                                        })
                                                    }),
                                                    navLink.isMegaMenu ? // if menu is mega menu(2 columns grid)
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    children: navLink === null || navLink === void 0 ? void 0 : navLink.child.map((item, childKey)=>{
                                                                        /*#__PURE__*/ return jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: item === null || item === void 0 ? void 0 : item.link,
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    children: [
                                                                                        item.title,
                                                                                        item.isNew ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "badge badge-danger rounded ml-2",
                                                                                            children: "v2.0"
                                                                                        }) : null
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }, childKey);
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    children: navLink.child2.map((item, childKey)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: item.link,
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    children: [
                                                                                        item.title,
                                                                                        item.isNowHiring ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "badge badge-success rounded ml-2",
                                                                                            children: "Now Hiring"
                                                                                        }) : null
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }, childKey))
                                                                })
                                                            })
                                                        ]
                                                    }) : // if menu is not mega menu(1grid)
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: navLink.isOpenSubMenu ? "submenu open" : "submenu",
                                                        children: navLink.child.map((childArray, childKey)=>{
                                                            return childArray.nestedChild ? // sub menu item - Level 2
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "has-submenu",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: childArray === null || childArray === void 0 ? void 0 : childArray.link,
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                onClick: (event)=>{
                                                                                    event.preventDefault();
                                                                                    this.openNestedBlock(navLink.id, childArray.id);
                                                                                },
                                                                                children: [
                                                                                    " ",
                                                                                    childArray.title,
                                                                                    " ",
                                                                                    childArray.isAdded ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "badge badge-primary rounded",
                                                                                        children: "Added"
                                                                                    }) : null
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "submenu-arrow"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: childArray.isOpenNestedSubMenu ? "submenu open" : "submenu",
                                                                        children: childArray.nestedChild.map((nestedChildArray, nestedKey)=>// nested sub menu item - Level 3
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                                    href: nestedChildArray.link,
                                                                                    children: [
                                                                                        nestedChildArray.title,
                                                                                        " ",
                                                                                        nestedChildArray.isAdded ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "badge badge-primary rounded",
                                                                                            children: "Added"
                                                                                        }) : null
                                                                                    ]
                                                                                })
                                                                            }, nestedKey))
                                                                    })
                                                                ]
                                                            }, childKey) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: childArray.link,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: childArray.title
                                                                    })
                                                                })
                                                            }, childKey);
                                                        })
                                                    })
                                                ]
                                            }, key) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: navLink.link,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: navLink.title
                                                    })
                                                })
                                            }, key);
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/support",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        id: "supportButton",
                                                        className: "text-secondary mdi-20px profile-icons",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-account rounded-pill p-2 bg-light shadow profile-icons",
                                                            title: "Contact Support +1 800-566-6003"
                                                        })
                                                    })
                                                }),
                                                " "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "buy-menu-btn ml-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            id: "signupButton",
                                            target: "_blank",
                                            className: "btn btn-primary d-md-none",
                                            children: "Get Started"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "buy-menu-btn ml-4 mt-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        id: "loginButton",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn btn-success d-md-none mr-2",
                                            children: "Login"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const Layout_Topbar = (Topbar);


/***/ })

};
;