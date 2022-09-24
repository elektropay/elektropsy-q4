// React Basic and Bootstrap
import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container,Row, Col, FormGroup, Label } from 'reactstrap';

import StarRatings from 'react-star-ratings';

//Import components
import Section from "../components/Job/Section";
import Shape from "../components/Job/Shape";
import Categories from "../components/Job/Categories";
import FeaturedJobs from "../components/Job/featured-jobs";
import Candidates from "../components/Job/expert-candidates";
import Reviews from "../components/Job/reviews";
import Partners from "../components/Shared/Partners";
import Topbar from "../components/Layout/Topbar";
import Footer from "../components/Layout/Footer";

//Import Images
import full from "../images/job/full.jpg";
import circleci from "../images/job/Circleci.svg";
import Codepen from "../images/job/Codepen.svg";
import Discord from "../images/job/Discord.svg";
import Eslint from "../images/job/Eslint.svg";
import Gitlab from "../images/job/Gitlab.svg";
import Gradle from "../images/job/Gradle.svg";
import Mg from "../images/job/Mg.svg";
import Sketch from "../images/job/Sketch.svg";
import Twilio from "../images/job/Twilio.svg";
import Udemy from "../images/job/Udemy.svg";
import Webhooks from "../images/job/Webhooks.svg";



class Careers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Careers", link : "#" },
                { id : 3, name : "Jobs" },
            ],
            jobs : [
                { id : 1, image : full, title : "Web Designer", time : "Full Time", rating : 4, cmpImage : circleci, cmpName : "CircleCi", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 2, image : full, title : "Web Developer", time : "Full Time", rating : 5, cmpImage : Codepen, cmpName : "Codepen", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 3, image : full, title : "UX Designer", time : "Part Time", rating : 4, cmpImage : Discord, cmpName : "Discord", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 4, image : full, title : "UI Designer", time : "Full Time", rating : 3, cmpImage : Eslint, cmpName : "Eslint", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 5, image : full, title : "Back-End Developer", time : "Remote", rating : 4, cmpImage : Gitlab, cmpName : "Gitlab", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 6, image : full, title : "Photographer", time : "Part Time", rating : 5, cmpImage : Gradle, cmpName : "Gradle", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 7, image : full, title : "Mechanic", time : "Full Time", rating : 4, cmpImage : Mg, cmpName : "Mg", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 8, image : full, title : "Frontend Developer", time : "Part Timee", rating : 4, cmpImage : Sketch, cmpName : "Sketch", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 9, image : full, title : "Web Designer", time : "Remote", rating : 3, cmpImage : Twilio, cmpName : "Twilio", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 10, image : full, title : "Php Developer", time : "Part Time", rating : 4, cmpImage : Udemy, cmpName : "Udemy", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 11, image : full, title : "Web Designer", time : "Full Time", rating : 4, cmpImage : Webhooks, cmpName : "Webhooks", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
                { id : 12, image : full, title : "Python Developer", time : "Remote", rating : 5, cmpImage : circleci, cmpName : "CircleCi", location : "San Francisco", Experience : "2 Year", workingHrs : "6hr", field : "Information strategy" },
            ]
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
            <Topbar />
            <Section/>

{/* shape */}
<Shape/>
<section className="section">
                    {/* categories */}
                    <Categories/>

                    {/* featured jobs */}
                    <FeaturedJobs />                    
                    
                    {/* candidates */}
                    <Candidates />
                
                    {/* review */}
                    <Reviews />

                    {/* partners */}
                    <Container className="pt-5">
                        <Partners />
                    </Container>
                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}
export default Careers;
