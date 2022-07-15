import React from 'react'
import { useState,useEffect } from 'react'
const Form = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const register=async()=>{
        console.log(email);
        console.log(password);
        const response=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
    
        });
        
        console.log(response);
    }
    return (
        <div>
            <div style={{marginTop:'5vh'}} className="form-floating mb-3">
                <input type="email" class="form-control" onChange={(e)=>{
                    setEmail(e.target.value);
                }} id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" class="form-control" onChange={(e)=>{
                   setPassword(e.target.value);
                }}  id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div style={{margin:'50px',marginLeft:'100px'}}>
            <button type="button" className="btn btn-success" onClick={register}>Sign-In</button>
            <button style={{marginLeft:'30px'}}type="button" className="btn btn-danger">Login</button>
            </div>
        </div>
    )
}

export default Form