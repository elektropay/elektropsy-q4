import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class CommentsBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-4 shadow rounded mt-4 pt-2">
          <h4 className="page-title pb-3">Comments :</h4>
          <ul className="media-list list-unstyled mb-0">
            {this.props.comments.map((comment, key) => (
              <li key={key} className="comment-desk mt-4">
                <Link href="/">
                  <a className="float-right text-muted">
                    <i className="mdi mdi-reply"></i>&nbsp; Reply
                  </a>
                </Link>
                <div className="commentor">
                  <Link href="/">
                    <a className="float-left pr-3">
                      <Image
                        src={comment.image}
                        className="img-fluid avatar avatar-md-sm rounded-pill shadow"
                        alt="img"
                      />
                    </a>
                  </Link>
                  <div className="overflow-hidden d-block">
                    <h4 className="media-heading mb-0">
                      <Link href="/">
                      <a  className="text-dark">{comment.name}</a>
                        
                      </Link>
                    </h4>
                    <small className="text-muted">
                      {comment.date} at {comment.time}
                    </small>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-muted font-italic p-3 bg-light rounded">
                 {comment.desc}
                  </p>
                </div>
                {comment.replies ? (
                  <ul className="pl-4 pl-md-5 list-unstyled sub-comment">
                    {comment.replies.map((reply, key) => (
                      <li key={key} className="comment-desk mt-4">
                        <Link href="/">
                          <a className="float-right text-muted">
                            <i className="mdi mdi-reply"></i>&nbsp; Reply
                          </a>
                        </Link>
                        <div className="commentor">
                          <Link href="/">
                            <a className="float-left pr-3">
                              <Image
                                src={reply.image}
                                className="img-fluid avatar avatar-md-sm rounded-pill shadow"
                                alt="img"
                              />
                            </a>
                          </Link>
                          <div className="overflow-hidden d-block">
                            <h4 className="media-heading mb-0">
                              <Link href="/">
                              <a  className="text-dark"> {reply.name}</a>
                               
                              </Link>
                            </h4>
                            <small className="text-muted">
                              {reply.date} at {reply.time}
                            </small>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted font-italic p-3 bg-light rounded">
                         {reply.desc} 
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentsBox;
