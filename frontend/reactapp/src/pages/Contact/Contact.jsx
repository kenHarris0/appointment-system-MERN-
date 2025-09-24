import React, { useContext } from 'react'
import './Contact.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import {AppointmentContext} from '../../contexts/context'
const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: ""
  });
const {url}=useContext(AppointmentContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response=await axios.post(url+'/query/addquery',formData,{withCredentials:true})
        if(response.data.success){
            toast.success("Query Submitted Successfully")
            setFormData({ name: "", email: "", message: "" });
        }
    }
    catch(error){
        console.log(error)
    }
    
    
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="query"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact
