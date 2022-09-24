"use strict";
(() => {
var exports = {};
exports.id = 706;
exports.ids = [706,5941,3882];
exports.modules = {

/***/ 472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ elektropos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./images/course/bg01.jpg
/* harmony default export */ const bg01 = ({"src":"/_next/static/media/bg01.0a6ad3a6.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKMFzv/EABoQAAMAAwEAAAAAAAAAAAAAAAECAwAEESL/2gAIAQEAAT8AvGyLelNlqBwPPAvM/8QAGxEAAgEFAAAAAAAAAAAAAAAAAgMAAQQREiL/2gAIAQIBAT8At0rIK7Dnqf/EABsRAAIBBQAAAAAAAAAAAAAAAAIDBAABESJR/9oACAEDAQE/AJkhy2DYCxryv//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/course/bg04.jpg
/* harmony default export */ const bg04 = ({"src":"/_next/static/media/bg04.2ff51909.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALQN/wD/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAEgQRIv/aAAgBAQABPwCbvLkLrSh99kM2wz//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQIBAT8AWH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oACAEDAQE/AKWn/9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/course/bg05.jpg
/* harmony default export */ const bg05 = ({"src":"/_next/static/media/bg05.c3fde182.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgFf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABIiIzH/2gAIAQEAAT8AismyO1TwgBXRinhUZ//EABgRAAIDAAAAAAAAAAAAAAAAAAACASGB/9oACAECAQE/AEtdk//EABoRAAAHAAAAAAAAAAAAAAAAAAABAgMRIWH/2gAIAQMBAT8AcpUYQ//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/ElektroPos/section.js
// React Basic and Bootstrap




//Slider
var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/ElektroPos/section.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
// import images



class Section extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    image: bg01,
                    title: "You Can Learn Anything With Us",
                    desc: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnText: "Find Courses",
                    btnLink: "#",
                    icon: "mdi-book-open-variant"
                },
                {
                    image: bg04,
                    title: "Better Education For A Better Future",
                    desc: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnText: "Admission Now",
                    btnLink: "#",
                    icon: "mdi-school"
                },
                {
                    image: bg05,
                    title: "Education Is The Key of Success",
                    desc: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnText: "Instructors",
                    btnLink: "#",
                    icon: "mdi-account"
                }, 
            ],
            autoplay: true
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "main-slider",
                children: /*#__PURE__*/ jsx_runtime_.jsx(OwlCarousel, {
                    className: "slides",
                    items: 1,
                    loop: true,
                    dots: false,
                    autoplay: true,
                    children: this.state.items.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "bg-slider d-flex align-items-center",
                            style: {
                                backgroundImage: `url(${item.image.src})`
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-overlay"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                        className: "justify-content-center position-relative zindex-sticky",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            xs: "12",
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "title-heading text-white mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "display-4 title-dark font-weight-bold mb-3",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "para-desc para-dark mx-auto text-light",
                                                        children: item.desc
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item.btnLink,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "btn btn-primary mt-2 mouse-down",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi " + item.icon
                                                                    }),
                                                                    " ",
                                                                    item.btnText
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }, key))
                })
            })
        });
    }
}
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./images/icon/insurance.svg
/* harmony default export */ const insurance = ({"src":"/_next/static/media/insurance.acc23e1e.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/graduation-hat.svg
/* harmony default export */ const graduation_hat = ({"src":"/_next/static/media/graduation-hat.76e2a80b.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/ai.svg
/* harmony default export */ const ai = ({"src":"/_next/static/media/ai.d6d1cedd.svg","height":641,"width":641});
;// CONCATENATED MODULE: ./components/ElektroPos/Feature.js
// React Basic and Bootstrap





// import images



class Feature extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    icon: insurance,
                    title: "Unlimited Access",
                    desc: "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
                    link: "#"
                },
                {
                    icon: graduation_hat,
                    title: "Our Courses",
                    desc: "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
                    link: "#"
                },
                {
                    icon: ai,
                    title: "Expert Teachers",
                    desc: "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
                    link: "#"
                }, 
            ]
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        children: this.state.features.map((feature, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: feature.icon,
                                                className: "avatar avatar-small",
                                                height: "55",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mt-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: feature.link,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "title text-dark",
                                                    children: [
                                                        " ",
                                                        feature.title
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-muted",
                                            children: [
                                                feature.desc,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: feature.link,
                                            className: "text-primary read-more",
                                            children: [
                                                " Read More ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "mdi mdi-chevron-right"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, key))
                    })
                })
            })
        });
    }
}
/* harmony default export */ const ElektroPos_Feature = (Feature);

