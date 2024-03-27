import { useContext } from "react";
import B from "./B";
import { CounterContext } from "../App";

const A = ()=>{
    const {counter,setCounter} = useContext(CounterContext);
    return <>
      <h6>A Component... {counter}</h6>
      <button onClick={()=>setCounter(counter+1)}>A's counter button</button>
      <B/>
    </>
}

export default A;