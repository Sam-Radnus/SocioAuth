
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome";
import { AuthProvider } from "./Context/AuthContext";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Utils/PrivateRoute";
function App() {
  const navigate=useNavigate();
 
  return (
   
      
    <div  className="App">
    
  
     
        <Navbar/>
    
      
        <Routes>
        <Route exact path="/"  element={<Welcome/>}/>
        <Route exact path="/login/"  element={<Login/>}/>
        <Route exact path="/register/"  element={<Form/>}/>
        <Route element={<PrivateRoute/>}>
           <Route exact path={`/auth`}  element={<Dashboard/>}/>
        </Route>
      </Routes>
      
      
   
    
      </div>
     
  );
}

export default App;
