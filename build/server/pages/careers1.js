"use strict";
(() => {
var exports = {};
exports.id = 2614;
exports.ids = [2614,5941,3882];
exports.modules = {

/***/ 5669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9883);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Shared_page_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4904);
/* harmony import */ var _components_Layout_Topbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6695);
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9291);
/* harmony import */ var _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4021);
/* harmony import */ var _images_job_Circleci_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3100);
/* harmony import */ var _images_job_Codepen_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8570);
/* harmony import */ var _images_job_Discord_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7462);
/* harmony import */ var _images_job_Eslint_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5130);
/* harmony import */ var _images_job_Gitlab_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2510);
/* harmony import */ var _images_job_Gradle_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7842);
/* harmony import */ var _images_job_Mg_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(678);
/* harmony import */ var _images_job_Sketch_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3709);
/* harmony import */ var _images_job_Twilio_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7208);
/* harmony import */ var _images_job_Udemy_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3686);
/* harmony import */ var _images_job_Webhooks_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7648);
// React Basic and Bootstrap






//Import components



//Import Images












class Careers extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
                    name: "Careers",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Jobs"
                }, 
            ],
            jobs: [
                {
                    id: 1,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Web Designer",
                    time: "Full Time",
                    rating: 4,
                    cmpImage: _images_job_Circleci_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                    cmpName: "CircleCi",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 2,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Web Developer",
                    time: "Full Time",
                    rating: 5,
                    cmpImage: _images_job_Codepen_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                    cmpName: "Codepen",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 3,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "UX Designer",
                    time: "Part Time",
                    rating: 4,
                    cmpImage: _images_job_Discord_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                    cmpName: "Discord",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 4,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "UI Designer",
                    time: "Full Time",
                    rating: 3,
                    cmpImage: _images_job_Eslint_svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                    cmpName: "Eslint",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 5,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Back-End Developer",
                    time: "Remote",
                    rating: 4,
                    cmpImage: _images_job_Gitlab_svg__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                    cmpName: "Gitlab",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 6,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Photographer",
                    time: "Part Time",
                    rating: 5,
                    cmpImage: _images_job_Gradle_svg__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                    cmpName: "Gradle",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 7,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Mechanic",
                    time: "Full Time",
                    rating: 4,
                    cmpImage: _images_job_Mg_svg__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                    cmpName: "Mg",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 8,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Frontend Developer",
                    time: "Part Timee",
                    rating: 4,
                    cmpImage: _images_job_Sketch_svg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                    cmpName: "Sketch",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 9,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Web Designer",
                    time: "Remote",
                    rating: 3,
                    cmpImage: _images_job_Twilio_svg__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                    cmpName: "Twilio",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 10,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Php Developer",
                    time: "Part Time",
                    rating: 4,
                    cmpImage: _images_job_Udemy_svg__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                    cmpName: "Udemy",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 11,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Web Designer",
                    time: "Full Time",
                    rating: 4,
                    cmpImage: _images_job_Webhooks_svg__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                    cmpName: "Webhooks",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                },
                {
                    id: 12,
                    image: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    title: "Python Developer",
                    time: "Remote",
                    rating: 5,
                    cmpImage: _images_job_Circleci_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                    cmpName: "CircleCi",
                    location: "San Francisco",
                    Experience: "2 Year",
                    workingHrs: "6hr",
                    field: "Information strategy"
                }, 
            ]
        };
    }
    componentDidMount() {
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
            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Topbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_page_breadcrumb__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "Jobs / Careers",
                    pathItems: this.state.pathItems
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "position-relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shape overflow-hidden text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 2880 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",
                                fill: "currentColor"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    xs: "12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "border-bottom",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                    lg: "9",
                                                    md: "8",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "section-title",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "title mb-2",
                                                                children: "All Jobs"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-muted mb-0",
                                                                children: "Most Relevance Job"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                    lg: "3",
                                                    md: "4",
                                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form custom-form",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                                    children: "Types of jobs :"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    className: "form-control custom-select",
                                                                    id: "Sortbylist-job",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "All Jobs"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "Full Time"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "Part Time"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "Remote"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "Work From Home"
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
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        xs: "12",
                                        className: "mt-4 pt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "section-title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "mb-0",
                                                children: "Recommended Job :"
                                            })
                                        })
                                    }),
                                    this.state.jobs.map((job, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                            lg: "4",
                                            md: "6",
                                            xs: "12",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "job-box rounded shadow position-relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "border-bottom",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        src: _images_job_full_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                                        className: "img-fluid",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "job-overlay bg-white"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                className: "mb-0 position",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: "/job-detail",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "text-dark",
                                                                            children: job.title
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                        className: "list-unstyled h6 mb-0 text-warning",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                            rating: job.rating,
                                                                            starRatedColor: "#F17425",
                                                                            numberOfStars: 5,
                                                                            name: "rating",
                                                                            starDimension: "15px",
                                                                            sstarSpacing: "2px"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "list-unstyled head mb-0",
                                                                children: job.time === "Full Time" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "badge badge-success badge-pill",
                                                                    children: job.time
                                                                }) : job.time === "Part Time" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "badge badge-warning badge-pill",
                                                                    children: job.time
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "badge badge-danger badge-pill",
                                                                    children: job.time
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "content position-relative p-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "firm-logo rounded-pill shadow bg-light text-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    src: job.cmpImage,
                                                                    width: 65,
                                                                    height: 65,
                                                                    className: "avatar avatar-md-sm",
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "company-detail text-center mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                        className: "mb-0 text-dark company-name",
                                                                        children: [
                                                                            " ",
                                                                            job.cmpName
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-muted",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                className: "video-play-icon text-muted",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "mdi mdi-map-marker"
                                                                                    }),
                                                                                    " San Francisco"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "job-facts list-unstyled",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "list-inline-item text-muted",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "mdi mdi-check text-success mr-1"
                                                                            }),
                                                                            " ",
                                                                            job.Experience,
                                                                            " Expirence"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "list-inline-item text-muted",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "mdi mdi-check text-success mr-1"
                                                                            }),
                                                                            " Working Hours- ",
                                                                            job.workingHrs
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "list-inline-item text-muted",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "mdi mdi-check text-success mr-1"
                                                                            }),
                                                                            " ",
                                                                            job.field
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/job-detail",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "btn btn-outline-primary btn-block",
                                                                    children: "Apply Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, key))
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Careers);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,2503,4904,6744], () => (__webpack_exec__(5669)));
module.exports = __webpack_exports__;

})();