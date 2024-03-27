import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import A from './components/A';

export const CounterContext = createContext();
function App() {
  const [counter,setCounter] = useState(100);

  return <>
     <h1>App component : {counter}</h1>
     <CounterContext.Provider value={{counter,setCounter}}>
       <A/>
     </CounterContext.Provider>
  </>
}

export default App;
