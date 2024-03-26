import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import Counter from './components/Counter';
import MultiStateCounter from './components/MultiStateCounter';
import Product from './components/Product';

function App() {
  return <>
    {/* <Counter/>
    <MultiStateCounter/> */}
    <div className="container">
      <Product/>
    </div>
  </>
}

export default App;
