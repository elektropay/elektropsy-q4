"use strict";
(() => {
var exports = {};
exports.id = 9278;
exports.ids = [9278,5941,3882];
exports.modules = {

/***/ 1967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tasket)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Tasket/Search.js
// React Basic and Bootstrap




class Search extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section-two bg-light",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            lg: "10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                className: "p-4 shadow bg-white rounded",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "mb-3",
                                        children: "Search Your Domain Now"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            xs: "12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                className: "form-group mb-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                        name: "name",
                                                        id: "name",
                                                        type: "text",
                                                        className: "form-control rounded-left",
                                                        placeholder: "Your domain name :"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroupAddon, {
                                                        addonType: "append",
                                                        id: "button-addon4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                className: "form-control rounded-0",
                                                                id: "domain_list",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".in"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".com"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".org"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".net"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".info"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        children: ".me"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "button",
                                                                id: "search",
                                                                name: "search",
                                                                className: "searchbtn btn btn-primary btn-block",
                                                                value: "Search"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".in ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$4.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".com ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$5.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".org ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$6.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".net ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$7.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".info ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$3.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                lg: "2",
                                                md: "4",
                                                xs: "6",
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded shadow bg-white p-1 text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "mb-0",
                                                                children: [
                                                                    ".me ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-primary",
                                                                        children: "$2.99"
                                                                    }),
                                                                    "/year"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        });
    }
}
/* harmony default export */ const Tasket_Search = (Search);

// EXTERNAL MODULE: ./images/hosting/bg1.png
var bg1 = __webpack_require__(2232);
;// CONCATENATED MODULE: ./components/Tasket/section.js




// import images

class Section extends external_react_.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "bg-home bg-primary d-flex align-items-center",
                    style: {
                        background: `url(${bg1/* default.src */.Z.src}) center center`
                    },
                    id: "home",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-overlay"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "margin-top-100 justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "title-heading text-center mt-5 position-relative",
                                        style: {
                                            zIndex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "heading title-dark text-white mb-3",
                                                children: "Cloud Services & Web Hosting Solution"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "para-desc para-dark mx-auto text-light",
                                                children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 pt-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "btn btn-success",
                                                        children: "Get Started"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-light",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 250",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M720 125L2160 0H2880V250H0V125H720Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./images/icon/computer.svg
var computer = __webpack_require__(7702);
// EXTERNAL MODULE: ./images/icon/cloud.svg
var cloud = __webpack_require__(873);
// EXTERNAL MODULE: ./images/icon/server.svg
var server = __webpack_require__(9307);
// EXTERNAL MODULE: ./images/icon/big.svg
var big = __webpack_require__(4261);
// EXTERNAL MODULE: ./images/icon/database.svg
var database = __webpack_require__(4401);
// EXTERNAL MODULE: ./images/icon/refresh.svg
var refresh = __webpack_require__(9638);
;// CONCATENATED MODULE: ./components/Tasket/Services.js
// React Basic and Bootstrap





//import images






class Services extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    image: computer/* default */.Z,
                    title: "Domain Name",
                    desc: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
                    link: "#"
                },
                {
                    image: cloud/* default */.Z,
                    title: "Cloud Hosting",
                    desc: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
                    link: "#"
                },
                {
                    image: server/* default */.Z,
                    title: "Shared Hosting",
                    desc: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
                    link: "#"
                },
                {
                    image: big/* default */.Z,
                    title: "VPS Hosting",
                    desc: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
                    link: "#"
                },
                {
                    image: database/* default */.Z,
                    title: "Reseller Hosting",
                    desc: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
                    link: "#"
                },
                {
                    image: refresh/* default */.Z,
                    title: "Web Hosting",
                    desc: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
                    link: "#"
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "pb-lg-4 mb-md-5 mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                className: "align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "9",
                                        md: "8",
                                        className: "text-sm-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "title mb-4",
                                                    children: "Cloud Hosting Services"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-muted para-desc mb-0",
                                                    children: [
                                                        "Start working with ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-primary font-weight-bold",
                                                            children: "Elektropay"
                                                        }),
                                                        " that can provide everything you need to generate awareness, drive traffic, connect."
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "3",
                                        md: "4",
                                        className: "mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "btn btn-outline-primary",
                                                children: [
                                                    "Read more ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "mdi mdi-chevron-right"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: this.state.features.map((feature, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "4",
                                        md: "6",
                                        xs: "12",
                                        className: "mt-5 pt-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "features",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image position-relative d-inline-block",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: feature.image,
                                                        width: 65,
                                                        height: 65,
                                                        className: "avatar avatar-small",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "title-2",
                                                            children: feature.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-muted",
                                                            children: feature.desc
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: feature.link,
                                                            className: "text-success",
                                                            children: [
                                                                "Read more ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-chevron-right"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, key))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-light",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 250",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M720 125L2160 0H2880V250H0V125H720Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const Tasket_Services = (Services);

