import {Routes, Route} from 'react-router-dom'
import React, { use } from 'react'
import './App.css'
import { useEffect } from 'react'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Notfound from './Pages/Notfound.jsx'
import axios from 'axios'

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
     
    </>
  )
}

export default App;
