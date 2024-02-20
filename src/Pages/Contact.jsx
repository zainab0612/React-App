import React from "react";
import { Navigationbar, Footer, ContactForm } from "../Components";

function Contact() {
  return (
    <>
      <Navigationbar companyName="A2ZTechverse" />
      <ContactForm sectionTitle="Contact Us" />
      <Footer
        sectionTitle1="Follow Us"
        sectionTitle2="Quick Links"
        sectionTitle3="Contact Info"
      />
    </>
  );
}

export default Contact;
