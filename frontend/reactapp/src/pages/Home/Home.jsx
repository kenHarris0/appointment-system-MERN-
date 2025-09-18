import React, { useState } from 'react'
import './Home.css'
import {assets} from '../../assets/assets'
import { doctors } from '../../assets/assets'
const Home = () => {

const[filter,setfilter]=useState("all")









  return (
    <div className='homepage'>
      {/*hero  section*/}
      <div className="hero">
        <div className="hero-1">
          <p>Your Health, Your Priority</p>
          <p>Book doctor appointments anytime, anywhere with prescripto</p>
          <img src={assets.group_profiles} alt="" />
          <button>Book Appointment</button>
        </div>
        <div className='hero-2'>
          <img src={assets.header_img} alt="" />
        </div>
      </div>


 {/*docs select for home page  section*/}
<div className="titles">
  <h1>Select from wide range of Specailist</h1>
  <h4>A simple way to book our Experts</h4>
</div>
 <div className="category">
   <img src={assets.Dermatologist} alt="" onClick={() => {filter==="all"?setfilter("Dermatologist"):setfilter("all")}} className={filter==="Dermatologist"?'active':''}/>
        <img src={assets.General_physician} alt="" onClick={() => {filter==="all"?setfilter("General physician"):setfilter("all")}} className={filter==="General physician"?'active':''}/>
        <img src={assets.Gastroenterologist} alt="" onClick={() => {filter==="all"?setfilter("Gastroenterologist"):setfilter("all")}} className={filter==="Gastroenterologist"?'active':''}/>
        <img src={assets.Gynecologist} alt="" onClick={() => {filter==="all"?setfilter("Gynecologist"):setfilter("all")}} className={filter==="Gynecologist"?'active':''}/>
        <img src={assets.Neurologist} alt="" onClick={() =>{filter==="all"?setfilter("Neurologist"):setfilter("all")}} className={filter==="Neurologist"?'active':''}/>
        <img src={assets.Pediatricians} alt="" onClick={() => {filter==="all"?setfilter("Pediatricians"):setfilter("all")}} className={filter==="Pediatricians"?'active':''}/>

 </div>
  

  <div className="doctor-home">
    {doctors.filter(item=>filter==="all" || item.speciality===filter).map((doc,ind)=>{
     return(
        <div className="doc-indi" key={ind}>
          <div className="doc-img">
<img src={doc.image} alt="" />
          </div>
          <div className="docdesc">
<div className='gg'><div className="avail"></div> <p>available</p></div>
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

export default Home
