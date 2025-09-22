import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import { AdminContext } from '../../Contexts/admincontext';
import { assets } from '../../assets/assets';

const Dashboard = () => {
  const {
    admindata,
    getcurrdoc,
    currdoc,
    getcurrapts,
    currapts,
    patients,
  } = useContext(AdminContext);

  const [dashboardinfo, setdashboardinfo] = useState({
    earnings: '',
    patients: '',
    appointments: '',
  });

  
  useEffect(() => {
    const fetchData = async () => {
      if (admindata && admindata.email) {
        await getcurrdoc();
        await getcurrapts();
      }
    };
    fetchData();
  }, [admindata]);

  
  useEffect(() => {
    if (currdoc && currapts.length > 0 && patients.length > 0) {
      const aptcount = currapts.length;

      const patientset = new Set();
      currapts.forEach((apt) => {
        const currpatient = patients.find(
          (pat) => pat._id.toString() === apt.patient.toString()
        );
        if (currpatient) patientset.add(currpatient._id.toString());
      });
      const patientcount = patientset.size;

      let earning = 0;
      currapts.forEach((apt) => {
        if (apt.status.paid) {
          earning += Number(currdoc.fees);
          if (apt.status.completed === 'cancelled') {
            earning -= Number(currdoc.fees);
          }
        }
      });

      setdashboardinfo({
        earnings: earning.toString(),
        patients: patientcount.toString(),
        appointments: aptcount.toString(),
      });
    }
  }, [currdoc, currapts, patients]);

  

  return (
    <div className="dashboard">
      <div className="dashhead">
        <h1>{currdoc.name}</h1>
        <h2>{currdoc.speciality}</h2>
      </div>

      <div className="logoo">
        <div className="earnings">
          <img src={assets.earning_icon} alt="" />
          <h4>${dashboardinfo.earnings}</h4>
        </div>

        <div className="earnings">
          <img src={assets.patients_icon} alt="" />
          <h4>{dashboardinfo.patients}</h4>
        </div>

        <div className="earnings">
          <img src={assets.appointments_icon} alt="" />
          <h4>{dashboardinfo.appointments}</h4>
        </div>
      </div>

      <div className="patients">
        {currapts.map((apt, ind) => {
          const patient = patients.find(
            (pat) => pat._id.toString() === apt.patient.toString()
          );
          if (!patient) return null;
          return (
            <div className="patts" key={ind}>
              <p>Name: {patient.name}</p>
              <p>Payment: {apt.status.paid ? 'Paid' : 'Yet to pay'}</p>
              <p>Status: {apt.status.completed}</p>
              <p>
                Date: {apt.time.day} / {apt.time.date} - {apt.time.timing}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
