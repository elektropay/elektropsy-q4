import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
//Import Images
import img1 from "../../images/client/amazon.svg";
import img2 from "../../images/client/google.svg";
import img3 from "../../images/client/lenovo.svg";
import img4 from "../../images/client/paypal.svg";
import img5 from "../../images/client/shopify.svg";
import img6 from "../../images/client/spotify.svg";

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="pt-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="2" md="2" xs="6" className="text-center">
                                <Image src={img1} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col lg="2" md="2" xs="6" className="text-center">
                                <Image src={img2} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            
                            <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <Image src={img3} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            
                            <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <Image src={img4} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            
                            <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <Image src={img5} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            
                            <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <Image src={img6} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Partners;