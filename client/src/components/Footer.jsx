import React from "react";
import { Container } from "react-bootstrap";
import { Zoom } from "react-reveal";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="py-3">
        <ul className="social__media">
          <li>
            <Zoom left>
              <a
                href="https://m.facebook.com/gktafricaagency/"
                className="media_link"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="media_icon" size={30} />
              </a>
            </Zoom>
          </li>
          <li>
            <Zoom right>
              <a
                href="https://www.instagram.com/goalketafrica/"
                className="media_link"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="media_icon" size={30} />
              </a>
            </Zoom>
          </li>
          <li>
            <Zoom right>
              <a
                href="https://www.youtube.com/channel/UCx967ZkQUDnqAzsohiSiCqg"
                className="media_link"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="media_icon" size={30} />
              </a>
            </Zoom>
          </li>
        </ul>
        <div className="copyright">
          <Zoom>
          <p>Copyright © 2021 Made by <span style={{fontWeight:"700"}}>Yiriba Communication</span>. All Right Reserved.</p>
          </Zoom>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
