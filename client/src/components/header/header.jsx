import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Image, Row, Col , Container, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./header.css";

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
            <Image
              width="300"
              src="http://www.sc3yaokouass.universe.wf/wp-content/uploads/2021/05/LOGO-POLYFINANCE-2048x211.png"
              fluid
            />
          </div>
        </Col>
        <Col lg={4}>
          <div className="topnav__right">
            <FaMapMarkerAlt className="mx-3" />
            <div className="adress">
              <p>Cocody Angré: Boulevard Latrille, Villa N°964</p>
              <p>
                carrefour Adama Sanogo à 150 m
              </p>
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
        <Navbar bg="white" variant="white" style={{display:"flex", justifyContent:"center"}}>
        <Nav className="navigation">
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
      </Navbar>

    )

}



function Header() {
  return (
    <div className="pt-4">
        <Container>
      <TopNavbar />
      <hr />
      <NavBarBottom />
      
    </Container>
    </div>
  );
}

export default Header;
