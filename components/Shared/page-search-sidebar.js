import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Col, Form, Input } from "react-bootstrap";


class PageSearchSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                    <Col lg="4" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="sidebar p-4 rounded shadow">
                            
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Search</h4>
                                <div id="search2" className="widget-search mt-4 mb-0">
                                    <Form role="search" method="get" id="searchform" className="searchform">
                                        <div>
                                            <Input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                                            <Input type="submit" id="searchsubmit" value="Search"/>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                           
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Catagories</h4>
                                <ul className="list-unstyled mt-4 mb-0 blog-catagories">
                                    <li><Link href="/">Finance</Link> <span className="float-right">13</span></li>
                                    <li><Link href="/">Business</Link> <span className="float-right">09</span></li>
                                    <li><Link href="/">Blog</Link> <span className="float-right">18</span></li>
                                    <li><Link href="/">Corporate</Link> <span className="float-right">20</span></li>
                                    <li><Link href="/">Investment</Link> <span className="float-right">22</span></li>
                                </ul>
                            </div>
                           
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Recent Post</h4>
                                <div className="mt-4">
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link href="/"> <Image alt="img" src={this.props.blog07} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link href="/">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link href="/"> <Image alt="img" src={this.props.blog08} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link href="/">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link href="/"> <Image alt="img" src={this.props.blog01} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link href="/">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Tags Cloud</h4>
                                <div className="tagcloud mt-4">
                                    <Link href="/"><a className='rounded'>Business</a></Link>
                                    <Link href="/"><a className='rounded'>Finance</a></Link>
                                    <Link href="/"><a className='rounded'>Marketing</a></Link>
                                    <Link href="/"><a className='rounded'>Fashion</a></Link>
                                    <Link href="/"><a className='rounded'>Bride</a></Link>
                                    <Link href="/"><a className='rounded'>Lifestyle</a></Link>
                                    <Link href="/"><a className='rounded'>Travel</a></Link>
                                    <Link href="/"><a className='rounded'>Beauty</a></Link>
                                    <Link href="/"><a className='rounded'>Video</a></Link>
                                    <Link href="/"><a className='rounded'>Audio</a></Link>
                                </div>
                            </div>
                           
                            <div className="widget">
                                <h4 className="widget-title">Follow us</h4>
                                <ul className="list-unstyled social-icon mt-4 mb-0">
                                    <li className="list-inline-item ml-1"><Link href="/"><a className='rounded'><i className="mdi mdi-facebook"></i></a></Link></li>
                                    <li className="list-inline-item ml-1"><Link href="/"><a className='rounded'><i className="mdi mdi-instagram"></i></a></Link></li>
                                    <li className="list-inline-item ml-1"><Link href="/"><a className='rounded'><i className="mdi mdi-twitter"></i></a></Link></li>
                                    <li className="list-inline-item ml-1"><Link href="/"><a className='rounded'><i className="mdi mdi-vimeo"></i></a></Link></li>
                                    <li className="list-inline-item ml-1"><Link href="/"><a className='rounded'><i className="mdi mdi-dribbble"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
            </React.Fragment>
        );
    }
}

export default PageSearchSidebar;