import React from 'react'
import { useParams } from 'react-router-dom'

export default function Employeedetails() {
    const params = useParams()
    const Eid = params.Eid
  return (
    <div>
      Employee details {Eid}
    </div>
  )
}
