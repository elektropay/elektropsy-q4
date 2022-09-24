"use strict";
(() => {
var exports = {};
exports.id = 9320;
exports.ids = [9320,5941,3882];
exports.modules = {

/***/ 8579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fraud_prevention)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
;// CONCATENATED MODULE: ./components/FraudPrevention/feature-box.js



class FeatureBox extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.features.map((feature, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                    md: "6",
                    xs: "12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "features pt-4 pb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "mdi " + feature.icon + " icon text-center rounded-pill text-primary me-3 mt-2 float-start"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content d-block overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "title",
                                        children: feature.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-muted para mb-0",
                                        children: feature.desc
                                    })
                                ]
                            })
                        ]
                    })
                }, key))
        });
    }
}
/* harmony default export */ const feature_box = (FeatureBox);

// EXTERNAL MODULE: ./images/app/feature.png
var feature = __webpack_require__(1468);
;// CONCATENATED MODULE: ./components/FraudPrevention/Feature.js
// React Basic and Bootstrap




//Import Components


//import images

class Feature extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    icon: "mdi-monitor-cellphone-star",
                    title: "Use On Any Device",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                },
                {
                    icon: "mdi-cube-outline",
                    title: "Material Design Icon",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                },
                {
                    icon: "mdi-cryengine",
                    title: "Retina Ready",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                },
                {
                    icon: "mdi-check-decagram",
                    title: "W3c Valid Code",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                },
                {
                    icon: "mdi-responsive",
                    title: "Fully Responsive",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                },
                {
                    icon: "mdi-cards-heart",
                    title: "Browser Compatibility",
                    desc: "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds."
                }, 
            ]
        };
    }
    componentDidMount() {
        var sectionTitles = document.getElementsByName("maintitle");
        sectionTitles[0].classList.remove("mb-4");
        sectionTitles[0].classList.remove("pb-2");
        sectionTitles[0].classList.add("mb-60");
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section bg-light",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                            title: "App Features",
                            desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "justify-content-center align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "8",
                                    md: "8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(feature_box, {
                                            features: this.state.features
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "4",
                                    md: "4",
                                    xs: "12",
                                    className: "pt-2 pt-sm-0 text-center text-md-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: feature/* default */.Z,
                                        className: "img-fluid",
                                        alt: ""
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
/* harmony default export */ const FraudPrevention_Feature = (Feature);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./images/app/home.png
var home = __webpack_require__(6812);
;// CONCATENATED MODULE: ./components/FraudPrevention/Section.js





// Import images

class Section extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-half-170 d-table w-100",
                id: "home",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: 6,
                                md: 7,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "title-heading mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "heading mb-3",
                                            children: [
                                                "Manage all of you stuff using ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-primary",
                                                    children: "Elektropay."
                                                }),
                                                " app"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "para-desc text-muted",
                                            children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mt-2 me-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-apple"
                                                            }),
                                                            " App Store"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-outline-primary mt-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-google-play"
                                                            }),
                                                            " Play Store"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: 6,
                                md: 5,
                                className: "mt-4 pt-2 mt-sm-0 pt-sm-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-md-right text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: home/* default */.Z,
                                        className: "img-fluid",
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const FraudPrevention_Section = (Section);

// EXTERNAL MODULE: ./components/Shared/pricing-box2.js
var pricing_box2 = __webpack_require__(3948);
;// CONCATENATED MODULE: ./components/FraudPrevention/Pricing.js
// React Basic and Bootstrap



//Import Components


