import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, incrementEvenCounter, incrementOddCounter } from "../redux-config/CounterSlice";

const B  = ()=>{
    const {counter,evenCounter,oddCounter} = useSelector((store)=>store.Counters);
    const dispatch = useDispatch();
    return <>
       <h3>B component..</h3>
       <button onClick={()=>dispatch(incrementCounter())}>Counter : {counter}</button>
       <button onClick={()=>dispatch(incrementEvenCounter())}>Even Counter : {evenCounter}</button>
       <button onClick={()=>dispatch(incrementOddCounter())}>Odd Counter : {oddCounter}</button>
    </>
}

export default B;