import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import { useState } from 'react';

function App() {
  const [message,setMessage] = useState("");
  return <>
    <h1>App Component..</h1>
    <hr/>
    <A message={message} setMessage={setMessage}/>
    <B message={message} setMessage={setMessage}/>
  </>
}

export default App;
