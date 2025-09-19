import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Add from './pages/Adddoc/Add'
import List from './pages/ListDocs/List'
import Appointment from './pages/Appointments/Appointment'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
   
    
   

<div className="app">
  <ToastContainer/>
  <Navbar />
  <hr />
  <div className="main-layout" style={{ display: 'flex' }}>
    <Sidebar />
    <div className="page-content" style={{ flex:1, padding: '20px' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List />} />
        <Route path='/appointments' element={<Appointment />} />
      </Routes>
    </div>
  </div>
</div>

    
    
  )
}

export default App
