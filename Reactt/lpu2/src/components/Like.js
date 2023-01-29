import React from 'react'
import UseCounter from '../custom-hooks/Usecounter'

export default function Like() {
    const {count,increment} = UseCounter()
  return (
    <div>
      <button onClick={increment}>Like : {count}</button>
    </div>
  )
}
