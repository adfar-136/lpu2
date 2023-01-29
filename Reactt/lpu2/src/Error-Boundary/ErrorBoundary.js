import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {error:null,errorInfo:null,}
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
                <h2>An error has occured</h2>
                <h1>
                    {this.state.error && this.state.error.toString()}<br/>
                    {this.state.errorInfo.componentStack}
                </h1>
            </div>
        )
    }
    return this.props.children
  }
}
