import React, { useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import {AdminContext} from '../../Contexts/admincontext'
const Sidebar = () => {
    const {admindata}=useContext(AdminContext)

    const navigator=useNavigate()
  return (
    <div className='sidebar'>

        {admindata.type==="doctor" && <div className="side1" onClick={()=>navigator('/dashboard')}>
            <img src={assets.add_icon} alt="" />
            <p>Dashboard</p>
        </div>}


        {admindata.type==="admin" &&<div className="side1" onClick={()=>navigator('/add')}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
        </div>}
        <div className="side1" onClick={()=>navigator('/list')}>
            <img src={assets.people_icon} alt="" />
            <p>List Doctor</p>
        </div>
        {admindata.type==="doctor" && <div className="side1" onClick={()=>navigator('/appointments')}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
        </div>
}
      
    </div>
  )
}

export default Sidebar
