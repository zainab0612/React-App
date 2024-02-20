import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        
          <img
            className="d-block w-50 ms-3"
            src="src\assets\img\2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-text">
              Welcome to
              <br />  {props.companyName}
            </h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="src\assets\img\3.png"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1 className="carousel-text">
              Welcome to
              <br />  {props.companyName}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="src\assets\img\4.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 className="carousel-text">
              Welcome to
              <br />  {props.companyName}
            </h1>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
