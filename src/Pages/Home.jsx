import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/context";
import {
  Navigationbar,
  ControlledCarousel,
  Categories,
  Counter,
  ProductSection,
  ContactSection,
  Footer,
} from "../Components";

function Home() {

  const user = useContext(GlobalContext);
  // console.log(user);

  useEffect(() => {
    alert(`Salam ${user.name}`);
  }, [user.name]);
  return (
    <>
      <Navigationbar companyName="A2ZTechverse" />
      <ControlledCarousel companyName="A2ZTechverse" />
      <Categories sectionTitle="Categories"/>
      <Counter sectionTitle="Counter" />
      <ProductSection sectionTitle="Our Skills" />
      <ContactSection sectionTitle="FeedBack" />
      <Footer
        sectionTitle1="Follow Us"
        sectionTitle2="Quick Links"
        sectionTitle3="Contact Info"
      />
    </>
  );
}

export default Home;
