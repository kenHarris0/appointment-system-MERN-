import React, { useContext, useEffect, useState } from 'react'
import './Doctorpage.css'
import { useParams } from 'react-router-dom'
import { AppointmentContext } from '../../contexts/context'
import axios from 'axios'
import {toast} from 'react-toastify'
import { assets } from '../../assets/assets'

const Doctorpage = () => {
const[docdata,setdocdata,getuserdata]=useState({})
const { id }=useParams()
const {url,userdata}=useContext(AppointmentContext)

const findDoctorInfo=async(id)=>{
    try{
        const response=await axios.post(url+"/doc/searchbyid",{id})
        if(response.data.success){
         setdocdata(response.data.payload)
        }
    }
    catch(error){
        console.log(error)
    }
}
// dates functionality
const getdates=(count)=>{
    const days=[]
    
    for(let i=0;i<count;i++){
        const next=new Date()
        next.setDate(next.getDate() +i)
  const dayName = next.toLocaleDateString("en-US", { weekday: "short" }); 
    const dateNum = next.getDate();
    days.push({day:dayName,date:dateNum})
    }

    return days

}
// appointment booking from doc tab functionality

const[pickdate,setpickdate]=useState("")
const[pickday,setpickday]=useState("")
const[picktime,setpicktime]=useState("")
   
const bookAppointment=async(docId)=>{

    try{
        const response=await axios.post(url+'/appointment/add',{docId,time:{day:pickday,date:pickdate,timing:picktime},email:userdata.email},{withCredentials:true})
if(response.data.success){
    toast.success(`appointment booked ${userdata.name}`)
    setpickdate("")
    setpickday("")
    setpicktime("")
}
    }
    catch(error){
        console.log(error)
    }

}



console.log(pickdate)
console.log(pickday)
console.log(picktime)
useEffect(() => {
  if (id) {
    findDoctorInfo(id);
  }
}, [id]);


const days=getdates(7)
  return (
    <div className='docpage'>

        <div className="left-pg">
            <img src={`http://localhost:5000/doctorimage/${docdata.image}`} alt="" />
        </div>

        <div className="right-pg">
                 
                 <div className="right1">

                    <div className="inside1">
                          <p>{docdata.name}</p>
                          <img src={assets.verified_icon} alt="" />
                    </div>

                    <div className="inside2">
                        <p>{docdata.degree}    <span className='special'>{docdata.speciality} </span>    <span className='exp'>{docdata.experience}</span></p>
                        
                    </div>

                    <div className="inside3">
                        <h3>ABOUT </h3>
                        <img src={assets.info_icon} alt="" />
                    </div>

                    <div className="inside4">
                        <p>{docdata.about}</p>
                         <p className='appoint'>Appointment fee: ${docdata.fees}</p>
                    </div>
                   

                 </div>
{/*  right bottom design */}
                 <div className="right2">
                    <div className="bot1">
                        <p>Booking Slots</p>
                    </div>

                    <div className="bot2">
                       
                        {days.map((d, idx) => (
              <div className={`weekdiv ${(pickdate===d.date.toString() && pickday===d.day.toString())? 'acti':'' }`} key={idx} onClick={()=>{setpickdate(d.date.toString());setpickday(d.day.toString())}}>
                <p>{d.day}</p>
                <p>{d.date}</p>
              </div>
            ))}



                    </div>
                    <div className="bot3">
                        <div className={`time1 ${picktime==="10.00 AM"?'acti':''}`} onClick={()=>setpicktime("10.00 AM")}>
                            <p>10.00 AM</p>
                        </div>
                         <div className={`time1 ${picktime==="11.00 AM"?'acti':''}`} onClick={()=>setpicktime("11.00 AM")}>
                            <p>11.00 AM</p>
                        </div>
                         <div className={`time1 ${picktime==="12.00 AM"?'acti':''}`} onClick={()=>setpicktime("12.00 AM")}>
                            <p>12.00 AM</p>
                        </div>
                         <div className={`time1 ${picktime==="01.00 PM"?'acti':''}`} onClick={()=>setpicktime("01.00 PM")}>
                            <p>01.00 PM</p>
                        </div>
                         <div className={`time1 ${picktime==="02.00 PM"?'acti':''}`} onClick={()=>setpicktime("02.00 PM")}>
                            <p>02.00 PM</p>
                        </div>
                         <div className={`time1 ${picktime==="03.00 PM"?'acti':''}`} onClick={()=>setpicktime("03.00 PM")}>
                            <p>03.00 PM</p>
                        </div>
                         <div className={`time1 ${picktime==="05.00 PM"?'acti':''}`} onClick={()=>setpicktime("05.00 PM")}>
                            <p>05.00 PM</p>
                        </div>
                         <div className={`time1 ${picktime==="06.00 PM"?'acti':''}`} onClick={()=>setpicktime("06.00 PM")}>
                            <p>06.00 PM</p>
                        </div>
                        
                    </div>
                    <div className="bot4">
                        <button onClick={()=>bookAppointment(id)}>Book Appointment</button>
                    </div>

                 </div>



        </div>
      
    </div>
  )
}

export default Doctorpage
