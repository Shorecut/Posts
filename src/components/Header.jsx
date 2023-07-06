import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="">
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              width={60}
              src="https://freesvg.org/img/airplane-goofy.png"
              alt="navbar"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
            <Nav.Link onClick={() => navigate("/aboutUs")}>About us</Nav.Link>
            <Nav.Link onClick={() => navigate("/selected")}>Selected</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
