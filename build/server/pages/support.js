"use strict";
(() => {
var exports = {};
exports.id = 5563;
exports.ids = [5563,5941,3882];
exports.modules = {

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/user.808daa75.svg","height":633,"width":633});

/***/ }),

/***/ 1696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_support)
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
;// CONCATENATED MODULE: ./components/Support/section.js



class Section extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-half-170 bg-light d-table w-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            lg: "10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "title-heading text-center mt-5 pt-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "alert alert-light alert-pills",
                                        role: "alert",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1000",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Badge, {
                                                color: "success",
                                                className: "rounded me-1",
                                                children: "Support"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "content",
                                                children: " Customer Support 24/7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "heading mb-3",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1400",
                                        children: "How Can We Help You ?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "para-desc mx-auto text-muted",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1800",
                                        children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "subcribe-form mt-4 pt-2",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "2200",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Form, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                className: "mb-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        id: "help",
                                                        name: "name",
                                                        className: "border bg-white rounded-pill shadow",
                                                        required: true,
                                                        placeholder: "Search the help center"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                        type: "submit",
                                                        color: "primary",
                                                        className: "btn-pills",
                                                        children: "Search"
                                                    })
                                                ]
                                            })
                                        })
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
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Support/feature-box.js




class FeatureBox extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.features.map((feature, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                    lg: "4",
                    md: "6",
                    xs: "12",
                    className: "mt-4 pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "catagories text-center p-4 rounded",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1000",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: feature.image,
                                    width: 65,
                                    height: 65,
                                    className: "avatar avatar-small ",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: feature.link,
                                    className: "text-dark",
                                    children: feature.title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-muted mb-0 mt-3",
                                children: feature.desc
                            })
                        ]
                    })
                }, key))
        });
    }
}
/* harmony default export */ const feature_box = (FeatureBox);

