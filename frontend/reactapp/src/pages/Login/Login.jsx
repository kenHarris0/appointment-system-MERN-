import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { AppointmentContext } from '../../contexts/context'
import { toast } from 'react-toastify'
const Login = ({setshowLoginPage}) => {

const [userip,setuserip]=useState({
  name:"",
  email:"",
  password:""
})
const [currstate,setcurrstate]=useState("signup")
const {userdata,setuserdata,url,isuserAuth,getuserdata,isloggedin ,setisloggedin}=useContext(AppointmentContext)


const handlechange=(e)=>{
  const {name,value}=e.target
  setuserip((item)=>({...item,[name]:value}))
}
const handlesubmit=async(e)=>{
  e.preventDefault();
  if(currstate==="signup"){
    const response=await axios.post(url+"/user/register",userip,{withCredentials:true})
    if(response.data.success){
      await isuserAuth()
      setisloggedin(true)
setshowLoginPage(false)
toast.success("account created successfully")
    }
    else{
      setisloggedin(false)
    }
  }
  else{
    const response=await axios.post(url+"/user/login",{email:userip.email,password:userip.password},{withCredentials:true})
    if(response.data.success){
      await isuserAuth()
      setisloggedin(true)
      setshowLoginPage(false)
      toast.success("logged in successfully")

    }
    else{
      setisloggedin(false)
    }
  }
}



  return (
    <div className='login-pg'>

      <div className="logincont">
        <h1>{currstate==="signup"?"Sign Up":"Login"} to Prescripto</h1>
        <p className='cross' onClick={()=>setshowLoginPage(false)}>X</p>
        <form className='login-form' onSubmit={handlesubmit}>
          {currstate==="signup" && <input type='text' placeholder='Name' name='name' value={userip.name} onChange={handlechange}/>}
          <input type='email' placeholder='Email' name='email' value={userip.email} onChange={handlechange}/>
          <input type='password' placeholder='Password' name='password' value={userip.password} onChange={handlechange}/>
          <button type='submit'>{currstate==="signup"?"Sign Up":"Login"}</button>




        </form>
        {currstate==="signup"?<p onClick={()=>setcurrstate("login")}>Already have an account? Login now!</p>:<p onClick={()=>setcurrstate("signup")}>Don't have an account, create one now!</p>}
      </div>
      
    </div>
  )
}

export default Login
