import logo from './logo.svg';
import './App.css';
import { IncrementDecrement } from './components/IncrementDecrement';
import FriendList from './components/FriendList';
import StudentRecord from './components/StudentRecord';
import { Route, Routes } from 'react-router-dom';
import EditComponent from './components/EditComponent';
import { createContext, useState } from 'react';
import StudentData from './components/StudentData';
import SliderComponent from './components/SliderComponent';
export const StudentContext = createContext();
  
function App() {
  const [studentList,setStudentList] = useState(StudentData);
  return <>
     {/* <IncrementDecrement/> */}
     {/* <FriendList/> */}
     
     {/* <StudentContext.Provider value={{studentList,setStudentList}}>
      
     <Routes>
      <Route path='/' element={<StudentRecord/>}/>
      <Route path='/edit' element={<EditComponent/>}/>
     </Routes>
     </StudentContext.Provider> */}
     <SliderComponent/>
  </>
}

export default App;
