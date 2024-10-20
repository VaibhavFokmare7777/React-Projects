// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChADnnb3D3Borbb_tl8q9miLtze3SL7YM",
  authDomain: "reactchatapp-5b7c9.firebaseapp.com",
  projectId: "reactchatapp-5b7c9",
  storageBucket: "reactchatapp-5b7c9.appspot.com",
  messagingSenderId: "722631992469",
  appId: "1:722631992469:web:e8a8c2e65fc5288a13679c"
};

console.log("API Key:", process.env.REACT_APP_API_KEY || process.env.API_KEY);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export const storage= getStorage();