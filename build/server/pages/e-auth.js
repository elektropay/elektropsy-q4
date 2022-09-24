"use strict";
(() => {
var exports = {};
exports.id = 6275;
exports.ids = [6275,5941,3882];
exports.modules = {

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ e_auth)
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
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__(5637);
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);
;// CONCATENATED MODULE: ./components/EAuth/ScrollspyNav.js


class ScrollspyNav extends external_react_.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.scrollTargetIds = this.props.scrollTargetIds;
        this.activeNavClass = this.props.activeNavClass;
        this.scrollDuration = Number(this.props.scrollDuration) || 1000;
        this.headerBackground = this.props.headerBackground === "true" ? true : false;
        if (this.props.router && this.props.router === "HashRouter") {
            this.homeDefaultLink = "#/";
            this.hashIdentifier = "#/#";
        } else {
            this.homeDefaultLink = "/";
            this.hashIdentifier = "#";
        }
    }
    easeInOutQuad(current_time, start, change, duration) {
        current_time /= duration / 2;
        if (current_time < 1) return change / 2 * current_time * current_time + start;
        current_time--;
        return -change / 2 * (current_time * (current_time - 2) - 1) + start;
    }
    scrollTo(start, to, duration) {
        let change = to - start, currentTime = 0, increment = 10;
        let animateScroll = ()=>{
            currentTime += increment;
            let val = this.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    getNavLinkElement(sectionID) {
        return document.querySelector(`a[href='${this.hashIdentifier}${sectionID}']`);
    }
    getNavToSectionID(navHref) {
        return navHref.includes(this.hashIdentifier) ? navHref.replace(this.hashIdentifier, "") : "";
    }
    componentDidMount() {
        if (document.querySelector(`a[href='${this.homeDefaultLink}']`)) {
            document.querySelector(`a[href='${this.homeDefaultLink}']`).addEventListener("click", (event)=>{
                event.preventDefault();
                this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                window.location.hash = "";
            });
        }
        document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((navLink)=>{
            navLink.addEventListener("click", (event)=>{
                event.preventDefault();
                let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));
                if (sectionID) {
                    let scrollTargetPosition = document.getElementById(sectionID).offsetTop - (this.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
                    this.scrollTo(window.pageYOffset, scrollTargetPosition, this.scrollDuration);
                } else {
                    this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                }
            });
        });
        window.addEventListener("scroll", ()=>{
            let scrollSectionOffsetTop;
            this.scrollTargetIds.forEach((sectionID, index)=>{
                if (document.getElementById(sectionID)) {
                    scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - (this.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
                    if (window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight) {
                        this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
                        this.getNavLinkElement(sectionID).parentNode.classList.add(this.activeNavClass);
                        this.clearOtherNavLinkActiveStyle(sectionID);
                    } else {
                        this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
                        this.getNavLinkElement(sectionID).parentNode.classList.remove(this.activeNavClass);
                    }
                    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && index === this.scrollTargetIds.length - 1) {
                        this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
                        this.getNavLinkElement(sectionID).parentNode.classList.add(this.activeNavClass);
                        this.clearOtherNavLinkActiveStyle(sectionID);
                    }
                }
            });
        });
    }
    clearOtherNavLinkActiveStyle(excludeSectionID) {
        this.scrollTargetIds.forEach((sectionID, index)=>{
            if (sectionID !== excludeSectionID) {
                this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
                this.getNavLinkElement(sectionID).parentNode.classList.remove(this.activeNavClass);
            }
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            "data-nav": "list",
            className: this.props.className,
            children: this.props.children
        });
    }
}
/* harmony default export */ const EAuth_ScrollspyNav = (ScrollspyNav);

