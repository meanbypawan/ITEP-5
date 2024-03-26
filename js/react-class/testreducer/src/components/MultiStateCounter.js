import { useReducer } from "react";

const MultiStateCounter = ()=>{
    const [state,dispatch] = useReducer((state,action)=>{
      if(action.type==="incrementA"){
        state.a = state.a + action.payload;
        return {...state};
      }
      else if(action.type === "incrementB"){
        state.b = state.b + action.payload;
        return {...state};
      }
      else if(action.type==="incrementC"){
        state.c = state.c + action.payload;
        return {...state};
      }
    },{a:10,b:20,c:30});
    return <>
      <h1>MultiStateCounter...</h1>
      <h3>A:({state.a}) , B:({state.b}), C:({state.c})</h3>
      <button onClick={()=>dispatch({type:"incrementA", payload:2})}>Increment - A</button>&nbsp;&nbsp;
      <button onClick={()=>dispatch({type:"incrementB", payload:3})}>Increment - B</button>&nbsp;&nbsp;
      <button onClick={()=>dispatch({type:"incrementC", payload:4})}>Increment - C</button>&nbsp;&nbsp;
    </>
}

export default MultiStateCounter;