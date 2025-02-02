import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setShowMobileMenu(false)}>
        <img className='logo' src={assets.logo} alt="Restaurant Logo" />
      </Link>

      

      {/* Navigation Menu */}
      <div className={`navbar-menu ${showMobileMenu ? 'active' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              onClick={() => { 
                setMenu("home");
                setShowMobileMenu(false);
              }} 
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              onClick={() => { 
                setMenu("menu");
                setShowMobileMenu(false);
              }} 
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/Aboutus" 
              onClick={() => { 
                setMenu("Aboutus");
                setShowMobileMenu(false);
                window.scrollTo(0, 0);
              }} 
              className={menu === "Aboutus" ? "active" : ""}
            >
              About us
            </Link>
          </li>
          <li>
            <a 
              href='#footer' 
              onClick={() => { 
                setMenu("contact");
                setShowMobileMenu(false);
              }} 
              className={menu === "contact" ? "active" : ""}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side Items */}
      <div className="navbar-right">

              {/* Mobile Menu Toggle Button */}
      <div className='mobile-menu-btn' onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <img 
          src={showMobileMenu ? assets.cross_icon : assets.play_store} 
          alt={showMobileMenu ? "Close Menu" : "Open Menu"} 
        />
      </div>
        
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li> 
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar