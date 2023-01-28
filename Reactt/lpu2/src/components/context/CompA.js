import React from 'react'
import { useContext } from 'react'
import { FirstName, LastName } from '../../App'
import CompB from './CompB'

export default function CompA() {
    const fname = useContext(FirstName)
    const lname =  useContext(LastName)
  return (
    <div>
      <CompB/>
      <h1>My name is {fname} {lname} </h1>
    </div>
  )
}
