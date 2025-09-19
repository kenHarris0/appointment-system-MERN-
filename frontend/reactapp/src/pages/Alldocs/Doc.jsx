import React, { useContext, useState } from 'react'
import './Doc.css'
import {assets} from '../../assets/assets'
import { AppointmentContext } from '../../contexts/context'
import {useNavigate} from 'react-router-dom'
const Doc = () => {
  const[filter,setfilter]=useState("all")
  const {doctors}=useContext(AppointmentContext)
const navigator=useNavigate()



  return (
    <div className='doctors-list'>

     <div className="doc-category">
  <div 
    className={`filterr ${filter==="Dermatologist" ? "active" : ""}`} 
    onClick={() => setfilter("Dermatologist")}
  >
    Dermatologist
  </div>

  <div 
    className={`filterr ${filter==="General physician" ? "active" : ""}`} 
    onClick={() => setfilter("General physician")}
  >
    General Physician
  </div>

  <div 
    className={`filterr ${filter==="Gastroenterologist" ? "active" : ""}`} 
    onClick={() => setfilter("Gastroenterologist")}
  >
    Gastroenterologist
  </div>

  <div 
    className={`filterr ${filter==="Gynecologist" ? "active" : ""}`} 
    onClick={() => setfilter("Gynecologist")}
  >
    Gynecologist
  </div>

  <div 
    className={`filterr ${filter==="Neurologist" ? "active" : ""}`} 
    onClick={() => setfilter("Neurologist")}
  >
    Neurologist
  </div>

  <div 
    className={`filterr ${filter==="Pediatricians" ? "active" : ""}`} 
    onClick={() => setfilter("Pediatricians")}
  >
    Pediatricians
  </div>
</div>




      <div className="right-part">
         {doctors.filter(item=>filter==="all" || item.speciality===filter).map((doc,ind)=>{
             return(
                <div className="doc-indi" key={ind} onClick={()=>navigator('/doctorpage')}>
                  <div className="doc-img">
        <img src={`http://localhost:5000/doctorimage/${doc.image}`} alt="" />
                  </div>
                  <div className="docdesc">
        <p className='gg'><div className="avail"></div> available</p>
                  <p>{doc.name}</p>
                  <p className='spe'>{doc.speciality}</p>
                  <img src={assets.arrow_icon} alt="" />
                  </div>
                  
        
                </div>
              )
            })}

      </div>
      
    </div>
  )
}

export default Doc
