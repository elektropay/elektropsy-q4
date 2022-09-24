import React, { Component } from 'react';
import Link from "next/link"
import Image from "next/image"
import { Col } from "reactstrap";

class CategoryBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.jobCategories.map((category, key) =>
                        <Col lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
                            <div className="catagories border rounded">
                                <Image src={category.image} className="img-fluid rounded-top" alt=""/>
                                <div className="bg-white rounded-bottom p-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="float-right h6 jobs">{category.jobs}</li>
                                        <li><a href={category.link} className="title h6 text-dark">{category.title}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    )
                }

            </React.Fragment>
        );
    }
}

export default CategoryBox;