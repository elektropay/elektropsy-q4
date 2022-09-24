import React, { Component } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import homeImage from "../../images/app/home.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={6} md={7} >
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Manage all of you stuff using <span className="text-primary">Elektropay.</span> app</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4">
                                            <Link href="/" ><a className="btn btn-primary mt-2 me-2"><i className="mdi mdi-apple"></i> App Store</a></Link>
                                        <Link href="/" ><a className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</a></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div className="text-md-right text-center">
                                        <Image src={homeImage} className="img-fluid" alt="" />
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