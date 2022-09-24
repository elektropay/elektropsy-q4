"use strict";
(() => {
var exports = {};
exports.id = 2465;
exports.ids = [2465,5941,3882];
exports.modules = {

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/amazon.a89d8848.svg","height":67,"width":200});

/***/ }),

/***/ 5199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/google.ae844f8b.svg","height":67,"width":200});

/***/ }),

/***/ 6218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/lenovo.d07f339c.svg","height":67,"width":200});

/***/ }),

/***/ 4408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/paypal.814f1b1b.svg","height":67,"width":200});

/***/ }),

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/shopify.b4ce8cb4.svg","height":67,"width":200});

/***/ }),

/***/ 958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ marketplace)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
;// CONCATENATED MODULE: ./images/illustrator/services.svg
/* harmony default export */ const services = ({"src":"/_next/static/media/services.dbb8c216.svg","height":500,"width":496});
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
;// CONCATENATED MODULE: ./components/Marketplace/section.js





// import images

// Modal Video 

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
                className: "bg-half-170 d-table w-100",
                id: "home",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: 7,
                                md: 7,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "title-heading mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "heading mb-3",
                                            children: [
                                                "Build Anything ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "For Your Project"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "para-desc text-muted",
                                            children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "watch-video mt-4 pt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "page-services",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "btn btn-primary mb-2 me-2",
                                                        children: " Our Services "
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    onClick: this.openModal,
                                                    to: "#",
                                                    className: "video-play-icon watch text-dark mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-pill title-dark text-white position-relative play play-iconbar"
                                                        }),
                                                        " WATCH VIDEO"
                                                    ]
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
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: 5,
                                md: 5,
                                className: "mt-4 pt-2 mt-sm-0 pt-sm-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: services,
                                    alt: ""
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./components/Shared/Feature.js
var Feature = __webpack_require__(5208);
;// CONCATENATED MODULE: ./images/icon/stairs.svg
/* harmony default export */ const stairs = ({"src":"/_next/static/media/stairs.453d58d6.svg","height":560,"width":560});
;// CONCATENATED MODULE: ./images/icon/code.svg
/* harmony default export */ const code = ({"src":"/_next/static/media/code.6fbe3099.svg","height":533,"width":533});
;// CONCATENATED MODULE: ./images/icon/device.svg
/* harmony default export */ const device = ({"src":"/_next/static/media/device.adcef1c6.svg","height":601,"width":601});
;// CONCATENATED MODULE: ./components/Marketplace/Features.js
// React Basic and Bootstrap



//Import Components

// Import images



class Features extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    imgUrl: stairs,
                    title: "Built for Everyone",
                    description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
                },
                {
                    id: 2,
                    imgUrl: device,
                    title: "Responsive Design",
                    description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
                },
                {
                    id: 3,
                    imgUrl: code,
                    title: "Build Everything",
                    description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
                }, 
            ]
        };
    }
    componentDidMount() {
        var featureboxes = document.getElementsByName("featurebox");
        for(var i = 0; i < featureboxes.length; i++){
            if (i !== 0) {
                featureboxes[i].classList.add("mt-5");
                featureboxes[i].classList.add("mt-sm-0");
            }
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section pt-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Feature/* default */.Z, {
                        featureArray: this.state.features,
                        isCenter: true
                    })
                })
            })
        });
    }
}
/* harmony default export */ const Marketplace_Features = (Features);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./components/Marketplace/counter-box.js




class CounterBox extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.counters.map((counter, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                    md: 4,
                    className: "mt-4 pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "counter-box text-center px-lg-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "mb-0 text-primary display-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "counter-value",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            end: counter.end,
                                            duration: 8
                                        })
                                    }),
                                    counter.postFix
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "counter-head",
                                children: counter.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-muted mb-0",
                                children: counter.desc
                            })
                        ]
                    })
                }, key))
        });
    }
}
/* harmony default export */ const counter_box = (CounterBox);

