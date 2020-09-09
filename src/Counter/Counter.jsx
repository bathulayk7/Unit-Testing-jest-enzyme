import React, { Component } from 'react'

class Counter extends Component {
    state={ value:0}

    incr=()=>this.setState({value:this.state.value+1})
    decr=()=>this.setState({value:this.state.value-1})

    render() {
        return (
            <div>
            <h1>{this.state.value}</h1>            
            <button id="first-button" onClick={this.incr}>+</button>
            <button id="second-button" onClick={this.decr}>-</button> 
            </div>
        )
    }
}

export default Counter
      