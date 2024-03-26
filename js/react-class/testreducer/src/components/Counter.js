import { useReducer } from "react";

const Counter = ()=>{
    const [counter,dispatch] = useReducer((state,action)=>{
        switch(action){
          case "increment": state = state + 1;
                            return state;  
          case "decrement" : state = state - 1;
                            return state;                  
          case "reset": return 100;    
        }
      },100);
    
    return <>
    <h1>Counter  : {counter}</h1>
    <button onClick={()=>dispatch("increment")}>Increment</button>&nbsp;&nbsp;
    <button onClick={()=>dispatch("decrement")}>Decrement</button>&nbsp;
    <button onClick={()=>dispatch("reset")}>Reset</button>    

    </>
}
export default Counter;