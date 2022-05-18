import React from "react";
import {
  Nav,
  Container,
  Navbar,
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
              width="120"
              height="100"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="fw-bold" as={Link} to="/">
                INICIO
              </Nav.Link>
              <Nav.Link className="fw-bold" as={Link} to="/categoria/tortas">
                TORTAS
              </Nav.Link>
              <Nav.Link className="fw-bold" as={Link} to="/categoria/tartas">
                TARTAS
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="fw-bold"
                to="/categoria/alfajores-macaron"
              >
                ALFAJORES Y MACARONES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
