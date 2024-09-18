import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
 import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Whatsapp from "../components/Elements/Whatsapp";
import Faq from "../components/Sections/Faq";
import TestimonialSlider from './../components/Elements/TestimonialSlider';

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
       {/* <Pricing /> */}
      <Contact />
      <Faq/>
       <Whatsapp/>
      <Footer />
    </>
  );
}