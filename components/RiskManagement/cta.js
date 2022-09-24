import React, { Component } from 'react';
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from 'react-countup';

// Modal Video 
import ModalVideo from 'react-modal-video'

class CTA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }   
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <Container className="pt-4 mt-100 mt-60">
                    <Row className="justify-content-center" id="counter">
                        <Col xs="12" className="text-center">
                            <div className="section-title">
                                <h4 className="title mb-4">Overall <span className="text-primary"><span className="counter-value"><CountUp end={333} delay={5} /></span>k+</span> client are using, Get Started</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the worlds most popular front-end component library.</p>
                            
                                <div className="watch-video mt-4">
                                    <Link href="/" ><a className="btn btn-primary mb-2 mr-2">Get Started <i className="mdi mdi-chevron-right"></i></a></Link>
                                    <Link href="/"  ><a onClick={this.openModal} className="video-play-icon watch title-dark text-dark mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white title-dark position-relative play play-iconbar"></i> WATCH VIDEO</a></Link>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='99025203' onClose={() => this.setState({ isOpen: false })} />
                </Container>
            </React.Fragment>
        );
    }
}

export default CTA;