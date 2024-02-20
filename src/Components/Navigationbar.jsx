import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import React from "react";

function Navigationbar(props) {
  return (
    <>
      <Navbar expand="lg" className="bg-dark text-white py-2 sticky-top">
        <Container fluid>
          <Navbar.Brand
            href="#"
            as={Link}
            to={"/"}
            className="ms-5 text-white fs-4"
          >
            {props.companyName}
            <GrTechnology />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 " navbarScroll>
              <Link
                to={"/"}
                className="active mx-2 mt-2 text-white fs-5 text-decoration-none"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="mx-2 text-white mt-2 fs-5 text-decoration-none"
              >
                About
              </Link>
              <Link
                to={"/service"}
                className="mx-2 text-white mt-2 fs-5 text-decoration-none"
              >
                Services
              </Link>
              <NavDropdown
                title={<span className="technology-title">Technology</span>}
                className="mx-2 fs-5"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to={"/page404"}
                  // href="#"
                  className="bg-dark text-white"
                >
                  FrontEnd
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to={"/page404"}
                  // href="#"
                  className="bg-dark text-white"
                >
                  BackEnd
                </NavDropdown.Item>
              </NavDropdown>
              <Link
                to={"/contact"}
                className="mx-2 mt-2 text-white fs-5 text-decoration-none"
              >
                Contact
              </Link>
            </Nav>
            <Form className="d-flex">
              <Link to={"/login"}>
                <Button variant="outline-light text-white mx-2">Log In</Button>
              </Link>
              <Link to={"/signup"}>
                <Button variant="outline-light text-white me-4">Sign Up</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
