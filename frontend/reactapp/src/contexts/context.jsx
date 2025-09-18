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



useEffect(()=>{
  isuserAuth()
},[])

  const value = {
    //userdata context
    userdata,setuserdata,url,isuserAuth,getuserdata,isloggedin ,setisloggedin
   
  }

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default ContextProvider
