"use strict";
(() => {
var exports = {};
exports.id = 7175;
exports.ids = [7175,5941,3882];
exports.modules = {

/***/ 4158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ analytics_engine)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./images/single/bg01.jpg
var bg01 = __webpack_require__(3942);
// EXTERNAL MODULE: ./images/single/1.png
var _1 = __webpack_require__(9102);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
;// CONCATENATED MODULE: ./components/AnalyticsEngine/section.js







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
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-home d-flex align-items-center",
                style: {
                    background: `url(${bg01/* default.src */.Z.src}) center center`,
                    height: "auto"
                },
                id: "home",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-overlay bg-overlay-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center position-relative",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                md: "9",
                                className: "text-center mt-0 mt-md-5 pt-0 pt-md-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "title-heading margin-top-100",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "display-4 font-weight-bold mb-3",
                                                children: "DJI Professional Drone Camera"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "para-desc mx-auto text-muted",
                                                children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "watch-video mt-4 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: this.openModal,
                                                        to: "#",
                                                        className: "video-play-icon watch text-dark",
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
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "home-dashboard",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: _1/* default */.Z,
                                            alt: "",
                                            className: "img-fluid mover"
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
/* harmony default export */ const section = (Section);

;// CONCATENATED MODULE: ./components/AnalyticsEngine/feature-box-small.js




class FeatureBoxSmall extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.features.map((feature, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                    md: "3",
                    xs: "6",
                    className: "p-4 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: feature.image,
                            height: 45,
                            width: 45,
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mt-2",
                            children: feature.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-muted mb-0",
                            children: feature.desc
                        })
                    ]
                }, key))
        });
    }
}
/* harmony default export */ const feature_box_small = (FeatureBoxSmall);

// EXTERNAL MODULE: ./components/Shared/section-title-left.js
var section_title_left = __webpack_require__(6469);
// EXTERNAL MODULE: ./images/icon/camera.svg
var camera = __webpack_require__(3002);
// EXTERNAL MODULE: ./images/icon/speedometer.svg
var speedometer = __webpack_require__(776);
// EXTERNAL MODULE: ./images/icon/low-battery.svg
var low_battery = __webpack_require__(4273);
// EXTERNAL MODULE: ./images/icon/game.svg
var game = __webpack_require__(8365);
// EXTERNAL MODULE: ./images/single/camera.png
var single_camera = __webpack_require__(2401);
;// CONCATENATED MODULE: ./components/AnalyticsEngine/Feature.js
// React Basic and Bootstrap





///Import Components


// Import images





