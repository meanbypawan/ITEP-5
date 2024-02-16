import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';

class App extends Component{
  render(){
    return <>
      <ProductList/>    
    </>
    // let data = [<h1>"Mango"</h1>,<h1>"Banana"</h1>,<h1>Apple</h1>,<h1>Pineapple</h1>];
    // return <>
    //    <h1>It is app component...</h1>
    //    <hr/>
    //    {data}
    // </>

    // let data = ["Mango","Banana","Apple","Pineapple","Straw Berry","Watermelon"];
    // let message = "Hello Friends.....";
    // let age = 2;
    
    // return <>
    //   <h1>It is App Component</h1>
    //   <hr/>
    //   {data.map((fruit,index)=><p key={index}>{fruit} : {index}</p>)}
      
    //   {age >=18 ? <>
    //      <h1>You are eligible for voting</h1>
    //      <h1>You are eligible for marriage</h1>
    //      <h1>You are eligible for job</h1>
    //   </> : <h1>You can't do anything</h1>}
    // </>
  }
}

export default App;