;// CONCATENATED MODULE: ./images/personal/bg01.png
/* harmony default export */ const bg01 = ({"src":"/_next/static/media/bg01.caf7ddd1.png","height":1333,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAdElEQVR42mNAAoxQWgCIJwDxFKCQEly2JSGAGUS3JgQ6dsZ7/c8LcvpvbWrYAVdwaVo1C4g+P7Uu4emiqv/f90y79/n6bj64gvX1WUwgemJxrvLR1pgrNxfUvZIPy9NkQAYrKpPApnRmRVsH2Zj8N7Nx/wgA7ScmVc03mpQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/EAuth/section.js






class Section extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-home bg-light d-flex align-items-center",
                style: {
                    background: `url(${bg01.src}) center center`
                },
                id: "home",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            lg: "8",
                            md: "9",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "title-heading mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "display-3 font-weight-bold mb-3",
                                        children: [
                                            "Here I am ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_typist_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "element",
                                                        children: "Calvin Carlo"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                        count: 15,
                                                        delay: 200
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "element",
                                                        children: "UI/UX Designer"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_typist_default()).Backspace, {
                                                        count: 15,
                                                        delay: 200
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "element",
                                                        children: "Web Developer"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "para-desc text-muted",
                                        children: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-4 pt-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EAuth_ScrollspyNav, {
                                            scrollTargetIds: [
                                                "portfolio",
                                                "contact"
                                            ],
                                            activeNavClass: "active",
                                            scrollDuration: "800",
                                            headerBackground: "true",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#portfolio",
                                                    className: "btn btn-primary mt-2 mr-2 mouse-down",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-camera"
                                                        }),
                                                        " View Portfolio"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#contact",
                                                    className: "btn btn-outline-primary mt-2 mouse-down",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-cloud-download"
                                                        }),
                                                        " Hire Me"
                                                    ]
                                                })
                                            ]
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(4990);
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);
// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/Shared/process-box.js




class ProcessBox extends external_react_.Component {
    render() {
        var length = this.props.processes.length;
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.processes.map((process, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    md: "4",
                    className: "mt-4 pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "work-process p-lg-4 p-3 rounded shadow",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "title",
                                children: process.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-muted para",
                                children: process.desc
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: process.link,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "text-primary",
                                    children: [
                                        "Read more ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "mdi mdi-chevron-right"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-unstyled mb-0 mt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "step-icon float-end",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: key + 1 === length ? "mdi mdi-check-all" : "mdi mdi-chevron-double-right"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "step font-weight-bold",
                                        children: [
                                            "Step ",
                                            key + 1,
                                            "."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }, key))
        });
    }
}
/* harmony default export */ const process_box = (ProcessBox);

