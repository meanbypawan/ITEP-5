import { useSelector } from "react-redux";

const A  = ()=>{
    const {name,age,contact} = useSelector((store)=>store.Person);
    return <>
       <h3>A component..{name} : {age} : {contact}</h3>
    </>
}

export default A;