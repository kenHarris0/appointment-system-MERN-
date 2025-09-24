import React, { useContext, useState } from 'react'
import './Navbar.css'
import applogo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { AppointmentContext } from '../../contexts/context'
import axios from 'axios'
import {toast} from 'react-toastify'
const Navbar = ({setshowLoginPage,showLoginPage}) => {

const[clicklogo,setclicklogo]=useState(false)


  const navigator=useNavigate()
  const {isloggedin ,setisloggedin,userdata,getuserdata,url}=useContext(AppointmentContext)


const logout=async()=>{
  try{
    const response=await axios.post(url+"/user/logout",{},{withCredentials:true})
    if(response.data.success){
      toast.success("logged out successfully")
      setisloggedin(false)
      await getuserdata()
    }
  }
  catch(error){
    console.log(error)
  }
}


  return (
    <div className='nav'>
        <img src={applogo} alt="" onClick={()=>navigator('/')} />
        <div className="inside-nav">
            <p onClick={()=>navigator('/')}>Home</p>
            <p onClick={()=>navigator('/alldoctors')}>All Doctors</p>
            <p onClick={()=>navigator('/yourappointments')}>My Appointments</p>
            <p  onClick={()=>navigator('/contact')}>Contact Us</p>
        </div>

        {!isloggedin?<button onClick={()=>setshowLoginPage(true)}>Login</button>:
        <div className='prof-nav'>
          <p onClick={()=>setclicklogo(!clicklogo)}>{userdata?.image?<img src={`http://localhost:5000/userimage/${userdata.image}`} alt=''/>:"X"}</p>
          {clicklogo && <div className="dropdowns">
            <p onClick={()=>navigator('/profile')}>My Profile</p>
            <p onClick={()=>logout()}>Logout</p>

          </div>}
          
          </div>}

      
    </div>
  )
}

export default Navbar
