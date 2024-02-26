import { Component } from "react";

export default class StudentList extends Component{
    render(){
        const {studentList,defaultBranch, deleteRecord} = this.props;
        console.log(this.props);
        return <>
         <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Roll number</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Mobile</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {studentList.filter((student)=>student.branch == defaultBranch || defaultBranch == "all").map((student, index) => <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.mobile}</td>
                <td><button onClick={()=>deleteRecord(student.roll)} className="btn btn-outline-danger">Delete</button></td>
              </tr>)}
            </tbody>
          </table>
        </>
    }
}