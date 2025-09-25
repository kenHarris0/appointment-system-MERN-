import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { AppointmentContext } from '../../contexts/context'
import { toast } from 'react-toastify'
import {assets} from '../../assets/assets'
const Login = ({setshowLoginPage}) => {

const [userip, setuserip] = useState({
  name: "",
  email: "",
  password: "",
  bloodgroup: "",
  age: "",
  allergys: "",
  address: "",
  phone: "",
  emergencyContact: "",
  medicalHistory: "",
  image: ""
});

const [currstate,setcurrstate]=useState("signup")
const {userdata,setuserdata,url,isuserAuth,getuserdata,isloggedin ,setisloggedin}=useContext(AppointmentContext)


const handlechange=(e)=>{
  const {name,value}=e.target
  setuserip((item)=>({...item,[name]:value}))
}

const handlefilechange=(e)=>{
  const file=e.target.files[0]
  setuserip((item)=>({...item,image:file}))
}
const handlesubmit=async(e)=>{
  e.preventDefault();
  if(currstate==="signup"){
    const response=await axios.post(url+"/user/register",userip,{withCredentials:true},{headers:{"Content-Type":"multipart/form-data"}})
    if(response.data.success){
     
     
      await isuserAuth()
  toast.success("Account created successfully")
  setshowLoginPage(false)

    }
    else{
      toast.error("failed to create account")
      setisloggedin(false)
    }
  }
  else{
    const response=await axios.post(url+"/user/login",{email:userip.email,password:userip.password},{withCredentials:true})
    if(response.data.success){
      
      await isuserAuth()
  toast.success("logged in successfully")
  setshowLoginPage(false)

    }
    else{
       toast.error("failed to login")
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

          {currstate==="signup" && 
          <div className='reg-img'>
            <label htmlFor="image">
              <img src={assets.uplaod_area} alt='x'/>
            </label>
          <input type='file' name='image' id='image' onChange={handlefilechange} hidden/>
          <input type='text' placeholder='Name' name='name' value={userip.name} onChange={handlechange}/>
          <input type="text" placeholder="Age" name="age" value={userip.age} onChange={handlechange} />
          <input type="text" placeholder="Blood Group" name="bloodgroup" value={userip.bloodgroup} onChange={handlechange} />
          <input type="text" placeholder="Allergies" name="allergys" value={userip.allergys} onChange={handlechange} />
          <input type="text" placeholder="Address" name="address" value={userip.address} onChange={handlechange} />
          <input type="text" placeholder="Phone" name="phone" value={userip.phone} onChange={handlechange} />
          <input type="text" placeholder="Emergency Contact" name="emergencyContact" value={userip.emergencyContact} onChange={handlechange} />
          <input type="text" placeholder="Medical History" name="medicalHistory" value={userip.medicalHistory} onChange={handlechange} />
          </div>}
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
