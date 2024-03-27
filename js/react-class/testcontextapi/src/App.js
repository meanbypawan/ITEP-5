import logo from './logo.svg';
import './App.css';
import A from './components/A';
import { createContext } from 'react';

export const NameContext = createContext();
export const FruitContext =  createContext();
function App() {
  const name = "InfoBeans Foundation";
  return <>
    <h3>App Component...</h3>
    <FruitContext.Provider value={{fruitList:["Mango","Apple","Banana","Lemon"]}}>
     <NameContext.Provider value={{name:"InfoBeans Foundation", address:"Rajmohalla, City Nursing Home"}}>
      <A/>
     </NameContext.Provider>
    </FruitContext.Provider>
  </>
}

export default App;
