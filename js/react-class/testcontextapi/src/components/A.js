import { useContext } from "react";
import B from "./B";
import { NameContext } from "../App";

const A = ()=>{
    const {name} = useContext(NameContext);
    return <>
      <h6>A Component... {name}</h6>
      <B/>
    </>
}

export default A;