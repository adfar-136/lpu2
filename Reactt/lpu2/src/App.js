import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.name = React.createRef()
    this.password = React.createRef()
  }
  submitHandler(event){
     event.preventDefault()
     console.log(this.name.current.value,this.password.current.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={(event)=>{this.submitHandler(event)}}>
          <h1>Uncontrolled Components</h1>
          <input type="text" placeholder='Enter name' ref={this.name} /> <br /><br />
          <input type="password" placeholder='Enter password' ref={this.password}/> <br /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

