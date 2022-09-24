// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'

// Import images
import img2 from '../../images/2.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'

class Cta extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-cta" style={{ background: `url(${img2.src}) center center` }} id="cta">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                                    <p className="text-light para-dark para-desc mx-auto">Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                   
                                    <a href='#' onClick={this.openModal}  className="play-btn border border-light mt-2 video-play-icon">
                                        <i className="mdi mdi-play title-dark text-white"></i>
                                        </a>
                                 
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Cta;