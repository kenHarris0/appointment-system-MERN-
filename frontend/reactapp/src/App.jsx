import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Doc from './pages/Alldocs/Doc'
import { useState } from 'react'
import Login from './pages/Login/Login'
import {ToastContainer} from 'react-toastify'
import Doctorpage from './pages/DoctorPage/Doctorpage'
const App = () => {
  const[showLoginPage,setshowLoginPage]=useState(false)
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar setshowLoginPage={setshowLoginPage} showLoginPage={showLoginPage}/>
      {showLoginPage && <Login setshowLoginPage={setshowLoginPage}/>}
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/alldoctors' element={<Doc/>}/>
            <Route path='/doctorpage/:id' element={<Doctorpage/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
