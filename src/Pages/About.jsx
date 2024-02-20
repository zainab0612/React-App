import React from 'react'
import { Navigationbar, Footer, AboutSection } from "../Components";

export default function About() {
    return (
        <>
        <Navigationbar companyName="A2ZTechverse" />
        <AboutSection sectionTitle="About Us"/>
      <Footer sectionTitle1="Follow Us" sectionTitle2="Quick Links" sectionTitle3="Contact Info" />
      </>
    
  )
}
