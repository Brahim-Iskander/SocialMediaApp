import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({...data});
  function validateForm() {
    let isValid = true;
    const newErrors = {};

    if (data.email === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (data.password === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  }

  const sendForm = async (e) => {
    e.preventDefault();
    if (validateForm()==true) {
    try {
      const res =await axios.post('https://socialmediaapp-1-myun.onrender.com/users/signin', data);
      localStorage.setItem('user_data',JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');

      setData({
        email: '',
        password: ''
      });
      setErrors({});
      nav('/home');
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  }
    else{
      toast.error('Please fill in all required fields correctly.');
      return;
    }}
    

  return (
    <form onSubmit={sendForm}>
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          id="email"
          type="email"
          className="form-control"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          aria-describedby="emailHelp"
        />
        {<div>{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {<div>{errors.password}</div>}
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}
