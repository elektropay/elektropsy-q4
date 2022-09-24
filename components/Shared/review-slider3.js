import React, { Component } from 'react';
//Star Rating
import StarRatings from 'react-star-ratings';
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

class ReviewSlider3 extends Component {

    
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
                                    items={this.props.items}
                                    loop
                                    margin={1}
                                    responsive = { this.props.items !== 1 ? this.state.responsive : null }
                                    autoplay = {true}
                                >
                                    {
                                        this.props.clients.map((client, key) =>
                                            <div key={key} className={ this.props.isBgWhite ? "customer-testi m-2 bg-white text-center p-5  rounded shadow" : "customer-testi text-center"}>
                                                <p className="text-muted h6 font-italic">{client.desc}</p>
                                                <div className='text-center mt-3'>
                                                <Image src={client.image} width={65} height={65} layout="intrinsic" className={this.props.isBgWhite ? "d-block img-fluid avatar avatar-small  rounded-pill mx-auto shadow" : "img-fluid avatar avatar-small rounded-pill mx-auto shadow"} alt=""/>
                                                </div>
                                                <div className='text-center'>
                                                <StarRatings
                                                    rating={client.rating}
                                                    starRatedColor="#F17425"
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension = "15px"
                                                    starSpacing="5px"
                                                    className="list-unstyled mb-0 mt-3"
                                                />
                                                <h6 className="text-primary mt-1">- {client.name}<small className="text-muted ml-1">{client.post}</small></h6>
                                                </div>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ReviewSlider3;