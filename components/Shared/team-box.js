import React, { Component } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.candidates.map((candidate, key) =>
                        <Col lg="3" md="6" key={key} className="mt-4 pt-2">
                            <div className="team text-center rounded bg-white pt-3" name="team" id="teambox">
                                <div className="position-relative">
                                    <Image src={candidate.image} className="img-fluid avatar avatar-ex-large rounded-pill shadow" width={180} height={180} alt=""/>
                                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                        {
                                            candidate.socialIds.map((id, key) =>
                                                <li key={key} className="list-inline-item me-1"><Link href={id.link} ><a className="rounded"><i className={"mdi " + id.icon}></i></a></Link></li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="content pt-3 pb-3">
                                    <h5 className="mb-0"><Link href={candidate.link} ><a className="name text-dark">{candidate.name}</a></Link></h5>
                                    <small className="designation text-muted">{candidate.designation}</small>
                                </div>
                            </div>
                        </Col>
                    )
                }          
            </React.Fragment>
        );
    }
}

export default TeamBox;