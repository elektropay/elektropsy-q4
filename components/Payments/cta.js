import React, { Component } from 'react';
import Link from 'next/link'
import { Container,Row, Col } from "reactstrap";

class CTA extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                            <div className="section-title">
                                <h4 className="title mb-4">Connect your business with more customers today</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>

                                <div className="contact-detail mt-5">
                                    <div className="content mt-3 overflow-hidden d-block">
                                        <h5 className="text-muted">Want to talk now ? <a href="tel:+152534-468-854" className="text-primary h5">+152 534-468-854</a></h5>
                                    </div>  
                                    <a href='#' target="_blank" className="btn btn-primary mt-3">Get Started <span className="badge badge-danger rounded ml-2">v2.0</span></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default CTA;