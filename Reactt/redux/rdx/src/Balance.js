import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './redux'


export default function Balance() {
  const dispatch  = useDispatch()
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      <button onClick={()=>{withdrawMoney(1000)}}>-</button>
      Update Balance
      <button onClick={()=>{depositMoney(343)}}>+</button>
      <button onClick={()=>{depositMoney(364)}}>++++</button>
    </div>
  )
}
