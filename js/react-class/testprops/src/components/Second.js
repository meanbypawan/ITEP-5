import { Component } from "react";

export default class Second extends Component{
    render(){
        return <>
          <h1>Second Component</h1>
          <p>Message From First:  {this.props.messageFromFirst}</p>
          <hr/>
        </>
    }
}