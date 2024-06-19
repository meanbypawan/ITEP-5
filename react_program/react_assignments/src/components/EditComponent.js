import { useLocation } from "react-router-dom"
import StudentList from "./StudentList";
import { useRef } from "react";

export default ()=>{
    const location = useLocation();
    const studentList = location.state.studentList;
    const index = location.state.index;
    const student = studentList[index];
    console.log(index);
    console.log(studentList);  
    let rollInput = useRef();
    let nameInput = useRef();
    let emailInput = useRef();
    let cityInput = useRef();
    let branchInput = useRef();
    let physicInput = useRef();
    let chemistryInput = useRef();
    let mathInput = useRef();   
    return <>
      <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
                <label>Enter roll number</label>
                <input ref={rollInput}  value={student.roll} type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter name</label>
                <input value={student.name} ref={nameInput} type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter email</label>
                <input value={student.email} ref={emailInput} type="email" className="form-control"/>
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
                <input value={student.physic} ref={physicInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Chemistry Marks</label>
                <input value={student.chemistry} ref={chemistryInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Math marks</label>
                <input value={student.math} ref={mathInput} type="number" className="form-control"/>
            </div>
            <div className="col-md-4 p-4">
              <button  className="btn btn-primary">Udpate</button>
            </div>
          </div>
       </div>
      <StudentList studentList={studentList}/>
    </>
}