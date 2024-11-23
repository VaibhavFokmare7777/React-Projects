import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
const LoginPopUp = ({setShowLogin}) => {
    const [currStatus,setCurrStatus]=useState("Login");
  return (
    <div className='login-popup'>
      <form  className="login-container">
        <div className="title">
        {currStatus}
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
        </div>

        <div className="login-inputs">
            {currStatus==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />

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
