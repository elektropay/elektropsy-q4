"use strict";
(() => {
var exports = {};
exports.id = 6706;
exports.ids = [6706,5941,3882];
exports.modules = {

/***/ 1495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ omni_commerce)
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
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/Feature.js
var Feature = __webpack_require__(5208);
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
;// CONCATENATED MODULE: ./components/Business/Features.js
// React Basic and Bootstrap



//Import Components


// Import images;






class Features extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    imgUrl: pen/* default */.Z,
                    title: "Design & Development",
                    description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."
                },
                {
                    id: 2,
                    imgUrl: video/* default */.Z,
                    title: "Management & Marketing",
                    description: "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word."
                },
                {
                    id: 3,
                    imgUrl: intellectual/* default */.Z,
                    title: "Stratagy & Research",
                    description: "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today."
                },
                {
                    id: 4,
                    imgUrl: user/* default */.Z,
                    title: "Easy To Use",
                    description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."
                },
                {
                    id: 5,
                    imgUrl: calendar/* default */.Z,
                    title: "Daily Reports",
                    description: "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word."
                },
                {
                    id: 6,
                    imgUrl: sand_clock/* default */.Z,
                    title: "Real Time Zone",
                    description: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today."
                }, 
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
                            title: "What We Do ?",
                            desc: " that can provide everything you need to generate awareness, drive traffic, connect"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Feature/* default */.Z, {
                            featureArray: this.state.features
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const Business_Features = (Features);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./images/2.jpg
var _2 = __webpack_require__(1829);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
;// CONCATENATED MODULE: ./components/Business/Cta.js
// React Basic and Bootstrap




// Import images

// Modal Video 

class Cta extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({
            isOpen: true
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section bg-cta",
                style: {
                    background: `url(${_2/* default.src */.Z.src}) center center`
                },
                id: "cta",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "12",
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title title-dark text-white mb-4",
                                            children: "Stop leaving money on the table."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-light para-dark para-desc mx-auto",
                                            children: "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            onClick: this.openModal,
                                            className: "play-btn border border-light mt-2 video-play-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "mdi mdi-play title-dark text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_video_default()), {
                                            channel: "youtube",
                                            isOpen: this.state.isOpen,
                                            videoId: "L61p2uyiMSo",
                                            onClose: ()=>this.setState({
                                                    isOpen: false
                                                })
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
/* harmony default export */ const Business_Cta = (Cta);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__(5637);
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);
// EXTERNAL MODULE: ./images/busi01.jpg
var busi01 = __webpack_require__(5971);
;// CONCATENATED MODULE: ./components/Business/section.js






// Modal Video 

// import '../../node_modules/react-modal-video/scss/modal-video.scss';
// Import images

class Section extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({
            isOpen: true
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-half-170 border-bottom d-table w-100",
                id: "home",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "6",
                                    md: "7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "title-heading mt-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Alert, {
                                                className: "alert-light alert-pills shadow",
                                                role: "alert",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Badge, {
                                                        color: "success",
                                                        className: "rounded mr-1",
                                                        children: "v2.0"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "content",
                                                        children: [
                                                            " Build ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-primary",
                                                                children: "anything"
                                                            }),
                                                            " you want - Elektropay."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                className: "heading mb-3",
                                                children: [
                                                    "Leading Digital Business For \xa0",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_typist_default()), {
                                                        style: {
                                                            display: "contents"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Agency"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Software"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Technology"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Studio"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Webapps"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Agency"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Software"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Technology"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Studio"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "element text-primary",
                                                                children: "Webapps"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                                count: 15,
                                                                delay: 200
                                                            })
                                                        ]
                                                    }),
                                                    "\xa0 Solution"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "para-desc text-muted",
                                                children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-outline-primary rounded",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-google-my-business mr-1"
                                                            }),
                                                            "Make Your Shop"
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "6",
                                    md: "5",
                                    className: "mt-4 pt-2 mt-sm-0 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "position-relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: busi01/* default */.Z,
                                                className: "rounded img-fluid mx-auto d-block",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "play-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: this.openModal,
                                                        className: "play-btn video-play-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-play text-primary rounded-pill bg-white shadow"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_video_default()), {
                            channel: "vimeo",
                            isOpen: this.state.isOpen,
                            videoId: "287684225",
                            onClose: ()=>this.setState({
                                    isOpen: false
                                })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./components/Shared/pricing-box2.js
var pricing_box2 = __webpack_require__(3948);
// EXTERNAL MODULE: ./components/Shared/section-title-left.js
var section_title_left = __webpack_require__(6469);
// EXTERNAL MODULE: ./components/Shared/counter.js
var counter = __webpack_require__(7404);
;// CONCATENATED MODULE: ./components/Business/Pricing.js
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
            ],
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
            counter: [
                97,
                15,
                2,
                98
            ]
        };
    }
    componentDidMount() {
        var sectionsTitles = document.getElementsByName("maintitle");
        for(var i = 1; i < sectionsTitles.length - 1; i++){
            sectionsTitles[i].classList.remove("mb-4");
            sectionsTitles[i].classList.remove("pb-2");
            sectionsTitles[i].classList.add("mb-60");
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Choose Simple Pricing",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "align-items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_box2/* default */.Z, {
                                    pricings: this.state.pricings
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-title",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                            desc: "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.",
                                            features: this.state.features,
                                            class: "mdi-18px h5 me-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                className: "title mb-4",
                                                children: [
                                                    "See everything about your ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-primary",
                                                        children: "Elektropay"
                                                    }),
                                                    " Business"
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(counter/* default */.Z, {
                                        countervalue: this.state.counter
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const Business_Pricing = (Pricing);

// EXTERNAL MODULE: ./components/Shared/blog-box.js
var blog_box = __webpack_require__(2321);
// EXTERNAL MODULE: ./images/blog/01.jpg
var _01 = __webpack_require__(2835);
// EXTERNAL MODULE: ./images/blog/02.jpg
var _02 = __webpack_require__(2710);
// EXTERNAL MODULE: ./images/blog/03.jpg
var _03 = __webpack_require__(9082);
;// CONCATENATED MODULE: ./components/Business/News.js
// React Basic and Bootstrap




//Import Components


// Blog Images



class News extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
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
                    image: _03/* default */.Z,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 3,
                    image: _02/* default */.Z,
                    title: "Smartest Applications for Business",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section bg-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Latest News",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blog_box/* default */.Z, {
                                    blogs: this.state.blogs
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "12",
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title mb-4",
                                            children: "See everything about your employee at one place."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-muted para-desc mx-auto mb-0",
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
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/",
                                                    className: "btn btn-primary mt-2 me-2",
                                                    children: "Get Started Now"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/",
                                                    className: "btn btn-outline-primary mt-2",
                                                    children: "Free Trial"
                                                })
                                            ]
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
/* harmony default export */ const Business_News = (News);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/omni-commerce.js










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
                        /*#__PURE__*/ jsx_runtime_.jsx(Business_Features, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Business_Cta, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Business_Pricing, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Business_News, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const omni_commerce = (payment);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5384:
/***/ ((module) => {

module.exports = require("number-counter");

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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 3308:
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ 5637:
/***/ ((module) => {

module.exports = require("react-typist");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,2503,8854,6469,5208,2321,3948,9353,8345], () => (__webpack_exec__(1495)));
module.exports = __webpack_exports__;

})();