class Pricing extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
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
            ]
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                            title: "Choose The Pricing Plan",
                            desc: "that can provide everything you need to generate awareness, drive traffic, connect"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_box2/* default */.Z, {
                                pricings: this.state.pricings
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const FraudPrevention_Pricing = (Pricing);

// EXTERNAL MODULE: ./components/Shared/review-slider2.js
var review_slider2 = __webpack_require__(1319);
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
;// CONCATENATED MODULE: ./components/FraudPrevention/Testi.js
// React Basic and Bootstrap




//Import Components

//Import Images






class Testi extends external_react_.Component {
    state = {
        clients: [
            {
                id: 1,
                image: _01/* default */.Z,
                name: "Thomas Israel",
                desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today."
            },
            {
                id: 2,
                image: _02/* default */.Z,
                name: "Carl Oliver",
                desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
            },
            {
                id: 3,
                image: _03/* default */.Z,
                name: "Barbara McIntosh",
                desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
            },
            {
                id: 4,
                image: _04/* default */.Z,
                name: "Jill Webb",
                desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."
            },
            {
                id: 5,
                image: _05/* default */.Z,
                name: " Dean Tolle",
                desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required."
            },
            {
                id: 6,
                image: _06/* default */.Z,
                name: "Christa Smith",
                desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero."
            }, 
        ]
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section pt-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(review_slider2/* default */.Z, {
                                    clients: this.state.clients
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "12",
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title mb-4",
                                            children: "Get the App now !"
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
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mt-2 me-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-apple"
                                                            }),
                                                            " App Store"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-outline-primary mt-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-google-play"
                                                            }),
                                                            " Play Store"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const FraudPrevention_Testi = (Testi);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Shared/section-title-left.js
var section_title_left = __webpack_require__(6469);
// EXTERNAL MODULE: ./images/app/1.png
var _1 = __webpack_require__(2895);
// EXTERNAL MODULE: ./images/app/2.png
var _2 = __webpack_require__(8697);
// EXTERNAL MODULE: ./images/app/3.png
var _3 = __webpack_require__(200);
// EXTERNAL MODULE: ./images/app/4.png
var _4 = __webpack_require__(8953);
;// CONCATENATED MODULE: ./components/FraudPrevention/ShowCase.js
// React Basic and Bootstrap






//Import Components


//import images




class ShowCase extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
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
            ],
            activeTab: "1"
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(tab) {
        this.setState({
            activeTab: tab
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section pt-0 bg-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "How Can We Help You ?",
                                desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "5",
                                        md: "6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: _1/* default */.Z,
                                            className: "img-fluid mx-auto d-block",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: 7,
                                        md: 6,
                                        className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title ms-lg-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                    desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                    features: this.state.features,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        className: "title mb-4",
                                                        children: [
                                                            "Best ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-primary",
                                                                children: "Elektropay"
                                                            }),
                                                            " App Partner For Your Life"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/",
                                                    className: "mt-3 text-primary",
                                                    children: [
                                                        "Find Out More ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-chevron-right"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                className: "title mb-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-primary",
                                                        children: "Elektropay"
                                                    }),
                                                    " App Showcase"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-muted para-desc mb-0 mx-auto",
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
                                                    lg: 8,
                                                    md: 12,
                                                    className: "text-center",
                                                    style: {
                                                        marginTop: "32px"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                                                        pills: true,
                                                        justified: true,
                                                        id: "navnav",
                                                        className: "flex-column flex-sm-row rounded",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                                    className: external_classnames_default()({
                                                                        active: this.state.activeTab === "1"
                                                                    }, "rounded"),
                                                                    onClick: ()=>{
                                                                        this.toggle("1");
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text-center pt-1 pb-1",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: "title font-weight-normal mb-0",
                                                                            children: "High Performance"
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
                                                                        this.toggle("2");
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text-center pt-1 pb-1",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: "title font-weight-normal mb-0",
                                                                            children: "Creative Design"
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
                                                                        this.toggle("3");
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text-center pt-1 pb-1",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: "title font-weight-normal mb-0",
                                                                            children: "24 / 7 Support"
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
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                    className: "align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: _2/* default */.Z,
                                                                className: "img-fluid mx-auto d-block",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "section-title",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                                        desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                                        features: this.state.features1,
                                                                        class: "mdi-18px h5 me-2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            className: "title mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "mdi mdi-chevron-double-right text-primary"
                                                                                }),
                                                                                " High Performing Landing App"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "/",
                                                                        className: "mt-3 text-primary",
                                                                        children: [
                                                                            "Find Out More ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "mdi mdi-chevron-right"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                                tabId: "2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                    className: "align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: _3/* default */.Z,
                                                                className: "img-fluid mx-auto d-block",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "section-title",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                                        desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                                        features: this.state.features2,
                                                                        class: "mdi-18px h5 me-2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            className: "title mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "mdi mdi-chevron-double-right text-primary"
                                                                                }),
                                                                                " Creative Design and Clean Code"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "/",
                                                                        className: "mt-3 text-primary",
                                                                        children: [
                                                                            "Find Out More ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "mdi mdi-chevron-right"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.TabPane, {
                                                tabId: "3",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                    className: "align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: _4/* default */.Z,
                                                                className: "img-fluid mx-auto d-block",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            md: 6,
                                                            className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "section-title",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                                        desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                                                        features: this.state.features3,
                                                                        class: "mdi-18px h5 me-2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            className: "title mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "mdi mdi-chevron-double-right text-primary"
                                                                                }),
                                                                                "24 / 7 App Supports and Responsive"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "/",
                                                                        className: "mt-3 text-primary",
                                                                        children: [
                                                                            "Find Out More ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "mdi mdi-chevron-right"
                                                                            })
                                                                        ]
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
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const FraudPrevention_ShowCase = (ShowCase);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/fraud-prevention.js










//Render Components
class payment extends external_react_.Component {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(FraudPrevention_Section, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "position-relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shape overflow-hidden text-light",
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
                        /*#__PURE__*/ jsx_runtime_.jsx(FraudPrevention_Feature, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(FraudPrevention_ShowCase, {}),
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
                        /*#__PURE__*/ jsx_runtime_.jsx(FraudPrevention_Pricing, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(FraudPrevention_Testi, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "position-relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shape overflow-hidden text-footer",
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
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const fraud_prevention = (payment);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,6469,7963,3948,7713,1059], () => (__webpack_exec__(8579)));
module.exports = __webpack_exports__;

})();