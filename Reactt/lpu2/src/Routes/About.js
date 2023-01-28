import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {
  const navigate = useNavigate()
  const goToContact=()=>{
   navigate(-2)
  }
  return (
    <>
    <div>About
    <button onClick={()=>{goToContact()}}>Go to Contact Page</button>

    </div>
    </>
  )
}
