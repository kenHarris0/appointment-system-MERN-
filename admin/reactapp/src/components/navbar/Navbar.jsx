import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../Contexts/admincontext'
import {toast} from 'react-toastify'
const Navbar = ({setshowLoginPage}) => {
  const {admindata,isloggedin,setisloggedin,getadmindata,url}=useContext(AdminContext)
  const [clicklogo,setclicklogo]=useState(false)


const logout=async()=>{
  try{
    const response=await axios.post(url+"/admin/logout",{},{withCredentials:true})
    if(response.data.success){
      toast.success("logged out successfully")
      setisloggedin(false)
      await getadmindata()
    }
  }
  catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  getadmindata()
},[])

console.log(admindata.type)
  return (
    <div className='navbar'>
      <img src={assets.admin_logo} alt="" />
      {isloggedin?<div className='profilelogo'>
        <img src={admindata.type==='admin'?assets.patients_icon:assets.doctor_icon} alt='' onClick={()=>setclicklogo(!clicklogo)}/>
        {clicklogo && <div className="dropdown">
          <p onClick={()=>logout()}>logout</p>
        </div>}
        </div>  
        :<button onClick={()=>setshowLoginPage(true)}>Login</button>}
      
    </div>
  )
}

export default Navbar
