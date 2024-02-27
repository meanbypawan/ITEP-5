import { useRef, useState } from "react";
import Header from "./components/Header";

function App(){
  const [counter,setCounter] = useState(100);
  const [evenCounter,setEvenCounter] = useState(0);
  const [oddCounter,setOddCounter] = useState(1);
  const [message,setMessage] = useState("");
  const [secondMessage,setSecondMessage] = useState("");

  const [dataList, setDataList] = useState([{name: "A",age: 22},{name: "B",age: 21}]);
  let messageValue = useRef(null);

  const incrementCounter = ()=>{
    //counter = counter + 1;
    setCounter(counter+1);
  }
  const showMessage = ()=>{
     setMessage(messageValue.current.value);
  }
  return <>
    <h1>App Component...</h1>
    <Header/>
    <button onClick={incrementCounter}>Counter : {counter}</button>
    <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter : {evenCounter}</button>
    <button onClick={()=>setOddCounter(oddCounter+2)}>Odd Counter : {oddCounter}</button>
    <br/><br/>
    <input ref={messageValue}  type="text"/> <button onClick={showMessage}>Show Message</button> <br/><br/>
    <br/>

    <p>My Message : {message}</p>
    {dataList.map((data,index)=><p key={index}>
      {data.name} : {data.age}
    </p>)}
    <hr/>
    <hr/>
    <input onChange={(event)=>setSecondMessage(event.target.value)} type="text"/> 
    <h1>{secondMessage}</h1>
  </>
}

export default App;