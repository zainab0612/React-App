import React from "react";
import { ProductCard } from "../Components";

function ProductSection(props) {
  return (
    <>
      <a href="/service#service" className="text-decoration-none text-dark"><div className="h1 text-center my-4 ">{props.sectionTitle}</div></a>
      <div className="container">
        <div className="row">
          <ProductCard serviceName="Web Development" cardImage="src\assets\img\web.png" />
          {/* <ProductCard serviceName="Graphics Designing" cardImage="src\assets\img\web.png"/>
          <ProductCard serviceName="Logo Design" cardImage="src\assets\img\web.png"/> */}
        </div>
      </div>
    </>
  );
}

export default ProductSection;
