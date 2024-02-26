import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import First from './components/First';
import FirstCounter from './components/FirstCounter';

class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
  }
  changeCounter = ()=>{
    this.setState({counter: this.state.counter+1});
  }
  render(){
    let message = "Hello How R U ?";
    return <>
      <h1>App Component</h1>
      <h3>Counter : {this.state.counter}</h3>
      <button onClick={this.changeCounter}>Increment Counter</button>
      <hr/>
      <FirstCounter changeCounter = {this.changeCounter}/>
      {/* <First dataMessage={message} a={10} b = "welcome"/> */}
    </>
  }
}
export default App;
