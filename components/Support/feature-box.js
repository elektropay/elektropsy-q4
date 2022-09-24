import React, { Component } from 'react';
import Image from 'next/image';
import { Col } from "reactstrap";


class FeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.features.map((feature, key) =>
                        <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
                            <div className="catagories text-center p-4 rounded" data-aos="fade-up" data-aos-duration="1000">
<div className="mb-3">
<Image src={feature.image} width={65} height={65} className="avatar avatar-small " alt=""/>

</div>
                                <h5><a href={feature.link} className="text-dark">{feature.title}</a></h5>
                                <p className="text-muted mb-0 mt-3">{feature.desc}</p>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default FeatureBox;