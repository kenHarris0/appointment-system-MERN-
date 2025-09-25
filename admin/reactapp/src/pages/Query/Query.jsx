    import React, { useContext, useEffect, useState } from 'react'
    import './Query.css'
    import axios from 'axios'
    import {toast} from 'react-toastify'
    import { AdminContext } from '../../Contexts/admincontext'
    const Query = () => {

    const {url,admindata,allissues,setallissues,getallqueries}=useContext(AdminContext)
    const [reply,setshowreply]=useState(false)

    //to get all issues from suer
    
    
    //close a issue

    const closeissue=async(id)=>{
        try{
                const response=await axios.post(url+'/query/remove',{id},{withCredentials:true})
                if(response.data.success){
                    toast.success("issue removed successfully")
                    await getallqueries()
                }
            
            }
            catch(error){
                console.log(error)
            }

    }


    //admnin sends messgaes
    const[formdata,setformdata]=useState({
        email:"",
        reply:"",
        
    })
    const handlechane=(e)=>{
        const {name,value}=e.target
        setformdata((item)=>({...item,[name]:value}))
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post(url+'/query/adminreply',formdata,{withCredentials:true})
            if(response.data.success){
                toast.success("mailed successfully")
                setshowreply(false)
                
            }
        }
        catch(error){
            console.log(error)
        }
    }



    useEffect(()=>{
        getallqueries()
    },[])


    return (
        <div className='querys'>
            <h1>User Issues</h1>
            <div className="inside">
                {allissues.map((issue,ind)=>{
                    return(
                        <div className="indi-issue" key={ind}>
                            <p><span className="titl">Name:</span>{issue.name}</p>
                            <p><span className="titl">Email:</span>{issue.email}</p>
                            <p><span className="titl">Issue:</span>{issue.query}</p>
                            <h1 className='closu' onClick={()=>closeissue(issue._id)}>X</h1>
                            <div className='btnn' onClick={()=>setshowreply(true)}>
                                Reply
                            </div>
                            <div className='btnn' onClick={()=>closeissue(issue._id)}>
                                close Issue
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            {reply &&<div className="replypopup">
                <form onSubmit={handlesubmit}>
                    <input type="text" name='email' placeholder='Email' value={formdata.email} onChange={handlechane}  />
                    <input type="text" name="reply" placeholder='Reply' value={formdata.reply} onChange={handlechane}/> 
                    
                    <button type='submit'>Send</button>
                </form>
            <p className='clos' onClick={()=>setshowreply(false)}>X</p>
                
            </div>}

        
        </div>
    )
    }

    export default Query
