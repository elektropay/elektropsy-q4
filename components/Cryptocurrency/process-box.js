import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Col } from "reactstrap";

class ProcessBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((process, key) =>
                        <Col md="3" xs="12" key={key} className="mt-4 pt-2">
                            <div className="text-center">
                                <div className="rounded p-4 shadow">
                                    <Link href={process.link}><Image src={process.icon} height="100" width="122" className="mx-auto d-block" alt=""/></Link>
                                </div>
        
                                <div className="mt-3">
                                    <h5><Link href={process.link} ><a className="text-primary">{process.title}</a></Link></h5>
                                    <p className="text-muted mb-0">{process.desc}</p>
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