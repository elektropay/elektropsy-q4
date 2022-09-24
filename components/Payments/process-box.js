import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col } from "react-bootstrap";

class ProcessBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((process, key) =>
                        <Col lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
                            <div className="bg-light p-3 py-5 rounded shadow">
                                <Image src={process.icon} width="45" height="45" layout="" className="avatar avatar-md-sm bb" alt=""/>
                                <div className="mt-4">
                                    <h5><Link href=""><a  className="text-primary"> {process.title}</a></Link></h5>
                                    <p className="text-muted mt-3 mb-0">{process.desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ProcessBox;