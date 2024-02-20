import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AboutSection(props) {
  return (
    <Container className="my-5">
      <Row>
        <div className="col-md-6">
          <img src="src\assets\img\1.jpg" alt="About Us" />
          
        </div>
        <div className="col-md-6">
          <div className="h1 text-center my-4">{props.sectionTitle}</div>
          <div className="p text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iusto possimus nisi assumenda sunt amet neque blanditiis harum? Officiis repellat, ipsum debitis quam hic quo in vitae sunt corporis non culpa optio, cupiditate ab adipisci officia tenetur ducimus eligendi. Assumenda illum dignissimos repudiandae praesentium rem ipsum aperiam architecto temporibus sunt quasi ad incidunt eos omnis alias, error ea explicabo iste similique voluptatum laudantium corrupti quas? Error, quasi recusandae, vero nihil vel itaque dolorem architecto fuga doloremque consectetur illum obcaecati sit maxime magnam unde pariatur veritatis nam rerum iure perferendis dolorum rem eius. Dolore obcaecati doloremque ratione, pariatur quo quis voluptates.</div>
        </div>
      </Row>
    </Container>
  );
}

export default AboutSection;
