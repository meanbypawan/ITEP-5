import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 500
        }; 
    }
    incrementCounter = ()=>{
        this.setState({counter: this.state.counter + 1});
    }
    render(){
        return <>
           <h1>Counter Component</h1>
           <button onClick={this.incrementCounter}>Counter : {this.state.counter}</button>
        </>
    }
}