import React, { useState } from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'
const Add = () => {

const [formdata,setformdata]=useState({
  name:"",
  image:"",
  email:"",
speciality:"",
  degree:"",
  experience:"",
  about:"",
  fees:"",
  address:""
})

const handlesubmit=async(e)=>{
e.preventDefault()

try{
  const response = await axios.post("http://localhost:5000/doc/adddoc", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  if(response.data.success){
    toast.success("Doctor added")
    setformdata({
       name:"",
  image:"",
  email:"",
speciality:"",
  degree:"",
  experience:"",
  about:"",
  fees:"",
  address:""
    })
  }
}
catch(error){
  console.log(error)
}

}


const handlefile=(e)=>{
   const file = e.target.files[0];
  setformdata((item) => ({ ...item, image: file }));
}

const handlechange=(e)=>{
  const {name,value}=e.target
  setformdata((item)=>({...item,[name]:value}))
}


  return (
    <div className='add-doc'>
      <h1>Add Doctor</h1>

      <form onSubmit={handlesubmit}>
        <div className="uploads">
          <label htmlFor="image">
            <img src={assets.upload_area} alt=''/>
          </label>
<input type='file' name='image' id='image' placeholder='Doctor Image' onChange={handlefile} hidden required/>
        </div>
        
        <input type="text" name="name" placeholder='name' value={formdata.name} onChange={handlechange} required/>
        <input type="email" placeholder='Email' value={formdata.email} onChange={handlechange} name='email' />
        <input type="text" name="speciality" placeholder="Speciality" value={formdata.speciality} onChange={handlechange} required/>
        <input type="text" name="degree" placeholder="Degree" value={formdata.degree} onChange={handlechange} required/>
        <input type="text" name="experience" placeholder="Experience" value={formdata.experience} onChange={handlechange} required/>
        <input type="text" name="about" placeholder="About" value={formdata.about} onChange={handlechange} required/>
        <input type="text" name="fees" placeholder="Fees" value={formdata.fees} onChange={handlechange} required/>
        <input type="text" name="address" placeholder="Address" value={formdata.address} onChange={handlechange} required/>

        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Add
