"use strict";
(() => {
var exports = {};
exports.id = 2043;
exports.ids = [2043,5941,3882];
exports.modules = {

/***/ 3510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ card_processing)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
;// CONCATENATED MODULE: ./images/icon/credit-card.svg
/* harmony default export */ const credit_card = ({"src":"/_next/static/media/credit-card.efefcdae.svg","height":656,"width":656});
;// CONCATENATED MODULE: ./images/payments/payment/master.png
/* harmony default export */ const master = ({"src":"/_next/static/media/master.cd619105.png","height":184,"width":296,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlUlEQVR42i3OwQ2CQBAAwA3GB3xMMD5Yjo8ntWgLFmAR2okP4RrR8EboQzbxy2IuxwrkGpgM0C4/UJQ1HSj5brH63ZOqN6lwoVo2OgdaZw0FKB9I3XCKxF1D6Q06LhLhUrVAKyUdoKUNijsHVi6B5UcifYmWC5RZeHthHI6TcFuE0QsNUKz3FGb1cojxNR2e/lCz0foPQh5YrG2EkzgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/payments/payment/visaa.png
/* harmony default export */ const visaa = ({"src":"/_next/static/media/visaa.f9493f93.png","height":122,"width":207,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAYElEQVR42gFVAKr/AOlJ8Vnwa/B09pDlKPR85E8A6T732vOa8pX1rPJz9uf2VADhIfV36z7tX/KP8ZLxh/Q/APYA/wDgJ+pU8HPzgPag8z8AtwbaLOQr5hbMBgAC1g/mCu4UMYyqJjG3AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/payments/payment/rupay.png
/* harmony default export */ const rupay = ({"src":"/_next/static/media/rupay.ccdfe99f.png","height":163,"width":296,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAS0lEQVR42mMgCKxsulqsbbsqbey77YHsyc72nQkMZpOcV4Ul++zsz4plsLbrCrWx60oE4kygQnsPx85IBuMJjZtTEit3lDEEELQBAAuYF5WOLt+yAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/payments/payment/paypals.png
/* harmony default export */ const paypals = ({"src":"/_next/static/media/paypals.e5ae9bd9.png","height":163,"width":407,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQcph6r51+5VC0cbcTgrMJi9jkD6Tf///9md4BT0CAjtAQQ5jt/8LRggCiMlnhukvcQABgEJ9zQl9go6NhX9/f37AQdtttcFODe49FtRcf//wQAqR5UU9wIC/uC3ae8lnuAPrm4tbo2BNcAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/Payments/section.js





//Import Images





class Section extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
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
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-half-170 d-table w-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "title-heading text-center mt-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: credit_card,
                                            className: "avatar avatar-md-sm image-width",
                                            alt: "",
                                            height: 45,
                                            width: 45
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "text-primary mt-3 font-weight-bold",
                                            children: "PAYMENTS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "heading mb-3",
                                            children: "A quick way to send your money faster"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "para-desc mx-auto text-muted",
                                            children: "Launch your start-up and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "btn btn-primary",
                                                    children: [
                                                        "Get Started ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "mdi mdi-chevron-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                    className: "justify-content-center mt-lg-4 mt-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: "6",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "bg-light p-4 py-5 rounded shadow d-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: master,
                                                        height: "60",
                                                        width: 96,
                                                        className: "text-right",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "",
                                                                children: "•••• •••• •••• 4559"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: "mb-0 float-right",
                                                                        children: [
                                                                            "Exp: ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-muted",
                                                                                children: "10/22"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "h6 text-muted mb-0",
                                                                        children: "Richard Rowe"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: "6",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "bg-dark p-4 py-5 rounded shadow d-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: visaa,
                                                        height: "60",
                                                        width: 101,
                                                        className: "text-right",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "text-light",
                                                                children: "•••• •••• •••• 9856"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: "mb-0 float-right text-muted",
                                                                        children: [
                                                                            "Exp: ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-muted",
                                                                                children: "01/24"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "h6 text-muted mb-0",
                                                                        children: "Joe Rowe"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: "6",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "bg-info p-4 py-5 rounded shadow d-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: rupay,
                                                        height: "60",
                                                        width: 108,
                                                        className: "text-right",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "text-white",
                                                                children: "•••• •••• •••• 5465"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: "mb-0 float-right text-light",
                                                                        children: [
                                                                            "Exp: ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-light",
                                                                                children: "03/23"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "h6 text-light mb-0",
                                                                        children: "Miriam Jockky"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                            md: "6",
                                            className: "mt-4 pt-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "bg-light p-4 py-5 rounded shadow d-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: paypals,
                                                        height: "60",
                                                        width: 150,
                                                        className: "text-right",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-4",
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
                                                                    className: "mt-4 pt-3 mb-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                name: "email",
                                                                                id: "email",
                                                                                type: "email",
                                                                                className: "form-control",
                                                                                placeholder: "Paypal Email :",
                                                                                required: true,
                                                                                "aria-describedby": "newssubscribebtn"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                                                addonType: "append",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                                                    onClick: this.handleSubmit,
                                                                                    className: "btn btn-primary submitBnt",
                                                                                    type: "submit",
                                                                                    id: "paypalmail",
                                                                                    children: "Send"
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
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
}
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./components/Shared/section-title.js
var section_title = __webpack_require__(9912);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/Payments/process-box.js





class ProcessBox extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: this.props.data.map((process, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: "3",
                    md: "6",
                    xs: "12",
                    className: "mt-4 pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-light p-3 py-5 rounded shadow",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: process.icon,
                                width: "45",
                                height: "45",
                                layout: "",
                                className: "avatar avatar-md-sm bb",
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "text-primary",
                                                children: [
                                                    " ",
                                                    process.title
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-muted mt-3 mb-0",
                                        children: process.desc
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

;// CONCATENATED MODULE: ./images/payments/payment/discover.jpg
/* harmony default export */ const discover = ({"src":"/_next/static/media/discover.8f6f5a23.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAK+F/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAEgMUkf/aAAgBAQABPwBtkMK47Jbgn//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAACB/9oACAEDAQE/AI//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/maestro.jpg
/* harmony default export */ const maestro = ({"src":"/_next/static/media/maestro.5ec3a810.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArIP/xAAeEAABAQkAAAAAAAAAAAAAAAABEgADBBEUIiUycf/aAAgBAQABPwDICNJW6pUapvn1v//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/paypal.jpg
/* harmony default export */ const paypal = ({"src":"/_next/static/media/paypal.7cd6a88a.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAbEAABBAMAAAAAAAAAAAAAAAATABESJDFBQv/aAAgBAQABPwCyfkUcbdf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/master-card.jpg
/* harmony default export */ const master_card = ({"src":"/_next/static/media/master-card.eec530c0.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALkFf//EABsQAAEEAwAAAAAAAAAAAAAAAAIAEhQyBCbS/9oACAEBAAE/ANyHPOkWYLaMju5X/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAgEBPwAJddb3/8QAGhEAAgIDAAAAAAAAAAAAAAAAARECIQASMf/aAAgBAwEBPwCUtlQCAFBcz//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/visa.jpg
/* harmony default export */ const visa = ({"src":"/_next/static/media/visa.ffd6d47d.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAL8UP//EAB4QAAAEBwAAAAAAAAAAAAAAAAACExQEEiYxQmOS/9oACAEBAAE/AKqLHZN3WpJCbqw//8QAGxEAAQQDAAAAAAAAAAAAAAAAEQABAgMSIkL/2gAIAQIBAT8AsszGkIhuWC//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/AArWf//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/american-express.jpg
/* harmony default export */ const american_express = ({"src":"/_next/static/media/american-express.6a02bb88.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKULP//EAB4QAAEBCQAAAAAAAAAAAAAAAAIAAQMREhMUISVj/9oACAEBAAE/AN7d5ExcVubQkiv/xAAaEQACAgMAAAAAAAAAAAAAAAABAgAREiJx/9oACAECAQE/AHfKtVHBP//EABcRAQADAAAAAAAAAAAAAAAAAAEAEUH/2gAIAQMBAT8ACtZ//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./images/payments/payment/seller-order.png
/* harmony default export */ const seller_order = ({"src":"/_next/static/media/seller-order.d63e7a21.png","height":539,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhUlEQVR42hXL3QnCMBAA4LvLmeiDYnUAl3AAJ/BNnFQ6hlBBEDKAtQiCNCa9/Nh+7x+cj6dqtz88H829/HrJzvn87V3p3p/2dm22nBgpDwnVXINZcBEBIFSISOglECujU44F2WhABNKaYcKkaLVeRu5ebaVy8NbaEIKXFCOMezaI+Lq+bP6N6z2p4fIglwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/icon/rupee.svg
/* harmony default export */ const rupee = ({"src":"/_next/static/media/rupee.32f4ade1.svg","height":483,"width":483});
;// CONCATENATED MODULE: ./images/icon/security.svg
/* harmony default export */ const security = ({"src":"/_next/static/media/security.08b69958.svg","height":620,"width":620});
;// CONCATENATED MODULE: ./images/icon/online-payment.svg
/* harmony default export */ const online_payment = ({"src":"/_next/static/media/online-payment.77ba971c.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./images/icon/payment.svg
/* harmony default export */ const payment = ({"src":"/_next/static/media/payment.02313a26.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./components/Payments/process.js





//Import Components


//Import Images











class Process extends external_react_.Component {
    state = {
        paymentMethods: [
            {
                method_id: 1,
                title: "Discover",
                id: "discover",
                icon: discover
            },
            {
                method_id: 2,
                title: "Maestro",
                id: "maestro",
                icon: maestro
            },
            {
                method_id: 3,
                title: "Paypal",
                id: "paypal",
                icon: paypal
            },
            {
                method_id: 4,
                title: "Master Card",
                id: "mastercard",
                icon: master_card
            },
            {
                method_id: 5,
                title: "Visa",
                id: "visa",
                icon: visa
            },
            {
                method_id: 6,
                title: "Amarican Express",
                id: "amaricanExpress",
                icon: american_express
            }, 
        ],
        process: [
            {
                id: 1,
                icon: rupee,
                title: "Low Fees",
                desc: "If the distribution of letters and 'words' is random, the reader will not be distracted."
            },
            {
                id: 2,
                icon: security,
                title: "Safe & Secure",
                desc: "For this reason, dummy text usually consists of a more or less random series of words."
            },
            {
                id: 3,
                icon: online_payment,
                title: "Amazing Support",
                desc: "This prevents repetitive patterns from impairing the overall visual impression."
            },
            {
                id: 4,
                icon: payment,
                title: "Convenient & Easy",
                desc: "It is advantageous when the dummy text is relatively realistic so that the layout."
            }, 
        ]
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section pb-0 border-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                xs: "12",
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title mb-4",
                                                children: "Easy payment processing for your business"
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
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: this.state.paymentMethods.map((paymentMethod, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: paymentMethod.icon,
                                                        width: 65,
                                                        height: 65,
                                                        className: "img-fluid avatar avatar-small mr-3 rounded-pill shadow",
                                                        id: paymentMethod.id,
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.UncontrolledTooltip, {
                                                        placement: "top",
                                                        target: paymentMethod.id,
                                                        children: paymentMethod.title
                                                    })
                                                ]
                                            }, key))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                                title: "Payments Great Features",
                                desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(process_box, {
                                    data: this.state.process
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        className: "mt-100 mt-60",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                                xs: "12",
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title mb-4",
                                                children: "Transection Between Buyers and Seller"
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
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: seller_order,
                                        width: "1000",
                                        height: "540",
                                        className: " img-fluid mx-auto d-block",
                                        style: {
                                            zIndex: "1"
                                        }
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
/* harmony default export */ const process = (Process);

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
;// CONCATENATED MODULE: ./components/Payments/review.js



//Import Components


//Import Images






class Review extends external_react_.Component {
    state = {
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
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                        title: "What customers say about us",
                        desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
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
            })
        });
    }
}
/* harmony default export */ const review = (Review);

;// CONCATENATED MODULE: ./components/Payments/pricing-and-payment.js




//Import Components

class PricingAndPayment extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
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
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                className: "mt-100 mt-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(section_title/* default */.Z, {
                        title: "Pricing & Add Payment Card",
                        desc: "that can provide everything you need to generate awareness, drive traffic, connect."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "5",
                                md: "6",
                                xs: "12",
                                className: "mt-4 pt-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rounded border bg-light shadow",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-primary p-4 text-center rounded-top",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-0 title-dark text-light",
                                                children: "Payment plan"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "d-flex justify-content-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price text-primary font-weight-bold display-4 mb-0",
                                                            children: "2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "h4 mb-0 mt-2 text-primary",
                                                            children: "%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2",
                                                            children: " Per Transection"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "feature list-inline",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "h5 font-weight-normal",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-check-decagram text-primary me-2"
                                                                }),
                                                                "Transparent payouts"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "h5 font-weight-normal",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-check-decagram text-primary me-2"
                                                                }),
                                                                "Deposit tagging"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "h5 font-weight-normal",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-check-decagram text-primary me-2"
                                                                }),
                                                                "Control payout timing"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "h5 font-weight-normal",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "mdi mdi-check-decagram text-primary me-2"
                                                                }),
                                                                "24\xd77 support"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "btn btn-primary btn-block mt-4 pt-2 w-100",
                                                        children: "Payment Now"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "7",
                                md: "6",
                                xs: "12",
                                className: "mt-4 pt-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rounded bg-white border shadow",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-light p-4 text-center rounded-top",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-0 text-primary",
                                                children: "Add a new card"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Alert, {
                                                    color: "info",
                                                    isOpen: this.state.successMsg,
                                                    toggle: ()=>{
                                                        this.setState({
                                                            successMsg: !this.state.successMsg
                                                        });
                                                    },
                                                    children: "Card Added successfully."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Form, {
                                                    onSubmit: this.handleSubmit,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                    md: "12",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                children: "Name of card holder : "
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                name: "name",
                                                                                id: "name",
                                                                                type: "text",
                                                                                className: "form-control font-weight-bold",
                                                                                required: true,
                                                                                placeholder: "Name"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                    md: "12",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                children: "Card Number :"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                type: "number",
                                                                                min: "0",
                                                                                autoComplete: "off",
                                                                                id: "cardnumber",
                                                                                className: "form-control font-weight-bold",
                                                                                required: true,
                                                                                placeholder: "0000 0000 0000 0000"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                    md: "6",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                children: "Expires End :"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                type: "number",
                                                                                min: "0",
                                                                                autoComplete: "off",
                                                                                id: "exdate",
                                                                                className: "form-control font-weight-bold",
                                                                                required: true,
                                                                                placeholder: "MM/YY"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                    md: "6",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.FormGroup, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Label, {
                                                                                children: "CVV :"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                                type: "number",
                                                                                min: "0",
                                                                                autoComplete: "off",
                                                                                id: "cvv",
                                                                                className: "form-control font-weight-bold",
                                                                                required: true,
                                                                                placeholder: "CVV"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                                                sm: "12",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "submit",
                                                                    id: "submit",
                                                                    name: "send",
                                                                    className: "submitBnt btn btn-primary",
                                                                    value: "Add Card"
                                                                })
                                                            })
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
                ]
            })
        });
    }
}
/* harmony default export */ const pricing_and_payment = (PricingAndPayment);

;// CONCATENATED MODULE: ./components/Payments/cta.js




class CTA extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            xs: "12",
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title mb-4",
                                            children: "Connect your business with more customers today"
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
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-detail mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "content mt-3 overflow-hidden d-block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                className: "text-muted",
                                                children: [
                                                    "Want to talk now ? ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "tel:+152534-468-854",
                                                        className: "text-primary h5",
                                                        children: "+152 534-468-854"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            target: "_blank",
                                            className: "btn btn-primary mt-3",
                                            children: [
                                                "Get Started ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "badge badge-danger rounded ml-2",
                                                    children: "v2.0"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
}
/* harmony default export */ const cta = (CTA);

;// CONCATENATED MODULE: ./pages/card-processing.js





//Render Components





class card_processing_payment extends external_react_.Component {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(process, {}),
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
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "section bg-light",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(review, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(pricing_and_payment, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cta, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const card_processing = (card_processing_payment);


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
var __webpack_exports__ = __webpack_require__.X(0, [3598,676,1664,5675,5152,2503,8854,4394,5857], () => (__webpack_exec__(3510)));
module.exports = __webpack_exports__;

})();