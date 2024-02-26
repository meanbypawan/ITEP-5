import { Component } from "react";

export default class FirstCounter extends Component{
    render(){
        return <>
          <h1>First Counter Component</h1>
          <button onClick={this.props.changeCounter}>Change Counter From First</button>
          <hr/>
        </>
    }
}