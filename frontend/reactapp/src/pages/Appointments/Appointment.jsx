import React, { useContext, useEffect, useState } from 'react';
import './Appointment.css';
import { AppointmentContext } from '../../contexts/context';
import axios from 'axios';

const Appointment = () => {
  const { url, userdata, userAppointments,isloggedin, setuserAppointments, isuserAuth, doctors, getallDoctors, fetchAppointments, getuserdata } = useContext(AppointmentContext);

  const [filteredAppointments, setfilteredAppointments] = useState([]);

 
  const getcurrappointments = () => {
  console.log('userAppointments:', userAppointments);
  console.log('userdata:', userdata);
  if (userdata._id && userAppointments.length > 0) {
    const filtered = userAppointments.filter((appointment) => appointment.patient.toString() === userdata._id.toString());
    console.log('filtered:', filtered);
    setfilteredAppointments(filtered);
  } else {
    setfilteredAppointments([]);
  }
};

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      await isuserAuth(); 
      await getallDoctors();
      await fetchAppointments(); 
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    getcurrappointments();
  }, [userAppointments, userdata]);

  // Payment functions
  const setpaymentTrue = async (id) => {
    try {
      const response = await axios.post(url + '/appointment/updatepay', { id }, { withCredentials: true });
      if (response.data.success) {
        await fetchAppointments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makePayment = async (price, id) => {
    try {
      const response = await axios.post(url + '/appointment/makepayment', { price, id }, { withCredentials: true });
      if (response.data.success) {
        window.location.href = response.data.session_url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="appointment">
      <div className="appoint-heading">
        {isloggedin && <h1>{userdata.name}'s Appointments</h1>}
      </div>
      <div className="appoint-list">
        {filteredAppointments.map((apt, ind) => {
          const doctor = doctors.find((doc) => doc._id.toString() === apt.doctor);
          return (
            <div className="appoint-indi" key={ind}>
              <div className="innercont">
                <h1>{doctor?.name || 'Unknown Doctor'}</h1>
                <div className={`pinger ${apt.status.paid ? 'green' : 'red'}`}></div>
              </div>
              <p>Appointment:</p>
              <p className="timing">
                Day: <span className="valll">{apt.time.day}</span>
              </p>
              <p className="timing">
                Date: <span className="valll">{apt.time.date}</span>
              </p>
              <p className="timing">
                Time: <span className="valll">{apt.time.timing}</span>
              </p>
              <p className="statuss">
                Status: <span className="valll">{apt?.status?.completed ? 'Completed' : 'Yet to see'}</span>
              </p>
              <div className="paycont">
                <p className="payment">
                  Payment: <span className="valll">{apt?.status?.paid ? 'Paid' : 'Payment pending'}</span>
                </p>
                {!apt.status.paid && (
                  <button onClick={() => makePayment(doctor.fees, apt._id)}>Pay</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appointment;