import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const signIn  = ()=>{
        axios.post("http://localhost:3000/user/signIn",{email,password})
        .then(response=>{
            if(response.status==200){
                toast.success("Sign in success....");
                sessionStorage.setItem("current-user",email);
                sessionStorage.setItem("isLoggedIn","true");
                navigate("/home");
            }
        }).catch(err=>{
            console.log(err);
            toast.error("Sign in falied..");
        });
    }
    return <>
      <ToastContainer/>
      <div className="container main">
        <div className="signin-form">
            <div className="form-group">
                <label>Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type='text' placeholder="Enter email" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input onChange={(event)=>setPassword(event.target.value)} type='password' placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group">
               <button onClick={signIn} className="btn btn-secondary">Sign In</button>
               <Link className="ml-3" to="/signup">New user ?</Link>
            </div>
        </div>
      </div>   
    </>
}