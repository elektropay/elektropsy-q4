import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Col } from "reactstrap";

class FeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.features.map((feature, key) =>
                        <Col md="4" xs="12" key={key} className="mt-5 pt-md-3">
                            <div className="features text-center">
                                <div className="image position-relative d-inline-block">
                                    <Image src={feature.icon} width={65} height={65} className="avatar avatar-small" alt=""/>
                                </div>

                                <div className="content mt-4">
                                    <h4 className="title-2">{feature.title}</h4>
                                    <p className="text-muted">{feature.desc}</p>
                                    <Link href={feature.link} ><a className="text-primary">Learn More <i className="mdi mdi-chevron-right"></i></a></Link>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default FeatureBox;