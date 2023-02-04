// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtGEFXvUMzT0ZZx5BAdf6eMfPHGKF5aa4",
  authDomain: "lpu2-c6f06.firebaseapp.com",
  projectId: "lpu2-c6f06",
  storageBucket: "lpu2-c6f06.appspot.com",
  messagingSenderId: "217926006220",
  appId: "1:217926006220:web:4fcea01c340c4b72275969",
  measurementId: "G-YP1KW63RJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}