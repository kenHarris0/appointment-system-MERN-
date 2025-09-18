import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Doc from './pages/Alldocs/Doc'
import { useState } from 'react'
import Login from './pages/Login/Login'
const App = () => {
  const[showLoginPage,setshowLoginPage]=useState(false)
  return (
    <div className='app'>
      <Navbar setshowLoginPage={setshowLoginPage} showLoginPage={showLoginPage}/>
      {showLoginPage && <Login setshowLoginPage={setshowLoginPage}/>}
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/alldoctors' element={<Doc/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
