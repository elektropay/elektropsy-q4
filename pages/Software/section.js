import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
//Import Images
import classic02 from "../../images/saas/classic02.png";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-white d-table w-100">
                    <Container>
                        <Row className="align-items-center position-relative mt-3" style={{zIndex: "1"}}>
                            <Col lg="6" md="12">
                                <div className="title-heading mt-4 text-center text-lg-start">
                                    <h1 className="heading mb-3 text-dark text-hero">Monetize All Your Commerce Channels</h1>
                                    <p className="lead text-muted">Elektropay is a commerce as service management platform that delivers innovative payment solutions for start-ups and enterprise businesses alike.</p>
                                    <div className="mt-4">
                                         <a href="" className="btn btn-light mt-2 me-2 mouse-down"> Request A Demo</a>
                                      
  <a href="" className="btn btn-outline-primary mt-1 mr-2 mouse-down"><i className="mdi mdi-download"></i> Get Started</a>
                                     
                                             </div>
                                </div>
                            </Col>

                            <Col lg="6" md="12" className="mt-4 pt-2">
                                <div className="position-relative">
                                    <div className="ms-3">
                                      <div className="saas-feature-shape-right position-relative">
                                        <Image src={classic02} className="img-fluid d-block" alt=""/>
                                      </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
