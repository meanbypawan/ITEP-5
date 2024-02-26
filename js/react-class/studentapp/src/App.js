import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import data from './Data';
import StudentList from './components/StudentList';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: data,
      defaultBranch: "all"
    }
  }
  updateBranch = (branch)=>{
    this.setState({defaultBranch: branch});
  }
  addNewRecord = (roll,name,branch,mobile)=>{ // Synthetic Even Object
    let newStudent = {roll, name, branch,mobile};
    this.setState({studentList: [...this.state.studentList,newStudent]});
    window.alert("called.....");
  }
  deleteRecord = (roll)=>{
   if(window.confirm("Are you sure ?")){ 
    let index = this.state.studentList.findIndex((student)=>student.roll == roll);
    this.state.studentList.splice(index,1);
    this.setState({studentList: [...this.state.studentList]});
   }
  }
  render() {
    return <>
        <Header/>
        <AddStudent addNewRecord={this.addNewRecord} studentList={this.state.studentList} updateBranch = {this.updateBranch}/>  
        <div className="container mt-5">
          <StudentList studentList={this.state.studentList} defaultBranch={this.state.defaultBranch} deleteRecord = {this.deleteRecord}/>
        </div>
    </>
  }
}
export default App;









