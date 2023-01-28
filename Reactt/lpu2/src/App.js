import React from 'react'
import { useState } from 'react'

export default function App() {
  const [name,setName] =useState('')
  const [email,setemail] = useState('')
  const [password,setPassword] = useState('')
  const [isloggedIn,setIsloggedIn] = useState(false)
  const login = (e)=>{
    const userData = {
      name,
      email,
      password
    }
    localStorage.setItem('token-info',JSON.stringify(userData))
    setIsloggedIn(true)
    setName('')
    setemail('')
    setPassword('')
  }
  const logout=()=>{
    localStorage.removeItem('token-info')
    setIsloggedIn(false)
  }
  return (
    <div>
      <h1>This is local storage login logout</h1>
      {!isloggedIn ? (
        <form>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" value={name} />
          <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" value={email} />
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" value={password} />
          <button onClick={login}>Login</button>
        </form>
      ) : (
        <>
        <h1>User is Logged In</h1>
        <button onClick={logout}>  Logout</button>
        </>
      )}
    </div>
  )
}
