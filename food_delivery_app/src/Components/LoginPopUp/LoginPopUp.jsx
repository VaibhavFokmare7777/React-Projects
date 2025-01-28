import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopUp = ({ setShowLogin }) => {
  const [currStatus, setCurrStatus] = useState("Sign Up");

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    emailId: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currStatus === "Sign Up"
      ? "http://localhost:8080/api/auth/register"
      : "http://localhost:8080/api/auth/login";

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success(currStatus === "Sign Up" ? "Registration successful!" : "Login successful!");
        setTimeout(() => setShowLogin(false), 3000); // Delay pop-up closure to show toast
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data || "Something went wrong!");
    }
   
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-container">
        <div className="title">
          {currStatus}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-inputs">
          {currStatus === "Sign Up" && (
            <>
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lName"
                value={formData.lName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </>
          )}
          <input
            type="email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <i
              className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
        </div>
        <button type="submit">
          {currStatus === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currStatus === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrStatus("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrStatus("Login")}>Login here</span>
          </p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPopUp;
