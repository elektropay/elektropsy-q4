import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Image from 'next/image'
import CountUp from 'react-countup';

class Counter2 extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.counters.map((counter, key) =>
                            <Col md="3" xs="6" key={key} className="mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <Image src={counter.image} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value"> <CountUp start={counter.start} end={counter.value} duration={12} /></span>{counter.postfix}</h2>
                                    <h5 className="counter-head text-muted">{counter.title}</h5>
                                </div>
                            </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default Counter2;