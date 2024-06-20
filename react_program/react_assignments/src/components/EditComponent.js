import { useLocation, useNavigate } from "react-router-dom"
import StudentList from "./StudentList";
import { useContext, useRef } from "react";
import { StudentContext } from "../App";

export default ()=>{
    const location = useLocation();
    const {studentList,setStudentList} = useContext(StudentContext);
    const index = location.state.index;
    const student = studentList[index];
    const navigate = useNavigate();
    let rollInput = useRef();
    let nameInput = useRef();
    let emailInput = useRef();
    let cityInput = useRef();
    let branchInput = useRef();
    let physicInput = useRef();
    let chemistryInput = useRef();
    let mathInput = useRef();   
    const updateRecord = ()=>{
        let roll = rollInput.current.value;
        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let city = cityInput.current.value;
        let branch = branchInput.current.value;
        let physic = physicInput.current.value;
        let chemistry = chemistryInput.current.value;
        let math = mathInput.current.value;
        studentList.splice(index,1);
        studentList.splice(index,0,{roll,name,email,city,branch,physic,chemistry,math});
        setStudentList([...studentList]);
        navigate("/");
    }
    return <>
      <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
                <label>Enter roll number</label>
                <input ref={rollInput}  defaultValue={student.roll} type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter name</label>
                <input defaultValue={student.name} ref={nameInput} type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter email</label>
                <input defaultValue={student.email} ref={emailInput} type="email" className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <label>Curent city</label>
                <select ref={cityInput} className="form-control">
                    <option value='0'>select city</option>
                    <option value="Indore" selected={student.city=="Indore"}>Indore</option>
                    <option value="Mumbai" selected={student.city=="Mumbai"}>Mumbai</option>
                    <option value="Delhi" selected={student.city=="Delhi"}>Delhi</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Branch</label>
                <select ref={branchInput} className="form-control">
                    <option value='0'>select branch</option>
                    <option value="CS" selected={student.branch=="CS"}>CS</option>
                    <option value="IT" selected={student.branch=="IT"}>IT</option>
                    <option value="EC" selected={student.branch=="EC"}>EC</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Physics Marks</label>
                <input defaultValue={student.physic} ref={physicInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Chemistry Marks</label>
                <input defaultValue={student.chemistry} ref={chemistryInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Math marks</label>
                <input defaultValue={student.math} ref={mathInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4 p-4">
              <button onClick={updateRecord} className="btn btn-primary">Udpate</button>
            </div>
          </div>
       </div>
      <StudentList/>
    </>
}