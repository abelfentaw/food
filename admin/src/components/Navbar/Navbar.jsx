import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <h2 className='admin'>ADMIN </h2>
    </div>
  )
}

export default Navbar