;// CONCATENATED MODULE: ./images/course/about.jpg
/* harmony default export */ const about = ({"src":"/_next/static/media/about.d6e67d05.jpg","height":700,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmA//xAAbEAEBAAEFAAAAAAAAAAAAAAACAwABBAYSUf/aAAgBAQABPwC3L6ber7imtRVzR9Jz/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAECAQE/AJR//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAS/9oACAEDAQE/ANLf/9k=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ElektroPos/About.js
// React Basic and Bootstrap





// import images

class About extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section pt-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "5",
                                md: "6",
                                xs: "12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: about,
                                    className: "img-fluid shadow rounded",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "7",
                                md: "6",
                                xs: "12",
                                className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title ms-lg-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            className: "title mb-4",
                                            children: [
                                                "Our Story : ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-primary",
                                                    children: "Elektropay Education"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-muted",
                                            children: [
                                                "Start Course with ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-primary font-weight-bold",
                                                    children: "Elektropay Education"
                                                }),
                                                " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled feature-list mb-0 text-muted",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-chevron-right text-success me-2"
                                                        }),
                                                        "Digital Marketing Solutions for Tomorrow"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-chevron-right text-success me-2"
                                                        }),
                                                        "Our Talented & Experienced Marketing Agency"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-chevron-right text-success me-2"
                                                        }),
                                                        "Create your own skin to match your brand"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn btn-outline-primary mt-3",
                                                children: "Admission Now"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const ElektroPos_About = (About);

