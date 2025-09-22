import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AppointmentContext = createContext()

const ContextProvider = ({ children }) => {
  //user related datas
  const [userdata,setuserdata]=useState({
    name:"",
    email:"",

  })
  const [isloggedin ,setisloggedin]=useState(false)
  const url="http://localhost:5000"

  const isuserAuth=async()=>{
    try{
      const response=await axios.post(url+"/user/isuserauth",{},{withCredentials:true})
      if(response.data.success){
        setisloggedin(true)
        await getuserdata()

      }
    }
    catch(error){
      console.log(error)
    }
  }


const getuserdata=async()=>{
  try{
    const response=await axios.get(url+"/user/getalluser",{withCredentials:true})
    if(response.data.success){
      setuserdata(response.data.payload)
    }
    else{
      setuserdata({
         name:"",
    email:"",
      })
    }
  }catch(error){
    console.log(error)
  }

}

// GETTING ALL DOCTORS FROM BACKEND 
const [doctors,setdoctors]=useState([])
const getallDoctors=async()=>{
  try{
    const response=await axios.get(url+"/doc/listalldoc")
    if(response.data.success){
      setdoctors(response.data.payload)
    }

  }
  catch(error){
    console.log(error)
  }

}
//fetch all appointments  from backend

const[userAppointments,setuserAppointments]=useState([])

const fetchAppointments=async()=>{
  try{
    const response=await axios.get(url+"/appointment/get")
    if(response.data.success){
      setuserAppointments(response.data.payload)
      
    }

  }
  catch(error){
    console.log(error)
  }
}







useEffect(()=>{
  isuserAuth()
  getallDoctors()
  fetchAppointments()
  
},[])

  const value = {
    //userdata context
    userdata,setuserdata,url,isuserAuth,getuserdata,isloggedin ,setisloggedin,
    //doctors
    getallDoctors,doctors,setdoctors,
    //user appointmetns data
    userAppointments,setuserAppointments,fetchAppointments,
    //curr appointemtns of user
   
   
  }

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default ContextProvider