;// CONCATENATED MODULE: ./images/personal/1.jpg
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.cb6061c9.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALUFf//EAB0QAAICAQUAAAAAAAAAAAAAAAEDAgQRAAUSIUH/2gAIAQEAAT8A25U615qoMPGIBwT1g+a//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AFh//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAIxgf/aAAgBAwEBPwBrh//Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/personal/2.jpg
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.0b34bbb1.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAooH/xAAaEAADAQADAAAAAAAAAAAAAAABAgMhAAQT/9oACAEBAAE/ALWtHuJ6UJRn1FGEHBz/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8AXb//2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/personal/3.jpg
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.769f4f52.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmAj/AP/EABwQAAEDBQAAAAAAAAAAAAAAAAIDERIAAQUTMf/aAAgBAQABPwBTEGSUXDY8ZPftf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwCs/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8AQv/Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/personal/4.jpg
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.90247f33.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQf/2gAMAwEAAhADEAAAAKwTp3//xAAcEAACAgIDAAAAAAAAAAAAAAABAgQhAAMTIjH/2gAIAQEAAT8Amyt6cBRVKsyIOxUgk2a9rP/EABkRAAMAAwAAAAAAAAAAAAAAAAECAwATYv/aAAgBAgEBPwCztrgeTn//xAAYEQEAAwEAAAAAAAAAAAAAAAACABEhQf/aAAgBAwEBPwAE287P/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/personal/5.jpg
/* harmony default export */ const _5 = ({"src":"/_next/static/media/5.515bf703.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJMC3//EAB0QAAICAQUAAAAAAAAAAAAAAAECAwQABRExUpH/2gAIAQEAAT8AkuBdJiohDuJzK7duQPM//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBIXH/2gAIAQIBAT8AVYvT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMXH/2gAIAQMBAT8Ak6w//9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./images/personal/6.jpg
/* harmony default export */ const _6 = ({"src":"/_next/static/media/6.3abd13e7.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJmKj//EABsQAAIBBQAAAAAAAAAAAAAAAAECAwARIVFx/9oACAEBAAE/AEjRhIGyRGbd3X//xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQIBAT8ArP/EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPwCI/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./components/EAuth/About.js
// React Basic and Bootstrap







//Import Components


// import images






//creating array of images for image portfolio
const About_images = [
    _1,
    _2,
    _3,
    _4,
    _5,
    _6
];
class About extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    image: _1,
                    title: "Shifting Perspective",
                    subject: "Studio",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                },
                {
                    image: _2,
                    title: "Colors Magazine",
                    subject: "Web Design",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                },
                {
                    image: _3,
                    title: "Spa Cosmetics",
                    subject: "Developing",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                },
                {
                    image: _4,
                    title: "Riser Coffee",
                    subject: "Branding",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                },
                {
                    image: _5,
                    title: "Dancing With My Self",
                    subject: "Photography",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                },
                {
                    image: _6,
                    title: "New Trends in SEO",
                    subject: "Business",
                    author: "Thomas Brewer",
                    date: "13th August, 2019"
                }, 
            ],
            processes: [
                {
                    id: 1,
                    title: "Discuss The Project",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
                    link: "#"
                },
                {
                    id: 2,
                    title: "Develop & Elaborate",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
                    link: "#"
                },
                {
                    id: 3,
                    title: "Final Approvement",
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
                    link: "#"
                }, 
            ],
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex , isOpen  } = this.state;
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
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                children: "About Me"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "text-primary mb-4",
                                                children: "I am Passionate Web Designer"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-muted mb-0",
                                                children: "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#contact",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "btn btn-primary mouse-down",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "mdi mdi-phone"
                                                            }),
                                                            " Contact Me"
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    md: "6",
                                    className: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-md-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "title text-muted",
                                                        children: "WordPress"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-value d-block text-muted h6",
                                                        children: "84%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Progress, {
                                                        value: "84"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress-box mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "title text-muted",
                                                        children: "PHP / MYSQL"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-value d-block text-muted h6",
                                                        children: "75%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Progress, {
                                                        value: "75"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress-box mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "title text-muted",
                                                        children: "Angular / JavaScript"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-value d-block text-muted h6",
                                                        children: "79%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Progress, {
                                                        value: "79"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress-box mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "title text-muted",
                                                        children: "HTML"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-value d-block text-muted h6",
                                                        children: "95%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Progress, {
                                                        value: "95"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress-box mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "title text-muted",
                                                        children: "CSS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-value d-block text-muted h6",
                                                        children: "93%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Progress, {
                                                        value: "93"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        id: "portfolio",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                isLeft: true,
                                title: "My Work & Portfolio",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                children: [
                                    this.state.projects.map((project, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            lg: "4",
                                            md: "6",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "work-container position-relative d-block overflow-hidden rounded",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "mfp-image d-inline-block",
                                                        to: "#",
                                                        onClick: ()=>this.setState({
                                                                isOpen: true,
                                                                photoIndex: key
                                                            }),
                                                        title: "",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: project.image,
                                                                className: "img-fluid rounded",
                                                                alt: "work"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overlay-work"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "content personal-port",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "title text-white d-block font-weight-bold",
                                                                    children: project.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                className: "text-light",
                                                                children: project.subject
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "client personal-port",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                className: "text-light user d-block",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi mdi-account"
                                                                    }),
                                                                    " ",
                                                                    project.author
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                className: "text-light date",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "mdi mdi-calendar-check"
                                                                    }),
                                                                    " ",
                                                                    project.date
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, key)),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        className: "mt-4 pt-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "btn btn-outline-primary",
                                                children: [
                                                    "See More ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "mdi mdi-chevron-right"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            isOpen && /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_lightbox_default()), {
                                mainSrc: About_images[photoIndex],
                                nextSrc: About_images[(photoIndex + 1) % About_images.length],
                                prevSrc: About_images[(photoIndex + About_images.length - 1) % About_images.length],
                                imagePadding: 100,
                                onCloseRequest: ()=>this.setState({
                                        isOpen: false
                                    }),
                                onMovePrevRequest: ()=>this.setState({
                                        photoIndex: (photoIndex + About_images.length - 1) % About_images.length
                                    }),
                                onMoveNextRequest: ()=>this.setState({
                                        photoIndex: (photoIndex + 1) % About_images.length
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                isLeft: true,
                                title: "Work Process",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(process_box, {
                                    processes: this.state.processes
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const EAuth_About = (About);

// EXTERNAL MODULE: external "react-star-ratings"
var external_react_star_ratings_ = __webpack_require__(9883);
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./images/personal/bg02.jpg
/* harmony default export */ const bg02 = ({"src":"/_next/static/media/bg02.abb00708.jpg","height":800,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAJA/Df/EABsQAAEEAwAAAAAAAAAAAAAAAAIBAwQRABJh/9oACAEBAAE/AJjrgSIAiVIb9F1NVz//xAAaEQEAAQUAAAAAAAAAAAAAAAABAAMTIUGx/9oACAECAQE/ABblXOzk/8QAGxEAAgEFAAAAAAAAAAAAAAAAAQISAAQRFLL/2gAIAQMBAT8AKJq2hiMxbo1//9k=","blurWidth":8,"blurHeight":3});
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
;// CONCATENATED MODULE: ./components/EAuth/Testi.js
// React Basic and Bootstrap




//Star Rating

//Slider
var $ = __webpack_require__(2947);
if (false) {}



const OwlCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/EAuth/Testi.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
//Import Images







class Testi extends external_react_.Component {
    state = {
        clients: [
            {
                id: 1,
                image: _01/* default */.Z,
                name: "Thomas Israel",
                post: "C.E.O",
                rating: 5,
                desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
            },
            {
                id: 2,
                image: _02/* default */.Z,
                name: "Carl Oliver",
                post: "P.A",
                rating: 4,
                desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.."
            },
            {
                id: 3,
                image: _03/* default */.Z,
                name: "Barbara McIntosh",
                post: "M.D",
                rating: 3.5,
                desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
            },
            {
                id: 4,
                image: _04/* default */.Z,
                name: "Jill Webb",
                post: "Manager",
                rating: 4.5,
                desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find"
            },
            {
                id: 5,
                image: _05/* default */.Z,
                name: " Dean Tolle",
                post: "Developer",
                rating: 5,
                desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories."
            },
            {
                id: 6,
                image: _06/* default */.Z,
                name: "Christa Smith",
                post: "Designer",
                rating: 5,
                desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."
            }, 
        ]
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section",
                style: {
                    background: `url(${bg02.src}) center center`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "7",
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(OwlCarousel, {
                                    className: "owl-theme",
                                    items: 1,
                                    loop: true,
                                    margin: 1,
                                    autoplay: true,
                                    children: this.state.clients.map((client, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "customer-testi text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-light para-dark h6 font-italic",
                                                    children: [
                                                        " ",
                                                        client.desc,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_star_ratings_default()), {
                                                    rating: client.rating,
                                                    starRatedColor: "#F17425",
                                                    numberOfStars: 5,
                                                    name: "rating",
                                                    starDimension: "15px",
                                                    className: "list-unstyled mb-0 mt-3"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    className: "text-light title-dark",
                                                    children: [
                                                        " ",
                                                        client.name,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-3 mx-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: client.image,
                                                        height: 65,
                                                        width: 65,
                                                        className: "img-fluid avatar avatar-small rounded-pill mx-auto shadow",
                                                        alt: "testimonial"
                                                    })
                                                })
                                            ]
                                        }, key))
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const EAuth_Testi = (Testi);

// EXTERNAL MODULE: ./components/Shared/Partners.js
var Partners = __webpack_require__(8609);
// EXTERNAL MODULE: ./components/Shared/blog-box.js
var blog_box = __webpack_require__(2321);
;// CONCATENATED MODULE: ./components/EAuth/Blog.js
// React Basic and Bootstrap




//Import Components


// import images



class Blog extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: [
                {
                    id: 1,
                    image: _1,
                    title: "Design your apps in your own way",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 2,
                    image: _2,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
                },
                {
                    id: 3,
                    image: _3,
                    title: "Smartest Applications for Business",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019"
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
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                isLeft: true,
                                title: "Latest News",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(blog_box/* default */.Z, {
                                        blogs: this.state.blogs
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        xs: "12",
                                        className: "mt-4 pt-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "btn btn-primary ",
                                                children: [
                                                    "See More ",
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
                        id: "contact",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                isLeft: true,
                                title: "Contact Me",
                                desc: " that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "4",
                                        md: "6",
                                        className: "mt-4 pt-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pt-5 pb-5 p-4 bg-white rounded shadow",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Get In Touch !"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "custom-form mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            id: "message"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                                            color: "info",
                                                            isOpen: this.state.Contactvisible,
                                                            toggle: ()=>{
                                                                this.setState({
                                                                    Contactvisible: !this.state.Contactvisible
                                                                });
                                                            },
                                                            children: "Contact details send successfully."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                                            method: "post",
                                                            onSubmit: this.handleSubmit,
                                                            name: "contact-form",
                                                            id: "contact-form",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                            md: "12",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                                className: "position-relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                                        children: [
                                                                                            "Your Name ",
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
                                                                                        name: "name",
                                                                                        id: "name",
                                                                                        type: "text",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "First Name :",
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
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Label, {
                                                                                        children: [
                                                                                            "Your Email ",
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
                                                                                        name: "email",
                                                                                        id: "email",
                                                                                        type: "email",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "Your email :",
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
                                                                                        children: "Comments"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "mdi mdi-comment-text-outline ms-3 icons"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                        name: "comments",
                                                                                        id: "comments",
                                                                                        rows: "4",
                                                                                        className: "form-control ps-5",
                                                                                        placeholder: "Your Message :"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                                                        sm: 12,
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                type: "submit",
                                                                                id: "submit",
                                                                                name: "send",
                                                                                className: "submitBnt btn btn-primary btn-block",
                                                                                value: "Send Message"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                id: "simple-msg"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                        lg: "8",
                                        md: "6",
                                        className: "pl-md-3 pr-md-3 mt-4 pt-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "map map-height-two rounded map-gray",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                                title: "Elektropay",
                                                src: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
                                                style: {
                                                    border: 0
                                                },
                                                className: "rounded",
                                                allowFullScreen: ""
                                            })
                                        })
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
/* harmony default export */ const EAuth_Blog = (Blog);

// EXTERNAL MODULE: ./components/Layout/Footer.js + 2 modules
var Footer = __webpack_require__(9291);
// EXTERNAL MODULE: ./components/Layout/Topbar.js + 1 modules
var Topbar = __webpack_require__(6695);
;// CONCATENATED MODULE: ./pages/e-auth.js











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
                        /*#__PURE__*/ jsx_runtime_.jsx(EAuth_About, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(EAuth_Testi, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "pt-5 pb-5 border-bottom border-top",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Partners/* default */.Z, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EAuth_Blog, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const e_auth = (payment);


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

/***/ 4990:
/***/ ((module) => {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ 3308:
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ 9883:
/***/ ((module) => {

module.exports = require("react-star-ratings");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,8609,2321], () => (__webpack_exec__(7108)));
module.exports = __webpack_exports__;

})();