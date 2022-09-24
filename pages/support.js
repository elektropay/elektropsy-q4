import Head from "next/head";
import React, { Component } from "react";
import Section from "../components/Support/section";
import Features from "../components/Support/features";
import Support from "../components/Support/support";
import Reviews from "../components/Support/reviews";
import Ticket from "../components/Support/ticket";
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
          <Section/> 
          <section className="section">
                    {/* fratures */}
                    <Features/>

                    {/* support */}
                    <Support />

                    {/* Review */ }
                    <Reviews/>

                    {/* ticket */}
                    <Ticket/>
                </section>    
          <Footer />
        </main>
      </div>
    );
  }
}

export default payment;