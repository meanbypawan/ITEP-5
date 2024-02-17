import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './components/Counter';
import EvenOddCounter from './components/EvenOddCounter';
import InputComponent from './components/InputComponent';
export default class App extends Component{
  render(){
    return <>
      <Counter/>
      <hr/>
      <EvenOddCounter/>
      <hr/>
      <InputComponent/>
      <hr/>
    </>
  }
}