import React from 'react'
import './Appointment.css'
import { useContext,useEffect,useState } from 'react'
import { AdminContext } from '../../Contexts/admincontext'
import axios from 'axios'
import { toast } from 'react-toastify'
const Appointment = () => {

const{url,admindata,fetchAppointments,userAppointments,fetchpatients,patients,isadminAuth,getcurrdoc,currdoc,setcurrdoc
  ,currapts,setcurrapointments,getcurrapts,getadmindata
}=useContext(AdminContext)

const[pickstatus,setpickstatus]=useState("yettosee")


const updatestatus=async(id,status)=>{
  try{
    const response=await axios.post(url+'/appointment/updatestatus',{id,status},{withCredentials:true})
    if(response.data.success){
      toast.success("Status updated")
       await fetchAppointments()
      await getcurrdoc()
          await getcurrapts()
       await fetchpatients()
    }

  }
  catch(error){
    console.log(error)
  }
}




useEffect(() => {
  if (admindata && admindata.email) {
    getcurrdoc()
getcurrapts()

    
  }
}, [admindata])

  return (
    <div className='doc-appopintments'>
      <h1>Manage Your Appointments Here</h1>

      <div className="patientdoc">
           {currapts.map((apt,ind)=>{
            const patient=patients.find(pat=>pat._id.toString()===apt.patient.toString())
            return(
              <div className="patt" key={ind}>
                <p>Name:{patient.name}</p>
                <p>Payment:{apt.status.paid?"Paid":"Yet to pay"}</p>
                <p>Status:{apt.status.completed}</p>
                <p>Date:{apt.time.day} / {apt.time.date} - {apt.time.timing}</p>
                <select name="status" value={pickstatus} onChange={(e)=>{updatestatus(apt._id,e.target.value); setpickstatus(e.target.value)}}>
                  <option value="yettosee">Yet to complete</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="completed">Completed</option>
                </select>
                
              </div>
              
            )
           })

           
           
           }

        </div>

      
    </div>
  )
}

export default Appointment
