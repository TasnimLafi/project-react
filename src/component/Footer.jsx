import React from 'react'
import logo from "./images/logo.png"
import binoculars from './images/binoculaires-removebg-preview.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <img id="binoculaires" data-aos="fade-up" src={binoculars} alt=""/>
      <img id="logo-footer" data-aos="fade-up" src={logo} alt=""/>
      <div class="social-media">
        
      </div>
      <div class="policy">
        <h2 style={{color:'white'}}>Contact us</h2>
        <ul class="policy-section">
          <FaInstagram className='contact-icon'/>
          <FaFacebook className='contact-icon'/>
          <FaGithub className='contact-icon'/>
          <FaWhatsapp className='contact-icon'/>
          <FaLinkedin className='contact-icon'/>
        </ul>
      </div>
      <p>© 2024 BookingBliss ™ | All Rights Reserved.</p>
    </footer>
    
  )
}

export default Footer
