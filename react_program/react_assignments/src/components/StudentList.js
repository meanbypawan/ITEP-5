import { useNavigate } from "react-router-dom"

export default ({studentList})=>{
  const navigate = useNavigate();
    
  const navigateToEditComponent = (index)=>{
    navigate("/edit",{state:{index,studentList}});
  }  
  return <>
    <div className="container mt-4">
         <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Roll number</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Branch</th>
                    <th>Physic</th>
                    <th>Chemistry</th>
                    <th>Math</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {studentList?.map((student,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{student.roll}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.city}</td>
                    <td>{student.branch}</td>
                    <td>{student.physic}</td>
                    <td>{student.chemistry}</td>
                    <td>{student.math}</td>
                    <td>
                        <button onClick={()=>navigateToEditComponent(index)} className="btn btn-outline-primary">Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>)}
            </tbody>
         </table>
       </div>
  </>
}
