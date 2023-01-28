import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adfar() {
 const navigate = useNavigate()
  const goToAbout=()=>{
      navigate('/about')
  }
  return (
    <div>
        
        Adfar
       <button onClick={()=>{goToAbout()}}>Go to About Page</button>
        
    </div>
  )
}
