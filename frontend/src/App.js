
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome";
import { AuthProvider } from "./Context/AuthContext";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
function App() {

  return (
    <div  className="App">
     
      <Router>
      
        <Navbar/>
    
      
        <Routes>
        <Route path="/" exact element={<Welcome/>}/>
        <Route path="/login/" exact element={<Login/>}/>
        <Route path="/register/" exact element={<Form/>}/>
        <Route path="/auth" exact element={<Dashboard/>}/>
        
      </Routes>
      
     
      </Router>
       
      </div>
  );
}

export default App;
