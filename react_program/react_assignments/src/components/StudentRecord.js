import { useContext, useReducer, useRef, useState } from "react"
import StudentData from "./StudentData";
import StudentList from "./StudentList";
import { StudentContext } from "../App";
export default ()=>{
    const {studentList,setStudentList} = useContext(StudentContext)
    let rollInput = useRef();
    let nameInput = useRef();
    let emailInput = useRef();
    let cityInput = useRef();
    let branchInput = useRef();
    let physicInput = useRef();
    let chemistryInput = useRef();
    let mathInput = useRef();    
    const [rollNumberError,setRollNumberError] = useState(null);
    const [emailError,setEmailError] = useState(null);

    const isRollNumberExist = ()=>{
        let roll = rollInput.current.value;
        let student = studentList.find((student)=>{return student.roll == roll});
        if(student){
          setRollNumberError("Roll number already exist");
          rollInput.current.focus();
        }  
        else
          setRollNumberError("");  
    }
    const isEmailExist = ()=>{
        let email = emailInput.current.value;
        let student = studentList.find((student)=>{return student.email == email});
        if(student){
          setEmailError("Email id already exist");
          emailInput.current.focus();
        }  
        else
          setEmailError("");  
    }
    
    const addNewStudent = ({roll,name,email,city,branch,physic,chemistry,math})=>{
        studentList.push({roll,name,email,city,branch,physic,chemistry,math});
        setStudentList([...studentList]);
    }
    return <>
       <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
                <label>Enter roll number</label>
                <input onBlur={isRollNumberExist} ref={rollInput} type="text" className="form-control"/>
                {rollNumberError && <small className="text-danger">{rollNumberError}</small>}
            </div>
            <div className="col-md-4">
                <label>Enter name</label>
                <input ref={nameInput} type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter email</label>
                <input onBlur={isEmailExist} ref={emailInput} type="email" className="form-control"/>
                {emailError && <small className="text-danger">{emailError}</small>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <label>Curent city</label>
                <select ref={cityInput} className="form-control">
                    <option value='0'>select city</option>
                    <option value="Indore">Indore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Branch</label>
                <select ref={branchInput} className="form-control">
                    <option value='0'>select branch</option>
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="EC">EC</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Physics Marks</label>
                <input ref={physicInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Chemistry Marks</label>
                <input ref={chemistryInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Math marks</label>
                <input ref={mathInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4 p-4">
              <button onClick={()=>addNewStudent({roll: rollInput.current.value,name: nameInput.current.value,email: emailInput.current.value,city: cityInput.current.value,branch: branchInput.current.value,physic: physicInput.current.value,chemistry: chemistryInput.current.value,math: mathInput.current.value})} className="btn btn-success">ADD</button>
            </div>
          </div>
       </div>
       <StudentList/>      
    </>
}