import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {

    const navigator=useNavigate()
  return (
    <div className='sidebar'>
        <div className="side1" onClick={()=>navigator('/add')}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
        </div>
        <div className="side1" onClick={()=>navigator('/list')}>
            <img src={assets.people_icon} alt="" />
            <p>List Doctor</p>
        </div>
        <div className="side1" onClick={()=>navigator('/appointments')}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
        </div>
      
    </div>
  )
}

export default Sidebar
