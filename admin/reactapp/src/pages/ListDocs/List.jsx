import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'
const List = () => {
const[doclist,setdoclist]=useState([])

const getalldocs=async()=>{
  try{
    const response=await axios.get("http://localhost:5000/doc/listalldoc")
    if(response.data.success){
      setdoclist(response.data.payload)
    }
  }
  catch(error){
    console.log(error)
  }
}

const removeDoc=async(id)=>{
   try{
    const response=await axios.post("http://localhost:5000/doc/deldoc",{id})
    if(response.data.success){
      toast.success("doctor removed successfully")
      await getalldocs()
    }
  }
  catch(error){
    console.log(error)
  }

}

useEffect(()=>{
  getalldocs()
},[])


  return (
    <div className='list-doc'>
      <div className="listcont">
        {doclist.map((doc,ind)=>{
          return(
            <div className="doc-indi" key={ind}>
              <p className='close' onClick={()=>removeDoc(doc._id)}>X</p>
              <img src={`http://localhost:5000/doctorimage/${doc.image}`} alt="" />
              <p>{doc.name}</p>
              <p>{doc.speciality}</p>
            </div>
          )
        })}

      </div>
      
    </div>
  )
}

export default List
