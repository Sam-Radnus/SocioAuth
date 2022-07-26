import React from 'react'
import { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
const Dashboard = () => {
  const {authTokens}=useContext(AuthContext);
  const navigate=useNavigate();
  useEffect(()=>{
     if(authTokens===null)
     {
       console.log('hi');
       navigate('/');
     }
  },[])
  return (
    <h1>Dashboard</h1>
     )
}

export default Dashboard