// EXTERNAL MODULE: ./components/Shared/section-title-left.js
var section_title_left = __webpack_require__(6469);
// EXTERNAL MODULE: ./images/hosting/1.png
var _1 = __webpack_require__(9041);
// EXTERNAL MODULE: ./images/hosting/2.png
var _2 = __webpack_require__(4084);
// EXTERNAL MODULE: ./images/hosting/deal-hend.png
var deal_hend = __webpack_require__(8135);
;// CONCATENATED MODULE: ./components/Tasket/HowItWorks.js
// React Basic and Bootstrap





//Import Components

//import images



class HowItWorks extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features1: [
                {
                    title: "Digital Marketing Solutions for Tomorrow"
                },
                {
                    title: "Our Talented & Experienced Marketing Agency"
                },
                {
                    title: "Create your own skin to match your brand"
                }, 
            ],
            features2: [
                {
                    title: "Digital Marketing Solutions for Tomorrow"
                },
                {
                    title: "Our Talented & Experienced Marketing Agency"
                },
                {
                    title: "Create your own skin to match your brand"
                }, 
            ],
            features3: [
                {
                    title: "Digital Marketing Solutions for Tomorrow"
                },
                {
                    title: "Our Talented & Experienced Marketing Agency"
                },
                {
                    title: "Create your own skin to match your brand"
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "section bg-light",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 5,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: _1/* default */.Z,
                                            className: "img-fluid",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 7,
                                        md: 6,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title ml-lg-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                    title: "Get best plan for more power with cloud Hosting",
                                                    desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                    features: this.state.features1,
                                                    class: "mdi-18px h5 me-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mt-3",
                                                        children: [
                                                            "Get Started ",
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
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 6,
                                        md: 6,
                                        className: "order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                    title: "Don't Compromise with the best web hosting solutions",
                                                    desc: "Using Elektropay to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.",
                                                    features: this.state.features2,
                                                    class: "mdi-18px h5 me-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mt-3",
                                                        children: [
                                                            "Get Started ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-chevron-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 6,
                                        md: 6,
                                        className: "order-1 order-md-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: deal_hend/* default */.Z,
                                            className: "img-fluid",
                                            alt: ""
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: _2/* default */.Z,
                                            className: "img-fluid",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 7,
                                        md: 6,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title ml-lg-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                    title: "Powerful Server & Web Hosting Plateform",
                                                    desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                    features: this.state.features3,
                                                    class: "mdi-18px h5 me-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mt-3",
                                                        children: [
                                                            "Get Started ",
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
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 250",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M720 125L2160 0H2880V250H0V125H720Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const Tasket_HowItWorks = (HowItWorks);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/pricing-box.js
var pricing_box = __webpack_require__(7555);
;// CONCATENATED MODULE: ./components/Tasket/Price.js
// React Basic and Bootstrap




//Import Components


class Price extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            pricings1: [
                {
                    id: 1,
                    title: "CLOUD HOSTING",
                    price: 0,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "DEDICATED HOSTING",
                    price: 39,
                    duration: "mo",
                    buttonText: "Get Started",
                    btnLink: "",
                    isActive: true,
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "VPS HOSTING",
                    price: 59,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 4,
                    title: "SHARED HOSTING",
                    price: 79,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                }
            ],
            pricings2: [
                {
                    id: 1,
                    title: "CLOUD HOSTING",
                    price: 0,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 2,
                    title: "DEDICATED HOSTING",
                    price: 139,
                    duration: "mo",
                    buttonText: "Get Started",
                    btnLink: "",
                    isActive: true,
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 3,
                    title: "VPS HOSTING",
                    price: 259,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                },
                {
                    id: 4,
                    title: "SHARED HOSTING",
                    price: 379,
                    duration: "mo",
                    buttonText: "Buy Now",
                    btnLink: "",
                    features: [
                        {
                            title: "2 GB Memory"
                        },
                        {
                            title: "10 Free Optimization"
                        },
                        {
                            title: "24/7 support"
                        },
                        {
                            title: "Content Optimization"
                        }, 
                    ]
                }
            ],
            activeTab: "1",
            activeIndex1: 1,
            activeIndex2: 5
        };
        this.toggleTab.bind(this);
    }
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    componentDidMount() {
        var pricingboxes = document.getElementsByName("pricingbox");
        for(var i = 0; i < pricingboxes.length; i++){
            pricingboxes[i].classList.remove("business-rate");
            pricingboxes[i].classList.remove("shadow");
            pricingboxes[i].classList.add("pt-5");
            pricingboxes[i].classList.add("pb-5");
            pricingboxes[i].classList.add("text-center");
            if (i === this.state.activeIndex1 || i === this.state.activeIndex2) {
                pricingboxes[i].classList.add("starter-plan");
                pricingboxes[i].classList.add("shadow");
            }
        }
        var pricingsections = document.getElementsByName("pricingsection");
        for(var j = 0; j < pricingsections.length; j++){
            pricingsections[j].classList.add("justify-content-center");
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Our Hosting Rates",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    xs: "12",
                                    className: "mt-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                                                pills: true,
                                                justified: true,
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
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-light",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 250",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M720 125L2160 0H2880V250H0V125H720Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const Tasket_Price = (Price);

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
;// CONCATENATED MODULE: ./components/Tasket/Testi.js
// React Basic and Bootstrap



//Import Components


//Import Images






class Testi extends external_react_.Component {
    componentDidMount() {
        var sectiontitles = document.getElementsByName("maintitle");
        sectiontitles[sectiontitles.length - 1].classList.remove("mb-4");
        sectiontitles[sectiontitles.length - 1].classList.remove("pb-2");
        sectiontitles[sectiontitles.length - 1].classList.add("mb-60");
    }
    constructor(props){
        super(props);
        this.state = {
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
            ]
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section bg-light",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "pb-lg-4 mb-md-5 mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Client Reviews",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(reviews_slider/* default */.Z, {
                                reviews: this.state.reviews
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape overflow-hidden text-footer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 2880 250",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M720 125L2160 0H2880V250H0V125H720Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const Tasket_Testi = (Testi);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/tasket.js











//Render Components
class payment extends external_react_.Component {
    componentDidMount() {
        var ref;
        document.body.classList = "";
        (ref = document.getElementById("topnav")) === null || ref === void 0 ? void 0 : ref.classList.add("bg-white");
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
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Topbar/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(section, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Tasket_Search, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Tasket_Services, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Tasket_HowItWorks, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Tasket_Price, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Tasket_Testi, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const tasket = (payment);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,6469,1791,7555,1320], () => (__webpack_exec__(1967)));
module.exports = __webpack_exports__;

})();