;// CONCATENATED MODULE: ./images/icon/chat.svg
/* harmony default export */ const chat = ({"src":"/_next/static/media/chat.e22c6112.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/customer-service.svg
/* harmony default export */ const customer_service = ({"src":"/_next/static/media/customer-service.ceac2991.svg","height":512,"width":512});
// EXTERNAL MODULE: ./images/icon/user.svg
var user = __webpack_require__(8189);
;// CONCATENATED MODULE: ./images/icon/call.svg
/* harmony default export */ const call = ({"src":"/_next/static/media/call.8476c0bb.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/writing.svg
/* harmony default export */ const writing = ({"src":"/_next/static/media/writing.a31a1238.svg","height":569,"width":569});
;// CONCATENATED MODULE: ./images/icon/mail.svg
/* harmony default export */ const mail = ({"src":"/_next/static/media/mail.2b61d5c5.svg","height":523,"width":523});
;// CONCATENATED MODULE: ./components/Support/features.js



//Import Components

//Import Images






class Features extends external_react_.Component {
    state = {
        features: [
            {
                title: "Live Chat",
                image: chat,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            },
            {
                title: "Social",
                image: customer_service,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            },
            {
                title: "Support Portal",
                image: user/* default */.Z,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            },
            {
                title: "Phone Supports",
                image: call,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            },
            {
                title: "Tickets",
                image: writing,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            },
            {
                title: "FAQ's",
                image: mail,
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
                link: ""
            }, 
        ]
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            xs: "12",
                            className: "text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title mb-4 pb-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "badge badge-success rounded",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1000",
                                        children: "Features"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "title my-4",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1400",
                                        children: "Communication Resources"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-muted para-desc mx-auto mb-0",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1800",
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
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(feature_box, {
                            features: this.state.features
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const features = (Features);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Support/tab-content.js





class TabContents extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        md: "6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: this.props.img,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1400",
                            className: "img-fluid mx-auto d-block shadow rounded",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        md: "6",
                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-title ms-md-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "title mb-4",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1000",
                                    children: this.props.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-muted",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1400",
                                    children: this.props.desc
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1800",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            to: this.props.readMoreLink,
                                            className: "text-primary p-1 px-2 shadow rounded me-3",
                                            children: [
                                                "Read More ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "mdi mdi-chevron-right"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            to: this.props.blogLink,
                                            className: "text-warning p-1 px-2 shadow rounded",
                                            children: "Blogs"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const tab_content = (TabContents);

;// CONCATENATED MODULE: ./images/customer/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.db96355f.png","height":600,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAc0lEQVR42g3JSQ6CQBAF0F8DrZzC+y+NiZfShQalgZrot30AbvfHM7I+38PMD/O+Hf91Z6C7OxOYa+2GSp1EJ1ZgEREAk4o5ItPSI2LEpkIAPPp8mSnRiFJrRBExEIwy5Ct+jaWRMsZgkNauRVjS37btFSfhr0N0KXUi5QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/customer/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.59102b79.png","height":600,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgUlEQVR42hXJOQ7CMBAAQEs8gJaS/wuUi0t8B6rYJg6+vevdOMVUI4Q499O9EhuTIfucvLNmnm2L06UbiDlGn72kvNSkc1xbHPvhxswhJiAuxAqSLHGPazcCgrUeCRMUqA22OIzTwwX+26i0o4qfL/6WPcTz9WZms1qlA2KVCgFoA4b+dSeefqYyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/customer/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.065708ed.png","height":600,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAcElEQVR42hXLSQrCUBBF0fte/SB2e3D/IxFckC7AhiiEmF8lGZ7BAU7ny7Vnvd7z0nOa5sfzc7uPDb49u8RmWDJt63jY7nfVYApZ0AuWnzyQJckw2gGEmxRSFV1eB7ZWVZfsIhxVGJBUoqBZIWcSoT/RNzPPEgRbvAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./components/Support/support.js






//Import Components

//Import Images



class Support extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: "1"
        };
        this.toggleTab = this.toggleTab.bind(this);
    }
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                className: "mt-100 mt-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            xs: "12",
                            className: "text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "title mb-4",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1000",
                                        children: "Need to CRM Support"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-muted para-desc mb-0 mx-auto",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1400",
                                        children: [
                                            "Start working with ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-primary font-weight-bold",
                                                children: "Elektropay"
                                            }),
                                            " that can provide everything you need to generate awareness, drive traffic, connect."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                        className: "mt-5 pt-1 justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            lg: "8",
                                            md: "12",
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                                                className: "flex-column flex-sm-row rounded",
                                                pills: true,
                                                justified: true,
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                            className: external_classnames_default()({
                                                                active: this.state.activeTab === "1"
                                                            }, "rounded"),
                                                            onClick: ()=>{
                                                                this.toggleTab("1");
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-center pt-1 pb-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "title font-weight-normal mb-0",
                                                                    children: "Community"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                            className: external_classnames_default()({
                                                                active: this.state.activeTab === "2"
                                                            }, "rounded"),
                                                            onClick: ()=>{
                                                                this.toggleTab("2");
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-center pt-1 pb-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "title font-weight-normal mb-0",
                                                                    children: "Self Service"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                            className: external_classnames_default()({
                                                                active: this.state.activeTab === "3"
                                                            }, "rounded"),
                                                            onClick: ()=>{
                                                                this.toggleTab("3");
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-center pt-1 pb-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "title font-weight-normal mb-0",
                                                                    children: "Teamwork"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            xs: "12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.TabContent, {
                                activeTab: this.state.activeTab,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                        tabId: "1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(tab_content, {
                                            img: _1,
                                            title: "User Community",
                                            desc: "CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.",
                                            readMoreLink: "#",
                                            blogLink: "#"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                        tabId: "2",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                            className: "align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                    md: {
                                                        size: 6,
                                                        order: 1
                                                    },
                                                    xs: {
                                                        order: 1
                                                    },
                                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "section-title me-md-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "title mb-4",
                                                                "data-aos": "fade-up",
                                                                "data-aos-duration": "1000",
                                                                children: "Self-service Portal"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-muted",
                                                                "data-aos": "fade-up",
                                                                "data-aos-duration": "1400",
                                                                children: "CRM systems start by collecting a customers website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the companys activity, and it can store personal details, such as a clients personal preferences on communications."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mt-4",
                                                                "data-aos": "fade-up",
                                                                "data-aos-duration": "1800",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "/",
                                                                        className: "text-primary p-1 px-2 shadow rounded me-3",
                                                                        children: [
                                                                            "Read More ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "mdi mdi-chevron-right"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "/",
                                                                        className: "text-warning p-1 px-2 shadow rounded",
                                                                        children: "Blogs"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                    md: {
                                                        size: 6,
                                                        order: 2
                                                    },
                                                    xs: {
                                                        order: 1
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: _2,
                                                        "data-aos": "fade-up",
                                                        "data-aos-duration": "1400",
                                                        className: "img-fluid mx-auto d-block shadow rounded",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                        tabId: "3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(tab_content, {
                                            img: _3,
                                            title: "Proper Teamwork",
                                            desc: "CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.",
                                            readMoreLink: "#",
                                            blogLink: "#"
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
/* harmony default export */ const support = (Support);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
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
;// CONCATENATED MODULE: ./components/Support/reviews.js



//Import Containers


//Import Images






class Reviews extends external_react_.Component {
    state = {
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
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
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
        });
    }
}
/* harmony default export */ const reviews = (Reviews);

;// CONCATENATED MODULE: ./images/customer/customer.png
/* harmony default export */ const customer = ({"src":"/_next/static/media/customer.5767aa6d.png","height":807,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA20lEQVR42mMAgcdre6c83TgrEMS+dfIwe9XUFYxgiS1BDOKbV5xZc3fXAV0GdHCrxXeTQcu13/r1l7renT/heu7a7SlTVm5XAku2+dnYGrfcepjce+nkxQP7Ow4cP7XKv2zSBOOSqRYMBWoMFp1dK5/V9C18F1lZP53BIjbDOLPzgXvV9DUMu5IYFM50WHds7cjMzm3uP1jUOa0jpnHutbju5fZwu52qp8haBMR0FbRNbNq559zGi2dvqDIw/P/P+GBZR+mFtfNOHty+9dLmFcsu7N2yIZSBgYEBAL1nYxZd1KDEAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Support/ticket.js




//Import Containers

//Import Images

class Ticket extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            ticketVisible: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            ticketVisible: true
        });
    }
    render() {
        console.log(this.state.ticketVisible);
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                className: "mt-100 mt-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                        title: "Submit A Ticket",
                        desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "6",
                                md: "5",
                                xs: "12",
                                className: "mt-4 pt-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: customer,
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1400",
                                    className: "img-fluid",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                lg: "6",
                                md: "7",
                                xs: "12",
                                className: "mt-4 pt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                        color: "info",
                                        isOpen: this.state.ticketVisible,
                                        toggle: ()=>{
                                            this.setState({
                                                ticketVisible: !this.state.ticketVisible
                                            });
                                        },
                                        children: "Ticket details send successfully."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                        onSubmit: this.handleSubmit,
                                        className: "rounded shadow p-4 ml-lg-4",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1400",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Your Name :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                    name: "name",
                                                                    id: "name",
                                                                    type: "text",
                                                                    className: "form-control",
                                                                    placeholder: "First Name :",
                                                                    required: true
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Your Email :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                    name: "email",
                                                                    id: "email",
                                                                    type: "email",
                                                                    className: "form-control",
                                                                    placeholder: "Your email :",
                                                                    required: true
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Reasons / Catagories :"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    className: "form-control custom-select",
                                                                    id: "Sortbylist-Shop",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Catagories"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "General Question"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Bugs"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Remote"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Subject :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                    name: "subject",
                                                                    id: "subject",
                                                                    className: "form-control",
                                                                    placeholder: "Your subject :",
                                                                    required: true
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Url :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                    name: "url",
                                                                    id: "url",
                                                                    type: "url",
                                                                    className: "form-control",
                                                                    placeholder: "Url :",
                                                                    required: true
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                            className: "position-relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                    children: "Description :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-comment-text-outline ms-3 icons"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                    name: "comments",
                                                                    id: "comments",
                                                                    rows: "4",
                                                                    className: "form-control ps-5",
                                                                    placeholder: "Describe your problem :"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                        md: "12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "custom-control custom-checkbox",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                        type: "checkbox",
                                                                        className: "custom-control-input",
                                                                        id: "customCheck1"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                        className: "custom-control-label",
                                                                        for: "customCheck1",
                                                                        children: [
                                                                            "I Accept ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "/",
                                                                                className: "text-primary",
                                                                                children: "Terms And Condition"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                    sm: "12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                        type: "submit",
                                                        id: "submit",
                                                        name: "send",
                                                        className: "btn btn-primary",
                                                        value: "Submit"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const ticket = (Ticket);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/support.js










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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "section",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(features, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(support, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(reviews, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(ticket, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const pages_support = (payment);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,1791], () => (__webpack_exec__(1696)));
module.exports = __webpack_exports__;

})();