import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import logo from './images/logo.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Navbar = () => { 
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) { // Change 100 to the number of pixels you want
      setBgColor('blue'); // Set the desired background color when scrolled
    } else {
      setBgColor('transparent'); // Set the default background color
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate=useNavigate()
  return (
    <div className='navbar' style={{ backgroundColor: bgColor }}>
      <img src={logo} alt="" />
      <ul className='nav-el'>
        <li onClick={()=>navigate("/home")}>Home</li>
        <li onClick={()=>navigate("/services")}>Services</li>
        <li onClick={()=>navigate("/about")}>About</li>
        <li>My account</li>
        <li>FAQs</li>
    </ul>
    <div className="logout-container" onClick={()=>navigate("/")}>
      <div className="logout-icon">
        <FaUserCircle className='logout-icon-icon' />
      </div>
      <div className="logout-text">
        Logout
      </div>
    </div>
      </div>
  )
}

export default Navbar
