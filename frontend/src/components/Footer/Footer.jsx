import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>MEAD</h2>
            <ul>
           <li> <Link to="/" onClick={() => {setMenu("home");window.scrollTo(0, 0);}} className={`${menu === "home" ? "active" : ""}`}>Home</Link></li>
           <li> <Link to="/menu" onClick={() => {setMenu("menu");window.scrollTo(0, 0);}} className={`${menu === "menu" ? "active" : ""}`}>Menu</Link></li>
            <li><Link to="/Aboutus" onClick={() => {setMenu("Aboutus");window.scrollTo(0, 0);}} className={`${menu === "Aboutus" ? "active" : ""}`}>About us</Link></li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+251 11 681 3645</li>
                <li>contact@mead.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
