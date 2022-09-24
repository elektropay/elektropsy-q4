import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link'

class BlockContainer extends Component {
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        <div className="p-4 rounded bg-light shadow">
                            <Row className="align-items-center">
                                <Col sm="7">
                                    <div className="text-sm-start">
                                        <h5 className="mb-0">Start building beautiful block-based websites.</h5>
                                    </div>
                                </Col>
            
                                <Col sm="5" className="mt-4 mt-sm-0">
                                    <div className="text-sm-right">
                                        <Link href="/"><a className="btn btn-outline-primary"><i className="mdi mdi-file-document-outline"></i> Start Now </a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
            </React.Fragment>
        );
    }
}

export default BlockContainer;