import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter,decrementCounter } from './redux/actions/counterAction'
class Counter extends Component {
  render() {
    const {count,incrementCount,decrementCount} = this.props
    return (
      <div>
        <button onClick={()=>decrementCount()}>-</button>
        <h1>{count}</h1>
        <button onClick={()=>incrementCount()}>+</button>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
   count:state
})
const mapDispatchToProps =(dispatch)=>({
   decrementCount:()=>dispatch(decrementCounter()),
   incrementCount:()=>dispatch(incrementCounter())
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
