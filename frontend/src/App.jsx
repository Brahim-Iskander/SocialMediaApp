import toast, { Toaster } from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Register from './Pages/Register.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
     
    </>
  )
}

export default App
