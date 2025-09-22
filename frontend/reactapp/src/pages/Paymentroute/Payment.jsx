import React, { useContext, useEffect } from 'react'
import './Payment.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AppointmentContext } from '../../contexts/context'
import axios from 'axios'

const Payment = () => {
  const [params] = useSearchParams(); 
  const success = params.get("success");
  const id = params.get("id");
  const navigate = useNavigate();
  const { url, fetchAppointments, getuserdata } = useContext(AppointmentContext);

  const setpaymentTrue = async (id) => { 
    try { 
      const response = await axios.post(url + '/appointment/updatepay', { id }, { withCredentials: true }) 
      if (response.data.success) {
        await fetchAppointments();
        setTimeout(() => {
          navigate('/')
          
        }, 3000);
       
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
          navigate('/')
          
        }, 3000);
    }
  }

  useEffect(() => {
    const handleSuccess = async () => {
      if (success === "true" && id) {
        await setpaymentTrue(id);
        await getuserdata();
      }
    }
    handleSuccess();
  }, [success, id]);

  return (
    <div className='paymentt'>
      {success === "true" 
        ? <p>✅ Payment success, appointment booked,Redirecting You shortly...</p> 
        : <p>❌ Payment failed!! ,Redirecting You shortly...</p>}
    </div>
  )
}

export default Payment
