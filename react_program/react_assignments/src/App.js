import logo from './logo.svg';
import './App.css';
import { IncrementDecrement } from './components/IncrementDecrement';
import FriendList from './components/FriendList';
import StudentRecord from './components/StudentRecord';
import { Route, Routes } from 'react-router-dom';
import EditComponent from './components/EditComponent';
import { createContext } from 'react';
import StudentData from './components/StudentData';
export const StudentContext = createContext();
  
function App() {
  return <>
     {/* <IncrementDecrement/> */}
     {/* <FriendList/> */}
     <StudentContext.Provider value={{studentList: StudentData}}>
      
     <Routes>
      <Route path='/' element={<StudentRecord/>}/>
      <Route path='/edit' element={<EditComponent/>}/>
     </Routes>
     </StudentContext.Provider>
  </>
}

export default App;
