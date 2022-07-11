
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome";
import Landing from "./Components/Landing";
import { useNavigate } from "react-router-dom";
function App() {

  return (
    <div className="App">
     
      <Router>
        
        <Landing/>
        <Routes>
        <Route path="/auth" exact element={<Welcome/>}/>
        
      </Routes>
      
      
      </Router>
      
    </div>
  );
}

export default App;
