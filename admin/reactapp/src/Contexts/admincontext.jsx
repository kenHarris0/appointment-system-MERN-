import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AdminContext = createContext()

const ContextProvider = ({ children }) => {

const url="http://localhost:5000"
 const [isloggedin ,setisloggedin]=useState(false)


const isadminAuth=async()=>{
    try{
      const response=await axios.post(url+"/admin/isauth",{},{withCredentials:true})
      if(response.data.success){
        setisloggedin(true)
        await  getadmindata()
        await getcurrdoc()
        await fetchAppointments()
        await fetchpatients()
        await getallqueries()

      }
    }
    catch(error){
      console.log(error)
    }
  }

const [admindata,setadmindata]=useState({
    type:"",
    name:"",
    email:""
})
const getadmindata=async()=>{
  try{
    const response=await axios.get(url+"/admin/getalldata",{withCredentials:true})
    if(response.data.success){
      setadmindata(response.data.payload)
    }
    else{
      setadmindata({
        type:"",
         name:"",
    email:"",
      })
    }
  }catch(error){
    console.log(error)
  }

}
// get all appoutneknts data

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

// all the patients or users in db 
const [patients,setpatients]=useState([])
const fetchpatients=async()=>{
  try{
    const response=await axios.get(url+"/user/getusersfromdb")
    if(response.data.success){
      setpatients(response.data.payload)
    }

  }
  catch(error){
    console.log(error)
  }
}

//currdoc
const [currdoc,setcurrdoc]=useState({
    name:"",
    speciality:"",
    fees:"",

})
const getcurrdoc=async()=>{
try{
    const response=await axios.post(url+'/doc/searchbyemail',{email:admindata.email},{withCredentials:true})
    if(response.data.success){
        setcurrdoc(response.data.payload)
        console.log(response.data.payload)
        

    }
    else{
        setcurrdoc({
            name:"",
    speciality:"",
    fees:"",
        })
    }
}
catch(error){
    console.log(error)
}
}

//currdoctor appointmetn



const [currapts, setcurrapointments] = useState([]);

const getcurrapts = () => {
  if (!currdoc._id) return;
  const currapt = userAppointments.filter(
    (apt) => apt.doctor.toString() === currdoc._id.toString()
  );
  setcurrapointments(currapt);
};

    //query based select all from db 
 const [allissues,setallissues]=useState([])
     const getallqueries=async()=>{
        try{
            const response=await axios.get(url+'/query/getall',{withCredentials:true})
            if(response.data.success){
                setallissues(response.data.payload)
            }
            else{
                setallissues([])
            }
        }
        catch(error){
            console.log(error)
        }
    }


useEffect(()=>{
    getcurrapts()
},[currdoc,userAppointments])



    const value={
url,
//userdatas
getadmindata,admindata,setadmindata,
//login status
isloggedin ,setisloggedin,isadminAuth,

//appointments datas
fetchAppointments,userAppointments,setuserAppointments,

//patients data
fetchpatients,patients,setpatients,

//currdoctor
getcurrdoc,currdoc,setcurrdoc,

// curr doc appointments 
currapts,setcurrapointments,getcurrapts,

//issues 
allissues,setallissues,getallqueries
    }


    useEffect(()=>{
        isadminAuth()
        fetchAppointments()
        fetchpatients()
        getallqueries()
       
    },[])

return(
    <AdminContext.Provider value={value}>
{children}
</AdminContext.Provider>

)

}

export default ContextProvider