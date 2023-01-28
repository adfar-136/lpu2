import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)
    const incrementOne =()=>{
        setcounterOne(counterOne+1)
    }
    
    const fun =useCallback(()=>{
        console.log("adfar")
    },[counterTwo])
  return (
    <div>
        <Child counterTwo={counterTwo} fun={fun}/>
      <button onClick={incrementOne}>CounterOne : {counterOne}</button>
    </div>
  )
}
