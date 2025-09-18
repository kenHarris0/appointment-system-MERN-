import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
       
        <div className="footer-col">
          <h2 className="footer-logo"><img src={assets.logo} alt="" /></h2>
          <p>
            Your trusted doctor booking & appointment app.  
            Book appointments anytime, anywhere.
          </p>
        </div>

    
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/doctors">Find Doctors</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: support@prescripto.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Health St, London</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prescripto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
