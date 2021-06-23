import React from "react";
import { Image } from "react-bootstrap";
import "./css/header.css";
import logo from "../img/logo.png";

const Header = () => {
  const toggleMenu = () => {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  };
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <Image src={logo} width="auto" height="50" />
        </a>
        <div className="toggle" onClick={toggleMenu}></div>
        <ul className="menu">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#players" onClick={toggleMenu}>
              Player
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </header>
      <section className="banner" id="home">
        <div className="textBx">
          <h2>
            GOALKET AFRICA <br />
            <span className="span">FOOTBALL MANAGEMENT AGENCY</span>
          </h2>
          {/* <h3></h3> */}
          <a href="#about" className="btn">
            About Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