;// CONCATENATED MODULE: ./images/laptop.png
/* harmony default export */ const laptop = ({"src":"/_next/static/media/laptop.1ada3c76.png","height":539,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAg0lEQVR42g3Muw3CMBQF0HufTWiCUfiISHRAxQzAnBGbJAViCzqgpkCiAceOeckZ4LCqzsXhdLxBsVJASYAgU0qv+/Oxt4vlXHbbDcdZBqjqXxUchBDp/U9s7lwyIlQAnzZIRgMjBkkpU5d3tqnrYl2WPoHt++vjZJgsZRS76K+XZtYDPWQxuDqRjLkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/Marketplace/Counter.js
// React Basic and Bootstrap





//Import Counter Box

// Import images

class Counter extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [
                {
                    title: "Happy Client",
                    end: 97,
                    postFix: "%",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
                },
                {
                    title: "Awards",
                    end: 15,
                    postFix: "+",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
                },
                {
                    title: "Project Complete",
                    end: 98,
                    postFix: "%",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section bg-light",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: {
                                        size: 6,
                                        order: 1
                                    },
                                    xs: {
                                        order: 2
                                    },
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title mr-lg-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title mb-4",
                                                children: "Get Notified About Importent Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-muted",
                                                children: "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "btn btn-outline-primary",
                                                    children: [
                                                        "Start Now ",
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
                                    md: {
                                        size: 6,
                                        order: 1
                                    },
                                    xs: {
                                        order: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: laptop,
                                        className: "img-fluid",
                                        alt: ""
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            id: "counter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(counter_box, {
                                counters: this.state.counters
                            })
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const Marketplace_Counter = (Counter);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./images/client/amazon.svg
var amazon = __webpack_require__(907);
// EXTERNAL MODULE: ./images/client/google.svg
var google = __webpack_require__(5199);
// EXTERNAL MODULE: ./images/client/lenovo.svg
var lenovo = __webpack_require__(6218);
// EXTERNAL MODULE: ./images/client/paypal.svg
var paypal = __webpack_require__(4408);
// EXTERNAL MODULE: ./images/client/shopify.svg
var shopify = __webpack_require__(7046);
;// CONCATENATED MODULE: ./images/illustrator/analyze_report_4.svg
/* harmony default export */ const analyze_report_4 = ({"src":"/_next/static/media/analyze_report_4.2ab71b46.svg","height":334,"width":437});
;// CONCATENATED MODULE: ./components/Marketplace/Testimonial.js
// React Basic and Bootstrap





//Import Components

//Slider
var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Marketplace/Testimonial.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
//Import Images







class Testimonial extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            clients: [
                {
                    id: 1,
                    image: amazon/* default */.Z,
                    name: "Thomas Israel",
                    desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today."
                },
                {
                    id: 2,
                    image: google/* default */.Z,
                    name: "Carl Oliver",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
                },
                {
                    id: 3,
                    image: lenovo/* default */.Z,
                    name: "Barbara McIntosh",
                    desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
                },
                {
                    id: 4,
                    image: paypal/* default */.Z,
                    name: "Jill Webb",
                    desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."
                },
                {
                    id: 5,
                    image: shopify/* default */.Z,
                    name: " Dean Tolle",
                    desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required."
                },
                {
                    id: 6,
                    image: shopify/* default */.Z,
                    name: "Christa Smith",
                    desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero."
                }, 
            ],
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 1
                },
                650: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
            successMsg: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        var sectiontitles = document.getElementsByName("maintitle");
        sectiontitles[0].classList.remove("mb-4");
        sectiontitles[0].classList.remove("pb-2");
        sectiontitles[0].classList.add("mb-60");
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            successMsg: true
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: "6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: analyze_report_4,
                                        className: "me-md-4",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: "6",
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title me-lg-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title mb-4",
                                                children: "Clean And Modern Code"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-muted",
                                                children: "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "btn btn-outline-primary",
                                                    children: [
                                                        "Start Now ",
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Our Happy Customers",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    xs: "12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(OwlCarousel, {
                                        className: "owl-theme",
                                        items: 3,
                                        loop: true,
                                        margin: 1,
                                        responsive: this.state.responsive,
                                        autoplay: true,
                                        children: this.state.clients.map((client, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "customer-testi me-2 ml-2 text-center p-4 rounded border",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: client.image,
                                                        width: 300,
                                                        height: 25,
                                                        className: "img-fluid avatar avatar-ex-sm mx-auto",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-muted mt-4",
                                                        children: [
                                                            client.desc,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        className: "text-primary",
                                                        children: [
                                                            "- ",
                                                            client.name
                                                        ]
                                                    })
                                                ]
                                            }, key))
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Subscribe for our Latest Newsletter",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "justify-content-center mt-4 pt-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    lg: 7,
                                    md: 10,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                            color: "info",
                                            isOpen: this.state.successMsg,
                                            toggle: ()=>{
                                                this.setState({
                                                    successMsg: !this.state.successMsg
                                                });
                                            },
                                            children: "Data sended successfully."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Form, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            name: "email",
                                                            id: "email",
                                                            type: "email",
                                                            className: "form-control",
                                                            placeholder: "Your email :",
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "append",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                                color: "primary",
                                                                onClick: this.handleSubmit,
                                                                className: "submitBnt",
                                                                type: "button",
                                                                id: "newssubscribebtn",
                                                                children: "Subscribe"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
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
/* harmony default export */ const Marketplace_Testimonial = (Testimonial);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/marketplace.js









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
                        /*#__PURE__*/ jsx_runtime_.jsx(Marketplace_Features, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Marketplace_Counter, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Marketplace_Testimonial, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const marketplace = (payment);


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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,5208], () => (__webpack_exec__(958)));
module.exports = __webpack_exports__;

})();