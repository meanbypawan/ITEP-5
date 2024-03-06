import { Link } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const signUp = ()=>{
      axios.post("http://localhost:3000/user/save",{name,email,password})
      .then(response=>{
        if(response.status == 200){
            toast.success("Sign up success...");
        }
      }).catch(err=>{
        console.log(err);
        toast.error("Signup failed...");
      })
    }
    return <>
      <ToastContainer/>
      <div className="container main">
        <div className="signin-form">
            <div className="form-group">
                <label>Name</label>
                <input onChange={(event)=>setName(event.target.value)} type='text' placeholder="Enter name" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type='text' placeholder="Enter email" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group">
               <button onClick={signUp} className="btn btn-secondary">Sign Up</button>
               <Link className="ml-3" to="/">Already have account ?</Link>
            </div>
        </div>
      </div>   
    </>
}