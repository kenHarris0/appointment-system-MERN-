import React from 'react'
import './Navbar.css'
import applogo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src={applogo} alt="" />
        <div className="inside-nav">
            <p>Home</p>
            <p>All Doctors</p>
            <p>My Appointments</p>
            <p>Contact Us</p>
        </div>

        <button>Login</button>

      
    </div>
  )
}

export default Navbar
