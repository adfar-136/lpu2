import React from 'react'
import Section from "./Section" 
export default function Header(props) {
  const sayhi =()=>{
    alert('hi')
  }
  return (
    <div>
      <Section text="sayHi" onclick={sayhi} name={props.name}/>
    </div>
  )
}
