import Head from "next/head";
import React, { Component } from "react";
import Section from "../components/Marketplace/section";
import Features from "../components/Marketplace/Features";
import Counter from "../components/Marketplace/Counter";
import Testimonial from "../components/Marketplace/Testimonial";
import Footer from "../components/Layout/Footer";
import Topbar from "../components/Layout/Topbar";
//Render Components

class payment extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("topnav")?.classList.add("bg-white");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav")?.classList.add("nav-sticky");
    } else {
      document.getElementById("topnav")?.classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <Topbar />
          {/* Hero Start */}
          <Section/>

              {/* Feature */}
              <Features />

{/* Counter */}
<Counter />
 {/* Testimonial */}
 <Testimonial />
          <Footer />
        </main>
      </div>
    );
  }
}

export default payment;