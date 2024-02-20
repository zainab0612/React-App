import React from "react";
import { ProductCard } from "../Components";

function ServiceSection(props) {
  return (
    <>
      <div className="h1 text-center my-4" id="service">{props.sectionTitle}</div>
      <div className="container my-4">
        <div className="row">
          <ProductCard serviceTitle ="Web Development" />
          {/* <ProductCard serviceName="Graphics Designing" />
          <ProductCard serviceName="Logo Design" />
          <ProductCard serviceName="Animation" />
          <ProductCard serviceName="Digital Marketing" />
          <ProductCard serviceName="SEO"  />
          <ProductCard serviceName="Mobile Apps" />
          <ProductCard serviceName="Android Apps" />
          <ProductCard serviceName="IOS Apps" /> */}
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
