import React from "react";

import './MainContent.css'
import AboutUs from "../About-us/AbousUs";
import Slider from "../slider/Slider";
import Adversting from "../Adversting-section/Adversting";
import Services from "../services/Services";
import Action from "../call-to-action/Action";
import Portfolio from "../portfolito/Portfolio";
import DescribeCompany from "../DescribeCompany/DescribeCompany";
import TeamIntro from "../TeamIntro/TeamIntro";
import TeamMembers from "../TeamMembers/TeamMembers";
import Contact from "../Contact/Contact";

export default function MainContent() {
  return (
    <main className="main">
        <div className="container">
        <AboutUs/>
        <div className="row slider-wrapper">
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
        </div>
        <Adversting/>
        <Services/>
        </div>
        <Action/>
        <Portfolio/>
        <DescribeCompany/>
        <TeamIntro/>
        <TeamMembers/>
        <Contact/>
    </main>
  );
}
