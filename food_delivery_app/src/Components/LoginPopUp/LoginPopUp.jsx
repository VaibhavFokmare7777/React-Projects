import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

const LoginPopUp = ({setShowLogin}) => {
    const [currStatus,setCurrStatus]=useState("Login");

    const[formData,setFormData]=useState({
      name:'',
      email:'',
      password:'',
    })
    const [formVisible, setFormVisible] = useState(true); 
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    //handle form input changes

    const handleChange=e=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value,
      });
    };

    //Handle form submission using axios

    const handleSubmit=async(e)=>{
      e.preventDefault();

      try{
      const response=await axios.post("http://localhost:8080/register",formData,{
        headers:{
          'Content-Type':'application/json',
        },
      });
      if(response.status==200){
        alert("Registration successful");
        setFormData({ name: "", email: "", password: "" }); // Clear form inputs
        setFormVisible(false);
      }
      else{
        alert("Registration failed");
      }
    }
    catch(error){
      console.log(error);
      alert("Something wend wrong!");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev); // Toggle the visibility state
  };
  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit}  className="login-container">
        <div className="title">
        {currStatus}
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
        </div>

        <div className="login-inputs">
            {currStatus==="Login"?<></>:<input type="text"   name="name"
  value={formData.name} onChange={handleChange} placeholder='Your Name' required/>}
            <input type="email" name="email"
  value={formData.email} onChange={handleChange}  placeholder='Your Email' required />
            <input
          
              type={passwordVisible ? 'text' : 'password'} // Toggle between text and password type
              onChange={handleChange} name="password" value={formData.password}
              placeholder="Password"
              required
            />
             <i
              className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} // FontAwesome eye icon toggle
              onClick={togglePasswordVisibility} // Toggle the visibility when clicked
              style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
              aria-hidden="true"
            ></i>

        </div>
        <button>{currStatus==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currStatus==="Login"? <p>Create a new account?<span onClick={()=>setCurrStatus("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrStatus("Login")}>Login here</span></p>}
       
        
      </form>
    </div>
  )
}

export default LoginPopUp
