import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import { AppointmentContext } from '../../contexts/context'
import {assets} from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Profile = () => {
  const {
    userdata,
    isloggedin,
    fetchAppointments,
    isuserAuth,url
  } = useContext(AppointmentContext)

  useEffect(() => {
    isuserAuth()
    if (isloggedin) {
      fetchAppointments()
    }
  }, [isloggedin])

  const profileImg = userdata?.image
    ? `http://localhost:5000/userimage/${userdata.image}`
    : assets.upload_icon





const[showupload,setshowupload]=useState(false)
const [imagefile,setimagefile]=useState(null)


const changeImage = async () => {
  if (!imagefile) {
    toast.error("Please select an image first");
    return;
  }

  const formData = new FormData();
  formData.append("image", imagefile); 

  try {
    const response = await axios.post(
      url + "/user/changeprofile",
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    if (response.data.success) {
      toast.success("Profile Image Updated");
      await isuserAuth();   
      setshowupload(false);
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to update profile image");
  }
};


const handleImageUpload = (event) => { const file = event.target.files[0]; setimagefile(file) }


  return (
    <div className='profile'>
      <div className="left-profile">
        <img src={profileImg} alt="profile" />
        <button onClick={()=>setshowupload(!showupload)}>Upload Profile Photo</button>

        {showupload && <input type="file" name='image' onChange={handleImageUpload}/>}
        {showupload && <button onClick={()=>changeImage()}>Update</button>}
      </div>

      <div className="right-profile">
        <div className="field"><span className="label">Name:</span> <span className="value">{userdata?.name || "-"}</span></div>
        <div className="field"><span className="label">Age:</span> <span className="value">{userdata?.age || "-"}</span></div>
        <div className="field"><span className="label">Blood Group:</span> <span className="value">{userdata?.bloodgroup || "-"}</span></div>
        <div className="field"><span className="label">Allergies:</span> <span className="value">{userdata?.allergys || "-"}</span></div>
        <div className="field"><span className="label">Address:</span> <span className="value">{userdata?.address || "-"}</span></div>
        <div className="field"><span className="label">Phone:</span> <span className="value">{userdata?.phone || "-"}</span></div>
        <div className="field"><span className="label">Emergency Contact:</span> <span className="value">{userdata?.emergencyContact || "-"}</span></div>
        <div className="field"><span className="label">Medical History:</span> <span className="value">{userdata?.medicalHistory || "-"}</span></div>
        <div className="field"><span className="label">Email:</span> <span className="value">{userdata?.email || "-"}</span></div>
      </div>
    </div>
  )
}

export default Profile
