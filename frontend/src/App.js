
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome";
import { useNavigate } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/auth" element={Welcome}></Route>
   
      </Routes>
      <Link  to="/me" style={{backgroundColor:'blue',color:'white',padding:'10px',border:'none',borderRadius:'10px',cursor:'pointer'}}>
        login
      </Link>
      
      </Router>
      
    </div>
  );
}

export default App;
