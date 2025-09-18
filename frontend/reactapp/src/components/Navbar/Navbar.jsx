import React from 'react'
import './Navbar.css'
import applogo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setshowLoginPage,showLoginPage}) => {
  const navigator=useNavigate()
  return (
    <div className='nav'>
        <img src={applogo} alt="" />
        <div className="inside-nav">
            <p>Home</p>
            <p onClick={()=>navigator('/alldoctors')}>All Doctors</p>
            <p>My Appointments</p>
            <p>Contact Us</p>
        </div>

        <button onClick={()=>setshowLoginPage(true)}>Login</button>

      
    </div>
  )
}

export default Navbar
