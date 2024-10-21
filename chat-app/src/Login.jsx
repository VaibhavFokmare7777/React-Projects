import React, { useState } from 'react'
import "./login.css";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from './lib/firebase'
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {

    // handling uplaod image

    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const handleAvatar= e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
       
    }

    //Login functionality

    const handleLogin=e=>{
      e.preventDefault();
      toast.success("Login Successfully!!");
    }

   // Registration Functionality

    const handleRegister=async(e)=>{
      e.preventDefault();
      
      //create a FormData object from the form thast triggered the event

      const formData= new FormData(e.target); 

      //converting FormData object to regular Javascript object, extracting username, email and password
      const {username,email,password}=Object.fromEntries(formData);
     
      try{
        //register user using email and password using Authentication instatnce auth
        const res= await createUserWithEmailAndPassword(auth,email,password);
        // console.log("response :",res);
         toast.success("Sign up successfully!! you can login now");
        
         // for storing users data into firestore database
        await setDoc(doc(db, "users",res.user.uid), {
         username,
         email,
         id:res.user.uid,
         blocked:[],
        });
        //for storing users chats data into firestore database
        await setDoc(doc(db, "userchats",res.user.uid), {
          chats:[],
         });



      }catch(err){
        console.log(err);
        toast.error(err.code);
      }
      
    }
  return (

    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='Enter Email' name="email" />
            <input type="password" placeholder='Enter Password' name="password" />
            <button>Sign In</button>
        </form>
      </div>
      <div className="sepearator"></div>
      <div className="item">
        <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor='file'>
                <img src={avatar.url || './avatar.png'} alt="" />
                Upload an Image</label>
        <input type="file"  id="file" style={{"display":'none'}} onChange={handleAvatar} />
        <input type="text" placeholder='Username' name="username" />
            <input type="email" placeholder='Enter Email' name="email" />
            <input type="password" placeholder='Enter Password' name="password" />
            <button>Sign Up</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
