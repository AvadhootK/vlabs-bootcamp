import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import plogo2 from "../assets/plogo2.png";
import college from "../assets/college.png";
// import pvgcolorlogo from "../assets/pvgcolorlogo.jpg";
// import NavDropdown from "react-bootstrap/NavDropdown";

function navbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ fontSize: "17px" }}
      sticky="top"
      className="navbarscrl"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand href="/">
            <img src={college} width={400} alt="vlabs" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <Link to="/home" className="navlink">
              <Nav.Link href="home">Home</Nav.Link>
            </Link>
            <Link to="/about" className="navlink">
              <Nav.Link href="about">About</Nav.Link>
            </Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link to="/qualifyingtask" className="navlink">
              <Nav.Link href="qualifyingtask">QualifyingTask</Nav.Link>
            </Link>
            <Link to="/participants" className="navlink">
              <Nav.Link href="participants">Selected Participants</Nav.Link>
            </Link>
            <Link to="/faqs" className="navlink">
              <Nav.Link href="faqs">FAQs</Nav.Link>
            </Link>
            <Link to="/resources" className="navlink">
              <Nav.Link href="resources">Resources</Nav.Link>
            </Link>
            <Link to="/photogallery" className="navlink">
              <Nav.Link href="resources">Photo Gallery</Nav.Link>
            </Link>
            <Link to="/contact" className="navlink">
              <Nav.Link href="contact">Contact Us</Nav.Link>
            </Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
