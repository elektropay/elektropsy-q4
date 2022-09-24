import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Topbar from "../components/Layout/Topbar";
import styles from "../styles/Home.module.css";
import BlockContainer from "./Software/block-container";
import Section from "./Software/section";
import Partners from "./Software/Partners";
import WebsiteDescription from "./Software/website-description";
import FeatureDescription from "./Software/feature-description";

import user from "../images/icon/user.svg";
import calendar from "../images/icon/calendar.svg";
import sandclock from "../images/icon/sand-clock.svg";
import app1 from "../images/app/1.png";
import app2 from "../images/app/2.png";
import client1 from "../images/client/01.jpg";
import client2 from "../images/client/02.jpg";
import client3 from "../images/client/03.jpg";
import client4 from "../images/client/04.jpg";
import client5 from "../images/client/05.jpg";
import client6 from "../images/client/06.jpg";
import Footer from "../components/Layout/Footer";

export default function Home() {
  const state = {
    testimonials: [
      {
        id: 1,
        name: "Thomas Israel",
        image: client1,
        desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      },
      {
        id: 2,
        name: "Carl Oliver",
        image: client2,
        desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 3,
        name: "Barbara McIntosh",
        image: client3,
        desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      },
      {
        id: 4,
        name: "Jill Webb",
        image: client4,
        desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
      },
      {
        id: 5,
        name: "Dean Tolle",
        image: client5,
        desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
      },
      {
        id: 6,
        name: "Christa Smith",
        image: client6,
        desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
      },
    ],
    features: [
      {
        imgUrl: user,
        title: "Easy To Use",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
      },
      {
        imgUrl: calendar,
        title: "Daily Reports",
        description:
          "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word",
      },
      {
        imgUrl: sandclock,
        title: "Real Time Zone",
        description:
          "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
      },
    ],
    facilities: [
      {
        icon: "mdi-security",
        title: "Fully Secured",
        desc: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
      },
      {
        icon: "mdi-clock-check-outline",
        title: "Best Performance",
        desc: "Moreover, in Latin only words at the beginning of sentences are capitalized.",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Elektropay | Open Commerce Platform</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" /> */}
      </Head>

      <main className={styles.main}>
        <Topbar />
        <Section />
        <Container>
          {/* render partner */}
          <Partners />
        </Container>
        <WebsiteDescription />
        <BlockContainer />
        <section className="pt-5 mb-60">
          <FeatureDescription
            image1={app1}
            image2={app2}
            testimonials={state.testimonials}
            facilities={state.facilities}
          />
        </section>
        <Footer />
      </main>
    </div>
  );
}
