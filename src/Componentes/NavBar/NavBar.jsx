import React from "react";
import {
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="py-3 shadow-fm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="logo"
              src="https://res.cloudinary.com/dpwek7uw8/image/upload/v1651965717/Paste/Sin_t%C3%ADtulo_zyvp6g.png"
              width="100"
              height="90"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" >
                INICIO
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/tortas" >
                TORTAS
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/tartas" >
                TARTAS
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/alfajores-macaron" >
                ALFAJORES Y MACARONES
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="buscar"
                placeholder="Buscar"
                className="me-2"
                aria-label="buscar"
              />
              <Button variant="outline-dark ms-2">Buscar</Button>
            </Form>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
