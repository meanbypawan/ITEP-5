import { useRef } from "react"

export default function B({message,setMessage}){
    let textInput = useRef("");
    return <>
      <h3>B component : {message}</h3>
      <input ref={textInput} type="text"/>
      <button onClick={()=>setMessage(textInput.current.value)}>Send To A</button>
      <hr/>
    </>
}