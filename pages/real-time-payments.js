import Head from "next/head";
import React, { Component } from "react";
import Feature from "../components/Apps/Feature";
import Section from "../components/Apps/Section";
import Pricing from "../components/Apps/Pricing";
import Testi from "../components/Apps/Testi";
import ShowCase from "../components/Apps/ShowCase";
import Footer from "../components/Layout/Footer";
import Topbar from "../components/Layout/Topbar";
//Render Components

class payment extends Component {

  render() {
    return (
      <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <Topbar />
          <Section/>
          <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                {/* Feature */}
                <Feature />
                <ShowCase />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                 {/* Pricing */}
                 <Pricing />

                 <Testi />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-footer">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default payment;
