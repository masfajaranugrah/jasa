import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
 
  
import Footer from "../components/Sections/Footer"
import Whatsapp from "../components/Elements/Whatsapp";
 import AboutUs from "../components/Sections/AboutUs";

export default function About() {
  return (
    <>
      <TopNavbar />
    
      <AboutUs/>
        <Whatsapp/>
      <Footer />
    </>
  );
}