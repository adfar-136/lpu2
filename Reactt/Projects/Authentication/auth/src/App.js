
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import { auth } from './firebase'
import Todo from './Todo/Todo'

export default function App() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.email.substr(0,user.email.indexOf("@")))
      }
      else setUsername("")
    })
  },[])
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/todo' element={<Todo name={username}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

