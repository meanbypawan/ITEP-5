import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import ProductList from './components/ProductList';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/products' element={<ProductList/>}/>
    </Routes>
  </>
}

export default App;
