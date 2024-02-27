import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
    console.log("constructor called...");
  }
  componentDidMount(){
    console.log("ComponentDidMount called...");
  }
  componentDidUpdate(){
    console.log("ComponentDidUpdate called....");
  }
  componentWillUnmount(){
    console.log("componentWillUnMount called.....");
  }
  render(){
    console.log("Render called....");
    return <>
      <h1>App Component..</h1>
      <button onClick={()=>this.setState({counter: this.state.counter+1})}>Counter :{this.state.counter}</button>
      <hr/>
    </>
  }
}
export default App;
