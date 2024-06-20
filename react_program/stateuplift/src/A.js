import { useRef } from "react"

export default function A({message,setMessage}){
    let textInput = useRef();
    return <>
      <h3>A component: {message}</h3> 
      <input ref={textInput} type="text"/>
      <button onClick={()=>setMessage(textInput.current.value)}>Send To B</button>
      <hr/>
    </>
}