import { Navigate } from "react-router-dom";

export default ({children})=>{
    if(sessionStorage.getItem("isLoggedIn")=="true")
     return children;
    else
     return <Navigate to="/"/> 
}