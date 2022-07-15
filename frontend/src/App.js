
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome";

import Form from "./Components/Form";
import { useNavigate } from "react-router-dom";
function App() {

  return (
    <div  className="App">
     
      <Router>
      <div style={{position:'absolute',backgroundColor:'white',border:'none',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:'40vw',padding:'10px',height:'fit-content'}}>
        <Form/>
        </div>
        <Routes>
        <Route path="/auth" exact element={<Welcome/>}/>
        
      </Routes>
      
      
      </Router>
      
    </div>
  );
}

export default App;
