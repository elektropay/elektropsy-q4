import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

class BlogBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog, key) => (
          <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
            <div className="blog position-relative overflow-hidden shadow rounded">
              <div className="position-relative">
                <Image
                  src={blog.image}
                  layout="responsive"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="overlay rounded-top bg-dark"></div>
              </div>
              <div className="content p-4">
                <h4>
                  <Link href="/">
                    <a className="title text-dark">{blog.title}</a>
                  </Link>
                </h4>
                <div className="d-flex justify-content-between mt-3">
                 
                  <ul className="list-unstyled mb-0">
                    <li className="list-inline-item me-2">
                      <Link href="/">
                        <a className="text-muted like">
                          <i className="mdi mdi-heart-outline me-1"></i>
                          {blog.like}
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/">
                        <a className="text-muted comments">
                          <i className="mdi mdi-comment-outline me-1"></i>
                          {blog.comment}
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/">
                    <a className="text-muted float-right readmore">
                      Read More <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="author">
                <small className="text-light user d-block">
                  <i className="mdi mdi-account"></i> {blog.autor}
                </small>
                <small className="text-light date">
                  <i className="mdi mdi-calendar-check"></i> {blog.date}
                </small>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default BlogBox;
