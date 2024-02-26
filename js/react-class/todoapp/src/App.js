import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Data from './Data';
class App extends Component{
  constructor(){
    super();
    this.state = {
      taskList: Data,
      priorityList: [{priorityId: 1, priorityValue:'Low'},{priorityId: 2, priorityValue:'Medium'},{priorityId: 3, priorityValue:'High'}],
      defaultStatus: "active"
    }
  }
  addTask  = ()=>{
    let title = this.title.value;
    let pid = this.priority.value;
    let id = Date.now();
    let status = "active";
    let date = new Date();
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

    let newTask = {id,pid,title,status,date};
    this.setState({taskList: [...this.state.taskList,newTask]});
  }
  render(){
    return <>
       <div style={{height:'50px'}} className="bg-danger d-flex align-items-center justify-content-center">
          <h5 className="text-white text-center">ToDoApp</h5>
       </div>
       <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <input ref={(titleInput)=>this.title=titleInput} type='text' placeholder='Task title' className="form-control"/>
          </div>
          <div className="col-md-6">
            <select ref={(priorityInput)=>this.priority=priorityInput} className="form-control">
              {this.state.priorityList.map((priorityObj,index)=><option value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
            </select>
          </div>
          <div className="col-12 mt-3">
            <button onClick={this.addTask} className="btn btn-success">ADD</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
          <button disabled={this.state.defaultStatus=='active'?true:false} onClick={()=>this.setState({defaultStatus:"active"})} className="btn btn-info">Active ({this.state.taskList.filter((task)=>task.status=='active').length})</button>

          <button disabled={this.state.defaultStatus=='deactive'?true:false}onClick={()=>this.setState({defaultStatus: 'deactive'})} className="btn btn-warning ml-2">Deactive ({this.state.taskList.filter((task)=>task.status=="deactive").length})</button>
         </div>
        </div>
       </div>
       <div className="container mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Created Date</th>
                <th>Priority</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
               {this.state.taskList.filter((task)=>task.status==this.state.defaultStatus).map((task,index)=><tr>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{this.state.priorityList.find((priorityObj)=>{return priorityObj.priorityId==task.pid}).priorityValue}</td>
                <td><button className="btn btn-danger">Deactive</button></td>
               </tr>)}
            </tbody>
          </table>
       </div>
    </>
  }
}
export default App;
