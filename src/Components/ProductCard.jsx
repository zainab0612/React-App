import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { Col , Card, Image } from "react-bootstrap";

function ProductCard() {
  const [images, setImages] = useState([]);

  function getImages() {
    // console.log("first")
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=9")
      .then((json) => setImages(json.data));

  }
  images.forEach((img, index) => {
    img.title = `Image ${index + 1}`;
});

  useEffect(() => {
    
    return getImages();
  }, []);
  

  return (
    <>
      {images.map((img) => (
        <Col className="col-md-4 col-sm-6" key={img.id}>
          <Card className="card mt-3">
            <div>
              <Image src={img.url} style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{img.title}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                iure officia sequi cumque laudantium ducimus consequuntur eligendi
                repellendus reiciendis praesentium natus corporis itaque, voluptas
                autem cum maxime modi libero. Blanditiis.
              </p>
              <a href="#" className="btn btn-dark">
                Select
              </a>
            </div>
          </Card>
        </Col>))
      }
    </>
  )
}

export default ProductCard;
