import React from 'react'
import styles from "./ImputForm.module.css"
export default function InputForm(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}<br/>
      <input {...props}/>
    </div>
  )
}
