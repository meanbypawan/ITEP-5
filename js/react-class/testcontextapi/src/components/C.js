import { useContext } from "react";
import { FruitContext, NameContext } from "../App";

const C = ()=>{
   const {name} = useContext(NameContext);
   const {fruitList} = useContext(FruitContext);
    return <>
      <h6>C Component...{name}</h6>
      {fruitList}
    </>
}

export default C;