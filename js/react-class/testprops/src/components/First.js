import { Component } from "react";
import Second from "./Second";

export default class First extends Component{
    // this (state,props)
    render(){
        const {dataMessage,a,b} = this.props;
        return <>
           <h1>First Component</h1>
           <p>Message From Parent : {dataMessage}</p>
           <p>a : {a}</p>
           <p>b : {b}</p>
           <Second messageFromFirst={this.props.dataMessage}/>
           <hr/>
        </>
    }
}