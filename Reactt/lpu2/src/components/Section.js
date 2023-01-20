import React from 'react'

export default function Section(props) {
  return (
    <div>
        {props.name}
        <button onClick={props.onclick}>{props.text}</button>
    </div>
  )
}
//Prop drilling