import React, { Component } from 'react';
import Image from 'next/image';

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

class ReviewSlider2 extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 1,
            },
            650: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    }
    render() {
        return (
            <React.Fragment>
                                <OwlCarousel
                                    className="owl-theme"
                                    items={3}
                                    loop
                                    margin={1}
                                    responsive = { this.state.responsive }
                                    autoplay = {true}
                                >
                                    {
                                        this.props.clients.map((client, key) =>
                                            <div key={key} className="customer-testi p-3 text-center">
                                                <Image src={client.image} height={65} width={65} className="img-fluid avatar avatar-small rounded-pill mx-auto shadow" alt=""/>
                                                <p className="text-muted mt-4"> {client.desc}</p>
                                                <h6 className="text-primary">- {client.name}</h6>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ReviewSlider2;