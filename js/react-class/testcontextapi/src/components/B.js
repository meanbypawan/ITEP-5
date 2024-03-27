import { useContext } from "react";
import C from "./C";
import { NameContext } from "../App";

const B = ()=>{
    const {name,address} = useContext(NameContext);
    return <>
      <h6>B Component...{name} : {address}</h6>
      <C/>
    </>
}

export default B;