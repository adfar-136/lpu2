import React, { useState } from 'react'

export default function Message() {
    const [text,setText] = useState("")
    function onChange(e){
        setText(e.target.value)
    }
    const onUpper =()=>{
        let upper = text.toUpperCase()
        setText(upper)
    }
    const onLower = ()=>{
        let lower = text.toLowerCase()
        setText(lower)
    }
    const onClear = ()=>{
        setText("")
    } 
    const onCopy =()=>{
        let Text = document.getElementById("box")
        console.log(Text)
        Text.select()
        navigator.clipboard.writeText(Text.value)
    }
  return (
    <div className='container my-3'>
       
<div  className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Anything Textbox</label>
  <textarea value={text}  className="form-control" 
  id="box" rows="9" onChange={(e)=>{onChange(e)}}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={onUpper}>UpperCase</button>
<button type="button" className="btn btn-secondary" onClick={onLower}>LowerCase</button>
<button type="button" className="btn btn-success" onClick={onClear}>Clear</button>
<button  type="button" className="btn btn-danger" onClick={onCopy}>Copy</button>
    <div>
        <h1>Your Text Summary</h1>
        <p>{text.split("").length} words and {text.length} letters</p>
    </div>
    </div>
  )
}
