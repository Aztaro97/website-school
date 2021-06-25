import React from 'react'
import { RiFacebookCircleFill,RiTwitterFill} from "react-icons/ri";
import { AiFillGoogleCircle,AiFillInstagram} from "react-icons/ai";


import { ImLocation} from "react-icons/im";
import {MdEmail,MdCall} from "react-icons/md";

import { Image ,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
import './footer.css'


const Address = () => {
    return (
        <div className="address_container">
            <p className="contact_us">Contat Us</p>
            <div className="icons">
            <Link to="/">
            <ImLocation size="30" color="gray"></ImLocation>
            </Link>
            </div>
            <div className="icons">
            <Link to="/">
            <MdCall size="30" color="gray"></MdCall>    
            </Link>
            </div>
            <div className="icons">
            <Link to="/">
            <MdEmail size="30" color="gray"></MdEmail> 
            </Link>
            </div>
        </div>
    )
}

const Social = () => {
    return (
        <div className='social'>
           <Link to="/">
              <Image width="430" src={logo} fluid />  
            </Link>

        <div className="social_icons_container">
        <Link to="/">
            <RiFacebookCircleFill size={60} color='gray' className="social_icons">
            </RiFacebookCircleFill >
            </Link>
            <Link to="/">
            <RiTwitterFill size={60} color='gray' className="social_icons">
            </RiTwitterFill>
            </Link>
            <Link to="/">
            <AiFillInstagram  size={60} color='gray' className="social_icons"></AiFillInstagram>
            </Link >
            <Link to="/">
            <AiFillGoogleCircle size={60} color='gray' className="social_icons"></AiFillGoogleCircle>
            </Link >
            </div>
        </div>
    )
}


function Footer() {
    return (
        <Container>
        <div className="footer_container">
         <Social/>
         <Address/>
        </div>
        </Container>
    )
}

export default Footer
