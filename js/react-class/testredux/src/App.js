import logo from './logo.svg';
import './App.css';
import A from './components/A';
import B from './components/B';
import { useSelector } from 'react-redux';
import Category from './components/Category';

function App() {
  const {a,b} = useSelector((store)=>store.Data);
  return <>
    {/* <h1>App Component [a : {a} , b : {b}]</h1>
    <A/>
    <B/> */}
    <Category/>
  </>
}

export default App;
