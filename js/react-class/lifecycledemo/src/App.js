import logo from './logo.svg';
import './App.css';
import React, {Suspense } from 'react';
import Second from './components/Second';

import First from './components/First';
import { Link, Route, Routes } from 'react-router-dom';
import Third from './components/Third';
// const Third = React.lazy(()=>import("./components/Third"));
function App(){
   return <>
      <h1>App component...</h1>
      <Link to="/first">First Component</Link>
      <Link to="/second">Second Component</Link>
      <Link to="/third">Third Component</Link>
      <Routes>
        <Route path='first' element={<First/>}/>
        <Route path='second' element={<Second/>}/>
        {/* <Route path='third' element={<Suspense fallback={<div>Third Loading</div>}><Third/></Suspense>}/> */}
        <Route path='third' element={<Third/>}/>
      </Routes>
    </>
}
export default App;
