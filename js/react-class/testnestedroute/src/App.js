import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
import FeatureProduct from './components/FeatureProduct';

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="product" element={<Product/>}>
        <Route index element={<NewProduct/>}/>
        <Route path='feature-product' element={<FeatureProduct/>}/>
      </Route>
    </Routes>
  </>
    
}

export default App;