;// CONCATENATED MODULE: ./images/course/bg02.jpg
/* harmony default export */ const bg02 = ({"src":"/_next/static/media/bg02.99922437.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAK4L/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDAAQSEyH/2gAIAQEAAT8A0L7V2SgtwRaOesDw5//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8ADb//2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
;// CONCATENATED MODULE: ./components/ElektroPos/Cta.js
// React Basic and Bootstrap




// import images

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
                    background: `url(${bg02.src})`,
                    backgroundPosition: "center center"
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
                                            children: "We Bring New Online Courses"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-light para-desc para-dark mx-auto",
                                            children: "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: this.openModal,
                                            href: "/",
                                            className: "play-btn border border-light mt-2 video-play-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "mdi mdi-play title-dark text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_video_default()), {
                                            channel: "vimeo",
                                            isOpen: this.state.isOpen,
                                            videoId: "12022651",
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
/* harmony default export */ const ElektroPos_Cta = (Cta);

// EXTERNAL MODULE: external "react-star-ratings"
var external_react_star_ratings_ = __webpack_require__(9883);
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_);
;// CONCATENATED MODULE: ./components/ElektroPos/course-box.js





//Star Rating

class CourseBox extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.courses.map((course, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                    lg: "4",
                    md: "6",
                    xs: "12",
                    className: "mt-4 pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "courses-desc position-relative overflow-hidden rounded border",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "position-relative d-block overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: course.image,
                                        className: "img-fluid rounded-top mx-auto",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlay-work"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "text-white h6 preview",
                                            children: [
                                                "Preview Now ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "mdi mdi-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content p-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "title text-dark",
                                                children: course.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "rating",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled mb-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-inline-item me-2 mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_star_ratings_default()), {
                                                        rating: course.rating,
                                                        starRatedColor: "#F17425",
                                                        starEmptyColor: "none",
                                                        numberOfStars: 5,
                                                        name: "rating",
                                                        starDimension: "19px",
                                                        starSpacing: "2px"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "list-inline-item",
                                                    children: [
                                                        course.rating,
                                                        " Star (",
                                                        course.person,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-account text-muted"
                                                        }),
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fees",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled float-end mb-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "h3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "h6",
                                                            children: "$"
                                                        }),
                                                        course.price
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled mb-0 numbers",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-school text-muted"
                                                            }),
                                                            " ",
                                                            course.students,
                                                            " Students"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-book text-muted"
                                                            }),
                                                            " ",
                                                            course.lesson,
                                                            " Lession"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collection",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "mdi mdi-heart h5"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }, key))
        });
    }
}
/* harmony default export */ const course_box = (CourseBox);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: ./components/Shared/team-box.js
var team_box = __webpack_require__(4066);
;// CONCATENATED MODULE: ./images/course/1.jpg
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.7f17d7b4.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqgr/AP/EABsQAAICAwEAAAAAAAAAAAAAAAECAwQAE0JS/9oACAEBAAE/AKzXTeRBIuuPn0wOf//EABYRAQEBAAAAAAAAAAAAAAAAAAIAUf/aAAgBAgEBPwBA5f/EABgRAAIDAAAAAAAAAAAAAAAAAAECAAQi/9oACAEDAQE/AK4DpoT/2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/2.jpg
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.f502ac6b.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALIUP//EAB0QAAICAQUAAAAAAAAAAAAAAAEDAhIABAURIUH/2gAIAQEAAT8A1yQ3cFPkIGSqria17tz5n//EABcRAQEBAQAAAAAAAAAAAAAAAAECAHL/2gAIAQIBAT8AQJjnf//EABYRAQEBAAAAAAAAAAAAAAAAAAJRAP/aAAgBAwEBPwApWb//2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/3.jpg
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.43c0f458.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAAlD/xAAYEAEBAQEBAAAAAAAAAAAAAAABAgMhAP/aAAgBAQABPwCXbO5yySZbAVV4z1ff/8QAGBEBAAMBAAAAAAAAAAAAAAAAAgABAxH/2gAIAQIBAT8A2aC4bn//xAAaEQACAgMAAAAAAAAAAAAAAAABAwACEiIx/9oACAEDAQE/AKKXiNRyf//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/4.jpg
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.874af34c.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgJv/xAAdEAACAgIDAQAAAAAAAAAAAAABAgMEEiEAESIj/9oACAEBAAE/AKM9CaqrYWlWSNkH1JGQ8ntTob5//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAIf/aAAgBAgEBPwBmV7I7/8QAFhEBAQEAAAAAAAAAAAAAAAAAATEA/9oACAEDAQE/AEGhXf/Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/5.jpg
/* harmony default export */ const _5 = ({"src":"/_next/static/media/5.1488d8ec.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAArg1//8QAGxAAAgIDAQAAAAAAAAAAAAAAARECAwAEBRL/2gAIAQEAAT8Au0enGkSnfSxNoekWEXn/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/6.jpg
/* harmony default export */ const _6 = ({"src":"/_next/static/media/6.71b416d6.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJRT/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDAAQRQQUSE//aAAgBAQABPwCLmLxi6wsVnCu3r2xoYBG6/8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABERIhMf/aAAgBAgEBPwCowONxf//EABcRAAMBAAAAAAAAAAAAAAAAAAABMSH/2gAIAQMBAT8Adeun/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/7.jpg
/* harmony default export */ const _7 = ({"src":"/_next/static/media/7.eb92345e.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAhAZP/8QAHBABAAIBBQAAAAAAAAAAAAAAAQIEAwATITFB/9oACAEBAAE/ALeEnVyXZJKW5CLwCIAdea//xAAaEQAABwAAAAAAAAAAAAAAAAAAAQIDESFR/9oACAECAQE/AGrSc6P/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMxcf/aAAgBAwEBPwCS1h//2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/8.jpg
/* harmony default export */ const _8 = ({"src":"/_next/static/media/8.b450cc11.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAuQl//8QAHBAAAgICAwAAAAAAAAAAAAAAAhEBAwAEBRIx/9oACAEBAAE/AOX3NoDrOrqJ0q1ufIlrP//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAgEBPwBKf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjH/2gAIAQMBAT8AeSf/2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/course/9.jpg
/* harmony default export */ const _9 = ({"src":"/_next/static/media/9.e7531c6e.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALEN/wD/xAAbEAACAQUAAAAAAAAAAAAAAAACAwEAEiJRYf/aAAgBAQABPwBTWqaMC9h5XTB65X//xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQMBAT8Ar//Z","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./images/team/1.jpg
var team_1 = __webpack_require__(1929);
// EXTERNAL MODULE: ./images/team/2.jpg
var team_2 = __webpack_require__(5493);
// EXTERNAL MODULE: ./images/team/3.jpg
var team_3 = __webpack_require__(6971);
// EXTERNAL MODULE: ./images/team/4.jpg
var team_4 = __webpack_require__(8547);
;// CONCATENATED MODULE: ./components/ElektroPos/Services.js
// React Basic and Bootstrap




//Import Components



// import images













class Services extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    image: _1,
                    title: "Program for Missionaries",
                    price: 75,
                    rating: 5,
                    person: 5,
                    students: 30,
                    lession: 5
                },
                {
                    id: 2,
                    image: _2,
                    title: "Access to Higher Education",
                    price: 150,
                    rating: 4,
                    person: 5,
                    students: 30,
                    lession: 5
                },
                {
                    id: 3,
                    image: _3,
                    title: "Course in TEFL Teacher Training",
                    price: 130,
                    rating: 4.7,
                    person: 5,
                    students: 30,
                    lession: 5
                },
                {
                    id: 4,
                    image: _4,
                    title: "Educational Communication",
                    price: 85,
                    rating: 2.5,
                    person: 3,
                    students: 30,
                    lession: 5
                },
                {
                    id: 5,
                    image: _5,
                    title: "Introduction to Epidemiology",
                    price: 100,
                    rating: 4.5,
                    person: 3,
                    students: 30,
                    lession: 5
                },
                {
                    id: 6,
                    image: _6,
                    title: "Good Clinical Practice",
                    price: 109,
                    rating: 3,
                    person: 2,
                    students: 30,
                    lession: 5
                },
                {
                    id: 7,
                    image: _7,
                    title: "Advanced Diagnostic Research",
                    price: 55,
                    rating: 4.5,
                    person: 8,
                    students: 30,
                    lession: 5
                },
                {
                    id: 8,
                    image: _8,
                    title: "Skills Development Facilitation",
                    price: 135,
                    rating: 5,
                    person: 3,
                    students: 30,
                    lession: 5
                },
                {
                    id: 9,
                    image: _9,
                    title: "PGCE Primary",
                    price: 55,
                    rating: 5,
                    person: 3,
                    students: 30,
                    lession: 5
                }, 
            ],
            candidates: [
                {
                    id: 1,
                    image: team_1/* default */.Z,
                    name: "Ronny Jofra",
                    designation: "Organizer",
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
                    image: team_2/* default */.Z,
                    name: "Micheal Carlo",
                    designation: "Event Manager",
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
                    image: team_3/* default */.Z,
                    name: "Aliana Rosy",
                    designation: "Motivator",
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
                    image: team_4/* default */.Z,
                    name: "Sofia Razaq",
                    designation: "Speaker",
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
        var teambox = document.getElementsByName("teambox");
        for(var i = 0; i < teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                id: "courses",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Explore Popular Courses",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(course_box, {
                                        courses: this.state.courses
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        className: "mt-4 pt-2 text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "btn btn-primary",
                                                children: [
                                                    "See More Courses ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "mdi mdi-chevron-right"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        id: "instructors",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Instructors",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(team_box/* default */.Z, {
                                    candidates: this.state.candidates
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const ElektroPos_Services = (Services);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./images/course/bg03.jpg
/* harmony default export */ const bg03 = ({"src":"/_next/static/media/bg03.a03f6d62.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALQM/wD/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAEgQUQv/aAAgBAQABPwDpb0L8irVNGBXxrn//xAAYEQACAwAAAAAAAAAAAAAAAAAAAgERIf/aAAgBAgEBPwCMVaP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AG9uz//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/ElektroPos/Cta1.js
// React Basic and Bootstrap




// import images

class Cta1 extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [
                {
                    icon: "mdi-school-outline",
                    title: "Students",
                    end: 25,
                    postfix: "K"
                },
                {
                    icon: "mdi-book-open-variant",
                    title: "Courses",
                    end: 70,
                    postfix: "+"
                },
                {
                    icon: "mdi-account",
                    title: "Instructors",
                    end: 55,
                    postfix: "+"
                },
                {
                    icon: "mdi-language-swift",
                    title: "Languages",
                    end: 25,
                    postfix: "+"
                }, 
            ],
            Contactvisible: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            Contactvisible: true
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                style: {
                    background: `url(${bg03.src}) center center`
                },
                id: "admission",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                            className: "align-items-center position-relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    lg: "8",
                                    md: "7",
                                    xs: "12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "title title-dark text-white mb-4",
                                                    children: "Admission Now"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "para-desc para-dark mb-0 text-light",
                                                    children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                            id: "counter",
                                            children: this.state.counters.map((counter, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                    md: "3",
                                                    xs: "6",
                                                    className: "mt-4 pt-2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "counter-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi " + counter.icon + " title-dark text-light h1"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                                className: "mb-0 text-white title-dark mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "counter-value",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                                            duration: 8,
                                                                            end: counter.end
                                                                        })
                                                                    }),
                                                                    counter.postfix
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "counter-head title-dark text-light",
                                                                children: counter.title
                                                            })
                                                        ]
                                                    })
                                                }, key))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                    lg: "4",
                                    md: "5",
                                    xs: "12",
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                            color: "info",
                                            isOpen: this.state.Contactvisible,
                                            toggle: ()=>{
                                                this.setState({
                                                    Contactvisible: !this.state.Contactvisible
                                                });
                                            },
                                            children: "Data Sended successfully."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                            className: "p-4 rounded bg-white",
                                            onSubmit: this.handleSubmit,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "7 Days Free Trial"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            lg: "12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                className: "position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                        children: [
                                                                            "Name : ",
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
                                                                        type: "text",
                                                                        className: "form-control ps-5",
                                                                        placeholder: "Name",
                                                                        name: "name",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            lg: "12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                className: "position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                        children: [
                                                                            "Email : ",
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
                                                                        type: "email",
                                                                        className: "form-control ps-5",
                                                                        placeholder: "Email",
                                                                        name: "email",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            lg: "12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                className: "position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                        children: [
                                                                            "Phone : ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-danger",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi mdi-phone ms-3 icons"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                        type: "number",
                                                                        id: "number",
                                                                        className: "form-control ps-5",
                                                                        placeholder: "phone",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                            lg: "12",
                                                            className: "mt-2 mb-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                                color: "primary",
                                                                type: "submit",
                                                                className: "w-100",
                                                                children: "Register Now"
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
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const ElektroPos_Cta1 = (Cta1);

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
;// CONCATENATED MODULE: ./components/ElektroPos/Testi.js
// React Basic and Bootstrap



//Import Components


//Import Images






class Testi extends external_react_.Component {
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
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "What Students Say ?",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(reviews_slider/* default */.Z, {
                                reviews: this.state.reviews
                            })
                        ]
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
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "7",
                                    md: "10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Form, {
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
                                                        required: true,
                                                        "aria-describedby": "newssubscribebtn"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                        addonType: "append",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                            className: "btn btn-primary submitBnt",
                                                            type: "button",
                                                            id: "newssubscribebtn",
                                                            children: "Subscribe"
                                                        })
                                                    })
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
        });
    }
}
/* harmony default export */ const ElektroPos_Testi = (Testi);

// EXTERNAL MODULE: ./components/Shared/Partners.js
var Partners = __webpack_require__(8609);
;// CONCATENATED MODULE: ./pages/elektropos.js














//Render Components
class Bitcoin extends external_react_.Component {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_Feature, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_About, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_Cta, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_Services, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_Cta1, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElektroPos_Testi, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "bg-light section-two",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Partners/* default */.Z, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const elektropos = (Bitcoin);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,8609,1791,7849], () => (__webpack_exec__(472)));
module.exports = __webpack_exports__;

})();