import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.admin_logo} alt="" />
      <button>Login</button>
      
    </div>
  )
}

export default Navbar
