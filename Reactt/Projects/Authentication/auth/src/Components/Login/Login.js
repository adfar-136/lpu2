import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from "./Login.module.css"
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
// import styles from "../Signup/SignUp.module.css"
export default function Login() {
    const [values,setValues] = useState({
        email:"",
        pass:""
    })
    const navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState("")
    const handleSubmission=()=>{
           if(!values.email || !values.pass){
            setErrorMsg("Fill All Fields")
            return
           }
           signInWithEmailAndPassword(auth,values.email,values.pass)
           .then((res)=>{
            console.log(res)
            navigate("/todo")
           }).catch((err)=>{
            setErrorMsg(err.message)
           })

    }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <InputForm type="email" label="Email" placeholder="Enter Your Email"
             onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
             <InputForm type="password" label="Password" placeholder="Enter Your Password"
             onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
        
        <div className={styles.footer}>
               <b className={styles.error}>{errorMsg}</b>
               <button onClick={handleSubmission} >Login</button>
               <p>Already have an account? {" "}</p>
               <span>
                <Link to='/signup'>Login</Link>
               </span>
             </div>
             </div>
    </div>
  )
}
