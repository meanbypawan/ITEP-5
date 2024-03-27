import { useContext } from "react";
import { CounterContext } from "../App";

const C = ({getDataFromParent})=>{
    const {counter,setCounter} = useContext(CounterContext);
    return <>
      <h6>C Component...{counter}</h6>
      <button onClick={()=>setCounter(counter+1)}>C's counter button</button>
      <button onClick={()=>getDataFromParent("Hello Parent")}>Pass Data To Parent</button>
    </>
}

export default C;