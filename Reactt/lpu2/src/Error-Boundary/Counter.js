import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    handleclick=()=>{
        console.log("adfar")
        this.setState(({counter})=>({
            counter:counter+1

        }))
    }
  render() {
    if(this.state.counter===3){
        throw new Error("Crashed !!!!!!!")
    }
    return (
        <h1 onClick={this.handleclick}>{this.state.counter}</h1>
    )
  }
}
