import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Image, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";


import logo from "./../../img/logo.png";

const TopNavbar = () => {
  return (
    <Container className="">
      <Row>
        <Col lg={4}>
          <div className="topnav__left">
            <FaPhoneAlt className="mx-3" />
            <div className="phoneNumber">
              <a href="tel:#">+225 27 22 49 86 05</a>
              <a href="tel:#">+225 05 64 34 59 82</a>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="topnav__center">
            <Link to="/">
              <Image width="300" src={logo} fluid />
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="topnav__right">
            <FaMapMarkerAlt className="mx-3" />
            <div className="adress">
              <p>Cocody Angré: Boulevard Latrille, Villa N°964</p>
              <p>carrefour Adama Sanogo à 150 m</p>
              <p>Accès facile: bus 81, 82, 90, 205, 719</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};



const NavBarBottom = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Navbar.Toggle
        className="navbar__toggler"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navigation mx-auto">
          <Link className="nav__link nav-link" to="/">
            Home
          </Link>
          <Link className="nav__link nav-link" to="about">
            About
          </Link>
          <Link className="nav__link nav-link" to="exemple1">
            exemple1
          </Link>
          <Link className="nav__link nav-link" to="exemple2">
            exemple2
          </Link>
          <Link className="nav__link nav-link" to="contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};





function Header() {
  return (
    <div className="app pt-4">
      <Container>
        <TopNavbar />
        <hr />
        <NavBarBottom />
      </Container>
    </div>
  );
}

export default Header;