class Feature extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    image: camera/* default */.Z,
                    title: "Camera",
                    desc: "48 mp at 60mtr"
                },
                {
                    image: speedometer/* default */.Z,
                    title: "Speed",
                    desc: "50 kph"
                },
                {
                    image: low_battery/* default */.Z,
                    title: "Battery",
                    desc: "1 hour and 30 min"
                },
                {
                    image: game/* default */.Z,
                    title: "Control",
                    desc: "20 km Range"
                }, 
            ],
            features_lines: [
                {
                    title: "Digital Marketing Solutions for Tomorrow"
                },
                {
                    title: "Create your own skin to match your brand"
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(feature_box_small, {
                                features: this.state.features
                            })
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
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: single_camera/* default */.Z,
                                        className: "img-fluid",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: 6,
                                    md: 6,
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title ml-lg-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(section_title_left/* default */.Z, {
                                                title: "DJI 48MP Camera",
                                                desc: "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.",
                                                features: this.state.features_lines,
                                                class: "mdi-18px h5 me-2"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "/",
                                                className: "mt-3 text-primary",
                                                children: [
                                                    "Read more ",
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
        });
    }
}
/* harmony default export */ const AnalyticsEngine_Feature = (Feature);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/key-feature-box.js
var key_feature_box = __webpack_require__(5310);
// EXTERNAL MODULE: ./images/single/drone.gif
var drone = __webpack_require__(5011);
// EXTERNAL MODULE: ./images/single/bg02.jpg
var bg02 = __webpack_require__(565);
;// CONCATENATED MODULE: ./components/AnalyticsEngine/Description.js
// React Basic and Bootstrap




//Import Components


// Import images


// Modal Video 

class Description extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            keyfeatures: [
                {
                    icon: "mdi-camera-outline",
                    title: "48mp Camera"
                },
                {
                    icon: "mdi-wifi",
                    title: "Faster Connection"
                },
                {
                    icon: "mdi-cryengine",
                    title: "Easy to Operate"
                },
                {
                    icon: "mdi-video-outline",
                    title: "Stable Video"
                },
                {
                    icon: "mdi-antenna",
                    title: "Powerful Antenna"
                },
                {
                    icon: "mdi-battery-10",
                    title: "Battery Backup"
                },
                {
                    icon: "mdi-memory",
                    title: "Advance Technology"
                },
                {
                    icon: "mdi-fan",
                    title: "Easy Disassembly"
                },
                {
                    icon: "mdi-android-studio",
                    title: "Rebust Structure"
                }, 
            ],
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
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        xs: "12",
                                        className: "text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: drone/* default */.Z,
                                            className: "img-fluid",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                    title: "Awesome Features",
                                    desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(key_feature_box/* default */.Z, {
                                        keyfeatures: this.state.keyfeatures
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            className: "mt-100 mt-60",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: "7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "position-relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: bg02/* default */.Z,
                                                className: "rounded img-fluid mx-auto d-block",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "play-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: this.openModal,
                                                    href: "/",
                                                    className: "play-btn shadow video-play-icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "mdi mdi-play text-primary rounded-pill bg-white shadow"
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
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_video_default()), {
                    channel: "vimeo",
                    isOpen: this.state.isOpen,
                    videoId: "287684225",
                    onClose: ()=>this.setState({
                            isOpen: false
                        })
                })
            ]
        });
    }
}
/* harmony default export */ const AnalyticsEngine_Description = (Description);

// EXTERNAL MODULE: ./components/Shared/review-slider3.js
var review_slider3 = __webpack_require__(5857);
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
// EXTERNAL MODULE: ./components/Shared/Partners.js
var Partners = __webpack_require__(8609);
;// CONCATENATED MODULE: ./components/AnalyticsEngine/Testimonial.js
// React Basic and Bootstrap



//Import Components


//Import Images







