// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';   
import Image from 'next/image'

//Import Components
import SectionTitle from "../Shared/section-title";
import KeyFeatureBox from "../Shared/key-feature-box";

// Import images
import drone from '../../images/single/drone.gif';
import bg02 from '../../images/single/bg02.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'


class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyfeatures : [
                { icon : "mdi-camera-outline", title : "48mp Camera" },
                { icon : "mdi-wifi", title : "Faster Connection" },
                { icon : "mdi-cryengine", title : "Easy to Operate" },
                { icon : "mdi-video-outline", title : "Stable Video" },
                { icon : "mdi-antenna", title : "Powerful Antenna" },
                { icon : "mdi-battery-10", title : "Battery Backup" },
                { icon : "mdi-memory", title : "Advance Technology" },
                { icon : "mdi-fan", title : "Easy Disassembly" },
                { icon : "mdi-android-studio", title : "Rebust Structure" },
            ],
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }


    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <Col xs="12" className="text-center">
                                <Image src={drone} className="img-fluid" alt="" />
                            </Col>
                        </Row>

                        {/* section title */}
                        <SectionTitle title="Awesome Features" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* key feature */}
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col md="7">
                                <div className="position-relative">
                                    <Image src={bg02} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <a  onClick={this.openModal} href="/" className="play-btn shadow video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='287684225' onClose={() => this.setState({isOpen: false})} />
                                        
            </React.Fragment>
        );
    }
}

export default Description;
