import React from "react";
import { Navigationbar, Footer, ServiceSection } from "../Components";

function Service() {
  return (
    <>
      <Navigationbar companyName="A2ZTechverse" />
      <ServiceSection sectionTitle="Our Services" />
    
      <Footer
        sectionTitle1="Follow Us"
        sectionTitle2="Quick Links"
        sectionTitle3="Contact Info"
      />
    </>
  );
}

export default Service;
