import React from 'react'

export default function Number({numbers}) {
    const Numbers = numbers.map((x)=> <li>{x}</li>)
  return (
    <div>
      {Numbers}
    </div>
  )
}
