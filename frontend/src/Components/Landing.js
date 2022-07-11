import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate=useNavigate();
  return (
    <button onClick={async()=>{
         let response=await fetch('/hi');
         let data=await response.json();
         console.log(data.MSG);
         window.location.href=data.MSG;
    }}>Landing</button>
    
  )
}

export default Landing