class Testimonial extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            clients: [
                {
                    id: 1,
                    image: _01/* default */.Z,
                    name: "Thomas Israel",
                    post: "C.E.O",
                    rating: 5,
                    desc: "It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century."
                },
                {
                    id: 2,
                    image: _02/* default */.Z,
                    name: "Carl Oliver",
                    post: "P.A",
                    rating: 4,
                    desc: "The advantage of its Latin origin andor distract the viewer's attention from the layout."
                },
                {
                    id: 3,
                    image: _03/* default */.Z,
                    name: "Barbara McIntosh",
                    post: "M.D",
                    rating: 3.5,
                    desc: "There is now an abundance of readableives to the classic and tell short, funny or nonsensical stories."
                },
                {
                    id: 4,
                    image: _04/* default */.Z,
                    name: "Jill Webb",
                    post: "Manager",
                    rating: 4.5,
                    desc: "According to most sources, Lorum Ipsuthe origin of the text by of the unusual word  he could find"
                },
                {
                    id: 5,
                    image: _05/* default */.Z,
                    name: " Dean Tolle",
                    post: "Developer",
                    rating: 5,
                    desc: "It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century."
                },
                {
                    id: 6,
                    image: _06/* default */.Z,
                    name: "Christa Smith",
                    post: "Designer",
                    rating: 5,
                    desc: "It seems that only fragments of the otime certain letters at various positions within the text."
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
                                title: "Client's Feedback",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "12",
                                    className: "pt-2 mt-2 text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(review_slider3/* default */.Z, {
                                        clients: this.state.clients,
                                        items: 3,
                                        isBgWhite: true
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-5 pt-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Partners/* default */.Z, {})
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const AnalyticsEngine_Testimonial = (Testimonial);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./images/single/01.jpg
var single_01 = __webpack_require__(438);
// EXTERNAL MODULE: ./images/single/02.jpg
var single_02 = __webpack_require__(5710);
// EXTERNAL MODULE: ./images/single/03.jpg
var single_03 = __webpack_require__(9655);
// EXTERNAL MODULE: ./images/single/04.jpg
var single_04 = __webpack_require__(4257);
// EXTERNAL MODULE: ./images/single/05.jpg
var single_05 = __webpack_require__(9278);
// EXTERNAL MODULE: ./images/single/06.jpg
var single_06 = __webpack_require__(6127);
// EXTERNAL MODULE: ./images/single/07.jpg
var _07 = __webpack_require__(6853);
;// CONCATENATED MODULE: ./components/AnalyticsEngine/Gallery.js
// React Basic and Bootstrap





//Import Slick Slider

//Import Components

//Import Slick Slider CSS


// import images







class Gallery extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            successMsg: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            successMsg: true
        });
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        var settings = {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            draggable: true,
            pauseOnHover: true
        };
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    md: "6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                            ...settings,
                                            asNavFor: this.state.nav2,
                                            ref: (slider)=>this.slider1 = slider,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_01/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_02/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_03/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_04/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_05/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_06/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: _07/* default */.Z,
                                                        id: "main_src",
                                                        className: "img-fluid rounded",
                                                        alt: "alt"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                            asNavFor: this.state.nav1,
                                            ref: (slider)=>this.slider2 = slider,
                                            slidesToShow: 3,
                                            swipeToSlide: true,
                                            focusOnSelect: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_01/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_02/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_03/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_04/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_05/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: single_06/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: _07/* default */.Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: "6",
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title ml-md-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title mb-4",
                                                children: "DJI Spark Drone"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "float-right text-warning",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mdi mdi-star"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mdi mdi-star"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mdi mdi-star"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mdi mdi-star"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mdi mdi-star-half"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-muted pl-3",
                                                                children: "23 Reviews"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "mt-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            children: "$ 1800"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-muted para-desc mx-auto",
                                                children: [
                                                    "Start working with ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-primary font-weight-bold",
                                                        children: "Elektropay"
                                                    }),
                                                    " that can provide everything you need to generate awareness, drive traffic, connect. This is required when, for example, the final text is not yet available. Dummy text is also known as fill. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a  text to sing with the melody."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled feature-list text-muted",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-check me-2"
                                                            }),
                                                            "Digital Marketing Solutions for Tomorrow"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-check me-2"
                                                            }),
                                                            "Create your own skin to match your brand"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-check me-2"
                                                            }),
                                                            "Digital Marketing Solutions for Tomorrow"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-check me-2"
                                                            }),
                                                            "Create your own skin to match your brand"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4"
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
                                title: "Sign up for our Newsletter",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "justify-content-center mt-4 pt-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    lg: "7",
                                    md: "10",
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
                                                            required: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "append",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                                color: "primary",
                                                                className: "submitBnt",
                                                                onClick: this.handleSubmit,
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
/* harmony default export */ const AnalyticsEngine_Gallery = (Gallery);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/analytics-engine.js










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
                        /*#__PURE__*/ jsx_runtime_.jsx(AnalyticsEngine_Feature, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(AnalyticsEngine_Description, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(AnalyticsEngine_Testimonial, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(AnalyticsEngine_Gallery, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const analytics_engine = (payment);


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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 3308:
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,6469,8609,5857,5310,7296], () => (__webpack_exec__(4158)));
module.exports = __webpack_exports__;

})();