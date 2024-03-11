import { useNavigate } from "react-router-dom";
import "../App.css";
export default ()=>{
    const navigate = useNavigate();
    const signOut = ()=>{
        sessionStorage.clear();
        navigate("/");
    }
    return <>
      <div>
        <header className="header bg-dark text-white">
           <div className="container">
             <div className="row">
                <div className="col-md-3">
                    <img src="logo512.png"/>
                    <br/>
                    <small className="text-white">Shopping App</small>
                </div>
                <div className="col-md-6">
                   <div className="search-input"> 
                    <input type="text" placeholder="Search product"/>
                   </div>
                </div>
                <div className="col-md-3">
                    <div className="options">
                        <small>View Cart</small>
                        <small onClick={signOut} style={{cursor:"pointer"}}>Sign out</small>
                    </div>
                </div>
             </div>
           </div>
        </header>
      </div>
    </>
}