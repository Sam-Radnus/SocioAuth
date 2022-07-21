import { createContext, useState, useEffect, Children } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const AuthContext=createContext();
export default AuthContext;

export const AuthProvider=({children})=>{
    let [authTokens,setAuthTokens]=useState(()=>localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authTokens')):null)
    let [user,setUser]=useState(()=>localStorage.getItem('authTokens')?jwt_decode(localStorage.getItem('authTokens')):null)
    let [loading,setLoading]=useState(true);
    const navigate=useNavigate();
    let loginUser=async(e)=>{
        let response=await fetch('http://127.0.0.1:8000/api/login/',{
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
            },
            body:JSON.stringify({
                'username':e.target.username.value,
                'password':e.target.password.value
            })
            
        })
        let data=await response.json();
        if(response.status===200)
        {
            setAuthTokens(data);
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data));
            navigate('/auth');
        }else{
            alert("Login UnSuccessful");
        }

    }

}