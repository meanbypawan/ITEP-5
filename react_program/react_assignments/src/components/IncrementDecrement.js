import { useReducer, useState } from "react"

export const IncrementDecrement = ()=>{
    //const [counter,setCounter] = useState(0);
    const [counter,dispatch] = useReducer((state,action)=>{
       // action : {type: 'decrement',payload:}
       switch(action.type){
          case "increment":
           state = state + action.payload;
          break;
          case "decrement":
            state = state - action.payload;
            break;
       }
       return state;
    },100);
    return <>
       <button onClick={()=>dispatch({type:'increment',payload:5})}>Increment : ({counter})</button>
       <button onClick={()=>dispatch({type: 'decrement', payload:3})}>Decrement : ({counter})</button>
    </>
}