import { useContext, useState } from "react";
import C from "./C";
import { CounterContext } from "../App";

const B = ()=>{
    const {counter,setCounter} = useContext(CounterContext);
    const [name,setName] = useState("");
    const getDataFromParent = (data)=>{
      setName(data);
    }
    return <>
      <h6>B Component...{counter} : {name}</h6>
      <button onClick={()=>setCounter(counter+1)}>B's counter button</button>
      <C getDataFromParent = {getDataFromParent}/>
    </>
}

export default B;