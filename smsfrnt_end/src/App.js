import AddStudentComponent from "./Components/AddStudentComponent";
// import FooterComponent from "./Components/footerComponent";
import HeaderComponent from "./Components/HeaderComponent";
// import ListStudentComponent from "./Components/ListStudent";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import ListStudent from "./Components/ListStudent";
import {Login} from "./Login";
import { Registration } from "./Registration";
import React, {useState} from "react";


function App() {

  //login 
  // const[currentForm,setCurrentForm]=useState('login');
  // const toggleForm = (formName) => {
  //     setCurrentForm(formName);
    
  // }
  return (
    
      <BrowserRouter>
      <div className="container">
      <HeaderComponent/> 
      {'\n'} 

      {/* {
        currentForm ==="login" ? <Login onFormSwitch={toggleForm}/> : <Registration onFormSwitch={toggleForm}/>
      }  */}
      


      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Registration/>}/> */}
        <Route path="/" element={<ListStudent/>}/>
        <Route path="/student" element={<ListStudent/>}/>
        <Route path="/add-student" element={<AddStudentComponent/>}/>
        <Route path="/add-student/:id" element={<AddStudentComponent/>}/> 
        </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
