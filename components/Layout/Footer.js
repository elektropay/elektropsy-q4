import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

// import CookiePolicy
// import CookiePolicyBanner from '@edx/frontend-component-cookie-policy-banner';

// import images
import logoWhite from "../../images/logo_white.png";
import pci from "../../images/pci_dss.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Card Processing", link: "/card-processing" },
        { title: "Omni Commerce", link: "/omni-commerce" },
        { title: "Crypto Processing", link: "/bitcoin-payments" },
        { title: "Real-Time Processing", link: "/real-time-payments" },
        { title: "Mobile Processing", link: "/mobile-payments" },
        { title: "ElektroPOS", link: "/elektropos" },
        { title: "Marketplace", link: "/marketplace" },
        { title: "SugarBiller", link: "/sugar-biller" },
        { title: "KardIssue", link: "/kard-issue" },
      ],
      grid2: [
        { title: "Payment Methods", link: "/payment-method" },
        { title: "InStore Payments", link: "/instore-payments" },
        { title: "Fraud Prevention", link: "/fraud-prevention" },
        { title: "Payouts", link: "/payouts" },
        { title: "Global Reach", link: "/global-reach" },
        { title: "Analytics Engine", link: "/analytics-engine" },
        { title: "Serverless Stack", link: "/serverless-stack" },
        { title: "Risk Management", link: "/risk-management" },
        { title: "Fees & Pricing", link: "/plans" },
      ],

      grid3: [
        { title: "Contact us", link: "/contact-us" },
        { title: "About us", link: "/about-us" },
        { title: "Our Team", link: "/our-team" },
        { title: "Careers", link: "/careers", isNowHiring: true },
        { title: "Partners", link: "/partners" },
      ],

      grid4: [
        { title: "Our Blog", link: "/blog" },
        { title: "Help & Support", link: "/support" },
        { title: "Sandbox API", link: "sandbox.elektropay.com" },
        { title: "Documentation", link: "docs.elektropay.com" },
        { title: "Developer Portal", link: "developers.elektropay.com" },
      ],

      grid5: [
        { title: "Privacy", link: "/privacy-policy" },
        { title: "Terms", link: "/terms" },
        { title: "GDPR", link: "/gbpr" },
        { title: "Security", link: "/security-policy" },
        { title: "Cookies", link: "/cookie-policy" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
      <section className="w-100">
        <footer className={this.props.isLight ? "footer bg-black" : "footer"}>
          <Container className="mt-20 mb-60">
            <div className="pt-3 pb-4 pe-4">
              <Row className="align-items-center">
                <Col sm="8">
                  <div className="text-sm-start">
                    <h1 className="mb-0 text-white">
                      Ready To start Accepting Payments?
                    </h1>
                  </div>
                </Col>

                <Col sm="4" className="mt-1 mt-sm-1">
                  <div className="text-sm-start">
                    <Link href="app.elektropay.com/signup">
                      <a className="btn btn-primary me-2">
                        Get Started <i className="mdi mdi-chevron-right"></i>{" "}
                      </a>
                    </Link>

                    <Link href="sandbox.elektropay.com">
                      
                      <a className="btn btn-secondary">
                        Try Sandbox <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2 pe-4"
                name="footercolumn"
              >
                <Link href="/">
                  <a
                    className={
                      this.props.isLight ? "logo-footer" : "logo-footer"
                    }
                  >
                    <Image src={logoWhite} className="" width="160" alt="" />
                  </a>
                </Link>
                <p
                  className={
                    this.props.isLight
                      ? "small mt-4 text-white"
                      : "mt-4 me-1 small"
                  }
                >
                  Elektropay is an Open Payments Platform that enables customers
                  to manage payments, transfer money, connect thier personal,
                  business and payment accounts
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item me-2">
                    <Link href="">
                      <a className="rounded">
                        <i className="mdi mdi-facebook" title="Facebook"></i>{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item me-2">
                    <Link href="">
                      <a className="rounded">
                        <i className="mdi mdi-linkedin" title="Linkedin"></i>{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item me-2">
                    <Link href="">
                      <a className="rounded">
                        <i className="mdi mdi-whatsapp" title="Whatsapp"></i>{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item me-2">
                    <Link href="">
                      <a className="rounded">
                        <i className="mdi mdi-twitter" title="Twitter"></i>{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item me-2">
                    <Link href="">
                      <a className="rounded">
                        <i className="mdi mdi-slack" title="Slack"></i>{" "}
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h4
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Platform
                </h4>
                <ul className="list-unstyled footer-list mt-4 small">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link href={grid.link}>
                        <a
                          className={
                            this.props.isLight ? "text-muted" : "text-foot"
                          }
                        >
                          {grid.title}{" "}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col
                lg="2"
                md="2"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h4
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Features
                </h4>
                <ul className="list-unstyled footer-list mt-4 small">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link href={grid.link}>
                        <a
                          className={
                            this.props.isLight ? "text-muted" : "text-foot"
                          }
                        >
                          {grid.title}{" "}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col
                lg="2"
                md="2"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h4
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h4>
                <ul className="list-unstyled footer-list mt-4 small">
                  {this.state.grid3.map((grid, key) => (
                    <li key={key}>
                      <Link href={grid.link}>
                        <a
                          className={
                            this.props.isLight ? "text-muted" : "text-foot"
                          }
                        >
                          {grid.title}{" "}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="2"
                md="2"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h4
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Resources
                </h4>
                <ul className="list-unstyled footer-list mt-4 small">
                  {this.state.grid4.map((grid, key) => (
                    <li key={key}>
                      <Link href={grid.link}>
                        <a
                          className={
                            this.props.isLight ? "text-muted" : "text-foot"
                          }
                        >
                          {grid.title}{" "}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col md="4" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="text-sm-start small">
                  <ul className="list-unstyled mb-0 small">
                    <li className="list-inline-item me-0 text-muted">
                      Elektropay is a service of EverPay. &copy; 2022
                      Elektropay.{" "}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="3" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled creditcard-icons text-sm-center mb-0">
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-discover"></i>
                  </li>
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-jcb"></i>
                  </li>
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-amex"></i>
                  </li>
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-stripe"></i>
                  </li>
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-apple-pay"></i>
                  </li>
                  <li className="list-inline-item me-1">
                    <i className="fab fa-cc-amazon-pay"></i>
                  </li>
                  <li className="list-inline-item me-0">
                    <Image src={pci} alt="" />
                  </li>
                </ul>
              </Col>

              <Col md="5" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled copyright-list text-sm-right mb-0">
                  {this.state.grid5.map((grid, key) => (
                    <li key={key} className="list-inline-item small me-2">
                      <Link href={grid.link}>
                        <a
                          className={
                            this.props.isLight
                              ? "text-copyright"
                              : "text-muted small"
                          }
                        >
                          {grid.title}{" "}
                        </a>
                      </Link>
                    </li>
                  ))}
                  <li className="list-inline-item small ms-1">
                    <Link href="elektropay.freshstatus.io">
                      <a className="text-muted small">
                        {" "}
                        Status <i className="fas fa-circle text-success"></i>
                      </a>
                    </Link>{" "}
                    <span className="xx-small text-white pb1">
                      {" "}
                      Operational
                    </span>{" "}
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
        </section>
        {/* <CookiePolicyBanner /> */}
      </React.Fragment>
    );
  }
}

export default Footer;
